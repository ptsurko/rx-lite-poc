import Observer from './../../observer';

export default function create(onNext, onError, onComplete) {
  return new Observer(onNext, onError, onComplete);
}
