import { makeRegexWithTemplate } from "../../src/utils";

describe("Regexer", () => {
  describe("failure state", () => {
    it("throws if no string", () => {
      // @ts-expect-error
      expect(() => makeRegexWithTemplate()).toThrowError();
    });
    it("throws if not paired template", () => {
      expect(() => makeRegexWithTemplate("1")).toThrowError(
        "Template syntax must be symetrical"
      );
    });
  });
  // it("adds escapes and ")
});
