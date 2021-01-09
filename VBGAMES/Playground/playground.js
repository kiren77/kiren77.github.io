//nested array
//19 pots of paint
//4 red
//4 blue
//4 yellow
//3 orange
//3 green
//1 purple (desert)


let sheepTile, woodTile, wheatTile, oreTile, brickTile, desertTile;
const tileType = ["sheep", "wood", "wheat", "ore", "brick", "desert"];


const remainingTiles = [
 
    {sheepTile: '#008000',  amountTiles: 4},//sheep
    {woodTile:  '#bdc001',  amountTiles: 4},//wood
    {wheatTile: '#606113',  amountTiles: 4},//wheat
    {oreTile:   '#bbbba3',  amountTiles: 3},//ore
    {brickTile: '#670320',  amountTiles: 3},//brick
    {desertTile:'#606113',  amountTiles: 1}//desert
];


//all cells
let cellOne, cellTwo, cellThree, cellFour, cellFive, cellSix, cellSeven, cellEight, cellNine, cellTen, cellEleven, cellTwelve, cellThirteen, cellFourteen, cellFifteen, cellSixteen, cellSeventeen, cellEighteen, cellNineteen;


const hexagonArray = [
    {hexNumb : 1,     hexId : document.getElementById("cellOne")},
    {hexNumb : 2,     hexId : document.getElementById("cellTwo")},
    {hexNumb : 3,     hexId : document.getElementById("cellThree")},
    {hexNumb : 4,     hexId : document.getElementById("cellFour")},
    {hexNumb : 5,     hexId : document.getElementById("cellFive")},
    {hexNumb : 6,     hexId : document.getElementById("cellSix")},
    {hexNumb : 7,     hexId : document.getElementById("cellSeven")},
    {hexNumb : 8,     hexId : document.getElementById("cellEight")},
    {hexNumb : 9,     hexId : document.getElementById("cellNine")},
    {hexNumb : 10,    hexId : document.getElementById("cellTen")},
    {hexNumb : 11,    hexId : document.getElementById("cellEleven")},
    {hexNumb : 12,    hexId : document.getElementById("cellTwelve")},
    {hexNumb : 13,    hexId : document.getElementById("cellThirteen")},
    {hexNumb : 14,    hexId : document.getElementById("cellFourteen")},
    {hexNumb : 15,    hexId : document.getElementById("cellFifteen")},
    {hexNumb : 16,    hexId : document.getElementById("cellSixteen")},
    {hexNumb : 17,    hexId : document.getElementById("cellSeventeen")},
    {hexNumb : 18,    hexId : document.getElementById("cellEighteen")},
    {hexNumb : 19,    hexId : document.getElementById("cellNineteen")}
];

function checkInitialArray(array) {
    var currentIndex = array.length;
     {
  
        // Pick a remaining element...
       // randomIndex = Math.floor(Math.random() * currentIndex);
    
        // And swap it with the current element.
        
        array[currentIndex];
      }
    return array;

};
 checkInitialArray(hexagonArray);
 console.log(hexagonArray);

//creating the shuffled array for this game 
//(must change on every game session)!
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  // Used like so
  //var arr = [2, 11, 37, 42];
  shuffle(hexagonArray);
  console.log(hexagonArray);
  console.log(document.getElementsByTagName("td")[0].style.backgroundColor = (hexagonArray[1].hexId));




/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}*/








//then we start the function

////below is the random tile distributor module.
//    let randomTile = hexagonArray[Math.floor(Math.random() * hexagonArray.length)];












/*   waiting for hexArrayShuffled






setInterval(() => {



for(
    //
    let tileTypeRow = 0;
    tileTypeRow < 19;
    
    tileTypeRow
    ) 
{ 
*/
for (
    // we want to sequentially work through all the tile types.
    let curPos = 0; 
    
    // tileType[curPos]; curPos = 0 (from the color sheep);
    //curPos = 0; sheep 
    //curPos = 1; wood
    //curPos = 2; wheat
    //curPos = 3; ore
    //curPos = 4; brick
    //curPos = 5; desert
    
    curPos >= 6; //
    //every loop we increment the current position
    //and thus we work through the array
    curPos++) 
    {
        
        
    //set iterator variable to 1 (0 in js)
//for each loop we check the 
//let randomTile = remainingTiles[Math.floor(Math.random() * remainingTiles.length)];

//console.log(`dealing ${remainingTiles}`)
let remaining = --remainingTiles[curPos].amountTiles;

if (remaining <= 0) 
{ break; 
} else {
//remainingTiles[0].amountTiles = return amountTiles on first row.

console.log(`There are ${remaining} remaining ${tileType[0]}`);

//console.log(randomTile);
//document.getElementsByTagName(randomTile)[curPos].style.backgroundColor = (remainingTiles[0].sheepTile)

} //else
} //curPos end for loop
/*}//tileTypeRow loop

}, 2000) 





// once we have assigned all types of tileType[i] 
// (where [0] is sheep), we increment: ++i;
//

//curPos is variable to navigate to the row
// from which we want the value;

//and we can check the array property and it's current value
  /*
setInterval(() => {
for (
    // we want to sequentially work through all the tile types.
    let curPos = 0; 
    // tileType[curPos]; curPos = 0 (aka sheep);
    curPos < 6; //
    //every loop we increment the current position
    //and thus we work through the array
    curPos++) 
    {
        //
        console.log(remainingTiles[curPos].amountTiles);
        //console.log(`There are ${remainingTiles[curPos].amountTiles} ${tileType[curPos]} tiles left`);

        // var arr = [10, 1, 2, 3].shift(); 
        //console.log("Shifted value is : " + arr ) 
       document.getElementsByTagName("td")[curPos].style.backgroundColor = ("red")

        //console.log(remainingTiles[curPos].amountTiles)
// if there are tiles left the console returns true
}
    
}, 2000);

if (curPos = 6) {
console.log(`All ${tileType[curPos]}have been dealt`)
}

  
//while ();
/*function colorFunction() {
    // document.body.style.backgroundColor = "red"; 
    document.getElementsByTagName("td")[18].style.backgroundColor = ("red")
*/ 


//console.log(`randomTile is number ${randomTile}`);





//console.log(remainingTiles[1].amountTiles);

//we will simplify things:
//for each tile color: we distribute them randomly.
//(aka all four sheep, then all four wood,...ect)
//across the 19 possible tiles.
//once we run out of a color, we move on to the next
/* example:
 (distribute all sheep randomly) across tile array.
*/





/*if(!tilesLeft) {
    start "chipPhase()"
}*/
/*
var i = 0;
while
 (i 
<
 10) {
  console.log(i);
  i++
}
*/


//function colorFunction (backup)
/*function colorFunction() {
    // document.body.style.backgroundColor = "red"; 
    document.getElementsByTagName("td")[1].style.backgroundColor = ("red")
};*/
