(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./SentiSynSet", "./PolarityType", "nlptoolkit-xmlparser/dist/XmlDocument"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SentiNet = void 0;
    const SentiSynSet_1 = require("./SentiSynSet");
    const PolarityType_1 = require("./PolarityType");
    const XmlDocument_1 = require("nlptoolkit-xmlparser/dist/XmlDocument");
    class SentiNet {
        /**
         * Constructor of Turkish SentiNet.SentiNet. Reads the turkish_sentinet.xml file from the resources directory. For each
         * sentiSynSet read, it adds it to the sentiSynSetList.
         */
        constructor(fileName = "turkish_sentinet.xml") {
            this.loadSentiNet(fileName);
        }
        loadSentiNet(fileName) {
            var rootNode;
            var sentiSynSetNode;
            var partNode;
            var id = "";
            var positiveScore = 0.0, negativeScore = 0.0;
            let doc = new XmlDocument_1.XmlDocument(fileName);
            doc.parse();
            rootNode = doc.getFirstChild();
            this.sentiSynSetList = new Map();
            sentiSynSetNode = rootNode.getFirstChild();
            while (sentiSynSetNode) {
                partNode = sentiSynSetNode.getFirstChild();
                while (partNode) {
                    switch (partNode.getName()) {
                        case "ID":
                            id = partNode.getPcData();
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
                if (id != "") {
                    this.sentiSynSetList.set(id, new SentiSynSet_1.SentiSynSet(id, positiveScore, negativeScore));
                }
                sentiSynSetNode = sentiSynSetNode.getNextSibling();
                id = "";
                positiveScore = 0.0;
                negativeScore = 0.0;
            }
        }
        /**
         * Accessor for a single SentiNet.SentiSynSet.
         * @param id Id of the searched SentiNet.SentiSynSet.
         * @return SentiNet.SentiSynSet with the given id.
         */
        getSentiSynSet(id) {
            return this.sentiSynSetList.get(id);
        }
        /**
         * Adds specified SentiNet.SentiSynSet to the SentiNet.SentiSynSet list.
         *
         * @param sentiSynSet SentiNet.SentiSynSet to be added
         */
        addSentiSynSet(sentiSynSet) {
            this.sentiSynSetList.set(sentiSynSet.getId(), sentiSynSet);
        }
        /**
         * Removes specified SentiNet.SentiSynSet from the SentiNet.SentiSynSet list.
         *
         * @param sentiSynSet SentiNet.SentiSynSet to be removed
         */
        removeSynSet(sentiSynSet) {
            this.sentiSynSetList.delete(sentiSynSet.getId());
        }
        /**
         * Constructs and returns an {@link Array} of ids, which are the ids of the {@link SentiSynSet}s having polarity
         * polarityType.
         * @param polarityType PolarityTypes of the searched {@link SentiSynSet}s
         * @return An {@link Array} of id having polarityType polarityType.
         */
        getPolarity(polarityType) {
            let result = [];
            for (let sentiSynSet of this.sentiSynSetList.values()) {
                if (sentiSynSet.getPolarity() == polarityType) {
                    result.push(sentiSynSet.getId());
                }
            }
            return result;
        }
        /**
         * Returns the ids of all positive {@link SentiSynSet}s.
         * @return An Array of ids of all positive {@link SentiSynSet}s.
         */
        getPositives() {
            return this.getPolarity(PolarityType_1.PolarityType.POSITIVE);
        }
        /**
         * Returns the ids of all negative {@link SentiSynSet}s.
         * @return An Array of ids of all negative {@link SentiSynSet}s.
         */
        getNegatives() {
            return this.getPolarity(PolarityType_1.PolarityType.NEGATIVE);
        }
        /**
         * Returns the ids of all neutral {@link SentiSynSet}s.
         * @return An Array of ids of all neutral {@link SentiSynSet}s.
         */
        getNeutrals() {
            return this.getPolarity(PolarityType_1.PolarityType.NEUTRAL);
        }
    }
    exports.SentiNet = SentiNet;
});
//# sourceMappingURL=SentiNet.js.map