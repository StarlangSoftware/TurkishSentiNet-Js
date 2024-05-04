import {SentiLiteral} from "./SentiLiteral";
import {XmlElement} from "nlptoolkit-xmlparser/dist/XmlElement";
import {XmlDocument} from "nlptoolkit-xmlparser/dist/XmlDocument";
import {PolarityType} from "./PolarityType";

export class SentiLiteralNet {

    private sentiLiteralList: Map<string, SentiLiteral>

    /**
     * Reads the Xml file that contains names of sentiLiterals and their positive, negative scores.
     * @param fileName Xml document that contains the SentiLiteralNet.
     */
    private loadSentiNet(fileName: string) {
        var rootNode: XmlElement
        var sentiSynSetNode: XmlElement
        var partNode: XmlElement
        var name: string = ""
        var positiveScore = 0.0, negativeScore = 0.0
        let doc = new XmlDocument(fileName)
        doc.parse()
        rootNode = doc.getFirstChild()
        this.sentiLiteralList = new Map<string, SentiLiteral>()
        sentiSynSetNode = rootNode.getFirstChild()
        while (sentiSynSetNode) {
            partNode = sentiSynSetNode.getFirstChild()
            while (partNode) {
                switch (partNode.getName()){
                    case "NAME":
                        name = partNode.getPcData()
                        break
                    case "PSCORE":
                        positiveScore = Number(partNode.getPcData())
                        break
                    case "NSCORE":
                        negativeScore = Number(partNode.getPcData())
                        break
                }
                partNode = partNode.getNextSibling()
            }
            if (name != "") {
                this.sentiLiteralList.set(name, new SentiLiteral(name, positiveScore, negativeScore))
            }
            sentiSynSetNode = sentiSynSetNode.getNextSibling()
            name = ""
            positiveScore = 0.0
            negativeScore = 0.0
        }
    }

    /**
     * Constructor of Turkish SentiNet.SentiNet. Reads the turkish_sentiliteralnet.xml file from the resources directory. For each
     * sentiLiteral read, it adds it to the sentiLiteralList.
     */
    constructor(fileName: string = "turkish_sentiliteralnet.xml") {
        this.loadSentiNet(fileName)
    }

    /**
     * Accessor for a single SentiLiteral.
     * @param name Name of the searched SentiLiteral.
     * @return SentiLiteral with the given id.
     */
    getSentiLiteral(name: string): SentiLiteral{
        return <SentiLiteral>this.sentiLiteralList.get(name)
    }

    /**
     * Constructs and returns an {@link Array} of lemma, which are the lemma of the {@link SentiLiteral}s having polarity
     * polarityType.
     * @param polarityType PolarityTypes of the searched {@link SentiLiteral}s
     * @return An {@link Array} of lemma having polarityType polarityType.
     */
    private getPolarity(polarityType: PolarityType): Array<string>{
        let result : Array<string> = []
        for (let sentiLiteral of this.sentiLiteralList.values()){
            if (sentiLiteral.getPolarity() == polarityType){
                result.push(sentiLiteral.getName())
            }
        }
        return result
    }

    /**
     * Returns the lemmas of all positive {@link SentiLiteral}s.
     * @return An Array of lemmas of all positive {@link SentiLiteral}s.
     */
    getPositives(): Array<string>{
        return this.getPolarity(PolarityType.POSITIVE)
    }

    /**
     * Returns the lemmas of all negative {@link SentiLiteral}s.
     * @return An Array of lemmas of all negative {@link SentiLiteral}s.
     */
    getNegatives(): Array<string>{
        return this.getPolarity(PolarityType.NEGATIVE)
    }

    /**
     * Returns the lemmas of all neutral {@link SentiLiteral}s.
     * @return An Array of lemmas of all neutral {@link SentiLiteral}s.
     */
    getNeutrals(): Array<string>{
        return this.getPolarity(PolarityType.NEUTRAL)
    }

}