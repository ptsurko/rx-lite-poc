
function Observer(onNext, onError, onComplete) {
  this.onNext_ = onNext;
  this.onError_ = onError;
  this.onComplete_ = onComplete;
  this.isUnsubscribed = false;
  this.completed_ = false;
  this.unsubscribeFn = null;
}

Observer.prototype.next = function(value) {
  if (this.onNext_ && !this.isUnsubscribed) {
    try {
      this.onNext_(value);
    } catch(err) {
      this.unsubscribe();
      throw err;
    }
  }
};

Observer.prototype.error = function(error) {
  if (this.onError_ && !this.isUnsubscribed) {
    try {
      this.onError_(error);
    } finally {
      this.unsubscribe();
    }
  }
};

Observer.prototype.complete = function() {
  if (this.onComplete_ && !this.isUnsubscribed) {
    try {
      this.onComplete_();
    } finally {
      this.unsubscribe();
    }
  }
};

Observer.prototype.unsubscribe = function() {
  if (!this.isUnsubscribed) {
    this.isUnsubscribed = true;

    if (this.unsubscribeFn) {
      this.unsubscribeFn();
    }
  }
};

export default Observer;
