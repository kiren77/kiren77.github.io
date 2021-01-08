//nested array
//19 pots of paint
//4 red
//4 blue
//4 yellow
//3 orange
//3 green
//1 purple (desert)


let sheepTile, woodTile, wheatTile, oreTile, brickTile, desertTile;
let tileType = ["sheep", "wood", "wheat", "ore", "brick", "desert"];


const remainingTiles = [
    {sheepTile: '#008000',  amountTiles: 4},//sheep
    {woodTile:  '#bdc001',  amountTiles: 4},//wood
    {wheatTile: '#606113',  amountTiles: 4},//wheat
    {oreTile:   '#bbbba3',  amountTiles: 3},//ore
    {brickTile: '#670320',  amountTiles: 3},//brick
    {desertTile:'#606113',  amountTiles: 1}//desert
]
//all cells
let cellOne, cellTwo, cellThree, cellFour, cellFive, cellSix, cellSeven, cellEight, cellNine, cellTen, cellEleven, cellTwelve, cellThirteen, cellFourteen, cellFifteen, cellSixteen, cellSeventeen, cellEighteen, cellNineteen;

const hexagonArray = [
    {cellOne :      document.getElementById("cellOne")},
    {cellTwo :      document.getElementById("cellTwo")},
    {cellThree :    document.getElementById("cellThree")},
    {cellFour :     document.getElementById("cellFour")},
    {cellFive :     document.getElementById("cellFive")},
    {cellSix :      document.getElementById("cellSix")},
    {cellSeven :    document.getElementById("cellSeven")},
    {cellEight :    document.getElementById("cellEight")},
    {cellNine :     document.getElementById("cellNine")},
    {cellTen :      document.getElementById("cellTen")},
    {cellEleven :   document.getElementById("cellEleven")},
    {cellTwelve :   document.getElementById("cellTwelve")},
    {cellThirteen : document.getElementById("cellThirteen")},
    {cellFourteen : document.getElementById("cellFourteen")},
    {cellFifteen :  document.getElementById("cellFifteen")},
    {cellSixteen :  document.getElementById("cellSixteen")},
    {cellSeventeen : document.getElementById("cellSeventeen")},
    {cellEighteen : document.getElementById("cellEighteen")},
    {cellNineteen : document.getElementById("cellNineteen")}
]
//x is variable to navigate to the row
// from which we want the value;
let x = 0;
//and we can check the array value at that
console.log(`tileType is ${(tileType)[x]}`);


document.getElementById("updates").write
//remainingTiles[0].amountTiles = return amountTiles on first row.
console.log(`remaining ${remainingTiles[0]}: ${remainingTiles[0].amountTiles}`);

/*for (let index = 0; index < array.length; index++) {
    const element = array[index];
}*/



//now we describe the random tile function
/*let randomTile;
if (remainingTiles.amountTiles
     
do {
    randomTile = nineteenTiles[Math.floor(Math.random() * nineteenTiles.length)];
console.log(`randomTile is number ${randomTile}`)
}
while (tilesLeft);
*/


//console.log(`randomTile is number ${randomTile}`);


//so first we check if there are .some left
const tilesLeft = remainingTiles.some((tile) => {
   return tile.amountTiles > 0
})

// if there are tiles left the console returns true
console.log(tilesLeft);
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
//below is the random tile distributor module.
/*let randomTile = ninteenTiles[Math.floor(Math.random() * nineteenTiles.length)];
console.log(randomTile);
*/
