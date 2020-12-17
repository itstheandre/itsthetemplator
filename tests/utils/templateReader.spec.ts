import { templateReader, error4Char, mainError } from "../../src/utils";

describe("template reader", () => {
  const str = "Hello there";
  const obj = { name: "OSS Maintainer" };

  describe("templateReader", () => {
    describe("failure states", () => {
      it("Throws if no string", () => {
        // @ts-expect-error
        expect(() => templateReader({})).toThrowError(mainError);
      });

      it("throws if template is not in pairs", () => {
        expect(() =>
          templateReader({ str: "it string", wrapper: "(" })
        ).toThrowError(error4Char);
      });
    });

    describe("Success States", () => {
      it("Works if no args are passed", () => {
        const str = "Hello there, OSS";
        expect(templateReader({ str })).toBe(str);
      });

      it("Works if you pass data within default template parser", () => {
        expect(templateReader({ str: `${str}, {{name}}`, vars: obj })).toBe(
          "Hello there, OSS Maintainer"
        );
      });

      it("Works with multiple variables", () => {
        expect(
          templateReader({
            str: `${str}, {{name}}, and my username is @{{username}}`,
            vars: { ...obj, username: "itstheandre" },
          })
        ).toBe("Hello there, OSS Maintainer, and my username is @itstheandre");
      });
      describe("Works with different parsers", () => {
        it("triple curlies", () => {
          expect(
            templateReader({
              str: `${str}, {{{name}}}`,
              vars: obj,
              wrapper: "{{{}}}",
            })
          ).toBe("Hello there, OSS Maintainer");
        });
        it("one sided curlies", () => {
          expect(
            templateReader({
              str: `${str}, {{{name{{{`,
              vars: obj,
              wrapper: "{{{{{{",
            })
          ).toBe("Hello there, OSS Maintainer");
        });
      });
    });
  });
});
