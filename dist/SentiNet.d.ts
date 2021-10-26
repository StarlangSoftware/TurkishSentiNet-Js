import { SentiSynSet } from "./SentiSynSet";
export declare class SentiNet {
    private sentiSynSetList;
    private loadSentiNet;
    /**
     * Constructor of Turkish SentiNet.SentiNet. Reads the turkish_sentinet.xml file from the resources directory. For each
     * sentiSynSet read, it adds it to the sentiSynSetList.
     */
    constructor(fileName?: string);
    /**
     * Accessor for a single SentiNet.SentiSynSet.
     * @param id Id of the searched SentiNet.SentiSynSet.
     * @return SentiNet.SentiSynSet with the given id.
     */
    getSentiSynSet(id: string): SentiSynSet;
    /**
     * Adds specified SentiNet.SentiSynSet to the SentiNet.SentiSynSet list.
     *
     * @param sentiSynSet SentiNet.SentiSynSet to be added
     */
    addSentiSynSet(sentiSynSet: SentiSynSet): void;
    /**
     * Removes specified SentiNet.SentiSynSet from the SentiNet.SentiSynSet list.
     *
     * @param sentiSynSet SentiNet.SentiSynSet to be removed
     */
    removeSynSet(sentiSynSet: SentiSynSet): void;
    /**
     * Constructs and returns an {@link Array} of ids, which are the ids of the {@link SentiSynSet}s having polarity
     * polarityType.
     * @param polarityType PolarityTypes of the searched {@link SentiSynSet}s
     * @return An {@link Array} of id having polarityType polarityType.
     */
    private getPolarity;
    /**
     * Returns the ids of all positive {@link SentiSynSet}s.
     * @return An Array of ids of all positive {@link SentiSynSet}s.
     */
    getPositives(): Array<string>;
    /**
     * Returns the ids of all negative {@link SentiSynSet}s.
     * @return An Array of ids of all negative {@link SentiSynSet}s.
     */
    getNegatives(): Array<string>;
    /**
     * Returns the ids of all neutral {@link SentiSynSet}s.
     * @return An Array of ids of all neutral {@link SentiSynSet}s.
     */
    getNeutrals(): Array<string>;
}
