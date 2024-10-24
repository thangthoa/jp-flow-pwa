/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~10.3.0, @magento/venia-sample-payments-checkmo: ^0.0.12, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~13.1.1, @magento/pagebuilder: ~8.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.6.9 */
!function(e){var t={}
function __webpack_require__(r){if(t[r])return t[r].exports
var s=t[r]={i:r,l:!1,exports:{}},a=!0
try{e[r].call(s.exports,s,s.exports,__webpack_require__),a=!1}finally{a&&delete t[r]}return s.l=!0,s.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var r=Object.create(null)
if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)__webpack_require__.d(r,s,function(t){return e[t]}.bind(null,s))
return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e}
return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="/",__webpack_require__(__webpack_require__.s="0Gu+")}({"0Gu+":function(e,t,r){"use strict"
r.r(t)
const s={},a=(e,t)=>{s[e]&&(s[e]=s[e].filter(e=>t!==e))}
r("Bxln")
const n=(e,...t)=>{let r=e
return t.length>0&&(r+=` :: ${JSON.stringify(t)}`),r}
class WorkboxError_WorkboxError extends Error{constructor(e,t){super(n(e,t)),this.name=e,this.details=t}}const i=new Set
const o={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},c=e=>[o.prefix,e,o.suffix].filter(e=>e&&e.length>0).join("-"),h={updateDetails:e=>{(e=>{for(const t of Object.keys(o))e(t)})(t=>{"string"==typeof e[t]&&(o[t]=e[t])})},getGoogleAnalyticsName:e=>e||c(o.googleAnalytics),getPrecacheName:e=>e||c(o.precache),getPrefix:()=>o.prefix,getRuntimeName:e=>e||c(o.runtime),getSuffix:()=>o.suffix}
function stripParams(e,t){const r=new URL(e)
for(const e of t)r.searchParams.delete(e)
return r.href}let l
function dontWaitFor(e){e.then(()=>{})}class Deferred{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const u=e=>{return new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"")}
function timeout(e){return new Promise(t=>setTimeout(t,e))}function waitUntil(e,t){const r=t()
return e.waitUntil(r),r}async function copyResponse(e,t){let r=null
if(e.url){r=new URL(e.url).origin}if(r!==self.location.origin)throw new WorkboxError_WorkboxError("cross-origin-copy-response",{origin:r})
const s=e.clone(),a={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},n=t?t(a):a,i=function canConstructResponseFromBodyStream(){if(void 0===l){const e=new Response("")
if("body"in e)try{new Response(e.body),l=!0}catch(e){l=!1}l=!1}return l}()?s.body:await s.blob()
return new Response(i,n)}r("xwD5")
const d="__WB_REVISION__"
function createCacheKey(e){if(!e)throw new WorkboxError_WorkboxError("add-to-cache-list-unexpected-type",{entry:e})
if("string"==typeof e){const t=new URL(e,location.href)
return{cacheKey:t.href,url:t.href}}const{revision:t,url:r}=e
if(!r)throw new WorkboxError_WorkboxError("add-to-cache-list-unexpected-type",{entry:e})
if(!t){const e=new URL(r,location.href)
return{cacheKey:e.href,url:e.href}}const s=new URL(r,location.href),a=new URL(r,location.href)
return s.searchParams.set(d,t),{cacheKey:s.href,url:a.href}}class PrecacheInstallReportPlugin{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=(async({request:e,state:t})=>{t&&(t.originalRequest=e)}),this.cachedResponseWillBeUsed=(async({event:e,state:t,cachedResponse:r})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url
r?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return r})}}class PrecacheCacheKeyPlugin{constructor({precacheController:e}){this.cacheKeyWillBeUsed=(async({request:e,params:t})=>{const r=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url)
return r?new Request(r):e}),this._precacheController=e}}r("aqiC")
function toRequest(e){return"string"==typeof e?new Request(e):e}class StrategyHandler_StrategyHandler{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new Deferred,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map
for(const e of this._plugins)this._pluginStateMap.set(e,{})
this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this
let r=toRequest(e)
if("navigate"===r.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse
if(e)return e}const s=this.hasCallback("fetchDidFail")?r.clone():null
try{for(const e of this.iterateCallbacks("requestWillFetch"))r=await e({request:r.clone(),event:t})}catch(e){if(e instanceof Error)throw new WorkboxError_WorkboxError("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const a=r.clone()
try{let e
e=await fetch(r,"navigate"===r.mode?void 0:this._strategy.fetchOptions)
for(const r of this.iterateCallbacks("fetchDidSucceed"))e=await r({event:t,request:a,response:e})
return e}catch(e){throw s&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:s.clone(),request:a.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),r=t.clone()
return this.waitUntil(this.cachePut(e,r)),t}async cacheMatch(e){const t=toRequest(e)
let r
const{cacheName:s,matchOptions:a}=this._strategy,n=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},a),{cacheName:s})
r=await caches.match(n,i)
for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))r=await e({cacheName:s,matchOptions:a,cachedResponse:r,request:n,event:this.event})||void 0
return r}async cachePut(e,t){const r=toRequest(e)
await timeout(0)
const s=await this.getCacheKey(r,"write")
if(!t)throw new WorkboxError_WorkboxError("cache-put-with-no-response",{url:u(s.url)})
const a=await this._ensureResponseSafeToCache(t)
if(!a)return!1
const{cacheName:n,matchOptions:o}=this._strategy,c=await self.caches.open(n),h=this.hasCallback("cacheDidUpdate"),l=h?await async function cacheMatchIgnoreParams(e,t,r,s){const a=stripParams(t.url,r)
if(t.url===a)return e.match(t,s)
const n=Object.assign(Object.assign({},s),{ignoreSearch:!0}),i=await e.keys(t,n)
for(const t of i)if(a===stripParams(t.url,r))return e.match(t,s)}(c,s.clone(),["__WB_REVISION__"],o):null
try{await c.put(s,h?a.clone():a)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function executeQuotaErrorCallbacks(){for(const e of i)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:n,oldResponse:l,newResponse:a.clone(),request:s,event:this.event})
return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let r=e
for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))r=toRequest(await e({mode:t,request:r,event:this.event,params:this.params}))
this._cacheKeys[t]=r}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0
return!1}async runCallbacks(e,t){for(const r of this.iterateCallbacks(e))await r(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const r=this._pluginStateMap.get(t),s=s=>{const a=Object.assign(Object.assign({},s),{state:r})
return t[e](a)}
yield s}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e
for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,r=!1
for(const e of this.iterateCallbacks("cacheWillUpdate"))if(r=!0,!(t=await e({request:this.request,response:t,event:this.event})||void 0))break
return r||t&&200!==t.status&&(t=void 0),t}}class Strategy_Strategy{constructor(e={}){this.cacheName=h.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e)
return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request})
const t=e.event,r="string"==typeof e.request?new Request(e.request):e.request,s="params"in e?e.params:void 0,a=new StrategyHandler_StrategyHandler(this,{event:t,request:r,params:s}),n=this._getResponse(a,r,t)
return[n,this._awaitComplete(n,a,r,t)]}async _getResponse(e,t,r){await e.runCallbacks("handlerWillStart",{event:r,request:t})
let s=void 0
try{if(!(s=await this._handle(t,e))||"error"===s.type)throw new WorkboxError_WorkboxError("no-response",{url:t.url})}catch(a){if(a instanceof Error)for(const n of e.iterateCallbacks("handlerDidError"))if(s=await n({error:a,event:r,request:t}))break
if(!s)throw a}for(const a of e.iterateCallbacks("handlerWillRespond"))s=await a({event:r,request:t,response:s})
return s}async _awaitComplete(e,t,r,s){let a,n
try{a=await e}catch(n){}try{await t.runCallbacks("handlerDidRespond",{event:s,request:r,response:a}),await t.doneWaiting()}catch(e){e instanceof Error&&(n=e)}if(await t.runCallbacks("handlerDidComplete",{event:s,request:r,response:a,error:n}),t.destroy(),n)throw n}}class PrecacheStrategy_PrecacheStrategy extends Strategy_Strategy{constructor(e={}){e.cacheName=h.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(PrecacheStrategy_PrecacheStrategy.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const r=await t.cacheMatch(e)
return r||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let r
if(!this._fallbackToNetwork)throw new WorkboxError_WorkboxError("missing-precache-entry",{cacheName:this.cacheName,url:e.url})
return r=await t.fetch(e)}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded()
const r=await t.fetch(e)
if(!await t.cachePut(e,r.clone()))throw new WorkboxError_WorkboxError("bad-precaching-response",{url:e.url,status:r.status})
return r}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0
for(const[r,s]of this.plugins.entries())s!==PrecacheStrategy_PrecacheStrategy.copyRedirectedCacheableResponsesPlugin&&(s===PrecacheStrategy_PrecacheStrategy.defaultPrecacheCacheabilityPlugin&&(e=r),s.cacheWillUpdate&&t++)
0===t?this.plugins.push(PrecacheStrategy_PrecacheStrategy.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}PrecacheStrategy_PrecacheStrategy.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},PrecacheStrategy_PrecacheStrategy.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await copyResponse(e):e}
class PrecacheController_PrecacheController{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:r=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new PrecacheStrategy_PrecacheStrategy({cacheName:h.getPrecacheName(e),plugins:[...t,new PrecacheCacheKeyPlugin({precacheController:this})],fallbackToNetwork:r}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[]
for(const r of e){"string"==typeof r?t.push(r):r&&void 0===r.revision&&t.push(r.url)
const{cacheKey:e,url:s}=createCacheKey(r),a="string"!=typeof r&&r.revision?"reload":"default"
if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new WorkboxError_WorkboxError("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e})
if("string"!=typeof r&&r.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==r.integrity)throw new WorkboxError_WorkboxError("add-to-cache-list-conflicting-integrities",{url:s})
this._cacheKeysToIntegrities.set(e,r.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,a),t.length>0){t.join(", ")
1}}}install(e){return waitUntil(e,async()=>{const t=new PrecacheInstallReportPlugin
this.strategy.plugins.push(t)
for(const[t,r]of this._urlsToCacheKeys){const s=this._cacheKeysToIntegrities.get(r),a=this._urlsToCacheModes.get(t),n=new Request(t,{integrity:s,cache:a,credentials:"same-origin"})
await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:n,event:e}))}const{updatedURLs:r,notUpdatedURLs:s}=t
return{updatedURLs:r,notUpdatedURLs:s}})}activate(e){return waitUntil(e,async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),r=new Set(this._urlsToCacheKeys.values()),s=[]
for(const a of t)r.has(a.url)||(await e.delete(a),s.push(a.url))
return{deletedURLs:s}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href)
return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,r=this.getCacheKeyForURL(t)
if(r){return(await self.caches.open(this.strategy.cacheName)).match(r)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e)
if(!t)throw new WorkboxError_WorkboxError("non-precached-url",{url:e})
return r=>(r.request=new Request(e),r.params=Object.assign({cacheKey:t},r.params),this.strategy.handle(r))}}let p
const f=()=>(p||(p=new PrecacheController_PrecacheController),p)
r("5tLK")
const g="GET",_=e=>e&&"object"==typeof e?e:{handle:e}
class Route_Route{constructor(e,t,r=g){this.handler=_(t),this.match=e,this.method=r}setCatchHandler(e){this.catchHandler=_(e)}}class RegExpRoute_RegExpRoute extends Route_Route{constructor(e,t,r){super(({url:t})=>{const r=e.exec(t.href)
if(r&&(t.origin===location.origin||0===r.index))return r.slice(1)},t,r)}}class Router_Router{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,r=this.handleRequest({request:t,event:e})
r&&e.respondWith(r)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data
0
const r=Promise.all(t.urlsToCache.map(t=>{"string"==typeof t&&(t=[t])
const r=new Request(...t)
return this.handleRequest({request:r,event:e})}))
e.waitUntil(r),e.ports&&e.ports[0]&&r.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const r=new URL(e.url,location.href)
if(!r.protocol.startsWith("http"))return void 0
const s=r.origin===location.origin,{params:a,route:n}=this.findMatchingRoute({event:t,request:e,sameOrigin:s,url:r})
let i=n&&n.handler
const o=e.method
if(!i&&this._defaultHandlerMap.has(o)&&(i=this._defaultHandlerMap.get(o)),!i)return void 0
let c
try{c=i.handle({url:r,request:e,event:t,params:a})}catch(e){c=Promise.reject(e)}const h=n&&n.catchHandler
return c instanceof Promise&&(this._catchHandler||h)&&(c=c.catch(async s=>{if(h){0
try{return await h.handle({url:r,request:e,event:t,params:a})}catch(e){e instanceof Error&&(s=e)}}if(this._catchHandler)return this._catchHandler.handle({url:r,request:e,event:t})
throw s})),c}findMatchingRoute({url:e,sameOrigin:t,request:r,event:s}){const a=this._routes.get(r.method)||[]
for(const n of a){let a
const i=n.match({url:e,sameOrigin:t,request:r,event:s})
if(i)return a=i,Array.isArray(a)&&0===a.length?a=void 0:i.constructor===Object&&0===Object.keys(i).length?a=void 0:"boolean"==typeof i&&(a=void 0),{route:n,params:a}}return{}}setDefaultHandler(e,t=g){this._defaultHandlerMap.set(t,_(e))}setCatchHandler(e){this._catchHandler=_(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new WorkboxError_WorkboxError("unregister-route-but-not-found-with-method",{method:e.method})
const t=this._routes.get(e.method).indexOf(e)
if(!(t>-1))throw new WorkboxError_WorkboxError("unregister-route-route-not-registered")
this._routes.get(e.method).splice(t,1)}}let m
const w=()=>(m||((m=new Router_Router).addFetchListener(),m.addCacheListener()),m)
function registerRoute(e,t,r){let s
if("string"==typeof e){const a=new URL(e,location.href)
0,s=new Route_Route(({url:e})=>e.href===a.href,t,r)}else if(e instanceof RegExp)s=new RegExpRoute_RegExpRoute(e,t,r)
else if("function"==typeof e)s=new Route_Route(e,t,r)
else{if(!(e instanceof Route_Route))throw new WorkboxError_WorkboxError("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"})
s=e}return w().registerRoute(s),s}class PrecacheRoute_PrecacheRoute extends Route_Route{constructor(e,t){super(({request:r})=>{const s=e.getURLsToCacheKeys()
for(const e of function*generateURLVariations(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:r="index.html",cleanURLs:s=!0,urlManipulation:a}={}){const n=new URL(e,location.href)
n.hash="",yield n.href
const i=function removeIgnoredSearchParams(e,t=[]){for(const r of[...e.searchParams.keys()])t.some(e=>e.test(r))&&e.searchParams.delete(r)
return e}(n,t)
if(yield i.href,r&&i.pathname.endsWith("/")){const e=new URL(i.href)
e.pathname+=r,yield e.href}if(s){const e=new URL(i.href)
e.pathname+=".html",yield e.href}if(a){const e=a({url:n})
for(const t of e)yield t.href}}(r.url,t)){const t=s.get(e)
if(t)return{cacheKey:t}}},e.strategy)}}function precacheAndRoute(e,t){!function precache(e){f().precache(e)}(e),function addRoute(e){const t=f()
registerRoute(new PrecacheRoute_PrecacheRoute(t,e))}(t)}const y=(e,t)=>t.some(t=>e instanceof t)
let b,R
const x=new WeakMap,E=new WeakMap,v=new WeakMap,k=new WeakMap,C=new WeakMap
let P={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return E.get(e)
if("objectStoreNames"===t)return e.objectStoreNames||v.get(e)
if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return wrap(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}
function wrapFunction(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?function getCursorAdvanceMethods(){return R||(R=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}().includes(e)?function(...t){return e.apply(q(this),t),wrap(x.get(this))}:function(...t){return wrap(e.apply(q(this),t))}:function(t,...r){const s=e.call(q(this),t,...r)
return v.set(s,t.sort?t.sort():[t]),wrap(s)}}function transformCachableValue(e){return"function"==typeof e?wrapFunction(e):(e instanceof IDBTransaction&&function cacheDonePromiseForTransaction(e){if(E.has(e))return
const t=new Promise((t,r)=>{const s=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",n),e.removeEventListener("abort",n)},a=()=>{t(),s()},n=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()}
e.addEventListener("complete",a),e.addEventListener("error",n),e.addEventListener("abort",n)})
E.set(e,t)}(e),y(e,function getIdbProxyableTypes(){return b||(b=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}())?new Proxy(e,P):e)}function wrap(e){if(e instanceof IDBRequest)return function promisifyRequest(e){const t=new Promise((t,r)=>{const s=()=>{e.removeEventListener("success",a),e.removeEventListener("error",n)},a=()=>{t(wrap(e.result)),s()},n=()=>{r(e.error),s()}
e.addEventListener("success",a),e.addEventListener("error",n)})
return t.then(t=>{t instanceof IDBCursor&&x.set(t,e)}).catch(()=>{}),C.set(t,e),t}(e)
if(k.has(e))return k.get(e)
const t=transformCachableValue(e)
return t!==e&&(k.set(e,t),C.set(t,e)),t}const q=e=>C.get(e)
const S=["get","getKey","getAll","getAllKeys","count"],W=["put","add","delete","clear"],L=new Map
function getMethod(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return
if(L.get(t))return L.get(t)
const r=t.replace(/FromIndex$/,""),s=t!==r,a=W.includes(r)
if(!(r in(s?IDBIndex:IDBObjectStore).prototype)||!a&&!S.includes(r))return
const n=async function(e,...t){const n=this.transaction(e,a?"readwrite":"readonly")
let i=n.store
return s&&(i=i.index(t.shift())),(await Promise.all([i[r](...t),a&&n.done]))[0]}
return L.set(t,n),n}!function replaceTraps(e){P=e(P)}(e=>({...e,get:(t,r,s)=>getMethod(t,r)||e.get(t,r,s),has:(t,r)=>!!getMethod(t,r)||e.has(t,r)}))
r("2KUI")
const N="workbox-expiration",U="cache-entries",T=e=>{const t=new URL(e,location.href)
return t.hash="",t.href}
class CacheTimestampsModel_CacheTimestampsModel{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(U,{keyPath:"id"})
t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function deleteDB(e,{blocked:t}={}){const r=indexedDB.deleteDatabase(e)
return t&&r.addEventListener("blocked",()=>t()),wrap(r).then(()=>void 0)}(this._cacheName)}async setTimestamp(e,t){const r={url:e=T(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},s=await this.getDb()
await s.put(U,r)}async getTimestamp(e){const t=await this.getDb(),r=await t.get(U,this._getId(e))
return null==r?void 0:r.timestamp}async expireEntries(e,t){const r=await this.getDb()
let s=await r.transaction(U).store.index("timestamp").openCursor(null,"prev")
const a=[]
let n=0
for(;s;){const r=s.value
r.cacheName===this._cacheName&&(e&&r.timestamp<e||t&&n>=t?a.push(s.value):n++),s=await s.continue()}const i=[]
for(const e of a)await r.delete(U,e.id),i.push(e.url)
return i}_getId(e){return this._cacheName+"|"+T(e)}async getDb(){return this._db||(this._db=await function openDB(e,t,{blocked:r,upgrade:s,blocking:a,terminated:n}={}){const i=indexedDB.open(e,t),o=wrap(i)
return s&&i.addEventListener("upgradeneeded",e=>{s(wrap(i.result),e.oldVersion,e.newVersion,wrap(i.transaction))}),r&&i.addEventListener("blocked",()=>r()),o.then(e=>{n&&e.addEventListener("close",()=>n()),a&&e.addEventListener("versionchange",()=>a())}).catch(()=>{}),o}(N,1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class CacheExpiration_CacheExpiration{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new CacheTimestampsModel_CacheTimestampsModel(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0)
this._isRunning=!0
const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),r=await self.caches.open(this._cacheName)
for(const e of t)await r.delete(e,this._matchOptions)
this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,dontWaitFor(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),r=Date.now()-1e3*this._maxAgeSeconds
return void 0===t||t<r}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class ExpirationPlugin_ExpirationPlugin{constructor(e={}){this.cachedResponseWillBeUsed=(async({event:e,request:t,cacheName:r,cachedResponse:s})=>{if(!s)return null
const a=this._isResponseDateFresh(s),n=this._getCacheExpiration(r)
dontWaitFor(n.expireEntries())
const i=n.updateTimestamp(t.url)
if(e)try{e.waitUntil(i)}catch(e){0}return a?s:null}),this.cacheDidUpdate=(async({cacheName:e,request:t})=>{const r=this._getCacheExpiration(e)
await r.updateTimestamp(t.url),await r.expireEntries()}),this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&function registerQuotaErrorCallback(e){i.add(e)}(()=>this.deleteCacheAndMetadata())}_getCacheExpiration(e){if(e===h.getRuntimeName())throw new WorkboxError_WorkboxError("expire-custom-caches-only")
let t=this._cacheExpirations.get(e)
return t||(t=new CacheExpiration_CacheExpiration(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0
const t=this._getDateHeaderTimestamp(e)
return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null
const t=e.headers.get("date"),r=new Date(t).getTime()
return isNaN(r)?null:r}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete()
this._cacheExpirations=new Map}}class CacheFirst_CacheFirst extends Strategy_Strategy{async _handle(e,t){let r=await t.cacheMatch(e),s=void 0
if(r)0
else{0
try{r=await t.fetchAndCachePut(e)}catch(e){e instanceof Error&&(s=e)}0}if(!r)throw new WorkboxError_WorkboxError("no-response",{url:e.url,error:s})
return r}}const D={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null}
class NetworkFirst_NetworkFirst extends Strategy_Strategy{constructor(e={}){super(e),this.plugins.some(e=>"cacheWillUpdate"in e)||this.plugins.unshift(D),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const r=[]
const s=[]
let a
if(this._networkTimeoutSeconds){const{id:n,promise:i}=this._getTimeoutPromise({request:e,logs:r,handler:t})
a=n,s.push(i)}const n=this._getNetworkPromise({timeoutId:a,request:e,logs:r,handler:t})
s.push(n)
const i=await t.waitUntil((async()=>await t.waitUntil(Promise.race(s))||await n)())
if(!i)throw new WorkboxError_WorkboxError("no-response",{url:e.url})
return i}_getTimeoutPromise({request:e,logs:t,handler:r}){let s
return{promise:new Promise(t=>{s=setTimeout(async()=>{t(await r.cacheMatch(e))},1e3*this._networkTimeoutSeconds)}),id:s}}async _getNetworkPromise({timeoutId:e,request:t,logs:r,handler:s}){let a,n
try{n=await s.fetchAndCachePut(t)}catch(e){e instanceof Error&&(a=e)}return e&&clearTimeout(e),!a&&n||(n=await s.cacheMatch(t)),n}}class StaleWhileRevalidate_StaleWhileRevalidate extends Strategy_Strategy{constructor(e={}){super(e),this.plugins.some(e=>"cacheWillUpdate"in e)||this.plugins.unshift(D)}async _handle(e,t){const r=t.fetchAndCachePut(e).catch(()=>{})
let s,a=await t.cacheMatch(e)
if(a)0
else{0
try{a=await r}catch(e){e instanceof Error&&(s=e)}}if(!a)throw new WorkboxError_WorkboxError("no-response",{url:e.url,error:s})
return a}}r("jLCR")
class CacheableResponse{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0
return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some(t=>e.headers.get(t)===this._headers[t])),t}}class CacheableResponsePlugin_CacheableResponsePlugin{constructor(e){this.cacheWillUpdate=(async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null),this._cacheableResponse=new CacheableResponse(e)}}const M="PREFETCH_IMAGES",I=new RegExp(/\.(?:png|jpg|jpeg)$/),K=e=>Number(new URLSearchParams(e.search).get("width")),O=e=>{let{url:t}=e
return(e=>I.test(e.pathname))(t)&&!isNaN(K(t))},A=e=>new Promise(t=>{caches.match(e).then(r=>{t(r||(e=>fetch(e,{mode:"no-cors"}).then(t=>caches.open("images").then(r=>r.put(e,t.clone())).then(()=>t)))(e))})}),j=(e,t)=>(()=>!(navigator.connection&&"effectiveType"in navigator.connection)||"4g"===navigator.connection.effectiveType)()?Promise.all(e.urls.map(A)).then(e=>(t.ports[0].postMessage({status:"done"}),e)).catch(e=>(t.ports[0].postMessage({status:"error",message:JSON.stringify(e)}),null)):(t.ports[0].postMessage({status:"error",message:"Slow Network detected. Not pre-fetching images. ".concat(e.urls)}),null)
importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.2.4/workbox-sw.js"),function skipWaiting(){self.skipWaiting()}(),function clientsClaim(){self.addEventListener("activate",()=>self.clients.claim())}(),precacheAndRoute([{'revision':null,'url':'/1.851074c0168a2aaf48bb.js'},{'revision':null,'url':'/10.084aa94d9763710144c1.js'},{'revision':null,'url':'/100.60730a33794a53bef02b.js'},{'revision':null,'url':'/101.936686160bebc87b4342.js'},{'revision':null,'url':'/102.dfa38af2e1ef7db00685.js'},{'revision':null,'url':'/103.08c30d00859fa32330c6.js'},{'revision':null,'url':'/104.a7ab7c72799ebcd48e2c.js'},{'revision':null,'url':'/105.c3a46b0ed1b257791009.js'},{'revision':null,'url':'/106.3031820c6a8c3f1125f3.js'},{'revision':null,'url':'/107.26096ba6730f9b3efc3d.js'},{'revision':null,'url':'/108.baff7c68ea62e89ff815.js'},{'revision':null,'url':'/109.d6fed846a2f6c6d9cf31.js'},{'revision':null,'url':'/11.b38c4d3af591c34b5ca7.js'},{'revision':null,'url':'/12.6370407702ee04daf5be.js'},{'revision':null,'url':'/13.f5d8127e7439b2e11539.js'},{'revision':null,'url':'/14.dbba5dfb3293fdfdb55f.js'},{'revision':null,'url':'/15.d02d03749f0cf09dbc81.js'},{'revision':null,'url':'/16.f8a41fd9ef9e00e3de59.js'},{'revision':null,'url':'/17.c2162ed103b09dba177f.js'},{'revision':null,'url':'/18.b4fd506b67612fc2cfa7.js'},{'revision':null,'url':'/19.01d9710c708f19c9fda8.js'},{'revision':null,'url':'/2.2fbb9497afadcdeb7e0b.js'},{'revision':null,'url':'/20.b2a669cdfb1d9381810d.js'},{'revision':null,'url':'/21.c2b22a3a4f3be7b22886.js'},{'revision':null,'url':'/22.2431abb38d2507609adc.js'},{'revision':null,'url':'/23.0913d61f6e5b78db3f9f.js'},{'revision':null,'url':'/3.3d55156803c18b593e8d.js'},{'revision':null,'url':'/34.d859541b9a4769119f68.js'},{'revision':null,'url':'/35.2f61a2657e4eb1100355.js'},{'revision':null,'url':'/36.9517429970a97176918c.js'},{'revision':null,'url':'/37.f8e03c8cfc4296d06cf0.js'},{'revision':null,'url':'/38.98a8d952f8efd1a194e4.js'},{'revision':null,'url':'/39.8135e2d358057a015689.js'},{'revision':null,'url':'/4.3248c48acf6b65202f30.js'},{'revision':null,'url':'/40.0d2a2bb9837e849f8078.js'},{'revision':null,'url':'/41.af8593729c52800064bb.js'},{'revision':null,'url':'/42.76fd2117326c2d1d9dbf.js'},{'revision':null,'url':'/43.795142e9ec6e56af9d5d.js'},{'revision':null,'url':'/44.7a719285d96f27bc41c2.js'},{'revision':null,'url':'/45.c3b1fa2632edcefafc9f.js'},{'revision':null,'url':'/46.5cbc8461f1ba7d06a9fb.js'},{'revision':null,'url':'/47.4a2bd315ab394f78afa5.js'},{'revision':null,'url':'/48.dda08cfede7411c84cdc.js'},{'revision':null,'url':'/49.dfc4a2555ba74a49af99.js'},{'revision':null,'url':'/5.3f636c7475fe68a2f75b.js'},{'revision':null,'url':'/50.4f4bfc38bf1cab353886.js'},{'revision':null,'url':'/51.87b0313beac2fa32b88c.js'},{'revision':null,'url':'/52.10a9f2001572ac6aa8df.js'},{'revision':null,'url':'/53.5d45d64616ba9444288b.js'},{'revision':null,'url':'/54.5a98eb7f0d22611e3fe1.js'},{'revision':null,'url':'/55.303f1da55b6863e0f44f.js'},{'revision':null,'url':'/56.fa2b78748118f1e286ed.js'},{'revision':null,'url':'/57.7517439447aab6419bb7.js'},{'revision':null,'url':'/58.4085fb0ed7bf74fb79e6.js'},{'revision':null,'url':'/59.20869b7b1237fa783afc.js'},{'revision':null,'url':'/6.e657031ce4a31b51e006.js'},{'revision':null,'url':'/60.1a931225bf94952aae82.js'},{'revision':null,'url':'/61.6cb44b557c7fc1fa7edb.js'},{'revision':null,'url':'/62.f2300be18c35edd1bdc5.js'},{'revision':null,'url':'/63.b263222c71a41a09bbe8.js'},{'revision':null,'url':'/64.ed05c20e729d555fd7f4.js'},{'revision':null,'url':'/65.454f5300b395593ae259.js'},{'revision':null,'url':'/66.658db6085591c8f1fda6.js'},{'revision':null,'url':'/67.698d61950a684b107735.js'},{'revision':null,'url':'/68.2ed491eb2f2d0126a01c.js'},{'revision':null,'url':'/69.b4ce15f5093ecab2eeb9.js'},{'revision':null,'url':'/70.b7328e6d448ff8f76ce7.js'},{'revision':null,'url':'/71.2dff598fb250ca323598.js'},{'revision':null,'url':'/72.98bb8e63216982279f67.js'},{'revision':null,'url':'/73.93f0869273674be26cb3.js'},{'revision':null,'url':'/74.038f1e97b6df570852b1.js'},{'revision':null,'url':'/75.12bb47c1ca21a6257688.js'},{'revision':null,'url':'/76.3a076094233cfe4896bd.js'},{'revision':null,'url':'/77.8926a58a57877f5e13d3.js'},{'revision':null,'url':'/78.d533d9ffacb8879c7008.js'},{'revision':null,'url':'/79.f4c7cefdbd93f5d1ec4b.js'},{'revision':null,'url':'/8.706f63c29f1b7224d652.js'},{'revision':null,'url':'/80.c2ff28d4a7cba846a937.js'},{'revision':null,'url':'/81.6ad881eafef877bafdbb.js'},{'revision':null,'url':'/82.6b39f51369a0489b8e39.js'},{'revision':null,'url':'/83.dfca7596071f729e3f56.js'},{'revision':null,'url':'/84.e09ff058ba1f994ce843.js'},{'revision':null,'url':'/85.e621cf557d150db543ba.js'},{'revision':null,'url':'/86.03042f5c85f55a36a777.js'},{'revision':null,'url':'/87.4d62eb0be343de7f149d.js'},{'revision':null,'url':'/88.e399a2ddd7d0dca3129a.js'},{'revision':null,'url':'/89.da12fe8d527da72ca2d7.js'},{'revision':null,'url':'/90.c617a2bf24225c186cd3.js'},{'revision':null,'url':'/91.52784eb79131da694a87.js'},{'revision':null,'url':'/92.d2d6d6f4ae2e03bad739.js'},{'revision':null,'url':'/93.30ac502831038bfb43db.js'},{'revision':null,'url':'/94.673c9519c6a944379a78.js'},{'revision':null,'url':'/95.1df893e6bcfed6c14b80.js'},{'revision':null,'url':'/96.4fc4970ae7c5820514d2.js'},{'revision':null,'url':'/97.5fac9c7e6f128ec0f3da.js'},{'revision':null,'url':'/98.92584620ad2be7b85057.js'},{'revision':null,'url':'/99.407be279a81afdcb4187.js'},{'revision':null,'url':'/RootCmp_CATEGORY__default.52b937ec06ef80794178.js'},{'revision':null,'url':'/RootCmp_CMS_PAGE__default.d2968c0ccdb901496b4e.js'},{'revision':null,'url':'/RootCmp_PRODUCT__default.6160877ef413d1b744ac.js'},{'revision':null,'url':'/RootCmp_SEARCH__default.dd217b176cbdb8048daf.js'},{'revision':'6282f5906e8a78a0cab24726921794ea','url':'/checkbox-uY5.svg'},{'revision':'74d60d4051364a82f5fe8ac10142084d','url':'/checked-2-avH.svg'},{'revision':'28efa606932425d671908d999eba890e','url':'/checked-2N8.svg'},{'revision':'11cc14bd64de5daf67cbc7b159aea78a','url':'/credit-card-payment-i84.svg'},{'revision':'6282f5906e8a78a0cab24726921794ea','url':'/dg-static-assets/icons/checkbox.svg'},{'revision':'74d60d4051364a82f5fe8ac10142084d','url':'/dg-static-assets/icons/checked-2.svg'},{'revision':'28efa606932425d671908d999eba890e','url':'/dg-static-assets/icons/checked.svg'},{'revision':'11cc14bd64de5daf67cbc7b159aea78a','url':'/dg-static-assets/icons/credit-card-payment.svg'},{'revision':'e322acc0ea6e061dc208e9de4bd78775','url':'/dg-static-assets/icons/icon-arrow.svg'},{'revision':'8b3b9ab982bfa5643f2190323e6b3017','url':'/dg-static-assets/icons/storage.svg'},{'revision':'0da3f987633d16ce32be0623e9ac6849','url':'/dg-static-assets/stripe-payments/index.js'},{'revision':'e46dd1dac3a95bf392ab9f8782c49ac1','url':'/dg-static-assets/stripe-payments/src/components/creditCard.js'},{'revision':'547d46e6c09fbdc977691bb1143c2a3d','url':'/dg-static-assets/stripe-payments/src/components/creditCardStripe.js'},{'revision':'93b2535853e349d9f5f351c9a023f03b','url':'/dg-static-assets/stripe-payments/src/components/summary.js'},{'revision':'1bbf08875f8cc59d180f0844b450c017','url':'/dg-static-assets/stripe-payments/src/plugins/checkoutPageTalonPlugin.js'},{'revision':'0a29baae461d168bdde0dcc52ed68794','url':'/dg-static-assets/stripe-payments/src/talons/stripe.gql.js'},{'revision':'3b6be9b86cc6f875394c631ef37cff7f','url':'/dg-static-assets/stripe-payments/src/talons/stripeSummary.gql.js'},{'revision':'ac5edfdda779548d42e955559a95f804','url':'/dg-static-assets/stripe-payments/src/talons/useCreditCard.js'},{'revision':'eb533c9b5bacdb69fa67aed9057b24c2','url':'/dg-static-assets/stripe-payments/src/talons/useStripeSummary.js'},{'revision':'454a88a92ad3992a336411d128dbc89d','url':'/dg-static-assets/stripe-payments/src/targets/intercept.js'},{'revision':'fb44e8557c07a1619a0293b36f325c6d','url':'/dg-static-assets/stripe-payments/src/types/index.js'},{'revision':null,'url':'/i18n-en_US.e50b5de980674f775a93.js'},{'revision':null,'url':'/i18n-ja_JP.9ec21d17cca2111c52f7.js'},{'revision':null,'url':'/i18n-vi_VN.8595b7cd4ff5a9216818.js'},{'revision':null,'url':'/i18n-zh_CN.92d83fdb86f4c5c78b31.js'},{'revision':'e322acc0ea6e061dc208e9de4bd78775','url':'/icon-arrow-fvL.svg'},{'revision':null,'url':'/runtime.6b79459575ea1cd143cd.js'},{'revision':'8b3b9ab982bfa5643f2190323e6b3017','url':'/storage-3S5.svg'},{'revision':null,'url':'/vendors.307bd5c33ab23f183418.js'},{'revision':null,'url':'/vendors~RootCmp_CATEGORY__default~RootCmp_SEARCH__default.9d7c96039d89c00e6c1b.js'},{'revision':null,'url':'/vendors~RootCmp_PRODUCT__default.f884f4f0e8349d048b30.js'}]||[]),function(){const e=(()=>new CacheFirst_CacheFirst({cacheName:"images",plugins:[new ExpirationPlugin_ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3,matchOptions:{ignoreVary:!0}}),new CacheableResponsePlugin_CacheableResponsePlugin({statuses:[0,200]})]}))()
registerRoute(new RegExp("(robots.txt|favicon.ico|manifest.json)"),new StaleWhileRevalidate_StaleWhileRevalidate),registerRoute(O,t=>{let{url:r,request:s,event:a}=t
const n=(async e=>{const t=K(e),r=e.pathname.split("/").reverse()[0],s=await caches.open("images"),a=await s.keys(),n=await a.filter(e=>{let{url:t}=e
return new URL(t).pathname.split("/").reverse()[0]===r})
let i={difference:1/0,candidate:null}
for(const e of n){const r=K(new URL(e.url))
if(isNaN(r))continue
const a=r-t
if(!(a<0)){if(0===a)return await s.match(e)
a<i.difference&&(i={difference:a,candidate:e})}}if(i.candidate)return await s.match(i.candidate)})(r)
return a.waitUntil(n),n.then(t=>t||e.handle({request:s,event:a}))}),registerRoute(/\.(?:png|gif|jpg|jpeg|svg)$/,new CacheFirst_CacheFirst({cacheName:"images",plugins:[new ExpirationPlugin_ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3,matchOptions:{ignoreVary:!0}})]})),registerRoute(new RegExp(/\.js$/),new CacheFirst_CacheFirst),registerRoute(e=>{let{url:t,request:r}=e
return t.origin===self.location.origin&&"document"===r.destination},new NetworkFirst_NetworkFirst)}(),((e,t)=>(s[e]||(s[e]=[]),s[e].push(t),()=>a(e,t)))(M,j),self.addEventListener("message",e=>{const{type:t,payload:r}=e.data;((e,t,r)=>{const a=s[e]
a&&a.forEach(e=>{e(t,r)})})(t,r,e)})},"2KUI":function(e,t,r){"use strict"
try{self["workbox:expiration:6.2.4"]&&_()}catch(e){}},"5tLK":function(e,t,r){"use strict"
try{self["workbox:routing:6.2.4"]&&_()}catch(e){}},Bxln:function(e,t,r){"use strict"
try{self["workbox:core:6.2.4"]&&_()}catch(e){}},aqiC:function(e,t,r){"use strict"
try{self["workbox:strategies:6.2.4"]&&_()}catch(e){}},jLCR:function(e,t,r){"use strict"
try{self["workbox:cacheable-response:6.2.4"]&&_()}catch(e){}},xwD5:function(e,t,r){"use strict"
try{self["workbox:precaching:6.2.4"]&&_()}catch(e){}}})
