window.addEventListener("DOMContentLoaded", function(){

    let checkbox = document.getElementById('remember'),
        change = document.getElementById('change'),
        form = document.getElementsByTagName("form")[0];

if(localStorage.getItem('IsCheck') === 'true'){
    checkbox.checked = true;
};

if(localStorage.getItem('bg') === 'changed'){
    form.style.backgroundColor = "rgb(252, 47, 47)";
};

checkbox.addEventListener('click', function(){
    localStorage.setItem("IsCheck", true);
});

change.addEventListener('click', function(){
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = "rgb(255,47,47)";
});
});
let pers = {
    name: 'Killer the Taigen',
    age: 23,
    equip: ['Akari_Sword', "Armor_Taigen", 'Special_Tools']
};

let persona = JSON.stringify(pers);
localStorage.setItem('Taigen', persona);

console.log(JSON.parse(localStorage.getItem('Taigen')));
