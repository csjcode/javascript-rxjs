import $ from 'jquery';
import Rx from 'rxjs/Rx';
// console.log('RxJS Boiler Running...');

const numbers = [33, 44, 56, 89, 104];

const numbers$ = Rx.Observable.from(numbers);

numbers$.subscribe(
  v => { console.log(v); },
  err => { console.log(err); },
  complete => { console.log('completed'); }
);

const posts = [
  { title: "My title", body: "This is the body of the article"},
  { title: "My title 2", body: "Put your text here"},
  { title: "Superman was here", body: "Put your concert here"},
  { title: "Fragle Rock is cool", body: "Put your garden over here"},
];

const posts$ = Rx.Observable.from(posts);

posts$.subscribe(
  post => { console.log(post); $('#posts').append('<li><h3>' + post.title  +  '</h3><p>' + post.body + '</p></li>'); },
  err => { console.log(err); },
  complete => { console.log('completed'); }
);


// ------------------------------ PREVIOUS FOR EVENT OBSERVABLES
// const btn = $('#btn');
// const input = $('#input');
// const output = $('#output');
// const output2 = $('#output2');
//
// const btnStream$ = Rx.Observable.fromEvent(btn, 'click');
//
// btnStream$.subscribe(
//   function(e){ console.log(e.target.innerHTML); },
//   function(err){ console.log(err); },
//   function(){ console.log('Completed')
// });
//
// const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');
//
// inputStream$.subscribe(
//   function(e){ output.html(e.target.value) },
//   function(err){ console.log(err); },
//   function(){ console.log('Completed')
// });
//
//
// const moveStream$ = Rx.Observable.fromEvent(document, 'mousemove');
//
// moveStream$.subscribe(
//   function(e){ output2.html('<h3>X: ' + e.clientX + 'Y: ' + e.clientY +'</h3>') },
//   function(err){ console.log(err); },
//   function(){ console.log('Completed')
// });
