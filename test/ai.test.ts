/// <reference path="typings/mocha/mocha.d.ts" />
/// <reference path="typings/chai/chai.d.ts" />
/// <reference path="typings/require.d.ts" />
import { expect } from 'chai';
var ai = require('../ai');

var l = new ai.LettersOnlyValidator();
var result=l.isAcceptable('hello');
describe('Test', () =>{
    it('should work.', () => 
        expect(1).to.equal(1)
    );
    
    it('l work.', () => 
        expect(result).to.equal(true)
    );
 
           
});
   