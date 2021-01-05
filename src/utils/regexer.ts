import {
  error4Char,
  errorCurly,
  errorNoString,
  errorPair,
} from "./error.message";

export function makeRegexWithTemplate(wrapper: string): string {
  if (!wrapper) {
    throw new Error(errorNoString);
  }
  if (wrapper.length < 4) {
    throw new Error(error4Char);
  }
  if (wrapper.length % 2 !== 0) {
    throw new Error(errorPair);
  }

  // if (!str.split("").every((el) => el === "{" || el === "}")) {
  //   throw new Error();
  // }
  if (![...wrapper].every((el) => /{|}/.test(el))) {
    throw new Error(errorCurly);
  }

  const baseRegex = wrapper.split("").map((e) => `\\${e}`);
  baseRegex.splice(baseRegex.length / 2, 0, "|");

  return baseRegex.join("");
}
