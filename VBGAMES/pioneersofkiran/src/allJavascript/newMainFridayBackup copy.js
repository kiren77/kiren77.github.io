
import { SVG } from '@svgdotjs/svg.js'
import { SVG, extend as SVGextend, Element as SVGElement } from '@svgdotjs/svg.js'
var draw = SVG().addTo('body').size('100%', '100%');
var rect = draw.rect(400,200).attr({ fill: '#bcd69a' });

var islandGeneratedSVG =


SVG.on(document, 'DOMContentLoaded', function() {
  var draw = SVG().addTo('body')
})



let svg = document.getElementsByTagName('svg');
let hexPath = document.getElementsByTagName('path');
let islandSVG = document.getElementsByClassName('islandSVG');

const idTileA = document.getElementById('idTileA');
var rect = group.findOne('path.hexTile').fill('#999006')
console.log(rect)
/* //this function will generate the idTile[x]
// value located alongside the hexLetter value for
// each array item 
function defineId(letterAtoS) {
// if this function has been fed a letter between 
// A to S it will concatenate a string
const str1 = 'document.getElementById("path#idTile'+letterAtoS+'"'+')'
return str1;
}
const alphaBet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S']



for (let index = 0; index < alphaBet.length; index++) {
  const alphaIter = alphaBet[index];
defineId(alphaIter)
}
console.log(alphaIter)
 */


let sheepTile, woodTile, wheatTile, oreTile, brickTile, desertTile;
let sT1, sT2, sT3, sT4, woT1, woT2, woT3, woT4, whT1,whT2, whT3, whT4, oT1, oT2, oT3, bT1, bT2, bT3, dT1; 



//representation of Tile types 
const remainingTilesNew = [
    // 4 sheep tiles
    {tileNumb: 1,   colorTile: '#008000',      tileType: sheepTile,      refN: sT1},//sheep
    {tileNumb: 2,   colorTile: '#008000',      tileType: sheepTile,      refN: sT2},//sheep
    {tileNumb: 3,   colorTile: '#008000',      tileType: sheepTile,      refN: sT3},//sheep
    {tileNumb: 4,   colorTile: '#008000',      tileType: sheepTile,      refN: sT4},//sheep
    // 4 wood tiles
    {tileNumb: 5,   colorTile: '#bdc001',      tileType: woodTile,       refN: woT1},//wood
    {tileNumb: 6,   colorTile: '#bdc001',      tileType: woodTile,       refN: woT2},//wood
    {tileNumb: 7,   colorTile: '#bdc001',      tileType: woodTile,       refN: woT3},//wood
    {tileNumb: 8,   colorTile: '#bdc001',      tileType: woodTile,       refN: woT4},//wood
    // 4 wheat tiles
    {tileNumb: 9,   colorTile: '#606113',      tileType: wheatTile,      refN: whT1},//wheat
    {tileNumb: 10,   colorTile: '#606113',      tileType: wheatTile,      refN: whT2},//wheat
    {tileNumb: 11,   colorTile: '#606113',      tileType: wheatTile,      refN: whT3},//wheat
    {tileNumb: 12,   colorTile: '#606113',      tileType: wheatTile,      refN: whT4},//wheat
    // 3 ore tiles
    {tileNumb: 13,   colorTile: '#bbbba3',      tileType: oreTile,        refN: oT1},//ore
    {tileNumb: 14,   colorTile: '#bbbba3',      tileType: oreTile,        refN: oT2},//ore
    {tileNumb: 15,   colorTile: '#bbbba3',      tileType: oreTile,        refN: oT3},//ore
    // 3 brick tiles
    {tileNumb: 16,   colorTile: '#670320',      tileType: brickTile,      refN: bT1},//brick
    {tileNumb: 17,   colorTile: '#670320',      tileType: brickTile,      refN: bT2},//brick
    {tileNumb: 18,   colorTile: '#670320',      tileType: brickTile,      refN: bT3},//brick
    // 1 desert tile
    {tileNumb: 19,   colorTile: '#600000',      tileType: desertTile,      refN: dT1}//desert
];

 const hexArrPlaceholders = [
    {hexLetter : "A"},//,     hexId : document.getElementById("path#idTileA")},
    {hexLetter : "B"},//     hexId : document.getElementById("path#idTileB")},
    {hexLetter : "C"},//     hexId : document.getElementById("path#idTileC")},
    {hexLetter : "D"},//     hexId : document.getElementById("path#idTileD")},
    {hexLetter : "E"},//     hexId : document.getElementById("path#idTileE")},
    {hexLetter : "F"},//     hexId : document.getElementById("path#idTileF")},
    {hexLetter : "G"},//    hexId : document.getElementById("path#idTileG")},
    {hexLetter : "H"},//     hexId : document.getElementById("path#idTileH")},
    {hexLetter : "I"},//     hexId : document.getElementById("path#idTileI")},
    {hexLetter : "J"},//     hexId : document.getElementById("path#idTileJ")},
    {hexLetter : "K"},//     hexId : document.getElementById("path#idTileK")},
    {hexLetter : "L"},//     hexId : document.getElementById("path#idTileL")},
    {hexLetter : "M"},//     hexId : document.getElementById("path#idTileM")},
    {hexLetter : "N"},//     hexId : document.getElementById("path#idTileN")},
    {hexLetter : "O"},//     hexId : document.getElementById("path#idTileO")},
    {hexLetter : "P"},//     hexId : document.getElementById("path#idTileP")},
    {hexLetter : "Q"},//     hexId : document.getElementById("path#idTileQ")},
    {hexLetter : "R"},//     hexId : document.getElementById("path#idTileR")},
    {hexLetter : "S"}//     hexId : document.getElementById("path#idTileS")}
];

