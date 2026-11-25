import { expect } from 'chai';
import castArray from '../src/castArray.js';

var array = [1, 2, 3, 4, 5, 6, 7]

describe('castArray', function () {
    it('makes an array from a single value', function(){
	    expect(castArray(5)).to.deep.equal([5])
    });

    it('makes an array from a single string', function () {
        expect(castArray('beans')).to.deep.equal(['beans'])
    });

    it('makes an array from a single object', function () {
        expect(castArray({a: 1, b: 2})).to.deep.equal([{a: 1, b: 2}])
    });

    it('makes an array from a single boolean', function () {
        expect(castArray(true)).to.deep.equal([true])
    });

    it('makes an array from a single null value', function () {
        expect(castArray(null)).to.deep.equal([null])
    });

    it('makes an array from a single undefined value', function () {
        expect(castArray(undefined)).to.deep.equal([undefined])
    });

    it('makes an array from a single NaN value', function () {
        expect(castArray(NaN)).to.deep.equal([NaN])
    });

    it('returns the same array when given an array', function () {
        expect(castArray(array)).to.deep.equal(array)
    });

    it('returns an empty array when given an empty array', function () {
        expect(castArray([])).to.deep.equal([])
    }); 
    
    

});