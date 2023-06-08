//Parametros da Bola
let xBola = 300;
let yBola = 200; 
let diametro = 15;
let raio = diametro / 2;
let velocidadeXBola = 6;
let velocidadeYBola = 6;

//Parametros da Raquetes
let lRaquete = 10;
let hRaquete = 90

//Parametros da Raquete1
let xRaquete = 5;
let yRaquete = 150;

//Parametros da Raquete2
let xRaquete2 = 585;
let yRaquete2 = 150;
let vYRaquete2;

//Colisao Da Raquete
let colidiu = false;

//Placar do Jogo
let pontosJ1 = 0;
let pontosJ2 = 0;

//Sons Do Jogo
let raquetada;
let ponto;
let trilha

function preload(){
  trilha = loadSound("./sons/trilha.mp3");
  ponto = loadSound("./sons/ponto.mp3");
  raquetada = loadSound("./sons/raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBola();
  movimentaBola();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaquete2, yRaquete2);
  movimentaRaquete();
  colisaoRaquete(xRaquete, yRaquete);
  movimentaRaquete2();
  colisaoRaquete(xRaquete2, yRaquete2);
  placar(pontosJ1, 170, 26);
  placar(pontosJ2, 470, 26);
  marcaPonto();
}

function mostraBola(){
  circle(xBola, yBola, diametro);
}

function movimentaBola(){
  xBola += velocidadeXBola;
  yBola += velocidadeYBola;
}

function verificaColisaoBorda(){
  if(xBola + raio > width || xBola - raio < 0){
    velocidadeXBola *= -1;
  }
  if(yBola + raio > height || yBola - raio < 0){
    velocidadeYBola *= -1;
  }
}

function mostraRaquete(x, y){
  rect(x, y, lRaquete, hRaquete);
}


function movimentaRaquete(){
  if(keyIsDown(87)){
    yRaquete -= 10;
  }
  if(keyIsDown(83)){
    yRaquete += 10;
  }
}

function colisaoRaquete(x,y){
  colidiu = collideRectCircle(x, y, lRaquete, hRaquete, xBola, yBola, diametro)
  if (colidiu){
    velocidadeXBola *= -1;
    raquetada.play();
  }
}

function movimentaRaquete2(){
  if(keyIsDown(UP_ARROW)){
    yRaquete2 -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete2 += 10;
  }
}

function placar(pontos, x, y){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(x - 20, 10, 40, 20);
  fill(255);
  text(pontos, x, y);
}

function marcaPonto(){
  if(xBola > 590){
    pontosJ1 ++;
    ponto.play();
  } 
  if(xBola < 10){
    pontosJ2 ++;
    ponto.play();
  } 
}
