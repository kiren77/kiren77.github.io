// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"allJavascript/revealShuffledTradeShips.js":[function(require,module,exports) {
var shipURL;
/*  sheepTile1, sheepTile2, sheepTile3, sheepTile4, woodTile1, woodTile2, woodTile3, woodTile4, wheatTile1, wheatTile2, wheatTile3, wheatTile4, oreTile1, oreTile2, oreTile3, brickTile1, brickTile2, brickTile3, desertTile1;
 */

/*   let sT1, sT2, sT3, sT4, woT1, woT2, woT3, woT4, whT1,whT2, whT3, whT4, oT1, oT2, oT3, bT1, bT2, bT3, dT1; 
 */
//each variable of the same 
//type is associated with 
// corresponding /"asset"1.png
//tradeship asset values

var any3_1A = 'gameAssetsOfficial/any3_1A.png';
var any3_1B = 'gameAssetsOfficial/any3_1B.png';
var any3_1C = 'gameAssetsOfficial/any3_1C.png';
var any3_1D = 'gameAssetsOfficial/any3_1D.png';
var sheep_2_1 = 'gameAssetsOfficial/sheep 2_1.png';
var wood_2_1 = 'gameAssetsOfficial/wood 2_1.png';
var wheat_2_1 = 'gameAssetsOfficial/wheat 2_1.png';
var brick_2_1 = 'gameAssetsOfficial/brick 2_1.png';
var ore_2_1 = 'gameAssetsOfficial/ore 2_1.png';
var tradeAny3_1A;
var tradeAny3_1B;
var tradeAny3_1C;
var tradeAny3_1D;
var tradeSheep2_1;
var tradeWood2_1;
var tradeWheat_1;
var tradeBrick2_1;
var tradeOre2_1;
var numShipArray = [{
  shipURL: any3_1A,
  shipType: tradeAny3_1A
}, {
  shipURL: any3_1B,
  shipType: tradeAny3_1B
}, {
  shipURL: any3_1C,
  shipType: tradeAny3_1C
}, {
  shipURL: any3_1D,
  shipType: tradeAny3_1D
}, {
  shipURL: sheep_2_1,
  shipType: tradeSheep2_1
}, {
  shipURL: wood_2_1,
  shipType: tradeWood2_1
}, {
  shipURL: wheat_2_1,
  shipType: tradeWheat_1
}, {
  shipURL: brick_2_1,
  shipType: tradeBrick2_1
}, {
  shipURL: ore_2_1,
  shipType: tradeOre2_1
}];
var shipPlaceholders = [{
  shipNumber: "1",
  shipId: "ts1"
}, {
  shipNumber: "3",
  shipId: "ts3"
}, {
  shipNumber: "4",
  shipId: "ts4"
}, {
  shipNumber: "6",
  shipId: "ts6"
}, {
  shipNumber: "7",
  shipId: "ts7"
}, {
  shipNumber: "8",
  shipId: "ts8"
}, {
  shipNumber: "10",
  shipId: "ts10"
}, {
  shipNumber: "11",
  shipId: "ts11"
}, {
  shipNumber: "12",
  shipId: "ts12"
}];
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
  TSInit();

  if (hexInit.called && tileInit.called) {
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
      var currentIndex = array.length; // While there remain elements to shuffle...

      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1; // And swap it with the current element.

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    } //------Instantation of Shuffle() below -------
    // Used like so
    //var arr = [2, 11, 37, 42];  
    //now we shuffle this array with the function we created


    shuffle(shipPlaceholders); //-------MERGING BELOW -----------
    //placeholder brackets for each merged rows

    var mergedRowShip = []; //placeholder brackets to store final array

    var mergedArrsShip = []; //for every loop we partner up  an object[index] 
    //from shipPlaceholders with an object from remainingTiles

    var _loop = function _loop(index) {
      mergedRowShip = Object.assign(shipPlaceholders[index], numShipArray[index]);
      mergedArrsShip.forEach(function (mergedRowShip) {
        Object.assign(shipPlaceholders[index], numShipArray[index]);
      });
      mergedArrsShip.push(mergedRowShip);
    };

    for (var index = 0; index < shipPlaceholders.length; index++) {
      _loop(index);
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
      document.getElementById(id).style.visibility = "hidden"; // hide the lorem ipsum text

      document.getElementById(id).style.visibility = "visible"; // hide the link
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

    for (var x = 0; x < 9
    /* mergedArrsShip.length */
    ; x++) {
      var thisShipId = mergedArrsShip[x].shipId;
      var thisshipURL = mergedArrsShip[x].shipId;
      /* let thisBackground = thisHexId.setAttribute("background", thisshipURL)
       */
    } // Something to keep in mind when doing DOM manipulation

    /* I need to fix the shipId array as I now trimmed 
    the getelementbyid(" ") surrounding text, leaving
    me with just "element" with quotation marks.
    )
    */
    //TO-DO: replace redundancy with "For" loops
    //where the script generates would generate the key value pairs


    var shipId1 = mergedArrsShip[0].shipId;
    var shipId2 = mergedArrsShip[1].shipId;
    var shipId3 = mergedArrsShip[2].shipId;
    var shipId4 = mergedArrsShip[3].shipId;
    var shipId5 = mergedArrsShip[4].shipId;
    var shipId6 = mergedArrsShip[5].shipId;
    var shipId7 = mergedArrsShip[6].shipId;
    var shipId8 = mergedArrsShip[7].shipId;
    var shipId9 = mergedArrsShip[8].shipId;
    console.log(mergedArrsShip);
    document.getElementById(shipId1).style.background = "url('" + mergedArrsShip[0].shipURL + "')"; //perform animation for 

    document.getElementById(shipId2).style.background = "url('" + mergedArrsShip[1].shipURL + "')";
    document.getElementById(shipId3).style.background = "url('" + mergedArrsShip[2].shipURL + "')";
    document.getElementById(shipId4).style.background = "url('" + mergedArrsShip[3].shipURL + "')";
    document.getElementById(shipId5).style.background = "url('" + mergedArrsShip[4].shipURL + "')";
    document.getElementById(shipId6).style.background = "url('" + mergedArrsShip[5].shipURL + "')";
    document.getElementById(shipId7).style.background = "url('" + mergedArrsShip[6].shipURL + "')";
    document.getElementById(shipId8).style.background = "url('" + mergedArrsShip[7].shipURL + "')";
    document.getElementById(shipId9).style.background = "url('" + mergedArrsShip[8].shipURL + "')";
    return shipId1, shipId2, shipId3, shipId4, shipId5, shipId6, shipId7, shipId8, shipId9;
  } else {
    console.log("you have to shuffle the tiles first, then the numbers!");
    var logHTML = document.getElementsByTagName("span");
    logHTML.write = "you have to shuffle the tiles first, then the numbers!";
  }
}
/* 
if (shipId1) {
 console.log("shipId1's image is loaded")  }
 */
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52832" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","allJavascript/revealShuffledTradeShips.js"], null)
//# sourceMappingURL=/revealShuffledTradeShips.aaa34bc5.js.map