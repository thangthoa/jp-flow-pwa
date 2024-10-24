/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~10.3.0, @magento/venia-sample-payments-checkmo: ^0.0.12, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~13.1.1, @magento/pagebuilder: ~8.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.6.9 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{QmiG:function(e,t,n){"use strict"
n.d(t,"a",function(){return a})
var r=n("3OKo"),o=n("q1tI")
const a=e=>{const{accordionEnabled:t}=e,{isMobile:n}=Object(r.a)(),a=Object(o.useMemo)(()=>t&&n,[n,t]),[c,i]=Object(o.useState)(!a),l=Object(o.useCallback)(()=>{n&&t&&i(!c)},[i,c,n,t])
return Object(o.useEffect)(()=>{a&&i(!a)},[a]),{isOpen:c,handleToggle:l}}},UkRi:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",function(){return w})
var r=n("q1tI"),o=n.n(r),a=n("55Ip"),c=n("17x9"),i=n("y1Xp"),l=n("LboF"),s=n.n(l),u=n("uL15"),b={injectType:"singletonStyleTag",insert:"head",singleton:!0},p=(s()(u.a,b),u.a.locals||{}),g=n("xDNY"),d=n("7OjP")
const m=e=>{const{categories:t}=e,n=Object(r.useMemo)(()=>t?t.sort((e,t)=>e.sort_order-t.sort_order):null,[t])
if(!t||!t.length)return null
const c=Object(i.a)(p,e.classes)
return o.a.createElement("ul",{className:c.tree},n.map(e=>o.a.createElement("li",{key:e.category_id,className:"".concat(c.node," level-").concat(e.level)},o.a.createElement(a.b,{to:Object(g.d)(d.a.CATEGORY,e.url_key),className:c.link},o.a.createElement("span",{className:c.name},e.name),o.a.createElement("span",{className:c.count},"(",e.post_count||0,")")),e.children&&o.a.createElement(m,{categories:e.children}))))}
m.propTypes={categories:c.array},m.defaultProps={categories:[]}
var y=m,f=n("x2Ii"),h=n("QmiG"),O=n("bNDk")
const v=e=>{const{categories:t}=Object(f.b)()||{},{title:n,accordionEnabled:a}=e,c=Object(i.a)(p,e.classes),l=Object(r.useMemo)(()=>Array.isArray(t)&&t.length?Object(g.a)({items:t}):null,[t]),{isOpen:s,handleToggle:u}=Object(h.a)({accordionEnabled:a})
return o.a.createElement("div",{className:"".concat(c.root," ").concat(c.gridArea)},o.a.createElement("div",{className:c.title},o.a.createElement(O.a,{action:u},n)),s&&o.a.createElement(y,{categories:l,classes:c}))}
v.propTypes={categories:c.array,title:c.string,accordionEnabled:c.bool},v.defaultProps={categories:[],title:"Categories",accordionEnabled:!1}
var w=v},YBqm:function(e,t,n){"use strict"
var r=n("JPst"),o=n.n(r)()(function(e){return e[1]})
o.push([e.i,'.textIconButton-buttonOutline-SJB {\n}\n.textIconButton-buttonNormal-rW8 {\n  /* height: fit-content; */\n}\n.textIconButton-buttonOutline-SJB[aria-disabled="true"] {\n  pointer-events: none;\n  --tw-border-opacity: 1;\n  border-color: rgba(152, 162, 179, var(--tw-border-opacity));\n  --tw-text-opacity: 1;\n  color: rgba(152, 162, 179, var(--tw-text-opacity));\n}\n.textIconButton-buttonNormal-rW8[aria-disabled="true"] {\n  pointer-events: none;\n  --tw-border-opacity: 1;\n  border-color: rgba(152, 162, 179, var(--tw-border-opacity));\n  --tw-text-opacity: 1;\n  color: rgba(152, 162, 179, var(--tw-text-opacity));\n}\n.textIconButton-buttonNormal-rW8:hover::before {\n  content:" ";\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background: var(--primary700);\n  bottom: 0;\n}\n',""]),o.locals={buttonOutline:"textIconButton-buttonOutline-SJB bg-white cursor-pointer group flex items-center justify-center gap-[6px] text-primary500 text-base bg-white font-bold font-nunito w-fit min-h-[34px] px-4 py-1 rounded-30 leading-none border border-solid border-primary500 hover_text-white hover_border-primary500 hover_bg-primary500",buttonNormal:"textIconButton-buttonNormal-rW8 relative group flex items-center justify-center gap-2 text-primary500 text-base font-bold font-nunito w-fit leading-none cursor-pointer hover_text-primary600 hover_border-primary600"},t.a=o},uL15:function(e,t,n){"use strict"
var r=n("JPst"),o=n.n(r),a=n("tASL"),c=n("YBqm"),i=o()(function(e){return e[1]})
i.i(a.a,"",!0),i.i(c.a,"",!0),i.push([e.i,".categoryTree-root-yWE {\n}\n\n.categoryTree-title-xWG {\n}\n\n.categoryTree-tree-bHq {\n  font-size: 1rem;\n  line-height: 1.375rem;\n}\n\n.categoryTree-tree-bHq .categoryTree-tree-bHq {\n  margin-left: 1.25rem;\n  color: rgb(var(--venia-global-color-text-alt));\n}\n\n.categoryTree-link-iFk {\n    font-weight: 400 !important;\n    gap: 0;\n}\n\n.categoryTree-count-Eun {\n  margin-left: 0.25rem;\n}\n\n.categoryTree-tree-bHq li {\n    margin-top: 4px;\n}\n",""]),i.locals={root:"categoryTree-root-yWE "+a.a.locals.widgetRoot,title:"categoryTree-title-xWG "+a.a.locals.widgetTitle,tree:"categoryTree-tree-bHq",link:"categoryTree-link-iFk "+c.a.locals.buttonNormal,count:"categoryTree-count-Eun"},t.a=i},xDNY:function(e,t,n){"use strict"
n.d(t,"a",function(){return s}),n.d(t,"d",function(){return u}),n.d(t,"c",function(){return b}),n.d(t,"b",function(){return p})
var r=n("lSNA"),o=n.n(r),a=n("STEg"),c=n("7OjP"),i=n("wd/R"),l=n.n(i)
function ownKeys(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(n),!0).forEach(function(t){o()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}const s=e=>{const{items:t=[],parentKey:n="parent_id",itemKey:r="category_id"}=e,o=((e,t,n)=>new Map(e&&e.map(e=>[Number(e[t]),_objectSpread(_objectSpread({},e),{},{[t]:Number(e[t]),[n]:e[n]?Number(e[n]):null})])))(t,r,n)
for(const e of o.values()){if(!o.has(e[n]))continue
const t=o.get(e[n])
t.children=[...t.children||[],e]}return[...o.values()].filter(e=>!e[n])},u=function getURL(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"blog",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
return Object(a.a)("".concat(e,"/").concat(t).replace(/\s+/g,""))},b=function getStrippedText(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300
return e&&e.length>t?"".concat(e.replace(/<[^>]+>/g,"").slice(0,t),"..."):e},p=function formatDate(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.c.PASSED).toUpperCase()===c.c.PASSED?l()(e).fromNow():e}}}])
