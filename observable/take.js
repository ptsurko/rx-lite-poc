import Observer from './../observer';
import Observable from './../observable';

Observable.prototype.take = function(takeCount) {
  return new Observable(observer =>
      this.subscribe(new Observer(
          value => {
            if (takeCount > 0) {
              observer.next(value);

              takeCount -= 1;
              if (takeCount <= 0) {
                observer.complete();
              }
            }
          },
          error => observer.error(error),
          () => observer.complete())));
};
