import Observable from './../../observable';

export default function createFromReturn(error) {
  return new Observable(observer => {
    observer.error(error instanceof Error ? error : new Error(error));
  });
}
