
var shipURL;
/*  sheepTile1, sheepTile2, sheepTile3, sheepTile4, woodTile1, woodTile2, woodTile3, woodTile4, wheatTile1, wheatTile2, wheatTile3, wheatTile4, oreTile1, oreTile2, oreTile3, brickTile1, brickTile2, brickTile3, desertTile1;
 */


/*   let sT1, sT2, sT3, sT4, woT1, woT2, woT3, woT4, whT1,whT2, whT3, whT4, oT1, oT2, oT3, bT1, bT2, bT3, dT1; 
 */



//each variable of the same 
//type is associated with 
// corresponding /"asset"1.png
//tradeship asset values
var any3_1A   = 'gameAssetsOfficial/any3_1A.png'   ;
var any3_1B   = 'gameAssetsOfficial/any3_1B.png'   ;
var any3_1C   = 'gameAssetsOfficial/any3_1C.png'   ;
var any3_1D   = 'gameAssetsOfficial/any3_1D.png'   ;
var sheep_2_1 = 'gameAssetsOfficial/sheep 2_1.png' ;
var wood_2_1  = 'gameAssetsOfficial/wood 2_1.png'  ;
var wheat_2_1 = 'gameAssetsOfficial/wheat 2_1.png' ;
var brick_2_1 = 'gameAssetsOfficial/brick 2_1.png';
var ore_2_1   = 'gameAssetsOfficial/ore 2_1.png'  ;

let tradeAny3_1A;
let tradeAny3_1B;
let tradeAny3_1C;
let tradeAny3_1D;   
let tradeSheep2_1; 
let tradeWood2_1;  
let tradeWheat_1;  
let tradeBrick2_1; 
let tradeOre2_1;  

const numShipArray = [
    {shipURL: any3_1A   , shipType : tradeAny3_1A   },
    {shipURL: any3_1B   , shipType : tradeAny3_1B   },
    {shipURL: any3_1C   , shipType : tradeAny3_1C   },
    {shipURL: any3_1D   , shipType : tradeAny3_1D   },
    {shipURL: sheep_2_1 , shipType : tradeSheep2_1 },
    {shipURL: wood_2_1  , shipType : tradeWood2_1  },
    {shipURL: wheat_2_1 , shipType : tradeWheat_1  },
    {shipURL: brick_2_1 , shipType : tradeBrick2_1 },
    {shipURL: ore_2_1   , shipType : tradeOre2_1   }
];

 const shipPlaceholders = [
    {shipNumber : "1",         shipId : "ts1"},
    {shipNumber : "3",         shipId : "ts3"},
    {shipNumber : "4",         shipId : "ts4"},
    {shipNumber : "6",         shipId : "ts6"},
    {shipNumber : "7",         shipId : "ts7"},
    {shipNumber : "8",         shipId : "ts8"},
    {shipNumber : "10",        shipId : "ts10"},
    {shipNumber : "11",        shipId : "ts11"},
    {shipNumber : "12",        shipId : "ts12"}
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

for (const hexLetter in shipPlaceholders) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}
*/
function TSInit() {
  return TSInit.called = true;
} 

