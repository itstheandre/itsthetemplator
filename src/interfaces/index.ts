/**
 * Hello
 */
export interface ITemplateReader {
  /**
   * The `str` is the template that will be changed
   */
  str: string;
  /**
   * Object structure that it will declare the variables to be substituted int the templates
   */
  vars?: Record<string, string>;
  /**
   * @default {{}}
   * @example
   * wrapper = "[[[]]]"
   * wrapper = "{{{}}}"
   */
  wrapper?: string;
}
