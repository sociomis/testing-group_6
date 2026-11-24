import { expect } from 'chai';
import clamp from '../src/clamp.js';

describe('clamps `number` within the inclusive `lower` and `upper` bounds', function() {
    it('returns the nearest limit, when desired value is smaller than minimum value', function() {
        expect(clamp(-10, -5, 5)).to.equal(-5);
    });
    it('returns the nearest limit, when desired value is bigger than maximum value', function() {
        expect(clamp(10, -5, 5)).to.equal(5);
    });
    it('returns the desired value when it is within the range', function() {
        expect(clamp(5, -5, 10)).to.equal(5);
    });
});