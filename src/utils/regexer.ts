import {
  error4Char,
  errorCurly,
  errorNoString,
  errorPair,
} from "./error.message";

export function makeRegexWithTemplate(str: string): string {
  if (!str) {
    throw new Error(errorNoString);
  }
  if (str.length < 4) {
    throw new Error(error4Char);
  }
  if (str.length % 2 !== 0) {
    throw new Error(errorPair);
  }

  // if (!str.split("").every((el) => el === "{" || el === "}")) {
  //   throw new Error();
  // }
  if (![...str].every((el) => /{|}/.test(el))) {
    throw new Error(errorCurly);
  }

  const baseRegex = str.split("").map((e) => `\\${e}`);
  baseRegex.splice(baseRegex.length / 2, 0, "|");

  return baseRegex.join("");
}
