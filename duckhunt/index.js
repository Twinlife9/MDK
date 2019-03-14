const duck = document.querySelector('.duck');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function StartGame() {
    for (let i = 0; i < 5; i++) {
        let clone = duck.cloneNode();
        clone.id = i;
        let x = getRandomInt(100,screen.width - 100);
        let y = getRandomInt(100,screen.height - 100);
        clone.style.left = x+'px';
        clone.style.top = y+'px';
        document.body.appendChild(clone);
    }
}
StartGame();
