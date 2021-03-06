import { parser } from "../../src/utils";

describe("Parse function", () => {
  test("it is a function and it returns a function", () => {
    expect(parser({ test: "andre" })).toBeDefined();

    expect(typeof parser).toBe("function");
    expect(typeof parser({ vars: "" })).toBe("function");
  });

  it("it will transform according to vars", () => {
    const mapper = parser({ var: "André" });
    expect(mapper("string", 0)).toBe("string");
    expect(mapper("var", 1)).toEqual("André");
  });
});
