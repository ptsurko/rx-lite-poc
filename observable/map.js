import Observable from './../observable';
import Subscriber from './../subscriber';

Observable.prototype.map = function(project) {
  return new Observable(observer =>
      this.subscribe(new Subscriber(
          observer,
          value => observer.next(project(value)),
          error => observer.error(error),
          () => observer.complete())));
};
