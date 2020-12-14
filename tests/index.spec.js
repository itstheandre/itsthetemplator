const { default: templator, itsTheTemplator } = require("../dist");

describe("The main function", () => {
  it("both default and named functions work", () => {
    expect(templator).toStrictEqual(itsTheTemplator);
  });

  it("works if object is passed", () => {
    expect(() =>
      templator({ str: "Hello there, {{name}}", vars: { name: "André" } })
    ).not.toThrow();
    expect(
      templator({ str: "Hello there, {{name}}", vars: { name: "André" } })
    ).toEqual("Hello there, André");
  });

  it("works if passed by ordered arguments", () => {
    expect(() =>
      itsTheTemplator("Hello there, {{name}}", { name: "André" })
    ).not.toThrow();
  });
});
