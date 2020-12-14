import { ITemplateReader } from "../interfaces";
import { parser } from "./parser";
import { makeRegexWithTemplate } from "./regexer";

export function templateReader(args: ITemplateReader) {
  const { str, vars = {}, wrapper = "{{}}" } = args;
  if (!str) {
    throw new Error("No string provided");
  }

  const tokens = str.split(new RegExp(makeRegexWithTemplate(wrapper)));
  const res = tokens.map(parser(vars));
  return res.join("");
}
