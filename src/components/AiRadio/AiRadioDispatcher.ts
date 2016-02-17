import {Injectable} from 'angular2/core';
/**
 * Class for radio buttons to coordinate unique selection based on name.
 * Indended to be consumed as an Angular service.
 */
@Injectable()
export class AiRadioDispatcher {
  
  listeners: Function[];

  constructor() {
    this.listeners = [];
  }

  /** Notify other radio buttons that selection for the given name has been set. */
  notify(name: string) {
    this.listeners.forEach(listener => listener(name));
  }

  /** Listen for future changes to radio button selection. */
  listen(listener) {
    this.listeners.push(listener);
  }
}