var bg, bgImg;
var topPlayer,bottomPlayer;
var topPlayerIdle, bottomPlayerIdle,topPlayerImg,topPlayer,topPlayerRunning,bottomPlayerImg,bottomPlayerRunning;
var lever, leverImg;
var button, buttonImg,buttonTouched,buttonIdle1,buttonIdle2; 
var paredeP,paredeG,plataforma

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
   buttonTouched = loadAnimation("assets/Button_0.png",
    "assets/Button_1.png",
    "assets/Button_1.png",
    "assets/button_2.png");
    buttonIdle1 = loadAnimation("assets/Button_0.png",
    "assets/Button_0.png",
    "assets/Button_0.png");
    buttonIdle2= loadAnimation("assets/Button_2.png",
    "assets/button_2.png",
    "assets/button_2.png");
    paredeP = loadImage("assets/paredeFina.png")
    paredeG = loadImage("assets/paredeGorda.png")
    plataforma = loadImage("assets/plataforma.png")
   
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(windowWidth/2,windowHeight/2);
  bg.addImage(bgImg);
  bg.scale = 3.2;
  topPlayer = createSprite(600,500);
  topPlayer.addAnimation("Idle",topPlayerIdle);
  topPlayer.addAnimation("Running",topPlayerRunning);
  bottomPlayer = createSprite(400,500);
  bottomPlayer.addAnimation("Idle",bottomPlayerIdle);
  bottomPlayer.addAnimation("Running",bottomPlayerRunning);
  button = createSprite(200,500)
  button.addAnimation("Idle1",buttonIdle1);
  button.addAnimation("Touched",buttonTouched);
  button.addAnimation("Idle2",buttonIdle2);
  plataforma = createSprite(700,500);
  paredeG = createSprite(1000,500);

function draw() {
background(120);
  if(keyDown("right")){
    topPlayer.velocityX = 5;
    topPlayer.changeAnimation("Running");
    topPlayer.mirrorX(1);
  }
  if(keyDown("left")){
    topPlayer.velocityX = -5;
    topPlayer.changeAnimation("Running");
    topPlayer.mirrorX(-1);
  }
  if(keyDown("d")){
    bottomPlayer.velocityX = 10
    bottomPlayer.changeAnimation("Running");
    bottomPlayer.mirrorX(1);
  };
  if(keyDown("a")){
    bottomPlayer.velocityX = -10;
    bottomPlayer.changeAnimation("Running");
    bottomPlayer.mirrorX(-1);
  }
  if (button.isTouching(bottomPlayer)){
  button.changeAnimation("Touched") 
  setTimeout(2000);
  button.changeAnimation("Idle2")
  }

  drawSprites();
}}
