"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function replaceAll(input, search, replacement) {
    if (Array.isArray(search)) {
        search.forEach(function (_search) {
            input = replaceAll(input, _search, replacement);
        });
        return input;
    }
    return input.split(search).join(replacement);
}
exports.default = replaceAll;
