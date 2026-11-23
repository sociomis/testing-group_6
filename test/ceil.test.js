import { expect } from 'chai';
import ceil from '../src/ceil.js';

describe('ceil', function () {
  describe('with the default precision', function () {
    it('rounds a positive decimal up to the next integer', function () {
      expect(ceil(4.006)).to.equal(5);
    });

    it('leaves an integer unchanged', function () {
      expect(ceil(5)).to.equal(5);
    });

    it('rounds a negative decimal toward positive infinity', function () {
      expect(ceil(-4.006)).to.equal(-4);
    });
  });

  describe('with positive precision', function () {
    it('rounds up to two decimal places', function () {
      expect(ceil(6.004, 2)).to.equal(6.01);
    });

    it('leaves a number unchanged when it already has the requested precision', function () {
      expect(ceil(6.01, 2)).to.equal(6.01);
    });

    it('rounds a negative number toward positive infinity', function () {
      expect(ceil(-6.006, 2)).to.equal(-6);
    });
  });

  describe('with negative precision', function () {
    it('rounds up to the nearest hundred', function () {
      expect(ceil(6040, -2)).to.equal(6100);
    });

    it('rounds up to the nearest ten', function () {
      expect(ceil(41, -1)).to.equal(50);
    });

    it('leaves an exact multiple unchanged', function () {
      expect(ceil(6100, -2)).to.equal(6100);
    });

    it('rounds a negative number toward positive infinity', function () {
      expect(ceil(-6040, -2)).to.equal(-6000);
    });
  });

  describe('with special numeric values', function () {
    it('preserves positive Infinity', function () {
      expect(ceil(Infinity)).to.equal(Infinity);
    });

    it('preserves negative Infinity', function () {
      expect(ceil(-Infinity)).to.equal(-Infinity);
    });

    it('returns NaN when given NaN', function () {
      expect(ceil(NaN)).to.be.NaN;
    });
  });
});
