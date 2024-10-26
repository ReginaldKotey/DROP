# [DROP](https://github.com/ReginaldKotey/DROP/tree/main/DROP)
DROP is a thrilling JavaScript game where you control a bee dodging randomly falling blocks. With simple controls and fast-paced action, your goal is to survive as long as possible. How long can you keep your bee in the air?

[![p5.js Sketch](https://github.com/user-attachments/assets/551c89e0-0105-481f-9ddd-c3517e3d79fc)](https://editor.p5js.org/Rekas/full/ovpCxHx55)

## 1. Background Scroll (`BS`)

### Purpose
Controls the game background and scroll speed based on the current level.

### Properties
- **Backgrounds**: `B1` through `B8` represent level-specific backgrounds.
- **Scrolling**: `y1` and `y2` manage two vertically stacked backgrounds for a seamless scroll.
- **Level & Score**: Tracks the game’s level and score.

### Methods
- **showBG**: Displays the background according to the current level using a switch case. Scrolls continuously, resetting positions once they move out of view.
- **printlvl**: Displays the level and score on the screen.

## 2. Game Over (`gameOver`)

### Purpose
Manages the game over screen, showing the current and high scores and offering options to replay or return to the main menu.

### Properties
- **High Score**: Stores the highest score achieved.
- **Menu/Replay Booleans**: `menubool` and `replaybool` control navigation to the main menu or replay.

### Methods
- **show**: Displays the game over background, high score, and current score. Offers two buttons—"Main Menu" and "Retry"—with hover effects and sound effects on click.

## 3. Help (`help`)

### Purpose
Displays the help or instructions page.

### Properties
- **Help Boolean**: `helpbool` controls whether the help page is open.
- **Assets**: Background image and a sound effect for button interactions.

### Methods
- **helpshow**: Shows the help page with game instructions in a text box.
- **instructions**: Provides specific gameplay instructions for the user.
- **okay**: Checks if the "Okay" button is clicked to close the help page.

## 4. Intro Page (`ipage`)

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

## Code Structure
Each class is highly encapsulated with dedicated methods to update the UI based on user input, sound effects, and background transitions. The main game flow relies on setting and checking boolean values (`playbool`, `menubool`, `replaybool`, `helpbool`) to navigate between game states (main menu, in-game, help, game over). Sound effects accompany actions for a more interactive experience.

This setup supports clear game-state transitions, keeping the logic for each component neatly organized in its respective class.