function shuffleOnTSClick() {

  TSInit()
  
  if(hexInit.called && tileInit.called) {
  
//make a statement that the button has been clicked already




/* shuffleOnClick first performs logic using:
1) function shuffle(array)
after it's definition with "array" parameter
we instantiate the function with the argument 
"shipPlaceholders" which shuffles the array items
'hexLetter' and 'shipId'.
(we only shuffle hex ArrPlaceholders, no need to also
  shuffle numShipArray)

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
shuffle(shipPlaceholders);

//-------MERGING BELOW -----------

//placeholder brackets for each merged rows
var mergedRowShip = []; 
//placeholder brackets to store final array
var mergedArrsShip = [];
//for every loop we partner up  an object[index] 
//from shipPlaceholders with an object from remainingTiles
for (let index = 0; index < shipPlaceholders.length; index++) {
mergedRowShip = Object.assign(shipPlaceholders[index], numShipArray[index]);
mergedArrsShip.forEach(mergedRowShip => {
    Object.assign(shipPlaceholders[index], numShipArray[index]);
});

mergedArrsShip.push(mergedRowShip);
}

/* console.table(mergedArrsShip);
 */
//since mergedArrsShip is the combination
// of the shuffled hexArr
//at the will always return
//console.log(mergedArrsShip[0].colorTile);
//

/* console.log(mergedArrsShip[0].colorTile);
 */


/*  document.getElementsByTagName("svg").style.fill = "red";
 */

//now to finally paint the randomly assigned paint tiles
/*  */


/*  */
 
   

/*   shipPlaceholders.forEach(shipId).style.backgroundImage = "url('gameAssetsOfficial/sheep1.png')";
 */

  
// finally we work through the shuffled array and for every index number we 
// perform this action: associate a unique tile#Id to a unique placeholder#id

 



function revealShuffledTiles(id) {
    document.getElementById(id).style.visibility = "hidden";
    // hide the lorem ipsum text
    document.getElementById(id).style.visibility = "visible";
    // hide the link
}




/* console.table(mergedArrsShip[0]);
 */



//At LAST!!! We apply the appropriate background image (which is the unique png file associated with ?)


//EXAMPLE

/* mergedArrsShip
  {tileType: brickTile2, shipURL: "url('gameAssetsOfficial/brick2.png')",      }

    {hexLetter : "E",        shipId : 'document.getElementById("tp_E")}'  */


/* For each tile placeholder "tp_x" we associate it with the background picture 
value from it's paired shuffled value */



console.table(mergedArrsShip[4].shipURL);

 console.log(mergedArrsShip[4].shipId);
  



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



// for all 19 array rows in the mergedArrsShip we are associating shipId bg 
//styling properties to the shipURL




for (let x = 0; x < 9/* mergedArrsShip.length */; x++) {


let thisShipId = mergedArrsShip[x].shipId;
let thisshipURL= mergedArrsShip[x].shipId;
/* let thisBackground = thisHexId.setAttribute("background", thisshipURL)
 */}
// Something to keep in mind when doing DOM manipulation
/* I need to fix the shipId array as I now trimmed 
the getelementbyid(" ") surrounding text, leaving
me with just "element" with quotation marks.
)
*/
//TO-DO: replace redundancy with "For" loops
//where the script generates would generate the key value pairs

var shipId1  = mergedArrsShip[0].shipId;
var shipId2  = mergedArrsShip[1].shipId;
var shipId3  = mergedArrsShip[2].shipId;
var shipId4  = mergedArrsShip[3].shipId;
var shipId5  = mergedArrsShip[4].shipId;
var shipId6  = mergedArrsShip[5].shipId;
var shipId7  = mergedArrsShip[6].shipId;
var shipId8  = mergedArrsShip[7].shipId;
var shipId9  = mergedArrsShip[8].shipId;

console.log(mergedArrsShip);


   
  document.getElementById(shipId1).style.background =   "url('"  +  mergedArrsShip[0].shipURL  +    "')";
  //perform animation for 
  document.getElementById(shipId2).style.background =   "url('"  +  mergedArrsShip[1].shipURL  +    "')";
  document.getElementById(shipId3).style.background =   "url('"  +  mergedArrsShip[2].shipURL  +    "')"; 
  document.getElementById(shipId4).style.background =   "url('"  +  mergedArrsShip[3].shipURL  +    "')"; 
  document.getElementById(shipId5).style.background =   "url('"  +  mergedArrsShip[4].shipURL  +    "')"; 
  document.getElementById(shipId6).style.background =   "url('"  +  mergedArrsShip[5].shipURL  +    "')"; 
  document.getElementById(shipId7).style.background =   "url('"  +  mergedArrsShip[6].shipURL  +    "')"; 
  document.getElementById(shipId8).style.background =   "url('"  +  mergedArrsShip[7].shipURL  +    "')"; 
  document.getElementById(shipId9).style.background =   "url('"  +  mergedArrsShip[8].shipURL  +    "')"; 
  
  


  
return shipId1, shipId2, shipId3, shipId4, shipId5, shipId6, shipId7, shipId8, shipId9;



 } 

 else {
  console.log("you have to shuffle the tiles first, then the numbers!");
let logHTML = document.getElementsByTagName("span");
logHTML.write = "you have to shuffle the tiles first, then the numbers!";
}
}


 /* 
 if (shipId1) {
  console.log("shipId1's image is loaded")  }
  */