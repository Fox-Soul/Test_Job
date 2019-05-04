// let box = document.querySelector('.context'),
//     btn = document.querySelector('button');

// let width = box.scrollWidth,
//     height = box.scrollHeight;


//     console.log(width);
//     console.log(height);
//     console.log(box.getBoundingClientRect());
//     console.log(document.documentElement.clientWidth);

// btn.addEventListener('click', function(){
//     box.scrollTop = 0;
// });

//scrollBy scrollTo document.documentElement.clientWidth

// function User (name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log('Hello, ' + this.name + '!');
//     }
// }
// User.prototype.exit = function(name){
//     console.log('User ' + this.name + ' exit...');
// }

// class User{
//     constructor(name, id){
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello(){
//         console.log('Hello, ${this.name}!');
//     }
//     exit(){
//         console.log('User ${this.name} exit...');
//     }
// }


// let Miko = new User('Miko', 1);
// let Akito = new User('Akito', 999);
// let Senjo = new User('Senjo', 499);

// console.log(Akito);
// console.log(Senjo);
// console.log(Miko);
// 'use strict'

// function showThis(a, b){
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(3, 9);
// showThis(5,3);

// let obj = {
//     a: 99,
//     b: 3,
//     sum: function(){
//         console.log(this);
//     }
// }

// obj.sum();

// let user = {
//     name: 'John',
//     age: 22
// };

// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname);
//     console.log(this.age);
// }

// console.log(sayName.call(user, ' Smith'));
// console.log(sayName.apply(user, [' Snowly']));

// function num(number){
//     return this * number;
// }

// let district = num.bind(9);

// console.log(district(6));
// console.log(district(1));
// console.log(district(0));
// console.log(district(100));

// let btn = document.querySelector('button');

// function Change() {
//     let obj = {
//         name: 'Kira',
//         age: 22,
//         gender: 'male',
//         hello: function(){
//             let say = () => {
//                 alert(`Hello, ${this.name}`);
//             }
//             say();
//         }
//     }

//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.gender);
//     function clr(){
//         btn.style.backgroundColor = 'red';
//     }
//     clr();
//     obj.hello();


// }

// btn.addEventListener('click', Change);

class Ract{
    constructor(height, width=25){
        this.height = height;
        this.width = width;
    }
    calc(){
        return this.height * this.width;
    }
}

let square = new Ract(10,10);
    square1 = new Ract(25);


console.log(square.calc());
console.log(square1.calc());



let kitsune = ['Ren', 'Yato', 'Kinki'],
    okami = ['Ame', 'Yuki', 'Hiboki'],
    furtype = [...kitsune, ...okami, 'furry', 'feral'];

console.log(furtype);


function sum(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}

let num = [6,2,8];
let re = [9,1,15];
sum(...num);
sum(...re);
