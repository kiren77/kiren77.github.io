//const dino = document.getElementById('dino');


/*
let head = document.getElementsByTagName("head")[0]; 
    for (let i = 0; i < sheets.length; ++i) 
    {let elem = sheets[i]; 
        let parent = elem.parentElement || head; parent.removeChild(elem); 
        let rel = elem.rel; 
        if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") { var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, ''); 
        elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf()); 
    }
    */
   const tileLetters = [
   {tileA: document.getElementById("idTileA")},
   {tileB: document.getElementById("idTileB")},
   {tileC: document.getElementById("idTileC")},
   {tileD: document.getElementById("idTileD")},
   {tileE: document.getElementById("idTileE")},
   {tileF: document.getElementById("idTileF")},
   {tileG: document.getElementById("idTileG")},
   {tileH: document.getElementById("idTileH")},
   {tileI: document.getElementById("idTileI")},
   {tileJ: document.getElementById("idTileJ")},
   {tileK: document.getElementById("idTileK")},
   {tileL: document.getElementById("idTileL")},
   {tileM: document.getElementById("idTileM")},
   {tileN: document.getElementById("idTileN")},
   {tileO: document.getElementById("idTileO")},
   {tileP: document.getElementById("idTileP")},
   {tileQ: document.getElementById("idTileQ")},
   {tileR: document.getElementById("idTileR")},
   {tileS: document.getElementById("idTileS")},
]
console.log
// getting the is
window.onload = function(){
        //assigning low caps variable to id #islandContainer
wholepage = document.getElementById('body');
//we now make a button function

document.getElementById('myButton').onclick = function(){

wholepage.classList.toggle('fade');
console.log("myButton was pressed");

}
}
//end of intro fade code


// --------RANDOM factor below
let randomNumber = Math.floor(Math.random() * 19);      
console.log(`the random number is ${randomNumber}`)
// returns a random integer from 0 to 10

const tileHexes = [
                //tile will be assocated to random tileX
        { name: 'sheepOne',     allocatedLetter: undefined  },
        { name: 'sheepTwo',     allocatedLetter: undefined  },
        { name: 'sheepThree',   allocatedLetter: undefined  },
        { name: 'sheepFour',    allocatedLetter: undefined  },
        { name: 'woodOne',      allocatedLetter: undefined  },
        { name: 'woodTwo',      allocatedLetter: undefined  },
        { name: 'woodThree',    allocatedLetter: undefined  },
        { name: 'woodFour',     allocatedLetter: undefined  },
        { name: 'wheatOne',     allocatedLetter: undefined  },
        { name: 'wheatTwo',     allocatedLetter: undefined  },
        { name: 'wheatThree',   allocatedLetter: undefined  },
        { name: 'wheatFour',    allocatedLetter: undefined  },
        { name: 'oreTwo',       allocatedLetter: undefined  },
        { name: 'oreThree',     allocatedLetter: undefined  },
        { name: 'brickTwo',     allocatedLetter: undefined  },
        { name: 'brickThree',   allocatedLetter: undefined  },
        { name: 'desert',       allocatedLetter: undefined  },
] //end of array

tileHexes.forEach((tileHex) => {

//WHEN CODE IS READY use this to troubleshoot
//console.log(`${tileHex.name} 'has' ${tileHex.allocatedLetter}`)
})
        



let setupIsland;




let chipArray = ["chip1", "chip2", "chip3", "chip4", "chip5", "chip6", "chip7", "chip8", "chip9", "chip10", "chip11", "chip12", "chip13", "chip14", "chip15", "chip16",
"chip17", "chip18"];

 //function is called upon click
 function myFunction() {
        //take the element in the tag LI...
         let x = document.getElementsByTagName("LI");
        //... the number of its height being indicated
        // inside the bracket x 
        document.getElementById("demo").innerHTML = x[0].innerHTML;}

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