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
        this.chars = [];
        for (let i = 0; i < num; i++) {
            this.chars.push(new Char(x, 0 + i * textSize(), this.speed));
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

let column;

function setup() {
    let cnv = createCanvas(windowWidth + 8, windowHeight + 8);
    column = new Column(100, 5);
}

function draw() {
    background(0);
    column.render();
    column.update();
}
