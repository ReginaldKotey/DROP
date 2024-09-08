class dropBlocks{//Class that will control the falling blocks, lvl progression and score keeping.
  constructor(lvl,S1,S4,S5){//takes the level, sound 1, 4 and 5
    this.lvl=lvl;//this lvl equals lvl
    this.blockArray=[];//Array to hold objects created
    this.score=0;//variable to keep score
  }
  createBlock(){//this method creates a Block and stores it in the block array
    for(let i=0;i<(this.lvl);i++){
      this.blockArray[i]=new Block(this.lvl);//create block object
      this.blockArray[i].setBlock();//set the block object
      this.blockArray[i].drawBlock();//draw the block object to make it visible
    }
  }
  deleteBlock(){//this method deletes blocks...used to delete blocks when they cross the height of the canvas.
    for(let i=0;i<(this.lvl);i++){
      if(this.blockArray[i].getY()>height){//if the top of the object for each object in the array has passed the height of the canvas
        this.score++;//increment the score by one.
        //for every level there is a score boundary that one is suppose to reach to move to the next level the if else code block below sets every level's boundary and increments the number of blocks for each level while increasing the level.
        if(this.lvl==1&&(this.score%3)==0){//if the score is 3, and we are on level one, increase the level and add one block object to the array
          this.blockArray[this.lvl]=new Block(this.lvl);//add the block
          this.blockArray[this.lvl].setBlock();//setting the new block that has been added
          this.blockArray[this.lvl].drawBlock();//draw the block that was jusr added
          this.lvl++//increment the lvl
        }
        else if(this.lvl==2&&(this.score%13)==0){//similar to above and below but each statement has its own treshold
          this.blockArray[this.lvl]=new Block(this.lvl);
          this.blockArray[this.lvl].setBlock();
          this.blockArray[this.lvl].drawBlock();
          this.lvl++
        }
        else if(this.lvl==3&&(this.score%23)==0){
          this.blockArray[this.lvl]=new Block(this.lvl);
          this.blockArray[this.lvl].setBlock();
          this.blockArray[this.lvl].drawBlock();
          this.lvl++
        }
        else if(this.lvl==4&&(this.score%33)==0){
          this.blockArray[this.lvl]=new Block(this.lvl);
          this.blockArray[this.lvl].setBlock();
          this.blockArray[this.lvl].drawBlock();
          this.lvl++
        }
        else if(this.lvl==5&&(this.score%45)==0){
          this.blockArray[this.lvl]=new Block(this.lvl);
          this.blockArray[this.lvl].setBlock();
          this.blockArray[this.lvl].drawBlock();
          this.lvl++
        }
        else if(this.lvl==6&&(this.score%60)==0){
          this.blockArray[this.lvl]=new Block(this.lvl);
          this.blockArray[this.lvl].setBlock();
          this.blockArray[this.lvl].drawBlock();
          this.lvl++
        }
        else if(this.lvl==7&&(this.score%80)==0){
          this.blockArray[this.lvl]=new Block(this.lvl);
          this.blockArray[this.lvl].setBlock();
          this.blockArray[this.lvl].drawBlock();
          this.lvl++
        }
        else if(this.lvl==8&&(this.score%100)==0){
          this.blockArray[this.lvl]=new Block(this.lvl);
          this.blockArray[this.lvl].setBlock();
          this.blockArray[this.lvl].drawBlock();
          this.lvl++
          if(this.lvl==9){//since level 8 is the last level, if, the level goes to level 9, decrement the level back to level 8.
            this.lvl--;//decrement the level
        }
         }
        delete this.blockArray[i];//if the block has passed the height, delete the block object,
        this.blockArray[i]=new Block(this.lvl);//create a new object and replace it with the old one that was deleted
        this.blockArray[i].setBlock();//set block to give it a new x coordinate and y coordinate and size etc. we donot draw the block because we need to draw it just once 
       }
   }
  }
  
  drop(){//this method moves the objects that are in the array by just calling the move function in the block class
    for(let i=0;i<(this.lvl);i++){
      this.blockArray[i].move();//move
      }
      this.deleteBlock();//calling the delete block that cleans rhe objects if they are at the end of the canvas.
    }
   getlvl(){//this method just returns the level
     return this.lvl;//return the current level
   }
  getscore(){//this method returns the score similar to the top method
    return this.score;//return the score
  }
  collision(){//this method is the one that checks if the play has collided with the falling blocks. It does this by going through the array and checking if the arrays height and width in accordance to the x and y coordinate intersect with the players circular dimensions.
    for(let i=0;i<this.lvl;i++){
      if(
        mouseX+10>this.blockArray[i].x&&mouseX-10<this.blockArray[i].x+this.blockArray[i].w&&
        mouseY+10>this.blockArray[i].y+5&&mouseY-10<this.blockArray[i].y+this.blockArray[i].h-5){//if there is an intersection,
        S4.play();//play the hit sound
        S1.play();//play the sound played when not playing. In this case I use S4 and not this,S4 because i want to access an object by reference to have control of the object that was initially playing in the game regardless of the objects location. creating this.S4 will create a copy and we would either start the sound or end up playing over another preexisting sound 
        S5.pause();//pause the in game sound... yeah the annoying one
         return true;//return true...this method is a boolean type method that would be used to call othe pages
    }
  }
}
  recreate(){//this section of the code is used to recreate blocks if needed
    for(let i=0;i<(this.lvl);i++){//it is quite similar to the create block one 
      delete this.blockArray[i];//delete before you end up creating the block
      this.blockArray[i]=new Block(this.lvl);
      this.blockArray[i].setBlock();
      this.blockArray[i].drawBlock();
    }
  }
  destructor(){//creating a destructor class that when called, deletes all dynamic objects to prevent memory leak.
    for(let i=0;i<(this.lvl);i++){
      delete this.blockArray[i];
    }
  }
}