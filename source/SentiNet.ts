import {SentiSynSet} from "./SentiSynSet";
import {PolarityType} from "./PolarityType";
import {XmlElement} from "nlptoolkit-xmlparser/dist/XmlElement";
import {XmlDocument} from "nlptoolkit-xmlparser/dist/XmlDocument";

export class SentiNet {

    private sentiSynSetList: Map<string, SentiSynSet>

    /**
     * Reads the Xml file that contains names of sentiSynSets and their positive, negative scores.
     * @param fileName Xml document that contains the SentiNet.
     */
    private loadSentiNet(fileName: string) {
        var rootNode: XmlElement
        var sentiSynSetNode: XmlElement
        var partNode: XmlElement
        var id: string = ""
        var positiveScore = 0.0, negativeScore = 0.0
        let doc = new XmlDocument(fileName)
        doc.parse()
        rootNode = doc.getFirstChild()
        this.sentiSynSetList = new Map<string, SentiSynSet>()
        sentiSynSetNode = rootNode.getFirstChild()
        while (sentiSynSetNode) {
            partNode = sentiSynSetNode.getFirstChild()
            while (partNode) {
                switch (partNode.getName()){
                    case "ID":
                        id = partNode.getPcData()
                        break;
                    case "PSCORE":
                        positiveScore = Number(partNode.getPcData())
                        break;
                    case "NSCORE":
                        negativeScore = Number(partNode.getPcData())
                        break;
                }
                partNode = partNode.getNextSibling()
            }
            if (id != "") {
                this.sentiSynSetList.set(id, new SentiSynSet(id, positiveScore, negativeScore))
            }
            sentiSynSetNode = sentiSynSetNode.getNextSibling()
            id = ""
            positiveScore = 0.0
            negativeScore = 0.0
        }
    }

    /**
     * Constructor of Turkish SentiNet.SentiNet. Reads the turkish_sentinet.xml file from the resources directory. For each
     * sentiSynSet read, it adds it to the sentiSynSetList.
     */
    constructor(fileName: string = "turkish_sentinet.xml") {
        this.loadSentiNet(fileName)
    }

    /**
     * Accessor for a single SentiNet.SentiSynSet.
     * @param id Id of the searched SentiNet.SentiSynSet.
     * @return SentiNet.SentiSynSet with the given id.
     */
    getSentiSynSet(id: string): SentiSynSet{
        return <SentiSynSet>this.sentiSynSetList.get(id)
    }

    /**
     * Adds specified SentiNet.SentiSynSet to the SentiNet.SentiSynSet list.
     *
     * @param sentiSynSet SentiNet.SentiSynSet to be added
     */
    addSentiSynSet(sentiSynSet: SentiSynSet){
        this.sentiSynSetList.set(sentiSynSet.getId(), sentiSynSet)
    }

    /**
     * Removes specified SentiNet.SentiSynSet from the SentiNet.SentiSynSet list.
     *
     * @param sentiSynSet SentiNet.SentiSynSet to be removed
     */
    removeSynSet(sentiSynSet: SentiSynSet){
        this.sentiSynSetList.delete(sentiSynSet.getId())
    }

    /**
     * Constructs and returns an {@link Array} of ids, which are the ids of the {@link SentiSynSet}s having polarity
     * polarityType.
     * @param polarityType PolarityTypes of the searched {@link SentiSynSet}s
     * @return An {@link Array} of id having polarityType polarityType.
     */
    private getPolarity(polarityType: PolarityType): Array<string>{
        let result : Array<string> = []
        for (let sentiSynSet of this.sentiSynSetList.values()){
            if (sentiSynSet.getPolarity() == polarityType){
                result.push(sentiSynSet.getId())
            }
        }
        return result
    }

    /**
     * Returns the ids of all positive {@link SentiSynSet}s.
     * @return An Array of ids of all positive {@link SentiSynSet}s.
     */
    getPositives(): Array<string>{
        return this.getPolarity(PolarityType.POSITIVE)
    }

    /**
     * Returns the ids of all negative {@link SentiSynSet}s.
     * @return An Array of ids of all negative {@link SentiSynSet}s.
     */
    getNegatives(): Array<string>{
        return this.getPolarity(PolarityType.NEGATIVE)
    }

    /**
     * Returns the ids of all neutral {@link SentiSynSet}s.
     * @return An Array of ids of all neutral {@link SentiSynSet}s.
     */
    getNeutrals(): Array<string>{
        return this.getPolarity(PolarityType.NEUTRAL)
    }

}