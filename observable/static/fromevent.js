import Disposable from './../../disposable';
import Observable from './../../observable';

export default function createFromEvent(element, eventName) {
  return new Observable(observer => {
    function handleEvent(e) {
      observer.next(e);
    }
    element.addEventListener(eventName, handleEvent, false);

    return new Disposable(() => {
      element.removeEventListener(eventName, handleEvent, false);
    });
  });
}
