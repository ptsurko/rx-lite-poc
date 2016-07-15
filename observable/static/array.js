import Observable from './../../observable';

export default function createFromArray(array) {
  return new Observable(observer => {
    array.forEach(item => observer.next(item));
    observer.complete();
  });
}
