import { SentiLiteral } from "./SentiLiteral";
export declare class SentiLiteralNet {
    private sentiLiteralList;
    private loadSentiNet;
    /**
     * Constructor of Turkish SentiNet.SentiNet. Reads the turkish_sentiliteralnet.xml file from the resources directory. For each
     * sentiLiteral read, it adds it to the sentiLiteralList.
     */
    constructor(fileName?: string);
    /**
     * Accessor for a single SentiLiteral.
     * @param name Name of the searched SentiLiteral.
     * @return SentiLiteral with the given id.
     */
    getSentiLiteral(name: string): SentiLiteral;
    /**
     * Constructs and returns an {@link Array} of lemma, which are the lemma of the {@link SentiLiteral}s having polarity
     * polarityType.
     * @param polarityType PolarityTypes of the searched {@link SentiLiteral}s
     * @return An {@link Array} of lemma having polarityType polarityType.
     */
    private getPolarity;
    /**
     * Returns the lemmas of all positive {@link SentiLiteral}s.
     * @return An Array of lemmas of all positive {@link SentiLiteral}s.
     */
    getPositives(): Array<string>;
    /**
     * Returns the lemmas of all negative {@link SentiLiteral}s.
     * @return An Array of lemmas of all negative {@link SentiLiteral}s.
     */
    getNegatives(): Array<string>;
    /**
     * Returns the lemmas of all neutral {@link SentiLiteral}s.
     * @return An Array of lemmas of all neutral {@link SentiLiteral}s.
     */
    getNeutrals(): Array<string>;
}
