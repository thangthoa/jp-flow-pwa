/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~10.3.0, @magento/venia-sample-payments-checkmo: ^0.0.12, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~13.1.1, @magento/pagebuilder: ~8.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.6.9 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{YQ8e:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",function(){return w})
var r=n("q1tI"),c=n.n(r),a=n("17x9"),o=n("dDsW"),s=n("lSNA"),i=n.n(s),u=n("Ty5D"),l=n("FITH")
function ownKeys(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(n),!0).forEach(function(t){i()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}const p=["email","firstName","lastName"],g=e=>{const{signedInRedirectUrl:t,signInPageUrl:n}=e,c=Object(u.useHistory)(),[{isSignedIn:a}]=Object(l.b)(),{search:o}=Object(u.useLocation)(),s=Object(r.useMemo)(()=>c&&c.location.state?c.location.state:{},[c]),i=s.from||null
Object(r.useEffect)(()=>{a&&(i||t)&&c.push(i||t)},[i,c,a,t])
const g=Object(r.useCallback)(()=>{n&&c.push(n,s)},[c,s,n])
return{createAccountProps:{initialValues:Object(r.useMemo)(()=>(e=>{const t=new URLSearchParams(e)
return p.reduce((e,n)=>_objectSpread(_objectSpread({},e),{},{[n]:t.get(n)}),{})})(o),[o]),isCancelButtonHidden:!1,onCancel:g}}}
var b=n("y1Xp"),d=n("IWdc"),O=n("OWb7"),j=n("LboF"),f=n.n(j),P=n("aXEC"),y={injectType:"singletonStyleTag",insert:"head",singleton:!0},m=(f()(P.a,y),P.a.locals||{})
const h=e=>{const t=Object(b.a)(m,e.classes),{createAccountProps:n}=g(e),{formatMessage:r}=Object(o.a)()
return c.a.createElement("div",{className:t.root},c.a.createElement(O.b,null,r({id:"createAccountPage.title",defaultMessage:"Create an Account"})),c.a.createElement("div",{className:t.contentContainer},c.a.createElement(d.a,n)))}
h.defaultProps={signedInRedirectUrl:"/dashboard/main",signInPageUrl:"/sign-in"},h.propTypes={classes:Object(a.shape)({root:a.string,header:a.string,contentContainer:a.string}),signedInRedirectUrl:a.string,signInPageUrl:a.string}
var w=h},aXEC:function(e,t,n){"use strict"
var r=n("JPst"),c=n.n(r)()(function(e){return e[1]})
c.push([e.i,".createAccountPage-header-p0g{\n}\n.createAccountPage-contentContainer-uQg{\n}\n",""]),c.locals={header:"createAccountPage-header-p0g text-center pt-10",contentContainer:"createAccountPage-contentContainer-uQg px-4"},t.a=c}}])
