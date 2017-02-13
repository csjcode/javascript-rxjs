# javascript-rxjs
Demos of RxJS extensions

-------------------------------------------------------------


### Source - Video and Github

Source instructional video: https://www.youtube.com/watch?v=ei7FsoXKPl0

We are using RxJS 5.0 [not the 4.0 linked from the main site]. There is a list on the site (migration guide) for changing 4 to 5 if you have some old code.

Github : https://github.com/ReactiveX/rxjs

Website: A reactive programming library for JavaScript http://reactivex.io/rxjs

-------------------------------------------------------------


### Environment - CDN include in HTML file

You can include in an html file:
See for include: https://cdnjs.com/libraries/rxjs

https://cdnjs.cloudflare.com/ajax/libs/rxjs/5.0.1/Rx.min.js

-------------------------------------------------------------


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


-------------------------------------------------------------


### src/app.js

```javascript
import $ from 'jquery';
import Rx from 'rxjs/Rx';

console.log('RxJS Boiler Running...');
```

-------------------------------------------------------------


## Create an Observable sequence from UI Events

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

* Now lets get the event object:
` function(e){ console.log(e); },`
* We get an object, click on target to get values of the button.
* For example to get innerHtml we ca console.log e.target.innerHTML

* Now, let's create an input text box
* Copy/paste the previous Observable/Subscribe pattern and change to input and keyup, and change innerHTML to e
* Keep in mind--- in Subscrbe, only the first function is needed. Some events may not complete.

```javascript
const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');

inputStream$.subscribe(
  function(e){ console.log(e); },
  function(err){ console.log(err); },
  function(){ console.log('Completed')
});
```
* That works but just gives objects on each keypress.
* For full value change to `function(e){ console.log(e.currentTarget.value); },`
* also we can get it from e.targetValue

* Next what we could do is put that in the Body of the HTML document, inside a div.

* Last one-- the Mouse move event

```javascript
const moveStream$ = Rx.Observable.fromEvent(document, 'mousemove');
moveStream$.subscribe(
  function(e){ output2.html('<h3>X: ' + e.clientX + 'Y: ' + e.clientY +'</h3>') },
  function(err){ console.log(err); },
  function(){ console.log('Completed')
});
```

-------------------------------------------------------------

## Observables from Arrays

* We're going to subscribe to an observable that is an array of numbers and when it is finished it will say "Completed"

```javascript
const numbers = [33, 44, 56, 89, 104];

const numbers$ = Rx.Observable.from(numbers);

numbers$.subscribe(
  v => { console.log(v); },
  err => { console.log(err); },
  complete => { console.log('completed'); }
);
```



















.
