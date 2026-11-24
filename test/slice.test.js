import { expect } from 'chai';
import slice from '../src/slice.js';

var array = [1, 2, 3, 4, 5, 6, 7]

describe('slice', function () {
    it('returns array with no parameters', function(){
	    expect(slice(array)).to.deep.equal(array)
    });
    
    it('slices correctly with one parameter', function () {
        expect(slice(array, 2)).to.deep.equal([3, 4, 5, 6, 7])
    });

    it('slices correctly with one negative parameter', function () {
        expect(slice(array, -2)).to.deep.equal([6, 7])
    });

    it('slices correctly with two valid parameters', function () {
        expect(slice(array, 1, 4)).to.deep.equal([2, 3, 4])
    });

    it('does not crash with invalid parameter', function () {
        expect(slice(array, 'beans')).to.deep.equal([])
    });

    

});