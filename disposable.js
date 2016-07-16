
// TODO: check ES6 arguments
function Disposable() {
  let disposables = [].slice.call(arguments);
  this.disposables_ = [];
  disposables.forEach(disposable => {
    if (disposable instanceof Array) {
      this.disposables_ = this.disposables_.concat(disposable);
    } else {
      this.disposables_.push(disposable);
    }
  });
  this.isDisposed_ = false;
}

Disposable.prototype.dispose = function() {
  if (this.disposables_.length && !this.isDisposed_) {
    this.isDisposed_ = true;
    this.disposables_.forEach(disposable => {
      if (disposable instanceof Disposable) {
        disposable.dispose();
      } else {
        disposable();
      }
    });
  }
};

export default Disposable;
