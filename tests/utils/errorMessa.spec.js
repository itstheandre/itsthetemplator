const { errorIsNotString } = require("../../dist/utils");

describe("errorIsNotString", () => {
  it("works", () => {
    expect(errorIsNotString()).toBe(`The value you provided must be a string`);
    expect(errorIsNotString("username")).toBe("The username is not a string");
  });
});
