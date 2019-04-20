
// // arr = ant.split(',');
// // console.log(arr);

// let arr = ['532', 'sfw', "014", 65, 1, 'ans'],
//     i = arr.join();

// console.log(arr);

let kitsune = {
    race: 'demon',
    tails: 'nine',
    mainSkill: 'Mastery_of_Illusion'
}

let Kuneko = {
    race: 'halfdemon',
    mainSkill: 'Pyrokines'
}

Kuneko.__proto__ = kitsune;

console.log(Kuneko);
console.log(Kuneko.tails);