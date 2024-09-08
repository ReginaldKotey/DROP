class gameOver{//this method prints the gameover page and also sets the buttons for going to the main menu or to retry at the same level
  constructor(GB,F1,F2,S1,S2,S5){//takes in the gameover background, the two fonts, and the sound for button selection,ingame sound and outgame sound
    this.GB=GB;//background
    this.F1=F1;//font 1
    this.F2=F2;//font 2
    this.score=0;//this is the highscore variable
    this.menubool=false;//this boolean controls the menu buttons and returns true to make the menu page/ intro page to show
    this.replaybool=false;//this boolean will make the score to be reset and will start the game again
  }
  show(score){//this method takes the score from a different class and prints the score in this page
    this.menubool=false;//this resets the buttons in this page to false when it is called to prevent the game from retrying without the user being asked
    this.replaybool=false;
    this.GB.resize(width,height);//dispalying the background
    image(this.GB,0,0);
    if(score>this.score){
      this.score=score;//this.score is the highscore so if your score is higher, then the previous highscore is replaced
    }
    fill(100);//basic edits to display the high score, score and buttons to be created
    textSize(20);
    textAlign(LEFT);
    textFont(this.F1);
    text("Highest",10,40);
    text("Score:",10,70);
    text(this.score,125,70);
    textSize(40);
    textAlign(CENTER);
    textFont(this.F2);
    text("Your Score",200,140);
    textSize(30);
    textFont(this.F1);
    text(score,190,190);
    textAlign(LEFT);
    fill(100);
    if(mouseX>20&&mouseX<170&&mouseY>400&&mouseY<480){
      fill(70);//creating the hover effect
    }
    rect(20,400,150,80,30);//drawing the buttons
    fill(0);
    textSize(15);
    text("Main Menu",27,450)
  if(mouseX>20&&mouseX<170&&mouseY>400&&mouseY<480&&mouseIsPressed){
    S2.play();  //if the main menu button is taped play the clicked sound
    this.menubool=true;//set the intro page bool to true to display intro page
    }
     fill(100);
    if(mouseX>200&&mouseX<350&&mouseY>400&&mouseY<480){
      fill(70);//creating hover effect
    }
    rect(200,400,150,80,30);
    fill(0);
    textSize(15);
    text("Retry",240,450)
  if(mouseX>200&&mouseX<350&&mouseY>400&&mouseY<480&&mouseIsPressed){
    S2.play(); //if the retry button is taped play the cool clicked sound
    S1.pause();//pause the out game background sound
    S5.play();//play the ingame sound
    this.replaybool=true;//redisplay the in game page
    }
  }
}