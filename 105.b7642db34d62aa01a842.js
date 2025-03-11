/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~10.3.0, @magento/venia-sample-payments-checkmo: ^0.0.12, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~13.1.1, @magento/pagebuilder: ~8.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.6.9 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{ifE7:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",function(){return j})
var n=r("q1tI"),a=r.n(n),c=r("Xn/w"),o=r("Ty5D"),s=r("y1Xp"),i=r("E5AQ"),p=r("OWb7"),l=r("RiMy"),u=r("lSNA"),m=r.n(u),b=r("x2Ii"),O=r("IOPv"),g=r("7OjP")
function ownKeys(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(r),!0).forEach(function(t){m()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}const y=()=>{const{id:e}=Object(o.useParams)(),{pageType:t,categories:r,tags:a,authors:c}=Object(b.b)(),s=Object(o.useLocation)(),i=Object(O.a)("query",s),p=Object(n.useMemo)(()=>({CATEGORY:r,TAG:a,AUTHOR:c}),[r,a,c]),l=Object(n.useMemo)(()=>{const r=p[t]
return e&&r?((e,t)=>{return(Array.isArray(t)?t:[]).find(t=>{let{url_key:r}=t
return r===e})})(e,r):null},[e,t,p]),u=Object(n.useMemo)(()=>{const e=g.f[t]?g.f[t]:""
return t===g.g.SEARCH?"".concat(e," ").concat(i):"".concat(e," ").concat(l?l.name:"")},[t,i,l]),m=l&&l["".concat(t.toLowerCase(),"_id")],y=Object(n.useMemo)(()=>t===g.g.AUTHOR?l.image:null,[t,l])
return _objectSpread(_objectSpread({},l),{},{itemId:m,pageType:t,pageTitle:u,authorImage:y})}
var j=e=>{const{itemId:t,name:r,pageTitle:u,meta_tags:m,meta_title:b,meta_description:O,pageType:j,authorImage:d}=y()
if(!t&&j!==g.g.SEARCH)return a.a.createElement(o.Redirect,{to:"/404.html"})
const f=Object(s.a)(i.a,e.classes)
return a.a.createElement(n.Fragment,null,a.a.createElement(p.c,null,b||r),a.a.createElement(p.a,{name:"description",content:O}),a.a.createElement(p.a,{name:"tags",content:m}),a.a.createElement(p.a,{property:"og:title",content:b||r}),a.a.createElement(p.a,{property:"og:description",content:O}),d&&a.a.createElement(p.a,{property:"og:image",content:d}),a.a.createElement(l.a,{pageTitle:r,classes:{gridArea:f.breadcrumbs}}),a.a.createElement("h1",{className:f.heading},u),a.a.createElement(c.a,{id:t}))}}}])
