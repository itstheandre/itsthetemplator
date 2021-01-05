export interface ITemplateReader {
  /**
   * The `str` is the template that will be changed
   */
  str: string;
  /**
   * Object structure that it will declare the variables to be substituted int the templates
   */
  vars?: Vars;
  /**
   * @default {{}}
   * @example
   * wrapper = "{{{}}}"
   */
  wrapper?: string;
  /**
   * @default false
   * @description for every character you wish to escape, you must always pass a double slash `\\` between the characters you wish to escape.
   * Until i figure out how to add on the two sides of the wrapper, please remember to always add two double slashes to the wrapper
   * 👇 for an example
   * if you wish to escape the `\\`
   * @example
   * escape: true
   * itsTheTemplator({
   *  str:"{\\{name}\\}"},
   *  vars:{name:"André", escape: true})
   * =  `{{name}}`
   */
  escape?: boolean;
}

export type Vars = Record<string, string>;
