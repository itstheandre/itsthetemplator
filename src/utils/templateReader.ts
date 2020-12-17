import { ITemplateReader } from "../interfaces";
import { mainError } from "./error.message";
import { parser } from "./parser";
import { makeRegexWithTemplate } from "./regexer";

export function templateReader(args: ITemplateReader) {
  const { str, vars = {}, wrapper = "{{}}" } = args;
  if (!str) {
    throw new Error(mainError);
  }

  const tokens = str.split(new RegExp(makeRegexWithTemplate(wrapper)));
  const res = tokens.map(parser(vars));
  return res.join("");
}
