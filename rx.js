import createFromRange from './observable/static/range';
import createFromArray from './observable/static/array';
import createFromEvent from './observable/static/fromevent';
import createFromInterval from './observable/static/interval';
import createFromReturn from './observable/static/return';
import createThrow from './observable/static/throw';
import createObservable from './observable/static/create';

import createObserver from './observer/static/create';

import './observable/map';
import './observable/find';
import './observable/filter';
import './observable/take';
import './observable/takeuntil';
import './observable/last';
import './observable/reduce';
import './observable/do';
import './observable/concat';
import './observable/flatmap';
import './observable/merge';

let Rx = {
  Observable: {
    create: createObservable,
    fromRange: createFromRange,
    from: createFromArray,
    fromEvent: createFromEvent,
    interval: createFromInterval,
    return: createFromReturn,
    throw: createThrow
  },
  Observer: {
    create: createObserver
  }
};

export default Rx;
