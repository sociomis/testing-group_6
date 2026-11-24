import { expect } from 'chai';
import difference from '../src/difference.js';

const values = [
    'apple',
    'pear',
    'pineapple',
    'cherry',
    'strawberry',
    'milk',
    'butter'
]

const exclude = [
    'milk',
    'butter'
]

const items = [
    'hammer',
    'screwdriver'
]

const mix = [
    1,
    'beans',
    2026,
    666,
    'potato'
]



describe('difference', function () {
    it('does not exclude anything with empty array', function(){
	expect(difference(values, [])).to.deep.equal(values)
    });
    it('does not crash when given only empty arrays', function(){
	expect(difference([], [])).to.deep.equal([])
    });
    
    it('excludes correct items', function() {
	expect(difference(values, exclude)).to.deep.equal(['apple','pear','pineapple','cherry','strawberry'])
    })

    it('excludes all when given same array', function() {
	expect(difference(values, values)).to.deep.equal([])
    })

    it('does not crash when given array with mixed types', function() {
	expect(difference(mix, items)).to.deep.equal(mix)
    })

});
     
