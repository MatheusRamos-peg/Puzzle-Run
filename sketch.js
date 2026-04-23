var bg, bgImg;
var topPlayer, bottomPlayer;
var topPlayerIdle, bottomPlayerIdle, topPlayerRunning, bottomPlayerRunning;
var lever, leverImg;
var button, buttonTouched, buttonIdle1, buttonIdle2; 
var paredeP,paredePImg, paredeG,paredeGImg, plataforma,plataformaImg;

var apertou = false; // controle do botão

function preload() {
   bgImg = loadImage("assets/bg.avif");

   topPlayerIdle = loadAnimation("assets/esqueleto1.png","assets/esqueleto1.png");  
   bottomPlayerIdle = loadAnimation("assets/esqueletobaixo1.png","assets/esqueletobaixo1.png");

   topPlayerRunning = loadAnimation(
    "assets/esqueleto1.png",
    "assets/esqueleto2.png",
    "assets/esqueleto3.png"
   );

   bottomPlayerRunning = loadAnimation(
    "assets/esqueletobaixo1.png",
    "assets/esqueletobaixo2.png",
    "assets/esqueletobaixo3.png"
   );

   buttonTouched = loadAnimation(
    "assets/Button_0.png",
    "assets/Button_1.png",
    "assets/Button_1.png",
    "assets/button_2.png"
   );

   buttonIdle1 = loadAnimation(
    "assets/Button_0.png",
    "assets/Button_0.png",
    "assets/Button_0.png"
   );

   buttonIdle2 = loadAnimation(
    "assets/Button_2.png",
    "assets/button_2.png",
    "assets/button_2.png"
   );

   paredePImg = loadImage("assets/paredeFina.png");
   paredeGImg = loadImage("assets/paredeGorda.png");
   plataformaImg = loadImage("assets/plataforma.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bg = createSprite(windowWidth/2, windowHeight/2);
  bg.addImage(bgImg);
  bg.scale = 3.2;

  topPlayer = createSprite(600,500);
  topPlayer.addAnimation("Idle", topPlayerIdle);
  topPlayer.addAnimation("Running", topPlayerRunning);

  bottomPlayer = createSprite(400,500);
  bottomPlayer.addAnimation("Idle", bottomPlayerIdle);
  bottomPlayer.addAnimation("Running", bottomPlayerRunning);

  button = createSprite(200,500);
  button.addAnimation("Idle1", buttonIdle1);
  button.addAnimation("Touched", buttonTouched);
  button.addAnimation("Idle2", buttonIdle2);

  plataforma = createSprite(700,500);
  plataforma.addImage(plataformaImg)
  plataforma.scale = 0.3;
  paredeG = createSprite(-350,365);
  paredeG.scale = 1.09
  paredeG.addImage(paredeGImg)
} 

function draw() {
  background(120);

  // reset movimento
  topPlayer.velocityX = 0;
  bottomPlayer.velocityX = 0;

  // controles topPlayer
  if(keyDown("right")){
    topPlayer.velocityX = 5;
    topPlayer.changeAnimation("Running");
    topPlayer.mirrorX(1);
  } else if(keyDown("left")){
    topPlayer.velocityX = -5;
    topPlayer.changeAnimation("Running");
    topPlayer.mirrorX(-1);
  } else {
    topPlayer.changeAnimation("Idle");
  }

  // controles bottomPlayer
  if(keyDown("d")){
    bottomPlayer.velocityX = 10;
    bottomPlayer.changeAnimation("Running");
    bottomPlayer.mirrorX(1);
  } else if(keyDown("a")){
    bottomPlayer.velocityX = -10;
    bottomPlayer.changeAnimation("Running");
    bottomPlayer.mirrorX(-1);
  } else {
    bottomPlayer.changeAnimation("Idle");
  }

  // botão com delay (uma vez só)
  if (button.isTouching(bottomPlayer) && apertou === false){
    apertou = true;

    button.changeAnimation("Touched");

    setTimeout(() => {
      button.changeAnimation("Idle2");
    }, 1000);
  }

  drawSprites();
} 



