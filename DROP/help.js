class help{//this class takes care of the help page
  constructor(BG,S3){//takes in the help button sound and the main background
    this.BG=BG;//copying background to this variable
    this.helpbool=false;//this boolean variable helps navigate in and out of the help page.
  }
  helpshow(){//this method shows the help page 
    this.BG.resize(width,height);//resizing the page which could have been done the the image function
    image(this.BG,0,0);//displaying the image
    rectMode(CORNER);
    fill(100);
    rect(50,50,300,400,20);//drawing the ash background 
    this.instructions();//calling the instructions function
  }
  instructions(){//this method just writing the instructions in the ash box created
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("DROP",200,100);
    textSize(15);
    textAlign(LEFT);
    text("To Play the Game,",60,150);
    text("first select your",60,175);
    text("level and click on",60,195);
    text("the play button at",60,215);
    text("the bottom right.",60,235);
    text("of the Main Menu",60,255)
    text("Move the mouse to",60,275);
    text("control the player.",60,295);
    text("Make sure to not",60,315);
    text("hit any of the ",60,335);
    text("falling blocks.",60,353)
    text("Cool?",60,370);
    fill(255,255,0);
    if(dist(mouseX,mouseY,199,400)<=25){
      fill(100,100,0);//creatig a hover effect 
    }
    circle(199,400,50);//drawing the okay button
    textAlign(CENTER);
    fill(100);
    textSize(20)
    text("YH",198,411);
  }
  okay(){//this method makes the okay circle act like a button 
    if(dist(mouseX,mouseY,199,400)<=25&&mouseIsPressed){
      S3.play();//play the is help clicked sound
    this.helpbool=true;//make the help bool true
  }
  }
}