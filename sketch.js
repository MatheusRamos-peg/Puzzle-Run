var bg, bgImg;
var topPlayerImg, bottomPlayerImg;
var lever, leverImg;
var button, buttonImg; 

function preload() {
   bgImg = loadImage("assets/bg.avif");
}

function setup() {
  createCanvas(windowWidth,600);
 bg = createSprite(1000,300);
 bg.addImage(bgImg);
 bg.scale = 1;
}

function draw() {
background(120);
  
  drawSprites();
}




