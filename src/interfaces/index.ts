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
  vars?: Vars;
  /**
   * @default {{}}
   * @example
   * wrapper = "{{{}}}"
   */
  wrapper?: string;
  /**
   * @default false
   * if you wish to escape the `\\`
   * @example
   * escape: true
   * itsTheTemplator({str:"{\\{name}\\}"}, vars:{name:"André", escape: true}) = `{{name}}`
   */
  escape?: boolean;
}

export type Vars = Record<string, string>;
