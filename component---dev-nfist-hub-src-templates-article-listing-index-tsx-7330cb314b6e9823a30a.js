(self.webpackChunknfist_hub=self.webpackChunknfist_hub||[]).push([[805],{7853:function(e,t,n){var r=n(7424),o=n(2882),i=TypeError;e.exports=function(e){if(r(e))return e;throw i(o(e)+" is not a function")}},990:function(e,t,n){var r=n(7166),o=n(3981),i=n(7614).f,a=r("unscopables"),c=Array.prototype;null==c[a]&&i(c,a,{configurable:!0,value:o(null)}),e.exports=function(e){c[a][e]=!0}},1326:function(e,t,n){var r=n(6827),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw i(o(e)+" is not an object")}},5254:function(e,t,n){var r=n(3016),o=n(847),i=n(7825),a=function(e){return function(t,n,a){var c,l=r(t),s=i(l),u=o(a,s);if(e&&n!=n){for(;s>u;)if((c=l[u++])!=c)return!0}else for(;s>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},661:function(e,t,n){var r=n(9709),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},6530:function(e,t,n){var r=n(2756),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},6953:function(e,t,n){var r=n(8462);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},3636:function(e){var t="object"==typeof document&&document.all,n=void 0===t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},3018:function(e,t,n){var r=n(2756),o=n(6827),i=r.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},5441:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},5649:function(e,t,n){var r,o,i=n(2756),a=n(5441),c=i.process,l=i.Deno,s=c&&c.versions||l&&l.version,u=s&&s.v8;u&&(o=(r=u.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),e.exports=o},4798:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},8462:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},323:function(e,t,n){var r=n(8462);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},5244:function(e,t,n){var r=n(323),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},9709:function(e,t,n){var r=n(323),o=Function.prototype,i=o.call,a=r&&o.bind.bind(i,i);e.exports=r?a:function(e){return function(){return i.apply(e,arguments)}}},5072:function(e,t,n){var r=n(2756),o=n(7424);e.exports=function(e,t){return arguments.length<2?(n=r[e],o(n)?n:void 0):r[e]&&r[e][t];var n}},125:function(e,t,n){var r=n(7853),o=n(5570);e.exports=function(e,t){var n=e[t];return o(n)?void 0:r(n)}},2756:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},5110:function(e,t,n){var r=n(9709),o=n(4440),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},3472:function(e){e.exports={}},1198:function(e,t,n){var r=n(5072);e.exports=r("document","documentElement")},7106:function(e,t,n){var r=n(6953),o=n(8462),i=n(3018);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8188:function(e,t,n){var r=n(9709),o=n(8462),i=n(661),a=Object,c=r("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?c(e,""):a(e)}:a},7424:function(e,t,n){var r=n(3636),o=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===o}:function(e){return"function"==typeof e}},5570:function(e){e.exports=function(e){return null==e}},6827:function(e,t,n){var r=n(7424),o=n(3636),i=o.all;e.exports=o.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===i}:function(e){return"object"==typeof e?null!==e:r(e)}},7690:function(e){e.exports=!1},6396:function(e,t,n){var r=n(5072),o=n(7424),i=n(6830),a=n(4717),c=Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&i(t.prototype,c(e))}},7825:function(e,t,n){var r=n(9223);e.exports=function(e){return r(e.length)}},1298:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},3981:function(e,t,n){var r,o=n(1326),i=n(6434),a=n(4798),c=n(3472),l=n(1198),s=n(3018),u=n(5868),f="prototype",d="script",p=u("IE_PROTO"),m=function(){},v=function(e){return"<"+d+">"+e+"</"+d+">"},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},h=function(){try{r=new ActiveXObject("htmlfile")}catch(i){}var e,t,n;h="undefined"!=typeof document?document.domain&&r?y(r):(t=s("iframe"),n="java"+d+":",t.style.display="none",l.appendChild(t),t.src=String(n),(e=t.contentWindow.document).open(),e.write(v("document.F=Object")),e.close(),e.F):y(r);for(var o=a.length;o--;)delete h[f][a[o]];return h()};c[p]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=o(e),n=new m,m[f]=null,n[p]=e):n=h(),void 0===t?n:i.f(n,t)}},6434:function(e,t,n){var r=n(6953),o=n(5679),i=n(7614),a=n(1326),c=n(3016),l=n(4565);t.f=r&&!o?Object.defineProperties:function(e,t){a(e);for(var n,r=c(t),o=l(t),s=o.length,u=0;s>u;)i.f(e,n=o[u++],r[n]);return e}},7614:function(e,t,n){var r=n(6953),o=n(7106),i=n(5679),a=n(1326),c=n(8756),l=TypeError,s=Object.defineProperty,u=Object.getOwnPropertyDescriptor,f="enumerable",d="configurable",p="writable";t.f=r?i?function(e,t,n){if(a(e),t=c(t),a(n),"function"==typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=u(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:f in n?n[f]:r[f],writable:!1})}return s(e,t,n)}:s:function(e,t,n){if(a(e),t=c(t),a(n),o)try{return s(e,t,n)}catch(r){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},6830:function(e,t,n){var r=n(9709);e.exports=r({}.isPrototypeOf)},9583:function(e,t,n){var r=n(9709),o=n(5110),i=n(3016),a=n(5254).indexOf,c=n(3472),l=r([].push);e.exports=function(e,t){var n,r=i(e),s=0,u=[];for(n in r)!o(c,n)&&o(r,n)&&l(u,n);for(;t.length>s;)o(r,n=t[s++])&&(~a(u,n)||l(u,n));return u}},4565:function(e,t,n){var r=n(9583),o=n(4798);e.exports=Object.keys||function(e){return r(e,o)}},4259:function(e,t,n){var r=n(5244),o=n(7424),i=n(6827),a=TypeError;e.exports=function(e,t){var n,c;if("string"===t&&o(n=e.toString)&&!i(c=r(n,e)))return c;if(o(n=e.valueOf)&&!i(c=r(n,e)))return c;if("string"!==t&&o(n=e.toString)&&!i(c=r(n,e)))return c;throw a("Can't convert object to primitive value")}},5065:function(e,t,n){var r=n(5570),o=TypeError;e.exports=function(e){if(r(e))throw o("Can't call method on "+e);return e}},5868:function(e,t,n){var r=n(3662),o=n(637),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},410:function(e,t,n){var r=n(2756),o=n(6530),i="__core-js_shared__",a=r[i]||o(i,{});e.exports=a},3662:function(e,t,n){var r=n(7690),o=n(410);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.29.0",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE",source:"https://github.com/zloirock/core-js"})},4:function(e,t,n){var r=n(5649),o=n(8462);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},847:function(e,t,n){var r=n(6372),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},3016:function(e,t,n){var r=n(8188),o=n(5065);e.exports=function(e){return r(o(e))}},6372:function(e,t,n){var r=n(1298);e.exports=function(e){var t=+e;return t!=t||0===t?0:r(t)}},9223:function(e,t,n){var r=n(6372),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},4440:function(e,t,n){var r=n(5065),o=Object;e.exports=function(e){return o(r(e))}},7806:function(e,t,n){var r=n(5244),o=n(6827),i=n(6396),a=n(125),c=n(4259),l=n(7166),s=TypeError,u=l("toPrimitive");e.exports=function(e,t){if(!o(e)||i(e))return e;var n,l=a(e,u);if(l){if(void 0===t&&(t="default"),n=r(l,e,t),!o(n)||i(n))return n;throw s("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},8756:function(e,t,n){var r=n(7806),o=n(6396);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},2882:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},637:function(e,t,n){var r=n(9709),o=0,i=Math.random(),a=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++o+i,36)}},4717:function(e,t,n){var r=n(4);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5679:function(e,t,n){var r=n(6953),o=n(8462);e.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},7166:function(e,t,n){var r=n(2756),o=n(3662),i=n(5110),a=n(637),c=n(4),l=n(4717),s=r.Symbol,u=o("wks"),f=l?s.for||s:s&&s.withoutSetter||a;e.exports=function(e){return i(u,e)||(u[e]=c&&i(s,e)?s[e]:f("Symbol."+e)),u[e]}},7423:function(e,t,n){n(990)("flat")},3198:function(e,t,n){"use strict";n.d(t,{d:function(){return g},O:function(){return x}});var r=n(3696),o=n(8235),i=n(7816),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};var c={skeleton:"styles_skeleton__tyzRD","skeleton-progress":"styles_skeleton-progress__aezri"};function l(e){var t=e.width,n=void 0===t?"100%":t,o=e.height,i=void 0===o?"1em":o,l=e.background,s=void 0===l?"#E9ECEF":l,u=e.radius,f=void 0===u?"4px":u,d=e.circle,p=void 0!==d&&d,m=e.block,v=void 0===m||m,y=e.style,h=void 0===y?{}:y,b=e.as,g=void 0===b?"div":b;return r.createElement(g,{className:c.skeleton,style:a({width:n,height:i,background:s,borderRadius:p?"50%":f,display:v?"block":"inline-block"},h)},"‌")}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}('.styles_skeleton__tyzRD{background:#eff1f6;display:inline-block;line-height:1;overflow:hidden;position:relative}.styles_skeleton__tyzRD:before{animation:styles_skeleton-progress__aezri 1.2s ease-in-out infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0));content:"";height:100%;left:-500px;position:absolute;top:0;width:500px}@keyframes styles_skeleton-progress__aezri{0%{left:-500px}to{left:100%}}');var s=n(3299),u="style-module--Banner--e5b70",f="style-module--Card--9e089",d="style-module--Category--1c735",p="style-module--DescriptionWrapper--e6286",m="style-module--Details--fd9f8",v="style-module--Image--44ba8",y="style-module--ImageWrapper--4700e",h="style-module--ReadingTime--8107b",b="style-module--Title--939eb";function g(e){const{globalState:t}=(0,s.QN)(),n=t.theme===s.Sx.Dark,a=e.data.link.indexOf("://")>0||0===e.data.link.indexOf("//"),c=r.createElement("article",{className:f,style:n?{border:"0.125rem solid var(--primary-color)"}:void 0},e.showBanner&&r.createElement("div",{className:u},e.data.image&&e.data.image.src&&r.createElement(i.G,{className:y,imgClassName:v,objectFit:e.data.image.objectFit||"cover",image:e.data.image.src.childImageSharp.gatsbyImageData,alt:e.data.image.alt||e.data.title})),r.createElement("div",{className:p},r.createElement("span",{className:d},r.createElement("u",null,e.data.category)),r.createElement("h4",{className:b},e.data.title),r.createElement("div",{className:m},["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(l=e.data.publishedAt).getMonth()]+" "+l.getDate()+", "+l.getFullYear(),e.data.readingTime&&r.createElement("span",{className:h},e.data.readingTime))));var l;return a?r.createElement("a",{href:e.data.link,target:"_blank",rel:"noopener noreferrer",title:e.data.title},c):r.createElement(o.Link,{to:e.data.link,title:e.data.title},c)}function x(){const{globalState:e}=(0,s.QN)(),t=e.theme===s.Sx.Dark;return r.createElement("div",{className:f,style:t?{border:"0.125rem solid var(--primary-color)"}:void 0},r.createElement("div",{className:p},r.createElement(l,{style:{height:"1.5rem",marginBottom:".5rem",background:"var(--tertiary-color)"}}),r.createElement(l,{style:{height:"4rem",background:"var(--tertiary-color)"}}),r.createElement(l,{style:{height:".75rem",width:"50%",marginTop:".5rem",background:"var(--tertiary-color)"}})))}},3006:function(e,t,n){"use strict";n.d(t,{$:function(){return c},V:function(){return a}});var r=n(3696),o=n(8235),i="style-module--Button--a905d";let a;function c(e){if(e.type===a.LINK){if(e.url)return e.externalLink?r.createElement("a",{id:e.id,className:i,href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":"External Link"},e.label):r.createElement(o.Link,{id:e.id,to:e.url,className:i},e.label);throw new Error("Button should be a "+e.type+" but no URL is given!")}if(e.type===a.BUTTON||e.type===a.SUBMIT){if(!e.onClickHandler)throw new Error("Button should be a "+e.type+" but no onClickHandler is given!");return r.createElement("button",{id:e.id,className:i,type:e.type,onClick:e.onClickHandler},e.label)}throw new Error("Unknown button type specified.")}!function(e){e.BUTTON="button",e.SUBMIT="submit",e.LINK="link"}(a||(a={}))},3539:function(e,t,n){"use strict";n.d(t,{w:function(){return c}});var r=n(3696),o="style-module--ContentWrapper --67d4f",i="style-module--Heading--79a6b",a="style-module--Section--cea55";function c(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(o).join(" "):o,r.createElement("section",{id:e.anchor,className:a},r.createElement("div",{className:t},e.heading&&r.createElement("h3",{className:i},e.heading),e.children))}},1059:function(e,t,n){"use strict";n.d(t,{A:function(){return i}});var r=n(3696),o="style-module--SlideContainer--29fe6";function i(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(o).join(" "):o,r.createElement("div",{className:t,style:e.style},e.children)}},8677:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});n(7423);var r=n(1192),o=n(3696),i=n(3452),a=n(3539),c=n(7148),l=n(1059),s=n(3198),u=n(3006),f="style-module--Filter--9b9ca",d="style-module--Listing--46c01",p="style-module--LoadMore--17976",m="style-module--Option--10004",v="style-module--Options--e3944",y="style-module--Selected--be6e9",h=n(6443);function b(e){var t;const n=e.pageContext.articles,[b,g]=o.useState(function(e){const t=[],n=[];return e.forEach((e=>{e.categories.forEach((r=>{if(n.includes(r)){const n=t.map((e=>e.label)).indexOf(r);t[n].relatedArticleIds.push(e.id)}else t.push({label:r,selected:!1,relatedArticleIds:[e.id]}),n.push(r)}))})),t.sort(((e,t)=>e.relatedArticleIds.length>t.relatedArticleIds.length?-1:1))}(n)),[x,E]=o.useState(9);let k=[];const w=-1!==b.map((e=>e.selected)).indexOf(!0);w&&(k=b.filter((e=>e.selected)).map((e=>e.relatedArticleIds)).flat(1).filter(((e,t,n)=>n.indexOf(e)===t)));const O=null!==(t=(0,h.t)(e.pageContext.entityName))&&void 0!==t?t:"Articles";return o.createElement(o.Fragment,null,o.createElement(c.G,{title:"All "+O,useTitleTemplate:!0}),o.createElement(i.Y,null,o.createElement(a.w,{anchor:"articleListing",heading:O},o.createElement("div",{className:f},"Select categories to filter ",O.toLocaleLowerCase(),o.createElement(l.A,{additionalClasses:[v]},b.map(((e,t)=>o.createElement("div",{key:t,role:"button",onClick:()=>function(e){const t=(0,r.A)(b),n=t.map((e=>e.label)).indexOf(e);t[n].selected=!t[n].selected,g(t)}(e.label),className:[m,!0===e.selected?y:null].join(" ")},e.label," (",e.relatedArticleIds.length,")"))))),o.createElement("div",{className:d},n.filter((e=>!w||k.includes(e.id))).slice(0,x).map(((e,t)=>o.createElement(s.d,{key:t,showBanner:!0,data:{image:e.banner,title:e.title,category:e.categories.join(" / "),publishedAt:new Date(e.date.replace(/-/g,"/")),link:e.slug,readingTime:e.readingTime.text}})))),w&&k.length>x||!w&&n.length>x?o.createElement("div",{className:p},o.createElement(u.$,{type:u.V.BUTTON,label:"Load More",onClickHandler:()=>E((e=>e+6))})):null)))}},6443:function(e,t,n){"use strict";function r(e,t){if(!e)return;if(void 0!==t&&1===t)return e;const n={"(quiz)$":"$1zes","^(ox)$":"$1en","([m|l])ouse$":"$1ice","(matr|vert|ind)ix|ex$":"$1ices","(x|ch|ss|sh)$":"$1es","([^aeiouy]|qu)y$":"$1ies","(hive)$":"$1s","(?:([^f])fe|([lr])f)$":"$1$2ves","(shea|lea|loa|thie)f$":"$1ves",sis$:"ses","([ti])um$":"$1a","(tomat|potat|ech|her|vet)o$":"$1oes","(bu)s$":"$1ses","(alias)$":"$1es","(octop)us$":"$1i","(ax|test)is$":"$1es","(us)$":"$1es","([^s]+)$":"$1s"},r={move:"moves",foot:"feet",goose:"geese",sex:"sexes",child:"children",man:"men",tooth:"teeth",person:"people"};if(["sheep","fish","deer","moose","series","species","money","rice","information","equipment","bison","cod","offspring","pike","salmon","shrimp","swine","trout","aircraft","hovercraft","spacecraft","sugar","tuna","you","wood"].indexOf(e.toLowerCase())>=0)return e;for(const o in r){const t=new RegExp(o+"$","i"),n=r[o];if(t.test(e))return e.replace(t,n)}for(const o in n){const t=new RegExp(o,"i");if(t.test(e))return e.replace(t,n[o])}return e}n.d(t,{t:function(){return r}})}}]);
//# sourceMappingURL=component---dev-nfist-hub-src-templates-article-listing-index-tsx-7330cb314b6e9823a30a.js.map