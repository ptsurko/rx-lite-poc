import extend from './utils/extend';
import Observer from './observer';

function CompositeObserver() {
  this.observers_ = [];
  CompositeObserver.superclass.constructor.call(this,
      value => this.observers_.forEach(observer => observer.next(value)),
      error => this.observers_.forEach(observer => observer.error(error)),
      () => this.observers_.forEach(observer => observer.complete()));
}
extend(CompositeObserver, Observer);

CompositeObserver.prototype.add = function(observer) {
  this.observers_.push(observer);
};

CompositeObserver.prototype.hasObservers = function() {
  return this.observers_.length > 0;
};

CompositeObserver.prototype.getObserversLength = function() {
  return this.observers_.length;
};

CompositeObserver.prototype.remove = function(observer) {
  this.observers_.splice(this.observers_.indexOf(observer), 1);
};

CompositeObserver.prototype.unsubscribe = function() {
  if (!this.isUnsubscribed) {
    this.observers_.forEach(o => o.unsubscribe());
  }
};

export default CompositeObserver;
