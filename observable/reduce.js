import Observer from './../observer';
import Observable from './../observable';

Observable.prototype.reduce = function(accumulator, seed) {
  return new Observable(observer =>
      this.subscribe(new Observer(
          value => { seed = accumulator(value, seed); },
          error => observer.error(error),
          () => {
            observer.next(seed);
            observer.complete();
          })));
};
