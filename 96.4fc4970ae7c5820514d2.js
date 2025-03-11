/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~10.3.0, @magento/venia-sample-payments-checkmo: ^0.0.12, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~13.1.1, @magento/pagebuilder: ~8.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.6.9 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{Rokr:function(e,t,s){"use strict"
var a=s("JPst"),r=s.n(a)()(function(e){return e[1]})
r.push([e.i,".forgotPasswordPage-header-ikU{\n}\n.forgotPasswordPage-root-GMB {\n}\n",""]),r.locals={header:"forgotPasswordPage-header-ikU text-center pt-10",root:"forgotPasswordPage-root-GMB px-4"},t.a=r},pYfH:function(e,t,s){"use strict"
s.r(t),s.d(t,"default",function(){return m})
var a=s("q1tI"),r=s.n(a),o=s("17x9"),n=s("dDsW"),i=s("kriW"),c=s("Ty5D"),g=s("FITH")
var d=s("y1Xp"),l=s("go/1"),u=s("OWb7"),P=s("LboF"),f=s.n(P),p=s("Rokr"),b={injectType:"singletonStyleTag",insert:"head",singleton:!0},w=(f()(p.a,b),p.a.locals||{})
const h=e=>{const t=Object(d.a)(w,e.classes),{forgotPasswordProps:s}=(e=>{const{signedInRedirectUrl:t,signInPageUrl:s}=e,r=Object(c.useHistory)(),[{isSignedIn:o}]=Object(g.b)(),n=Object(a.useMemo)(()=>r&&r.location.state?r.location.state:{},[r])
return Object(a.useEffect)(()=>{o&&t&&r.push(t)},[r,o,t]),{forgotPasswordProps:{onCancel:Object(a.useCallback)(()=>{s&&r.push(s,n)},[r,n,s])}}})(e),{formatMessage:o}=Object(n.a)()
return r.a.createElement("div",{className:t.root},r.a.createElement(u.b,null,o({id:"forgotPasswordPage.title",defaultMessage:"Forgot Your Password?"})),r.a.createElement("h1",{className:t.header},r.a.createElement(i.a,{id:"forgotPasswordPage.header",defaultMessage:"Forgot Your Password?"})),r.a.createElement("div",{className:t.contentContainer},r.a.createElement(l.a,s)))}
h.defaultProps={signedInRedirectUrl:"/dashboard/main",signInPageUrl:"/sign-in"},h.propTypes={classes:Object(o.shape)({root:o.string,header:o.string,contentContainer:o.string}),signedInRedirectUrl:o.string,signInPageUrl:o.string}
var m=h}}])
