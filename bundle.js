!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){"use strict";t.exports=function(){}},function(t,e,n){"use strict";e.__esModule=!0;e.addLeadingSlash=function(t){return"/"===t.charAt(0)?t:"/"+t},e.stripLeadingSlash=function(t){return"/"===t.charAt(0)?t.substr(1):t};var r=e.hasBasename=function(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)};e.stripBasename=function(t,e){return r(t,e)?t.substr(e.length):t},e.stripTrailingSlash=function(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t},e.parsePath=function(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}},e.createPath=function(t){var e=t.pathname,n=t.search,r=t.hash,o=e||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}},function(t,e,n){"use strict";e.__esModule=!0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=d(n(0)),a=d(n(3)),u=n(4),s=n(1),c=d(n(7)),f=n(8);function d(t){return t&&t.__esModule?t:{default:t}}var l=function(){try{return window.history.state||{}}catch(t){return{}}};e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a.default)(f.canUseDOM,"Browser history needs a DOM");var e=window.history,n=(0,f.supportsHistory)(),d=!(0,f.supportsPopStateOnHashChange)(),h=t.forceRefresh,p=void 0!==h&&h,v=t.getUserConfirmation,g=void 0===v?f.getConfirmation:v,m=t.keyLength,y=void 0===m?6:m,w=t.basename?(0,s.stripTrailingSlash)((0,s.addLeadingSlash)(t.basename)):"",b=function(t){var e=t||{},n=e.key,r=e.state,o=window.location,a=o.pathname+o.search+o.hash;return(0,i.default)(!w||(0,s.hasBasename)(a,w),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+a+'" to begin with "'+w+'".'),w&&(a=(0,s.stripBasename)(a,w)),(0,u.createLocation)(a,r,n)},_=function(){return Math.random().toString(36).substr(2,y)},M=(0,c.default)(),E=function(t){o(H,t),H.length=e.length,M.notifyListeners(H.location,H.action)},P=function(t){(0,f.isExtraneousPopstateEvent)(t)||A(b(t.state))},L=function(){A(b(l()))},O=!1,A=function(t){O?(O=!1,E()):M.confirmTransitionTo(t,"POP",g,function(e){e?E({action:"POP",location:t}):S(t)})},S=function(t){var e=H.location,n=k.indexOf(e.key);-1===n&&(n=0);var r=k.indexOf(t.key);-1===r&&(r=0);var o=n-r;o&&(O=!0,j(o))},x=b(l()),k=[x.key],C=function(t){return w+(0,s.createPath)(t)},j=function(t){e.go(t)},T=0,R=function(t){1===(T+=t)?((0,f.addEventListener)(window,"popstate",P),d&&(0,f.addEventListener)(window,"hashchange",L)):0===T&&((0,f.removeEventListener)(window,"popstate",P),d&&(0,f.removeEventListener)(window,"hashchange",L))},U=!1,H={length:e.length,action:"POP",location:x,createHref:C,push:function(t,o){(0,i.default)(!("object"===(void 0===t?"undefined":r(t))&&void 0!==t.state&&void 0!==o),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var a=(0,u.createLocation)(t,o,_(),H.location);M.confirmTransitionTo(a,"PUSH",g,function(t){if(t){var r=C(a),o=a.key,u=a.state;if(n)if(e.pushState({key:o,state:u},null,r),p)window.location.href=r;else{var s=k.indexOf(H.location.key),c=k.slice(0,-1===s?0:s+1);c.push(a.key),k=c,E({action:"PUSH",location:a})}else(0,i.default)(void 0===u,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=r}})},replace:function(t,o){(0,i.default)(!("object"===(void 0===t?"undefined":r(t))&&void 0!==t.state&&void 0!==o),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var a=(0,u.createLocation)(t,o,_(),H.location);M.confirmTransitionTo(a,"REPLACE",g,function(t){if(t){var r=C(a),o=a.key,u=a.state;if(n)if(e.replaceState({key:o,state:u},null,r),p)window.location.replace(r);else{var s=k.indexOf(H.location.key);-1!==s&&(k[s]=a.key),E({action:"REPLACE",location:a})}else(0,i.default)(void 0===u,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(r)}})},go:j,goBack:function(){return j(-1)},goForward:function(){return j(1)},block:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=M.setPrompt(t);return U||(R(1),U=!0),function(){return U&&(U=!1,R(-1)),e()}},listen:function(t){var e=M.appendListener(t);return R(1),function(){R(-1),e()}}};return H}},function(t,e,n){"use strict";t.exports=function(t,e,n,r,o,i,a,u){if(!t){var s;if(void 0===e)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,u],f=0;(s=new Error(e.replace(/%s/g,function(){return c[f++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(t,e,n){"use strict";e.__esModule=!0,e.locationsAreEqual=e.createLocation=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=u(n(5)),i=u(n(6)),a=n(1);function u(t){return t&&t.__esModule?t:{default:t}}e.createLocation=function(t,e,n,i){var u=void 0;"string"==typeof t?(u=(0,a.parsePath)(t)).state=e:(void 0===(u=r({},t)).pathname&&(u.pathname=""),u.search?"?"!==u.search.charAt(0)&&(u.search="?"+u.search):u.search="",u.hash?"#"!==u.hash.charAt(0)&&(u.hash="#"+u.hash):u.hash="",void 0!==e&&void 0===u.state&&(u.state=e));try{u.pathname=decodeURI(u.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+u.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(u.key=n),i?u.pathname?"/"!==u.pathname.charAt(0)&&(u.pathname=(0,o.default)(u.pathname,i.pathname)):u.pathname=i.pathname:u.pathname||(u.pathname="/"),u},e.locationsAreEqual=function(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&(0,i.default)(t.state,e.state)}},function(t,e,n){"use strict";function r(t){return"/"===t.charAt(0)}function o(t,e){for(var n=e,r=n+1,o=t.length;r<o;n+=1,r+=1)t[n]=t[r];t.pop()}n.r(e),e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t&&t.split("/")||[],i=e&&e.split("/")||[],a=t&&r(t),u=e&&r(e),s=a||u;if(t&&r(t)?i=n:n.length&&(i.pop(),i=i.concat(n)),!i.length)return"/";var c=void 0;if(i.length){var f=i[i.length-1];c="."===f||".."===f||""===f}else c=!1;for(var d=0,l=i.length;l>=0;l--){var h=i[l];"."===h?o(i,l):".."===h?(o(i,l),d++):d&&(o(i,l),d--)}if(!s)for(;d--;d)i.unshift("..");!s||""===i[0]||i[0]&&r(i[0])||i.unshift("");var p=i.join("/");return c&&"/"!==p.substr(-1)&&(p+="/"),p}},function(t,e,n){"use strict";n.r(e);var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=function t(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(Array.isArray(e))return Array.isArray(n)&&e.length===n.length&&e.every(function(e,r){return t(e,n[r])});var o=void 0===e?"undefined":r(e);if(o!==(void 0===n?"undefined":r(n)))return!1;if("object"===o){var i=e.valueOf(),a=n.valueOf();if(i!==e||a!==n)return t(i,a);var u=Object.keys(e),s=Object.keys(n);return u.length===s.length&&u.every(function(r){return t(e[r],n[r])})}return!1}},function(t,e,n){"use strict";e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(0));e.default=function(){var t=null,e=[];return{setPrompt:function(e){return(0,r.default)(null==t,"A history supports only one prompt at a time"),t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,o,i){if(null!=t){var a="function"==typeof t?t(e,n):t;"string"==typeof a?"function"==typeof o?o(a,i):((0,r.default)(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),i(!0)):i(!1!==a)}else i(!0)},appendListener:function(t){var n=!0,r=function(){n&&t.apply(void 0,arguments)};return e.push(r),function(){n=!1,e=e.filter(function(t){return t!==r})}},notifyListeners:function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];e.forEach(function(t){return t.apply(void 0,n)})}}}},function(t,e,n){"use strict";e.__esModule=!0;e.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),e.addEventListener=function(t,e,n){return t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)},e.removeEventListener=function(t,e,n){return t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n)},e.getConfirmation=function(t,e){return e(window.confirm(t))},e.supportsHistory=function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)},e.supportsPopStateOnHashChange=function(){return-1===window.navigator.userAgent.indexOf("Trident")},e.supportsGoWithoutReloadUsingHash=function(){return-1===window.navigator.userAgent.indexOf("Firefox")},e.isExtraneousPopstateEvent=function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")}},function(t,e,n){"use strict";n.r(e);var r=n(2),o=["Axidraw_Magic_3_MP3LAUFjHeJh_Fixed.svg","Axidraw_Magic_4_MP3KRf3YPuwf_Fixed.svg","Magic_10_MP3LwCPypBKr.svg","Magic_11_MP3LwCMLFDXR.svg","Magic_12_MP3LwwwRXrcR.svg","Magic_13_MP3LupQt5EWn.svg","Magic_14_MP3LAS823qm6.svg","Magic_15_Eight.svg","Magic_5_MP3LwqdoNhdV.svg","Magic_6_MP3LwCKYXFRK.svg","Magic_7_MP3LySXEGG46.svg","Magic_8_MP3LwCMLFEAv.svg","Magic_9_3zvMXvCprNiCf.svg"],i=n.n(r)()(),a="./content/",u=!0;function s(t,e){var n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n)}function c(){var t=i.location.search;if(t){"?"===t.substring(0,1)&&(t=t.substring(1));var e=t.length;if(e)return e<4||".svg"!==t.substring(e-4)?t+".svg":t}return null}function f(){var t=c();t?function(t){document.title=t;var e=a+t,n=document.createElement("div");n.setAttribute("id","container"),n.setAttribute("class","detail");var r=document.createElement("img");r.src=e,r.setAttribute("width","100%"),r.setAttribute("height","100%"),n.appendChild(r),document.body.appendChild(n),n.addEventListener("mousedown",function(){s(e,t)},!0),u&&s(e,t)}(t):function(){u=!1;var t=document.createElement("div");t.setAttribute("id","container"),t.setAttribute("class","grid"),o.forEach(function(e){var n=document.createElement("div");n.addEventListener("mousedown",function(){i.push({search:e})},!0);var r=document.createElement("img");n.appendChild(r);var o=a+e;r.src=o,r.setAttribute("width","100%"),r.setAttribute("height","100%"),t.appendChild(n)}),document.body.appendChild(t)}()}if(c()&&i.length<2){var d=i.location.search;i.replace({search:""}),i.push(d)}i.listen(function(t,e){!function(){var t=document.getElementById("container");document.body.removeChild(t)}(),f()}),f()}]);