const hexIDs = [
  {hexId : document.getElementById("path#idTileA")},
  {hexId : document.getElementById("path#idTileB")},
  {hexId : document.getElementById("path#idTileC")},
  {hexId : document.getElementById("path#idTileD")},
  {hexId : document.getElementById("path#idTileE")},
  {hexId : document.getElementById("path#idTileF")},
  {hexId : document.getElementById("path#idTileG")},
  {hexId : document.getElementById("path#idTileH")},
  {hexId : document.getElementById("path#idTileI")},
  {hexId : document.getElementById("path#idTileJ")},
  {hexId : document.getElementById("path#idTileK")},
  {hexId : document.getElementById("path#idTileL")},
  {hexId : document.getElementById("path#idTileM")},
  {hexId : document.getElementById("path#idTileN")},
  {hexId : document.getElementById("path#idTileO")},
  {hexId : document.getElementById("path#idTileP")},
  {hexId : document.getElementById("path#idTileQ")},
  {hexId : document.getElementById("path#idTileR")},
  {hexId : document.getElementById("path#idTileS")}
];
/*
//this function will generate the idTile[x]
// value located alongside the hexLetter value for
// each array item 
function defineId(letterAtoS) {
// if this function has been fed a letter between 
// A to S it will concatenate a string
const str1 = 'document.getElementById("path#idTile'+letterAtoS+'"'+')'
return str1;
}

for (const hexLetter in hexArrPlaceholders) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}
*/





//console.log(svg.path)
//defining the shuffle() function 
// (for now it simply changes with every page refresh) 
//(must change on every game session)!
function shuffle(array) {
  var currentIndex = array.length;
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
  

//------Instantation of Shuffle() below -------

// Used like so
//var arr = [2, 11, 37, 42];  
//now we shuffle this array with the function we created
shuffle(hexArrPlaceholders);

//-------MERGING BELOW -----------

//placeholder brackets for each merged rows
var mergedRow = []; 
//placeholder brackets to store final array
var mergedArrs = [];
//for every loop we partner up  an object[index] 
//from hexArrPlaceholders with an object from remainingTiles
for (let index = 0; index < hexArrPlaceholders.length; index++) {
mergedRow = Object.assign(hexArrPlaceholders[index], remainingTilesNew[index]);
mergedArrs.forEach(mergedRow => {
    Object.assign(hexArrPlaceholders[index], remainingTilesNew[index]);
});

mergedArrs.push(mergedRow);
}

console.log(mergedArrs);

//since mergedArrs is the combination
// of the shuffled hexArr
//at the will always return
//console.log(mergedArrs[0].colorTile);
//
console.log(mergedArrs[0].colorTile);


 document.getElementsByTagName("svg").style.fill = "red";

//now to finally paint the randomly assigned paint tiles
for (let index = 0; index < mergedArrs.length; index++) {
 document.querySelector("path#path#idTileA").style.fill = randomTile;
} 

