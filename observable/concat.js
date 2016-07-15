import Disposable from './../disposable';
import Observable from './../observable';

Observable.prototype.concat = function() {
  let observables = [this].concat([].slice.call(arguments));
  return new Observable(observer => {
    let observableIndex = 0;
    let buffer = Array(observables.length).fill([]);
    let subscriptions = observables.map(
        (observable, index) => observable.subscribe(
            value => {
              if (index == observableIndex) {
                observer.next(value);
              } else if (index > observableIndex) {
                buffer[index].push(value);
              }
            },
            error => observer.error(error),
            () => {
              observableIndex++;
              if (observableIndex == observables.length) {
                observer.complete();
              } else {
                buffer[observableIndex].forEach(observer.next);
                buffer[observableIndex] = null;
              }
            }
        ));

    return new Disposable(subscriptions);
  });
};
