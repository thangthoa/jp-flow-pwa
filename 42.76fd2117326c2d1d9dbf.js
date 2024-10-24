/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~10.3.0, @magento/venia-sample-payments-checkmo: ^0.0.12, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~13.1.1, @magento/pagebuilder: ~8.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.6.9 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"09sY":function(e,t,n){"use strict"
n.d(t,"a",function(){return o})
const o={firstPage:{name:"Rewind",buttonLabel:"move to the first page"},prevPage:{name:"ChevronLeft",buttonLabel:"move to the previous page"},nextPage:{name:"ChevronRight",buttonLabel:"move to the next page"},lastPage:{name:"FastForward",buttonLabel:"move to the last page"}}},"2eki":function(e,t,n){"use strict"
var o=n("JPst"),a=n.n(o)()(function(e){return e[1]})
a.push([e.i,".productOptions-options-GDt {\n    grid-area: options;\n}\n\n.productOptions-optionLabel-Pyh {\n}\n\n.productOptions-optionValue-guf {\n}\n",""]),a.locals={options:"productOptions-options-GDt leading-normal max-h-[54px] mt-1 overflow-y-auto text-sm",optionLabel:"productOptions-optionLabel-Pyh auto-cols-max grid grid-flow-col",optionValue:"productOptions-optionValue-guf ml-1"},t.a=a},"6sOD":function(e,t,n){"use strict"
var o=n("6G6o"),a=n("q1tI"),r=n.n(a),i=n("17x9"),s=n("kriW"),c=n("y1Xp"),l=n("LboF"),u=n.n(l),d=n("kM44"),p={injectType:"singletonStyleTag",insert:"head",singleton:!0},g=(u()(d.a,p),d.a.locals||{})
const f=e=>{const{data:t,classes:n}=e,i=Object(c.a)(g,n)
let l
if(t){const{city:e,country_code:n,firstname:o,lastname:s,postcode:c,region:u,street:d}=t,p="".concat(e,", ").concat(u," ").concat(c," ").concat(n),g="".concat(o," ").concat(s),f=d.map((e,t)=>r.a.createElement("span",{className:i.streetRow,key:t},e))
l=r.a.createElement(a.Fragment,null,r.a.createElement("span",{className:i.name},g),f,r.a.createElement("div",{className:i.additionalAddress},p))}else l=r.a.createElement(s.a,{id:"orderDetails.noShippingInformation",defaultMessage:"No shipping information"})
return r.a.createElement("div",{className:i.root},r.a.createElement("div",{className:i.heading},r.a.createElement(s.a,{id:"orderDetails.shippingInformationLabel",defaultMessage:"Shipping Information"})),l,r.a.createElement(o.a,{data:t}))}
t.a=f
f.propTypes={classes:Object(i.shape)({root:i.string,heading:i.string,name:i.string,streetRow:i.string,additionalAddress:i.string}),data:Object(i.shape)({city:i.string,country_code:i.string,firstname:i.string,lastname:i.string,postcode:i.string,region:i.string,street:Object(i.arrayOf)(i.string),telephone:i.string})}},CYSC:function(e,t,n){"use strict"
n.d(t,"a",function(){return a})
var o=n("q1tI")
const a=e=>{const{currentPage:t,setPage:n,totalPages:a,tileBuffer:r=2}=e,i=Object(o.useCallback)((e,t)=>{let n=e-r
return e<1+r?n=1:e>t-r&&(n=Math.max(t-2*r,1)),n},[r])
return{handleLeftSkip:Object(o.useCallback)(()=>{const e=i(t,a),o=Math.max(1,e-(r+1))
n(o)},[t,i,n,a,r]),handleRightSkip:Object(o.useCallback)(()=>{const e=i(t,a),o=Math.min(a,e+2*r+(r+1))
n(o)},[t,i,n,a,r]),handleNavBack:Object(o.useCallback)(()=>{t>1&&n(t-1)},[t,n]),handleNavForward:Object(o.useCallback)(()=>{t<a&&n(t+1)},[t,n,a]),isActiveLeft:1!==t,isActiveRight:t!==a,tiles:Object(o.useMemo)(()=>{const e=[],n=Math.min(2*r,a-1),o=i(t,a)
for(let t=o;t<=o+n;t++){const n=t
e.push(n)}return e},[t,i,a,r])}}},Cszt:function(e,t,n){"use strict"
n.d(t,"a",function(){return i})
var o=n("q1tI"),a=n("Ty5D"),r=n("IOPv")
const i=function usePagination(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const{namespace:t="",parameter:n="page",initialTotalPages:i=1}=e,s=Object(a.useHistory)(),c=Object(a.useLocation)(),[l,u]=Object(o.useState)(i),d=t?"".concat(t,"_").concat(n):n,p=e.initialPage||1,g=parseInt(Object(r.a)(d,c)),f=Object(o.useCallback)(function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(e=>{let{history:t,location:n,parameter:o,replace:a,value:r}=e
const{search:i}=n,s=new URLSearchParams(i)
s.set(o,r)
const c={search:s.toString()}
a?t.replace(c):t.push(c)})({history:s,location:c,parameter:d,replace:t,value:e})},[s,c,d])
return Object(o.useEffect)(()=>{g||f(p,!0)},[g,p,f]),[{currentPage:g||p,totalPages:l},Object(o.useMemo)(()=>({setCurrentPage:f,setTotalPages:u}),[f,u])]}},Eehu:function(e,t,n){"use strict"
var o=n("q1tI"),a=n.n(o),r=n("17x9"),i=n("CwS1"),s=n("EAKA"),c=n("1bP9"),l=n("rApP"),u=n("y1Xp"),d=n("oTwF"),p=n("mnLP")
const g=(new Map).set("ChevronLeft",i.a).set("ChevronRight",s.a).set("FastForward",c.a).set("Rewind",l.a),f=e=>{const{active:t,buttonLabel:n,name:o,onClick:r}=e,i=g.get(o),s=Object(u.a)(p.a,e.classes),c=t?s.icon:s.icon_disabled
return a.a.createElement("button",{"aria-label":n,className:s.root,disabled:!t,onClick:r},a.a.createElement(d.a,{className:c,size:20,src:i}))}
t.a=f,f.propTypes={classes:Object(r.shape)({icon:r.string,icon_disabled:r.string,root:r.string})},f.defaultProps={buttonLabel:"move to another page"}},FhHe:function(e,t,n){"use strict"
var o=n("q1tI"),a=n.n(o),r=n("17x9"),i=n("kriW"),s=n("y1Xp"),c=n("LboF"),l=n.n(c),u=n("o+dM"),d={injectType:"singletonStyleTag",insert:"head",singleton:!0},p=(l()(u.a,d),u.a.locals||{})
const g=e=>{const{data:t,classes:n}=e,{shipments:o,shippingMethod:r}=t,c=Object(s.a)(p,n)
let l
return l=o.length?o.map(e=>{const{tracking:t}=e
if(t.length)return t.map(e=>{const{number:t}=e
return a.a.createElement("span",{className:c.trackingRow,key:t},a.a.createElement(i.a,{id:"orderDetails.trackingInformation",defaultMessage:"<strong>Tracking number:</strong> {number}",values:{number:t,strong:e=>a.a.createElement("strong",null,e)}}))})}):a.a.createElement(i.a,{id:"orderDetails.waitingOnTracking",defaultMessage:"Waiting for tracking information"}),a.a.createElement("div",{className:c.root},a.a.createElement("div",{className:c.heading},a.a.createElement(i.a,{id:"orderDetails.shippingMethodLabel",defaultMessage:"Shipping Method"})),a.a.createElement("div",{className:c.method},r),a.a.createElement("div",{className:c.tracking},l))}
t.a=g
g.propTypes={classes:Object(r.shape)({root:r.string,heading:r.string,method:r.string,tracking:r.string,trackingRow:r.string}),data:Object(r.shape)({shippingMethod:r.string,shipments:Object(r.arrayOf)(Object(r.shape)({id:r.string,tracking:Object(r.arrayOf)(Object(r.shape)({number:r.string}))}))})}},LlPe:function(e,t,n){"use strict"
n.d(t,"a",function(){return g})
var o,a,r=n("q1tI"),i=n("+TN3"),s=n("y1Xp"),c=n("VkAN"),l=n.n(c),u=n("UYTu")
const d=Object(u.a)(o||(o=l()(["\n    query getConfigurableThumbnailSource {\n        # eslint-disable-next-line @graphql-eslint/require-id-when-available\n        storeConfig {\n            store_code\n            configurable_thumbnail_source\n        }\n    }\n"])))
var p={getProductThumbnailsQuery:Object(u.a)(a||(a=l()(["\n    query GetProductThumbnailsByURLKey($urlKeys: [String!]!) {\n        products(filter: { url_key: { in: $urlKeys } }) {\n            # eslint-disable-next-line @graphql-eslint/require-id-when-available\n            items {\n                uid\n                sku\n                name\n                thumbnail {\n                    label\n                    url\n                }\n                url_key\n                # eslint-disable-next-line @graphql-eslint/require-id-when-available\n                ... on ConfigurableProduct {\n                    variants {\n                        # eslint-disable-next-line @graphql-eslint/require-id-when-available\n                        product {\n                            sku\n                            uid\n                            name\n                            thumbnail {\n                                label\n                                url\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"]))),getConfigurableThumbnailSource:d}
const g=e=>{const{items:t}=e,n=Object(s.a)(p,e.operations),{getProductThumbnailsQuery:o,getConfigurableThumbnailSource:a}=n,c=Object(r.useMemo)(()=>t.map(e=>e.product_url_key).sort(),[t]),{data:l,loading:u}=Object(i.b)(o,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first",variables:{urlKeys:c}}),{data:d}=Object(i.b)(a,{fetchPolicy:"cache-and-network"}),g=Object(r.useMemo)(()=>{if(d)return d.storeConfig.configurable_thumbnail_source},[d]),f=Object(r.useMemo)(()=>{if(l){const e={}
return t.forEach(t=>{const n=l.products.items.find(e=>t.product_url_key===e.url_key)
if("itself"===g&&n.variants&&n.variants.length>0){const o=n.variants.find(e=>e.product.sku===t.product_sku)
e[t.product_sku]=o.product}else e[t.product_sku]=n}),e}return{}},[l,t,g]),[m,h]=Object(r.useState)(!1)
return{loading:u,imagesData:f,isOpen:m,handleContentToggle:Object(r.useCallback)(()=>{h(e=>!e)},[])}}},W9hr:function(e,t,n){"use strict"
var o=n("JPst"),a=n.n(o)()(function(e){return e[1]})
a.push([e.i,".billingInformation-root-4X5 {\n}\n\n.billingInformation-heading-Nk0 {\n}\n",""]),a.locals={root:"billingInformation-root-4X5 grid gap-y-1.5",heading:"billingInformation-heading-Nk0 font-bold pb-1.5"},t.a=a},WTIF:function(e,t,n){"use strict"
var o=n("q1tI"),a=n.n(o),r=n("17x9"),i=n("y1Xp"),s=n("Dnu0")
const c=e=>{const{isActive:t,number:n,onClick:r}=e,c=Object(i.a)(s.a,e.classes),l=t?c.root_active:c.root,u=Object(o.useCallback)(()=>r(n),[r,n])
return a.a.createElement("button",{className:l,onClick:u},n)}
c.propTypes={classes:Object(r.shape)({root:r.string,root_active:r.string}),isActive:r.bool,number:r.number,onClick:r.func},t.a=c},WeCF:function(e,t,n){"use strict"
var o=n("JPst"),a=n.n(o)()(function(e){return e[1]})
a.push([e.i,".collapsedImageGallery-root-WGa {\n    grid-template-columns: repeat(5, 1fr);\n}\n\n.collapsedImageGallery-remainderCount-4Sj {\n}\n",""]),a.locals={root:"collapsedImageGallery-root-WGa gap-x-1 grid h-full items-center justify-items-center px-1 py-0",remainderCount:"collapsedImageGallery-remainderCount-4Sj justify-self-center text-sm text-subtle"},t.a=a},ZKBY:function(e,t,n){"use strict"
var o=n("q1tI"),a=n.n(o),r=n("17x9"),i=n("dDsW"),s=n("cvoN")
const c=e=>{const{locale:t}=Object(i.a)(),{value:n,currencyCode:r,classes:c}=e,l=s.a.toParts.call(new Intl.NumberFormat(t,{style:"currency",currency:r}),n).map((e,t)=>{const n=c[e.type],o="".concat(t,"-").concat(e.value)
return a.a.createElement("span",{key:o,className:n},e.value)})
return a.a.createElement(o.Fragment,null,l)}
c.propTypes={classes:Object(r.shape)({currency:r.string,integer:r.string,decimal:r.string,fraction:r.string}),value:r.number.isRequired,currencyCode:r.string.isRequired},c.defaultProps={classes:{}},t.a=c},ckkQ:function(e,t,n){"use strict"
var o=n("LboF"),a=n.n(o),r=n("WeCF"),i={injectType:"singletonStyleTag",insert:"head",singleton:!0}
a()(r.a,i)
t.a=r.a.locals||{}},clek:function(e,t,n){"use strict"
var o=n("JPst"),a=n.n(o)()(function(e){return e[1]})
a.push([e.i,".items-root-GYu {\n}\n\n.items-heading-eU9 {\n}\n\n.items-itemsContainer-Mm3 {\n}\n",""]),a.locals={root:"items-root-GYu pr-0 lg_grid lg_pr-sm",heading:"items-heading-eU9 font-bold pb-3",itemsContainer:"items-itemsContainer-Mm3 grid gap-y-md"},t.a=a},hOVl:function(e,t,n){"use strict"
var o=n("LboF"),a=n.n(o),r=n("clek"),i={injectType:"singletonStyleTag",insert:"head",singleton:!0}
a()(r.a,i)
t.a=r.a.locals||{}},hngP:function(e,t,n){"use strict"
var o=n("6G6o"),a=n("q1tI"),r=n.n(a),i=n("17x9"),s=n("kriW"),c=n("y1Xp"),l=n("LboF"),u=n.n(l),d=n("W9hr"),p={injectType:"singletonStyleTag",insert:"head",singleton:!0},g=(u()(d.a,p),d.a.locals||{})
const f=e=>{const{data:t,classes:n}=e,{city:a,country_code:i,firstname:l,lastname:u,postcode:d,region:p,street:f}=t,m=Object(c.a)(g,n),h="".concat(a,", ").concat(p," ").concat(d," ").concat(i),b="".concat(l," ").concat(u),v=f.map((e,t)=>r.a.createElement("span",{className:m.streetRow,key:t},e))
return r.a.createElement("div",{className:m.root},r.a.createElement("div",{className:m.heading},r.a.createElement(s.a,{id:"orderDetails.billingInformationLabel",defaultMessage:"Billing Information"})),r.a.createElement("span",{className:m.name},b),v,r.a.createElement("div",{className:m.additionalAddress},h),r.a.createElement(o.a,{data:t}))}
t.a=f
f.propTypes={classes:Object(i.shape)({root:i.string,heading:i.string,name:i.string,streetRow:i.string,additionalAddress:i.string}),data:Object(i.shape)({city:i.string,country_code:i.string,firstname:i.string,lastname:i.string,postcode:i.string,region:i.string,street:Object(i.arrayOf)(i.string)})}},kM44:function(e,t,n){"use strict"
var o=n("JPst"),a=n.n(o)()(function(e){return e[1]})
a.push([e.i,".shippingInformation-root-VCq {\n}\n\n.shippingInformation-heading-oox {\n}\n",""]),a.locals={root:"shippingInformation-root-VCq grid gap-y-1.5",heading:"shippingInformation-heading-oox font-bold pb-1.5"},t.a=a},kXdO:function(e,t,n){"use strict"
var o=n("q1tI"),a=n.n(o),r=n("17x9"),i=n("cvoN"),s=n("dDsW")
const c=e=>{const{locale:t}=Object(s.a)(),{value:n,currencyCode:r,classes:c}=e,l=i.a.toParts.call(new Intl.NumberFormat(t,{style:"currency",currency:r}),n).map((e,t)=>{const n=c[e.type],o="".concat(t,"-").concat(e.value)
return a.a.createElement("span",{key:o,className:n},e.value)})
return a.a.createElement(o.Fragment,null,l)}
c.propTypes={classes:Object(r.shape)({currency:r.string,integer:r.string,decimal:r.string,fraction:r.string}),value:r.number.isRequired,currencyCode:r.string.isRequired},c.defaultProps={classes:{}},t.a=c},"o+dM":function(e,t,n){"use strict"
var o=n("JPst"),a=n.n(o)()(function(e){return e[1]})
a.push([e.i,".shippingMethod-root-MvW {\n}\n\n.shippingMethod-heading-zIk {\n}\n\n/* TODO @TW: cannot compose */\n.shippingMethod-method-sKg:empty {\n    display: none;\n}\n\n.shippingMethod-tracking-Z0- {\n}\n",""]),a.locals={root:"shippingMethod-root-MvW grid gap-y-1.5",heading:"shippingMethod-heading-zIk font-bold pb-1.5",method:"shippingMethod-method-sKg",tracking:"shippingMethod-tracking-Z0- grid gap-y-1.5"},t.a=a},pNCU:function(e,t,n){"use strict"
var o=n("q1tI"),a=n.n(o),r=n("17x9"),i=n("y1Xp"),s=n("LboF"),c=n.n(s),l=n("2eki"),u={injectType:"singletonStyleTag",insert:"head",singleton:!0},d=(c()(l.a,u),l.a.locals||{})
const p=e=>{const{options:t=[]}=e,n=Object(i.a)(d,e.classes),r=Object(o.useMemo)(()=>t.map(e=>{let{option_label:t,value_label:o}=e
const r="".concat(t).concat(o),i="".concat(t," :")
return a.a.createElement("div",{key:r,className:n.optionLabel},a.a.createElement("dt",{className:n.optionName},i),a.a.createElement("dd",{className:n.optionValue},o))}),[n,t])
return 0===r.length?null:a.a.createElement("dl",{className:n.options},r)}
p.propTypes={options:Object(r.arrayOf)(Object(r.shape)({label:r.string,value:r.string}))}
t.a=p},rLB0:function(e,t,n){"use strict"
var o=n("q1tI"),a=n.n(o),r=n("17x9"),i=n("kriW"),s=n("y1Xp"),c=n("LboF"),l=n.n(c),u=n("sn6/"),d={injectType:"singletonStyleTag",insert:"head",singleton:!0},p=(l()(u.a,d),u.a.locals||{})
const g=e=>{const{data:t,classes:n}=e,o=Object(s.a)(p,n),[{name:r}]=t
return a.a.createElement("div",{className:o.root},a.a.createElement("div",{className:o.heading},a.a.createElement(i.a,{id:"orderDetails.paymentMethodLabel",defaultMessage:"Payment Method"})),a.a.createElement("div",{className:o.payment_type},r))}
t.a=g
g.propTypes={classes:Object(r.shape)({root:r.string,heading:r.string,payment_type:r.string}),data:Object(r.arrayOf)(Object(r.shape)({name:r.string}))}},"sn6/":function(e,t,n){"use strict"
var o=n("JPst"),a=n.n(o)()(function(e){return e[1]})
a.push([e.i,".paymentMethod-root-NYd {\n}\n\n.paymentMethod-heading-hzv {\n    grid-row: 1 / span 1;\n}\n\n.paymentMethod-payment_type-dsx {\n    grid-row: 2 / span 1;\n}\n",""]),a.locals={root:"paymentMethod-root-NYd gap-y-1.5 grid",heading:"paymentMethod-heading-hzv font-bold pb-1.5",payment_type:"paymentMethod-payment_type-dsx"},t.a=a},xwdh:function(e,t,n){"use strict"
var o=n("q1tI"),a=n.n(o),r=n("i8i4"),i=n.n(r)
function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var s="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,c={popupContent:{tooltip:{position:"absolute",zIndex:999},modal:{position:"relative",margin:"auto"}},popupArrow:{height:"8px",width:"16px",position:"absolute",background:"transparent",color:"#FFF",zIndex:-1},overlay:{tooltip:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",zIndex:999},modal:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",display:"flex",zIndex:999}}},l=["top left","top center","top right","right top","right center","right bottom","bottom left","bottom center","bottom right","left top","left center","left bottom"],u=function getCoordinatesForPosition(e,t,n,o,a){var r=a.offsetX,i=a.offsetY,s=o?8:0,c=n.split(" "),l=e.top+e.height/2,u=e.left+e.width/2,d=t.height,p=t.width,g=l-d/2,f=u-p/2,m="",h="0%",b="0%"
switch(c[0]){case"top":g-=d/2+e.height/2+s,m="rotate(180deg)  translateX(50%)",h="100%",b="50%"
break
case"bottom":g+=d/2+e.height/2+s,m="rotate(0deg) translateY(-100%) translateX(-50%)",b="50%"
break
case"left":f-=p/2+e.width/2+s,m=" rotate(90deg)  translateY(50%) translateX(-25%)",b="100%",h="50%"
break
case"right":f+=p/2+e.width/2+s,m="rotate(-90deg)  translateY(-150%) translateX(25%)",h="50%"}switch(c[1]){case"top":g=e.top,h=e.height/2+"px"
break
case"bottom":g=e.top-d+e.height,h=d-e.height/2+"px"
break
case"left":f=e.left,b=e.width/2+"px"
break
case"right":f=e.left-p+e.width,b=p-e.width/2+"px"}return{top:g="top"===c[0]?g-i:g+i,left:f="left"===c[0]?f-r:f+r,transform:m,arrowLeft:b,arrowTop:h}},d=function calculatePosition(e,t,n,o,a,r){var i=a.offsetX,s=a.offsetY,c={arrowLeft:"0%",arrowTop:"0%",left:0,top:0,transform:"rotate(135deg)"},d=0,p=function getTooltipBoundary(e){var t={top:0,left:0,width:window.innerWidth,height:window.innerHeight}
if("string"==typeof e){var n=document.querySelector(e)
null!==n&&(t=n.getBoundingClientRect())}return t}(r),g=Array.isArray(n)?n:[n]
for((r||Array.isArray(n))&&(g=[].concat(g,l));d<g.length;){var f={top:(c=u(e,t,g[d],o,{offsetX:i,offsetY:s})).top,left:c.left,width:t.width,height:t.height}
if(!(f.top<=p.top||f.left<=p.left||f.top+f.height>=p.top+p.height||f.left+f.width>=p.left+p.width))break
d++}return c},p=0,g=Object(o.forwardRef)(function(e,t){var n=e.trigger,r=void 0===n?null:n,l=e.onOpen,u=void 0===l?function(){}:l,g=e.onClose,f=void 0===g?function(){}:g,m=e.defaultOpen,h=void 0!==m&&m,b=e.open,v=void 0===b?void 0:b,y=e.disabled,O=void 0!==y&&y,k=e.nested,w=void 0!==k&&k,j=e.closeOnDocumentClick,E=void 0===j||j,C=e.repositionOnResize,x=void 0===C||C,T=e.closeOnEscape,P=void 0===T||T,M=e.on,L=void 0===M?["click"]:M,N=e.contentStyle,I=void 0===N?{}:N,_=e.arrowStyle,S=void 0===_?{}:_,q=e.overlayStyle,R=void 0===q?{}:q,F=e.className,A=void 0===F?"":F,D=e.position,X=void 0===D?"bottom center":D,W=e.modal,Y=void 0!==W&&W,z=e.lockScroll,B=void 0!==z&&z,G=e.arrow,J=void 0===G||G,K=e.offsetX,V=void 0===K?0:K,U=e.offsetY,H=void 0===U?0:U,Q=e.mouseEnterDelay,Z=void 0===Q?100:Q,$=e.mouseLeaveDelay,ee=void 0===$?100:$,te=e.keepTooltipInside,ne=void 0!==te&&te,oe=e.children,ae=Object(o.useState)(v||h),re=ae[0],ie=ae[1],se=Object(o.useRef)(null),ce=Object(o.useRef)(null),le=Object(o.useRef)(null),ue=Object(o.useRef)(null),de=Object(o.useRef)("popup-"+ ++p),pe=!!Y||!r,ge=Object(o.useRef)(0)
s(function(){return re?(ue.current=document.activeElement,je(),we(),Oe()):ke(),function(){clearTimeout(ge.current)}},[re]),Object(o.useEffect)(function(){"boolean"==typeof v&&(v?fe():me())},[v,O])
var fe=function openPopup(e){re||O||(ie(!0),setTimeout(function(){return u(e)},0))},me=function closePopup(e){var t
re&&!O&&(ie(!1),pe&&(null===(t=ue.current)||void 0===t||t.focus()),setTimeout(function(){return f(e)},0))},he=function togglePopup(e){null==e||e.stopPropagation(),re?me(e):fe(e)},be=function onMouseEnter(e){clearTimeout(ge.current),ge.current=setTimeout(function(){return fe(e)},Z)},ve=function onContextMenu(e){null==e||e.preventDefault(),he()},ye=function onMouseLeave(e){clearTimeout(ge.current),ge.current=setTimeout(function(){return me(e)},ee)},Oe=function lockScrolll(){pe&&B&&(document.getElementsByTagName("body")[0].style.overflow="hidden")},ke=function resetScroll(){pe&&B&&(document.getElementsByTagName("body")[0].style.overflow="auto")},we=function focusContentOnOpen(){var e,t=null==ce?void 0:null===(e=ce.current)||void 0===e?void 0:e.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),n=Array.prototype.slice.call(t)[0]
null==n||n.focus()}
Object(o.useImperativeHandle)(t,function(){return{open:function open(){fe()},close:function close(){me()},toggle:function toggle(){he()}}})
var je=function setPosition(){if(!pe&&re&&(null==se?void 0:se.current)&&(null==se?void 0:se.current)&&(null==ce?void 0:ce.current)){var e,t,n=se.current.getBoundingClientRect(),o=ce.current.getBoundingClientRect(),a=d(n,o,X,J,{offsetX:V,offsetY:H},ne)
if(ce.current.style.top=a.top+window.scrollY+"px",ce.current.style.left=a.left+window.scrollX+"px",J&&le.current)le.current.style.transform=a.transform,le.current.style.setProperty("-ms-transform",a.transform),le.current.style.setProperty("-webkit-transform",a.transform),le.current.style.top=(null===(e=S.top)||void 0===e?void 0:e.toString())||a.arrowTop,le.current.style.left=(null===(t=S.left)||void 0===t?void 0:t.toString())||a.arrowLeft}}
!function useOnEscape(e,t){void 0===t&&(t=!0),Object(o.useEffect)(function(){if(t){var n=function listener(t){"Escape"===t.key&&e(t)}
return document.addEventListener("keyup",n),function(){t&&document.removeEventListener("keyup",n)}}},[e,t])}(me,P),function useTabbing(e,t){void 0===t&&(t=!0),Object(o.useEffect)(function(){if(t){var n=function listener(t){if(9===t.keyCode){var n,o=null==e?void 0:null===(n=e.current)||void 0===n?void 0:n.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),a=Array.prototype.slice.call(o)
if(1===a.length)return void t.preventDefault()
var r=a[0],i=a[a.length-1]
t.shiftKey&&document.activeElement===r?(t.preventDefault(),i.focus()):document.activeElement===i&&(t.preventDefault(),r.focus())}}
return document.addEventListener("keydown",n),function(){t&&document.removeEventListener("keydown",n)}}},[e,t])}(ce,re&&pe),function useRepositionOnResize(e,t){void 0===t&&(t=!0),Object(o.useEffect)(function(){if(t){var n=function listener(){e()}
return window.addEventListener("resize",n),function(){t&&window.removeEventListener("resize",n)}}},[e,t])}(je,x),function useOnClickOutside(e,t,n){void 0===n&&(n=!0),Object(o.useEffect)(function(){if(n){var o=function listener(n){var o=Array.isArray(e)?e:[e],a=!1
o.forEach(function(e){e.current&&!e.current.contains(n.target)||(a=!0)}),n.stopPropagation(),a||t(n)}
return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),function(){n&&(document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o))}}},[e,t,n])}(r?[ce,se]:[ce],me,E&&!w)
var Ee=function renderContent(){return a.a.createElement("div",Object.assign({},function addWarperAction(){var e=pe?c.popupContent.modal:c.popupContent.tooltip,t={className:"popup-content "+(""!==A?A.split(" ").map(function(e){return e+"-content"}).join(" "):""),style:_extends({},e,I,{pointerEvents:"auto"}),ref:ce,onClick:function onClick(e){e.stopPropagation()}}
return!Y&&L.indexOf("hover")>=0&&(t.onMouseEnter=be,t.onMouseLeave=ye),t}(),{key:"C",role:pe?"dialog":"tooltip",id:de.current}),J&&!pe&&a.a.createElement("div",{ref:le,style:c.popupArrow},a.a.createElement("svg",{"data-testid":"arrow",className:"popup-arrow "+(""!==A?A.split(" ").map(function(e){return e+"-arrow"}).join(" "):""),viewBox:"0 0 32 16",style:_extends({position:"absolute"},S)},a.a.createElement("path",{d:"M16 0l16 16H0z",fill:"currentcolor"}))),oe&&"function"==typeof oe?oe(me,re):oe)},Ce=!(L.indexOf("hover")>=0),xe=pe?c.overlay.modal:c.overlay.tooltip,Te=[Ce&&a.a.createElement("div",{key:"O","data-testid":"overlay","data-popup":pe?"modal":"tooltip",className:"popup-overlay "+(""!==A?A.split(" ").map(function(e){return e+"-overlay"}).join(" "):""),style:_extends({},xe,R,{pointerEvents:E&&w||pe?"auto":"none"}),onClick:E&&w?me:void 0,tabIndex:-1},pe&&Ee()),!pe&&Ee()]
return a.a.createElement(a.a.Fragment,null,function renderTrigger(){for(var e={key:"T",ref:se,"aria-describedby":de.current},t=Array.isArray(L)?L:[L],n=0,o=t.length;n<o;n++)switch(t[n]){case"click":e.onClick=he
break
case"right-click":e.onContextMenu=ve
break
case"hover":e.onMouseEnter=be,e.onMouseLeave=ye
break
case"focus":e.onFocus=be,e.onBlur=ye}if("function"==typeof r){var i=r(re)
return!!r&&a.a.cloneElement(i,e)}return!!r&&a.a.cloneElement(r,e)}(),re&&i.a.createPortal(Te,function getRootPopup(){var e=document.getElementById("popup-root")
return null===e&&((e=document.createElement("div")).setAttribute("id","popup-root"),document.body.appendChild(e)),e}()))})
t.a=g}}])
