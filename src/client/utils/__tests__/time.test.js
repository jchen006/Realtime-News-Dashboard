const assert = require('assert');
const { stringToDateObjectConversion } = require('../time');

describe('Time', () => {
    describe('Time conversion', () => {
        let convertedTime = stringToDateObjectConversion('Mon Jun 24 08:03:38 +0000 2019');
        it('should be able to return the correct month', () => {
            assert.equal(convertedTime.getMonth(), 5)
        });
        it('should be able to return the correct year', () => {
            assert.equal(convertedTime.getFullYear(), 2019);
        });
        it('should be able to return the correct day', () => {
            assert.equal(convertedTime.getDate(), 24);
        });
        it('should be bale to return the correct day', () => {
            assert.equal(convertedTime.getDay(), 1);
        });
        it('should be able to return the correct hour', () => {
            assert.equal(convertedTime.getUTCHours(), 8);
        });
        it('should be able to return the correct minute', () => {
            assert.equal(convertedTime.getUTCMinutes(), 3);
        });
    });
});