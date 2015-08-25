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
