import itsTheTemplator from "../src";
import { error4Char, errorCurly } from "../src/utils/error.message";

describe("The main export", () => {
  describe("Failure states", () => {
    it("In case no argument gets passed", () => {
      expect(() =>
        // @ts-expect-error
        itsTheTemplator()
      ).toThrow();
    });

    describe("STR ", () => {
      it("In case no string", () => {
        expect(() => {
          // @ts-expect-error
          itsTheTemplator({ vars: { var: "André", wrapper: "{{}}" } });
        }).toThrowError();
      });

      it("In case of undefined or null string", () => {
        expect(() => {
          // @ts-ignore
          itsTheTemplator(null, null, null);
        }).toThrow();
        expect(() => {
          // @ts-ignore
          itsTheTemplator(undefined);
        }).toThrow();
      });
    });
    describe("WRAPPER", () => {
      const str = "Hello there";
      const vars = { name: "André" };
      it("In case of not at least 4 characters", () => {
        expect(() =>
          itsTheTemplator({ str, vars, wrapper: "{{" })
        ).toThrowError(error4Char);
      });
      it("In case of no curly brackets", () => {
        expect(() =>
          itsTheTemplator({ str, vars, wrapper: "[[]}" })
        ).toThrowError(errorCurly);
        expect(() => itsTheTemplator(str, vars, "[[{}")).toThrowError(
          errorCurly
        );
      });
    });
  });

  describe("Success states", () => {
    it("works if object is passed", () => {
      expect(true).toBeTruthy();
      expect(() =>
        itsTheTemplator({ str: "help", vars: { name: "Andr´∑e" } })
      ).not.toThrow();
    });
    it("works with string constructor", () => {
      expect(() =>
        itsTheTemplator("help", { name: "André" })
      ).not.toThrowError();
      expect(() =>
        itsTheTemplator("Hello there, {{name}}", { name: "André" })
      ).not.toThrow();
    });
  });
});
