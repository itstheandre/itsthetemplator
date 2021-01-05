import { ITemplateReader } from "../interfaces";
import { errorIsNotString, mainError } from "./error.message";
import { parser } from "./parser";
import { makeRegexWithTemplate } from "./regexer";

export function templateReader(args: ITemplateReader) {
  const { str, vars = {}, wrapper: wrapping, escape = false } = args;
  const wrapper = wrapping ?? "{{}}";

  if (!str) {
    throw new Error(mainError);
  }

  if (typeof str !== "string") {
    throw new Error(errorIsNotString("main string"));
  }
  if (typeof wrapper !== "string") {
    throw new Error(errorIsNotString("wrapper you passed"));
  }

  const tokens = str.split(new RegExp(makeRegexWithTemplate(wrapper)));
  const res = tokens.map(parser(vars));
  const joined = res.join("");
  if (escape) {
    return joined.replace(/\\/g, "");
  }
  return joined;
}
