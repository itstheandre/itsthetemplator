export function makeRegexWithTemplate(str: string): string {
  if (!str) {
    throw new Error("Template must be added");
  }
  if (str.length % 2 !== 0) {
    throw new Error("Template syntax must be symetrical");
  }
  const baseRegex = str.split("").map((e) => `\\${e}`);
  baseRegex.splice(baseRegex.length / 2, 0, "|");

  return baseRegex.join("");
}
