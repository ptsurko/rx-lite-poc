import Observable from './../../observable';

export default function create(subscribeFn) {
  return new Observable(subscribeFn);
}
