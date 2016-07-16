
import extend from './extend';
import Observer from './observer';

function Subscriber(parent, onNext, onError, onComplete) {
  Subscriber.superclass.constructor.call(this, onNext, onError, onComplete);

  this.parent_ = parent;
  this.parent_.unsubscribeFn = () => this.unsubscribe();
}
extend(Subscriber, Observer);

export default Subscriber;
