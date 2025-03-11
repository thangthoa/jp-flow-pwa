/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~10.3.0, @magento/venia-sample-payments-checkmo: ^0.0.12, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~13.1.1, @magento/pagebuilder: ~8.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.6.9 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{TMDl:function(t,n,e){"use strict"
var r=e("JPst"),i=e.n(r)()(function(t){return t[1]})
i.push([t.i,".buttons-root-ehl {\n    max-width: 100%;\n}\n.buttons-root-ehl > div {\n    display: inline-block;\n    margin-bottom: 0.5rem;\n    max-width: 100%;\n}\n.buttons-root-ehl button[class] {\n    max-width: 100%;\n    overflow: hidden;\n    min-width: var(--buttonMinWidth);\n}\n.buttons-stacked-tbJ {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n}\n.buttons-inline-Aw1 > div {\n    margin-inline-end: 0.5rem;\n}\n",""]),i.locals={root:"buttons-root-ehl",stacked:"buttons-stacked-tbJ",inline:"buttons-inline-Aw1"},n.a=i},fwGW:function(t,n,e){"use strict"
e.r(n),e.d(n,"default",function(){return f})
var r=e("lSNA"),i=e.n(r),o=e("q1tI"),s=e.n(o),a=e("LboF"),d=e.n(a),c=e("TMDl"),l={injectType:"singletonStyleTag",insert:"head",singleton:!0},g=(d()(c.a,l),c.a.locals||{}),p=e("17x9"),b=e("y1Xp")
function ownKeys(t,n){var e=Object.keys(t)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t)
n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,r)}return e}const u=t=>{const n=Object(b.a)(g,t.classes),{appearance:e,isSameWidth:r,textAlign:a,border:d,borderColor:c,borderWidth:l,borderRadius:p,marginTop:u,marginRight:f,marginBottom:m,marginLeft:h,paddingTop:y,paddingRight:w,paddingBottom:O,paddingLeft:j,children:x,cssClasses:v=[]}=t,T=n["".concat(e)],R=Object(o.useRef)(null),[k,P]=s.a.useState(0),S=function _objectSpread(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{}
n%2?ownKeys(Object(e),!0).forEach(function(n){i()(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ownKeys(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}({border:d,borderColor:c,borderWidth:l,borderRadius:p,marginTop:u,marginRight:f,marginBottom:m,marginLeft:h,paddingTop:y,paddingRight:w,paddingBottom:O,paddingLeft:j},{"--buttonMinWidth":k?k+"px":null})
Object(o.useLayoutEffect)(()=>{if(!r)return
const{current:t}=R
let n=0
for(const e of t.querySelectorAll("button")){const{offsetWidth:t}=e
t>n&&(n=t)}P(n)},[r])
const W={left:"flex-start",center:"center",right:"flex-end"}
return S.justifyContent="flex-start",a&&(S.justifyContent=W[a]||"flex-start",S.textAlign=a),s.a.createElement("div",{ref:R,style:S,className:[n.root,T,...v].join(" ")},x)}
u.propTypes={appearance:Object(p.oneOf)(["inline","stacked"]),classes:Object(p.shape)({root:p.string,stacked:p.string,inline:p.string}),isSameWidth:p.bool,textAlign:p.string,border:p.string,borderColor:p.string,borderWidth:p.string,borderRadius:p.string,marginTop:p.string,marginRight:p.string,marginBottom:p.string,marginLeft:p.string,paddingTop:p.string,paddingRight:p.string,paddingBottom:p.string,paddingLeft:p.string,cssClasses:Object(p.arrayOf)(p.string)}
var f=u}}])
