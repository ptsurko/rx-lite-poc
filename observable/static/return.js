import Observable from './../../observable';

export default function createFromReturn(value) {
  return new Observable(observer => {
    observer.next(value);
    observer.complete();
  });
}
