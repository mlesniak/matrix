// TODO ML Change this with j and k
// TODO ML Fullscreen with f

let fs = false;
let size = 16;

class Char {
    constructor(x, y, speed, highlight) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.highlight = highlight;
        this.setRandomCharacter();
    }

    setRandomCharacter() {
        let min = 48;
        let max = 256;
        this.char = String.fromCharCode(random(min, max));
    }

    render() {
        if (this.highlight) {
            fill(200, 200, 200);
        } else {
            fill(0, 200, 0);
        }
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
        
        let rowLength = floor(random(10, 40));
        let offset = random(-1000, 0);
        this.chars = [];
        for (let i = 0; i < rowLength; i++) {
            let isLast = i == rowLength - 1;
            this.chars.push(new Char(x, 0 + i * textSize() + offset, this.speed, isLast));
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

let columns;

function setup() {
    columns = [];
    textSize(size);
    let cnv = createCanvas(windowWidth + 8, windowHeight + 8);
    for (let i = 0; i < windowWidth / textSize(); i++) {
        let speed = random(3, 5);
        columns.push(new Column(i * textSize(), speed))
    }
}

function draw() {
    background(0, 150);
    for (let i = 0; i < columns.length; i++) {
        columns[i].render();
        columns[i].update();
    }
}

function keyPressed() {
    if (key === 'F') {
        fs = !fs;
        fullscreen(fs);
        setup();
    }

    if (key === 'R') {
        setup();
    }

    console.log(key);
    if (key === 'K') {
        size += 2;
        setup();
    }

    if (key === 'J') {
        if (size == 4) {
            return;
        }
        size -= 2;
        setup();
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    setup();
}

