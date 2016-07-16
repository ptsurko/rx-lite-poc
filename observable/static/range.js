import Observable from './../../observable';

export default function createFromRange(start, count, step) {
  return new Observable(observer => {
    step = step || 1;
    let value = start;
    while (true) {
      if (count == 0) {
        observer.complete();
        break;
      }
      observer.next(value);
      value += step;
      count -= 1;

      if (observer.isUnsubscribed) {
        break;
      }
    }
  });
}
