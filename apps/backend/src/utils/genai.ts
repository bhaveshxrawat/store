import { Type } from "@google/genai";
import { FileReader } from "filereader";
import { ai } from "@/lib/gemini";

export async function checksForNSFW(
	image: File,
	productName: string,
	productDescription: string,
): Promise<{ isSafe: boolean; reason: string }> {
	function readFileAsBase64(
		file: File,
	): Promise<{ base64: string; mimeType: string }> {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onloadend = () => {
				const result = reader.result as string;
				const base64 = result.split(",")[1];
				resolve({ base64, mimeType: file.type });
			};
			reader.onerror = reject;
			reader.readAsDataURL(file);
		});
	}

	const { base64, mimeType } = await readFileAsBase64(image);

	const config = {
		thinkingConfig: {
			thinkingBudget: 0,
		},
		responseMimeType: "application/json",
		systemInstruction: [
			{
				text: `You are a content safety classifier helping moderate product submissions for a playful and absurd online store called "Chaotic Kirana."
Each product has a:

- Name (string)
- Description (string)
- Image (base64)

Your goal is to detect and flag any product submission that:

- Contains or promotes hate speech, racism, sexism, bigotry, or any discriminatory language
- Includes NSFW (Not Safe For Work) content such as explicit nudity, graphic violence, or sexually suggestive material
- Encourages violence, terrorism, or illegal activity

Do not flag content just because it is absurd, surreal, or nonsensical — that is expected and encouraged.`,
			},
		],
		responseSchema: {
			type: Type.OBJECT,
			required: ["isSafe", "reason"],
			properties: {
				isSafe: {
					type: Type.BOOLEAN,
				},
				reason: {
					type: Type.STRING,
				},
			},
		},
	};

	const contents = [
		{
			inlineData: {
				mimeType,
				data: base64,
			},
		},
		{
			text: `
Please evaluate the following product submission:

- Name: ${productName}
- Description: ${productDescription}
- Image: "refer to the inlineData above"

Determine if this content is safe to display publicly, considering all the fields (including the image). Flag only if there is truly harmful, offensive, or NSFW content.
      `.trim(),
		},
	];

	const response = await ai.models.generateContent({
		model: "gemini-2.5-flash",
		contents,
		config,
	});
	return JSON.parse(
		response.data ??
			`{
      isSafe: false,
      reason: "Moderation failed.",
    }`,
	);
}
