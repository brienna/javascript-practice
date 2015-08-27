<a href="https://github.com/AlexNisnevich/untrusted" target="_blank">Untrusted</a> is an adventure game by <a href="http://alex.nisnevich.com/" target="_blank">Alex Nisnevich</a> and <a href="https://github.com/neuenak/" target="_blank">Greg Shuflin</a> "wherein you guide the dashing, steadfast Dr. Eval through a mysterious MACHINE CONTINUUM, wherein, using only his trusty computer and the TURING-COMPLETE power of JavaScript, he must literally ALTER HIS REALITY in order to find his freedom! You must literally edit and re-execute the very JavaScript running the game in your browser to save Dr. Eval from this dark and confusing reality!" 

You can play the game <a href="http://alexnisnevich.github.io/untrusted/" target="_blank">here</a>. 

###01 cellBlockA
#####First solution:

Change an existing `map.placeObject` function call within the second `for` loop, reducing the value of the second argument (the y-coordinate) by 2 to insert a gap for the player to pass through:

```javascript
map.placeObject(x, map.getHeight() - 8, 'block');
```

#####Second solution:
Place a second exit right below the computer:
```javascript
map.placeObject(15, 13, 'exit');
```

###02 theLongWayOut
Comment out all the blocks:

```javascript
/*
...
*/
```

###03 validationEngaged
Change an existing `map.placeObject` function call within the first `for` loop, reducing the value of the first argument (the x-coordinate) by 2 to insert a gap for the player to pass through: 

```javascript
map.placeObject(map.getWidth() - 3, y, 'block');
```

###04 multiplicity
Place a second exit right above the player:

```javascript
map.placeObject(45, 20, 'exit');
```

###05 minesweeper
Set the mines' color to black:

```javascript
map.setSquareColor(x, y, '#000');
```

###06 drones101
Prevent the drone from colliding with the player by separating the two with a row of blocks: 

```javascript
for (var i = 0; i < map.getWidth() - 5; i++) {
    map.placeObject(i, 3, 'block');
}
```

###07 colors
Set the function phone callback to change the player's color based on its current color:

```javascript
var player = map.getPlayer();
    
if (player.getColor() == '#0f0') {
	player.setColor('#f00');
} else if (player.getColor() == '#f00') {
	player.setColor('#ff0');
} else {
	player.setColor('#0f0');
}
```

###08 intoTheWoods
Set the function phone callback to generate a new forest:

```javascript
generateForest
```

###09 fordingTheRiver
Set the function phone callback to change the raft's direction from down to up:

```javascript
player.setPhoneCallback(function() {
    	raftDirection = 'up';
});
```

###10 ambush
Change the behavior of each drone type to clear a path to the exit:

attackDrone:
```javascript
moveToward(me, 'reinforcementDrone'); 
```

reinforcementDrone:
```javascript
me.move('right'); 
```

defenseDrone:
```javascript
if (me.getY() == 12) {
    me.move('down');
} else {
    me.move('right');
}
```
