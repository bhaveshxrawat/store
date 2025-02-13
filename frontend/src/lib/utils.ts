type Input = string;


export function pcn(...inputs:Input[]): string {
  return inputs.filter(Boolean).join(' ');
}