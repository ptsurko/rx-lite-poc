
function Observer(onNext, onError, onComplete) {
  this.onNext_ = onNext;
  this.onError_ = onError;
  this.onComplete_ = onComplete;
  this.unsubscribed_ = false;
  this.unsubscribeFn = null;
}

Observer.prototype.next = function(value) {
  if (this.onNext_ && !this.unsubscribed_) {
    try {
      this.onNext_(value);
    } catch(err) {
      this.unsubscribe();
      throw err;
    }
  }
};

Observer.prototype.error = function(error) {
  if (this.onError_ && !this.unsubscribed_) {
    try {
      this.onError_(error);
    } finally {
      this.unsubscribe();
    }
  }
};

Observer.prototype.complete = function() {
  if (this.onComplete_ && !this.unsubscribed_) {
    try {
      this.onComplete_();
    } finally {
      this.unsubscribe();
    }
  }
};

Observer.prototype.unsubscribe = function() {
  if (!this.unsubscribed_ && this.unsubscribeFn) {
    this.unsubscribeFn();
  }
  this.unsubscribed_ = true;
};

export default Observer;
