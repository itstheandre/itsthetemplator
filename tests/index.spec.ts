import itsTheTemplator from "../src";

describe("The main function", () => {
  it("works if object is passed", () => {
    expect(() =>
      itsTheTemplator({ str: "Hello there, {{name}}", vars: { name: "André" } })
    ).not.toThrow();
    expect(
      itsTheTemplator({ str: "Hello there, {{name}}", vars: { name: "André" } })
    ).toEqual("Hello there, André");
  });

  it("works if passed by ordered arguments", () => {
    expect(() =>
      itsTheTemplator("Hello there, {{name}}", { name: "André" })
    ).not.toThrow();
  });
});
