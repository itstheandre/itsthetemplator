import {
  makeRegexWithTemplate,
  errorNoString,
  errorPair,
  error4Char,
  errorCurly,
} from "../../src/utils";

describe("Regexer", () => {
  it("is a function", () => {
    expect(typeof makeRegexWithTemplate).toBe("function");
  });
  describe("Failure state", () => {
    it("In case of no template", () => {
      // @ts-expect-error
      expect(() => makeRegexWithTemplate()).toThrowError(errorNoString);
    });
    it("In case of not paired template", () => {
      expect(() => makeRegexWithTemplate("{{{{{")).toThrowError(errorPair);
    });
    it("In case of smaller than 4 chars", () => {
      expect(() => makeRegexWithTemplate("1")).toThrowError(error4Char);
    });
    it("In case no pairs", () => {
      expect(() => makeRegexWithTemplate("12345")).toThrowError(errorPair);
    });
    describe("In case of no curly brackets", () => {
      it("In case of NO curly", () => {
        expect(() => makeRegexWithTemplate("[[]]")).toThrowError(errorCurly);
      });
      it("In case of Curly Brackets AND something else", () => {
        expect(() => makeRegexWithTemplate("[{]}[{{}")).toThrowError(
          errorCurly
        );
      });
    });
  });

  describe("Success state", () => {
    const m = (s: string) => makeRegexWithTemplate(s);
    it("Works with 4", () => {
      expect(m("{{}}")).toBe("\\{\\{|\\}\\}");
    });
    it("Works with 6", () => {
      expect(m("{{{}}}")).toBe("\\{\\{\\{|\\}\\}\\}");
    });
    it("Works with 6 with always the same curly", () => {
      expect(m("{{{{")).toBe("\\{\\{|\\{\\{");
    });
  });
});
