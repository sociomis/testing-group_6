import { expect } from 'chai';
import capitalize from '../src/capitalize.js';

describe('converts the first character to upper case and the remaining to lower case', function() {
    it('it converts correctly when all characters are in upper case', function() {
        expect(capitalize('HELLO').to.equal('Hello'));
    });
    it('it converts correctly when all characters are in lower case', function() {
        expect(capitalize('hello').to.equal('Hello'));
    });
    it('it converts correctly when characters are in lower case and upper case randomly', function() {
        expect(capitalize('hELlO').to.equal('Hello'));
    });
})