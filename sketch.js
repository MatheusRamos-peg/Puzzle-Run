var bg, bgImg;
var topPlayer,topPlayerImg,topPlayer,topoPlayeRunning,bottomPlayerImg,bottomPlayerRunning;
var lever, leverImg;
var button, buttonImg; 

function preload() {
   bgImg = loadImage("assets/bg.avif");
   topPlayer = loadImage("assets/esqueleto1.png")  
   bottomPlayer = loadImage("assets/esqueletobaixo1.png")
   topPlayerRunning = loadAnimation("assets/esqueleto1.png",
    "assets/esqueleto2.png",
    "assets/esqueleto3.png");
  bottomPlayerRunning = loadAnimation("assets/esqueletobaixo1.png",
    "assets/esqueletobaixo2.png",
    "assets/esqueletobaixo3.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
 bg = createSprite(windowWidth/2,windowHeight/2);
 bg.addImage(bgImg);
 bg.scale = 3.2;
 topPlayer = createSprite(600,500);
 topPlayer.addAnimation("Running",topPlayerRunning);
 bottomPlayer = createSprite(400,500);
 bottomPlayer.addAnimation("Running",bottomPlayerRunning);
}

function draw() {
background(120);
  if(keyDown("x")){
    topPlayer.changeAnimation("Running");
    bottomPlayer.changeAnimation("Running");
  }
  drawSprites();
}


