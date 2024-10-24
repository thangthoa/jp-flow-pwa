/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~10.3.0, @magento/venia-sample-payments-checkmo: ^0.0.12, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~13.1.1, @magento/pagebuilder: ~8.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.6.9 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"Hs+E":function(n,t,e){"use strict"
var o=e("q1tI"),s=e.n(o),c=e("y1Xp"),a=e("LboF"),r=e.n(a),i=e("uNKN"),l={injectType:"singletonStyleTag",insert:"head",singleton:!0},p=(r()(i.a,l),i.a.locals||{})
const u=n=>({__html:n})
t.a=(n=>{const{content:t}=n,e=Object(c.a)(p,n.classes)
return s.a.createElement("div",{className:e.root,dangerouslySetInnerHTML:u(t)})})},rVfh:function(n,t,e){"use strict"
e.r(t)
var o=e("q1tI"),s=e.n(o),c=e("17x9"),a=e("q5du"),r=e("Hs+E")
const i=n=>{const{closeModal:t,isOpen:e,activeItem:o}=n,{content:c,name:i}=o||{}
return s.a.createElement(a.a,{isOpen:e,onCancel:t,shouldUnmountOnHide:!0,title:i,shouldShowButtons:!1},s.a.createElement(r.a,{content:c}))}
i.propTypes={closeModal:c.func,isOpen:c.bool,activeItem:Object(c.shape)({content:c.string,name:c.string})},t.default=i},uNKN:function(n,t,e){"use strict"
var o=e("JPst"),s=e.n(o)()(function(n){return n[1]})
s.push([n.i,".richText-root-ZAl {\n}\n\n/* TODO @TW: cannot compose */\n.richText-root-ZAl p {\n    margin: 0 0 1rem;\n}\n\n/* TODO @TW: cannot compose */\n.richText-root-ZAl ul {\n    /* composes: list-disc from global; */\n    list-style-type: disc;\n    margin: 0 0 1rem;\n    padding-left: 2.5rem;\n}\n",""]),s.locals={root:"richText-root-ZAl leading-tight px-2xs py-0 text-sm"},t.a=s}}])
