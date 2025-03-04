/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~11.6.0, @magento/venia-sample-payments-checkmo: ^0.0.15, @magento/upward-security-headers: ~1.1.17, @magento/pwa-theme-venia: ~2.4.0, @magento/pwa-buildpack: ~11.5.4, @magento/peregrine: ~14.5.1, @magento/pagebuilder: ~9.3.3, @magento/eslint-config: ~1.5.3, @magento/babel-preset-peregrine: ~1.3.3, @apollo/client: ~3.13.1 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{ifE7:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",function(){return j})
var n=r("q1tI"),a=r.n(n),c=r("Xn/w"),o=r("Ty5D"),s=r("y1Xp"),i=r("E5AQ"),p=r("OWb7"),l=r("RiMy"),u=r("lSNA"),b=r.n(u),m=r("x2Ii"),O=r("IOPv"),y=r("7OjP")
function ownKeys(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(r),!0).forEach(function(t){b()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}const g=()=>{const{id:e}=Object(o.useParams)(),{pageType:t,categories:r,tags:a,authors:c}=Object(m.b)(),s=Object(o.useLocation)(),i=Object(O.a)("query",s),p=Object(n.useMemo)(()=>({CATEGORY:r,TAG:a,AUTHOR:c}),[r,a,c]),l=Object(n.useMemo)(()=>{const r=p[t]
return e&&r?((e,t)=>{return(Array.isArray(t)?t:[]).find(t=>{let{url_key:r}=t
return r===e})})(e,r):null},[e,t,p]),u=Object(n.useMemo)(()=>{const e=y.f[t]?y.f[t]:""
return t===y.g.SEARCH?"".concat(e," ").concat(i):"".concat(e," ").concat(l?l.name:"")},[t,i,l]),b=l&&l["".concat(t.toLowerCase(),"_id")]
return _objectSpread(_objectSpread({},l),{},{itemId:b,pageType:t,pageTitle:u})}
var j=e=>{const{itemId:t,name:r,pageTitle:u,meta_tags:b,meta_title:m,meta_description:O,pageType:j}=g()
if(!t&&j!==y.g.SEARCH)return a.a.createElement(o.Redirect,{to:"/404.html"})
const d=Object(s.a)(i.a,e.classes)
return a.a.createElement(n.Fragment,null,a.a.createElement(p.c,null,m||r),a.a.createElement(p.a,{name:"description",content:O}),a.a.createElement(p.a,{name:"tags",content:b}),a.a.createElement(p.a,{property:"og:title",content:m||r}),a.a.createElement(p.a,{property:"og:description",content:O}),a.a.createElement(l.a,{pageTitle:r,classes:{gridArea:d.breadcrumbs}}),a.a.createElement("h1",{className:d.heading},u),a.a.createElement(c.a,{id:t}))}}}])
