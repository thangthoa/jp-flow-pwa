/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~10.3.0, @magento/venia-sample-payments-checkmo: ^0.0.12, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~13.1.1, @magento/pagebuilder: ~8.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.6.9 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{SAkj:function(e,t,a){"use strict"
a.r(t),a.d(t,"default",function(){return I}),a.d(t,"FilterSidebarShimmer",function(){return C.a})
var r=a("q1tI"),l=a.n(r),i=a("dDsW"),s=a("kriW"),n=a("17x9"),c=a("+TN3"),o=a("Ty5D"),d=a("OlZo"),u=a("y1Xp"),f=a("Mhql"),p=a("+wQL"),m=a("qykw")
var b=a("6QXU"),g=a("x+6d"),y=a("PxZm"),O=a("2ES3"),h=a("mNf1"),j=a("7B/N")
const w=e=>{const{categoryId:t,categoryItems:a,childCategories:n,categoryLevel:w,categoryIsDirectProducts:I,categoryEcommerceId:C,categoryEcommerceName:v,filters:E,filterCountToOpen:N}=e,_=(e=>{const{filters:t}=e,a=Object(u.a)(m.a,e.operations),{getFilterInputsQuery:l}=a,[i,s]=Object(r.useState)(!1),[{drawer:n},{toggleDrawer:b,closeDrawer:g}]=Object(d.b)(),[y,O]=Object(f.a)(),h=Object(r.useRef)(null),j="filter"===n,w=Object(o.useHistory)(),{pathname:I,search:C}=Object(o.useLocation)(),{data:v}=Object(c.b)(l),E=Object(r.useMemo)(()=>t.map(e=>{let{attribute_code:t}=e
return t}),[t]),N=Object(r.useMemo)(()=>{const e=new Set
return"/search.html"!==I&&(e.add("category_id"),e.add("category_uid")),e},[I]),_=Object(r.useMemo)(()=>{const e=new Set,t=v?v.__type.inputFields:[]
for(const{name:a}of t){const t=E.includes(a),r=!N.has(a)
t&&r&&e.add(a)}return e.add("excludeKeyword"),e.add("mercariCategoryId"),e.add("brandId"),e.add("sizeId"),e.add("priceRange"),e.add("itemConditionId"),e.add("shippingPayerId"),e.add("colorId"),e.add("shippingMethod"),e.add("status"),e},[N,E,v]),M=e=>{const t=JSON.stringify(e)
return e.length<=2&&(t.includes(JSON.stringify({__typename:"AggregationOption",label:"0",value:"0"}))||t.includes(JSON.stringify({__typename:"AggregationOption",label:"1",value:"1"})))},[k,S,x,A]=Object(r.useMemo)(()=>{const e=new Map,a=new Set,r=new Map,l=new Map,i=Object(p.f)([...t])
for(const t of i){const{options:i,label:s,attribute_code:n}=t
if(_.has(n)){const t=[]
if(e.set(n,s),a.add("".concat(n,"[filter]")),M(i))r.set(n,"boolean"),t.push({title:"No",value:"0",label:s+":No"}),t.push({title:"Yes",value:"1",label:s+":Yes"})
else{let e=new URLSearchParams(decodeURIComponent(C)),a=Object.fromEntries(e.entries())
r.set(n,null)
for(const{label:e,value:r,color_code:l}of i)if("excludeKeyword"===n&&a.hasOwnProperty("excludeKeyword[filter]")){let e=a["excludeKeyword[filter]"].split(","),r=e[0],l=e[1]
t.push({title:r,value:l,value_index:l,label:r})}else if("priceRange"===n&&a.hasOwnProperty("priceRange[filter]")){let e=a["priceRange[filter]"].split(","),r=e[0],l=e[1]
t.push({title:r,value:l,value_index:l,label:r})}else if("brandId"===n&&a.hasOwnProperty("brandId[filter]")){let e=a["brandId[filter]"].split(","),r=e[0],l=e[1]
t.push({title:r,value:l,value_index:l,label:r})}else if("mercariCategoryId"===n&&a.hasOwnProperty("mercariCategoryId[filter]")){let l=a["mercariCategoryId[filter]"].split(",")[0]
t.push({title:l,value:r,value_index:r,label:e})}else if("sizeId"===n&&a.hasOwnProperty("sizeId[filter]")){let e=a["sizeId[filter]"].split(","),r=e[0],l=e[1]
t.push({title:r,value:l,value_index:l,label:r})}else t.push({title:Object(p.g)(e),value:r,color_code:l})}l.set(n,t)}}return[e,a,l,r]},[t,_])
Object(r.useEffect)(()=>{if(i){const e=Object(p.d)(C,S,y)
w.push({pathname:I,search:e}),s(!1)}},[S,y,w,i,I,C])
const R=Object(r.useCallback)(()=>{b("filter")},[b]),T=Object(r.useCallback)(()=>{g()},[g]),F=Object(r.useCallback)(()=>{s(!0),T()},[T]),P=Object(r.useCallback)(()=>{O.clear(),s(!0)},[O,s]),D=Object(r.useCallback)(e=>{if(j)switch(e.keyCode){case 27:T()}},[j,T])
return Object(r.useEffect)(()=>{const e=null===h.current&&"filter"===n,t="filter"===h.current&&null===n
if(e||t){const e=Object(p.e)(C,S,x)
O.setItems(e)}t&&T(),h.current=n},[n,O,x,S,C,T]),Object(r.useEffect)(()=>{const e=Object(p.e)(C,S,x)
O.setItems(e)},[O,x,S,C]),{filterApi:O,filterItems:x,filterKeys:S,filterNames:k,filterFrontendInput:A,filterState:y,handleApply:F,handleClose:T,handleKeyDownActions:D,handleOpen:R,handleReset:P,isApplying:i,isOpen:j}})({filters:E}),{filterApi:M,filterItems:k,filterNames:S,filterFrontendInput:x,filterState:A,handleApply:R,handleReset:T}=_,F=Object(r.useRef)(),P=Object(u.a)(O.a,e.classes),{formatMessage:D}=Object(i.a)(),K=D({id:"sidebarCategoriesTitle.title",defaultMessage:"Categories"}),z=Object(r.useCallback)(function(){const e=F.current
if(e&&"function"==typeof e.getBoundingClientRect){const t=e.getBoundingClientRect().top,a=window.scrollY+t-150
window.scrollTo(0,a)}R(...arguments)},[R,F]),J=Object(r.useMemo)(()=>Array.from(k,(e,a)=>{let[r,i]=e
const s=A.get(r),n=S.get(r),c=x.get(r)
return l.a.createElement(y.a,{categoryId:t,categoryEcommerceName:v,key:r,filterApi:M,filterState:s,filterFrontendInput:c,group:r,items:i,name:n,onApply:z,initialOpen:a<N})}),[M,k,S,x,A,N,z]),L=A.size?l.a.createElement("div",{className:P.action},l.a.createElement(b.a,{type:"button",onClick:T},l.a.createElement(s.a,{id:"filterModal.action",defaultMessage:"Clear all"}))):null
!I&&w>2&&"mercari"===v&&a.length
return l.a.createElement(l.a.Fragment,null,l.a.createElement("aside",{className:P.root,ref:F,"aria-busy":"false"},l.a.createElement("div",{className:P.body},l.a.createElement("div",{className:P.header},l.a.createElement("h2",{className:w&&w<=2&&"mercari"===v?P.shopHeaderTitle:P.headerTitle},w&&w<=2&&"mercari"===v?null:l.a.createElement(j.s,{className:"text-primary500"}),l.a.createElement(s.a,{id:w&&w<=2&&"mercari"===v?"filterModal.headerTitle.categories":"filterModal.headerTitle",defaultMessage:w&&w<=2&&"mercari"===v?"Categories":"Filters"}))),l.a.createElement(g.a,{filterApi:M,filterNames:S,filterState:A,onRemove:z}),L,w&&w<=2&&"mercari"===v?l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{className:P.root,id:t,childCategories:n,title:K})):l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:P.blocks},J)))))}
w.defaultProps={filterCountToOpen:3},w.propTypes={classes:Object(n.shape)({action:n.string,blocks:n.string,body:n.string,header:n.string,headerTitle:n.string,root:n.string,root_open:n.string}),filters:Object(n.arrayOf)(Object(n.shape)({attribute_code:n.string,items:n.array})),filterCountToOpen:n.number}
var I=w,C=a("LlM3")}}])
