import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

export const ai = new GoogleGenAI({
	// biome-ignore lint/style/noNonNullAssertion: gemini
	apiKey: process.env.GEMINI_API_KEY!,
});
