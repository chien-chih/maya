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
import {ModalConfig} from './ModalConfig';
import {ModalInstance} from './ModalInstance';
import {AiModalContainer} from './AiModalContainer';
import { DOM } from 'angular2/src/platform/dom/dom_adapter';


@Injectable()
export class Modal {

    private _list: ModalInstance[] = [];

    constructor(private componentLoader: DynamicComponentLoader, private appRef: ApplicationRef){
    }


    /**
     * Opens a modal window inside an existing component.
     * @param componentType The angular Component to render as modal.
     * @param bindings Resolved providers that will inject into the component provided.
     * @param config A Modal Configuration object.
     * @returns {Promise<ModalInstance>}
     */
    public open(
        componentType: FunctionConstructor,
        bindings: ResolvedProvider[],
        config?: ModalConfig
        ): Promise<ModalInstance> {

        config = config ?  config : new ModalConfig();

        let instance = new ModalInstance(config);
        instance.inElement = !!config.anchorName;

        let containerBindings = Injector.resolve([provide(ModalInstance, {useValue: instance})]);
        let container: Promise<ComponentRef> =this.createContainer( containerBindings, config.anchorName);
        
        return container
            .then( (containerRef: ComponentRef) => {
                instance.containerRef = containerRef;

                let modalDataBindings = Injector.resolve(
                    [provide(ModalInstance, {useValue: instance})]).concat(bindings);

                return this.componentLoader.loadIntoLocation(
                    componentType, containerRef.location, 'modalDialog', modalDataBindings)
                    .then(dialogRef => {
                        instance.dialogRef = dialogRef;
                        
                        this.push(instance);
                        return instance;
                    });
            }); 
    }

    /**
     * Push a ModalInstance into the stack and manage it so when it's done
     * it will automatically kick itself out of the stack.
     * @param instance
     */
    push(instance: ModalInstance): void {
        let idx = this._list.indexOf(instance);
        if (idx === -1) this._list.push(instance);
        instance.onLoad();
        instance.result
            .then(() => {
                this.remove(instance);   
            })
            .catch(() => {
             this.remove(instance);   
            });
    }

    /**
     * Remove a ModalInstance from the stack.
     * @param instance
     */
    remove(instance: ModalInstance): void {
        let idx = this._list.indexOf(instance);
        if (idx > -1) this._list.splice(idx, 1);
        instance.onUnload();

    }

    position(instance: ModalInstance) {
        return this.indexOf(instance);
    }

    index(index: number): ModalInstance {
        return this._list[index];
    }

    indexOf(instance: ModalInstance): number {
        return this._list.indexOf(instance);
    }

    get length(): number {
        return this._list.length;
    }

    /**
     * Creates backdrop element.
     
     * @param {ResolvedProvider[]} Resolved providers,
     *     must contain the ModalInstance instance for this backdrop.
     * @param {string} An anchor name, optional.
     *     if not supplied backdrop gets applied next to elementRef, otherwise into it.
     * @returns {Promise<ComponentRef>}
     */
    private createContainer(
        bindings: ResolvedProvider[],
        anchorName?: string
        ) : Promise<ComponentRef> {
            
        //The element to block using the modal
        // TODO: appRef.injector.get(APP_COMPONENT) Doesn't work.
        // When it does replace with the hack below.
        //let myElementRef = this.appRef.injector.get(APP_COMPONENT).location;
        let elementRef: ElementRef = (<any>this.appRef)._rootComponents[0].location;

        return (!anchorName) ?
            this.componentLoader.loadNextToLocation(AiModalContainer, elementRef, bindings) :
            this.componentLoader.loadIntoLocation(AiModalContainer, elementRef, anchorName, bindings);
    }
 }