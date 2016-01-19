/// <reference path="typings/mocha/mocha.d.ts" />
/// <reference path="typings/chai/chai.d.ts" />
/// <reference path="typings/require.d.ts" />
var chai_1 = require('chai');
var ai = require('../ai');
var l = new ai.LettersOnlyValidator();
var result = l.isAcceptable('hello');
describe('Test', function () {
    it('should work.', function () {
        return chai_1.expect(1).to.equal(1);
    });
    it('l work.', function () {
        return chai_1.expect(result).to.equal(true);
    });
});
