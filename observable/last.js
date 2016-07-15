import Observer from './../observer';
import Observable from './../observable';

Observable.prototype.last = function() {
  return new Observable(observer => {
    let lastValue;
    let hadAnyValue = false;
    return this.subscribe(new Observer(
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
