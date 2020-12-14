export function parser(vars: Record<string, string>) {
  return (token: string, i: number) => {
    if (i % 2 === 0) return token;
    return vars[token];
  };
}
