/// <reference path="../../node_modules/angular2/typings/jasmine/jasmine.d.ts" />
import * as utils from 'ai/components/utils';


describe('StringChaing test', () => {

    it('StringChain should be empty', () => {
        var s = new utils.StringChain(''); 
        expect(s.toString()).toEqual('')
        }
    );
    
    it('StringChain add remove test', () => {
            var sc = new utils.StringChain('start'); 
            expect(sc.toString()).toEqual('start');
            sc.add("first");    
            expect(sc.toString()).toEqual('start first');
            sc.add("first");    
            expect(sc.toString()).toEqual('start first');
            sc.add(" first");    
            expect(sc.toString()).toEqual('start first');
            sc.add("second");
            expect(sc.toString()).toEqual('start first second');
            sc.remove("first");
            expect(sc.toString()).toEqual('start second');
            sc.assign("");
            expect(sc.toString()).toEqual('');
        }
    );

}); 