webpackJsonp([0x8923b509b85c],{103:function(e,t,n){function r(e){return null===e||void 0===e}function a(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function o(e,t,n){var o,c;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(l(e))return!!l(t)&&(e=i.call(e),t=i.call(t),u(e,t,n));if(a(e)){if(!a(t))return!1;if(e.length!==t.length)return!1;for(o=0;o<e.length;o++)if(e[o]!==t[o])return!1;return!0}try{var d=s(e),f=s(t)}catch(e){return!1}if(d.length!=f.length)return!1;for(d.sort(),f.sort(),o=d.length-1;o>=0;o--)if(d[o]!=f[o])return!1;for(o=d.length-1;o>=0;o--)if(c=d[o],!u(e[c],t[c],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,s=n(105),l=n(104),u=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:o(e,t,n))}},104:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var a="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=a?n:r,t.supported=n,t.unsupported=r},105:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},107:function(e,t,n){var r;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};r=function(){return o}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},129:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),d=r(c),f=n(20),p=r(f),h=n(134),m=r(h),y=n(103),T=r(y),E=n(130),g=n(52),b=function(e){var t,n;return n=t=function(t){function n(){return o(this,n),i(this,t.apply(this,arguments))}return s(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,T.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.TAG_NAMES.SCRIPT:case g.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case g.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return l({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[l({},a,this.mapNestedChildrenToProps(n,o))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case g.TAG_NAMES.TITLE:return l({},a,(t={},t[r.type]=i,t.titleAttributes=l({},o),t));case g.TAG_NAMES.BODY:return l({},a,{bodyAttributes:l({},o)});case g.TAG_NAMES.HTML:return l({},a,{htmlAttributes:l({},o)})}return l({},a,(n={},n[r.type]=l({},o),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=l({},t);return Object.keys(e).forEach(function(t){var r;n=l({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.default.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,i=o.children,s=a(o,["children"]),l=(0,E.convertReactPropstoHtmlAttributes)(s);switch(n.warnOnInvalidChildren(e,i),e.type){case g.TAG_NAMES.LINK:case g.TAG_NAMES.META:case g.TAG_NAMES.NOSCRIPT:case g.TAG_NAMES.SCRIPT:case g.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=a(t,["children"]),o=l({},r);return n&&(o=this.mapChildrenToProps(n,o)),d.default.createElement(e,o)},u(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(d.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,E.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},w=function(){return null},A=(0,m.default)(E.reducePropsToState,E.handleClientStateChange,E.mapStateOnServer)(w),v=b(A);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},52:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},130:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(2),s=r(i),l=n(5),u=r(l),c=n(52),d=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=T(e,c.TAG_NAMES.TITLE),n=T(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=T(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return T(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},h=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return o({},e,t)},{})},m=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[c.TAG_NAMES.BASE]}).map(function(e){return e[c.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a],i=o.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},y=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+a(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var a={};n.filter(function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var s=o[i],l=s.toLowerCase();t.indexOf(l)===-1||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),t.indexOf(s)===-1||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var o=Object.keys(a),i=0;i<o.length;i++){var s=o[i],l=(0,u.default)({},r[s],a[s]);r[s]=l}return e},[]).reverse()},T=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},E=function(e){return{baseTag:m([c.TAG_PROPERTIES.HREF],e),bodyAttributes:h(c.ATTRIBUTE_NAMES.BODY,e),defer:T(e,c.HELMET_PROPS.DEFER),encode:T(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:h(c.ATTRIBUTE_NAMES.HTML,e),linkTags:y(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:y(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:y(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:y(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:y(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:h(c.ATTRIBUTE_NAMES.TITLE,e)}},g=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){g(t)},0)}}(),b=function(e){return clearTimeout(e)},w="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||g:e.requestAnimationFrame||g,A="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,_=function(e){S&&A(S),e.defer?S=w(function(){O(e,function(){S=null})}):(O(e),S=null)},O=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;k(c.TAG_NAMES.BODY,r),k(c.TAG_NAMES.HTML,a),P(f,p);var h={baseTag:M(c.TAG_NAMES.BASE,n),linkTags:M(c.TAG_NAMES.LINK,o),metaTags:M(c.TAG_NAMES.META,i),noscriptTags:M(c.TAG_NAMES.NOSCRIPT,s),scriptTags:M(c.TAG_NAMES.SCRIPT,u),styleTags:M(c.TAG_NAMES.STYLE,d)},m={},y={};Object.keys(h).forEach(function(e){var t=h[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(y[e]=h[e].oldTags)}),t&&t(),l(e,m,y)},R=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=R(e)),k(c.TAG_NAMES.TITLE,t)},k=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),s=0;s<i.length;s++){var l=i[s],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),a.indexOf(l)===-1&&a.push(l);var d=o.indexOf(l);d!==-1&&o.splice(d,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},M=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some(function(e,t){return i=t,n.isEqualNode(e)})?a.splice(i,1):o.push(n)}),a.forEach(function(e){return e.parentNode.removeChild(e)}),o.forEach(function(e){return n.appendChild(e)}),{oldTags:a,newTags:o}},I=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},C=function(e,t,n,r){var a=I(n),o=R(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+d(o,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+d(o,r)+"</"+e+">"},N=function(e,t,n){return t.reduce(function(t,r){var a=Object.keys(r).filter(function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var a="undefined"==typeof r[t]?t:t+'="'+d(r[t],n)+'"';return e?e+" "+a:a},""),o=r.innerHTML||r.cssText||"",i=c.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")},"")},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t},t)},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t},t)},G=function(e,t,n){var r,a=(r={key:t},r[c.HELMET_ATTRIBUTE]=!0,r),o=L(n,a);return[s.default.createElement(c.TAG_NAMES.TITLE,o,t)]},x=function(e,t){return t.map(function(t,n){var r,a=(r={key:n},r[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]}),s.default.createElement(e,a)})},H=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return G(e,t.title,t.titleAttributes,n)},toString:function(){return C(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return L(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return x(e,t)},toString:function(){return N(e,t,n)}}}},B=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:H(c.TAG_NAMES.BASE,t,r),bodyAttributes:H(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:H(c.ATTRIBUTE_NAMES.HTML,a,r),link:H(c.TAG_NAMES.LINK,o,r),meta:H(c.TAG_NAMES.META,i,r),noscript:H(c.TAG_NAMES.NOSCRIPT,s,r),script:H(c.TAG_NAMES.SCRIPT,l,r),style:H(c.TAG_NAMES.STYLE,u,r),title:H(c.TAG_NAMES.TITLE,{title:f,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=j,t.handleClientStateChange=_,t.mapStateOnServer=B,t.reducePropsToState=E,t.requestAnimationFrame=w,t.warn=v}).call(t,function(){return this}())},134:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(s){function f(){h=e(p.map(function(e){return e.props})),m.canUseDOM?t(h):n&&(h=n(h))}if("function"!=typeof s)throw new Error("Expected WrappedComponent to be a React component.");var p=[],h=void 0,m=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return h},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=h;return h=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!d(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),f()},t.prototype.render=function(){return u.createElement(s,this.props)},t}(l.Component);return m.displayName="SideEffect("+r(s)+")",m.canUseDOM=c.canUseDOM,m}}var l=n(2),u=r(l),c=r(n(107)),d=r(n(135));e.exports=s},135:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var u=o[l];if(!s(u))return!1;var c=e[u],d=t[u];if(a=n?n.call(r,c,d,u):void 0,a===!1||void 0===a&&c!==d)return!1}return!0}},213:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),o=r(a),i=n(129),s=r(i);t.default=function(){return o.default.createElement("div",null,o.default.createElement(s.default,null,o.default.createElement("meta",{property:"og:url",content:"http://ollieglass.com/articles/managing-data-science-projects"}),o.default.createElement("meta",{property:"og:title",content:"Managing data science projects"}),o.default.createElement("meta",{property:"og:description",content:"Data science projects normally have four stages: discovery, research, production and ongoing operation."}),o.default.createElement("meta",{name:"twitter:card",content:"summary"}),o.default.createElement("meta",{name:"twitter:creator",content:"@ollieglass"})),o.default.createElement("h2",null,"Managing data science projects"),o.default.createElement("p",null,"It can be hard to know how to run data science projects and what to expect, especially if you don’t have a lead or executive data scientist in your team. I’m often the first data scientist my clients have worked with, so as well as discussing how data science fits with their business in general I find it helpful to share a framework for how to manage a data project. There are normally four stages: discovery, research, production and ongoing operation. I’ll give examples of the outcomes and timelines of each stage on a small four-month project."),o.default.createElement("p",null,"Perhaps the first point to consider is that complete data science projects can take months. As well as preparing the foundations, gathering data and building understanding, the work itself is technically complex and demands careful attention. A large company like eBay or Stitch Fix might dedicate a team of twenty data scientists to a single area for many years, but for smaller project you could go from idea to implementation in three to six months."),o.default.createElement("h3",null,"Discovery"),o.default.createElement("p",null,"Projects start by proposing ideas and sanity checking them. Some news stories you may have read about what can be done with data science are accurate, but many are hyperbolic and don’t help you think clearly about what’s possible. Involving a data scientist from the start will let you test the feasibility of ideas and give a sense of the costs, time and chance of success. They can also suggest different ideas or approaches to a business challenge you might not have considered."),o.default.createElement("p",null,"Data science is inherently risky. Even if a similar company with similar data has shipped a similar feature, that’s no guarantee it’ll work for you, or work as well for you as it did for them. That said, some features are a natural fit for data science and are probably going to work. If a user needs to schedule an email send and you have records of send times and open rates, it’s hard to imagine how even basic data-driven decision support can’t improve on whatever untested rule of thumb they’re currently using. It’s a smart, low risk feature to build."),o.default.createElement("p",null,"You’ll also want to decide what the final output from the data science project should be, perhaps a new customer facing product feature or an internal research and advisory report. Bridging product design and data science, it can help to consider how different versions of a feature could be deployed depending on the level of accuracy that can be achieved in the research stage. There may be a minimum accuracy required to make a feature viable at all. Many features can be designed in a way that improves their accuracy over time, so you may like to consider what this will make possible for the product and business in the future."),o.default.createElement("p",null,o.default.createElement("strong",null,"Outcomes:")," A shortlist of possible features, and a single feature to focus on. A sense of what the finished feature would look like if it was working well."),o.default.createElement("p",null,o.default.createElement("strong",null,"Risks:")," Discovering it’s not possible to build your feature, or that it would be prohibitively expensive."),o.default.createElement("p",null,o.default.createElement("strong",null,"Time:")," From a few days to a few weeks, usually a week."),o.default.createElement("h3",null,"Research"),o.default.createElement("p",null,"When a feature and goal has been defined, research is needed to work out exactly how to create it. This involves considering what the feature does, for example, predicting sale prices from photos of shoes, and finding ways to express that as a scientific or machine learning problem. Scientific problems can be tackled in different ways, so you might start with a shortlist of methods and considering the tradeoffs between them."),o.default.createElement("p",null,"Naturally, these methods all require data. How much data you need depends on the methods being used, with requirements ranging from tens or low hundreds to hundreds of millions of records. Often simply having more data available will improve results, so if you don’t already have much data collected it can be worth finding new ways to capture it. Approaches include adding “data exhausts” to existing processes in your product, buying third party data sets, adding different but related proxy data to your own, or creating new synthetic data."),o.default.createElement("p",null,"Sometimes it can help to add more detail to data, especially if it wasn’t captured with data science or machine learning in mind. Running a data enrichment process with your team is good for building small data sets or for enrichment that requires expert knowledge. Third party services like Amazon’s Mechanical Turk or Clickworker can be used for larger volumes."),o.default.createElement("p",null,"When the data is ready and the approach is clear it’s best to start by trying a simple technique and measuring the results. To prevent the research from becoming siloed or opaque, the work needs to be communicated, but explaining it is not always straightforward. Instead of a single measure of accuracy, there’s usually several factors which have to be traded off against each other. The technique may be complex and hard to describe, especially if the business needs to understand all of its workings and details."),o.default.createElement("p",null,"Like any project, it’s best to communicate it in the right ways to different audiences in your company. General team and company-wide presentations and discussions can build buy in and engagement in the project, and don’t usually need to go into all of the factors that underpin an accuracy measure. Bringing key stakeholders and experts into the details is usually invaluable for surfacing business insights and requirements that can shape the direction of the research and keep it on track."),o.default.createElement("p",null,"The scientific method involves rounds of trial and error, revision and improvement. Progress can be uneven, alternating between plateaus of testing new approaches with no apparent change followed by rapid improvements when a new method bears fruit. Over time there should be a gradual increase in accuracy and performance as the approach is being refined, but it’s important to know that there’s no guarantee that research will be able to deliver the results required in a reasonable timeframe or cost. These risks should have been considered in the discovery stage, you might like to set a total research budget and stop if this is reached or if interim results are good enough. Usually it’s best to take on projects where you’re at least reasonably confident the research is likely to bear fruit, or the risks and costs are clearly understood and you want to invest in experiments."),o.default.createElement("p",null,o.default.createElement("strong",null,"Outcomes:")," A data science methodology that produces the outputs you need at the accuracy level you need. You and your team understand the general approach and any important trade-offs being made."),o.default.createElement("p",null,o.default.createElement("strong",null,"Risks:")," Not achieving a minimum accuracy goal within the research time or budget. Discovering an approach that can’t be scaled to a production system."),o.default.createElement("p",null,o.default.createElement("strong",null,"Time:")," From a few weeks to a few months, usually a month."),o.default.createElement("h3",null,"Production"),o.default.createElement("p",null,"The data preparation and data science techniques are now ready to be moved into production. This is the most straightforward part of the process. Software engineering is not trivial or without its own risks, but the work of building and shipping features is not unique to data science, and the risks and requirements are well known. Sometimes you’re working with especially large amounts of data, low latency requirements, or needing to be able to cope with particularly complex data transformations. But most of the challenges you meet here have well known solutions."),o.default.createElement("p",null,"That said, there’s no single common approach for moving data science from research into production, nor is there a widely adopted production framework. Ruby on Rails transformed web development and became something close to an industry standard, React and Redux are doing something similar for front-end development. But data science only has some proprietary third-party services and nothing open source or widely adopted... yet."),o.default.createElement("p",null,"Most projects have similar processes: some kind of extract, transform and load (ETL) data pipeline that moves data from your product to a data science service and prepares it for use, model building and validation, deployment of models to a live system and ongoing monitoring. These can become complex but they’re not hard to build or tailor to different products or deployment environments. There are excellent libraries like Keras, Tensorflow, Pandas, scikit-learn and NumPy for the most common and critical tasks, used and sponsored by companies like Bloomberg, Spotify and Booking.com."),o.default.createElement("p",null,"You rarely need dedicated “big data” tools like Hadoop and Spark, and when they are needed they can often be contained to small parts of a system. AWS and Google Cloud have excellent services for working with data at scale and are straightforward to integrate with most existing technology stacks. Usually this stage needs some help from your engineering, DevOps or SRE team to ensure it’s built and deployed in a way that works well with the rest of your systems."),o.default.createElement("p",null,o.default.createElement("strong",null,"Outcome:")," A data product feature deployed to production."),o.default.createElement("p",null,o.default.createElement("strong",null,"Risk:")," Usual engineering risks of time and budget overruns. Producing complex software that’s difficult to maintain."),o.default.createElement("p",null,o.default.createElement("strong",null,"Time:")," About two months."),o.default.createElement("h3",null,"Operation"),o.default.createElement("p",null,"It’s important to monitor that features are operating properly in production. Data science systems can usually be connected to monitoring services used in other parts of a technology stack, so uptime and system status can be overseen as usual. It’s best to involve DevOps or SRE in this as with any other technology deployment. If a production system wasn’t built with the involvement of an engineering team it may take a few weeks to bring the team up to speed on it and fully handover it’s operation. Ideally the engineering team are involved throughout the build so the handover is more of a formality with no unknowns or changes required."),o.default.createElement("p",null,"Depending on what the system does it might be informative or necessary to monitor data science specific metrics like model performance and accuracy, to ensure a system that worked on test data is working well in a live setting. You might want alerts and a fallback system to kick in if performance goes outside of an expected range."),o.default.createElement("p",null,"Some machine learning models will require updating when the underlying data changes. A process for monitoring and retraining models can be incorporated into the design, build and ongoing operation of the system. It might be possible to automatically retrain models with only minimal oversight or intervention, which could be handed over to a general developer or analyst. More complex or bespoke models might need a dedicated data scientist to monitor and adjust them for normal use."),o.default.createElement("p",null,"As well as the technical and operational handover, it’s vital that the new feature is understood and adopted by its stakeholders, including product users and any internal teams. Bringing data science into a company is a transformational process, and new ways of working and thinking have to take root for it to be successful. Here’s where involving the wider team in the research efforts and building shared understanding pays dividends, as they’ll be using and championing the system for most of its life."),o.default.createElement("p",null,o.default.createElement("strong",null,"Outcomes:")," Ownership is transferred to in house technical team, reliability and adoption is assured. Adoption of the new feature and any new ways of working it requires."),o.default.createElement("p",null,o.default.createElement("strong",null,"Risk:")," Failing to maintain the feature or make full use of it. Organizational rejection of the new feature."),o.default.createElement("p",null,o.default.createElement("strong",null,"Time:")," Ongoing throughout the project, especially in the earlier stages, plus usually a few weeks dedicated handover time at the end."),o.default.createElement("h3",null,"Summing up"),o.default.createElement("p",null,"Although projects can seem daunting at first, most work falls into clear stages. Discovery and research stages are all about finding good ideas to try and figuring out what’s possible with what you have. If data science isn’t going to work for you, you want to know that as quickly as possible, and definitely before committing resources to building and managing new technology."),o.default.createElement("p",null,"If the research shows you have a viable feature, then getting it to an optimal level of performance and making decisions with the team about the best trade-offs become key tasks. Much of the delivery and ongoing operational work is similar to any other engineering project but may require ongoing data science work to support it."));
},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-articles-managing-data-science-projects-js-34c2658b22efaced6dd9.js.map