"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateReader = void 0;
const parser_1 = require("./parser");
const regexer_1 = require("./regexer");
function templateReader(args) {
    const { str, vars = {}, wrapper = "{{}}" } = args;
    if (!str) {
        throw new Error("No string provided");
    }
    const tokens = str.split(new RegExp(regexer_1.makeRegexWithTemplate(wrapper)));
    const res = tokens.map(parser_1.parser(vars));
    return res.join("");
}
exports.templateReader = templateReader;
