/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~10.3.0, @magento/venia-sample-payments-checkmo: ^0.0.12, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~13.1.1, @magento/pagebuilder: ~8.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.6.9 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{"2gSE":function(e,t,n){"use strict"
n.r(t),n.d(t,"default",function(){return I})
var s=n("q1tI"),a=n.n(s),r=n("17x9"),o=n("dDsW"),c=n("Ty5D"),i=n("FITH")
var g=n("y1Xp"),l=n("OWb7"),d=n("qW5X"),u=n("LboF"),p=n.n(u),P=n("Vn9k"),b={injectType:"singletonStyleTag",insert:"head",singleton:!0},h=(p()(P.a,b),P.a.locals||{})
const f=e=>{const t=Object(g.a)(h,e.classes),{signInProps:n}=(e=>{const{createAccountPageUrl:t,forgotPasswordPageUrl:n,signedInRedirectUrl:a}=e,r=Object(c.useHistory)(),[{isSignedIn:o}]=Object(i.b)(),g=Object(s.useMemo)(()=>r&&r.location.state?r.location.state:{},[r]),l=g.from||null
return Object(s.useEffect)(()=>{o&&(l||a)&&r.push(l||a)},[r,o,l,a]),{signInProps:{classes:{modal_active:void 0},showCreateAccount:Object(s.useCallback)(()=>{t&&r.push(t,g)},[t,r,g]),showForgotPassword:Object(s.useCallback)(()=>{n&&r.push(n,g)},[n,r,g])}}})(e),{formatMessage:r}=Object(o.a)()
return a.a.createElement("div",{className:t.root},a.a.createElement(l.b,null,r({id:"signInPage.title",defaultMessage:"Sign In"})),a.a.createElement("div",{className:t.contentContainer},a.a.createElement(d.a,n)))}
f.defaultProps={createAccountPageUrl:"/create-account",forgotPasswordPageUrl:"/forgot-password",signedInRedirectUrl:"/dashboard/main"},f.propTypes={classes:Object(r.shape)({root:r.string,header:r.string,contentContainer:r.string}),createAccountPageUrl:r.string,forgotPasswordPageUrl:r.string,signedInRedirectUrl:r.string}
var I=f},Vn9k:function(e,t,n){"use strict"
var s=n("JPst"),a=n.n(s)()(function(e){return e[1]})
a.push([e.i,".signInPage-header-zqC{\n}\n.signInPage-root-hS5{\n}\n",""]),a.locals={header:"signInPage-header-zqC text-center pt-10",root:"signInPage-root-hS5 px-4"},t.a=a}}])
