# Rx Lite - lightweight version of Rx library.

## Samples

```javascript
Rx.Observable.from([1,2,3,4])
    .map(value => value * 10)
    .map(value => value + 1)
    .find(value => value > 25)
    .subscribe(val => console.log(val), (error) => {}, () => console.log('completed'));
```

```javascript
Rx.Observable.fromRange(1, 10)
    .filter(val => val % 2 == 0)
    .subscribe(val => console.log(val), (error) => {}, () => console.log('completed'));
```

```javascript
Rx.Observable.from([1, 2, 3, 4])
    .concat(Rx.Observable.from([10, 20, 30, 40]), Rx.Observable.from([100, 200, 300, 400]))
    .subscribe(val => console.log(val), (error) => {}, () => console.log('completed'));
```

```javascript
Rx.Observable.fromEvent(document.getElementById('clickme'), 'click')
    .take(2)
    .subscribe(val => console.log('clicked 1'), (error) => {}, () => console.log('completed'));
```

## Resources

### Reactive programming
 * [Rx Book](https://xgrommx.github.io/rx-book/)
 * [The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
 * [Learning Observable By Building Observable](https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87)
 * [Hot vs Cold Observables](https://medium.com/@benlesh/hot-vs-cold-observables-f8094ed53339)

## Functional Programming
 * [ESLint for functional programming](https://github.com/dustinspecker/awesome-eslint)

### ES6
 * [ECMAScript 6 modules: the final syntax](http://www.2ality.com/2014/09/es6-modules-final.html)
 * [Babel & Webpack](http://www.2ality.com/2015/04/webpack-es6.html)
