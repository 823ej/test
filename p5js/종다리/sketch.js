// let tts1, tts2;

function preload(){
  img1 = loadImage('text.png');
  img2 = loadImage('text2.png');
  // tts1 = loadSound('tts1.mp3');
  // tts2 = loadSound('tts2.mp3');
}
function setup() {
  
  var canvas1 = createCanvas(windowWidth, windowHeight, WEBGL);
  // canvas1.mousePressed(playSound);
}
// function playSound() {
//   if (mouseX < (windowWidth/2)) {
//     tts1.play();
//   } else {
//     tts2.play();
 
//   }
  
// }

function draw() {
  background(255);
  orbitControl();
 // rotateY(frameCount * 0.01);
 // rotateY(-((winmouseX)*0.00205));

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


