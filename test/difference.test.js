import { expect } from 'chai';
import difference from '../src/difference.js';

const values = [
    'apple',
    'pear',
    'pineapple',
    'milk',
    'butter'
]

const exclude = [
    'milk',
    'butter'
]



describe('difference', function () {
    it('does not exclude anything with empty array', function(){
	expect(difference(values, [])).to.deep.equal(values)
    });
    it('does not crash when given only empty arrays', function(){
	expect(difference([], [])).to.deep.equal([])
    });
    
    it('excludes correct items', function() {
	expect(difference(values, exclude)).to.deep.equal(['apple','pear','pineapple'])
    })
});
     
