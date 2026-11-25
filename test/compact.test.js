import { expect } from 'chai';
import compact from '../src/compact.js';

const values = [
    'apple',
    'pear',
    '',
    'pineapple',
    'cherry',
    false,
    'strawberry',
    'milk',
    'butter'
]
const valid_values = [
    'apple',
    'pear',
    'pineapple',
    'cherry',
    'strawberry',
    'milk',
    'butter'
]

const falseys = [
    false,
    null,
    0,
    '',
    undefined,
    NaN
]

const example = [
    0,
    1,
    false,
    2,
    '',
    3
]
describe('compact', function () {
    it('removes all falsey values from example', function(){
	expect(compact(example)).to.deep.equal([1, 2, 3])
    });

    it('removes all falsey values from array with only falsey values', function () {
        expect(compact(falseys)).to.deep.equal([])
    });

    it('handles empty array without crashing', function () {
        expect(compact([])).to.deep.equal([])
    });


    it('handles array with strings and falseys', function () {
        expect(compact(values)).to.deep.equal(['apple',
                                                'pear',
                                                'pineapple',
                                                'cherry',
                                                'strawberry',
                                                'milk',
                                                'butter'])
    });

    it('does not remove anything if no falsey values', function () {
        expect(compact(valid_values)).to.deep.equal(valid_values)
    });
});