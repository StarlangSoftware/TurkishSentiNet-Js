import {SentiLiteralNet} from "../dist/SentiLiteralNet";
import * as assert from "assert";

describe('SentiLiteralNetTest', function() {
    describe('Read test', function() {
        let sentiLiteralNet = new SentiLiteralNet();
        it('Checks positive sentiLiterals of SentiLiteralNet', function() {
            assert.strictEqual(4335, sentiLiteralNet.getPositives().length)
        });
        it('Checks negative sentiLiterals of SentiLiteralNet', function() {
            assert.strictEqual(13011, sentiLiteralNet.getNegatives().length)
        });
        it('Checks neutral sentiLiterals of SentiLiteralNet', function() {
            assert.strictEqual(62379, sentiLiteralNet.getNeutrals().length)
        });
    });
});
