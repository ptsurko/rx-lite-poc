import Disposable from './../disposable';
import Observable from './../observable';
import Subscriber from './../subscriber';

Observable.prototype.takeUntil = function(untilObservable) {
  return new Observable(observer => {
    let subscription = this.subscribe(
        new Subscriber(
            observer,
            value => observer.next(value),
            error => observer.error(error),
            () => observer.complete()));
    let subscriptionUntil = untilObservable.subscribe(
        new Subscriber(
            observer,
          () => observer.complete(),
          error => observer.error(error),
          () => observer.complete()));
    return new Disposable(subscription, subscriptionUntil);
  });
};
