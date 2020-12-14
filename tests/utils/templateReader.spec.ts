import { templateReader } from "../../src/utils";

describe("template reader", () => {
  describe("templateReader", () => {
    describe("failure states", () => {
      test("Throws if no string", () => {
        // @ts-expect-error
        expect(() => templateReader({})).toThrowError();
      });

      test("throws if template is not in pairs", () => {
        expect(() =>
          templateReader({ str: "Test string", wrapper: "(" })
        ).toThrowError();
      });
    });

    test("Works if no args are passed", () => {
      const str = "Hello there, OSS";
      expect(templateReader({ str })).toBe(str);
    });

    test("Works if you pass data within default template parser", () => {
      const str = "Hello there, {{name}}";
      const obj = { name: "OSS Maintainer" };
      expect(templateReader({ str, vars: obj })).toBe(
        "Hello there, OSS Maintainer"
      );
    });
  });
});
