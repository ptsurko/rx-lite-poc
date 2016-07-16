
import extend from './../utils/extend';
import Disposable from './../disposable';
import Observable from './../observable';
import Subscriber from './../subscriber';
import CompositeObserver from './../compositeobserver';

Observable.prototype.publish = function() {
  return new SharedObservable(observer =>
      this.subscribe(new Subscriber(
          observer,
          value => observer.next(value),
          error => observer.error(error),
          () => observer.complete())));
};

function SharedObservable(subscribeFn) {
  SharedObservable.superclass.constructor.call(this, subscribeFn);

  this.observer_ = new CompositeObserver();
  this.subscription_ = null;
}
extend(SharedObservable, Observable);

SharedObservable.prototype.subscribeInternal = function(observer) {
  this.observer_.add(observer);
  observer.unsubscribeFn_ = function() {
    this.observer_.remove(observer);
  };

  if (!this.subscribed_) {
    this.subscription_ = this.subscribeFn_(this.observer_);
    this.subscribed_ = true;
  }

  return new Disposable(() => {
    if (this.subscription_) {
      this.subscription_.dispose();
    }
    this.observer_.unsubscribe();
  });
};

// SharedObservable.prototype.subscribe = function() {
//   // let observer = (arguments.length == 1 && arguments[0] instanceof Observer) ?
//   //                arguments[0] : new Observer(arguments[0], arguments[1], arguments[2]);
//   this.observer_.add(observer);
//
//   // let disposable =
//   // observer.addOnDispose(() => {
//   //
//   // });
//   if (!this.subscribed_) {
//     this.unsubscribeFn_ = this.subscribeFn_(this.observer_);
//     this.subscribed_ = true;
//   }
//   return new Disposable(() => {
//     // // TODO: Unsubscription does not work for takeUntil with interval
//     if (this.unsubscribeFn_ && !this.observer_.hasObservers()) {
//       // this.unsubscribeFn_();
//     }
//     this.observer_.remove(observer);
//     observer.unsubscribe();
//   });
// };
