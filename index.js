!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.cssVarShim=e()}(this,function(){"use strict";function t(t,e){return(e=e||document).querySelectorAll(t)}function e(t){return c(t).reduce(function(t,n){return t.concat(n.cssRules?e(n.cssRules):n)},[])}function n(t,e,n){n=n||[];for(var r;null!==(r=e.exec(t));)n.push(r),e.lastIndex=r.index+r[0].length;return n}function r(t){return function(e){t.apply(this,e)}}function o(t,e){return e.reduce(function(t,e){return t?t[e]:void 0},t)}function u(t){return t=t||{},function(e){return t[e]=isNaN(t[e])?0:t[e]+1,t[e]}}function c(t){return[].slice.call(t)}function i(t){"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t)}function a(){var t={};return function(e,n){return e?n?(t[e]=n,n):t[e]:t}}function f(t){return function(){return c(arguments).reduce(function(e,n){return n?"object"==typeof n?e+l(n,t):e+n:e},"")}}function l(t,e){if(t[e])return t[e];var n=++s;return t[e]=n,n}var s=0;return function(l){function s(t,e){var r=n(t,/--[^\s,)]+/g);return r.length&&r.forEach(function(n){var r=n[0],o=p(r,e);if(o){var u=new RegExp("var\\("+r+"(,[^)]+)?\\)");t=t.replace(u,o),t=s(t,e)}}),t}function p(t,e){for(var n=S(y(t,e));!n&&e&&e.parentElement;)e=e.parentElement,n=S(y(t,e));return n}function d(e,n,r,o){var u=[document.documentElement];o&&":root"===o||(u=t(o)),c(u).forEach(function(t){var o=t!==document.documentElement?t:null;t.style.setProperty(e,n,r||null,o)})}if(!(window.CSS&&CSS.supports&&CSS.supports("--a",0))){var y=f("wl__uuid"),S=a(),v=CSSStyleDeclaration.prototype.getPropertyValue;CSSStyleDeclaration.prototype.getPropertyValue=function(t,e){return/^--/.test(t)?p(t,e):v.call(this,t)};var h=CSSStyleDeclaration.prototype.setProperty;CSSStyleDeclaration.prototype.setProperty=function(n,i,a,f){if(/^--/.test(n)){S(y(n,f),i);var p=u();e(document.styleSheets).forEach(function(e){var u=e.selectorText,i=o(l.getVars,[n,u,p(u)]);i&&i.forEach(r(function(n,r,o){var i=s(r,f);f?c(t(u)).forEach(function(t){f.contains(t)&&t.style.setProperty(n,i,o||null)}):e.style.setProperty(n,i,o||null)}))})}else h.call(this,n,i,a)},l.setVars.forEach(r(d)),i(function(){c(t('[data-style*="--"]')).forEach(function(t){var e=n(t.getAttribute("data-style"),/(--[^:]+)\s*:\s*([^;]+)/g);e.length&&e.forEach(r(function(e,n,r){t.style.setProperty(n,r,null,t)}))})})}}});
