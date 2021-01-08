//nested array
//19 pots of paint
//4 red
//4 blue
//4 yellow
//3 orange
//3 green
//1 purple (desert)

//instead of island tiles let's use pots of paint

let sheepTile;
let woodTile;
let wheatTile;
let oreTile;
let brickTile;
let desertTile;


const remainingTiles = [
    {sheepTile: '#008000',  amountTiles: 4},//sheep
    {woodTile:  '#bdc001',  amountTiles: 4},//wood
    {wheatTile: '#606113',  amountTiles: 4},//wheat
    {oreTile:   '#bbbba3',  amountTiles: 3},//ore
    {brickTile: '#670320',  amountTiles: 3},//brick
    {desertTile:'#606113',  amountTiles: 1}//desert
]


//if there are items left in the
const tilesLeft = remainingTiles.some((tile) => {
   return tile.amountTiles > 0
})
// if there are tiles left the console returns true
console.log(tilesLeft);

//we want to distribute all Tiles

//
/*const tilesLeft = remainingTiles.some((tile) => {
   return tile.amountTiles > 0
})
// if there are tiles left the console returns true
console.log(tilesLeft);
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