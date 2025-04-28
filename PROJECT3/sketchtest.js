let bubbles = [];
let bg;
let song1;
let song2;
let soundStarted = false;
let blank;



function preload(){
 

 song1 = loadSound("ambient.mp3")
 song2 = loadSound("popping.mp3")
blank = loadImage("blank.png")
}

function setup() {
  createCanvas(1400,4065);
  bg = createVideo("UTF-8fishwithglitter.mp4")
  
  bg.hide();
  bg.loop();
}


function draw() {
    
let back = bg.get();
  image(back,0,800,1400,3265);

  // Update and display all bubbles
  for (let b of bubbles) {
    b.update();
    b.display();
  }

  image(blank,500,3700,400,400);
}

function mousePressed() {
  // Add a new bubble at the mouse position
  bubbles.push(new Bubble(mouseX, mouseY));
  if(!soundStarted){
    song1.setVolume(0.5);
    song1.loop();
    song2.setVolume(0.5);
    
    soundStarted = true;
}
bg.play();

if (mouseX > 500 && mouseX < 500 + 400 && mouseY > 3700 && mouseY < 3700 + 400){
  window.open("https://justynnepetty.github.io/Tapestry/", "_blank");
}
}

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = random(20, 50);
    this.c = color(random(255), random(255), random(255), 150); // Semi-transparent
  }

  update() {
    // Make bubbles float upward slightly
    this.y -= 0.5;
  }

  
  display() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}