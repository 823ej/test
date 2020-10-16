let img;

function setup() {
  createCanvas(710, 400, WEBGL);
  img = loadImage('assets/text.png');
}

function draw() {
  background(100);
  orbitControl();
  normalMaterial();
  noStroke();
  fill(255);
push();
 translate(0,0,0);
// texture(img);
 plane(710, 400);
pop();

}
