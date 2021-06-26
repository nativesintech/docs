/*! For license information please see 2.cdc7abdb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{100:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},101:function(e,t,a){"use strict";var n=a(0),r=a(100);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},102:function(e,t,a){"use strict";var n=a(87),r=a(10),o=a(83);t.a=function(){const e=Object(n.useHistory)(),t=Object(n.useLocation)(),{siteConfig:{baseUrl:a}={}}=Object(o.a)();return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}}},103:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n);function o(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},104:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===o)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},105:function(e,t,a){"use strict";var n=a(0),r=a(10);const o=()=>({scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const[a,r]=Object(n.useState)(o()),c=()=>{const t=o();r(t),e&&e(t)};return Object(n.useEffect)(()=>(window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c,{passive:!0})),t),a}},106:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},107:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0);const r={desktop:"desktop",mobile:"mobile"};t.a=function(){const e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}const[a,o]=Object(n.useState)(t);return Object(n.useEffect)(()=>{if(e)return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a);function a(){o(t())}},[]),a}},108:function(e,t,a){"use strict";var n=a(83),r=a(93),o=a(86),c=a(89);t.a=()=>{const{siteConfig:{themeConfig:{navbar:{logo:e={}}={}}={}}={}}=Object(n.a)(),{isDarkTheme:t}=Object(r.a)(),a=Object(o.a)(e.href||"/");let l={};e.target?l={target:e.target}:Object(c.a)(a)||(l={rel:"noopener noreferrer",target:"_blank"});const s=e.srcDark&&t?e.srcDark:e.src;return{logoLink:a,logoLinkProps:l,logoImageUrl:Object(o.a)(s),logoAlt:e.alt}}},120:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(0),c=m(o),l=m(a(104)),s=m(a(7)),i=m(a(121)),u=m(a(122)),d=a(123);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),o=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return c.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(o.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:c.default.createElement(i.default,null),unchecked:c.default.createElement(u.default,null)}},h.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},121:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),o=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("title",null,"switch-check"),o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},122:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),o=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("title",null,"switch-x"),o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},123:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},88:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(92),c=a(83),l=a(86),s=a(10);const i="light",u="dark",d=e=>e===u?u:i,m=()=>s.a.canUseDOM?d(document.documentElement.getAttribute("data-theme")):i,h=e=>{try{localStorage.setItem("theme",d(e))}catch(t){console.error(t)}};var f=()=>{const{siteConfig:{themeConfig:{colorMode:{disableSwitch:e=!1}={}}={}}={}}=Object(c.a)(),[t,a]=Object(n.useState)(m),r=Object(n.useCallback)(()=>{a(i),h(i)},[]),o=Object(n.useCallback)(()=>{a(u),h(u)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",d(t))},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(d(e))}catch(t){console.error(t)}},[a]),Object(n.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{a(e?u:i)})},[]),{isDarkTheme:t===u,setLightTheme:r,setDarkTheme:o}},b=a(99);var v=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=f();return r.a.createElement(b.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)};var p=()=>{const[e,t]=Object(n.useState)({}),a=Object(n.useCallback)((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}},[]);return Object(n.useEffect)(()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const a=localStorage.key(t);if(a.startsWith("docusaurus.tab.")){e[a.substring("docusaurus.tab.".length)]=localStorage.getItem(a)}}t(e)}catch(e){console.error(e)}},[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t(t=>({...t,[e]:n})),a(e,n)}}};var g=()=>{const{siteConfig:{themeConfig:{announcementBar:{id:e="annoucement-bar"}={}}={}}={}}=Object(c.a)(),[t,a]=Object(n.useState)(!0);return Object(n.useEffect)(()=>{if(!e)return;const t=localStorage.getItem("docusaurus.announcement.id"),n=e!==t;localStorage.setItem("docusaurus.announcement.id",e),n&&localStorage.setItem("docusaurus.announcement.dismiss","false"),(n||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&a(!1)},[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:()=>{localStorage.setItem("docusaurus.announcement.dismiss","true"),a(!0)}}},k=a(100);var E=function(e){const{tabGroupChoices:t,setTabGroupChoices:a}=p(),{isAnnouncementBarClosed:n,closeAnnouncementBar:o}=g();return r.a.createElement(k.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a,isAnnouncementBarClosed:n,closeAnnouncementBar:o}},e.children)},O=a(101),y=a(48),j=a.n(y);var C=function(){const{siteConfig:{themeConfig:{announcementBar:e={}}={}}={}}=Object(c.a)(),{content:t,backgroundColor:a,textColor:n}=e,{isAnnouncementBarClosed:o,closeAnnouncementBar:l}=Object(O.a)();return!t||o?null:r.a.createElement("div",{className:j.a.announcementBar,style:{backgroundColor:a,color:n},role:"banner"},r.a.createElement("div",{className:j.a.announcementBarContent,dangerouslySetInnerHTML:{__html:t}}),r.a.createElement("button",{type:"button",className:j.a.announcementBarClose,onClick:l,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},w=a(2),_=a(85),N=a(84),S=a(22),T=a(87),L=a(102);function M(){return r.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var x=a(103);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(s){r=!0,o=s}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function I(){return"undefined"==typeof navigator?"Ctrl":/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)}var A=r.a.forwardRef((function(e,t){var a=P(Object(n.useState)((function(){return I()?"\u2318":"Ctrl"})),2),o=a[0],c=a[1];return Object(n.useEffect)((function(){I()&&c("\u2318")}),[]),r.a.createElement("button",B({type:"button",className:"DocSearch DocSearch-Button"},e,{ref:t}),r.a.createElement(x.a,null),r.a.createElement("span",{className:"DocSearch-Button-Placeholder"},"Search"),r.a.createElement("span",{className:"DocSearch-Button-Key"},"Ctrl"===o?r.a.createElement(M,null):o),r.a.createElement("span",{className:"DocSearch-Button-Key"},"K"))}));let U=null;function V({hit:e,children:t}){return r.a.createElement(N.a,{to:e.url},t)}function F({state:e,onClose:t}){const{generateSearchPageLink:a}=Object(L.a)();return r.a.createElement(N.a,{to:a(e.query),onClick:t},"See all ",e.context.nbHits," results")}function X(e){const{siteMetadata:t}=Object(c.a)(),{withBaseUrl:s}=Object(l.b)(),i=Object(T.useHistory)(),[u,d]=Object(n.useState)(!1),m=Object(n.useCallback)(()=>U?Promise.resolve():Promise.all([a.e(24).then(a.bind(null,145)),Promise.all([a.e(0),a.e(25)]).then(a.bind(null,144)),a.e(0).then(a.t.bind(null,81,7))]).then(([{DocSearchModal:e}])=>{U=e}),[]),h=Object(n.useCallback)(()=>{m().then(()=>{d(!0)})},[m,d]),f=Object(n.useCallback)(()=>{d(!1)},[d]);return function(e){var t=e.isOpen,a=e.onOpen,n=e.onClose,o=e.onInput,c=e.searchButtonRef;r.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||"/"===e.key&&!t)&&(e.preventDefault(),t?n():a()),c&&c.current===document.activeElement&&o&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&o(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,a,n,o,c])}({isOpen:u,onOpen:h,onClose:f}),r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("link",{rel:"preconnect",href:`https://${e.appId}-dsn.algolia.net`,crossOrigin:!0})),r.a.createElement(A,{onTouchStart:m,onFocus:m,onMouseOver:m,onClick:h}),u&&Object(S.createPortal)(r.a.createElement(U,Object(w.a)({onClose:f,initialScrollY:window.scrollY,navigator:{navigate({suggestionUrl:e}){i.push(e)}},transformItems:e=>e.map(e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:s(`${t.pathname}${t.hash}`)}}),hitComponent:V,resultsFooterComponent:e=>r.a.createElement(F,Object(w.a)({},e,{onClose:f})),transformSearchClient:e=>(e.addAlgoliaAgent("docusaurus",t.docusaurusVersion),e)},e)),document.body))}var R=function(){const{siteConfig:e={}}=Object(c.a)();return e.themeConfig.algolia?r.a.createElement(X,e.themeConfig.algolia):(console.warn("DocSearch requires an `algolia` field in your `themeConfig`.\n\nSee: https://v2.docusaurus.io/docs/search/#using-algolia-docsearch"),null)},H=a(120),$=a.n(H),K=a(49),q=a.n(K);const Y=()=>r.a.createElement("span",{className:Object(_.a)(q.a.toggle,q.a.moon)}),G=()=>r.a.createElement("span",{className:Object(_.a)(q.a.toggle,q.a.sun)});var W=function(e){const{isClient:t}=Object(c.a)();return r.a.createElement($.a,Object(w.a)({disabled:!t,icons:{checked:r.a.createElement(Y,null),unchecked:r.a.createElement(G,null)}},e))},z=a(93);var J=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]},Z=a(105);var Q=e=>{const[t,a]=Object(n.useState)(!0),[r,o]=Object(n.useState)(!1),[c,l]=Object(n.useState)(0),[s,i]=Object(n.useState)(0),u=Object(n.useCallback)(e=>{null!==e&&i(e.getBoundingClientRect().height)},[]),d=Object(T.useLocation)(),[m,h]=J(d.hash);return Object(Z.a)(({scrollY:t})=>{if(!e)return;if(0===t&&a(!0),t<s)return;if(r)return o(!1),a(!1),void l(t);const n=document.documentElement.scrollHeight-s,i=window.innerHeight;c&&t>=c?a(!1):t+i<n&&a(!0),l(t)},[c,s]),Object(n.useEffect)(()=>{e&&(a(!0),h(d.hash))},[d]),Object(n.useEffect)(()=>{e&&m&&o(!0)},[m]),{navbarRef:u,isNavbarVisible:t}},ee=a(106),te=a(107),ae=a(108),ne=a(50),re=a.n(ne);function oe({activeBasePath:e,activeBaseRegex:t,to:a,href:n,label:o,activeClassName:c="navbar__link--active",prependBaseUrlToHref:s,...i}){const u=Object(l.a)(e),d=Object(l.a)(n,{forcePrependBaseUrl:!0});return r.a.createElement(N.a,Object(w.a)({},n?{target:"_blank",rel:"noopener noreferrer",href:s?d:n}:{isNavLink:!0,activeClassName:c,to:a,...e||t?{isActive:(e,a)=>t?new RegExp(t).test(a.pathname):a.pathname.startsWith(u)}:null},i),o)}function ce({items:e,position:t,className:a,...n}){const o=(e,t=!1)=>Object(_.a)({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?r.a.createElement("div",{className:Object(_.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},r.a.createElement(oe,Object(w.a)({className:o(a)},n,{onClick:n.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{function t(){e.target.parentNode.classList.toggle("dropdown--show")}"Enter"!==e.key||n.to||t(),"Tab"===e.key&&t()}}),n.label),r.a.createElement("ul",{className:"dropdown__menu"},e.map(({className:e,...t},a)=>r.a.createElement("li",{key:a},r.a.createElement(oe,Object(w.a)({activeClassName:"dropdown__link--active",className:o(e,!0)},t)))))):r.a.createElement(oe,Object(w.a)({className:o(a)},n))}function le({items:e,position:t,className:a,...n}){const o=(e,t=!1)=>Object(_.a)("menu__link",{"menu__link--sublist":t},e);return e?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(oe,Object(w.a)({className:o(a,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},e.map(({className:e,...t},a)=>r.a.createElement("li",{className:"menu__list-item",key:a},r.a.createElement(oe,Object(w.a)({activeClassName:"menu__link--active",className:o(e)},t,{onClick:n.onClick})))))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(oe,Object(w.a)({className:o(a)},n)))}var se=function({mobile:e=!1,...t}){const a=e?le:ce;return r.a.createElement(a,t)},ie=a(94);const ue=(e,t)=>"next"===e.name?t:e.name,de=e=>e.docs.find(t=>t.id===e.mainDocId);const me={default:se,docsVersion:function({label:e,to:t,docsPluginId:a,nextVersionLabel:n,...o}){const c=Object(ie.useActiveVersion)(a),l=Object(ie.useLatestVersion)(a),s=null!=c?c:l,i=null!=e?e:((e,t)=>"next"===e.name?t:e.name)(s,n),u=null!=t?t:(e=>e.docs.find(t=>t.id===e.mainDocId))(s).path;return r.a.createElement(se,Object(w.a)({},o,{label:i,to:u}))},docsVersionDropdown:function({mobile:e,docsPluginId:t,nextVersionLabel:a,...n}){var o;const c=Object(ie.useActiveDocContext)(t),l=Object(ie.useVersions)(t),s=Object(ie.useLatestVersion)(t),i=l.map(e=>{const t=(null==c?void 0:c.alternateDocVersions[e.name])||de(e);return{isNavLink:!0,label:ue(e,a),to:t.path,isActive:()=>e===(null==c?void 0:c.activeVersion)}}),u=null!==(o=c.activeVersion)&&void 0!==o?o:s,d=e?"Versions":ue(u,a),m=e?void 0:de(u).path;return r.a.createElement(se,Object(w.a)({},n,{mobile:e,label:d,to:m,items:i}))}};function he({type:e,...t}){const a=((e="default")=>{const t=me[e];if(!t)throw new Error(`No NavbarItem component found for type=${e}.`);return t})(e);return r.a.createElement(a,t)}var fe=function(){const{siteConfig:{themeConfig:{navbar:{title:e="",items:t=[],hideOnScroll:a=!1}={},colorMode:{disableSwitch:o=!1}={}}},isClient:l}=Object(c.a)(),[s,i]=Object(n.useState)(!1),[u,d]=Object(n.useState)(!1),{isDarkTheme:m,setLightTheme:h,setDarkTheme:f}=Object(z.a)(),{navbarRef:b,isNavbarVisible:v}=Q(a),{logoLink:p,logoLinkProps:g,logoImageUrl:k,logoAlt:E}=Object(ae.a)();Object(ee.a)(s);const O=Object(n.useCallback)(()=>{i(!0)},[i]),y=Object(n.useCallback)(()=>{i(!1)},[i]),j=Object(n.useCallback)(e=>e.target.checked?f():h(),[h,f]),C=Object(te.a)();Object(n.useEffect)(()=>{C===te.b.desktop&&i(!1)},[C]);const{leftItems:S,rightItems:T}=function(e){return{leftItems:e.filter(e=>{var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:"right")}),rightItems:e.filter(e=>{var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:"right")})}}(t);return r.a.createElement("nav",{ref:b,className:Object(_.a)("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":s,[re.a.navbarHideable]:a,[re.a.navbarHidden]:!v})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:O,onKeyDown:O},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(N.a,Object(w.a)({className:"navbar__brand",to:p},g),null!=k&&r.a.createElement("img",{key:l,className:"navbar__logo",src:k,alt:E}),null!=e&&r.a.createElement("strong",{className:Object(_.a)("navbar__title",{[re.a.hideLogoText]:u})},e)),S.map((e,t)=>r.a.createElement(he,Object(w.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},T.map((e,t)=>r.a.createElement(he,Object(w.a)({},e,{key:t}))),!o&&r.a.createElement(W,{className:re.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:m,onChange:j}),r.a.createElement(R,{handleSearchBarToggle:d,isSearchBarExpanded:u}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:y}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(N.a,Object(w.a)({className:"navbar__brand",onClick:y,to:p},g),null!=k&&r.a.createElement("img",{key:l,className:"navbar__logo",src:k,alt:E}),null!=e&&r.a.createElement("strong",{className:"navbar__title"},e)),!o&&s&&r.a.createElement(W,{"aria-label":"Dark mode toggle in sidebar",checked:m,onChange:j})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},t.map((e,t)=>r.a.createElement(he,Object(w.a)({mobile:!0},e,{onClick:y,key:t}))))))))},be=a(51),ve=a.n(be);function pe({to:e,href:t,label:a,prependBaseUrlToHref:n,...o}){const c=Object(l.a)(e),s=Object(l.a)(t,{forcePrependBaseUrl:!0});return r.a.createElement(N.a,Object(w.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:n?s:t}:{to:c},o),a)}const ge=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var ke=function(){const e=Object(c.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:o,links:s=[],logo:i={}}=n||{},u=Object(l.a)(i.src);return n?r.a.createElement("footer",{className:Object(_.a)("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(pe,e)))):null))),(i||o)&&r.a.createElement("div",{className:"text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:ve.a.footerLogoLink},r.a.createElement(ge,{alt:i.alt,url:u})):r.a.createElement(ge,{alt:i.alt,url:u})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}})))):null};a(52);function Ee({children:e}){return r.a.createElement(v,null,r.a.createElement(E,null,e))}t.a=function(e){const{siteConfig:t={}}=Object(c.a)(),{favicon:a,title:n,themeConfig:{image:s},url:i}=t,{children:u,title:d,noFooter:m,description:h,image:f,keywords:b,permalink:v,version:p}=e,g=d?`${d} | ${n}`:n,k=f||s,E=Object(l.a)(k,{absolute:!0}),O=Object(l.a)(a);return r.a.createElement(Ee,null,r.a.createElement(o.a,null,r.a.createElement("html",{lang:"en"}),g&&r.a.createElement("title",null,g),g&&r.a.createElement("meta",{property:"og:title",content:g}),a&&r.a.createElement("link",{rel:"shortcut icon",href:O}),h&&r.a.createElement("meta",{name:"description",content:h}),h&&r.a.createElement("meta",{property:"og:description",content:h}),p&&r.a.createElement("meta",{name:"docsearch:version",content:p}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:E}),k&&r.a.createElement("meta",{property:"twitter:image",content:E}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+g}),v&&r.a.createElement("meta",{property:"og:url",content:i+v}),v&&r.a.createElement("link",{rel:"canonical",href:i+v}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(C,null),r.a.createElement(fe,null),r.a.createElement("div",{className:"main-wrapper"},u),!m&&r.a.createElement(ke,null))}},93:function(e,t,a){"use strict";var n=a(0),r=a(99);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},99:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext(void 0);t.a=r}}]);