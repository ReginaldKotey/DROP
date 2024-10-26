# [DROP](https://github.com/ReginaldKotey/DROP/tree/main/DROP)
DROP is a thrilling JavaScript game where you control a bee dodging randomly falling blocks. With simple controls and fast-paced action, your goal is to survive as long as possible. How long can you keep your bee in the air?

[![p5.js Sketch](https://github.com/user-attachments/assets/551c89e0-0105-481f-9ddd-c3517e3d79fc)](https://editor.p5js.org/Rekas/full/ovpCxHx55)

## Features

- **Dynamic Difficulty**: The game adjusts the falling blocks' properties, such as speed and width, according to the current level.
- **Scoring System**: Players earn points as blocks cross a certain height, enabling level progression.
- **Collision Detection**: The game detects collisions between the player's cursor and falling blocks, playing sound effects upon interaction.
- **Visual Feedback**: The blocks are drawn in real-time, enhancing the interactive experience.

## Code Overview

### [Block Class](https://github.com/ReginaldKotey/DROP/blob/main/DROP/Blocks.js)

The `Block` class creates individual falling blocks with properties based on the current level. Here's a breakdown of its components:

#### Constructor
- **`constructor(lvl)`**: Initializes a block with random `x` and `y` coordinates, `width`, `height`, and `drop speed`. The level (`lvl`) determines the block's attributes.

#### Main Methods
- **`setBlock()`**: Assigns properties to the block based on the level:
  - Varies the width of the block as the level increases.
  - Randomizes the `x` coordinate and `drop speed` for a unique experience.
  
- **`drawBlock()`**: Renders the block on the canvas without strokes, filling it with a color.

- **`move()`**: Updates the block's position by incrementing its `y` coordinate based on the drop speed.

- **`getY()`**: Returns the current `y` coordinate of the block.

### [DropBlocks Class](https://github.com/ReginaldKotey/DROP/blob/main/DROP/DropBlocks.js)

The `dropBlocks` class manages the falling blocks, scorekeeping, and level progression. Here are its key components:

#### Constructor
- **`constructor(lvl, S1, S4, S5)`**: Initializes the class with the current level and sound objects.

#### Main Methods
- **`createBlock()`**: Generates a new block for each level and adds it to the block array.
  
- **`deleteBlock()`**: Removes blocks that have passed the bottom of the canvas:
  - Increments the score and checks for level progression based on score thresholds.
  
- **`drop()`**: Moves each block down the canvas by calling their respective move methods and cleans up any that have exited the screen.

- **`getlvl()`**: Returns the current level of the game.

- **`getscore()`**: Returns the current score.

- **`collision()`**: Detects if the player's cursor collides with any falling blocks. It plays sound effects upon collision and returns `true` if a collision occurs.

- **`recreate()`**: Recreates blocks when needed, ensuring the game runs smoothly.

- **`destructor()`**: Deletes all dynamic block objects to prevent memory leaks.


## [Background Scroll](https://github.com/ReginaldKotey/DROP/blob/main/DROP/backGS.js)

### Purpose
Controls the game background and scroll speed based on the current level.

### Properties
- **Backgrounds**: `B1` through `B8` represent level-specific backgrounds.
- **Scrolling**: `y1` and `y2` manage two vertically stacked backgrounds for a seamless scroll.
- **Level & Score**: Tracks the game’s level and score.

### Methods
- **showBG**: Displays the background according to the current level using a switch case. Scrolls continuously, resetting positions once they move out of view.
- **printlvl**: Displays the level and score on the screen.

## [Game Over](https://github.com/ReginaldKotey/DROP/blob/main/DROP/gameover.js)

### Purpose
Manages the game over screen, showing the current and high scores and offering options to replay or return to the main menu.

### Properties
- **High Score**: Stores the highest score achieved.
- **Menu/Replay Booleans**: `menubool` and `replaybool` control navigation to the main menu or replay.

### Methods
- **show**: Displays the game over background, high score, and current score. Offers two buttons—"Main Menu" and "Retry"—with hover effects and sound effects on click.

## [Help](https://github.com/ReginaldKotey/DROP/blob/main/DROP/help.js)

### Purpose
Displays the help or instructions page.

### Properties
- **Help Boolean**: `helpbool` controls whether the help page is open.
- **Assets**: Background image and a sound effect for button interactions.

### Methods
- **helpshow**: Shows the help page with game instructions in a text box.
- **instructions**: Provides specific gameplay instructions for the user.
- **okay**: Checks if the "Okay" button is clicked to close the help page.

## [Intro Page](https://github.com/ReginaldKotey/DROP/blob/main/DROP/intropage.js)

### Purpose
The initial page where users select the level and start the game or access the help section.

### Properties
- **Background, Fonts, Sounds**: Main image, fonts, and sound assets for gameplay transitions.
- **Level Selection**: `slider` sets the game level between 1 and 8.
- **Booleans**: `playbool` starts the game, and `helpbool` opens the help page.

### Methods
- **show**: Displays the background, level selector, and a tilted player image.
- **showlvl**: Shows and updates the level selection slider.
- **playbox**: Displays and checks interaction with the "Play" button.
- **getlvl**: Returns the selected level.
- **createhelp**: Generates a clickable help button.


