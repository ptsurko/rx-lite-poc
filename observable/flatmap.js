import Disposable from './../disposable';
import Observer from './../observer';
import Observable from './../observable';

Observable.prototype.flatMap = function(project) {
  return new Observable(observer => {
    let observablesCount = 1;
    let subscriptions = [];
    function complete() {
      if (--observablesCount == 0) {
        observer.complete();
      }
    }
    let subscription = this.subscribe(new Observer(
        value => {
          let observable = project(value);
          observablesCount += 1;
          subscriptions.push(observable.subscribe(
              value => observer.next(value),
              error => observer.error(error),
              complete));
        },
        error => observer.error(error),
        complete));
    return new Disposable(subscription, subscriptions);
  });
};
