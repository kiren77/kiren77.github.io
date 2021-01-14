

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
    {hexNumb : 1,     hexId : document.getElementById("cellOne").innerHTML},
    {hexNumb : 2,     hexId : document.getElementById("cellTwo").innerHTML},
    {hexNumb : 3,     hexId : document.getElementById("cellThree").innerHTML},
    {hexNumb : 4,     hexId : document.getElementById("cellFour").innerHTML},
    {hexNumb : 5,     hexId : document.getElementById("cellFive").innerHTML},
    {hexNumb : 6,     hexId : document.getElementById("cellSix").innerHTML},
    {hexNumb : 7,     hexId : document.getElementById("cellSeven").innerHTML},
    {hexNumb : 8,     hexId : document.getElementById("cellEight").innerHTML},
    {hexNumb : 9,     hexId : document.getElementById("cellNine").innerHTML},
    {hexNumb : 10,    hexId : document.getElementById("cellTen").innerHTML},
    {hexNumb : 11,    hexId : document.getElementById("cellEleven").innerHTML},
    {hexNumb : 12,    hexId : document.getElementById("cellTwelve").innerHTML},
    {hexNumb : 13,    hexId : document.getElementById("cellThirteen").innerHTML},
    {hexNumb : 14,    hexId : document.getElementById("cellFourteen").innerHTML},
    {hexNumb : 15,    hexId : document.getElementById("cellFifteen").innerHTML},
    {hexNumb : 16,    hexId : document.getElementById("cellSixteen").innerHTML},
    {hexNumb : 17,    hexId : document.getElementById("cellSeventeen").innerHTML},
    {hexNumb : 18,    hexId : document.getElementById("cellEighteen").innerHTML},
    {hexNumb : 19,    hexId : document.getElementById("cellNineteen").innerHTML}
];



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

//------Instantation of Suffle() below -------

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

console.log(mergedArrs)
