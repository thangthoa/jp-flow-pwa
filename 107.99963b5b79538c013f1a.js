/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~10.3.0, @magento/venia-sample-payments-checkmo: ^0.0.12, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~13.1.1, @magento/pagebuilder: ~8.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.6.9 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{KtoQ:function(e,t,a){"use strict"
a.r(t),a.d(t,"default",function(){return m})
var n=a("pVnL"),c=a.n(n),o=a("+TN3"),l=a("y1Xp"),s=a("/HbP"),u=a("q1tI"),r=a.n(u),i=a("+d6F"),h=a("faeX")
const b=r.a.lazy(()=>Promise.all([a.e(0),a.e(5),a.e(8),a.e(15),a.e(35)]).then(a.bind(null,"3YS2"))),d=r.a.lazy(()=>Promise.all([a.e(0),a.e(5),a.e(8),a.e(10),a.e(38)]).then(a.bind(null,"l4aF")))
var m=function CheckoutPage(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const t=Object(l.a)(h.a,e.operations),{getOscEnabledQuery:a}=t,{data:n}=Object(o.b)(a,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),[m,f]=Object(u.useMemo)(()=>[n&&n.storeConfig.amasty_checkout_general_enabled,n&&n.storeConfig.amasty_checkout_options_guest_checkout],[n]),k=Object(u.useMemo)(()=>m?b:d,[m])
return r.a.createElement(i.a,c()({amAllowGuestCheckout:f},e),r.a.createElement(u.Suspense,{fallback:s.a},r.a.createElement(k,{amAllowGuestCheckout:f})))}}}])
