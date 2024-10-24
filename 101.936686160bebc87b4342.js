/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~10.3.0, @magento/venia-sample-payments-checkmo: ^0.0.12, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~13.1.1, @magento/pagebuilder: ~8.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.6.9 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{Zzx0:function(e,n,t){"use strict"
t.r(n),t.d(n,"default",function(){return T}),t.d(n,"DynamicBlockShimmer",function(){return L.a})
var i,r,o,a,l=t("q1tI"),d=t.n(l),s=t("17x9"),c=t("y1Xp"),u=t("pVnL"),p=t.n(u),g=t("lSNA"),y=t.n(g),b=t("+TN3"),v=t("Ty5D"),m=t("RVCY"),f=t("VkAN"),h=t.n(f),_=t("UYTu")
var O={getCmsDynamicBlocksQuery:Object(_.a)(i||(i=h()(["\n    query GetCmsDynamicBlocks(\n        $cartId: String\n        $productId: ID\n        $type: DynamicBlockTypeEnum!\n        $locations: [DynamicBlockLocationEnum]\n        $uids: [ID]!\n    ) {\n        dynamicBlocks(\n            input: {\n                cart_id: $cartId\n                product_uid: $productId\n                dynamic_block_uids: $uids\n                locations: $locations\n                type: $type\n            }\n        ) {\n            items {\n                content {\n                    html\n                }\n                uid\n            }\n            salesRulesData @client\n        }\n    }\n"]))),getSalesRulesDataQuery:Object(_.a)(r||(r=h()(["\n    query SalesRulesDataQuery($cartId: String!) {\n        cart(cart_id: $cartId) {\n            id\n            # eslint-disable-next-line @graphql-eslint/require-id-when-available\n            items {\n                uid\n                # eslint-disable-next-line @graphql-eslint/require-id-when-available\n                product {\n                    uid\n                    ... on PhysicalProductInterface {\n                        weight\n                    }\n                }\n                quantity\n                # eslint-disable-next-line @graphql-eslint/require-id-when-available\n                ... on ConfigurableCartItem {\n                    # eslint-disable-next-line @graphql-eslint/require-id-when-available\n                    configured_variant {\n                        uid\n                        ... on PhysicalProductInterface {\n                            weight\n                        }\n                    }\n                }\n            }\n            prices {\n                subtotal_excluding_tax {\n                    value\n                }\n                subtotal_including_tax {\n                    value\n                }\n            }\n            selected_payment_method {\n                code\n            }\n            shipping_addresses {\n                country {\n                    code\n                }\n                postcode\n                region {\n                    code\n                    region_id\n                }\n                street\n                selected_shipping_method {\n                    method_code\n                }\n            }\n            total_quantity\n        }\n    }\n"]))),getStoreConfigData:Object(_.a)(o||(o=h()(["\n    query getStoreConfigData {\n        # eslint-disable-next-line @graphql-eslint/require-id-when-available\n        storeConfig {\n            store_code\n            product_url_suffix\n        }\n    }\n"]))),getProductDetailQuery:Object(_.a)(a||(a=h()(["\n    query getProductDetailForProductPage($urlKey: String!) {\n        products(filter: { url_key: { eq: $urlKey } }) {\n            # eslint-disable-next-line @graphql-eslint/require-id-when-available\n            items {\n                uid\n                url_key\n            }\n        }\n    }\n"])))}
function ownKeys(e,n){var t=Object.keys(e)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{}
n%2?ownKeys(Object(t),!0).forEach(function(n){y()(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}const j=e=>{var n,t,i,r
const{locations:o,uids:a,type:d}=e,s=Object(c.a)(O,e.operations),{getCmsDynamicBlocksQuery:u,getSalesRulesDataQuery:p,getStoreConfigData:g,getProductDetailQuery:y}=s,[{cartId:f}]=Object(m.b)(),{pathname:h}=Object(v.useLocation)(),{data:_,loading:j}=Object(b.b)(g),D=h.split("/").pop(),w=null==_?void 0:null===(n=_.storeConfig)||void 0===n?void 0:n.product_url_suffix,k=w?D.replace(w,""):D,{data:P,loading:S}=Object(b.b)(y,{skip:!_,variables:{urlKey:k}}),I=null===(i=(null!=P&&null!==(t=P.products)&&void 0!==t&&t.items&&P.products.items.length>0?P.products.items:[]).find(e=>e.url_key===k))||void 0===i?void 0:i.uid,{client:B,loading:E,error:q,data:x,refetch:R}=Object(b.b)(u,{variables:_objectSpread({cartId:f,type:d,locations:o,uids:a},I?{productId:I}:{}),skip:!f}),{loading:C,data:T}=Object(b.b)(p,{variables:{cartId:f},skip:!f}),L=(e=>{var n,t,i,r,o,a,l,d,s,c,u,p,g,y,b,v,m,f,h,_
const O=((null==e?void 0:null===(n=e.cart)||void 0===n?void 0:n.items)||[]).reduce((e,n)=>{const{product:t,quantity:i,configured_variant:r}=n
return e+(r?r.weight:t.weight||0)*i},0),j=(null==e?void 0:null===(t=e.cart)||void 0===t?void 0:t.shipping_addresses)||[],D=(null==e?void 0:null===(i=e.cart)||void 0===i?void 0:null===(r=i.prices)||void 0===r?void 0:null===(o=r.subtotal_excluding_tax)||void 0===o?void 0:o.value)||0,w=(null==e?void 0:null===(a=e.cart)||void 0===a?void 0:null===(l=a.prices)||void 0===l?void 0:null===(d=l.subtotal_including_tax)||void 0===d?void 0:d.value)||0,k=(null==e?void 0:null===(s=e.cart)||void 0===s?void 0:null===(c=s.selected_payment_method)||void 0===c?void 0:c.code)||null,P=(null===(u=j[0])||void 0===u?void 0:null===(p=u.country)||void 0===p?void 0:p.code)||null,S=(null===(g=j[0])||void 0===g?void 0:g.postcode)||null,I=(null===(y=j[0])||void 0===y?void 0:null===(b=y.region)||void 0===b?void 0:b.code)||null,B=(null===(v=j[0])||void 0===v?void 0:null===(m=v.region)||void 0===m?void 0:m.region_id)||null,E=(null===(f=j[0])||void 0===f?void 0:null===(h=f.selected_shipping_method)||void 0===h?void 0:h.method_code)||null,q=(null==e?void 0:null===(_=e.cart)||void 0===_?void 0:_.total_quantity)||0
return JSON.stringify([O,D,w,k,P,S,I,B,E,q])})(T),$=E||C||j||S,A=null==x?void 0:null===(r=x.dynamicBlocks)||void 0===r?void 0:r.salesRulesData,K=Object(l.useCallback)((e,n)=>{B.writeQuery({query:u,data:{dynamicBlocks:_objectSpread(_objectSpread({},e),{},{salesRulesData:n})},variables:_objectSpread({cartId:f,type:d,locations:o,uids:a},I?{productId:I}:{}),skip:!f})},[f,B,u,o,I,d,a])
return Object(l.useEffect)(()=>{x&&A!==L&&(A?R():K(x.dynamicBlocks,L))},[A,L,x,R,K]),{loading:$,error:q,data:x}}
var D=t("WFgo")
var w=t("STDB")
const k=e=>{let{content:n}=e
return d.a.createElement(w.a,{html:n.html})}
k.propTypes={content:Object(s.shape)({html:s.string})}
var P=k
function cmsDynamicBlock_ee_ownKeys(e,n){var t=Object.keys(e)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}function cmsDynamicBlock_ee_objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{}
n%2?cmsDynamicBlock_ee_ownKeys(Object(t),!0).forEach(function(n){y()(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):cmsDynamicBlock_ee_ownKeys(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}const S=e=>{const{displayMode:n}=e,t=(e=>"fixed"===e?"SPECIFIED":"salesrule"===e?"CART_PRICE_RULE_RELATED":"catalogrule"===e?"CATALOG_PRICE_RULE_RELATED":"SPECIFIED")(n),{loading:i,error:r,data:o}=j(cmsDynamicBlock_ee_objectSpread(cmsDynamicBlock_ee_objectSpread({},e),{},{type:t}))
if(!o){if(i)return null
if(r)return d.a.createElement(D.a,{message:r.message})}const{items:a}=(null==o?void 0:o.dynamicBlocks)||{}
return Array.isArray(a)&&a.length?a.map((e,n)=>d.a.createElement(P,p()({key:e.uid,index:n},e))):null}
S.defaultProps={displayMode:"fixed"},S.propTypes={displayMode:Object(s.oneOf)(["fixed","salesrule","catalogrule"]),locations:s.array,uids:Object(s.oneOfType)([s.string,s.array]).isRequired}
var I=S,B=t("LboF"),E=t.n(B),q=t("nBEM"),x={injectType:"singletonStyleTag",insert:"head",singleton:!0},R=(E()(q.a,x),q.a.locals||{})
const C=e=>{const n=Object(c.a)(R,e.classes),{displayInline:t,displayMode:i,uids:r="",textAlign:o,border:a,borderColor:l,borderWidth:s,borderRadius:u,marginTop:p,marginRight:g,marginBottom:y,marginLeft:b,minHeight:v,paddingTop:m,paddingRight:f,paddingBottom:h,paddingLeft:_,cssClasses:O=[]}=e,j={textAlign:o,border:a,borderColor:l,borderWidth:s,borderRadius:u,marginTop:p,marginRight:g,marginBottom:y,marginLeft:b,minHeight:v,paddingTop:m,paddingRight:f,paddingBottom:h,paddingLeft:_},D=t?"span":"div"
return!r||r&&0===r.length?null:d.a.createElement(D,{style:j,className:[n.root,...O].join(" "),"aria-live":"polite","aria-busy":"false"},d.a.createElement(I,{displayMode:i,uids:r}))}
C.propTypes={classes:Object(s.shape)({root:s.string}),displayInline:s.bool,displayMode:Object(s.oneOf)(["fixed","salesrule","catalogrule"]),uids:s.string,textAlign:s.string,border:s.string,borderColor:s.string,borderWidth:s.string,borderRadius:s.string,marginTop:s.string,marginRight:s.string,marginBottom:s.string,marginLeft:s.string,paddingTop:s.string,paddingRight:s.string,paddingBottom:s.string,cssClasses:Object(s.arrayOf)(s.string)}
var T=C,L=t("ZJgh")}}])
