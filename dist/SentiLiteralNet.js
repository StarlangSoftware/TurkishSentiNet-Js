(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./SentiLiteral", "nlptoolkit-xmlparser/dist/XmlDocument", "./PolarityType"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SentiLiteralNet = void 0;
    const SentiLiteral_1 = require("./SentiLiteral");
    const XmlDocument_1 = require("nlptoolkit-xmlparser/dist/XmlDocument");
    const PolarityType_1 = require("./PolarityType");
    class SentiLiteralNet {
        /**
         * Constructor of Turkish SentiNet.SentiNet. Reads the turkish_sentiliteralnet.xml file from the resources directory. For each
         * sentiLiteral read, it adds it to the sentiLiteralList.
         */
        constructor(fileName = "turkish_sentiliteralnet.xml") {
            this.loadSentiNet(fileName);
        }
        loadSentiNet(fileName) {
            var rootNode;
            var sentiSynSetNode;
            var partNode;
            var name = "";
            var positiveScore = 0.0, negativeScore = 0.0;
            let doc = new XmlDocument_1.XmlDocument(fileName);
            doc.parse();
            rootNode = doc.getFirstChild();
            this.sentiLiteralList = new Map();
            sentiSynSetNode = rootNode.getFirstChild();
            while (sentiSynSetNode) {
                partNode = sentiSynSetNode.getFirstChild();
                while (partNode) {
                    switch (partNode.getName()) {
                        case "NAME":
                            name = partNode.getPcData();
                            break;
                        case "PSCORE":
                            positiveScore = Number(partNode.getPcData());
                            break;
                        case "NSCORE":
                            negativeScore = Number(partNode.getPcData());
                            break;
                    }
                    partNode = partNode.getNextSibling();
                }
                if (name != "") {
                    this.sentiLiteralList.set(name, new SentiLiteral_1.SentiLiteral(name, positiveScore, negativeScore));
                }
                sentiSynSetNode = sentiSynSetNode.getNextSibling();
                name = "";
                positiveScore = 0.0;
                negativeScore = 0.0;
            }
        }
        /**
         * Accessor for a single SentiLiteral.
         * @param name Name of the searched SentiLiteral.
         * @return SentiLiteral with the given id.
         */
        getSentiLiteral(name) {
            return this.sentiLiteralList.get(name);
        }
        /**
         * Constructs and returns an {@link Array} of lemma, which are the lemma of the {@link SentiLiteral}s having polarity
         * polarityType.
         * @param polarityType PolarityTypes of the searched {@link SentiLiteral}s
         * @return An {@link Array} of lemma having polarityType polarityType.
         */
        getPolarity(polarityType) {
            let result = [];
            for (let sentiLiteral of this.sentiLiteralList.values()) {
                if (sentiLiteral.getPolarity() == polarityType) {
                    result.push(sentiLiteral.getName());
                }
            }
            return result;
        }
        /**
         * Returns the lemmas of all positive {@link SentiLiteral}s.
         * @return An Array of lemmas of all positive {@link SentiLiteral}s.
         */
        getPositives() {
            return this.getPolarity(PolarityType_1.PolarityType.POSITIVE);
        }
        /**
         * Returns the lemmas of all negative {@link SentiLiteral}s.
         * @return An Array of lemmas of all negative {@link SentiLiteral}s.
         */
        getNegatives() {
            return this.getPolarity(PolarityType_1.PolarityType.NEGATIVE);
        }
        /**
         * Returns the lemmas of all neutral {@link SentiLiteral}s.
         * @return An Array of lemmas of all neutral {@link SentiLiteral}s.
         */
        getNeutrals() {
            return this.getPolarity(PolarityType_1.PolarityType.NEUTRAL);
        }
    }
    exports.SentiLiteralNet = SentiLiteralNet;
});
//# sourceMappingURL=SentiLiteralNet.js.map