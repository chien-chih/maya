/// <reference path="../../node_modules/angular2/typings/jasmine/jasmine.d.ts" />
import * as ai from 'ai/ai';
var l = new ai.LettersOnlyValidator();

describe('3 st tests', () => {
  it('true is true', () => expect(l.isAcceptable('hello')).toEqual(true));
});