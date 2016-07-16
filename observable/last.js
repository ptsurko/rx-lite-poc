import Observable from './../observable';
import Subscriber from './../subscriber';

Observable.prototype.last = function() {
  return new Observable(observer => {
    let lastValue;
    let hadAnyValue = false;
    return this.subscribe(new Subscriber(
        observer,
        value => {
          lastValue = value;
          hadAnyValue = true;
        },
        error => observer.error(error),
        () => {
          if (hadAnyValue) {
            observer.next(lastValue);
            observer.complete();
          } else {
            observer.error('Sequence is empty');
          }
        }));
  });
};
