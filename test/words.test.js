import { expect } from 'chai';
import words from '../src/words.js';

describe('splits `string` into an array of its words', function() {
    it('returns an array of words with a valid pattern', function() {
        expect(words('fred, barney, & pebbles'), /[^, ]+/g).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
    });
    it('returns an array of words without a pattern', function() {
        expect(words('fred, barney, & pebbles')).to.deep.equal(['fred', 'barney', 'pebbles']);
    });
    it('throws an exception with an invalid pattern', function() {
        expect(words('fred, barney, & pebbles')).to.throw();
    });
    it('returns an empty array when no matches with the pattern', function() {
        expect(words('fred, barney, & pebbles', /[0-9]+/)).to.equal([]);
    });
});