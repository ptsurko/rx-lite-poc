import Disposable from './../../disposable';
import Observable from './../../observable';

export default function createFromInterval(interval) {
  return new Observable(observer => {
    let intervalId = window.setInterval(function() {
      observer.next();
    }, interval);

    return new Disposable(() => {
      window.clearInterval(intervalId);
    });
  });
}
