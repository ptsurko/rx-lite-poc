import Disposable from './../disposable';
import Observable from './../observable';

Observable.prototype.takeUntil = function(untilObservable) {
  return new Observable(observer => {
    let subscription = this.subscribe(
        value => observer.next(value),
        error => observer.error(error),
        () => observer.complete());
    let subscriptionUntil = untilObservable.subscribe(
        () => observer.complete(),
        error => observer.error(error),
        () => observer.complete());
    return new Disposable(subscription, subscriptionUntil);
  });
};
