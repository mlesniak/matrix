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
        if (frameCount % 30 == 0) {
            this.setRandomCharacter();
        }
    }
}

let char;

function setup() {
    let cnv = createCanvas(windowWidth + 8, windowHeight + 8);
    char = new Char(100, 100, 0);
}

function draw() {
    background(0);
    char.render();
    char.update();
}
