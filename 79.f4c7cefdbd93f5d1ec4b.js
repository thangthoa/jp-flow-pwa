/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~10.3.0, @magento/venia-sample-payments-checkmo: ^0.0.12, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~13.1.1, @magento/pagebuilder: ~8.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.6.9 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{HBHx:function(t,e,n){"use strict"
n.r(e),n.d(e,"default",function(){return j})
var r=n("q1tI"),o=n.n(r),a=n("x2Ii"),c=n("y1Xp"),i=n("LboF"),s=n.n(i),l=n("m9J7"),u={injectType:"singletonStyleTag",insert:"head",singleton:!0},d=(s()(l.a,u),l.a.locals||{}),b=n("55Ip"),p=n("17x9"),g=n("QmiG"),f=n("bNDk"),m=n("xDNY"),O=n("7OjP")
const y=t=>{const{title:e,accordionEnabled:n}=t,{tags:r}=Object(a.b)(),{isOpen:i,handleToggle:s}=Object(g.a)({accordionEnabled:n}),l=Object(c.a)(d,t.classes)
if(!r||!r.length)return null
const u=r.map(t=>{let{tag_id:e,url_key:n,name:r}=t
return o.a.createElement(b.b,{key:e,className:l.item,to:Object(m.d)(O.a.TAG,n),title:r},r)})
return o.a.createElement("div",{className:"".concat(l.root," ").concat(l.gridArea)},o.a.createElement("div",{className:l.title},o.a.createElement(f.a,{action:s},e)),i&&o.a.createElement("div",{className:l.list},u))}
y.propTypes={title:p.string,accordionEnabled:p.bool},y.defaultProps={title:"Tags",accordionEnabled:!1}
var j=y},QmiG:function(t,e,n){"use strict"
n.d(e,"a",function(){return a})
var r=n("3OKo"),o=n("q1tI")
const a=t=>{const{accordionEnabled:e}=t,{isMobile:n}=Object(r.a)(),a=Object(o.useMemo)(()=>e&&n,[n,e]),[c,i]=Object(o.useState)(!a),s=Object(o.useCallback)(()=>{n&&e&&i(!c)},[i,c,n,e])
return Object(o.useEffect)(()=>{a&&i(!a)},[a]),{isOpen:c,handleToggle:s}}},m9J7:function(t,e,n){"use strict"
var r=n("JPst"),o=n.n(r),a=n("tASL"),c=o()(function(t){return t[1]})
c.i(a.a,"",!0),c.push([t.i,".tags-root-MbS {\n}\n\n.tags-title-luC {\n}\n\n.tags-list-Dqb {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.tags-item-ss2 {\n  background-color: #fff;\n  font-size: 14px;\n  line-height: 1;\n  border: 1px solid var(--primary500);\n  color: var(--primary500);\n  font-weight: 700;\n  padding: 8px;\n  margin: 0 0.625rem 0.625rem 0;\n  border-radius: 1rem;\n  transition-duration: 384ms;\n  transition-property: background-color, color;\n  transition-timing-function: var(--venia-global-anim-standard);\n}\n\n.tags-item-ss2:hover {\n  background-color: var(--primary500);\n  color: #FFFFFF;\n  border-color: var(--primary500);\n}\n",""]),c.locals={root:"tags-root-MbS "+a.a.locals.widgetRoot,title:"tags-title-luC "+a.a.locals.widgetTitle,list:"tags-list-Dqb",item:"tags-item-ss2"},e.a=c},xDNY:function(t,e,n){"use strict"
n.d(e,"a",function(){return l}),n.d(e,"d",function(){return u}),n.d(e,"c",function(){return d}),n.d(e,"b",function(){return b})
var r=n("lSNA"),o=n.n(r),a=n("STEg"),c=n("7OjP"),i=n("wd/R"),s=n.n(i)
function ownKeys(t,e){var n=Object.keys(t)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t)
e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{}
e%2?ownKeys(Object(n),!0).forEach(function(e){o()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}const l=t=>{const{items:e=[],parentKey:n="parent_id",itemKey:r="category_id"}=t,o=((t,e,n)=>new Map(t&&t.map(t=>[Number(t[e]),_objectSpread(_objectSpread({},t),{},{[e]:Number(t[e]),[n]:t[n]?Number(t[n]):null})])))(e,r,n)
for(const t of o.values()){if(!o.has(t[n]))continue
const e=o.get(t[n])
e.children=[...e.children||[],t]}return[...o.values()].filter(t=>!t[n])},u=function getURL(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"blog",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
return Object(a.a)("".concat(t,"/").concat(e).replace(/\s+/g,""))},d=function getStrippedText(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300
return t&&t.length>e?"".concat(t.replace(/<[^>]+>/g,"").slice(0,e),"..."):t},b=function formatDate(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.c.PASSED).toUpperCase()===c.c.PASSED?s()(t).fromNow():t}}}])
