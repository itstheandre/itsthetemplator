const itsTheTemplator = require("../dist");

describe("The main export", () => {
  describe("Failure states", () => {
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
