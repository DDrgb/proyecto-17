var cuadrotext, cuadrotextImg
var mama, mamaImg
var mujerblanc, mujerblancImg
var niño1, niño1Img
var escuela, escuelaImg
var habitacion, habitacionImg 
var director, directorImg
var casacarton, casacartonImg
var cocina, cocinaImg
var hermano1, hermano1Img
var hermana1, hermana1Img
var maestra, maestraImg 
var salan, salanImg
var escenarios =1
function preload(){
  cuadrotextImg= loadImage("cuadro de texto.jpg");
  mamaImg=loadImage("mama1.png");
  niño1Img=loadImage("niño1.jpg");
  escuelaImg=loadImage("escuela.jpg");
  habitacionImg=loadImage("habitacion.jpg");
  directorImg=loadImage("director.jpg");
  casacartonImg=loadImage("casadestruida.jpg");
  cocinaImg=loadImage("cocina.jpg");
  hermano1Img=loadImage("hermano.jpg")
  hermana1Img=loadImage("hermana.png");
  maestraImg=loadImage("maestra.png");
  mujerblancImg=loadImage("mujer de blanco.jpg");
  salanImg=loadImage("cuarton.jpg");
}



function setup() {
  createCanvas(600, 600);
  cuadrotext=createSprite(300,530,100,30);
  cuadrotext.addImage(cuadrotextImg);
  cuadrotext.scale=0.3;
  
  maestra=createSprite(300,530,100,30);
  maestra.addImage(maestraImg)
  maestra.visible=false
  
mama=createSprite(300,300,100,50);
mama.addImage( mamaImg);  
mama.scale=0.1
  mama.visible=false
  
niño1=createSprite(300,300,100,30);
  niño1.addImage(niño1Img);
  niño1.scale=0.4
  niño1.visible=false
  escuela=createSprite(300,300,100,50);
  escuela.addImage(escuelaImg);
  escuela.visible=false
  habitacion=createSprite(300,300,100,50);
  habitacion.addImage(habitacionImg)
  habitacion.scale=1.4
  habitacion.visible=false
  director=createSprite(300,300,100,50);
  director.addImage(directorImg);
  director.scale=0.6
  director.visible=false
  casacarton=createSprite(300,300,100,50);
  casacarton.addImage(casacartonImg);
  casacarton.scale=2.5
  casacarton.visible=false
  mujerblanc=createSprite(300,300,100,50);
  mujerblanc.scale=0.2
  mujerblanc.visible=false
  
  cocina=createSprite(300,300,100,50);
  cocina.addImage(cocinaImg)
  cocina.visible=false
  
  
  hermano1=createSprite(300,300,100,50);
  hermano1.addImage(hermano1Img)
  hermano1.visible=false
  
  salan=createSprite(300,300,100,50);
  salan.addImage(salanImg)
  salan.visible=false
}

