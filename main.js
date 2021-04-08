let $player1 = {
    name: 'Sonya',
    hp: 10,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Kunai','sword','spear'],
    attack: function() {
        console.log($player1.name+'fight...')
    }
}
let $player2 = {
    name: 'Scorpion',
    hp: 10,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Kunai','sword','spear'],
    attack: function() {
        console.log($player1.name+'fight...')
    }
}


function createPlayer(playerClass, playerObj) {
    const $player = document.createElement('div');
    $player.classList.add(playerClass);
    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player);
    const $pb = document.createElement('div');
    $pb.classList.add('progressbar');
    $player.appendChild($pb);
    const $life = document.createElement('div');
    $life.classList.add('life');
    $pb.appendChild($life);
    $life.style.width = '100%';
    const $name = document.createElement('div');
    $name.classList.add('name');
    $pb.appendChild($name);
    $name.innerText = playerObj.name;
    const $character = document.createElement('div');
    $character.classList.add('character');
    $player.appendChild($character);
    const $img = document.createElement('img');
    $character.appendChild($img);
    $img.src = playerObj.img;

}

createPlayer('player1',$player1);
createPlayer('player2',$player2);