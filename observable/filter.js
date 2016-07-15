import Observer from './../observer';
import Observable from './../observable';

Observable.prototype.filter = function(predicate) {
  return new Observable(observer =>
      this.subscribe(new Observer(
          value => predicate(value) && observer.next(value),
          error => observer.error(error),
          () => observer.complete())));
};
