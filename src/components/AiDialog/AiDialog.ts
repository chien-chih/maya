import {
    Injectable,
    DynamicComponentLoader,
    ComponentRef,
    ElementRef,
    Injector,
    provide,
    ResolvedProvider,
    Optional,
    ApplicationRef
} from 'angular2/core';
import {AiModal,AiModalInstance,ConfirmDialog,ConfirmContext,AiModalConfig,AiModalAlign,AiModalPosition} from '../Ai';


@Injectable()
export class AiDialog{

    constructor(private modal: AiModal){
        
    }
    
    confirm(text:string,callback){
        let config:AiModalConfig =new AiModalConfig();    
        config.x=AiModalPosition.Center;
        config.y=new AiModalPosition(100,AiModalAlign.Begin);
        config.mask='white';
        config.floating=true;

        let context:ConfirmContext=new ConfirmContext();
        context.message=text;

        let bindings = Injector.resolve([
            provide(ConfirmContext, {useValue: context})
        ]);

        let dialog:Promise<AiModalInstance> = this.modal.open(<any>ConfirmDialog,bindings,config);
        dialog.then(
            (resultPromise) => {
                return resultPromise.result.then(
                    (result) => {
                        callback(true);
                    }, 
                    () =>{ 
                        callback(false);
                    }
                );
            });            
    }
}  