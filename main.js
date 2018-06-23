class Char {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.setRandomCharacter();
    }

    setRandomCharacter() {
        let min = 65;
        let max = 65 + 26;
        this.char = String.fromCharCode(random(min, max));
    }

    render() {
        fill(0, 200, 0);
        text(this.char, this.x, this.y)
    }

    update() {
        let isUpdate = random() < 0.1;
        if (isUpdate) {
            this.setRandomCharacter();
        }
        this.y = this.y + this.speed;
        if (this.y > height) {
            this.y = 0;
        }
    }
}

class Column {
    constructor(x, speed) {
        this.x = x;
        this.speed = speed;
        
        let num = random(5, 30);
        let offset = random(-1000, 0);
        this.chars = [];
        for (let i = 0; i < num; i++) {
            this.chars.push(new Char(x, 0 + i * textSize() + offset, this.speed));
        }
    }

    render() {
        for (let i = 0; i < this.chars.length; i++) {
            this.chars[i].render();
        }
    }

    update() {
        for (let i = 0; i < this.chars.length; i++) {
            this.chars[i].update();
        }
    }
}

let columns = [];

function setup() {
    let cnv = createCanvas(windowWidth + 8, windowHeight + 8);
    for (let i = 0; i < windowWidth / textSize(); i++) {
        let speed = random(5, 10);
        columns.push(new Column(i * textSize(), speed))
    }
}

function draw() {
    background(0);
    for (let i = 0; i < columns.length; i++) {
        columns[i].render();
        columns[i].update();
    }
}
