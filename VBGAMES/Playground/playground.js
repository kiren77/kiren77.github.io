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

//console.log(`color of ${remainingTiles[0]}  ${remainingTiles[0].sheepTile}`);

//all cells
let cellOne, cellTwo, cellThree, cellFour, cellFive, cellSix, cellSeven, cellEight, cellNine, cellTen, cellEleven, cellTwelve, cellThirteen, cellFourteen, cellFifteen, cellSixteen, cellSeventeen, cellEighteen, cellNineteen;


const hexagonArray = [
    {cell : document.getElementById("cellOne")},
    {cell : document.getElementById("cellTwo")},
    {cell : document.getElementById("cellThree")},
    {cell : document.getElementById("cellFour")},
    {cell : document.getElementById("cellFive")},
    {cell : document.getElementById("cellSix")},
    {cell:  document.getElementById("cellSeven")},
    {cell : document.getElementById("cellEight")},
    {cell : document.getElementById("cellNine")},
    {cell : document.getElementById("cellTen")},
    {cell : document.getElementById("cellEleven")},
    {cell : document.getElementById("cellTwelve")},
    {cell : document.getElementById("cellThirteen")},
    {cell : document.getElementById("cellFourteen")},
    {cell : document.getElementById("cellFifteen")},
    {cell : document.getElementById("cellSixteen")},
    {cell : document.getElementById("cellSeventeen")},
    {cell : document.getElementById("cellEighteen")},
    {cell : document.getElementById("cellNineteen")}
];
const hexagonCells = hexagonArray.map((hexagoncell) => {
    return hexagoncell.cell
})





//document.getElementById("updates").open();
//function writeFunction(){}
//document.getElementsByTagName("textarea").getElementById("updates")};
//document.getElementById("updates").write("hello world");
//document.getElementById("updates").close;


/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}*/



//now we describe the random tile function





//then we start the function
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
        
    //set iterator variable to 1 (0 in js)
//for each loop we check the 
let randomTile = remainingTiles[Math.floor(Math.random() * remainingTiles.length)];

//console.log(`dealing ${remainingTiles}`)
let remaining = --remainingTiles[curPos].amountTiles;

if (remaining <= 0) { break; }
//remainingTiles[0].amountTiles = return amountTiles on first row.
console.log(`There are ${remaining} remaining ${tileType[0]}: `);

}

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
       //document.getElementsByTagName("td")[curPos].style.backgroundColor = ("red")

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
//below is the random tile distributor module.
/*let randomTile = ninteenTiles[Math.floor(Math.random() * nineteenTiles.length)];
console.log(randomTile);
*/

//function colorFunction (backup)
/*function colorFunction() {
    // document.body.style.backgroundColor = "red"; 
    document.getElementsByTagName("td")[1].style.backgroundColor = ("red")
};*/
