// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"assets/img/bg-top.svg":[function(require,module,exports) {
module.exports = `<svg width="1920" height="1203"><path class="st0" fill="#f9f1e4" d="M0 1054.2h1920V2161H0z"/><path class="st1" fill="#e89087" d="M0 0h1920v1080H0z"/><path class="st0" fill="#f9f1e4" d="M0 0h1920v1203H0z"/><g transform="translate(-2316 -2893.7)"><path class="st2" fill="#efe3ce" opacity=".6" d="M822.4 2901.4L3970 4851.7l-876.2-2023z"/><path class="st3" fill="#f2e9d7" opacity=".37" d="M2108 5197.7L3958 4872l-1881.9-430.7z"/><path class="st4" fill="#f2e4ce" d="M881.3 2794.2l3092.4 2069.9-1751-2032.5z"/><path class="st5" fill="#f7e6c6" opacity=".58" d="M3548.2 2734.5l427.2 2164.1 436.9-2067.4z"/><circle class="st6" cx="2583.5" cy="3161.2" r="158.5" fill="#f9f1e4" opacity=".85"/><g class="st7" fill="#fff" opacity=".25"><path class="st8" d="M3791.5 3863.5c0 .1-.1.2-.1.2h.3z"/><path class="st8" d="M4275 3857.7c0-23.2-24.1-42.4-55.3-45.2-4.6-28.9-34.8-51.3-71.3-51.3-25.5 0-47.9 10.9-60.6 27.3-5.5-1.7-11.2-2.5-17-2.5-15.2-.1-29.7 5.8-40.5 16.5-17.8-7.3-41-11.8-66.5-11.8-27.8 0-53 5.3-71.3 13.9.2-1.8.3-3.7.3-5.5 0-37.2-35.1-67.3-78.4-67.3-38.9 0-71.1 24.3-77.3 56.1-3.3-.3-6.7-.5-10.1-.5-39.7 0-71.9 23.7-71.9 52.9 0 4.1.7 8.3 1.9 12.2-2.5-.1-5-.2-7.6-.2-23.9 0-43.3 4.7-43.3 10.4 0 .3.1.7.2 1h185.1c.1-.1.1-.1.1-.2l.1.2h482.8c.3-2 .6-4 .6-6z"/></g><g class="st7" fill="#fff" opacity=".25"><path class="st8" d="M2665.5 3521.5c0 .1.1.2.1.2h-.3l.2-.2z"/><path class="st8" d="M2182 3515.7c0-23.2 24.1-42.4 55.3-45.2 4.6-28.9 34.8-51.3 71.3-51.3 25.5 0 47.9 10.9 60.6 27.3 5.5-1.7 11.2-2.5 17-2.5 15.2-.1 29.7 5.8 40.5 16.5 17.8-7.3 41.1-11.8 66.5-11.8 27.8 0 53 5.3 71.3 13.9-.2-1.8-.3-3.7-.3-5.5 0-37.2 35.1-67.3 78.4-67.3 38.9 0 71.1 24.3 77.3 56.1 3.3-.3 6.7-.5 10.1-.5 39.7 0 71.9 23.7 71.9 52.9 0 4.1-.7 8.3-1.9 12.2 2.5-.1 5-.2 7.6-.2 23.9 0 43.3 4.7 43.3 10.4 0 .3-.1.7-.2 1h-185.2c-.1-.1-.1-.1-.1-.2h-.1c0 .1-.1.1-.1.2h-482.8c-.2-2-.4-4-.4-6z"/></g><g class="st7" opacity=".25"><path class="st8" d="M4263.6 3513.6c0-11.8-12.6-21.7-29.2-23.6-5-19.6-26.5-34.3-52.2-34.3-15.2 0-28.9 5.1-38.6 13.4-10.8-19-28.7-31.3-48.9-31.3s-38 12.3-48.9 31.3c-18.9 2.8-34.6 13.7-42.5 28.4h-1.8c-20.8 0-37.6 7.5-37.6 16.7 0 1.3.3 2.5.9 3.6H4263c.4-1.4.6-2.8.6-4.2z" fill="#fff"/></g></g><g class="st9" opacity=".43"><path class="st10" d="M578.5 653.8c0-24.4-26-44.7-60.3-48.7-10.4-40.4-54.7-70.8-107.7-70.8-31.3 0-59.6 10.6-79.7 27.6-22.4-39.1-59.2-64.6-100.8-64.6s-78.4 25.5-100.8 64.5c-38.9 5.8-71.4 28.2-87.6 58.5H38c-42.8 0-77.5 15.4-77.5 34.5 0 2.6.7 5.1 1.9 7.5h615c.7-2.8 1.1-5.6 1.1-8.5z" fill="#66b9bf"/></g><g><path class="st11" fill="#07889b" d="M1620.626 1701.215l203.025 17.656-28.217 324.463-203.025-17.656z"/><circle class="st12" transform="rotate(-85.031 1702.828 1932.999) scale(.99996)" cx="1702.8" cy="1933" r="66.3" fill="#27334f"/><g fill="#74bbce"><circle class="st13" transform="rotate(-85.031 1702.665 1935.147) scale(.99996)" cx="1702.6" cy="1935.1" r="24.2"/><path class="st13" d="M1708.1 1872.7c-33.3-2.9-62.7 21.8-65.6 55.1s21.8 62.7 55.1 65.6 62.7-21.8 65.6-55.1c2.9-33.4-21.8-62.7-55.1-65.6zm-9.6 110c-27.4-2.4-47.8-26.6-45.4-54s26.6-47.8 54-45.4 47.8 26.6 45.4 54c-2.4 27.5-26.5 47.8-54 45.4z"/><circle class="st13" transform="rotate(-85.031 1634.646 1717.893) scale(.99996)" cx="1634.6" cy="1717.9" r="7.5"/></g><circle class="st14" transform="rotate(-85.031 1609.122 2011.775) scale(.99996)" cx="1609.1" cy="2011.8" r="7.5" fill="#3175cd"/><circle class="st13" transform="rotate(-85.031 1807.114 1732.871) scale(.99996)" cx="1807.1" cy="1732.9" r="7.5" fill="#74bbce"/><circle class="st14" transform="rotate(-85.031 1781.586 2026.758) scale(.99996)" cx="1781.6" cy="2026.7" r="7.5" fill="#3175cd"/><circle class="st12" transform="rotate(-85.031 1715.087 1787.81) scale(.99996)" cx="1715.1" cy="1787.8" r="43.8" fill="#27334f"/><circle class="st13" transform="rotate(-85.031 1714.987 1789.234) scale(.99996)" cx="1715" cy="1789.2" r="16" fill="#74bbce"/><path class="st13" d="M1718.6 1747.9c-22-1.9-41.5 14.4-43.4 36.4s14.4 41.5 36.4 43.4 41.5-14.4 43.4-36.4-14.4-41.5-36.4-43.4zm-6.4 72.8c-18.1-1.6-31.6-17.6-30-35.7s17.6-31.6 35.7-30 31.6 17.6 30 35.7c-1.5 18.1-17.5 31.6-35.7 30z" fill="#74bbce"/><path class="st15" fill="#06666d" d="M1851.5 1995.8l-56.5 47.5 28.2-324.4 57.5-48.3"/><path class="st16" fill="#09abb7" d="M1879.8 1670.6l-57 47.8-202.1-17.1 57.5-48.3z"/></g><g><path class="st11" fill="#07889b" d="M1346.642 1813.495l381.33 73.718-38.87 201.073-381.332-73.719z"/><circle class="st17" transform="rotate(-79.059 1409.978 1945.055)" cx="1409.9" cy="1945" r="70.3" fill="#33608c"/><circle class="st13" transform="rotate(-79.059 1412.183 1945.468)" cx="1412.1" cy="1945.4" r="25.7" fill="#74bbce"/><path class="st13" d="M1346.8 1932.8c-6.7 34.8 16 68.5 50.9 75.3s68.5-16 75.3-50.9c6.7-34.8-16-68.5-50.9-75.3-34.9-6.7-68.5 16.1-75.3 50.9zm115 22.2c-5.5 28.7-33.3 47.4-62 41.9s-47.4-33.3-41.9-62 33.3-47.4 62-41.9c28.7 5.6 47.5 33.3 41.9 62z" fill="#74bbce"/><circle class="st17" transform="rotate(-79.059 1622.144 1986.027)" cx="1622.1" cy="1986" r="70.3" fill="#33608c"/><circle class="st13" transform="rotate(-79.059 1624.41 1986.49)" cx="1624.3" cy="1986.4" r="25.7" fill="#74bbce"/><path class="st13" d="M1559 1973.8c-6.7 34.8 16 68.5 50.9 75.3 34.8 6.7 68.5-16 75.3-50.9 6.7-34.8-16-68.5-50.9-75.3-34.9-6.7-68.5 16.1-75.3 50.9zm115 22.2c-5.5 28.7-33.3 47.4-62 41.9s-47.4-33.3-41.9-62 33.3-47.4 62-41.9c28.7 5.6 47.5 33.3 41.9 62z" fill="#74bbce"/><path class="st18" fill="#6c9fc1" d="M1340.191 1846.865l381.43 73.738-.76 3.927-381.429-73.737z"/><g fill="#33608c"><path class="st17" d="M1496.886 1848.635l8.934 1.727-4.024 20.814-8.934-1.727zM1551.47 1859.235l8.934 1.727-4.023 20.814-8.935-1.727zM1537.861 1856.641l8.934 1.727-4.023 20.814-8.935-1.727zM1524.173 1853.93l8.934 1.727-4.023 20.814-8.935-1.727zM1510.564 1851.336l8.934 1.727-4.024 20.814-8.934-1.727zM1565.177 1861.838l8.935 1.727-4.024 20.814-8.934-1.727zM1498.298 1912.87l54.195 10.477-6.453 33.381-54.195-10.477z"/></g><circle class="st13" transform="rotate(-79.059 1508.603 1932.552)" cx="1508.5" cy="1932.5" r="6.8" fill="#74bbce"/><circle class="st13" transform="rotate(-79.059 1533.103 1937.299)" cx="1533" cy="1937.2" r="6.8" fill="#74bbce"/><g fill="#74bbce"><path class="st13" d="M1493.1 1984.1l-5.5-1 10.7 40.8-3.1 4-10.9-45.5-5.3-1 12.4 51.8 4.9 1 31.3-43.4-5.3-1-20.7 28.8zM1514 2037.6l31-43.4-4.9-1-31.4 43.4zM1531.3 1991.5l-15.2 21.8 5.1 1 15.4-21.7zM1505.3 2035.9l13.8-19.4-6.3-1.2-13.2 19.5z"/></g><path class="st19" fill="#0bb1b5" d="M1384.1 1788.6l-37 24.9 382.2 73.9 36.9-25z"/><path class="st20" fill="#06727a" d="M1765.2 1862.2l-37.3 25.2-38.6 200.9 37-25z"/><path class="st21" fill="#6e9fc4" d="M1654.5 1829l-203.1-39.3-5.2 27.2-15.8-3 8.3-43.1 234.6 45.4-8.3 43-15.8-3z"/><path class="st22" fill="#78add6" d="M1680.8 1811.1l-7.5 5.1-234.1-45.3 7.5-5.1z"/><path class="st23" fill="#5c83a7" d="M1673.3 1816.2l7.5-5.1-8.3 43-7.5 5.1z"/></g><g class="st24" opacity=".45"><path class="st10" d="M1856.3 584.2c0-11.8-12.6-21.7-29.2-23.6-5-19.6-26.5-34.3-52.2-34.3-15.2 0-28.9 5.1-38.6 13.4-10.8-19-28.7-31.3-48.9-31.3s-38 12.3-48.9 31.3c-18.9 2.8-34.6 13.7-42.5 28.4h-1.8c-20.8 0-37.6 7.5-37.6 16.7 0 1.2.3 2.5.9 3.6h298.2c.4-1.4.6-2.8.6-4.2z" fill="#66b9bf"/></g></svg>`
},{}],"../../.node_modules/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "46591" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../.node_modules/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/img/bg-top.svg"], null)