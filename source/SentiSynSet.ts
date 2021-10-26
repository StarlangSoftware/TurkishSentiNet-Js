import { PolarityType } from "./PolarityType";

export class SentiSynSet{

    private id: string
    private positiveScore: number
    private negativeScore: number

    /**
     * Constructor of SentiNet.SentiSynSet. Gets input id, positiveScore, negativeScore and sets all corresponding attributes.
     * @param id Id of the SentiNet.SentiSynSet.
     * @param positiveScore Positive score of the SentiNet.SentiSynSet.
     * @param negativeScore Negative score of the SentiNet.SentiSynSet.
     */
    constructor(id: string, positiveScore: number, negativeScore: number) {
        this.id = id;
        this.positiveScore = positiveScore;
        this.negativeScore = negativeScore;
    }

    /**
     * Accessor for the positiveScore attribute.
     * @return PositiveScore of the SentiNet.SentiSynSet.
     */
    getPositiveScore(): number{
        return this.positiveScore
    }

    /**
     * Accessor for the negativeScore attribute.
     * @return NegativeScore of the SentiNet.SentiSynSet.
     */
    getNegativeScore(): number{
        return this.negativeScore
    }

    /**
     * Returns the polarityType of the sentiSynSet. If the positive score is larger than the negative score, the polarity is
     * positive; if the negative score is larger than the positive score, the polarity is negative; if both positive
     * score and negative score are equal, the polarity is neutral.
     * @return SentiNet.PolarityType of the sentiSynSet.
     */
    getPolarity(): PolarityType{
        if (this.positiveScore > this.negativeScore){
            return PolarityType.POSITIVE;
        } else {
            if (this.positiveScore < this.negativeScore){
                return PolarityType.NEGATIVE;
            } else {
                return PolarityType.NEUTRAL;
            }
        }
    }

    /**
     * Accessor for the id attribute.
     * @return Id of the SentiNet.SentiSynSet.
     */
    getId(): string{
        return this.id;
    }

}