import { PolarityType } from "./PolarityType"

export class SentiLiteral{

    private readonly name: string
    private readonly positiveScore: number
    private readonly negativeScore: number

    /**
     * Constructor of SentiLiteral. Gets input literal, positiveScore, negativeScore and sets all corresponding attributes.
     * @param name Name of the literal.
     * @param positiveScore Positive score of the literal.
     * @param negativeScore Negative score of the literal.
     */
    constructor(name: string, positiveScore: number, negativeScore: number) {
        this.name = name
        this.positiveScore = positiveScore
        this.negativeScore = negativeScore
    }

    /**
     * Accessor for the positiveScore attribute.
     * @return PositiveScore of the SentiLiteral.
     */
    getPositiveScore(): number{
        return this.positiveScore
    }

    /**
     * Accessor for the negativeScore attribute.
     * @return NegativeScore of the SentiLiteral.
     */
    getNegativeScore(): number{
        return this.negativeScore
    }

    /**
     * Returns the polarityType of the literal. If the positive score is larger than the negative score, the polarity is
     * positive; if the negative score is larger than the positive score, the polarity is negative; if both positive
     * score and negative score are equal, the polarity is neutral.
     * @return SentiNet.PolarityType of the literal.
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
     * Accessor for the name attribute.
     * @return Name of the SentiLiteral.
     */
    getName(): string{
        return this.name;
    }
}