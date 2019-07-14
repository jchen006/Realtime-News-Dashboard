const assert = require('assert');
const { temperatureToString } = require('../weather');

describe('Weather', () => {
  describe('Convert temperature to string', () => {
    it('convert 66 degrees to 66 F', () => {
      let weatherString = temperatureToString(66, 'F');
      assert.equal(weatherString, '66 F');
    });
    it('convert 23 degrees to 23 C', () => {
        let weatherString = temperatureToString(23, 'C');
        assert.equal(weatherString, '23 C');
    })
  });
});