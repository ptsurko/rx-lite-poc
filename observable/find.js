import Observer from './../observer';
import Observable from './../observable';

Observable.prototype.find = function(predicate) {
  return new Observable(observer =>
      this.subscribe(new Observer(
          value => {
            if (predicate(value)) {
              observer.next(value);
              observer.complete();
            }
          },
          error => observer.error(error),
          () => observer.complete())));
};
