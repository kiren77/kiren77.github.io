


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

/* 

QUESTION: 

*/
var tileType, tileURL;
/*  sheepTile1, sheepTile2, sheepTile3, sheepTile4, woodTile1, woodTile2, woodTile3, woodTile4, wheatTile1, wheatTile2, wheatTile3, wheatTile4, oreTile1, oreTile2, oreTile3, brickTile1, brickTile2, brickTile3, desertTile1;
 */


/*   let sT1, sT2, sT3, sT4, woT1, woT2, woT3, woT4, whT1,whT2, whT3, whT4, oT1, oT2, oT3, bT1, bT2, bT3, dT1; 
 */


// tileType are the variables representing the tiles, and unique Tile is the index for each paired #id.backgroundimage


var sheep1  = 'gameAssetsOfficial/sheep1.png';
var sheep2  = 'gameAssetsOfficial/sheep2.png';
var sheep3  = 'gameAssetsOfficial/sheep3.png';
var sheep4  = 'gameAssetsOfficial/sheep4.png';
var wood1   = 'gameAssetsOfficial/wood1.png';
var wood2   = 'gameAssetsOfficial/wood2.png';
var wood3   = 'gameAssetsOfficial/wood3.png';
var wood4   = 'gameAssetsOfficial/wood4.png';
var wheat1  = 'gameAssetsOfficial/wheat1.png';
var wheat2  = 'gameAssetsOfficial/wheat2.png';
var wheat3  = 'gameAssetsOfficial/wheat3.png';
var wheat4  = 'gameAssetsOfficial/wheat4.png';
var ore1    = 'gameAssetsOfficial/ore1.png';
var ore2    = 'gameAssetsOfficial/ore2.png';
var ore3    = 'gameAssetsOfficial/ore3.png';
var brick1  = 'gameAssetsOfficial/brick1.png';
var brick2  = 'gameAssetsOfficial/brick2.png';
var brick3  = 'gameAssetsOfficial/brick3.png';
var desert1 = 'gameAssetsOfficial/desert1.png';





