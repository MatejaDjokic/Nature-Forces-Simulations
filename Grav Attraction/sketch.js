let movers = [];
let attractor;
const N = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < N; i++) {
        let x = random(width);
        let y = random(height);
        let m = random(50, 150);
        movers[i] = new Mover(x, y, m);
    }
    attractor = new Attractor(windowWidth / 2, windowHeight / 2, 50);
    background(0);
}

function draw() {
    background(0);

    for (let mover of movers) {
        mover.update();
        mover.show();
        attractor.attract(mover);
    }

    attractor.show();

}