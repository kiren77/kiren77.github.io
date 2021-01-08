//nested array
//19 pots of paint
//4 red
//4 blue
//4 yellow
//3 orange
//3 green
//1 purple (desert)

//instead of island tiles let's use pots of paint

let sheepTile, woodTile, wheatTile, oreTile, brickTile, desertTile;


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

//remainingTiles[0].amountTiles = return amountTiles on first row.
console.log(`remaining ${remainingTiles.[]}: ${remainingTiles[0].amountTiles}`);

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


function colorFunction() {
    //document.body.style.backgroundColor = "red"
    //(we replace .body with .querySelector("#cellOne"))
    document.querySelector("td").style.backgroundColor = "blue";
}

/*if ('WebSocket' in window) { (function () { function refreshCSS() 
    { var sheets = [].slice.call(document.getElementsByTagName("link")); 
    var head = document.getElementsByTagName("head")[0]; 
    for (var i = 0; i < sheets.length; ++i) 
    { var elem = sheets[i]; 
        var parent = elem.parentElement || head; parent.removeChild(elem); 
        var rel = elem.rel; 
        if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") { var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, ''); 
        elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf()); 
    } parent.appendChild(elem); 
} } var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://'; var address = protocol + window.location.host + window.location.pathname + '/ws'; var socket = new WebSocket(address); 
socket.onmessage = function (msg) { if (msg.data == 'reload') window.location.reload(); 
else if (msg.data == 'refreshcss') refreshCSS(); 
}; 
if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) { console.log('Live reload enabled.'); 
sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true); 
} })();
 } else { console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.'); 
}*/