const remainingTilesNew = [
    // 4 sheep tiles
    {tileType: 'sheepTile1',       tileURL: sheep1},//sheep
    {tileType: 'sheepTile2',       tileURL: sheep2},//sheep
    {tileType: 'sheepTile3',       tileURL: sheep3},//sheep
    {tileType: 'sheepTile4',       tileURL: sheep4},//sheep
    // 4 wood t'iles
    {tileType: 'woodTile1',        tileURL: wood1},//wood
    {tileType: 'woodTile2',        tileURL: wood2},//wood
    {tileType: 'woodTile3',        tileURL: wood3},//wood
    {tileType: 'woodTile4',        tileURL: wood4},//wood
    // 4 wheat 'tile    
    {tileType: 'wheatTile1',       tileURL: wheat1},//wheat
    {tileType: 'wheatTile2',       tileURL: wheat2},//wheat
    {tileType: 'wheatTile3',       tileURL: wheat3},//wheat
    {tileType: 'wheatTile4',       tileURL: wheat4},//wheat
    // 3 ore ti'les     
    {tileType: 'oreTile1',         tileURL: ore1},//ore
    {tileType: 'oreTile2',         tileURL: ore2},//ore
    {tileType: 'oreTile3',         tileURL: ore3},//ore
    // 3 brick 'tile    
    {tileType: 'brickTile1',       tileURL: brick1},//brick
    {tileType: 'brickTile2',       tileURL: brick2},//brick
    {tileType: 'brickTile3',       tileURL: brick3},//brick
    // 1 desert' til
    {tileType: 'desertTile1',      tileURL: desert1} //desert
];

 const hexArrPlaceholders = [
    {hexLetter : "A",        hexId : "tp_A"},
    {hexLetter : "B",        hexId : "tp_B"},
    {hexLetter : "C",        hexId : "tp_C"},
    {hexLetter : "D",        hexId : "tp_D"},
    {hexLetter : "E",        hexId : "tp_E"},
    {hexLetter : "F",        hexId : "tp_F"},
    {hexLetter : "G",        hexId : "tp_G"},
    {hexLetter : "H",        hexId : "tp_H"},
    {hexLetter : "I",        hexId : "tp_I"},
    {hexLetter : "J",        hexId : "tp_J"},
    {hexLetter : "K",        hexId : "tp_K"},
    {hexLetter : "L",        hexId : "tp_L"},
    {hexLetter : "M",        hexId : "tp_M"},
    {hexLetter : "N",        hexId : "tp_N"},
    {hexLetter : "O",        hexId : "tp_O"},
    {hexLetter : "P",        hexId : "tp_P"},
    {hexLetter : "Q",        hexId : "tp_Q"},
    {hexLetter : "R",        hexId : "tp_R"},
    {hexLetter : "S",        hexId : "tp_S"}
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

function shuffleOnClick() {
/* shuffleOnClick first performs logic using:
1) function shuffle(array)
after it's definition with "array" parameter
we instantiate the function with the argument 
"hexArrPlaceholders" which shuffles the array items
'hexLetter' and 'hexId'.
(we only shuffle hex ArrPlaceholders, no need to also
  shuffle remainingTilesNew)

2) 

*/



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

/* console.table(mergedArrs);
 */
//since mergedArrs is the combination
// of the shuffled hexArr
//at the will always return
//console.log(mergedArrs[0].colorTile);
//

/* console.log(mergedArrs[0].colorTile);
 */


/*  document.getElementsByTagName("svg").style.fill = "red";
 */

//now to finally paint the randomly assigned paint tiles
/*  */


/*  */
 
   

/*   hexArrPlaceholders.forEach(hexId).style.backgroundImage = "url('gameAssetsOfficial/sheep1.png')";
 */

  
// finally we work through the shuffled array and for every index number we 
// perform this action: associate a unique tile#Id to a unique placeholder#id

 



function revealShuffledTiles(id) {
    document.getElementById(id).style.visibility = "hidden";
    // hide the lorem ipsum text
    document.getElementById(id).style.visibility = "visible";
    // hide the link
}




/* console.table(mergedArrs[0]);
 */



//At LAST!!! We apply the appropriate background image (which is the unique png file associated with ?)


//EXAMPLE

/* mergedArrs
  {tileType: brickTile2, tileURL: "url('gameAssetsOfficial/brick2.png')",      }

    {hexLetter : "E",        hexId : 'document.getElementById("tp_E")}'  */


/* For each tile placeholder "tp_x" we associate it with the background picture 
value from it's paired shuffled value */



console.table(mergedArrs[4].tileURL);

 console.log(mergedArrs[4].hexId);
  



/* 
var images = ['../images/ploutarxos.jpg',
  '../images/xatzigiannhs.jpg',
  '../images/taylor_swift.jpg',
  '../images/selena_gomez.jpg',
  '../images/the_weeknd.jpg',
  '../images/drake.jpg'
];

var img = document.getElementById("img");

function displayImage(x) {
  img.style.backgroundImage = "url(" + images[x] + ")";
  img.innerText = images[x];
}
function startTimer() {
  var x = 0;
  displayImage(x);
  setInterval(function() {
    x = x + 1 >= images.length ? 0 : x + 1;
    displayImage(x);
  }, 3000);
} */
/* 
let tileAssets = document.querySelectorAll(".tilePlaceholder")
tileAssets.forEach(tileAsset => {
  console.log('tileAsset: ', tileAsset);
});

array.forEach(element => {
  
}); */



// for all 19 array rows in the mergedArrs we are associating hexId bg 
//styling properties to the tileURL




for (let x = 0; x < 19/* mergedArrs.length */; x++) {


let thisHexId = mergedArrs[x].hexId;
let thisTileURL= mergedArrs[x].hexId;
/* let thisBackground = thisHexId.setAttribute("background", thisTileURL)
 */}





 
// Something to keep in mind when doing DOM manipulation
/* I need to fix the hexId array as I now trimmed 
the getelementbyid(" ") surrounding text, leaving
me with just "element" with quotation marks.

)
*/


//TO-DO: replace redundancy with "For" loops
//where the script generates would generate the key value pairs

var hexId1 = mergedArrs[0].hexId
var hexId2 = mergedArrs[1].hexId
var hexId3 = mergedArrs[2].hexId
var hexId4 = mergedArrs[3].hexId
var hexId5 = mergedArrs[4].hexId
var hexId6 = mergedArrs[5].hexId
var hexId7 = mergedArrs[6].hexId
var hexId8 = mergedArrs[7].hexId
var hexId9 = mergedArrs[8].hexId
var hexId10 = mergedArrs[9].hexId
var hexId11 = mergedArrs[10].hexId
var hexId12 = mergedArrs[11].hexId
var hexId13 = mergedArrs[12].hexId
var hexId14 = mergedArrs[13].hexId
var hexId15 = mergedArrs[14].hexId
var hexId16 = mergedArrs[15].hexId
var hexId17 = mergedArrs[16].hexId
var hexId18 = mergedArrs[17].hexId
var hexId19 = mergedArrs[18].hexId

console.log(mergedArrs)


   
  document.getElementById(hexId1).style.background =   "url('"  +  mergedArrs[0].tileURL  +    "')";
  document.getElementById(hexId2).style.background =   "url('"  +  mergedArrs[1].tileURL  +    "')";
  document.getElementById(hexId3).style.background =   "url('"  +  mergedArrs[2].tileURL  +    "')"; 
  document.getElementById(hexId4).style.background =   "url('"  +  mergedArrs[3].tileURL  +    "')"; 
  document.getElementById(hexId5).style.background =   "url('"  +  mergedArrs[4].tileURL  +    "')"; 
  document.getElementById(hexId6).style.background =   "url('"  +  mergedArrs[5].tileURL  +    "')"; 
  document.getElementById(hexId7).style.background =   "url('"  +  mergedArrs[6].tileURL  +    "')"; 
  document.getElementById(hexId8).style.background =   "url('"  +  mergedArrs[7].tileURL  +    "')"; 
  document.getElementById(hexId9).style.background =   "url('"  +  mergedArrs[8].tileURL  +    "')"; 
  document.getElementById(hexId10).style.background =  "url('"  +  mergedArrs[9].tileURL  +    "')";
  document.getElementById(hexId11).style.background =  "url('"  +  mergedArrs[10].tileURL  +    "')";
  document.getElementById(hexId12).style.background =  "url('"  +  mergedArrs[11].tileURL  +    "')";
  document.getElementById(hexId13).style.background =  "url('"  +  mergedArrs[12].tileURL  +    "')";
  document.getElementById(hexId14).style.background =  "url('"  +  mergedArrs[13].tileURL  +    "')";
  document.getElementById(hexId15).style.background =  "url('"  +  mergedArrs[14].tileURL  +    "')";
  document.getElementById(hexId16).style.background =  "url('"  +  mergedArrs[15].tileURL  +    "')";
  document.getElementById(hexId17).style.background =  "url('"  +  mergedArrs[16].tileURL  +    "')";
  document.getElementById(hexId18).style.background =  "url('"  +  mergedArrs[17].tileURL  +    "')";
  document.getElementById(hexId19).style.background =  "url('"  +  mergedArrs[18].tileURL  +    "')";

 } 


console.log(hexArrPlaceholders[0].hexId)
