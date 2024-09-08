let x;//dropblock class object
let y;//background class object
let introp;//intropage 
let gameover;//gameover page
let gamebool=false;//boolean to play game
let introbool=true;//boolean to show intro page
let gameoverbool=false;//boolean to show gameover
let replaybool=false;//boolean to replay game

let B1;//background1 
let B2;//background 2...
let B3;
let B4;
let B5;
let B6;
let B7;
let B8;
let IB;//intropage background
let GB;//gameover page background

let F1;//font 1
let F2;//font 2

let S1;//sound 1
let S2;//sound 2..
let S3;
let S4;
let S5;

let P1;//players


function preload(){
  //in this preload function we will load all the uploads we need before we even start the game. The folder name is always mentioned before the file name to help the compiler to know the location of the file we want to add.
  B1=loadImage("Background/B1.jpg");//these sets are for the background
  B2=loadImage("Background/B2.jpg");
  B3=loadImage("Background/B3.jpg");
  B4=loadImage("Background/B4.jpg");
  B5=loadImage("Background/B5.jpg");
  B6=loadImage("Background/B6.jpg");
  B7=loadImage("Background/B7.jpg");
  B8=loadImage("Background/B8.jpg");
  IB=loadImage("Background/IB.jpg");
  GB=loadImage("Background/GB.jpg");
  F1=loadFont("Fonts/Font1.ttf");//these sets are for the fonts 
  F2=loadFont("Fonts/Font2.ttf");
  S1=loadSound("Sounds/unplay.mp3");//these sets are for the sounds 
  S2=loadSound("Sounds/select.mp3");
  S3=loadSound("Sounds/hover.mp3");
  S4=loadSound("Sounds/hit.mp3");
  S5=loadSound("Sounds/play.mp3");
  P1=loadImage("Players/bee.png");// this one is to load the player png
}
function setup() {
  createCanvas(400, 500);
  introp=new ipage(IB,F1,F2,S1,S2,S3,S5,P1);//create intropage object
  S1.loop();//loop not playing sound
  S5.loop();//loop paying sound
  S5.pause();//pause in game sound
  gameover= new gameOver(GB,F1,F2,S5);//creating the gameover page
  help=new help(IB,S3);//creating the help page
}

function draw() {
  if(introbool){
    introp.getslider().show();//show the slider in the introp class
    gamebool=introp.show();//get return boolen from intro. show method
    if(introp.helpbool){
      introp.getslider().hide();//hide slider
      help.helpshow();//showhelp page
      help.okay();//show okay button
      if(help.helpbool){
        introp.helpbool=false;//set the intro page to false
        help.helpbool=false;//set helppage to false
      }
    }
    if(gamebool){
      introbool=false;//when the game is playing set the intro page to false
    }
    x= new dropBlocks(introp.getlvl(),S1,S4);//create the dropblock object
    y=new BS(x.getlvl(),B1,B2,B3,B4,B5,B6,B7,B8);//create the background object
    x.createBlock();//call the createblock 
  }
 if(gamebool){
   introp.getslider().hide();//when playing hide the slider
  fill(100);
    y.showBG(x.getlvl());
    image(P1,min(mouseX-10, 390),min(mouseY-10,490),20,20);//create the palyer image
    gameoverbool=x.collision();//call the colision function
    x.drop();//make the blocks drop
    y.printlvl(x.getscore());//print lvel and score
 }
  if(gameoverbool){//if the user crashes
    introp.getslider().hide();//hide slider
    gamebool=false;
    gameover.show(x.score);
    introbool=gameover.menubool;
    replaybool=gameover.replaybool;
    if(introbool){
      x.destructor();//deallocating memory
      gameoverbool=false;
      introp.playbool=false;
    }
    if(replaybool){//if replayed replay and reset all the stuff needed for the block
      gameoverbool=false;
      x.recreate();
      x.score=0;
      gamebool=true;
      introp.playbool=true;
    }
  }
}