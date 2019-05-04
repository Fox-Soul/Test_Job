'use strict'

// var a = 5;
// var b = 2;


// console.log(c);
// var c = a%b;
// function next(){
//     console.log('I complete this is lesson');
// }
// function kali(lan, callback){
    
//     console.log('I learn ' + lan);
//     callback();
// }

// kali('JavaScript', next);

// // let ant = prompt("Enter data about ','", ""),
// //     arr = [];

// // arr = ant.split(',');
// // console.log(arr);

// let arr = ['532', 'sfw', "014", 65, 1, 'ans'],
//     i = arr.join();

// console.log(arr);

// let kitsune = {
//     race: 'demon',
//     tails: 'nine',
//     mainSkill: 'Mastery_of_Illusion'
// }

// let Kuneko = {
//     race: 'halfdemon',
//     mainSkill: 'Pyrokines'
// }

// Kuneko.__proto__ = kitsune;

// console.log(Kuneko);
// console.log(Kuneko.tails);


// let box = document.getElementById('cube'),
//     btn = document.getElementsByTagName('button'),
//     circle = document.getElementsByClassName('circle'),
//     heart = document.querySelectorAll('.heart'),
//     oneHeart = document.querySelector('.heart'),
//     wrapper = document.querySelector('.wrapper');


// box.style.backgroundColor = 'rgb(0,0,142)';
// btn[4].style.borderRadius = '100%';

// circle[0].style.backgroundColor = 'red';
// circle[1].style.backgroundColor = 'hsl(64, 100%, 50%)';

// // heart.forEach(function(item){
// //     item.style.backgroundColor = 'red';
// // });

// let div = document.createElement('div'),
//     txt = document.createTextNode('Раз-два, и погнали!!!');
// div.classList.add('black');
// // document.body.appendChild(div);
// // wrapper.appendChild(div);
// div.innerHTML = '<h1>Hello World!</h1>';
// document.body.insertBefore(div, wrapper);
// wrapper.removeChild(heart[1]);
// document.body.replaceChild(btn[4], circle[1]);
    // console.log(heart[2]);

// let btn = document.querySelectorAll('button');

// btn[0].addEventListener('click', function(){
//     let targ = event.target;
//     targ.style.backgroundColor = 'red';
//     alert('You click on the ' + targ + ' and you doing ' + event.type);
//     targ.style.backgroundColor = 'black';        
// });

// btn.forEach(function(item){
//     item.addEventListener('mouseleave', function(){
//         item.style.borderRadius = '100%';        
//         btn[3].style.backgroundColor = 'red';
//         document.body.replaceChild(btn[3], btn[0]);
//     });
// });

// let time = setInterval(hello, 3000);
// function hello(){
//     console.log('Hello');
//     clearTimeout(time);
// }

// let time = setTimeout(function log(){
//     console.log('Hello!');
//     setTimeout(log, 3000);
// });

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function anime(){
let pos = 0;

let time = setInterval(frame, 10);
function frame(){
    if(pos==300){
        clearInterval();
    }else{
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
    }
}
} 
btn.addEventListener('click', anime);


let place = document.querySelector('.nods'),
    btns = document.getElementsByTagName('button');

place.addEventListener('click', function(event){
    //event.target.tagName == 'BUTTON' || event.target.classList.contains('first')
    if(event.target && event.target.matches('button')){
        console.log('Hello World!');
    }
    else{
        console.log('Not definded');
    }
})