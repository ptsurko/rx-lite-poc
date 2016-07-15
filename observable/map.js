import Observer from './../observer';
import Observable from './../observable';

Observable.prototype.map = function(project) {
  return new Observable(observer =>
      this.subscribe(new Observer(
          value => observer.next(project(value)),
          error => observer.error(error),
          () => observer.complete())));
};
