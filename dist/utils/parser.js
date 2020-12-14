"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parser = void 0;
function parser(vars) {
    return (token, i) => {
        if (i % 2 === 0)
            return token;
        return vars[token];
    };
}
exports.parser = parser;
