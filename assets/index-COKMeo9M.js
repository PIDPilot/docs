function a0(i,r){for(var s=0;s<r.length;s++){const l=r[s];if(typeof l!="string"&&!Array.isArray(l)){for(const u in l)if(u!=="default"&&!(u in i)){const h=Object.getOwnPropertyDescriptor(l,u);h&&Object.defineProperty(i,u,h.get?h:{enumerable:!0,get:()=>l[u]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function s(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function l(u){if(u.ep)return;u.ep=!0;const h=s(u);fetch(u.href,h)}})();var Dp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function id(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var uu={exports:{}},Ia={};var Np;function r0(){if(Np)return Ia;Np=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(l,u,h){var f=null;if(h!==void 0&&(f=""+h),u.key!==void 0&&(f=""+u.key),"key"in u){h={};for(var m in u)m!=="key"&&(h[m]=u[m])}else h=u;return u=h.ref,{$$typeof:i,type:l,key:f,ref:u!==void 0?u:null,props:h}}return Ia.Fragment=r,Ia.jsx=s,Ia.jsxs=s,Ia}var Pp;function s0(){return Pp||(Pp=1,uu.exports=r0()),uu.exports}var o=s0(),du={exports:{}},ye={};var Op;function l0(){if(Op)return ye;Op=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function j(E){return E===null||typeof E!="object"?null:(E=b&&E[b]||E["@@iterator"],typeof E=="function"?E:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,A={};function N(E,q,J){this.props=E,this.context=q,this.refs=A,this.updater=J||S}N.prototype.isReactComponent={},N.prototype.setState=function(E,q){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,q,"setState")},N.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function R(){}R.prototype=N.prototype;function T(E,q,J){this.props=E,this.context=q,this.refs=A,this.updater=J||S}var M=T.prototype=new R;M.constructor=T,k(M,N.prototype),M.isPureReactComponent=!0;var V=Array.isArray;function F(){}var I={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function H(E,q,J){var te=J.ref;return{$$typeof:i,type:E,key:q,ref:te!==void 0?te:null,props:J}}function W(E,q){return H(E.type,q,E.props)}function Z(E){return typeof E=="object"&&E!==null&&E.$$typeof===i}function oe(E){var q={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(J){return q[J]})}var he=/\/+/g;function Ae(E,q){return typeof E=="object"&&E!==null&&E.key!=null?oe(""+E.key):q.toString(36)}function ue(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(F,F):(E.status="pending",E.then(function(q){E.status==="pending"&&(E.status="fulfilled",E.value=q)},function(q){E.status==="pending"&&(E.status="rejected",E.reason=q)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function z(E,q,J,te,ne){var se=typeof E;(se==="undefined"||se==="boolean")&&(E=null);var ve=!1;if(E===null)ve=!0;else switch(se){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(E.$$typeof){case i:case r:ve=!0;break;case v:return ve=E._init,z(ve(E._payload),q,J,te,ne)}}if(ve)return ne=ne(E),ve=te===""?"."+Ae(E,0):te,V(ne)?(J="",ve!=null&&(J=ve.replace(he,"$&/")+"/"),z(ne,q,J,"",function(mt){return mt})):ne!=null&&(Z(ne)&&(ne=W(ne,J+(ne.key==null||E&&E.key===ne.key?"":(""+ne.key).replace(he,"$&/")+"/")+ve)),q.push(ne)),1;ve=0;var Pe=te===""?".":te+":";if(V(E))for(var pe=0;pe<E.length;pe++)te=E[pe],se=Pe+Ae(te,pe),ve+=z(te,q,J,se,ne);else if(pe=j(E),typeof pe=="function")for(E=pe.call(E),pe=0;!(te=E.next()).done;)te=te.value,se=Pe+Ae(te,pe++),ve+=z(te,q,J,se,ne);else if(se==="object"){if(typeof E.then=="function")return z(ue(E),q,J,te,ne);throw q=String(E),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ve}function Q(E,q,J){if(E==null)return E;var te=[],ne=0;return z(E,te,"","",function(se){return q.call(J,se,ne++)}),te}function ee(E){if(E._status===-1){var q=E._result;q=q(),q.then(function(J){(E._status===0||E._status===-1)&&(E._status=1,E._result=J)},function(J){(E._status===0||E._status===-1)&&(E._status=2,E._result=J)}),E._status===-1&&(E._status=0,E._result=q)}if(E._status===1)return E._result.default;throw E._result}var me=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},$={map:Q,forEach:function(E,q,J){Q(E,function(){q.apply(this,arguments)},J)},count:function(E){var q=0;return Q(E,function(){q++}),q},toArray:function(E){return Q(E,function(q){return q})||[]},only:function(E){if(!Z(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return ye.Activity=x,ye.Children=$,ye.Component=N,ye.Fragment=s,ye.Profiler=u,ye.PureComponent=T,ye.StrictMode=l,ye.Suspense=g,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ye.__COMPILER_RUNTIME={__proto__:null,c:function(E){return I.H.useMemoCache(E)}},ye.cache=function(E){return function(){return E.apply(null,arguments)}},ye.cacheSignal=function(){return null},ye.cloneElement=function(E,q,J){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var te=k({},E.props),ne=E.key;if(q!=null)for(se in q.key!==void 0&&(ne=""+q.key),q)!P.call(q,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&q.ref===void 0||(te[se]=q[se]);var se=arguments.length-2;if(se===1)te.children=J;else if(1<se){for(var ve=Array(se),Pe=0;Pe<se;Pe++)ve[Pe]=arguments[Pe+2];te.children=ve}return H(E.type,ne,te)},ye.createContext=function(E){return E={$$typeof:f,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:h,_context:E},E},ye.createElement=function(E,q,J){var te,ne={},se=null;if(q!=null)for(te in q.key!==void 0&&(se=""+q.key),q)P.call(q,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(ne[te]=q[te]);var ve=arguments.length-2;if(ve===1)ne.children=J;else if(1<ve){for(var Pe=Array(ve),pe=0;pe<ve;pe++)Pe[pe]=arguments[pe+2];ne.children=Pe}if(E&&E.defaultProps)for(te in ve=E.defaultProps,ve)ne[te]===void 0&&(ne[te]=ve[te]);return H(E,se,ne)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(E){return{$$typeof:m,render:E}},ye.isValidElement=Z,ye.lazy=function(E){return{$$typeof:v,_payload:{_status:-1,_result:E},_init:ee}},ye.memo=function(E,q){return{$$typeof:p,type:E,compare:q===void 0?null:q}},ye.startTransition=function(E){var q=I.T,J={};I.T=J;try{var te=E(),ne=I.S;ne!==null&&ne(J,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(F,me)}catch(se){me(se)}finally{q!==null&&J.types!==null&&(q.types=J.types),I.T=q}},ye.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ye.use=function(E){return I.H.use(E)},ye.useActionState=function(E,q,J){return I.H.useActionState(E,q,J)},ye.useCallback=function(E,q){return I.H.useCallback(E,q)},ye.useContext=function(E){return I.H.useContext(E)},ye.useDebugValue=function(){},ye.useDeferredValue=function(E,q){return I.H.useDeferredValue(E,q)},ye.useEffect=function(E,q){return I.H.useEffect(E,q)},ye.useEffectEvent=function(E){return I.H.useEffectEvent(E)},ye.useId=function(){return I.H.useId()},ye.useImperativeHandle=function(E,q,J){return I.H.useImperativeHandle(E,q,J)},ye.useInsertionEffect=function(E,q){return I.H.useInsertionEffect(E,q)},ye.useLayoutEffect=function(E,q){return I.H.useLayoutEffect(E,q)},ye.useMemo=function(E,q){return I.H.useMemo(E,q)},ye.useOptimistic=function(E,q){return I.H.useOptimistic(E,q)},ye.useReducer=function(E,q,J){return I.H.useReducer(E,q,J)},ye.useRef=function(E){return I.H.useRef(E)},ye.useState=function(E){return I.H.useState(E)},ye.useSyncExternalStore=function(E,q,J){return I.H.useSyncExternalStore(E,q,J)},ye.useTransition=function(){return I.H.useTransition()},ye.version="19.2.5",ye}var Ip;function Za(){return Ip||(Ip=1,du.exports=l0()),du.exports}var _=Za();const Gt=id(_),ad=a0({__proto__:null,default:Gt},[_]);var hu={exports:{}},za={},fu={exports:{}},mu={};var zp;function c0(){return zp||(zp=1,(function(i){function r(z,Q){var ee=z.length;z.push(Q);e:for(;0<ee;){var me=ee-1>>>1,$=z[me];if(0<u($,Q))z[me]=Q,z[ee]=$,ee=me;else break e}}function s(z){return z.length===0?null:z[0]}function l(z){if(z.length===0)return null;var Q=z[0],ee=z.pop();if(ee!==Q){z[0]=ee;e:for(var me=0,$=z.length,E=$>>>1;me<E;){var q=2*(me+1)-1,J=z[q],te=q+1,ne=z[te];if(0>u(J,ee))te<$&&0>u(ne,J)?(z[me]=ne,z[te]=ee,me=te):(z[me]=J,z[q]=ee,me=q);else if(te<$&&0>u(ne,ee))z[me]=ne,z[te]=ee,me=te;else break e}}return Q}function u(z,Q){var ee=z.sortIndex-Q.sortIndex;return ee!==0?ee:z.id-Q.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var f=Date,m=f.now();i.unstable_now=function(){return f.now()-m}}var g=[],p=[],v=1,x=null,b=3,j=!1,S=!1,k=!1,A=!1,N=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function M(z){for(var Q=s(p);Q!==null;){if(Q.callback===null)l(p);else if(Q.startTime<=z)l(p),Q.sortIndex=Q.expirationTime,r(g,Q);else break;Q=s(p)}}function V(z){if(k=!1,M(z),!S)if(s(g)!==null)S=!0,F||(F=!0,oe());else{var Q=s(p);Q!==null&&ue(V,Q.startTime-z)}}var F=!1,I=-1,P=5,H=-1;function W(){return A?!0:!(i.unstable_now()-H<P)}function Z(){if(A=!1,F){var z=i.unstable_now();H=z;var Q=!0;try{e:{S=!1,k&&(k=!1,R(I),I=-1),j=!0;var ee=b;try{t:{for(M(z),x=s(g);x!==null&&!(x.expirationTime>z&&W());){var me=x.callback;if(typeof me=="function"){x.callback=null,b=x.priorityLevel;var $=me(x.expirationTime<=z);if(z=i.unstable_now(),typeof $=="function"){x.callback=$,M(z),Q=!0;break t}x===s(g)&&l(g),M(z)}else l(g);x=s(g)}if(x!==null)Q=!0;else{var E=s(p);E!==null&&ue(V,E.startTime-z),Q=!1}}break e}finally{x=null,b=ee,j=!1}Q=void 0}}finally{Q?oe():F=!1}}}var oe;if(typeof T=="function")oe=function(){T(Z)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,Ae=he.port2;he.port1.onmessage=Z,oe=function(){Ae.postMessage(null)}}else oe=function(){N(Z,0)};function ue(z,Q){I=N(function(){z(i.unstable_now())},Q)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(z){z.callback=null},i.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},i.unstable_getCurrentPriorityLevel=function(){return b},i.unstable_next=function(z){switch(b){case 1:case 2:case 3:var Q=3;break;default:Q=b}var ee=b;b=Q;try{return z()}finally{b=ee}},i.unstable_requestPaint=function(){A=!0},i.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ee=b;b=z;try{return Q()}finally{b=ee}},i.unstable_scheduleCallback=function(z,Q,ee){var me=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?me+ee:me):ee=me,z){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=ee+$,z={id:v++,callback:Q,priorityLevel:z,startTime:ee,expirationTime:$,sortIndex:-1},ee>me?(z.sortIndex=ee,r(p,z),s(g)===null&&z===s(p)&&(k?(R(I),I=-1):k=!0,ue(V,ee-me))):(z.sortIndex=$,r(g,z),S||j||(S=!0,F||(F=!0,oe()))),z},i.unstable_shouldYield=W,i.unstable_wrapCallback=function(z){var Q=b;return function(){var ee=b;b=Q;try{return z.apply(this,arguments)}finally{b=ee}}}})(mu)),mu}var Lp;function u0(){return Lp||(Lp=1,fu.exports=c0()),fu.exports}var pu={exports:{}},gt={};var Bp;function d0(){if(Bp)return gt;Bp=1;var i=Za();function r(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var l={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},u=Symbol.for("react.portal");function h(g,p,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:x==null?null:""+x,children:g,containerInfo:p,implementation:v}}var f=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,gt.createPortal=function(g,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return h(g,p,null,v)},gt.flushSync=function(g){var p=f.T,v=l.p;try{if(f.T=null,l.p=2,g)return g()}finally{f.T=p,l.p=v,l.d.f()}},gt.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,l.d.C(g,p))},gt.prefetchDNS=function(g){typeof g=="string"&&l.d.D(g)},gt.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var v=p.as,x=m(v,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,j=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?l.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:j}):v==="script"&&l.d.X(g,{crossOrigin:x,integrity:b,fetchPriority:j,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},gt.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=m(p.as,p.crossOrigin);l.d.M(g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&l.d.M(g)},gt.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,x=m(v,p.crossOrigin);l.d.L(g,v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},gt.preloadModule=function(g,p){if(typeof g=="string")if(p){var v=m(p.as,p.crossOrigin);l.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else l.d.m(g)},gt.requestFormReset=function(g){l.d.r(g)},gt.unstable_batchedUpdates=function(g,p){return g(p)},gt.useFormState=function(g,p,v){return f.H.useFormState(g,p,v)},gt.useFormStatus=function(){return f.H.useHostTransitionStatus()},gt.version="19.2.5",gt}var Fp;function qg(){if(Fp)return pu.exports;Fp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),pu.exports=d0(),pu.exports}var Up;function h0(){if(Up)return za;Up=1;var i=u0(),r=Za(),s=qg();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(h(e)!==e)throw Error(l(188))}function p(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,a=t;;){var c=n.return;if(c===null)break;var d=c.alternate;if(d===null){if(a=c.return,a!==null){n=a;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===n)return g(c),e;if(d===a)return g(c),t;d=d.sibling}throw Error(l(188))}if(n.return!==a.return)n=c,a=d;else{for(var y=!1,w=c.child;w;){if(w===n){y=!0,n=c,a=d;break}if(w===a){y=!0,a=c,n=d;break}w=w.sibling}if(!y){for(w=d.child;w;){if(w===n){y=!0,n=d,a=c;break}if(w===a){y=!0,a=d,n=c;break}w=w.sibling}if(!y)throw Error(l(189))}}if(n.alternate!==a)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),T=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=Z&&e[Z]||e["@@iterator"],typeof e=="function"?e:null)}var he=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===he?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case N:return"Profiler";case A:return"StrictMode";case V:return"Suspense";case F:return"SuspenseList";case H:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case T:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case M:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:Ae(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return Ae(e(t))}catch{}}return null}var ue=Array.isArray,z=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},me=[],$=-1;function E(e){return{current:e}}function q(e){0>$||(e.current=me[$],me[$]=null,$--)}function J(e,t){$++,me[$]=e.current,e.current=t}var te=E(null),ne=E(null),se=E(null),ve=E(null);function Pe(e,t){switch(J(se,t),J(ne,e),J(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?tp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=tp(t),e=np(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(te),J(te,e)}function pe(){q(te),q(ne),q(se)}function mt(e){e.memoizedState!==null&&J(ve,e);var t=te.current,n=np(t,e.type);t!==n&&(J(ne,e),J(te,n))}function nt(e){ne.current===e&&(q(te),q(ne)),ve.current===e&&(q(ve),Da._currentValue=ee)}var xt,Pt;function bt(e){if(xt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xt=t&&t[1]||"",Pt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xt+e+Pt}var Hi=!1;function Xo(e,t){if(!e||Hi)return"";Hi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(G){var U=G}Reflect.construct(e,[],X)}else{try{X.call()}catch(G){U=G}e.call(X.prototype)}}else{try{throw Error()}catch(G){U=G}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(G){if(G&&U&&typeof G.stack=="string")return[G.stack,U.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=a.DetermineComponentFrameRoot(),y=d[0],w=d[1];if(y&&w){var C=y.split(`
`),B=w.split(`
`);for(c=a=0;a<C.length&&!C[a].includes("DetermineComponentFrameRoot");)a++;for(;c<B.length&&!B[c].includes("DetermineComponentFrameRoot");)c++;if(a===C.length||c===B.length)for(a=C.length-1,c=B.length-1;1<=a&&0<=c&&C[a]!==B[c];)c--;for(;1<=a&&0<=c;a--,c--)if(C[a]!==B[c]){if(a!==1||c!==1)do if(a--,c--,0>c||C[a]!==B[c]){var Y=`
`+C[a].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=a&&0<=c);break}}}finally{Hi=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?bt(n):""}function er(e,t){switch(e.tag){case 26:case 27:case 5:return bt(e.type);case 16:return bt("Lazy");case 13:return e.child!==t&&t!==null?bt("Suspense Fallback"):bt("Suspense");case 19:return bt("SuspenseList");case 0:case 15:return Xo(e.type,!1);case 11:return Xo(e.type.render,!1);case 1:return Xo(e.type,!0);case 31:return bt("Activity");default:return""}}function pn(e){try{var t="",n=null;do t+=er(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var bo=Object.prototype.hasOwnProperty,nn=i.unstable_scheduleCallback,Vi=i.unstable_cancelCallback,tr=i.unstable_shouldYield,Ws=i.unstable_requestPaint,pt=i.unstable_now,Fe=i.unstable_getCurrentPriorityLevel,lt=i.unstable_ImmediatePriority,cn=i.unstable_UserBlockingPriority,Qo=i.unstable_NormalPriority,Fv=i.unstable_LowPriority,Pd=i.unstable_IdlePriority,Uv=i.log,Hv=i.unstable_setDisableYieldValue,Gi=null,Ot=null;function In(e){if(typeof Uv=="function"&&Hv(e),Ot&&typeof Ot.setStrictMode=="function")try{Ot.setStrictMode(Gi,e)}catch{}}var It=Math.clz32?Math.clz32:qv,Vv=Math.log,Gv=Math.LN2;function qv(e){return e>>>=0,e===0?32:31-(Vv(e)/Gv|0)|0}var nr=256,or=262144,ir=4194304;function jo(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ar(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var c=0,d=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var w=a&134217727;return w!==0?(a=w&~d,a!==0?c=jo(a):(y&=w,y!==0?c=jo(y):n||(n=w&~e,n!==0&&(c=jo(n))))):(w=a&~d,w!==0?c=jo(w):y!==0?c=jo(y):n||(n=a&~e,n!==0&&(c=jo(n)))),c===0?0:t!==0&&t!==c&&(t&d)===0&&(d=c&-c,n=t&-t,d>=n||d===32&&(n&4194048)!==0)?t:c}function qi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Yv(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Od(){var e=ir;return ir<<=1,(ir&62914560)===0&&(ir=4194304),e}function $s(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Kv(e,t,n,a,c,d){var y=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var w=e.entanglements,C=e.expirationTimes,B=e.hiddenUpdates;for(n=y&~n;0<n;){var Y=31-It(n),X=1<<Y;w[Y]=0,C[Y]=-1;var U=B[Y];if(U!==null)for(B[Y]=null,Y=0;Y<U.length;Y++){var G=U[Y];G!==null&&(G.lane&=-536870913)}n&=~X}a!==0&&Id(e,a,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(y&~t))}function Id(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-It(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function zd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-It(n),c=1<<a;c&t|e[a]&t&&(e[a]|=t),n&=~c}}function Ld(e,t){var n=t&-t;return n=(n&42)!==0?1:Js(n),(n&(e.suspendedLanes|t))!==0?0:n}function Js(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function el(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bd(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:kp(e.type))}function Fd(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var zn=Math.random().toString(36).slice(2),ct="__reactFiber$"+zn,St="__reactProps$"+zn,Zo="__reactContainer$"+zn,tl="__reactEvents$"+zn,Xv="__reactListeners$"+zn,Qv="__reactHandles$"+zn,Ud="__reactResources$"+zn,Ki="__reactMarker$"+zn;function nl(e){delete e[ct],delete e[St],delete e[tl],delete e[Xv],delete e[Qv]}function Wo(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Zo]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cp(e);e!==null;){if(n=e[ct])return n;e=cp(e)}return t}e=n,n=e.parentNode}return null}function $o(e){if(e=e[ct]||e[Zo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Xi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function Jo(e){var t=e[Ud];return t||(t=e[Ud]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function at(e){e[Ki]=!0}var Hd=new Set,Vd={};function wo(e,t){ei(e,t),ei(e+"Capture",t)}function ei(e,t){for(Vd[e]=t,e=0;e<t.length;e++)Hd.add(t[e])}var Zv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gd={},qd={};function Wv(e){return bo.call(qd,e)?!0:bo.call(Gd,e)?!1:Zv.test(e)?qd[e]=!0:(Gd[e]=!0,!1)}function rr(e,t,n){if(Wv(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function sr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function gn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $v(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,d=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(y){n=""+y,d.call(this,y)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(y){n=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ol(e){if(!e._valueTracker){var t=Yd(e)?"checked":"value";e._valueTracker=$v(e,t,""+e[t])}}function Kd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Yd(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Jv=/[\n"\\]/g;function Kt(e){return e.replace(Jv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function il(e,t,n,a,c,d,y,w){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),t!=null?y==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Yt(t)):e.value!==""+Yt(t)&&(e.value=""+Yt(t)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),t!=null?al(e,y,Yt(t)):n!=null?al(e,y,Yt(n)):a!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+Yt(w):e.removeAttribute("name")}function Xd(e,t,n,a,c,d,y,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),t!=null||n!=null){if(!(d!=="submit"&&d!=="reset"||t!=null)){ol(e);return}n=n!=null?""+Yt(n):"",t=t!=null?""+Yt(t):n,w||t===e.value||(e.value=t),e.defaultValue=t}a=a??c,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=w?e.checked:!!a,e.defaultChecked=!!a,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),ol(e)}function al(e,t,n){t==="number"&&lr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ti(e,t,n,a){if(e=e.options,t){t={};for(var c=0;c<n.length;c++)t["$"+n[c]]=!0;for(n=0;n<e.length;n++)c=t.hasOwnProperty("$"+e[n].value),e[n].selected!==c&&(e[n].selected=c),c&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,c=0;c<e.length;c++){if(e[c].value===n){e[c].selected=!0,a&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function Qd(e,t,n){if(t!=null&&(t=""+Yt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Yt(n):""}function Zd(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(l(92));if(ue(a)){if(1<a.length)throw Error(l(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Yt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),ol(e)}function ni(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ex=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wd(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||ex.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function $d(e,t,n){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var c in t)a=t[c],t.hasOwnProperty(c)&&n[c]!==a&&Wd(e,c,a)}else for(var d in t)t.hasOwnProperty(d)&&Wd(e,d,t[d])}function rl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cr(e){return nx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function yn(){}var sl=null;function ll(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oi=null,ii=null;function Jd(e){var t=$o(e);if(t&&(e=t.stateNode)){var n=e[St]||null;e:switch(e=t.stateNode,t.type){case"input":if(il(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Kt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var c=a[St]||null;if(!c)throw Error(l(90));il(a,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Kd(a)}break e;case"textarea":Qd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ti(e,!!n.multiple,t,!1)}}}var cl=!1;function eh(e,t,n){if(cl)return e(t,n);cl=!0;try{var a=e(t);return a}finally{if(cl=!1,(oi!==null||ii!==null)&&(Zr(),oi&&(t=oi,e=ii,ii=oi=null,Jd(t),e)))for(t=0;t<e.length;t++)Jd(e[t])}}function Qi(e,t){var n=e.stateNode;if(n===null)return null;var a=n[St]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ul=!1;if(vn)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){ul=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{ul=!1}var Ln=null,dl=null,ur=null;function th(){if(ur)return ur;var e,t=dl,n=t.length,a,c="value"in Ln?Ln.value:Ln.textContent,d=c.length;for(e=0;e<n&&t[e]===c[e];e++);var y=n-e;for(a=1;a<=y&&t[n-a]===c[d-a];a++);return ur=c.slice(e,1<a?1-a:void 0)}function dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hr(){return!0}function nh(){return!1}function Tt(e){function t(n,a,c,d,y){this._reactName=n,this._targetInst=c,this.type=a,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(n=e[w],this[w]=n?n(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?hr:nh,this.isPropagationStopped=nh,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),t}var So={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fr=Tt(So),Wi=x({},So,{view:0,detail:0}),ox=Tt(Wi),hl,fl,$i,mr=x({},Wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$i&&($i&&e.type==="mousemove"?(hl=e.screenX-$i.screenX,fl=e.screenY-$i.screenY):fl=hl=0,$i=e),hl)},movementY:function(e){return"movementY"in e?e.movementY:fl}}),oh=Tt(mr),ix=x({},mr,{dataTransfer:0}),ax=Tt(ix),rx=x({},Wi,{relatedTarget:0}),ml=Tt(rx),sx=x({},So,{animationName:0,elapsedTime:0,pseudoElement:0}),lx=Tt(sx),cx=x({},So,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ux=Tt(cx),dx=x({},So,{data:0}),ih=Tt(dx),hx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function px(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mx[e])?!!t[e]:!1}function pl(){return px}var gx=x({},Wi,{key:function(e){if(e.key){var t=hx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pl,charCode:function(e){return e.type==="keypress"?dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yx=Tt(gx),vx=x({},mr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=Tt(vx),xx=x({},Wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pl}),bx=Tt(xx),jx=x({},So,{propertyName:0,elapsedTime:0,pseudoElement:0}),wx=Tt(jx),Sx=x({},mr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tx=Tt(Sx),kx=x({},So,{newState:0,oldState:0}),Rx=Tt(kx),Ax=[9,13,27,32],gl=vn&&"CompositionEvent"in window,Ji=null;vn&&"documentMode"in document&&(Ji=document.documentMode);var Cx=vn&&"TextEvent"in window&&!Ji,rh=vn&&(!gl||Ji&&8<Ji&&11>=Ji),sh=" ",lh=!1;function ch(e,t){switch(e){case"keyup":return Ax.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ai=!1;function Mx(e,t){switch(e){case"compositionend":return uh(t);case"keypress":return t.which!==32?null:(lh=!0,sh);case"textInput":return e=t.data,e===sh&&lh?null:e;default:return null}}function _x(e,t){if(ai)return e==="compositionend"||!gl&&ch(e,t)?(e=th(),ur=dl=Ln=null,ai=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rh&&t.locale!=="ko"?null:t.data;default:return null}}var Ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ex[e.type]:t==="textarea"}function hh(e,t,n,a){oi?ii?ii.push(a):ii=[a]:oi=a,t=os(t,"onChange"),0<t.length&&(n=new fr("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var ea=null,ta=null;function Dx(e){Qm(e,0)}function pr(e){var t=Xi(e);if(Kd(t))return e}function fh(e,t){if(e==="change")return t}var mh=!1;if(vn){var yl;if(vn){var vl="oninput"in document;if(!vl){var ph=document.createElement("div");ph.setAttribute("oninput","return;"),vl=typeof ph.oninput=="function"}yl=vl}else yl=!1;mh=yl&&(!document.documentMode||9<document.documentMode)}function gh(){ea&&(ea.detachEvent("onpropertychange",yh),ta=ea=null)}function yh(e){if(e.propertyName==="value"&&pr(ta)){var t=[];hh(t,ta,e,ll(e)),eh(Dx,t)}}function Nx(e,t,n){e==="focusin"?(gh(),ea=t,ta=n,ea.attachEvent("onpropertychange",yh)):e==="focusout"&&gh()}function Px(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pr(ta)}function Ox(e,t){if(e==="click")return pr(t)}function Ix(e,t){if(e==="input"||e==="change")return pr(t)}function zx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:zx;function na(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var c=n[a];if(!bo.call(t,c)||!zt(e[c],t[c]))return!1}return!0}function vh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xh(e,t){var n=vh(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vh(n)}}function bh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=lr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=lr(e.document)}return t}function xl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Lx=vn&&"documentMode"in document&&11>=document.documentMode,ri=null,bl=null,oa=null,jl=!1;function wh(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jl||ri==null||ri!==lr(a)||(a=ri,"selectionStart"in a&&xl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),oa&&na(oa,a)||(oa=a,a=os(bl,"onSelect"),0<a.length&&(t=new fr("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ri)))}function To(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var si={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionrun:To("Transition","TransitionRun"),transitionstart:To("Transition","TransitionStart"),transitioncancel:To("Transition","TransitionCancel"),transitionend:To("Transition","TransitionEnd")},wl={},Sh={};vn&&(Sh=document.createElement("div").style,"AnimationEvent"in window||(delete si.animationend.animation,delete si.animationiteration.animation,delete si.animationstart.animation),"TransitionEvent"in window||delete si.transitionend.transition);function ko(e){if(wl[e])return wl[e];if(!si[e])return e;var t=si[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sh)return wl[e]=t[n];return e}var Th=ko("animationend"),kh=ko("animationiteration"),Rh=ko("animationstart"),Bx=ko("transitionrun"),Fx=ko("transitionstart"),Ux=ko("transitioncancel"),Ah=ko("transitionend"),Ch=new Map,Sl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sl.push("scrollEnd");function on(e,t){Ch.set(e,t),wo(t,[e])}var gr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Xt=[],li=0,Tl=0;function yr(){for(var e=li,t=Tl=li=0;t<e;){var n=Xt[t];Xt[t++]=null;var a=Xt[t];Xt[t++]=null;var c=Xt[t];Xt[t++]=null;var d=Xt[t];if(Xt[t++]=null,a!==null&&c!==null){var y=a.pending;y===null?c.next=c:(c.next=y.next,y.next=c),a.pending=c}d!==0&&Mh(n,c,d)}}function vr(e,t,n,a){Xt[li++]=e,Xt[li++]=t,Xt[li++]=n,Xt[li++]=a,Tl|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function kl(e,t,n,a){return vr(e,t,n,a),xr(e)}function Ro(e,t){return vr(e,null,null,t),xr(e)}function Mh(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var c=!1,d=e.return;d!==null;)d.childLanes|=n,a=d.alternate,a!==null&&(a.childLanes|=n),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&t!==null&&(c=31-It(n),e=d.hiddenUpdates,a=e[c],a===null?e[c]=[t]:a.push(t),t.lane=n|536870912),d):null}function xr(e){if(50<ka)throw ka=0,Pc=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ci={};function Hx(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(e,t,n,a){return new Hx(e,t,n,a)}function Rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xn(e,t){var n=e.alternate;return n===null?(n=Lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _h(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function br(e,t,n,a,c,d){var y=0;if(a=e,typeof e=="function")Rl(e)&&(y=1);else if(typeof e=="string")y=Kb(e,n,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case H:return e=Lt(31,n,t,c),e.elementType=H,e.lanes=d,e;case k:return Ao(n.children,c,d,t);case A:y=8,c|=24;break;case N:return e=Lt(12,n,t,c|2),e.elementType=N,e.lanes=d,e;case V:return e=Lt(13,n,t,c),e.elementType=V,e.lanes=d,e;case F:return e=Lt(19,n,t,c),e.elementType=F,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case T:y=10;break e;case R:y=9;break e;case M:y=11;break e;case I:y=14;break e;case P:y=16,a=null;break e}y=29,n=Error(l(130,e===null?"null":typeof e,"")),a=null}return t=Lt(y,n,t,c),t.elementType=e,t.type=a,t.lanes=d,t}function Ao(e,t,n,a){return e=Lt(7,e,a,t),e.lanes=n,e}function Al(e,t,n){return e=Lt(6,e,null,t),e.lanes=n,e}function Eh(e){var t=Lt(18,null,null,0);return t.stateNode=e,t}function Cl(e,t,n){return t=Lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Dh=new WeakMap;function Qt(e,t){if(typeof e=="object"&&e!==null){var n=Dh.get(e);return n!==void 0?n:(t={value:e,source:t,stack:pn(t)},Dh.set(e,t),t)}return{value:e,source:t,stack:pn(t)}}var ui=[],di=0,jr=null,ia=0,Zt=[],Wt=0,Bn=null,un=1,dn="";function bn(e,t){ui[di++]=ia,ui[di++]=jr,jr=e,ia=t}function Nh(e,t,n){Zt[Wt++]=un,Zt[Wt++]=dn,Zt[Wt++]=Bn,Bn=e;var a=un;e=dn;var c=32-It(a)-1;a&=~(1<<c),n+=1;var d=32-It(t)+c;if(30<d){var y=c-c%5;d=(a&(1<<y)-1).toString(32),a>>=y,c-=y,un=1<<32-It(t)+c|n<<c|a,dn=d+e}else un=1<<d|n<<c|a,dn=e}function Ml(e){e.return!==null&&(bn(e,1),Nh(e,1,0))}function _l(e){for(;e===jr;)jr=ui[--di],ui[di]=null,ia=ui[--di],ui[di]=null;for(;e===Bn;)Bn=Zt[--Wt],Zt[Wt]=null,dn=Zt[--Wt],Zt[Wt]=null,un=Zt[--Wt],Zt[Wt]=null}function Ph(e,t){Zt[Wt++]=un,Zt[Wt++]=dn,Zt[Wt++]=Bn,un=t.id,dn=t.overflow,Bn=e}var ut=null,He=null,Re=!1,Fn=null,$t=!1,El=Error(l(519));function Un(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw aa(Qt(t,e)),El}function Oh(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[ct]=e,t[St]=a,n){case"dialog":Se("cancel",t),Se("close",t);break;case"iframe":case"object":case"embed":Se("load",t);break;case"video":case"audio":for(n=0;n<Aa.length;n++)Se(Aa[n],t);break;case"source":Se("error",t);break;case"img":case"image":case"link":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"input":Se("invalid",t),Xd(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Se("invalid",t);break;case"textarea":Se("invalid",t),Zd(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Jm(t.textContent,n)?(a.popover!=null&&(Se("beforetoggle",t),Se("toggle",t)),a.onScroll!=null&&Se("scroll",t),a.onScrollEnd!=null&&Se("scrollend",t),a.onClick!=null&&(t.onclick=yn),t=!0):t=!1,t||Un(e,!0)}function Ih(e){for(ut=e.return;ut;)switch(ut.tag){case 5:case 31:case 13:$t=!1;return;case 27:case 3:$t=!0;return;default:ut=ut.return}}function hi(e){if(e!==ut)return!1;if(!Re)return Ih(e),Re=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Qc(e.type,e.memoizedProps)),n=!n),n&&He&&Un(e),Ih(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));He=lp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));He=lp(e)}else t===27?(t=He,to(e.type)?(e=eu,eu=null,He=e):He=t):He=ut?en(e.stateNode.nextSibling):null;return!0}function Co(){He=ut=null,Re=!1}function Dl(){var e=Fn;return e!==null&&(Ct===null?Ct=e:Ct.push.apply(Ct,e),Fn=null),e}function aa(e){Fn===null?Fn=[e]:Fn.push(e)}var Nl=E(null),Mo=null,jn=null;function Hn(e,t,n){J(Nl,t._currentValue),t._currentValue=n}function wn(e){e._currentValue=Nl.current,q(Nl)}function Pl(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Ol(e,t,n,a){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var y=c.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=c;for(var C=0;C<t.length;C++)if(w.context===t[C]){d.lanes|=n,w=d.alternate,w!==null&&(w.lanes|=n),Pl(d.return,n,e),a||(y=null);break e}d=w.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(l(341));y.lanes|=n,d=y.alternate,d!==null&&(d.lanes|=n),Pl(y,n,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function fi(e,t,n,a){e=null;for(var c=t,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(l(387));if(y=y.memoizedProps,y!==null){var w=c.type;zt(c.pendingProps.value,y.value)||(e!==null?e.push(w):e=[w])}}else if(c===ve.current){if(y=c.alternate,y===null)throw Error(l(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Da):e=[Da])}c=c.return}e!==null&&Ol(t,e,n,a),t.flags|=262144}function wr(e){for(e=e.firstContext;e!==null;){if(!zt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _o(e){Mo=e,jn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dt(e){return zh(Mo,e)}function Sr(e,t){return Mo===null&&_o(e),zh(e,t)}function zh(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},jn===null){if(e===null)throw Error(l(308));jn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else jn=jn.next=t;return n}var Vx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Gx=i.unstable_scheduleCallback,qx=i.unstable_NormalPriority,$e={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Il(){return{controller:new Vx,data:new Map,refCount:0}}function ra(e){e.refCount--,e.refCount===0&&Gx(qx,function(){e.controller.abort()})}var sa=null,zl=0,mi=0,pi=null;function Yx(e,t){if(sa===null){var n=sa=[];zl=0,mi=Fc(),pi={status:"pending",value:void 0,then:function(a){n.push(a)}}}return zl++,t.then(Lh,Lh),t}function Lh(){if(--zl===0&&sa!==null){pi!==null&&(pi.status="fulfilled");var e=sa;sa=null,mi=0,pi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Kx(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(c){n.push(c)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var c=0;c<n.length;c++)(0,n[c])(t)},function(c){for(a.status="rejected",a.reason=c,c=0;c<n.length;c++)(0,n[c])(void 0)}),a}var Bh=z.S;z.S=function(e,t){Sm=pt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Yx(e,t),Bh!==null&&Bh(e,t)};var Eo=E(null);function Ll(){var e=Eo.current;return e!==null?e:Be.pooledCache}function Tr(e,t){t===null?J(Eo,Eo.current):J(Eo,t.pool)}function Fh(){var e=Ll();return e===null?null:{parent:$e._currentValue,pool:e}}var gi=Error(l(460)),Bl=Error(l(474)),kr=Error(l(542)),Rr={then:function(){}};function Uh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(yn,yn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gh(e),e;default:if(typeof t.status=="string")t.then(yn,yn);else{if(e=Be,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=a}},function(a){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gh(e),e}throw No=t,gi}}function Do(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(No=n,gi):n}}var No=null;function Vh(){if(No===null)throw Error(l(459));var e=No;return No=null,e}function Gh(e){if(e===gi||e===kr)throw Error(l(483))}var yi=null,la=0;function Ar(e){var t=la;return la+=1,yi===null&&(yi=[]),Hh(yi,e,t)}function ca(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Cr(e,t){throw t.$$typeof===b?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function qh(e){function t(O,D){if(e){var L=O.deletions;L===null?(O.deletions=[D],O.flags|=16):L.push(D)}}function n(O,D){if(!e)return null;for(;D!==null;)t(O,D),D=D.sibling;return null}function a(O){for(var D=new Map;O!==null;)O.key!==null?D.set(O.key,O):D.set(O.index,O),O=O.sibling;return D}function c(O,D){return O=xn(O,D),O.index=0,O.sibling=null,O}function d(O,D,L){return O.index=L,e?(L=O.alternate,L!==null?(L=L.index,L<D?(O.flags|=67108866,D):L):(O.flags|=67108866,D)):(O.flags|=1048576,D)}function y(O){return e&&O.alternate===null&&(O.flags|=67108866),O}function w(O,D,L,K){return D===null||D.tag!==6?(D=Al(L,O.mode,K),D.return=O,D):(D=c(D,L),D.return=O,D)}function C(O,D,L,K){var de=L.type;return de===k?Y(O,D,L.props.children,K,L.key):D!==null&&(D.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===P&&Do(de)===D.type)?(D=c(D,L.props),ca(D,L),D.return=O,D):(D=br(L.type,L.key,L.props,null,O.mode,K),ca(D,L),D.return=O,D)}function B(O,D,L,K){return D===null||D.tag!==4||D.stateNode.containerInfo!==L.containerInfo||D.stateNode.implementation!==L.implementation?(D=Cl(L,O.mode,K),D.return=O,D):(D=c(D,L.children||[]),D.return=O,D)}function Y(O,D,L,K,de){return D===null||D.tag!==7?(D=Ao(L,O.mode,K,de),D.return=O,D):(D=c(D,L),D.return=O,D)}function X(O,D,L){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=Al(""+D,O.mode,L),D.return=O,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case j:return L=br(D.type,D.key,D.props,null,O.mode,L),ca(L,D),L.return=O,L;case S:return D=Cl(D,O.mode,L),D.return=O,D;case P:return D=Do(D),X(O,D,L)}if(ue(D)||oe(D))return D=Ao(D,O.mode,L,null),D.return=O,D;if(typeof D.then=="function")return X(O,Ar(D),L);if(D.$$typeof===T)return X(O,Sr(O,D),L);Cr(O,D)}return null}function U(O,D,L,K){var de=D!==null?D.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return de!==null?null:w(O,D,""+L,K);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case j:return L.key===de?C(O,D,L,K):null;case S:return L.key===de?B(O,D,L,K):null;case P:return L=Do(L),U(O,D,L,K)}if(ue(L)||oe(L))return de!==null?null:Y(O,D,L,K,null);if(typeof L.then=="function")return U(O,D,Ar(L),K);if(L.$$typeof===T)return U(O,D,Sr(O,L),K);Cr(O,L)}return null}function G(O,D,L,K,de){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return O=O.get(L)||null,w(D,O,""+K,de);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case j:return O=O.get(K.key===null?L:K.key)||null,C(D,O,K,de);case S:return O=O.get(K.key===null?L:K.key)||null,B(D,O,K,de);case P:return K=Do(K),G(O,D,L,K,de)}if(ue(K)||oe(K))return O=O.get(L)||null,Y(D,O,K,de,null);if(typeof K.then=="function")return G(O,D,L,Ar(K),de);if(K.$$typeof===T)return G(O,D,L,Sr(D,K),de);Cr(D,K)}return null}function ie(O,D,L,K){for(var de=null,Ce=null,le=D,be=D=0,ke=null;le!==null&&be<L.length;be++){le.index>be?(ke=le,le=null):ke=le.sibling;var Me=U(O,le,L[be],K);if(Me===null){le===null&&(le=ke);break}e&&le&&Me.alternate===null&&t(O,le),D=d(Me,D,be),Ce===null?de=Me:Ce.sibling=Me,Ce=Me,le=ke}if(be===L.length)return n(O,le),Re&&bn(O,be),de;if(le===null){for(;be<L.length;be++)le=X(O,L[be],K),le!==null&&(D=d(le,D,be),Ce===null?de=le:Ce.sibling=le,Ce=le);return Re&&bn(O,be),de}for(le=a(le);be<L.length;be++)ke=G(le,O,be,L[be],K),ke!==null&&(e&&ke.alternate!==null&&le.delete(ke.key===null?be:ke.key),D=d(ke,D,be),Ce===null?de=ke:Ce.sibling=ke,Ce=ke);return e&&le.forEach(function(ro){return t(O,ro)}),Re&&bn(O,be),de}function fe(O,D,L,K){if(L==null)throw Error(l(151));for(var de=null,Ce=null,le=D,be=D=0,ke=null,Me=L.next();le!==null&&!Me.done;be++,Me=L.next()){le.index>be?(ke=le,le=null):ke=le.sibling;var ro=U(O,le,Me.value,K);if(ro===null){le===null&&(le=ke);break}e&&le&&ro.alternate===null&&t(O,le),D=d(ro,D,be),Ce===null?de=ro:Ce.sibling=ro,Ce=ro,le=ke}if(Me.done)return n(O,le),Re&&bn(O,be),de;if(le===null){for(;!Me.done;be++,Me=L.next())Me=X(O,Me.value,K),Me!==null&&(D=d(Me,D,be),Ce===null?de=Me:Ce.sibling=Me,Ce=Me);return Re&&bn(O,be),de}for(le=a(le);!Me.done;be++,Me=L.next())Me=G(le,O,be,Me.value,K),Me!==null&&(e&&Me.alternate!==null&&le.delete(Me.key===null?be:Me.key),D=d(Me,D,be),Ce===null?de=Me:Ce.sibling=Me,Ce=Me);return e&&le.forEach(function(i0){return t(O,i0)}),Re&&bn(O,be),de}function ze(O,D,L,K){if(typeof L=="object"&&L!==null&&L.type===k&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case j:e:{for(var de=L.key;D!==null;){if(D.key===de){if(de=L.type,de===k){if(D.tag===7){n(O,D.sibling),K=c(D,L.props.children),K.return=O,O=K;break e}}else if(D.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===P&&Do(de)===D.type){n(O,D.sibling),K=c(D,L.props),ca(K,L),K.return=O,O=K;break e}n(O,D);break}else t(O,D);D=D.sibling}L.type===k?(K=Ao(L.props.children,O.mode,K,L.key),K.return=O,O=K):(K=br(L.type,L.key,L.props,null,O.mode,K),ca(K,L),K.return=O,O=K)}return y(O);case S:e:{for(de=L.key;D!==null;){if(D.key===de)if(D.tag===4&&D.stateNode.containerInfo===L.containerInfo&&D.stateNode.implementation===L.implementation){n(O,D.sibling),K=c(D,L.children||[]),K.return=O,O=K;break e}else{n(O,D);break}else t(O,D);D=D.sibling}K=Cl(L,O.mode,K),K.return=O,O=K}return y(O);case P:return L=Do(L),ze(O,D,L,K)}if(ue(L))return ie(O,D,L,K);if(oe(L)){if(de=oe(L),typeof de!="function")throw Error(l(150));return L=de.call(L),fe(O,D,L,K)}if(typeof L.then=="function")return ze(O,D,Ar(L),K);if(L.$$typeof===T)return ze(O,D,Sr(O,L),K);Cr(O,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,D!==null&&D.tag===6?(n(O,D.sibling),K=c(D,L),K.return=O,O=K):(n(O,D),K=Al(L,O.mode,K),K.return=O,O=K),y(O)):n(O,D)}return function(O,D,L,K){try{la=0;var de=ze(O,D,L,K);return yi=null,de}catch(le){if(le===gi||le===kr)throw le;var Ce=Lt(29,le,null,O.mode);return Ce.lanes=K,Ce.return=O,Ce}}}var Po=qh(!0),Yh=qh(!1),Vn=!1;function Fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ul(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Gn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(_e&2)!==0){var c=a.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),a.pending=t,t=xr(e),Mh(e,null,n),t}return vr(e,a,t,n),xr(e)}function ua(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,zd(e,n)}}function Hl(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var c=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var y={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};d===null?c=d=y:d=d.next=y,n=n.next}while(n!==null);d===null?c=d=t:d=d.next=t}else c=d=t;n={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Vl=!1;function da(){if(Vl){var e=pi;if(e!==null)throw e}}function ha(e,t,n,a){Vl=!1;var c=e.updateQueue;Vn=!1;var d=c.firstBaseUpdate,y=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var C=w,B=C.next;C.next=null,y===null?d=B:y.next=B,y=C;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,w=Y.lastBaseUpdate,w!==y&&(w===null?Y.firstBaseUpdate=B:w.next=B,Y.lastBaseUpdate=C))}if(d!==null){var X=c.baseState;y=0,Y=B=C=null,w=d;do{var U=w.lane&-536870913,G=U!==w.lane;if(G?(Te&U)===U:(a&U)===U){U!==0&&U===mi&&(Vl=!0),Y!==null&&(Y=Y.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var ie=e,fe=w;U=t;var ze=n;switch(fe.tag){case 1:if(ie=fe.payload,typeof ie=="function"){X=ie.call(ze,X,U);break e}X=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=fe.payload,U=typeof ie=="function"?ie.call(ze,X,U):ie,U==null)break e;X=x({},X,U);break e;case 2:Vn=!0}}U=w.callback,U!==null&&(e.flags|=64,G&&(e.flags|=8192),G=c.callbacks,G===null?c.callbacks=[U]:G.push(U))}else G={lane:U,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Y===null?(B=Y=G,C=X):Y=Y.next=G,y|=U;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;G=w,w=G.next,G.next=null,c.lastBaseUpdate=G,c.shared.pending=null}}while(!0);Y===null&&(C=X),c.baseState=C,c.firstBaseUpdate=B,c.lastBaseUpdate=Y,d===null&&(c.shared.lanes=0),Zn|=y,e.lanes=y,e.memoizedState=X}}function Kh(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function Xh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Kh(n[e],t)}var vi=E(null),Mr=E(0);function Qh(e,t){e=En,J(Mr,e),J(vi,t),En=e|t.baseLanes}function Gl(){J(Mr,En),J(vi,vi.current)}function ql(){En=Mr.current,q(vi),q(Mr)}var Bt=E(null),Jt=null;function Yn(e){var t=e.alternate;J(Qe,Qe.current&1),J(Bt,e),Jt===null&&(t===null||vi.current!==null||t.memoizedState!==null)&&(Jt=e)}function Yl(e){J(Qe,Qe.current),J(Bt,e),Jt===null&&(Jt=e)}function Zh(e){e.tag===22?(J(Qe,Qe.current),J(Bt,e),Jt===null&&(Jt=e)):Kn()}function Kn(){J(Qe,Qe.current),J(Bt,Bt.current)}function Ft(e){q(Bt),Jt===e&&(Jt=null),q(Qe)}var Qe=E(0);function _r(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||$c(n)||Jc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sn=0,xe=null,Oe=null,Je=null,Er=!1,xi=!1,Oo=!1,Dr=0,fa=0,bi=null,Xx=0;function Ke(){throw Error(l(321))}function Kl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function Xl(e,t,n,a,c,d){return Sn=d,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?Pf:cc,Oo=!1,d=n(a,c),Oo=!1,xi&&(d=$h(t,n,a,c)),Wh(e),d}function Wh(e){z.H=ga;var t=Oe!==null&&Oe.next!==null;if(Sn=0,Je=Oe=xe=null,Er=!1,fa=0,bi=null,t)throw Error(l(300));e===null||et||(e=e.dependencies,e!==null&&wr(e)&&(et=!0))}function $h(e,t,n,a){xe=e;var c=0;do{if(xi&&(bi=null),fa=0,xi=!1,25<=c)throw Error(l(301));if(c+=1,Je=Oe=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=Of,d=t(n,a)}while(xi);return d}function Qx(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?ma(t):t,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(xe.flags|=1024),t}function Ql(){var e=Dr!==0;return Dr=0,e}function Zl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Wl(e){if(Er){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Er=!1}Sn=0,Je=Oe=xe=null,xi=!1,fa=Dr=0,bi=null}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?xe.memoizedState=Je=e:Je=Je.next=e,Je}function Ze(){if(Oe===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=Je===null?xe.memoizedState:Je.next;if(t!==null)Je=t,Oe=e;else{if(e===null)throw xe.alternate===null?Error(l(467)):Error(l(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Je===null?xe.memoizedState=Je=e:Je=Je.next=e}return Je}function Nr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ma(e){var t=fa;return fa+=1,bi===null&&(bi=[]),e=Hh(bi,e,t),t=xe,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?Pf:cc),e}function Pr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ma(e);if(e.$$typeof===T)return dt(e)}throw Error(l(438,String(e)))}function $l(e){var t=null,n=xe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=xe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Nr(),xe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=W;return t.index++,n}function Tn(e,t){return typeof t=="function"?t(e):t}function Or(e){var t=Ze();return Jl(t,Oe,e)}function Jl(e,t,n){var a=e.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=n;var c=e.baseQueue,d=a.pending;if(d!==null){if(c!==null){var y=c.next;c.next=d.next,d.next=y}t.baseQueue=c=d,a.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{t=c.next;var w=y=null,C=null,B=t,Y=!1;do{var X=B.lane&-536870913;if(X!==B.lane?(Te&X)===X:(Sn&X)===X){var U=B.revertLane;if(U===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),X===mi&&(Y=!0);else if((Sn&U)===U){B=B.next,U===mi&&(Y=!0);continue}else X={lane:0,revertLane:B.revertLane,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},C===null?(w=C=X,y=d):C=C.next=X,xe.lanes|=U,Zn|=U;X=B.action,Oo&&n(d,X),d=B.hasEagerState?B.eagerState:n(d,X)}else U={lane:X,revertLane:B.revertLane,gesture:B.gesture,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},C===null?(w=C=U,y=d):C=C.next=U,xe.lanes|=X,Zn|=X;B=B.next}while(B!==null&&B!==t);if(C===null?y=d:C.next=w,!zt(d,e.memoizedState)&&(et=!0,Y&&(n=pi,n!==null)))throw n;e.memoizedState=d,e.baseState=y,e.baseQueue=C,a.lastRenderedState=d}return c===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ec(e){var t=Ze(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var a=n.dispatch,c=n.pending,d=t.memoizedState;if(c!==null){n.pending=null;var y=c=c.next;do d=e(d,y.action),y=y.next;while(y!==c);zt(d,t.memoizedState)||(et=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),n.lastRenderedState=d}return[d,a]}function Jh(e,t,n){var a=xe,c=Ze(),d=Re;if(d){if(n===void 0)throw Error(l(407));n=n()}else n=t();var y=!zt((Oe||c).memoizedState,n);if(y&&(c.memoizedState=n,et=!0),c=c.queue,oc(nf.bind(null,a,c,e),[e]),c.getSnapshot!==t||y||Je!==null&&Je.memoizedState.tag&1){if(a.flags|=2048,ji(9,{destroy:void 0},tf.bind(null,a,c,n,t),null),Be===null)throw Error(l(349));d||(Sn&127)!==0||ef(a,t,n)}return n}function ef(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xe.updateQueue,t===null?(t=Nr(),xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tf(e,t,n,a){t.value=n,t.getSnapshot=a,of(t)&&af(e)}function nf(e,t,n){return n(function(){of(t)&&af(e)})}function of(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function af(e){var t=Ro(e,2);t!==null&&Mt(t,e,2)}function tc(e){var t=jt();if(typeof e=="function"){var n=e;if(e=n(),Oo){In(!0);try{n()}finally{In(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:e},t}function rf(e,t,n,a){return e.baseState=n,Jl(e,Oe,typeof a=="function"?a:Tn)}function Zx(e,t,n,a,c){if(Lr(e))throw Error(l(485));if(e=t.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};z.T!==null?n(!0):d.isTransition=!1,a(d),n=t.pending,n===null?(d.next=t.pending=d,sf(t,d)):(d.next=n.next,t.pending=n.next=d)}}function sf(e,t){var n=t.action,a=t.payload,c=e.state;if(t.isTransition){var d=z.T,y={};z.T=y;try{var w=n(c,a),C=z.S;C!==null&&C(y,w),lf(e,t,w)}catch(B){nc(e,t,B)}finally{d!==null&&y.types!==null&&(d.types=y.types),z.T=d}}else try{d=n(c,a),lf(e,t,d)}catch(B){nc(e,t,B)}}function lf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){cf(e,t,a)},function(a){return nc(e,t,a)}):cf(e,t,n)}function cf(e,t,n){t.status="fulfilled",t.value=n,uf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,sf(e,n)))}function nc(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,uf(t),t=t.next;while(t!==a)}e.action=null}function uf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function df(e,t){return t}function hf(e,t){if(Re){var n=Be.formState;if(n!==null){e:{var a=xe;if(Re){if(He){t:{for(var c=He,d=$t;c.nodeType!==8;){if(!d){c=null;break t}if(c=en(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){He=en(c.nextSibling),a=c.data==="F!";break e}}Un(a)}a=!1}a&&(t=n[0])}}return n=jt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:df,lastRenderedState:t},n.queue=a,n=Ef.bind(null,xe,a),a.dispatch=n,a=tc(!1),d=lc.bind(null,xe,!1,a.queue),a=jt(),c={state:t,dispatch:null,action:e,pending:null},a.queue=c,n=Zx.bind(null,xe,c,d,n),c.dispatch=n,a.memoizedState=e,[t,n,!1]}function ff(e){var t=Ze();return mf(t,Oe,e)}function mf(e,t,n){if(t=Jl(e,t,df)[0],e=Or(Tn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=ma(t)}catch(y){throw y===gi?kr:y}else a=t;t=Ze();var c=t.queue,d=c.dispatch;return n!==t.memoizedState&&(xe.flags|=2048,ji(9,{destroy:void 0},Wx.bind(null,c,n),null)),[a,d,e]}function Wx(e,t){e.action=t}function pf(e){var t=Ze(),n=Oe;if(n!==null)return mf(t,n,e);Ze(),t=t.memoizedState,n=Ze();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ji(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=xe.updateQueue,t===null&&(t=Nr(),xe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function gf(){return Ze().memoizedState}function Ir(e,t,n,a){var c=jt();xe.flags|=e,c.memoizedState=ji(1|t,{destroy:void 0},n,a===void 0?null:a)}function zr(e,t,n,a){var c=Ze();a=a===void 0?null:a;var d=c.memoizedState.inst;Oe!==null&&a!==null&&Kl(a,Oe.memoizedState.deps)?c.memoizedState=ji(t,d,n,a):(xe.flags|=e,c.memoizedState=ji(1|t,d,n,a))}function yf(e,t){Ir(8390656,8,e,t)}function oc(e,t){zr(2048,8,e,t)}function $x(e){xe.flags|=4;var t=xe.updateQueue;if(t===null)t=Nr(),xe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function vf(e){var t=Ze().memoizedState;return $x({ref:t,nextImpl:e}),function(){if((_e&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function xf(e,t){return zr(4,2,e,t)}function bf(e,t){return zr(4,4,e,t)}function jf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wf(e,t,n){n=n!=null?n.concat([e]):null,zr(4,4,jf.bind(null,t,e),n)}function ic(){}function Sf(e,t){var n=Ze();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Kl(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Tf(e,t){var n=Ze();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Kl(t,a[1]))return a[0];if(a=e(),Oo){In(!0);try{e()}finally{In(!1)}}return n.memoizedState=[a,t],a}function ac(e,t,n){return n===void 0||(Sn&1073741824)!==0&&(Te&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=km(),xe.lanes|=e,Zn|=e,n)}function kf(e,t,n,a){return zt(n,t)?n:vi.current!==null?(e=ac(e,n,a),zt(e,t)||(et=!0),e):(Sn&42)===0||(Sn&1073741824)!==0&&(Te&261930)===0?(et=!0,e.memoizedState=n):(e=km(),xe.lanes|=e,Zn|=e,t)}function Rf(e,t,n,a,c){var d=Q.p;Q.p=d!==0&&8>d?d:8;var y=z.T,w={};z.T=w,lc(e,!1,t,n);try{var C=c(),B=z.S;if(B!==null&&B(w,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var Y=Kx(C,a);pa(e,t,Y,Vt(e))}else pa(e,t,a,Vt(e))}catch(X){pa(e,t,{then:function(){},status:"rejected",reason:X},Vt())}finally{Q.p=d,y!==null&&w.types!==null&&(y.types=w.types),z.T=y}}function Jx(){}function rc(e,t,n,a){if(e.tag!==5)throw Error(l(476));var c=Af(e).queue;Rf(e,c,t,ee,n===null?Jx:function(){return Cf(e),n(a)})}function Af(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:ee},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Cf(e){var t=Af(e);t.next===null&&(t=e.alternate.memoizedState),pa(e,t.next.queue,{},Vt())}function sc(){return dt(Da)}function Mf(){return Ze().memoizedState}function _f(){return Ze().memoizedState}function eb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Vt();e=Gn(n);var a=qn(t,e,n);a!==null&&(Mt(a,t,n),ua(a,t,n)),t={cache:Il()},e.payload=t;return}t=t.return}}function tb(e,t,n){var a=Vt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Lr(e)?Df(t,n):(n=kl(e,t,n,a),n!==null&&(Mt(n,e,a),Nf(n,t,a)))}function Ef(e,t,n){var a=Vt();pa(e,t,n,a)}function pa(e,t,n,a){var c={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lr(e))Df(t,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var y=t.lastRenderedState,w=d(y,n);if(c.hasEagerState=!0,c.eagerState=w,zt(w,y))return vr(e,t,c,0),Be===null&&yr(),!1}catch{}if(n=kl(e,t,c,a),n!==null)return Mt(n,e,a),Nf(n,t,a),!0}return!1}function lc(e,t,n,a){if(a={lane:2,revertLane:Fc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Lr(e)){if(t)throw Error(l(479))}else t=kl(e,n,a,2),t!==null&&Mt(t,e,2)}function Lr(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function Df(e,t){xi=Er=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nf(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,zd(e,n)}}var ga={readContext:dt,use:Pr,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke};ga.useEffectEvent=Ke;var Pf={readContext:dt,use:Pr,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:yf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ir(4194308,4,jf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ir(4194308,4,e,t)},useInsertionEffect:function(e,t){Ir(4,2,e,t)},useMemo:function(e,t){var n=jt();t=t===void 0?null:t;var a=e();if(Oo){In(!0);try{e()}finally{In(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=jt();if(n!==void 0){var c=n(t);if(Oo){In(!0);try{n(t)}finally{In(!1)}}}else c=t;return a.memoizedState=a.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},a.queue=e,e=e.dispatch=tb.bind(null,xe,e),[a.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:function(e){e=tc(e);var t=e.queue,n=Ef.bind(null,xe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ic,useDeferredValue:function(e,t){var n=jt();return ac(n,e,t)},useTransition:function(){var e=tc(!1);return e=Rf.bind(null,xe,e.queue,!0,!1),jt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=xe,c=jt();if(Re){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Be===null)throw Error(l(349));(Te&127)!==0||ef(a,t,n)}c.memoizedState=n;var d={value:n,getSnapshot:t};return c.queue=d,yf(nf.bind(null,a,d,e),[e]),a.flags|=2048,ji(9,{destroy:void 0},tf.bind(null,a,d,n,t),null),n},useId:function(){var e=jt(),t=Be.identifierPrefix;if(Re){var n=dn,a=un;n=(a&~(1<<32-It(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Dr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Xx++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:sc,useFormState:hf,useActionState:hf,useOptimistic:function(e){var t=jt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=lc.bind(null,xe,!0,n),n.dispatch=t,[e,t]},useMemoCache:$l,useCacheRefresh:function(){return jt().memoizedState=eb.bind(null,xe)},useEffectEvent:function(e){var t=jt(),n={impl:e};return t.memoizedState=n,function(){if((_e&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}},cc={readContext:dt,use:Pr,useCallback:Sf,useContext:dt,useEffect:oc,useImperativeHandle:wf,useInsertionEffect:xf,useLayoutEffect:bf,useMemo:Tf,useReducer:Or,useRef:gf,useState:function(){return Or(Tn)},useDebugValue:ic,useDeferredValue:function(e,t){var n=Ze();return kf(n,Oe.memoizedState,e,t)},useTransition:function(){var e=Or(Tn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:ma(e),t]},useSyncExternalStore:Jh,useId:Mf,useHostTransitionStatus:sc,useFormState:ff,useActionState:ff,useOptimistic:function(e,t){var n=Ze();return rf(n,Oe,e,t)},useMemoCache:$l,useCacheRefresh:_f};cc.useEffectEvent=vf;var Of={readContext:dt,use:Pr,useCallback:Sf,useContext:dt,useEffect:oc,useImperativeHandle:wf,useInsertionEffect:xf,useLayoutEffect:bf,useMemo:Tf,useReducer:ec,useRef:gf,useState:function(){return ec(Tn)},useDebugValue:ic,useDeferredValue:function(e,t){var n=Ze();return Oe===null?ac(n,e,t):kf(n,Oe.memoizedState,e,t)},useTransition:function(){var e=ec(Tn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:ma(e),t]},useSyncExternalStore:Jh,useId:Mf,useHostTransitionStatus:sc,useFormState:pf,useActionState:pf,useOptimistic:function(e,t){var n=Ze();return Oe!==null?rf(n,Oe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:$l,useCacheRefresh:_f};Of.useEffectEvent=vf;function uc(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dc={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Vt(),c=Gn(a);c.payload=t,n!=null&&(c.callback=n),t=qn(e,c,a),t!==null&&(Mt(t,e,a),ua(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Vt(),c=Gn(a);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=qn(e,c,a),t!==null&&(Mt(t,e,a),ua(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Vt(),a=Gn(n);a.tag=2,t!=null&&(a.callback=t),t=qn(e,a,n),t!==null&&(Mt(t,e,n),ua(t,e,n))}};function If(e,t,n,a,c,d,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,d,y):t.prototype&&t.prototype.isPureReactComponent?!na(n,a)||!na(c,d):!0}function zf(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&dc.enqueueReplaceState(t,t.state,null)}function Io(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=x({},n));for(var c in e)n[c]===void 0&&(n[c]=e[c])}return n}function Lf(e){gr(e)}function Bf(e){console.error(e)}function Ff(e){gr(e)}function Br(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Uf(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function hc(e,t,n){return n=Gn(n),n.tag=3,n.payload={element:null},n.callback=function(){Br(e,t)},n}function Hf(e){return e=Gn(e),e.tag=3,e}function Vf(e,t,n,a){var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=a.value;e.payload=function(){return c(d)},e.callback=function(){Uf(t,n,a)}}var y=n.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Uf(t,n,a),typeof c!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var w=a.stack;this.componentDidCatch(a.value,{componentStack:w!==null?w:""})})}function nb(e,t,n,a,c){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&fi(t,n,c,!0),n=Bt.current,n!==null){switch(n.tag){case 31:case 13:return Jt===null?Wr():n.alternate===null&&Xe===0&&(Xe=3),n.flags&=-257,n.flags|=65536,n.lanes=c,a===Rr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),zc(e,a,c)),!1;case 22:return n.flags|=65536,a===Rr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),zc(e,a,c)),!1}throw Error(l(435,n.tag))}return zc(e,a,c),Wr(),!1}if(Re)return t=Bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,a!==El&&(e=Error(l(422),{cause:a}),aa(Qt(e,n)))):(a!==El&&(t=Error(l(423),{cause:a}),aa(Qt(t,n))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,a=Qt(a,n),c=hc(e.stateNode,a,c),Hl(e,c),Xe!==4&&(Xe=2)),!1;var d=Error(l(520),{cause:a});if(d=Qt(d,n),Ta===null?Ta=[d]:Ta.push(d),Xe!==4&&(Xe=2),t===null)return!0;a=Qt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=c&-c,n.lanes|=e,e=hc(n.stateNode,a,e),Hl(n,e),!1;case 1:if(t=n.type,d=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Wn===null||!Wn.has(d))))return n.flags|=65536,c&=-c,n.lanes|=c,c=Hf(c),Vf(c,e,n,a),Hl(n,c),!1}n=n.return}while(n!==null);return!1}var fc=Error(l(461)),et=!1;function ht(e,t,n,a){t.child=e===null?Yh(t,null,n,a):Po(t,e.child,n,a)}function Gf(e,t,n,a,c){n=n.render;var d=t.ref;if("ref"in a){var y={};for(var w in a)w!=="ref"&&(y[w]=a[w])}else y=a;return _o(t),a=Xl(e,t,n,y,d,c),w=Ql(),e!==null&&!et?(Zl(e,t,c),kn(e,t,c)):(Re&&w&&Ml(t),t.flags|=1,ht(e,t,a,c),t.child)}function qf(e,t,n,a,c){if(e===null){var d=n.type;return typeof d=="function"&&!Rl(d)&&d.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=d,Yf(e,t,d,a,c)):(e=br(n.type,null,a,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,!jc(e,c)){var y=d.memoizedProps;if(n=n.compare,n=n!==null?n:na,n(y,a)&&e.ref===t.ref)return kn(e,t,c)}return t.flags|=1,e=xn(d,a),e.ref=t.ref,e.return=t,t.child=e}function Yf(e,t,n,a,c){if(e!==null){var d=e.memoizedProps;if(na(d,a)&&e.ref===t.ref)if(et=!1,t.pendingProps=a=d,jc(e,c))(e.flags&131072)!==0&&(et=!0);else return t.lanes=e.lanes,kn(e,t,c)}return mc(e,t,n,a,c)}function Kf(e,t,n,a){var c=a.children,d=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(d=d!==null?d.baseLanes|n:n,e!==null){for(a=t.child=e.child,c=0;a!==null;)c=c|a.lanes|a.childLanes,a=a.sibling;a=c&~d}else a=0,t.child=null;return Xf(e,t,d,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Tr(t,d!==null?d.cachePool:null),d!==null?Qh(t,d):Gl(),Zh(t);else return a=t.lanes=536870912,Xf(e,t,d!==null?d.baseLanes|n:n,n,a)}else d!==null?(Tr(t,d.cachePool),Qh(t,d),Kn(),t.memoizedState=null):(e!==null&&Tr(t,null),Gl(),Kn());return ht(e,t,c,n),t.child}function ya(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Xf(e,t,n,a,c){var d=Ll();return d=d===null?null:{parent:$e._currentValue,pool:d},t.memoizedState={baseLanes:n,cachePool:d},e!==null&&Tr(t,null),Gl(),Zh(t),e!==null&&fi(e,t,a,!0),t.childLanes=c,null}function Fr(e,t){return t=Hr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Qf(e,t,n){return Po(t,e.child,null,n),e=Fr(t,t.pendingProps),e.flags|=2,Ft(t),t.memoizedState=null,e}function ob(e,t,n){var a=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Re){if(a.mode==="hidden")return e=Fr(t,a),t.lanes=536870912,ya(null,e);if(Yl(t),(e=He)?(e=sp(e,$t),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bn!==null?{id:un,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},n=Eh(e),n.return=t,t.child=n,ut=t,He=null)):e=null,e===null)throw Un(t);return t.lanes=536870912,null}return Fr(t,a)}var d=e.memoizedState;if(d!==null){var y=d.dehydrated;if(Yl(t),c)if(t.flags&256)t.flags&=-257,t=Qf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(et||fi(e,t,n,!1),c=(n&e.childLanes)!==0,et||c){if(a=Be,a!==null&&(y=Ld(a,n),y!==0&&y!==d.retryLane))throw d.retryLane=y,Ro(e,y),Mt(a,e,y),fc;Wr(),t=Qf(e,t,n)}else e=d.treeContext,He=en(y.nextSibling),ut=t,Re=!0,Fn=null,$t=!1,e!==null&&Ph(t,e),t=Fr(t,a),t.flags|=4096;return t}return e=xn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ur(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function mc(e,t,n,a,c){return _o(t),n=Xl(e,t,n,a,void 0,c),a=Ql(),e!==null&&!et?(Zl(e,t,c),kn(e,t,c)):(Re&&a&&Ml(t),t.flags|=1,ht(e,t,n,c),t.child)}function Zf(e,t,n,a,c,d){return _o(t),t.updateQueue=null,n=$h(t,a,n,c),Wh(e),a=Ql(),e!==null&&!et?(Zl(e,t,d),kn(e,t,d)):(Re&&a&&Ml(t),t.flags|=1,ht(e,t,n,d),t.child)}function Wf(e,t,n,a,c){if(_o(t),t.stateNode===null){var d=ci,y=n.contextType;typeof y=="object"&&y!==null&&(d=dt(y)),d=new n(a,d),t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=dc,t.stateNode=d,d._reactInternals=t,d=t.stateNode,d.props=a,d.state=t.memoizedState,d.refs={},Fl(t),y=n.contextType,d.context=typeof y=="object"&&y!==null?dt(y):ci,d.state=t.memoizedState,y=n.getDerivedStateFromProps,typeof y=="function"&&(uc(t,n,y,a),d.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&dc.enqueueReplaceState(d,d.state,null),ha(t,a,d,c),da(),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){d=t.stateNode;var w=t.memoizedProps,C=Io(n,w);d.props=C;var B=d.context,Y=n.contextType;y=ci,typeof Y=="object"&&Y!==null&&(y=dt(Y));var X=n.getDerivedStateFromProps;Y=typeof X=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=t.pendingProps!==w,Y||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||B!==y)&&zf(t,d,a,y),Vn=!1;var U=t.memoizedState;d.state=U,ha(t,a,d,c),da(),B=t.memoizedState,w||U!==B||Vn?(typeof X=="function"&&(uc(t,n,X,a),B=t.memoizedState),(C=Vn||If(t,n,C,a,U,B,y))?(Y||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=B),d.props=a,d.state=B,d.context=y,a=C):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{d=t.stateNode,Ul(e,t),y=t.memoizedProps,Y=Io(n,y),d.props=Y,X=t.pendingProps,U=d.context,B=n.contextType,C=ci,typeof B=="object"&&B!==null&&(C=dt(B)),w=n.getDerivedStateFromProps,(B=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==X||U!==C)&&zf(t,d,a,C),Vn=!1,U=t.memoizedState,d.state=U,ha(t,a,d,c),da();var G=t.memoizedState;y!==X||U!==G||Vn||e!==null&&e.dependencies!==null&&wr(e.dependencies)?(typeof w=="function"&&(uc(t,n,w,a),G=t.memoizedState),(Y=Vn||If(t,n,Y,a,U,G,C)||e!==null&&e.dependencies!==null&&wr(e.dependencies))?(B||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(a,G,C),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(a,G,C)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=G),d.props=a,d.state=G,d.context=C,a=Y):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),a=!1)}return d=a,Ur(e,t),a=(t.flags&128)!==0,d||a?(d=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:d.render(),t.flags|=1,e!==null&&a?(t.child=Po(t,e.child,null,c),t.child=Po(t,null,n,c)):ht(e,t,n,c),t.memoizedState=d.state,e=t.child):e=kn(e,t,c),e}function $f(e,t,n,a){return Co(),t.flags|=256,ht(e,t,n,a),t.child}var pc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gc(e){return{baseLanes:e,cachePool:Fh()}}function yc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ht),e}function Jf(e,t,n){var a=t.pendingProps,c=!1,d=(t.flags&128)!==0,y;if((y=d)||(y=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),y&&(c=!0,t.flags&=-129),y=(t.flags&32)!==0,t.flags&=-33,e===null){if(Re){if(c?Yn(t):Kn(),(e=He)?(e=sp(e,$t),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bn!==null?{id:un,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},n=Eh(e),n.return=t,t.child=n,ut=t,He=null)):e=null,e===null)throw Un(t);return Jc(e)?t.lanes=32:t.lanes=536870912,null}var w=a.children;return a=a.fallback,c?(Kn(),c=t.mode,w=Hr({mode:"hidden",children:w},c),a=Ao(a,c,n,null),w.return=t,a.return=t,w.sibling=a,t.child=w,a=t.child,a.memoizedState=gc(n),a.childLanes=yc(e,y,n),t.memoizedState=pc,ya(null,a)):(Yn(t),vc(t,w))}var C=e.memoizedState;if(C!==null&&(w=C.dehydrated,w!==null)){if(d)t.flags&256?(Yn(t),t.flags&=-257,t=xc(e,t,n)):t.memoizedState!==null?(Kn(),t.child=e.child,t.flags|=128,t=null):(Kn(),w=a.fallback,c=t.mode,a=Hr({mode:"visible",children:a.children},c),w=Ao(w,c,n,null),w.flags|=2,a.return=t,w.return=t,a.sibling=w,t.child=a,Po(t,e.child,null,n),a=t.child,a.memoizedState=gc(n),a.childLanes=yc(e,y,n),t.memoizedState=pc,t=ya(null,a));else if(Yn(t),Jc(w)){if(y=w.nextSibling&&w.nextSibling.dataset,y)var B=y.dgst;y=B,a=Error(l(419)),a.stack="",a.digest=y,aa({value:a,source:null,stack:null}),t=xc(e,t,n)}else if(et||fi(e,t,n,!1),y=(n&e.childLanes)!==0,et||y){if(y=Be,y!==null&&(a=Ld(y,n),a!==0&&a!==C.retryLane))throw C.retryLane=a,Ro(e,a),Mt(y,e,a),fc;$c(w)||Wr(),t=xc(e,t,n)}else $c(w)?(t.flags|=192,t.child=e.child,t=null):(e=C.treeContext,He=en(w.nextSibling),ut=t,Re=!0,Fn=null,$t=!1,e!==null&&Ph(t,e),t=vc(t,a.children),t.flags|=4096);return t}return c?(Kn(),w=a.fallback,c=t.mode,C=e.child,B=C.sibling,a=xn(C,{mode:"hidden",children:a.children}),a.subtreeFlags=C.subtreeFlags&65011712,B!==null?w=xn(B,w):(w=Ao(w,c,n,null),w.flags|=2),w.return=t,a.return=t,a.sibling=w,t.child=a,ya(null,a),a=t.child,w=e.child.memoizedState,w===null?w=gc(n):(c=w.cachePool,c!==null?(C=$e._currentValue,c=c.parent!==C?{parent:C,pool:C}:c):c=Fh(),w={baseLanes:w.baseLanes|n,cachePool:c}),a.memoizedState=w,a.childLanes=yc(e,y,n),t.memoizedState=pc,ya(e.child,a)):(Yn(t),n=e.child,e=n.sibling,n=xn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(y=t.deletions,y===null?(t.deletions=[e],t.flags|=16):y.push(e)),t.child=n,t.memoizedState=null,n)}function vc(e,t){return t=Hr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Hr(e,t){return e=Lt(22,e,null,t),e.lanes=0,e}function xc(e,t,n){return Po(t,e.child,null,n),e=vc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function em(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Pl(e.return,t,n)}function bc(e,t,n,a,c,d){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:c,treeForkCount:d}:(y.isBackwards=t,y.rendering=null,y.renderingStartTime=0,y.last=a,y.tail=n,y.tailMode=c,y.treeForkCount=d)}function tm(e,t,n){var a=t.pendingProps,c=a.revealOrder,d=a.tail;a=a.children;var y=Qe.current,w=(y&2)!==0;if(w?(y=y&1|2,t.flags|=128):y&=1,J(Qe,y),ht(e,t,a,n),a=Re?ia:0,!w&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&em(e,n,t);else if(e.tag===19)em(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(n=t.child,c=null;n!==null;)e=n.alternate,e!==null&&_r(e)===null&&(c=n),n=n.sibling;n=c,n===null?(c=t.child,t.child=null):(c=n.sibling,n.sibling=null),bc(t,!1,c,n,d,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&_r(e)===null){t.child=c;break}e=c.sibling,c.sibling=n,n=c,c=e}bc(t,!0,n,null,d,a);break;case"together":bc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function kn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(fi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&wr(e)))}function ib(e,t,n){switch(t.tag){case 3:Pe(t,t.stateNode.containerInfo),Hn(t,$e,e.memoizedState.cache),Co();break;case 27:case 5:mt(t);break;case 4:Pe(t,t.stateNode.containerInfo);break;case 10:Hn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Yl(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Yn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Jf(e,t,n):(Yn(t),e=kn(e,t,n),e!==null?e.sibling:null);Yn(t);break;case 19:var c=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(fi(e,t,n,!1),a=(n&t.childLanes)!==0),c){if(a)return tm(e,t,n);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),J(Qe,Qe.current),a)break;return null;case 22:return t.lanes=0,Kf(e,t,n,t.pendingProps);case 24:Hn(t,$e,e.memoizedState.cache)}return kn(e,t,n)}function nm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)et=!0;else{if(!jc(e,n)&&(t.flags&128)===0)return et=!1,ib(e,t,n);et=(e.flags&131072)!==0}else et=!1,Re&&(t.flags&1048576)!==0&&Nh(t,ia,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Do(t.elementType),t.type=e,typeof e=="function")Rl(e)?(a=Io(e,a),t.tag=1,t=Wf(null,t,e,a,n)):(t.tag=0,t=mc(null,t,e,a,n));else{if(e!=null){var c=e.$$typeof;if(c===M){t.tag=11,t=Gf(null,t,e,a,n);break e}else if(c===I){t.tag=14,t=qf(null,t,e,a,n);break e}}throw t=Ae(e)||e,Error(l(306,t,""))}}return t;case 0:return mc(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,c=Io(a,t.pendingProps),Wf(e,t,a,c,n);case 3:e:{if(Pe(t,t.stateNode.containerInfo),e===null)throw Error(l(387));a=t.pendingProps;var d=t.memoizedState;c=d.element,Ul(e,t),ha(t,a,null,n);var y=t.memoizedState;if(a=y.cache,Hn(t,$e,a),a!==d.cache&&Ol(t,[$e],n,!0),da(),a=y.element,d.isDehydrated)if(d={element:a,isDehydrated:!1,cache:y.cache},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){t=$f(e,t,a,n);break e}else if(a!==c){c=Qt(Error(l(424)),t),aa(c),t=$f(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,He=en(e.firstChild),ut=t,Re=!0,Fn=null,$t=!0,n=Yh(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Co(),a===c){t=kn(e,t,n);break e}ht(e,t,a,n)}t=t.child}return t;case 26:return Ur(e,t),e===null?(n=fp(t.type,null,t.pendingProps,null))?t.memoizedState=n:Re||(n=t.type,e=t.pendingProps,a=is(se.current).createElement(n),a[ct]=t,a[St]=e,ft(a,n,e),at(a),t.stateNode=a):t.memoizedState=fp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return mt(t),e===null&&Re&&(a=t.stateNode=up(t.type,t.pendingProps,se.current),ut=t,$t=!0,c=He,to(t.type)?(eu=c,He=en(a.firstChild)):He=c),ht(e,t,t.pendingProps.children,n),Ur(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Re&&((c=a=He)&&(a=Pb(a,t.type,t.pendingProps,$t),a!==null?(t.stateNode=a,ut=t,He=en(a.firstChild),$t=!1,c=!0):c=!1),c||Un(t)),mt(t),c=t.type,d=t.pendingProps,y=e!==null?e.memoizedProps:null,a=d.children,Qc(c,d)?a=null:y!==null&&Qc(c,y)&&(t.flags|=32),t.memoizedState!==null&&(c=Xl(e,t,Qx,null,null,n),Da._currentValue=c),Ur(e,t),ht(e,t,a,n),t.child;case 6:return e===null&&Re&&((e=n=He)&&(n=Ob(n,t.pendingProps,$t),n!==null?(t.stateNode=n,ut=t,He=null,e=!0):e=!1),e||Un(t)),null;case 13:return Jf(e,t,n);case 4:return Pe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Po(t,null,a,n):ht(e,t,a,n),t.child;case 11:return Gf(e,t,t.type,t.pendingProps,n);case 7:return ht(e,t,t.pendingProps,n),t.child;case 8:return ht(e,t,t.pendingProps.children,n),t.child;case 12:return ht(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Hn(t,t.type,a.value),ht(e,t,a.children,n),t.child;case 9:return c=t.type._context,a=t.pendingProps.children,_o(t),c=dt(c),a=a(c),t.flags|=1,ht(e,t,a,n),t.child;case 14:return qf(e,t,t.type,t.pendingProps,n);case 15:return Yf(e,t,t.type,t.pendingProps,n);case 19:return tm(e,t,n);case 31:return ob(e,t,n);case 22:return Kf(e,t,n,t.pendingProps);case 24:return _o(t),a=dt($e),e===null?(c=Ll(),c===null&&(c=Be,d=Il(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=n),c=d),t.memoizedState={parent:a,cache:c},Fl(t),Hn(t,$e,c)):((e.lanes&n)!==0&&(Ul(e,t),ha(t,null,null,n),da()),c=e.memoizedState,d=t.memoizedState,c.parent!==a?(c={parent:a,cache:a},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),Hn(t,$e,a)):(a=d.cache,Hn(t,$e,a),a!==c.cache&&Ol(t,[$e],n,!0))),ht(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Rn(e){e.flags|=4}function wc(e,t,n,a,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Mm())e.flags|=8192;else throw No=Rr,Bl}else e.flags&=-16777217}function om(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vp(t))if(Mm())e.flags|=8192;else throw No=Rr,Bl}function Vr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Od():536870912,e.lanes|=t,ki|=t)}function va(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var c=e.child;c!==null;)n|=c.lanes|c.childLanes,a|=c.subtreeFlags&65011712,a|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)n|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function ab(e,t,n){var a=t.pendingProps;switch(_l(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),wn($e),pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(hi(t)?Rn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Dl())),Ve(t),null;case 26:var c=t.type,d=t.memoizedState;return e===null?(Rn(t),d!==null?(Ve(t),om(t,d)):(Ve(t),wc(t,c,null,a,n))):d?d!==e.memoizedState?(Rn(t),Ve(t),om(t,d)):(Ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Rn(t),Ve(t),wc(t,c,e,a,n)),null;case 27:if(nt(t),n=se.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Rn(t);else{if(!a){if(t.stateNode===null)throw Error(l(166));return Ve(t),null}e=te.current,hi(t)?Oh(t):(e=up(c,a,n),t.stateNode=e,Rn(t))}return Ve(t),null;case 5:if(nt(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Rn(t);else{if(!a){if(t.stateNode===null)throw Error(l(166));return Ve(t),null}if(d=te.current,hi(t))Oh(t);else{var y=is(se.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof a.is=="string"?y.createElement("select",{is:a.is}):y.createElement("select"),a.multiple?d.multiple=!0:a.size&&(d.size=a.size);break;default:d=typeof a.is=="string"?y.createElement(c,{is:a.is}):y.createElement(c)}}d[ct]=t,d[St]=a;e:for(y=t.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}t.stateNode=d;e:switch(ft(d,c,a),c){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Rn(t)}}return Ve(t),wc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Rn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(l(166));if(e=se.current,hi(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,c=ut,c!==null)switch(c.tag){case 27:case 5:a=c.memoizedProps}e[ct]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Jm(e.nodeValue,n)),e||Un(t,!0)}else e=is(e).createTextNode(a),e[ct]=t,t.stateNode=e}return Ve(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=hi(t),n!==null){if(e===null){if(!a)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[ct]=t}else Co(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),e=!1}else n=Dl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ft(t),t):(Ft(t),null);if((t.flags&128)!==0)throw Error(l(558))}return Ve(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=hi(t),a!==null&&a.dehydrated!==null){if(e===null){if(!c)throw Error(l(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(l(317));c[ct]=t}else Co(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),c=!1}else c=Dl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(Ft(t),t):(Ft(t),null)}return Ft(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,c=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(c=a.alternate.memoizedState.cachePool.pool),d=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(d=a.memoizedState.cachePool.pool),d!==c&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Vr(t,t.updateQueue),Ve(t),null);case 4:return pe(),e===null&&Gc(t.stateNode.containerInfo),Ve(t),null;case 10:return wn(t.type),Ve(t),null;case 19:if(q(Qe),a=t.memoizedState,a===null)return Ve(t),null;if(c=(t.flags&128)!==0,d=a.rendering,d===null)if(c)va(a,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=_r(e),d!==null){for(t.flags|=128,va(a,!1),e=d.updateQueue,t.updateQueue=e,Vr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_h(n,e),n=n.sibling;return J(Qe,Qe.current&1|2),Re&&bn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&pt()>Xr&&(t.flags|=128,c=!0,va(a,!1),t.lanes=4194304)}else{if(!c)if(e=_r(d),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,Vr(t,e),va(a,!0),a.tail===null&&a.tailMode==="hidden"&&!d.alternate&&!Re)return Ve(t),null}else 2*pt()-a.renderingStartTime>Xr&&n!==536870912&&(t.flags|=128,c=!0,va(a,!1),t.lanes=4194304);a.isBackwards?(d.sibling=t.child,t.child=d):(e=a.last,e!==null?e.sibling=d:t.child=d,a.last=d)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=pt(),e.sibling=null,n=Qe.current,J(Qe,c?n&1|2:n&1),Re&&bn(t,a.treeForkCount),e):(Ve(t),null);case 22:case 23:return Ft(t),ql(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),n=t.updateQueue,n!==null&&Vr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&q(Eo),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),wn($e),Ve(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function rb(e,t){switch(_l(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wn($e),pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return nt(t),null;case 31:if(t.memoizedState!==null){if(Ft(t),t.alternate===null)throw Error(l(340));Co()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Co()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(Qe),null;case 4:return pe(),null;case 10:return wn(t.type),null;case 22:case 23:return Ft(t),ql(),e!==null&&q(Eo),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return wn($e),null;case 25:return null;default:return null}}function im(e,t){switch(_l(t),t.tag){case 3:wn($e),pe();break;case 26:case 27:case 5:nt(t);break;case 4:pe();break;case 31:t.memoizedState!==null&&Ft(t);break;case 13:Ft(t);break;case 19:q(Qe);break;case 10:wn(t.type);break;case 22:case 23:Ft(t),ql(),e!==null&&q(Eo);break;case 24:wn($e)}}function xa(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var c=a.next;n=c;do{if((n.tag&e)===e){a=void 0;var d=n.create,y=n.inst;a=d(),y.destroy=a}n=n.next}while(n!==c)}}catch(w){De(t,t.return,w)}}function Xn(e,t,n){try{var a=t.updateQueue,c=a!==null?a.lastEffect:null;if(c!==null){var d=c.next;a=d;do{if((a.tag&e)===e){var y=a.inst,w=y.destroy;if(w!==void 0){y.destroy=void 0,c=t;var C=n,B=w;try{B()}catch(Y){De(c,C,Y)}}}a=a.next}while(a!==d)}}catch(Y){De(t,t.return,Y)}}function am(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Xh(t,n)}catch(a){De(e,e.return,a)}}}function rm(e,t,n){n.props=Io(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){De(e,t,a)}}function ba(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(c){De(e,t,c)}}function hn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(c){De(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(c){De(e,t,c)}else n.current=null}function sm(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(c){De(e,e.return,c)}}function Sc(e,t,n){try{var a=e.stateNode;Cb(a,e.type,n,t),a[St]=t}catch(c){De(e,e.return,c)}}function lm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&to(e.type)||e.tag===4}function Tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&to(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yn));else if(a!==4&&(a===27&&to(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(kc(e,t,n),e=e.sibling;e!==null;)kc(e,t,n),e=e.sibling}function Gr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&to(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Gr(e,t,n),e=e.sibling;e!==null;)Gr(e,t,n),e=e.sibling}function cm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);ft(t,a,n),t[ct]=e,t[St]=n}catch(d){De(e,e.return,d)}}var An=!1,tt=!1,Rc=!1,um=typeof WeakSet=="function"?WeakSet:Set,rt=null;function sb(e,t){if(e=e.containerInfo,Kc=ds,e=jh(e),xl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var c=a.anchorOffset,d=a.focusNode;a=a.focusOffset;try{n.nodeType,d.nodeType}catch{n=null;break e}var y=0,w=-1,C=-1,B=0,Y=0,X=e,U=null;t:for(;;){for(var G;X!==n||c!==0&&X.nodeType!==3||(w=y+c),X!==d||a!==0&&X.nodeType!==3||(C=y+a),X.nodeType===3&&(y+=X.nodeValue.length),(G=X.firstChild)!==null;)U=X,X=G;for(;;){if(X===e)break t;if(U===n&&++B===c&&(w=y),U===d&&++Y===a&&(C=y),(G=X.nextSibling)!==null)break;X=U,U=X.parentNode}X=G}n=w===-1||C===-1?null:{start:w,end:C}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xc={focusedElem:e,selectionRange:n},ds=!1,rt=t;rt!==null;)if(t=rt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,rt=e;else for(;rt!==null;){switch(t=rt,d=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)c=e[n],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,n=t,c=d.memoizedProps,d=d.memoizedState,a=n.stateNode;try{var ie=Io(n.type,c);e=a.getSnapshotBeforeUpdate(ie,d),a.__reactInternalSnapshotBeforeUpdate=e}catch(fe){De(n,n.return,fe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Wc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Wc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,rt=e;break}rt=t.return}}function dm(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Mn(e,n),a&4&&xa(5,n);break;case 1:if(Mn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(y){De(n,n.return,y)}else{var c=Io(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){De(n,n.return,y)}}a&64&&am(n),a&512&&ba(n,n.return);break;case 3:if(Mn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Xh(e,t)}catch(y){De(n,n.return,y)}}break;case 27:t===null&&a&4&&cm(n);case 26:case 5:Mn(e,n),t===null&&a&4&&sm(n),a&512&&ba(n,n.return);break;case 12:Mn(e,n);break;case 31:Mn(e,n),a&4&&mm(e,n);break;case 13:Mn(e,n),a&4&&pm(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=gb.bind(null,n),Ib(e,n))));break;case 22:if(a=n.memoizedState!==null||An,!a){t=t!==null&&t.memoizedState!==null||tt,c=An;var d=tt;An=a,(tt=t)&&!d?_n(e,n,(n.subtreeFlags&8772)!==0):Mn(e,n),An=c,tt=d}break;case 30:break;default:Mn(e,n)}}function hm(e){var t=e.alternate;t!==null&&(e.alternate=null,hm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&nl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ge=null,kt=!1;function Cn(e,t,n){for(n=n.child;n!==null;)fm(e,t,n),n=n.sibling}function fm(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Gi,n)}catch{}switch(n.tag){case 26:tt||hn(n,t),Cn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tt||hn(n,t);var a=Ge,c=kt;to(n.type)&&(Ge=n.stateNode,kt=!1),Cn(e,t,n),Ma(n.stateNode),Ge=a,kt=c;break;case 5:tt||hn(n,t);case 6:if(a=Ge,c=kt,Ge=null,Cn(e,t,n),Ge=a,kt=c,Ge!==null)if(kt)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(n.stateNode)}catch(d){De(n,t,d)}else try{Ge.removeChild(n.stateNode)}catch(d){De(n,t,d)}break;case 18:Ge!==null&&(kt?(e=Ge,ap(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ni(e)):ap(Ge,n.stateNode));break;case 4:a=Ge,c=kt,Ge=n.stateNode.containerInfo,kt=!0,Cn(e,t,n),Ge=a,kt=c;break;case 0:case 11:case 14:case 15:Xn(2,n,t),tt||Xn(4,n,t),Cn(e,t,n);break;case 1:tt||(hn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&rm(n,t,a)),Cn(e,t,n);break;case 21:Cn(e,t,n);break;case 22:tt=(a=tt)||n.memoizedState!==null,Cn(e,t,n),tt=a;break;default:Cn(e,t,n)}}function mm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ni(e)}catch(n){De(t,t.return,n)}}}function pm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ni(e)}catch(n){De(t,t.return,n)}}function lb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new um),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new um),t;default:throw Error(l(435,e.tag))}}function qr(e,t){var n=lb(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var c=yb.bind(null,e,a);a.then(c,c)}})}function Rt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var c=n[a],d=e,y=t,w=y;e:for(;w!==null;){switch(w.tag){case 27:if(to(w.type)){Ge=w.stateNode,kt=!1;break e}break;case 5:Ge=w.stateNode,kt=!1;break e;case 3:case 4:Ge=w.stateNode.containerInfo,kt=!0;break e}w=w.return}if(Ge===null)throw Error(l(160));fm(d,y,c),Ge=null,kt=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)gm(t,e),t=t.sibling}var an=null;function gm(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rt(t,e),At(e),a&4&&(Xn(3,e,e.return),xa(3,e),Xn(5,e,e.return));break;case 1:Rt(t,e),At(e),a&512&&(tt||n===null||hn(n,n.return)),a&64&&An&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var c=an;if(Rt(t,e),At(e),a&512&&(tt||n===null||hn(n,n.return)),a&4){var d=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,c=c.ownerDocument||c;t:switch(a){case"title":d=c.getElementsByTagName("title")[0],(!d||d[Ki]||d[ct]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(a),c.head.insertBefore(d,c.querySelector("head > title"))),ft(d,a,n),d[ct]=e,at(d),a=d;break e;case"link":var y=gp("link","href",c).get(a+(n.href||""));if(y){for(var w=0;w<y.length;w++)if(d=y[w],d.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&d.getAttribute("rel")===(n.rel==null?null:n.rel)&&d.getAttribute("title")===(n.title==null?null:n.title)&&d.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){y.splice(w,1);break t}}d=c.createElement(a),ft(d,a,n),c.head.appendChild(d);break;case"meta":if(y=gp("meta","content",c).get(a+(n.content||""))){for(w=0;w<y.length;w++)if(d=y[w],d.getAttribute("content")===(n.content==null?null:""+n.content)&&d.getAttribute("name")===(n.name==null?null:n.name)&&d.getAttribute("property")===(n.property==null?null:n.property)&&d.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&d.getAttribute("charset")===(n.charSet==null?null:n.charSet)){y.splice(w,1);break t}}d=c.createElement(a),ft(d,a,n),c.head.appendChild(d);break;default:throw Error(l(468,a))}d[ct]=e,at(d),a=d}e.stateNode=a}else yp(c,e.type,e.stateNode);else e.stateNode=pp(c,a,e.memoizedProps);else d!==a?(d===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):d.count--,a===null?yp(c,e.type,e.stateNode):pp(c,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Sc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Rt(t,e),At(e),a&512&&(tt||n===null||hn(n,n.return)),n!==null&&a&4&&Sc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Rt(t,e),At(e),a&512&&(tt||n===null||hn(n,n.return)),e.flags&32){c=e.stateNode;try{ni(c,"")}catch(ie){De(e,e.return,ie)}}a&4&&e.stateNode!=null&&(c=e.memoizedProps,Sc(e,c,n!==null?n.memoizedProps:c)),a&1024&&(Rc=!0);break;case 6:if(Rt(t,e),At(e),a&4){if(e.stateNode===null)throw Error(l(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(ie){De(e,e.return,ie)}}break;case 3:if(ss=null,c=an,an=as(t.containerInfo),Rt(t,e),an=c,At(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Ni(t.containerInfo)}catch(ie){De(e,e.return,ie)}Rc&&(Rc=!1,ym(e));break;case 4:a=an,an=as(e.stateNode.containerInfo),Rt(t,e),At(e),an=a;break;case 12:Rt(t,e),At(e);break;case 31:Rt(t,e),At(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,qr(e,a)));break;case 13:Rt(t,e),At(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Kr=pt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,qr(e,a)));break;case 22:c=e.memoizedState!==null;var C=n!==null&&n.memoizedState!==null,B=An,Y=tt;if(An=B||c,tt=Y||C,Rt(t,e),tt=Y,An=B,At(e),a&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(n===null||C||An||tt||zo(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){C=n=t;try{if(d=C.stateNode,c)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{w=C.stateNode;var X=C.memoizedProps.style,U=X!=null&&X.hasOwnProperty("display")?X.display:null;w.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(ie){De(C,C.return,ie)}}}else if(t.tag===6){if(n===null){C=t;try{C.stateNode.nodeValue=c?"":C.memoizedProps}catch(ie){De(C,C.return,ie)}}}else if(t.tag===18){if(n===null){C=t;try{var G=C.stateNode;c?rp(G,!0):rp(C.stateNode,!1)}catch(ie){De(C,C.return,ie)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,qr(e,n))));break;case 19:Rt(t,e),At(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,qr(e,a)));break;case 30:break;case 21:break;default:Rt(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(lm(a)){n=a;break}a=a.return}if(n==null)throw Error(l(160));switch(n.tag){case 27:var c=n.stateNode,d=Tc(e);Gr(e,d,c);break;case 5:var y=n.stateNode;n.flags&32&&(ni(y,""),n.flags&=-33);var w=Tc(e);Gr(e,w,y);break;case 3:case 4:var C=n.stateNode.containerInfo,B=Tc(e);kc(e,B,C);break;default:throw Error(l(161))}}catch(Y){De(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ym(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ym(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Mn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)dm(e,t.alternate,t),t=t.sibling}function zo(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Xn(4,t,t.return),zo(t);break;case 1:hn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&rm(t,t.return,n),zo(t);break;case 27:Ma(t.stateNode);case 26:case 5:hn(t,t.return),zo(t);break;case 22:t.memoizedState===null&&zo(t);break;case 30:zo(t);break;default:zo(t)}e=e.sibling}}function _n(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,c=e,d=t,y=d.flags;switch(d.tag){case 0:case 11:case 15:_n(c,d,n),xa(4,d);break;case 1:if(_n(c,d,n),a=d,c=a.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(B){De(a,a.return,B)}if(a=d,c=a.updateQueue,c!==null){var w=a.stateNode;try{var C=c.shared.hiddenCallbacks;if(C!==null)for(c.shared.hiddenCallbacks=null,c=0;c<C.length;c++)Kh(C[c],w)}catch(B){De(a,a.return,B)}}n&&y&64&&am(d),ba(d,d.return);break;case 27:cm(d);case 26:case 5:_n(c,d,n),n&&a===null&&y&4&&sm(d),ba(d,d.return);break;case 12:_n(c,d,n);break;case 31:_n(c,d,n),n&&y&4&&mm(c,d);break;case 13:_n(c,d,n),n&&y&4&&pm(c,d);break;case 22:d.memoizedState===null&&_n(c,d,n),ba(d,d.return);break;case 30:break;default:_n(c,d,n)}t=t.sibling}}function Ac(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ra(n))}function Cc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ra(e))}function rn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vm(e,t,n,a),t=t.sibling}function vm(e,t,n,a){var c=t.flags;switch(t.tag){case 0:case 11:case 15:rn(e,t,n,a),c&2048&&xa(9,t);break;case 1:rn(e,t,n,a);break;case 3:rn(e,t,n,a),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ra(e)));break;case 12:if(c&2048){rn(e,t,n,a),e=t.stateNode;try{var d=t.memoizedProps,y=d.id,w=d.onPostCommit;typeof w=="function"&&w(y,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){De(t,t.return,C)}}else rn(e,t,n,a);break;case 31:rn(e,t,n,a);break;case 13:rn(e,t,n,a);break;case 23:break;case 22:d=t.stateNode,y=t.alternate,t.memoizedState!==null?d._visibility&2?rn(e,t,n,a):ja(e,t):d._visibility&2?rn(e,t,n,a):(d._visibility|=2,wi(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),c&2048&&Ac(y,t);break;case 24:rn(e,t,n,a),c&2048&&Cc(t.alternate,t);break;default:rn(e,t,n,a)}}function wi(e,t,n,a,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var d=e,y=t,w=n,C=a,B=y.flags;switch(y.tag){case 0:case 11:case 15:wi(d,y,w,C,c),xa(8,y);break;case 23:break;case 22:var Y=y.stateNode;y.memoizedState!==null?Y._visibility&2?wi(d,y,w,C,c):ja(d,y):(Y._visibility|=2,wi(d,y,w,C,c)),c&&B&2048&&Ac(y.alternate,y);break;case 24:wi(d,y,w,C,c),c&&B&2048&&Cc(y.alternate,y);break;default:wi(d,y,w,C,c)}t=t.sibling}}function ja(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,c=a.flags;switch(a.tag){case 22:ja(n,a),c&2048&&Ac(a.alternate,a);break;case 24:ja(n,a),c&2048&&Cc(a.alternate,a);break;default:ja(n,a)}t=t.sibling}}var wa=8192;function Si(e,t,n){if(e.subtreeFlags&wa)for(e=e.child;e!==null;)xm(e,t,n),e=e.sibling}function xm(e,t,n){switch(e.tag){case 26:Si(e,t,n),e.flags&wa&&e.memoizedState!==null&&Xb(n,an,e.memoizedState,e.memoizedProps);break;case 5:Si(e,t,n);break;case 3:case 4:var a=an;an=as(e.stateNode.containerInfo),Si(e,t,n),an=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=wa,wa=16777216,Si(e,t,n),wa=a):Si(e,t,n));break;default:Si(e,t,n)}}function bm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Sa(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];rt=a,wm(a,e)}bm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jm(e),e=e.sibling}function jm(e){switch(e.tag){case 0:case 11:case 15:Sa(e),e.flags&2048&&Xn(9,e,e.return);break;case 3:Sa(e);break;case 12:Sa(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Yr(e)):Sa(e);break;default:Sa(e)}}function Yr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];rt=a,wm(a,e)}bm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Xn(8,t,t.return),Yr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Yr(t));break;default:Yr(t)}e=e.sibling}}function wm(e,t){for(;rt!==null;){var n=rt;switch(n.tag){case 0:case 11:case 15:Xn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ra(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,rt=a;else e:for(n=e;rt!==null;){a=rt;var c=a.sibling,d=a.return;if(hm(a),a===n){rt=null;break e}if(c!==null){c.return=d,rt=c;break e}rt=d}}}var cb={getCacheForType:function(e){var t=dt($e),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return dt($e).controller.signal}},ub=typeof WeakMap=="function"?WeakMap:Map,_e=0,Be=null,we=null,Te=0,Ee=0,Ut=null,Qn=!1,Ti=!1,Mc=!1,En=0,Xe=0,Zn=0,Lo=0,_c=0,Ht=0,ki=0,Ta=null,Ct=null,Ec=!1,Kr=0,Sm=0,Xr=1/0,Qr=null,Wn=null,ot=0,$n=null,Ri=null,Dn=0,Dc=0,Nc=null,Tm=null,ka=0,Pc=null;function Vt(){return(_e&2)!==0&&Te!==0?Te&-Te:z.T!==null?Fc():Bd()}function km(){if(Ht===0)if((Te&536870912)===0||Re){var e=or;or<<=1,(or&3932160)===0&&(or=262144),Ht=e}else Ht=536870912;return e=Bt.current,e!==null&&(e.flags|=32),Ht}function Mt(e,t,n){(e===Be&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(Ai(e,0),Jn(e,Te,Ht,!1)),Yi(e,n),((_e&2)===0||e!==Be)&&(e===Be&&((_e&2)===0&&(Lo|=n),Xe===4&&Jn(e,Te,Ht,!1)),fn(e))}function Rm(e,t,n){if((_e&6)!==0)throw Error(l(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||qi(e,t),c=a?fb(e,t):Ic(e,t,!0),d=a;do{if(c===0){Ti&&!a&&Jn(e,t,0,!1);break}else{if(n=e.current.alternate,d&&!db(n)){c=Ic(e,t,!1),d=!1;continue}if(c===2){if(d=t,e.errorRecoveryDisabledLanes&d)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){t=y;e:{var w=e;c=Ta;var C=w.current.memoizedState.isDehydrated;if(C&&(Ai(w,y).flags|=256),y=Ic(w,y,!1),y!==2){if(Mc&&!C){w.errorRecoveryDisabledLanes|=d,Lo|=d,c=4;break e}d=Ct,Ct=c,d!==null&&(Ct===null?Ct=d:Ct.push.apply(Ct,d))}c=y}if(d=!1,c!==2)continue}}if(c===1){Ai(e,0),Jn(e,t,0,!0);break}e:{switch(a=e,d=c,d){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:Jn(a,t,Ht,!Qn);break e;case 2:Ct=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(c=Kr+300-pt(),10<c)){if(Jn(a,t,Ht,!Qn),ar(a,0,!0)!==0)break e;Dn=t,a.timeoutHandle=op(Am.bind(null,a,n,Ct,Qr,Ec,t,Ht,Lo,ki,Qn,d,"Throttled",-0,0),c);break e}Am(a,n,Ct,Qr,Ec,t,Ht,Lo,ki,Qn,d,null,-0,0)}}break}while(!0);fn(e)}function Am(e,t,n,a,c,d,y,w,C,B,Y,X,U,G){if(e.timeoutHandle=-1,X=t.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yn},xm(t,d,X);var ie=(d&62914560)===d?Kr-pt():(d&4194048)===d?Sm-pt():0;if(ie=Qb(X,ie),ie!==null){Dn=d,e.cancelPendingCommit=ie(Om.bind(null,e,t,d,n,a,c,y,w,C,Y,X,null,U,G)),Jn(e,d,y,!B);return}}Om(e,t,d,n,a,c,y,w,C)}function db(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var c=n[a],d=c.getSnapshot;c=c.value;try{if(!zt(d(),c))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jn(e,t,n,a){t&=~_c,t&=~Lo,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var c=t;0<c;){var d=31-It(c),y=1<<d;a[d]=-1,c&=~y}n!==0&&Id(e,n,t)}function Zr(){return(_e&6)===0?(Ra(0),!1):!0}function Oc(){if(we!==null){if(Ee===0)var e=we.return;else e=we,jn=Mo=null,Wl(e),yi=null,la=0,e=we;for(;e!==null;)im(e.alternate,e),e=e.return;we=null}}function Ai(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Eb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Dn=0,Oc(),Be=e,we=n=xn(e.current,null),Te=t,Ee=0,Ut=null,Qn=!1,Ti=qi(e,t),Mc=!1,ki=Ht=_c=Lo=Zn=Xe=0,Ct=Ta=null,Ec=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var c=31-It(a),d=1<<c;t|=e[c],a&=~d}return En=t,yr(),n}function Cm(e,t){xe=null,z.H=ga,t===gi||t===kr?(t=Vh(),Ee=3):t===Bl?(t=Vh(),Ee=4):Ee=t===fc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ut=t,we===null&&(Xe=1,Br(e,Qt(t,e.current)))}function Mm(){var e=Bt.current;return e===null?!0:(Te&4194048)===Te?Jt===null:(Te&62914560)===Te||(Te&536870912)!==0?e===Jt:!1}function _m(){var e=z.H;return z.H=ga,e===null?ga:e}function Em(){var e=z.A;return z.A=cb,e}function Wr(){Xe=4,Qn||(Te&4194048)!==Te&&Bt.current!==null||(Ti=!0),(Zn&134217727)===0&&(Lo&134217727)===0||Be===null||Jn(Be,Te,Ht,!1)}function Ic(e,t,n){var a=_e;_e|=2;var c=_m(),d=Em();(Be!==e||Te!==t)&&(Qr=null,Ai(e,t)),t=!1;var y=Xe;e:do try{if(Ee!==0&&we!==null){var w=we,C=Ut;switch(Ee){case 8:Oc(),y=6;break e;case 3:case 2:case 9:case 6:Bt.current===null&&(t=!0);var B=Ee;if(Ee=0,Ut=null,Ci(e,w,C,B),n&&Ti){y=0;break e}break;default:B=Ee,Ee=0,Ut=null,Ci(e,w,C,B)}}hb(),y=Xe;break}catch(Y){Cm(e,Y)}while(!0);return t&&e.shellSuspendCounter++,jn=Mo=null,_e=a,z.H=c,z.A=d,we===null&&(Be=null,Te=0,yr()),y}function hb(){for(;we!==null;)Dm(we)}function fb(e,t){var n=_e;_e|=2;var a=_m(),c=Em();Be!==e||Te!==t?(Qr=null,Xr=pt()+500,Ai(e,t)):Ti=qi(e,t);e:do try{if(Ee!==0&&we!==null){t=we;var d=Ut;t:switch(Ee){case 1:Ee=0,Ut=null,Ci(e,t,d,1);break;case 2:case 9:if(Uh(d)){Ee=0,Ut=null,Nm(t);break}t=function(){Ee!==2&&Ee!==9||Be!==e||(Ee=7),fn(e)},d.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:Uh(d)?(Ee=0,Ut=null,Nm(t)):(Ee=0,Ut=null,Ci(e,t,d,7));break;case 5:var y=null;switch(we.tag){case 26:y=we.memoizedState;case 5:case 27:var w=we;if(y?vp(y):w.stateNode.complete){Ee=0,Ut=null;var C=w.sibling;if(C!==null)we=C;else{var B=w.return;B!==null?(we=B,$r(B)):we=null}break t}}Ee=0,Ut=null,Ci(e,t,d,5);break;case 6:Ee=0,Ut=null,Ci(e,t,d,6);break;case 8:Oc(),Xe=6;break e;default:throw Error(l(462))}}mb();break}catch(Y){Cm(e,Y)}while(!0);return jn=Mo=null,z.H=a,z.A=c,_e=n,we!==null?0:(Be=null,Te=0,yr(),Xe)}function mb(){for(;we!==null&&!tr();)Dm(we)}function Dm(e){var t=nm(e.alternate,e,En);e.memoizedProps=e.pendingProps,t===null?$r(e):we=t}function Nm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Zf(n,t,t.pendingProps,t.type,void 0,Te);break;case 11:t=Zf(n,t,t.pendingProps,t.type.render,t.ref,Te);break;case 5:Wl(t);default:im(n,t),t=we=_h(t,En),t=nm(n,t,En)}e.memoizedProps=e.pendingProps,t===null?$r(e):we=t}function Ci(e,t,n,a){jn=Mo=null,Wl(t),yi=null,la=0;var c=t.return;try{if(nb(e,c,t,n,Te)){Xe=1,Br(e,Qt(n,e.current)),we=null;return}}catch(d){if(c!==null)throw we=c,d;Xe=1,Br(e,Qt(n,e.current)),we=null;return}t.flags&32768?(Re||a===1?e=!0:Ti||(Te&536870912)!==0?e=!1:(Qn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Bt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Pm(t,e)):$r(t)}function $r(e){var t=e;do{if((t.flags&32768)!==0){Pm(t,Qn);return}e=t.return;var n=ab(t.alternate,t,En);if(n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);Xe===0&&(Xe=5)}function Pm(e,t){do{var n=rb(e.alternate,e);if(n!==null){n.flags&=32767,we=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){we=e;return}we=e=n}while(e!==null);Xe=6,we=null}function Om(e,t,n,a,c,d,y,w,C){e.cancelPendingCommit=null;do Jr();while(ot!==0);if((_e&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(d=t.lanes|t.childLanes,d|=Tl,Kv(e,n,d,y,w,C),e===Be&&(we=Be=null,Te=0),Ri=t,$n=e,Dn=n,Dc=d,Nc=c,Tm=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,vb(Qo,function(){return Fm(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=z.T,z.T=null,c=Q.p,Q.p=2,y=_e,_e|=4;try{sb(e,t,n)}finally{_e=y,Q.p=c,z.T=a}}ot=1,Im(),zm(),Lm()}}function Im(){if(ot===1){ot=0;var e=$n,t=Ri,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=z.T,z.T=null;var a=Q.p;Q.p=2;var c=_e;_e|=4;try{gm(t,e);var d=Xc,y=jh(e.containerInfo),w=d.focusedElem,C=d.selectionRange;if(y!==w&&w&&w.ownerDocument&&bh(w.ownerDocument.documentElement,w)){if(C!==null&&xl(w)){var B=C.start,Y=C.end;if(Y===void 0&&(Y=B),"selectionStart"in w)w.selectionStart=B,w.selectionEnd=Math.min(Y,w.value.length);else{var X=w.ownerDocument||document,U=X&&X.defaultView||window;if(U.getSelection){var G=U.getSelection(),ie=w.textContent.length,fe=Math.min(C.start,ie),ze=C.end===void 0?fe:Math.min(C.end,ie);!G.extend&&fe>ze&&(y=ze,ze=fe,fe=y);var O=xh(w,fe),D=xh(w,ze);if(O&&D&&(G.rangeCount!==1||G.anchorNode!==O.node||G.anchorOffset!==O.offset||G.focusNode!==D.node||G.focusOffset!==D.offset)){var L=X.createRange();L.setStart(O.node,O.offset),G.removeAllRanges(),fe>ze?(G.addRange(L),G.extend(D.node,D.offset)):(L.setEnd(D.node,D.offset),G.addRange(L))}}}}for(X=[],G=w;G=G.parentNode;)G.nodeType===1&&X.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<X.length;w++){var K=X[w];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}ds=!!Kc,Xc=Kc=null}finally{_e=c,Q.p=a,z.T=n}}e.current=t,ot=2}}function zm(){if(ot===2){ot=0;var e=$n,t=Ri,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=z.T,z.T=null;var a=Q.p;Q.p=2;var c=_e;_e|=4;try{dm(e,t.alternate,t)}finally{_e=c,Q.p=a,z.T=n}}ot=3}}function Lm(){if(ot===4||ot===3){ot=0,Ws();var e=$n,t=Ri,n=Dn,a=Tm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ot=5:(ot=0,Ri=$n=null,Bm(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Wn=null),el(n),t=t.stateNode,Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Gi,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=z.T,c=Q.p,Q.p=2,z.T=null;try{for(var d=e.onRecoverableError,y=0;y<a.length;y++){var w=a[y];d(w.value,{componentStack:w.stack})}}finally{z.T=t,Q.p=c}}(Dn&3)!==0&&Jr(),fn(e),c=e.pendingLanes,(n&261930)!==0&&(c&42)!==0?e===Pc?ka++:(ka=0,Pc=e):ka=0,Ra(0)}}function Bm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ra(t)))}function Jr(){return Im(),zm(),Lm(),Fm()}function Fm(){if(ot!==5)return!1;var e=$n,t=Dc;Dc=0;var n=el(Dn),a=z.T,c=Q.p;try{Q.p=32>n?32:n,z.T=null,n=Nc,Nc=null;var d=$n,y=Dn;if(ot=0,Ri=$n=null,Dn=0,(_e&6)!==0)throw Error(l(331));var w=_e;if(_e|=4,jm(d.current),vm(d,d.current,y,n),_e=w,Ra(0,!1),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Gi,d)}catch{}return!0}finally{Q.p=c,z.T=a,Bm(e,t)}}function Um(e,t,n){t=Qt(n,t),t=hc(e.stateNode,t,2),e=qn(e,t,2),e!==null&&(Yi(e,2),fn(e))}function De(e,t,n){if(e.tag===3)Um(e,e,n);else for(;t!==null;){if(t.tag===3){Um(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Wn===null||!Wn.has(a))){e=Qt(n,e),n=Hf(2),a=qn(t,n,2),a!==null&&(Vf(n,a,t,e),Yi(a,2),fn(a));break}}t=t.return}}function zc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new ub;var c=new Set;a.set(t,c)}else c=a.get(t),c===void 0&&(c=new Set,a.set(t,c));c.has(n)||(Mc=!0,c.add(n),e=pb.bind(null,e,t,n),t.then(e,e))}function pb(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Be===e&&(Te&n)===n&&(Xe===4||Xe===3&&(Te&62914560)===Te&&300>pt()-Kr?(_e&2)===0&&Ai(e,0):_c|=n,ki===Te&&(ki=0)),fn(e)}function Hm(e,t){t===0&&(t=Od()),e=Ro(e,t),e!==null&&(Yi(e,t),fn(e))}function gb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hm(e,n)}function yb(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,c=e.memoizedState;c!==null&&(n=c.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(l(314))}a!==null&&a.delete(t),Hm(e,n)}function vb(e,t){return nn(e,t)}var es=null,Mi=null,Lc=!1,ts=!1,Bc=!1,eo=0;function fn(e){e!==Mi&&e.next===null&&(Mi===null?es=Mi=e:Mi=Mi.next=e),ts=!0,Lc||(Lc=!0,bb())}function Ra(e,t){if(!Bc&&ts){Bc=!0;do for(var n=!1,a=es;a!==null;){if(e!==0){var c=a.pendingLanes;if(c===0)var d=0;else{var y=a.suspendedLanes,w=a.pingedLanes;d=(1<<31-It(42|e)+1)-1,d&=c&~(y&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(n=!0,Ym(a,d))}else d=Te,d=ar(a,a===Be?d:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(d&3)===0||qi(a,d)||(n=!0,Ym(a,d));a=a.next}while(n);Bc=!1}}function xb(){Vm()}function Vm(){ts=Lc=!1;var e=0;eo!==0&&_b()&&(e=eo);for(var t=pt(),n=null,a=es;a!==null;){var c=a.next,d=Gm(a,t);d===0?(a.next=null,n===null?es=c:n.next=c,c===null&&(Mi=n)):(n=a,(e!==0||(d&3)!==0)&&(ts=!0)),a=c}ot!==0&&ot!==5||Ra(e),eo!==0&&(eo=0)}function Gm(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var y=31-It(d),w=1<<y,C=c[y];C===-1?((w&n)===0||(w&a)!==0)&&(c[y]=Yv(w,t)):C<=t&&(e.expiredLanes|=w),d&=~w}if(t=Be,n=Te,n=ar(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Vi(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||qi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Vi(a),el(n)){case 2:case 8:n=cn;break;case 32:n=Qo;break;case 268435456:n=Pd;break;default:n=Qo}return a=qm.bind(null,e),n=nn(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Vi(a),e.callbackPriority=2,e.callbackNode=null,2}function qm(e,t){if(ot!==0&&ot!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Jr()&&e.callbackNode!==n)return null;var a=Te;return a=ar(e,e===Be?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Rm(e,a,t),Gm(e,pt()),e.callbackNode!=null&&e.callbackNode===n?qm.bind(null,e):null)}function Ym(e,t){if(Jr())return null;Rm(e,t,!0)}function bb(){Db(function(){(_e&6)!==0?nn(lt,xb):Vm()})}function Fc(){if(eo===0){var e=mi;e===0&&(e=nr,nr<<=1,(nr&261888)===0&&(nr=256)),eo=e}return eo}function Km(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cr(""+e)}function Xm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function jb(e,t,n,a,c){if(t==="submit"&&n&&n.stateNode===c){var d=Km((c[St]||null).action),y=a.submitter;y&&(t=(t=y[St]||null)?Km(t.formAction):y.getAttribute("formAction"),t!==null&&(d=t,y=null));var w=new fr("action","action",null,a,c);e.push({event:w,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(eo!==0){var C=y?Xm(c,y):new FormData(c);rc(n,{pending:!0,data:C,method:c.method,action:d},null,C)}}else typeof d=="function"&&(w.preventDefault(),C=y?Xm(c,y):new FormData(c),rc(n,{pending:!0,data:C,method:c.method,action:d},d,C))},currentTarget:c}]})}}for(var Uc=0;Uc<Sl.length;Uc++){var Hc=Sl[Uc],wb=Hc.toLowerCase(),Sb=Hc[0].toUpperCase()+Hc.slice(1);on(wb,"on"+Sb)}on(Th,"onAnimationEnd"),on(kh,"onAnimationIteration"),on(Rh,"onAnimationStart"),on("dblclick","onDoubleClick"),on("focusin","onFocus"),on("focusout","onBlur"),on(Bx,"onTransitionRun"),on(Fx,"onTransitionStart"),on(Ux,"onTransitionCancel"),on(Ah,"onTransitionEnd"),ei("onMouseEnter",["mouseout","mouseover"]),ei("onMouseLeave",["mouseout","mouseover"]),ei("onPointerEnter",["pointerout","pointerover"]),ei("onPointerLeave",["pointerout","pointerover"]),wo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wo("onBeforeInput",["compositionend","keypress","textInput","paste"]),wo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Aa));function Qm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],c=a.event;a=a.listeners;e:{var d=void 0;if(t)for(var y=a.length-1;0<=y;y--){var w=a[y],C=w.instance,B=w.currentTarget;if(w=w.listener,C!==d&&c.isPropagationStopped())break e;d=w,c.currentTarget=B;try{d(c)}catch(Y){gr(Y)}c.currentTarget=null,d=C}else for(y=0;y<a.length;y++){if(w=a[y],C=w.instance,B=w.currentTarget,w=w.listener,C!==d&&c.isPropagationStopped())break e;d=w,c.currentTarget=B;try{d(c)}catch(Y){gr(Y)}c.currentTarget=null,d=C}}}}function Se(e,t){var n=t[tl];n===void 0&&(n=t[tl]=new Set);var a=e+"__bubble";n.has(a)||(Zm(t,e,2,!1),n.add(a))}function Vc(e,t,n){var a=0;t&&(a|=4),Zm(n,e,a,t)}var ns="_reactListening"+Math.random().toString(36).slice(2);function Gc(e){if(!e[ns]){e[ns]=!0,Hd.forEach(function(n){n!=="selectionchange"&&(Tb.has(n)||Vc(n,!1,e),Vc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ns]||(t[ns]=!0,Vc("selectionchange",!1,t))}}function Zm(e,t,n,a){switch(kp(t)){case 2:var c=$b;break;case 8:c=Jb;break;default:c=au}n=c.bind(null,t,n,e),c=void 0,!ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),a?c!==void 0?e.addEventListener(t,n,{capture:!0,passive:c}):e.addEventListener(t,n,!0):c!==void 0?e.addEventListener(t,n,{passive:c}):e.addEventListener(t,n,!1)}function qc(e,t,n,a,c){var d=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var y=a.tag;if(y===3||y===4){var w=a.stateNode.containerInfo;if(w===c)break;if(y===4)for(y=a.return;y!==null;){var C=y.tag;if((C===3||C===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;w!==null;){if(y=Wo(w),y===null)return;if(C=y.tag,C===5||C===6||C===26||C===27){a=d=y;continue e}w=w.parentNode}}a=a.return}eh(function(){var B=d,Y=ll(n),X=[];e:{var U=Ch.get(e);if(U!==void 0){var G=fr,ie=e;switch(e){case"keypress":if(dr(n)===0)break e;case"keydown":case"keyup":G=yx;break;case"focusin":ie="focus",G=ml;break;case"focusout":ie="blur",G=ml;break;case"beforeblur":case"afterblur":G=ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=bx;break;case Th:case kh:case Rh:G=lx;break;case Ah:G=wx;break;case"scroll":case"scrollend":G=ox;break;case"wheel":G=Tx;break;case"copy":case"cut":case"paste":G=ux;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=ah;break;case"toggle":case"beforetoggle":G=Rx}var fe=(t&4)!==0,ze=!fe&&(e==="scroll"||e==="scrollend"),O=fe?U!==null?U+"Capture":null:U;fe=[];for(var D=B,L;D!==null;){var K=D;if(L=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||L===null||O===null||(K=Qi(D,O),K!=null&&fe.push(Ca(D,K,L))),ze)break;D=D.return}0<fe.length&&(U=new G(U,ie,null,n,Y),X.push({event:U,listeners:fe}))}}if((t&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",U&&n!==sl&&(ie=n.relatedTarget||n.fromElement)&&(Wo(ie)||ie[Zo]))break e;if((G||U)&&(U=Y.window===Y?Y:(U=Y.ownerDocument)?U.defaultView||U.parentWindow:window,G?(ie=n.relatedTarget||n.toElement,G=B,ie=ie?Wo(ie):null,ie!==null&&(ze=h(ie),fe=ie.tag,ie!==ze||fe!==5&&fe!==27&&fe!==6)&&(ie=null)):(G=null,ie=B),G!==ie)){if(fe=oh,K="onMouseLeave",O="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(fe=ah,K="onPointerLeave",O="onPointerEnter",D="pointer"),ze=G==null?U:Xi(G),L=ie==null?U:Xi(ie),U=new fe(K,D+"leave",G,n,Y),U.target=ze,U.relatedTarget=L,K=null,Wo(Y)===B&&(fe=new fe(O,D+"enter",ie,n,Y),fe.target=L,fe.relatedTarget=ze,K=fe),ze=K,G&&ie)t:{for(fe=kb,O=G,D=ie,L=0,K=O;K;K=fe(K))L++;K=0;for(var de=D;de;de=fe(de))K++;for(;0<L-K;)O=fe(O),L--;for(;0<K-L;)D=fe(D),K--;for(;L--;){if(O===D||D!==null&&O===D.alternate){fe=O;break t}O=fe(O),D=fe(D)}fe=null}else fe=null;G!==null&&Wm(X,U,G,fe,!1),ie!==null&&ze!==null&&Wm(X,ze,ie,fe,!0)}}e:{if(U=B?Xi(B):window,G=U.nodeName&&U.nodeName.toLowerCase(),G==="select"||G==="input"&&U.type==="file")var Ce=fh;else if(dh(U))if(mh)Ce=Ix;else{Ce=Px;var le=Nx}else G=U.nodeName,!G||G.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?B&&rl(B.elementType)&&(Ce=fh):Ce=Ox;if(Ce&&(Ce=Ce(e,B))){hh(X,Ce,n,Y);break e}le&&le(e,U,B),e==="focusout"&&B&&U.type==="number"&&B.memoizedProps.value!=null&&al(U,"number",U.value)}switch(le=B?Xi(B):window,e){case"focusin":(dh(le)||le.contentEditable==="true")&&(ri=le,bl=B,oa=null);break;case"focusout":oa=bl=ri=null;break;case"mousedown":jl=!0;break;case"contextmenu":case"mouseup":case"dragend":jl=!1,wh(X,n,Y);break;case"selectionchange":if(Lx)break;case"keydown":case"keyup":wh(X,n,Y)}var be;if(gl)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else ai?ch(e,n)&&(ke="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ke="onCompositionStart");ke&&(rh&&n.locale!=="ko"&&(ai||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&ai&&(be=th()):(Ln=Y,dl="value"in Ln?Ln.value:Ln.textContent,ai=!0)),le=os(B,ke),0<le.length&&(ke=new ih(ke,e,null,n,Y),X.push({event:ke,listeners:le}),be?ke.data=be:(be=uh(n),be!==null&&(ke.data=be)))),(be=Cx?Mx(e,n):_x(e,n))&&(ke=os(B,"onBeforeInput"),0<ke.length&&(le=new ih("onBeforeInput","beforeinput",null,n,Y),X.push({event:le,listeners:ke}),le.data=be)),jb(X,e,B,n,Y)}Qm(X,t)})}function Ca(e,t,n){return{instance:e,listener:t,currentTarget:n}}function os(e,t){for(var n=t+"Capture",a=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Qi(e,n),c!=null&&a.unshift(Ca(e,c,d)),c=Qi(e,t),c!=null&&a.push(Ca(e,c,d))),e.tag===3)return a;e=e.return}return[]}function kb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wm(e,t,n,a,c){for(var d=t._reactName,y=[];n!==null&&n!==a;){var w=n,C=w.alternate,B=w.stateNode;if(w=w.tag,C!==null&&C===a)break;w!==5&&w!==26&&w!==27||B===null||(C=B,c?(B=Qi(n,d),B!=null&&y.unshift(Ca(n,B,C))):c||(B=Qi(n,d),B!=null&&y.push(Ca(n,B,C)))),n=n.return}y.length!==0&&e.push({event:t,listeners:y})}var Rb=/\r\n?/g,Ab=/\u0000|\uFFFD/g;function $m(e){return(typeof e=="string"?e:""+e).replace(Rb,`
`).replace(Ab,"")}function Jm(e,t){return t=$m(t),$m(e)===t}function Ie(e,t,n,a,c,d){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ni(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ni(e,""+a);break;case"className":sr(e,"class",a);break;case"tabIndex":sr(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":sr(e,n,a);break;case"style":$d(e,a,d);break;case"data":if(t!=="object"){sr(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=cr(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(n==="formAction"?(t!=="input"&&Ie(e,t,"name",c.name,c,null),Ie(e,t,"formEncType",c.formEncType,c,null),Ie(e,t,"formMethod",c.formMethod,c,null),Ie(e,t,"formTarget",c.formTarget,c,null)):(Ie(e,t,"encType",c.encType,c,null),Ie(e,t,"method",c.method,c,null),Ie(e,t,"target",c.target,c,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=cr(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=yn);break;case"onScroll":a!=null&&Se("scroll",e);break;case"onScrollEnd":a!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(l(61));if(n=a.__html,n!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=cr(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Se("beforetoggle",e),Se("toggle",e),rr(e,"popover",a);break;case"xlinkActuate":gn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":gn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":gn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":gn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":gn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":gn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":gn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":gn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":gn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":rr(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=tx.get(n)||n,rr(e,n,a))}}function Yc(e,t,n,a,c,d){switch(n){case"style":$d(e,a,d);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(l(61));if(n=a.__html,n!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ni(e,a):(typeof a=="number"||typeof a=="bigint")&&ni(e,""+a);break;case"onScroll":a!=null&&Se("scroll",e);break;case"onScrollEnd":a!=null&&Se("scrollend",e);break;case"onClick":a!=null&&(e.onclick=yn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(c=n.endsWith("Capture"),t=n.slice(2,c?n.length-7:void 0),d=e[St]||null,d=d!=null?d[n]:null,typeof d=="function"&&e.removeEventListener(t,d,c),typeof a=="function")){typeof d!="function"&&d!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,c);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):rr(e,n,a)}}}function ft(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var a=!1,c=!1,d;for(d in n)if(n.hasOwnProperty(d)){var y=n[d];if(y!=null)switch(d){case"src":a=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ie(e,t,d,y,n,null)}}c&&Ie(e,t,"srcSet",n.srcSet,n,null),a&&Ie(e,t,"src",n.src,n,null);return;case"input":Se("invalid",e);var w=d=y=c=null,C=null,B=null;for(a in n)if(n.hasOwnProperty(a)){var Y=n[a];if(Y!=null)switch(a){case"name":c=Y;break;case"type":y=Y;break;case"checked":C=Y;break;case"defaultChecked":B=Y;break;case"value":d=Y;break;case"defaultValue":w=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(l(137,t));break;default:Ie(e,t,a,Y,n,null)}}Xd(e,d,w,C,B,y,c,!1);return;case"select":Se("invalid",e),a=y=d=null;for(c in n)if(n.hasOwnProperty(c)&&(w=n[c],w!=null))switch(c){case"value":d=w;break;case"defaultValue":y=w;break;case"multiple":a=w;default:Ie(e,t,c,w,n,null)}t=d,n=y,e.multiple=!!a,t!=null?ti(e,!!a,t,!1):n!=null&&ti(e,!!a,n,!0);return;case"textarea":Se("invalid",e),d=c=a=null;for(y in n)if(n.hasOwnProperty(y)&&(w=n[y],w!=null))switch(y){case"value":a=w;break;case"defaultValue":c=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(l(91));break;default:Ie(e,t,y,w,n,null)}Zd(e,a,c,d);return;case"option":for(C in n)n.hasOwnProperty(C)&&(a=n[C],a!=null)&&(C==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Ie(e,t,C,a,n,null));return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(a=0;a<Aa.length;a++)Se(Aa[a],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in n)if(n.hasOwnProperty(B)&&(a=n[B],a!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ie(e,t,B,a,n,null)}return;default:if(rl(t)){for(Y in n)n.hasOwnProperty(Y)&&(a=n[Y],a!==void 0&&Yc(e,t,Y,a,n,void 0));return}}for(w in n)n.hasOwnProperty(w)&&(a=n[w],a!=null&&Ie(e,t,w,a,n,null))}function Cb(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,y=null,w=null,C=null,B=null,Y=null;for(G in n){var X=n[G];if(n.hasOwnProperty(G)&&X!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":C=X;default:a.hasOwnProperty(G)||Ie(e,t,G,null,a,X)}}for(var U in a){var G=a[U];if(X=n[U],a.hasOwnProperty(U)&&(G!=null||X!=null))switch(U){case"type":d=G;break;case"name":c=G;break;case"checked":B=G;break;case"defaultChecked":Y=G;break;case"value":y=G;break;case"defaultValue":w=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(l(137,t));break;default:G!==X&&Ie(e,t,U,G,a,X)}}il(e,y,w,C,B,Y,d,c);return;case"select":G=y=w=U=null;for(d in n)if(C=n[d],n.hasOwnProperty(d)&&C!=null)switch(d){case"value":break;case"multiple":G=C;default:a.hasOwnProperty(d)||Ie(e,t,d,null,a,C)}for(c in a)if(d=a[c],C=n[c],a.hasOwnProperty(c)&&(d!=null||C!=null))switch(c){case"value":U=d;break;case"defaultValue":w=d;break;case"multiple":y=d;default:d!==C&&Ie(e,t,c,d,a,C)}t=w,n=y,a=G,U!=null?ti(e,!!n,U,!1):!!a!=!!n&&(t!=null?ti(e,!!n,t,!0):ti(e,!!n,n?[]:"",!1));return;case"textarea":G=U=null;for(w in n)if(c=n[w],n.hasOwnProperty(w)&&c!=null&&!a.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ie(e,t,w,null,a,c)}for(y in a)if(c=a[y],d=n[y],a.hasOwnProperty(y)&&(c!=null||d!=null))switch(y){case"value":U=c;break;case"defaultValue":G=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(l(91));break;default:c!==d&&Ie(e,t,y,c,a,d)}Qd(e,U,G);return;case"option":for(var ie in n)U=n[ie],n.hasOwnProperty(ie)&&U!=null&&!a.hasOwnProperty(ie)&&(ie==="selected"?e.selected=!1:Ie(e,t,ie,null,a,U));for(C in a)U=a[C],G=n[C],a.hasOwnProperty(C)&&U!==G&&(U!=null||G!=null)&&(C==="selected"?e.selected=U&&typeof U!="function"&&typeof U!="symbol":Ie(e,t,C,U,a,G));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in n)U=n[fe],n.hasOwnProperty(fe)&&U!=null&&!a.hasOwnProperty(fe)&&Ie(e,t,fe,null,a,U);for(B in a)if(U=a[B],G=n[B],a.hasOwnProperty(B)&&U!==G&&(U!=null||G!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(l(137,t));break;default:Ie(e,t,B,U,a,G)}return;default:if(rl(t)){for(var ze in n)U=n[ze],n.hasOwnProperty(ze)&&U!==void 0&&!a.hasOwnProperty(ze)&&Yc(e,t,ze,void 0,a,U);for(Y in a)U=a[Y],G=n[Y],!a.hasOwnProperty(Y)||U===G||U===void 0&&G===void 0||Yc(e,t,Y,U,a,G);return}}for(var O in n)U=n[O],n.hasOwnProperty(O)&&U!=null&&!a.hasOwnProperty(O)&&Ie(e,t,O,null,a,U);for(X in a)U=a[X],G=n[X],!a.hasOwnProperty(X)||U===G||U==null&&G==null||Ie(e,t,X,U,a,G)}function ep(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Mb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var c=n[a],d=c.transferSize,y=c.initiatorType,w=c.duration;if(d&&w&&ep(y)){for(y=0,w=c.responseEnd,a+=1;a<n.length;a++){var C=n[a],B=C.startTime;if(B>w)break;var Y=C.transferSize,X=C.initiatorType;Y&&ep(X)&&(C=C.responseEnd,y+=Y*(C<w?1:(w-B)/(C-B)))}if(--a,t+=8*(d+y)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Kc=null,Xc=null;function is(e){return e.nodeType===9?e:e.ownerDocument}function tp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function np(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Qc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zc=null;function _b(){var e=window.event;return e&&e.type==="popstate"?e===Zc?!1:(Zc=e,!0):(Zc=null,!1)}var op=typeof setTimeout=="function"?setTimeout:void 0,Eb=typeof clearTimeout=="function"?clearTimeout:void 0,ip=typeof Promise=="function"?Promise:void 0,Db=typeof queueMicrotask=="function"?queueMicrotask:typeof ip<"u"?function(e){return ip.resolve(null).then(e).catch(Nb)}:op;function Nb(e){setTimeout(function(){throw e})}function to(e){return e==="head"}function ap(e,t){var n=t,a=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(c),Ni(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Ma(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ma(n);for(var d=n.firstChild;d;){var y=d.nextSibling,w=d.nodeName;d[Ki]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||n.removeChild(d),d=y}}else n==="body"&&Ma(e.ownerDocument.body);n=c}while(n);Ni(t)}function rp(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Wc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Wc(n),nl(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Pb(e,t,n,a){for(;e.nodeType===1;){var c=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ki])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=en(e.nextSibling),e===null)break}return null}function Ob(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=en(e.nextSibling),e===null))return null;return e}function sp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=en(e.nextSibling),e===null))return null;return e}function $c(e){return e.data==="$?"||e.data==="$~"}function Jc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ib(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var eu=null;function lp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return en(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function cp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function up(e,t,n){switch(t=is(n),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Ma(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);nl(e)}var tn=new Map,dp=new Set;function as(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nn=Q.d;Q.d={f:zb,r:Lb,D:Bb,C:Fb,L:Ub,m:Hb,X:Gb,S:Vb,M:qb};function zb(){var e=Nn.f(),t=Zr();return e||t}function Lb(e){var t=$o(e);t!==null&&t.tag===5&&t.type==="form"?Cf(t):Nn.r(e)}var _i=typeof document>"u"?null:document;function hp(e,t,n){var a=_i;if(a&&typeof t=="string"&&t){var c=Kt(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof n=="string"&&(c+='[crossorigin="'+n+'"]'),dp.has(c)||(dp.add(c),e={rel:e,crossOrigin:n,href:t},a.querySelector(c)===null&&(t=a.createElement("link"),ft(t,"link",e),at(t),a.head.appendChild(t)))}}function Bb(e){Nn.D(e),hp("dns-prefetch",e,null)}function Fb(e,t){Nn.C(e,t),hp("preconnect",e,t)}function Ub(e,t,n){Nn.L(e,t,n);var a=_i;if(a&&e&&t){var c='link[rel="preload"][as="'+Kt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(c+='[imagesrcset="'+Kt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(c+='[imagesizes="'+Kt(n.imageSizes)+'"]')):c+='[href="'+Kt(e)+'"]';var d=c;switch(t){case"style":d=Ei(e);break;case"script":d=Di(e)}tn.has(d)||(e=x({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),tn.set(d,e),a.querySelector(c)!==null||t==="style"&&a.querySelector(_a(d))||t==="script"&&a.querySelector(Ea(d))||(t=a.createElement("link"),ft(t,"link",e),at(t),a.head.appendChild(t)))}}function Hb(e,t){Nn.m(e,t);var n=_i;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+Kt(a)+'"][href="'+Kt(e)+'"]',d=c;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Di(e)}if(!tn.has(d)&&(e=x({rel:"modulepreload",href:e},t),tn.set(d,e),n.querySelector(c)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ea(d)))return}a=n.createElement("link"),ft(a,"link",e),at(a),n.head.appendChild(a)}}}function Vb(e,t,n){Nn.S(e,t,n);var a=_i;if(a&&e){var c=Jo(a).hoistableStyles,d=Ei(e);t=t||"default";var y=c.get(d);if(!y){var w={loading:0,preload:null};if(y=a.querySelector(_a(d)))w.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},n),(n=tn.get(d))&&tu(e,n);var C=y=a.createElement("link");at(C),ft(C,"link",e),C._p=new Promise(function(B,Y){C.onload=B,C.onerror=Y}),C.addEventListener("load",function(){w.loading|=1}),C.addEventListener("error",function(){w.loading|=2}),w.loading|=4,rs(y,t,a)}y={type:"stylesheet",instance:y,count:1,state:w},c.set(d,y)}}}function Gb(e,t){Nn.X(e,t);var n=_i;if(n&&e){var a=Jo(n).hoistableScripts,c=Di(e),d=a.get(c);d||(d=n.querySelector(Ea(c)),d||(e=x({src:e,async:!0},t),(t=tn.get(c))&&nu(e,t),d=n.createElement("script"),at(d),ft(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},a.set(c,d))}}function qb(e,t){Nn.M(e,t);var n=_i;if(n&&e){var a=Jo(n).hoistableScripts,c=Di(e),d=a.get(c);d||(d=n.querySelector(Ea(c)),d||(e=x({src:e,async:!0,type:"module"},t),(t=tn.get(c))&&nu(e,t),d=n.createElement("script"),at(d),ft(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},a.set(c,d))}}function fp(e,t,n,a){var c=(c=se.current)?as(c):null;if(!c)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ei(n.href),n=Jo(c).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ei(n.href);var d=Jo(c).hoistableStyles,y=d.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,y),(d=c.querySelector(_a(e)))&&!d._p&&(y.instance=d,y.state.loading=5),tn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},tn.set(e,n),d||Yb(c,e,n,y.state))),t&&a===null)throw Error(l(528,""));return y}if(t&&a!==null)throw Error(l(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Di(n),n=Jo(c).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Ei(e){return'href="'+Kt(e)+'"'}function _a(e){return'link[rel="stylesheet"]['+e+"]"}function mp(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Yb(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),ft(t,"link",n),at(t),e.head.appendChild(t))}function Di(e){return'[src="'+Kt(e)+'"]'}function Ea(e){return"script[async]"+e}function pp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Kt(n.href)+'"]');if(a)return t.instance=a,at(a),a;var c=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),at(a),ft(a,"style",c),rs(a,n.precedence,e),t.instance=a;case"stylesheet":c=Ei(n.href);var d=e.querySelector(_a(c));if(d)return t.state.loading|=4,t.instance=d,at(d),d;a=mp(n),(c=tn.get(c))&&tu(a,c),d=(e.ownerDocument||e).createElement("link"),at(d);var y=d;return y._p=new Promise(function(w,C){y.onload=w,y.onerror=C}),ft(d,"link",a),t.state.loading|=4,rs(d,n.precedence,e),t.instance=d;case"script":return d=Di(n.src),(c=e.querySelector(Ea(d)))?(t.instance=c,at(c),c):(a=n,(c=tn.get(d))&&(a=x({},n),nu(a,c)),e=e.ownerDocument||e,c=e.createElement("script"),at(c),ft(c,"link",a),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,rs(a,n.precedence,e));return t.instance}function rs(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=a.length?a[a.length-1]:null,d=c,y=0;y<a.length;y++){var w=a[y];if(w.dataset.precedence===t)d=w;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function tu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function nu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ss=null;function gp(e,t,n){if(ss===null){var a=new Map,c=ss=new Map;c.set(n,a)}else c=ss,a=c.get(n),a||(a=new Map,c.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),c=0;c<n.length;c++){var d=n[c];if(!(d[Ki]||d[ct]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(t)||"";y=e+y;var w=a.get(y);w?w.push(d):a.set(y,[d])}}return a}function yp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Kb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function vp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Xb(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Ei(a.href),d=t.querySelector(_a(c));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ls.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=d,at(d);return}d=t.ownerDocument||t,a=mp(a),(c=tn.get(c))&&tu(a,c),d=d.createElement("link"),at(d);var y=d;y._p=new Promise(function(w,C){y.onload=w,y.onerror=C}),ft(d,"link",a),n.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ls.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var ou=0;function Qb(e,t){return e.stylesheets&&e.count===0&&us(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&us(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+t);0<e.imgBytes&&ou===0&&(ou=62500*Mb());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&us(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>ou?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(c)}}:null}function ls(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)us(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var cs=null;function us(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,cs=new Map,t.forEach(Zb,e),cs=null,ls.call(e))}function Zb(e,t){if(!(t.state.loading&4)){var n=cs.get(e);if(n)var a=n.get(null);else{n=new Map,cs.set(e,n);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var y=c[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(n.set(y.dataset.precedence,y),a=y)}a&&n.set(null,a)}c=t.instance,y=c.getAttribute("data-precedence"),d=n.get(y)||a,d===a&&n.set(null,c),n.set(y,c),this.count++,a=ls.bind(this),c.addEventListener("load",a),c.addEventListener("error",a),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var Da={$$typeof:T,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function Wb(e,t,n,a,c,d,y,w,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$s(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$s(0),this.hiddenUpdates=$s(null),this.identifierPrefix=a,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function xp(e,t,n,a,c,d,y,w,C,B,Y,X){return e=new Wb(e,t,n,y,C,B,Y,X,w),t=1,d===!0&&(t|=24),d=Lt(3,null,null,t),e.current=d,d.stateNode=e,t=Il(),t.refCount++,e.pooledCache=t,t.refCount++,d.memoizedState={element:a,isDehydrated:n,cache:t},Fl(d),e}function bp(e){return e?(e=ci,e):ci}function jp(e,t,n,a,c,d){c=bp(c),a.context===null?a.context=c:a.pendingContext=c,a=Gn(t),a.payload={element:n},d=d===void 0?null:d,d!==null&&(a.callback=d),n=qn(e,a,t),n!==null&&(Mt(n,e,t),ua(n,e,t))}function wp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function iu(e,t){wp(e,t),(e=e.alternate)&&wp(e,t)}function Sp(e){if(e.tag===13||e.tag===31){var t=Ro(e,67108864);t!==null&&Mt(t,e,67108864),iu(e,67108864)}}function Tp(e){if(e.tag===13||e.tag===31){var t=Vt();t=Js(t);var n=Ro(e,t);n!==null&&Mt(n,e,t),iu(e,t)}}var ds=!0;function $b(e,t,n,a){var c=z.T;z.T=null;var d=Q.p;try{Q.p=2,au(e,t,n,a)}finally{Q.p=d,z.T=c}}function Jb(e,t,n,a){var c=z.T;z.T=null;var d=Q.p;try{Q.p=8,au(e,t,n,a)}finally{Q.p=d,z.T=c}}function au(e,t,n,a){if(ds){var c=ru(a);if(c===null)qc(e,t,a,hs,n),Rp(e,a);else if(t0(c,e,t,n,a))a.stopPropagation();else if(Rp(e,a),t&4&&-1<e0.indexOf(e)){for(;c!==null;){var d=$o(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=jo(d.pendingLanes);if(y!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;y;){var C=1<<31-It(y);w.entanglements[1]|=C,y&=~C}fn(d),(_e&6)===0&&(Xr=pt()+500,Ra(0))}}break;case 31:case 13:w=Ro(d,2),w!==null&&Mt(w,d,2),Zr(),iu(d,2)}if(d=ru(a),d===null&&qc(e,t,a,hs,n),d===c)break;c=d}c!==null&&a.stopPropagation()}else qc(e,t,a,null,n)}}function ru(e){return e=ll(e),su(e)}var hs=null;function su(e){if(hs=null,e=Wo(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=f(t),e!==null)return e;e=null}else if(n===31){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return hs=e,null}function kp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fe()){case lt:return 2;case cn:return 8;case Qo:case Fv:return 32;case Pd:return 268435456;default:return 32}default:return 32}}var lu=!1,no=null,oo=null,io=null,Na=new Map,Pa=new Map,ao=[],e0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rp(e,t){switch(e){case"focusin":case"focusout":no=null;break;case"dragenter":case"dragleave":oo=null;break;case"mouseover":case"mouseout":io=null;break;case"pointerover":case"pointerout":Na.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pa.delete(t.pointerId)}}function Oa(e,t,n,a,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:d,targetContainers:[c]},t!==null&&(t=$o(t),t!==null&&Sp(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function t0(e,t,n,a,c){switch(t){case"focusin":return no=Oa(no,e,t,n,a,c),!0;case"dragenter":return oo=Oa(oo,e,t,n,a,c),!0;case"mouseover":return io=Oa(io,e,t,n,a,c),!0;case"pointerover":var d=c.pointerId;return Na.set(d,Oa(Na.get(d)||null,e,t,n,a,c)),!0;case"gotpointercapture":return d=c.pointerId,Pa.set(d,Oa(Pa.get(d)||null,e,t,n,a,c)),!0}return!1}function Ap(e){var t=Wo(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=f(n),t!==null){e.blockedOn=t,Fd(e.priority,function(){Tp(n)});return}}else if(t===31){if(t=m(n),t!==null){e.blockedOn=t,Fd(e.priority,function(){Tp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ru(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);sl=a,n.target.dispatchEvent(a),sl=null}else return t=$o(n),t!==null&&Sp(t),e.blockedOn=n,!1;t.shift()}return!0}function Cp(e,t,n){fs(e)&&n.delete(t)}function n0(){lu=!1,no!==null&&fs(no)&&(no=null),oo!==null&&fs(oo)&&(oo=null),io!==null&&fs(io)&&(io=null),Na.forEach(Cp),Pa.forEach(Cp)}function ms(e,t){e.blockedOn===t&&(e.blockedOn=null,lu||(lu=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,n0)))}var ps=null;function Mp(e){ps!==e&&(ps=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ps===e&&(ps=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],c=e[t+2];if(typeof a!="function"){if(su(a||n)===null)continue;break}var d=$o(n);d!==null&&(e.splice(t,3),t-=3,rc(d,{pending:!0,data:c,method:n.method,action:a},a,c))}}))}function Ni(e){function t(C){return ms(C,e)}no!==null&&ms(no,e),oo!==null&&ms(oo,e),io!==null&&ms(io,e),Na.forEach(t),Pa.forEach(t);for(var n=0;n<ao.length;n++){var a=ao[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ao.length&&(n=ao[0],n.blockedOn===null);)Ap(n),n.blockedOn===null&&ao.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var c=n[a],d=n[a+1],y=c[St]||null;if(typeof d=="function")y||Mp(n);else if(y){var w=null;if(d&&d.hasAttribute("formAction")){if(c=d,y=d[St]||null)w=y.formAction;else if(su(c)!==null)continue}else w=y.action;typeof w=="function"?n[a+1]=w:(n.splice(a,3),a-=3),Mp(n)}}}function _p(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return c=y})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function cu(e){this._internalRoot=e}gs.prototype.render=cu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var n=t.current,a=Vt();jp(n,a,e,t,null,null)},gs.prototype.unmount=cu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jp(e.current,2,null,e,null,null),Zr(),t[Zo]=null}};function gs(e){this._internalRoot=e}gs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ao.length&&t!==0&&t<ao[n].priority;n++);ao.splice(n,0,e),n===0&&Ap(e)}};var Ep=r.version;if(Ep!=="19.2.5")throw Error(l(527,Ep,"19.2.5"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=p(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var o0={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ys.isDisabled&&ys.supportsFiber)try{Gi=ys.inject(o0),Ot=ys}catch{}}return za.createRoot=function(e,t){if(!u(e))throw Error(l(299));var n=!1,a="",c=Lf,d=Bf,y=Ff;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(d=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError)),t=xp(e,1,!1,null,null,n,a,null,c,d,y,_p),e[Zo]=t.current,Gc(e),new cu(t)},za.hydrateRoot=function(e,t,n){if(!u(e))throw Error(l(299));var a=!1,c="",d=Lf,y=Bf,w=Ff,C=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(y=n.onCaughtError),n.onRecoverableError!==void 0&&(w=n.onRecoverableError),n.formState!==void 0&&(C=n.formState)),t=xp(e,1,!0,t,n??null,a,c,C,d,y,w,_p),t.context=bp(null),n=t.current,a=Vt(),a=Js(a),c=Gn(a),c.callback=null,qn(n,c,a),n=a,t.current.lanes=n,Yi(t,n),fn(t),e[Zo]=t.current,Gc(e),new gs(t)},za.version="19.2.5",za}var Hp;function f0(){if(Hp)return hu.exports;Hp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),hu.exports=h0(),hu.exports}var m0=f0();const p0=id(m0);var Ga=typeof window<"u"?_.useLayoutEffect:_.useEffect;function gu(i){const r=_.useRef({value:i,prev:null}),s=r.current.value;return i!==s&&(r.current={value:i,prev:s}),r.current.prev}function g0(i,r,s={},l={}){_.useEffect(()=>{if(!i.current||l.disabled||typeof IntersectionObserver!="function")return;const u=new IntersectionObserver(([h])=>{r(h)},s);return u.observe(i.current),()=>{u.disconnect()}},[r,s,l.disabled,i])}function y0(i){const r=_.useRef(null);return _.useImperativeHandle(i,()=>r.current,[]),r}var Yg=!1;function qa(i){return i[i.length-1]}function v0(i){return typeof i=="function"}function uo(i,r){return v0(i)?i(r):i}var x0=Object.prototype.hasOwnProperty,Vp=Object.prototype.propertyIsEnumerable,b0=()=>Object.create(null),Bo=(i,r)=>ho(i,r,b0);function ho(i,r,s=()=>({}),l=0){if(i===r)return i;if(l>500)return r;const u=r,h=Yp(i)&&Yp(u);if(!h&&!(Li(i)&&Li(u)))return u;const f=h?i:Gp(i);if(!f)return u;const m=h?u:Gp(u);if(!m)return u;const g=f.length,p=m.length,v=h?new Array(p):s();let x=0;for(let b=0;b<p;b++){const j=h?b:m[b],S=i[j],k=u[j];if(S===k){v[j]=S,(h?b<g:x0.call(i,j))&&x++;continue}if(S===null||k===null||typeof S!="object"||typeof k!="object"){v[j]=k;continue}const A=ho(S,k,s,l+1);v[j]=A,A===S&&x++}return g===p&&x===g?i:v}function Gp(i){const r=Object.getOwnPropertyNames(i);for(const u of r)if(!Vp.call(i,u))return!1;const s=Object.getOwnPropertySymbols(i);if(s.length===0)return r;const l=r;for(const u of s){if(!Vp.call(i,u))return!1;l.push(u)}return l}function Li(i){if(!qp(i))return!1;const r=i.constructor;if(typeof r>"u")return!0;const s=r.prototype;return!(!qp(s)||!s.hasOwnProperty("isPrototypeOf"))}function qp(i){return Object.prototype.toString.call(i)==="[object Object]"}function Yp(i){return Array.isArray(i)&&i.length===Object.keys(i).length}function Et(i,r,s){if(i===r)return!0;if(typeof i!=typeof r)return!1;if(Array.isArray(i)&&Array.isArray(r)){if(i.length!==r.length)return!1;for(let l=0,u=i.length;l<u;l++)if(!Et(i[l],r[l],s))return!1;return!0}if(Li(i)&&Li(r)){const l=s?.ignoreUndefined??!0;if(s?.partial){for(const f in r)if((!l||r[f]!==void 0)&&!Et(i[f],r[f],s))return!1;return!0}let u=0;if(!l)u=Object.keys(i).length;else for(const f in i)i[f]!==void 0&&u++;let h=0;for(const f in r)if((!l||r[f]!==void 0)&&(h++,h>u||!Et(i[f],r[f],s)))return!1;return u===h}return!1}function Bi(i){let r,s;const l=new Promise((u,h)=>{r=u,s=h});return l.status="pending",l.resolve=u=>{l.status="resolved",l.value=u,r(u),i?.(u)},l.reject=u=>{l.status="rejected",s(u)},l}function Ya(i){return!!(i&&typeof i=="object"&&typeof i.then=="function")}function j0(i){return i.replace(/[\x00-\x1f\x7f]/g,"")}function Kp(i){let r;try{r=decodeURI(i)}catch{r=i.replaceAll(/%[0-9A-F]{2}/gi,s=>{try{return decodeURI(s)}catch{return s}})}return j0(r)}var w0=["http:","https:","mailto:","tel:"];function Es(i,r){if(!i)return!1;try{const s=new URL(i);return!r.has(s.protocol)}catch{return!1}}var S0={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},T0=/[&><\u2028\u2029]/g;function k0(i){return i.replace(T0,r=>S0[r])}function La(i){if(!i)return{path:i,handledProtocolRelativeURL:!1};if(!/[%\\\x00-\x1f\x7f]/.test(i)&&!i.startsWith("//"))return{path:i,handledProtocolRelativeURL:!1};const r=/%25|%5C/gi;let s=0,l="",u;for(;(u=r.exec(i))!==null;)l+=Kp(i.slice(s,u.index))+u[0],s=r.lastIndex;l=l+Kp(s?i.slice(s):i);let h=!1;return l.startsWith("//")&&(h=!0,l="/"+l.replace(/^\/+/,"")),{path:l,handledProtocolRelativeURL:h}}function R0(i){return/\s|[^\u0000-\u007F]/.test(i)?i.replace(/\s|[^\u0000-\u007F]/gu,encodeURIComponent):i}function A0(i,r){if(i===r)return!0;if(i.length!==r.length)return!1;for(let s=0;s<i.length;s++)if(i[s]!==r[s])return!1;return!0}function On(){throw new Error("Invariant failed")}function Ka(i){const r=new Map;let s,l;const u=h=>{h.next&&(h.prev?(h.prev.next=h.next,h.next.prev=h.prev,h.next=void 0,l&&(l.next=h,h.prev=l)):(h.next.prev=void 0,s=h.next,h.next=void 0,l&&(h.prev=l,l.next=h)),l=h)};return{get(h){const f=r.get(h);if(f)return u(f),f.value},set(h,f){if(r.size>=i&&s){const g=s;r.delete(g.key),g.next&&(s=g.next,g.next.prev=void 0),g===l&&(l=void 0)}const m=r.get(h);if(m)m.value=f,u(m);else{const g={key:h,value:f,prev:l};l&&(l.next=g),l=g,s||(s=g),r.set(h,g)}},clear(){r.clear(),s=void 0,l=void 0}}}var Ho=4,Kg=5;function C0(i){const r=i.indexOf("{");if(r===-1)return null;const s=i.indexOf("}",r);return s===-1||r+1>=i.length?null:[r,s]}function rd(i,r,s=new Uint16Array(6)){const l=i.indexOf("/",r),u=l===-1?i.length:l,h=i.substring(r,u);if(!h||!h.includes("$"))return s[0]=0,s[1]=r,s[2]=r,s[3]=u,s[4]=u,s[5]=u,s;if(h==="$"){const m=i.length;return s[0]=2,s[1]=r,s[2]=r,s[3]=m,s[4]=m,s[5]=m,s}if(h.charCodeAt(0)===36)return s[0]=1,s[1]=r,s[2]=r+1,s[3]=u,s[4]=u,s[5]=u,s;const f=C0(h);if(f){const[m,g]=f,p=h.charCodeAt(m+1);if(p===45){if(m+2<h.length&&h.charCodeAt(m+2)===36){const v=m+3,x=g;if(v<x)return s[0]=3,s[1]=r+m,s[2]=r+v,s[3]=r+x,s[4]=r+g+1,s[5]=u,s}}else if(p===36){const v=m+1,x=m+2;return x===g?(s[0]=2,s[1]=r+m,s[2]=r+v,s[3]=r+x,s[4]=r+g+1,s[5]=i.length,s):(s[0]=1,s[1]=r+m,s[2]=r+x,s[3]=r+g,s[4]=r+g+1,s[5]=u,s)}}return s[0]=0,s[1]=r,s[2]=r,s[3]=u,s[4]=u,s[5]=u,s}function Us(i,r,s,l,u,h,f){f?.(s);let m=l;{const g=s.fullPath??s.from,p=g.length,v=s.options?.caseSensitive??i,x=!!(s.options?.params?.parse&&s.options?.skipRouteOnParseError?.params);for(;m<p;){const j=rd(g,m,r);let S;const k=m,A=j[5];switch(m=A+1,h++,j[0]){case 0:{const N=g.substring(j[2],j[3]);if(v){const R=u.static?.get(N);if(R)S=R;else{u.static??=new Map;const T=Vo(s.fullPath??s.from);T.parent=u,T.depth=h,S=T,u.static.set(N,T)}}else{const R=N.toLowerCase(),T=u.staticInsensitive?.get(R);if(T)S=T;else{u.staticInsensitive??=new Map;const M=Vo(s.fullPath??s.from);M.parent=u,M.depth=h,S=M,u.staticInsensitive.set(R,M)}}break}case 1:{const N=g.substring(k,j[1]),R=g.substring(j[4],A),T=v&&!!(N||R),M=N?T?N:N.toLowerCase():void 0,V=R?T?R:R.toLowerCase():void 0,F=!x&&u.dynamic?.find(I=>!I.skipOnParamError&&I.caseSensitive===T&&I.prefix===M&&I.suffix===V);if(F)S=F;else{const I=vu(1,s.fullPath??s.from,T,M,V);S=I,I.depth=h,I.parent=u,u.dynamic??=[],u.dynamic.push(I)}break}case 3:{const N=g.substring(k,j[1]),R=g.substring(j[4],A),T=v&&!!(N||R),M=N?T?N:N.toLowerCase():void 0,V=R?T?R:R.toLowerCase():void 0,F=!x&&u.optional?.find(I=>!I.skipOnParamError&&I.caseSensitive===T&&I.prefix===M&&I.suffix===V);if(F)S=F;else{const I=vu(3,s.fullPath??s.from,T,M,V);S=I,I.parent=u,I.depth=h,u.optional??=[],u.optional.push(I)}break}case 2:{const N=g.substring(k,j[1]),R=g.substring(j[4],A),T=v&&!!(N||R),M=N?T?N:N.toLowerCase():void 0,V=R?T?R:R.toLowerCase():void 0,F=vu(2,s.fullPath??s.from,T,M,V);S=F,F.parent=u,F.depth=h,u.wildcard??=[],u.wildcard.push(F)}}u=S}if(x&&s.children&&!s.isRoot&&s.id&&s.id.charCodeAt(s.id.lastIndexOf("/")+1)===95){const j=Vo(s.fullPath??s.from);j.kind=Kg,j.parent=u,h++,j.depth=h,u.pathless??=[],u.pathless.push(j),u=j}const b=(s.path||!s.children)&&!s.isRoot;if(b&&g.endsWith("/")){const j=Vo(s.fullPath??s.from);j.kind=Ho,j.parent=u,h++,j.depth=h,u.index=j,u=j}u.parse=s.options?.params?.parse??null,u.skipOnParamError=x,u.parsingPriority=s.options?.skipRouteOnParseError?.priority??0,b&&!u.route&&(u.route=s,u.fullPath=s.fullPath??s.from)}if(s.children)for(const g of s.children)Us(i,r,g,m,u,h,f)}function yu(i,r){if(i.skipOnParamError&&!r.skipOnParamError)return-1;if(!i.skipOnParamError&&r.skipOnParamError)return 1;if(i.skipOnParamError&&r.skipOnParamError&&(i.parsingPriority||r.parsingPriority))return r.parsingPriority-i.parsingPriority;if(i.prefix&&r.prefix&&i.prefix!==r.prefix){if(i.prefix.startsWith(r.prefix))return-1;if(r.prefix.startsWith(i.prefix))return 1}if(i.suffix&&r.suffix&&i.suffix!==r.suffix){if(i.suffix.endsWith(r.suffix))return-1;if(r.suffix.endsWith(i.suffix))return 1}return i.prefix&&!r.prefix?-1:!i.prefix&&r.prefix?1:i.suffix&&!r.suffix?-1:!i.suffix&&r.suffix?1:i.caseSensitive&&!r.caseSensitive?-1:!i.caseSensitive&&r.caseSensitive?1:0}function co(i){if(i.pathless)for(const r of i.pathless)co(r);if(i.static)for(const r of i.static.values())co(r);if(i.staticInsensitive)for(const r of i.staticInsensitive.values())co(r);if(i.dynamic?.length){i.dynamic.sort(yu);for(const r of i.dynamic)co(r)}if(i.optional?.length){i.optional.sort(yu);for(const r of i.optional)co(r)}if(i.wildcard?.length){i.wildcard.sort(yu);for(const r of i.wildcard)co(r)}}function Vo(i){return{kind:0,depth:0,pathless:null,index:null,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:i,parent:null,parse:null,skipOnParamError:!1,parsingPriority:0}}function vu(i,r,s,l,u){return{kind:i,depth:0,pathless:null,index:null,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:r,parent:null,parse:null,skipOnParamError:!1,parsingPriority:0,caseSensitive:s,prefix:l,suffix:u}}function M0(i,r){const s=Vo("/"),l=new Uint16Array(6);for(const u of i)Us(!1,l,u,1,s,0);co(s),r.masksTree=s,r.flatCache=Ka(1e3)}function _0(i,r){i||="/";const s=r.flatCache.get(i);if(s)return s;const l=sd(i,r.masksTree);return r.flatCache.set(i,l),l}function E0(i,r,s,l,u){i||="/",l||="/";const h=r?`case\0${i}`:i;let f=u.singleCache.get(h);return f||(f=Vo("/"),Us(r,new Uint16Array(6),{from:i},1,f,0),u.singleCache.set(h,f)),sd(l,f,s)}function D0(i,r,s=!1){const l=s?i:`nofuzz\0${i}`,u=r.matchCache.get(l);if(u!==void 0)return u;i||="/";let h;try{h=sd(i,r.segmentTree,s)}catch(f){if(f instanceof URIError)h=null;else throw f}return h&&(h.branch=O0(h.route)),r.matchCache.set(l,h),h}function N0(i){return i==="/"?i:i.replace(/\/{1,}$/,"")}function P0(i,r=!1,s){const l=Vo(i.fullPath),u=new Uint16Array(6),h={},f={};let m=0;return Us(r,u,i,1,l,0,g=>{if(s?.(g,m),g.id in h&&On(),h[g.id]=g,m!==0&&g.path){const p=N0(g.fullPath);(!f[p]||g.fullPath.endsWith("/"))&&(f[p]=g)}m++}),co(l),{processedTree:{segmentTree:l,singleCache:Ka(1e3),matchCache:Ka(1e3),flatCache:null,masksTree:null},routesById:h,routesByPath:f}}function sd(i,r,s=!1){const l=i.split("/"),u=z0(i,l,r,s);if(!u)return null;const[h]=Xg(i,l,u);return{route:u.node.route,rawParams:h,parsedParams:u.parsedParams}}function Xg(i,r,s){const l=I0(s.node);let u=null;const h=Object.create(null);let f=s.extract?.part??0,m=s.extract?.node??0,g=s.extract?.path??0,p=s.extract?.segment??0;for(;m<l.length;f++,m++,g++,p++){const v=l[m];if(v.kind===Ho)break;if(v.kind===Kg){p--,f--,g--;continue}const x=r[f],b=g;if(x&&(g+=x.length),v.kind===1){u??=s.node.fullPath.split("/");const j=u[p],S=v.prefix?.length??0;if(j.charCodeAt(S)===123){const k=v.suffix?.length??0,A=j.substring(S+2,j.length-k-1),N=x.substring(S,x.length-k);h[A]=decodeURIComponent(N)}else{const k=j.substring(1);h[k]=decodeURIComponent(x)}}else if(v.kind===3){if(s.skipped&1<<m){f--,g=b-1;continue}u??=s.node.fullPath.split("/");const j=u[p],S=v.prefix?.length??0,k=v.suffix?.length??0,A=j.substring(S+3,j.length-k-1),N=v.suffix||v.prefix?x.substring(S,x.length-k):x;N&&(h[A]=decodeURIComponent(N))}else if(v.kind===2){const j=v,S=i.substring(b+(j.prefix?.length??0),i.length-(j.suffix?.length??0)),k=decodeURIComponent(S);h["*"]=k,h._splat=k;break}}return s.rawParams&&Object.assign(h,s.rawParams),[h,{part:f,node:m,path:g,segment:p}]}function O0(i){const r=[i];for(;i.parentRoute;)i=i.parentRoute,r.push(i);return r.reverse(),r}function I0(i){const r=Array(i.depth+1);do r[i.depth]=i,i=i.parent;while(i);return r}function z0(i,r,s,l){if(i==="/"&&s.index)return{node:s.index,skipped:0};const u=!qa(r),h=u&&i!=="/",f=r.length-(u?1:0),m=[{node:s,index:1,skipped:0,depth:1,statics:1,dynamics:0,optionals:0}];let g=null,p=null,v=null;for(;m.length;){const x=m.pop(),{node:b,index:j,skipped:S,depth:k,statics:A,dynamics:N,optionals:R}=x;let{extract:T,rawParams:M,parsedParams:V}=x;if(b.skipOnParamError){if(!xu(i,r,x))continue;M=x.rawParams,T=x.extract,V=x.parsedParams}l&&b.route&&b.kind!==Ho&&Ba(p,x)&&(p=x);const F=j===f;if(F&&(b.route&&!h&&Ba(v,x)&&(v=x),!b.optional&&!b.wildcard&&!b.index&&!b.pathless))continue;const I=F?void 0:r[j];let P;if(F&&b.index){const H={node:b.index,index:j,skipped:S,depth:k+1,statics:A,dynamics:N,optionals:R,extract:T,rawParams:M,parsedParams:V};let W=!0;if(b.index.skipOnParamError&&(xu(i,r,H)||(W=!1)),W){if(A===f&&!N&&!R&&!S)return H;Ba(v,H)&&(v=H)}}if(b.wildcard&&Ba(g,x))for(const H of b.wildcard){const{prefix:W,suffix:Z}=H;if(W&&(F||!(H.caseSensitive?I:P??=I.toLowerCase()).startsWith(W)))continue;if(Z){if(F)continue;const he=r.slice(j).join("/").slice(-Z.length);if((H.caseSensitive?he:he.toLowerCase())!==Z)continue}const oe={node:H,index:f,skipped:S,depth:k,statics:A,dynamics:N,optionals:R,extract:T,rawParams:M,parsedParams:V};if(!(H.skipOnParamError&&!xu(i,r,oe))){g=oe;break}}if(b.optional){const H=S|1<<k,W=k+1;for(let Z=b.optional.length-1;Z>=0;Z--){const oe=b.optional[Z];m.push({node:oe,index:j,skipped:H,depth:W,statics:A,dynamics:N,optionals:R,extract:T,rawParams:M,parsedParams:V})}if(!F)for(let Z=b.optional.length-1;Z>=0;Z--){const oe=b.optional[Z],{prefix:he,suffix:Ae}=oe;if(he||Ae){const ue=oe.caseSensitive?I:P??=I.toLowerCase();if(he&&!ue.startsWith(he)||Ae&&!ue.endsWith(Ae))continue}m.push({node:oe,index:j+1,skipped:S,depth:W,statics:A,dynamics:N,optionals:R+1,extract:T,rawParams:M,parsedParams:V})}}if(!F&&b.dynamic&&I)for(let H=b.dynamic.length-1;H>=0;H--){const W=b.dynamic[H],{prefix:Z,suffix:oe}=W;if(Z||oe){const he=W.caseSensitive?I:P??=I.toLowerCase();if(Z&&!he.startsWith(Z)||oe&&!he.endsWith(oe))continue}m.push({node:W,index:j+1,skipped:S,depth:k+1,statics:A,dynamics:N+1,optionals:R,extract:T,rawParams:M,parsedParams:V})}if(!F&&b.staticInsensitive){const H=b.staticInsensitive.get(P??=I.toLowerCase());H&&m.push({node:H,index:j+1,skipped:S,depth:k+1,statics:A+1,dynamics:N,optionals:R,extract:T,rawParams:M,parsedParams:V})}if(!F&&b.static){const H=b.static.get(I);H&&m.push({node:H,index:j+1,skipped:S,depth:k+1,statics:A+1,dynamics:N,optionals:R,extract:T,rawParams:M,parsedParams:V})}if(b.pathless){const H=k+1;for(let W=b.pathless.length-1;W>=0;W--){const Z=b.pathless[W];m.push({node:Z,index:j,skipped:S,depth:H,statics:A,dynamics:N,optionals:R,extract:T,rawParams:M,parsedParams:V})}}}if(v&&g)return Ba(g,v)?v:g;if(v)return v;if(g)return g;if(l&&p){let x=p.index;for(let j=0;j<p.index;j++)x+=r[j].length;const b=x===i.length?"/":i.slice(x);return p.rawParams??=Object.create(null),p.rawParams["**"]=decodeURIComponent(b),p}return null}function xu(i,r,s){try{const[l,u]=Xg(i,r,s);s.rawParams=l,s.extract=u;const h=s.node.parse(l);return s.parsedParams=Object.assign(Object.create(null),s.parsedParams,h),!0}catch{return null}}function Ba(i,r){return i?r.statics>i.statics||r.statics===i.statics&&(r.dynamics>i.dynamics||r.dynamics===i.dynamics&&(r.optionals>i.optionals||r.optionals===i.optionals&&((r.node.kind===Ho)>(i.node.kind===Ho)||r.node.kind===Ho==(i.node.kind===Ho)&&r.depth>i.depth))):!0}function Rs(i){return ld(i.filter(r=>r!==void 0).join("/"))}function ld(i){return i.replace(/\/{2,}/g,"/")}function Qg(i){return i==="/"?i:i.replace(/^\/{1,}/,"")}function mo(i){const r=i.length;return r>1&&i[r-1]==="/"?i.replace(/\/{1,}$/,""):i}function Zg(i){return mo(Qg(i))}function Ds(i,r){return i?.endsWith("/")&&i!=="/"&&i!==`${r}/`?i.slice(0,-1):i}function L0(i,r,s){return Ds(i,s)===Ds(r,s)}function B0({base:i,to:r,trailingSlash:s="never",cache:l}){const u=r.startsWith("/"),h=!u&&r===".";let f;if(l){f=u?r:h?i:i+"\0"+r;const x=l.get(f);if(x)return x}let m;if(h)m=i.split("/");else if(u)m=r.split("/");else{for(m=i.split("/");m.length>1&&qa(m)==="";)m.pop();const x=r.split("/");for(let b=0,j=x.length;b<j;b++){const S=x[b];S===""?b?b===j-1&&m.push(S):m=[S]:S===".."?m.pop():S==="."||m.push(S)}}m.length>1&&(qa(m)===""?s==="never"&&m.pop():s==="always"&&m.push(""));let g,p="";for(let x=0;x<m.length;x++){x>0&&(p+="/");const b=m[x];if(!b)continue;g=rd(b,0,g);const j=g[0];if(j===0){p+=b;continue}const S=g[5],k=b.substring(0,g[1]),A=b.substring(g[4],S),N=b.substring(g[2],g[3]);j===1?p+=k||A?`${k}{$${N}}${A}`:`$${N}`:j===2?p+=k||A?`${k}{$}${A}`:"$":p+=`${k}{-$${N}}${A}`}p=ld(p);const v=p||"/";return f&&l&&l.set(f,v),v}function F0(i){const r=new Map(i.map(u=>[encodeURIComponent(u),u])),s=Array.from(r.keys()).map(u=>u.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|"),l=new RegExp(s,"g");return u=>u.replace(l,h=>r.get(h)??h)}function bu(i,r,s){const l=r[i];return typeof l!="string"?l:i==="_splat"?/^[a-zA-Z0-9\-._~!/]*$/.test(l)?l:l.split("/").map(u=>Qp(u,s)).join("/"):Qp(l,s)}function Xp({path:i,params:r,decoder:s,...l}){let u=!1;const h=Object.create(null);if(!i||i==="/")return{interpolatedPath:"/",usedParams:h,isMissingParams:u};if(!i.includes("$"))return{interpolatedPath:i,usedParams:h,isMissingParams:u};const f=i.length;let m=0,g,p="";for(;m<f;){const v=m;g=rd(i,v,g);const x=g[5];if(m=x+1,v===x)continue;const b=g[0];if(b===0){p+="/"+i.substring(v,x);continue}if(b===2){const j=r._splat;h._splat=j,h["*"]=j;const S=i.substring(v,g[1]),k=i.substring(g[4],x);if(!j){u=!0,(S||k)&&(p+="/"+S+k);continue}const A=bu("_splat",r,s);p+="/"+S+A+k;continue}if(b===1){const j=i.substring(g[2],g[3]);!u&&!(j in r)&&(u=!0),h[j]=r[j];const S=i.substring(v,g[1]),k=i.substring(g[4],x),A=bu(j,r,s)??"undefined";p+="/"+S+A+k;continue}if(b===3){const j=i.substring(g[2],g[3]),S=r[j];if(S==null)continue;h[j]=S;const k=i.substring(v,g[1]),A=i.substring(g[4],x),N=bu(j,r,s)??"";p+="/"+k+N+A;continue}}return i.endsWith("/")&&(p+="/"),{usedParams:h,interpolatedPath:p||"/",isMissingParams:u}}function Qp(i,r){const s=encodeURIComponent(i);return r?.(s)??s}function vt(i){return i?.isNotFound===!0}function U0(){try{return typeof window<"u"&&typeof window.sessionStorage=="object"?window.sessionStorage:void 0}catch{return}}var H0="tsr-scroll-restoration-v1_3";function V0(){const i=U0();if(!i)return null;let r={};try{const l=JSON.parse(i.getItem("tsr-scroll-restoration-v1_3")||"{}");Li(l)&&(r=l)}catch{}return{get state(){return r},set:l=>{r=uo(l,r)||r},persist:()=>{try{i.setItem(H0,JSON.stringify(r))}catch{}}}}var Zp=V0(),G0=i=>i.state.__TSR_key||i.href;function q0(i){const r=[];let s;for(;s=i.parentNode;)r.push(`${i.tagName}:nth-child(${Array.prototype.indexOf.call(s.children,i)+1})`),i=s;return`${r.reverse().join(" > ")}`.toLowerCase()}var vs=!1,Fa="window",Wp="data-scroll-restoration-id";function Y0(i,r){if(!Zp)return;const s=Zp;if((i.options.scrollRestoration??!1)&&(i.isScrollRestoring=!0),i.isScrollRestorationSetup||!s)return;i.isScrollRestorationSetup=!0,vs=!1;const l=i.options.getScrollRestorationKey||G0,u=new Map;window.history.scrollRestoration="manual";const h=m=>{if(!(vs||!i.isScrollRestoring))if(m.target===document||m.target===window)u.set(Fa,{scrollX:window.scrollX||0,scrollY:window.scrollY||0});else{const g=m.target;u.set(g,{scrollX:g.scrollLeft||0,scrollY:g.scrollTop||0})}},f=m=>{if(!i.isScrollRestoring||!m||u.size===0||!s)return;const g=s.state[m]||={};for(const[p,v]of u){let x;if(p===Fa)x=Fa;else if(p.isConnected){const b=p.getAttribute(Wp);x=b?`[${Wp}="${b}"]`:q0(p)}x&&(g[x]=v)}};document.addEventListener("scroll",h,!0),i.subscribe("onBeforeLoad",m=>{f(m.fromLocation?l(m.fromLocation):void 0),u.clear()}),window.addEventListener("pagehide",()=>{f(l(i.stores.resolvedLocation.get()??i.stores.location.get())),s.persist()}),i.subscribe("onRendered",m=>{const g=l(m.toLocation),p=i.options.scrollRestorationBehavior,v=i.options.scrollToTopSelectors;if(u.clear(),!i.resetNextScroll){i.resetNextScroll=!0;return}if(!(typeof i.options.scrollRestoration=="function"&&!i.options.scrollRestoration({location:i.latestLocation}))){vs=!0;try{const x=i.isScrollRestoring?s.state[g]:void 0;let b=!1;if(x)for(const j in x){const S=x[j];if(!Li(S))continue;const{scrollX:k,scrollY:A}=S;if(!(!Number.isFinite(k)||!Number.isFinite(A))){if(j===Fa)window.scrollTo({top:A,left:k,behavior:p}),b=!0;else if(j){let N;try{N=document.querySelector(j)}catch{continue}N&&(N.scrollLeft=k,N.scrollTop=A,b=!0)}}}if(!b){const j=i.history.location.hash.slice(1);if(j){const S=window.history.state?.__hashScrollIntoViewOptions??!0;if(S){const k=document.getElementById(j);k&&k.scrollIntoView(S)}}else{const S={top:0,left:0,behavior:p};if(window.scrollTo(S),v)for(const k of v){if(k===Fa)continue;const A=typeof k=="function"?k():document.querySelector(k);A&&A.scrollTo(S)}}}}finally{vs=!1}i.isScrollRestoring&&s.set(x=>(x[g]||={},x))}})}function K0(i,r=String){const s=new URLSearchParams;for(const l in i){const u=i[l];u!==void 0&&s.set(l,r(u))}return s.toString()}function ju(i){return i?i==="false"?!1:i==="true"?!0:+i*0===0&&+i+""===i?+i:i:""}function X0(i){const r=new URLSearchParams(i),s=Object.create(null);for(const[l,u]of r.entries()){const h=s[l];h==null?s[l]=ju(u):Array.isArray(h)?h.push(ju(u)):s[l]=[h,ju(u)]}return s}var Q0=W0(JSON.parse),Z0=$0(JSON.stringify,JSON.parse);function W0(i){return r=>{r[0]==="?"&&(r=r.substring(1));const s=X0(r);for(const l in s){const u=s[l];if(typeof u=="string")try{s[l]=i(u)}catch{}}return s}}function $0(i,r){const s=typeof r=="function";function l(u){if(typeof u=="object"&&u!==null)try{return i(u)}catch{}else if(s&&typeof u=="string")try{return r(u),i(u)}catch{}return u}return u=>{const h=K0(u,l);return h?`?${h}`:""}}var Go="__root__";function J0(i){if(i.statusCode=i.statusCode||i.code||307,!i._builtLocation&&!i.reloadDocument&&typeof i.href=="string")try{new URL(i.href),i.reloadDocument=!0}catch{}const r=new Headers(i.headers);i.href&&r.get("Location")===null&&r.set("Location",i.href);const s=new Response(null,{status:i.statusCode,headers:r});if(s.options=i,i.throw)throw s;return s}function Dt(i){return i instanceof Response&&!!i.options}function ej(i){return{input:({url:r})=>{for(const s of i)r=Iu(s,r);return r},output:({url:r})=>{for(let s=i.length-1;s>=0;s--)r=Wg(i[s],r);return r}}}function tj(i){const r=Zg(i.basepath),s=`/${r}`,l=`${s}/`,u=i.caseSensitive?s:s.toLowerCase(),h=i.caseSensitive?l:l.toLowerCase();return{input:({url:f})=>{const m=i.caseSensitive?f.pathname:f.pathname.toLowerCase();return m===u?f.pathname="/":m.startsWith(h)&&(f.pathname=f.pathname.slice(s.length)),f},output:({url:f})=>(f.pathname=Rs(["/",r,f.pathname]),f)}}function Iu(i,r){const s=i?.input?.({url:r});if(s){if(typeof s=="string")return new URL(s);if(s instanceof URL)return s}return r}function Wg(i,r){const s=i?.output?.({url:r});if(s){if(typeof s=="string")return new URL(s);if(s instanceof URL)return s}return r}function nj(i,r){const{createMutableStore:s,createReadonlyStore:l,batch:u,init:h}=r,f=new Map,m=new Map,g=new Map,p=s(i.status),v=s(i.loadedAt),x=s(i.isLoading),b=s(i.isTransitioning),j=s(i.location),S=s(i.resolvedLocation),k=s(i.statusCode),A=s(i.redirect),N=s([]),R=s([]),T=s([]),M=l(()=>wu(f,N.get())),V=l(()=>wu(m,R.get())),F=l(()=>wu(g,T.get())),I=l(()=>N.get()[0]),P=l(()=>N.get().some(Q=>f.get(Q)?.get().status==="pending")),H=l(()=>({locationHref:j.get().href,resolvedLocationHref:S.get()?.href,status:p.get()})),W=l(()=>({status:p.get(),loadedAt:v.get(),isLoading:x.get(),isTransitioning:b.get(),matches:M.get(),location:j.get(),resolvedLocation:S.get(),statusCode:k.get(),redirect:A.get()})),Z=Ka(64);function oe(Q){let ee=Z.get(Q);return ee||(ee=l(()=>{const me=N.get();for(const $ of me){const E=f.get($);if(E&&E.routeId===Q)return E.get()}}),Z.set(Q,ee)),ee}const he={status:p,loadedAt:v,isLoading:x,isTransitioning:b,location:j,resolvedLocation:S,statusCode:k,redirect:A,matchesId:N,pendingIds:R,cachedIds:T,matches:M,pendingMatches:V,cachedMatches:F,firstId:I,hasPending:P,matchRouteDeps:H,matchStores:f,pendingMatchStores:m,cachedMatchStores:g,__store:W,getRouteMatchStore:oe,setMatches:Ae,setPending:ue,setCached:z};Ae(i.matches),h?.(he);function Ae(Q){Su(Q,f,N,s,u)}function ue(Q){Su(Q,m,R,s,u)}function z(Q){Su(Q,g,T,s,u)}return he}function wu(i,r){const s=[];for(const l of r){const u=i.get(l);u&&s.push(u.get())}return s}function Su(i,r,s,l,u){const h=i.map(m=>m.id),f=new Set(h);u(()=>{for(const m of r.keys())f.has(m)||r.delete(m);for(const m of i){const g=r.get(m.id);if(!g){const p=l(m);p.routeId=m.routeId,r.set(m.id,p);continue}g.routeId=m.routeId,g.get()!==m&&g.set(m)}A0(s.get(),h)||s.set(h)})}var zu=i=>{if(!i.rendered)return i.rendered=!0,i.onReady?.()},oj=i=>i.stores.matchesId.get().some(r=>i.stores.matchStores.get(r)?.get()._forcePending),Hs=(i,r)=>!!(i.preload&&!i.router.stores.matchStores.has(r)),qo=(i,r,s=!0)=>{const l={...i.router.options.context??{}},u=s?r:r-1;for(let h=0;h<=u;h++){const f=i.matches[h];if(!f)continue;const m=i.router.getMatch(f.id);m&&Object.assign(l,m.__routeContext,m.__beforeLoadContext)}return l},$p=(i,r)=>{if(!i.matches.length)return;const s=r.routeId,l=i.matches.findIndex(f=>f.routeId===i.router.routeTree.id),u=l>=0?l:0;let h=s?i.matches.findIndex(f=>f.routeId===s):i.firstBadMatchIndex??i.matches.length-1;h<0&&(h=u);for(let f=h;f>=0;f--){const m=i.matches[f];if(i.router.looseRoutesById[m.routeId].options.notFoundComponent)return f}return s?h:u},fo=(i,r,s)=>{if(!(!Dt(s)&&!vt(s)))throw Dt(s)&&s.redirectHandled&&!s.options.reloadDocument||(r&&(r._nonReactive.beforeLoadPromise?.resolve(),r._nonReactive.loaderPromise?.resolve(),r._nonReactive.beforeLoadPromise=void 0,r._nonReactive.loaderPromise=void 0,r._nonReactive.error=s,i.updateMatch(r.id,l=>({...l,status:Dt(s)?"redirected":vt(s)?"notFound":l.status==="pending"?"success":l.status,context:qo(i,r.index),isFetching:!1,error:s})),vt(s)&&!s.routeId&&(s.routeId=r.routeId),r._nonReactive.loadPromise?.resolve()),Dt(s)&&(i.rendered=!0,s.options._fromLocation=i.location,s.redirectHandled=!0,s=i.router.resolveRedirect(s))),s},$g=(i,r)=>{const s=i.router.getMatch(r);return!!(!s||s._nonReactive.dehydrated)},Jp=(i,r,s)=>{const l=qo(i,s);i.updateMatch(r,u=>({...u,context:l}))},Ua=(i,r,s,l)=>{const{id:u,routeId:h}=i.matches[r],f=i.router.looseRoutesById[h];if(s instanceof Promise)throw s;s.routerCode=l,i.firstBadMatchIndex??=r,fo(i,i.router.getMatch(u),s);try{f.options.onError?.(s)}catch(m){s=m,fo(i,i.router.getMatch(u),s)}i.updateMatch(u,m=>(m._nonReactive.beforeLoadPromise?.resolve(),m._nonReactive.beforeLoadPromise=void 0,m._nonReactive.loadPromise?.resolve(),{...m,error:s,status:"error",isFetching:!1,updatedAt:Date.now(),abortController:new AbortController})),!i.preload&&!Dt(s)&&!vt(s)&&(i.serialError??=s)},Jg=(i,r,s,l)=>{if(l._nonReactive.pendingTimeout!==void 0)return;const u=s.options.pendingMs??i.router.options.defaultPendingMs;if(i.onReady&&!Hs(i,r)&&(s.options.loader||s.options.beforeLoad||ty(s))&&typeof u=="number"&&u!==1/0&&(s.options.pendingComponent??i.router.options?.defaultPendingComponent)){const h=setTimeout(()=>{zu(i)},u);l._nonReactive.pendingTimeout=h}},ij=(i,r,s)=>{const l=i.router.getMatch(r);if(!l._nonReactive.beforeLoadPromise&&!l._nonReactive.loaderPromise)return;Jg(i,r,s,l);const u=()=>{const h=i.router.getMatch(r);h.preload&&(h.status==="redirected"||h.status==="notFound")&&fo(i,h,h.error)};return l._nonReactive.beforeLoadPromise?l._nonReactive.beforeLoadPromise.then(u):u()},aj=(i,r,s,l)=>{const u=i.router.getMatch(r);let h=u._nonReactive.loadPromise;u._nonReactive.loadPromise=Bi(()=>{h?.resolve(),h=void 0});const{paramsError:f,searchError:m}=u;f&&Ua(i,s,f,"PARSE_PARAMS"),m&&Ua(i,s,m,"VALIDATE_SEARCH"),Jg(i,r,l,u);const g=new AbortController;let p=!1;const v=()=>{p||(p=!0,i.updateMatch(r,M=>({...M,isFetching:"beforeLoad",fetchCount:M.fetchCount+1,abortController:g})))},x=()=>{u._nonReactive.beforeLoadPromise?.resolve(),u._nonReactive.beforeLoadPromise=void 0,i.updateMatch(r,M=>({...M,isFetching:!1}))};if(!l.options.beforeLoad){i.router.batch(()=>{v(),x()});return}u._nonReactive.beforeLoadPromise=Bi();const b={...qo(i,s,!1),...u.__routeContext},{search:j,params:S,cause:k}=u,A=Hs(i,r),N={search:j,abortController:g,params:S,preload:A,context:b,location:i.location,navigate:M=>i.router.navigate({...M,_fromLocation:i.location}),buildLocation:i.router.buildLocation,cause:A?"preload":k,matches:i.matches,routeId:l.id,...i.router.options.additionalContext},R=M=>{if(M===void 0){i.router.batch(()=>{v(),x()});return}(Dt(M)||vt(M))&&(v(),Ua(i,s,M,"BEFORE_LOAD")),i.router.batch(()=>{v(),i.updateMatch(r,V=>({...V,__beforeLoadContext:M})),x()})};let T;try{if(T=l.options.beforeLoad(N),Ya(T))return v(),T.catch(M=>{Ua(i,s,M,"BEFORE_LOAD")}).then(R)}catch(M){v(),Ua(i,s,M,"BEFORE_LOAD")}R(T)},rj=(i,r)=>{const{id:s,routeId:l}=i.matches[r],u=i.router.looseRoutesById[l],h=()=>m(),f=()=>aj(i,s,r,u),m=()=>{if($g(i,s))return;const g=ij(i,s,u);return Ya(g)?g.then(f):f()};return h()},sj=(i,r,s)=>{const l=i.router.getMatch(r);if(!l||!s.options.head&&!s.options.scripts&&!s.options.headers)return;const u={ssr:i.router.options.ssr,matches:i.matches,match:l,params:l.params,loaderData:l.loaderData};return Promise.all([s.options.head?.(u),s.options.scripts?.(u),s.options.headers?.(u)]).then(([h,f,m])=>({meta:h?.meta,links:h?.links,headScripts:h?.scripts,headers:m,scripts:f,styles:h?.styles}))},ey=(i,r,s,l,u)=>{const h=r[l-1],{params:f,loaderDeps:m,abortController:g,cause:p}=i.router.getMatch(s),v=qo(i,l),x=Hs(i,s);return{params:f,deps:m,preload:!!x,parentMatchPromise:h,abortController:g,context:v,location:i.location,navigate:b=>i.router.navigate({...b,_fromLocation:i.location}),cause:x?"preload":p,route:u,...i.router.options.additionalContext}},eg=async(i,r,s,l,u)=>{try{const h=i.router.getMatch(s);try{(!(Yg??i.router.isServer)||h.ssr===!0)&&Xa(u);const f=u.options.loader,m=typeof f=="function"?f:f?.handler,g=m?.(ey(i,r,s,l,u)),p=!!m&&Ya(g);if((p||u._lazyPromise||u._componentsPromise||u.options.head||u.options.scripts||u.options.headers||h._nonReactive.minPendingPromise)&&i.updateMatch(s,x=>({...x,isFetching:"loader"})),m){const x=p?await g:g;fo(i,i.router.getMatch(s),x),x!==void 0&&i.updateMatch(s,b=>({...b,loaderData:x}))}u._lazyPromise&&await u._lazyPromise;const v=h._nonReactive.minPendingPromise;v&&await v,u._componentsPromise&&await u._componentsPromise,i.updateMatch(s,x=>({...x,error:void 0,context:qo(i,l),status:"success",isFetching:!1,updatedAt:Date.now()}))}catch(f){let m=f;if(m?.name==="AbortError"){if(h.abortController.signal.aborted){h._nonReactive.loaderPromise?.resolve(),h._nonReactive.loaderPromise=void 0;return}i.updateMatch(s,p=>({...p,status:p.status==="pending"?"success":p.status,isFetching:!1,context:qo(i,l)}));return}const g=h._nonReactive.minPendingPromise;g&&await g,vt(f)&&await u.options.notFoundComponent?.preload?.(),fo(i,i.router.getMatch(s),f);try{u.options.onError?.(f)}catch(p){m=p,fo(i,i.router.getMatch(s),p)}!Dt(m)&&!vt(m)&&await Xa(u,["errorComponent"]),i.updateMatch(s,p=>({...p,error:m,context:qo(i,l),status:"error",isFetching:!1}))}}catch(h){const f=i.router.getMatch(s);f&&(f._nonReactive.loaderPromise=void 0),fo(i,f,h)}},lj=async(i,r,s)=>{async function l(j,S,k,A,N){const R=Date.now()-S.updatedAt,T=j?N.options.preloadStaleTime??i.router.options.defaultPreloadStaleTime??3e4:N.options.staleTime??i.router.options.defaultStaleTime??0,M=N.options.shouldReload,V=typeof M=="function"?M(ey(i,r,u,s,N)):M,{status:F,invalid:I}=A,P=R>=T&&(!!i.forceStaleReload||A.cause==="enter"||k!==void 0&&k!==A.id);f=F==="success"&&(I||(V??P)),j&&N.options.preload===!1||(f&&!i.sync&&v?(m=!0,(async()=>{try{await eg(i,r,u,s,N);const H=i.router.getMatch(u);H._nonReactive.loaderPromise?.resolve(),H._nonReactive.loadPromise?.resolve(),H._nonReactive.loaderPromise=void 0,H._nonReactive.loadPromise=void 0}catch(H){Dt(H)&&await i.router.navigate(H.options)}})()):F!=="success"||f?await eg(i,r,u,s,N):Jp(i,u,s))}const{id:u,routeId:h}=i.matches[s];let f=!1,m=!1;const g=i.router.looseRoutesById[h],p=g.options.loader,v=((typeof p=="function"?void 0:p?.staleReloadMode)??i.router.options.defaultStaleReloadMode)!=="blocking";if($g(i,u)){if(!i.router.getMatch(u))return i.matches[s];Jp(i,u,s)}else{const j=i.router.getMatch(u),S=i.router.stores.matchesId.get()[s],k=(S&&i.router.stores.matchStores.get(S)||null)?.routeId===h?S:i.router.stores.matches.get().find(N=>N.routeId===h)?.id,A=Hs(i,u);if(j._nonReactive.loaderPromise){if(j.status==="success"&&!i.sync&&!j.preload&&v)return j;await j._nonReactive.loaderPromise;const N=i.router.getMatch(u),R=N._nonReactive.error||N.error;R&&fo(i,N,R),N.status==="pending"&&await l(A,j,k,N,g)}else{const N=A&&!i.router.stores.matchStores.has(u),R=i.router.getMatch(u);R._nonReactive.loaderPromise=Bi(),N!==R.preload&&i.updateMatch(u,T=>({...T,preload:N})),await l(A,j,k,R,g)}}const x=i.router.getMatch(u);m||(x._nonReactive.loaderPromise?.resolve(),x._nonReactive.loadPromise?.resolve(),x._nonReactive.loadPromise=void 0),clearTimeout(x._nonReactive.pendingTimeout),x._nonReactive.pendingTimeout=void 0,m||(x._nonReactive.loaderPromise=void 0),x._nonReactive.dehydrated=void 0;const b=m?x.isFetching:!1;return b!==x.isFetching||x.invalid!==!1?(i.updateMatch(u,j=>({...j,isFetching:b,invalid:!1})),i.router.getMatch(u)):x};async function tg(i){const r=i,s=[];oj(r.router)&&zu(r);let l;for(let b=0;b<r.matches.length;b++){try{const j=rj(r,b);Ya(j)&&await j}catch(j){if(Dt(j))throw j;if(vt(j))l=j;else if(!r.preload)throw j;break}if(r.serialError||r.firstBadMatchIndex!=null)break}const u=r.firstBadMatchIndex??r.matches.length,h=l&&!r.preload?$p(r,l):void 0,f=l&&r.preload?0:h!==void 0?Math.min(h+1,u):u;let m,g;for(let b=0;b<f;b++)s.push(lj(r,s,b));try{await Promise.all(s)}catch{const b=await Promise.allSettled(s);for(const j of b){if(j.status!=="rejected")continue;const S=j.reason;if(Dt(S))throw S;vt(S)?m??=S:g??=S}if(g!==void 0)throw g}const p=m??(l&&!r.preload?l:void 0);let v=r.firstBadMatchIndex!==void 0?r.firstBadMatchIndex:r.matches.length-1;if(!p&&l&&r.preload)return r.matches;if(p){const b=$p(r,p);b===void 0&&On();const j=r.matches[b],S=r.router.looseRoutesById[j.routeId],k=r.router.options?.defaultNotFoundComponent;!S.options.notFoundComponent&&k&&(S.options.notFoundComponent=k),p.routeId=j.routeId;const A=j.routeId===r.router.routeTree.id;r.updateMatch(j.id,N=>({...N,...A?{status:"success",globalNotFound:!0,error:void 0}:{status:"notFound",error:p},isFetching:!1})),v=b,await Xa(S,["notFoundComponent"])}else if(!r.preload){const b=r.matches[0];b.globalNotFound||r.router.getMatch(b.id)?.globalNotFound&&r.updateMatch(b.id,j=>({...j,globalNotFound:!1,error:void 0}))}if(r.serialError&&r.firstBadMatchIndex!==void 0){const b=r.router.looseRoutesById[r.matches[r.firstBadMatchIndex].routeId];await Xa(b,["errorComponent"])}for(let b=0;b<=v;b++){const{id:j,routeId:S}=r.matches[b],k=r.router.looseRoutesById[S];try{const A=sj(r,j,k);if(A){const N=await A;r.updateMatch(j,R=>({...R,...N}))}}catch(A){console.error(`Error executing head for route ${S}:`,A)}}const x=zu(r);if(Ya(x)&&await x,p)throw p;if(r.serialError&&!r.preload&&!r.onReady)throw r.serialError;return r.matches}function ng(i,r){const s=r.map(l=>i.options[l]?.preload?.()).filter(Boolean);if(s.length!==0)return Promise.all(s)}function Xa(i,r=As){!i._lazyLoaded&&i._lazyPromise===void 0&&(i.lazyFn?i._lazyPromise=i.lazyFn().then(l=>{const{id:u,...h}=l.options;Object.assign(i.options,h),i._lazyLoaded=!0,i._lazyPromise=void 0}):i._lazyLoaded=!0);const s=()=>i._componentsLoaded?void 0:r===As?(()=>{if(i._componentsPromise===void 0){const l=ng(i,As);l?i._componentsPromise=l.then(()=>{i._componentsLoaded=!0,i._componentsPromise=void 0}):i._componentsLoaded=!0}return i._componentsPromise})():ng(i,r);return i._lazyPromise?i._lazyPromise.then(s):s()}function ty(i){for(const r of As)if(i.options[r]?.preload)return!0;return!1}var As=["component","errorComponent","pendingComponent","notFoundComponent"],po="__TSR_index",og="popstate",ig="beforeunload";function cj(i){let r=i.getLocation();const s=new Set,l=f=>{r=i.getLocation(),s.forEach(m=>m({location:r,action:f}))},u=f=>{i.notifyOnIndexChange??!0?l(f):r=i.getLocation()},h=async({task:f,navigateOpts:m,...g})=>{if(m?.ignoreBlocker??!1){f();return}const p=i.getBlockers?.()??[],v=g.type==="PUSH"||g.type==="REPLACE";if(typeof document<"u"&&p.length&&v)for(const x of p){const b=Ns(g.path,g.state);if(await x.blockerFn({currentLocation:r,nextLocation:b,action:g.type})){i.onBlocked?.();return}}f()};return{get location(){return r},get length(){return i.getLength()},subscribers:s,subscribe:f=>(s.add(f),()=>{s.delete(f)}),push:(f,m,g)=>{const p=r.state[po];m=ag(p+1,m),h({task:()=>{i.pushState(f,m),l({type:"PUSH"})},navigateOpts:g,type:"PUSH",path:f,state:m})},replace:(f,m,g)=>{const p=r.state[po];m=ag(p,m),h({task:()=>{i.replaceState(f,m),l({type:"REPLACE"})},navigateOpts:g,type:"REPLACE",path:f,state:m})},go:(f,m)=>{h({task:()=>{i.go(f),u({type:"GO",index:f})},navigateOpts:m,type:"GO"})},back:f=>{h({task:()=>{i.back(f?.ignoreBlocker??!1),u({type:"BACK"})},navigateOpts:f,type:"BACK"})},forward:f=>{h({task:()=>{i.forward(f?.ignoreBlocker??!1),u({type:"FORWARD"})},navigateOpts:f,type:"FORWARD"})},canGoBack:()=>r.state[po]!==0,createHref:f=>i.createHref(f),block:f=>{if(!i.setBlockers)return()=>{};const m=i.getBlockers?.()??[];return i.setBlockers([...m,f]),()=>{const g=i.getBlockers?.()??[];i.setBlockers?.(g.filter(p=>p!==f))}},flush:()=>i.flush?.(),destroy:()=>i.destroy?.(),notify:l}}function ag(i,r){r||(r={});const s=cd();return{...r,key:s,__TSR_key:s,[po]:i}}function uj(i){const r=typeof document<"u"?window:void 0,s=r.history.pushState,l=r.history.replaceState;let u=[];const h=()=>u,f=P=>u=P,m=(P=>P),g=(()=>Ns(`${r.location.pathname}${r.location.search}${r.location.hash}`,r.history.state));if(!r.history.state?.__TSR_key&&!r.history.state?.key){const P=cd();r.history.replaceState({[po]:0,key:P,__TSR_key:P},"")}let p=g(),v,x=!1,b=!1,j=!1,S=!1;const k=()=>p;let A,N;const R=()=>{A&&(I._ignoreSubscribers=!0,(A.isPush?r.history.pushState:r.history.replaceState)(A.state,"",A.href),I._ignoreSubscribers=!1,A=void 0,N=void 0,v=void 0)},T=(P,H,W)=>{const Z=m(H);N||(v=p),p=Ns(H,W),A={href:Z,state:W,isPush:A?.isPush||P==="push"},N||(N=Promise.resolve().then(()=>R()))},M=P=>{p=g(),I.notify({type:P})},V=async()=>{if(b){b=!1;return}const P=g(),H=P.state[po]-p.state[po],W=H===1,Z=H===-1,oe=!W&&!Z||x;x=!1;const he=oe?"GO":Z?"BACK":"FORWARD",Ae=oe?{type:"GO",index:H}:{type:Z?"BACK":"FORWARD"};if(j)j=!1;else{const ue=h();if(typeof document<"u"&&ue.length){for(const z of ue)if(await z.blockerFn({currentLocation:p,nextLocation:P,action:he})){b=!0,r.history.go(1),I.notify(Ae);return}}}p=g(),I.notify(Ae)},F=P=>{if(S){S=!1;return}let H=!1;const W=h();if(typeof document<"u"&&W.length)for(const Z of W){const oe=Z.enableBeforeUnload??!0;if(oe===!0){H=!0;break}if(typeof oe=="function"&&oe()===!0){H=!0;break}}if(H)return P.preventDefault(),P.returnValue=""},I=cj({getLocation:k,getLength:()=>r.history.length,pushState:(P,H)=>T("push",P,H),replaceState:(P,H)=>T("replace",P,H),back:P=>(P&&(j=!0),S=!0,r.history.back()),forward:P=>{P&&(j=!0),S=!0,r.history.forward()},go:P=>{x=!0,r.history.go(P)},createHref:P=>m(P),flush:R,destroy:()=>{r.history.pushState=s,r.history.replaceState=l,r.removeEventListener(ig,F,{capture:!0}),r.removeEventListener(og,V)},onBlocked:()=>{v&&p!==v&&(p=v)},getBlockers:h,setBlockers:f,notifyOnIndexChange:!1});return r.addEventListener(ig,F,{capture:!0}),r.addEventListener(og,V),r.history.pushState=function(...P){const H=s.apply(r.history,P);return I._ignoreSubscribers||M("PUSH"),H},r.history.replaceState=function(...P){const H=l.apply(r.history,P);return I._ignoreSubscribers||M("REPLACE"),H},I}function dj(i){let r=i.replace(/[\x00-\x1f\x7f]/g,"");return r.startsWith("//")&&(r="/"+r.replace(/^\/+/,"")),r}function Ns(i,r){const s=dj(i),l=s.indexOf("#"),u=s.indexOf("?"),h=cd();return{href:s,pathname:s.substring(0,l>0?u>0?Math.min(l,u):l:u>0?u:s.length),hash:l>-1?s.substring(l):"",search:u>-1?s.slice(u,l===-1?void 0:l):"",state:r||{[po]:0,key:h,__TSR_key:h}}}function cd(){return(Math.random()+1).toString(36).substring(7)}function zi(i,r){const s=r,l=i;return{fromLocation:s,toLocation:l,pathChanged:s?.pathname!==l.pathname,hrefChanged:s?.href!==l.href,hashChanged:s?.hash!==l.hash}}var hj=class{constructor(i,r){this.tempLocationKey=`${Math.round(Math.random()*1e7)}`,this.resetNextScroll=!0,this.shouldViewTransition=void 0,this.isViewTransitionTypesSupported=void 0,this.subscribers=new Set,this.isScrollRestoring=!1,this.isScrollRestorationSetup=!1,this.startTransition=s=>s(),this.update=s=>{const l=this.options,u=this.basepath??l?.basepath??"/",h=this.basepath===void 0,f=l?.rewrite;if(this.options={...l,...s},this.isServer=this.options.isServer??typeof document>"u",this.protocolAllowlist=new Set(this.options.protocolAllowlist),this.options.pathParamsAllowedCharacters&&(this.pathParamsDecoder=F0(this.options.pathParamsAllowedCharacters)),(!this.history||this.options.history&&this.options.history!==this.history)&&(this.options.history?this.history=this.options.history:this.history=uj()),this.origin=this.options.origin,this.origin||(window?.origin&&window.origin!=="null"?this.origin=window.origin:this.origin="http://localhost"),this.history&&this.updateLatestLocation(),this.options.routeTree!==this.routeTree){this.routeTree=this.options.routeTree;let v;this.resolvePathCache=Ka(1e3),v=this.buildRouteTree(),this.setRoutes(v)}if(!this.stores&&this.latestLocation){const v=this.getStoreConfig(this);this.batch=v.batch,this.stores=nj(mj(this.latestLocation),v),Y0(this)}let m=!1;const g=this.options.basepath??"/",p=this.options.rewrite;if(h||u!==g||f!==p){this.basepath=g;const v=[],x=Zg(g);x&&x!=="/"&&v.push(tj({basepath:g})),p&&v.push(p),this.rewrite=v.length===0?void 0:v.length===1?v[0]:ej(v),this.history&&this.updateLatestLocation(),m=!0}m&&this.stores&&this.stores.location.set(this.latestLocation),typeof window<"u"&&"CSS"in window&&typeof window.CSS?.supports=="function"&&(this.isViewTransitionTypesSupported=window.CSS.supports("selector(:active-view-transition-type(a)"))},this.updateLatestLocation=()=>{this.latestLocation=this.parseLocation(this.history.location,this.latestLocation)},this.buildRouteTree=()=>{const s=P0(this.routeTree,this.options.caseSensitive,(l,u)=>{l.init({originalIndex:u})});return this.options.routeMasks&&M0(this.options.routeMasks,s.processedTree),s},this.subscribe=(s,l)=>{const u={eventType:s,fn:l};return this.subscribers.add(u),()=>{this.subscribers.delete(u)}},this.emit=s=>{this.subscribers.forEach(l=>{l.eventType===s.type&&l.fn(s)})},this.parseLocation=(s,l)=>{const u=({pathname:g,search:p,hash:v,href:x,state:b})=>{if(!this.rewrite&&!/[ \x00-\x1f\x7f\u0080-\uffff]/.test(g)){const N=this.options.parseSearch(p),R=this.options.stringifySearch(N);return{href:g+R+v,publicHref:g+R+v,pathname:La(g).path,external:!1,searchStr:R,search:Bo(l?.search,N),hash:La(v.slice(1)).path,state:ho(l?.state,b)}}const j=new URL(x,this.origin),S=Iu(this.rewrite,j),k=this.options.parseSearch(S.search),A=this.options.stringifySearch(k);return S.search=A,{href:S.href.replace(S.origin,""),publicHref:x,pathname:La(S.pathname).path,external:!!this.rewrite&&S.origin!==this.origin,searchStr:A,search:Bo(l?.search,k),hash:La(S.hash.slice(1)).path,state:ho(l?.state,b)}},h=u(s),{__tempLocation:f,__tempKey:m}=h.state;if(f&&(!m||m===this.tempLocationKey)){const g=u(f);return g.state.key=h.state.key,g.state.__TSR_key=h.state.__TSR_key,delete g.state.__tempLocation,{...g,maskedLocation:h}}return h},this.resolvePathWithBase=(s,l)=>B0({base:s,to:ld(l),trailingSlash:this.options.trailingSlash,cache:this.resolvePathCache}),this.matchRoutes=(s,l,u)=>typeof s=="string"?this.matchRoutesInternal({pathname:s,search:l},u):this.matchRoutesInternal(s,l),this.getMatchedRoutes=s=>pj({pathname:s,routesById:this.routesById,processedTree:this.processedTree}),this.cancelMatch=s=>{const l=this.getMatch(s);l&&(l.abortController.abort(),clearTimeout(l._nonReactive.pendingTimeout),l._nonReactive.pendingTimeout=void 0)},this.cancelMatches=()=>{this.stores.pendingIds.get().forEach(s=>{this.cancelMatch(s)}),this.stores.matchesId.get().forEach(s=>{if(this.stores.pendingMatchStores.has(s))return;const l=this.stores.matchStores.get(s)?.get();l&&(l.status==="pending"||l.isFetching==="loader")&&this.cancelMatch(s)})},this.buildLocation=s=>{const l=(h={})=>{const f=h._fromLocation||this.pendingBuiltLocation||this.latestLocation,m=this.matchRoutesLightweight(f);h.from;const g=h.unsafeRelative==="path"?f.pathname:h.from??m.fullPath,p=this.resolvePathWithBase(g,"."),v=m.search,x=Object.assign(Object.create(null),m.params),b=h.to?this.resolvePathWithBase(p,`${h.to}`):this.resolvePathWithBase(p,"."),j=h.params===!1||h.params===null?Object.create(null):(h.params??!0)===!0?x:Object.assign(x,uo(h.params,x)),S=this.getMatchedRoutes(b);let k=S.matchedRoutes;if((!S.foundRoute||S.foundRoute.path!=="/"&&S.routeParams["**"])&&this.options.notFoundRoute&&(k=[...k,this.options.notFoundRoute]),Object.keys(j).length>0)for(const W of k){const Z=W.options.params?.stringify??W.options.stringifyParams;if(Z)try{Object.assign(j,Z(j))}catch{}}const A=s.leaveParams?b:La(Xp({path:b,params:j,decoder:this.pathParamsDecoder,server:this.isServer}).interpolatedPath).path;let N=v;if(s._includeValidateSearch&&this.options.search?.strict){const W={};k.forEach(Z=>{if(Z.options.validateSearch)try{Object.assign(W,Cs(Z.options.validateSearch,{...W,...N}))}catch{}}),N=W}N=gj({search:N,dest:h,destRoutes:k,_includeValidateSearch:s._includeValidateSearch}),N=Bo(v,N);const R=this.options.stringifySearch(N),T=h.hash===!0?f.hash:h.hash?uo(h.hash,f.hash):void 0,M=T?`#${T}`:"";let V=h.state===!0?f.state:h.state?uo(h.state,f.state):{};V=ho(f.state,V);const F=`${A}${R}${M}`;let I,P,H=!1;if(this.rewrite){const W=new URL(F,this.origin),Z=Wg(this.rewrite,W);I=W.href.replace(W.origin,""),Z.origin!==this.origin?(P=Z.href,H=!0):P=Z.pathname+Z.search+Z.hash}else I=R0(F),P=I;return{publicHref:P,href:I,pathname:A,search:N,searchStr:R,state:V,hash:T??"",external:H,unmaskOnReload:h.unmaskOnReload}},u=(h={},f)=>{const m=l(h);let g=f?l(f):void 0;if(!g){const p=Object.create(null);if(this.options.routeMasks){const v=_0(m.pathname,this.processedTree);if(v){Object.assign(p,v.rawParams);const{from:x,params:b,...j}=v.route,S=b===!1||b===null?Object.create(null):(b??!0)===!0?p:Object.assign(p,uo(b,p));f={from:s.from,...j,params:S},g=l(f)}}}return g&&(m.maskedLocation=g),m};return s.mask?u(s,{from:s.from,...s.mask}):u(s)},this.commitLocation=async({viewTransition:s,ignoreBlocker:l,...u})=>{const h=()=>{const g=["key","__TSR_key","__TSR_index","__hashScrollIntoViewOptions"];g.forEach(v=>{u.state[v]=this.latestLocation.state[v]});const p=Et(u.state,this.latestLocation.state);return g.forEach(v=>{delete u.state[v]}),p},f=mo(this.latestLocation.href)===mo(u.href);let m=this.commitLocationPromise;if(this.commitLocationPromise=Bi(()=>{m?.resolve(),m=void 0}),f&&h())this.load();else{let{maskedLocation:g,hashScrollIntoView:p,...v}=u;g&&(v={...g,state:{...g.state,__tempKey:void 0,__tempLocation:{...v,search:v.searchStr,state:{...v.state,__tempKey:void 0,__tempLocation:void 0,__TSR_key:void 0,key:void 0}}}},(v.unmaskOnReload??this.options.unmaskOnReload??!1)&&(v.state.__tempKey=this.tempLocationKey)),v.state.__hashScrollIntoViewOptions=p??this.options.defaultHashScrollIntoView??!0,this.shouldViewTransition=s,this.history[u.replace?"replace":"push"](v.publicHref,v.state,{ignoreBlocker:l})}return this.resetNextScroll=u.resetScroll??!0,this.history.subscribers.size||this.load(),this.commitLocationPromise},this.buildAndCommitLocation=({replace:s,resetScroll:l,hashScrollIntoView:u,viewTransition:h,ignoreBlocker:f,href:m,...g}={})=>{if(m){const x=this.history.location.state.__TSR_index,b=Ns(m,{__TSR_index:s?x:x+1}),j=new URL(b.pathname,this.origin);g.to=Iu(this.rewrite,j).pathname,g.search=this.options.parseSearch(b.search),g.hash=b.hash.slice(1)}const p=this.buildLocation({...g,_includeValidateSearch:!0});this.pendingBuiltLocation=p;const v=this.commitLocation({...p,viewTransition:h,replace:s,resetScroll:l,hashScrollIntoView:u,ignoreBlocker:f});return Promise.resolve().then(()=>{this.pendingBuiltLocation===p&&(this.pendingBuiltLocation=void 0)}),v},this.navigate=async({to:s,reloadDocument:l,href:u,publicHref:h,...f})=>{let m=!1;if(u)try{new URL(`${u}`),m=!0}catch{}if(m&&!l&&(l=!0),l){if(s!==void 0||!u){const p=this.buildLocation({to:s,...f});u=u??p.publicHref,h=h??p.publicHref}const g=!m&&h?h:u;if(Es(g,this.protocolAllowlist))return Promise.resolve();if(!f.ignoreBlocker){const p=this.history.getBlockers?.()??[];for(const v of p)if(v?.blockerFn&&await v.blockerFn({currentLocation:this.latestLocation,nextLocation:this.latestLocation,action:"PUSH"}))return Promise.resolve()}return f.replace?window.location.replace(g):window.location.href=g,Promise.resolve()}return this.buildAndCommitLocation({...f,href:u,to:s,_isNavigate:!0})},this.beforeLoad=()=>{this.cancelMatches(),this.updateLatestLocation();const s=this.matchRoutes(this.latestLocation),l=this.stores.cachedMatches.get().filter(u=>!s.some(h=>h.id===u.id));this.batch(()=>{this.stores.status.set("pending"),this.stores.statusCode.set(200),this.stores.isLoading.set(!0),this.stores.location.set(this.latestLocation),this.stores.setPending(s),this.stores.setCached(l)})},this.load=async s=>{let l,u,h;const f=this.stores.resolvedLocation.get()??this.stores.location.get();for(h=new Promise(g=>{this.startTransition(async()=>{try{this.beforeLoad();const p=this.latestLocation,v=zi(p,this.stores.resolvedLocation.get());this.stores.redirect.get()||this.emit({type:"onBeforeNavigate",...v}),this.emit({type:"onBeforeLoad",...v}),await tg({router:this,sync:s?.sync,forceStaleReload:f.href===p.href,matches:this.stores.pendingMatches.get(),location:p,updateMatch:this.updateMatch,onReady:async()=>{this.startTransition(()=>{this.startViewTransition(async()=>{let x=null,b=null,j=null,S=null;this.batch(()=>{const k=this.stores.pendingMatches.get(),A=k.length,N=this.stores.matches.get();x=A?N.filter(M=>!this.stores.pendingMatchStores.has(M.id)):null;const R=new Set;for(const M of this.stores.pendingMatchStores.values())M.routeId&&R.add(M.routeId);const T=new Set;for(const M of this.stores.matchStores.values())M.routeId&&T.add(M.routeId);b=A?N.filter(M=>!R.has(M.routeId)):null,j=A?k.filter(M=>!T.has(M.routeId)):null,S=A?k.filter(M=>T.has(M.routeId)):N,this.stores.isLoading.set(!1),this.stores.loadedAt.set(Date.now()),A&&(this.stores.setMatches(k),this.stores.setPending([]),this.stores.setCached([...this.stores.cachedMatches.get(),...x.filter(M=>M.status!=="error"&&M.status!=="notFound"&&M.status!=="redirected")]),this.clearExpiredCache())});for(const[k,A]of[[b,"onLeave"],[j,"onEnter"],[S,"onStay"]])if(k)for(const N of k)this.looseRoutesById[N.routeId].options[A]?.(N)})})}})}catch(p){Dt(p)?(l=p,this.navigate({...l.options,replace:!0,ignoreBlocker:!0})):vt(p)&&(u=p);const v=l?l.status:u?404:this.stores.matches.get().some(x=>x.status==="error")?500:200;this.batch(()=>{this.stores.statusCode.set(v),this.stores.redirect.set(l)})}this.latestLoadPromise===h&&(this.commitLocationPromise?.resolve(),this.latestLoadPromise=void 0,this.commitLocationPromise=void 0),g()})}),this.latestLoadPromise=h,await h;this.latestLoadPromise&&h!==this.latestLoadPromise;)await this.latestLoadPromise;let m;this.hasNotFoundMatch()?m=404:this.stores.matches.get().some(g=>g.status==="error")&&(m=500),m!==void 0&&this.stores.statusCode.set(m)},this.startViewTransition=s=>{const l=this.shouldViewTransition??this.options.defaultViewTransition;if(this.shouldViewTransition=void 0,l&&typeof document<"u"&&"startViewTransition"in document&&typeof document.startViewTransition=="function"){let u;if(typeof l=="object"&&this.isViewTransitionTypesSupported){const h=this.latestLocation,f=this.stores.resolvedLocation.get(),m=typeof l.types=="function"?l.types(zi(h,f)):l.types;if(m===!1){s();return}u={update:s,types:m}}else u=s;document.startViewTransition(u)}else s()},this.updateMatch=(s,l)=>{this.startTransition(()=>{const u=this.stores.pendingMatchStores.get(s);if(u){u.set(l);return}const h=this.stores.matchStores.get(s);if(h){h.set(l);return}const f=this.stores.cachedMatchStores.get(s);if(f){const m=l(f.get());m.status==="redirected"?this.stores.cachedMatchStores.delete(s)&&this.stores.cachedIds.set(g=>g.filter(p=>p!==s)):f.set(m)}})},this.getMatch=s=>this.stores.cachedMatchStores.get(s)?.get()??this.stores.pendingMatchStores.get(s)?.get()??this.stores.matchStores.get(s)?.get(),this.invalidate=s=>{const l=u=>s?.filter?.(u)??!0?{...u,invalid:!0,...s?.forcePending||u.status==="error"||u.status==="notFound"?{status:"pending",error:void 0}:void 0}:u;return this.batch(()=>{this.stores.setMatches(this.stores.matches.get().map(l)),this.stores.setCached(this.stores.cachedMatches.get().map(l)),this.stores.setPending(this.stores.pendingMatches.get().map(l))}),this.shouldViewTransition=!1,this.load({sync:s?.sync})},this.getParsedLocationHref=s=>s.publicHref||"/",this.resolveRedirect=s=>{const l=s.headers.get("Location");if(!s.options.href||s.options._builtLocation){const u=s.options._builtLocation??this.buildLocation(s.options),h=this.getParsedLocationHref(u);s.options.href=h,s.headers.set("Location",h)}else if(l)try{const u=new URL(l);if(this.origin&&u.origin===this.origin){const h=u.pathname+u.search+u.hash;s.options.href=h,s.headers.set("Location",h)}}catch{}if(s.options.href&&!s.options._builtLocation&&Es(s.options.href,this.protocolAllowlist))throw new Error("Redirect blocked: unsafe protocol");return s.headers.get("Location")||s.headers.set("Location",s.options.href),s},this.clearCache=s=>{const l=s?.filter;l!==void 0?this.stores.setCached(this.stores.cachedMatches.get().filter(u=>!l(u))):this.stores.setCached([])},this.clearExpiredCache=()=>{const s=Date.now(),l=u=>{const h=this.looseRoutesById[u.routeId];if(!h.options.loader)return!0;const f=(u.preload?h.options.preloadGcTime??this.options.defaultPreloadGcTime:h.options.gcTime??this.options.defaultGcTime)??300*1e3;return u.status==="error"?!0:s-u.updatedAt>=f};this.clearCache({filter:l})},this.loadRouteChunk=Xa,this.preloadRoute=async s=>{const l=s._builtLocation??this.buildLocation(s);let u=this.matchRoutes(l,{throwOnError:!0,preload:!0,dest:s});const h=new Set([...this.stores.matchesId.get(),...this.stores.pendingIds.get()]),f=new Set([...h,...this.stores.cachedIds.get()]),m=u.filter(g=>!f.has(g.id));if(m.length){const g=this.stores.cachedMatches.get();this.stores.setCached([...g,...m])}try{return u=await tg({router:this,matches:u,location:l,preload:!0,updateMatch:(g,p)=>{h.has(g)?u=u.map(v=>v.id===g?p(v):v):this.updateMatch(g,p)}}),u}catch(g){if(Dt(g))return g.options.reloadDocument?void 0:await this.preloadRoute({...g.options,_fromLocation:l});vt(g)||console.error(g);return}},this.matchRoute=(s,l)=>{const u={...s,to:s.to?this.resolvePathWithBase(s.from||"",s.to):void 0,params:s.params||{},leaveParams:!0},h=this.buildLocation(u);if(l?.pending&&this.stores.status.get()!=="pending")return!1;const f=(l?.pending===void 0?!this.stores.isLoading.get():l.pending)?this.latestLocation:this.stores.resolvedLocation.get()||this.stores.location.get(),m=E0(h.pathname,l?.caseSensitive??!1,l?.fuzzy??!1,f.pathname,this.processedTree);return!m||s.params&&!Et(m.rawParams,s.params,{partial:!0})?!1:l?.includeSearch??!0?Et(f.search,h.search,{partial:!0})?m.rawParams:!1:m.rawParams},this.hasNotFoundMatch=()=>this.stores.matches.get().some(s=>s.status==="notFound"||s.globalNotFound),this.getStoreConfig=r,this.update({defaultPreloadDelay:50,defaultPendingMs:1e3,defaultPendingMinMs:500,context:void 0,...i,caseSensitive:i.caseSensitive??!1,notFoundMode:i.notFoundMode??"fuzzy",stringifySearch:i.stringifySearch??Z0,parseSearch:i.parseSearch??Q0,protocolAllowlist:i.protocolAllowlist??w0}),typeof document<"u"&&(self.__TSR_ROUTER__=this)}isShell(){return!!this.options.isShell}isPrerendering(){return!!this.options.isPrerendering}get state(){return this.stores.__store.get()}setRoutes({routesById:i,routesByPath:r,processedTree:s}){this.routesById=i,this.routesByPath=r,this.processedTree=s;const l=this.options.notFoundRoute;l&&(l.init({originalIndex:99999999999}),this.routesById[l.id]=l)}get looseRoutesById(){return this.routesById}getParentContext(i){return i?.id?i.context??this.options.context??void 0:this.options.context??void 0}matchRoutesInternal(i,r){const s=this.getMatchedRoutes(i.pathname),{foundRoute:l,routeParams:u,parsedParams:h}=s;let{matchedRoutes:f}=s,m=!1;(l?l.path!=="/"&&u["**"]:mo(i.pathname))&&(this.options.notFoundRoute?f=[...f,this.options.notFoundRoute]:m=!0);const g=m?vj(this.options.notFoundMode,f):void 0,p=new Array(f.length),v=new Map;for(const x of this.stores.matchStores.values())x.routeId&&v.set(x.routeId,x.get());for(let x=0;x<f.length;x++){const b=f[x],j=p[x-1];let S,k,A;{const he=j?.search??i.search,Ae=j?._strictSearch??void 0;try{const ue=Cs(b.options.validateSearch,{...he})??void 0;S={...he,...ue},k={...Ae,...ue},A=void 0}catch(ue){let z=ue;if(ue instanceof Ps||(z=new Ps(ue.message,{cause:ue})),r?.throwOnError)throw z;S=he,k={},A=z}}const N=b.options.loaderDeps?.({search:S})??"",R=N?JSON.stringify(N):"",{interpolatedPath:T,usedParams:M}=Xp({path:b.fullPath,params:u,decoder:this.pathParamsDecoder,server:this.isServer}),V=b.id+T+R,F=this.getMatch(V),I=v.get(b.id),P=F?._strictParams??M;let H;if(!F)try{rg(b,M,h,P)}catch(he){if(vt(he)||Dt(he)?H=he:H=new fj(he.message,{cause:he}),r?.throwOnError)throw H}Object.assign(u,P);const W=I?"stay":"enter";let Z;if(F)Z={...F,cause:W,params:I?.params??u,_strictParams:P,search:Bo(I?I.search:F.search,S),_strictSearch:k};else{const he=b.options.loader||b.options.beforeLoad||b.lazyFn||ty(b)?"pending":"success";Z={id:V,ssr:b.options.ssr,index:x,routeId:b.id,params:I?.params??u,_strictParams:P,pathname:T,updatedAt:Date.now(),search:I?Bo(I.search,S):S,_strictSearch:k,searchError:void 0,status:he,isFetching:!1,error:void 0,paramsError:H,__routeContext:void 0,_nonReactive:{loadPromise:Bi()},__beforeLoadContext:void 0,context:{},abortController:new AbortController,fetchCount:0,cause:W,loaderDeps:I?ho(I.loaderDeps,N):N,invalid:!1,preload:!1,links:void 0,scripts:void 0,headScripts:void 0,meta:void 0,staticData:b.options.staticData||{},fullPath:b.fullPath}}r?.preload||(Z.globalNotFound=g===b.id),Z.searchError=A;const oe=this.getParentContext(j);Z.context={...oe,...Z.__routeContext,...Z.__beforeLoadContext},p[x]=Z}for(let x=0;x<p.length;x++){const b=p[x],j=this.looseRoutesById[b.routeId],S=this.getMatch(b.id),k=v.get(b.routeId);if(b.params=k?Bo(k.params,u):u,!S){const A=p[x-1],N=this.getParentContext(A);if(j.options.context){const R={deps:b.loaderDeps,params:b.params,context:N??{},location:i,navigate:T=>this.navigate({...T,_fromLocation:i}),buildLocation:this.buildLocation,cause:b.cause,abortController:b.abortController,preload:!!b.preload,matches:p,routeId:j.id};b.__routeContext=j.options.context(R)??void 0}b.context={...N,...b.__routeContext,...b.__beforeLoadContext}}}return p}matchRoutesLightweight(i){const{matchedRoutes:r,routeParams:s,parsedParams:l}=this.getMatchedRoutes(i.pathname),u=qa(r),h={...i.search};for(const v of r)try{Object.assign(h,Cs(v.options.validateSearch,h))}catch{}const f=qa(this.stores.matchesId.get()),m=f&&this.stores.matchStores.get(f)?.get(),g=m&&m.routeId===u.id&&m.pathname===i.pathname;let p;if(g)p=m.params;else{const v=Object.assign(Object.create(null),s);for(const x of r)try{rg(x,s,l??{},v)}catch{}p=v}return{matchedRoutes:r,fullPath:u.fullPath,search:h,params:p}}},Ps=class extends Error{},fj=class extends Error{};function mj(i){return{loadedAt:0,isLoading:!1,isTransitioning:!1,status:"idle",resolvedLocation:void 0,location:i,matches:[],statusCode:200}}function Cs(i,r){if(i==null)return{};if("~standard"in i){const s=i["~standard"].validate(r);if(s instanceof Promise)throw new Ps("Async validation not supported");if(s.issues)throw new Ps(JSON.stringify(s.issues,void 0,2),{cause:s});return s.value}return"parse"in i?i.parse(r):typeof i=="function"?i(r):{}}function pj({pathname:i,routesById:r,processedTree:s}){const l=Object.create(null),u=mo(i);let h,f;const m=D0(u,s,!0);return m&&(h=m.route,Object.assign(l,m.rawParams),f=Object.assign(Object.create(null),m.parsedParams)),{matchedRoutes:m?.branch||[r.__root__],routeParams:l,foundRoute:h,parsedParams:f}}function gj({search:i,dest:r,destRoutes:s,_includeValidateSearch:l}){return yj(s)(i,r,l??!1)}function yj(i){const r={dest:null,_includeValidateSearch:!1,middlewares:[]};for(const u of i){if("search"in u.options)u.options.search?.middlewares&&r.middlewares.push(...u.options.search.middlewares);else if(u.options.preSearchFilters||u.options.postSearchFilters){const h=({search:f,next:m})=>{let g=f;"preSearchFilters"in u.options&&u.options.preSearchFilters&&(g=u.options.preSearchFilters.reduce((v,x)=>x(v),f));const p=m(g);return"postSearchFilters"in u.options&&u.options.postSearchFilters?u.options.postSearchFilters.reduce((v,x)=>x(v),p):p};r.middlewares.push(h)}if(u.options.validateSearch){const h=({search:f,next:m})=>{const g=m(f);if(!r._includeValidateSearch)return g;try{return{...g,...Cs(u.options.validateSearch,g)??void 0}}catch{return g}};r.middlewares.push(h)}}const s=({search:u})=>{const h=r.dest;return h.search?h.search===!0?u:uo(h.search,u):{}};r.middlewares.push(s);const l=(u,h,f)=>{if(u>=f.length)return h;const m=f[u];return m({search:h,next:p=>l(u+1,p,f)})};return function(h,f,m){return r.dest=f,r._includeValidateSearch=m,l(0,h,r.middlewares)}}function vj(i,r){if(i!=="root")for(let s=r.length-1;s>=0;s--){const l=r[s];if(l.children)return l.id}return Go}function rg(i,r,s,l){const u=i.options.params?.parse??i.options.parseParams;if(u)if(i.options.skipRouteOnParseError)for(const h in r)h in s&&(l[h]=s[h]);else{const h=u(l);Object.assign(l,h)}}var xj="Error preloading route! ☝️";function sg(i,r){if(i)return typeof i=="string"?i:i[r]}function bj(i){return typeof i=="string"?{href:i,crossOrigin:void 0}:i}var ny=class{get to(){return this._to}get id(){return this._id}get path(){return this._path}get fullPath(){return this._fullPath}constructor(i){if(this.init=r=>{this.originalIndex=r.originalIndex;const s=this.options,l=!s?.path&&!s?.id;this.parentRoute=this.options.getParentRoute?.(),l?this._path=Go:this.parentRoute||On();let u=l?Go:s?.path;u&&u!=="/"&&(u=Qg(u));const h=s?.id||u;let f=l?Go:Rs([this.parentRoute.id==="__root__"?"":this.parentRoute.id,h]);u==="__root__"&&(u="/"),f!=="__root__"&&(f=Rs(["/",f]));const m=f==="__root__"?"/":Rs([this.parentRoute.fullPath,u]);this._path=u,this._id=f,this._fullPath=m,this._to=mo(m)},this.addChildren=r=>this._addFileChildren(r),this._addFileChildren=r=>(Array.isArray(r)&&(this.children=r),typeof r=="object"&&r!==null&&(this.children=Object.values(r)),this),this._addFileTypes=()=>this,this.updateLoader=r=>(Object.assign(this.options,r),this),this.update=r=>(Object.assign(this.options,r),this),this.lazy=r=>(this.lazyFn=r,this),this.redirect=r=>J0({from:this.fullPath,...r}),this.options=i||{},this.isRoot=!i?.getParentRoute,i?.id&&i?.path)throw new Error("Route cannot have both an 'id' and a 'path' option.")}},jj=class extends ny{constructor(i){super(i)}};function wj(i){if(typeof document<"u"&&document.querySelector){const r=i.stores.location.get(),s=r.state.__hashScrollIntoViewOptions??!0;if(s&&r.hash!==""){const l=document.getElementById(r.hash);l&&l.scrollIntoView(s)}}}function ud(i){const r=i.errorComponent??dd;return o.jsx(Sj,{getResetKey:i.getResetKey,onCatch:i.onCatch,children:({error:s,reset:l})=>s?_.createElement(r,{error:s,reset:l}):i.children})}var Sj=class extends _.Component{constructor(...i){super(...i),this.state={error:null}}static getDerivedStateFromProps(i,r){const s=i.getResetKey();return r.error&&r.resetKey!==s?{resetKey:s,error:null}:{resetKey:s}}static getDerivedStateFromError(i){return{error:i}}reset(){this.setState({error:null})}componentDidCatch(i,r){this.props.onCatch&&this.props.onCatch(i,r)}render(){return this.props.children({error:this.state.error,reset:()=>{this.reset()}})}};function dd({error:i}){const[r,s]=_.useState(!1);return o.jsxs("div",{style:{padding:".5rem",maxWidth:"100%"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:".5rem"},children:[o.jsx("strong",{style:{fontSize:"1rem"},children:"Something went wrong!"}),o.jsx("button",{style:{appearance:"none",fontSize:".6em",border:"1px solid currentColor",padding:".1rem .2rem",fontWeight:"bold",borderRadius:".25rem"},onClick:()=>s(l=>!l),children:r?"Hide Error":"Show Error"})]}),o.jsx("div",{style:{height:".25rem"}}),r?o.jsx("div",{children:o.jsx("pre",{style:{fontSize:".7em",border:"1px solid red",borderRadius:".25rem",padding:".3rem",color:"red",overflow:"auto"},children:i.message?o.jsx("code",{children:i.message}):null})}):null]})}function Tj({children:i,fallback:r=null}){return hd()?o.jsx(Gt.Fragment,{children:i}):o.jsx(Gt.Fragment,{children:r})}function hd(){return Gt.useSyncExternalStore(kj,()=>!0,()=>!1)}function kj(){return()=>{}}var oy=_.createContext(null);function st(i){return _.useContext(oy)}var Vs=_.createContext(void 0),Rj=_.createContext(void 0),qe=(i=>(i[i.None=0]="None",i[i.Mutable=1]="Mutable",i[i.Watching=2]="Watching",i[i.RecursedCheck=4]="RecursedCheck",i[i.Recursed=8]="Recursed",i[i.Dirty=16]="Dirty",i[i.Pending=32]="Pending",i))(qe||{});function Aj({update:i,notify:r,unwatched:s}){return{link:l,unlink:u,propagate:h,checkDirty:f,shallowPropagate:m};function l(p,v,x){const b=v.depsTail;if(b!==void 0&&b.dep===p)return;const j=b!==void 0?b.nextDep:v.deps;if(j!==void 0&&j.dep===p){j.version=x,v.depsTail=j;return}const S=p.subsTail;if(S!==void 0&&S.version===x&&S.sub===v)return;const k=v.depsTail=p.subsTail={version:x,dep:p,sub:v,prevDep:b,nextDep:j,prevSub:S,nextSub:void 0};j!==void 0&&(j.prevDep=k),b!==void 0?b.nextDep=k:v.deps=k,S!==void 0?S.nextSub=k:p.subs=k}function u(p,v=p.sub){const x=p.dep,b=p.prevDep,j=p.nextDep,S=p.nextSub,k=p.prevSub;return j!==void 0?j.prevDep=b:v.depsTail=b,b!==void 0?b.nextDep=j:v.deps=j,S!==void 0?S.prevSub=k:x.subsTail=k,k!==void 0?k.nextSub=S:(x.subs=S)===void 0&&s(x),j}function h(p){let v=p.nextSub,x;e:do{const b=p.sub;let j=b.flags;if(j&60?j&12?j&4?!(j&48)&&g(p,b)?(b.flags=j|40,j&=1):j=0:b.flags=j&-9|32:j=0:b.flags=j|32,j&2&&r(b),j&1){const S=b.subs;if(S!==void 0){const k=(p=S).nextSub;k!==void 0&&(x={value:v,prev:x},v=k);continue}}if((p=v)!==void 0){v=p.nextSub;continue}for(;x!==void 0;)if(p=x.value,x=x.prev,p!==void 0){v=p.nextSub;continue e}break}while(!0)}function f(p,v){let x,b=0,j=!1;e:do{const S=p.dep,k=S.flags;if(v.flags&16)j=!0;else if((k&17)===17){if(i(S)){const A=S.subs;A.nextSub!==void 0&&m(A),j=!0}}else if((k&33)===33){(p.nextSub!==void 0||p.prevSub!==void 0)&&(x={value:p,prev:x}),p=S.deps,v=S,++b;continue}if(!j){const A=p.nextDep;if(A!==void 0){p=A;continue}}for(;b--;){const A=v.subs,N=A.nextSub!==void 0;if(N?(p=x.value,x=x.prev):p=A,j){if(i(v)){N&&m(A),v=p.sub;continue}j=!1}else v.flags&=-33;v=p.sub;const R=p.nextDep;if(R!==void 0){p=R;continue e}}return j}while(!0)}function m(p){do{const v=p.sub,x=v.flags;(x&48)===32&&(v.flags=x|16,(x&6)===2&&r(v))}while((p=p.nextSub)!==void 0)}function g(p,v){let x=v.depsTail;for(;x!==void 0;){if(x===p)return!0;x=x.prevDep}return!1}}function Cj(i,r,s){const l=typeof i=="object",u=l?i:void 0;return{next:(l?i.next:i)?.bind(u),error:(l?i.error:r)?.bind(u),complete:(l?i.complete:s)?.bind(u)}}const Lu=[];let Ms=0;const{link:lg,unlink:Mj,propagate:_j,checkDirty:iy,shallowPropagate:cg}=Aj({update(i){return i._update()},notify(i){Lu[Bu++]=i,i.flags&=~qe.Watching},unwatched(i){i.depsTail!==void 0&&(i.depsTail=void 0,i.flags=qe.Mutable|qe.Dirty,Os(i))}});let xs=0,Bu=0,mn,Fu=0;function ay(i){try{++Fu,i()}finally{--Fu||ry()}}function Os(i){const r=i.depsTail;let s=r!==void 0?r.nextDep:i.deps;for(;s!==void 0;)s=Mj(s,i)}function ry(){if(!(Fu>0)){for(;xs<Bu;){const i=Lu[xs];Lu[xs++]=void 0,i.notify()}xs=0,Bu=0}}function ug(i,r){const s=typeof i=="function",l=i,u={_snapshot:s?void 0:i,subs:void 0,subsTail:void 0,deps:void 0,depsTail:void 0,flags:s?qe.None:qe.Mutable,get(){return mn!==void 0&&lg(u,mn,Ms),u._snapshot},subscribe(h){const f=Cj(h),m={current:!1},g=Ej(()=>{u.get(),m.current?f.next?.(u._snapshot):m.current=!0});return{unsubscribe:()=>{g.stop()}}},_update(h){const f=mn,m=r?.compare??Object.is;if(s)mn=u,++Ms,u.depsTail=void 0;else if(h===void 0)return!1;s&&(u.flags=qe.Mutable|qe.RecursedCheck);try{const g=u._snapshot,p=typeof h=="function"?h(g):h===void 0&&s?l(g):h;return g===void 0||!m(g,p)?(u._snapshot=p,!0):!1}finally{mn=f,s&&(u.flags&=~qe.RecursedCheck),Os(u)}}};return s?(u.flags=qe.Mutable|qe.Dirty,u.get=function(){const h=u.flags;if(h&qe.Dirty||h&qe.Pending&&iy(u.deps,u)){if(u._update()){const f=u.subs;f!==void 0&&cg(f)}}else h&qe.Pending&&(u.flags=h&~qe.Pending);return mn!==void 0&&lg(u,mn,Ms),u._snapshot}):u.set=function(h){if(u._update(h)){const f=u.subs;f!==void 0&&(_j(f),cg(f),ry())}},u}function Ej(i){const r=()=>{const l=mn;mn=s,++Ms,s.depsTail=void 0,s.flags=qe.Watching|qe.RecursedCheck;try{return i()}finally{mn=l,s.flags&=~qe.RecursedCheck,Os(s)}},s={deps:void 0,depsTail:void 0,subs:void 0,subsTail:void 0,flags:qe.Watching|qe.RecursedCheck,notify(){const l=this.flags;l&qe.Dirty||l&qe.Pending&&iy(this.deps,this)?r():this.flags=qe.Watching},stop(){this.flags=qe.None,this.depsTail=void 0,Os(this)}};return r(),s}var Tu={exports:{}},ku={},Ru={exports:{}},Au={};var dg;function Dj(){if(dg)return Au;dg=1;var i=Za();function r(x,b){return x===b&&(x!==0||1/x===1/b)||x!==x&&b!==b}var s=typeof Object.is=="function"?Object.is:r,l=i.useState,u=i.useEffect,h=i.useLayoutEffect,f=i.useDebugValue;function m(x,b){var j=b(),S=l({inst:{value:j,getSnapshot:b}}),k=S[0].inst,A=S[1];return h(function(){k.value=j,k.getSnapshot=b,g(k)&&A({inst:k})},[x,j,b]),u(function(){return g(k)&&A({inst:k}),x(function(){g(k)&&A({inst:k})})},[x]),f(j),j}function g(x){var b=x.getSnapshot;x=x.value;try{var j=b();return!s(x,j)}catch{return!0}}function p(x,b){return b()}var v=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?p:m;return Au.useSyncExternalStore=i.useSyncExternalStore!==void 0?i.useSyncExternalStore:v,Au}var hg;function Nj(){return hg||(hg=1,Ru.exports=Dj()),Ru.exports}var fg;function Pj(){if(fg)return ku;fg=1;var i=Za(),r=Nj();function s(p,v){return p===v&&(p!==0||1/p===1/v)||p!==p&&v!==v}var l=typeof Object.is=="function"?Object.is:s,u=r.useSyncExternalStore,h=i.useRef,f=i.useEffect,m=i.useMemo,g=i.useDebugValue;return ku.useSyncExternalStoreWithSelector=function(p,v,x,b,j){var S=h(null);if(S.current===null){var k={hasValue:!1,value:null};S.current=k}else k=S.current;S=m(function(){function N(F){if(!R){if(R=!0,T=F,F=b(F),j!==void 0&&k.hasValue){var I=k.value;if(j(I,F))return M=I}return M=F}if(I=M,l(T,F))return I;var P=b(F);return j!==void 0&&j(I,P)?(T=F,I):(T=F,M=P)}var R=!1,T,M,V=x===void 0?null:x;return[function(){return N(v())},V===null?void 0:function(){return N(V())}]},[v,x,b,j]);var A=u(p,S[0],S[1]);return f(function(){k.hasValue=!0,k.value=A},[A]),g(A),A},ku}var mg;function Oj(){return mg||(mg=1,Tu.exports=Pj()),Tu.exports}var Ij=Oj();function zj(i,r){return i===r}function We(i,r,s=zj){const l=_.useCallback(f=>{if(!i)return()=>{};const{unsubscribe:m}=i.subscribe(f);return m},[i]),u=_.useCallback(()=>i?.get(),[i]);return Ij.useSyncExternalStoreWithSelector(l,u,u,r,s)}var Lj={get:()=>{},subscribe:()=>({unsubscribe:()=>{}})};function Yo(i){const r=st(),s=_.useContext(i.from?Rj:Vs),l=i.from??s,u=l?i.from?r.stores.getRouteMatchStore(l):r.stores.matchStores.get(l):void 0,h=_.useRef(void 0);return We(u??Lj,f=>{if((i.shouldThrow??!0)&&!f&&On(),f===void 0)return;const m=i.select?i.select(f):f;if(i.structuralSharing??r.options.defaultStructuralSharing){const g=ho(h.current,m);return h.current=g,g}return m})}function sy(i){return Yo({from:i.from,strict:i.strict,structuralSharing:i.structuralSharing,select:r=>i.select?i.select(r.loaderData):r.loaderData})}function ly(i){const{select:r,...s}=i;return Yo({...s,select:l=>r?r(l.loaderDeps):l.loaderDeps})}function cy(i){return Yo({from:i.from,shouldThrow:i.shouldThrow,structuralSharing:i.structuralSharing,strict:i.strict,select:r=>{const s=i.strict===!1?r.params:r._strictParams;return i.select?i.select(s):s}})}function uy(i){return Yo({from:i.from,strict:i.strict,shouldThrow:i.shouldThrow,structuralSharing:i.structuralSharing,select:r=>i.select?i.select(r.search):r.search})}function dy(i){const r=st();return _.useCallback(s=>r.navigate({...s,from:s.from??i?.from}),[i?.from,r])}function hy(i){return Yo({...i,select:r=>i.select?i.select(r.context):r.context})}var Bj=qg();function Fj(i,r){const s=st(),l=y0(r),{activeProps:u,inactiveProps:h,activeOptions:f,to:m,preload:g,preloadDelay:p,preloadIntentProximity:v,hashScrollIntoView:x,replace:b,startTransition:j,resetScroll:S,viewTransition:k,children:A,target:N,disabled:R,style:T,className:M,onClick:V,onBlur:F,onFocus:I,onMouseEnter:P,onMouseLeave:H,onTouchStart:W,ignoreBlocker:Z,params:oe,search:he,hash:Ae,state:ue,mask:z,reloadDocument:Q,unsafeRelative:ee,from:me,_fromLocation:$,...E}=i,q=hd(),J=_.useMemo(()=>i,[s,i.from,i._fromLocation,i.hash,i.to,i.search,i.params,i.state,i.mask,i.unsafeRelative]),te=We(s.stores.location,Fe=>Fe,(Fe,lt)=>Fe.href===lt.href),ne=_.useMemo(()=>{const Fe={_fromLocation:te,...J};return s.buildLocation(Fe)},[s,te,J]),se=ne.maskedLocation?ne.maskedLocation.publicHref:ne.publicHref,ve=ne.maskedLocation?ne.maskedLocation.external:ne.external,Pe=_.useMemo(()=>Yj(se,ve,s.history,R),[R,ve,se,s.history]),pe=_.useMemo(()=>{if(Pe?.external)return Es(Pe.href,s.protocolAllowlist)?void 0:Pe.href;if(!Kj(m)&&!(typeof m!="string"||m.indexOf(":")===-1))try{return new URL(m),Es(m,s.protocolAllowlist)?void 0:m}catch{}},[m,Pe,s.protocolAllowlist]),mt=_.useMemo(()=>{if(pe)return!1;if(f?.exact){if(!L0(te.pathname,ne.pathname,s.basepath))return!1}else{const Fe=Ds(te.pathname,s.basepath),lt=Ds(ne.pathname,s.basepath);if(!(Fe.startsWith(lt)&&(Fe.length===lt.length||Fe[lt.length]==="/")))return!1}return(f?.includeSearch??!0)&&!Et(te.search,ne.search,{partial:!f?.exact,ignoreUndefined:!f?.explicitUndefined})?!1:f?.includeHash?q&&te.hash===ne.hash:!0},[f?.exact,f?.explicitUndefined,f?.includeHash,f?.includeSearch,te,pe,q,ne.hash,ne.pathname,ne.search,s.basepath]),nt=mt?uo(u,{})??Uj:Cu,xt=mt?Cu:uo(h,{})??Cu,Pt=[M,nt.className,xt.className].filter(Boolean).join(" "),bt=(T||nt.style||xt.style)&&{...T,...nt.style,...xt.style},[Hi,Xo]=_.useState(!1),er=_.useRef(!1),pn=i.reloadDocument||pe?!1:g??s.options.defaultPreload,bo=p??s.options.defaultPreloadDelay??0,nn=_.useCallback(()=>{s.preloadRoute({...J,_builtLocation:ne}).catch(Fe=>{console.warn(Fe),console.warn(xj)})},[s,J,ne]);g0(l,_.useCallback(Fe=>{Fe?.isIntersecting&&nn()},[nn]),qj,{disabled:!!R||pn!=="viewport"}),_.useEffect(()=>{er.current||!R&&pn==="render"&&(nn(),er.current=!0)},[R,nn,pn]);const Vi=Fe=>{const lt=Fe.currentTarget.getAttribute("target"),cn=N!==void 0?N:lt;if(!R&&!Xj(Fe)&&!Fe.defaultPrevented&&(!cn||cn==="_self")&&Fe.button===0){Fe.preventDefault(),Bj.flushSync(()=>{Xo(!0)});const Qo=s.subscribe("onResolved",()=>{Qo(),Xo(!1)});s.navigate({...J,replace:b,resetScroll:S,hashScrollIntoView:x,startTransition:j,viewTransition:k,ignoreBlocker:Z})}};if(pe)return{...E,ref:l,href:pe,...A&&{children:A},...N&&{target:N},...R&&{disabled:R},...T&&{style:T},...M&&{className:M},...V&&{onClick:V},...F&&{onBlur:F},...I&&{onFocus:I},...P&&{onMouseEnter:P},...H&&{onMouseLeave:H},...W&&{onTouchStart:W}};const tr=Fe=>{if(R||pn!=="intent")return;if(!bo){nn();return}const lt=Fe.currentTarget;if(Ha.has(lt))return;const cn=setTimeout(()=>{Ha.delete(lt),nn()},bo);Ha.set(lt,cn)},Ws=Fe=>{R||pn!=="intent"||nn()},pt=Fe=>{if(R||!pn||!bo)return;const lt=Fe.currentTarget,cn=Ha.get(lt);cn&&(clearTimeout(cn),Ha.delete(lt))};return{...E,...nt,...xt,href:Pe?.href,ref:l,onClick:Pi([V,Vi]),onBlur:Pi([F,pt]),onFocus:Pi([I,tr]),onMouseEnter:Pi([P,tr]),onMouseLeave:Pi([H,pt]),onTouchStart:Pi([W,Ws]),disabled:!!R,target:N,...bt&&{style:bt},...Pt&&{className:Pt},...R&&Hj,...mt&&Vj,...q&&Hi&&Gj}}var Cu={},Uj={className:"active"},Hj={role:"link","aria-disabled":!0},Vj={"data-status":"active","aria-current":"page"},Gj={"data-transitioning":"transitioning"},Ha=new WeakMap,qj={rootMargin:"100px"},Pi=i=>r=>{for(const s of i)if(s){if(r.defaultPrevented)return;s(r)}};function Yj(i,r,s,l){if(!l)return r?{href:i,external:!0}:{href:s.createHref(i)||"/",external:!1}}function Kj(i){if(typeof i!="string")return!1;const r=i.charCodeAt(0);return r===47?i.charCodeAt(1)!==47:r===46}var ce=_.forwardRef((i,r)=>{const{_asChild:s,...l}=i,{type:u,...h}=Fj(l,r),f=typeof l.children=="function"?l.children({isActive:h["data-status"]==="active"}):l.children;if(!s){const{disabled:m,...g}=h;return _.createElement("a",g,f)}return _.createElement(s,h,f)});function Xj(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}var Qj=class extends ny{constructor(r){super(r),this.useMatch=s=>Yo({select:s?.select,from:this.id,structuralSharing:s?.structuralSharing}),this.useRouteContext=s=>hy({...s,from:this.id}),this.useSearch=s=>uy({select:s?.select,structuralSharing:s?.structuralSharing,from:this.id}),this.useParams=s=>cy({select:s?.select,structuralSharing:s?.structuralSharing,from:this.id}),this.useLoaderDeps=s=>ly({...s,from:this.id}),this.useLoaderData=s=>sy({...s,from:this.id}),this.useNavigate=()=>dy({from:this.fullPath}),this.Link=Gt.forwardRef((s,l)=>o.jsx(ce,{ref:l,from:this.fullPath,...s}))}};function Zj(i){return new Qj(i)}var Wj=class extends jj{constructor(i){super(i),this.useMatch=r=>Yo({select:r?.select,from:this.id,structuralSharing:r?.structuralSharing}),this.useRouteContext=r=>hy({...r,from:this.id}),this.useSearch=r=>uy({select:r?.select,structuralSharing:r?.structuralSharing,from:this.id}),this.useParams=r=>cy({select:r?.select,structuralSharing:r?.structuralSharing,from:this.id}),this.useLoaderDeps=r=>ly({...r,from:this.id}),this.useLoaderData=r=>sy({...r,from:this.id}),this.useNavigate=()=>dy({from:this.fullPath}),this.Link=Gt.forwardRef((r,s)=>o.jsx(ce,{ref:s,from:this.fullPath,...r}))}};function $j(i){return new Wj(i)}function Ne(i){return new Jj(i,{silent:!0}).createRoute}var Jj=class{constructor(i,r){this.path=i,this.createRoute=s=>{const l=Zj(s);return l.isRoot=!1,l},this.silent=r?.silent}};function ew(i){const r=st(),s=`not-found-${We(r.stores.location,l=>l.pathname)}-${We(r.stores.status,l=>l)}`;return o.jsx(ud,{getResetKey:()=>s,onCatch:(l,u)=>{if(vt(l))i.onCatch?.(l,u);else throw l},errorComponent:({error:l})=>{if(vt(l))return i.fallback?.(l);throw l},children:i.children})}function tw(){return o.jsx("p",{children:"Not Found"})}function Oi(i){return o.jsx(o.Fragment,{children:i.children})}function fy(i,r,s){return r.options.notFoundComponent?o.jsx(r.options.notFoundComponent,{...s}):i.options.defaultNotFoundComponent?o.jsx(i.options.defaultNotFoundComponent,{...s}):o.jsx(tw,{})}function nw(i){return null}function ow(){return nw(st()),null}var my=_.memo(function({matchId:r}){const s=st(),l=s.stores.matchStores.get(r);l||On();const u=We(s.stores.loadedAt,f=>f),h=We(l,f=>f);return o.jsx(iw,{router:s,matchId:r,resetKey:u,matchState:_.useMemo(()=>{const f=h.routeId,m=s.routesById[f].parentRoute?.id;return{routeId:f,ssr:h.ssr,_displayPending:h._displayPending,parentRouteId:m}},[h._displayPending,h.routeId,h.ssr,s.routesById])})});function iw({router:i,matchId:r,resetKey:s,matchState:l}){const u=i.routesById[l.routeId],h=u.options.pendingComponent??i.options.defaultPendingComponent,f=h?o.jsx(h,{}):null,m=u.options.errorComponent??i.options.defaultErrorComponent,g=u.options.onCatch??i.options.defaultOnCatch,p=u.isRoot?u.options.notFoundComponent??i.options.notFoundRoute?.options.component:u.options.notFoundComponent,v=l.ssr===!1||l.ssr==="data-only",x=(!u.isRoot||u.options.wrapInSuspense||v)&&(u.options.wrapInSuspense??h??(u.options.errorComponent?.preload||v))?_.Suspense:Oi,b=m?ud:Oi,j=p?ew:Oi;return o.jsxs(u.isRoot?u.options.shellComponent??Oi:Oi,{children:[o.jsx(Vs.Provider,{value:r,children:o.jsx(x,{fallback:f,children:o.jsx(b,{getResetKey:()=>s,errorComponent:m||dd,onCatch:(S,k)=>{if(vt(S))throw S.routeId??=l.routeId,S;g?.(S,k)},children:o.jsx(j,{fallback:S=>{if(S.routeId??=l.routeId,!p||S.routeId&&S.routeId!==l.routeId||!S.routeId&&!u.isRoot)throw S;return _.createElement(p,S)},children:v||l._displayPending?o.jsx(Tj,{fallback:f,children:o.jsx(pg,{matchId:r})}):o.jsx(pg,{matchId:r})})})})}),l.parentRouteId===Go?o.jsxs(o.Fragment,{children:[o.jsx(aw,{resetKey:s}),i.options.scrollRestoration&&Yg?o.jsx(ow,{}):null]}):null]})}function aw({resetKey:i}){const r=st(),s=_.useRef(void 0);return Ga(()=>{const l=r.latestLocation.href;(s.current===void 0||s.current!==l)&&(r.emit({type:"onRendered",...zi(r.stores.location.get(),r.stores.resolvedLocation.get())}),s.current=l)},[r.latestLocation.state.__TSR_key,i,r]),null}var pg=_.memo(function({matchId:r}){const s=st(),l=(v,x)=>s.getMatch(v.id)?._nonReactive[x]??v._nonReactive[x],u=s.stores.matchStores.get(r);u||On();const h=We(u,v=>v),f=h.routeId,m=s.routesById[f],g=_.useMemo(()=>{const v=(s.routesById[f].options.remountDeps??s.options.defaultRemountDeps)?.({routeId:f,loaderDeps:h.loaderDeps,params:h._strictParams,search:h._strictSearch});return v?JSON.stringify(v):void 0},[f,h.loaderDeps,h._strictParams,h._strictSearch,s.options.defaultRemountDeps,s.routesById]),p=_.useMemo(()=>{const v=m.options.component??s.options.defaultComponent;return v?o.jsx(v,{},g):o.jsx(fd,{})},[g,m.options.component,s.options.defaultComponent]);if(h._displayPending)throw l(h,"displayPendingPromise");if(h._forcePending)throw l(h,"minPendingPromise");if(h.status==="pending"){const v=m.options.pendingMinMs??s.options.defaultPendingMinMs;if(v){const x=s.getMatch(h.id);if(x&&!x._nonReactive.minPendingPromise){const b=Bi();x._nonReactive.minPendingPromise=b,setTimeout(()=>{b.resolve(),x._nonReactive.minPendingPromise=void 0},v)}}throw l(h,"loadPromise")}if(h.status==="notFound")return vt(h.error)||On(),fy(s,m,h.error);if(h.status==="redirected")throw Dt(h.error)||On(),l(h,"loadPromise");if(h.status==="error")throw h.error;return p}),fd=_.memo(function(){const r=st(),s=_.useContext(Vs);let l,u=!1,h;{const p=s?r.stores.matchStores.get(s):void 0;[l,u]=We(p,v=>[v?.routeId,v?.globalNotFound??!1]),h=We(r.stores.matchesId,v=>v[v.findIndex(x=>x===s)+1])}const f=l?r.routesById[l]:void 0,m=r.options.defaultPendingComponent?o.jsx(r.options.defaultPendingComponent,{}):null;if(u)return f||On(),fy(r,f,void 0);if(!h)return null;const g=o.jsx(my,{matchId:h});return l===Go?o.jsx(_.Suspense,{fallback:m,children:g}):g});function rw(){const i=st(),r=_.useRef({router:i,mounted:!1}),[s,l]=_.useState(!1),u=We(i.stores.isLoading,x=>x),h=We(i.stores.hasPending,x=>x),f=gu(u),m=u||s||h,g=gu(m),p=u||h,v=gu(p);return i.startTransition=x=>{l(!0),_.startTransition(()=>{x(),l(!1)})},_.useEffect(()=>{const x=i.history.subscribe(i.load),b=i.buildLocation({to:i.latestLocation.pathname,search:!0,params:!0,hash:!0,state:!0,_includeValidateSearch:!0});return mo(i.latestLocation.publicHref)!==mo(b.publicHref)&&i.commitLocation({...b,replace:!0}),()=>{x()}},[i,i.history]),Ga(()=>{if(typeof window<"u"&&i.ssr||r.current.router===i&&r.current.mounted)return;r.current={router:i,mounted:!0},(async()=>{try{await i.load()}catch(b){console.error(b)}})()},[i]),Ga(()=>{f&&!u&&i.emit({type:"onLoad",...zi(i.stores.location.get(),i.stores.resolvedLocation.get())})},[f,i,u]),Ga(()=>{v&&!p&&i.emit({type:"onBeforeRouteMount",...zi(i.stores.location.get(),i.stores.resolvedLocation.get())})},[p,v,i]),Ga(()=>{if(g&&!m){const x=zi(i.stores.location.get(),i.stores.resolvedLocation.get());i.emit({type:"onResolved",...x}),ay(()=>{i.stores.status.set("idle"),i.stores.resolvedLocation.set(i.stores.location.get())}),x.hrefChanged&&wj(i)}},[m,g,i]),null}function sw(){const i=st(),r=i.routesById[Go].options.pendingComponent??i.options.defaultPendingComponent,s=r?o.jsx(r,{}):null,l=o.jsxs(typeof document<"u"&&i.ssr?Oi:_.Suspense,{fallback:s,children:[o.jsx(rw,{}),o.jsx(lw,{})]});return i.options.InnerWrap?o.jsx(i.options.InnerWrap,{children:l}):l}function lw(){const i=st(),r=We(i.stores.firstId,u=>u),s=We(i.stores.loadedAt,u=>u),l=r?o.jsx(my,{matchId:r}):null;return o.jsx(Vs.Provider,{value:r,children:i.options.disableGlobalCatchBoundary?l:o.jsx(ud,{getResetKey:()=>s,errorComponent:dd,onCatch:void 0,children:l})})}var cw=i=>({createMutableStore:ug,createReadonlyStore:ug,batch:ay}),uw=i=>new dw(i),dw=class extends hj{constructor(i){super(i,cw)}};function hw({router:i,children:r,...s}){Object.keys(s).length>0&&i.update({...i.options,...s,context:{...i.options.context,...s.context}});const l=o.jsx(oy.Provider,{value:i,children:r});return i.options.Wrap?o.jsx(i.options.Wrap,{children:l}):l}function fw({router:i,...r}){return o.jsx(hw,{router:i,...r,children:o.jsx(sw,{})})}function mw(i){const r=st(),s=_.useRef(void 0);return We(r.stores.location,l=>{const u=l;if(r.options.defaultStructuralSharing){const h=ho(s.current,u);return s.current=h,h}return u})}function py({tag:i,attrs:r,children:s,nonce:l}){switch(i){case"title":return o.jsx("title",{...r,suppressHydrationWarning:!0,children:s});case"meta":return o.jsx("meta",{...r,suppressHydrationWarning:!0});case"link":return o.jsx("link",{...r,nonce:l,suppressHydrationWarning:!0});case"style":return o.jsx("style",{...r,dangerouslySetInnerHTML:{__html:s},nonce:l});case"script":return o.jsx(pw,{attrs:r,children:s});default:return null}}function pw({attrs:i,children:r}){st();const s=hd(),l=typeof i?.type=="string"&&i.type!==""&&i.type!=="text/javascript"&&i.type!=="module";if(_.useEffect(()=>{if(!l){if(i?.src){const u=(()=>{try{const f=document.baseURI||window.location.href;return new URL(i.src,f).href}catch{return i.src}})();if(Array.from(document.querySelectorAll("script[src]")).find(f=>f.src===u))return;const h=document.createElement("script");for(const[f,m]of Object.entries(i))f!=="suppressHydrationWarning"&&m!==void 0&&m!==!1&&h.setAttribute(f,typeof m=="boolean"?"":String(m));return document.head.appendChild(h),()=>{h.parentNode&&h.parentNode.removeChild(h)}}if(typeof r=="string"){const u=typeof i?.type=="string"?i.type:"text/javascript",h=typeof i?.nonce=="string"?i.nonce:void 0;if(Array.from(document.querySelectorAll("script:not([src])")).find(m=>{if(!(m instanceof HTMLScriptElement))return!1;const g=m.getAttribute("type")??"text/javascript",p=m.getAttribute("nonce")??void 0;return m.textContent===r&&g===u&&p===h}))return;const f=document.createElement("script");if(f.textContent=r,i)for(const[m,g]of Object.entries(i))m!=="suppressHydrationWarning"&&g!==void 0&&g!==!1&&f.setAttribute(m,typeof g=="boolean"?"":String(g));return document.head.appendChild(f),()=>{f.parentNode&&f.parentNode.removeChild(f)}}}},[i,r,l]),l&&typeof r=="string")return o.jsx("script",{...i,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:r}});if(!s){if(i?.src)return o.jsx("script",{...i,suppressHydrationWarning:!0});if(typeof r=="string")return o.jsx("script",{...i,dangerouslySetInnerHTML:{__html:r},suppressHydrationWarning:!0})}return null}var gw=i=>{const r=st(),s=r.options.ssr?.nonce,l=We(r.stores.matches,p=>p.map(v=>v.meta).filter(Boolean),Et),u=_.useMemo(()=>{const p=[],v={};let x;for(let b=l.length-1;b>=0;b--){const j=l[b];for(let S=j.length-1;S>=0;S--){const k=j[S];if(k)if(k.title)x||(x={tag:"title",children:k.title});else if("script:ld+json"in k)try{const A=JSON.stringify(k["script:ld+json"]);p.push({tag:"script",attrs:{type:"application/ld+json"},children:k0(A)})}catch{}else{const A=k.name??k.property;if(A){if(v[A])continue;v[A]=!0}p.push({tag:"meta",attrs:{...k,nonce:s}})}}}return x&&p.push(x),s&&p.push({tag:"meta",attrs:{property:"csp-nonce",content:s}}),p.reverse(),p},[l,s]),h=We(r.stores.matches,p=>{const v=p.map(j=>j.links).filter(Boolean).flat(1).map(j=>({tag:"link",attrs:{...j,nonce:s}})),x=r.ssr?.manifest,b=p.map(j=>x?.routes[j.routeId]?.assets??[]).filter(Boolean).flat(1).filter(j=>j.tag==="link").map(j=>({tag:"link",attrs:{...j.attrs,crossOrigin:sg(i,"stylesheet")??j.attrs?.crossOrigin,suppressHydrationWarning:!0,nonce:s}}));return[...v,...b]},Et),f=We(r.stores.matches,p=>{const v=[];return p.map(x=>r.looseRoutesById[x.routeId]).forEach(x=>r.ssr?.manifest?.routes[x.id]?.preloads?.filter(Boolean).forEach(b=>{const j=bj(b);v.push({tag:"link",attrs:{rel:"modulepreload",href:j.href,crossOrigin:sg(i,"modulepreload")??j.crossOrigin,nonce:s}})})),v},Et),m=We(r.stores.matches,p=>p.map(v=>v.styles).flat(1).filter(Boolean).map(({children:v,...x})=>({tag:"style",attrs:{...x,nonce:s},children:v})),Et),g=We(r.stores.matches,p=>p.map(v=>v.headScripts).flat(1).filter(Boolean).map(({children:v,...x})=>({tag:"script",attrs:{...x,nonce:s},children:v})),Et);return yw([...u,...f,...h,...m,...g],p=>JSON.stringify(p))};function yw(i,r){const s=new Set;return i.filter(l=>{const u=r(l);return s.has(u)?!1:(s.add(u),!0)})}function vw(i){const r=gw(i.assetCrossOrigin),s=st().options.ssr?.nonce;return o.jsx(o.Fragment,{children:r.map(l=>_.createElement(py,{...l,key:`tsr-meta-${JSON.stringify(l)}`,nonce:s}))})}var xw=()=>{const i=st(),r=i.options.ssr?.nonce,s=h=>{const f=[],m=i.ssr?.manifest;return m?(h.map(g=>i.looseRoutesById[g.routeId]).forEach(g=>m.routes[g.id]?.assets?.filter(p=>p.tag==="script").forEach(p=>{f.push({tag:"script",attrs:{...p.attrs,nonce:r},children:p.children})})),f):[]},l=h=>h.map(f=>f.scripts).flat(1).filter(Boolean).map(({children:f,...m})=>({tag:"script",attrs:{...m,suppressHydrationWarning:!0,nonce:r},children:f})),u=We(i.stores.matches,s,Et);return bw(i,We(i.stores.matches,l,Et),u)};function bw(i,r,s){let l;i.serverSsr&&(l=i.serverSsr.takeBufferedScripts());const u=[...r,...s];return l&&u.unshift(l),o.jsx(o.Fragment,{children:u.map((h,f)=>_.createElement(py,{...h,key:`tsr-scripts-${h.tag}-${f}`}))})}const gy="pid-pilot-theme";function gg(){return typeof document<"u"&&document.documentElement.classList.contains("dark")?"dark":"light"}function jw(i){if(typeof document>"u")return;const r=document.documentElement;r.classList.toggle("dark",i==="dark"),r.dataset.theme=i,r.style.colorScheme=i}const ww=`
(() => {
  try {
    const stored = window.localStorage.getItem("${gy}");
    const theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
  } catch (_error) {
    document.documentElement.style.colorScheme = "light";
  }
})();
`;let yg=0;function qt(i){try{yg+=1;const r=`${yg} ${i}`;document.title=`DBG ${r}`,window.localStorage.setItem("pp_debug_crumb",r),console.log("[crumb]",r)}catch{}}const Sw="/docs/assets/styles-DNxxoq8g.css";function Tw(){return o.jsx("div",{className:"flex min-h-screen items-center justify-center bg-background px-4",children:o.jsxs("div",{className:"max-w-md text-center",children:[o.jsx("h1",{className:"text-7xl font-bold text-foreground",children:"404"}),o.jsx("h2",{className:"mt-4 text-xl font-semibold text-foreground",children:"Page not found"}),o.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:"The page you're looking for doesn't exist or has been moved."}),o.jsx("div",{className:"mt-6",children:o.jsx(ce,{to:"/",className:"inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",children:"Go home"})})]})})}const Wa=$j({head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{title:"PID Pilot"},{name:"description",content:"PID Pilot is a drop-in PIDF tuning library for FTC with one-button relay auto-tune for flywheels, arms, and elevators — live on FTC Dashboard."},{name:"author",content:"PID Pilot"},{property:"og:title",content:"PID Pilot"},{property:"og:description",content:"Drop-in PIDF tuning library for FTC with one-button relay auto-tune for velocity and position mechanisms."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:"PID Pilot"}],links:[{rel:"stylesheet",href:Sw}]}),shellComponent:kw,component:Rw,notFoundComponent:Tw});function kw({children:i}){return o.jsxs("html",{lang:"en",suppressHydrationWarning:!0,children:[o.jsxs("head",{children:[o.jsx("script",{dangerouslySetInnerHTML:{__html:ww}}),o.jsx(vw,{})]}),o.jsxs("body",{children:[i,o.jsx(xw,{})]})]})}function Rw(){return qt("RootComponent:render"),o.jsx(fd,{})}const yy=(...i)=>i.filter((r,s,l)=>!!r&&r.trim()!==""&&l.indexOf(r)===s).join(" ").trim();const Aw=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Cw=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,l)=>l?l.toUpperCase():s.toLowerCase());const vg=i=>{const r=Cw(i);return r.charAt(0).toUpperCase()+r.slice(1)};var Mw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const _w=i=>{for(const r in i)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};const Ew=_.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:u="",children:h,iconNode:f,...m},g)=>_.createElement("svg",{ref:g,...Mw,width:r,height:r,stroke:i,strokeWidth:l?Number(s)*24/Number(r):s,className:yy("lucide",u),...!h&&!_w(m)&&{"aria-hidden":"true"},...m},[...f.map(([p,v])=>_.createElement(p,v)),...Array.isArray(h)?h:[h]]));const Le=(i,r)=>{const s=_.forwardRef(({className:l,...u},h)=>_.createElement(Ew,{ref:h,iconNode:r,className:yy(`lucide-${Aw(vg(i))}`,`lucide-${i}`,l),...u}));return s.displayName=vg(i),s};const Dw=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],md=Le("activity",Dw);const Nw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],pd=Le("arrow-right",Nw);const Pw=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Ow=Le("arrow-up-right",Pw);const Iw=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],zw=Le("check",Iw);const Lw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Bw=Le("chevron-down",Lw);const Fw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],xg=Le("chevron-right",Fw);const Uw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]],gd=Le("circuit-board",Uw);const Hw=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Vw=Le("copy",Hw);const Gw=[["path",{d:"m15 10 5 5-5 5",key:"qqa56n"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]],qw=Le("corner-down-right",Gw);const Yw=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Kw=Le("file-text",Yw);const Xw=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],Gs=Le("gauge",Xw);const Qw=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],vy=Le("github",Qw);const Zw=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],Ww=Le("hash",Zw);const $w=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Jw=Le("menu",$w);const e1=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],t1=Le("moon",e1);const n1=[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]],o1=Le("radar",n1);const i1=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],bg=Le("search",i1);const a1=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],r1=Le("shield-check",a1);const s1=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],l1=Le("sliders-horizontal",s1);const c1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],u1=Le("sparkles",c1);const d1=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],h1=Le("sun",d1);const f1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],qs=Le("target",f1);const m1=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],p1=Le("terminal",m1);const g1=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],xy=Le("triangle-alert",g1);const y1=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]],v1=Le("waves",y1);const x1=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],b1=Le("workflow",x1);const j1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],by=Le("x",j1);const w1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],S1=Le("zap",w1);function yd(){return o.jsxs("footer",{className:"border-t border-border bg-muted/20 py-10 text-center text-sm text-muted-foreground",children:[o.jsx("div",{className:"font-medium text-foreground",children:"PID Pilot"}),o.jsx("div",{className:"mt-2",children:"Self-contained PIDF tuning framework for FIRST Tech Challenge teams."}),o.jsx("div",{className:"mt-1",children:"Live FTC Dashboard configuration, rich telemetry, and separate velocity and position workflows."})]})}function jg(i,r){if(typeof i=="function")return i(r);i!=null&&(i.current=r)}function Ys(...i){return r=>{let s=!1;const l=i.map(u=>{const h=jg(u,r);return!s&&typeof h=="function"&&(s=!0),h});if(s)return()=>{for(let u=0;u<l.length;u++){const h=l[u];typeof h=="function"?h():jg(i[u],null)}}}}function ln(...i){return _.useCallback(Ys(...i),i)}var T1=Symbol.for("react.lazy"),Is=ad[" use ".trim().toString()];function k1(i){return typeof i=="object"&&i!==null&&"then"in i}function jy(i){return i!=null&&typeof i=="object"&&"$$typeof"in i&&i.$$typeof===T1&&"_payload"in i&&k1(i._payload)}function R1(i){const r=C1(i),s=_.forwardRef((l,u)=>{let{children:h,...f}=l;jy(h)&&typeof Is=="function"&&(h=Is(h._payload));const m=_.Children.toArray(h),g=m.find(_1);if(g){const p=g.props.children,v=m.map(x=>x===g?_.Children.count(p)>1?_.Children.only(null):_.isValidElement(p)?p.props.children:null:x);return o.jsx(r,{...f,ref:u,children:_.isValidElement(p)?_.cloneElement(p,void 0,v):null})}return o.jsx(r,{...f,ref:u,children:h})});return s.displayName=`${i}.Slot`,s}var A1=R1("Slot");function C1(i){const r=_.forwardRef((s,l)=>{let{children:u,...h}=s;if(jy(u)&&typeof Is=="function"&&(u=Is(u._payload)),_.isValidElement(u)){const f=D1(u),m=E1(h,u.props);return u.type!==_.Fragment&&(m.ref=l?Ys(l,f):f),_.cloneElement(u,m)}return _.Children.count(u)>1?_.Children.only(null):null});return r.displayName=`${i}.SlotClone`,r}var M1=Symbol("radix.slottable");function _1(i){return _.isValidElement(i)&&typeof i.type=="function"&&"__radixId"in i.type&&i.type.__radixId===M1}function E1(i,r){const s={...r};for(const l in r){const u=i[l],h=r[l];/^on[A-Z]/.test(l)?u&&h?s[l]=(...m)=>{const g=h(...m);return u(...m),g}:u&&(s[l]=u):l==="style"?s[l]={...u,...h}:l==="className"&&(s[l]=[u,h].filter(Boolean).join(" "))}return{...i,...s}}function D1(i){let r=Object.getOwnPropertyDescriptor(i.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?i.ref:(r=Object.getOwnPropertyDescriptor(i,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?i.props.ref:i.props.ref||i.ref)}function wy(i){var r,s,l="";if(typeof i=="string"||typeof i=="number")l+=i;else if(typeof i=="object")if(Array.isArray(i)){var u=i.length;for(r=0;r<u;r++)i[r]&&(s=wy(i[r]))&&(l&&(l+=" "),l+=s)}else for(s in i)i[s]&&(l&&(l+=" "),l+=s);return l}function Sy(){for(var i,r,s=0,l="",u=arguments.length;s<u;s++)(i=arguments[s])&&(r=wy(i))&&(l&&(l+=" "),l+=r);return l}const wg=i=>typeof i=="boolean"?`${i}`:i===0?"0":i,Sg=Sy,N1=(i,r)=>s=>{var l;if(r?.variants==null)return Sg(i,s?.class,s?.className);const{variants:u,defaultVariants:h}=r,f=Object.keys(u).map(p=>{const v=s?.[p],x=h?.[p];if(v===null)return null;const b=wg(v)||wg(x);return u[p][b]}),m=s&&Object.entries(s).reduce((p,v)=>{let[x,b]=v;return b===void 0||(p[x]=b),p},{}),g=r==null||(l=r.compoundVariants)===null||l===void 0?void 0:l.reduce((p,v)=>{let{class:x,className:b,...j}=v;return Object.entries(j).every(S=>{let[k,A]=S;return Array.isArray(A)?A.includes({...h,...m}[k]):{...h,...m}[k]===A})?[...p,x,b]:p},[]);return Sg(i,f,g,s?.class,s?.className)},P1=(i,r)=>{const s=new Array(i.length+r.length);for(let l=0;l<i.length;l++)s[l]=i[l];for(let l=0;l<r.length;l++)s[i.length+l]=r[l];return s},O1=(i,r)=>({classGroupId:i,validator:r}),Ty=(i=new Map,r=null,s)=>({nextPart:i,validators:r,classGroupId:s}),zs="-",Tg=[],I1="arbitrary..",z1=i=>{const r=B1(i),{conflictingClassGroups:s,conflictingClassGroupModifiers:l}=i;return{getClassGroupId:f=>{if(f.startsWith("[")&&f.endsWith("]"))return L1(f);const m=f.split(zs),g=m[0]===""&&m.length>1?1:0;return ky(m,g,r)},getConflictingClassGroupIds:(f,m)=>{if(m){const g=l[f],p=s[f];return g?p?P1(p,g):g:p||Tg}return s[f]||Tg}}},ky=(i,r,s)=>{if(i.length-r===0)return s.classGroupId;const u=i[r],h=s.nextPart.get(u);if(h){const p=ky(i,r+1,h);if(p)return p}const f=s.validators;if(f===null)return;const m=r===0?i.join(zs):i.slice(r).join(zs),g=f.length;for(let p=0;p<g;p++){const v=f[p];if(v.validator(m))return v.classGroupId}},L1=i=>i.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const r=i.slice(1,-1),s=r.indexOf(":"),l=r.slice(0,s);return l?I1+l:void 0})(),B1=i=>{const{theme:r,classGroups:s}=i;return F1(s,r)},F1=(i,r)=>{const s=Ty();for(const l in i){const u=i[l];vd(u,s,l,r)}return s},vd=(i,r,s,l)=>{const u=i.length;for(let h=0;h<u;h++){const f=i[h];U1(f,r,s,l)}},U1=(i,r,s,l)=>{if(typeof i=="string"){H1(i,r,s);return}if(typeof i=="function"){V1(i,r,s,l);return}G1(i,r,s,l)},H1=(i,r,s)=>{const l=i===""?r:Ry(r,i);l.classGroupId=s},V1=(i,r,s,l)=>{if(q1(i)){vd(i(l),r,s,l);return}r.validators===null&&(r.validators=[]),r.validators.push(O1(s,i))},G1=(i,r,s,l)=>{const u=Object.entries(i),h=u.length;for(let f=0;f<h;f++){const[m,g]=u[f];vd(g,Ry(r,m),s,l)}},Ry=(i,r)=>{let s=i;const l=r.split(zs),u=l.length;for(let h=0;h<u;h++){const f=l[h];let m=s.nextPart.get(f);m||(m=Ty(),s.nextPart.set(f,m)),s=m}return s},q1=i=>"isThemeGetter"in i&&i.isThemeGetter===!0,Y1=i=>{if(i<1)return{get:()=>{},set:()=>{}};let r=0,s=Object.create(null),l=Object.create(null);const u=(h,f)=>{s[h]=f,r++,r>i&&(r=0,l=s,s=Object.create(null))};return{get(h){let f=s[h];if(f!==void 0)return f;if((f=l[h])!==void 0)return u(h,f),f},set(h,f){h in s?s[h]=f:u(h,f)}}},Uu="!",kg=":",K1=[],Rg=(i,r,s,l,u)=>({modifiers:i,hasImportantModifier:r,baseClassName:s,maybePostfixModifierPosition:l,isExternal:u}),X1=i=>{const{prefix:r,experimentalParseClassName:s}=i;let l=u=>{const h=[];let f=0,m=0,g=0,p;const v=u.length;for(let k=0;k<v;k++){const A=u[k];if(f===0&&m===0){if(A===kg){h.push(u.slice(g,k)),g=k+1;continue}if(A==="/"){p=k;continue}}A==="["?f++:A==="]"?f--:A==="("?m++:A===")"&&m--}const x=h.length===0?u:u.slice(g);let b=x,j=!1;x.endsWith(Uu)?(b=x.slice(0,-1),j=!0):x.startsWith(Uu)&&(b=x.slice(1),j=!0);const S=p&&p>g?p-g:void 0;return Rg(h,j,b,S)};if(r){const u=r+kg,h=l;l=f=>f.startsWith(u)?h(f.slice(u.length)):Rg(K1,!1,f,void 0,!0)}if(s){const u=l;l=h=>s({className:h,parseClassName:u})}return l},Q1=i=>{const r=new Map;return i.orderSensitiveModifiers.forEach((s,l)=>{r.set(s,1e6+l)}),s=>{const l=[];let u=[];for(let h=0;h<s.length;h++){const f=s[h],m=f[0]==="[",g=r.has(f);m||g?(u.length>0&&(u.sort(),l.push(...u),u=[]),l.push(f)):u.push(f)}return u.length>0&&(u.sort(),l.push(...u)),l}},Z1=i=>({cache:Y1(i.cacheSize),parseClassName:X1(i),sortModifiers:Q1(i),...z1(i)}),W1=/\s+/,$1=(i,r)=>{const{parseClassName:s,getClassGroupId:l,getConflictingClassGroupIds:u,sortModifiers:h}=r,f=[],m=i.trim().split(W1);let g="";for(let p=m.length-1;p>=0;p-=1){const v=m[p],{isExternal:x,modifiers:b,hasImportantModifier:j,baseClassName:S,maybePostfixModifierPosition:k}=s(v);if(x){g=v+(g.length>0?" "+g:g);continue}let A=!!k,N=l(A?S.substring(0,k):S);if(!N){if(!A){g=v+(g.length>0?" "+g:g);continue}if(N=l(S),!N){g=v+(g.length>0?" "+g:g);continue}A=!1}const R=b.length===0?"":b.length===1?b[0]:h(b).join(":"),T=j?R+Uu:R,M=T+N;if(f.indexOf(M)>-1)continue;f.push(M);const V=u(N,A);for(let F=0;F<V.length;++F){const I=V[F];f.push(T+I)}g=v+(g.length>0?" "+g:g)}return g},J1=(...i)=>{let r=0,s,l,u="";for(;r<i.length;)(s=i[r++])&&(l=Ay(s))&&(u&&(u+=" "),u+=l);return u},Ay=i=>{if(typeof i=="string")return i;let r,s="";for(let l=0;l<i.length;l++)i[l]&&(r=Ay(i[l]))&&(s&&(s+=" "),s+=r);return s},eS=(i,...r)=>{let s,l,u,h;const f=g=>{const p=r.reduce((v,x)=>x(v),i());return s=Z1(p),l=s.cache.get,u=s.cache.set,h=m,m(g)},m=g=>{const p=l(g);if(p)return p;const v=$1(g,s);return u(g,v),v};return h=f,(...g)=>h(J1(...g))},tS=[],it=i=>{const r=s=>s[i]||tS;return r.isThemeGetter=!0,r},Cy=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,My=/^\((?:(\w[\w-]*):)?(.+)\)$/i,nS=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,oS=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,iS=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,aS=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,rS=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,sS=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,so=i=>nS.test(i),je=i=>!!i&&!Number.isNaN(Number(i)),lo=i=>!!i&&Number.isInteger(Number(i)),Mu=i=>i.endsWith("%")&&je(i.slice(0,-1)),Pn=i=>oS.test(i),_y=()=>!0,lS=i=>iS.test(i)&&!aS.test(i),xd=()=>!1,cS=i=>rS.test(i),uS=i=>sS.test(i),dS=i=>!ae(i)&&!re(i),hS=i=>go(i,Ny,xd),ae=i=>Cy.test(i),Fo=i=>go(i,Py,lS),Ag=i=>go(i,bS,je),fS=i=>go(i,Iy,_y),mS=i=>go(i,Oy,xd),Cg=i=>go(i,Ey,xd),pS=i=>go(i,Dy,uS),bs=i=>go(i,zy,cS),re=i=>My.test(i),Va=i=>Ko(i,Py),gS=i=>Ko(i,Oy),Mg=i=>Ko(i,Ey),yS=i=>Ko(i,Ny),vS=i=>Ko(i,Dy),js=i=>Ko(i,zy,!0),xS=i=>Ko(i,Iy,!0),go=(i,r,s)=>{const l=Cy.exec(i);return l?l[1]?r(l[1]):s(l[2]):!1},Ko=(i,r,s=!1)=>{const l=My.exec(i);return l?l[1]?r(l[1]):s:!1},Ey=i=>i==="position"||i==="percentage",Dy=i=>i==="image"||i==="url",Ny=i=>i==="length"||i==="size"||i==="bg-size",Py=i=>i==="length",bS=i=>i==="number",Oy=i=>i==="family-name",Iy=i=>i==="number"||i==="weight",zy=i=>i==="shadow",jS=()=>{const i=it("color"),r=it("font"),s=it("text"),l=it("font-weight"),u=it("tracking"),h=it("leading"),f=it("breakpoint"),m=it("container"),g=it("spacing"),p=it("radius"),v=it("shadow"),x=it("inset-shadow"),b=it("text-shadow"),j=it("drop-shadow"),S=it("blur"),k=it("perspective"),A=it("aspect"),N=it("ease"),R=it("animate"),T=()=>["auto","avoid","all","avoid-page","page","left","right","column"],M=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],V=()=>[...M(),re,ae],F=()=>["auto","hidden","clip","visible","scroll"],I=()=>["auto","contain","none"],P=()=>[re,ae,g],H=()=>[so,"full","auto",...P()],W=()=>[lo,"none","subgrid",re,ae],Z=()=>["auto",{span:["full",lo,re,ae]},lo,re,ae],oe=()=>[lo,"auto",re,ae],he=()=>["auto","min","max","fr",re,ae],Ae=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ue=()=>["start","end","center","stretch","center-safe","end-safe"],z=()=>["auto",...P()],Q=()=>[so,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...P()],ee=()=>[so,"screen","full","dvw","lvw","svw","min","max","fit",...P()],me=()=>[so,"screen","full","lh","dvh","lvh","svh","min","max","fit",...P()],$=()=>[i,re,ae],E=()=>[...M(),Mg,Cg,{position:[re,ae]}],q=()=>["no-repeat",{repeat:["","x","y","space","round"]}],J=()=>["auto","cover","contain",yS,hS,{size:[re,ae]}],te=()=>[Mu,Va,Fo],ne=()=>["","none","full",p,re,ae],se=()=>["",je,Va,Fo],ve=()=>["solid","dashed","dotted","double"],Pe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],pe=()=>[je,Mu,Mg,Cg],mt=()=>["","none",S,re,ae],nt=()=>["none",je,re,ae],xt=()=>["none",je,re,ae],Pt=()=>[je,re,ae],bt=()=>[so,"full",...P()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Pn],breakpoint:[Pn],color:[_y],container:[Pn],"drop-shadow":[Pn],ease:["in","out","in-out"],font:[dS],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Pn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Pn],shadow:[Pn],spacing:["px",je],text:[Pn],"text-shadow":[Pn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",so,ae,re,A]}],container:["container"],columns:[{columns:[je,ae,re,m]}],"break-after":[{"break-after":T()}],"break-before":[{"break-before":T()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:V()}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:I()}],"overscroll-x":[{"overscroll-x":I()}],"overscroll-y":[{"overscroll-y":I()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:H()}],"inset-x":[{"inset-x":H()}],"inset-y":[{"inset-y":H()}],start:[{"inset-s":H(),start:H()}],end:[{"inset-e":H(),end:H()}],"inset-bs":[{"inset-bs":H()}],"inset-be":[{"inset-be":H()}],top:[{top:H()}],right:[{right:H()}],bottom:[{bottom:H()}],left:[{left:H()}],visibility:["visible","invisible","collapse"],z:[{z:[lo,"auto",re,ae]}],basis:[{basis:[so,"full","auto",m,...P()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[je,so,"auto","initial","none",ae]}],grow:[{grow:["",je,re,ae]}],shrink:[{shrink:["",je,re,ae]}],order:[{order:[lo,"first","last","none",re,ae]}],"grid-cols":[{"grid-cols":W()}],"col-start-end":[{col:Z()}],"col-start":[{"col-start":oe()}],"col-end":[{"col-end":oe()}],"grid-rows":[{"grid-rows":W()}],"row-start-end":[{row:Z()}],"row-start":[{"row-start":oe()}],"row-end":[{"row-end":oe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":he()}],"auto-rows":[{"auto-rows":he()}],gap:[{gap:P()}],"gap-x":[{"gap-x":P()}],"gap-y":[{"gap-y":P()}],"justify-content":[{justify:[...Ae(),"normal"]}],"justify-items":[{"justify-items":[...ue(),"normal"]}],"justify-self":[{"justify-self":["auto",...ue()]}],"align-content":[{content:["normal",...Ae()]}],"align-items":[{items:[...ue(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ue(),{baseline:["","last"]}]}],"place-content":[{"place-content":Ae()}],"place-items":[{"place-items":[...ue(),"baseline"]}],"place-self":[{"place-self":["auto",...ue()]}],p:[{p:P()}],px:[{px:P()}],py:[{py:P()}],ps:[{ps:P()}],pe:[{pe:P()}],pbs:[{pbs:P()}],pbe:[{pbe:P()}],pt:[{pt:P()}],pr:[{pr:P()}],pb:[{pb:P()}],pl:[{pl:P()}],m:[{m:z()}],mx:[{mx:z()}],my:[{my:z()}],ms:[{ms:z()}],me:[{me:z()}],mbs:[{mbs:z()}],mbe:[{mbe:z()}],mt:[{mt:z()}],mr:[{mr:z()}],mb:[{mb:z()}],ml:[{ml:z()}],"space-x":[{"space-x":P()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":P()}],"space-y-reverse":["space-y-reverse"],size:[{size:Q()}],"inline-size":[{inline:["auto",...ee()]}],"min-inline-size":[{"min-inline":["auto",...ee()]}],"max-inline-size":[{"max-inline":["none",...ee()]}],"block-size":[{block:["auto",...me()]}],"min-block-size":[{"min-block":["auto",...me()]}],"max-block-size":[{"max-block":["none",...me()]}],w:[{w:[m,"screen",...Q()]}],"min-w":[{"min-w":[m,"screen","none",...Q()]}],"max-w":[{"max-w":[m,"screen","none","prose",{screen:[f]},...Q()]}],h:[{h:["screen","lh",...Q()]}],"min-h":[{"min-h":["screen","lh","none",...Q()]}],"max-h":[{"max-h":["screen","lh",...Q()]}],"font-size":[{text:["base",s,Va,Fo]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[l,xS,fS]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Mu,ae]}],"font-family":[{font:[gS,mS,r]}],"font-features":[{"font-features":[ae]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[u,re,ae]}],"line-clamp":[{"line-clamp":[je,"none",re,Ag]}],leading:[{leading:[h,...P()]}],"list-image":[{"list-image":["none",re,ae]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",re,ae]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:$()}],"text-color":[{text:$()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ve(),"wavy"]}],"text-decoration-thickness":[{decoration:[je,"from-font","auto",re,Fo]}],"text-decoration-color":[{decoration:$()}],"underline-offset":[{"underline-offset":[je,"auto",re,ae]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",re,ae]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",re,ae]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:E()}],"bg-repeat":[{bg:q()}],"bg-size":[{bg:J()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},lo,re,ae],radial:["",re,ae],conic:[lo,re,ae]},vS,pS]}],"bg-color":[{bg:$()}],"gradient-from-pos":[{from:te()}],"gradient-via-pos":[{via:te()}],"gradient-to-pos":[{to:te()}],"gradient-from":[{from:$()}],"gradient-via":[{via:$()}],"gradient-to":[{to:$()}],rounded:[{rounded:ne()}],"rounded-s":[{"rounded-s":ne()}],"rounded-e":[{"rounded-e":ne()}],"rounded-t":[{"rounded-t":ne()}],"rounded-r":[{"rounded-r":ne()}],"rounded-b":[{"rounded-b":ne()}],"rounded-l":[{"rounded-l":ne()}],"rounded-ss":[{"rounded-ss":ne()}],"rounded-se":[{"rounded-se":ne()}],"rounded-ee":[{"rounded-ee":ne()}],"rounded-es":[{"rounded-es":ne()}],"rounded-tl":[{"rounded-tl":ne()}],"rounded-tr":[{"rounded-tr":ne()}],"rounded-br":[{"rounded-br":ne()}],"rounded-bl":[{"rounded-bl":ne()}],"border-w":[{border:se()}],"border-w-x":[{"border-x":se()}],"border-w-y":[{"border-y":se()}],"border-w-s":[{"border-s":se()}],"border-w-e":[{"border-e":se()}],"border-w-bs":[{"border-bs":se()}],"border-w-be":[{"border-be":se()}],"border-w-t":[{"border-t":se()}],"border-w-r":[{"border-r":se()}],"border-w-b":[{"border-b":se()}],"border-w-l":[{"border-l":se()}],"divide-x":[{"divide-x":se()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":se()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ve(),"hidden","none"]}],"divide-style":[{divide:[...ve(),"hidden","none"]}],"border-color":[{border:$()}],"border-color-x":[{"border-x":$()}],"border-color-y":[{"border-y":$()}],"border-color-s":[{"border-s":$()}],"border-color-e":[{"border-e":$()}],"border-color-bs":[{"border-bs":$()}],"border-color-be":[{"border-be":$()}],"border-color-t":[{"border-t":$()}],"border-color-r":[{"border-r":$()}],"border-color-b":[{"border-b":$()}],"border-color-l":[{"border-l":$()}],"divide-color":[{divide:$()}],"outline-style":[{outline:[...ve(),"none","hidden"]}],"outline-offset":[{"outline-offset":[je,re,ae]}],"outline-w":[{outline:["",je,Va,Fo]}],"outline-color":[{outline:$()}],shadow:[{shadow:["","none",v,js,bs]}],"shadow-color":[{shadow:$()}],"inset-shadow":[{"inset-shadow":["none",x,js,bs]}],"inset-shadow-color":[{"inset-shadow":$()}],"ring-w":[{ring:se()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:$()}],"ring-offset-w":[{"ring-offset":[je,Fo]}],"ring-offset-color":[{"ring-offset":$()}],"inset-ring-w":[{"inset-ring":se()}],"inset-ring-color":[{"inset-ring":$()}],"text-shadow":[{"text-shadow":["none",b,js,bs]}],"text-shadow-color":[{"text-shadow":$()}],opacity:[{opacity:[je,re,ae]}],"mix-blend":[{"mix-blend":[...Pe(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Pe()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[je]}],"mask-image-linear-from-pos":[{"mask-linear-from":pe()}],"mask-image-linear-to-pos":[{"mask-linear-to":pe()}],"mask-image-linear-from-color":[{"mask-linear-from":$()}],"mask-image-linear-to-color":[{"mask-linear-to":$()}],"mask-image-t-from-pos":[{"mask-t-from":pe()}],"mask-image-t-to-pos":[{"mask-t-to":pe()}],"mask-image-t-from-color":[{"mask-t-from":$()}],"mask-image-t-to-color":[{"mask-t-to":$()}],"mask-image-r-from-pos":[{"mask-r-from":pe()}],"mask-image-r-to-pos":[{"mask-r-to":pe()}],"mask-image-r-from-color":[{"mask-r-from":$()}],"mask-image-r-to-color":[{"mask-r-to":$()}],"mask-image-b-from-pos":[{"mask-b-from":pe()}],"mask-image-b-to-pos":[{"mask-b-to":pe()}],"mask-image-b-from-color":[{"mask-b-from":$()}],"mask-image-b-to-color":[{"mask-b-to":$()}],"mask-image-l-from-pos":[{"mask-l-from":pe()}],"mask-image-l-to-pos":[{"mask-l-to":pe()}],"mask-image-l-from-color":[{"mask-l-from":$()}],"mask-image-l-to-color":[{"mask-l-to":$()}],"mask-image-x-from-pos":[{"mask-x-from":pe()}],"mask-image-x-to-pos":[{"mask-x-to":pe()}],"mask-image-x-from-color":[{"mask-x-from":$()}],"mask-image-x-to-color":[{"mask-x-to":$()}],"mask-image-y-from-pos":[{"mask-y-from":pe()}],"mask-image-y-to-pos":[{"mask-y-to":pe()}],"mask-image-y-from-color":[{"mask-y-from":$()}],"mask-image-y-to-color":[{"mask-y-to":$()}],"mask-image-radial":[{"mask-radial":[re,ae]}],"mask-image-radial-from-pos":[{"mask-radial-from":pe()}],"mask-image-radial-to-pos":[{"mask-radial-to":pe()}],"mask-image-radial-from-color":[{"mask-radial-from":$()}],"mask-image-radial-to-color":[{"mask-radial-to":$()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":M()}],"mask-image-conic-pos":[{"mask-conic":[je]}],"mask-image-conic-from-pos":[{"mask-conic-from":pe()}],"mask-image-conic-to-pos":[{"mask-conic-to":pe()}],"mask-image-conic-from-color":[{"mask-conic-from":$()}],"mask-image-conic-to-color":[{"mask-conic-to":$()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:E()}],"mask-repeat":[{mask:q()}],"mask-size":[{mask:J()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",re,ae]}],filter:[{filter:["","none",re,ae]}],blur:[{blur:mt()}],brightness:[{brightness:[je,re,ae]}],contrast:[{contrast:[je,re,ae]}],"drop-shadow":[{"drop-shadow":["","none",j,js,bs]}],"drop-shadow-color":[{"drop-shadow":$()}],grayscale:[{grayscale:["",je,re,ae]}],"hue-rotate":[{"hue-rotate":[je,re,ae]}],invert:[{invert:["",je,re,ae]}],saturate:[{saturate:[je,re,ae]}],sepia:[{sepia:["",je,re,ae]}],"backdrop-filter":[{"backdrop-filter":["","none",re,ae]}],"backdrop-blur":[{"backdrop-blur":mt()}],"backdrop-brightness":[{"backdrop-brightness":[je,re,ae]}],"backdrop-contrast":[{"backdrop-contrast":[je,re,ae]}],"backdrop-grayscale":[{"backdrop-grayscale":["",je,re,ae]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[je,re,ae]}],"backdrop-invert":[{"backdrop-invert":["",je,re,ae]}],"backdrop-opacity":[{"backdrop-opacity":[je,re,ae]}],"backdrop-saturate":[{"backdrop-saturate":[je,re,ae]}],"backdrop-sepia":[{"backdrop-sepia":["",je,re,ae]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":P()}],"border-spacing-x":[{"border-spacing-x":P()}],"border-spacing-y":[{"border-spacing-y":P()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",re,ae]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[je,"initial",re,ae]}],ease:[{ease:["linear","initial",N,re,ae]}],delay:[{delay:[je,re,ae]}],animate:[{animate:["none",R,re,ae]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[k,re,ae]}],"perspective-origin":[{"perspective-origin":V()}],rotate:[{rotate:nt()}],"rotate-x":[{"rotate-x":nt()}],"rotate-y":[{"rotate-y":nt()}],"rotate-z":[{"rotate-z":nt()}],scale:[{scale:xt()}],"scale-x":[{"scale-x":xt()}],"scale-y":[{"scale-y":xt()}],"scale-z":[{"scale-z":xt()}],"scale-3d":["scale-3d"],skew:[{skew:Pt()}],"skew-x":[{"skew-x":Pt()}],"skew-y":[{"skew-y":Pt()}],transform:[{transform:[re,ae,"","none","gpu","cpu"]}],"transform-origin":[{origin:V()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:bt()}],"translate-x":[{"translate-x":bt()}],"translate-y":[{"translate-y":bt()}],"translate-z":[{"translate-z":bt()}],"translate-none":["translate-none"],accent:[{accent:$()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:$()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",re,ae]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mbs":[{"scroll-mbs":P()}],"scroll-mbe":[{"scroll-mbe":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pbs":[{"scroll-pbs":P()}],"scroll-pbe":[{"scroll-pbe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",re,ae]}],fill:[{fill:["none",...$()]}],"stroke-w":[{stroke:[je,Va,Fo,Ag]}],stroke:[{stroke:["none",...$()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},wS=eS(jS);function sn(...i){return wS(Sy(i))}const SS=N1("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Ls=_.forwardRef(({className:i,variant:r,size:s,asChild:l=!1,...u},h)=>{const f=l?A1:"button";return o.jsx(f,{className:sn(SS({variant:r,size:s,className:i})),ref:h,...u})});Ls.displayName="Button";function bd({className:i}){const[r,s]=_.useState(gg);_.useEffect(()=>{s(gg())},[]);const l=r==="dark"?"light":"dark",u=()=>{jw(l),window.localStorage.setItem(gy,l),s(l)};return o.jsxs(Ls,{variant:"outline",size:"icon",className:sn("relative rounded-full",i),onClick:u,"aria-label":`Switch to ${l} mode`,title:`Switch to ${l} mode`,children:[o.jsx(h1,{className:sn("absolute h-4 w-4 transition-all",r==="dark"?"scale-0 rotate-90 opacity-0":"scale-100 rotate-0 opacity-100")}),o.jsx(t1,{className:sn("absolute h-4 w-4 transition-all",r==="dark"?"scale-100 rotate-0 opacity-100":"scale-0 -rotate-90 opacity-0")}),o.jsx("span",{className:"sr-only",children:`Switch to ${l} mode`})]})}function Ly(i,[r,s]){return Math.min(s,Math.max(r,i))}function yt(i,r,{checkForDefaultPrevented:s=!0}={}){return function(u){if(i?.(u),s===!1||!u.defaultPrevented)return r?.(u)}}function $a(i,r=[]){let s=[];function l(h,f){const m=_.createContext(f),g=s.length;s=[...s,f];const p=x=>{const{scope:b,children:j,...S}=x,k=b?.[i]?.[g]||m,A=_.useMemo(()=>S,Object.values(S));return o.jsx(k.Provider,{value:A,children:j})};p.displayName=h+"Provider";function v(x,b){const j=b?.[i]?.[g]||m,S=_.useContext(j);if(S)return S;if(f!==void 0)return f;throw new Error(`\`${x}\` must be used within \`${h}\``)}return[p,v]}const u=()=>{const h=s.map(f=>_.createContext(f));return function(m){const g=m?.[i]||h;return _.useMemo(()=>({[`__scope${i}`]:{...m,[i]:g}}),[m,g])}};return u.scopeName=i,[l,TS(u,...r)]}function TS(...i){const r=i[0];if(i.length===1)return r;const s=()=>{const l=i.map(u=>({useScope:u(),scopeName:u.scopeName}));return function(h){const f=l.reduce((m,{useScope:g,scopeName:p})=>{const x=g(h)[`__scope${p}`];return{...m,...x}},{});return _.useMemo(()=>({[`__scope${r.scopeName}`]:f}),[f])}};return s.scopeName=r.scopeName,s}var Fi=globalThis?.document?_.useLayoutEffect:()=>{},kS=ad[" useInsertionEffect ".trim().toString()]||Fi;function Ks({prop:i,defaultProp:r,onChange:s=()=>{},caller:l}){const[u,h,f]=RS({defaultProp:r,onChange:s}),m=i!==void 0,g=m?i:u;{const v=_.useRef(i!==void 0);_.useEffect(()=>{const x=v.current;x!==m&&console.warn(`${l} is changing from ${x?"controlled":"uncontrolled"} to ${m?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),v.current=m},[m,l])}const p=_.useCallback(v=>{if(m){const x=AS(v)?v(i):v;x!==i&&f.current?.(x)}else h(v)},[m,i,h,f]);return[g,p]}function RS({defaultProp:i,onChange:r}){const[s,l]=_.useState(i),u=_.useRef(s),h=_.useRef(r);return kS(()=>{h.current=r},[r]),_.useEffect(()=>{u.current!==s&&(h.current?.(s),u.current=s)},[s,u]),[s,l,h]}function AS(i){return typeof i=="function"}var CS=_.createContext(void 0);function jd(i){const r=_.useContext(CS);return i||r||"ltr"}function MS(i){const r=_.useRef({value:i,previous:i});return _.useMemo(()=>(r.current.value!==i&&(r.current.previous=r.current.value,r.current.value=i),r.current.previous),[i])}function _S(i){const[r,s]=_.useState(void 0);return Fi(()=>{if(i){s({width:i.offsetWidth,height:i.offsetHeight});const l=new ResizeObserver(u=>{if(!Array.isArray(u)||!u.length)return;const h=u[0];let f,m;if("borderBoxSize"in h){const g=h.borderBoxSize,p=Array.isArray(g)?g[0]:g;f=p.inlineSize,m=p.blockSize}else f=i.offsetWidth,m=i.offsetHeight;s({width:f,height:m})});return l.observe(i,{box:"border-box"}),()=>l.unobserve(i)}else s(void 0)},[i]),r}function ES(i){const r=DS(i),s=_.forwardRef((l,u)=>{const{children:h,...f}=l,m=_.Children.toArray(h),g=m.find(PS);if(g){const p=g.props.children,v=m.map(x=>x===g?_.Children.count(p)>1?_.Children.only(null):_.isValidElement(p)?p.props.children:null:x);return o.jsx(r,{...f,ref:u,children:_.isValidElement(p)?_.cloneElement(p,void 0,v):null})}return o.jsx(r,{...f,ref:u,children:h})});return s.displayName=`${i}.Slot`,s}function DS(i){const r=_.forwardRef((s,l)=>{const{children:u,...h}=s;if(_.isValidElement(u)){const f=IS(u),m=OS(h,u.props);return u.type!==_.Fragment&&(m.ref=l?Ys(l,f):f),_.cloneElement(u,m)}return _.Children.count(u)>1?_.Children.only(null):null});return r.displayName=`${i}.SlotClone`,r}var NS=Symbol("radix.slottable");function PS(i){return _.isValidElement(i)&&typeof i.type=="function"&&"__radixId"in i.type&&i.type.__radixId===NS}function OS(i,r){const s={...r};for(const l in r){const u=i[l],h=r[l];/^on[A-Z]/.test(l)?u&&h?s[l]=(...m)=>{const g=h(...m);return u(...m),g}:u&&(s[l]=u):l==="style"?s[l]={...u,...h}:l==="className"&&(s[l]=[u,h].filter(Boolean).join(" "))}return{...i,...s}}function IS(i){let r=Object.getOwnPropertyDescriptor(i.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?i.ref:(r=Object.getOwnPropertyDescriptor(i,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?i.props.ref:i.props.ref||i.ref)}var zS=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Nt=zS.reduce((i,r)=>{const s=ES(`Primitive.${r}`),l=_.forwardRef((u,h)=>{const{asChild:f,...m}=u,g=f?s:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),o.jsx(g,{...m,ref:h})});return l.displayName=`Primitive.${r}`,{...i,[r]:l}},{});function _g(i){const r=LS(i),s=_.forwardRef((l,u)=>{const{children:h,...f}=l,m=_.Children.toArray(h),g=m.find(FS);if(g){const p=g.props.children,v=m.map(x=>x===g?_.Children.count(p)>1?_.Children.only(null):_.isValidElement(p)?p.props.children:null:x);return o.jsx(r,{...f,ref:u,children:_.isValidElement(p)?_.cloneElement(p,void 0,v):null})}return o.jsx(r,{...f,ref:u,children:h})});return s.displayName=`${i}.Slot`,s}function LS(i){const r=_.forwardRef((s,l)=>{const{children:u,...h}=s;if(_.isValidElement(u)){const f=HS(u),m=US(h,u.props);return u.type!==_.Fragment&&(m.ref=l?Ys(l,f):f),_.cloneElement(u,m)}return _.Children.count(u)>1?_.Children.only(null):null});return r.displayName=`${i}.SlotClone`,r}var BS=Symbol("radix.slottable");function FS(i){return _.isValidElement(i)&&typeof i.type=="function"&&"__radixId"in i.type&&i.type.__radixId===BS}function US(i,r){const s={...r};for(const l in r){const u=i[l],h=r[l];/^on[A-Z]/.test(l)?u&&h?s[l]=(...m)=>{const g=h(...m);return u(...m),g}:u&&(s[l]=u):l==="style"?s[l]={...u,...h}:l==="className"&&(s[l]=[u,h].filter(Boolean).join(" "))}return{...i,...s}}function HS(i){let r=Object.getOwnPropertyDescriptor(i.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?i.ref:(r=Object.getOwnPropertyDescriptor(i,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?i.props.ref:i.props.ref||i.ref)}function By(i){const r=i+"CollectionProvider",[s,l]=$a(r),[u,h]=s(r,{collectionRef:{current:null},itemMap:new Map}),f=k=>{const{scope:A,children:N}=k,R=Gt.useRef(null),T=Gt.useRef(new Map).current;return o.jsx(u,{scope:A,itemMap:T,collectionRef:R,children:N})};f.displayName=r;const m=i+"CollectionSlot",g=_g(m),p=Gt.forwardRef((k,A)=>{const{scope:N,children:R}=k,T=h(m,N),M=ln(A,T.collectionRef);return o.jsx(g,{ref:M,children:R})});p.displayName=m;const v=i+"CollectionItemSlot",x="data-radix-collection-item",b=_g(v),j=Gt.forwardRef((k,A)=>{const{scope:N,children:R,...T}=k,M=Gt.useRef(null),V=ln(A,M),F=h(v,N);return Gt.useEffect(()=>(F.itemMap.set(M,{ref:M,...T}),()=>{F.itemMap.delete(M)})),o.jsx(b,{[x]:"",ref:V,children:R})});j.displayName=v;function S(k){const A=h(i+"CollectionConsumer",k);return Gt.useCallback(()=>{const R=A.collectionRef.current;if(!R)return[];const T=Array.from(R.querySelectorAll(`[${x}]`));return Array.from(A.itemMap.values()).sort((F,I)=>T.indexOf(F.ref.current)-T.indexOf(I.ref.current))},[A.collectionRef,A.itemMap])}return[{Provider:f,Slot:p,ItemSlot:j},S,l]}var Fy=["PageUp","PageDown"],Uy=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],Hy={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},Ui="Slider",[Hu,VS,GS]=By(Ui),[Vy]=$a(Ui,[GS]),[qS,Xs]=Vy(Ui),Gy=_.forwardRef((i,r)=>{const{name:s,min:l=0,max:u=100,step:h=1,orientation:f="horizontal",disabled:m=!1,minStepsBetweenThumbs:g=0,defaultValue:p=[l],value:v,onValueChange:x=()=>{},onValueCommit:b=()=>{},inverted:j=!1,form:S,...k}=i,A=_.useRef(new Set),N=_.useRef(0),T=f==="horizontal"?YS:KS,[M=[],V]=Ks({prop:v,defaultProp:p,onChange:Z=>{[...A.current][N.current]?.focus(),x(Z)}}),F=_.useRef(M);function I(Z){const oe=$S(M,Z);W(Z,oe)}function P(Z){W(Z,N.current)}function H(){const Z=F.current[N.current];M[N.current]!==Z&&b(M)}function W(Z,oe,{commit:he}={commit:!1}){const Ae=nT(h),ue=oT(Math.round((Z-l)/h)*h+l,Ae),z=Ly(ue,[l,u]);V((Q=[])=>{const ee=ZS(Q,z,oe);if(tT(ee,g*h)){N.current=ee.indexOf(z);const me=String(ee)!==String(Q);return me&&he&&b(ee),me?ee:Q}else return Q})}return o.jsx(qS,{scope:i.__scopeSlider,name:s,disabled:m,min:l,max:u,valueIndexToChangeRef:N,thumbs:A.current,values:M,orientation:f,form:S,children:o.jsx(Hu.Provider,{scope:i.__scopeSlider,children:o.jsx(Hu.Slot,{scope:i.__scopeSlider,children:o.jsx(T,{"aria-disabled":m,"data-disabled":m?"":void 0,...k,ref:r,onPointerDown:yt(k.onPointerDown,()=>{m||(F.current=M)}),min:l,max:u,inverted:j,onSlideStart:m?void 0:I,onSlideMove:m?void 0:P,onSlideEnd:m?void 0:H,onHomeKeyDown:()=>!m&&W(l,0,{commit:!0}),onEndKeyDown:()=>!m&&W(u,M.length-1,{commit:!0}),onStepKeyDown:({event:Z,direction:oe})=>{if(!m){const ue=Fy.includes(Z.key)||Z.shiftKey&&Uy.includes(Z.key)?10:1,z=N.current,Q=M[z],ee=h*ue*oe;W(Q+ee,z,{commit:!0})}}})})})})});Gy.displayName=Ui;var[qy,Yy]=Vy(Ui,{startEdge:"left",endEdge:"right",size:"width",direction:1}),YS=_.forwardRef((i,r)=>{const{min:s,max:l,dir:u,inverted:h,onSlideStart:f,onSlideMove:m,onSlideEnd:g,onStepKeyDown:p,...v}=i,[x,b]=_.useState(null),j=ln(r,T=>b(T)),S=_.useRef(void 0),k=jd(u),A=k==="ltr",N=A&&!h||!A&&h;function R(T){const M=S.current||x.getBoundingClientRect(),V=[0,M.width],I=wd(V,N?[s,l]:[l,s]);return S.current=M,I(T-M.left)}return o.jsx(qy,{scope:i.__scopeSlider,startEdge:N?"left":"right",endEdge:N?"right":"left",direction:N?1:-1,size:"width",children:o.jsx(Ky,{dir:k,"data-orientation":"horizontal",...v,ref:j,style:{...v.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:T=>{const M=R(T.clientX);f?.(M)},onSlideMove:T=>{const M=R(T.clientX);m?.(M)},onSlideEnd:()=>{S.current=void 0,g?.()},onStepKeyDown:T=>{const V=Hy[N?"from-left":"from-right"].includes(T.key);p?.({event:T,direction:V?-1:1})}})})}),KS=_.forwardRef((i,r)=>{const{min:s,max:l,inverted:u,onSlideStart:h,onSlideMove:f,onSlideEnd:m,onStepKeyDown:g,...p}=i,v=_.useRef(null),x=ln(r,v),b=_.useRef(void 0),j=!u;function S(k){const A=b.current||v.current.getBoundingClientRect(),N=[0,A.height],T=wd(N,j?[l,s]:[s,l]);return b.current=A,T(k-A.top)}return o.jsx(qy,{scope:i.__scopeSlider,startEdge:j?"bottom":"top",endEdge:j?"top":"bottom",size:"height",direction:j?1:-1,children:o.jsx(Ky,{"data-orientation":"vertical",...p,ref:x,style:{...p.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:k=>{const A=S(k.clientY);h?.(A)},onSlideMove:k=>{const A=S(k.clientY);f?.(A)},onSlideEnd:()=>{b.current=void 0,m?.()},onStepKeyDown:k=>{const N=Hy[j?"from-bottom":"from-top"].includes(k.key);g?.({event:k,direction:N?-1:1})}})})}),Ky=_.forwardRef((i,r)=>{const{__scopeSlider:s,onSlideStart:l,onSlideMove:u,onSlideEnd:h,onHomeKeyDown:f,onEndKeyDown:m,onStepKeyDown:g,...p}=i,v=Xs(Ui,s);return o.jsx(Nt.span,{...p,ref:r,onKeyDown:yt(i.onKeyDown,x=>{x.key==="Home"?(f(x),x.preventDefault()):x.key==="End"?(m(x),x.preventDefault()):Fy.concat(Uy).includes(x.key)&&(g(x),x.preventDefault())}),onPointerDown:yt(i.onPointerDown,x=>{const b=x.target;b.setPointerCapture(x.pointerId),x.preventDefault(),v.thumbs.has(b)?b.focus():l(x)}),onPointerMove:yt(i.onPointerMove,x=>{x.target.hasPointerCapture(x.pointerId)&&u(x)}),onPointerUp:yt(i.onPointerUp,x=>{const b=x.target;b.hasPointerCapture(x.pointerId)&&(b.releasePointerCapture(x.pointerId),h(x))})})}),Xy="SliderTrack",Qy=_.forwardRef((i,r)=>{const{__scopeSlider:s,...l}=i,u=Xs(Xy,s);return o.jsx(Nt.span,{"data-disabled":u.disabled?"":void 0,"data-orientation":u.orientation,...l,ref:r})});Qy.displayName=Xy;var Vu="SliderRange",Zy=_.forwardRef((i,r)=>{const{__scopeSlider:s,...l}=i,u=Xs(Vu,s),h=Yy(Vu,s),f=_.useRef(null),m=ln(r,f),g=u.values.length,p=u.values.map(b=>Jy(b,u.min,u.max)),v=g>1?Math.min(...p):0,x=100-Math.max(...p);return o.jsx(Nt.span,{"data-orientation":u.orientation,"data-disabled":u.disabled?"":void 0,...l,ref:m,style:{...i.style,[h.startEdge]:v+"%",[h.endEdge]:x+"%"}})});Zy.displayName=Vu;var Gu="SliderThumb",Wy=_.forwardRef((i,r)=>{const s=VS(i.__scopeSlider),[l,u]=_.useState(null),h=ln(r,m=>u(m)),f=_.useMemo(()=>l?s().findIndex(m=>m.ref.current===l):-1,[s,l]);return o.jsx(XS,{...i,ref:h,index:f})}),XS=_.forwardRef((i,r)=>{const{__scopeSlider:s,index:l,name:u,...h}=i,f=Xs(Gu,s),m=Yy(Gu,s),[g,p]=_.useState(null),v=ln(r,R=>p(R)),x=g?f.form||!!g.closest("form"):!0,b=_S(g),j=f.values[l],S=j===void 0?0:Jy(j,f.min,f.max),k=WS(l,f.values.length),A=b?.[m.size],N=A?JS(A,S,m.direction):0;return _.useEffect(()=>{if(g)return f.thumbs.add(g),()=>{f.thumbs.delete(g)}},[g,f.thumbs]),o.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[m.startEdge]:`calc(${S}% + ${N}px)`},children:[o.jsx(Hu.ItemSlot,{scope:i.__scopeSlider,children:o.jsx(Nt.span,{role:"slider","aria-label":i["aria-label"]||k,"aria-valuemin":f.min,"aria-valuenow":j,"aria-valuemax":f.max,"aria-orientation":f.orientation,"data-orientation":f.orientation,"data-disabled":f.disabled?"":void 0,tabIndex:f.disabled?void 0:0,...h,ref:v,style:j===void 0?{display:"none"}:i.style,onFocus:yt(i.onFocus,()=>{f.valueIndexToChangeRef.current=l})})}),x&&o.jsx($y,{name:u??(f.name?f.name+(f.values.length>1?"[]":""):void 0),form:f.form,value:j},l)]})});Wy.displayName=Gu;var QS="RadioBubbleInput",$y=_.forwardRef(({__scopeSlider:i,value:r,...s},l)=>{const u=_.useRef(null),h=ln(u,l),f=MS(r);return _.useEffect(()=>{const m=u.current;if(!m)return;const g=window.HTMLInputElement.prototype,v=Object.getOwnPropertyDescriptor(g,"value").set;if(f!==r&&v){const x=new Event("input",{bubbles:!0});v.call(m,r),m.dispatchEvent(x)}},[f,r]),o.jsx(Nt.input,{style:{display:"none"},...s,ref:h,defaultValue:r})});$y.displayName=QS;function ZS(i=[],r,s){const l=[...i];return l[s]=r,l.sort((u,h)=>u-h)}function Jy(i,r,s){const h=100/(s-r)*(i-r);return Ly(h,[0,100])}function WS(i,r){return r>2?`Value ${i+1} of ${r}`:r===2?["Minimum","Maximum"][i]:void 0}function $S(i,r){if(i.length===1)return 0;const s=i.map(u=>Math.abs(u-r)),l=Math.min(...s);return s.indexOf(l)}function JS(i,r,s){const l=i/2,h=wd([0,50],[0,l]);return(l-h(r)*s)*s}function eT(i){return i.slice(0,-1).map((r,s)=>i[s+1]-r)}function tT(i,r){if(r>0){const s=eT(i);return Math.min(...s)>=r}return!0}function wd(i,r){return s=>{if(i[0]===i[1]||r[0]===r[1])return r[0];const l=(r[1]-r[0])/(i[1]-i[0]);return r[0]+l*(s-i[0])}}function nT(i){return(String(i).split(".")[1]||"").length}function oT(i,r){const s=Math.pow(10,r);return Math.round(i*s)/s}var ev=Gy,iT=Qy,aT=Zy,rT=Wy;const tv=_.forwardRef(({className:i,...r},s)=>o.jsxs(ev,{ref:s,className:sn("relative flex w-full touch-none select-none items-center",i),...r,children:[o.jsx(iT,{className:"relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",children:o.jsx(aT,{className:"absolute h-full bg-primary"})}),o.jsx(rT,{className:"block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"})]}));tv.displayName=ev.displayName;var sT=ad[" useId ".trim().toString()]||(()=>{}),lT=0;function Sd(i){const[r,s]=_.useState(sT());return Fi(()=>{s(l=>l??String(lT++))},[i]),i||(r?`radix-${r}`:"")}function cT(i){const r=_.useRef(i);return _.useEffect(()=>{r.current=i}),_.useMemo(()=>(...s)=>r.current?.(...s),[])}var _u="rovingFocusGroup.onEntryFocus",uT={bubbles:!1,cancelable:!0},Ja="RovingFocusGroup",[qu,nv,dT]=By(Ja),[hT,ov]=$a(Ja,[dT]),[fT,mT]=hT(Ja),iv=_.forwardRef((i,r)=>o.jsx(qu.Provider,{scope:i.__scopeRovingFocusGroup,children:o.jsx(qu.Slot,{scope:i.__scopeRovingFocusGroup,children:o.jsx(pT,{...i,ref:r})})}));iv.displayName=Ja;var pT=_.forwardRef((i,r)=>{const{__scopeRovingFocusGroup:s,orientation:l,loop:u=!1,dir:h,currentTabStopId:f,defaultCurrentTabStopId:m,onCurrentTabStopIdChange:g,onEntryFocus:p,preventScrollOnEntryFocus:v=!1,...x}=i,b=_.useRef(null),j=ln(r,b),S=jd(h),[k,A]=Ks({prop:f,defaultProp:m??null,onChange:g,caller:Ja}),[N,R]=_.useState(!1),T=cT(p),M=nv(s),V=_.useRef(!1),[F,I]=_.useState(0);return _.useEffect(()=>{const P=b.current;if(P)return P.addEventListener(_u,T),()=>P.removeEventListener(_u,T)},[T]),o.jsx(fT,{scope:s,orientation:l,dir:S,loop:u,currentTabStopId:k,onItemFocus:_.useCallback(P=>A(P),[A]),onItemShiftTab:_.useCallback(()=>R(!0),[]),onFocusableItemAdd:_.useCallback(()=>I(P=>P+1),[]),onFocusableItemRemove:_.useCallback(()=>I(P=>P-1),[]),children:o.jsx(Nt.div,{tabIndex:N||F===0?-1:0,"data-orientation":l,...x,ref:j,style:{outline:"none",...i.style},onMouseDown:yt(i.onMouseDown,()=>{V.current=!0}),onFocus:yt(i.onFocus,P=>{const H=!V.current;if(P.target===P.currentTarget&&H&&!N){const W=new CustomEvent(_u,uT);if(P.currentTarget.dispatchEvent(W),!W.defaultPrevented){const Z=M().filter(z=>z.focusable),oe=Z.find(z=>z.active),he=Z.find(z=>z.id===k),ue=[oe,he,...Z].filter(Boolean).map(z=>z.ref.current);sv(ue,v)}}V.current=!1}),onBlur:yt(i.onBlur,()=>R(!1))})})}),av="RovingFocusGroupItem",rv=_.forwardRef((i,r)=>{const{__scopeRovingFocusGroup:s,focusable:l=!0,active:u=!1,tabStopId:h,children:f,...m}=i,g=Sd(),p=h||g,v=mT(av,s),x=v.currentTabStopId===p,b=nv(s),{onFocusableItemAdd:j,onFocusableItemRemove:S,currentTabStopId:k}=v;return _.useEffect(()=>{if(l)return j(),()=>S()},[l,j,S]),o.jsx(qu.ItemSlot,{scope:s,id:p,focusable:l,active:u,children:o.jsx(Nt.span,{tabIndex:x?0:-1,"data-orientation":v.orientation,...m,ref:r,onMouseDown:yt(i.onMouseDown,A=>{l?v.onItemFocus(p):A.preventDefault()}),onFocus:yt(i.onFocus,()=>v.onItemFocus(p)),onKeyDown:yt(i.onKeyDown,A=>{if(A.key==="Tab"&&A.shiftKey){v.onItemShiftTab();return}if(A.target!==A.currentTarget)return;const N=vT(A,v.orientation,v.dir);if(N!==void 0){if(A.metaKey||A.ctrlKey||A.altKey||A.shiftKey)return;A.preventDefault();let T=b().filter(M=>M.focusable).map(M=>M.ref.current);if(N==="last")T.reverse();else if(N==="prev"||N==="next"){N==="prev"&&T.reverse();const M=T.indexOf(A.currentTarget);T=v.loop?xT(T,M+1):T.slice(M+1)}setTimeout(()=>sv(T))}}),children:typeof f=="function"?f({isCurrentTabStop:x,hasTabStop:k!=null}):f})})});rv.displayName=av;var gT={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function yT(i,r){return r!=="rtl"?i:i==="ArrowLeft"?"ArrowRight":i==="ArrowRight"?"ArrowLeft":i}function vT(i,r,s){const l=yT(i.key,s);if(!(r==="vertical"&&["ArrowLeft","ArrowRight"].includes(l))&&!(r==="horizontal"&&["ArrowUp","ArrowDown"].includes(l)))return gT[l]}function sv(i,r=!1){const s=document.activeElement;for(const l of i)if(l===s||(l.focus({preventScroll:r}),document.activeElement!==s))return}function xT(i,r){return i.map((s,l)=>i[(r+l)%i.length])}var bT=iv,jT=rv;function wT(i,r){return _.useReducer((s,l)=>r[s][l]??s,i)}var Td=i=>{const{present:r,children:s}=i,l=ST(r),u=typeof s=="function"?s({present:l.isPresent}):_.Children.only(s),h=ln(l.ref,TT(u));return typeof s=="function"||l.isPresent?_.cloneElement(u,{ref:h}):null};Td.displayName="Presence";function ST(i){const[r,s]=_.useState(),l=_.useRef(null),u=_.useRef(i),h=_.useRef("none"),f=i?"mounted":"unmounted",[m,g]=wT(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return _.useEffect(()=>{const p=ws(l.current);h.current=m==="mounted"?p:"none"},[m]),Fi(()=>{const p=l.current,v=u.current;if(v!==i){const b=h.current,j=ws(p);i?g("MOUNT"):j==="none"||p?.display==="none"?g("UNMOUNT"):g(v&&b!==j?"ANIMATION_OUT":"UNMOUNT"),u.current=i}},[i,g]),Fi(()=>{if(r){let p;const v=r.ownerDocument.defaultView??window,x=j=>{const k=ws(l.current).includes(CSS.escape(j.animationName));if(j.target===r&&k&&(g("ANIMATION_END"),!u.current)){const A=r.style.animationFillMode;r.style.animationFillMode="forwards",p=v.setTimeout(()=>{r.style.animationFillMode==="forwards"&&(r.style.animationFillMode=A)})}},b=j=>{j.target===r&&(h.current=ws(l.current))};return r.addEventListener("animationstart",b),r.addEventListener("animationcancel",x),r.addEventListener("animationend",x),()=>{v.clearTimeout(p),r.removeEventListener("animationstart",b),r.removeEventListener("animationcancel",x),r.removeEventListener("animationend",x)}}else g("ANIMATION_END")},[r,g]),{isPresent:["mounted","unmountSuspended"].includes(m),ref:_.useCallback(p=>{l.current=p?getComputedStyle(p):null,s(p)},[])}}function ws(i){return i?.animationName||"none"}function TT(i){let r=Object.getOwnPropertyDescriptor(i.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?i.ref:(r=Object.getOwnPropertyDescriptor(i,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?i.props.ref:i.props.ref||i.ref)}var Qs="Tabs",[kT]=$a(Qs,[ov]),lv=ov(),[RT,kd]=kT(Qs),cv=_.forwardRef((i,r)=>{const{__scopeTabs:s,value:l,onValueChange:u,defaultValue:h,orientation:f="horizontal",dir:m,activationMode:g="automatic",...p}=i,v=jd(m),[x,b]=Ks({prop:l,onChange:u,defaultProp:h??"",caller:Qs});return o.jsx(RT,{scope:s,baseId:Sd(),value:x,onValueChange:b,orientation:f,dir:v,activationMode:g,children:o.jsx(Nt.div,{dir:v,"data-orientation":f,...p,ref:r})})});cv.displayName=Qs;var uv="TabsList",dv=_.forwardRef((i,r)=>{const{__scopeTabs:s,loop:l=!0,...u}=i,h=kd(uv,s),f=lv(s);return o.jsx(bT,{asChild:!0,...f,orientation:h.orientation,dir:h.dir,loop:l,children:o.jsx(Nt.div,{role:"tablist","aria-orientation":h.orientation,...u,ref:r})})});dv.displayName=uv;var hv="TabsTrigger",fv=_.forwardRef((i,r)=>{const{__scopeTabs:s,value:l,disabled:u=!1,...h}=i,f=kd(hv,s),m=lv(s),g=gv(f.baseId,l),p=yv(f.baseId,l),v=l===f.value;return o.jsx(jT,{asChild:!0,...m,focusable:!u,active:v,children:o.jsx(Nt.button,{type:"button",role:"tab","aria-selected":v,"aria-controls":p,"data-state":v?"active":"inactive","data-disabled":u?"":void 0,disabled:u,id:g,...h,ref:r,onMouseDown:yt(i.onMouseDown,x=>{!u&&x.button===0&&x.ctrlKey===!1?f.onValueChange(l):x.preventDefault()}),onKeyDown:yt(i.onKeyDown,x=>{[" ","Enter"].includes(x.key)&&f.onValueChange(l)}),onFocus:yt(i.onFocus,()=>{const x=f.activationMode!=="manual";!v&&!u&&x&&f.onValueChange(l)})})})});fv.displayName=hv;var mv="TabsContent",pv=_.forwardRef((i,r)=>{const{__scopeTabs:s,value:l,forceMount:u,children:h,...f}=i,m=kd(mv,s),g=gv(m.baseId,l),p=yv(m.baseId,l),v=l===m.value,x=_.useRef(v);return _.useEffect(()=>{const b=requestAnimationFrame(()=>x.current=!1);return()=>cancelAnimationFrame(b)},[]),o.jsx(Td,{present:u||v,children:({present:b})=>o.jsx(Nt.div,{"data-state":v?"active":"inactive","data-orientation":m.orientation,role:"tabpanel","aria-labelledby":g,hidden:!b,id:p,tabIndex:0,...f,ref:r,style:{...i.style,animationDuration:x.current?"0s":void 0},children:b&&h})})});pv.displayName=mv;function gv(i,r){return`${i}-trigger-${r}`}function yv(i,r){return`${i}-content-${r}`}var AT=cv,vv=dv,xv=fv,bv=pv;const CT=AT,jv=_.forwardRef(({className:i,...r},s)=>o.jsx(vv,{ref:s,className:sn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",i),...r}));jv.displayName=vv.displayName;const Yu=_.forwardRef(({className:i,...r},s)=>o.jsx(xv,{ref:s,className:sn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",i),...r}));Yu.displayName=xv.displayName;const MT=_.forwardRef(({className:i,...r},s)=>o.jsx(bv,{ref:s,className:sn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",i),...r}));MT.displayName=bv.displayName;const _T=Ne("/tuner-lab")({head:()=>({meta:[{title:"PID Pilot — Framework Lab"},{name:"description",content:"Interactive guide to how PID Pilot’s velocity and position frameworks change between REV_UP and MAINTAIN."}]}),component:ET});function ET(){const[i,r]=_.useState("velocity"),[s,l]=_.useState("REV_UP"),[u,h]=_.useState([62]),[f,m]=_.useState([38]),[g,p]=_.useState([44]),v=u[0],x=f[0],b=g[0],j=s==="REV_UP"?"Get to target quickly, accept some aggression, and clear stale controller memory on mode changes.":"Hold target cleanly, reject disturbances, and keep steady-state error small.",S=i==="velocity"?"VelocityPIDFTuner uses raw ticks/s, physical kF, relay auto-tuning, and motor-mode enforcement.":"PositionPIDFTuner manages actuator families, normalized moves, feedforward layers, motion profiles, and optional hard bounds.",k=i==="velocity"?"Velocity kF is a real feedforward in motor power per ticks/s. Characterization or a manual override should cover most of the baseline effort.":"Position kF is static trim, not velocity feedforward. Gravity and cosine compensation are separate terms that should stay interpretable.",A=i==="velocity"?["target, measured velocity, error","pTerm, iTerm, dTerm, fTerm","characterized kF, relay Ku and Pu, headroom warnings","disruption drop and recovery when MAINTAIN is active"]:["requested target, clamped target, profiled target","actuator mode, feedback mode, command, and constraint status","feedforward breakdown: static trim, kG, kCos","at-target qualification and disruption stages when feedback exists"],N=DT(i,s,v,x,b),R=NT(i,s,v,x,b);return o.jsxs("div",{className:"min-h-screen bg-background",children:[o.jsx("header",{className:"border-b border-border",children:o.jsxs("div",{className:"mx-auto flex h-14 max-w-[1400px] items-center gap-4 px-4 lg:px-6",children:[o.jsx("div",{children:o.jsx("span",{className:"font-display text-lg font-semibold tracking-tight",children:"Framework Lab"})}),o.jsx("div",{className:"flex-1"}),o.jsx(bd,{className:"h-9 w-9"})]})}),o.jsx("section",{className:"border-b border-border",children:o.jsxs("div",{className:"mx-auto max-w-6xl px-4 py-16 lg:px-6",children:[o.jsxs("div",{className:"max-w-3xl",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground",children:[o.jsx(l1,{className:"h-3.5 w-3.5 text-brand"}),"Interactive framework guide"]}),o.jsx("h1",{className:"mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl",children:"See how the framework changes before you change the robot."}),o.jsx("p",{className:"mt-5 text-lg text-muted-foreground",children:"This page does not pretend to simulate your mechanism. It helps teams reason about the framework’s intent: which control family they are in, what REV_UP or MAINTAIN should emphasize, which telemetry matters, and where common warnings come from."})]}),o.jsxs("div",{className:"mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]",children:[o.jsxs("div",{className:"rounded-[1.75rem] border border-border bg-card p-6 shadow-sm",children:[o.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground",children:"Control family"}),o.jsx(CT,{value:i,onValueChange:T=>r(T),children:o.jsxs(jv,{className:"mt-4 grid w-full grid-cols-2",children:[o.jsx(Yu,{value:"velocity",children:"Velocity"}),o.jsx(Yu,{value:"position",children:"Position"})]})}),o.jsx("p",{className:"mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground",children:"Tuning personality"}),o.jsxs("div",{className:"mt-3 flex flex-wrap gap-3",children:[o.jsx(Ls,{variant:s==="REV_UP"?"default":"outline",onClick:()=>l("REV_UP"),children:"REV_UP"}),o.jsx(Ls,{variant:s==="MAINTAIN"?"default":"outline",onClick:()=>l("MAINTAIN"),children:"MAINTAIN"})]}),o.jsxs("div",{className:"mt-8 space-y-6",children:[o.jsx(Eu,{label:"Output headroom",value:v,help:"Low headroom means feedforward and proportional action have less room to work safely.",onChange:T=>h(T)}),o.jsx(Eu,{label:"Disturbance pressure",value:x,help:"Higher disturbance means MAINTAIN behavior and recovery timing matter more.",onChange:T=>m(T)}),o.jsx(Eu,{label:"Mechanism load",value:b,help:"Higher load increases the need for physically sensible feedforward and honest target choices.",onChange:T=>p(T)})]})]}),o.jsxs("div",{className:"grid gap-4",children:[o.jsx(Du,{icon:i==="velocity"?o.jsx(Gs,{className:"h-5 w-5"}):o.jsx(qs,{className:"h-5 w-5"}),title:"Primary objective",text:j}),o.jsx(Du,{icon:o.jsx(md,{className:"h-5 w-5"}),title:"Subsystem emphasis",text:S}),o.jsx(Du,{icon:o.jsx(v1,{className:"h-5 w-5"}),title:"Feedforward model",text:k}),o.jsxs("div",{className:"rounded-[1.5rem] border border-border bg-card p-6 shadow-sm",children:[o.jsx("h2",{className:"font-display text-2xl font-semibold",children:"Telemetry to watch first"}),o.jsx("ul",{className:"mt-4 space-y-3 text-sm leading-6 text-muted-foreground",children:A.map(T=>o.jsx("li",{children:T},T))})]}),o.jsxs("div",{className:"rounded-[1.5rem] border border-border bg-card p-6 shadow-sm",children:[o.jsx("h2",{className:"font-display text-2xl font-semibold",children:"Live diagnostic readout"}),o.jsxs("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:[o.jsx(Ss,{label:"Framework state",value:R.state}),o.jsx(Ss,{label:"Likely next move",value:R.nextStep}),o.jsx(Ss,{label:"Most important telemetry",value:R.telemetry}),o.jsx(Ss,{label:"Best operator question",value:R.question})]})]})]})]})]})}),o.jsx("section",{className:"bg-muted/20",children:o.jsxs("div",{className:"mx-auto max-w-6xl px-4 py-16 lg:px-6",children:[o.jsxs("div",{className:"max-w-3xl",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground",children:[o.jsx(xy,{className:"h-3.5 w-3.5 text-brand"}),"Common warnings"]}),o.jsx("h2",{className:"mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl",children:"Signals the framework is designed to surface early."})]}),o.jsx("div",{className:"mt-8 grid gap-4 md:grid-cols-3",children:N.map(T=>o.jsx(PT,{title:T.title,text:T.text},T.title))})]})}),o.jsx(yd,{})]})}function DT(i,r,s,l,u){const h=[];return i==="velocity"&&s<35&&h.push({title:"Velocity headroom is tight",text:"Expect derived gain warnings if kF already consumes most of the available output. Lower the target or revisit feedforward before adding more proportional aggression."}),i==="position"&&u>60&&h.push({title:"Position feedforward needs to be explicit",text:"High load on an arm, elevator, or slide is a clue to add kG or kCos rather than forcing integral to do the whole job."}),r==="MAINTAIN"&&l>55&&h.push({title:"Disruption telemetry matters more than arrival speed",text:"Recovery time, drop magnitude, and in-band stability should drive decisions before you celebrate a fast initial move."}),h.push({title:"Live config refresh cuts both ways",text:"Because PIDFTunerOpMode refreshes config every loop, any hardware assumptions you make inside configureVelocity or configurePosition need to stay compatible with the tuner’s control model."}),i==="velocity"?h.push({title:"Do not let the SDK fight the outer loop",text:"VelocityPIDFTuner must own motor power control and reassert RUN_WITHOUT_ENCODER so setPower remains raw power instead of becoming an internal SDK velocity command."}):h.push({title:"Bounds are not only target clamps",text:"If positionBounds are enabled, the tuner should also suppress outward command at hard stops so the mechanism does not keep pushing into a limit."}),h.slice(0,3)}function NT(i,r,s,l,u){return i==="velocity"?{state:r==="REV_UP"?"Characterize kF, run relay auto-tune if needed, then watch RUNNING behavior with profiled targets.":"Hold the target in RUNNING, then pay attention to DISRUPTION recovery and copyable final values.",nextStep:s<40?"Reduce requested target or verify the physical kF source before leaning on larger gains.":"Use relay results as a starting point, then confirm the active gain family matches the operator goal.",telemetry:l>50?"Drop magnitude, recovery time, warning lines, and active gains.":"Measured velocity, pTerm/dTerm balance, and feedforward contribution at target.",question:u>50?"Is the wheel sagging because the load changed, or because feedforward never covered the baseline effort?":"Is the controller doing work that feedforward should already have handled?"}:{state:r==="REV_UP"?"Use motion profiling and normalized position control to approach cleanly without slamming the mechanism.":"Focus on holding behavior, at-target qualification, and disturbance recovery under the real load.",nextStep:u>55?"Add or verify kG and kCos, then confirm your encoder-angle mapping is trustworthy.":"Validate actuator family selection, target units, and bounds before touching gains.",telemetry:l>50?"Clamped target, constraint status, disruption stage, and final recovery timing.":"Profiled target, measured position, command, and the feedforward breakdown.",question:s<40?"Is the mechanism near a hard limit or using too much command just to support the load?":"Is the controller fighting a geometry problem, or are the chosen gains actually the issue?"}}function Eu({label:i,value:r,help:s,onChange:l}){return o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between gap-3",children:[o.jsx("div",{className:"text-sm font-medium text-foreground",children:i}),o.jsxs("div",{className:"font-mono text-sm text-muted-foreground",children:[r,"%"]})]}),o.jsx(tv,{className:"mt-3",value:[r],min:0,max:100,step:1,onValueChange:l}),o.jsx("p",{className:"mt-2 text-sm leading-6 text-muted-foreground",children:s})]})}function Du({icon:i,title:r,text:s}){return o.jsxs("div",{className:"rounded-[1.5rem] border border-border bg-card p-6 shadow-sm",children:[o.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-muted text-brand",children:i}),o.jsx("h2",{className:"mt-4 font-display text-2xl font-semibold",children:r}),o.jsx("p",{className:"mt-3 text-sm leading-6 text-muted-foreground",children:s})]})}function Ss({label:i,value:r}){return o.jsxs("div",{className:"rounded-xl border border-border bg-background px-4 py-3",children:[o.jsx("div",{className:"text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",children:i}),o.jsx("div",{className:"mt-2 text-sm leading-6 text-foreground",children:r})]})}function PT({title:i,text:r}){return o.jsxs("div",{className:"rounded-[1.5rem] border border-border bg-card p-6 shadow-sm",children:[o.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-muted text-brand",children:o.jsx(xy,{className:"h-5 w-5"})}),o.jsx("h3",{className:"mt-4 font-display text-xl font-semibold text-foreground",children:i}),o.jsx("p",{className:"mt-3 text-sm leading-6 text-muted-foreground",children:r})]})}qt("tuner-module:top (dbg5-minimal)");const OT=Ne("/tuner")({head:()=>(qt("tuner:head"),{meta:[{title:"Tuner — PID Pilot"}]}),component:IT});function IT(){return qt("tuner:route-component"),o.jsx("div",{style:{padding:40,fontSize:24},children:"TUNER MINIMAL OK — if you can read this, the router is fine and the freeze is in the real tuner component/imports."})}const wv="/docs/assets/pidpilot-logo-transparent-DXAxaASN.png";function Sv(i){return"links"in i}const Tv=[{title:"Getting Started",links:[{title:"Introduction",to:"/guide"},{title:"Installation",to:"/guide/installation"},{title:"Quick Start",to:"/guide/quick-start"},{title:"Sample OpModes",to:"/guide/templates"}]},{title:"Concepts",links:[{title:"PIDF Terms",to:"/guide/concepts/pidf-terms"},{title:"REV_UP vs MAINTAIN",to:"/guide/concepts/tuning-modes"},{title:"How Auto-Tune Works",to:"/guide/concepts/scoring"}]},{title:"Velocity — Flywheels",links:[{title:"Overview",to:"/guide/velocity/overview"},{title:"Auto-Tune (Relay)",to:"/guide/velocity/ku-search"},{title:"Config Reference",to:"/guide/velocity/config"},{title:"Advanced",links:[{title:"Feedforward Characterization",to:"/guide/velocity/f-sweep"},{title:"Running Control & Headroom",to:"/guide/velocity/refinement"},{title:"Disruption Sampling",to:"/guide/velocity/disruption"}]}]},{title:"Position — Arms & Slides",links:[{title:"Overview",to:"/guide/position/overview"},{title:"Auto-Tune (Relay)",to:"/guide/position/auto-tune"},{title:"Config Reference",to:"/guide/position/config"},{title:"Advanced",links:[{title:"Actuator & Feedback Modes",to:"/guide/position/hold-f"},{title:"Motion Profile & Feedforward",to:"/guide/position/ku-search"},{title:"Bounds & Control Flow",to:"/guide/position/refinement"},{title:"Disruption Sampling",to:"/guide/position/disturbance"}]}]},{title:"Reference",links:[{title:"Troubleshooting",to:"/guide/troubleshooting"},{title:"Telemetry & Final Summary",to:"/guide/reference/telemetry"},{title:"Workflows & Caveats",to:"/guide/reference/practical-notes"},{title:"Setup Rules",to:"/guide/reference/setup-rules"},{title:"FAQ",to:"/guide/reference/faq"}]}],Ii=Tv.flatMap(i=>i.links.flatMap(r=>Sv(r)?r.links.map(s=>({...s,section:`${i.title} / ${r.title}`})):[{...r,section:i.title}])),zT=`import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/guide/concepts/pidf-terms")({
  head: () => ({
    meta: [
      { title: "Shared Concepts — PID Pilot" },
      {
        name: "description",
        content:
          "Shared control concepts in PID Pilot: feedforward vs feedback, Dashboard-driven config, telemetry, and controller internals.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Shared Concepts</h1>
      <p>
        Before you dive into the individual tuners, it helps to understand the common ideas the
        framework is built around. These concepts explain why the package has the class structure it
        does and why the telemetry is so detailed.
      </p>

      <h2>Where P, I, D, and F fit</h2>
      <ul>
        <li>
          <strong>P</strong> reacts to current error and provides the immediate corrective push.
        </li>
        <li>
          <strong>I</strong> reacts to accumulated error over time and is most valuable when hold
          quality and steady-state accuracy matter.
        </li>
        <li>
          <strong>D</strong> damps the response and in PID Pilot is based on measurement change, not
          direct error difference.
        </li>
        <li>
          <strong>F</strong> is not one universal idea: in velocity it is a physical feedforward,
          while in position it is a static trim or friction-help term.
        </li>
      </ul>

      <h2>Feedforward vs feedback</h2>
      <p>
        The package works hard to keep these jobs distinct. Feedforward supplies the expected
        baseline effort. PID handles the leftover error. This matters because a team can only debug
        the controller rationally if it knows whether the mechanism is failing due to a missing
        baseline effort or due to bad feedback behavior.
      </p>

      <ul>
        <li>
          Velocity <code>kF</code> is motor power per <code>ticks/s</code> and is meant to be
          physically interpretable.
        </li>
        <li>
          Position <code>kF</code> is static trim. Gravity constant and cosine compensation are
          separate terms because they represent different physics.
        </li>
      </ul>

      <h2>Dashboard-driven configuration</h2>
      <p>
        PID Pilot is not based on static startup configuration only. The base OpMode calls{" "}
        <code>configureVelocity()</code> or <code>configurePosition()</code> every loop, so changes
        made in FTC Dashboard take effect immediately. That is why the tuners must reassert key
        hardware assumptions during refresh, such as velocity mode ownership.
      </p>

      <h2>Telemetry is a diagnostic surface</h2>
      <p>
        The framework exposes more than target, measurement, and error. It publishes controller
        terms, filtered derivatives, feedforward breakdowns, relay metrics, disruption summaries,
        warnings, and copyable gain summaries because teams need to know <em>why</em> the loop
        behaves the way it does.
      </p>

      <h2>Derivative on measurement</h2>
      <p>
        <code>PIDFController</code> computes derivative from the measurement rather than from direct
        error difference. That avoids derivative kick when the setpoint changes suddenly, which is
        common in FTC because many commands are step changes.
      </p>

      <h2>Controller state is intentionally exposed</h2>
      <p>
        The controller stores things like integral memory, measurement rate, filtered measurement
        rate, term contributions, last error, and last output. The tuners reuse that state directly
        for telemetry instead of re-deriving it elsewhere. This is part of why the framework can
        explain controller behavior so clearly.
      </p>

      <h2>Accumulator units matter</h2>
      <p>
        When integral is clamped, the controller clamps the stored accumulator rather than only the
        final <code>iTerm</code>. That keeps the cap tied to error history. The tuners can then
        derive that cap from actuator headroom while still reasoning about the stored state
        correctly.
      </p>
    </>
  );
}
`,LT=`import { createFileRoute, Link } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/guide/concepts/scoring")({
  head: () => ({
    meta: [
      { title: "How Auto-Tune Works — PID Pilot" },
      {
        name: "description",
        content:
          "The relay (Åström–Hägglund) method behind PID Pilot's auto-tune: how it measures a mechanism and turns that into PIDF gains.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>How Auto-Tune Works</h1>
      <p>
        Both tuners auto-tune with the same engine: the <strong>relay method</strong>{" "}
        (Åström–Hägglund). Instead of guessing gains and nudging them, it makes the mechanism reveal
        its own dynamics, measures them, and converts the measurement into PIDF gains with textbook
        formulas. This page explains what&apos;s happening under the hood.
      </p>

      <h2>The idea: make it oscillate on purpose</h2>
      <p>
        Drive a mechanism with a <em>relay</em> — full push when it&apos;s below target, full pull
        when it&apos;s above — and it settles into a steady oscillation around the target. That limit
        cycle is not noise; its size and speed are a fingerprint of the mechanism&apos;s dynamics.
      </p>
      <ul>
        <li>
          The <strong>amplitude</strong> of the oscillation, together with the relay strength, gives
          the <strong>ultimate gain</strong> <code>Ku</code> — how much proportional gain the system
          can take before it oscillates on its own.
        </li>
        <li>
          The <strong>period</strong> of the oscillation is the <strong>ultimate period</strong>{" "}
          <code>Pu</code> — how fast the system naturally cycles at that edge.
        </li>
      </ul>
      <p>
        A hysteresis band around the target keeps sensor noise from causing false switches, so the
        relay produces a clean oscillation instead of chatter.
      </p>

      <h2>From measurement to gains</h2>
      <p>
        Once <code>Ku</code> and <code>Pu</code> are known, Ziegler–Nichols-style formulas produce
        the gains. PID Pilot computes a calmer <code>MAINTAIN</code> set (good disturbance rejection)
        and a more aggressive <code>REV_UP</code> set (fast approach) from the same measurement, and
        a <em>detune</em> factor lets you scale how aggressive the result is.
      </p>
      <CodeBlock
        language="text"
        code={\`Ku = (4 · relayAmplitude) / (π · oscillationAmplitude)
Pu = oscillation period

MAINTAIN:  kP ≈ 0.3·Ku   kI ≈ kP/Pu     kD ≈ kP·Pu/8
REV_UP:    kP ≈ 0.5·Ku   kI = 0         kD ≈ kP·Pu/20
           (each scaled by relayDetune)\`}
      />

      <h2>The lifecycle</h2>
      <p>The two tuners run slightly different phase sequences on start:</p>
      <CodeBlock
        language="text"
        code={\`Velocity:  CHARACTERIZING → SETTLING → RELAY_TUNING → RELAY_COMPLETE → RUNNING
Position:                          RELAY_TUNING → RELAY_COMPLETE → RUNNING\`}
      />
      <ul>
        <li>
          <strong>Velocity</strong> first runs a short full-power sweep (CHARACTERIZING) to estimate
          a physical feedforward <code>kF ≈ 1/maxVelocity</code>, settles, then relays. Feedforward
          gets the wheel near speed; the relay tunes the feedback around it.
        </li>
        <li>
          <strong>Position</strong> skips characterization — closing the relay on position error
          both drives the mechanism to the target and induces the oscillation in one motion. Gravity
          / cosine feedforward holds it in place while the relay works.
        </li>
        <li>
          <strong>RELAY_COMPLETE</strong> briefly displays the result, then <strong>RUNNING</strong>{" "}
          hands off to normal closed-loop control with the computed gains.
        </li>
      </ul>

      <blockquote>
        Because auto-tune starts in the OpMode constructor (during INIT), the tuners re-baseline their
        phase clocks the moment you press start — so a long INIT wait never eats into the measurement
        window.
      </blockquote>

      <h2>When it can&apos;t measure</h2>
      <p>
        If the mechanism can&apos;t be made to oscillate — too much friction or backlash, or{" "}
        <code>relayAmplitude</code> set too low — the relay times out, leaves your default gains in
        place, and posts a note on the <code>relayTuneNote</code> telemetry key. Raise{" "}
        <code>relayAmplitude</code>, check the hardware, or tune by hand.
      </p>

      <h2>The architecture behind it</h2>
      <p>
        Auto-tune is one system inside a clean split: generic control math, mechanism-specific logic,
        and runtime orchestration each live in their own place.
      </p>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Responsibility</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>PIDFController</code>
            </td>
            <td>Raw control math: derivative-on-measurement, anti-windup, term state, clamping</td>
          </tr>
          <tr>
            <td>
              <code>PIDFTunerOpMode</code>
            </td>
            <td>Runtime shell: loop timing, live config refresh, telemetry mirror, mode toggle</td>
          </tr>
          <tr>
            <td>
              <code>VelocityPIDFTuner</code>
            </td>
            <td>ticks/s control, characterization, relay auto-tune, disruption recovery</td>
          </tr>
          <tr>
            <td>
              <code>PositionPIDFTuner</code>
            </td>
            <td>Actuator / feedback abstraction, relay auto-tune, motion profiles, feedforward, bounds</td>
          </tr>
        </tbody>
      </table>

      <blockquote>
        Next: <Link to="/guide/velocity/ku-search">Velocity Auto-Tune</Link> or{" "}
        <Link to="/guide/position/auto-tune">Position Auto-Tune</Link> for the tuner-specific details,
        or <Link to="/guide/concepts/tuning-modes">REV_UP vs MAINTAIN</Link> for why there are two
        gain sets.
      </blockquote>
    </>
  );
}
`,BT=`import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/guide/concepts/tuning-modes")({
  head: () => ({
    meta: [
      { title: "Tuning Modes — PID Pilot" },
      {
        name: "description",
        content:
          "How PID Pilot uses REV_UP and MAINTAIN as separate controller personalities with separate gains.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Tuning Modes</h1>
      <p>
        <code>PIDFTuningMode</code> is a small enum with a large role in the framework. It gives the
        entire package a shared language for two different controller personalities: one focused on
        getting there quickly and one focused on holding accurately under disturbances.
      </p>

      <h2>REV_UP</h2>
      <ul>
        <li>Prioritizes fast approach to the target.</li>
        <li>Often uses little or no integral.</li>
        <li>May use motion profiling in the position tuner.</li>
        <li>Can accept some overshoot if that buys better approach speed.</li>
      </ul>

      <h2>MAINTAIN</h2>
      <ul>
        <li>Prioritizes low steady-state error and disturbance rejection.</li>
        <li>Commonly benefits from integral action.</li>
        <li>Is the mode used for disruption sampling.</li>
        <li>
          Represents the controller personality you care about once the mechanism is near target.
        </li>
      </ul>

      <h2>Why the framework keeps two gain sets</h2>
      <p>
        The package does not pretend that approach behavior and hold behavior are the same control
        problem. Both tuners keep separate gain sets so a team can tune the personality it actually
        needs instead of forcing one compromise set to cover everything.
      </p>

      <h2>How teams switch modes live</h2>
      <p>
        The base runner handles mode toggling with <code>gamepad1.x</code>. When the mode changes,
        the active tuner swaps gain families and resets state where stale controller memory would be
        misleading.
      </p>

      <h2>Where the effect differs by tuner</h2>
      <table>
        <thead>
          <tr>
            <th>Area</th>
            <th>REV_UP emphasis</th>
            <th>MAINTAIN emphasis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Velocity tuner</td>
            <td>Fast approach and cleaner rev-up behavior</td>
            <td>Robust speed hold and disruption recovery</td>
          </tr>
          <tr>
            <td>Position tuner</td>
            <td>Approach behavior, often with motion profiling</td>
            <td>Holding behavior and load rejection near target</td>
          </tr>
          <tr>
            <td>Integral usage</td>
            <td>Often low or zero</td>
            <td>Commonly more useful</td>
          </tr>
        </tbody>
      </table>

      <h2>Practical guidance</h2>
      <ul>
        <li>
          Use <code>REV_UP</code> when arrival speed is the main job.
        </li>
        <li>
          Use <code>MAINTAIN</code> when resisting changing load is the main job.
        </li>
        <li>
          Expect the same mechanism to produce different valid gains in each mode. That is normal,
          not a bug.
        </li>
      </ul>
    </>
  );
}
`,FT=`import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/guide/")({
  head: () => ({
    meta: [
      { title: "Introduction — PID Pilot" },
      {
        name: "description",
        content:
          "PID Pilot is a drop-in PIDF tuning library for FTC with one-button relay auto-tune for flywheels, arms, and elevators.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Introduction</h1>
      <p>
        PID Pilot is a drop-in PIDF tuning library for FTC. Point it at a mechanism, run one OpMode,
        and its relay auto-tune measures the mechanism and computes working gains for you — live on
        FTC Dashboard, with no controls background required.
      </p>

      <p>
        It covers the two control problems most FTC mechanisms fall into: <strong>velocity</strong>{" "}
        (flywheels and shooters) and <strong>position</strong> (arms, elevators, slides, turrets, and
        servo-driven axes). Both share the same controller core and the same auto-tune engine, but
        each speaks its own mechanism&apos;s language.
      </p>

      <div className="not-prose my-8 grid gap-4 md:grid-cols-3">
        <IntroCard
          title="Quick Start"
          desc="Install the dependency, drop in a sample OpMode, and let auto-tune find your first set of gains."
          to="/guide/quick-start"
          label="Start here"
        />
        <IntroCard
          title="Velocity Tuner"
          desc="Flywheels and shooters: characterization, relay auto-tune, and disruption recovery in raw ticks/sec."
          to="/guide/velocity/overview"
          label="Velocity docs"
        />
        <IntroCard
          title="Position Tuner"
          desc="Arms, elevators, and slides: relay auto-tune plus gravity feedforward, motion profiles, and bounds."
          to="/guide/position/overview"
          label="Position docs"
        />
      </div>

      <h2>What auto-tune actually does</h2>
      <p>
        Hand-tuning PIDF is the biggest wall new teams hit. PID Pilot removes it with the{" "}
        <strong>relay method</strong>: it drives the mechanism into a controlled oscillation around
        your target, measures the oscillation (its ultimate gain <code>Ku</code> and period{" "}
        <code>Pu</code>), and applies Ziegler–Nichols formulas to produce working{" "}
        <code>REV_UP</code> and <code>MAINTAIN</code> gains. It runs automatically the first time you
        start the OpMode, for motors and CR servos, on both tuners.
      </p>
      <p>
        You are never locked into it. Supply your own gains to skip auto-tune, or nudge every gain,
        band, and timeout live from FTC Dashboard while the mechanism runs.
      </p>

      <h2>How it runs</h2>
      <ol>
        <li>
          Your OpMode extends <code>PIDFTunerOpMode</code> and returns a <code>Config</code> from{" "}
          <code>configureVelocity()</code> or <code>configurePosition()</code>.
        </li>
        <li>
          The runner instantiates the matching tuner and drives the live loop — reading sensors,
          computing control, applying output, and mirroring rich telemetry to the Driver Station and
          Dashboard.
        </li>
        <li>
          On start it auto-tunes (unless you skipped it), then holds the target so you can watch and
          refine.
        </li>
        <li>
          <code>gamepad1.x</code> toggles between <code>REV_UP</code> (fast approach) and{" "}
          <code>MAINTAIN</code> (steady-state hold) live.
        </li>
      </ol>

      <h2>What&apos;s in the library</h2>
      <ul>
        <li>
          <code>PIDFController</code> — the shared control math: derivative-on-measurement,
          anti-windup, and fully exposed term state.
        </li>
        <li>
          <code>PIDFTunerOpMode</code> — the live runner: config refresh every loop, telemetry
          mirroring, and the mode toggle.
        </li>
        <li>
          <code>VelocityPIDFTuner</code> — raw <code>ticks/s</code> control, feedforward
          characterization, relay auto-tune, and disruption recovery.
        </li>
        <li>
          <code>PositionPIDFTuner</code> — motors, CR servos, and standard servos, with relay
          auto-tune, motion profiles, gravity/cosine feedforward, and hard bounds.
        </li>
        <li>
          Ready-to-copy sample OpModes: <code>TuneFlywheelNew</code>, <code>TuneArm</code>, and{" "}
          <code>TuneElevator</code>.
        </li>
      </ul>

      <h2>Suggested reading order</h2>
      <ol>
        <li>
          <Link to="/guide/installation">Installation</Link> then{" "}
          <Link to="/guide/quick-start">Quick Start</Link> to get auto-tune running.
        </li>
        <li>
          <Link to="/guide/concepts/pidf-terms">PIDF Terms</Link> and{" "}
          <Link to="/guide/concepts/scoring">How Auto-Tune Works</Link> to understand what the numbers
          mean.
        </li>
        <li>The velocity or position section that matches your mechanism.</li>
        <li>
          <Link to="/guide/reference/telemetry">Telemetry</Link> and{" "}
          <Link to="/guide/troubleshooting">Troubleshooting</Link> when you need to decode real
          behavior.
        </li>
      </ol>

      <blockquote>
        PID Pilot reasons about control; it does not hide bad hardware. It works best when the
        mechanism is already mechanically healthy, with a safe range of motion and consistent
        sensors.
      </blockquote>
    </>
  );
}

function IntroCard({
  title,
  desc,
  to,
  label,
}: {
  title: string;
  desc: string;
  to: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
      <Link
        to={to}
        className="mt-4 inline-flex items-center rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition hover:border-brand/50 hover:bg-accent/40 hover:text-brand"
      >
        {label}
      </Link>
    </div>
  );
}
`,UT=`import { createFileRoute, Link } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/guide/installation")({
  head: () => ({
    meta: [
      { title: "Installation — PID Pilot" },
      {
        name: "description",
        content:
          "Add PID Pilot to your FTC project as a JitPack Gradle dependency and prepare FTC Dashboard for live tuning.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Installation</h1>
      <p>
        PID Pilot ships as a Gradle dependency on JitPack — no copied source files. Add two
        repositories and two dependencies to the standard FTC project, sync, and the sample tuner
        OpModes appear on the Driver Station.
      </p>

      <h2>Requirements</h2>
      <ul>
        <li>The standard FTC SDK project (the FtcRobotController repo) in Android Studio.</li>
        <li>FTC Dashboard — strongly recommended; the tuner streams all its telemetry there.</li>
        <li>A mechanism with real feedback: motor velocity for the velocity tuner, or an encoder / analog sensor for the position tuner.</li>
        <li>Enough free physical range to run safe live tests.</li>
      </ul>

      <h2>1. Add the repositories</h2>
      <p>
        In your project&apos;s <code>build.dependencies.gradle</code> (repo root), add the FTC
        Dashboard maven repo and JitPack to the <code>repositories</code> block:
      </p>
      <CodeBlock
        language="groovy"
        filename="build.dependencies.gradle"
        code={\`repositories {
    mavenCentral()
    google()
    maven { url = 'https://maven.brott.dev/' }   // FTC Dashboard
    maven { url = 'https://jitpack.io' }          // PID Pilot
}\`}
      />

      <h2>2. Add the dependencies</h2>
      <p>
        In the same <code>dependencies</code> block, add PID Pilot and (recommended) FTC Dashboard:
      </p>
      <CodeBlock
        language="groovy"
        filename="build.dependencies.gradle"
        code={\`dependencies {
    implementation 'com.github.PIDPilot:ftc:v1.0.4'
    implementation 'com.acmerobotics.dashboard:dashboard:0.6.0'
}\`}
      />
      <p>
        Then <strong>Sync Gradle</strong>. Check the{" "}
        <a href="https://jitpack.io/#PIDPilot/ftc" target="_blank" rel="noreferrer">
          JitPack page
        </a>{" "}
        for the latest version tag.
      </p>

      <blockquote>
        Kotlin DSL project? The same coordinates work in <code>build.gradle.kts</code>:{" "}
        <code>implementation(&quot;com.github.PIDPilot:ftc:v1.0.4&quot;)</code>.
      </blockquote>

      <h2>3. Confirm it resolved</h2>
      <p>
        Everything lives under the <code>com.pidpilot.ftc</code> package. In any TeamCode file, this
        import should resolve with no red underline once the sync finishes:
      </p>
      <CodeBlock
        language="java"
        code={\`import com.pidpilot.ftc.PIDFTunerOpMode;
import com.pidpilot.ftc.VelocityPIDFTuner;
import com.pidpilot.ftc.PositionPIDFTuner;\`}
      />

      <h2>4. Set up FTC Dashboard</h2>
      <ul>
        <li>
          With the robot running, open <code>http://192.168.43.1:8080/dash</code> (RC phone) or{" "}
          <code>http://192.168.43.1:8080</code> (Control Hub) on a laptop on the robot&apos;s
          network.
        </li>
        <li>
          The tuner mirrors all telemetry there and exposes every tunable value as a live{" "}
          <code>@Config</code> field — this is where you watch auto-tune and refine gains.
        </li>
      </ul>

      <h2>5. Deploy and run</h2>
      <p>
        Build and install to the Robot Controller as usual. The sample tuners appear in the OpMode
        list under the <strong>Tuning</strong> group. Pick one, INIT, then START — and keep hands
        clear while auto-tune runs.
      </p>

      <h2>Compatibility</h2>
      <p>
        Built against FTC SDK <code>11.2.0</code> and FTC Dashboard <code>0.6.0</code>. The API it
        uses has been stable across seasons, so older SDKs generally work — but if you hit a{" "}
        <code>NoSuchMethodError</code>, match the library to your Robot Controller app&apos;s season.
      </p>

      <blockquote>
        Next: <Link to="/guide/quick-start">Quick Start</Link> wires your first tuning OpMode and
        walks through what to watch once auto-tune begins.
      </blockquote>
    </>
  );
}
`,HT=`import { createFileRoute, Link } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/guide/position/auto-tune")({
  head: () => ({
    meta: [
      { title: "Position Auto-Tune — PID Pilot" },
      {
        name: "description",
        content:
          "How relay auto-tune finds kP/kI/kD for arms, elevators, and slides driven by motors or CR servos.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Position Auto-Tune (Relay)</h1>
      <p>
        The position tuner auto-tunes the same way the velocity tuner does: it drives the mechanism
        into a controlled oscillation around your target, measures it, and computes working{" "}
        <code>REV_UP</code> and <code>MAINTAIN</code> gains with Ziegler–Nichols formulas. It runs
        automatically on start for <strong>motors and CR servos</strong> — arms, elevators, slides,
        and turrets.
      </p>

      <h2>When it runs</h2>
      <p>Auto-tune runs on start unless you opt out. Concretely:</p>
      <ul>
        <li>
          <strong>Runs</strong> for <code>MOTOR</code> and <code>CR_SERVO</code> actuators when you
          have not supplied both gain sets.
        </li>
        <li>
          <strong>Skipped</strong> if you call <code>.skipRelayTuning()</code>, or if you supply{" "}
          <em>both</em> <code>.revUpGains(...)</code> and <code>.maintainGains(...)</code> manually.
        </li>
        <li>
          <strong>Not supported</strong> for standard servos (open-loop or with external feedback) —
          those are position-commanded, not power-driven, so tune them by hand. See{" "}
          <Link to="/guide/position/hold-f">Actuator &amp; Feedback Modes</Link>.
        </li>
      </ul>

      <h2>The minimal setup</h2>
      <p>
        No gains, no relay settings — just a target, the motor, and (for anything that fights
        gravity) a feedforward term to hold it in place while the relay works.
      </p>
      <CodeBlock
        filename="TuneElevator.java"
        language="java"
        code={\`return new PositionPIDFTuner.Config()
        .target(TARGET_POSITION)
        .withMotors(elevator)
        .feedforwardGravityConstant(ELEVATOR_KG) // holds it up during the relay
        .telemetry(telemetry);\`}
      />

      <h2>What happens on start</h2>
      <ol>
        <li>
          <strong>RELAY_TUNING</strong> — the tuner applies your feedforward plus a bang-bang relay
          signal (±<code>relayAmplitude</code>) based on position error. That both drives the
          mechanism to the target and forces it to oscillate around it. Unlike the velocity tuner,
          there is no separate &ldquo;approach&rdquo; phase — closing the relay on position error
          does both at once.
        </li>
        <li>
          <strong>Measure</strong> — it records the oscillation&apos;s amplitude and period across
          several cycles to compute the ultimate gain <code>Ku</code> and period <code>Pu</code>.
        </li>
        <li>
          <strong>RELAY_COMPLETE</strong> — it holds briefly, shows the computed gains, then hands
          off to the normal closed loop.
        </li>
        <li>
          <strong>RUNNING</strong> — the computed gains take over and the mechanism holds the target
          under PID. Toggle <code>gamepad1.x</code> for REV_UP vs MAINTAIN.
        </li>
      </ol>

      <blockquote>
        Keep hands off the mechanism during RELAY_TUNING — a push during measurement corrupts the
        oscillation and the computed gains. Wait for the phase to read <code>RUNNING</code>.
      </blockquote>

      <h2>Reading the result</h2>
      <p>Watch these keys on FTC Dashboard:</p>
      <CodeBlock
        language="text"
        code={\`Diagnostics/phase              RELAY_TUNING -> RELAY_COMPLETE -> RUNNING
RelayTune/cyclesCompleted      4/4
RelayTune/amplitudeTicks       23.4
RelayTune/periodSec            0.42
RelayTune/Ku / Pu              0.031 / 0.42
RelayTune/computedMaintainKP   0.61
RelayTune/computedMaintainKI   0.028
RelayTune/computedMaintainKD   0.041
RelayTune/computedRevUpKP      1.02
Diagnostics/relayTuneNote      Relay auto-tune complete.\`}
      />

      <h2>Tuning the tuner</h2>
      <p>
        The defaults work for most mechanisms. If auto-tune struggles, three knobs adjust the
        <em>process</em> (not the mechanism gains):
      </p>
      <table>
        <thead>
          <tr>
            <th>Config</th>
            <th>Default</th>
            <th>Raise it when…</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>relayAmplitude(a)</code>
            </td>
            <td>0.3</td>
            <td>
              The mechanism can&apos;t overcome friction/gravity to oscillate. Lower it if the swing
              is violent.
            </td>
          </tr>
          <tr>
            <td>
              <code>relayHysteresisBandPct(p)</code>
            </td>
            <td>0.03</td>
            <td>Position noise causes chattering / false zero-crossings near the target.</td>
          </tr>
          <tr>
            <td>
              <code>relayDetune(f)</code>
            </td>
            <td>1.0</td>
            <td>
              You want a gentler (lower) or more aggressive (up to 2.0) result from the same
              measurement.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>If it can&apos;t establish an oscillation</h2>
      <p>
        If the mechanism never oscillates (too much friction/backlash, or <code>relayAmplitude</code>{" "}
        too low), the relay times out after ~15 seconds, leaves your Dashboard-default gains in
        place, and posts a note on <code>Diagnostics/relayTuneNote</code>. Raise{" "}
        <code>relayAmplitude</code>, check the mechanism, or tune by hand.
      </p>

      <h2>Opting out</h2>
      <CodeBlock
        language="java"
        code={\`// Start from your own known-good gains, no auto-tune:
return new PositionPIDFTuner.Config()
        .target(TARGET_POSITION)
        .withMotors(arm)
        .revUpGains(0.9, 0.0, 0.12, 0.0)
        .maintainGains(0.6, 0.03, 0.08, 0.0)
        .telemetry(telemetry);

// ...or keep the Dashboard defaults and disable the relay entirely:
        .skipRelayTuning()\`}
      />

      <blockquote>
        Next: <Link to="/guide/position/config">Config Reference</Link> for every builder method, or{" "}
        <Link to="/guide/concepts/scoring">How Auto-Tune Works</Link> for the relay theory shared by
        both tuners.
      </blockquote>
    </>
  );
}
`,VT=`import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/guide/position/config")({
  head: () => ({
    meta: [
      { title: "Position Config Reference — PID Pilot" },
      {
        name: "description",
        content:
          "Reference for PositionPIDFTuner.Config, covering actuator families, feedback modes, motion profiles, feedforward, bounds, and validation.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Position Config Reference</h1>
      <p>
        <code>PositionPIDFTuner.Config</code> is the public builder for a position tuning session.
        It lets you select one actuator family, wire an optional feedback source, shape approach
        behavior, add baseline-effort terms, enforce hard bounds, and configure disruption logic.
      </p>

      <h2>Required fields</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>target(double)</code>
            </td>
            <td>Required target in the same units as the feedback source</td>
          </tr>
          <tr>
            <td>
              <code>telemetry(Telemetry)</code>
            </td>
            <td>Required telemetry surface for Driver Station and Dashboard</td>
          </tr>
        </tbody>
      </table>

      <h2>Actuator family selection</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Use case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>withMotors(DcMotorEx...)</code>
            </td>
            <td>DC motor position control</td>
          </tr>
          <tr>
            <td>
              <code>withServos(Servo...)</code>
            </td>
            <td>Standard servo control</td>
          </tr>
          <tr>
            <td>
              <code>withCRServos(CRServo servo, DcMotorEx... feedbackEncoders)</code>
            </td>
            <td>Single CR servo with encoder feedback</td>
          </tr>
          <tr>
            <td>
              <code>withCRServos(CRServo[] servos, DcMotorEx... feedbackEncoders)</code>
            </td>
            <td>Multiple CR servos with encoder feedback</td>
          </tr>
        </tbody>
      </table>

      <h2>Standard servo feedback and mapping</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>withServoFeedback(DcMotorEx)</code>
            </td>
            <td>Closed-loop standard servo with encoder feedback</td>
          </tr>
          <tr>
            <td>
              <code>withServoFeedbackAnalog(AnalogInput, double voltageToTicksScale)</code>
            </td>
            <td>Closed-loop standard servo with analog feedback</td>
          </tr>
          <tr>
            <td>
              <code>withServoOpenLoopRange(double minTicks, double maxTicks)</code>
            </td>
            <td>Required target-to-servo mapping range for standard servo modes</td>
          </tr>
          <tr>
            <td>
              <code>servoOutputScale(double)</code>
            </td>
            <td>Scale final command for standard or CR servos</td>
          </tr>
        </tbody>
      </table>

      <h2>Mode, gains, and controller shaping</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>tuningMode(PIDFTuningMode)</code>
            </td>
            <td>Select initial gain family</td>
          </tr>
          <tr>
            <td>
              <code>revUpGains(kP, kI, kD, kF)</code>
            </td>
            <td>
              Manual <code>REV_UP</code> gains
            </td>
          </tr>
          <tr>
            <td>
              <code>maintainGains(kP, kI, kD, kF)</code>
            </td>
            <td>
              Manual <code>MAINTAIN</code> gains
            </td>
          </tr>
          <tr>
            <td>
              <code>integralSumMax(double)</code>
            </td>
            <td>Cap integral contribution in output space</td>
          </tr>
          <tr>
            <td>
              <code>derivativeAlpha(double)</code>
            </td>
            <td>Tune derivative filtering</td>
          </tr>
          <tr>
            <td>
              <code>positionToleranceTicks(double)</code>
            </td>
            <td>Define in-band tolerance for at-target checks</td>
          </tr>
        </tbody>
      </table>

      <h2>Relay auto-tuning</h2>
      <p>
        For <code>MOTOR</code> and <code>CR_SERVO</code> actuators, relay auto-tune runs on start and
        computes both gain sets unless you supply both manually or call <code>skipRelayTuning()</code>.
        See <a href="/guide/position/auto-tune">Position Auto-Tune</a>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>skipRelayTuning()</code>
            </td>
            <td>Disable relay auto-tune and start from the supplied / Dashboard-default gains</td>
          </tr>
          <tr>
            <td>
              <code>relayAmplitude(double)</code>
            </td>
            <td>Bang-bang power used to induce the oscillation (default 0.3)</td>
          </tr>
          <tr>
            <td>
              <code>relayHysteresisBandPct(double)</code>
            </td>
            <td>Switching band as a fraction of |target| (default 0.03)</td>
          </tr>
          <tr>
            <td>
              <code>relayDetune(double)</code>
            </td>
            <td>Scale the relay-computed gains — lower is gentler, up to 2.0 (default 1.0)</td>
          </tr>
        </tbody>
      </table>

      <h2>Motion profile and bounds</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>useMotionProfile(double maxVelocity, double maxAcceleration)</code>
            </td>
            <td>
              Enable trapezoidal approach shaping in <code>REV_UP</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>positionBounds(double minTicks, double maxTicks)</code>
            </td>
            <td>Enable hard mechanical limits</td>
          </tr>
        </tbody>
      </table>

      <h2>Feedforward terms</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>feedforwardGravityConstant(double)</code>
            </td>
            <td>Constant gravity bias for vertical systems</td>
          </tr>
          <tr>
            <td>
              <code>feedforwardCosineConstant(double)</code>
            </td>
            <td>Angle-dependent gravity compensation</td>
          </tr>
          <tr>
            <td>
              <code>cosineFeedforwardReference(double zeroTicks, double ticksPerRadian)</code>
            </td>
            <td>Encoder-angle mapping for cosine compensation</td>
          </tr>
        </tbody>
      </table>

      <h2>Disruption configuration</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>runDisruptionPhase(boolean)</code>
            </td>
            <td>Enable or disable disruption timing</td>
          </tr>
          <tr>
            <td>
              <code>disruptionSamples(int)</code>
            </td>
            <td>Number of recovery samples</td>
          </tr>
          <tr>
            <td>
              <code>disruptionReadyStableMs(long)</code>
            </td>
            <td>Required stable time before a sample is armed</td>
          </tr>
          <tr>
            <td>
              <code>disruptionDetectTimeoutMs(long)</code>
            </td>
            <td>How long the tuner waits to detect a disturbance</td>
          </tr>
          <tr>
            <td>
              <code>disruptionRecoveryTimeoutMs(long)</code>
            </td>
            <td>How long the tuner waits for recovery</td>
          </tr>
          <tr>
            <td>
              <code>disruptionReadyBandPct(double)</code>
            </td>
            <td>Ready band around target</td>
          </tr>
          <tr>
            <td>
              <code>disruptionDropThresholdPct(double)</code>
            </td>
            <td>Drop threshold that counts as a disturbance</td>
          </tr>
        </tbody>
      </table>

      <h2>Validation rules</h2>
      <ul>
        <li>Target must be present.</li>
        <li>Exactly one actuator family must be selected.</li>
        <li>Telemetry must be present.</li>
        <li>Motion-profile limits must be valid when profiling is enabled.</li>
        <li>Position bounds must be valid when bounds are enabled.</li>
        <li>Servo output scale must be nonnegative.</li>
        <li>
          <code>kCos</code> requires a cosine reference.
        </li>
        <li>Standard-servo mapping range must be valid.</li>
        <li>Only one standard-servo feedback source may be chosen.</li>
        <li>Analog feedback scale must be nonzero when analog feedback is used.</li>
        <li>CR servo configurations need feedback encoders and valid counts.</li>
      </ul>

      <h2>Example session</h2>
      <CodeBlock
        language="java"
        code={\`return new PositionPIDFTuner.Config()
        .target(TARGET_POSITION)
        .tuningMode(PIDFTuningMode.MAINTAIN)
        .withMotors(slideLeft, slideRight)
        .feedforwardGravityConstant(K_G)
        .positionBounds(MIN_POSITION, MAX_POSITION)
        .positionToleranceTicks(12.0)
        .runDisruptionPhase(true)
        .telemetry(telemetry);\`}
      />
    </>
  );
}
`,GT=`import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/guide/position/disturbance")({
  head: () => ({
    meta: [
      { title: "Position Disruption Sampling — PID Pilot" },
      {
        name: "description",
        content:
          "How PositionPIDFTuner measures hold robustness after a push or load change and when disruption logic is unavailable.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Disruption Sampling</h1>
      <p>
        The position tuner also includes a disruption measurement system. Its purpose is to quantify
        how quickly the mechanism recovers after it is pushed away from target or after a load
        change makes holding harder than the original approach move.
      </p>

      <h2>When the phase is unavailable</h2>
      <p>
        In <code>SERVO_OPEN_LOOP</code>, there is no real feedback controller, so disruption
        sampling is not meaningful and the framework disables it.
      </p>

      <h2>Disruption stages</h2>
      <ul>
        <li>
          <code>WAITING</code>
        </li>
        <li>
          <code>ARMED</code>
        </li>
        <li>
          <code>DETECTING</code>
        </li>
        <li>
          <code>RECOVERING</code>
        </li>
        <li>
          <code>COMPLETE</code>
        </li>
      </ul>

      <h2>What it measures</h2>
      <ol>
        <li>Hold the mechanism near target until position is stably in band.</li>
        <li>Detect a meaningful deviation or load event.</li>
        <li>Measure the peak drop away from target.</li>
        <li>Measure recovery time back into the ready band.</li>
        <li>Repeat until the configured number of samples is collected.</li>
      </ol>

      <h2>Why it matters</h2>
      <p>
        Arms, elevators, and slides often fail the real game task not because they cannot reach the
        target once, but because they cannot stay there cleanly under changing load. Disruption
        telemetry lets the team quantify that instead of relying on intuition.
      </p>

      <h2>Key configuration methods</h2>
      <ul>
        <li>
          <code>runDisruptionPhase(boolean)</code>
        </li>
        <li>
          <code>disruptionSamples(int)</code>
        </li>
        <li>
          <code>disruptionReadyStableMs(long)</code>
        </li>
        <li>
          <code>disruptionDetectTimeoutMs(long)</code>
        </li>
        <li>
          <code>disruptionRecoveryTimeoutMs(long)</code>
        </li>
        <li>
          <code>disruptionReadyBandPct(double)</code>
        </li>
        <li>
          <code>disruptionDropThresholdPct(double)</code>
        </li>
      </ul>
    </>
  );
}
`,qT=`import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/guide/position/hold-f")({
  head: () => ({
    meta: [
      { title: "Position Actuator & Feedback Modes — PID Pilot" },
      {
        name: "description",
        content:
          "How PositionPIDFTuner supports motors, CR servos, standard servos, and multiple feedback sources.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Actuator &amp; Feedback Modes</h1>
      <p>
        The position tuner is effectively a multi-backend position-control framework. The actuator
        family determines how commands are written, how measurements are read, and whether a true
        closed-loop position controller exists at all.
      </p>

      <h2>Actuator modes</h2>
      <table>
        <thead>
          <tr>
            <th>Mode</th>
            <th>What it means</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>MOTOR</code>
            </td>
            <td>DC motor position control using encoder feedback and power output</td>
          </tr>
          <tr>
            <td>
              <code>SERVO_OPEN_LOOP</code>
            </td>
            <td>Direct target-to-servo-position mapping with no PID correction</td>
          </tr>
          <tr>
            <td>
              <code>SERVO_WITH_EXTERNAL_ENCODER</code>
            </td>
            <td>Standard servo with external feedback and PID correction layered on top</td>
          </tr>
          <tr>
            <td>
              <code>CR_SERVO</code>
            </td>
            <td>Continuous-rotation servo driven from encoder feedback and scaled power output</td>
          </tr>
        </tbody>
      </table>

      <h2>Feedback modes for standard servos</h2>
      <ul>
        <li>
          <code>NONE</code> for open-loop mapping only
        </li>
        <li>
          <code>MOTOR_ENCODER</code> when an external encoder motor supplies position
        </li>
        <li>
          <code>ANALOG_INPUT</code> when an analog sensor provides the feedback signal
        </li>
      </ul>

      <h2>Standard servo open-loop behavior</h2>
      <p>
        Open-loop standard servo mode is intentionally simple. There is no PID correction and no
        disruption logic. The target is mapped directly into servo position space, and the tuner
        forces <code>isAtTarget()</code> to report true because there is no real feedback loop to
        qualify.
      </p>

      <h2>Standard servo closed-loop behavior</h2>
      <p>
        Closed-loop standard servo mode blends a direct servo-position mapping with an external PID
        correction. The tuner maps the requested target to a base servo position, computes a
        correction in normalized position space, adds feedforward, and clamps the final command back
        into <code>[0.0, 1.0]</code>.
      </p>

      <h2>CR servo behavior</h2>
      <p>
        CR servos behave more like motors: the tuner uses encoder feedback to estimate position and
        writes scaled power through <code>servoOutputScale</code>. This lets the framework keep one
        consistent tuning model while still respecting how the actuator is commanded physically.
      </p>

      <h2>Why this abstraction matters</h2>
      <p>
        Teams do not need separate tuning frameworks for every actuator family. They need one
        framework that changes its hardware semantics without changing its overall workflow:
        configure, run live, inspect telemetry, and decide whether the mechanism is behaving for the
        right reasons.
      </p>
    </>
  );
}
`,YT=`import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/guide/position/ku-search")({
  head: () => ({
    meta: [
      { title: "Position Motion Profile & Feedforward — PID Pilot" },
      {
        name: "description",
        content:
          "How PositionPIDFTuner uses move normalization, optional trapezoidal motion profiles, and layered feedforward terms.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Motion Profile &amp; Feedforward</h1>
      <p>
        Position tuning is not only “PID plus position.” The framework shapes approach behavior with
        optional trapezoidal profiling and separates different baseline-effort terms so the operator
        can reason about them honestly.
      </p>

      <h2>Move normalization</h2>
      <p>
        The tuner scales target and measurement by <code>moveScaleTicks</code>, which is based on
        actual move distance together with a tolerance floor. This keeps small moves from feeling
        hyper-aggressive while still letting long moves use the same overall gain family.
      </p>

      <h2>Motion profiling</h2>
      <p>
        In <code>REV_UP</code>, the tuner can replace an instantaneous step with a trapezoidal
        profile. That is enabled through:
      </p>

      <CodeBlock language="java" code={\`useMotionProfile(maxVelocity, maxAcceleration)\`} />

      <p>
        If profiling is disabled, the profiled target simply equals the requested target. If it is
        enabled, the tuner computes a position, velocity, and acceleration trajectory each loop.
      </p>

      <h2>Feedforward pieces</h2>
      <ul>
        <li>
          <strong>
            Static trim from <code>kF</code>
          </strong>{" "}
          helps break friction or stiction.
        </li>
        <li>
          <strong>
            Constant gravity term from <code>kG</code>
          </strong>{" "}
          helps elevators and vertical slides.
        </li>
        <li>
          <strong>
            Cosine compensation from <code>kCos</code>
          </strong>{" "}
          helps arms or joints with changing gravity torque.
        </li>
      </ul>

      <h2>Static trim is not velocity feedforward</h2>
      <p>
        In the position tuner, <code>kF</code> is applied as a sign-aware static trim term. It is
        intentionally not the same concept as the velocity tuner’s physical feedforward. Treating
        them as interchangeable is one of the fastest ways to confuse a tuning session.
      </p>

      <h2>Cosine compensation</h2>
      <p>Cosine feedforward uses an encoder-angle mapping and computes:</p>

      <CodeBlock language="text" code={\`kCos * cos((position - zeroTicks) / ticksPerRadian)\`} />

      <p>
        That is why <code>cosineFeedforwardReference(zeroTicks, ticksPerRadian)</code> is required
        whenever <code>kCos</code> is nonzero.
      </p>

      <h2>When each term is most useful</h2>
      <table>
        <thead>
          <tr>
            <th>Term</th>
            <th>Typical mechanism</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>kF</code>
            </td>
            <td>Any mechanism with noticeable static friction or breakaway effort</td>
          </tr>
          <tr>
            <td>
              <code>kG</code>
            </td>
            <td>Elevators and vertical slides</td>
          </tr>
          <tr>
            <td>
              <code>kCos</code>
            </td>
            <td>Arms, joints, or mechanisms with angle-dependent gravity torque</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
`,KT=`import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/guide/position/overview")({
  head: () => ({
    meta: [
      { title: "Position Tuner Overview — PID Pilot" },
      {
        name: "description",
        content:
          "Overview of PositionPIDFTuner, including actuator families, normalized control, motion profiles, feedforward, and bounds.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Position Tuner</h1>
      <p>
        <code>PositionPIDFTuner</code> tunes anything driven to a target position — arms, elevators,
        slides, and turrets. For motors and CR servos it{" "}
        <Link to="/guide/position/auto-tune">auto-tunes on start</Link> via the relay method, the same
        one-button flow as the velocity tuner. It also supports standard servos (open-loop, or
        closed-loop with external encoder / analog feedback), which are tuned by hand.
      </p>

      <blockquote>
        New here? Go straight to <Link to="/guide/position/auto-tune">Position Auto-Tune</Link> —
        bind a motor, set a target, press start. Everything below is the machinery behind it.
      </blockquote>

      <h2>What makes it different from the velocity tuner</h2>
      <ul>
        <li>It supports multiple actuator and feedback backends.</li>
        <li>It normalizes position internally by move scale.</li>
        <li>
          It can use trapezoidal motion profiles in <code>REV_UP</code>.
        </li>
        <li>It separates static trim, gravity constant, and cosine compensation.</li>
        <li>It can clamp targets and suppress outward command at hard stops.</li>
      </ul>

      <h2>Major subsystems</h2>
      <ol>
        <li>Actuator-family abstraction</li>
        <li>Feedback-source abstraction</li>
        <li>Position normalization</li>
        <li>Optional motion profiling</li>
        <li>Static, gravity, and cosine feedforward</li>
        <li>Hard position constraints</li>
        <li>At-target qualification</li>
        <li>Disruption testing</li>
      </ol>

      <h2>Why position is normalized</h2>
      <p>
        The tuner scales setpoint and measurement by a move-specific distance scale. Without that, a
        tiny trim move and a long travel move would feel like unrelated controllers unless gains
        were changed constantly. The move scale keeps small moves from becoming twitchy while still
        preserving meaningful units elsewhere in the system.
      </p>

      <h2>What page to read next</h2>
      <ul>
        <li>
          <Link to="/guide/position/auto-tune">Auto-Tune (Relay)</Link> to let it find your gains —
          the fastest path to a working mechanism.
        </li>
        <li>
          <Link to="/guide/position/hold-f">Actuator &amp; Feedback Modes</Link> if you are choosing
          how the tuner should read and command the mechanism.
        </li>
        <li>
          <Link to="/guide/position/ku-search">Motion Profile &amp; Feedforward</Link> if your main
          question is how the position model is shaped.
        </li>
        <li>
          <Link to="/guide/position/refinement">Bounds &amp; Control Flow</Link> if you need to
          understand safety and loop behavior.
        </li>
      </ul>
    </>
  );
}
`,XT=`import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/guide/position/refinement")({
  head: () => ({
    meta: [
      { title: "Position Bounds & Control Flow — PID Pilot" },
      {
        name: "description",
        content:
          "How PositionPIDFTuner applies bounds, qualifies at-target state, and executes its closed-loop update path.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Bounds &amp; Control Flow</h1>
      <p>
        The position tuner’s control loop includes more than PID and feedforward. It has to manage
        actuator-specific writes, target clamping, at-target qualification, and protection against
        continued outward drive at hard stops.
      </p>

      <h2>Closed-loop update flow</h2>
      <CodeBlock
        language="text"
        code={\`handle SERVO_OPEN_LOOP separately if needed
read feedback position
update motion profile
apply active gains
normalize target and measurement
compute PID output
compute feedforward
apply actuator-specific output
update at-target counter
update disruption phase
push telemetry\`}
      />

      <h2>Hard position constraints</h2>
      <p>
        <code>positionBounds(minTicks, maxTicks)</code> does two jobs. First, it clamps the
        requested target into a safe range. Second, if the mechanism is already at a hard limit, it
        suppresses any additional outward command so the controller does not keep pushing into the
        stop.
      </p>

      <h2>Why target clamping alone is not enough</h2>
      <p>
        If the actuator is already against a hard stop, a controller can still compute an outward
        command even when the requested target was clamped. The framework explicitly blocks that
        behavior because otherwise the mechanism can keep loading the stop and damage itself.
      </p>

      <h2>At-target qualification</h2>
      <p>
        The tuner does not declare victory from one lucky loop. It requires several consecutive
        in-band loops before <code>isAtTarget()</code> becomes true:
      </p>

      <CodeBlock language="text" code={\`REQUIRED_AT_TARGET_LOOPS = 5\`} />

      <p>
        This reduces false success caused by noise, backlash, or a transient crossing through the
        tolerance band.
      </p>

      <h2>Telemetry that matters here</h2>
      <ul>
        <li>Requested target versus clamped target</li>
        <li>Profiled target, velocity, and acceleration</li>
        <li>Measured position and actuator command</li>
        <li>Constraint status and current bound values</li>
        <li>At-target qualification state</li>
      </ul>

      <blockquote>
        When a position session looks unsafe, check bounds and actuator selection before you touch
        gains. A wrong actuator mode or missing hard stop is a setup problem, not a tuning problem.
      </blockquote>
    </>
  );
}
`,QT=`import { createFileRoute, Link } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/guide/quick-start")({
  head: () => ({
    meta: [
      { title: "Quick Start — PID Pilot" },
      {
        name: "description",
        content:
          "Get relay auto-tune running on an FTC mechanism in a few minutes: extend PIDFTunerOpMode, return a Config, press start.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Quick Start</h1>
      <p>
        This is the shortest path to a tuned mechanism. You&apos;ll write one small OpMode, press
        start, and let relay auto-tune find your gains — then read them off FTC Dashboard. Assumes
        you&apos;ve finished <Link to="/guide/installation">Installation</Link>.
      </p>

      <h2>1. Pick your tuner</h2>
      <ul>
        <li>
          <strong>Velocity</strong> — flywheels, shooters: anything whose target is a speed.
        </li>
        <li>
          <strong>Position</strong> — arms, elevators, slides, turrets: anything driven to a target
          position.
        </li>
      </ul>

      <h2>2. Write the OpMode</h2>
      <p>
        Extend <code>PIDFTunerOpMode</code> and override exactly one of{" "}
        <code>configureVelocity()</code> or <code>configurePosition()</code>, returning a{" "}
        <code>Config</code>. That&apos;s the whole setup — you don&apos;t supply gains; auto-tune
        finds them.
      </p>

      <CodeBlock
        filename="TuneFlywheel.java"
        language="java"
        code={\`package org.firstinspires.ftc.teamcode;

import com.acmerobotics.dashboard.config.Config;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.DcMotorEx;
import com.qualcomm.robotcore.hardware.DcMotorSimple;
import com.pidpilot.ftc.PIDFTunerOpMode;
import com.pidpilot.ftc.VelocityPIDFTuner;

@Config
@TeleOp(name = "Tune Flywheel", group = "Tuning")
public class TuneFlywheel extends PIDFTunerOpMode {

    public static double TARGET_VELOCITY = 1800.0; // ticks/sec

    private DcMotorEx left, right;

    @Override
    protected VelocityPIDFTuner.Config configureVelocity() {
        // configure*() runs every loop, so cache hardware the first time only.
        if (left == null) {
            left = hardwareMap.get(DcMotorEx.class, "outtakeL");
            right = hardwareMap.get(DcMotorEx.class, "outtakeR");
            left.setDirection(DcMotorSimple.Direction.REVERSE);
        }
        return new VelocityPIDFTuner.Config()
                .target(TARGET_VELOCITY)
                .withMotors(left, right)
                .averageAbsoluteVelocity(true) // wheels spin opposite by design
                .telemetry(telemetry);
    }
}\`}
      />

      <blockquote>
        <code>configureVelocity()</code> / <code>configurePosition()</code> are called{" "}
        <strong>every control loop</strong> so Dashboard edits to <code>TARGET_VELOCITY</code> apply
        live. Always cache <code>hardwareMap.get(...)</code> in a field like above — don&apos;t
        re-fetch each call.
      </blockquote>

      <h2>3. Press start — auto-tune runs</h2>
      <ol>
        <li>Choose a target the mechanism can realistically reach.</li>
        <li>
          Select the OpMode under <strong>Tuning</strong>, press <strong>INIT</strong>, open FTC
          Dashboard, then press <strong>START</strong>.
        </li>
        <li>
          <strong>Hands clear.</strong> Velocity first does a short full-power sweep to estimate{" "}
          <code>kF</code>, then relay auto-tune oscillates the mechanism around the target and
          computes gains. Position goes straight to the relay.
        </li>
        <li>
          When it finishes it holds the target. Press <code>gamepad1.x</code> to flip between{" "}
          <code>REV_UP</code> and <code>MAINTAIN</code>.
        </li>
      </ol>

      <h2>4. Read the gains off Dashboard</h2>
      <p>
        The tuner streams the computed gains plus the full controller story. Copy the set that
        matches the behavior you need — a good <code>REV_UP</code> tune and a good{" "}
        <code>MAINTAIN</code> tune are legitimately different because they solve different problems.
      </p>
      <CodeBlock
        language="text"
        code={\`RelayTune/computedMaintainKP   0.0034
RelayTune/computedMaintainKI   0.0121
RelayTune/computedMaintainKD   0.00008
Gains/activekF                 0.00048   (velocity: characterized)
RelayTune/Ku / Pu              0.019 / 0.31s
Diagnostics/phase              RUNNING\`}
      />

      <h2>5. Put them in your real subsystem</h2>
      <ol>
        <li>Drop the selected gains into the mechanism class you run in teleop / autonomous.</li>
        <li>Test under the real task, not just under the tuner OpMode.</li>
        <li>Re-run the tune if gearing, inertia, weight, or feedback changes.</li>
      </ol>

      <h2>Prefer to tune by hand?</h2>
      <p>
        Auto-tune is the default, not a requirement. Supply <code>.revUpGains(...)</code> and{" "}
        <code>.maintainGains(...)</code> to start from your own values, or call{" "}
        <code>.skipRelayTuning()</code> to disable it entirely and adjust every gain live in
        Dashboard. The <Link to="/guide/concepts/pidf-terms">Concepts</Link> and Advanced sections
        cover the manual workflow.
      </p>

      <blockquote>
        Next: grab a full working example from <Link to="/guide/templates">Sample OpModes</Link>, or
        read <Link to="/guide/concepts/scoring">How Auto-Tune Works</Link> to understand what just
        happened.
      </blockquote>
    </>
  );
}
`,ZT=`import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/guide/reference/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — PID Pilot" },
      {
        name: "description",
        content:
          "Frequently asked questions about PID Pilot’s tuning modes, feedforward semantics, motor ownership, and supported actuator workflows.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>FAQ</h1>

      <h2>Why are my REV_UP and MAINTAIN gains different?</h2>
      <p>
        Because the framework treats them as different controller personalities. <code>REV_UP</code>{" "}
        prioritizes getting there quickly. <code>MAINTAIN</code> prioritizes holding near target and
        recovering from disturbance. Different valid gains for the same mechanism are expected.
      </p>

      <h2>Why does the velocity tuner use raw ticks per second?</h2>
      <p>
        So gain values and feedforward stay physically interpretable. The numbers may look small,
        but they describe real units rather than a hidden normalization scheme.
      </p>

      <h2>Why does position kF feel different from velocity kF?</h2>
      <p>
        Because they are different concepts. Velocity <code>kF</code> is baseline effort per{" "}
        <code>ticks/s</code>. Position <code>kF</code> is a static trim or friction-help term.
      </p>

      <h2>Why does the tuner keep forcing RUN_WITHOUT_ENCODER?</h2>
      <p>
        To stop the SDK’s inner loop from fighting the framework’s outer loop. VelocityPIDFTuner
        must own motor power control if its math is going to mean what the telemetry says it means.
      </p>

      <h2>Can I skip characterization or relay tuning?</h2>
      <p>
        Yes. Use <code>skipCharacterization(manualKF)</code> when you already trust a physical
        feedforward, and <code>skipRelayTuning()</code> when you are supplying manual gain families
        or want to bypass automatic gain estimation.
      </p>

      <h2>Why is disruption unavailable in some position sessions?</h2>
      <p>
        Because disruption logic is only meaningful when there is real feedback control. In standard
        servo open-loop mode, the tuner is only mapping target to servo position, so there is no
        closed-loop hold behavior to evaluate.
      </p>

      <h2>Do I always need position bounds?</h2>
      <p>
        If the mechanism has hard end stops, yes. Bounds are not only for clamping requested
        targets; they also prevent the controller from continuing to push outward once the mechanism
        is already at a limit.
      </p>

      <h2>Can I use PID Pilot with custom hardware arrangements?</h2>
      <p>
        Usually yes, as long as you can represent the mechanism with one supported actuator family
        and a meaningful feedback source. The sample OpModes are meant to be adapted, not copied
        blindly.
      </p>

      <h2>When should I re-run a tune?</h2>
      <p>
        Re-run when the physics change: different gearing, repaired mechanism, new motor, changed
        wheel inertia, changed arm geometry, or different feedback hardware. PIDF values are tied to
        the actual mechanism, not to the codebase in the abstract.
      </p>
    </>
  );
}
`,WT=`import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/guide/reference/practical-notes")({
  head: () => ({
    meta: [
      { title: "Workflows & Caveats — PID Pilot" },
      {
        name: "description",
        content:
          "Practical engineering workflows, tuner differences, extension points, and real-world caveats for PID Pilot.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Workflows &amp; Caveats</h1>
      <p>
        This page condenses the practical parts of the README that matter once the framework is
        already installed: how teams typically use each tuner, how the two tuners differ, where the
        framework is meant to be extended, and what assumptions still need engineering judgment.
      </p>

      <h2>Typical velocity workflow</h2>
      <ol>
        <li>
          Start from <code>TuneFlywheelNew</code> or an equivalent velocity OpMode.
        </li>
        <li>Set a believable target speed.</li>
        <li>
          Let characterization compute a physical <code>kF</code> unless you already trust one.
        </li>
        <li>Let relay auto-tuning derive starting gain families when appropriate.</li>
        <li>
          Compare <code>REV_UP</code> and <code>MAINTAIN</code> against the mechanism’s real job.
        </li>
        <li>Use disruption sampling if the wheel must survive repeated load events.</li>
      </ol>

      <h2>Typical position workflow</h2>
      <ol>
        <li>Pick the correct actuator family and feedback source first.</li>
        <li>Make sure target units are meaningful and consistent.</li>
        <li>Set tolerance and hard bounds early.</li>
        <li>Add gravity or cosine compensation if the mechanism physics need it.</li>
        <li>Enable motion profiling if instantaneous steps are too violent.</li>
        <li>
          Tune approach behavior with <code>REV_UP</code> and hold behavior with{" "}
          <code>MAINTAIN</code>.
        </li>
      </ol>

      <h2>Important differences between the tuners</h2>
      <ul>
        <li>
          Velocity uses raw <code>ticks/s</code>; position uses normalized move scaling internally.
        </li>
        <li>
          Velocity has characterization and relay auto-tuning; position focuses on actuator and
          feedforward modeling.
        </li>
        <li>
          Velocity <code>kF</code> is physical feedforward; position <code>kF</code> is static trim.
        </li>
        <li>Position supports motors and servos; velocity is motor-oriented.</li>
        <li>
          Position can enforce hard bounds; velocity focuses more on motor-mode ownership and
          headroom sanity.
        </li>
      </ul>

      <h2>Common extension points</h2>
      <ul>
        <li>Config builder surfaces</li>
        <li>Telemetry keys and status blocks</li>
        <li>Sample OpModes</li>
        <li>Relay formulas or acceptance logic</li>
        <li>Motion-profile shape</li>
        <li>Final summary formatting or export helpers</li>
      </ul>

      <h2>Practical caveats</h2>
      <ul>
        <li>The velocity tuner expects to own motor power control completely.</li>
        <li>
          The velocity tuner must keep motors in <code>RUN_WITHOUT_ENCODER</code>.
        </li>
        <li>
          A nonzero position <code>kF</code> is not the same concept as velocity <code>kF</code>.
        </li>
        <li>
          Standard-servo closed-loop quality depends heavily on the quality of external feedback.
        </li>
        <li>
          Motion profiling only affects <code>REV_UP</code> in the position tuner.
        </li>
        <li>Disruption phases are meaningful only when real feedback exists.</li>
        <li>Dashboard defaults are starting points, not guarantees.</li>
      </ul>

      <blockquote>
        PID Pilot makes live control work easier to reason about. It does not replace mechanical
        quality, safe targets, or the need to compare tuner behavior against the real match task.
      </blockquote>
    </>
  );
}
`,$T=`import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/guide/reference/setup-rules")({
  head: () => ({
    meta: [
      { title: "Setup Rules — PID Pilot" },
      {
        name: "description",
        content:
          "Hard setup rules for using PID Pilot safely and in ways that match the framework’s control model.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Setup Rules</h1>
      <p>
        These are the rules worth treating as non-negotiable. Ignoring them usually produces a bad
        session for reasons that look like tuning trouble but are really setup trouble.
      </p>

      <h2>Override only one configure method</h2>
      <p>
        A tuning OpMode must override exactly one of <code>configureVelocity()</code> or{" "}
        <code>configurePosition()</code>. The base runner expects a single active control family.
      </p>

      <h2>Remember that config refreshes every loop</h2>
      <p>
        Any hardware assumptions you make inside the configure method need to remain compatible with
        the tuner on every refresh cycle. Live Dashboard edits are powerful, but they mean the
        OpMode is not a one-time constructor.
      </p>

      <h2>Let the velocity tuner own motor mode</h2>
      <p>
        The velocity tuner is an external power controller and must keep motors in{" "}
        <code>RUN_WITHOUT_ENCODER</code>. Do not rely on the SDK’s internal velocity mode to “help”
        it. That produces two loops fighting the same mechanism.
      </p>

      <h2>Choose exactly one position actuator family</h2>
      <p>
        For the position tuner, bind motors, standard servos, or CR servos once and only once. Mixed
        or ambiguous actuator selection is a configuration error, not an advanced feature.
      </p>

      <h2>Use meaningful units and safe bounds</h2>
      <ul>
        <li>Targets should be in the same units as the feedback source.</li>
        <li>
          Position mechanisms with hard stops should use <code>positionBounds(...)</code>.
        </li>
        <li>Standard servo modes need a valid open-loop mapping range.</li>
      </ul>

      <h2>Do not treat position kF like velocity kF</h2>
      <p>
        Velocity <code>kF</code> is physical feedforward. Position <code>kF</code> is static trim.
        If you use one concept as though it were the other, the rest of the tuning session becomes
        hard to interpret.
      </p>

      <h2>Supply telemetry and watch it live</h2>
      <p>
        Always pass <code>telemetry(telemetry)</code>. PID Pilot is designed around rich telemetry
        surfaces. Running blind removes one of the framework’s strongest advantages.
      </p>

      <h2>Use conservative first targets</h2>
      <p>
        The first run should prove the control path, not challenge the mechanism at its absolute
        limit. Ask for targets the mechanism can really reach and hold before you start raising
        ambition.
      </p>
    </>
  );
}
`,JT=`import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/guide/reference/telemetry")({
  head: () => ({
    meta: [
      { title: "Telemetry & Final Summary — PID Pilot" },
      {
        name: "description",
        content:
          "How PID Pilot uses telemetry as a diagnostic surface across the base runner, controller core, velocity tuner, and position tuner.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Telemetry &amp; Final Summary</h1>
      <p>
        Telemetry is one of the central design features of PID Pilot. The framework mirrors output
        to Driver Station and FTC Dashboard when Dashboard is present, and it tries to expose enough
        internal state that a team can tell whether it is looking at bad feedforward, bad damping,
        integral windup, poor bounds, or a mechanism limitation.
      </p>

      <h2>Base runner behavior</h2>
      <p>
        <code>PIDFTunerOpMode</code> mirrors telemetry to both surfaces and uses reflection to avoid
        a hard runtime dependency on Dashboard. That means the session still runs if Dashboard is
        unavailable, but the richer live workflow remains available when it is connected.
      </p>

      <h2>Controller-core internals</h2>
      <p>
        Because <code>PIDFController</code> stores term contributions and measurement derivatives
        directly, the tuners can publish controller internals without duplicating the math.
      </p>

      <ul>
        <li>
          <code>pTerm</code>, <code>iTerm</code>, <code>dTerm</code>, <code>fTerm</code>
        </li>
        <li>Raw and filtered measurement-rate estimates</li>
        <li>Last output, error, and error rate</li>
      </ul>

      <h2>Velocity tuner telemetry</h2>
      <CodeBlock
        language="text"
        code={\`mode                 MAINTAIN
phase                RUNNING
target velocity      ...
measured velocity    ...
error                ...
pTerm / iTerm / dTerm / fTerm
characterized kF     ...
relay Ku / Pu        ...
warnings             ...
disruption recovery  ...\`}
      />

      <p>
        Velocity sessions can also expose characterization data, relay auto-tune metrics,
        feedforward routing notes, disruption timing, and copyable final gains.
      </p>

      <h2>Position tuner telemetry</h2>
      <CodeBlock
        language="text"
        code={\`mode                 REV_UP
requested target     ...
clamped target       ...
profiled target      ...
profile velocity     ...
measured position    ...
actuator mode        ...
feedback mode        ...
pTerm / iTerm / dTerm / fTerm
gravity / cosine ff  ...
constraint status    ...
disruption stage     ...\`}
      />

      <p>
        Position sessions add actuator-family and feedback-mode context, target clamping state,
        profile state, and feedforward breakdown because those things are often as important as the
        gains themselves.
      </p>

      <h2>Final summary</h2>
      <p>
        At the end of a session, the tuner keeps a copyable summary on screen. The exact contents
        depend on the control family, but the summary is supposed to capture both the values you
        might copy and the reason those values were trustworthy.
      </p>

      <ul>
        <li>Active tuning mode and gain family</li>
        <li>Final gain values</li>
        <li>Characterized or resolved feedforward notes</li>
        <li>Relay results if relay tuning ran</li>
        <li>Disruption summary if disruption sampling ran</li>
      </ul>

      <blockquote>
        The best use of telemetry is comparative: if you change a feedforward term, a bound, or a
        target and the trace suddenly makes more physical sense, you learned something about the
        mechanism before you ever copied a new number.
      </blockquote>
    </>
  );
}
`,ek=`import { createFileRoute, Link } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/guide/templates")({
  head: () => ({
    meta: [
      { title: "Sample OpModes — PID Pilot" },
      {
        name: "description",
        content:
          "Ready-to-copy velocity, arm, and elevator tuning OpModes for PID Pilot, using relay auto-tune by default.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Sample OpModes</h1>
      <p>
        The library ships three reference OpModes you can copy into TeamCode and adapt. None of them
        supply gains — each one relies on relay auto-tune, so the pattern to copy is &ldquo;bind
        hardware, set a target, press start.&rdquo; Change the hardware names and targets to match
        your robot.
      </p>

      <h2>TuneFlywheel — velocity</h2>
      <p>
        A two-motor shooter. Note two things: hardware is cached on the first{" "}
        <code>configureVelocity()</code> call (the method runs every loop), and the feeder motors are
        only powered <strong>after</strong> <code>isStarted()</code> — never during INIT.{" "}
        <code>averageAbsoluteVelocity(true)</code> handles wheels that spin in opposite directions.
      </p>
      <CodeBlock
        filename="TuneFlywheel.java"
        language="java"
        code={\`private DcMotorEx intake, transfer, left, right;
private boolean feederStarted;

@Override
protected VelocityPIDFTuner.Config configureVelocity() {
    if (left == null) {
        intake   = hardwareMap.get(DcMotorEx.class, "intake");
        transfer = hardwareMap.get(DcMotorEx.class, "transfer");
        left     = hardwareMap.get(DcMotorEx.class, "outtakeL");
        right    = hardwareMap.get(DcMotorEx.class, "outtakeR");
        left.setDirection(DcMotorSimple.Direction.REVERSE);
    }
    // Only spin the feeder once the match has actually started.
    if (!feederStarted && isStarted()) {
        intake.setPower(1);
        transfer.setPower(1);
        feederStarted = true;
    }
    return new VelocityPIDFTuner.Config()
            .target(TARGET_VELOCITY)
            .withMotors(left, right)
            .averageAbsoluteVelocity(true)
            .runDisruptionPhase(true)
            .disruptionSamples(5)
            .telemetry(telemetry);
}\`}
      />

      <h2>TuneArm — position with cosine feedforward</h2>
      <p>
        An arm fights gravity as a function of its angle, so it uses cosine feedforward mapped from
        an encoder reference. Auto-tune handles kP/kI/kD; the feedforward just holds the arm up while
        it does. Motion profiling smooths large REV_UP moves.
      </p>
      <CodeBlock
        filename="TuneArm.java"
        language="java"
        code={\`private DcMotorEx arm;

@Override
protected PositionPIDFTuner.Config configurePosition() {
    if (arm == null) {
        arm = hardwareMap.get(DcMotorEx.class, "arm");
    }
    return new PositionPIDFTuner.Config()
            .target(TARGET_POSITION)
            .tuningMode(PIDFTuningMode.REV_UP)
            .withMotors(arm)
            .useMotionProfile(MAX_VELOCITY, MAX_ACCELERATION)
            .feedforwardCosineConstant(ARM_KCOS)          // gravity ~ cos(angle)
            .cosineFeedforwardReference(ZERO_TICKS, TICKS_PER_RADIAN)
            .telemetry(telemetry);
}\`}
      />

      <h2>TuneElevator — position with constant gravity</h2>
      <p>
        A vertical lift needs the same hold force at every height, so it uses a single constant
        gravity feedforward instead of the arm&apos;s cosine geometry. This is the simplest position
        example.
      </p>
      <CodeBlock
        filename="TuneElevator.java"
        language="java"
        code={\`private DcMotorEx elevator;

@Override
protected PositionPIDFTuner.Config configurePosition() {
    if (elevator == null) {
        elevator = hardwareMap.get(DcMotorEx.class, "elevator");
    }
    return new PositionPIDFTuner.Config()
            .target(TARGET_POSITION)
            .tuningMode(PIDFTuningMode.MAINTAIN)
            .withMotors(elevator)
            .feedforwardGravityConstant(ELEVATOR_KG)
            .telemetry(telemetry);
}\`}
      />

      <h2>What the samples teach</h2>
      <ul>
        <li>Cache hardware once — <code>configure*()</code> runs every loop.</li>
        <li>Never power auxiliary motors during INIT; gate them on <code>isStarted()</code>.</li>
        <li>
          Pick the sample by mechanism <em>physics</em> (constant vs angle-dependent gravity), not
          just motor count.
        </li>
        <li>
          Feedforward (<code>kG</code>, <code>kCos</code>) is your job; kP/kI/kD are auto-tune&apos;s
          job.
        </li>
      </ul>

      <h2>Adapting them</h2>
      <ol>
        <li>Replace hardware names and motor directions first.</li>
        <li>Set a safe, reachable target.</li>
        <li>
          Add feedforward and, for fragile mechanisms, <code>positionBounds(min, max)</code> before
          you run.
        </li>
        <li>Keep the OpMode structure intact so the live runner works as designed.</li>
      </ol>

      <blockquote>
        For the full builder surface, use the{" "}
        <Link to="/guide/velocity/config">Velocity</Link> and{" "}
        <Link to="/guide/position/config">Position</Link> config references rather than guessing
        method names.
      </blockquote>
    </>
  );
}
`,tk=`import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/guide/troubleshooting")({
  head: () => ({
    meta: [
      { title: "Troubleshooting — PID Pilot" },
      {
        name: "description",
        content:
          "Troubleshoot common PID Pilot issues in velocity and position sessions using the framework’s real diagnostics and caveats.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Troubleshooting</h1>
      <p>
        When a PID Pilot session goes wrong, the fastest path forward is usually to identify which
        framework assumption is being violated. This page maps common symptoms to the most likely
        setup or control-model problem and points you to the next page worth reading.
      </p>

      <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
        <SymptomCard
          title="Velocity cannot reach target or warnings mention headroom"
          desc="The wheel stays well below target, or telemetry suggests feedforward and gains are consuming all available output."
          causes={[
            "Target speed is unrealistic for the current mechanism and battery state.",
            "The physical kF source is wrong or never established cleanly.",
            "The loop is spending too much output on proportional correction because the baseline effort was never covered.",
          ]}
          links={[
            { label: "Velocity Overview", to: "/guide/velocity/overview" },
            { label: "Characterization", to: "/guide/velocity/f-sweep" },
            { label: "Running Control", to: "/guide/velocity/refinement" },
          ]}
        />

        <SymptomCard
          title="Velocity behavior looks like two controllers are fighting"
          desc="Power commands feel inconsistent, response changes when live config refreshes, or the mechanism ignores the expected outer-loop story."
          causes={[
            "Motor mode is being changed away from RUN_WITHOUT_ENCODER during the session.",
            "User code is reasserting a conflicting hardware mode inside configureVelocity().",
            "The tuner is not being allowed to own raw power control.",
          ]}
          links={[
            { label: "Setup Rules", to: "/guide/reference/setup-rules" },
            { label: "Velocity Overview", to: "/guide/velocity/overview" },
            { label: "Telemetry", to: "/guide/reference/telemetry" },
          ]}
        />

        <SymptomCard
          title="Position mechanism reaches target once but holds badly"
          desc="An arm, slide, or elevator gets close, then droops, chatters, or reacts poorly under load."
          causes={[
            "Static trim, gravity compensation, or cosine compensation is missing or mis-scaled.",
            "You are reading the wrong feedback source or using inconsistent units.",
            "The hold-side MAINTAIN gain family needs to be evaluated separately from REV_UP.",
          ]}
          links={[
            { label: "Position Overview", to: "/guide/position/overview" },
            { label: "Motion & Feedforward", to: "/guide/position/ku-search" },
            { label: "Disruption", to: "/guide/position/disturbance" },
          ]}
        />

        <SymptomCard
          title="Position mechanism pushes into a stop or clamps unexpectedly"
          desc="The requested target and measured motion do not agree, or the controller appears to fight a hard limit."
          causes={[
            "Bounds are missing, wrong, or defined in inconsistent units.",
            "The actuator family or servo mapping range is incorrect.",
            "Constraint status is telling you something real that you are not reading yet.",
          ]}
          links={[
            { label: "Bounds & Control Flow", to: "/guide/position/refinement" },
            { label: "Setup Rules", to: "/guide/reference/setup-rules" },
            { label: "Telemetry", to: "/guide/reference/telemetry" },
          ]}
        />
      </div>

      <h2>First checks before changing gains</h2>
      <ul>
        <li>
          Confirm the mechanism is physically healthy and can move safely through the intended
          range.
        </li>
        <li>
          Verify hardware names, motor directions, encoder directions, and target sign conventions.
        </li>
        <li>Choose a target the mechanism can realistically reach and hold.</li>
        <li>Read the telemetry notes and warnings instead of only the final gain values.</li>
        <li>Confirm that the selected control family matches the actual mechanism job.</li>
      </ul>

      <h2>When to stop the session immediately</h2>
      <ul>
        <li>The mechanism is driving into a hard stop.</li>
        <li>The velocity loop is clearly fighting a motor-mode conflict.</li>
        <li>The feedback signal is obviously wrong or discontinuous.</li>
        <li>The mechanism is outside a safe physical range for live testing.</li>
      </ul>

      <h2>Best next pages</h2>
      <ul>
        <li>
          <Link to="/guide/reference/telemetry">Telemetry &amp; Final Summary</Link> when the raw
          numbers need interpretation.
        </li>
        <li>
          <Link to="/guide/reference/practical-notes">Workflows &amp; Caveats</Link> when the session
          looks “legal” but still not useful.
        </li>
        <li>
          <Link to="/guide/reference/faq">FAQ</Link> when the issue is really about the framework’s
          intended semantics.
        </li>
      </ul>

      <blockquote>
        If the telemetry story and the mechanism physics disagree, trust the physics first and use
        the telemetry to figure out which framework assumption broke.
      </blockquote>
    </>
  );
}

function SymptomCard({
  title,
  desc,
  causes,
  links,
}: {
  title: string;
  desc: string;
  causes: string[];
  links: { label: string; to: string }[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Likely Causes
      </p>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {causes.map((cause) => (
          <li key={cause}>{cause}</li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-brand/50 hover:bg-accent/40 hover:text-brand"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
`,nk=`import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout } from "@/components/DocsLayout";

export const Route = createFileRoute("/guide")({
  component: DocsLayout,
});
`,ok=`import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/guide/velocity/config")({
  head: () => ({
    meta: [
      { title: "Velocity Config Reference — PID Pilot" },
      {
        name: "description",
        content:
          "Reference for VelocityPIDFTuner.Config, including feedforward sources, relay tuning, disruption settings, and validation rules.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Velocity Config Reference</h1>
      <p>
        <code>VelocityPIDFTuner.Config</code> is the public API for constructing a velocity tuning
        session. The builder is organized around target selection, motor binding, gain families,
        feedforward sourcing, relay behavior, and disruption measurement.
      </p>

      <h2>Required fields</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>target(double)</code>
            </td>
            <td>
              Required target velocity in <code>ticks/s</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>withMotors(DcMotorEx...)</code>
            </td>
            <td>Bind one or more velocity motors controlled together</td>
          </tr>
          <tr>
            <td>
              <code>telemetry(Telemetry)</code>
            </td>
            <td>Supply telemetry for Driver Station and Dashboard mirroring</td>
          </tr>
        </tbody>
      </table>

      <h2>Motor binding</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>withMotors(DcMotorEx...)</code>
            </td>
            <td>
              Bind one or more motors driven together. The tuner forces{" "}
              <code>RUN_WITHOUT_ENCODER</code> so its outer loop owns control.
            </td>
          </tr>
          <tr>
            <td>
              <code>averageAbsoluteVelocity(boolean)</code>
            </td>
            <td>
              Average <code>|velocity|</code> instead of signed velocity — use when paired wheels
              spin in opposite directions.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Mode and gain families</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>tuningMode(PIDFTuningMode)</code>
            </td>
            <td>Choose the initial active gain family</td>
          </tr>
          <tr>
            <td>
              <code>revUpGains(kP, kI, kD, kF)</code>
            </td>
            <td>
              Provide manual gains for <code>REV_UP</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>maintainGains(kP, kI, kD, kF)</code>
            </td>
            <td>
              Provide manual gains for <code>MAINTAIN</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Feedforward and characterization</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>skipCharacterization(double manualKF)</code>
            </td>
            <td>
              Skip startup characterization and force a physical <code>kF</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>integralSumMax(double)</code>
            </td>
            <td>Override anti-windup if you do not want headroom-derived limits</td>
          </tr>
          <tr>
            <td>
              <code>derivativeAlpha(double)</code>
            </td>
            <td>Tune derivative filtering in the shared controller core</td>
          </tr>
          <tr>
            <td>
              <code>velocityRampTicksPerSecPerSec(double)</code>
            </td>
            <td>Slew-limit target changes during running control</td>
          </tr>
        </tbody>
      </table>

      <h2>Relay auto-tuning</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>skipRelayTuning()</code>
            </td>
            <td>Bypass relay auto-tuning completely</td>
          </tr>
          <tr>
            <td>
              <code>relayAmplitude(double)</code>
            </td>
            <td>Set relay strength</td>
          </tr>
          <tr>
            <td>
              <code>relayHysteresisBandPct(double)</code>
            </td>
            <td>Set relay deadband as a fraction of target</td>
          </tr>
          <tr>
            <td>
              <code>relayDetune(double)</code>
            </td>
            <td>Scale relay-computed gains conservatively</td>
          </tr>
        </tbody>
      </table>

      <h2>Disruption sampling</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>runDisruptionPhase(boolean)</code>
            </td>
            <td>Enable or disable disruption timing</td>
          </tr>
          <tr>
            <td>
              <code>disruptionSamples(int)</code>
            </td>
            <td>Number of recovery samples to collect</td>
          </tr>
          <tr>
            <td>
              <code>disruptionReadyStableMs(long)</code>
            </td>
            <td>Stable time required before arming a sample</td>
          </tr>
          <tr>
            <td>
              <code>disruptionDetectTimeoutMs(long)</code>
            </td>
            <td>Maximum wait before the sample is considered missed</td>
          </tr>
          <tr>
            <td>
              <code>disruptionRecoveryTimeoutMs(long)</code>
            </td>
            <td>Maximum recovery wait per sample</td>
          </tr>
          <tr>
            <td>
              <code>disruptionReadyBandPct(double)</code>
            </td>
            <td>Ready band around the target velocity</td>
          </tr>
          <tr>
            <td>
              <code>disruptionDropThresholdPct(double)</code>
            </td>
            <td>Velocity drop required to count as a disturbance</td>
          </tr>
          <tr>
            <td>
              <code>realDisruptionRefineIterations(int)</code>
            </td>
            <td>Reserved placeholder for future expansion</td>
          </tr>
          <tr>
            <td>
              <code>realDisruptionRefineSamples(int)</code>
            </td>
            <td>Reserved placeholder for future expansion</td>
          </tr>
        </tbody>
      </table>

      <h2>Validation rules</h2>
      <ul>
        <li>Target must be present.</li>
        <li>At least one motor must be supplied.</li>
        <li>Telemetry must be present.</li>
      </ul>

      <h2>Example session</h2>
      <CodeBlock
        language="java"
        code={\`return new VelocityPIDFTuner.Config()
        .target(TARGET_VELOCITY)
        .tuningMode(PIDFTuningMode.MAINTAIN)
        .withMotors(left, right)
        .averageAbsoluteVelocity(true)
        .relayAmplitude(0.12)
        .relayHysteresisBandPct(0.04)
        .velocityRampTicksPerSecPerSec(6000.0)
        .runDisruptionPhase(true)
        .disruptionSamples(5)
        .telemetry(telemetry);\`}
      />
    </>
  );
}
`,ik=`import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/guide/velocity/disruption")({
  head: () => ({
    meta: [
      { title: "Velocity Disruption Sampling — PID Pilot" },
      {
        name: "description",
        content:
          "How the velocity tuner measures disturbance recovery when MAINTAIN behavior matters more than raw spin-up.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Disruption Sampling</h1>
      <p>
        The velocity tuner includes a second state machine dedicated to measuring recovery after a
        real disturbance. This matters because a flywheel that looks good on a clean step response
        can still perform badly once game pieces start loading it.
      </p>

      <h2>Disruption stages</h2>
      <ul>
        <li>
          <code>WAITING</code>
        </li>
        <li>
          <code>ARMED</code>
        </li>
        <li>
          <code>DETECTING</code>
        </li>
        <li>
          <code>RECOVERING</code>
        </li>
        <li>
          <code>COMPLETE</code>
        </li>
      </ul>

      <h2>What the phase measures</h2>
      <ol>
        <li>Wait for the mechanism to be stably near target.</li>
        <li>Detect or apply a disturbance depending on the configured workflow.</li>
        <li>Measure how far velocity drops.</li>
        <li>Measure how long it takes to recover into the ready band.</li>
        <li>Repeat until the requested number of samples is collected.</li>
      </ol>

      <h2>Configuration knobs</h2>
      <ul>
        <li>
          <code>runDisruptionPhase(boolean)</code>
        </li>
        <li>
          <code>disruptionSamples(int)</code>
        </li>
        <li>
          <code>disruptionReadyStableMs(long)</code>
        </li>
        <li>
          <code>disruptionDetectTimeoutMs(long)</code>
        </li>
        <li>
          <code>disruptionRecoveryTimeoutMs(long)</code>
        </li>
        <li>
          <code>disruptionReadyBandPct(double)</code>
        </li>
        <li>
          <code>disruptionDropThresholdPct(double)</code>
        </li>
      </ul>

      <h2>Why it belongs in MAINTAIN</h2>
      <p>
        <code>MAINTAIN</code> is the controller personality you care about once the mechanism is
        already near target and outside forces start pushing it around. Disruption telemetry is the
        framework’s way of quantifying that job instead of assuming a clean spin-up tells the whole
        story.
      </p>

      <h2>What shows up in telemetry</h2>
      <ul>
        <li>Recovery timing</li>
        <li>Drop magnitude</li>
        <li>Sample counts and completion status</li>
        <li>Instructional notes about when the mechanism is ready for the next disturbance</li>
      </ul>

      <blockquote>
        If a shooter must survive repeated loading, a fast <code>REV_UP</code> result alone is not
        enough. Use disruption recovery to decide whether the hold-side gain family is the one you
        should ship.
      </blockquote>
    </>
  );
}
`,ak=`import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/guide/velocity/f-sweep")({
  head: () => ({
    meta: [
      { title: "Velocity Characterization & Feedforward — PID Pilot" },
      {
        name: "description",
        content:
          "How VelocityPIDFTuner characterizes max velocity, computes physical kF, and chooses a feedforward source.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Characterization &amp; Feedforward</h1>
      <p>
        The velocity tuner begins by trying to establish a believable physical feedforward. This is
        one of the most important design choices in the framework because good velocity control gets
        dramatically easier once the loop stops asking PID to supply the entire baseline effort.
      </p>

      <h2>Startup characterization</h2>
      <p>
        During <strong>CHARACTERIZING</strong>, the tuner drives the mechanism at full power,
        samples the final portion of the run, estimates max steady-state velocity, and computes:
      </p>

      <CodeBlock language="text" code={\`kF = 1 / maxVelocity\`} />

      <p>
        In this framework, that is a real physical feedforward in motor power per{" "}
        <code>ticks/s</code>. The point is to tell the controller how much output the mechanism
        usually needs just to maintain a target speed.
      </p>

      <h2>Why the tuner pauses after characterization</h2>
      <p>
        The <strong>SETTLING</strong> phase immediately follows characterization. Output is driven
        to zero, controller memory is cleared, and the tuner pauses briefly so the next phase starts
        from a clean state instead of inheriting momentum and stale integrator history from full
        power operation.
      </p>

      <h2>Feedforward can come from multiple sources</h2>
      <ul>
        <li>
          A newly characterized physical <code>kF</code>.
        </li>
        <li>
          A manual value provided through <code>skipCharacterization(manualKF)</code>.
        </li>
        <li>
          A nonzero <code>kF</code> embedded directly in the active gain set.
        </li>
      </ul>

      <p>
        The tuner treats feedforward selection and phase routing as related but not identical. Once
        relay tuning or running control is already active, changing which feedforward source is
        available should not destroy the current state machine.
      </p>

      <h2>Methods behind the routing</h2>
      <ul>
        <li>
          <code>resolveActivePhysicalKf()</code> chooses the current physical source.
        </li>
        <li>
          <code>resolveModePhysicalKf(...)</code> checks the gain family currently in use.
        </li>
        <li>
          <code>usesManualKf()</code> and <code>usesConfiguredGainKf()</code> explain why a source
          won.
        </li>
        <li>
          <code>syncFeedforwardMode()</code> keeps phase logic coherent while sources change.
        </li>
      </ul>

      <h2>What to watch in telemetry</h2>
      <ul>
        <li>
          The estimated max velocity and characterized <code>kF</code>.
        </li>
        <li>
          Whether the tuner says it is using a manual or configured gain-set <code>kF</code>.
        </li>
        <li>Any warning that feedforward already consumes too much output headroom.</li>
      </ul>

      <blockquote>
        If the characterized <code>kF</code> looks physically unreasonable, stop there. Do not try
        to “save” the session by adding more P or I on top of a bad baseline effort estimate.
      </blockquote>
    </>
  );
}
`,rk=`import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/guide/velocity/ku-search")({
  head: () => ({
    meta: [
      { title: "Velocity Relay Auto-Tuning — PID Pilot" },
      {
        name: "description",
        content:
          "How VelocityPIDFTuner uses a hysteretic relay to estimate Ku, Pu, and conservative starting gains.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Relay Auto-Tuning</h1>
      <p>
        The velocity tuner’s automatic gain discovery is built around a hysteretic relay rather than
        a hand-wavy default gain. This is the framework’s answer to the reality that a single
        starting <code>kP</code> cannot fit both a fast flywheel and a slow high-inertia mechanism.
      </p>

      <h2>What the relay phase does</h2>
      <ol>
        <li>The tuner effectively zeros traditional PID gains.</li>
        <li>It runs feedforward plus a relay signal around the target.</li>
        <li>The relay forces a stable oscillation instead of relying on chance instability.</li>
        <li>Oscillation amplitude and period are measured.</li>
        <li>
          The tuner estimates <code>Ku</code> and <code>Pu</code>, then computes conservative{" "}
          <code>REV_UP</code> and <code>MAINTAIN</code> gain sets.
        </li>
      </ol>

      <h2>Relay subsystem states</h2>
      <ul>
        <li>
          <code>WAITING_FOR_TARGET</code>
        </li>
        <li>
          <code>OSCILLATING</code>
        </li>
        <li>
          <code>COMPUTING</code>
        </li>
        <li>
          <code>COMPLETE</code>
        </li>
      </ul>

      <p>
        It also tracks which side of the target the signal is on so it can detect clean zero
        crossings and compute the oscillation period honestly.
      </p>

      <h2>Why hysteresis is essential</h2>
      <p>
        Encoder noise near target would make a zero-hysteresis relay chatter constantly. The
        hysteresis band prevents false switching so the tuner measures a real oscillation instead of
        noise around the setpoint.
      </p>

      <h2>Operator-facing knobs</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>skipRelayTuning()</code>
            </td>
            <td>Bypass relay auto-tuning entirely</td>
          </tr>
          <tr>
            <td>
              <code>relayAmplitude(double)</code>
            </td>
            <td>Control how strong the relay push is</td>
          </tr>
          <tr>
            <td>
              <code>relayHysteresisBandPct(double)</code>
            </td>
            <td>Control how wide the deadband is near target</td>
          </tr>
          <tr>
            <td>
              <code>relayDetune(double)</code>
            </td>
            <td>Scale the computed gains conservatively after estimation</td>
          </tr>
        </tbody>
      </table>

      <h2>Methods worth knowing</h2>
      <ul>
        <li>
          <code>runRelayTuningLoop(...)</code> executes the active relay behavior.
        </li>
        <li>
          <code>applyRelayComputedGains()</code> loads the calculated gain families.
        </li>
        <li>
          <code>applyRelayHeadroomGuard(...)</code> keeps the results physically reasonable.
        </li>
        <li>
          <code>appendRelayTuneNote(...)</code> surfaces what happened in telemetry.
        </li>
      </ul>

      <h2>What comes out of the phase</h2>
      <CodeBlock
        language="text"
        code={\`oscillation amplitude
oscillation period
Ku
Pu
computed MAINTAIN gains
computed REV_UP gains\`}
      />

      <blockquote>
        Relay auto-tuning is meant to give the team a mechanism-specific starting point. It is not a
        license to ignore telemetry, headroom warnings, or impossible targets.
      </blockquote>
    </>
  );
}
`,sk=`import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/guide/velocity/overview")({
  head: () => ({
    meta: [
      { title: "Velocity Tuner Overview — PID Pilot" },
      {
        name: "description",
        content:
          "Overview of VelocityPIDFTuner, its raw ticks-per-second model, lifecycle phases, and operational responsibilities.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Velocity Tuner</h1>
      <p>
        <code>VelocityPIDFTuner</code> tunes speed-controlled mechanisms — flywheels and shooters. On
        start it estimates a physical <code>kF</code>, then{" "}
        <Link to="/guide/velocity/ku-search">relay auto-tunes</Link> kP/kI/kD for you. Beyond that it
        handles feedforward, phase routing, disruption measurement, and telemetry rich enough to
        explain why the controller behaves the way it does.
      </p>

      <blockquote>
        New here? The fastest path is <Link to="/guide/quick-start">Quick Start</Link> — bind your
        motors, set a target, press start, and read the gains off Dashboard. The pages below explain
        each phase in depth.
      </blockquote>

      <h2>Raw units are deliberate</h2>
      <p>
        The velocity tuner works in raw <code>ticks/s</code>. That means the gain values often look
        numerically small, but the numbers are honest: <code>kP</code>, <code>kI</code>,{" "}
        <code>kD</code>, and <code>kF</code> all correspond to real physical units instead of a
        hidden normalization scheme.
      </p>

      <h2>Lifecycle phases</h2>
      <ul>
        <li>
          <strong>CHARACTERIZING</strong> estimates a physical <code>kF</code> from max velocity.
        </li>
        <li>
          <strong>SETTLING</strong> pauses output and clears controller memory before the next step.
        </li>
        <li>
          <strong>RELAY_TUNING</strong> creates a controlled oscillation to estimate usable gains.
        </li>
        <li>
          <strong>RELAY_COMPLETE</strong> briefly surfaces relay results before normal control takes
          over.
        </li>
        <li>
          <strong>RUNNING</strong> performs normal closed-loop control with active gains.
        </li>
        <li>
          <strong>DISRUPTION</strong> measures recovery after a real disturbance when hold quality
          matters.
        </li>
        <li>
          <strong>COMPLETE</strong> exposes final summary lines and copyable values.
        </li>
      </ul>

      <h2>Main responsibilities inside the class</h2>
      <ol>
        <li>Manage active gain families and mode switching.</li>
        <li>Resolve the physical feedforward source.</li>
        <li>Characterize startup behavior when needed.</li>
        <li>Run relay auto-tuning when enabled.</li>
        <li>Apply normal closed-loop control in raw power space.</li>
        <li>
          Measure disruption recovery in <code>MAINTAIN</code>.
        </li>
        <li>Render operational telemetry and warnings.</li>
      </ol>

      <h2>Why motor mode enforcement matters</h2>
      <p>
        The tuner is an external power controller and must keep motors in{" "}
        <code>RUN_WITHOUT_ENCODER</code>. Because the surrounding OpMode refreshes config every
        loop, user code might accidentally reassert another run mode. If that happened and the tuner
        did not push back, the SDK’s inner loop could start fighting the tuner's outer loop.
      </p>

      <h2>Important next pages</h2>
      <ul>
        <li>
          <Link to="/guide/velocity/f-sweep">Characterization &amp; Feedforward</Link> explains how
          physical <code>kF</code> is sourced.
        </li>
        <li>
          <Link to="/guide/velocity/ku-search">Relay Auto-Tuning</Link> explains how the tuner
          derives conservative starting gains.
        </li>
        <li>
          <Link to="/guide/velocity/refinement">Running Control &amp; Headroom</Link> explains the
          normal update loop, ramping, and gain sanity warnings.
        </li>
      </ul>
    </>
  );
}
`,lk=`import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/guide/velocity/refinement")({
  head: () => ({
    meta: [
      { title: "Velocity Running Control & Headroom — PID Pilot" },
      {
        name: "description",
        content:
          "How VelocityPIDFTuner runs closed-loop control, enforces motor mode, manages target ramping, and warns about unrealistic gains.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Running Control &amp; Headroom</h1>
      <p>
        Once the velocity tuner reaches <strong>RUNNING</strong>, it becomes a normal external
        closed-loop controller. What makes the framework valuable here is not only the control law,
        but the sanity logic wrapped around it: motor-mode enforcement, target ramping, integrator
        headroom, and warnings when the requested operating point is physically dubious.
      </p>

      <h2>Main running loop</h2>
      <ol>
        <li>Read average mechanism velocity.</li>
        <li>Resolve the active target, including optional ramping.</li>
        <li>
          Apply the active gain family for <code>REV_UP</code> or <code>MAINTAIN</code>.
        </li>
        <li>
          Compute PID output through <code>PIDFController</code>.
        </li>
        <li>Add the resolved feedforward term.</li>
        <li>Write raw power to the hardware.</li>
        <li>Publish telemetry and warnings.</li>
      </ol>

      <h2>Optional target ramping</h2>
      <p>
        <code>velocityRampTicksPerSecPerSec(double)</code> lets the tuner slew the active target
        instead of commanding an instantaneous step. This matters when the mechanism or power system
        needs a smoother approach before full closed-loop behavior takes over.
      </p>

      <h2>Why ensureMotorMode exists</h2>
      <p>
        The tuner must keep motors in <code>RUN_WITHOUT_ENCODER</code>. If another mode slipped in
        during live config refresh, <code>setPower()</code> could stop meaning raw power and the SDK
        inner loop could start interpreting the command differently. <code>ensureMotorMode()</code>
        prevents that nondeterminism.
      </p>

      <h2>Derived gain sanity logic</h2>
      <p>
        <code>updateDerivedGainState()</code> turns controller math into practical warnings. It can
        derive <code>integralSumMax</code> from remaining output headroom and tell the operator when
        either feedforward or proportional action is already consuming more output than the
        mechanism can realistically provide.
      </p>

      <CodeBlock
        language="text"
        code={\`warn if kF consumes all headroom
warn if kP * target is much larger than remaining headroom
derive integralSumMax from available output when not overridden\`}
      />

      <h2>Telemetry categories during running control</h2>
      <ul>
        <li>Setpoint, measured velocity, error, and active tuning mode</li>
        <li>
          <code>pTerm</code>, <code>iTerm</code>, <code>dTerm</code>, and <code>fTerm</code>
        </li>
        <li>Filtered derivative information from the controller core</li>
        <li>Active gains, feedforward source notes, and warnings</li>
        <li>Relay or characterization results that remain relevant to the session</li>
      </ul>

      <blockquote>
        When a velocity session looks wrong, check headroom and motor mode first. A bad feedforward
        baseline or a motor-mode conflict will make every gain discussion less honest.
      </blockquote>
    </>
  );
}
`,ck=Object.assign({"../routes/guide.concepts.pidf-terms.tsx":zT,"../routes/guide.concepts.scoring.tsx":LT,"../routes/guide.concepts.tuning-modes.tsx":BT,"../routes/guide.index.tsx":FT,"../routes/guide.installation.tsx":UT,"../routes/guide.position.auto-tune.tsx":HT,"../routes/guide.position.config.tsx":VT,"../routes/guide.position.disturbance.tsx":GT,"../routes/guide.position.hold-f.tsx":qT,"../routes/guide.position.ku-search.tsx":YT,"../routes/guide.position.overview.tsx":KT,"../routes/guide.position.refinement.tsx":XT,"../routes/guide.quick-start.tsx":QT,"../routes/guide.reference.faq.tsx":ZT,"../routes/guide.reference.practical-notes.tsx":WT,"../routes/guide.reference.setup-rules.tsx":$T,"../routes/guide.reference.telemetry.tsx":JT,"../routes/guide.templates.tsx":ek,"../routes/guide.troubleshooting.tsx":tk,"../routes/guide.tsx":nk,"../routes/guide.velocity.config.tsx":ok,"../routes/guide.velocity.disruption.tsx":ik,"../routes/guide.velocity.f-sweep.tsx":ak,"../routes/guide.velocity.ku-search.tsx":rk,"../routes/guide.velocity.overview.tsx":sk,"../routes/guide.velocity.refinement.tsx":lk});function uk(i){return i==="/guide"?"../routes/guide.index.tsx":`../routes/guide.${i.replace(/^\/guide\//,"").replaceAll("/",".")}.tsx`}function dk(i){return i.match(/function Page\(\)\s*\{[\s\S]*?return\s*\(([\s\S]*?)\);\s*\}/)?.[1]??i}function hk(i){return i.replace(/\s+/g," ").trim()}function Ku(i){return hk(i.replace(/<CodeBlock[\s\S]*?code=\{`([\s\S]*?)`\}[\s\S]*?\/>/g," $1 ").replace(/\{\s*" "\s*\}/g," ").replace(/\{\s*' '\s*\}/g," ").replace(/\{"([^"]*?)"\}/g," $1 ").replace(/\{'([^']*?)'\}/g," $1 ").replace(/\{\/\*[\s\S]*?\*\/\}/g," ").replace(/\{[\s\S]*?\}/g," ").replace(/<[^>]+>/g," "))}function kv(i){return i.toLowerCase().replace(/&amp;/g,"and").replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}function fk(i,r){const s=kv(i)||"section",l=r.get(s)??0;return r.set(s,l+1),l===0?s:`${s}-${l+1}`}function mk(i){const r=[...i.matchAll(/<(h[1-3])>([\s\S]*?)<\/\1>/g)].map(l=>({end:(l.index??0)+l[0].length,index:l.index??0,level:Number(l[1].slice(1)),title:Ku(l[2])})),s=new Map;return r.filter(l=>!!l.title).map((l,u,h)=>{const f=h[u+1],m=Ku(i.slice(l.end,f?.index??i.length));return{...l,anchor:fk(l.title,s),content:m}})}function pk(i){return[...i.matchAll(/<CodeBlock\b/g)].length}function gk(i){const r=ck[uk(i.to)]??"",s=dk(r),l=mk(s);return{...i,content:Ku(s),codeSnippetCount:pk(s),headings:l.filter(u=>u.level===2||u.level===3)}}const Rd=Ii.map(gk),yk=Rd.flatMap(i=>[{content:i.content,id:`${i.to}#page`,section:i.section,title:i.title,to:i.to},...i.headings.map(r=>({anchor:r.anchor,content:r.content,heading:r.title,headingLevel:r.level,id:`${i.to}#${r.anchor}`,section:i.section,title:i.title,to:i.to}))]);function yo(i){return Array.isArray?Array.isArray(i):Av(i)==="[object Array]"}function vk(i){if(typeof i=="string")return i;if(typeof i=="bigint")return i.toString();const r=i+"";return r=="0"&&1/i==-1/0?"-0":r}function Xu(i){return i==null?"":vk(i)}function wt(i){return typeof i=="string"}function _s(i){return typeof i=="number"}function xk(i){return i===!0||i===!1||bk(i)&&Av(i)=="[object Boolean]"}function Rv(i){return typeof i=="object"}function bk(i){return Rv(i)&&i!==null}function _t(i){return i!=null}function Ts(i){return!i.trim().length}function Av(i){return i==null?i===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(i)}const jk="Incorrect 'index' type",wk=i=>`Invalid value for key ${i}`,Sk=i=>`Pattern length exceeds max of ${i}.`,Tk=i=>`Missing ${i} property in key`,kk=i=>`Property 'weight' in key '${i}' must be a positive integer`,Eg=Object.prototype.hasOwnProperty;class Rk{constructor(r){this._keys=[],this._keyMap={};let s=0;r.forEach(l=>{const u=Cv(l);this._keys.push(u),this._keyMap[u.id]=u,s+=u.weight}),this._keys.forEach(l=>{l.weight/=s})}get(r){return this._keyMap[r]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Cv(i){let r=null,s=null,l=null,u=1,h=null;if(wt(i)||yo(i))l=i,r=Dg(i),s=Qu(i);else{if(!Eg.call(i,"name"))throw new Error(Tk("name"));const f=i.name;if(l=f,Eg.call(i,"weight")&&(u=i.weight,u<=0))throw new Error(kk(f));r=Dg(f),s=Qu(f),h=i.getFn}return{path:r,id:s,weight:u,src:l,getFn:h}}function Dg(i){return yo(i)?i:i.split(".")}function Qu(i){return yo(i)?i.join("."):i}function Ak(i,r){const s=[];let l=!1;const u=(h,f,m,g)=>{if(_t(h))if(!f[m])s.push(g!==void 0?{v:h,i:g}:h);else{const p=f[m],v=h[p];if(!_t(v))return;if(m===f.length-1&&(wt(v)||_s(v)||xk(v)||typeof v=="bigint"))s.push(g!==void 0?{v:Xu(v),i:g}:Xu(v));else if(yo(v)){l=!0;for(let x=0,b=v.length;x<b;x+=1)u(v[x],f,m+1,x)}else f.length&&u(v,f,m+1,g)}};return u(i,wt(r)?r.split("."):r,0),l?s:s[0]}const Ck={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Mk={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(i,r)=>i.score===r.score?i.idx<r.idx?-1:1:i.score<r.score?-1:1},_k={location:0,threshold:.6,distance:100},Ek={useExtendedSearch:!1,useTokenSearch:!1,getFn:Ak,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},ge=Object.freeze({...Mk,...Ck,..._k,...Ek}),Dk=/[^ ]+/g;function Nk(i=1,r=3){const s=new Map,l=Math.pow(10,r);return{get(u){const h=u.match(Dk).length;if(s.has(h))return s.get(h);const f=1/Math.pow(h,.5*i),m=parseFloat(Math.round(f*l)/l);return s.set(h,m),m},clear(){s.clear()}}}class Ad{constructor({getFn:r=ge.getFn,fieldNormWeight:s=ge.fieldNormWeight}={}){this.norm=Nk(s,3),this.getFn=r,this.isCreated=!1,this.docs=[],this.keys=[],this._keysMap={},this.setIndexRecords()}setSources(r=[]){this.docs=r}setIndexRecords(r=[]){this.records=r}setKeys(r=[]){this.keys=r,this._keysMap={},r.forEach((s,l)=>{this._keysMap[s.id]=l})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,wt(this.docs[0])?this.docs.forEach((r,s)=>{this._addString(r,s)}):this.docs.forEach((r,s)=>{this._addObject(r,s)}),this.norm.clear())}add(r){const s=this.size();wt(r)?this._addString(r,s):this._addObject(r,s)}removeAt(r){this.records.splice(r,1);for(let s=r,l=this.size();s<l;s+=1)this.records[s].i-=1}removeAll(r){for(let s=r.length-1;s>=0;s-=1)this.records.splice(r[s],1);for(let s=0,l=this.records.length;s<l;s+=1)this.records[s].i=s}getValueForItemAtKeyId(r,s){return r[this._keysMap[s]]}size(){return this.records.length}_addString(r,s){if(!_t(r)||Ts(r))return;const l={v:r,i:s,n:this.norm.get(r)};this.records.push(l)}_addObject(r,s){const l={i:s,$:{}};this.keys.forEach((u,h)=>{const f=u.getFn?u.getFn(r):this.getFn(r,u.path);if(_t(f)){if(yo(f)){const m=[];for(let g=0,p=f.length;g<p;g+=1){const v=f[g];if(_t(v)){if(wt(v)){if(!Ts(v)){const x={v,i:g,n:this.norm.get(v)};m.push(x)}}else if(_t(v.v)){const x=wt(v.v)?v.v:Xu(v.v);if(!Ts(x)){const b={v:x,i:v.i,n:this.norm.get(x)};m.push(b)}}}}l.$[h]=m}else if(wt(f)&&!Ts(f)){const m={v:f,n:this.norm.get(f)};l.$[h]=m}}}),this.records.push(l)}toJSON(){return{keys:this.keys.map(({getFn:r,...s})=>s),records:this.records}}}function Mv(i,r,{getFn:s=ge.getFn,fieldNormWeight:l=ge.fieldNormWeight}={}){const u=new Ad({getFn:s,fieldNormWeight:l});return u.setKeys(i.map(Cv)),u.setSources(r),u.create(),u}function Pk(i,{getFn:r=ge.getFn,fieldNormWeight:s=ge.fieldNormWeight}={}){const{keys:l,records:u}=i,h=new Ad({getFn:r,fieldNormWeight:s});return h.setKeys(l),h.setIndexRecords(u),h}function Ok(i=[],r=ge.minMatchCharLength){const s=[];let l=-1,u=-1,h=0;for(let f=i.length;h<f;h+=1){const m=i[h];m&&l===-1?l=h:!m&&l!==-1&&(u=h-1,u-l+1>=r&&s.push([l,u]),l=-1)}return i[h-1]&&h-l>=r&&s.push([l,h-1]),s}const Uo=32;function Ik(i,r,s,{location:l=ge.location,distance:u=ge.distance,threshold:h=ge.threshold,findAllMatches:f=ge.findAllMatches,minMatchCharLength:m=ge.minMatchCharLength,includeMatches:g=ge.includeMatches,ignoreLocation:p=ge.ignoreLocation}={}){if(r.length>Uo)throw new Error(Sk(Uo));const v=r.length,x=i.length,b=Math.max(0,Math.min(l,x));let j=h,S=b;const k=(P,H)=>{const W=P/v;if(p)return W;const Z=Math.abs(b-H);return u?W+Z/u:Z?1:W},A=m>1||g,N=A?Array(x):[];let R;for(;(R=i.indexOf(r,S))>-1;){const P=k(0,R);if(j=Math.min(P,j),S=R+v,A){let H=0;for(;H<v;)N[R+H]=1,H+=1}}S=-1;let T=[],M=1,V=v+x;const F=1<<v-1;for(let P=0;P<v;P+=1){let H=0,W=V;for(;H<W;)k(P,b+W)<=j?H=W:V=W,W=Math.floor((V-H)/2+H);V=W;let Z=Math.max(1,b-W+1);const oe=f?x:Math.min(b+W,x)+v,he=Array(oe+2);he[oe+1]=(1<<P)-1;for(let ue=oe;ue>=Z;ue-=1){const z=ue-1,Q=s[i[z]];if(A&&(N[z]=+!!Q),he[ue]=(he[ue+1]<<1|1)&Q,P&&(he[ue]|=(T[ue+1]|T[ue])<<1|1|T[ue+1]),he[ue]&F&&(M=k(P,z),M<=j)){if(j=M,S=z,S<=b)break;Z=Math.max(1,2*b-S)}}if(k(P+1,b)>j)break;T=he}const I={isMatch:S>=0,score:Math.max(.001,M)};if(A){const P=Ok(N,m);P.length?g&&(I.indices=P):I.isMatch=!1}return I}function zk(i){const r={};for(let s=0,l=i.length;s<l;s+=1){const u=i.charAt(s);r[u]=(r[u]||0)|1<<l-s-1}return r}function Cd(i){if(i.length<=1)return i;i.sort((s,l)=>s[0]-l[0]||s[1]-l[1]);const r=[i[0]];for(let s=1,l=i.length;s<l;s+=1){const u=r[r.length-1],h=i[s];h[0]<=u[1]+1?u[1]=Math.max(u[1],h[1]):r.push(h)}return r}const _v={ł:"l",Ł:"L",đ:"d",Đ:"D",ø:"o",Ø:"O",ħ:"h",Ħ:"H",ŧ:"t",Ŧ:"T",ı:"i",ß:"ss"},Lk=new RegExp("["+Object.keys(_v).join("")+"]","g"),Qa=String.prototype.normalize?i=>i.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"").replace(Lk,r=>_v[r]):i=>i;class Md{constructor(r,{location:s=ge.location,threshold:l=ge.threshold,distance:u=ge.distance,includeMatches:h=ge.includeMatches,findAllMatches:f=ge.findAllMatches,minMatchCharLength:m=ge.minMatchCharLength,isCaseSensitive:g=ge.isCaseSensitive,ignoreDiacritics:p=ge.ignoreDiacritics,ignoreLocation:v=ge.ignoreLocation}={}){if(this.options={location:s,threshold:l,distance:u,includeMatches:h,findAllMatches:f,minMatchCharLength:m,isCaseSensitive:g,ignoreDiacritics:p,ignoreLocation:v},r=g?r:r.toLowerCase(),r=p?Qa(r):r,this.pattern=r,this.chunks=[],!this.pattern.length)return;const x=(j,S)=>{this.chunks.push({pattern:j,alphabet:zk(j),startIndex:S})},b=this.pattern.length;if(b>Uo){let j=0;const S=b%Uo,k=b-S;for(;j<k;)x(this.pattern.substr(j,Uo),j),j+=Uo;if(S){const A=b-Uo;x(this.pattern.substr(A),A)}}else x(this.pattern,0)}searchIn(r){const{isCaseSensitive:s,ignoreDiacritics:l,includeMatches:u}=this.options;if(r=s?r:r.toLowerCase(),r=l?Qa(r):r,this.pattern===r){const k={isMatch:!0,score:0};return u&&(k.indices=[[0,r.length-1]]),k}const{location:h,distance:f,threshold:m,findAllMatches:g,minMatchCharLength:p,ignoreLocation:v}=this.options,x=[];let b=0,j=!1;this.chunks.forEach(({pattern:k,alphabet:A,startIndex:N})=>{const{isMatch:R,score:T,indices:M}=Ik(r,k,A,{location:h+N,distance:f,threshold:m,findAllMatches:g,minMatchCharLength:p,includeMatches:u,ignoreLocation:v});R&&(j=!0),b+=T,R&&M&&x.push(...M)});const S={isMatch:j,score:j?b/this.chunks.length:1};return j&&u&&(S.indices=Cd(x)),S}}class vo{constructor(r){this.pattern=r}static isMultiMatch(r){return Ng(r,this.multiRegex)}static isSingleMatch(r){return Ng(r,this.singleRegex)}search(r){return{isMatch:!1,score:1}}}function Ng(i,r){const s=i.match(r);return s?s[1]:null}class Bk extends vo{constructor(r){super(r)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(r){const s=r===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Fk extends vo{constructor(r){super(r)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(r){const l=r.indexOf(this.pattern)===-1;return{isMatch:l,score:l?0:1,indices:[0,r.length-1]}}}class Uk extends vo{constructor(r){super(r)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(r){const s=r.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Hk extends vo{constructor(r){super(r)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(r){const s=!r.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,r.length-1]}}}class Vk extends vo{constructor(r){super(r)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(r){const s=r.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[r.length-this.pattern.length,r.length-1]}}}class Gk extends vo{constructor(r){super(r)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(r){const s=!r.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,r.length-1]}}}class Ev extends vo{constructor(r,{location:s=ge.location,threshold:l=ge.threshold,distance:u=ge.distance,includeMatches:h=ge.includeMatches,findAllMatches:f=ge.findAllMatches,minMatchCharLength:m=ge.minMatchCharLength,isCaseSensitive:g=ge.isCaseSensitive,ignoreDiacritics:p=ge.ignoreDiacritics,ignoreLocation:v=ge.ignoreLocation}={}){super(r),this._bitapSearch=new Md(r,{location:s,threshold:l,distance:u,includeMatches:h,findAllMatches:f,minMatchCharLength:m,isCaseSensitive:g,ignoreDiacritics:p,ignoreLocation:v})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(r){return this._bitapSearch.searchIn(r)}}class Dv extends vo{constructor(r){super(r)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(r){let s=0,l;const u=[],h=this.pattern.length;for(;(l=r.indexOf(this.pattern,s))>-1;)s=l+h,u.push([l,s-1]);const f=!!u.length;return{isMatch:f,score:f?0:1,indices:u}}}const Zu=[Bk,Dv,Uk,Hk,Gk,Vk,Fk,Ev],Pg=Zu.length,qk="\0",Yk="|";function Kk(i){const r=[],s=i.length;let l=0;for(;l<s;){for(;l<s&&i[l]===" ";)l++;if(l>=s)break;let u=l;for(;u<s&&i[u]!==" "&&i[u]!=='"';)u++;if(u<s&&i[u]==='"'){for(u++;u<s;){if(i[u]==='"'){const h=u+1;if(h>=s||i[h]===" "){u++;break}if(i[h]==="$"&&(h+1>=s||i[h+1]===" ")){u+=2;break}}u++}r.push(i.substring(l,u)),l=u}else{for(;u<s&&i[u]!==" ";)u++;r.push(i.substring(l,u)),l=u}}return r}function Xk(i,r={}){return i.replace(/\\\|/g,qk).split(Yk).map(l=>{const u=l.replace(/\u0000/g,"|"),h=Kk(u.trim()).filter(m=>m&&!!m.trim()),f=[];for(let m=0,g=h.length;m<g;m+=1){const p=h[m];let v=!1,x=-1;for(;!v&&++x<Pg;){const b=Zu[x],j=b.isMultiMatch(p);j&&(f.push(new b(j,r)),v=!0)}if(!v)for(x=-1;++x<Pg;){const b=Zu[x],j=b.isSingleMatch(p);if(j){f.push(new b(j,r));break}}}return f})}const Qk=new Set([Ev.type,Dv.type]);class Zk{constructor(r,{isCaseSensitive:s=ge.isCaseSensitive,ignoreDiacritics:l=ge.ignoreDiacritics,includeMatches:u=ge.includeMatches,minMatchCharLength:h=ge.minMatchCharLength,ignoreLocation:f=ge.ignoreLocation,findAllMatches:m=ge.findAllMatches,location:g=ge.location,threshold:p=ge.threshold,distance:v=ge.distance}={}){this.query=null,this.options={isCaseSensitive:s,ignoreDiacritics:l,includeMatches:u,minMatchCharLength:h,findAllMatches:m,ignoreLocation:f,location:g,threshold:p,distance:v},r=s?r:r.toLowerCase(),r=l?Qa(r):r,this.pattern=r,this.query=Xk(this.pattern,this.options)}static condition(r,s){return s.useExtendedSearch}searchIn(r){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:l,isCaseSensitive:u,ignoreDiacritics:h}=this.options;r=u?r:r.toLowerCase(),r=h?Qa(r):r;let f=0;const m=[];let g=0,p=!1;for(let v=0,x=s.length;v<x;v+=1){const b=s[v];m.length=0,f=0,p=!1;for(let j=0,S=b.length;j<S;j+=1){const k=b[j],{isMatch:A,indices:N,score:R}=k.search(r);if(A){f+=1,g+=R;const T=k.constructor.type;T.startsWith("inverse")&&(p=!0),l&&(Qk.has(T)?m.push(...N):m.push(N))}else{g=0,f=0,m.length=0,p=!1;break}}if(f){const j={isMatch:!0,score:g/f};return p&&(j.hasInverse=!0),l&&(j.indices=Cd(m)),j}}return{isMatch:!1,score:1}}}const Wu=[];function _d(...i){Wu.push(...i)}function Bs(i,r){for(let s=0,l=Wu.length;s<l;s+=1){const u=Wu[s];if(u.condition(i,r))return new u(i,r)}return new Md(i,r)}const Fs={AND:"$and",OR:"$or"},$u={PATH:"$path",PATTERN:"$val"},Ju=i=>!!(i[Fs.AND]||i[Fs.OR]),Wk=i=>!!i[$u.PATH],$k=i=>!yo(i)&&Rv(i)&&!Ju(i),Og=i=>({[Fs.AND]:Object.keys(i).map(r=>({[r]:i[r]}))});function Nv(i,r,{auto:s=!0}={}){const l=u=>{if(wt(u)){const g={keyId:null,pattern:u};return s&&(g.searcher=Bs(u,r)),g}const h=Object.keys(u),f=Wk(u);if(!f&&h.length>1&&!Ju(u))return l(Og(u));if($k(u)){const g=f?u[$u.PATH]:h[0],p=f?u[$u.PATTERN]:u[g];if(!wt(p))throw new Error(wk(g));const v={keyId:Qu(g),pattern:p};return s&&(v.searcher=Bs(p,r)),v}const m={children:[],operator:h[0]};return h.forEach(g=>{const p=u[g];yo(p)&&p.forEach(v=>{m.children.push(l(v))})}),m};return Ju(i)||(i=Og(i)),l(i)}function ed(i,{ignoreFieldNorm:r=ge.ignoreFieldNorm}){let s=1;return i.forEach(({key:l,norm:u,score:h})=>{const f=l?l.weight:null;s*=Math.pow(h===0&&f?Number.EPSILON:h,(f||1)*(r?1:u))}),s}function Jk(i,{ignoreFieldNorm:r=ge.ignoreFieldNorm}){i.forEach(s=>{s.score=ed(s.matches,{ignoreFieldNorm:r})})}class eR{constructor(r){this.limit=r,this.heap=[]}get size(){return this.heap.length}shouldInsert(r){return this.size<this.limit||r<this.heap[0].score}insert(r){this.size<this.limit?(this.heap.push(r),this._bubbleUp(this.size-1)):r.score<this.heap[0].score&&(this.heap[0]=r,this._sinkDown(0))}extractSorted(r){return this.heap.sort(r)}_bubbleUp(r){const s=this.heap;for(;r>0;){const l=r-1>>1;if(s[r].score<=s[l].score)break;const u=s[r];s[r]=s[l],s[l]=u,r=l}}_sinkDown(r){const s=this.heap,l=s.length;let u=r;do{r=u;const h=2*r+1,f=2*r+2;if(h<l&&s[h].score>s[u].score&&(u=h),f<l&&s[f].score>s[u].score&&(u=f),u!==r){const m=s[r];s[r]=s[u],s[u]=m}}while(u!==r)}}function tR(i,r){const s=i.matches;r.matches=[],_t(s)&&s.forEach(l=>{if(!_t(l.indices)||!l.indices.length)return;const{indices:u,value:h}=l,f={indices:u,value:h};l.key&&(f.key=l.key.src),l.idx>-1&&(f.refIndex=l.idx),r.matches.push(f)})}function nR(i,r){r.score=i.score}function oR(i,r,{includeMatches:s=ge.includeMatches,includeScore:l=ge.includeScore}={}){const u=[];return s&&u.push(tR),l&&u.push(nR),i.map(h=>{const{idx:f}=h,m={item:r[f],refIndex:f};return u.length&&u.forEach(g=>{g(h,m)}),m})}const iR=/\b\w+\b/g;function td({isCaseSensitive:i=!1,ignoreDiacritics:r=!1}={}){return{tokenize(s){return i||(s=s.toLowerCase()),r&&(s=Qa(s)),s.match(iR)||[]}}}function aR(i,r,s){const l=new Map,u=new Map;let h=0;function f(m,g,p,v){const x=s.tokenize(m);if(!x.length)return;h++;const b=new Map;for(const j of x)b.set(j,(b.get(j)||0)+1);for(const[j,S]of b){const k={docIdx:g,keyIdx:p,subIdx:v,tf:S};let A=l.get(j);A||(A=[],l.set(j,A)),A.push(k),u.set(j,(u.get(j)||0)+1)}}for(const m of i){const{i:g,v:p,$:v}=m;if(p!==void 0){f(p,g,-1,-1);continue}if(v)for(let x=0;x<r;x++){const b=v[x];if(b)if(Array.isArray(b))for(const j of b)f(j.v,g,x,j.i??-1);else f(b.v,g,x,-1)}}return{terms:l,fieldCount:h,df:u}}function rR(i,r,s,l){const{i:u,v:h,$:f}=r;function m(g,p,v){const x=l.tokenize(g);if(!x.length)return;i.fieldCount++;const b=new Map;for(const j of x)b.set(j,(b.get(j)||0)+1);for(const[j,S]of b){const k={docIdx:u,keyIdx:p,subIdx:v,tf:S};let A=i.terms.get(j);A||(A=[],i.terms.set(j,A)),A.push(k),i.df.set(j,(i.df.get(j)||0)+1)}}if(h!==void 0){m(h,-1,-1);return}if(f)for(let g=0;g<s;g++){const p=f[g];if(p)if(Array.isArray(p))for(const v of p)m(v.v,g,v.i??-1);else m(p.v,g,-1)}}function Ig(i,r){for(const[s,l]of i.terms){const u=l.filter(f=>f.docIdx!==r),h=l.length-u.length;h>0&&(i.fieldCount-=h,i.df.set(s,(i.df.get(s)||0)-h),u.length===0?(i.terms.delete(s),i.df.delete(s)):i.terms.set(s,u))}}class xo{constructor(r,s,l){this.options={...ge,...s},this.options.useExtendedSearch,this.options.useTokenSearch,this._keyStore=new Rk(this.options.keys),this._docs=r,this._myIndex=null,this._invertedIndex=null,this.setCollection(r,l),this._lastQuery=null,this._lastSearcher=null}_getSearcher(r){if(this._lastQuery===r)return this._lastSearcher;const s=this._invertedIndex?{...this.options,_invertedIndex:this._invertedIndex}:this.options,l=Bs(r,s);return this._lastQuery=r,this._lastSearcher=l,l}setCollection(r,s){if(this._docs=r,s&&!(s instanceof Ad))throw new Error(jk);if(this._myIndex=s||Mv(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight}),this.options.useTokenSearch){const l=td({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics});this._invertedIndex=aR(this._myIndex.records,this._myIndex.keys.length,l)}}add(r){if(_t(r)&&(this._docs.push(r),this._myIndex.add(r),this._invertedIndex)){const s=this._myIndex.records[this._myIndex.records.length-1],l=td({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics});rR(this._invertedIndex,s,this._myIndex.keys.length,l)}}remove(r=()=>!1){const s=[],l=[];for(let u=0,h=this._docs.length;u<h;u+=1)r(this._docs[u],u)&&(s.push(this._docs[u]),l.push(u));if(l.length){if(this._invertedIndex)for(const u of l)Ig(this._invertedIndex,u);for(let u=l.length-1;u>=0;u-=1)this._docs.splice(l[u],1);this._myIndex.removeAll(l)}return s}removeAt(r){this._invertedIndex&&Ig(this._invertedIndex,r);const s=this._docs.splice(r,1)[0];return this._myIndex.removeAt(r),s}getIndex(){return this._myIndex}search(r,s){const{limit:l=-1}=s||{},{includeMatches:u,includeScore:h,shouldSort:f,sortFn:m,ignoreFieldNorm:g}=this.options;if(wt(r)&&!r.trim()){let x=this._docs.map((b,j)=>({item:b,refIndex:j}));return _s(l)&&l>-1&&(x=x.slice(0,l)),x}const p=_s(l)&&l>0&&wt(r);let v;if(p){const x=new eR(l);wt(this._docs[0])?this._searchStringList(r,{heap:x,ignoreFieldNorm:g}):this._searchObjectList(r,{heap:x,ignoreFieldNorm:g}),v=x.extractSorted(m)}else v=wt(r)?wt(this._docs[0])?this._searchStringList(r):this._searchObjectList(r):this._searchLogical(r),Jk(v,{ignoreFieldNorm:g}),f&&v.sort(m),_s(l)&&l>-1&&(v=v.slice(0,l));return oR(v,this._docs,{includeMatches:u,includeScore:h})}_searchStringList(r,{heap:s,ignoreFieldNorm:l}={}){const u=this._getSearcher(r),{records:h}=this._myIndex,f=s?null:[];return h.forEach(({v:m,i:g,n:p})=>{if(!_t(m))return;const{isMatch:v,score:x,indices:b}=u.searchIn(m);if(v){const j={item:m,idx:g,matches:[{score:x,value:m,norm:p,indices:b}]};s?(j.score=ed(j.matches,{ignoreFieldNorm:l}),s.shouldInsert(j.score)&&s.insert(j)):f.push(j)}}),f}_searchLogical(r){const s=Nv(r,this.options),l=(m,g,p)=>{if(!("children"in m)){const{keyId:j,searcher:S}=m;let k;return j===null?(k=[],this._myIndex.keys.forEach((A,N)=>{k.push(...this._findMatches({key:A,value:g[N],searcher:S}))})):k=this._findMatches({key:this._keyStore.get(j),value:this._myIndex.getValueForItemAtKeyId(g,j),searcher:S}),k&&k.length?[{idx:p,item:g,matches:k}]:[]}const{children:v,operator:x}=m,b=[];for(let j=0,S=v.length;j<S;j+=1){const k=v[j],A=l(k,g,p);if(A.length)b.push(...A);else if(x===Fs.AND)return[]}return b},u=this._myIndex.records,h=new Map,f=[];return u.forEach(({$:m,i:g})=>{if(_t(m)){const p=l(s,m,g);p.length&&(h.has(g)||(h.set(g,{idx:g,item:m,matches:[]}),f.push(h.get(g))),p.forEach(({matches:v})=>{h.get(g).matches.push(...v)}))}}),f}_searchObjectList(r,{heap:s,ignoreFieldNorm:l}={}){const u=this._getSearcher(r),{keys:h,records:f}=this._myIndex,m=s?null:[];return f.forEach(({$:g,i:p})=>{if(!_t(g))return;const v=[];let x=!1,b=!1;if(h.forEach((j,S)=>{const k=this._findMatches({key:j,value:g[S],searcher:u});k.length?(v.push(...k),k[0].hasInverse&&(b=!0)):x=!0}),!(b&&x)&&v.length){const j={idx:p,item:g,matches:v};s?(j.score=ed(j.matches,{ignoreFieldNorm:l}),s.shouldInsert(j.score)&&s.insert(j)):m.push(j)}}),m}_findMatches({key:r,value:s,searcher:l}){if(!_t(s))return[];const u=[];if(yo(s))s.forEach(({v:h,i:f,n:m})=>{if(!_t(h))return;const{isMatch:g,score:p,indices:v,hasInverse:x}=l.searchIn(h);g&&u.push({score:p,key:r,value:h,idx:f,norm:m,indices:v,hasInverse:x})});else{const{v:h,n:f}=s,{isMatch:m,score:g,indices:p,hasInverse:v}=l.searchIn(h);m&&u.push({score:g,key:r,value:h,norm:f,indices:p,hasInverse:v})}return u}}class sR{static condition(r,s){return s.useTokenSearch}constructor(r,s){this.options=s,this.analyzer=td({isCaseSensitive:s.isCaseSensitive,ignoreDiacritics:s.ignoreDiacritics});const l=this.analyzer.tokenize(r),u=s._invertedIndex,{df:h,fieldCount:f}=u;this.termSearchers=[],this.idfWeights=[];for(const m of l){this.termSearchers.push(new Md(m,{location:s.location,threshold:s.threshold,distance:s.distance,includeMatches:s.includeMatches,findAllMatches:s.findAllMatches,minMatchCharLength:s.minMatchCharLength,isCaseSensitive:s.isCaseSensitive,ignoreDiacritics:s.ignoreDiacritics,ignoreLocation:!0}));const g=h.get(m)||0,p=Math.log(1+(f-g+.5)/(g+.5));this.idfWeights.push(p)}}searchIn(r){if(!this.termSearchers.length)return{isMatch:!1,score:1};const s=[];let l=0,u=0,h=0;for(let g=0;g<this.termSearchers.length;g++){const p=this.termSearchers[g].searchIn(r),v=this.idfWeights[g];u+=v,p.isMatch&&(h++,l+=v*(1-p.score),p.indices&&s.push(...p.indices))}if(h===0)return{isMatch:!1,score:1};const f=u>0?1-l/u:0,m={isMatch:!0,score:Math.max(.001,f)};return this.options.includeMatches&&s.length&&(m.indices=Cd(s)),m}}xo.version="7.3.0";xo.createIndex=Mv;xo.parseIndex=Pk;xo.config=ge;xo.match=function(i,r,s){return Bs(i,{...ge,...s}).searchIn(r)};xo.parseQuery=Nv;_d(Zk);_d(sR);xo.use=function(...i){i.forEach(r=>_d(r))};function zg(i,r,s){const l=Math.max(0,r),u=Math.min(i.length,s),h=i.slice(l,u).trim();return`${l>0?"…":""}${h}${u<i.length?"…":""}`}function Lg(i,r){const s=r?.find(h=>h.key==="content"&&h.indices.length>0);if(!s)return zg(i,0,140);const[l,u]=s.indices[0];return zg(i,l-60,u+90)}function lR(i,r){const s=new Map(Rd.map(u=>[u.to,{codeSnippetCount:u.codeSnippetCount,headingCount:u.headings.length}])),l=new Map;for(const u of i){const h=s.get(u.to)??{codeSnippetCount:0,headingCount:0},f=l.get(u.to)??{codeSnippetCount:h.codeSnippetCount,headingCount:h.headingCount,items:[],pagePreview:void 0,pageScore:Number.POSITIVE_INFINITY,score:u.score,section:u.section,title:u.title,to:u.to};f.score=Math.min(f.score,u.score),u.heading?f.items.some(m=>m.id===u.id)||f.items.push(u):(!f.pagePreview||u.score<f.pageScore)&&(f.pagePreview=u.preview,f.pageScore=u.score),l.set(u.to,f)}return[...l.values()].sort((u,h)=>u.score-h.score).slice(0,r?6:8).map(u=>({...u,items:u.items.sort((h,f)=>h.score-f.score).slice(0,r?4:2)}))}function Bg(){qt("DocSearch:render");const[i,r]=_.useState(!1),[s,l]=_.useState(""),u=_.useRef(null),h=_.useMemo(()=>(qt("DocSearch:fuse-build-start"),new xo(yk,{keys:[{name:"title",weight:.35},{name:"heading",weight:.3},{name:"section",weight:.1},{name:"content",weight:.25}],threshold:.34,ignoreLocation:!0,minMatchCharLength:2,includeMatches:!0,includeScore:!0})),[]),f=s.trim(),m=_.useMemo(()=>f?h.search(f).slice(0,24).map(p=>({...p.item,preview:Lg(p.item.content,p.matches),score:p.score??0})):Rd.slice(0,8).map(p=>({content:p.content,id:`${p.to}#page`,preview:Lg(p.content),score:0,section:p.section,title:p.title,to:p.to})),[h,f]),g=_.useMemo(()=>lR(m,!!f),[f,m]);return _.useEffect(()=>{const p=v=>{(v.metaKey||v.ctrlKey)&&v.key==="k"&&(v.preventDefault(),r(!0)),v.key==="Escape"&&r(!1)};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[]),_.useEffect(()=>{i&&setTimeout(()=>u.current?.focus(),50)},[i]),o.jsxs(o.Fragment,{children:[o.jsxs("button",{onClick:()=>r(!0),className:"inline-flex h-10 w-full max-w-sm items-center gap-3 rounded-xl border border-border/80 bg-background/90 px-3.5 text-sm text-muted-foreground shadow-sm transition hover:border-border hover:bg-background hover:text-foreground",children:[o.jsx(bg,{className:"h-4 w-4 shrink-0"}),o.jsx("span",{className:"flex-1 text-left",children:"Search documentation..."}),o.jsx("kbd",{className:"hidden rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground sm:inline",children:"⌘ K"})]}),i&&qt("DocSearch:overlay-open"),i&&o.jsx("div",{className:"fixed inset-0 z-50 flex items-start justify-center bg-slate-950/22 px-4 pt-18 backdrop-blur-[3px] sm:pt-24",onClick:()=>r(!1),children:o.jsxs("div",{onClick:p=>p.stopPropagation(),className:"w-full max-w-3xl overflow-hidden rounded-[1.35rem] border border-border/80 bg-background/95 shadow-[0_30px_90px_-38px_rgba(15,23,42,0.55)]",children:[o.jsxs("div",{className:"flex items-center gap-3 border-b border-border/70 px-4 py-3.5 sm:px-5",children:[o.jsx(bg,{className:"h-4 w-4 shrink-0 text-muted-foreground"}),o.jsx("input",{ref:u,value:s,onChange:p=>l(p.target.value),placeholder:"Search the docs...",className:"flex-1 bg-transparent text-[15px] text-foreground outline-none placeholder:text-muted-foreground"}),o.jsx("button",{onClick:()=>r(!1),className:"rounded-md p-1 text-muted-foreground transition hover:bg-accent/70 hover:text-foreground","aria-label":"Close search",children:o.jsx(by,{className:"h-4 w-4"})})]}),o.jsx("div",{className:"border-b border-border/60 px-4 py-2 text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase sm:px-5",children:f?"Search Results":"Browse Docs"}),o.jsx("div",{className:"max-h-[34rem] overflow-y-auto px-2 py-2 sm:px-3",children:g.length===0?o.jsxs("div",{className:"px-4 py-10 text-center text-sm text-muted-foreground",children:['No results for "',f,'"']}):o.jsx("div",{className:"divide-y divide-border/60",children:g.map(p=>o.jsxs("section",{className:"px-2 py-2.5",children:[o.jsx(ce,{to:p.to,onClick:()=>r(!1),className:"group block rounded-2xl px-3 py-3 transition hover:bg-accent/45",children:o.jsxs("div",{className:"flex items-start gap-3",children:[o.jsx("div",{className:"mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground",children:o.jsx(Kw,{className:"h-4 w-4"})}),o.jsxs("div",{className:"min-w-0 flex-1",children:[o.jsx("div",{className:"truncate text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase",children:p.section}),o.jsx("div",{className:"mt-1 truncate text-[15px] font-semibold text-foreground",children:p.title}),o.jsxs("div",{className:"mt-2 flex flex-wrap gap-2",children:[p.headingCount>0&&o.jsx(Fg,{label:"Main Topics"}),p.codeSnippetCount>0&&o.jsx(Fg,{label:"Code Snippets"})]})]}),o.jsx(Ow,{className:"mt-1 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-foreground"})]})}),p.items.length>0&&o.jsxs("div",{className:"mt-1 space-y-1 pl-12",children:[o.jsx("div",{className:"px-3 pt-1 text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase",children:"Main Topics"}),p.items.map(v=>o.jsxs(ce,{to:v.to,hash:v.anchor?()=>v.anchor:void 0,onClick:()=>r(!1),className:"group flex gap-3 rounded-xl px-3 py-2.5 transition hover:bg-accent/35",children:[o.jsx("div",{className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-muted/70 text-muted-foreground transition group-hover:bg-background",children:v.headingLevel===3?o.jsx(qw,{className:"h-3.5 w-3.5"}):o.jsx(Ww,{className:"h-3.5 w-3.5"})}),o.jsxs("div",{className:"min-w-0 flex-1",children:[o.jsx("div",{className:"truncate text-sm font-medium text-foreground",children:v.heading}),o.jsx("p",{className:"mt-1 text-[13px] leading-5 text-muted-foreground",style:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,overflow:"hidden"},children:v.preview})]})]},v.id))]})]},p.to))})})]})})]})}function Fg({label:i}){return o.jsx("span",{className:"rounded-full border border-border/70 bg-muted/60 px-2.5 py-1 text-[11px] font-medium tracking-[0.08em] text-muted-foreground uppercase",children:i})}var Zs="Collapsible",[cR]=$a(Zs),[uR,Ed]=cR(Zs),Pv=_.forwardRef((i,r)=>{const{__scopeCollapsible:s,open:l,defaultOpen:u,disabled:h,onOpenChange:f,...m}=i,[g,p]=Ks({prop:l,defaultProp:u??!1,onChange:f,caller:Zs});return o.jsx(uR,{scope:s,disabled:h,contentId:Sd(),open:g,onOpenToggle:_.useCallback(()=>p(v=>!v),[p]),children:o.jsx(Nt.div,{"data-state":Nd(g),"data-disabled":h?"":void 0,...m,ref:r})})});Pv.displayName=Zs;var Ov="CollapsibleTrigger",Iv=_.forwardRef((i,r)=>{const{__scopeCollapsible:s,...l}=i,u=Ed(Ov,s);return o.jsx(Nt.button,{type:"button","aria-controls":u.contentId,"aria-expanded":u.open||!1,"data-state":Nd(u.open),"data-disabled":u.disabled?"":void 0,disabled:u.disabled,...l,ref:r,onClick:yt(i.onClick,u.onOpenToggle)})});Iv.displayName=Ov;var Dd="CollapsibleContent",zv=_.forwardRef((i,r)=>{const{forceMount:s,...l}=i,u=Ed(Dd,i.__scopeCollapsible);return o.jsx(Td,{present:s||u.open,children:({present:h})=>o.jsx(dR,{...l,ref:r,present:h})})});zv.displayName=Dd;var dR=_.forwardRef((i,r)=>{const{__scopeCollapsible:s,present:l,children:u,...h}=i,f=Ed(Dd,s),[m,g]=_.useState(l),p=_.useRef(null),v=ln(r,p),x=_.useRef(0),b=x.current,j=_.useRef(0),S=j.current,k=f.open||m,A=_.useRef(k),N=_.useRef(void 0);return _.useEffect(()=>{const R=requestAnimationFrame(()=>A.current=!1);return()=>cancelAnimationFrame(R)},[]),Fi(()=>{const R=p.current;if(R){N.current=N.current||{transitionDuration:R.style.transitionDuration,animationName:R.style.animationName},R.style.transitionDuration="0s",R.style.animationName="none";const T=R.getBoundingClientRect();x.current=T.height,j.current=T.width,A.current||(R.style.transitionDuration=N.current.transitionDuration,R.style.animationName=N.current.animationName),g(l)}},[f.open,l]),o.jsx(Nt.div,{"data-state":Nd(f.open),"data-disabled":f.disabled?"":void 0,id:f.contentId,hidden:!k,...h,ref:v,style:{"--radix-collapsible-content-height":b?`${b}px`:void 0,"--radix-collapsible-content-width":S?`${S}px`:void 0,...i.style},children:k&&u})});function Nd(i){return i?"open":"closed"}var hR=Pv;const fR=hR,mR=Iv,pR=zv;function gR(){const i=mw(),[r,s]=_.useState(!1),l=Ii.findIndex(m=>m.to===i.pathname),u=l>0?Ii[l-1]:null,h=l>=0&&l<Ii.length-1?Ii[l+1]:null,f=Ii[l];return _.useEffect(()=>{const m=document.querySelectorAll(".prose-docs h2, .prose-docs h3"),g=new Map;for(const p of m){const v=p.textContent?.trim();if(!v)continue;const x=kv(v)||"section",b=g.get(x)??0;g.set(x,b+1),p.id=b===0?x:`${x}-${b+1}`}},[i.pathname]),o.jsxs("div",{className:"min-h-screen bg-background",children:[o.jsx("header",{className:"sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur",children:o.jsxs("div",{className:"mx-auto flex h-14 max-w-[1400px] items-center gap-4 px-4 lg:px-6",children:[o.jsx("button",{className:"lg:hidden",onClick:()=>s(m=>!m),"aria-label":"Toggle menu",children:r?o.jsx(by,{className:"h-5 w-5"}):o.jsx(Jw,{className:"h-5 w-5"})}),o.jsxs(ce,{to:"/",className:"flex items-center gap-2",children:[o.jsx("img",{src:wv,alt:"PID Pilot",className:"h-8 w-8"}),o.jsx("span",{className:"font-display text-lg font-semibold tracking-tight",children:"PID Pilot"}),o.jsx("span",{className:"hidden rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline",children:"docs"})]}),o.jsx("div",{className:"flex-1"}),o.jsxs("nav",{className:"hidden items-center gap-4 sm:flex",children:[o.jsx(ce,{to:"/guide",className:sn("text-sm font-medium transition",i.pathname.startsWith("/guide")?"text-foreground":"text-muted-foreground hover:text-foreground"),children:"Docs"}),o.jsx(ce,{to:"/tuner",className:"text-sm font-medium text-muted-foreground transition hover:text-foreground",children:"Tuner"})]}),o.jsx("div",{className:"hidden md:block",children:o.jsx(Bg,{})}),o.jsx(bd,{className:"h-9 w-9"})]})}),o.jsxs("div",{className:"mx-auto flex max-w-[1400px] gap-4 px-4 sm:gap-6 lg:px-6 xl:gap-8",children:[o.jsxs("aside",{className:`${r?"block":"hidden"} fixed inset-x-0 top-14 z-30 max-h-[calc(100vh-3.5rem)] overflow-y-auto border-b border-border bg-sidebar px-4 py-3 shadow-sm lg:sticky lg:top-14 lg:block lg:max-h-[calc(100vh-3.5rem)] lg:w-64 lg:flex-shrink-0 lg:border-0 lg:bg-transparent lg:px-0 lg:py-6 lg:shadow-none`,children:[o.jsx("div",{className:"mb-4 lg:hidden",children:o.jsx(Bg,{})}),o.jsx("nav",{className:"space-y-4 pb-8 lg:space-y-5 lg:pb-12",children:Tv.map(m=>o.jsxs("div",{children:[o.jsx("h4",{className:"mb-2 px-2 font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground",children:m.title}),o.jsx("ul",{className:"space-y-0.5",children:m.links.map(g=>Sv(g)?o.jsx(yR,{title:g.title,links:g.links,pathname:i.pathname,onNavigate:()=>s(!1)},`${m.title}-${g.title}`):o.jsx(Lv,{link:g,active:i.pathname===g.to,onNavigate:()=>s(!1)},g.to))})]},m.title))})]}),o.jsxs("main",{className:"min-w-0 flex-1 py-6 sm:py-8 lg:py-10 xl:py-12",children:[f&&o.jsxs("div",{className:"mb-4 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground",children:[o.jsx("span",{children:"Docs"}),o.jsx(xg,{className:"h-3 w-3"}),o.jsx("span",{children:f.section}),o.jsx(xg,{className:"h-3 w-3"}),o.jsx("span",{className:"text-foreground",children:f.title})]}),o.jsx("article",{className:"prose-docs",children:o.jsx(fd,{})}),o.jsxs("div",{className:"mt-16 grid gap-3 border-t border-border pt-8 sm:grid-cols-2",children:[u?o.jsxs(ce,{to:u.to,className:"group rounded-lg border border-border p-4 transition hover:border-brand/50 hover:bg-accent/30",children:[o.jsx("div",{className:"text-xs text-muted-foreground",children:"← Previous"}),o.jsx("div",{className:"mt-1 font-medium text-foreground group-hover:text-brand",children:u.title})]}):o.jsx("div",{}),h&&o.jsxs(ce,{to:h.to,className:"group rounded-lg border border-border p-4 text-right transition hover:border-brand/50 hover:bg-accent/30 sm:col-start-2",children:[o.jsx("div",{className:"text-xs text-muted-foreground",children:"Next →"}),o.jsx("div",{className:"mt-1 font-medium text-foreground group-hover:text-brand",children:h.title})]})]})]})]}),o.jsx(yd,{})]})}function Lv({link:i,active:r,onNavigate:s,compact:l=!1}){return o.jsx("li",{children:o.jsx(ce,{to:i.to,onClick:s,className:sn("block rounded-md border-l-2 text-sm transition",l?"px-3 py-1.5":"px-3 py-2",r?"border-brand bg-brand-muted font-medium text-brand":"border-transparent text-muted-foreground hover:border-border hover:bg-accent/50 hover:text-foreground"),children:i.title})})}function yR({title:i,links:r,pathname:s,onNavigate:l}){const u=r.some(m=>m.to===s),[h,f]=_.useState(u);return _.useEffect(()=>{u&&f(!0)},[u]),o.jsx("li",{children:o.jsxs(fR,{open:h,onOpenChange:f,children:[o.jsxs(mR,{className:sn("group flex w-full items-center justify-between rounded-md border border-transparent px-3 py-2 text-left text-sm transition",u?"bg-brand-muted font-medium text-brand":"text-muted-foreground hover:border-border hover:bg-accent/50 hover:text-foreground"),children:[o.jsx("span",{children:i}),o.jsx(Bw,{className:"h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180"})]}),o.jsx(pR,{className:"mt-1 space-y-0.5 pl-3",children:o.jsx("ul",{className:"space-y-0.5 border-l border-border/80",children:r.map(m=>o.jsx(Lv,{link:m,active:s===m.to,onNavigate:l,compact:!0},m.to))})})]})})}const vR=Ne("/guide")({component:gR}),Bv="https://github.com/PIDPilot/ftc",xR="v1.0.4",bR=Ne("/")({head:()=>({meta:[{title:"PID Pilot — Auto-Tuned PIDF for FTC"},{name:"description",content:"PID Pilot is a drop-in PIDF tuning library for FTC. Point it at a flywheel, arm, or elevator and its relay auto-tune computes working gains — one OpMode, one button, live on FTC Dashboard."},{property:"og:title",content:"PID Pilot — Auto-Tuned PIDF for FTC"},{property:"og:description",content:"Relay auto-tune computes working PIDF gains for any FTC mechanism. Add one Gradle dependency, run one OpMode."}]}),component:jR});function jR(){return o.jsxs("div",{className:"min-h-screen bg-background",children:[o.jsx(wR,{}),o.jsx(SR,{}),o.jsx(kR,{}),o.jsx(RR,{}),o.jsx(AR,{}),o.jsx(CR,{}),o.jsx(MR,{}),o.jsx(yd,{})]})}function wR(){return o.jsx("header",{className:"sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur",children:o.jsxs("div",{className:"mx-auto flex h-14 max-w-[1400px] items-center gap-4 px-4 lg:px-6",children:[o.jsxs(ce,{to:"/",className:"flex items-center gap-2",children:[o.jsx("img",{src:wv,alt:"PID Pilot",className:"landing-logo-sway h-8 w-8"}),o.jsx("span",{className:"font-display text-lg font-semibold tracking-tight",children:"PID Pilot"})]}),o.jsx("div",{className:"flex-1"}),o.jsxs("nav",{className:"hidden items-center gap-5 sm:flex",children:[o.jsx(ce,{to:"/guide",className:"text-sm font-medium text-muted-foreground transition hover:text-foreground",children:"Docs"}),o.jsx(ce,{to:"/guide/quick-start",className:"text-sm font-medium text-muted-foreground transition hover:text-foreground",children:"Quick Start"}),o.jsx(ce,{to:"/tuner",className:"text-sm font-medium text-muted-foreground transition hover:text-foreground",children:"Tuner"})]}),o.jsx("a",{href:Bv,target:"_blank",rel:"noreferrer",className:"text-muted-foreground transition hover:text-foreground","aria-label":"GitHub",children:o.jsx(vy,{className:"h-5 w-5"})}),o.jsx(bd,{className:"h-9 w-9"})]})})}function SR(){return o.jsxs("section",{className:"relative overflow-hidden border-b border-border",children:[o.jsx("div",{className:"grid-field pointer-events-none absolute inset-0 -z-10"}),o.jsx("div",{className:"pointer-events-none absolute inset-0 -z-10",style:{background:`radial-gradient(760px 380px at 12% -5%, color-mix(in oklch, var(--color-brand) 20%, transparent), transparent 62%),
            radial-gradient(680px 360px at 92% 8%, color-mix(in oklch, var(--color-warn) 12%, transparent), transparent 60%)`}}),o.jsxs("div",{className:"mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-6 lg:py-24",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-muted/40 px-3 py-1 text-xs font-medium text-brand",children:[o.jsx(u1,{className:"h-3.5 w-3.5"}),"One-button relay auto-tune — now for position too"]}),o.jsxs("h1",{className:"mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl",children:["Point it at a mechanism.",o.jsx("br",{}),o.jsx("span",{className:"text-brand text-signal-glow",children:"It tunes itself."})]}),o.jsx("p",{className:"mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",children:"PID Pilot is a drop-in PIDF tuning library for FTC. Add one Gradle dependency, run one OpMode, and its relay auto-tune measures your flywheel, arm, or elevator and computes working gains — live on FTC Dashboard, no controls background required."}),o.jsxs("div",{className:"mt-8 flex flex-wrap gap-3",children:[o.jsxs(ce,{to:"/guide/quick-start",className:"inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-sm transition hover:opacity-90",children:["Quick start ",o.jsx(pd,{className:"h-4 w-4"})]}),o.jsx(ce,{to:"/guide",className:"inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-accent",children:"Read the docs"}),o.jsxs("a",{href:Bv,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-accent",children:[o.jsx(vy,{className:"h-4 w-4"})," GitHub"]})]}),o.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground",children:[o.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[o.jsx(Gs,{className:"h-4 w-4 text-brand"})," Flywheels & shooters"]}),o.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[o.jsx(qs,{className:"h-4 w-4 text-brand"})," Arms, elevators, slides"]}),o.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[o.jsx(gd,{className:"h-4 w-4 text-brand"})," Motors & CR servos"]})]})]}),o.jsx(TR,{})]})]})}function TR(){const u=[];for(let f=0;f<=560;f+=4){let m;f<347.2?m=132-(96*(1-f/347.2)+14)*Math.sin(f/26):m=132-14*Math.exp(-(f-347.2)/46)*Math.sin(f/26),u.push(`${f},${m.toFixed(1)}`)}const h=`M ${u.join(" L ")}`;return o.jsxs("div",{className:"signal-glow rounded-[1.6rem] border border-border bg-card p-4 sm:p-5",children:[o.jsxs("div",{className:"flex items-center justify-between px-1 pb-3",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"pulse-lock inline-block h-2 w-2 rounded-full bg-brand"}),o.jsx("span",{className:"font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground",children:"relay auto-tune"})]}),o.jsx("span",{className:"rounded-md border border-brand/30 bg-brand-muted/40 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-brand",children:"● locked"})]}),o.jsx("div",{className:"overflow-hidden rounded-xl border border-border bg-background/60",children:o.jsxs("svg",{viewBox:"0 0 560 300",className:"h-auto w-full",role:"img","aria-label":"Signal converging to target",children:[o.jsxs("defs",{children:[o.jsxs("linearGradient",{id:"traceGrad",x1:"0",y1:"0",x2:"1",y2:"0",children:[o.jsx("stop",{offset:"0%",stopColor:"var(--color-warn)"}),o.jsx("stop",{offset:"70%",stopColor:"var(--color-brand)"}),o.jsx("stop",{offset:"100%",stopColor:"var(--color-brand)"})]}),o.jsx("pattern",{id:"scopeGrid",width:"40",height:"40",patternUnits:"userSpaceOnUse",children:o.jsx("path",{d:"M 40 0 L 0 0 0 40",fill:"none",stroke:"color-mix(in oklch, var(--color-border) 70%, transparent)",strokeWidth:"1"})})]}),o.jsx("rect",{width:560,height:300,fill:"url(#scopeGrid)"}),o.jsx("line",{x1:"0",y1:132,x2:560,y2:132,stroke:"var(--color-brand)",strokeWidth:"1.5",strokeDasharray:"2 6",opacity:"0.55"}),o.jsx("text",{x:"10",y:124,className:"font-mono",fontSize:"11",fill:"var(--color-muted-foreground)",children:"target"}),o.jsx("path",{d:h,fill:"none",stroke:"url(#traceGrad)",strokeWidth:"2.5",strokeLinejoin:"round"}),o.jsx("circle",{cx:560,cy:132,r:"4",fill:"var(--color-brand)",className:"pulse-lock"})]})}),o.jsxs("div",{className:"mt-4 grid grid-cols-3 gap-2",children:[o.jsx(Nu,{label:"kP",value:"0.0034"}),o.jsx(Nu,{label:"kI",value:"0.0121"}),o.jsx(Nu,{label:"kD",value:"0.00008"})]}),o.jsxs("p",{className:"mt-3 px-1 font-mono text-[11px] leading-relaxed text-muted-foreground",children:[o.jsx("span",{className:"text-brand",children:"[relay]"})," 4 cycles measured · Ku=0.019 Pu=0.31s · gains applied"]})]})}function Nu({label:i,value:r}){return o.jsxs("div",{className:"rounded-lg border border-border bg-background/60 px-3 py-2",children:[o.jsx("div",{className:"font-mono text-[10px] uppercase tracking-widest text-muted-foreground",children:i}),o.jsx("div",{className:"mt-0.5 font-mono text-sm font-semibold text-brand",children:r})]})}function kR(){return o.jsx("section",{className:"border-b border-border bg-muted/20",children:o.jsxs("div",{className:"mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-6",children:[o.jsxs("div",{className:"max-w-md",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground",children:[o.jsx(p1,{className:"h-3.5 w-3.5 text-brand"})," Install"]}),o.jsx("h2",{className:"mt-2 font-display text-2xl font-semibold",children:"One line in your Gradle file."}),o.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:"Published on JitPack. No copy-pasted source files, no manual controller wiring."})]}),o.jsxs("div",{className:"w-full max-w-xl overflow-x-auto rounded-xl border border-border bg-card p-4 font-mono text-sm shadow-sm",children:[o.jsx("div",{className:"text-muted-foreground",children:o.jsx("span",{className:"select-none text-brand",children:"// build.dependencies.gradle"})}),o.jsxs("div",{className:"mt-1 whitespace-nowrap",children:[o.jsx("span",{className:"text-foreground",children:"implementation"})," ",o.jsxs("span",{className:"text-brand",children:["'com.github.PIDPilot:ftc:",xR,"'"]})]}),o.jsxs("div",{className:"whitespace-nowrap",children:[o.jsx("span",{className:"text-foreground",children:"implementation"})," ",o.jsx("span",{className:"text-brand",children:"'com.acmerobotics.dashboard:dashboard:0.6.0'"})]})]})]})})}function RR(){const i=[{icon:o.jsx(gd,{className:"h-5 w-5"}),title:"Bind your hardware",desc:"Extend PIDFTunerOpMode and return a Config with your motor(s) and a target. That is the whole setup."},{icon:o.jsx(S1,{className:"h-5 w-5"}),title:"Press start — it measures",desc:"Relay auto-tune drives the mechanism into a controlled oscillation around the target and measures its response (Ku, Pu)."},{icon:o.jsx(md,{className:"h-5 w-5"}),title:"It computes gains",desc:"Ziegler–Nichols formulas turn that measurement into working REV_UP and MAINTAIN gains, applied live."},{icon:o.jsx(qs,{className:"h-5 w-5"}),title:"Copy and ship",desc:"Read the final kP / kI / kD / kF off FTC Dashboard and drop them into your real subsystem."}];return o.jsx("section",{className:"border-b border-border",children:o.jsxs("div",{className:"mx-auto max-w-6xl px-4 py-16 lg:px-6",children:[o.jsxs("div",{className:"max-w-2xl",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground",children:[o.jsx(o1,{className:"h-3.5 w-3.5 text-brand"}),"The auto-tune loop"]}),o.jsx("h2",{className:"mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl",children:"No guessing gains. It finds them for you."}),o.jsx("p",{className:"mt-4 text-muted-foreground",children:"Tuning PIDF by hand is the biggest wall new teams hit. PID Pilot removes it: the relay method is a proven, self-driving way to find a mechanism's gains, and it runs automatically the first time you start the OpMode."})]}),o.jsx("div",{className:"mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4",children:i.map((r,s)=>o.jsxs("div",{className:"relative rounded-2xl border border-border bg-card p-5 shadow-sm",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-brand-muted text-brand",children:r.icon}),o.jsxs("span",{className:"font-mono text-xs text-muted-foreground",children:["0",s+1]})]}),o.jsx("h3",{className:"mt-4 font-display text-lg font-semibold text-foreground",children:r.title}),o.jsx("p",{className:"mt-2 text-sm leading-6 text-muted-foreground",children:r.desc})]},r.title))}),o.jsxs("div",{className:"mt-6 rounded-2xl border border-border bg-muted/30 p-5 text-sm text-muted-foreground",children:[o.jsx("span",{className:"font-semibold text-foreground",children:"Prefer to drive it yourself?"})," Every gain, band, and timeout is a live FTC Dashboard field, and you can skip auto-tune entirely to tune by hand. The"," ",o.jsx(ce,{to:"/guide/concepts/pidf-terms",className:"text-brand underline underline-offset-2",children:"Concepts"})," ","and Advanced sections cover the manual workflow in full."]})]})})}function AR(){return o.jsx("section",{className:"border-b border-border bg-muted/20",children:o.jsxs("div",{className:"mx-auto max-w-6xl px-4 py-16 lg:px-6",children:[o.jsxs("div",{className:"max-w-2xl",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground",children:[o.jsx(b1,{className:"h-3.5 w-3.5 text-brand"}),"Two tuners, one library"]}),o.jsx("h2",{className:"mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl",children:"Velocity and position are different problems."}),o.jsx("p",{className:"mt-4 text-muted-foreground",children:"They share the controller core and the auto-tune engine, but each speaks its own mechanism's language."})]}),o.jsxs("div",{className:"mt-10 grid gap-4 lg:grid-cols-2",children:[o.jsx(Ug,{icon:o.jsx(Gs,{className:"h-5 w-5"}),kicker:"Velocity tuner",title:"Flywheels & shooters",points:["Characterizes max speed for a physical kF, then relay auto-tunes kP / kI / kD.","Works in raw ticks/sec — feedforward stays physically meaningful, no hidden normalization.","Optional disruption sampling measures real recovery time after a game element hits the wheel."],to:"/guide/velocity/overview"}),o.jsx(Ug,{icon:o.jsx(qs,{className:"h-5 w-5"}),kicker:"Position tuner",title:"Arms, elevators, slides",points:["Relay auto-tune for motors and CR servos — the same one-button flow as velocity.","Gravity & cosine feedforward, motion profiling, and hard position bounds built in.","Also drives standard servos, open-loop or with external encoder / analog feedback."],to:"/guide/position/overview"})]})]})})}function Ug({icon:i,kicker:r,title:s,points:l,to:u}){return o.jsxs("div",{className:"flex flex-col rounded-[1.5rem] border border-border bg-card p-6 shadow-sm",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-muted text-brand",children:i}),o.jsxs("div",{children:[o.jsx("div",{className:"font-mono text-xs uppercase tracking-widest text-muted-foreground",children:r}),o.jsx("h3",{className:"font-display text-2xl font-semibold text-foreground",children:s})]})]}),o.jsx("ul",{className:"mt-5 flex-1 space-y-3 text-sm leading-6 text-muted-foreground",children:l.map(h=>o.jsxs("li",{className:"flex gap-3",children:[o.jsx("span",{className:"mt-2 h-1.5 w-1.5 shrink-0 rotate-45 rounded-[1px] bg-brand"}),h]},h))}),o.jsxs(ce,{to:u,className:"mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition hover:gap-2.5",children:["Explore the ",s.split(",")[0].toLowerCase()," tuner ",o.jsx(pd,{className:"h-4 w-4"})]})]})}function CR(){const i=[{icon:o.jsx(r1,{className:"h-5 w-5"}),title:"Safe by construction",desc:"Position bounds clamp targets and suppress output at hard stops. Sample OpModes only power mechanisms after start — never during INIT."},{icon:o.jsx(md,{className:"h-5 w-5"}),title:"Telemetry that explains itself",desc:"Every term — pTerm, iTerm, dTerm, feedforward, error rate, warnings — is streamed so you can see why the loop behaves the way it does."},{icon:o.jsx(Gs,{className:"h-5 w-5"}),title:"REV_UP and MAINTAIN, separately",desc:"Fast approach and steady-state hold want different gains. Auto-tune produces both, and gamepad X flips between them live."},{icon:o.jsx(gd,{className:"h-5 w-5"}),title:"Reusable controller core",desc:"A clean PIDFController with derivative-on-measurement and anti-windup underpins both tuners — drop it into production code too."}];return o.jsx("section",{className:"border-b border-border",children:o.jsx("div",{className:"mx-auto max-w-6xl px-4 py-16 lg:px-6",children:o.jsx("div",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-4",children:i.map(r=>o.jsxs("div",{className:"rounded-2xl border border-border bg-card p-5 shadow-sm",children:[o.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-muted text-brand",children:r.icon}),o.jsx("h3",{className:"mt-4 font-display text-lg font-semibold text-foreground",children:r.title}),o.jsx("p",{className:"mt-2 text-sm leading-6 text-muted-foreground",children:r.desc})]},r.title))})})})}function MR(){return o.jsxs("section",{className:"relative overflow-hidden bg-muted/20",children:[o.jsx("div",{className:"grid-field pointer-events-none absolute inset-0 -z-10 opacity-60"}),o.jsxs("div",{className:"mx-auto max-w-6xl px-4 py-20 text-center lg:px-6",children:[o.jsx("h2",{className:"mx-auto max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl",children:"Stop hand-tuning gains at 2am before a competition."}),o.jsx("p",{className:"mx-auto mt-4 max-w-2xl text-muted-foreground",children:"Add the dependency, run a sample OpMode, and let PID Pilot find your gains. Then read the docs to make them great."}),o.jsxs("div",{className:"mt-8 flex flex-wrap justify-center gap-3",children:[o.jsxs(ce,{to:"/guide/quick-start",className:"inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-sm transition hover:opacity-90",children:["Start the quick start ",o.jsx(pd,{className:"h-4 w-4"})]}),o.jsx(ce,{to:"/guide/templates",className:"inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-accent",children:"Copy a sample OpMode"})]})]})]})}const _R=Ne("/guide/")({head:()=>({meta:[{title:"Introduction — PID Pilot"},{name:"description",content:"PID Pilot is a drop-in PIDF tuning library for FTC with one-button relay auto-tune for flywheels, arms, and elevators."}]}),component:ER});function ER(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Introduction"}),o.jsx("p",{children:"PID Pilot is a drop-in PIDF tuning library for FTC. Point it at a mechanism, run one OpMode, and its relay auto-tune measures the mechanism and computes working gains for you — live on FTC Dashboard, with no controls background required."}),o.jsxs("p",{children:["It covers the two control problems most FTC mechanisms fall into: ",o.jsx("strong",{children:"velocity"})," ","(flywheels and shooters) and ",o.jsx("strong",{children:"position"})," (arms, elevators, slides, turrets, and servo-driven axes). Both share the same controller core and the same auto-tune engine, but each speaks its own mechanism's language."]}),o.jsxs("div",{className:"not-prose my-8 grid gap-4 md:grid-cols-3",children:[o.jsx(Pu,{title:"Quick Start",desc:"Install the dependency, drop in a sample OpMode, and let auto-tune find your first set of gains.",to:"/guide/quick-start",label:"Start here"}),o.jsx(Pu,{title:"Velocity Tuner",desc:"Flywheels and shooters: characterization, relay auto-tune, and disruption recovery in raw ticks/sec.",to:"/guide/velocity/overview",label:"Velocity docs"}),o.jsx(Pu,{title:"Position Tuner",desc:"Arms, elevators, and slides: relay auto-tune plus gravity feedforward, motion profiles, and bounds.",to:"/guide/position/overview",label:"Position docs"})]}),o.jsx("h2",{children:"What auto-tune actually does"}),o.jsxs("p",{children:["Hand-tuning PIDF is the biggest wall new teams hit. PID Pilot removes it with the"," ",o.jsx("strong",{children:"relay method"}),": it drives the mechanism into a controlled oscillation around your target, measures the oscillation (its ultimate gain ",o.jsx("code",{children:"Ku"})," and period"," ",o.jsx("code",{children:"Pu"}),"), and applies Ziegler–Nichols formulas to produce working"," ",o.jsx("code",{children:"REV_UP"})," and ",o.jsx("code",{children:"MAINTAIN"})," gains. It runs automatically the first time you start the OpMode, for motors and CR servos, on both tuners."]}),o.jsx("p",{children:"You are never locked into it. Supply your own gains to skip auto-tune, or nudge every gain, band, and timeout live from FTC Dashboard while the mechanism runs."}),o.jsx("h2",{children:"How it runs"}),o.jsxs("ol",{children:[o.jsxs("li",{children:["Your OpMode extends ",o.jsx("code",{children:"PIDFTunerOpMode"})," and returns a ",o.jsx("code",{children:"Config"})," from"," ",o.jsx("code",{children:"configureVelocity()"})," or ",o.jsx("code",{children:"configurePosition()"}),"."]}),o.jsx("li",{children:"The runner instantiates the matching tuner and drives the live loop — reading sensors, computing control, applying output, and mirroring rich telemetry to the Driver Station and Dashboard."}),o.jsx("li",{children:"On start it auto-tunes (unless you skipped it), then holds the target so you can watch and refine."}),o.jsxs("li",{children:[o.jsx("code",{children:"gamepad1.x"})," toggles between ",o.jsx("code",{children:"REV_UP"})," (fast approach) and"," ",o.jsx("code",{children:"MAINTAIN"})," (steady-state hold) live."]})]}),o.jsx("h2",{children:"What's in the library"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[o.jsx("code",{children:"PIDFController"})," — the shared control math: derivative-on-measurement, anti-windup, and fully exposed term state."]}),o.jsxs("li",{children:[o.jsx("code",{children:"PIDFTunerOpMode"})," — the live runner: config refresh every loop, telemetry mirroring, and the mode toggle."]}),o.jsxs("li",{children:[o.jsx("code",{children:"VelocityPIDFTuner"})," — raw ",o.jsx("code",{children:"ticks/s"})," control, feedforward characterization, relay auto-tune, and disruption recovery."]}),o.jsxs("li",{children:[o.jsx("code",{children:"PositionPIDFTuner"})," — motors, CR servos, and standard servos, with relay auto-tune, motion profiles, gravity/cosine feedforward, and hard bounds."]}),o.jsxs("li",{children:["Ready-to-copy sample OpModes: ",o.jsx("code",{children:"TuneFlywheelNew"}),", ",o.jsx("code",{children:"TuneArm"}),", and"," ",o.jsx("code",{children:"TuneElevator"}),"."]})]}),o.jsx("h2",{children:"Suggested reading order"}),o.jsxs("ol",{children:[o.jsxs("li",{children:[o.jsx(ce,{to:"/guide/installation",children:"Installation"})," then"," ",o.jsx(ce,{to:"/guide/quick-start",children:"Quick Start"})," to get auto-tune running."]}),o.jsxs("li",{children:[o.jsx(ce,{to:"/guide/concepts/pidf-terms",children:"PIDF Terms"})," and"," ",o.jsx(ce,{to:"/guide/concepts/scoring",children:"How Auto-Tune Works"})," to understand what the numbers mean."]}),o.jsx("li",{children:"The velocity or position section that matches your mechanism."}),o.jsxs("li",{children:[o.jsx(ce,{to:"/guide/reference/telemetry",children:"Telemetry"})," and"," ",o.jsx(ce,{to:"/guide/troubleshooting",children:"Troubleshooting"})," when you need to decode real behavior."]})]}),o.jsx("blockquote",{children:"PID Pilot reasons about control; it does not hide bad hardware. It works best when the mechanism is already mechanically healthy, with a safe range of motion and consistent sensors."})]})}function Pu({title:i,desc:r,to:s,label:l}){return o.jsxs("div",{className:"rounded-2xl border border-border bg-card p-5 shadow-sm",children:[o.jsx("h3",{className:"font-display text-lg font-semibold text-foreground",children:i}),o.jsx("p",{className:"mt-2 text-sm leading-6 text-muted-foreground",children:r}),o.jsx(ce,{to:s,className:"mt-4 inline-flex items-center rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition hover:border-brand/50 hover:bg-accent/40 hover:text-brand",children:l})]})}const DR=Ne("/guide/troubleshooting")({head:()=>({meta:[{title:"Troubleshooting — PID Pilot"},{name:"description",content:"Troubleshoot common PID Pilot issues in velocity and position sessions using the framework’s real diagnostics and caveats."}]}),component:NR});function NR(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Troubleshooting"}),o.jsx("p",{children:"When a PID Pilot session goes wrong, the fastest path forward is usually to identify which framework assumption is being violated. This page maps common symptoms to the most likely setup or control-model problem and points you to the next page worth reading."}),o.jsxs("div",{className:"not-prose my-8 grid gap-4 md:grid-cols-2",children:[o.jsx(ks,{title:"Velocity cannot reach target or warnings mention headroom",desc:"The wheel stays well below target, or telemetry suggests feedforward and gains are consuming all available output.",causes:["Target speed is unrealistic for the current mechanism and battery state.","The physical kF source is wrong or never established cleanly.","The loop is spending too much output on proportional correction because the baseline effort was never covered."],links:[{label:"Velocity Overview",to:"/guide/velocity/overview"},{label:"Characterization",to:"/guide/velocity/f-sweep"},{label:"Running Control",to:"/guide/velocity/refinement"}]}),o.jsx(ks,{title:"Velocity behavior looks like two controllers are fighting",desc:"Power commands feel inconsistent, response changes when live config refreshes, or the mechanism ignores the expected outer-loop story.",causes:["Motor mode is being changed away from RUN_WITHOUT_ENCODER during the session.","User code is reasserting a conflicting hardware mode inside configureVelocity().","The tuner is not being allowed to own raw power control."],links:[{label:"Setup Rules",to:"/guide/reference/setup-rules"},{label:"Velocity Overview",to:"/guide/velocity/overview"},{label:"Telemetry",to:"/guide/reference/telemetry"}]}),o.jsx(ks,{title:"Position mechanism reaches target once but holds badly",desc:"An arm, slide, or elevator gets close, then droops, chatters, or reacts poorly under load.",causes:["Static trim, gravity compensation, or cosine compensation is missing or mis-scaled.","You are reading the wrong feedback source or using inconsistent units.","The hold-side MAINTAIN gain family needs to be evaluated separately from REV_UP."],links:[{label:"Position Overview",to:"/guide/position/overview"},{label:"Motion & Feedforward",to:"/guide/position/ku-search"},{label:"Disruption",to:"/guide/position/disturbance"}]}),o.jsx(ks,{title:"Position mechanism pushes into a stop or clamps unexpectedly",desc:"The requested target and measured motion do not agree, or the controller appears to fight a hard limit.",causes:["Bounds are missing, wrong, or defined in inconsistent units.","The actuator family or servo mapping range is incorrect.","Constraint status is telling you something real that you are not reading yet."],links:[{label:"Bounds & Control Flow",to:"/guide/position/refinement"},{label:"Setup Rules",to:"/guide/reference/setup-rules"},{label:"Telemetry",to:"/guide/reference/telemetry"}]})]}),o.jsx("h2",{children:"First checks before changing gains"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Confirm the mechanism is physically healthy and can move safely through the intended range."}),o.jsx("li",{children:"Verify hardware names, motor directions, encoder directions, and target sign conventions."}),o.jsx("li",{children:"Choose a target the mechanism can realistically reach and hold."}),o.jsx("li",{children:"Read the telemetry notes and warnings instead of only the final gain values."}),o.jsx("li",{children:"Confirm that the selected control family matches the actual mechanism job."})]}),o.jsx("h2",{children:"When to stop the session immediately"}),o.jsxs("ul",{children:[o.jsx("li",{children:"The mechanism is driving into a hard stop."}),o.jsx("li",{children:"The velocity loop is clearly fighting a motor-mode conflict."}),o.jsx("li",{children:"The feedback signal is obviously wrong or discontinuous."}),o.jsx("li",{children:"The mechanism is outside a safe physical range for live testing."})]}),o.jsx("h2",{children:"Best next pages"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[o.jsx(ce,{to:"/guide/reference/telemetry",children:"Telemetry & Final Summary"})," when the raw numbers need interpretation."]}),o.jsxs("li",{children:[o.jsx(ce,{to:"/guide/reference/practical-notes",children:"Workflows & Caveats"})," when the session looks “legal” but still not useful."]}),o.jsxs("li",{children:[o.jsx(ce,{to:"/guide/reference/faq",children:"FAQ"})," when the issue is really about the framework’s intended semantics."]})]}),o.jsx("blockquote",{children:"If the telemetry story and the mechanism physics disagree, trust the physics first and use the telemetry to figure out which framework assumption broke."})]})}function ks({title:i,desc:r,causes:s,links:l}){return o.jsxs("div",{className:"rounded-2xl border border-border bg-card p-5 shadow-sm",children:[o.jsx("h3",{className:"font-display text-lg font-semibold text-foreground",children:i}),o.jsx("p",{className:"mt-2 text-sm leading-6 text-muted-foreground",children:r}),o.jsx("p",{className:"mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground",children:"Likely Causes"}),o.jsx("ul",{className:"mt-3 space-y-2 text-sm text-muted-foreground",children:s.map(u=>o.jsx("li",{children:u},u))}),o.jsx("div",{className:"mt-5 flex flex-wrap gap-2",children:l.map(u=>o.jsx(ce,{to:u.to,className:"inline-flex items-center rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-brand/50 hover:bg-accent/40 hover:text-brand",children:u.label},u.to))})]})}var Ou={exports:{}},Hg;function PR(){return Hg||(Hg=1,(function(i){var r=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var s=(function(l){var u=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,h=0,f={},m={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function R(T){return T instanceof g?new g(T.type,R(T.content),T.alias):Array.isArray(T)?T.map(R):T.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(R){return Object.prototype.toString.call(R).slice(8,-1)},objId:function(R){return R.__id||Object.defineProperty(R,"__id",{value:++h}),R.__id},clone:function R(T,M){M=M||{};var V,F;switch(m.util.type(T)){case"Object":if(F=m.util.objId(T),M[F])return M[F];V={},M[F]=V;for(var I in T)T.hasOwnProperty(I)&&(V[I]=R(T[I],M));return V;case"Array":return F=m.util.objId(T),M[F]?M[F]:(V=[],M[F]=V,T.forEach(function(P,H){V[H]=R(P,M)}),V);default:return T}},getLanguage:function(R){for(;R;){var T=u.exec(R.className);if(T)return T[1].toLowerCase();R=R.parentElement}return"none"},setLanguage:function(R,T){R.className=R.className.replace(RegExp(u,"gi"),""),R.classList.add("language-"+T)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(V){var R=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(V.stack)||[])[1];if(R){var T=document.getElementsByTagName("script");for(var M in T)if(T[M].src==R)return T[M]}return null}},isActive:function(R,T,M){for(var V="no-"+T;R;){var F=R.classList;if(F.contains(T))return!0;if(F.contains(V))return!1;R=R.parentElement}return!!M}},languages:{plain:f,plaintext:f,text:f,txt:f,extend:function(R,T){var M=m.util.clone(m.languages[R]);for(var V in T)M[V]=T[V];return M},insertBefore:function(R,T,M,V){V=V||m.languages;var F=V[R],I={};for(var P in F)if(F.hasOwnProperty(P)){if(P==T)for(var H in M)M.hasOwnProperty(H)&&(I[H]=M[H]);M.hasOwnProperty(P)||(I[P]=F[P])}var W=V[R];return V[R]=I,m.languages.DFS(m.languages,function(Z,oe){oe===W&&Z!=R&&(this[Z]=I)}),I},DFS:function R(T,M,V,F){F=F||{};var I=m.util.objId;for(var P in T)if(T.hasOwnProperty(P)){M.call(T,P,T[P],V||P);var H=T[P],W=m.util.type(H);W==="Object"&&!F[I(H)]?(F[I(H)]=!0,R(H,M,null,F)):W==="Array"&&!F[I(H)]&&(F[I(H)]=!0,R(H,M,P,F))}}},plugins:{},highlightAll:function(R,T){m.highlightAllUnder(document,R,T)},highlightAllUnder:function(R,T,M){var V={callback:M,container:R,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};m.hooks.run("before-highlightall",V),V.elements=Array.prototype.slice.apply(V.container.querySelectorAll(V.selector)),m.hooks.run("before-all-elements-highlight",V);for(var F=0,I;I=V.elements[F++];)m.highlightElement(I,T===!0,V.callback)},highlightElement:function(R,T,M){var V=m.util.getLanguage(R),F=m.languages[V];m.util.setLanguage(R,V);var I=R.parentElement;I&&I.nodeName.toLowerCase()==="pre"&&m.util.setLanguage(I,V);var P=R.textContent,H={element:R,language:V,grammar:F,code:P};function W(oe){H.highlightedCode=oe,m.hooks.run("before-insert",H),H.element.innerHTML=H.highlightedCode,m.hooks.run("after-highlight",H),m.hooks.run("complete",H),M&&M.call(H.element)}if(m.hooks.run("before-sanity-check",H),I=H.element.parentElement,I&&I.nodeName.toLowerCase()==="pre"&&!I.hasAttribute("tabindex")&&I.setAttribute("tabindex","0"),!H.code){m.hooks.run("complete",H),M&&M.call(H.element);return}if(m.hooks.run("before-highlight",H),!H.grammar){W(m.util.encode(H.code));return}if(T&&l.Worker){var Z=new Worker(m.filename);Z.onmessage=function(oe){W(oe.data)},Z.postMessage(JSON.stringify({language:H.language,code:H.code,immediateClose:!0}))}else W(m.highlight(H.code,H.grammar,H.language))},highlight:function(R,T,M){var V={code:R,grammar:T,language:M};if(m.hooks.run("before-tokenize",V),!V.grammar)throw new Error('The language "'+V.language+'" has no grammar.');return V.tokens=m.tokenize(V.code,V.grammar),m.hooks.run("after-tokenize",V),g.stringify(m.util.encode(V.tokens),V.language)},tokenize:function(R,T){var M=T.rest;if(M){for(var V in M)T[V]=M[V];delete T.rest}var F=new x;return b(F,F.head,R),v(R,F,T,F.head,0),S(F)},hooks:{all:{},add:function(R,T){var M=m.hooks.all;M[R]=M[R]||[],M[R].push(T)},run:function(R,T){var M=m.hooks.all[R];if(!(!M||!M.length))for(var V=0,F;F=M[V++];)F(T)}},Token:g};l.Prism=m;function g(R,T,M,V){this.type=R,this.content=T,this.alias=M,this.length=(V||"").length|0}g.stringify=function R(T,M){if(typeof T=="string")return T;if(Array.isArray(T)){var V="";return T.forEach(function(W){V+=R(W,M)}),V}var F={type:T.type,content:R(T.content,M),tag:"span",classes:["token",T.type],attributes:{},language:M},I=T.alias;I&&(Array.isArray(I)?Array.prototype.push.apply(F.classes,I):F.classes.push(I)),m.hooks.run("wrap",F);var P="";for(var H in F.attributes)P+=" "+H+'="'+(F.attributes[H]||"").replace(/"/g,"&quot;")+'"';return"<"+F.tag+' class="'+F.classes.join(" ")+'"'+P+">"+F.content+"</"+F.tag+">"};function p(R,T,M,V){R.lastIndex=T;var F=R.exec(M);if(F&&V&&F[1]){var I=F[1].length;F.index+=I,F[0]=F[0].slice(I)}return F}function v(R,T,M,V,F,I){for(var P in M)if(!(!M.hasOwnProperty(P)||!M[P])){var H=M[P];H=Array.isArray(H)?H:[H];for(var W=0;W<H.length;++W){if(I&&I.cause==P+","+W)return;var Z=H[W],oe=Z.inside,he=!!Z.lookbehind,Ae=!!Z.greedy,ue=Z.alias;if(Ae&&!Z.pattern.global){var z=Z.pattern.toString().match(/[imsuy]*$/)[0];Z.pattern=RegExp(Z.pattern.source,z+"g")}for(var Q=Z.pattern||Z,ee=V.next,me=F;ee!==T.tail&&!(I&&me>=I.reach);me+=ee.value.length,ee=ee.next){var $=ee.value;if(T.length>R.length)return;if(!($ instanceof g)){var E=1,q;if(Ae){if(q=p(Q,me,R,he),!q||q.index>=R.length)break;var se=q.index,J=q.index+q[0].length,te=me;for(te+=ee.value.length;se>=te;)ee=ee.next,te+=ee.value.length;if(te-=ee.value.length,me=te,ee.value instanceof g)continue;for(var ne=ee;ne!==T.tail&&(te<J||typeof ne.value=="string");ne=ne.next)E++,te+=ne.value.length;E--,$=R.slice(me,te),q.index-=me}else if(q=p(Q,0,$,he),!q)continue;var se=q.index,ve=q[0],Pe=$.slice(0,se),pe=$.slice(se+ve.length),mt=me+$.length;I&&mt>I.reach&&(I.reach=mt);var nt=ee.prev;Pe&&(nt=b(T,nt,Pe),me+=Pe.length),j(T,nt,E);var xt=new g(P,oe?m.tokenize(ve,oe):ve,ue,ve);if(ee=b(T,nt,xt),pe&&b(T,ee,pe),E>1){var Pt={cause:P+","+W,reach:mt};v(R,T,M,ee.prev,me,Pt),I&&Pt.reach>I.reach&&(I.reach=Pt.reach)}}}}}}function x(){var R={value:null,prev:null,next:null},T={value:null,prev:R,next:null};R.next=T,this.head=R,this.tail=T,this.length=0}function b(R,T,M){var V=T.next,F={value:M,prev:T,next:V};return T.next=F,V.prev=F,R.length++,F}function j(R,T,M){for(var V=T.next,F=0;F<M&&V!==R.tail;F++)V=V.next;T.next=V,V.prev=T,R.length-=F}function S(R){for(var T=[],M=R.head.next;M!==R.tail;)T.push(M.value),M=M.next;return T}if(!l.document)return l.addEventListener&&(m.disableWorkerMessageHandler||l.addEventListener("message",function(R){var T=JSON.parse(R.data),M=T.language,V=T.code,F=T.immediateClose;l.postMessage(m.highlight(V,m.languages[M],M)),F&&l.close()},!1)),m;var k=m.util.currentScript();k&&(m.filename=k.src,k.hasAttribute("data-manual")&&(m.manual=!0));function A(){m.manual||m.highlightAll()}if(!m.manual){var N=document.readyState;N==="loading"||N==="interactive"&&k&&k.defer?document.addEventListener("DOMContentLoaded",A):window.requestAnimationFrame?window.requestAnimationFrame(A):window.setTimeout(A,16)}return m})(r);i.exports&&(i.exports=s),typeof Dp<"u"&&(Dp.Prism=s)})(Ou)),Ou.exports}var OR=PR();const nd=id(OR);(function(i){var r="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",s={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},l={bash:s,environment:{pattern:RegExp("\\$"+r),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+r),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};i.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+r),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:l},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:s}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:l},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:l.entity}}],environment:{pattern:RegExp("\\$?"+r),alias:"constant"},variable:l.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},s.inside=i.languages.bash;for(var u=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],h=l.variable[1].inside,f=0;f<u.length;f++)h[u[f]]=i.languages.bash[u[f]];i.languages.sh=i.languages.bash,i.languages.shell=i.languages.bash})(Prism);Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};var Vg={},Gg;function IR(){return Gg||(Gg=1,(function(i){var r=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,s=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,l={pattern:RegExp(/(^|[^\w.])/.source+s+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};i.languages.java=i.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[l,{pattern:RegExp(/(^|[^\w.])/.source+s+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:l.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+s+/[A-Z]\w*\b/.source),lookbehind:!0,inside:l.inside}],keyword:r,function:[i.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),i.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),i.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":l,keyword:r,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+s+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:l.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+s+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:l.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return r.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism)),Vg}IR();const zR={bash:nd.languages.bash,java:nd.languages.java};function Ye({code:i,language:r="java",filename:s}){qt("CodeBlock:render");const[l,u]=_.useState(!1),h=i.trim(),f=zR[r];qt("CodeBlock:highlight-start");const m=f?nd.highlight(h,f,r):null;qt("CodeBlock:highlight-done");const g=async()=>{await navigator.clipboard.writeText(i),u(!0),setTimeout(()=>u(!1),1800)};return o.jsxs("div",{className:"my-5 overflow-hidden rounded-lg border border-border bg-[oklch(0.18_0.03_258)] shadow-sm",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2",children:[o.jsx("span",{className:"font-mono text-xs text-white/60",children:s??r}),o.jsx("button",{onClick:g,className:"inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-white/70 transition hover:bg-white/10 hover:text-white",children:l?o.jsxs(o.Fragment,{children:[o.jsx(zw,{className:"h-3.5 w-3.5"})," Copied"]}):o.jsxs(o.Fragment,{children:[o.jsx(Vw,{className:"h-3.5 w-3.5"})," Copy"]})})]}),o.jsx("pre",{className:"docs-code overflow-x-auto p-4 text-sm leading-6 text-white/85",children:m?o.jsx("code",{className:`language-${r}`,dangerouslySetInnerHTML:{__html:m}}):o.jsx("code",{children:h})})]})}const LR=Ne("/guide/templates")({head:()=>({meta:[{title:"Sample OpModes — PID Pilot"},{name:"description",content:"Ready-to-copy velocity, arm, and elevator tuning OpModes for PID Pilot, using relay auto-tune by default."}]}),component:BR});function BR(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Sample OpModes"}),o.jsx("p",{children:"The library ships three reference OpModes you can copy into TeamCode and adapt. None of them supply gains — each one relies on relay auto-tune, so the pattern to copy is “bind hardware, set a target, press start.” Change the hardware names and targets to match your robot."}),o.jsx("h2",{children:"TuneFlywheel — velocity"}),o.jsxs("p",{children:["A two-motor shooter. Note two things: hardware is cached on the first"," ",o.jsx("code",{children:"configureVelocity()"})," call (the method runs every loop), and the feeder motors are only powered ",o.jsx("strong",{children:"after"})," ",o.jsx("code",{children:"isStarted()"})," — never during INIT."," ",o.jsx("code",{children:"averageAbsoluteVelocity(true)"})," handles wheels that spin in opposite directions."]}),o.jsx(Ye,{filename:"TuneFlywheel.java",language:"java",code:`private DcMotorEx intake, transfer, left, right;
private boolean feederStarted;

@Override
protected VelocityPIDFTuner.Config configureVelocity() {
    if (left == null) {
        intake   = hardwareMap.get(DcMotorEx.class, "intake");
        transfer = hardwareMap.get(DcMotorEx.class, "transfer");
        left     = hardwareMap.get(DcMotorEx.class, "outtakeL");
        right    = hardwareMap.get(DcMotorEx.class, "outtakeR");
        left.setDirection(DcMotorSimple.Direction.REVERSE);
    }
    // Only spin the feeder once the match has actually started.
    if (!feederStarted && isStarted()) {
        intake.setPower(1);
        transfer.setPower(1);
        feederStarted = true;
    }
    return new VelocityPIDFTuner.Config()
            .target(TARGET_VELOCITY)
            .withMotors(left, right)
            .averageAbsoluteVelocity(true)
            .runDisruptionPhase(true)
            .disruptionSamples(5)
            .telemetry(telemetry);
}`}),o.jsx("h2",{children:"TuneArm — position with cosine feedforward"}),o.jsx("p",{children:"An arm fights gravity as a function of its angle, so it uses cosine feedforward mapped from an encoder reference. Auto-tune handles kP/kI/kD; the feedforward just holds the arm up while it does. Motion profiling smooths large REV_UP moves."}),o.jsx(Ye,{filename:"TuneArm.java",language:"java",code:`private DcMotorEx arm;

@Override
protected PositionPIDFTuner.Config configurePosition() {
    if (arm == null) {
        arm = hardwareMap.get(DcMotorEx.class, "arm");
    }
    return new PositionPIDFTuner.Config()
            .target(TARGET_POSITION)
            .tuningMode(PIDFTuningMode.REV_UP)
            .withMotors(arm)
            .useMotionProfile(MAX_VELOCITY, MAX_ACCELERATION)
            .feedforwardCosineConstant(ARM_KCOS)          // gravity ~ cos(angle)
            .cosineFeedforwardReference(ZERO_TICKS, TICKS_PER_RADIAN)
            .telemetry(telemetry);
}`}),o.jsx("h2",{children:"TuneElevator — position with constant gravity"}),o.jsx("p",{children:"A vertical lift needs the same hold force at every height, so it uses a single constant gravity feedforward instead of the arm's cosine geometry. This is the simplest position example."}),o.jsx(Ye,{filename:"TuneElevator.java",language:"java",code:`private DcMotorEx elevator;

@Override
protected PositionPIDFTuner.Config configurePosition() {
    if (elevator == null) {
        elevator = hardwareMap.get(DcMotorEx.class, "elevator");
    }
    return new PositionPIDFTuner.Config()
            .target(TARGET_POSITION)
            .tuningMode(PIDFTuningMode.MAINTAIN)
            .withMotors(elevator)
            .feedforwardGravityConstant(ELEVATOR_KG)
            .telemetry(telemetry);
}`}),o.jsx("h2",{children:"What the samples teach"}),o.jsxs("ul",{children:[o.jsxs("li",{children:["Cache hardware once — ",o.jsx("code",{children:"configure*()"})," runs every loop."]}),o.jsxs("li",{children:["Never power auxiliary motors during INIT; gate them on ",o.jsx("code",{children:"isStarted()"}),"."]}),o.jsxs("li",{children:["Pick the sample by mechanism ",o.jsx("em",{children:"physics"})," (constant vs angle-dependent gravity), not just motor count."]}),o.jsxs("li",{children:["Feedforward (",o.jsx("code",{children:"kG"}),", ",o.jsx("code",{children:"kCos"}),") is your job; kP/kI/kD are auto-tune's job."]})]}),o.jsx("h2",{children:"Adapting them"}),o.jsxs("ol",{children:[o.jsx("li",{children:"Replace hardware names and motor directions first."}),o.jsx("li",{children:"Set a safe, reachable target."}),o.jsxs("li",{children:["Add feedforward and, for fragile mechanisms, ",o.jsx("code",{children:"positionBounds(min, max)"})," before you run."]}),o.jsx("li",{children:"Keep the OpMode structure intact so the live runner works as designed."})]}),o.jsxs("blockquote",{children:["For the full builder surface, use the"," ",o.jsx(ce,{to:"/guide/velocity/config",children:"Velocity"})," and"," ",o.jsx(ce,{to:"/guide/position/config",children:"Position"})," config references rather than guessing method names."]})]})}const FR=Ne("/guide/quick-start")({head:()=>({meta:[{title:"Quick Start — PID Pilot"},{name:"description",content:"Get relay auto-tune running on an FTC mechanism in a few minutes: extend PIDFTunerOpMode, return a Config, press start."}]}),component:UR});function UR(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Quick Start"}),o.jsxs("p",{children:["This is the shortest path to a tuned mechanism. You'll write one small OpMode, press start, and let relay auto-tune find your gains — then read them off FTC Dashboard. Assumes you've finished ",o.jsx(ce,{to:"/guide/installation",children:"Installation"}),"."]}),o.jsx("h2",{children:"1. Pick your tuner"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Velocity"})," — flywheels, shooters: anything whose target is a speed."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Position"})," — arms, elevators, slides, turrets: anything driven to a target position."]})]}),o.jsx("h2",{children:"2. Write the OpMode"}),o.jsxs("p",{children:["Extend ",o.jsx("code",{children:"PIDFTunerOpMode"})," and override exactly one of"," ",o.jsx("code",{children:"configureVelocity()"})," or ",o.jsx("code",{children:"configurePosition()"}),", returning a"," ",o.jsx("code",{children:"Config"}),". That's the whole setup — you don't supply gains; auto-tune finds them."]}),o.jsx(Ye,{filename:"TuneFlywheel.java",language:"java",code:`package org.firstinspires.ftc.teamcode;

import com.acmerobotics.dashboard.config.Config;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.DcMotorEx;
import com.qualcomm.robotcore.hardware.DcMotorSimple;
import com.pidpilot.ftc.PIDFTunerOpMode;
import com.pidpilot.ftc.VelocityPIDFTuner;

@Config
@TeleOp(name = "Tune Flywheel", group = "Tuning")
public class TuneFlywheel extends PIDFTunerOpMode {

    public static double TARGET_VELOCITY = 1800.0; // ticks/sec

    private DcMotorEx left, right;

    @Override
    protected VelocityPIDFTuner.Config configureVelocity() {
        // configure*() runs every loop, so cache hardware the first time only.
        if (left == null) {
            left = hardwareMap.get(DcMotorEx.class, "outtakeL");
            right = hardwareMap.get(DcMotorEx.class, "outtakeR");
            left.setDirection(DcMotorSimple.Direction.REVERSE);
        }
        return new VelocityPIDFTuner.Config()
                .target(TARGET_VELOCITY)
                .withMotors(left, right)
                .averageAbsoluteVelocity(true) // wheels spin opposite by design
                .telemetry(telemetry);
    }
}`}),o.jsxs("blockquote",{children:[o.jsx("code",{children:"configureVelocity()"})," / ",o.jsx("code",{children:"configurePosition()"})," are called"," ",o.jsx("strong",{children:"every control loop"})," so Dashboard edits to ",o.jsx("code",{children:"TARGET_VELOCITY"})," apply live. Always cache ",o.jsx("code",{children:"hardwareMap.get(...)"})," in a field like above — don't re-fetch each call."]}),o.jsx("h2",{children:"3. Press start — auto-tune runs"}),o.jsxs("ol",{children:[o.jsx("li",{children:"Choose a target the mechanism can realistically reach."}),o.jsxs("li",{children:["Select the OpMode under ",o.jsx("strong",{children:"Tuning"}),", press ",o.jsx("strong",{children:"INIT"}),", open FTC Dashboard, then press ",o.jsx("strong",{children:"START"}),"."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Hands clear."})," Velocity first does a short full-power sweep to estimate"," ",o.jsx("code",{children:"kF"}),", then relay auto-tune oscillates the mechanism around the target and computes gains. Position goes straight to the relay."]}),o.jsxs("li",{children:["When it finishes it holds the target. Press ",o.jsx("code",{children:"gamepad1.x"})," to flip between"," ",o.jsx("code",{children:"REV_UP"})," and ",o.jsx("code",{children:"MAINTAIN"}),"."]})]}),o.jsx("h2",{children:"4. Read the gains off Dashboard"}),o.jsxs("p",{children:["The tuner streams the computed gains plus the full controller story. Copy the set that matches the behavior you need — a good ",o.jsx("code",{children:"REV_UP"})," tune and a good"," ",o.jsx("code",{children:"MAINTAIN"})," tune are legitimately different because they solve different problems."]}),o.jsx(Ye,{language:"text",code:`RelayTune/computedMaintainKP   0.0034
RelayTune/computedMaintainKI   0.0121
RelayTune/computedMaintainKD   0.00008
Gains/activekF                 0.00048   (velocity: characterized)
RelayTune/Ku / Pu              0.019 / 0.31s
Diagnostics/phase              RUNNING`}),o.jsx("h2",{children:"5. Put them in your real subsystem"}),o.jsxs("ol",{children:[o.jsx("li",{children:"Drop the selected gains into the mechanism class you run in teleop / autonomous."}),o.jsx("li",{children:"Test under the real task, not just under the tuner OpMode."}),o.jsx("li",{children:"Re-run the tune if gearing, inertia, weight, or feedback changes."})]}),o.jsx("h2",{children:"Prefer to tune by hand?"}),o.jsxs("p",{children:["Auto-tune is the default, not a requirement. Supply ",o.jsx("code",{children:".revUpGains(...)"})," and"," ",o.jsx("code",{children:".maintainGains(...)"})," to start from your own values, or call"," ",o.jsx("code",{children:".skipRelayTuning()"})," to disable it entirely and adjust every gain live in Dashboard. The ",o.jsx(ce,{to:"/guide/concepts/pidf-terms",children:"Concepts"})," and Advanced sections cover the manual workflow."]}),o.jsxs("blockquote",{children:["Next: grab a full working example from ",o.jsx(ce,{to:"/guide/templates",children:"Sample OpModes"}),", or read ",o.jsx(ce,{to:"/guide/concepts/scoring",children:"How Auto-Tune Works"})," to understand what just happened."]})]})}const HR=Ne("/guide/installation")({head:()=>({meta:[{title:"Installation — PID Pilot"},{name:"description",content:"Add PID Pilot to your FTC project as a JitPack Gradle dependency and prepare FTC Dashboard for live tuning."}]}),component:VR});function VR(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Installation"}),o.jsx("p",{children:"PID Pilot ships as a Gradle dependency on JitPack — no copied source files. Add two repositories and two dependencies to the standard FTC project, sync, and the sample tuner OpModes appear on the Driver Station."}),o.jsx("h2",{children:"Requirements"}),o.jsxs("ul",{children:[o.jsx("li",{children:"The standard FTC SDK project (the FtcRobotController repo) in Android Studio."}),o.jsx("li",{children:"FTC Dashboard — strongly recommended; the tuner streams all its telemetry there."}),o.jsx("li",{children:"A mechanism with real feedback: motor velocity for the velocity tuner, or an encoder / analog sensor for the position tuner."}),o.jsx("li",{children:"Enough free physical range to run safe live tests."})]}),o.jsx("h2",{children:"1. Add the repositories"}),o.jsxs("p",{children:["In your project's ",o.jsx("code",{children:"build.dependencies.gradle"})," (repo root), add the FTC Dashboard maven repo and JitPack to the ",o.jsx("code",{children:"repositories"})," block:"]}),o.jsx(Ye,{language:"groovy",filename:"build.dependencies.gradle",code:`repositories {
    mavenCentral()
    google()
    maven { url = 'https://maven.brott.dev/' }   // FTC Dashboard
    maven { url = 'https://jitpack.io' }          // PID Pilot
}`}),o.jsx("h2",{children:"2. Add the dependencies"}),o.jsxs("p",{children:["In the same ",o.jsx("code",{children:"dependencies"})," block, add PID Pilot and (recommended) FTC Dashboard:"]}),o.jsx(Ye,{language:"groovy",filename:"build.dependencies.gradle",code:`dependencies {
    implementation 'com.github.PIDPilot:ftc:v1.0.4'
    implementation 'com.acmerobotics.dashboard:dashboard:0.6.0'
}`}),o.jsxs("p",{children:["Then ",o.jsx("strong",{children:"Sync Gradle"}),". Check the"," ",o.jsx("a",{href:"https://jitpack.io/#PIDPilot/ftc",target:"_blank",rel:"noreferrer",children:"JitPack page"})," ","for the latest version tag."]}),o.jsxs("blockquote",{children:["Kotlin DSL project? The same coordinates work in ",o.jsx("code",{children:"build.gradle.kts"}),":"," ",o.jsx("code",{children:'implementation("com.github.PIDPilot:ftc:v1.0.4")'}),"."]}),o.jsx("h2",{children:"3. Confirm it resolved"}),o.jsxs("p",{children:["Everything lives under the ",o.jsx("code",{children:"com.pidpilot.ftc"})," package. In any TeamCode file, this import should resolve with no red underline once the sync finishes:"]}),o.jsx(Ye,{language:"java",code:`import com.pidpilot.ftc.PIDFTunerOpMode;
import com.pidpilot.ftc.VelocityPIDFTuner;
import com.pidpilot.ftc.PositionPIDFTuner;`}),o.jsx("h2",{children:"4. Set up FTC Dashboard"}),o.jsxs("ul",{children:[o.jsxs("li",{children:["With the robot running, open ",o.jsx("code",{children:"http://192.168.43.1:8080/dash"})," (RC phone) or"," ",o.jsx("code",{children:"http://192.168.43.1:8080"})," (Control Hub) on a laptop on the robot's network."]}),o.jsxs("li",{children:["The tuner mirrors all telemetry there and exposes every tunable value as a live"," ",o.jsx("code",{children:"@Config"})," field — this is where you watch auto-tune and refine gains."]})]}),o.jsx("h2",{children:"5. Deploy and run"}),o.jsxs("p",{children:["Build and install to the Robot Controller as usual. The sample tuners appear in the OpMode list under the ",o.jsx("strong",{children:"Tuning"})," group. Pick one, INIT, then START — and keep hands clear while auto-tune runs."]}),o.jsx("h2",{children:"Compatibility"}),o.jsxs("p",{children:["Built against FTC SDK ",o.jsx("code",{children:"11.2.0"})," and FTC Dashboard ",o.jsx("code",{children:"0.6.0"}),". The API it uses has been stable across seasons, so older SDKs generally work — but if you hit a"," ",o.jsx("code",{children:"NoSuchMethodError"}),", match the library to your Robot Controller app's season."]}),o.jsxs("blockquote",{children:["Next: ",o.jsx(ce,{to:"/guide/quick-start",children:"Quick Start"})," wires your first tuning OpMode and walks through what to watch once auto-tune begins."]})]})}const GR=Ne("/guide/velocity/refinement")({head:()=>({meta:[{title:"Velocity Running Control & Headroom — PID Pilot"},{name:"description",content:"How VelocityPIDFTuner runs closed-loop control, enforces motor mode, manages target ramping, and warns about unrealistic gains."}]}),component:qR});function qR(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Running Control & Headroom"}),o.jsxs("p",{children:["Once the velocity tuner reaches ",o.jsx("strong",{children:"RUNNING"}),", it becomes a normal external closed-loop controller. What makes the framework valuable here is not only the control law, but the sanity logic wrapped around it: motor-mode enforcement, target ramping, integrator headroom, and warnings when the requested operating point is physically dubious."]}),o.jsx("h2",{children:"Main running loop"}),o.jsxs("ol",{children:[o.jsx("li",{children:"Read average mechanism velocity."}),o.jsx("li",{children:"Resolve the active target, including optional ramping."}),o.jsxs("li",{children:["Apply the active gain family for ",o.jsx("code",{children:"REV_UP"})," or ",o.jsx("code",{children:"MAINTAIN"}),"."]}),o.jsxs("li",{children:["Compute PID output through ",o.jsx("code",{children:"PIDFController"}),"."]}),o.jsx("li",{children:"Add the resolved feedforward term."}),o.jsx("li",{children:"Write raw power to the hardware."}),o.jsx("li",{children:"Publish telemetry and warnings."})]}),o.jsx("h2",{children:"Optional target ramping"}),o.jsxs("p",{children:[o.jsx("code",{children:"velocityRampTicksPerSecPerSec(double)"})," lets the tuner slew the active target instead of commanding an instantaneous step. This matters when the mechanism or power system needs a smoother approach before full closed-loop behavior takes over."]}),o.jsx("h2",{children:"Why ensureMotorMode exists"}),o.jsxs("p",{children:["The tuner must keep motors in ",o.jsx("code",{children:"RUN_WITHOUT_ENCODER"}),". If another mode slipped in during live config refresh, ",o.jsx("code",{children:"setPower()"})," could stop meaning raw power and the SDK inner loop could start interpreting the command differently. ",o.jsx("code",{children:"ensureMotorMode()"}),"prevents that nondeterminism."]}),o.jsx("h2",{children:"Derived gain sanity logic"}),o.jsxs("p",{children:[o.jsx("code",{children:"updateDerivedGainState()"})," turns controller math into practical warnings. It can derive ",o.jsx("code",{children:"integralSumMax"})," from remaining output headroom and tell the operator when either feedforward or proportional action is already consuming more output than the mechanism can realistically provide."]}),o.jsx(Ye,{language:"text",code:`warn if kF consumes all headroom
warn if kP * target is much larger than remaining headroom
derive integralSumMax from available output when not overridden`}),o.jsx("h2",{children:"Telemetry categories during running control"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Setpoint, measured velocity, error, and active tuning mode"}),o.jsxs("li",{children:[o.jsx("code",{children:"pTerm"}),", ",o.jsx("code",{children:"iTerm"}),", ",o.jsx("code",{children:"dTerm"}),", and ",o.jsx("code",{children:"fTerm"})]}),o.jsx("li",{children:"Filtered derivative information from the controller core"}),o.jsx("li",{children:"Active gains, feedforward source notes, and warnings"}),o.jsx("li",{children:"Relay or characterization results that remain relevant to the session"})]}),o.jsx("blockquote",{children:"When a velocity session looks wrong, check headroom and motor mode first. A bad feedforward baseline or a motor-mode conflict will make every gain discussion less honest."})]})}const YR=Ne("/guide/velocity/overview")({head:()=>({meta:[{title:"Velocity Tuner Overview — PID Pilot"},{name:"description",content:"Overview of VelocityPIDFTuner, its raw ticks-per-second model, lifecycle phases, and operational responsibilities."}]}),component:KR});function KR(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Velocity Tuner"}),o.jsxs("p",{children:[o.jsx("code",{children:"VelocityPIDFTuner"})," tunes speed-controlled mechanisms — flywheels and shooters. On start it estimates a physical ",o.jsx("code",{children:"kF"}),", then"," ",o.jsx(ce,{to:"/guide/velocity/ku-search",children:"relay auto-tunes"})," kP/kI/kD for you. Beyond that it handles feedforward, phase routing, disruption measurement, and telemetry rich enough to explain why the controller behaves the way it does."]}),o.jsxs("blockquote",{children:["New here? The fastest path is ",o.jsx(ce,{to:"/guide/quick-start",children:"Quick Start"})," — bind your motors, set a target, press start, and read the gains off Dashboard. The pages below explain each phase in depth."]}),o.jsx("h2",{children:"Raw units are deliberate"}),o.jsxs("p",{children:["The velocity tuner works in raw ",o.jsx("code",{children:"ticks/s"}),". That means the gain values often look numerically small, but the numbers are honest: ",o.jsx("code",{children:"kP"}),", ",o.jsx("code",{children:"kI"}),","," ",o.jsx("code",{children:"kD"}),", and ",o.jsx("code",{children:"kF"})," all correspond to real physical units instead of a hidden normalization scheme."]}),o.jsx("h2",{children:"Lifecycle phases"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[o.jsx("strong",{children:"CHARACTERIZING"})," estimates a physical ",o.jsx("code",{children:"kF"})," from max velocity."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"SETTLING"})," pauses output and clears controller memory before the next step."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"RELAY_TUNING"})," creates a controlled oscillation to estimate usable gains."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"RELAY_COMPLETE"})," briefly surfaces relay results before normal control takes over."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"RUNNING"})," performs normal closed-loop control with active gains."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"DISRUPTION"})," measures recovery after a real disturbance when hold quality matters."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"COMPLETE"})," exposes final summary lines and copyable values."]})]}),o.jsx("h2",{children:"Main responsibilities inside the class"}),o.jsxs("ol",{children:[o.jsx("li",{children:"Manage active gain families and mode switching."}),o.jsx("li",{children:"Resolve the physical feedforward source."}),o.jsx("li",{children:"Characterize startup behavior when needed."}),o.jsx("li",{children:"Run relay auto-tuning when enabled."}),o.jsx("li",{children:"Apply normal closed-loop control in raw power space."}),o.jsxs("li",{children:["Measure disruption recovery in ",o.jsx("code",{children:"MAINTAIN"}),"."]}),o.jsx("li",{children:"Render operational telemetry and warnings."})]}),o.jsx("h2",{children:"Why motor mode enforcement matters"}),o.jsxs("p",{children:["The tuner is an external power controller and must keep motors in"," ",o.jsx("code",{children:"RUN_WITHOUT_ENCODER"}),". Because the surrounding OpMode refreshes config every loop, user code might accidentally reassert another run mode. If that happened and the tuner did not push back, the SDK’s inner loop could start fighting the tuner's outer loop."]}),o.jsx("h2",{children:"Important next pages"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[o.jsx(ce,{to:"/guide/velocity/f-sweep",children:"Characterization & Feedforward"})," explains how physical ",o.jsx("code",{children:"kF"})," is sourced."]}),o.jsxs("li",{children:[o.jsx(ce,{to:"/guide/velocity/ku-search",children:"Relay Auto-Tuning"})," explains how the tuner derives conservative starting gains."]}),o.jsxs("li",{children:[o.jsx(ce,{to:"/guide/velocity/refinement",children:"Running Control & Headroom"})," explains the normal update loop, ramping, and gain sanity warnings."]})]})]})}const XR=Ne("/guide/velocity/ku-search")({head:()=>({meta:[{title:"Velocity Relay Auto-Tuning — PID Pilot"},{name:"description",content:"How VelocityPIDFTuner uses a hysteretic relay to estimate Ku, Pu, and conservative starting gains."}]}),component:QR});function QR(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Relay Auto-Tuning"}),o.jsxs("p",{children:["The velocity tuner’s automatic gain discovery is built around a hysteretic relay rather than a hand-wavy default gain. This is the framework’s answer to the reality that a single starting ",o.jsx("code",{children:"kP"})," cannot fit both a fast flywheel and a slow high-inertia mechanism."]}),o.jsx("h2",{children:"What the relay phase does"}),o.jsxs("ol",{children:[o.jsx("li",{children:"The tuner effectively zeros traditional PID gains."}),o.jsx("li",{children:"It runs feedforward plus a relay signal around the target."}),o.jsx("li",{children:"The relay forces a stable oscillation instead of relying on chance instability."}),o.jsx("li",{children:"Oscillation amplitude and period are measured."}),o.jsxs("li",{children:["The tuner estimates ",o.jsx("code",{children:"Ku"})," and ",o.jsx("code",{children:"Pu"}),", then computes conservative"," ",o.jsx("code",{children:"REV_UP"})," and ",o.jsx("code",{children:"MAINTAIN"})," gain sets."]})]}),o.jsx("h2",{children:"Relay subsystem states"}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx("code",{children:"WAITING_FOR_TARGET"})}),o.jsx("li",{children:o.jsx("code",{children:"OSCILLATING"})}),o.jsx("li",{children:o.jsx("code",{children:"COMPUTING"})}),o.jsx("li",{children:o.jsx("code",{children:"COMPLETE"})})]}),o.jsx("p",{children:"It also tracks which side of the target the signal is on so it can detect clean zero crossings and compute the oscillation period honestly."}),o.jsx("h2",{children:"Why hysteresis is essential"}),o.jsx("p",{children:"Encoder noise near target would make a zero-hysteresis relay chatter constantly. The hysteresis band prevents false switching so the tuner measures a real oscillation instead of noise around the setpoint."}),o.jsx("h2",{children:"Operator-facing knobs"}),o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Method"}),o.jsx("th",{children:"Purpose"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"skipRelayTuning()"})}),o.jsx("td",{children:"Bypass relay auto-tuning entirely"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"relayAmplitude(double)"})}),o.jsx("td",{children:"Control how strong the relay push is"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"relayHysteresisBandPct(double)"})}),o.jsx("td",{children:"Control how wide the deadband is near target"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"relayDetune(double)"})}),o.jsx("td",{children:"Scale the computed gains conservatively after estimation"})]})]})]}),o.jsx("h2",{children:"Methods worth knowing"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[o.jsx("code",{children:"runRelayTuningLoop(...)"})," executes the active relay behavior."]}),o.jsxs("li",{children:[o.jsx("code",{children:"applyRelayComputedGains()"})," loads the calculated gain families."]}),o.jsxs("li",{children:[o.jsx("code",{children:"applyRelayHeadroomGuard(...)"})," keeps the results physically reasonable."]}),o.jsxs("li",{children:[o.jsx("code",{children:"appendRelayTuneNote(...)"})," surfaces what happened in telemetry."]})]}),o.jsx("h2",{children:"What comes out of the phase"}),o.jsx(Ye,{language:"text",code:`oscillation amplitude
oscillation period
Ku
Pu
computed MAINTAIN gains
computed REV_UP gains`}),o.jsx("blockquote",{children:"Relay auto-tuning is meant to give the team a mechanism-specific starting point. It is not a license to ignore telemetry, headroom warnings, or impossible targets."})]})}const ZR=Ne("/guide/velocity/f-sweep")({head:()=>({meta:[{title:"Velocity Characterization & Feedforward — PID Pilot"},{name:"description",content:"How VelocityPIDFTuner characterizes max velocity, computes physical kF, and chooses a feedforward source."}]}),component:WR});function WR(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Characterization & Feedforward"}),o.jsx("p",{children:"The velocity tuner begins by trying to establish a believable physical feedforward. This is one of the most important design choices in the framework because good velocity control gets dramatically easier once the loop stops asking PID to supply the entire baseline effort."}),o.jsx("h2",{children:"Startup characterization"}),o.jsxs("p",{children:["During ",o.jsx("strong",{children:"CHARACTERIZING"}),", the tuner drives the mechanism at full power, samples the final portion of the run, estimates max steady-state velocity, and computes:"]}),o.jsx(Ye,{language:"text",code:"kF = 1 / maxVelocity"}),o.jsxs("p",{children:["In this framework, that is a real physical feedforward in motor power per"," ",o.jsx("code",{children:"ticks/s"}),". The point is to tell the controller how much output the mechanism usually needs just to maintain a target speed."]}),o.jsx("h2",{children:"Why the tuner pauses after characterization"}),o.jsxs("p",{children:["The ",o.jsx("strong",{children:"SETTLING"})," phase immediately follows characterization. Output is driven to zero, controller memory is cleared, and the tuner pauses briefly so the next phase starts from a clean state instead of inheriting momentum and stale integrator history from full power operation."]}),o.jsx("h2",{children:"Feedforward can come from multiple sources"}),o.jsxs("ul",{children:[o.jsxs("li",{children:["A newly characterized physical ",o.jsx("code",{children:"kF"}),"."]}),o.jsxs("li",{children:["A manual value provided through ",o.jsx("code",{children:"skipCharacterization(manualKF)"}),"."]}),o.jsxs("li",{children:["A nonzero ",o.jsx("code",{children:"kF"})," embedded directly in the active gain set."]})]}),o.jsx("p",{children:"The tuner treats feedforward selection and phase routing as related but not identical. Once relay tuning or running control is already active, changing which feedforward source is available should not destroy the current state machine."}),o.jsx("h2",{children:"Methods behind the routing"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[o.jsx("code",{children:"resolveActivePhysicalKf()"})," chooses the current physical source."]}),o.jsxs("li",{children:[o.jsx("code",{children:"resolveModePhysicalKf(...)"})," checks the gain family currently in use."]}),o.jsxs("li",{children:[o.jsx("code",{children:"usesManualKf()"})," and ",o.jsx("code",{children:"usesConfiguredGainKf()"})," explain why a source won."]}),o.jsxs("li",{children:[o.jsx("code",{children:"syncFeedforwardMode()"})," keeps phase logic coherent while sources change."]})]}),o.jsx("h2",{children:"What to watch in telemetry"}),o.jsxs("ul",{children:[o.jsxs("li",{children:["The estimated max velocity and characterized ",o.jsx("code",{children:"kF"}),"."]}),o.jsxs("li",{children:["Whether the tuner says it is using a manual or configured gain-set ",o.jsx("code",{children:"kF"}),"."]}),o.jsx("li",{children:"Any warning that feedforward already consumes too much output headroom."})]}),o.jsxs("blockquote",{children:["If the characterized ",o.jsx("code",{children:"kF"})," looks physically unreasonable, stop there. Do not try to “save” the session by adding more P or I on top of a bad baseline effort estimate."]})]})}const $R=Ne("/guide/velocity/disruption")({head:()=>({meta:[{title:"Velocity Disruption Sampling — PID Pilot"},{name:"description",content:"How the velocity tuner measures disturbance recovery when MAINTAIN behavior matters more than raw spin-up."}]}),component:JR});function JR(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Disruption Sampling"}),o.jsx("p",{children:"The velocity tuner includes a second state machine dedicated to measuring recovery after a real disturbance. This matters because a flywheel that looks good on a clean step response can still perform badly once game pieces start loading it."}),o.jsx("h2",{children:"Disruption stages"}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx("code",{children:"WAITING"})}),o.jsx("li",{children:o.jsx("code",{children:"ARMED"})}),o.jsx("li",{children:o.jsx("code",{children:"DETECTING"})}),o.jsx("li",{children:o.jsx("code",{children:"RECOVERING"})}),o.jsx("li",{children:o.jsx("code",{children:"COMPLETE"})})]}),o.jsx("h2",{children:"What the phase measures"}),o.jsxs("ol",{children:[o.jsx("li",{children:"Wait for the mechanism to be stably near target."}),o.jsx("li",{children:"Detect or apply a disturbance depending on the configured workflow."}),o.jsx("li",{children:"Measure how far velocity drops."}),o.jsx("li",{children:"Measure how long it takes to recover into the ready band."}),o.jsx("li",{children:"Repeat until the requested number of samples is collected."})]}),o.jsx("h2",{children:"Configuration knobs"}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx("code",{children:"runDisruptionPhase(boolean)"})}),o.jsx("li",{children:o.jsx("code",{children:"disruptionSamples(int)"})}),o.jsx("li",{children:o.jsx("code",{children:"disruptionReadyStableMs(long)"})}),o.jsx("li",{children:o.jsx("code",{children:"disruptionDetectTimeoutMs(long)"})}),o.jsx("li",{children:o.jsx("code",{children:"disruptionRecoveryTimeoutMs(long)"})}),o.jsx("li",{children:o.jsx("code",{children:"disruptionReadyBandPct(double)"})}),o.jsx("li",{children:o.jsx("code",{children:"disruptionDropThresholdPct(double)"})})]}),o.jsx("h2",{children:"Why it belongs in MAINTAIN"}),o.jsxs("p",{children:[o.jsx("code",{children:"MAINTAIN"})," is the controller personality you care about once the mechanism is already near target and outside forces start pushing it around. Disruption telemetry is the framework’s way of quantifying that job instead of assuming a clean spin-up tells the whole story."]}),o.jsx("h2",{children:"What shows up in telemetry"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Recovery timing"}),o.jsx("li",{children:"Drop magnitude"}),o.jsx("li",{children:"Sample counts and completion status"}),o.jsx("li",{children:"Instructional notes about when the mechanism is ready for the next disturbance"})]}),o.jsxs("blockquote",{children:["If a shooter must survive repeated loading, a fast ",o.jsx("code",{children:"REV_UP"})," result alone is not enough. Use disruption recovery to decide whether the hold-side gain family is the one you should ship."]})]})}const e2=Ne("/guide/velocity/config")({head:()=>({meta:[{title:"Velocity Config Reference — PID Pilot"},{name:"description",content:"Reference for VelocityPIDFTuner.Config, including feedforward sources, relay tuning, disruption settings, and validation rules."}]}),component:t2});function t2(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Velocity Config Reference"}),o.jsxs("p",{children:[o.jsx("code",{children:"VelocityPIDFTuner.Config"})," is the public API for constructing a velocity tuning session. The builder is organized around target selection, motor binding, gain families, feedforward sourcing, relay behavior, and disruption measurement."]}),o.jsx("h2",{children:"Required fields"}),o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Method"}),o.jsx("th",{children:"Purpose"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"target(double)"})}),o.jsxs("td",{children:["Required target velocity in ",o.jsx("code",{children:"ticks/s"})]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"withMotors(DcMotorEx...)"})}),o.jsx("td",{children:"Bind one or more velocity motors controlled together"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"telemetry(Telemetry)"})}),o.jsx("td",{children:"Supply telemetry for Driver Station and Dashboard mirroring"})]})]})]}),o.jsx("h2",{children:"Motor binding"}),o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Method"}),o.jsx("th",{children:"Notes"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"withMotors(DcMotorEx...)"})}),o.jsxs("td",{children:["Bind one or more motors driven together. The tuner forces"," ",o.jsx("code",{children:"RUN_WITHOUT_ENCODER"})," so its outer loop owns control."]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"averageAbsoluteVelocity(boolean)"})}),o.jsxs("td",{children:["Average ",o.jsx("code",{children:"|velocity|"})," instead of signed velocity — use when paired wheels spin in opposite directions."]})]})]})]}),o.jsx("h2",{children:"Mode and gain families"}),o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Method"}),o.jsx("th",{children:"Purpose"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"tuningMode(PIDFTuningMode)"})}),o.jsx("td",{children:"Choose the initial active gain family"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"revUpGains(kP, kI, kD, kF)"})}),o.jsxs("td",{children:["Provide manual gains for ",o.jsx("code",{children:"REV_UP"})]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"maintainGains(kP, kI, kD, kF)"})}),o.jsxs("td",{children:["Provide manual gains for ",o.jsx("code",{children:"MAINTAIN"})]})]})]})]}),o.jsx("h2",{children:"Feedforward and characterization"}),o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Method"}),o.jsx("th",{children:"Purpose"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"skipCharacterization(double manualKF)"})}),o.jsxs("td",{children:["Skip startup characterization and force a physical ",o.jsx("code",{children:"kF"})]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"integralSumMax(double)"})}),o.jsx("td",{children:"Override anti-windup if you do not want headroom-derived limits"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"derivativeAlpha(double)"})}),o.jsx("td",{children:"Tune derivative filtering in the shared controller core"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"velocityRampTicksPerSecPerSec(double)"})}),o.jsx("td",{children:"Slew-limit target changes during running control"})]})]})]}),o.jsx("h2",{children:"Relay auto-tuning"}),o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Method"}),o.jsx("th",{children:"Purpose"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"skipRelayTuning()"})}),o.jsx("td",{children:"Bypass relay auto-tuning completely"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"relayAmplitude(double)"})}),o.jsx("td",{children:"Set relay strength"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"relayHysteresisBandPct(double)"})}),o.jsx("td",{children:"Set relay deadband as a fraction of target"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"relayDetune(double)"})}),o.jsx("td",{children:"Scale relay-computed gains conservatively"})]})]})]}),o.jsx("h2",{children:"Disruption sampling"}),o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Method"}),o.jsx("th",{children:"Purpose"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"runDisruptionPhase(boolean)"})}),o.jsx("td",{children:"Enable or disable disruption timing"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"disruptionSamples(int)"})}),o.jsx("td",{children:"Number of recovery samples to collect"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"disruptionReadyStableMs(long)"})}),o.jsx("td",{children:"Stable time required before arming a sample"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"disruptionDetectTimeoutMs(long)"})}),o.jsx("td",{children:"Maximum wait before the sample is considered missed"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"disruptionRecoveryTimeoutMs(long)"})}),o.jsx("td",{children:"Maximum recovery wait per sample"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"disruptionReadyBandPct(double)"})}),o.jsx("td",{children:"Ready band around the target velocity"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"disruptionDropThresholdPct(double)"})}),o.jsx("td",{children:"Velocity drop required to count as a disturbance"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"realDisruptionRefineIterations(int)"})}),o.jsx("td",{children:"Reserved placeholder for future expansion"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"realDisruptionRefineSamples(int)"})}),o.jsx("td",{children:"Reserved placeholder for future expansion"})]})]})]}),o.jsx("h2",{children:"Validation rules"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Target must be present."}),o.jsx("li",{children:"At least one motor must be supplied."}),o.jsx("li",{children:"Telemetry must be present."})]}),o.jsx("h2",{children:"Example session"}),o.jsx(Ye,{language:"java",code:`return new VelocityPIDFTuner.Config()
        .target(TARGET_VELOCITY)
        .tuningMode(PIDFTuningMode.MAINTAIN)
        .withMotors(left, right)
        .averageAbsoluteVelocity(true)
        .relayAmplitude(0.12)
        .relayHysteresisBandPct(0.04)
        .velocityRampTicksPerSecPerSec(6000.0)
        .runDisruptionPhase(true)
        .disruptionSamples(5)
        .telemetry(telemetry);`})]})}const n2=Ne("/guide/reference/telemetry")({head:()=>({meta:[{title:"Telemetry & Final Summary — PID Pilot"},{name:"description",content:"How PID Pilot uses telemetry as a diagnostic surface across the base runner, controller core, velocity tuner, and position tuner."}]}),component:o2});function o2(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Telemetry & Final Summary"}),o.jsx("p",{children:"Telemetry is one of the central design features of PID Pilot. The framework mirrors output to Driver Station and FTC Dashboard when Dashboard is present, and it tries to expose enough internal state that a team can tell whether it is looking at bad feedforward, bad damping, integral windup, poor bounds, or a mechanism limitation."}),o.jsx("h2",{children:"Base runner behavior"}),o.jsxs("p",{children:[o.jsx("code",{children:"PIDFTunerOpMode"})," mirrors telemetry to both surfaces and uses reflection to avoid a hard runtime dependency on Dashboard. That means the session still runs if Dashboard is unavailable, but the richer live workflow remains available when it is connected."]}),o.jsx("h2",{children:"Controller-core internals"}),o.jsxs("p",{children:["Because ",o.jsx("code",{children:"PIDFController"})," stores term contributions and measurement derivatives directly, the tuners can publish controller internals without duplicating the math."]}),o.jsxs("ul",{children:[o.jsxs("li",{children:[o.jsx("code",{children:"pTerm"}),", ",o.jsx("code",{children:"iTerm"}),", ",o.jsx("code",{children:"dTerm"}),", ",o.jsx("code",{children:"fTerm"})]}),o.jsx("li",{children:"Raw and filtered measurement-rate estimates"}),o.jsx("li",{children:"Last output, error, and error rate"})]}),o.jsx("h2",{children:"Velocity tuner telemetry"}),o.jsx(Ye,{language:"text",code:`mode                 MAINTAIN
phase                RUNNING
target velocity      ...
measured velocity    ...
error                ...
pTerm / iTerm / dTerm / fTerm
characterized kF     ...
relay Ku / Pu        ...
warnings             ...
disruption recovery  ...`}),o.jsx("p",{children:"Velocity sessions can also expose characterization data, relay auto-tune metrics, feedforward routing notes, disruption timing, and copyable final gains."}),o.jsx("h2",{children:"Position tuner telemetry"}),o.jsx(Ye,{language:"text",code:`mode                 REV_UP
requested target     ...
clamped target       ...
profiled target      ...
profile velocity     ...
measured position    ...
actuator mode        ...
feedback mode        ...
pTerm / iTerm / dTerm / fTerm
gravity / cosine ff  ...
constraint status    ...
disruption stage     ...`}),o.jsx("p",{children:"Position sessions add actuator-family and feedback-mode context, target clamping state, profile state, and feedforward breakdown because those things are often as important as the gains themselves."}),o.jsx("h2",{children:"Final summary"}),o.jsx("p",{children:"At the end of a session, the tuner keeps a copyable summary on screen. The exact contents depend on the control family, but the summary is supposed to capture both the values you might copy and the reason those values were trustworthy."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Active tuning mode and gain family"}),o.jsx("li",{children:"Final gain values"}),o.jsx("li",{children:"Characterized or resolved feedforward notes"}),o.jsx("li",{children:"Relay results if relay tuning ran"}),o.jsx("li",{children:"Disruption summary if disruption sampling ran"})]}),o.jsx("blockquote",{children:"The best use of telemetry is comparative: if you change a feedforward term, a bound, or a target and the trace suddenly makes more physical sense, you learned something about the mechanism before you ever copied a new number."})]})}const i2=Ne("/guide/reference/setup-rules")({head:()=>({meta:[{title:"Setup Rules — PID Pilot"},{name:"description",content:"Hard setup rules for using PID Pilot safely and in ways that match the framework’s control model."}]}),component:a2});function a2(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Setup Rules"}),o.jsx("p",{children:"These are the rules worth treating as non-negotiable. Ignoring them usually produces a bad session for reasons that look like tuning trouble but are really setup trouble."}),o.jsx("h2",{children:"Override only one configure method"}),o.jsxs("p",{children:["A tuning OpMode must override exactly one of ",o.jsx("code",{children:"configureVelocity()"})," or"," ",o.jsx("code",{children:"configurePosition()"}),". The base runner expects a single active control family."]}),o.jsx("h2",{children:"Remember that config refreshes every loop"}),o.jsx("p",{children:"Any hardware assumptions you make inside the configure method need to remain compatible with the tuner on every refresh cycle. Live Dashboard edits are powerful, but they mean the OpMode is not a one-time constructor."}),o.jsx("h2",{children:"Let the velocity tuner own motor mode"}),o.jsxs("p",{children:["The velocity tuner is an external power controller and must keep motors in"," ",o.jsx("code",{children:"RUN_WITHOUT_ENCODER"}),". Do not rely on the SDK’s internal velocity mode to “help” it. That produces two loops fighting the same mechanism."]}),o.jsx("h2",{children:"Choose exactly one position actuator family"}),o.jsx("p",{children:"For the position tuner, bind motors, standard servos, or CR servos once and only once. Mixed or ambiguous actuator selection is a configuration error, not an advanced feature."}),o.jsx("h2",{children:"Use meaningful units and safe bounds"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Targets should be in the same units as the feedback source."}),o.jsxs("li",{children:["Position mechanisms with hard stops should use ",o.jsx("code",{children:"positionBounds(...)"}),"."]}),o.jsx("li",{children:"Standard servo modes need a valid open-loop mapping range."})]}),o.jsx("h2",{children:"Do not treat position kF like velocity kF"}),o.jsxs("p",{children:["Velocity ",o.jsx("code",{children:"kF"})," is physical feedforward. Position ",o.jsx("code",{children:"kF"})," is static trim. If you use one concept as though it were the other, the rest of the tuning session becomes hard to interpret."]}),o.jsx("h2",{children:"Supply telemetry and watch it live"}),o.jsxs("p",{children:["Always pass ",o.jsx("code",{children:"telemetry(telemetry)"}),". PID Pilot is designed around rich telemetry surfaces. Running blind removes one of the framework’s strongest advantages."]}),o.jsx("h2",{children:"Use conservative first targets"}),o.jsx("p",{children:"The first run should prove the control path, not challenge the mechanism at its absolute limit. Ask for targets the mechanism can really reach and hold before you start raising ambition."})]})}const r2=Ne("/guide/reference/practical-notes")({head:()=>({meta:[{title:"Workflows & Caveats — PID Pilot"},{name:"description",content:"Practical engineering workflows, tuner differences, extension points, and real-world caveats for PID Pilot."}]}),component:s2});function s2(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Workflows & Caveats"}),o.jsx("p",{children:"This page condenses the practical parts of the README that matter once the framework is already installed: how teams typically use each tuner, how the two tuners differ, where the framework is meant to be extended, and what assumptions still need engineering judgment."}),o.jsx("h2",{children:"Typical velocity workflow"}),o.jsxs("ol",{children:[o.jsxs("li",{children:["Start from ",o.jsx("code",{children:"TuneFlywheelNew"})," or an equivalent velocity OpMode."]}),o.jsx("li",{children:"Set a believable target speed."}),o.jsxs("li",{children:["Let characterization compute a physical ",o.jsx("code",{children:"kF"})," unless you already trust one."]}),o.jsx("li",{children:"Let relay auto-tuning derive starting gain families when appropriate."}),o.jsxs("li",{children:["Compare ",o.jsx("code",{children:"REV_UP"})," and ",o.jsx("code",{children:"MAINTAIN"})," against the mechanism’s real job."]}),o.jsx("li",{children:"Use disruption sampling if the wheel must survive repeated load events."})]}),o.jsx("h2",{children:"Typical position workflow"}),o.jsxs("ol",{children:[o.jsx("li",{children:"Pick the correct actuator family and feedback source first."}),o.jsx("li",{children:"Make sure target units are meaningful and consistent."}),o.jsx("li",{children:"Set tolerance and hard bounds early."}),o.jsx("li",{children:"Add gravity or cosine compensation if the mechanism physics need it."}),o.jsx("li",{children:"Enable motion profiling if instantaneous steps are too violent."}),o.jsxs("li",{children:["Tune approach behavior with ",o.jsx("code",{children:"REV_UP"})," and hold behavior with"," ",o.jsx("code",{children:"MAINTAIN"}),"."]})]}),o.jsx("h2",{children:"Important differences between the tuners"}),o.jsxs("ul",{children:[o.jsxs("li",{children:["Velocity uses raw ",o.jsx("code",{children:"ticks/s"}),"; position uses normalized move scaling internally."]}),o.jsx("li",{children:"Velocity has characterization and relay auto-tuning; position focuses on actuator and feedforward modeling."}),o.jsxs("li",{children:["Velocity ",o.jsx("code",{children:"kF"})," is physical feedforward; position ",o.jsx("code",{children:"kF"})," is static trim."]}),o.jsx("li",{children:"Position supports motors and servos; velocity is motor-oriented."}),o.jsx("li",{children:"Position can enforce hard bounds; velocity focuses more on motor-mode ownership and headroom sanity."})]}),o.jsx("h2",{children:"Common extension points"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Config builder surfaces"}),o.jsx("li",{children:"Telemetry keys and status blocks"}),o.jsx("li",{children:"Sample OpModes"}),o.jsx("li",{children:"Relay formulas or acceptance logic"}),o.jsx("li",{children:"Motion-profile shape"}),o.jsx("li",{children:"Final summary formatting or export helpers"})]}),o.jsx("h2",{children:"Practical caveats"}),o.jsxs("ul",{children:[o.jsx("li",{children:"The velocity tuner expects to own motor power control completely."}),o.jsxs("li",{children:["The velocity tuner must keep motors in ",o.jsx("code",{children:"RUN_WITHOUT_ENCODER"}),"."]}),o.jsxs("li",{children:["A nonzero position ",o.jsx("code",{children:"kF"})," is not the same concept as velocity ",o.jsx("code",{children:"kF"}),"."]}),o.jsx("li",{children:"Standard-servo closed-loop quality depends heavily on the quality of external feedback."}),o.jsxs("li",{children:["Motion profiling only affects ",o.jsx("code",{children:"REV_UP"})," in the position tuner."]}),o.jsx("li",{children:"Disruption phases are meaningful only when real feedback exists."}),o.jsx("li",{children:"Dashboard defaults are starting points, not guarantees."})]}),o.jsx("blockquote",{children:"PID Pilot makes live control work easier to reason about. It does not replace mechanical quality, safe targets, or the need to compare tuner behavior against the real match task."})]})}const l2=Ne("/guide/reference/faq")({head:()=>({meta:[{title:"FAQ — PID Pilot"},{name:"description",content:"Frequently asked questions about PID Pilot’s tuning modes, feedforward semantics, motor ownership, and supported actuator workflows."}]}),component:c2});function c2(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"FAQ"}),o.jsx("h2",{children:"Why are my REV_UP and MAINTAIN gains different?"}),o.jsxs("p",{children:["Because the framework treats them as different controller personalities. ",o.jsx("code",{children:"REV_UP"})," ","prioritizes getting there quickly. ",o.jsx("code",{children:"MAINTAIN"})," prioritizes holding near target and recovering from disturbance. Different valid gains for the same mechanism are expected."]}),o.jsx("h2",{children:"Why does the velocity tuner use raw ticks per second?"}),o.jsx("p",{children:"So gain values and feedforward stay physically interpretable. The numbers may look small, but they describe real units rather than a hidden normalization scheme."}),o.jsx("h2",{children:"Why does position kF feel different from velocity kF?"}),o.jsxs("p",{children:["Because they are different concepts. Velocity ",o.jsx("code",{children:"kF"})," is baseline effort per"," ",o.jsx("code",{children:"ticks/s"}),". Position ",o.jsx("code",{children:"kF"})," is a static trim or friction-help term."]}),o.jsx("h2",{children:"Why does the tuner keep forcing RUN_WITHOUT_ENCODER?"}),o.jsx("p",{children:"To stop the SDK’s inner loop from fighting the framework’s outer loop. VelocityPIDFTuner must own motor power control if its math is going to mean what the telemetry says it means."}),o.jsx("h2",{children:"Can I skip characterization or relay tuning?"}),o.jsxs("p",{children:["Yes. Use ",o.jsx("code",{children:"skipCharacterization(manualKF)"})," when you already trust a physical feedforward, and ",o.jsx("code",{children:"skipRelayTuning()"})," when you are supplying manual gain families or want to bypass automatic gain estimation."]}),o.jsx("h2",{children:"Why is disruption unavailable in some position sessions?"}),o.jsx("p",{children:"Because disruption logic is only meaningful when there is real feedback control. In standard servo open-loop mode, the tuner is only mapping target to servo position, so there is no closed-loop hold behavior to evaluate."}),o.jsx("h2",{children:"Do I always need position bounds?"}),o.jsx("p",{children:"If the mechanism has hard end stops, yes. Bounds are not only for clamping requested targets; they also prevent the controller from continuing to push outward once the mechanism is already at a limit."}),o.jsx("h2",{children:"Can I use PID Pilot with custom hardware arrangements?"}),o.jsx("p",{children:"Usually yes, as long as you can represent the mechanism with one supported actuator family and a meaningful feedback source. The sample OpModes are meant to be adapted, not copied blindly."}),o.jsx("h2",{children:"When should I re-run a tune?"}),o.jsx("p",{children:"Re-run when the physics change: different gearing, repaired mechanism, new motor, changed wheel inertia, changed arm geometry, or different feedback hardware. PIDF values are tied to the actual mechanism, not to the codebase in the abstract."})]})}const u2=Ne("/guide/position/refinement")({head:()=>({meta:[{title:"Position Bounds & Control Flow — PID Pilot"},{name:"description",content:"How PositionPIDFTuner applies bounds, qualifies at-target state, and executes its closed-loop update path."}]}),component:d2});function d2(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Bounds & Control Flow"}),o.jsx("p",{children:"The position tuner’s control loop includes more than PID and feedforward. It has to manage actuator-specific writes, target clamping, at-target qualification, and protection against continued outward drive at hard stops."}),o.jsx("h2",{children:"Closed-loop update flow"}),o.jsx(Ye,{language:"text",code:`handle SERVO_OPEN_LOOP separately if needed
read feedback position
update motion profile
apply active gains
normalize target and measurement
compute PID output
compute feedforward
apply actuator-specific output
update at-target counter
update disruption phase
push telemetry`}),o.jsx("h2",{children:"Hard position constraints"}),o.jsxs("p",{children:[o.jsx("code",{children:"positionBounds(minTicks, maxTicks)"})," does two jobs. First, it clamps the requested target into a safe range. Second, if the mechanism is already at a hard limit, it suppresses any additional outward command so the controller does not keep pushing into the stop."]}),o.jsx("h2",{children:"Why target clamping alone is not enough"}),o.jsx("p",{children:"If the actuator is already against a hard stop, a controller can still compute an outward command even when the requested target was clamped. The framework explicitly blocks that behavior because otherwise the mechanism can keep loading the stop and damage itself."}),o.jsx("h2",{children:"At-target qualification"}),o.jsxs("p",{children:["The tuner does not declare victory from one lucky loop. It requires several consecutive in-band loops before ",o.jsx("code",{children:"isAtTarget()"})," becomes true:"]}),o.jsx(Ye,{language:"text",code:"REQUIRED_AT_TARGET_LOOPS = 5"}),o.jsx("p",{children:"This reduces false success caused by noise, backlash, or a transient crossing through the tolerance band."}),o.jsx("h2",{children:"Telemetry that matters here"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Requested target versus clamped target"}),o.jsx("li",{children:"Profiled target, velocity, and acceleration"}),o.jsx("li",{children:"Measured position and actuator command"}),o.jsx("li",{children:"Constraint status and current bound values"}),o.jsx("li",{children:"At-target qualification state"})]}),o.jsx("blockquote",{children:"When a position session looks unsafe, check bounds and actuator selection before you touch gains. A wrong actuator mode or missing hard stop is a setup problem, not a tuning problem."})]})}const h2=Ne("/guide/position/overview")({head:()=>({meta:[{title:"Position Tuner Overview — PID Pilot"},{name:"description",content:"Overview of PositionPIDFTuner, including actuator families, normalized control, motion profiles, feedforward, and bounds."}]}),component:f2});function f2(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Position Tuner"}),o.jsxs("p",{children:[o.jsx("code",{children:"PositionPIDFTuner"})," tunes anything driven to a target position — arms, elevators, slides, and turrets. For motors and CR servos it"," ",o.jsx(ce,{to:"/guide/position/auto-tune",children:"auto-tunes on start"})," via the relay method, the same one-button flow as the velocity tuner. It also supports standard servos (open-loop, or closed-loop with external encoder / analog feedback), which are tuned by hand."]}),o.jsxs("blockquote",{children:["New here? Go straight to ",o.jsx(ce,{to:"/guide/position/auto-tune",children:"Position Auto-Tune"})," — bind a motor, set a target, press start. Everything below is the machinery behind it."]}),o.jsx("h2",{children:"What makes it different from the velocity tuner"}),o.jsxs("ul",{children:[o.jsx("li",{children:"It supports multiple actuator and feedback backends."}),o.jsx("li",{children:"It normalizes position internally by move scale."}),o.jsxs("li",{children:["It can use trapezoidal motion profiles in ",o.jsx("code",{children:"REV_UP"}),"."]}),o.jsx("li",{children:"It separates static trim, gravity constant, and cosine compensation."}),o.jsx("li",{children:"It can clamp targets and suppress outward command at hard stops."})]}),o.jsx("h2",{children:"Major subsystems"}),o.jsxs("ol",{children:[o.jsx("li",{children:"Actuator-family abstraction"}),o.jsx("li",{children:"Feedback-source abstraction"}),o.jsx("li",{children:"Position normalization"}),o.jsx("li",{children:"Optional motion profiling"}),o.jsx("li",{children:"Static, gravity, and cosine feedforward"}),o.jsx("li",{children:"Hard position constraints"}),o.jsx("li",{children:"At-target qualification"}),o.jsx("li",{children:"Disruption testing"})]}),o.jsx("h2",{children:"Why position is normalized"}),o.jsx("p",{children:"The tuner scales setpoint and measurement by a move-specific distance scale. Without that, a tiny trim move and a long travel move would feel like unrelated controllers unless gains were changed constantly. The move scale keeps small moves from becoming twitchy while still preserving meaningful units elsewhere in the system."}),o.jsx("h2",{children:"What page to read next"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[o.jsx(ce,{to:"/guide/position/auto-tune",children:"Auto-Tune (Relay)"})," to let it find your gains — the fastest path to a working mechanism."]}),o.jsxs("li",{children:[o.jsx(ce,{to:"/guide/position/hold-f",children:"Actuator & Feedback Modes"})," if you are choosing how the tuner should read and command the mechanism."]}),o.jsxs("li",{children:[o.jsx(ce,{to:"/guide/position/ku-search",children:"Motion Profile & Feedforward"})," if your main question is how the position model is shaped."]}),o.jsxs("li",{children:[o.jsx(ce,{to:"/guide/position/refinement",children:"Bounds & Control Flow"})," if you need to understand safety and loop behavior."]})]})]})}const m2=Ne("/guide/position/ku-search")({head:()=>({meta:[{title:"Position Motion Profile & Feedforward — PID Pilot"},{name:"description",content:"How PositionPIDFTuner uses move normalization, optional trapezoidal motion profiles, and layered feedforward terms."}]}),component:p2});function p2(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Motion Profile & Feedforward"}),o.jsx("p",{children:"Position tuning is not only “PID plus position.” The framework shapes approach behavior with optional trapezoidal profiling and separates different baseline-effort terms so the operator can reason about them honestly."}),o.jsx("h2",{children:"Move normalization"}),o.jsxs("p",{children:["The tuner scales target and measurement by ",o.jsx("code",{children:"moveScaleTicks"}),", which is based on actual move distance together with a tolerance floor. This keeps small moves from feeling hyper-aggressive while still letting long moves use the same overall gain family."]}),o.jsx("h2",{children:"Motion profiling"}),o.jsxs("p",{children:["In ",o.jsx("code",{children:"REV_UP"}),", the tuner can replace an instantaneous step with a trapezoidal profile. That is enabled through:"]}),o.jsx(Ye,{language:"java",code:"useMotionProfile(maxVelocity, maxAcceleration)"}),o.jsx("p",{children:"If profiling is disabled, the profiled target simply equals the requested target. If it is enabled, the tuner computes a position, velocity, and acceleration trajectory each loop."}),o.jsx("h2",{children:"Feedforward pieces"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[o.jsxs("strong",{children:["Static trim from ",o.jsx("code",{children:"kF"})]})," ","helps break friction or stiction."]}),o.jsxs("li",{children:[o.jsxs("strong",{children:["Constant gravity term from ",o.jsx("code",{children:"kG"})]})," ","helps elevators and vertical slides."]}),o.jsxs("li",{children:[o.jsxs("strong",{children:["Cosine compensation from ",o.jsx("code",{children:"kCos"})]})," ","helps arms or joints with changing gravity torque."]})]}),o.jsx("h2",{children:"Static trim is not velocity feedforward"}),o.jsxs("p",{children:["In the position tuner, ",o.jsx("code",{children:"kF"})," is applied as a sign-aware static trim term. It is intentionally not the same concept as the velocity tuner’s physical feedforward. Treating them as interchangeable is one of the fastest ways to confuse a tuning session."]}),o.jsx("h2",{children:"Cosine compensation"}),o.jsx("p",{children:"Cosine feedforward uses an encoder-angle mapping and computes:"}),o.jsx(Ye,{language:"text",code:"kCos * cos((position - zeroTicks) / ticksPerRadian)"}),o.jsxs("p",{children:["That is why ",o.jsx("code",{children:"cosineFeedforwardReference(zeroTicks, ticksPerRadian)"})," is required whenever ",o.jsx("code",{children:"kCos"})," is nonzero."]}),o.jsx("h2",{children:"When each term is most useful"}),o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Term"}),o.jsx("th",{children:"Typical mechanism"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"kF"})}),o.jsx("td",{children:"Any mechanism with noticeable static friction or breakaway effort"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"kG"})}),o.jsx("td",{children:"Elevators and vertical slides"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"kCos"})}),o.jsx("td",{children:"Arms, joints, or mechanisms with angle-dependent gravity torque"})]})]})]})]})}const g2=Ne("/guide/position/hold-f")({head:()=>({meta:[{title:"Position Actuator & Feedback Modes — PID Pilot"},{name:"description",content:"How PositionPIDFTuner supports motors, CR servos, standard servos, and multiple feedback sources."}]}),component:y2});function y2(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Actuator & Feedback Modes"}),o.jsx("p",{children:"The position tuner is effectively a multi-backend position-control framework. The actuator family determines how commands are written, how measurements are read, and whether a true closed-loop position controller exists at all."}),o.jsx("h2",{children:"Actuator modes"}),o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Mode"}),o.jsx("th",{children:"What it means"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"MOTOR"})}),o.jsx("td",{children:"DC motor position control using encoder feedback and power output"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"SERVO_OPEN_LOOP"})}),o.jsx("td",{children:"Direct target-to-servo-position mapping with no PID correction"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"SERVO_WITH_EXTERNAL_ENCODER"})}),o.jsx("td",{children:"Standard servo with external feedback and PID correction layered on top"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"CR_SERVO"})}),o.jsx("td",{children:"Continuous-rotation servo driven from encoder feedback and scaled power output"})]})]})]}),o.jsx("h2",{children:"Feedback modes for standard servos"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[o.jsx("code",{children:"NONE"})," for open-loop mapping only"]}),o.jsxs("li",{children:[o.jsx("code",{children:"MOTOR_ENCODER"})," when an external encoder motor supplies position"]}),o.jsxs("li",{children:[o.jsx("code",{children:"ANALOG_INPUT"})," when an analog sensor provides the feedback signal"]})]}),o.jsx("h2",{children:"Standard servo open-loop behavior"}),o.jsxs("p",{children:["Open-loop standard servo mode is intentionally simple. There is no PID correction and no disruption logic. The target is mapped directly into servo position space, and the tuner forces ",o.jsx("code",{children:"isAtTarget()"})," to report true because there is no real feedback loop to qualify."]}),o.jsx("h2",{children:"Standard servo closed-loop behavior"}),o.jsxs("p",{children:["Closed-loop standard servo mode blends a direct servo-position mapping with an external PID correction. The tuner maps the requested target to a base servo position, computes a correction in normalized position space, adds feedforward, and clamps the final command back into ",o.jsx("code",{children:"[0.0, 1.0]"}),"."]}),o.jsx("h2",{children:"CR servo behavior"}),o.jsxs("p",{children:["CR servos behave more like motors: the tuner uses encoder feedback to estimate position and writes scaled power through ",o.jsx("code",{children:"servoOutputScale"}),". This lets the framework keep one consistent tuning model while still respecting how the actuator is commanded physically."]}),o.jsx("h2",{children:"Why this abstraction matters"}),o.jsx("p",{children:"Teams do not need separate tuning frameworks for every actuator family. They need one framework that changes its hardware semantics without changing its overall workflow: configure, run live, inspect telemetry, and decide whether the mechanism is behaving for the right reasons."})]})}const v2=Ne("/guide/position/disturbance")({head:()=>({meta:[{title:"Position Disruption Sampling — PID Pilot"},{name:"description",content:"How PositionPIDFTuner measures hold robustness after a push or load change and when disruption logic is unavailable."}]}),component:x2});function x2(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Disruption Sampling"}),o.jsx("p",{children:"The position tuner also includes a disruption measurement system. Its purpose is to quantify how quickly the mechanism recovers after it is pushed away from target or after a load change makes holding harder than the original approach move."}),o.jsx("h2",{children:"When the phase is unavailable"}),o.jsxs("p",{children:["In ",o.jsx("code",{children:"SERVO_OPEN_LOOP"}),", there is no real feedback controller, so disruption sampling is not meaningful and the framework disables it."]}),o.jsx("h2",{children:"Disruption stages"}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx("code",{children:"WAITING"})}),o.jsx("li",{children:o.jsx("code",{children:"ARMED"})}),o.jsx("li",{children:o.jsx("code",{children:"DETECTING"})}),o.jsx("li",{children:o.jsx("code",{children:"RECOVERING"})}),o.jsx("li",{children:o.jsx("code",{children:"COMPLETE"})})]}),o.jsx("h2",{children:"What it measures"}),o.jsxs("ol",{children:[o.jsx("li",{children:"Hold the mechanism near target until position is stably in band."}),o.jsx("li",{children:"Detect a meaningful deviation or load event."}),o.jsx("li",{children:"Measure the peak drop away from target."}),o.jsx("li",{children:"Measure recovery time back into the ready band."}),o.jsx("li",{children:"Repeat until the configured number of samples is collected."})]}),o.jsx("h2",{children:"Why it matters"}),o.jsx("p",{children:"Arms, elevators, and slides often fail the real game task not because they cannot reach the target once, but because they cannot stay there cleanly under changing load. Disruption telemetry lets the team quantify that instead of relying on intuition."}),o.jsx("h2",{children:"Key configuration methods"}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx("code",{children:"runDisruptionPhase(boolean)"})}),o.jsx("li",{children:o.jsx("code",{children:"disruptionSamples(int)"})}),o.jsx("li",{children:o.jsx("code",{children:"disruptionReadyStableMs(long)"})}),o.jsx("li",{children:o.jsx("code",{children:"disruptionDetectTimeoutMs(long)"})}),o.jsx("li",{children:o.jsx("code",{children:"disruptionRecoveryTimeoutMs(long)"})}),o.jsx("li",{children:o.jsx("code",{children:"disruptionReadyBandPct(double)"})}),o.jsx("li",{children:o.jsx("code",{children:"disruptionDropThresholdPct(double)"})})]})]})}const b2=Ne("/guide/position/config")({head:()=>({meta:[{title:"Position Config Reference — PID Pilot"},{name:"description",content:"Reference for PositionPIDFTuner.Config, covering actuator families, feedback modes, motion profiles, feedforward, bounds, and validation."}]}),component:j2});function j2(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Position Config Reference"}),o.jsxs("p",{children:[o.jsx("code",{children:"PositionPIDFTuner.Config"})," is the public builder for a position tuning session. It lets you select one actuator family, wire an optional feedback source, shape approach behavior, add baseline-effort terms, enforce hard bounds, and configure disruption logic."]}),o.jsx("h2",{children:"Required fields"}),o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Method"}),o.jsx("th",{children:"Purpose"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"target(double)"})}),o.jsx("td",{children:"Required target in the same units as the feedback source"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"telemetry(Telemetry)"})}),o.jsx("td",{children:"Required telemetry surface for Driver Station and Dashboard"})]})]})]}),o.jsx("h2",{children:"Actuator family selection"}),o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Method"}),o.jsx("th",{children:"Use case"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"withMotors(DcMotorEx...)"})}),o.jsx("td",{children:"DC motor position control"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"withServos(Servo...)"})}),o.jsx("td",{children:"Standard servo control"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"withCRServos(CRServo servo, DcMotorEx... feedbackEncoders)"})}),o.jsx("td",{children:"Single CR servo with encoder feedback"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"withCRServos(CRServo[] servos, DcMotorEx... feedbackEncoders)"})}),o.jsx("td",{children:"Multiple CR servos with encoder feedback"})]})]})]}),o.jsx("h2",{children:"Standard servo feedback and mapping"}),o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Method"}),o.jsx("th",{children:"Purpose"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"withServoFeedback(DcMotorEx)"})}),o.jsx("td",{children:"Closed-loop standard servo with encoder feedback"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"withServoFeedbackAnalog(AnalogInput, double voltageToTicksScale)"})}),o.jsx("td",{children:"Closed-loop standard servo with analog feedback"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"withServoOpenLoopRange(double minTicks, double maxTicks)"})}),o.jsx("td",{children:"Required target-to-servo mapping range for standard servo modes"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"servoOutputScale(double)"})}),o.jsx("td",{children:"Scale final command for standard or CR servos"})]})]})]}),o.jsx("h2",{children:"Mode, gains, and controller shaping"}),o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Method"}),o.jsx("th",{children:"Purpose"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"tuningMode(PIDFTuningMode)"})}),o.jsx("td",{children:"Select initial gain family"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"revUpGains(kP, kI, kD, kF)"})}),o.jsxs("td",{children:["Manual ",o.jsx("code",{children:"REV_UP"})," gains"]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"maintainGains(kP, kI, kD, kF)"})}),o.jsxs("td",{children:["Manual ",o.jsx("code",{children:"MAINTAIN"})," gains"]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"integralSumMax(double)"})}),o.jsx("td",{children:"Cap integral contribution in output space"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"derivativeAlpha(double)"})}),o.jsx("td",{children:"Tune derivative filtering"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"positionToleranceTicks(double)"})}),o.jsx("td",{children:"Define in-band tolerance for at-target checks"})]})]})]}),o.jsx("h2",{children:"Relay auto-tuning"}),o.jsxs("p",{children:["For ",o.jsx("code",{children:"MOTOR"})," and ",o.jsx("code",{children:"CR_SERVO"})," actuators, relay auto-tune runs on start and computes both gain sets unless you supply both manually or call ",o.jsx("code",{children:"skipRelayTuning()"}),". See ",o.jsx("a",{href:"/guide/position/auto-tune",children:"Position Auto-Tune"}),"."]}),o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Method"}),o.jsx("th",{children:"Purpose"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"skipRelayTuning()"})}),o.jsx("td",{children:"Disable relay auto-tune and start from the supplied / Dashboard-default gains"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"relayAmplitude(double)"})}),o.jsx("td",{children:"Bang-bang power used to induce the oscillation (default 0.3)"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"relayHysteresisBandPct(double)"})}),o.jsx("td",{children:"Switching band as a fraction of |target| (default 0.03)"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"relayDetune(double)"})}),o.jsx("td",{children:"Scale the relay-computed gains — lower is gentler, up to 2.0 (default 1.0)"})]})]})]}),o.jsx("h2",{children:"Motion profile and bounds"}),o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Method"}),o.jsx("th",{children:"Purpose"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"useMotionProfile(double maxVelocity, double maxAcceleration)"})}),o.jsxs("td",{children:["Enable trapezoidal approach shaping in ",o.jsx("code",{children:"REV_UP"})]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"positionBounds(double minTicks, double maxTicks)"})}),o.jsx("td",{children:"Enable hard mechanical limits"})]})]})]}),o.jsx("h2",{children:"Feedforward terms"}),o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Method"}),o.jsx("th",{children:"Purpose"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"feedforwardGravityConstant(double)"})}),o.jsx("td",{children:"Constant gravity bias for vertical systems"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"feedforwardCosineConstant(double)"})}),o.jsx("td",{children:"Angle-dependent gravity compensation"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"cosineFeedforwardReference(double zeroTicks, double ticksPerRadian)"})}),o.jsx("td",{children:"Encoder-angle mapping for cosine compensation"})]})]})]}),o.jsx("h2",{children:"Disruption configuration"}),o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Method"}),o.jsx("th",{children:"Purpose"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"runDisruptionPhase(boolean)"})}),o.jsx("td",{children:"Enable or disable disruption timing"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"disruptionSamples(int)"})}),o.jsx("td",{children:"Number of recovery samples"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"disruptionReadyStableMs(long)"})}),o.jsx("td",{children:"Required stable time before a sample is armed"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"disruptionDetectTimeoutMs(long)"})}),o.jsx("td",{children:"How long the tuner waits to detect a disturbance"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"disruptionRecoveryTimeoutMs(long)"})}),o.jsx("td",{children:"How long the tuner waits for recovery"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"disruptionReadyBandPct(double)"})}),o.jsx("td",{children:"Ready band around target"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"disruptionDropThresholdPct(double)"})}),o.jsx("td",{children:"Drop threshold that counts as a disturbance"})]})]})]}),o.jsx("h2",{children:"Validation rules"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Target must be present."}),o.jsx("li",{children:"Exactly one actuator family must be selected."}),o.jsx("li",{children:"Telemetry must be present."}),o.jsx("li",{children:"Motion-profile limits must be valid when profiling is enabled."}),o.jsx("li",{children:"Position bounds must be valid when bounds are enabled."}),o.jsx("li",{children:"Servo output scale must be nonnegative."}),o.jsxs("li",{children:[o.jsx("code",{children:"kCos"})," requires a cosine reference."]}),o.jsx("li",{children:"Standard-servo mapping range must be valid."}),o.jsx("li",{children:"Only one standard-servo feedback source may be chosen."}),o.jsx("li",{children:"Analog feedback scale must be nonzero when analog feedback is used."}),o.jsx("li",{children:"CR servo configurations need feedback encoders and valid counts."})]}),o.jsx("h2",{children:"Example session"}),o.jsx(Ye,{language:"java",code:`return new PositionPIDFTuner.Config()
        .target(TARGET_POSITION)
        .tuningMode(PIDFTuningMode.MAINTAIN)
        .withMotors(slideLeft, slideRight)
        .feedforwardGravityConstant(K_G)
        .positionBounds(MIN_POSITION, MAX_POSITION)
        .positionToleranceTicks(12.0)
        .runDisruptionPhase(true)
        .telemetry(telemetry);`})]})}const w2=Ne("/guide/position/auto-tune")({head:()=>({meta:[{title:"Position Auto-Tune — PID Pilot"},{name:"description",content:"How relay auto-tune finds kP/kI/kD for arms, elevators, and slides driven by motors or CR servos."}]}),component:S2});function S2(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Position Auto-Tune (Relay)"}),o.jsxs("p",{children:["The position tuner auto-tunes the same way the velocity tuner does: it drives the mechanism into a controlled oscillation around your target, measures it, and computes working"," ",o.jsx("code",{children:"REV_UP"})," and ",o.jsx("code",{children:"MAINTAIN"})," gains with Ziegler–Nichols formulas. It runs automatically on start for ",o.jsx("strong",{children:"motors and CR servos"})," — arms, elevators, slides, and turrets."]}),o.jsx("h2",{children:"When it runs"}),o.jsx("p",{children:"Auto-tune runs on start unless you opt out. Concretely:"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Runs"})," for ",o.jsx("code",{children:"MOTOR"})," and ",o.jsx("code",{children:"CR_SERVO"})," actuators when you have not supplied both gain sets."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Skipped"})," if you call ",o.jsx("code",{children:".skipRelayTuning()"}),", or if you supply"," ",o.jsx("em",{children:"both"})," ",o.jsx("code",{children:".revUpGains(...)"})," and ",o.jsx("code",{children:".maintainGains(...)"})," manually."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Not supported"})," for standard servos (open-loop or with external feedback) — those are position-commanded, not power-driven, so tune them by hand. See"," ",o.jsx(ce,{to:"/guide/position/hold-f",children:"Actuator & Feedback Modes"}),"."]})]}),o.jsx("h2",{children:"The minimal setup"}),o.jsx("p",{children:"No gains, no relay settings — just a target, the motor, and (for anything that fights gravity) a feedforward term to hold it in place while the relay works."}),o.jsx(Ye,{filename:"TuneElevator.java",language:"java",code:`return new PositionPIDFTuner.Config()
        .target(TARGET_POSITION)
        .withMotors(elevator)
        .feedforwardGravityConstant(ELEVATOR_KG) // holds it up during the relay
        .telemetry(telemetry);`}),o.jsx("h2",{children:"What happens on start"}),o.jsxs("ol",{children:[o.jsxs("li",{children:[o.jsx("strong",{children:"RELAY_TUNING"})," — the tuner applies your feedforward plus a bang-bang relay signal (±",o.jsx("code",{children:"relayAmplitude"}),") based on position error. That both drives the mechanism to the target and forces it to oscillate around it. Unlike the velocity tuner, there is no separate “approach” phase — closing the relay on position error does both at once."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Measure"})," — it records the oscillation's amplitude and period across several cycles to compute the ultimate gain ",o.jsx("code",{children:"Ku"})," and period ",o.jsx("code",{children:"Pu"}),"."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"RELAY_COMPLETE"})," — it holds briefly, shows the computed gains, then hands off to the normal closed loop."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"RUNNING"})," — the computed gains take over and the mechanism holds the target under PID. Toggle ",o.jsx("code",{children:"gamepad1.x"})," for REV_UP vs MAINTAIN."]})]}),o.jsxs("blockquote",{children:["Keep hands off the mechanism during RELAY_TUNING — a push during measurement corrupts the oscillation and the computed gains. Wait for the phase to read ",o.jsx("code",{children:"RUNNING"}),"."]}),o.jsx("h2",{children:"Reading the result"}),o.jsx("p",{children:"Watch these keys on FTC Dashboard:"}),o.jsx(Ye,{language:"text",code:`Diagnostics/phase              RELAY_TUNING -> RELAY_COMPLETE -> RUNNING
RelayTune/cyclesCompleted      4/4
RelayTune/amplitudeTicks       23.4
RelayTune/periodSec            0.42
RelayTune/Ku / Pu              0.031 / 0.42
RelayTune/computedMaintainKP   0.61
RelayTune/computedMaintainKI   0.028
RelayTune/computedMaintainKD   0.041
RelayTune/computedRevUpKP      1.02
Diagnostics/relayTuneNote      Relay auto-tune complete.`}),o.jsx("h2",{children:"Tuning the tuner"}),o.jsxs("p",{children:["The defaults work for most mechanisms. If auto-tune struggles, three knobs adjust the",o.jsx("em",{children:"process"})," (not the mechanism gains):"]}),o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Config"}),o.jsx("th",{children:"Default"}),o.jsx("th",{children:"Raise it when…"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"relayAmplitude(a)"})}),o.jsx("td",{children:"0.3"}),o.jsx("td",{children:"The mechanism can't overcome friction/gravity to oscillate. Lower it if the swing is violent."})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"relayHysteresisBandPct(p)"})}),o.jsx("td",{children:"0.03"}),o.jsx("td",{children:"Position noise causes chattering / false zero-crossings near the target."})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"relayDetune(f)"})}),o.jsx("td",{children:"1.0"}),o.jsx("td",{children:"You want a gentler (lower) or more aggressive (up to 2.0) result from the same measurement."})]})]})]}),o.jsx("h2",{children:"If it can't establish an oscillation"}),o.jsxs("p",{children:["If the mechanism never oscillates (too much friction/backlash, or ",o.jsx("code",{children:"relayAmplitude"})," ","too low), the relay times out after ~15 seconds, leaves your Dashboard-default gains in place, and posts a note on ",o.jsx("code",{children:"Diagnostics/relayTuneNote"}),". Raise"," ",o.jsx("code",{children:"relayAmplitude"}),", check the mechanism, or tune by hand."]}),o.jsx("h2",{children:"Opting out"}),o.jsx(Ye,{language:"java",code:`// Start from your own known-good gains, no auto-tune:
return new PositionPIDFTuner.Config()
        .target(TARGET_POSITION)
        .withMotors(arm)
        .revUpGains(0.9, 0.0, 0.12, 0.0)
        .maintainGains(0.6, 0.03, 0.08, 0.0)
        .telemetry(telemetry);

// ...or keep the Dashboard defaults and disable the relay entirely:
        .skipRelayTuning()`}),o.jsxs("blockquote",{children:["Next: ",o.jsx(ce,{to:"/guide/position/config",children:"Config Reference"})," for every builder method, or"," ",o.jsx(ce,{to:"/guide/concepts/scoring",children:"How Auto-Tune Works"})," for the relay theory shared by both tuners."]})]})}const T2=Ne("/guide/concepts/tuning-modes")({head:()=>({meta:[{title:"Tuning Modes — PID Pilot"},{name:"description",content:"How PID Pilot uses REV_UP and MAINTAIN as separate controller personalities with separate gains."}]}),component:k2});function k2(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Tuning Modes"}),o.jsxs("p",{children:[o.jsx("code",{children:"PIDFTuningMode"})," is a small enum with a large role in the framework. It gives the entire package a shared language for two different controller personalities: one focused on getting there quickly and one focused on holding accurately under disturbances."]}),o.jsx("h2",{children:"REV_UP"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Prioritizes fast approach to the target."}),o.jsx("li",{children:"Often uses little or no integral."}),o.jsx("li",{children:"May use motion profiling in the position tuner."}),o.jsx("li",{children:"Can accept some overshoot if that buys better approach speed."})]}),o.jsx("h2",{children:"MAINTAIN"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Prioritizes low steady-state error and disturbance rejection."}),o.jsx("li",{children:"Commonly benefits from integral action."}),o.jsx("li",{children:"Is the mode used for disruption sampling."}),o.jsx("li",{children:"Represents the controller personality you care about once the mechanism is near target."})]}),o.jsx("h2",{children:"Why the framework keeps two gain sets"}),o.jsx("p",{children:"The package does not pretend that approach behavior and hold behavior are the same control problem. Both tuners keep separate gain sets so a team can tune the personality it actually needs instead of forcing one compromise set to cover everything."}),o.jsx("h2",{children:"How teams switch modes live"}),o.jsxs("p",{children:["The base runner handles mode toggling with ",o.jsx("code",{children:"gamepad1.x"}),". When the mode changes, the active tuner swaps gain families and resets state where stale controller memory would be misleading."]}),o.jsx("h2",{children:"Where the effect differs by tuner"}),o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Area"}),o.jsx("th",{children:"REV_UP emphasis"}),o.jsx("th",{children:"MAINTAIN emphasis"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"Velocity tuner"}),o.jsx("td",{children:"Fast approach and cleaner rev-up behavior"}),o.jsx("td",{children:"Robust speed hold and disruption recovery"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Position tuner"}),o.jsx("td",{children:"Approach behavior, often with motion profiling"}),o.jsx("td",{children:"Holding behavior and load rejection near target"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Integral usage"}),o.jsx("td",{children:"Often low or zero"}),o.jsx("td",{children:"Commonly more useful"})]})]})]}),o.jsx("h2",{children:"Practical guidance"}),o.jsxs("ul",{children:[o.jsxs("li",{children:["Use ",o.jsx("code",{children:"REV_UP"})," when arrival speed is the main job."]}),o.jsxs("li",{children:["Use ",o.jsx("code",{children:"MAINTAIN"})," when resisting changing load is the main job."]}),o.jsx("li",{children:"Expect the same mechanism to produce different valid gains in each mode. That is normal, not a bug."})]})]})}const R2=Ne("/guide/concepts/scoring")({head:()=>({meta:[{title:"How Auto-Tune Works — PID Pilot"},{name:"description",content:"The relay (Åström–Hägglund) method behind PID Pilot's auto-tune: how it measures a mechanism and turns that into PIDF gains."}]}),component:A2});function A2(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"How Auto-Tune Works"}),o.jsxs("p",{children:["Both tuners auto-tune with the same engine: the ",o.jsx("strong",{children:"relay method"})," ","(Åström–Hägglund). Instead of guessing gains and nudging them, it makes the mechanism reveal its own dynamics, measures them, and converts the measurement into PIDF gains with textbook formulas. This page explains what's happening under the hood."]}),o.jsx("h2",{children:"The idea: make it oscillate on purpose"}),o.jsxs("p",{children:["Drive a mechanism with a ",o.jsx("em",{children:"relay"})," — full push when it's below target, full pull when it's above — and it settles into a steady oscillation around the target. That limit cycle is not noise; its size and speed are a fingerprint of the mechanism's dynamics."]}),o.jsxs("ul",{children:[o.jsxs("li",{children:["The ",o.jsx("strong",{children:"amplitude"})," of the oscillation, together with the relay strength, gives the ",o.jsx("strong",{children:"ultimate gain"})," ",o.jsx("code",{children:"Ku"})," — how much proportional gain the system can take before it oscillates on its own."]}),o.jsxs("li",{children:["The ",o.jsx("strong",{children:"period"})," of the oscillation is the ",o.jsx("strong",{children:"ultimate period"})," ",o.jsx("code",{children:"Pu"})," — how fast the system naturally cycles at that edge."]})]}),o.jsx("p",{children:"A hysteresis band around the target keeps sensor noise from causing false switches, so the relay produces a clean oscillation instead of chatter."}),o.jsx("h2",{children:"From measurement to gains"}),o.jsxs("p",{children:["Once ",o.jsx("code",{children:"Ku"})," and ",o.jsx("code",{children:"Pu"})," are known, Ziegler–Nichols-style formulas produce the gains. PID Pilot computes a calmer ",o.jsx("code",{children:"MAINTAIN"})," set (good disturbance rejection) and a more aggressive ",o.jsx("code",{children:"REV_UP"})," set (fast approach) from the same measurement, and a ",o.jsx("em",{children:"detune"})," factor lets you scale how aggressive the result is."]}),o.jsx(Ye,{language:"text",code:`Ku = (4 · relayAmplitude) / (π · oscillationAmplitude)
Pu = oscillation period

MAINTAIN:  kP ≈ 0.3·Ku   kI ≈ kP/Pu     kD ≈ kP·Pu/8
REV_UP:    kP ≈ 0.5·Ku   kI = 0         kD ≈ kP·Pu/20
           (each scaled by relayDetune)`}),o.jsx("h2",{children:"The lifecycle"}),o.jsx("p",{children:"The two tuners run slightly different phase sequences on start:"}),o.jsx(Ye,{language:"text",code:`Velocity:  CHARACTERIZING → SETTLING → RELAY_TUNING → RELAY_COMPLETE → RUNNING
Position:                          RELAY_TUNING → RELAY_COMPLETE → RUNNING`}),o.jsxs("ul",{children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Velocity"})," first runs a short full-power sweep (CHARACTERIZING) to estimate a physical feedforward ",o.jsx("code",{children:"kF ≈ 1/maxVelocity"}),", settles, then relays. Feedforward gets the wheel near speed; the relay tunes the feedback around it."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Position"})," skips characterization — closing the relay on position error both drives the mechanism to the target and induces the oscillation in one motion. Gravity / cosine feedforward holds it in place while the relay works."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"RELAY_COMPLETE"})," briefly displays the result, then ",o.jsx("strong",{children:"RUNNING"})," ","hands off to normal closed-loop control with the computed gains."]})]}),o.jsx("blockquote",{children:"Because auto-tune starts in the OpMode constructor (during INIT), the tuners re-baseline their phase clocks the moment you press start — so a long INIT wait never eats into the measurement window."}),o.jsx("h2",{children:"When it can't measure"}),o.jsxs("p",{children:["If the mechanism can't be made to oscillate — too much friction or backlash, or"," ",o.jsx("code",{children:"relayAmplitude"})," set too low — the relay times out, leaves your default gains in place, and posts a note on the ",o.jsx("code",{children:"relayTuneNote"})," telemetry key. Raise"," ",o.jsx("code",{children:"relayAmplitude"}),", check the hardware, or tune by hand."]}),o.jsx("h2",{children:"The architecture behind it"}),o.jsx("p",{children:"Auto-tune is one system inside a clean split: generic control math, mechanism-specific logic, and runtime orchestration each live in their own place."}),o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Class"}),o.jsx("th",{children:"Responsibility"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"PIDFController"})}),o.jsx("td",{children:"Raw control math: derivative-on-measurement, anti-windup, term state, clamping"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"PIDFTunerOpMode"})}),o.jsx("td",{children:"Runtime shell: loop timing, live config refresh, telemetry mirror, mode toggle"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"VelocityPIDFTuner"})}),o.jsx("td",{children:"ticks/s control, characterization, relay auto-tune, disruption recovery"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("code",{children:"PositionPIDFTuner"})}),o.jsx("td",{children:"Actuator / feedback abstraction, relay auto-tune, motion profiles, feedforward, bounds"})]})]})]}),o.jsxs("blockquote",{children:["Next: ",o.jsx(ce,{to:"/guide/velocity/ku-search",children:"Velocity Auto-Tune"})," or"," ",o.jsx(ce,{to:"/guide/position/auto-tune",children:"Position Auto-Tune"})," for the tuner-specific details, or ",o.jsx(ce,{to:"/guide/concepts/tuning-modes",children:"REV_UP vs MAINTAIN"})," for why there are two gain sets."]})]})}const C2=Ne("/guide/concepts/pidf-terms")({head:()=>({meta:[{title:"Shared Concepts — PID Pilot"},{name:"description",content:"Shared control concepts in PID Pilot: feedforward vs feedback, Dashboard-driven config, telemetry, and controller internals."}]}),component:M2});function M2(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Shared Concepts"}),o.jsx("p",{children:"Before you dive into the individual tuners, it helps to understand the common ideas the framework is built around. These concepts explain why the package has the class structure it does and why the telemetry is so detailed."}),o.jsx("h2",{children:"Where P, I, D, and F fit"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[o.jsx("strong",{children:"P"})," reacts to current error and provides the immediate corrective push."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"I"})," reacts to accumulated error over time and is most valuable when hold quality and steady-state accuracy matter."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"D"})," damps the response and in PID Pilot is based on measurement change, not direct error difference."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"F"})," is not one universal idea: in velocity it is a physical feedforward, while in position it is a static trim or friction-help term."]})]}),o.jsx("h2",{children:"Feedforward vs feedback"}),o.jsx("p",{children:"The package works hard to keep these jobs distinct. Feedforward supplies the expected baseline effort. PID handles the leftover error. This matters because a team can only debug the controller rationally if it knows whether the mechanism is failing due to a missing baseline effort or due to bad feedback behavior."}),o.jsxs("ul",{children:[o.jsxs("li",{children:["Velocity ",o.jsx("code",{children:"kF"})," is motor power per ",o.jsx("code",{children:"ticks/s"})," and is meant to be physically interpretable."]}),o.jsxs("li",{children:["Position ",o.jsx("code",{children:"kF"})," is static trim. Gravity constant and cosine compensation are separate terms because they represent different physics."]})]}),o.jsx("h2",{children:"Dashboard-driven configuration"}),o.jsxs("p",{children:["PID Pilot is not based on static startup configuration only. The base OpMode calls"," ",o.jsx("code",{children:"configureVelocity()"})," or ",o.jsx("code",{children:"configurePosition()"})," every loop, so changes made in FTC Dashboard take effect immediately. That is why the tuners must reassert key hardware assumptions during refresh, such as velocity mode ownership."]}),o.jsx("h2",{children:"Telemetry is a diagnostic surface"}),o.jsxs("p",{children:["The framework exposes more than target, measurement, and error. It publishes controller terms, filtered derivatives, feedforward breakdowns, relay metrics, disruption summaries, warnings, and copyable gain summaries because teams need to know ",o.jsx("em",{children:"why"})," the loop behaves the way it does."]}),o.jsx("h2",{children:"Derivative on measurement"}),o.jsxs("p",{children:[o.jsx("code",{children:"PIDFController"})," computes derivative from the measurement rather than from direct error difference. That avoids derivative kick when the setpoint changes suddenly, which is common in FTC because many commands are step changes."]}),o.jsx("h2",{children:"Controller state is intentionally exposed"}),o.jsx("p",{children:"The controller stores things like integral memory, measurement rate, filtered measurement rate, term contributions, last error, and last output. The tuners reuse that state directly for telemetry instead of re-deriving it elsewhere. This is part of why the framework can explain controller behavior so clearly."}),o.jsx("h2",{children:"Accumulator units matter"}),o.jsxs("p",{children:["When integral is clamped, the controller clamps the stored accumulator rather than only the final ",o.jsx("code",{children:"iTerm"}),". That keeps the cap tied to error history. The tuners can then derive that cap from actuator headroom while still reasoning about the stored state correctly."]})]})}const _2=_T.update({id:"/tuner-lab",path:"/tuner-lab",getParentRoute:()=>Wa}),E2=OT.update({id:"/tuner",path:"/tuner",getParentRoute:()=>Wa}),Ue=vR.update({id:"/guide",path:"/guide",getParentRoute:()=>Wa}),D2=bR.update({id:"/",path:"/",getParentRoute:()=>Wa}),N2=_R.update({id:"/",path:"/",getParentRoute:()=>Ue}),P2=DR.update({id:"/troubleshooting",path:"/troubleshooting",getParentRoute:()=>Ue}),O2=LR.update({id:"/templates",path:"/templates",getParentRoute:()=>Ue}),I2=FR.update({id:"/quick-start",path:"/quick-start",getParentRoute:()=>Ue}),z2=HR.update({id:"/installation",path:"/installation",getParentRoute:()=>Ue}),L2=GR.update({id:"/velocity/refinement",path:"/velocity/refinement",getParentRoute:()=>Ue}),B2=YR.update({id:"/velocity/overview",path:"/velocity/overview",getParentRoute:()=>Ue}),F2=XR.update({id:"/velocity/ku-search",path:"/velocity/ku-search",getParentRoute:()=>Ue}),U2=ZR.update({id:"/velocity/f-sweep",path:"/velocity/f-sweep",getParentRoute:()=>Ue}),H2=$R.update({id:"/velocity/disruption",path:"/velocity/disruption",getParentRoute:()=>Ue}),V2=e2.update({id:"/velocity/config",path:"/velocity/config",getParentRoute:()=>Ue}),G2=n2.update({id:"/reference/telemetry",path:"/reference/telemetry",getParentRoute:()=>Ue}),q2=i2.update({id:"/reference/setup-rules",path:"/reference/setup-rules",getParentRoute:()=>Ue}),Y2=r2.update({id:"/reference/practical-notes",path:"/reference/practical-notes",getParentRoute:()=>Ue}),K2=l2.update({id:"/reference/faq",path:"/reference/faq",getParentRoute:()=>Ue}),X2=u2.update({id:"/position/refinement",path:"/position/refinement",getParentRoute:()=>Ue}),Q2=h2.update({id:"/position/overview",path:"/position/overview",getParentRoute:()=>Ue}),Z2=m2.update({id:"/position/ku-search",path:"/position/ku-search",getParentRoute:()=>Ue}),W2=g2.update({id:"/position/hold-f",path:"/position/hold-f",getParentRoute:()=>Ue}),$2=v2.update({id:"/position/disturbance",path:"/position/disturbance",getParentRoute:()=>Ue}),J2=b2.update({id:"/position/config",path:"/position/config",getParentRoute:()=>Ue}),eA=w2.update({id:"/position/auto-tune",path:"/position/auto-tune",getParentRoute:()=>Ue}),tA=T2.update({id:"/concepts/tuning-modes",path:"/concepts/tuning-modes",getParentRoute:()=>Ue}),nA=R2.update({id:"/concepts/scoring",path:"/concepts/scoring",getParentRoute:()=>Ue}),oA=C2.update({id:"/concepts/pidf-terms",path:"/concepts/pidf-terms",getParentRoute:()=>Ue}),iA={GuideInstallationRoute:z2,GuideQuickStartRoute:I2,GuideTemplatesRoute:O2,GuideTroubleshootingRoute:P2,GuideIndexRoute:N2,GuideConceptsPidfTermsRoute:oA,GuideConceptsScoringRoute:nA,GuideConceptsTuningModesRoute:tA,GuidePositionAutoTuneRoute:eA,GuidePositionConfigRoute:J2,GuidePositionDisturbanceRoute:$2,GuidePositionHoldFRoute:W2,GuidePositionKuSearchRoute:Z2,GuidePositionOverviewRoute:Q2,GuidePositionRefinementRoute:X2,GuideReferenceFaqRoute:K2,GuideReferencePracticalNotesRoute:Y2,GuideReferenceSetupRulesRoute:q2,GuideReferenceTelemetryRoute:G2,GuideVelocityConfigRoute:V2,GuideVelocityDisruptionRoute:H2,GuideVelocityFSweepRoute:U2,GuideVelocityKuSearchRoute:F2,GuideVelocityOverviewRoute:B2,GuideVelocityRefinementRoute:L2},aA=Ue._addFileChildren(iA),rA={IndexRoute:D2,GuideRoute:aA,TunerRoute:E2,TunerLabRoute:_2},sA=Wa._addFileChildren(rA)._addFileTypes();function lA({error:i,reset:r}){const s=st();return o.jsx("div",{className:"flex min-h-screen items-center justify-center bg-background px-4",children:o.jsxs("div",{className:"max-w-md text-center",children:[o.jsx("div",{className:"mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10",children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-destructive",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})})}),o.jsx("h1",{className:"text-2xl font-bold tracking-tight text-foreground",children:"Something went wrong"}),o.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:"An unexpected error occurred. Please try again."}),!1,o.jsxs("div",{className:"mt-6 flex items-center justify-center gap-3",children:[o.jsx("button",{onClick:()=>{s.invalidate(),r()},className:"inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",children:"Try again"}),o.jsx(ce,{to:"/",className:"inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",children:"Go home"})]})]})})}const cA=()=>uw({routeTree:sA,basepath:"/docs",context:{},scrollRestoration:!0,defaultPreloadStaleTime:0,defaultErrorComponent:lA});qt("main:module-top (BUILD=dbg6-nosplit)");const uA=cA();qt("main:router-created");const od=document.getElementById("root");if(!od)throw new Error("Root element not found");od.innerHTML||(qt("main:before-render"),p0.createRoot(od).render(o.jsx(_.StrictMode,{children:o.jsx(fw,{router:uA})})));
