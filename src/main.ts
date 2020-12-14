import { ITemplateReader, Vars } from "./interfaces";
import { templateReader } from "./utils";

export function itsTheTemplator(args: ITemplateReader): string;
export function itsTheTemplator(
  str: string,
  vars?: Vars,
  wrapper?: string
): string;
export function itsTheTemplator(
  arg: string | ITemplateReader,
  vars?: Vars,
  wrapper?: string
): string {
  if (typeof arg === "string") {
    return templateReader({ str: arg, vars, wrapper });
  }
  return templateReader(arg);
}
