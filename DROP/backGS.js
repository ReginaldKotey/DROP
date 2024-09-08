//This class controls the background overall when playing the game
class BS{
  constructor(level,B1,B2,B3,B4,B5,B6,B7,B8){//takes all the loaded backgrounds and sets variables to them. it also takes the lvl to be displayed
    this.B1=B1;//lvl1 background
    this.B2=B2;//lvl2 background
    this.B3=B3;//lvl3 background
    this.B4=B4;//lvl4 background
    this.B5=B5;//lvl5 background
    this.B6=B6;//lvl6 background
    this.B7=B7;//lvl7 background
    this.B8=B8;//lvl8 background
    this.score=0;//this variable will receive the current score from a different class and displays it in a print level and score function
    this.lvl=level;
    this.BG=B1;//setting the background to level 1 by default
    this.y1=0;//y coordinate for the background pictures
    this.y2=height;//here we have two pictures next to each other. from 0 to height times 2
    this.scrollspeed=1.5;//setting the backgroundscroll speed
  }
  showBG(lvl){//this method is in charge of displaying the right backgrounds based on the lvl and updates the level every time it is called
    this.lvl=lvl;
    switch(this.lvl){//switch case that takes in the current level and based on the level selects the right background.
      case 1:
        this.BG=B1;//equate the background variable with the image based on the level
        break;
      case 2:
        this.BG=B2;
        break;
      case 3:
        this.BG=B3;
        break;
      case 4:
        this.BG=B4;
        break;
      case 5:
        this.BG=B5;
        break;
      case 6:
        this.BG=B6;
        break;
      case 7:
        this.BG=B7;
        break;
      case 8:
        this.BG=B8;
        break;
        default:
        this.BG=B1;//by default let it show the background at level 1
    }
    image(this.BG,0,this.y1,width,height);//create image at this.y1
    image(this.BG,0,this.y2,width,height);//create image at this.y2
    this.y1 -= this.scrollspeed;//decrement the speedd for both
    this.y2 -= this.scrollspeed;

    if (this.y1 < -height){//if the top of this background is at -height reset it to height
      this.y1 = height;
    }
    if (this.y2 < -height){//repeat the above for this y2 too
      this.y2 = height;
    }
  }
  printlvl(score){//this method receives a score from another class and then sets the score of this objects score 
    this.score=score;
    textSize(10);//sets the font size to 10
    text("Score:",0,30);//prints a  text at (0,30)
    text(this.score,60,30);//prints the score at (60,30)
    text("Level:",310,30);//prints a text "level" at (310,30)
    text(this.lvl,370,30);//prints a the level at(370,30)
  }
}
