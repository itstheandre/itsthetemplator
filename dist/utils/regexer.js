"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRegexWithTemplate = void 0;
function makeRegexWithTemplate(str) {
    if (!str) {
        throw new Error("Template must be added");
    }
    if (str.length % 2 !== 0) {
        throw new Error("Template syntax must be symetrical");
    }
    const baseRegex = str.split("").map((e) => `\\${e}`);
    baseRegex.splice(baseRegex.length / 2, 0, "|");
    return baseRegex.join("");
}
exports.makeRegexWithTemplate = makeRegexWithTemplate;
//# sourceMappingURL=regexer.js.map