"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateReader = void 0;
const utils_1 = require("./utils");
function templateReader(args) {
    const { str, vars = {}, wrapper = "{{}}" } = args;
    if (!str) {
        throw new Error("No string provided");
    }
    const tokens = str.split(new RegExp(utils_1.makeRegexWithTemplate(wrapper)));
    const res = tokens.map(utils_1.parser(vars));
    return res.join("");
}
exports.templateReader = templateReader;
exports.default = templateReader;
