




//Gets the HTML elent with id ('element')
const dino = document.getElementById('dino')
const rock = document.getElementById('rock')
const score = document.getElementById('score')




function jump() {
    /*set duration of the jump-animation to 500ms 
    the duration will be from classList.add to classList.remove
    classList*/
    dino.classList.add('jump-animation');
    setTimeout(() => {
        dino.classList.remove('jump-animation');
    }, 500);
}
/*the program listens for any keypress. 
if any keyboard button is pressed
the function jump is called if dino's classList contains "jump-animation (boolean)"*/
document.addEventListener('keypress', () => {
    if (!dino.classList.contains('jump-animation')) {  
    jump();
    }
});

document.addEventListener("click", jump());



/* setInterval checks an expression
 at specified intervals in ms
 for both constants dinoTop and rockLeft 
we are going to do the following:
using getComputedStyle:
we get a property from style.css (#dino and #rock)
then
using parseInt
we get the value with getPropertyValue of those two assets
in real time (the values we want to parse is 'top' and 'left')
we can use console.log(dinoTop or rockLeft) to see their position relative to the top*/
setInterval(() => {



    // at the close of this setInterval function
    // we have the interval of 50ms
   
    //the score increases (increments by 1) at every loop 
    // of this function
    // 1 point every 50ms 
    score.innerText++;
    
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    /*check rock's left position*/
    const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));





// we want the rock to not go out of the game's border
// so we will make sure the rock is hidden when it becomes a negative value
    if (rockLeft < 0) {
    rock.style.display = 'none';
    } else {

    rock.style.display = '';
    }   







// Collision detection
//we make a condition for a collision
// IF the rock is less than 50px from the left border 
// AND more than 0px from the left border
// AND the dinosaur is more than 150px ( remember we count from top 
// so 225 is ground and 75 is high in the air 
// which makes 150 a nice threshold).

    if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150 ) {
   
   //REMOVED ALERT AND REPLACED WITH SCOREBOARD accumulator funcion
  
  // Must be fixed: currently for the duration of a collision 
  //(which is roughly 3-4 * 50ms the scoreboard prints out 
  //  3-4 scores instead of printing a single )
   myFunction()
        // appending score string + score value + question string
      //  alert("You got a score of: " + score.innerText + '\n\nPlay again?');
    
    //reload() function applied to the location aka the website    
    // to get the score back to zero
   
    // REMOVED Page reload after collision
    // location.reload();

    }

}, 50);

// Scoreboard (not within scope of youtube tutorial)
function myFunction() {
  var x = document.createElement("TABLE");
  x.setAttribute("id", "myTable");
  document.body.appendChild(x);

  var y = document.createElement("TR");
  y.setAttribute("id", "myTr");
  document.getElementById("myTable").appendChild(y);

  var z = document.createElement("TD");
  var t = document.createTextNode("cell");
  z.appendChild(t);
  document.getElementById("myTr").appendChild(z);
}

