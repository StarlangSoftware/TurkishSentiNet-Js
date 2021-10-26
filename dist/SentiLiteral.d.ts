import { PolarityType } from "./PolarityType";
export declare class SentiLiteral {
    private readonly name;
    private readonly positiveScore;
    private readonly negativeScore;
    /**
     * Constructor of SentiLiteral. Gets input literal, positiveScore, negativeScore and sets all corresponding attributes.
     * @param name Name of the literal.
     * @param positiveScore Positive score of the literal.
     * @param negativeScore Negative score of the literal.
     */
    constructor(name: string, positiveScore: number, negativeScore: number);
    /**
     * Accessor for the positiveScore attribute.
     * @return PositiveScore of the SentiLiteral.
     */
    getPositiveScore(): number;
    /**
     * Accessor for the negativeScore attribute.
     * @return NegativeScore of the SentiLiteral.
     */
    getNegativeScore(): number;
    /**
     * Returns the polarityType of the literal. If the positive score is larger than the negative score, the polarity is
     * positive; if the negative score is larger than the positive score, the polarity is negative; if both positive
     * score and negative score are equal, the polarity is neutral.
     * @return SentiNet.PolarityType of the literal.
     */
    getPolarity(): PolarityType;
    /**
     * Accessor for the name attribute.
     * @return Name of the SentiLiteral.
     */
    getName(): string;
}
