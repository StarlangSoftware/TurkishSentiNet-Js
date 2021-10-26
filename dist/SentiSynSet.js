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
    exports.SentiSynSet = void 0;
    const PolarityType_1 = require("./PolarityType");
    class SentiSynSet {
        /**
         * Constructor of SentiNet.SentiSynSet. Gets input id, positiveScore, negativeScore and sets all corresponding attributes.
         * @param id Id of the SentiNet.SentiSynSet.
         * @param positiveScore Positive score of the SentiNet.SentiSynSet.
         * @param negativeScore Negative score of the SentiNet.SentiSynSet.
         */
        constructor(id, positiveScore, negativeScore) {
            this.id = id;
            this.positiveScore = positiveScore;
            this.negativeScore = negativeScore;
        }
        /**
         * Accessor for the positiveScore attribute.
         * @return PositiveScore of the SentiNet.SentiSynSet.
         */
        getPositiveScore() {
            return this.positiveScore;
        }
        /**
         * Accessor for the negativeScore attribute.
         * @return NegativeScore of the SentiNet.SentiSynSet.
         */
        getNegativeScore() {
            return this.negativeScore;
        }
        /**
         * Returns the polarityType of the sentiSynSet. If the positive score is larger than the negative score, the polarity is
         * positive; if the negative score is larger than the positive score, the polarity is negative; if both positive
         * score and negative score are equal, the polarity is neutral.
         * @return SentiNet.PolarityType of the sentiSynSet.
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
         * Accessor for the id attribute.
         * @return Id of the SentiNet.SentiSynSet.
         */
        getId() {
            return this.id;
        }
    }
    exports.SentiSynSet = SentiSynSet;
});
//# sourceMappingURL=SentiSynSet.js.map