var bg, bgImg;
var topPlayer, bottomPlayer;
var topPlayerIdle, bottomPlayerIdle, topPlayerRunning, bottomPlayerRunning;
var lever, leverImg;
var button, buttonTouched, buttonIdle1, buttonIdle2;
var paredeP, paredeG, plataforma;
var plataformaSprite, paredeGSprite, paredePSprite;
var apertou = false;

function preload() {
  bgImg = loadImage("assets/bg.avif");
  topPlayerIdle = loadAnimation("assets/esqueleto1.png","assets/esqueleto1.png");
  bottomPlayerIdle = loadAnimation("assets/esqueletobaixo1.png","assets/esqueletobaixo1.png");
  topPlayerRunning = loadAnimation("assets/esqueleto1.png","assets/esqueleto2.png","assets/esqueleto3.png");
  bottomPlayerRunning = loadAnimation("assets/esqueletobaixo1.png","assets/esqueletobaixo2.png","assets/esqueletobaixo3.png");
  buttonTouched = loadAnimation("assets/Button_0.png","assets/Button_1.png","assets/Button_1.png","assets/button_2.png");
  buttonIdle1 = loadAnimation("assets/Button_0.png","assets/Button_0.png","assets/Button_0.png");
  buttonIdle2 = loadAnimation("assets/Button_2.png","assets/button_2.png","assets/button_2.png");
  paredeP = loadImage("assets/paredeFina.png");
  paredeG = loadImage("assets/paredeGorda.png");
  plataforma = loadImage("assets/plataforma.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // fundo - primeiro (atrás de tudo)
  bg = createSprite(windowWidth/2, windowHeight/2);
  bg.addImage(bgImg);
  bg.scale = 3.2;

  // paredes - depois do fundo
  paredePSprite = createSprite(windowWidth/2 - 600, windowHeight/2);
  paredePSprite.addImage(paredeP);
  paredePSprite.scale = 0.3;

  paredeGSprite = createSprite(-300, 350);
  paredeGSprite.addImage(paredeG);
  paredeGSprite.scale = 1.2;

  plataformaSprite = createSprite(500, 750);
  plataformaSprite.addImage(plataforma);
  plataformaSprite.scale = 0.5;

  // botão - na frente das paredes
  button = createSprite(windowWidth/2 - 300, windowHeight/2);
  button.addAnimation("Idle1", buttonIdle1);
  button.addAnimation("Touched", buttonTouched);
  button.addAnimation("Idle2", buttonIdle2);

  // personagens - na frente de tudo
  topPlayer = createSprite(windowWidth/2, windowHeight/2);
  topPlayer.addAnimation("Idle", topPlayerIdle);
  topPlayer.addAnimation("Running", topPlayerRunning);

  bottomPlayer = createSprite(windowWidth/2 - 100, windowHeight/2);
  bottomPlayer.addAnimation("Idle", bottomPlayerIdle);
  bottomPlayer.addAnimation("Running", bottomPlayerRunning);
}

function draw() {
  background(120);

  topPlayer.velocityX = 0;
  bottomPlayer.velocityX = 0;

  if (keyDown("right")) {
    topPlayer.velocityX = 5;
    topPlayer.changeAnimation("Running");
    topPlayer.mirrorX(1);
  } else if (keyDown("left")) {
    topPlayer.velocityX = -5;
    topPlayer.changeAnimation("Running");
    topPlayer.mirrorX(-1);
  } else {
    topPlayer.changeAnimation("Idle");
  }

  if (keyDown("d")) {
    bottomPlayer.velocityX = 10;
    bottomPlayer.changeAnimation("Running");
    bottomPlayer.mirrorX(1);
  } else if (keyDown("a")) {
    bottomPlayer.velocityX = -10;
    bottomPlayer.changeAnimation("Running");
    bottomPlayer.mirrorX(-1);
  } else {
    bottomPlayer.changeAnimation("Idle");
  }

  if (button.isTouching(bottomPlayer) && apertou === false) {
    apertou = true;
    button.changeAnimation("Touched");
    setTimeout(function() {
      button.changeAnimation("Idle2");
    }, 2000);
  }

  // câmera segue o topPlayer
  camera.x = topPlayer.x;
  camera.y = topPlayer.y;

  // fundo acompanha a câmera
  bg.x = topPlayer.x;
  bg.y = topPlayer.y;

  drawSprites();
} 
