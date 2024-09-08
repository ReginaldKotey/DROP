class ipage{//this is the intro page that you are greeted with in the game
  constructor(IB,F1,F2,S1,S2,S3,S5,P1){//receive all needed variables as in images and sound
    this.BG=IB;//the background
    this.F1=F1;//font 1
    this.F2=F2;//font 2
    this.slider=createSlider(1,8,1);//creating a slider from 1 to 8 and by default at 1
    this.lvl=this.slider.value();//allowing the slider to control the level 
    this.playbool=false;//boolean to start game
    this.helpbool=false;//boolean to open help page
  }
  show(){//this shows the designs in the page
    this.BG.resize(width,height);
    image(this.BG,0,0);//displayign background
    textAlign(CENTER);
    this.createhelp();//calling the help function for the help page
    textSize(80);
    textFont(this.F2);
    fill(100);
    text("DROP",200,200);
    textFont(this.F1);
    rectMode(CENTER);
    push();//pasting a tilted form of the player
    translate(220,270);//making the origin 220,270
    rotate(-0.7);//rotating anticlockwise by 0.7radians
    image(P1,0,0);//displaying image
    pop();//endint the shape to take this effect
    fill(255,255,0);
    rect(210,250,30,100,15);
    rectMode(CORNER);
    this.showlvl();//calling the show level method
    this.playbox();//calling the playbox buttin function
    return this.playbool;//this returns true if the play button is pressed
  }
  
  showlvl(){//this method just shows the level and reequates the slider value to the level value
    this.lvl=this.slider.value();
    this.slider.position(10, 470);//sets the slider position
    this.slider.style('width', '80px');//designing the slide width
    fill(0);
    textAlign(LEFT);
    textSize(20);
    text("Level",5,440);
    textSize(30);
    text(":",5,470);
    text(this.lvl,30,470);
  }
  
  playbox(){
    fill(100);
    if(mouseX>200&&mouseX<350&&mouseY>400&&mouseY<480){
      fill(70);//creating the hover effect
    }
    rect(200,400,150,80,30);
    fill(0);
    text("Play",218,457)
    if(mouseX>200&&mouseX<350&&mouseY>400&&mouseY<480&&mouseIsPressed){
      S2.play();// the play is pressed, play pause the background music and play the in game music
      S1.pause();//pausing the first sound
      S5.play();//play in game sound
      this.playbool=true;//sets the playboolean to true 
    }
  }
  getlvl(){
    return this.lvl;
    }
  getslider(){
    return this.slider;//returns the pointer to the slider
  }
  createhelp(){
    fill(100);
    if(dist(mouseX,mouseY,370,30)<=20){
      fill(60);//create hover effect
    }
    if(dist(mouseX,mouseY,370,30)<=20&&mouseIsPressed){
      S3.play();//play the clicked sound
      this.helpbool=true;//set boolean to open help page
    }
    circle(370,30,40);//these following code just creates the help button
    fill(255,255,0);
    textSize(30);
    textFont(NORMAL);
    text("?",370,40);
  }
}