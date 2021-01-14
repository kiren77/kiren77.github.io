//@collapse


let svg = document.getElementsByTagName('svg');
let hexPath = document.getElementsByTagName('path');
let islandSVG = document.getElementsByClassName('islandSVG');

function myFunction() {
        var x = document.getElementById("islandSVG").hasAttribute("onclick");
        document.getElementById("demo").innerHTML = x;//let sheepTile = document.getElementsBy
}
        
let tileA = document.getElementById("idTileA");
let tileB = document.getElementById("idTileB");
let tileC = document.getElementById("idTileC");
let tileD = document.getElementById("idTileD");
let tileE = document.getElementById("idTileE");
let tileF = document.getElementById("idTileF");
let tileG = document.getElementById("idTileG");
let tileH = document.getElementById("idTileH");
let tileI = document.getElementById("idTileI");
let tileJ = document.getElementById("idTileJ");
let tileK = document.getElementById("idTileK");
let tileL = document.getElementById("idTileL");
let tileM = document.getElementById("idTileM");
let tileN = document.getElementById("idTileN");
let tileO = document.getElementById("idTileO");
let tileP = document.getElementById("idTileP");
let tileQ = document.getElementById("idTileQ");
let tileR = document.getElementById("idTileR");
let tileS = document.getElementById("idTileS");//tile colors 



let sheepTile;
let woodTile;
let wheatTile;
let oreTile;
let brickTile;
let desertTile;

const nineteenTiles = [
        {sheepTile: {amountLeft:  4, colorTile: "#008000;" }},
        {woodTile: {amountLeft:   4, colorTile: "#bdc001" }},
        {wheatTile: {amountLeft:  4, colorTile: "#606113" }},
        {oreTile: {amountLeft:    3, colorTile: "#bbbba3" }},
        {brickTile: {amountLeft:  3, colorTile: "#670320" }},
        {desertTile: {amountLeft: 1, colorTile: "#606113" }},
];
/*
let randomTile;

randomTile.forEach(ninteenTiles => {[Math.floor(Math.random() * nineteenTiles.length)];});
console.log(randomTile);
*/





var mergedRow = [];
var mergedArrs = [];
for (let index = 0; index < arr1.length; index++) {
mergedRow = Object.assign(arr1[index], arr2[index]);

mergedArrs.forEach(mergedRow => {
    Object.assign(arr1[index], arr2[index]);
});
mergedArrs.push(mergedRow);
}

console.log(mergedArrs)

//below is the random tile distributor module.
/*let randomTile = ninteenTiles[Math.floor(Math.random() * nineteenTiles.length)];
console.log(randomTile);
*/

//for (let index = 0; index < array.length; index++) {
 //       const element = array[index];}

let tileHexes = [
        {tile: tileA,   assignedColor: undefined},
        {tile: tileB,   assignedColor: undefined},
        {tile: tileC,   assignedColor: undefined},
        {tile: tileD,   assignedColor: undefined},
        {tile: tileE,   assignedColor: undefined},
        {tile: tileF,   assignedColor: undefined},
        {tile: tileG,   assignedColor: undefined},
        {tile: tileH,   assignedColor: undefined},
        {tile: tileI,   assignedColor: undefined},
        {tile: tileJ,   assignedColor: undefined},
        {tile: tileK,   assignedColor: undefined},
        {tile: tileL,   assignedColor: undefined},
        {tile: tileM,   assignedColor: undefined},
        {tile: tileM,   assignedColor: undefined},
        {tile: tileO,   assignedColor: undefined},
        {tile: tileP,   assignedColor: undefined},
        {tile: tileQ,   assignedColor: undefined},
        {tile: tileR,   assignedColor: undefined},
        {tile: tileS,   assignedColor: undefined},
]
//console.log(Array.isArray(tileHexes));   // checks if it's an array returns true

//fruits[0] = "Kiwi";        // Changes the first element of fruits to "Kiwi"

// We now create a function for the distribution of tiles.
// With each refresh of the page we should have all tiles randomly
// assigned (using the fillX() function below).

// The nineteen hex tiles should be distributed randomly.
// These are the tiles that are distributed.
// 4 sheepTile          4 woodTile      4 wheatTile
// 3 oreTile            3 brickTile     1 desertTile

//so workflow is
//1: initial variables/arrays declared ( 
        //sixTiles + tileHexes)
//2: random Function established (randomTile)
        //(value must be updated with every loop)
//3: distribution function perfected 

//4: 

//array.forEach(element => {});

//THIS WORKS!
//<button onclick="myFunction()">Try it</button>


//forEach tile
// check if assignedColor is undefined
// check available tiles

//(only)

//ignore defined ones
//if it is && has assign a randomTile}
//else { move on to next tile}

//randomTile must be replaced by assignedColor !!!
function fillA() {
        document.querySelector("path#idTileA").style.fill = randomTile;
}
//
function fillB() {
        document.querySelector("#idTileB").style.fill =  randomTile;
        }
//
function fillC() {
        document.querySelector("path#idTileC").style.fill =  randomTile;
        }
//
function fillD() {
        document.querySelector("path#idTileD").style.fill =  randomTile;
        }
//
function fillE() {
        document.querySelector("path#idTileE").style.fill =  randomTile;
        }
//
function fillF() {
        document.querySelector("path#idTileF").style.fill =  randomTile;
        }
//
function fillG() {
        document.querySelector("path#idTileG").style.fill =  randomTile;
        }
//
function fillH() {
        document.querySelector("path#idTileH").style.fill =  randomTile;
        }
//
function fillI() {
        document.querySelector("path#idTileI").style.fill =  randomTile;
        }
//
function fillJ() {
        document.querySelector("path#idTileJ").style.fill =  randomTile;
        }
//
function fillK() {
        document.querySelector("path#idTileK").style.fill =  randomTile;
        }
//
function fillL() {
        document.querySelector("path#idTileL").style.fill =  randomTile;
        }
//
function fillM() {
        document.querySelector("path#idTileM").style.fill =  randomTile;
        }
//
function fillN() {
        document.querySelector("path#idTileN").style.fill =  randomTile;
        }
//
function fillO() {
        document.querySelector("path#idTileO").style.fill =  randomTile;
        }
//
function fillP() {
        document.querySelector("path#idTileP").style.fill =  randomTile;
        }
//
function fillQ() {
        document.querySelector("path#idTileQ").style.fill =  randomTile;
        }
//
function fillR() {
        document.querySelector("path#idTileR").style.fill =  randomTile;
        }
//
function fillS() {
        document.querySelector("path#idTileS").style.fill =  randomTile;
        }
                                                                                                                                          

/*
PHASE ONE setupIsland:
1. random assignement of Tiles
        {Logic flow:
        1. function for random assignment
        a random tile is picked from the array
1A. each item is sequentially assigned 
their respective  random tile
1B. 

2.
then:

ex: 


-
-
PHASE TWO setupSettlement:

PHASE THREE gameProper

turnPlayer

*/