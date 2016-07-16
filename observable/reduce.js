import Observable from './../observable';
import Subscriber from './../subscriber';

Observable.prototype.reduce = function(accumulator, seed) {
  return new Observable(observer =>
      this.subscribe(new Subscriber(
          observer,
          value => { seed = accumulator(value, seed); },
          error => observer.error(error),
          () => {
            observer.next(seed);
            observer.complete();
          })));
};
