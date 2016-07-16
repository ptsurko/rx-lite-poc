import Observable from './../observable';
import Subscriber from './../subscriber';

Observable.prototype.take = function(takeCount) {
  return new Observable(observer =>
      this.subscribe(new Subscriber(
          observer,
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
