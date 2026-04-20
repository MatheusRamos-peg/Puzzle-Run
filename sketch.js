var bg, bgImg;
var topPlayer,bottomPlayer;
var topPlayerIdle, bottomPlayerIdle,topPlayerImg,topPlayer,topPlayerRunning,bottomPlayerImg,bottomPlayerRunning;
var lever, leverImg;
var button, buttonImg; 

function preload() {
   bgImg = loadImage("assets/bg.avif");
   topPlayerIdle = loadAnimation("assets/esqueleto1.png","assets/esqueleto1.png")  
   bottomPlayerIdle = loadAnimation("assets/esqueletobaixo1.png","assets/esqueletobaixo1.png")
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
  topPlayer.addAnimation("idle",topPlayerIdle);
  bottomPlayer = createSprite(400,500);
  bottomPlayer.addAnimation("idle",bottomPlayerIdle);
}

function draw() {
background(120);
  if(keyDown("x")){
    topPlayer.changeAnimation("Running");
    bottomPlayer.changeAnimation("Running");
  }
  drawSprites();
}

