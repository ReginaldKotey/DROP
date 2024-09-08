class Block{//this class basically creates individual falling blocks 
  constructor(lvl){//the constructor takes lvl to be able to adjust the move method and the dropspped
    this.x=random(0,width);//x-coordinate
    this.lvl=lvl;
    this.w=0;//width of the block
    this.h=random(50,150);//height of the block
    this.y=-this.h;//making the y axis negative to make it seem as though the block came from above and did nto just pop up
    this.dropspeed=random(1,lvl);//this controls the drop speed and is randomized to create the random speeds of different objects
  }
  
  setBlock(){
    switch(this.lvl){//switch case that based on the level that sets the values for each block to be created
      case 1:
        this.w=random(10,20);//setting the width
        this.x=random(0,width);//setting the x-coordinate
        this.h=random(50,150);//setting the height
        this.y=-this.h;//psetting y coordinate
        this.dropspeed=random(1,this.lvl);//setting dropspped
        break;//breaking to prevent other cases from running
      case 2:
        this.w=random(10,30);
        this.x=random(0,width);
        this.h=random(50,150);
        this.y=-this.h;
        this.dropspeed=random(1,this.lvl);
        break;
      case 3:
        this.w=random(10,40);
        this.x=random(0,width);
        this.h=random(50,150);
        this.y=-this.h;
        this.dropspeed=random(1,this.lvl);
        break;
      case 4:
        this.w=random(10,50);
        this.x=random(0,width);
        this.h=random(50,150);
        this.y=-this.h;
        this.dropspeed=random(1,this.lvl);
        break;
      case 5:
        this.w=random(10,60);
        this.x=random(0,width);
        this.h=random(50,150);
        this.y=-this.h;
        this.dropspeed=random(1,this.lvl);
        break;
      case 6:
        this.w=random(10,70);
        this.x=random(0,width);
        this.h=random(50,150);
        this.y=-this.h;
        this.dropspeed=random(1,this.lvl);
        break;
      case 7:
        this.w=random(10,80);
        this.x=random(0,width);
        this.h=random(50,150);
        this.y=-this.h;
        this.dropspeed=random(1,this.lvl);
        break;
      case 8:
        this.w=random(10,90);
        this.x=random(0,width);
        this.h=random(50,150);
        this.y=-this.h;
        this.dropspeed=random(1,this.lvl);
        break;
        default://this is the extra case to prevent errors but will not do anything
        this.w=random(10,90);
        this.x=random(0,width);
        this.h=random(50,150);
        this.y=-this.h;
        this.dropspeed=random(1,this.lvl);
    }
  }
  drawBlock(){//this function uses the values that have been set to create the blocks which are basically rectangels without strokes
    noStroke();//removing stroke
    rect(this.x,this.y,this.w,this.h,this.w/2);//creating the rectangle
    fill(0,255,0);
    fill(100);//filling the rectangle with ash
  }
  
  move(){//this function moves the individual blocks by incrementing the y-coordinate 
    this.y+=this.dropspeed;//increamenting the y coordinate
    rect(this.x,this.y,this.w,this.h,this.w/2);
    fill(0,255,0);
    fill(100);
  }
  getY(){
    return this.y;//returns the y coordinate
  }
}