function draw() {
  background(220);
  if (keyDown("right")){
    escenarios=escenarios+1
  }
  
  if (keyDown("left")){
    escenarios=escenarios-1
  }
  //habitacion  negra 1 
  if(escenarios===1){
    niño1.visible=false
    escuela.visible=false
    habitacion.visible=false
    director.visible=false
    casacarton.visible=false
    mama.visible=false
    salan=true
    mujerblanc=true
    hermano1.visible=false
    textSize(16);
    text("fuiste tu, fuiste tu , fuiste tu",300,550)
  cuadrotext.depth=cuadrotext.depth-3
  }
   //habitacion con mama 
  if(escenarios===2){
    niño1.visible=false
    escuela.visible=false
    habitacion.visible=true
    director.visible=false
    casacarton.visible=false
    mama.visible=true
    mama.depth=habitacion.depth+1
    cuadrotext.depth=habitacion.depth+1
    salan=false
    mujerblanc=false
    hermano1.visible=false
    textSize(16);
    text("hijo ya baja a desayunar, si no tu comida se va a enfriar",300,550)
  cuadrotext.depth=cuadrotext.depth-3
  }
  //cocina 1  
 if(escenarios===1){
    niño1.visible=false
    escuela.visible=false
    habitacion.visible=false
    director.visible=false
    casacarton.visible=false
    mama.visible=false
    salan=false
    mujerblanc=false
    textSize(16);
    text("hola",300,550)
  cuadrotext.depth=cuadrotext.depth-3
   hermano1.visible=true
 cocina.visible=true
   textSize(16);
    text("hermano apurate que ya nos vamos a la escuela ",300,550)
  cuadrotext.depth=cuadrotext.depth-3
  }
  
   //escuela 1 
 if(escenarios===1){
    niño1.visible=false
    escuela.visible=true
    habitacion.visible=false
    director.visible=false
    casacarton.visible=false
    mama.visible=false
    salan=false
    mujerblanc=false
    textSize(16);
    text("hola",300,550)
  cuadrotext.depth=cuadrotext.depth-3
   hermano1.visible=false
   textSize(16);
    text("muy bien chicos esto es todo por hoy se pueden ir a casa lindo dia",300,550)
  cuadrotext.depth=cuadrotext.depth-3
  } 
   //haitacion negra 2 
  if(escenarios===1){
    niño1.visible=false
    escuela.visible=false
    habitacion.visible=false
    director.visible=false
    casacarton.visible=false
    mama.visible=false
    salan=true
    mujerblanc=true
    textSize(16);
    text("tienes que disculparte",300,550)
    hermano1.visible=false
  }
   //habitacion 2 con mama 
  if(escenarios===1){
    niño1.visible=false
    escuela.visible=false
    habitacion.visible=true
    director.visible=false
    casacarton.visible=false
    mama.visible=true
    salan=false
    mujerblanc=false
    textSize(16);
    text("hijo ya es hora ven vamos a desayunar hoy te hice tu favorito",300,550)
  cuadrotext.depth=cuadrotext.depth-3
    hermano1.visible=false
  }
   //cocina 2
  if(escenarios===1){
    niño1.visible=false
    escuela.visible=false
    habitacion.visible=false
    director.visible=false
    casacarton.visible=false
    mama.visible=false
    salan=false
    mujerblanc=false
    textSize(16);
    text("hola",300,550)
  cuadrotext.depth=cuadrotext.depth-3
    hermano1.visible=true
    cocina.visible=true
    textSize(16);
    text("hermano hoy no podre ir a la escuela me siento mal asi que preparate y puedes irte sin mi",300,550)
  cuadrotext.depth=cuadrotext.depth-3
  }
   // escuela 2
  if(escenarios===1){
    niño1.visible=false
    escuela.visible=true
    maestra.visible=true
    habitacion.visible=false
    director.visible=false
    casacarton.visible=false
    mama.visible=false
    salan=false
    mujerblanc=false
    textSize(16);
    text("protagonista te hablan direccion asi que acompañame para ir al ver al director ",300,550)
  cuadrotext.depth=cuadrotext.depth-3
    hermano1.visible=false
  }
   // direccion 1
  if(escenarios===1){
    niño1.visible=false
    escuela.visible=true
    habitacion.visible=false
    director.visible=true
    casacarton.visible=false
    mama.visible=false
    salan=true
    mujerblanc=true
    textSize(16);
    text("protagonista, lo que hiciste es algo muy serio, como o poruqe golpeaste a esos chicos eh, y todavia te burlas de ellos grabandolo y haciendo esos gestos, lo que te espera es que te expulsaremos de la escuela ",300,550)
  cuadrotext.depth=cuadrotext.depth-3
    hermano1.visible=false
  }
   // habitacion negra
  if(escenarios===1){
    niño1.visible=false
    escuela.visible=false
    habitacion.visible=false
    director.visible=false
    casacarton.visible=false
    mama.visible=false
    salan=true
    mujerblanc=true
    textSize(16);
    text("tienes que disculparte, tienes que ser perdonado",300,550)
  cuadrotext.depth=cuadrotext.depth-3
    hermano1.visible=false
  }
   //casa carton 
  if(escenarios===1){
    niño1.visible=false
    escuela.visible=false
    habitacion.visible=false
    director.visible=false
    casacarton.visible=true
    mama.visible=false
    salan=false
    mujerblanc=false
    textSize(16);
    text("hermano , hermano, HERMANO ya despierta tengo hambre ayudame a  buscar algo de comer",300,550)
  cuadrotext.depth=cuadrotext.depth-3
    hermano1.visible=false
  }
  
  
  drawSprites();
}