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
})({"allJavascript/pawnPlaceholders.js":[function(require,module,exports) {
/* what we know

roads :
- have at least 2 adjacent roads (coastal 2-3)
- have at most 4 adjacent roads (inland)
- always rest between two roads from which they bear
their name
- can only be built next to existing nodes or roads.
- provide no intrinsic value unless at least 5 contiguous 
sections are placed by a player, (2VP)
without being interrupted by pieces of another player



nodes (set and cit):
- have between 2 and 3 adjacent roads
- (regardless of which player) 
may not be placed within (the equivalent distance of)
2 roads of any other node
- need to act according to following:
events  

nomenclature:      
roadDaigu = / = sameletter/uneven to sameletter/even ex:       a3a4
roadgrav = \ = sameletter/even to sameletter/uneven ex:       c8c9

roadvert = | = nextletter/number to previousletter/number 




\   /b5b6
        | c6b5 (when clicked)
/\

node = [min/max 2/3 adjNode, min/max 2/3 adjRoad]
road = [min/max 2/4 adjRoad, min/max 2/3 adjNode]

*/
var allPawns = [nodeAhi = {
  /*  node objects declare adjNode first whereas road objects declare adjRoad first (of which they have max4)*/
  A2hi: {
    assetUrl: 'document.getElementsByClassName("nodeA2")',
    adjNode: [nodeA1, null, nodeA3],
    adjRoad: [a1a2, null, a2a3],
    isOwnedBy: undefined,
    canBeBought: true
  },
  A4hi: {
    assetUrl: 'document.getElementsByClassName("nodeA4")',
    adjNode: [nodeA3, null, nodeA5],
    adjRoad: [a3a4, null, a2a3],
    isOwnedBy: undefined,
    canBeBought: true
  },
  A6hi: {
    assetUrl: 'document.getElementsByClassName("nodeA6")',
    adjNode: [nodeA7, null, nodeA7],
    adjRoad: [a5a6, null, a6a7],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, nodeAlo = {
  A1lo: {
    assetUrl: 'document.getElementsByClassName("nodeA1")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  A3lo: {
    assetUrl: 'document.getElementsByClassName("nodeA3")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  A5lo: {
    assetUrl: 'document.getElementsByClassName("nodeA5")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  A7lo: {
    assetUrl: 'document.getElementsByClassName("nodeA7")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, roadAgrav = {
  /*  adjRoad [topleft: roadvar, bottomleft, topright, bottomright] regardless of if road = \ | /
   example road c6c7 : [topleft: c6b5, bottomleft: c4c5, topright: , bottomright]  ]      */
  a2a3: {
    assetUrl: 'document.getElementById("a2a3")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  a4a5: {
    assetUrl: 'document.getElementById("a4a6")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  a6a7: {
    assetUrl: 'document.getElementById("a6a7")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, roadAaigu = {
  a1a2: {
    assetUrl: 'document.getElementById("a1a2")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  a3a4: {
    assetUrl: 'document.getElementById("a3a4")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  a5a6: {
    assetUrl: 'document.getElementById("a5a6")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, roadAvert = {
  b2a1: {
    assetUrl: 'document.getElementById("b2a1")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  b4a3: {
    assetUrl: 'document.getElementById("b4a3")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  b6a5: {
    assetUrl: 'document.getElementById("b6a5")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  b8a7: {
    assetUrl: 'document.getElementById("b8a7")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, nodeBhi = {
  b2hi: {
    assetUrl: 'document.getElementsByClassName("nodeB2")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  b4hi: {
    assetUrl: 'document.getElementsByClassName("nodeB4")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  b6hi: {
    assetUrl: 'document.getElementsByClassName("nodeB6")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  b8hi: {
    assetUrl: 'document.getElementsByClassName("nodeB8")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, nodeBlo = {
  b1lo: {
    assetUrl: 'document.getElementsByClassName("nodeB1")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  B3lo: {
    assetUrl: 'document.getElementsByClassName("nodeB3")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  B5lo: {
    assetUrl: 'document.getElementsByClassName("nodeB5")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  B7lo: {
    assetUrl: 'document.getElementsByClassName("nodeB7")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  B9lo: {
    assetUrl: 'document.getElementsByClassName("nodeB9")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, roadBgrav = {
  b2b3: {
    assetUrl: 'document.getElementById("b2b3")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  b4b5: {
    assetUrl: 'document.getElementById("b4b5")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  b6b7: {
    assetUrl: 'document.getElementById("b6b7")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  b8b9: {
    assetUrl: 'document.getElementById("b8b9")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, roadBaigu = {
  b1b2: {
    assetUrl: 'document.getElementById("b1b2")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  b3b4: {
    assetUrl: 'document.getElementById("b3b4")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  b5b6: {
    assetUrl: 'document.getElementById("b5b6")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  b7b8: {
    assetUrl: 'document.getElementById("b7b8")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, roadBvert = {
  c2b1: {
    assetUrl: 'document.getElementById("c2b1")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  c4b3: {
    assetUrl: 'document.getElementById("c4b3")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  c6b5: {
    assetUrl: 'document.getElementById("c6b5")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  c8b7: {
    assetUrl: 'document.getElementById("c8b7")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  c10b9: {
    assetUrl: 'document.getElementById("c10b9")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, nodeChi = {
  C2hi: {
    assetUrl: 'document.getElementsByClassName("nodeC2")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  C4hi: {
    assetUrl: 'document.getElementsByClassName("nodeC4")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  C6hi: {
    assetUrl: 'document.getElementsByClassName("nodeC6")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  C8hi: {
    assetUrl: 'document.getElementsByClassName("nodeC8")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  C10hi: {
    assetUrl: 'document.getElementsByClassName("nodeC10")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, nodeClo = {
  C1lo: {
    assetUrl: 'document.getElementsByClassName("nodeC1")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  C3lo: {
    assetUrl: 'document.getElementsByClassName("nodeC3")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  C5lo: {
    assetUrl: 'document.getElementsByClassName("nodeC5")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  C7lo: {
    assetUrl: 'document.getElementsByClassName("nodeC7")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  C9lo: {
    assetUrl: 'document.getElementsByClassName("nodeC9")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  C11lo: {
    assetUrl: 'document.getElementsByClassName("nodeC11")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, roadCgrav = {
  c2c3: {
    assetUrl: 'document.getElementById("c2c3")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  c4c5: {
    assetUrl: 'document.getElementById("c4c5")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  c6c7: {
    assetUrl: 'document.getElementById("c6c7")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  c8c9: {
    assetUrl: 'document.getElementById("c8c9")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  c10c11: {
    assetUrl: 'document.getElementById("c10c11")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, roadCaigu = {
  c1c2: {
    assetUrl: 'document.getElementById("c1c2")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  c3c4: {
    assetUrl: 'document.getElementById("c3c4")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  c5c6: {
    assetUrl: 'document.getElementById("c5c6")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  c7c8: {
    assetUrl: 'document.getElementById("c7c8")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  c9c10: {
    assetUrl: 'document.getElementById("c9c10")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, roadCvert = {
  d1c1: {
    assetUrl: 'document.getElementById("d1c1")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  d3c3: {
    assetUrl: 'document.getElementById("d3c3")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  d5c5: {
    assetUrl: 'document.getElementById("d5c5")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  d7c7: {
    assetUrl: 'document.getElementById("d7c7")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  d9c9: {
    assetUrl: 'document.getElementById("d9c9")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  d11c11: {
    assetUrl: 'document.getElementById("d11c11")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
},
/* D and lower from even to uneven and vice versa */
nodeDhi = {
  D1hi: {
    assetUrl: 'document.getElementsByClassName("nodeD1")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  D3hi: {
    assetUrl: 'document.getElementsByClassName("nodeD3")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  D5hi: {
    assetUrl: 'document.getElementsByClassName("nodeD5")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  D7hi: {
    assetUrl: 'document.getElementsByClassName("nodeD7")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  D9hi: {
    assetUrl: 'document.getElementsByClassName("nodeD9")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  D11hi: {
    assetUrl: 'document.getElementsByClassName("nodeD11")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, nodeDlo = {
  D2hi: {
    assetUrl: 'document.getElementsByClassName("nodeD2")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  D3lo: {
    assetUrl: 'document.getElementsByClassName("nodeD3")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  D5lo: {
    assetUrl: 'document.getElementsByClassName("nodeD5")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  D7lo: {
    assetUrl: 'document.getElementsByClassName("nodeD7")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  D9lo: {
    assetUrl: 'document.getElementsByClassName("nodeD9")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  D10lo: {
    assetUrl: 'document.getElementsByClassName("nodeD10")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, roadDaigu = {
  d2d3: {
    assetUrl: 'document.getElementById("d2d3")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  d4d5: {
    assetUrl: 'document.getElementById("d4d5")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  d6d7: {
    assetUrl: 'document.getElementById("d6d7")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  d8d9: {
    assetUrl: 'document.getElementById("d8d9")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  d10d11: {
    assetUrl: 'document.getElementById("d10d11")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, roadDgrav = {
  d1d2: {
    assetUrl: 'document.getElementById("d1d2")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  d3d4: {
    assetUrl: 'document.getElementById("d3d4")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  d5d6: {
    assetUrl: 'document.getElementById("d5d6")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  d7d8: {
    assetUrl: 'document.getElementById("d7d8")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  d9d10: {
    assetUrl: 'document.getElementById("d9d10")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, roadDvert = {
  e1d2: {
    assetUrl: 'document.getElementById("e1d2")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  e3d4: {
    assetUrl: 'document.getElementById("e3d4")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  e5d6: {
    assetUrl: 'document.getElementById("e5d6")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  e7d8: {
    assetUrl: 'document.getElementById("e7d8")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  e9d10: {
    assetUrl: 'document.getElementById("e9d10")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, nodeEhi = {
  E1Hi: {
    assetUrl: 'document.getElementsByClassName("nodeE1")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  E3hi: {
    assetUrl: 'document.getElementsByClassName("nodeE3")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  E5hi: {
    assetUrl: 'document.getElementsByClassName("nodeE5")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  E7hi: {
    assetUrl: 'document.getElementsByClassName("nodeE7")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  E9hi: {
    assetUrl: 'document.getElementsByClassName("nodeE9")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, nodeElo = {
  E2lo: {
    assetUrl: 'document.getElementsByClassName("nodeE2")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  E4lo: {
    assetUrl: 'document.getElementsByClassName("nodeE4")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  E6lo: {
    assetUrl: 'document.getElementsByClassName("nodeE6")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  E8lo: {
    assetUrl: 'document.getElementsByClassName("nodeE8")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, roadEgrav = {
  e2e3: {
    assetUrl: 'document.getElementById("e2e3")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  e4e5: {
    assetUrl: 'document.getElementById("e4e5")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  e6e7: {
    assetUrl: 'document.getElementById("e6e7")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  e8e9: {
    assetUrl: 'document.getElementById("e8e9")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, roadEaigu = {
  e1e2: {
    assetUrl: 'document.getElementById("e1e2")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  e3e4: {
    assetUrl: 'document.getElementById("e3e4")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  e5e6: {
    assetUrl: 'document.getElementById("e5e6")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  e7e8: {
    assetUrl: 'document.getElementById("e7e8")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, roadEvert = {
  f1e2: {
    assetUrl: 'document.getElementById("f1e2")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  f3e4: {
    assetUrl: 'document.getElementById("f3e4")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  f5e6: {
    assetUrl: 'document.getElementById("f5e6")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  f7e8: {
    assetUrl: 'document.getElementById("f7e8")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, nodeFhi = {
  F2Hi: {
    assetUrl: 'document.getElementsByClassName("nodeF2")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  F4hi: {
    assetUrl: 'document.getElementsByClassName("nodeF4")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  F6hi: {
    assetUrl: 'document.getElementsByClassName("nodeF6")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  F1lo: {
    assetUrl: 'document.getElementsByClassName("nodeF1")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  F3lo: {
    assetUrl: 'document.getElementsByClassName("nodeF3")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  F5lo: {
    assetUrl: 'document.getElementsByClassName("nodeF5")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  F7lo: {
    assetUrl: 'document.getElementsByClassName("nodeF7")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}, roadFgrav = {
  f2f3: {
    assetUrl: 'document.getElementById("f2f3")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  f4f5: {
    assetUrl: 'document.getElementById("f4f5")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  f6f7: {
    assetUrl: 'document.getElementById("f6f7")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  f1f2: {
    assetUrl: 'document.getElementById("f1f2")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  f3f4: {
    assetUrl: 'document.getElementById("f3f4")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  },
  f5f6: {
    assetUrl: 'document.getElementById("f5f6")',
    adjNode: [nodeAX, null, nodeAX],
    adjRoad: [aXaX, bXaX, aXaX],
    isOwnedBy: undefined,
    canBeBought: true
  }
}];
console.log(allPawns[0]);
/*
class Car {
        constructor(name, year) {
          this.name = name;
          this.year = year;
        }
      }
      
      myCar = new Car("Ford", 2014);
      document.getElementById("dataLog").innerHTML =
      myCar.name + " " + myCar.year;
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","allJavascript/pawnPlaceholders.js"], null)
//# sourceMappingURL=/pawnPlaceholders.35993812.js.map