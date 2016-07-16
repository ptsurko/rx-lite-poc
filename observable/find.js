import Observable from './../observable';
import Subscriber from './../subscriber';

Observable.prototype.find = function(predicate) {
  return new Observable(observer =>
      this.subscribe(new Subscriber(
          observer,
          value => {
            if (predicate(value)) {
              observer.next(value);
              observer.complete();
            }
          },
          error => observer.error(error),
          () => observer.complete())));
};
