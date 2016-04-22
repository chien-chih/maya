import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {BrowserDomAdapter} from "angular2/src/platform/browser/browser_adapter";

export class AiDOM {

    private static _dom:BrowserDomAdapter=null;
    public static get(){
        if(AiDOM._dom==null) AiDOM._dom=new BrowserDomAdapter();
        return AiDOM._dom;
    }

}