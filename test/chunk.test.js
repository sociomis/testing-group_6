import { expect } from 'chai';
import chunk from '../src/chunk.js';

describe('creates an array of elements split into groups by the `size`', function () {
    it('returns the correct array with valid parameters when the number of elements is divideable by positive size', function() {
        expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([['a', 'b'], ['c', 'd']]);
    });
    it('returns the correct array when elements can not be split evenly by positive size. The final chunk will be the remaining elements', function() {
        expect(chunk(['a', 'b', 'c', 'd'], 3)).to.deep.equal([['a', 'b', 'c'], ['d']]);
    });
    it('returns an empty array when given an empty array and a positive size', function() {
        expect(chunk([], 4)).to.deep.equal([]);
    });
    it('returns an empty array when given an empty array and a negative size', function() {
        expect(chunk([], 5)).to.deep.equal([]);
    });
    it('returns an empty array when given an array and a negative size', function() {
        expect(chunk(['a', 'b', 'c', 'd'], -6)).to.deep.equal([]);
    });
});