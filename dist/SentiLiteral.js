(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./PolarityType"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SentiLiteral = void 0;
    const PolarityType_1 = require("./PolarityType");
    class SentiLiteral {
        /**
         * Constructor of SentiLiteral. Gets input literal, positiveScore, negativeScore and sets all corresponding attributes.
         * @param name Name of the literal.
         * @param positiveScore Positive score of the literal.
         * @param negativeScore Negative score of the literal.
         */
        constructor(name, positiveScore, negativeScore) {
            this.name = name;
            this.positiveScore = positiveScore;
            this.negativeScore = negativeScore;
        }
        /**
         * Accessor for the positiveScore attribute.
         * @return PositiveScore of the SentiLiteral.
         */
        getPositiveScore() {
            return this.positiveScore;
        }
        /**
         * Accessor for the negativeScore attribute.
         * @return NegativeScore of the SentiLiteral.
         */
        getNegativeScore() {
            return this.negativeScore;
        }
        /**
         * Returns the polarityType of the literal. If the positive score is larger than the negative score, the polarity is
         * positive; if the negative score is larger than the positive score, the polarity is negative; if both positive
         * score and negative score are equal, the polarity is neutral.
         * @return SentiNet.PolarityType of the literal.
         */
        getPolarity() {
            if (this.positiveScore > this.negativeScore) {
                return PolarityType_1.PolarityType.POSITIVE;
            }
            else {
                if (this.positiveScore < this.negativeScore) {
                    return PolarityType_1.PolarityType.NEGATIVE;
                }
                else {
                    return PolarityType_1.PolarityType.NEUTRAL;
                }
            }
        }
        /**
         * Accessor for the name attribute.
         * @return Name of the SentiLiteral.
         */
        getName() {
            return this.name;
        }
    }
    exports.SentiLiteral = SentiLiteral;
});
//# sourceMappingURL=SentiLiteral.js.map