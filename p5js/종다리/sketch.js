function preload(){
  img1 = loadImage('https://github.com/823ej/test/blob/master/p5js/%EC%A2%85%EB%8B%A4%EB%A6%AC/text.png');
  img2 = loadImage('https://github.com/823ej/test/blob/master/p5js/%EC%A2%85%EB%8B%A4%EB%A6%AC/text2.png');
  //  tts1 = loadSound('tts1.mp3');
  //  tts2 = loadSound('tts2.mp3');
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(255);
  orbitControl();
   // rotateY(frameCount * 0.01);
  //rotateY(-((mouseX)*0.00205));

    push();
 rotateY(61.26105);
  texture(img1);
  plane((windowWidth), (windowHeight));
  pop();

  push();
 rotateY(61.26105);
translate(0,0,-0.01);
  texture(img2);
  plane((windowWidth), (windowHeight));
  pop();

}
