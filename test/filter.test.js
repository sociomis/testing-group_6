import { expect } from 'chai';
import filter from '../src/filter.js';

const users = [
   { 'user': 'barney', 'active': true },
   { 'user': 'fred',   'active': false }
]

const users2 = [
   { 'user': 'barney', 'vip': true },
   { 'user': 'fred',   'vip': false }
]

describe('filter', function() {
    it('does not crash when array is empty and returns nothing', function() {
        expect(filter([], ({ active }) => active)).to.equal([]);
    });
    it('returns an array of elements that evaluate true from the predicate', function() {
        expect(filter(users, ({ active }) => active)).to.deep.equal(['barney']);
    });
    it('throws exception when predicate returns invalid type', function() {
        expect(filter(users2, 'hello')).to.throw();
    });
});