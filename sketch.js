var bg, bgImg;
var topPlayer, bottomPlayer;
var topPlayerIdle, bottomPlayerIdle, topPlayerRunning, bottomPlayerRunning;
var lever, leverClosed, leverOpen, leverTocado;
var button, buttonTouched, buttonIdle1, buttonIdle2; 
var paredeG, paredeG2, paredeGImg, plataforma, plataformaImg;
var blocoLigado, blocoDesligado;

var apertou = false;
var aberto = false;

var gravity = 0.6;
var floor;

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

   buttonIdle1 = loadAnimation("assets/Button_0.png");
   buttonIdle2 = loadAnimation("assets/Button_2.png");

   leverTocado = loadAnimation("assets/alavanca.aberta.png","assets/alavanca.fechada.png");
   leverOpen = loadAnimation("assets/alavanca.aberta.png");
   leverClosed = loadAnimation("assets/alavanca.fechada.png");

   paredeGImg = loadImage("assets/paredeGorda.png");
   plataformaImg = loadImage("assets/plataforma.png");
   blocoLigado = loadImage("assets/bloco.ligado.png");
   blocoDesligado = loadImage("assets/bloco.desligado.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // INVISIBLE FLOOR
  floor = createSprite(width/2, windowHeight - 25, width, 50);
  floor.visible = false;

  bg = createSprite(windowWidth/2, windowHeight/2);
  bg.addImage(bgImg);
  bg.scale = 3.2;

  topPlayer = createSprite(600,500);
  topPlayer.addAnimation("Idle", topPlayerIdle);
  topPlayer.addAnimation("Running", topPlayerRunning);

  bottomPlayer = createSprite(400,500);
  bottomPlayer.addAnimation("Idle", bottomPlayerIdle);
  bottomPlayer.addAnimation("Running", bottomPlayerRunning);

  button = createSprite(900,600);
  button.addAnimation("Idle1", buttonIdle1);
  button.addAnimation("Touched", buttonTouched);
  button.addAnimation("Idle2", buttonIdle2);

  plataforma = createSprite(700,750);
  plataforma.addImage(plataformaImg);
  plataforma.scale = 1.2;

  // WALLS
  paredeG = createSprite(-350,400,200,800);
  paredeG.addImage(paredeGImg);
  paredeG.scale = 1.2;

  paredeG2 = createSprite(1400,400,200,800);
  paredeG2.addImage(paredeGImg);
  paredeG2.scale = 1.2;

  plataforma2 = createSprite(700,12);
  plataforma2.addImage(plataformaImg);
  plataforma2.scale = 1.2;

  lever = createSprite(600,500);
  lever.addAnimation("Open", leverOpen);
  lever.addAnimation("Tocado", leverTocado);
  lever.addAnimation("Closed", leverClosed);
} 

function draw() {
  background(120);

  // GRAVITY
  topPlayer.velocityY += gravity;
  bottomPlayer.velocityY += gravity;

  // COLLISION WITH FLOOR
  topPlayer.collide(floor);
  bottomPlayer.collide(floor);

  // COLLISION WITH WALLS
  topPlayer.collide(paredeG);
  topPlayer.collide(paredeG2);
  bottomPlayer.collide(paredeG);
  bottomPlayer.collide(paredeG2);

  // RESET HORIZONTAL MOVEMENT
  topPlayer.velocityX = 0;
  bottomPlayer.velocityX = 0;

  // TOP PLAYER MOVEMENT (NO JUMP)
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

  // BOTTOM PLAYER MOVEMENT
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

  // BOTTOM PLAYER JUMP
  if(keyWentDown("w") && (bottomPlayer.isTouching(floor) || bottomPlayer.isTouching(plataforma))){
    bottomPlayer.velocityY = -10;
  }

  // BUTTON — FIXED (only triggers once)
  if (!apertou && (button.isTouching(topPlayer) || button.isTouching(bottomPlayer))) {
      apertou = true;
      button.changeAnimation("Touched");

      setTimeout(() => {
          button.changeAnimation("Idle2");
      }, 1000);
  }

  // LEVER
  if (lever.isTouching(topPlayer) && aberto === true){
    aberto = true;
    lever.changeAnimation("Tocado");
    setTimeout(() => lever.changeAnimation("Open"), 1000);
  }

  drawSprites();

  // LEVEL 1 TEXT (GREEN, LOWERED)
  textAlign(CENTER, CENTER);
  textSize(60);
  fill(0, 255, 0);
  stroke(0);
  strokeWeight(6);
  text("LEVEL 1", width/2, 150);
}
