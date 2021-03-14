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
})({"allJavascript/revealShuffledTiles.js":[function(require,module,exports) {
var tileType, tileURL; //each variable of the same 
//type is associated with 
// corresponding /"asset"1.png

var sheep1 = 'gameAssetsOfficial/sheep1.png';
var sheep2 = 'gameAssetsOfficial/sheep1.png';
var sheep3 = 'gameAssetsOfficial/sheep1.png';
var sheep4 = 'gameAssetsOfficial/sheep1.png';
var wood1 = 'gameAssetsOfficial/wood1.png';
var wood2 = 'gameAssetsOfficial/wood1.png';
var wood3 = 'gameAssetsOfficial/wood1.png';
var wood4 = 'gameAssetsOfficial/wood1.png';
var wheat1 = 'gameAssetsOfficial/wheat1.png';
var wheat2 = 'gameAssetsOfficial/wheat1.png';
var wheat3 = 'gameAssetsOfficial/wheat1.png';
var wheat4 = 'gameAssetsOfficial/wheat1.png';
var ore1 = 'gameAssetsOfficial/ore1.png';
var ore2 = 'gameAssetsOfficial/ore1.png';
var ore3 = 'gameAssetsOfficial/ore1.png';
var brick1 = 'gameAssetsOfficial/brick1.png';
var brick2 = 'gameAssetsOfficial/brick1.png';
var brick3 = 'gameAssetsOfficial/brick1.png';
var desert1 = 'gameAssetsOfficial/desert1.png';
var remainingTilesNew = [// 4 sheep tiles
{
  tileType: 'sheepTile1',
  tileURL: sheep1
}, //sheep
{
  tileType: 'sheepTile2',
  tileURL: sheep2
}, //sheep
{
  tileType: 'sheepTile3',
  tileURL: sheep3
}, //sheep
{
  tileType: 'sheepTile4',
  tileURL: sheep4
}, //sheep
// 4 wood t'iles
{
  tileType: 'woodTile1',
  tileURL: wood1
}, //wood
{
  tileType: 'woodTile2',
  tileURL: wood2
}, //wood
{
  tileType: 'woodTile3',
  tileURL: wood3
}, //wood
{
  tileType: 'woodTile4',
  tileURL: wood4
}, //wood
// 4 wheat 'tile    
{
  tileType: 'wheatTile1',
  tileURL: wheat1
}, //wheat
{
  tileType: 'wheatTile2',
  tileURL: wheat2
}, //wheat
{
  tileType: 'wheatTile3',
  tileURL: wheat3
}, //wheat
{
  tileType: 'wheatTile4',
  tileURL: wheat4
}, //wheat
// 3 ore ti'les     
{
  tileType: 'oreTile1',
  tileURL: ore1
}, //ore
{
  tileType: 'oreTile2',
  tileURL: ore2
}, //ore
{
  tileType: 'oreTile3',
  tileURL: ore3
}, //ore
// 3 brick 'tile    
{
  tileType: 'brickTile1',
  tileURL: brick1
}, //brick
{
  tileType: 'brickTile2',
  tileURL: brick2
}, //brick
{
  tileType: 'brickTile3',
  tileURL: brick3
}, //brick
// 1 desert' til
{
  tileType: 'desertTile1',
  tileURL: desert1 //desert

}];
var hexArrPlaceholders = [{
  hexLetter: "A",
  hexId: "tp_A"
}, {
  hexLetter: "B",
  hexId: "tp_B"
}, {
  hexLetter: "C",
  hexId: "tp_C"
}, {
  hexLetter: "D",
  hexId: "tp_D"
}, {
  hexLetter: "E",
  hexId: "tp_E"
}, {
  hexLetter: "F",
  hexId: "tp_F"
}, {
  hexLetter: "G",
  hexId: "tp_G"
}, {
  hexLetter: "H",
  hexId: "tp_H"
}, {
  hexLetter: "I",
  hexId: "tp_I"
}, {
  hexLetter: "J",
  hexId: "tp_J"
}, {
  hexLetter: "K",
  hexId: "tp_K"
}, {
  hexLetter: "L",
  hexId: "tp_L"
}, {
  hexLetter: "M",
  hexId: "tp_M"
}, {
  hexLetter: "N",
  hexId: "tp_N"
}, {
  hexLetter: "O",
  hexId: "tp_O"
}, {
  hexLetter: "P",
  hexId: "tp_P"
}, {
  hexLetter: "Q",
  hexId: "tp_Q"
}, {
  hexLetter: "R",
  hexId: "tp_R"
}, {
  hexLetter: "S",
  hexId: "tp_S"
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

for (const hexLetter in hexArrPlaceholders) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}
*/

function tileInit() {
  return tileInit.called = true;
}

function shuffleOnClick() {
  //check that the function has been called
  tileInit();
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


  shuffle(hexArrPlaceholders); //-------MERGING BELOW -----------
  //placeholder brackets for each merged rows

  var mergedRow = []; //placeholder brackets to store final array

  var mergedArrs = []; //for every loop we partner up  an object[index] 
  //from hexArrPlaceholders with an object from remainingTiles

  var _loop = function _loop(index) {
    mergedRow = Object.assign(hexArrPlaceholders[index], remainingTilesNew[index]);
    mergedArrs.forEach(function (mergedRow) {
      Object.assign(hexArrPlaceholders[index], remainingTilesNew[index]);
    });
    mergedArrs.push(mergedRow);
  };

  for (var index = 0; index < hexArrPlaceholders.length; index++) {
    _loop(index);
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
    document.getElementById(id).style.visibility = "hidden"; // hide the lorem ipsum text

    document.getElementById(id).style.visibility = "visible"; // hide the link
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


  for (var x = 0; x < 19
  /* mergedArrs.length */
  ; x++) {
    var thisHexId = mergedArrs[x].hexId;
    var thisTileURL = mergedArrs[x].hexId;
    /* let thisBackground = thisHexId.setAttribute("background", thisTileURL)
     */
  } // Something to keep in mind when doing DOM manipulation

  /* I need to fix the hexId array as I now trimmed 
  the getelementbyid(" ") surrounding text, leaving
  me with just "element" with quotation marks.
  )
  */
  //TO-DO: replace redundancy with "For" loops
  //where the script generates would generate the key value pairs


  var hexId1 = mergedArrs[0].hexId;
  var hexId2 = mergedArrs[1].hexId;
  var hexId3 = mergedArrs[2].hexId;
  var hexId4 = mergedArrs[3].hexId;
  var hexId5 = mergedArrs[4].hexId;
  var hexId6 = mergedArrs[5].hexId;
  var hexId7 = mergedArrs[6].hexId;
  var hexId8 = mergedArrs[7].hexId;
  var hexId9 = mergedArrs[8].hexId;
  var hexId10 = mergedArrs[9].hexId;
  var hexId11 = mergedArrs[10].hexId;
  var hexId12 = mergedArrs[11].hexId;
  var hexId13 = mergedArrs[12].hexId;
  var hexId14 = mergedArrs[13].hexId;
  var hexId15 = mergedArrs[14].hexId;
  var hexId16 = mergedArrs[15].hexId;
  var hexId17 = mergedArrs[16].hexId;
  var hexId18 = mergedArrs[17].hexId;
  var hexId19 = mergedArrs[18].hexId;
  console.log(mergedArrs);
  document.getElementById(hexId1).style.background = "url('" + mergedArrs[0].tileURL + "')"; //perform animation for 

  document.getElementById(hexId2).style.background = "url('" + mergedArrs[1].tileURL + "')";
  document.getElementById(hexId3).style.background = "url('" + mergedArrs[2].tileURL + "')";
  document.getElementById(hexId4).style.background = "url('" + mergedArrs[3].tileURL + "')";
  document.getElementById(hexId5).style.background = "url('" + mergedArrs[4].tileURL + "')";
  document.getElementById(hexId6).style.background = "url('" + mergedArrs[5].tileURL + "')";
  document.getElementById(hexId7).style.background = "url('" + mergedArrs[6].tileURL + "')";
  document.getElementById(hexId8).style.background = "url('" + mergedArrs[7].tileURL + "')";
  document.getElementById(hexId9).style.background = "url('" + mergedArrs[8].tileURL + "')";
  document.getElementById(hexId10).style.background = "url('" + mergedArrs[9].tileURL + "')";
  document.getElementById(hexId11).style.background = "url('" + mergedArrs[10].tileURL + "')";
  document.getElementById(hexId12).style.background = "url('" + mergedArrs[11].tileURL + "')";
  document.getElementById(hexId13).style.background = "url('" + mergedArrs[12].tileURL + "')";
  document.getElementById(hexId14).style.background = "url('" + mergedArrs[13].tileURL + "')";
  document.getElementById(hexId15).style.background = "url('" + mergedArrs[14].tileURL + "')";
  document.getElementById(hexId16).style.background = "url('" + mergedArrs[15].tileURL + "')";
  document.getElementById(hexId17).style.background = "url('" + mergedArrs[16].tileURL + "')";
  document.getElementById(hexId18).style.background = "url('" + mergedArrs[17].tileURL + "')";
  document.getElementById(hexId19).style.background = "url('" + mergedArrs[18].tileURL + "')";
  return hexId1, hexId2, hexId3, hexId4, hexId5, hexId6, hexId7, hexId8, hexId9, hexId10, hexId11, hexId12, hexId13, hexId14, hexId15, hexId16, hexId17, hexId18, hexId19, mergedArrs;
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","allJavascript/revealShuffledTiles.js"], null)
//# sourceMappingURL=/revealShuffledTiles.b9fedae9.js.map