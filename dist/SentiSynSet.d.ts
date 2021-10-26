import { PolarityType } from "./PolarityType";
export declare class SentiSynSet {
    private id;
    private positiveScore;
    private negativeScore;
    /**
     * Constructor of SentiNet.SentiSynSet. Gets input id, positiveScore, negativeScore and sets all corresponding attributes.
     * @param id Id of the SentiNet.SentiSynSet.
     * @param positiveScore Positive score of the SentiNet.SentiSynSet.
     * @param negativeScore Negative score of the SentiNet.SentiSynSet.
     */
    constructor(id: string, positiveScore: number, negativeScore: number);
    /**
     * Accessor for the positiveScore attribute.
     * @return PositiveScore of the SentiNet.SentiSynSet.
     */
    getPositiveScore(): number;
    /**
     * Accessor for the negativeScore attribute.
     * @return NegativeScore of the SentiNet.SentiSynSet.
     */
    getNegativeScore(): number;
    /**
     * Returns the polarityType of the sentiSynSet. If the positive score is larger than the negative score, the polarity is
     * positive; if the negative score is larger than the positive score, the polarity is negative; if both positive
     * score and negative score are equal, the polarity is neutral.
     * @return SentiNet.PolarityType of the sentiSynSet.
     */
    getPolarity(): PolarityType;
    /**
     * Accessor for the id attribute.
     * @return Id of the SentiNet.SentiSynSet.
     */
    getId(): string;
}
