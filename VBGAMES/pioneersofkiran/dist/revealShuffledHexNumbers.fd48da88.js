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
})({"allJavascript/revealShuffledHexNumbers.js":[function(require,module,exports) {
var tileType, hnURL;
/*  sheepTile1, sheepTile2, sheepTile3, sheepTile4, woodTile1, woodTile2, woodTile3, woodTile4, wheatTile1, wheatTile2, wheatTile3, wheatTile4, oreTile1, oreTile2, oreTile3, brickTile1, brickTile2, brickTile3, desertTile1;
 */

/*   let sT1, sT2, sT3, sT4, woT1, woT2, woT3, woT4, whT1,whT2, whT3, whT4, oT1, oT2, oT3, bT1, bT2, bT3, dT1; 
 */
// tileType are the variables representing the tiles, and unique Tile is the index for each paired #id.backgroundimage
//each variable of the same 
//type is associated with 
// corresponding /"asset"1.png

var n2 = 'gameAssetsOfficial/n2.png',
    n3_1 = 'gameAssetsOfficial/n3_1.png',
    n3_2 = 'gameAssetsOfficial/n3_2.png',
    n4_1 = 'gameAssetsOfficial/n4_1.png',
    n4_2 = 'gameAssetsOfficial/n4_2.png',
    n5_1 = 'gameAssetsOfficial/n5_1.png',
    n5_2 = 'gameAssetsOfficial/n5_2.png',
    n6_1 = 'gameAssetsOfficial/n6_1.png',
    n6_2 = 'gameAssetsOfficial/n6_2.png',
    n8_1 = 'gameAssetsOfficial/n8_1.png',
    n8_2 = 'gameAssetsOfficial/n8_2.png',
    n9_1 = 'gameAssetsOfficial/n9_1.png',
    n9_2 = 'gameAssetsOfficial/n9_2.png',
    n10_1 = 'gameAssetsOfficial/n10_1.png',
    n10_2 = 'gameAssetsOfficial/n10_2.png',
    n11_1 = 'gameAssetsOfficial/n11_1.png',
    n11_2 = 'gameAssetsOfficial/n11_2.png',
    n12 = 'gameAssetsOfficial/n12.png',
    desertNull = null;
var hexNumberArray = [{
  hnURL: n2
}, {
  hnURL: n3_1
}, {
  hnURL: n3_2
}, {
  hnURL: n4_1
}, {
  hnURL: n4_2
}, {
  hnURL: n5_1
}, {
  hnURL: n5_2
}, {
  hnURL: n6_1
}, {
  hnURL: n6_2
}, {
  hnURL: n8_1
}, {
  hnURL: n8_2
}, {
  hnURL: n9_1
}, {
  hnURL: n9_2
}, {
  hnURL: n10_1
}, {
  hnURL: n10_2
}, {
  hnURL: n11_1
}, {
  hnURL: n11_2
}, {
  hnURL: n12
}, {
  hnURL: desertNull
}]; //before shuffling the numbers we need to pair up desertNull
// with the actual desertTile from revealShuffledTiles 

var hexLetterPlaceholders = [{
  hexLetter: "A",
  hexId: "nA"
}, {
  hexLetter: "B",
  hexId: "nB"
}, {
  hexLetter: "C",
  hexId: "nC"
}, {
  hexLetter: "D",
  hexId: "nD"
}, {
  hexLetter: "E",
  hexId: "nE"
}, {
  hexLetter: "F",
  hexId: "nF"
}, {
  hexLetter: "G",
  hexId: "nG"
}, {
  hexLetter: "H",
  hexId: "nH"
}, {
  hexLetter: "I",
  hexId: "nI"
}, {
  hexLetter: "J",
  hexId: "nJ"
}, {
  hexLetter: "K",
  hexId: "nK"
}, {
  hexLetter: "L",
  hexId: "nL"
}, {
  hexLetter: "M",
  hexId: "nM"
}, {
  hexLetter: "N",
  hexId: "nN"
}, {
  hexLetter: "O",
  hexId: "nO"
}, {
  hexLetter: "P",
  hexId: "nP"
}, {
  hexLetter: "Q",
  hexId: "nQ"
}, {
  hexLetter: "R",
  hexId: "nR"
}, {
  hexLetter: "S",
  hexId: "nS"
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

for (const hexLetter in hexLetterPlaceholders) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}
*/

function hexInit() {
  return hexInit.called = true;
}

function shuffleOnNumClick() {
  hexInit();

  if (tileInit.called) {
    /* shuffleOnClick first performs logic using:
    1) function shuffle(array)
    after it's definition with "array" parameter
    we instantiate the function with the argument 
    "hexLetterPlaceholders" which shuffles the array items
    'hexLetter' and 'hexId'.
    (we only shuffle hex ArrPlaceholders, no need to also
      shuffle hexNumberArray)
    
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


    shuffle(hexLetterPlaceholders); //-------MERGING BELOW -----------
    //placeholder brackets for each merged rows

    var mergedRowNum = []; //placeholder brackets to store final array

    var mergedArrsNum = []; //for every loop we partner up  an object[index] 
    //from hexLetterPlaceholders with an object from remainingTiles

    var _loop = function _loop(index) {
      mergedRowNum = Object.assign(hexLetterPlaceholders[index], hexNumberArray[index]);
      mergedArrsNum.forEach(function (mergedRowNum) {
        Object.assign(hexLetterPlaceholders[index], hexNumberArray[index]);
      });
      mergedArrsNum.push(mergedRowNum);
    };

    for (var index = 0; index < hexLetterPlaceholders.length; index++) {
      _loop(index);
    }
    /* console.table(mergedArrsNum);
     */
    //since mergedArrsNum is the combination
    // of the shuffled hexArr
    //at the will always return
    //console.log(mergedArrsNum[0].colorTile);
    //

    /* console.log(mergedArrsNum[0].colorTile);
     */

    /*  document.getElementsByTagName("svg").style.fill = "red";
     */
    //now to finally paint the randomly assigned paint tiles

    /*  */

    /*  */

    /*   hexLetterPlaceholders.forEach(hexId).style.backgroundImage = "url('gameAssetsOfficial/sheep1.png')";
     */
    // finally we work through the shuffled array and for every index number we 
    // perform this action: associate a unique tile#Id to a unique placeholder#id


    function revealShuffledTiles(id) {
      document.getElementById(id).style.visibility = "hidden"; // hide the lorem ipsum text

      document.getElementById(id).style.visibility = "visible"; // hide the link
    }
    /* console.table(mergedArrsNum[0]);
     */
    //At LAST!!! We apply the appropriate background image (which is the unique png file associated with ?)
    //EXAMPLE

    /* mergedArrsNum
      {tileType: brickTile2, hnURL: "url('gameAssetsOfficial/brick2.png')",      }
    
        {hexLetter : "E",        hexId : 'document.getElementById("tp_E")}'  */

    /* For each tile placeholder "tp_x" we associate it with the background picture 
    value from it's paired shuffled value */


    console.table(mergedArrsNum[4].hnURL);
    console.log(mergedArrsNum[4].hexId);
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
    // for all 19 array rows in the mergedArrsNum we are associating hexId bg 
    //styling properties to the hnURL

    for (var x = 0; x < 19
    /* mergedArrsNum.length */
    ; x++) {
      var thisHexId = mergedArrsNum[x].hexId;
      var thishnURL = mergedArrsNum[x].hexId;
      /* let thisBackground = thisHexId.setAttribute("background", thishnURL)
       */
    } // Something to keep in mind when doing DOM manipulation

    /* I need to fix the hexId array as I now trimmed 
    the getelementbyid(" ") surrounding text, leaving
    me with just "element" with quotation marks.
    )
    */
    //TO-DO: replace redundancy with "For" loops
    //where the script generates would generate the key value pairs


    var hexId1 = mergedArrsNum[0].hexId;
    var hexId2 = mergedArrsNum[1].hexId;
    var hexId3 = mergedArrsNum[2].hexId;
    var hexId4 = mergedArrsNum[3].hexId;
    var hexId5 = mergedArrsNum[4].hexId;
    var hexId6 = mergedArrsNum[5].hexId;
    var hexId7 = mergedArrsNum[6].hexId;
    var hexId8 = mergedArrsNum[7].hexId;
    var hexId9 = mergedArrsNum[8].hexId;
    var hexId10 = mergedArrsNum[9].hexId;
    var hexId11 = mergedArrsNum[10].hexId;
    var hexId12 = mergedArrsNum[11].hexId;
    var hexId13 = mergedArrsNum[12].hexId;
    var hexId14 = mergedArrsNum[13].hexId;
    var hexId15 = mergedArrsNum[14].hexId;
    var hexId16 = mergedArrsNum[15].hexId;
    var hexId17 = mergedArrsNum[16].hexId;
    var hexId18 = mergedArrsNum[17].hexId;
    var hexId19 = mergedArrsNum[18].hexId;
    console.log(mergedArrsNum);
    var sizeOfCoin = "39px 39px";
    document.getElementById(hexId1).style.background = "url('" + mergedArrsNum[0].hnURL + "')";
    document.getElementById(hexId1).style.backgroundSize = sizeOfCoin;
    document.getElementById(hexId2).style.background = "url('" + mergedArrsNum[1].hnURL + "')";
    document.getElementById(hexId2).style.backgroundSize = sizeOfCoin;
    document.getElementById(hexId3).style.background = "url('" + mergedArrsNum[2].hnURL + "')";
    document.getElementById(hexId3).style.backgroundSize = sizeOfCoin;
    document.getElementById(hexId4).style.background = "url('" + mergedArrsNum[3].hnURL + "')";
    document.getElementById(hexId4).style.backgroundSize = sizeOfCoin;
    document.getElementById(hexId5).style.background = "url('" + mergedArrsNum[4].hnURL + "')";
    document.getElementById(hexId5).style.backgroundSize = sizeOfCoin;
    document.getElementById(hexId6).style.background = "url('" + mergedArrsNum[5].hnURL + "')";
    document.getElementById(hexId6).style.backgroundSize = sizeOfCoin;
    document.getElementById(hexId7).style.background = "url('" + mergedArrsNum[6].hnURL + "')";
    document.getElementById(hexId7).style.backgroundSize = sizeOfCoin;
    document.getElementById(hexId8).style.background = "url('" + mergedArrsNum[7].hnURL + "')";
    document.getElementById(hexId8).style.backgroundSize = sizeOfCoin;
    document.getElementById(hexId9).style.background = "url('" + mergedArrsNum[8].hnURL + "')";
    document.getElementById(hexId9).style.backgroundSize = sizeOfCoin;
    document.getElementById(hexId10).style.background = "url('" + mergedArrsNum[9].hnURL + "')";
    document.getElementById(hexId10).style.backgroundSize = sizeOfCoin;
    document.getElementById(hexId11).style.background = "url('" + mergedArrsNum[10].hnURL + "')";
    document.getElementById(hexId11).style.backgroundSize = sizeOfCoin;
    document.getElementById(hexId12).style.background = "url('" + mergedArrsNum[11].hnURL + "')";
    document.getElementById(hexId12).style.backgroundSize = sizeOfCoin;
    document.getElementById(hexId13).style.background = "url('" + mergedArrsNum[12].hnURL + "')";
    document.getElementById(hexId13).style.backgroundSize = sizeOfCoin;
    document.getElementById(hexId14).style.background = "url('" + mergedArrsNum[13].hnURL + "')";
    document.getElementById(hexId14).style.backgroundSize = sizeOfCoin;
    document.getElementById(hexId15).style.background = "url('" + mergedArrsNum[14].hnURL + "')";
    document.getElementById(hexId15).style.backgroundSize = sizeOfCoin;
    document.getElementById(hexId16).style.background = "url('" + mergedArrsNum[15].hnURL + "')";
    document.getElementById(hexId16).style.backgroundSize = sizeOfCoin;
    document.getElementById(hexId17).style.background = "url('" + mergedArrsNum[16].hnURL + "')";
    document.getElementById(hexId17).style.backgroundSize = sizeOfCoin;
    document.getElementById(hexId18).style.background = "url('" + mergedArrsNum[17].hnURL + "')";
    document.getElementById(hexId18).style.backgroundSize = sizeOfCoin;
    document.getElementById(hexId19).style.background = "url('" + mergedArrsNum[18].hnURL + "')";
    document.getElementById(hexId19).style.backgroundSize = sizeOfCoin;
    return hexId1, hexId2, hexId3, hexId4, hexId5, hexId6, hexId7, hexId8, hexId9, hexId10, hexId11, hexId12, hexId13, hexId14, hexId15, hexId16, hexId17, hexId18, hexId19;
  }
  /* end tileInit() */
  else {
      console.log("you have to shuffle the tiles first!");
    }
}
/* 
if (hexId1) {
 console.log("hexId1's image is loaded")  }
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50296" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","allJavascript/revealShuffledHexNumbers.js"], null)
//# sourceMappingURL=/revealShuffledHexNumbers.fd48da88.js.map