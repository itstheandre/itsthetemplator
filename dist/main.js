"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itsTheTemplator = void 0;
const utils_1 = require("./utils");
function itsTheTemplator(arg, vars, wrapper) {
    if (typeof arg === "string") {
        return utils_1.templateReader({ str: arg, vars, wrapper });
    }
    return utils_1.templateReader(arg);
}
exports.itsTheTemplator = itsTheTemplator;
