/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~10.3.0, @magento/venia-sample-payments-checkmo: ^0.0.12, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~13.1.1, @magento/pagebuilder: ~8.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.6.9 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{NdRB:function(e,t,a){"use strict"
var n=a("JPst"),c=a.n(n),o=a("tASL"),s=c()(function(e){return e[1]})
s.i(o.a,"",!0),s.push([e.i,".search-root-ql5 {\n}\n\n.search-title-zSc {\n}\n\n.search-inputRoot-jDI {\n  margin: 0 0 1.25rem 0;\n  width: 100%;\n}\n\n.search-btnRoot-Tts {\n  margin: 0;\n}\n",""]),s.locals={root:"search-root-ql5 "+o.a.locals.widgetRoot,title:"search-title-zSc "+o.a.locals.widgetTitle,inputRoot:"search-inputRoot-jDI",btnRoot:"search-btnRoot-Tts"},t.a=s},QmiG:function(e,t,a){"use strict"
a.d(t,"a",function(){return o})
var n=a("3OKo"),c=a("q1tI")
const o=e=>{const{accordionEnabled:t}=e,{isMobile:a}=Object(n.a)(),o=Object(c.useMemo)(()=>t&&a,[a,t]),[s,r]=Object(c.useState)(!o),i=Object(c.useCallback)(()=>{a&&t&&r(!s)},[r,s,a,t])
return Object(c.useEffect)(()=>{o&&r(!o)},[o]),{isOpen:s,handleToggle:i}}},"RM+C":function(e,t,a){"use strict"
a.r(t),a.d(t,"default",function(){return y})
var n=a("q1tI"),c=a.n(n),o=a("y1Xp"),s=a("oTwF"),r=a("b1jg"),i=a("ACyH"),l=a("wWq3"),u=a("LboF"),b=a.n(u),d=a("NdRB"),h={injectType:"singletonStyleTag",insert:"head",singleton:!0},m=(b()(d.a,h),d.a.locals||{}),p=a("8UhI"),f=a("Ty5D")
const g={search_query:""}
var j=a("17x9"),R=a("bNDk"),E=a("QmiG")
const O=e=>{const{title:t,accordionEnabled:a}=e,u=Object(o.a)(m,e.classes),{inputRef:b,initialValues:d,handleSubmit:h}=(()=>{const e=Object(n.useRef)(),t=Object(f.useHistory)(),{push:a}=t,c=Object(p.n)(),o=Object(n.useCallback)(()=>{c.reset()},[c])
return{handleSubmit:Object(n.useCallback)(e=>{let{search_query:t}=e
null!=t&&t.trim().length>0&&a("/blog/search?query=".concat(t))},[a]),inputRef:e,resetForm:o,initialValues:g}})(),{isOpen:j,handleToggle:O}=Object(E.a)({accordionEnabled:a}),y=c.a.createElement(s.a,{src:l.a,size:18})
return c.a.createElement("div",{className:"".concat(u.root," ").concat(u.gridArea)},c.a.createElement("div",{className:u.title},c.a.createElement(R.a,{action:O},t)),j&&c.a.createElement(p.b,{autoComplete:"off",className:u.form,initialValues:d,onSubmit:h},c.a.createElement("div",{className:u.inputRoot},c.a.createElement(r.a,{classes:u.input,before:y,field:"search_query",forwardedRef:b,placeholder:"Find some..."})),c.a.createElement("div",{className:u.btnRoot},c.a.createElement(i.a,{priority:"high",type:"submit",classes:u.button},"Search"))))}
O.propTypes={accordionEnabled:j.bool},O.defaultProps={title:"Search the blog",accordionEnabled:!1}
var y=O}}])
