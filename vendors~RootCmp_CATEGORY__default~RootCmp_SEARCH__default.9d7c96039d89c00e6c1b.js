/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~10.3.0, @magento/venia-sample-payments-checkmo: ^0.0.12, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~13.1.1, @magento/pagebuilder: ~8.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.6.9 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+wQL":function(e,t,n){"use strict"
n.d(t,"a",function(){return o}),n.d(t,"d",function(){return r}),n.d(t,"e",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"f",function(){return s}),n.d(t,"g",function(){return c}),n.d(t,"b",function(){return d})
const o=",",r=(e,t,n)=>{const r=new URLSearchParams(e)
for(const e of t)r.delete(e)
for(const[e,t]of n)for(const n of t){const{title:t,value:a}=n||{}
r.append("".concat(e,"[filter]"),"".concat(t).concat(o).concat(a))}return"?".concat(r.toString())},a=(e,t,n)=>{const o=new URLSearchParams(e),r=new Set(o.keys()),a=new Map
for(const e of r)if(t.has(e)&&e.endsWith("[filter]")){const t=e.slice(0,-8),r=new Set,i=new Map
for(const e of n.get(t))i.set(e.value,e)
for(const t of o.getAll(e)){const e=i.get(u(t))
e&&r.add(e)}a.set(t,r)}return a},i=e=>{const t=new URLSearchParams(e),n=new Set(t.keys()),o=new Map
for(const e of n)if(e.endsWith("[filter]")){const n=e.slice(0,-8),r=new Set
for(const n of t.getAll(e))r.add(n)
o.set(n,r)}return o},s=e=>e.sort((e,t)=>{if("category_id"===e.attribute_code||"category_uid"===e.attribute_code)return-1
if("category_id"===t.attribute_code||"category_uid"===t.attribute_code)return 1
if(e.position===t.position){if(e.label<t.label)return-1
if(e.label>t.label)return 1}return e.position-t.position}),c=e=>e.replace(/(<([^>]+)>)/gi,""),u=e=>e.split(o).pop(),l={FilterEqualTypeInput:e=>e.size>1?{in:Array.from(e).map(u)}:{eq:u(Array.from(e)[0])},FilterMatchTypeInput:e=>({match:u(Array.from(e)[0])}),FilterRangeTypeInput:e=>{const t=u(Array.from(e)[0]),[n,o]=t.split("_"),r={from:n,to:o}
return"*"===r.from&&delete r.from,"*"===r.to&&delete r.to,r}},d=(e,t)=>{const n=l[t]
if(!n)throw TypeError("Unknown type ".concat(t))
return n(e)}},"09sY":function(e,t,n){"use strict"
n.d(t,"a",function(){return o})
const o={firstPage:{name:"Rewind",buttonLabel:"move to the first page"},prevPage:{name:"ChevronLeft",buttonLabel:"move to the previous page"},nextPage:{name:"ChevronRight",buttonLabel:"move to the next page"},lastPage:{name:"FastForward",buttonLabel:"move to the last page"}}},"4OY2":function(e,t,n){"use strict"
n.d(t,"a",function(){return d})
var o,r=n("+TN3"),a=n("ub7R"),i=n("y1Xp"),s=n("VkAN"),c=n.n(s),u=n("UYTu")
var l={getStoreConfigQuery:Object(u.a)(o||(o=c()(["\n    query GetStoreConfigDataForGalleryAC {\n        # eslint-disable-next-line @graphql-eslint/require-id-when-available\n        storeConfig {\n            store_code\n            product_url_suffix\n            magento_wishlist_general_is_enabled\n            enable_multiple_wishlists\n        }\n    }\n"])))}
const d=function useGallery(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const t=Object(i.a)(l,e.operations)
Object(a.a)()
const{data:n}=Object(r.b)(t.getStoreConfigQuery,{fetchPolicy:"cache-and-network"})
return{storeConfig:n?n.storeConfig:null}}},"9ZIC":function(e,t,n){"use strict"
var o,r=n("q1tI"),a=n.n(r),i=n("dDsW"),s=n("kriW"),c=n("17x9"),u=n("pZLH"),l=n("Ty5D"),d=n("RVCY"),p=n("Cess"),f=n("STEg"),m=n("VkAN"),b=n.n(m),g=n("UYTu"),v=n("juDi")
var h={ADD_ITEM:Object(g.a)(o||(o=b()(["\n    mutation AddItemToCart($cartId: String!, $cartItem: CartItemInput!) {\n        addProductsToCart(cartId: $cartId, cartItems: [$cartItem]) {\n            cart {\n                id\n                ...MiniCartFragment\n            }\n        }\n    }\n    ","\n"])),v.a)}
const y=["VirtualProduct","BundleProduct","GroupedProduct","DownloadableProduct"]
var O=n("Ud0y"),w=n("bBGM"),C=n("oTwF"),_=n("ACyH"),k=n("y1Xp"),j=n("LboF"),x=n.n(j),T=n("aA1f"),I={injectType:"singletonStyleTag",insert:"head",singleton:!0},E=(x()(T.a,I),T.a.locals||{})
const P=e=>{const{item:t,urlSuffix:n}=e,o=(e=>{const{item:t,urlSuffix:n}=e,[,{dispatch:o}]=Object(p.b)(),[a,i]=Object(r.useState)(!1),s="IN_STOCK"===t.stock_status,c=t.__typename,m=y.includes(c),b=a||!s||m,g=Object(l.useHistory)(),[{cartId:v}]=Object(d.b)(),[O]=Object(u.a)(h.ADD_ITEM)
return{handleAddToCart:Object(r.useCallback)(async()=>{try{if("SimpleProduct"===c){i(!0)
const e=1
await O({variables:{cartId:v,cartItem:{quantity:e,entered_options:[{uid:t.uid,value:t.name}],sku:t.sku}}}),o({type:"CART_ADD_ITEM",payload:{cartId:v,sku:t.sku,name:t.name,pricing:{regularPrice:{amount:t.price_range.maximum_price.regular_price}},priceTotal:t.price_range.maximum_price.final_price.value,currencyCode:t.price_range.maximum_price.final_price.currency,discountAmount:t.price_range.maximum_price.discount.amount_off,selectedOptions:null,quantity:e}}),i(!1)}else if("ConfigurableProduct"===c){const e=Object(f.a)("/".concat(t.url_key).concat(n||""))
g.push(e)}}catch(e){}},[c,O,v,t,o,g,n]),isDisabled:b,isInStock:s}})({item:t,urlSuffix:n}),{handleAddToCart:c,isDisabled:m,isInStock:b}=o,{formatMessage:g}=Object(i.a)(),v=Object(k.a)(E,e.classes),j=a.a.createElement(C.a,{classes:{icon:v.icon},src:O.a,attrs:{width:16}}),x=a.a.createElement(C.a,{classes:{icon:v.icon},src:w.a,attrs:{width:16}}),T=a.a.createElement(_.a,{"aria-label":g({id:"addToCartButton.addItemToCartAriaLabel",defaultMessage:"Add to Cart"}),className:v.root,disabled:m,onPress:c,priority:"high",type:"button"},j,a.a.createElement("span",{className:v.text},a.a.createElement(s.a,{id:"addToCartButton.addItemToCart",defaultMessage:"ADD TO CART"}))),I=a.a.createElement(_.a,{"aria-label":g({id:"addToCartButton.itemOutOfStockAriaLabel",defaultMessage:"Out of Stock"}),className:v.root,disabled:m,onPress:c,priority:"high",type:"button"},x,a.a.createElement("span",{className:v.text},a.a.createElement(s.a,{id:"addToCartButton.itemOutOfStock",defaultMessage:"OUT OF STOCK"})))
return b?T:I}
t.a=P
P.propTypes={classes:Object(c.shape)({root:c.string,root_selected:c.string}),item:Object(c.shape)({id:c.number.isRequired,uid:c.string.isRequired,name:c.string.isRequired,small_image:Object(c.shape)({url:c.string}),stock_status:c.string.isRequired,__typename:c.string.isRequired,url_key:c.string.isRequired,url_suffix:c.string,sku:c.string.isRequired,price:Object(c.shape)({regularPrice:Object(c.shape)({amount:Object(c.shape)({value:c.number,currency:c.string})})})}),urlSuffix:c.string}},CYSC:function(e,t,n){"use strict"
n.d(t,"a",function(){return r})
var o=n("q1tI")
const r=e=>{const{currentPage:t,setPage:n,totalPages:r,tileBuffer:a=2}=e,i=Object(o.useCallback)((e,t)=>{let n=e-a
return e<1+a?n=1:e>t-a&&(n=Math.max(t-2*a,1)),n},[a])
return{handleLeftSkip:Object(o.useCallback)(()=>{const e=i(t,r),o=Math.max(1,e-(a+1))
n(o)},[t,i,n,r,a]),handleRightSkip:Object(o.useCallback)(()=>{const e=i(t,r),o=Math.min(r,e+2*a+(a+1))
n(o)},[t,i,n,r,a]),handleNavBack:Object(o.useCallback)(()=>{t>1&&n(t-1)},[t,n]),handleNavForward:Object(o.useCallback)(()=>{t<r&&n(t+1)},[t,n,r]),isActiveLeft:1!==t,isActiveRight:t!==r,tiles:Object(o.useMemo)(()=>{const e=[],n=Math.min(2*a,r-1),o=i(t,r)
for(let t=o;t<=o+n;t++){const n=t
e.push(n)}return e},[t,i,r,a])}}},Cszt:function(e,t,n){"use strict"
n.d(t,"a",function(){return i})
var o=n("q1tI"),r=n("Ty5D"),a=n("IOPv")
const i=function usePagination(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const{namespace:t="",parameter:n="page",initialTotalPages:i=1}=e,s=Object(r.useHistory)(),c=Object(r.useLocation)(),[u,l]=Object(o.useState)(i),d=t?"".concat(t,"_").concat(n):n,p=e.initialPage||1,f=parseInt(Object(a.a)(d,c)),m=Object(o.useCallback)(function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(e=>{let{history:t,location:n,parameter:o,replace:r,value:a}=e
const{search:i}=n,s=new URLSearchParams(i)
s.set(o,a)
const c={search:s.toString()}
r?t.replace(c):t.push(c)})({history:s,location:c,parameter:d,replace:t,value:e})},[s,c,d])
return Object(o.useEffect)(()=>{f||m(p,!0)},[f,p,m]),[{currentPage:f||p,totalPages:u},Object(o.useMemo)(()=>({setCurrentPage:m,setTotalPages:l}),[m,l])]}},Eehu:function(e,t,n){"use strict"
var o=n("q1tI"),r=n.n(o),a=n("17x9"),i=n("CwS1"),s=n("EAKA"),c=n("1bP9"),u=n("rApP"),l=n("y1Xp"),d=n("oTwF"),p=n("mnLP")
const f=(new Map).set("ChevronLeft",i.a).set("ChevronRight",s.a).set("FastForward",c.a).set("Rewind",u.a),m=e=>{const{active:t,buttonLabel:n,name:o,onClick:a}=e,i=f.get(o),s=Object(l.a)(p.a,e.classes),c=t?s.icon:s.icon_disabled
return r.a.createElement("button",{"aria-label":n,className:s.root,disabled:!t,onClick:a},r.a.createElement(d.a,{className:c,size:20,src:i}))}
t.a=m,m.propTypes={classes:Object(a.shape)({icon:a.string,icon_disabled:a.string,root:a.string})},m.defaultProps={buttonLabel:"move to another page"}},JUfl:function(e,t,n){"use strict"
var o=n("q1tI"),r=n.n(o),a=n("JoNN"),i=n("17x9"),s=n("y1Xp"),c=n("oTwF"),u=n("LboF"),l=n.n(u),d=n("bBuO"),p={injectType:"singletonStyleTag",insert:"head",singleton:!0},f=(l()(d.a,p),d.a.locals||{})
const m=e=>{const{active:t,onClick:n,sortItem:i}=e,u=Object(s.a)(f,e.classes),l=Object(o.useCallback)(e=>{0===e.button&&n(i)},[i,n]),d=Object(o.useCallback)(e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),n(i))},[n,i]),p=t?r.a.createElement(c.a,{size:20,src:a.a}):null
return r.a.createElement("button",{className:u.root,onMouseDown:l,onKeyDown:d},r.a.createElement("span",{className:u.content},r.a.createElement("span",{className:u.text},i.text),p))}
m.propTypes={active:i.bool,classes:Object(i.shape)({content:i.string,root:i.string,text:i.string}),onClick:i.func}
t.a=m},Mhql:function(e,t,n){"use strict"
n.d(t,"a",function(){return s})
var o=n("q1tI"),r=n("g4R5")
const a=e=>e instanceof Map?e:new Map,i=Object(r.a)((e,t)=>{const{payload:n,type:o}=t
switch(o){case"clear":return a()
case"add item":{const{group:t,item:o}=n,r=new Map(e),a=new Set(e.get(t))
return a.add(o),r.set(t,a),r}case"remove item":{const{group:t,item:o}=n,r=new Map(e),a=new Set(e.get(t))
return a.delete(o),a.size?r.set(t,a):r.delete(t),r}case"remove group":{const{group:t}=n,o=new Map(e)
return o.delete(t),o}case"toggle item":{const{group:t,item:o}=n,r=new Map(e),a=new Set(e.get(t))
return a.has(o)?a.delete(o):a.add(o),a.size?r.set(t,a):r.delete(t),r}case"set items":return a(n)}}),s=()=>{const[e,t]=Object(o.useReducer)(i,null,a),n=Object(o.useCallback)(e=>{t({payload:e,type:"add item"})},[t]),r=Object(o.useCallback)(e=>{t({payload:e,type:"clear"})},[t]),s=Object(o.useCallback)(e=>{t({payload:e,type:"remove item"})},[t]),c=Object(o.useCallback)(e=>{t({payload:e,type:"remove group"})},[t]),u=Object(o.useCallback)(e=>{t({payload:e,type:"set items"})},[t]),l=Object(o.useCallback)(e=>{t({payload:e,type:"toggle item"})},[t])
return[e,Object(o.useMemo)(()=>({addItem:n,clear:r,dispatch:t,removeItem:s,removeGroup:c,setItems:u,toggleItem:l}),[n,r,t,s,c,u,l])]}},WTIF:function(e,t,n){"use strict"
var o=n("q1tI"),r=n.n(o),a=n("17x9"),i=n("y1Xp"),s=n("Dnu0")
const c=e=>{const{isActive:t,number:n,onClick:a}=e,c=Object(i.a)(s.a,e.classes),u=t?c.root_active:c.root,l=Object(o.useCallback)(()=>a(n),[a,n])
return r.a.createElement("button",{className:u,onClick:l},n)}
c.propTypes={classes:Object(a.shape)({root:a.string,root_active:a.string}),isActive:a.bool,number:a.number,onClick:a.func},t.a=c},Wtwt:function(e,t,n){"use strict"
n.d(t,"a",function(){return u})
var o=n("lSNA"),r=n.n(o),a=n("xqS9"),i=n("Cess"),s=n("q1tI"),c=n("YOuh")
function ownKeys(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(n),!0).forEach(function(t){r()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}const u=function useGalleryItem(){var e,t,n,o,r,u,l,d,p
let f=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const[,{dispatch:m}]=Object(i.b)(),b=Object(c.a)(),{item:g,storeConfig:v}=f,h=null==g?void 0:null===(e=g.price_range)||void 0===e?void 0:null===(t=e.maximum_price)||void 0===t?void 0:null===(n=t.final_price)||void 0===n?void 0:n.value,y=null==g?void 0:null===(o=g.price_range)||void 0===o?void 0:null===(r=o.maximum_price)||void 0===r?void 0:null===(u=r.discount)||void 0===u?void 0:u.amount_off,O=null==g?void 0:null===(l=g.price_range)||void 0===l?void 0:null===(d=l.maximum_price)||void 0===d?void 0:null===(p=d.final_price)||void 0===p?void 0:p.currency,w=Object(s.useCallback)(()=>{m({type:"PRODUCT_CLICK",payload:{name:g.name,sku:g.sku,priceTotal:h,discountAmount:y,currencyCode:O,selectedOptions:null}})},[O,y,m,h,g]),C=Object(s.useRef)(null),_=Object(s.useRef)({dispatched:!1,timeOutId:null})
Object(s.useEffect)(()=>{if(void 0===b||!g||_.current.dispatched)return
const e=C.current,t=new b(n=>{n[0].isIntersecting?_.current.timeOutId=setTimeout(()=>{t.unobserve(e),m({type:"PRODUCT_IMPRESSION",payload:{name:g.name,sku:g.sku,priceTotal:h,discountAmount:y,currencyCode:O,selectedOptions:null}}),_.current.dispatched=!0},500):clearTimeout(_.current.timeOutId)},{threshold:.9})
return t.observe(e),()=>{e&&t.unobserve(e)}},[O,y,m,h,b,g])
const k=g?g.__typename:null,j=Object(a.a)(k),x=v&&"1"===v.magento_wishlist_general_is_enabled?{item:{sku:g.sku,quantity:1},storeConfig:v}:null
return _objectSpread(_objectSpread({},f),{},{itemRef:C,handleLinkClick:w,wishlistButtonProps:x,isSupportedProductType:j})}},"Y5d+":function(e,t,n){"use strict"
var o=n("q1tI"),r=n.n(o),a=n("17x9"),i=n.n(a),s=n("kriW"),c=n("y1Xp"),u=n("AVaw")
const l=e=>{const{currentSort:t}=e,n=Object(c.a)(u.a,e.classes)
return r.a.createElement("div",{className:n.root,"aria-busy":"true"},r.a.createElement(s.a,{id:"searchPage.sortContainer",defaultMessage:"Items sorted by "}),r.a.createElement("span",{className:n.sortText},r.a.createElement(s.a,{id:t.sortId,defaultMessage:t.sortText})))}
t.a=l,l.propTypes={shouldDisplay:i.a.bool,currentSort:i.a.shape({sortId:i.a.string,sortText:i.a.string})}},YOuh:function(e,t,n){"use strict"
n.d(t,"a",function(){return o})
const o=()=>{if("undefined"!=typeof IntersectionObserver)return IntersectionObserver}},aA1f:function(e,t,n){"use strict"
var o=n("JPst"),r=n.n(o),a=n("sARL"),i=r()(function(e){return e[1]})
i.i(a.a,"",!0),i.push([e.i,".addToCartButton-root-3aI {\n    min-height: 2rem;\n    /* composes: md_min-w-0 from global; */\n}\n\n.addToCartButton-icon-Cmu {\n}\n\n.addToCartButton-text-9Kg {\n}\n",""]),i.locals={root:"addToCartButton-root-3aI "+a.a.locals.root_highPriority+" min-w-[6.125rem] -ml-2xs px-2xs py-0 self-center sm_min-w-[8rem]",icon:"addToCartButton-icon-Cmu inline stroke-white xs_hidden",text:"addToCartButton-text-9Kg hidden xs_inline"},t.a=i},bBuO:function(e,t,n){"use strict"
var o=n("JPst"),r=n.n(o)()(function(e){return e[1]})
r.push([e.i,".sortItem-root-F4S {\n}\n\n.sortItem-content-lrY {\n}\n\n.sortItem-text-zdD {\n}\n",""]),r.locals={root:"sortItem-root-F4S flex items-center w-full",content:"sortItem-content-lrY items-center grid grid-cols-[1fr] grid-flow-col gap-3 h-[2.5rem] px-3 py-0 w-full",text:"sortItem-text-zdD text-left whitespace-nowrap"},t.a=r},juDi:function(e,t,n){"use strict"
n.d(t,"a",function(){return u})
var o,r=n("VkAN"),a=n.n(r),i=n("UYTu")
const s=Object(i.a)(o||(o=a()(["\n    fragment ProductListFragment on Cart {\n        id\n        # eslint-disable-next-line @graphql-eslint/require-id-when-available\n        items {\n            uid\n            # eslint-disable-next-line @graphql-eslint/require-id-when-available\n            product {\n                uid\n                name\n                sku\n                url_key\n                thumbnail {\n                    url\n                }\n                stock_status\n                # eslint-disable-next-line @graphql-eslint/require-id-when-available\n                ... on ConfigurableProduct {\n                    variants {\n                        attributes {\n                            uid\n                        }\n                        # eslint-disable-next-line @graphql-eslint/require-id-when-available\n                        product {\n                            uid\n                            thumbnail {\n                                url\n                            }\n                        }\n                    }\n                }\n            }\n            prices {\n                price {\n                    currency\n                    value\n                }\n                total_item_discount {\n                    value\n                }\n            }\n            quantity\n            # eslint-disable-next-line @graphql-eslint/require-id-when-available\n            ... on ConfigurableCartItem {\n                # eslint-disable-next-line @graphql-eslint/require-id-when-available\n                configurable_options {\n                    configurable_product_option_uid\n                    option_label\n                    configurable_product_option_value_uid\n                    value_label\n                }\n            }\n        }\n    }\n"])))
var c
const u=Object(i.a)(c||(c=a()(["\n    fragment MiniCartFragment on Cart {\n        id\n        total_quantity\n        prices {\n            subtotal_excluding_tax {\n                currency\n                value\n            }\n            subtotal_including_tax {\n                currency\n                value\n            }\n        }\n        ...ProductListFragment\n    }\n    ","\n"])),s)},qykw:function(e,t,n){"use strict"
var o,r=n("VkAN"),a=n.n(r),i=n("UYTu")
const s=Object(i.a)(o||(o=a()(['\n    query GetFilterInputsForModal {\n        __type(name: "ProductAttributeFilterInput") {\n            inputFields {\n                name\n                type {\n                    name\n                }\n            }\n        }\n    }\n'])))
t.a={getFilterInputsQuery:s}},xqS9:function(e,t,n){"use strict"
n.d(t,"a",function(){return r})
const o=["SimpleProduct","ConfigurableProduct"],r=e=>o.includes(e)},xwdh:function(e,t,n){"use strict"
var o=n("q1tI"),r=n.n(o),a=n("i8i4"),i=n.n(a)
function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var s="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,c={popupContent:{tooltip:{position:"absolute",zIndex:999},modal:{position:"relative",margin:"auto"}},popupArrow:{height:"8px",width:"16px",position:"absolute",background:"transparent",color:"#FFF",zIndex:-1},overlay:{tooltip:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",zIndex:999},modal:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",display:"flex",zIndex:999}}},u=["top left","top center","top right","right top","right center","right bottom","bottom left","bottom center","bottom right","left top","left center","left bottom"],l=function getCoordinatesForPosition(e,t,n,o,r){var a=r.offsetX,i=r.offsetY,s=o?8:0,c=n.split(" "),u=e.top+e.height/2,l=e.left+e.width/2,d=t.height,p=t.width,f=u-d/2,m=l-p/2,b="",g="0%",v="0%"
switch(c[0]){case"top":f-=d/2+e.height/2+s,b="rotate(180deg)  translateX(50%)",g="100%",v="50%"
break
case"bottom":f+=d/2+e.height/2+s,b="rotate(0deg) translateY(-100%) translateX(-50%)",v="50%"
break
case"left":m-=p/2+e.width/2+s,b=" rotate(90deg)  translateY(50%) translateX(-25%)",v="100%",g="50%"
break
case"right":m+=p/2+e.width/2+s,b="rotate(-90deg)  translateY(-150%) translateX(25%)",g="50%"}switch(c[1]){case"top":f=e.top,g=e.height/2+"px"
break
case"bottom":f=e.top-d+e.height,g=d-e.height/2+"px"
break
case"left":m=e.left,v=e.width/2+"px"
break
case"right":m=e.left-p+e.width,v=p-e.width/2+"px"}return{top:f="top"===c[0]?f-i:f+i,left:m="left"===c[0]?m-a:m+a,transform:b,arrowLeft:v,arrowTop:g}},d=function calculatePosition(e,t,n,o,r,a){var i=r.offsetX,s=r.offsetY,c={arrowLeft:"0%",arrowTop:"0%",left:0,top:0,transform:"rotate(135deg)"},d=0,p=function getTooltipBoundary(e){var t={top:0,left:0,width:window.innerWidth,height:window.innerHeight}
if("string"==typeof e){var n=document.querySelector(e)
null!==n&&(t=n.getBoundingClientRect())}return t}(a),f=Array.isArray(n)?n:[n]
for((a||Array.isArray(n))&&(f=[].concat(f,u));d<f.length;){var m={top:(c=l(e,t,f[d],o,{offsetX:i,offsetY:s})).top,left:c.left,width:t.width,height:t.height}
if(!(m.top<=p.top||m.left<=p.left||m.top+m.height>=p.top+p.height||m.left+m.width>=p.left+p.width))break
d++}return c},p=0,f=Object(o.forwardRef)(function(e,t){var n=e.trigger,a=void 0===n?null:n,u=e.onOpen,l=void 0===u?function(){}:u,f=e.onClose,m=void 0===f?function(){}:f,b=e.defaultOpen,g=void 0!==b&&b,v=e.open,h=void 0===v?void 0:v,y=e.disabled,O=void 0!==y&&y,w=e.nested,C=void 0!==w&&w,_=e.closeOnDocumentClick,k=void 0===_||_,j=e.repositionOnResize,x=void 0===j||j,T=e.closeOnEscape,I=void 0===T||T,E=e.on,P=void 0===E?["click"]:E,S=e.contentStyle,A=void 0===S?{}:S,q=e.arrowStyle,L=void 0===q?{}:q,R=e.overlayStyle,M=void 0===R?{}:R,D=e.className,F=void 0===D?"":D,N=e.position,B=void 0===N?"bottom center":N,Y=e.modal,z=void 0!==Y&&Y,X=e.lockScroll,U=void 0!==X&&X,K=e.arrow,W=void 0===K||K,G=e.offsetX,H=void 0===G?0:G,V=e.offsetY,J=void 0===V?0:V,Q=e.mouseEnterDelay,$=void 0===Q?100:Q,Z=e.mouseLeaveDelay,ee=void 0===Z?100:Z,te=e.keepTooltipInside,ne=void 0!==te&&te,oe=e.children,re=Object(o.useState)(h||g),ae=re[0],ie=re[1],se=Object(o.useRef)(null),ce=Object(o.useRef)(null),ue=Object(o.useRef)(null),le=Object(o.useRef)(null),de=Object(o.useRef)("popup-"+ ++p),pe=!!z||!a,fe=Object(o.useRef)(0)
s(function(){return ae?(le.current=document.activeElement,_e(),Ce(),Oe()):we(),function(){clearTimeout(fe.current)}},[ae]),Object(o.useEffect)(function(){"boolean"==typeof h&&(h?me():be())},[h,O])
var me=function openPopup(e){ae||O||(ie(!0),setTimeout(function(){return l(e)},0))},be=function closePopup(e){var t
ae&&!O&&(ie(!1),pe&&(null===(t=le.current)||void 0===t||t.focus()),setTimeout(function(){return m(e)},0))},ge=function togglePopup(e){null==e||e.stopPropagation(),ae?be(e):me(e)},ve=function onMouseEnter(e){clearTimeout(fe.current),fe.current=setTimeout(function(){return me(e)},$)},he=function onContextMenu(e){null==e||e.preventDefault(),ge()},ye=function onMouseLeave(e){clearTimeout(fe.current),fe.current=setTimeout(function(){return be(e)},ee)},Oe=function lockScrolll(){pe&&U&&(document.getElementsByTagName("body")[0].style.overflow="hidden")},we=function resetScroll(){pe&&U&&(document.getElementsByTagName("body")[0].style.overflow="auto")},Ce=function focusContentOnOpen(){var e,t=null==ce?void 0:null===(e=ce.current)||void 0===e?void 0:e.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),n=Array.prototype.slice.call(t)[0]
null==n||n.focus()}
Object(o.useImperativeHandle)(t,function(){return{open:function open(){me()},close:function close(){be()},toggle:function toggle(){ge()}}})
var _e=function setPosition(){if(!pe&&ae&&(null==se?void 0:se.current)&&(null==se?void 0:se.current)&&(null==ce?void 0:ce.current)){var e,t,n=se.current.getBoundingClientRect(),o=ce.current.getBoundingClientRect(),r=d(n,o,B,W,{offsetX:H,offsetY:J},ne)
if(ce.current.style.top=r.top+window.scrollY+"px",ce.current.style.left=r.left+window.scrollX+"px",W&&ue.current)ue.current.style.transform=r.transform,ue.current.style.setProperty("-ms-transform",r.transform),ue.current.style.setProperty("-webkit-transform",r.transform),ue.current.style.top=(null===(e=L.top)||void 0===e?void 0:e.toString())||r.arrowTop,ue.current.style.left=(null===(t=L.left)||void 0===t?void 0:t.toString())||r.arrowLeft}}
!function useOnEscape(e,t){void 0===t&&(t=!0),Object(o.useEffect)(function(){if(t){var n=function listener(t){"Escape"===t.key&&e(t)}
return document.addEventListener("keyup",n),function(){t&&document.removeEventListener("keyup",n)}}},[e,t])}(be,I),function useTabbing(e,t){void 0===t&&(t=!0),Object(o.useEffect)(function(){if(t){var n=function listener(t){if(9===t.keyCode){var n,o=null==e?void 0:null===(n=e.current)||void 0===n?void 0:n.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),r=Array.prototype.slice.call(o)
if(1===r.length)return void t.preventDefault()
var a=r[0],i=r[r.length-1]
t.shiftKey&&document.activeElement===a?(t.preventDefault(),i.focus()):document.activeElement===i&&(t.preventDefault(),a.focus())}}
return document.addEventListener("keydown",n),function(){t&&document.removeEventListener("keydown",n)}}},[e,t])}(ce,ae&&pe),function useRepositionOnResize(e,t){void 0===t&&(t=!0),Object(o.useEffect)(function(){if(t){var n=function listener(){e()}
return window.addEventListener("resize",n),function(){t&&window.removeEventListener("resize",n)}}},[e,t])}(_e,x),function useOnClickOutside(e,t,n){void 0===n&&(n=!0),Object(o.useEffect)(function(){if(n){var o=function listener(n){var o=Array.isArray(e)?e:[e],r=!1
o.forEach(function(e){e.current&&!e.current.contains(n.target)||(r=!0)}),n.stopPropagation(),r||t(n)}
return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),function(){n&&(document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o))}}},[e,t,n])}(a?[ce,se]:[ce],be,k&&!C)
var ke=function renderContent(){return r.a.createElement("div",Object.assign({},function addWarperAction(){var e=pe?c.popupContent.modal:c.popupContent.tooltip,t={className:"popup-content "+(""!==F?F.split(" ").map(function(e){return e+"-content"}).join(" "):""),style:_extends({},e,A,{pointerEvents:"auto"}),ref:ce,onClick:function onClick(e){e.stopPropagation()}}
return!z&&P.indexOf("hover")>=0&&(t.onMouseEnter=ve,t.onMouseLeave=ye),t}(),{key:"C",role:pe?"dialog":"tooltip",id:de.current}),W&&!pe&&r.a.createElement("div",{ref:ue,style:c.popupArrow},r.a.createElement("svg",{"data-testid":"arrow",className:"popup-arrow "+(""!==F?F.split(" ").map(function(e){return e+"-arrow"}).join(" "):""),viewBox:"0 0 32 16",style:_extends({position:"absolute"},L)},r.a.createElement("path",{d:"M16 0l16 16H0z",fill:"currentcolor"}))),oe&&"function"==typeof oe?oe(be,ae):oe)},je=!(P.indexOf("hover")>=0),xe=pe?c.overlay.modal:c.overlay.tooltip,Te=[je&&r.a.createElement("div",{key:"O","data-testid":"overlay","data-popup":pe?"modal":"tooltip",className:"popup-overlay "+(""!==F?F.split(" ").map(function(e){return e+"-overlay"}).join(" "):""),style:_extends({},xe,M,{pointerEvents:k&&C||pe?"auto":"none"}),onClick:k&&C?be:void 0,tabIndex:-1},pe&&ke()),!pe&&ke()]
return r.a.createElement(r.a.Fragment,null,function renderTrigger(){for(var e={key:"T",ref:se,"aria-describedby":de.current},t=Array.isArray(P)?P:[P],n=0,o=t.length;n<o;n++)switch(t[n]){case"click":e.onClick=ge
break
case"right-click":e.onContextMenu=he
break
case"hover":e.onMouseEnter=ve,e.onMouseLeave=ye
break
case"focus":e.onFocus=ve,e.onBlur=ye}if("function"==typeof a){var i=a(ae)
return!!a&&r.a.cloneElement(i,e)}return!!a&&r.a.cloneElement(a,e)}(),ae&&i.a.createPortal(Te,function getRootPopup(){var e=document.getElementById("popup-root")
return null===e&&((e=document.createElement("div")).setAttribute("id","popup-root"),document.body.appendChild(e)),e}()))})
t.a=f}}])
