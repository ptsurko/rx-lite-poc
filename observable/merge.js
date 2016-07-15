import Disposable from './../disposable';
import Observable from './../observable';

Observable.prototype.merge = function() {
  let observables = [this].concat([].slice.call(arguments));

  return new Observable(observer => {
    let observablesCount = 0;
    let subscriptions = observables.map(observable => {
      observablesCount += 1;
      return observable.subscribe(
          value => observer.next(value),
          error => observer.error(error),
          () => {
            if (--observablesCount == 0) {
              observer.complete();
              subscriptions.forEach(subscription => subscription.dispose());
            }
          });
    });
    return new Disposable(subscriptions);
  });
};
