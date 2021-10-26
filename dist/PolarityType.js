(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PolarityType = void 0;
    var PolarityType;
    (function (PolarityType) {
        PolarityType[PolarityType["POSITIVE"] = 0] = "POSITIVE";
        PolarityType[PolarityType["NEGATIVE"] = 1] = "NEGATIVE";
        PolarityType[PolarityType["NEUTRAL"] = 2] = "NEUTRAL";
    })(PolarityType = exports.PolarityType || (exports.PolarityType = {}));
});
//# sourceMappingURL=PolarityType.js.map