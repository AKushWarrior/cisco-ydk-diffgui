// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3oVe5":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "66415b0af84d32eed7921cf12b441696"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5rkFb":[function(require,module,exports) {
var _preact = require("preact");
class App extends _preact.Component {
    constructor(){
        super();
        this.state = {
            groups: {
            }
        };
        this.is_defined = {
            "ACL": {
                "delete_ace": true,
                "set_acl": true,
                "set_acl_ace": true
            },
            "BGP": {
                "config_bgp_globals": true,
                "config_bgp_globals_vrf": true,
                "config_bgp_neighbor": true,
                "config_bgp_neighbor_group": true
            },
            "Bundles": {
                "get_bundle": true,
                "get_lc_slots": true,
                "set_bundle_interface": true,
                "set_bundle_interfaces": true
            },
            "DHCP": {
                "config_agent_interface_ipv4": true,
                "config_agent_interface_ipv6": true,
                "config_helperaddress_ipv4": true,
                "set_relay_helper_dhcpv6": true,
                "unset_dhcp_ipv4": true,
                "unset_dhcp_ipv6": true,
                "unset_relay_helper_dhcpv6": true,
                "get_dhcp_ipv4_relay_statistics": false,
                "get_v6_relay_binding_count": false
            },
            "EVPN": {
                "add_esi": true,
                "add_evi": true,
                "add_interface_convergence": true,
                "add_interface_hrw": true,
                "delete_evi": true,
                "delete_interface_hrw": true,
                "set_BVIIntf": true,
                "get_evpn_ethernet_segment_carving_detail": false,
                "get_evpn_ethernet_segment_interface_detail": false,
                "remove_evpn_loadbalancing": false
            },
            "Forwarding": {
                "config_cef_adjacency": true,
                "delete_vrf": true,
                "get_vrf_data": true
            },
            "L2": {
                "get_cfm_summary": true,
                "set_ethernet_cfm_domain_level": true,
                "set_ethernet_sla_profile": true,
                "set_interface_ethernet_cfm": true
            },
            "L2VPN": {
                "get_bridge_domain": true,
                "remove_bridge_group": true,
                "remove_l2vpn": true,
                "remove_xconnect_group": true,
                "set_bridge_group": true,
                "set_evpn_vpws": true,
                "set_flexiblexconnect": true,
                "set_xconnect": true,
                "unset_xconnect": true,
                "get_l2vpn_flexible_xconnect_service_detail": false
            },
            "Multicast": {
                "set_pim_config": true,
                "set_static_group": true,
                "set_acl_config": false
            },
            "PI Infra": {
                "delete_interface": true,
                "get_interface_accounting": true,
                "get_interfaces_brief": true,
                "get_process_info": true,
                "get_show_interfaces_summary": true,
                "set_bundle_id": true,
                "set_config": true,
                "set_l2_transport": true,
                "set_rewrite_ingress_tag_pop": true,
                "set_vlan_config": true,
                "unset_rewrite_ingress_tag_translate": true,
                "set_rewrite_ingress_tag_translate": false
            },
            "Platform": {
                "create_interfaces": true,
                "get_lc_locations": true,
                "get_rp_locations": true
            }
        };
        this.duplicated = {
            "add_bundle_interface": [
                "Bundles",
                "PI Infra"
            ],
            "add_interface": [
                "EVPN",
                "PI Infra"
            ],
            "add_source": [
                "EVPN",
                "PI Infra"
            ],
            "get_interface": [
                "ACL",
                "L2VPN",
                "MPLS TE",
                "Multicast",
                "PI Infra"
            ],
            "get_interfaces": [
                "PI Infra",
                "Platform"
            ],
            "remove_interface": [
                "EVPN",
                "MPLS LDP"
            ],
            "set_vrf": [
                "Forwarding",
                "PI Infra"
            ]
        };
    }
    componentDidMount() {
        let keys = Array.from(new Map(Object.entries(this.is_defined)).keys());
        keys.forEach((key, i)=>this.state.groups[key] = true
        );
        console.log(this.state.groups);
        console.log(Object.entries(this.state.groups));
        this.setState({
        });
    }
    handleGroupToggle(id) {
        this.state.groups[id] = !this.state.groups[id];
        console.log(this.state.groups);
        this.setState({
        });
    }
    render() {
        const foundList = Object.entries(this.is_defined).filter((entry)=>this.state.groups[entry[0]]
        );
        for(let i = 0; i < foundList.length; i++)foundList[i][1] = Object.entries(foundList[i][1]).filter((entry)=>entry[1]
        );
        const foundCards = foundList.map((entry)=>/*#__PURE__*/ _preact.h(GroupDisplay, {
                name: entry[0],
                content: entry[1],
                is_found: true,
                __source: {
                    fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
                    lineNumber: 155
                },
                __self: this
            })
        );
        let notFoundList = Object.entries(this.is_defined).filter((entry)=>this.state.groups[entry[0]]
        );
        for(let i1 = 0; i1 < notFoundList.length; i1++)notFoundList[i1][1] = Object.entries(notFoundList[i1][1]).filter((entry)=>!entry[1]
        );
        notFoundList = notFoundList.filter((entry)=>entry[1].length > 0
        );
        const notFoundCards = notFoundList.map((entry)=>/*#__PURE__*/ _preact.h(GroupDisplay, {
                name: entry[0],
                content: entry[1],
                is_found: false,
                __source: {
                    fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
                    lineNumber: 163
                },
                __self: this
            })
        );
        return(/*#__PURE__*/ _preact.h("div", {
            style: "text-align: center;",
            __source: {
                fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
                lineNumber: 165
            },
            __self: this
        }, /*#__PURE__*/ _preact.h("h1", {
            style: "text-align: center;",
            class: "is-size-2",
            __source: {
                fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
                lineNumber: 166
            },
            __self: this
        }, "Netconf/Yang Method DiffGUI"), /*#__PURE__*/ _preact.h("div", {
            class: "columns",
            __source: {
                fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
                lineNumber: 167
            },
            __self: this
        }, /*#__PURE__*/ _preact.h(GroupForm, {
            groups: Object.entries(this.state.groups),
            handleGroup: this.handleGroupToggle.bind(this),
            __source: {
                fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
                lineNumber: 168
            },
            __self: this
        }), /*#__PURE__*/ _preact.h("div", {
            class: "column px-1",
            __source: {
                fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
                lineNumber: 169
            },
            __self: this
        }, /*#__PURE__*/ _preact.h("h3", {
            class: "my-5 is-size-4",
            __source: {
                fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
                lineNumber: 170
            },
            __self: this
        }, "Found in YDK"), foundCards), /*#__PURE__*/ _preact.h("div", {
            class: "column px-1",
            __source: {
                fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
                lineNumber: 173
            },
            __self: this
        }, /*#__PURE__*/ _preact.h("h3", {
            class: "my-5 is-size-4",
            __source: {
                fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
                lineNumber: 174
            },
            __self: this
        }, "Not Found in YDK"), notFoundCards))));
    }
}
class GroupForm extends _preact.Component {
    render() {
        const groupItems = this.props.groups.map((entry)=>/*#__PURE__*/ _preact.h("div", {
                class: "form-group mb-2",
                __source: {
                    fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
                    lineNumber: 185
                },
                __self: this
            }, /*#__PURE__*/ _preact.h("label", {
                class: "form-switch",
                __source: {
                    fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
                    lineNumber: 186
                },
                __self: this
            }, /*#__PURE__*/ _preact.h("input", {
                type: "checkbox",
                checked: entry[1],
                onChange: ()=>this.props.handleGroup(entry[0])
                ,
                __source: {
                    fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
                    lineNumber: 187
                },
                __self: this
            }), /*#__PURE__*/ _preact.h("i", {
                class: "form-icon",
                __source: {
                    fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
                    lineNumber: 192
                },
                __self: this
            }), " ", entry[0]))
        );
        return(/*#__PURE__*/ _preact.h("div", {
            class: "column is-narrow px-1 mr-6",
            style: "text-align: left",
            __source: {
                fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
                lineNumber: 197
            },
            __self: this
        }, /*#__PURE__*/ _preact.h("h3", {
            style: "text-align: center",
            class: "my-5 is-size-4",
            __source: {
                fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
                lineNumber: 198
            },
            __self: this
        }, "Groups"), groupItems));
    }
}
class GroupDisplay extends _preact.Component {
    render() {
        const group = this.props.name;
        const content = this.props.content;
        const is_found = this.props.is_found;
        const color = is_found ? " has-text-success" : "has-text-danger";
        const items = content.map((entry)=>/*#__PURE__*/ _preact.h("p", {
                style: "margin-top: 5px; margin-bottom: 0px",
                __source: {
                    fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
                    lineNumber: 212
                },
                __self: this
            }, entry)
        );
        return(/*#__PURE__*/ _preact.h("div", {
            class: "card mb-2",
            __source: {
                fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
                lineNumber: 215
            },
            __self: this
        }, /*#__PURE__*/ _preact.h("div", {
            class: "card-header",
            __source: {
                fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
                lineNumber: 216
            },
            __self: this
        }, /*#__PURE__*/ _preact.h("h5", {
            class: "card-header-title my-0 " + color,
            __source: {
                fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
                lineNumber: 217
            },
            __self: this
        }, group)), /*#__PURE__*/ _preact.h("div", {
            class: "card-content is-size-7 py-3",
            __source: {
                fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
                lineNumber: 219
            },
            __self: this
        }, items)));
    }
}
_preact.render(/*#__PURE__*/ _preact.h(App, {
    __source: {
        fileName: "/Users/aditya/Documents/cisco_netconf_yang_diffgui/gui/src/index.js",
        lineNumber: 227
    },
    __self: undefined
}), document.body);

},{"preact":"4L2dE"}],"4L2dE":[function(require,module,exports) {
var n, l, u, t, i, o, r, f, e = {
}, c = [], s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function a(n1, l1) {
    for(var u1 in l1)n1[u1] = l1[u1];
    return n1;
}
function p(n1) {
    var l1 = n1.parentNode;
    l1 && l1.removeChild(n1);
}
function v(l1, u1, t1) {
    var i1, o1, r1, f1 = {
    };
    for(r1 in u1)"key" == r1 ? i1 = u1[r1] : "ref" == r1 ? o1 = u1[r1] : f1[r1] = u1[r1];
    if (arguments.length > 2 && (f1.children = arguments.length > 3 ? n.call(arguments, 2) : t1), "function" == typeof l1 && null != l1.defaultProps) for(r1 in l1.defaultProps)(void 0) === f1[r1] && (f1[r1] = l1.defaultProps[r1]);
    return h(l1, f1, i1, o1, null);
}
function h(n1, t1, i1, o1, r1) {
    var f1 = {
        type: n1,
        props: t1,
        key: i1,
        ref: o1,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == r1 ? ++u : r1
    };
    return null != l.vnode && l.vnode(f1), f1;
}
function y(n1) {
    return n1.children;
}
function d(n1, l1) {
    this.props = n1, this.context = l1;
}
function _(n1, l1) {
    if (null == l1) return n1.__ ? _(n1.__, n1.__.__k.indexOf(n1) + 1) : null;
    for(var u1; l1 < n1.__k.length; l1++)if (null != (u1 = n1.__k[l1]) && null != u1.__e) return u1.__e;
    return "function" == typeof n1.type ? _(n1) : null;
}
function k(n1) {
    var l1, u1;
    if (null != (n1 = n1.__) && null != n1.__c) {
        for(n1.__e = n1.__c.base = null, l1 = 0; l1 < n1.__k.length; l1++)if (null != (u1 = n1.__k[l1]) && null != u1.__e) {
            n1.__e = n1.__c.base = u1.__e;
            break;
        }
        return k(n1);
    }
}
function x(n1) {
    (!n1.__d && (n1.__d = true) && i.push(n1) && !b.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(b);
}
function b() {
    for(var n1; b.__r = i.length;)n1 = i.sort(function(n2, l1) {
        return n2.__v.__b - l1.__v.__b;
    }), i = [], n1.some(function(n2) {
        var l1, u1, t1, i1, o1, r1;
        n2.__d && (o1 = (i1 = (l1 = n2).__v).__e, (r1 = l1.__P) && (u1 = [], (t1 = a({
        }, i1)).__v = i1.__v + 1, I(r1, i1, t1, l1.__n, (void 0) !== r1.ownerSVGElement, null != i1.__h ? [
            o1
        ] : null, u1, null == o1 ? _(i1) : o1, i1.__h), T(u1, i1), i1.__e != o1 && k(i1)));
    });
}
function m(n1, l1, u1, t1, i1, o1, r1, f1, s1, a1) {
    var p1, v1, d1, k1, x1, b1, m1, A = t1 && t1.__k || c, P = A.length;
    for(u1.__k = [], p1 = 0; p1 < l1.length; p1++)if (null != (k1 = u1.__k[p1] = null == (k1 = l1[p1]) || "boolean" == typeof k1 ? null : "string" == typeof k1 || "number" == typeof k1 || "bigint" == typeof k1 ? h(null, k1, null, null, k1) : Array.isArray(k1) ? h(y, {
        children: k1
    }, null, null, null) : k1.__b > 0 ? h(k1.type, k1.props, k1.key, null, k1.__v) : k1)) {
        if (k1.__ = u1, k1.__b = u1.__b + 1, null === (d1 = A[p1]) || d1 && k1.key == d1.key && k1.type === d1.type) A[p1] = void 0;
        else for(v1 = 0; v1 < P; v1++){
            if ((d1 = A[v1]) && k1.key == d1.key && k1.type === d1.type) {
                A[v1] = void 0;
                break;
            }
            d1 = null;
        }
        I(n1, k1, d1 = d1 || e, i1, o1, r1, f1, s1, a1), x1 = k1.__e, (v1 = k1.ref) && d1.ref != v1 && (m1 || (m1 = []), d1.ref && m1.push(d1.ref, null, k1), m1.push(v1, k1.__c || x1, k1)), null != x1 ? (null == b1 && (b1 = x1), "function" == typeof k1.type && null != k1.__k && k1.__k === d1.__k ? k1.__d = s1 = g(k1, s1, n1) : s1 = w(n1, k1, d1, A, x1, s1), a1 || "option" !== u1.type ? "function" == typeof u1.type && (u1.__d = s1) : n1.value = "") : s1 && d1.__e == s1 && s1.parentNode != n1 && (s1 = _(d1));
    }
    for(u1.__e = b1, p1 = P; p1--;)null != A[p1] && ("function" == typeof u1.type && null != A[p1].__e && A[p1].__e == u1.__d && (u1.__d = _(t1, p1 + 1)), L(A[p1], A[p1]));
    if (m1) for(p1 = 0; p1 < m1.length; p1++)z(m1[p1], m1[++p1], m1[++p1]);
}
function g(n1, l1, u1) {
    var t1, i1;
    for(t1 = 0; t1 < n1.__k.length; t1++)(i1 = n1.__k[t1]) && (i1.__ = n1, l1 = "function" == typeof i1.type ? g(i1, l1, u1) : w(u1, i1, i1, n1.__k, i1.__e, l1));
    return l1;
}
function w(n1, l1, u1, t1, i1, o1) {
    var r1, f1, e1;
    if ((void 0) !== l1.__d) r1 = l1.__d, l1.__d = void 0;
    else if (null == u1 || i1 != o1 || null == i1.parentNode) n: if (null == o1 || o1.parentNode !== n1) n1.appendChild(i1), r1 = null;
    else {
        for(f1 = o1, e1 = 0; (f1 = f1.nextSibling) && e1 < t1.length; e1 += 2)if (f1 == i1) break n;
        n1.insertBefore(i1, o1), r1 = o1;
    }
    return (void 0) !== r1 ? r1 : i1.nextSibling;
}
function A(n1, l1, u1, t1, i1) {
    var o1;
    for(o1 in u1)"children" === o1 || "key" === o1 || o1 in l1 || C(n1, o1, null, u1[o1], t1);
    for(o1 in l1)i1 && "function" != typeof l1[o1] || "children" === o1 || "key" === o1 || "value" === o1 || "checked" === o1 || u1[o1] === l1[o1] || C(n1, o1, l1[o1], u1[o1], t1);
}
function P(n1, l1, u1) {
    "-" === l1[0] ? n1.setProperty(l1, u1) : n1[l1] = null == u1 ? "" : "number" != typeof u1 || s.test(l1) ? u1 : u1 + "px";
}
function C(n1, l1, u1, t1, i1) {
    var o1;
    n: if ("style" === l1) {
        if ("string" == typeof u1) n1.style.cssText = u1;
        else {
            if ("string" == typeof t1 && (n1.style.cssText = t1 = ""), t1) for(l1 in t1)u1 && l1 in u1 || P(n1.style, l1, "");
            if (u1) for(l1 in u1)t1 && u1[l1] === t1[l1] || P(n1.style, l1, u1[l1]);
        }
    } else if ("o" === l1[0] && "n" === l1[1]) o1 = l1 !== (l1 = l1.replace(/Capture$/, "")), l1 = l1.toLowerCase() in n1 ? l1.toLowerCase().slice(2) : l1.slice(2), n1.l || (n1.l = {
    }), n1.l[l1 + o1] = u1, u1 ? t1 || n1.addEventListener(l1, o1 ? H : $, o1) : n1.removeEventListener(l1, o1 ? H : $, o1);
    else if ("dangerouslySetInnerHTML" !== l1) {
        if (i1) l1 = l1.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== l1 && "list" !== l1 && "form" !== l1 && "tabIndex" !== l1 && "download" !== l1 && l1 in n1) try {
            n1[l1] = null == u1 ? "" : u1;
            break n;
        } catch (n2) {
        }
        "function" == typeof u1 || (null != u1 && (false !== u1 || "a" === l1[0] && "r" === l1[1]) ? n1.setAttribute(l1, u1) : n1.removeAttribute(l1));
    }
}
function $(n1) {
    this.l[n1.type + false](l.event ? l.event(n1) : n1);
}
function H(n1) {
    this.l[n1.type + true](l.event ? l.event(n1) : n1);
}
function I(n1, u1, t1, i1, o1, r1, f1, e1, c1) {
    var s1, p1, v1, h1, _1, k1, x1, b1, g1, w1, A1, P1 = u1.type;
    if ((void 0) !== u1.constructor) return null;
    null != t1.__h && (c1 = t1.__h, e1 = u1.__e = t1.__e, u1.__h = null, r1 = [
        e1
    ]), (s1 = l.__b) && s1(u1);
    try {
        n: if ("function" == typeof P1) {
            if (b1 = u1.props, g1 = (s1 = P1.contextType) && i1[s1.__c], w1 = s1 ? g1 ? g1.props.value : s1.__ : i1, t1.__c ? x1 = (p1 = u1.__c = t1.__c).__ = p1.__E : ("prototype" in P1 && P1.prototype.render ? u1.__c = p1 = new P1(b1, w1) : (u1.__c = p1 = new d(b1, w1), p1.constructor = P1, p1.render = M), g1 && g1.sub(p1), p1.props = b1, p1.state || (p1.state = {
            }), p1.context = w1, p1.__n = i1, v1 = p1.__d = true, p1.__h = []), null == p1.__s && (p1.__s = p1.state), null != P1.getDerivedStateFromProps && (p1.__s == p1.state && (p1.__s = a({
            }, p1.__s)), a(p1.__s, P1.getDerivedStateFromProps(b1, p1.__s))), h1 = p1.props, _1 = p1.state, v1) null == P1.getDerivedStateFromProps && null != p1.componentWillMount && p1.componentWillMount(), null != p1.componentDidMount && p1.__h.push(p1.componentDidMount);
            else {
                if (null == P1.getDerivedStateFromProps && b1 !== h1 && null != p1.componentWillReceiveProps && p1.componentWillReceiveProps(b1, w1), !p1.__e && null != p1.shouldComponentUpdate && false === p1.shouldComponentUpdate(b1, p1.__s, w1) || u1.__v === t1.__v) {
                    p1.props = b1, p1.state = p1.__s, u1.__v !== t1.__v && (p1.__d = false), p1.__v = u1, u1.__e = t1.__e, u1.__k = t1.__k, u1.__k.forEach(function(n2) {
                        n2 && (n2.__ = u1);
                    }), p1.__h.length && f1.push(p1);
                    break n;
                }
                null != p1.componentWillUpdate && p1.componentWillUpdate(b1, p1.__s, w1), null != p1.componentDidUpdate && p1.__h.push(function() {
                    p1.componentDidUpdate(h1, _1, k1);
                });
            }
            p1.context = w1, p1.props = b1, p1.state = p1.__s, (s1 = l.__r) && s1(u1), p1.__d = false, p1.__v = u1, p1.__P = n1, s1 = p1.render(p1.props, p1.state, p1.context), p1.state = p1.__s, null != p1.getChildContext && (i1 = a(a({
            }, i1), p1.getChildContext())), v1 || null == p1.getSnapshotBeforeUpdate || (k1 = p1.getSnapshotBeforeUpdate(h1, _1)), A1 = null != s1 && s1.type === y && null == s1.key ? s1.props.children : s1, m(n1, Array.isArray(A1) ? A1 : [
                A1
            ], u1, t1, i1, o1, r1, f1, e1, c1), p1.base = u1.__e, u1.__h = null, p1.__h.length && f1.push(p1), x1 && (p1.__E = p1.__ = null), p1.__e = false;
        } else null == r1 && u1.__v === t1.__v ? (u1.__k = t1.__k, u1.__e = t1.__e) : u1.__e = j(t1.__e, u1, t1, i1, o1, r1, f1, c1);
        (s1 = l.diffed) && s1(u1);
    } catch (n2) {
        u1.__v = null, (c1 || null != r1) && (u1.__e = e1, u1.__h = !!c1, r1[r1.indexOf(e1)] = null), l.__e(n2, u1, t1);
    }
}
function T(n1, u1) {
    l.__c && l.__c(u1, n1), n1.some(function(u2) {
        try {
            n1 = u2.__h, u2.__h = [], n1.some(function(n2) {
                n2.call(u2);
            });
        } catch (n2) {
            l.__e(n2, u2.__v);
        }
    });
}
function j(l1, u1, t1, i1, o1, r1, f1, c1) {
    var s1, a1, v1, h1 = t1.props, y1 = u1.props, d1 = u1.type, k1 = 0;
    if ("svg" === d1 && (o1 = true), null != r1) for(; k1 < r1.length; k1++)if ((s1 = r1[k1]) && (s1 === l1 || (d1 ? s1.localName == d1 : 3 == s1.nodeType))) {
        l1 = s1, r1[k1] = null;
        break;
    }
    if (null == l1) {
        if (null === d1) return document.createTextNode(y1);
        l1 = o1 ? document.createElementNS("http://www.w3.org/2000/svg", d1) : document.createElement(d1, y1.is && y1), r1 = null, c1 = false;
    }
    if (null === d1) h1 === y1 || c1 && l1.data === y1 || (l1.data = y1);
    else {
        if (r1 = r1 && n.call(l1.childNodes), a1 = (h1 = t1.props || e).dangerouslySetInnerHTML, v1 = y1.dangerouslySetInnerHTML, !c1) {
            if (null != r1) for(h1 = {
            }, k1 = 0; k1 < l1.attributes.length; k1++)h1[l1.attributes[k1].name] = l1.attributes[k1].value;
            (v1 || a1) && (v1 && (a1 && v1.__html == a1.__html || v1.__html === l1.innerHTML) || (l1.innerHTML = v1 && v1.__html || ""));
        }
        if (A(l1, y1, h1, o1, c1), v1) u1.__k = [];
        else if (k1 = u1.props.children, m(l1, Array.isArray(k1) ? k1 : [
            k1
        ], u1, t1, i1, o1 && "foreignObject" !== d1, r1, f1, r1 ? r1[0] : t1.__k && _(t1, 0), c1), null != r1) for(k1 = r1.length; k1--;)null != r1[k1] && p(r1[k1]);
        c1 || ("value" in y1 && (void 0) !== (k1 = y1.value) && (k1 !== l1.value || "progress" === d1 && !k1) && C(l1, "value", k1, h1.value, false), "checked" in y1 && (void 0) !== (k1 = y1.checked) && k1 !== l1.checked && C(l1, "checked", k1, h1.checked, false));
    }
    return l1;
}
function z(n1, u1, t1) {
    try {
        "function" == typeof n1 ? n1(u1) : n1.current = u1;
    } catch (n2) {
        l.__e(n2, t1);
    }
}
function L(n1, u1, t1) {
    var i1, o1;
    if (l.unmount && l.unmount(n1), (i1 = n1.ref) && (i1.current && i1.current !== n1.__e || z(i1, null, u1)), null != (i1 = n1.__c)) {
        if (i1.componentWillUnmount) try {
            i1.componentWillUnmount();
        } catch (n2) {
            l.__e(n2, u1);
        }
        i1.base = i1.__P = null;
    }
    if (i1 = n1.__k) for(o1 = 0; o1 < i1.length; o1++)i1[o1] && L(i1[o1], u1, "function" != typeof n1.type);
    t1 || null == n1.__e || p(n1.__e), n1.__e = n1.__d = void 0;
}
function M(n1, l1, u1) {
    return this.constructor(n1, u1);
}
function N(u1, t1, i1) {
    var o1, r1, f1;
    l.__ && l.__(u1, t1), r1 = (o1 = "function" == typeof i1) ? null : i1 && i1.__k || t1.__k, f1 = [], I(t1, u1 = (!o1 && i1 || t1).__k = v(y, null, [
        u1
    ]), r1 || e, e, (void 0) !== t1.ownerSVGElement, !o1 && i1 ? [
        i1
    ] : r1 ? null : t1.firstChild ? n.call(t1.childNodes) : null, f1, !o1 && i1 ? i1 : r1 ? r1.__e : t1.firstChild, o1), T(f1, u1);
}
n = c.slice, l = {
    __e: function(n1, l1) {
        for(var u1, t1, i1; l1 = l1.__;)if ((u1 = l1.__c) && !u1.__) try {
            if ((t1 = u1.constructor) && null != t1.getDerivedStateFromError && (u1.setState(t1.getDerivedStateFromError(n1)), i1 = u1.__d), null != u1.componentDidCatch && (u1.componentDidCatch(n1), i1 = u1.__d), i1) return u1.__E = u1;
        } catch (l2) {
            n1 = l2;
        }
        throw n1;
    }
}, u = 0, t = function(n1) {
    return null != n1 && (void 0) === n1.constructor;
}, d.prototype.setState = function(n1, l1) {
    var u1;
    u1 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a({
    }, this.state), "function" == typeof n1 && (n1 = n1(a({
    }, u1), this.props)), n1 && a(u1, n1), null != n1 && this.__v && (l1 && this.__h.push(l1), x(this));
}, d.prototype.forceUpdate = function(n1) {
    this.__v && (this.__e = true, n1 && this.__h.push(n1), x(this));
}, d.prototype.render = y, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, b.__r = 0, f = 0, exports.render = N, exports.hydrate = function n1(l1, u1) {
    N(l1, u1, n1);
}, exports.createElement = v, exports.h = v, exports.Fragment = y, exports.createRef = function() {
    return {
        current: null
    };
}, exports.isValidElement = t, exports.Component = d, exports.cloneElement = function(l1, u1, t1) {
    var i1, o1, r1, f1 = a({
    }, l1.props);
    for(r1 in u1)"key" == r1 ? i1 = u1[r1] : "ref" == r1 ? o1 = u1[r1] : f1[r1] = u1[r1];
    return arguments.length > 2 && (f1.children = arguments.length > 3 ? n.call(arguments, 2) : t1), h(l1.type, f1, i1 || l1.key, o1 || l1.ref, null);
}, exports.createContext = function(n2, l1) {
    var u1 = {
        __c: l1 = "__cC" + f++,
        __: n2,
        Consumer: function(n3, l2) {
            return n3.children(l2);
        },
        Provider: function(n3) {
            var u2, t1;
            return this.getChildContext || (u2 = [], (t1 = {
            })[l1] = this, this.getChildContext = function() {
                return t1;
            }, this.shouldComponentUpdate = function(n4) {
                this.props.value !== n4.value && u2.some(x);
            }, this.sub = function(n4) {
                u2.push(n4);
                var l2 = n4.componentWillUnmount;
                n4.componentWillUnmount = function() {
                    u2.splice(u2.indexOf(n4), 1), l2 && l2.call(n4);
                };
            }), n3.children;
        }
    };
    return u1.Provider.__ = u1.Consumer.contextType = u1;
}, exports.toChildArray = function n2(l1, u1) {
    return u1 = u1 || [], null == l1 || "boolean" == typeof l1 || (Array.isArray(l1) ? l1.some(function(l2) {
        n2(l2, u1);
    }) : u1.push(l1)), u1;
}, exports.options = l;

},{}]},["3oVe5","5rkFb"], "5rkFb", "parcelRequire6ec5")

//# sourceMappingURL=index.2b441696.js.map
