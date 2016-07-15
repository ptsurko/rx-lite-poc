import Disposable from './disposable';
import Observer from './observer';

// TODO: Figure out how hot vs cold observables work.
function Observable(subscribeFn) {
  this.subscribeFn_ = subscribeFn;
}

Observable.prototype.subscribe = function() {
  let observer = (arguments.length == 1 && arguments[0] instanceof Observer) ?
                 arguments[0] : new Observer(arguments[0], arguments[1], arguments[2]);

  let subscription = this.subscribeInternal(observer);
  if (subscription instanceof Disposable) {
    observer.unsubscribe = function() {
      subscription.dispose();
    };
  }

  return new Disposable(() => observer.unsubscribe());
};

Observable.prototype.subscribeInternal = function(observer) {
  return this.subscribeFn_(observer);
};

// function Observable(subscribeFn) {
//   this.observer_ = new CompositeObserver();
//   this.subscribed_ = false;
//   this.subscribeFn_ = subscribeFn;
//   this.unsubscribeFn_ = null;
// }
// Observable.prototype.subscribe = function() {
//   let observer = (arguments.length == 1 && arguments[0] instanceof Observer) ?
//                  arguments[0] : new Observer(arguments[0], arguments[1], arguments[2]);
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

export default Observable;
