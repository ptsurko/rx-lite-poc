import Observable from './../observable';
import Subscriber from './../subscriber';

Observable.prototype.filter = function(predicate) {
  return new Observable(observer =>
      this.subscribe(new Subscriber(
          observer,
          value => predicate(value) && observer.next(value),
          error => observer.error(error),
          () => observer.complete())));
};
