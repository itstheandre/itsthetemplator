export const errorNoString = "Template must be added";
export const errorPair = "Template Wrapper must be in a pair";
export const error4Char = "Template Wrapper must be, at least, 4 characters";
export const errorCurly =
  "Please make sure you ONLY use curly brackets on the wrapper";
export const mainError = "No main string provided";
export const errorIsNotString = (str?: string) => {
  if (typeof str !== "string") {
    return `The value you provided must be a string`;
  }
  return `The ${str} is not a string`;
};
