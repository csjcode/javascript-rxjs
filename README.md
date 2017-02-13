# javascript-rxjs
Demos of RxJS extension

### Source - Video and Github

Source instructional video: https://www.youtube.com/watch?v=ei7FsoXKPl0

We are using RxJS 5.0 [not the 4.0 linked from the main site]. There is a list on the site (migration guide) for changing 4 to 5 if you have some old code.

Github : https://github.com/ReactiveX/rxjs

Website: A reactive programming library for JavaScript http://reactivex.io/rxjs

### Environment - CDN include in HTML file

You can include in an html file:
See for include: https://cdnjs.com/libraries/rxjs

https://cdnjs.cloudflare.com/ajax/libs/rxjs/5.0.1/Rx.min.js


### Environment (using this) - RxJS Boiler

source: https://github.com/bradtraversy/rxjs_boiler

* Clone and npm install

* Install webpack globally

`npm -g install webpack﻿`

* Compile

* To compile all js to dist/app.bundle.js

`$ webpack`

This will create folder `rxjs_boiler\dist\app.bundle.js`

* To watch run

`$ webpack -w`

* Run

* Install live-server globally

`$ npm install live-server -g`

`$ npm start`

Visit http://localhost:8000


### src/app.js

```javascript
import $ from 'jquery';
import Rx from 'rxjs/Rx';

console.log('RxJS Boiler Running...');
```

### Create an Observable sequence from UI Events

* Create a button in index.js with an id of btn `<button id="btn"></button>`
```javascript
const btn = $('#btn');
const btnStream$ = Rx.Observable.fromEvent();
```

* It's good practive to have the $ on the end so we know it's a datastream Observable
* Next we add some parameters-- the element, type of event we want,

`const btnStream$ = Rx.Observable.fromEvent(btn, 'click');`

* That's all there is to creating an observable, HOWEVER, we still have to SUBSCRIBE to it.
* The subscribe takes 3 functions: return stream, return errors, run if complete

```
btnStream$.subscribe(
  function(e){ console.log('Clicked'); },
  function(err){ console.log(err); },
  function(){ console.log('Completed')
});
```





.
