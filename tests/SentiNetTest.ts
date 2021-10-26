import {SentiNet} from "../dist/SentiNet";
import * as assert from "assert";

describe('SentiNetTest', function() {
    describe('Read test', function() {
        let sentiNet = new SentiNet();
        it('Checks positive sentiSynSets of SentiNet', function() {
            assert.strictEqual(3100, sentiNet.getPositives().length)
        });
        it('Checks negative sentiSynSets of SentiNet', function() {
            assert.strictEqual(10191, sentiNet.getNegatives().length)
        });
        it('Checks neutral sentiSynSets of SentiNet', function() {
            assert.strictEqual(63534, sentiNet.getNeutrals().length)
        });
    });
});
