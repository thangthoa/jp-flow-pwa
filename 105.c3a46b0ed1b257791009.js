/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~10.3.0, @magento/venia-sample-payments-checkmo: ^0.0.12, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~13.1.1, @magento/pagebuilder: ~8.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.6.9 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{ifE7:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",function(){return g})
var n=r("q1tI"),a=r.n(n),c=r("Xn/w"),o=r("Ty5D"),s=r("y1Xp"),i=r("E5AQ"),u=r("OWb7"),p=r("RiMy"),l=r("lSNA"),b=r.n(l),O=r("x2Ii"),m=r("IOPv"),y=r("7OjP")
function ownKeys(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(r),!0).forEach(function(t){b()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}const j=()=>{const{id:e}=Object(o.useParams)(),{pageType:t,categories:r,tags:a,authors:c}=Object(O.b)(),s=Object(o.useLocation)(),i=Object(m.a)("query",s),u=Object(n.useMemo)(()=>({CATEGORY:r,TAG:a,AUTHOR:c}),[r,a,c]),p=Object(n.useMemo)(()=>{const r=u[t]
return e&&r?((e,t)=>{return(Array.isArray(t)?t:[]).find(t=>{let{url_key:r}=t
return r===e})})(e,r):null},[e,t,u]),l=Object(n.useMemo)(()=>{const e=y.f[t]?y.f[t]:""
return t===y.g.SEARCH?"".concat(e," ").concat(i):"".concat(e," ").concat(p?p.name:"")},[t,i,p]),b=p&&p["".concat(t.toLowerCase(),"_id")]
return _objectSpread(_objectSpread({},p),{},{itemId:b,pageType:t,pageTitle:l})}
var g=e=>{const{itemId:t,name:r,pageTitle:l,meta_tags:b,meta_title:O,meta_description:m,pageType:g}=j()
if(!t&&g!==y.g.SEARCH)return a.a.createElement(o.Redirect,{to:"/404.html"})
const d=Object(s.a)(i.a,e.classes)
return a.a.createElement(n.Fragment,null,a.a.createElement(u.c,null,O||r),a.a.createElement(u.a,{name:"description",content:m}),a.a.createElement(u.a,{name:"tags",content:b}),a.a.createElement(p.a,{pageTitle:r,classes:{gridArea:d.breadcrumbs}}),a.a.createElement("h1",{className:d.heading},l),a.a.createElement(c.a,{id:t}))}}}])
