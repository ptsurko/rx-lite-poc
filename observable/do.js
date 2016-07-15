import Observer from './../observer';
import Observable from './../observable';

Observable.prototype.do = function(onNext, onError, onComplete) {
  return new Observable(observer =>
      this.subscribe(new Observer(
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
