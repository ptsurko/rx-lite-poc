import Observable from './../observable';
import Subscriber from './../subscriber';

Observable.prototype.do = function(onNext, onError, onComplete) {
  return new Observable(observer =>
      this.subscribe(new Subscriber(
          observer,
          value => {
            onNext && onNext(value);
            observer.next(value);
          },
          error => {
            onError && onError(error);
            observer.error(error);
          },
          () => {
            onComplete && onComplete();
            observer.complete();
          })));
};
