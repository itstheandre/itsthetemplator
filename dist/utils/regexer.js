"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRegexWithTemplate = void 0;
const error_message_1 = require("./error.message");
function makeRegexWithTemplate(str) {
    if (!str) {
        throw new Error(error_message_1.errorNoString);
    }
    if (str.length < 4) {
        throw new Error(error_message_1.error4Char);
    }
    if (str.length % 2 !== 0) {
        throw new Error(error_message_1.errorPair);
    }
    if (![...str].every((el) => /{|}/.test(el))) {
        throw new Error(error_message_1.errorCurly);
    }
    const baseRegex = str.split("").map((e) => `\\${e}`);
    baseRegex.splice(baseRegex.length / 2, 0, "|");
    return baseRegex.join("");
}
exports.makeRegexWithTemplate = makeRegexWithTemplate;
//# sourceMappingURL=regexer.js.map