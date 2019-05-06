'use strict';

let drink = 0;

function shoot(arrow){
    console.log('You made a shot...');
    
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            Math.random() > .5 ? resolve({}) : reject("You a loose!");
        }, 3000);
    });
    return promise;
};

function win(){
    console.log('You win~!!!');
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer(){
    console.log('You get a beer~!');
}

function giveMoney(){
    console.log('You get a money~!');
}

function loose(){
    console.log('You loose...');
}

shoot({})
    .then(mark => console.log('You hit the target!'))
    .then(win)
    .catch(loose)