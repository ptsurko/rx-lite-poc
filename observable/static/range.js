import Observable from './../../observable';

export default function createFromRange(start, end, step) {
  return new Observable(observer => {
    for (let i = start; i < end; i += step ? step : 1) {
      observer.next(i);
    }
    observer.complete();
  });
}
