(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function J0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var vc={exports:{}},gt={};var bp;function e_(){if(bp)return gt;bp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,b={};function v(U,J,Fe){this.props=U,this.context=J,this.refs=b,this.updater=Fe||M}v.prototype.isReactComponent={},v.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},v.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=v.prototype;function R(U,J,Fe){this.props=U,this.context=J,this.refs=b,this.updater=Fe||M}var N=R.prototype=new _;N.constructor=R,A(N,v.prototype),N.isPureReactComponent=!0;var L=Array.isArray,H=Object.prototype.hasOwnProperty,P={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function w(U,J,Fe){var He,Ne={},se=null,Se=null;if(J!=null)for(He in J.ref!==void 0&&(Se=J.ref),J.key!==void 0&&(se=""+J.key),J)H.call(J,He)&&!k.hasOwnProperty(He)&&(Ne[He]=J[He]);var me=arguments.length-2;if(me===1)Ne.children=Fe;else if(1<me){for(var Ie=Array(me),Ze=0;Ze<me;Ze++)Ie[Ze]=arguments[Ze+2];Ne.children=Ie}if(U&&U.defaultProps)for(He in me=U.defaultProps,me)Ne[He]===void 0&&(Ne[He]=me[He]);return{$$typeof:s,type:U,key:se,ref:Se,props:Ne,_owner:P.current}}function I(U,J){return{$$typeof:s,type:U.type,key:J,ref:U.ref,props:U.props,_owner:U._owner}}function X(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function O(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Fe){return J[Fe]})}var K=/\/+/g;function ue(U,J){return typeof U=="object"&&U!==null&&U.key!=null?O(""+U.key):J.toString(36)}function ce(U,J,Fe,He,Ne){var se=typeof U;(se==="undefined"||se==="boolean")&&(U=null);var Se=!1;if(U===null)Se=!0;else switch(se){case"string":case"number":Se=!0;break;case"object":switch(U.$$typeof){case s:case e:Se=!0}}if(Se)return Se=U,Ne=Ne(Se),U=He===""?"."+ue(Se,0):He,L(Ne)?(Fe="",U!=null&&(Fe=U.replace(K,"$&/")+"/"),ce(Ne,J,Fe,"",function(Ze){return Ze})):Ne!=null&&(X(Ne)&&(Ne=I(Ne,Fe+(!Ne.key||Se&&Se.key===Ne.key?"":(""+Ne.key).replace(K,"$&/")+"/")+U)),J.push(Ne)),1;if(Se=0,He=He===""?".":He+":",L(U))for(var me=0;me<U.length;me++){se=U[me];var Ie=He+ue(se,me);Se+=ce(se,J,Fe,Ie,Ne)}else if(Ie=g(U),typeof Ie=="function")for(U=Ie.call(U),me=0;!(se=U.next()).done;)se=se.value,Ie=He+ue(se,me++),Se+=ce(se,J,Fe,Ie,Ne);else if(se==="object")throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return Se}function W(U,J,Fe){if(U==null)return U;var He=[],Ne=0;return ce(U,He,"","",function(se){return J.call(Fe,se,Ne++)}),He}function Q(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(Fe){(U._status===0||U._status===-1)&&(U._status=1,U._result=Fe)},function(Fe){(U._status===0||U._status===-1)&&(U._status=2,U._result=Fe)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var j={current:null},Y={transition:null},le={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:Y,ReactCurrentOwner:P};function oe(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:W,forEach:function(U,J,Fe){W(U,function(){J.apply(this,arguments)},Fe)},count:function(U){var J=0;return W(U,function(){J++}),J},toArray:function(U){return W(U,function(J){return J})||[]},only:function(U){if(!X(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},gt.Component=v,gt.Fragment=n,gt.Profiler=o,gt.PureComponent=R,gt.StrictMode=r,gt.Suspense=m,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,gt.act=oe,gt.cloneElement=function(U,J,Fe){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var He=A({},U.props),Ne=U.key,se=U.ref,Se=U._owner;if(J!=null){if(J.ref!==void 0&&(se=J.ref,Se=P.current),J.key!==void 0&&(Ne=""+J.key),U.type&&U.type.defaultProps)var me=U.type.defaultProps;for(Ie in J)H.call(J,Ie)&&!k.hasOwnProperty(Ie)&&(He[Ie]=J[Ie]===void 0&&me!==void 0?me[Ie]:J[Ie])}var Ie=arguments.length-2;if(Ie===1)He.children=Fe;else if(1<Ie){me=Array(Ie);for(var Ze=0;Ze<Ie;Ze++)me[Ze]=arguments[Ze+2];He.children=me}return{$$typeof:s,type:U.type,key:Ne,ref:se,props:He,_owner:Se}},gt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:u,_context:U},U.Consumer=U},gt.createElement=w,gt.createFactory=function(U){var J=w.bind(null,U);return J.type=U,J},gt.createRef=function(){return{current:null}},gt.forwardRef=function(U){return{$$typeof:h,render:U}},gt.isValidElement=X,gt.lazy=function(U){return{$$typeof:x,_payload:{_status:-1,_result:U},_init:Q}},gt.memo=function(U,J){return{$$typeof:p,type:U,compare:J===void 0?null:J}},gt.startTransition=function(U){var J=Y.transition;Y.transition={};try{U()}finally{Y.transition=J}},gt.unstable_act=oe,gt.useCallback=function(U,J){return j.current.useCallback(U,J)},gt.useContext=function(U){return j.current.useContext(U)},gt.useDebugValue=function(){},gt.useDeferredValue=function(U){return j.current.useDeferredValue(U)},gt.useEffect=function(U,J){return j.current.useEffect(U,J)},gt.useId=function(){return j.current.useId()},gt.useImperativeHandle=function(U,J,Fe){return j.current.useImperativeHandle(U,J,Fe)},gt.useInsertionEffect=function(U,J){return j.current.useInsertionEffect(U,J)},gt.useLayoutEffect=function(U,J){return j.current.useLayoutEffect(U,J)},gt.useMemo=function(U,J){return j.current.useMemo(U,J)},gt.useReducer=function(U,J,Fe){return j.current.useReducer(U,J,Fe)},gt.useRef=function(U){return j.current.useRef(U)},gt.useState=function(U){return j.current.useState(U)},gt.useSyncExternalStore=function(U,J,Fe){return j.current.useSyncExternalStore(U,J,Fe)},gt.useTransition=function(){return j.current.useTransition()},gt.version="18.3.1",gt}var Pp;function Um(){return Pp||(Pp=1,vc.exports=e_()),vc.exports}var gi=Um();const ae=J0(gi);var el={},xc={exports:{}},Fn={},Sc={exports:{}},yc={};var Lp;function t_(){return Lp||(Lp=1,(function(s){function e(Y,le){var oe=Y.length;Y.push(le);e:for(;0<oe;){var U=oe-1>>>1,J=Y[U];if(0<o(J,le))Y[U]=le,Y[oe]=J,oe=U;else break e}}function n(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var le=Y[0],oe=Y.pop();if(oe!==le){Y[0]=oe;e:for(var U=0,J=Y.length,Fe=J>>>1;U<Fe;){var He=2*(U+1)-1,Ne=Y[He],se=He+1,Se=Y[se];if(0>o(Ne,oe))se<J&&0>o(Se,Ne)?(Y[U]=Se,Y[se]=oe,U=se):(Y[U]=Ne,Y[He]=oe,U=He);else if(se<J&&0>o(Se,oe))Y[U]=Se,Y[se]=oe,U=se;else break e}}return le}function o(Y,le){var oe=Y.sortIndex-le.sortIndex;return oe!==0?oe:Y.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var c=Date,h=c.now();s.unstable_now=function(){return c.now()-h}}var m=[],p=[],x=1,S=null,g=3,M=!1,A=!1,b=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(Y){for(var le=n(p);le!==null;){if(le.callback===null)r(p);else if(le.startTime<=Y)r(p),le.sortIndex=le.expirationTime,e(m,le);else break;le=n(p)}}function L(Y){if(b=!1,N(Y),!A)if(n(m)!==null)A=!0,Q(H);else{var le=n(p);le!==null&&j(L,le.startTime-Y)}}function H(Y,le){A=!1,b&&(b=!1,_(w),w=-1),M=!0;var oe=g;try{for(N(le),S=n(m);S!==null&&(!(S.expirationTime>le)||Y&&!O());){var U=S.callback;if(typeof U=="function"){S.callback=null,g=S.priorityLevel;var J=U(S.expirationTime<=le);le=s.unstable_now(),typeof J=="function"?S.callback=J:S===n(m)&&r(m),N(le)}else r(m);S=n(m)}if(S!==null)var Fe=!0;else{var He=n(p);He!==null&&j(L,He.startTime-le),Fe=!1}return Fe}finally{S=null,g=oe,M=!1}}var P=!1,k=null,w=-1,I=5,X=-1;function O(){return!(s.unstable_now()-X<I)}function K(){if(k!==null){var Y=s.unstable_now();X=Y;var le=!0;try{le=k(!0,Y)}finally{le?ue():(P=!1,k=null)}}else P=!1}var ue;if(typeof R=="function")ue=function(){R(K)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,W=ce.port2;ce.port1.onmessage=K,ue=function(){W.postMessage(null)}}else ue=function(){v(K,0)};function Q(Y){k=Y,P||(P=!0,ue())}function j(Y,le){w=v(function(){Y(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){A||M||(A=!0,Q(H))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(m)},s.unstable_next=function(Y){switch(g){case 1:case 2:case 3:var le=3;break;default:le=g}var oe=g;g=le;try{return Y()}finally{g=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,le){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var oe=g;g=Y;try{return le()}finally{g=oe}},s.unstable_scheduleCallback=function(Y,le,oe){var U=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?U+oe:U):oe=U,Y){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=oe+J,Y={id:x++,callback:le,priorityLevel:Y,startTime:oe,expirationTime:J,sortIndex:-1},oe>U?(Y.sortIndex=oe,e(p,Y),n(m)===null&&Y===n(p)&&(b?(_(w),w=-1):b=!0,j(L,oe-U))):(Y.sortIndex=J,e(m,Y),A||M||(A=!0,Q(H))),Y},s.unstable_shouldYield=O,s.unstable_wrapCallback=function(Y){var le=g;return function(){var oe=g;g=le;try{return Y.apply(this,arguments)}finally{g=oe}}}})(yc)),yc}var Dp;function n_(){return Dp||(Dp=1,Sc.exports=t_()),Sc.exports}var Np;function i_(){if(Np)return Fn;Np=1;var s=Um(),e=n_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function u(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},S={};function g(t){return m.call(S,t)?!0:m.call(x,t)?!1:p.test(t)?S[t]=!0:(x[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(t,i,a,l,f,d,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=d,this.removeEmptyString=E}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new b(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new b(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new b(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new b(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new b(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new b(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new b(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new b(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new b(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function R(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,R);v[i]=new b(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,R);v[i]=new b(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,R);v[i]=new b(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new b(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new b(t,1,!1,t.toLowerCase(),null,!0,!0)});function N(t,i,a,l){var f=v.hasOwnProperty(i)?v[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,a,f,l)&&(a=null),l||f===null?g(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,l=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),P=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),O=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),Y=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=Y&&t[Y]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,U;function J(t){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Fe=!1;function He(t,i){if(!t||Fe)return"";Fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var l=re}Reflect.construct(t,[],i)}else{try{i.call()}catch(re){l=re}t.call(i.prototype)}else{try{throw Error()}catch(re){l=re}t()}}catch(re){if(re&&l&&typeof re.stack=="string"){for(var f=re.stack.split(`
`),d=l.stack.split(`
`),E=f.length-1,D=d.length-1;1<=E&&0<=D&&f[E]!==d[D];)D--;for(;1<=E&&0<=D;E--,D--)if(f[E]!==d[D]){if(E!==1||D!==1)do if(E--,D--,0>D||f[E]!==d[D]){var F=`
`+f[E].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=E&&0<=D);break}}}finally{Fe=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?J(t):""}function Ne(t){switch(t.tag){case 5:return J(t.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return t=He(t.type,!1),t;case 11:return t=He(t.type.render,!1),t;case 1:return t=He(t.type,!0),t;default:return""}}function se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case P:return"Portal";case I:return"Profiler";case w:return"StrictMode";case ue:return"Suspense";case ce:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case O:return(t.displayName||"Context")+".Consumer";case X:return(t._context.displayName||"Context")+".Provider";case K:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case W:return i=t.displayName||null,i!==null?i:se(t.type)||"Memo";case Q:i=t._payload,t=t._init;try{return se(t(i))}catch{}}return null}function Se(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function me(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ie(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Ie(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,d=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,d.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Qe(t){t._valueTracker||(t._valueTracker=Ze(t))}function It(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Ie(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ut(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mt(t,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Dt(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=me(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ct(t,i){i=i.checked,i!=null&&N(t,"checked",i,!1)}function Xt(t,i){ct(t,i);var a=me(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?fn(t,i.type,a):i.hasOwnProperty("defaultValue")&&fn(t,i.type,me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ut(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function fn(t,i,a){(i!=="number"||ut(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var z=Array.isArray;function Ft(t,i,a,l){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&l&&(t[a].defaultSelected=!0)}else{for(a=""+me(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function ft(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function At(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(z(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:me(a)}}function Le(t,i){var a=me(i.value),l=me(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function kt(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function C(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function y(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?C(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var q,he=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(q=q||document.createElement("div"),q.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=q.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ge(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Pe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function fe(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function pe(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,f=fe(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,f):t[a]=f}}var Ue=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Be(t,i){if(i){if(Ue[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ae(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ee=null;function tt(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rt=null,ht=null,B=null;function we(t){if(t=ya(t)){if(typeof rt!="function")throw Error(n(280));var i=t.stateNode;i&&(i=mo(i),rt(t.stateNode,t.type,i))}}function de(t){ht?B?B.push(t):B=[t]:ht=t}function Oe(){if(ht){var t=ht,i=B;if(B=ht=null,we(t),i)for(t=0;t<i.length;t++)we(i[t])}}function Re(t,i){return t(i)}function _e(){}var Xe=!1;function st(t,i,a){if(Xe)return t(i,a);Xe=!0;try{return Re(t,i,a)}finally{Xe=!1,(ht!==null||B!==null)&&(_e(),Oe())}}function Nt(t,i){var a=t.stateNode;if(a===null)return null;var l=mo(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Et=!1;if(h)try{var En={};Object.defineProperty(En,"passive",{get:function(){Et=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{Et=!1}function Yn(t,i,a,l,f,d,E,D,F){var re=Array.prototype.slice.call(arguments,3);try{i.apply(a,re)}catch(xe){this.onError(xe)}}var Ui=!1,os=null,Nr=!1,ls=null,Fi={onError:function(t){Ui=!0,os=t}};function ea(t,i,a,l,f,d,E,D,F){Ui=!1,os=null,Yn.apply(Fi,arguments)}function Za(t,i,a,l,f,d,E,D,F){if(ea.apply(this,arguments),Ui){if(Ui){var re=os;Ui=!1,os=null}else throw Error(n(198));Nr||(Nr=!0,ls=re)}}function vi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Ir(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ta(t){if(vi(t)!==t)throw Error(n(188))}function us(t){var i=t.alternate;if(!i){if(i=vi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var f=a.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===a)return ta(f),t;if(d===l)return ta(f),i;d=d.sibling}throw Error(n(188))}if(a.return!==l.return)a=f,l=d;else{for(var E=!1,D=f.child;D;){if(D===a){E=!0,a=f,l=d;break}if(D===l){E=!0,l=f,a=d;break}D=D.sibling}if(!E){for(D=d.child;D;){if(D===a){E=!0,a=d,l=f;break}if(D===l){E=!0,l=d,a=f;break}D=D.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function na(t){return t=us(t),t!==null?ia(t):null}function ia(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ia(t);if(i!==null)return i;t=t.sibling}return null}var Qa=e.unstable_scheduleCallback,Ja=e.unstable_cancelCallback,Vl=e.unstable_shouldYield,Hl=e.unstable_requestPaint,Yt=e.unstable_now,Gl=e.unstable_getCurrentPriorityLevel,ra=e.unstable_ImmediatePriority,T=e.unstable_UserBlockingPriority,G=e.unstable_NormalPriority,ie=e.unstable_LowPriority,ee=e.unstable_IdlePriority,Z=null,be=null;function Ve(t){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(Z,t,void 0,(t.current.flags&128)===128)}catch{}}var Ce=Math.clz32?Math.clz32:at,Ye=Math.log,Ke=Math.LN2;function at(t){return t>>>=0,t===0?32:31-(Ye(t)/Ke|0)|0}var ot=64,$e=4194304;function xt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ot(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,f=t.suspendedLanes,d=t.pingedLanes,E=a&268435455;if(E!==0){var D=E&~f;D!==0?l=xt(D):(d&=E,d!==0&&(l=xt(d)))}else E=a&~f,E!==0?l=xt(E):d!==0&&(l=xt(d));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,d=i&-i,f>=d||f===16&&(d&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-Ce(i),f=1<<a,l|=t[a],i&=~f;return l}function Gt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ct(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes;0<d;){var E=31-Ce(d),D=1<<E,F=f[E];F===-1?((D&a)===0||(D&l)!==0)&&(f[E]=Gt(D,i)):F<=i&&(t.expiredLanes|=D),d&=~D}}function Qt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ke(){var t=ot;return ot<<=1,(ot&4194240)===0&&(ot=64),t}function dn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function pt(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Ce(i),t[i]=a}function bn(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-Ce(a),d=1<<f;i[f]=0,l[f]=-1,t[f]=-1,a&=~d}}function Pn(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Ce(a),f=1<<l;f&i|t[l]&i&&(t[l]|=i),a&=~f}}var mt=0;function Oi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var wt,zt,ni,Rt,ii,xi=!1,Ur=[],sr=null,ar=null,or=null,sa=new Map,aa=new Map,lr=[],yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dd(t,i){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":sa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":aa.delete(i.pointerId)}}function oa(t,i,a,l,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=ya(i),i!==null&&zt(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Mg(t,i,a,l,f){switch(i){case"focusin":return sr=oa(sr,t,i,a,l,f),!0;case"dragenter":return ar=oa(ar,t,i,a,l,f),!0;case"mouseover":return or=oa(or,t,i,a,l,f),!0;case"pointerover":var d=f.pointerId;return sa.set(d,oa(sa.get(d)||null,t,i,a,l,f)),!0;case"gotpointercapture":return d=f.pointerId,aa.set(d,oa(aa.get(d)||null,t,i,a,l,f)),!0}return!1}function hd(t){var i=Fr(t.target);if(i!==null){var a=vi(i);if(a!==null){if(i=a.tag,i===13){if(i=Ir(a),i!==null){t.blockedOn=i,ii(t.priority,function(){ni(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Xl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Ee=l,a.target.dispatchEvent(l),Ee=null}else return i=ya(a),i!==null&&zt(i),t.blockedOn=a,!1;i.shift()}return!0}function pd(t,i,a){eo(t)&&a.delete(i)}function Eg(){xi=!1,sr!==null&&eo(sr)&&(sr=null),ar!==null&&eo(ar)&&(ar=null),or!==null&&eo(or)&&(or=null),sa.forEach(pd),aa.forEach(pd)}function la(t,i){t.blockedOn===i&&(t.blockedOn=null,xi||(xi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Eg)))}function ua(t){function i(f){return la(f,t)}if(0<Ur.length){la(Ur[0],t);for(var a=1;a<Ur.length;a++){var l=Ur[a];l.blockedOn===t&&(l.blockedOn=null)}}for(sr!==null&&la(sr,t),ar!==null&&la(ar,t),or!==null&&la(or,t),sa.forEach(i),aa.forEach(i),a=0;a<lr.length;a++)l=lr[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<lr.length&&(a=lr[0],a.blockedOn===null);)hd(a),a.blockedOn===null&&lr.shift()}var cs=L.ReactCurrentBatchConfig,to=!0;function Tg(t,i,a,l){var f=mt,d=cs.transition;cs.transition=null;try{mt=1,Wl(t,i,a,l)}finally{mt=f,cs.transition=d}}function wg(t,i,a,l){var f=mt,d=cs.transition;cs.transition=null;try{mt=4,Wl(t,i,a,l)}finally{mt=f,cs.transition=d}}function Wl(t,i,a,l){if(to){var f=Xl(t,i,a,l);if(f===null)lu(t,i,l,no,a),dd(t,l);else if(Mg(f,t,i,a,l))l.stopPropagation();else if(dd(t,l),i&4&&-1<yg.indexOf(t)){for(;f!==null;){var d=ya(f);if(d!==null&&wt(d),d=Xl(t,i,a,l),d===null&&lu(t,i,l,no,a),d===f)break;f=d}f!==null&&l.stopPropagation()}else lu(t,i,l,null,a)}}var no=null;function Xl(t,i,a,l){if(no=null,t=tt(l),t=Fr(t),t!==null)if(i=vi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Ir(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return no=t,null}function md(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gl()){case ra:return 1;case T:return 4;case G:case ie:return 16;case ee:return 536870912;default:return 16}default:return 16}}var ur=null,Yl=null,io=null;function gd(){if(io)return io;var t,i=Yl,a=i.length,l,f="value"in ur?ur.value:ur.textContent,d=f.length;for(t=0;t<a&&i[t]===f[t];t++);var E=a-t;for(l=1;l<=E&&i[a-l]===f[d-l];l++);return io=f.slice(t,1<l?1-l:void 0)}function ro(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function so(){return!0}function _d(){return!1}function kn(t){function i(a,l,f,d,E){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(a=t[D],this[D]=a?a(d):d[D]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?so:_d,this.isPropagationStopped=_d,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),i}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=kn(fs),ca=oe({},fs,{view:0,detail:0}),Ag=kn(ca),$l,jl,fa,ao=oe({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fa&&(fa&&t.type==="mousemove"?($l=t.screenX-fa.screenX,jl=t.screenY-fa.screenY):jl=$l=0,fa=t),$l)},movementY:function(t){return"movementY"in t?t.movementY:jl}}),vd=kn(ao),Cg=oe({},ao,{dataTransfer:0}),Rg=kn(Cg),bg=oe({},ca,{relatedTarget:0}),Kl=kn(bg),Pg=oe({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Lg=kn(Pg),Dg=oe({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ng=kn(Dg),Ig=oe({},fs,{data:0}),xd=kn(Ig),Ug={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Og={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Og[t])?!!i[t]:!1}function Zl(){return Bg}var kg=oe({},ca,{key:function(t){if(t.key){var i=Ug[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ro(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zl,charCode:function(t){return t.type==="keypress"?ro(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ro(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zg=kn(kg),Vg=oe({},ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sd=kn(Vg),Hg=oe({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zl}),Gg=kn(Hg),Wg=oe({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xg=kn(Wg),Yg=oe({},ao,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qg=kn(Yg),$g=[9,13,27,32],Ql=h&&"CompositionEvent"in window,da=null;h&&"documentMode"in document&&(da=document.documentMode);var jg=h&&"TextEvent"in window&&!da,yd=h&&(!Ql||da&&8<da&&11>=da),Md=" ",Ed=!1;function Td(t,i){switch(t){case"keyup":return $g.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function Kg(t,i){switch(t){case"compositionend":return wd(i);case"keypress":return i.which!==32?null:(Ed=!0,Md);case"textInput":return t=i.data,t===Md&&Ed?null:t;default:return null}}function Zg(t,i){if(ds)return t==="compositionend"||!Ql&&Td(t,i)?(t=gd(),io=Yl=ur=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return yd&&i.locale!=="ko"?null:i.data;default:return null}}var Qg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Qg[t.type]:i==="textarea"}function Cd(t,i,a,l){de(l),i=fo(i,"onChange"),0<i.length&&(a=new ql("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var ha=null,pa=null;function Jg(t){Xd(t,0)}function oo(t){var i=_s(t);if(It(i))return t}function e0(t,i){if(t==="change")return i}var Rd=!1;if(h){var Jl;if(h){var eu="oninput"in document;if(!eu){var bd=document.createElement("div");bd.setAttribute("oninput","return;"),eu=typeof bd.oninput=="function"}Jl=eu}else Jl=!1;Rd=Jl&&(!document.documentMode||9<document.documentMode)}function Pd(){ha&&(ha.detachEvent("onpropertychange",Ld),pa=ha=null)}function Ld(t){if(t.propertyName==="value"&&oo(pa)){var i=[];Cd(i,pa,t,tt(t)),st(Jg,i)}}function t0(t,i,a){t==="focusin"?(Pd(),ha=i,pa=a,ha.attachEvent("onpropertychange",Ld)):t==="focusout"&&Pd()}function n0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oo(pa)}function i0(t,i){if(t==="click")return oo(i)}function r0(t,i){if(t==="input"||t==="change")return oo(i)}function s0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ri=typeof Object.is=="function"?Object.is:s0;function ma(t,i){if(ri(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!m.call(i,f)||!ri(t[f],i[f]))return!1}return!0}function Dd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nd(t,i){var a=Dd(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Dd(a)}}function Id(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Id(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Ud(){for(var t=window,i=ut();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ut(t.document)}return i}function tu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function a0(t){var i=Ud(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Id(a.ownerDocument.documentElement,a)){if(l!==null&&tu(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,d=Math.min(l.start,f);l=l.end===void 0?d:Math.min(l.end,f),!t.extend&&d>l&&(f=l,l=d,d=f),f=Nd(a,d);var E=Nd(a,l);f&&E&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),d>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var o0=h&&"documentMode"in document&&11>=document.documentMode,hs=null,nu=null,ga=null,iu=!1;function Fd(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;iu||hs==null||hs!==ut(l)||(l=hs,"selectionStart"in l&&tu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ga&&ma(ga,l)||(ga=l,l=fo(nu,"onSelect"),0<l.length&&(i=new ql("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=hs)))}function lo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ps={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},ru={},Od={};h&&(Od=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function uo(t){if(ru[t])return ru[t];if(!ps[t])return t;var i=ps[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Od)return ru[t]=i[a];return t}var Bd=uo("animationend"),kd=uo("animationiteration"),zd=uo("animationstart"),Vd=uo("transitionend"),Hd=new Map,Gd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,i){Hd.set(t,i),u(i,[t])}for(var su=0;su<Gd.length;su++){var au=Gd[su],l0=au.toLowerCase(),u0=au[0].toUpperCase()+au.slice(1);cr(l0,"on"+u0)}cr(Bd,"onAnimationEnd"),cr(kd,"onAnimationIteration"),cr(zd,"onAnimationStart"),cr("dblclick","onDoubleClick"),cr("focusin","onFocus"),cr("focusout","onBlur"),cr(Vd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c0=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function Wd(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,Za(l,i,void 0,t),t.currentTarget=null}function Xd(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var E=l.length-1;0<=E;E--){var D=l[E],F=D.instance,re=D.currentTarget;if(D=D.listener,F!==d&&f.isPropagationStopped())break e;Wd(f,D,re),d=F}else for(E=0;E<l.length;E++){if(D=l[E],F=D.instance,re=D.currentTarget,D=D.listener,F!==d&&f.isPropagationStopped())break e;Wd(f,D,re),d=F}}}if(Nr)throw t=ls,Nr=!1,ls=null,t}function Vt(t,i){var a=i[pu];a===void 0&&(a=i[pu]=new Set);var l=t+"__bubble";a.has(l)||(Yd(i,t,2,!1),a.add(l))}function ou(t,i,a){var l=0;i&&(l|=4),Yd(a,t,l,i)}var co="_reactListening"+Math.random().toString(36).slice(2);function va(t){if(!t[co]){t[co]=!0,r.forEach(function(a){a!=="selectionchange"&&(c0.has(a)||ou(a,!1,t),ou(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[co]||(i[co]=!0,ou("selectionchange",!1,i))}}function Yd(t,i,a,l){switch(md(i)){case 1:var f=Tg;break;case 4:f=wg;break;default:f=Wl}a=f.bind(null,i,a,t),f=void 0,!Et||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function lu(t,i,a,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var D=l.stateNode.containerInfo;if(D===f||D.nodeType===8&&D.parentNode===f)break;if(E===4)for(E=l.return;E!==null;){var F=E.tag;if((F===3||F===4)&&(F=E.stateNode.containerInfo,F===f||F.nodeType===8&&F.parentNode===f))return;E=E.return}for(;D!==null;){if(E=Fr(D),E===null)return;if(F=E.tag,F===5||F===6){l=d=E;continue e}D=D.parentNode}}l=l.return}st(function(){var re=d,xe=tt(a),ye=[];e:{var ve=Hd.get(t);if(ve!==void 0){var ze=ql,We=t;switch(t){case"keypress":if(ro(a)===0)break e;case"keydown":case"keyup":ze=zg;break;case"focusin":We="focus",ze=Kl;break;case"focusout":We="blur",ze=Kl;break;case"beforeblur":case"afterblur":ze=Kl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=Rg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=Gg;break;case Bd:case kd:case zd:ze=Lg;break;case Vd:ze=Xg;break;case"scroll":ze=Ag;break;case"wheel":ze=qg;break;case"copy":case"cut":case"paste":ze=Ng;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=Sd}var qe=(i&4)!==0,Kt=!qe&&t==="scroll",$=qe?ve!==null?ve+"Capture":null:ve;qe=[];for(var V=re,te;V!==null;){te=V;var Te=te.stateNode;if(te.tag===5&&Te!==null&&(te=Te,$!==null&&(Te=Nt(V,$),Te!=null&&qe.push(xa(V,Te,te)))),Kt)break;V=V.return}0<qe.length&&(ve=new ze(ve,We,null,a,xe),ye.push({event:ve,listeners:qe}))}}if((i&7)===0){e:{if(ve=t==="mouseover"||t==="pointerover",ze=t==="mouseout"||t==="pointerout",ve&&a!==Ee&&(We=a.relatedTarget||a.fromElement)&&(Fr(We)||We[Bi]))break e;if((ze||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,ze?(We=a.relatedTarget||a.toElement,ze=re,We=We?Fr(We):null,We!==null&&(Kt=vi(We),We!==Kt||We.tag!==5&&We.tag!==6)&&(We=null)):(ze=null,We=re),ze!==We)){if(qe=vd,Te="onMouseLeave",$="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(qe=Sd,Te="onPointerLeave",$="onPointerEnter",V="pointer"),Kt=ze==null?ve:_s(ze),te=We==null?ve:_s(We),ve=new qe(Te,V+"leave",ze,a,xe),ve.target=Kt,ve.relatedTarget=te,Te=null,Fr(xe)===re&&(qe=new qe($,V+"enter",We,a,xe),qe.target=te,qe.relatedTarget=Kt,Te=qe),Kt=Te,ze&&We)t:{for(qe=ze,$=We,V=0,te=qe;te;te=ms(te))V++;for(te=0,Te=$;Te;Te=ms(Te))te++;for(;0<V-te;)qe=ms(qe),V--;for(;0<te-V;)$=ms($),te--;for(;V--;){if(qe===$||$!==null&&qe===$.alternate)break t;qe=ms(qe),$=ms($)}qe=null}else qe=null;ze!==null&&qd(ye,ve,ze,qe,!1),We!==null&&Kt!==null&&qd(ye,Kt,We,qe,!0)}}e:{if(ve=re?_s(re):window,ze=ve.nodeName&&ve.nodeName.toLowerCase(),ze==="select"||ze==="input"&&ve.type==="file")var je=e0;else if(Ad(ve))if(Rd)je=r0;else{je=n0;var Je=t0}else(ze=ve.nodeName)&&ze.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(je=i0);if(je&&(je=je(t,re))){Cd(ye,je,a,xe);break e}Je&&Je(t,ve,re),t==="focusout"&&(Je=ve._wrapperState)&&Je.controlled&&ve.type==="number"&&fn(ve,"number",ve.value)}switch(Je=re?_s(re):window,t){case"focusin":(Ad(Je)||Je.contentEditable==="true")&&(hs=Je,nu=re,ga=null);break;case"focusout":ga=nu=hs=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,Fd(ye,a,xe);break;case"selectionchange":if(o0)break;case"keydown":case"keyup":Fd(ye,a,xe)}var et;if(Ql)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ds?Td(t,a)&&(nt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(yd&&a.locale!=="ko"&&(ds||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ds&&(et=gd()):(ur=xe,Yl="value"in ur?ur.value:ur.textContent,ds=!0)),Je=fo(re,nt),0<Je.length&&(nt=new xd(nt,t,null,a,xe),ye.push({event:nt,listeners:Je}),et?nt.data=et:(et=wd(a),et!==null&&(nt.data=et)))),(et=jg?Kg(t,a):Zg(t,a))&&(re=fo(re,"onBeforeInput"),0<re.length&&(xe=new xd("onBeforeInput","beforeinput",null,a,xe),ye.push({event:xe,listeners:re}),xe.data=et))}Xd(ye,i)})}function xa(t,i,a){return{instance:t,listener:i,currentTarget:a}}function fo(t,i){for(var a=i+"Capture",l=[];t!==null;){var f=t,d=f.stateNode;f.tag===5&&d!==null&&(f=d,d=Nt(t,a),d!=null&&l.unshift(xa(t,d,f)),d=Nt(t,i),d!=null&&l.push(xa(t,d,f))),t=t.return}return l}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qd(t,i,a,l,f){for(var d=i._reactName,E=[];a!==null&&a!==l;){var D=a,F=D.alternate,re=D.stateNode;if(F!==null&&F===l)break;D.tag===5&&re!==null&&(D=re,f?(F=Nt(a,d),F!=null&&E.unshift(xa(a,F,D))):f||(F=Nt(a,d),F!=null&&E.push(xa(a,F,D)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var f0=/\r\n?/g,d0=/\u0000|\uFFFD/g;function $d(t){return(typeof t=="string"?t:""+t).replace(f0,`
`).replace(d0,"")}function ho(t,i,a){if(i=$d(i),$d(t)!==i&&a)throw Error(n(425))}function po(){}var uu=null,cu=null;function fu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var du=typeof setTimeout=="function"?setTimeout:void 0,h0=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,p0=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(t){return jd.resolve(null).then(t).catch(m0)}:du;function m0(t){setTimeout(function(){throw t})}function hu(t,i){var a=i,l=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(l===0){t.removeChild(f),ua(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=f}while(a);ua(i)}function fr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Kd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var gs=Math.random().toString(36).slice(2),Si="__reactFiber$"+gs,Sa="__reactProps$"+gs,Bi="__reactContainer$"+gs,pu="__reactEvents$"+gs,g0="__reactListeners$"+gs,_0="__reactHandles$"+gs;function Fr(t){var i=t[Si];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Bi]||a[Si]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Kd(t);t!==null;){if(a=t[Si])return a;t=Kd(t)}return i}t=a,a=t.parentNode}return null}function ya(t){return t=t[Si]||t[Bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function mo(t){return t[Sa]||null}var mu=[],vs=-1;function dr(t){return{current:t}}function Ht(t){0>vs||(t.current=mu[vs],mu[vs]=null,vs--)}function Bt(t,i){vs++,mu[vs]=t.current,t.current=i}var hr={},gn=dr(hr),Ln=dr(!1),Or=hr;function xs(t,i){var a=t.type.contextTypes;if(!a)return hr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},d;for(d in a)f[d]=i[d];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Dn(t){return t=t.childContextTypes,t!=null}function go(){Ht(Ln),Ht(gn)}function Zd(t,i,a){if(gn.current!==hr)throw Error(n(168));Bt(gn,i),Bt(Ln,a)}function Qd(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,Se(t)||"Unknown",f));return oe({},a,l)}function _o(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,Or=gn.current,Bt(gn,t),Bt(Ln,Ln.current),!0}function Jd(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=Qd(t,i,Or),l.__reactInternalMemoizedMergedChildContext=t,Ht(Ln),Ht(gn),Bt(gn,t)):Ht(Ln),Bt(Ln,a)}var ki=null,vo=!1,gu=!1;function eh(t){ki===null?ki=[t]:ki.push(t)}function v0(t){vo=!0,eh(t)}function pr(){if(!gu&&ki!==null){gu=!0;var t=0,i=mt;try{var a=ki;for(mt=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}ki=null,vo=!1}catch(f){throw ki!==null&&(ki=ki.slice(t+1)),Qa(ra,pr),f}finally{mt=i,gu=!1}}return null}var Ss=[],ys=0,xo=null,So=0,qn=[],$n=0,Br=null,zi=1,Vi="";function kr(t,i){Ss[ys++]=So,Ss[ys++]=xo,xo=t,So=i}function th(t,i,a){qn[$n++]=zi,qn[$n++]=Vi,qn[$n++]=Br,Br=t;var l=zi;t=Vi;var f=32-Ce(l)-1;l&=~(1<<f),a+=1;var d=32-Ce(i)+f;if(30<d){var E=f-f%5;d=(l&(1<<E)-1).toString(32),l>>=E,f-=E,zi=1<<32-Ce(i)+f|a<<f|l,Vi=d+t}else zi=1<<d|a<<f|l,Vi=t}function _u(t){t.return!==null&&(kr(t,1),th(t,1,0))}function vu(t){for(;t===xo;)xo=Ss[--ys],Ss[ys]=null,So=Ss[--ys],Ss[ys]=null;for(;t===Br;)Br=qn[--$n],qn[$n]=null,Vi=qn[--$n],qn[$n]=null,zi=qn[--$n],qn[$n]=null}var zn=null,Vn=null,Wt=!1,si=null;function nh(t,i){var a=Qn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function ih(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,zn=t,Vn=fr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,zn=t,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Br!==null?{id:zi,overflow:Vi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Qn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,zn=t,Vn=null,!0):!1;default:return!1}}function xu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Su(t){if(Wt){var i=Vn;if(i){var a=i;if(!ih(t,i)){if(xu(t))throw Error(n(418));i=fr(a.nextSibling);var l=zn;i&&ih(t,i)?nh(l,a):(t.flags=t.flags&-4097|2,Wt=!1,zn=t)}}else{if(xu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Wt=!1,zn=t}}}function rh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zn=t}function yo(t){if(t!==zn)return!1;if(!Wt)return rh(t),Wt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!fu(t.type,t.memoizedProps)),i&&(i=Vn)){if(xu(t))throw sh(),Error(n(418));for(;i;)nh(t,i),i=fr(i.nextSibling)}if(rh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Vn=fr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Vn=null}}else Vn=zn?fr(t.stateNode.nextSibling):null;return!0}function sh(){for(var t=Vn;t;)t=fr(t.nextSibling)}function Ms(){Vn=zn=null,Wt=!1}function yu(t){si===null?si=[t]:si.push(t)}var x0=L.ReactCurrentBatchConfig;function Ma(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var f=l,d=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===d?i.ref:(i=function(E){var D=f.refs;E===null?delete D[d]:D[d]=E},i._stringRef=d,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Mo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function ah(t){var i=t._init;return i(t._payload)}function oh(t){function i($,V){if(t){var te=$.deletions;te===null?($.deletions=[V],$.flags|=16):te.push(V)}}function a($,V){if(!t)return null;for(;V!==null;)i($,V),V=V.sibling;return null}function l($,V){for($=new Map;V!==null;)V.key!==null?$.set(V.key,V):$.set(V.index,V),V=V.sibling;return $}function f($,V){return $=Mr($,V),$.index=0,$.sibling=null,$}function d($,V,te){return $.index=te,t?(te=$.alternate,te!==null?(te=te.index,te<V?($.flags|=2,V):te):($.flags|=2,V)):($.flags|=1048576,V)}function E($){return t&&$.alternate===null&&($.flags|=2),$}function D($,V,te,Te){return V===null||V.tag!==6?(V=dc(te,$.mode,Te),V.return=$,V):(V=f(V,te),V.return=$,V)}function F($,V,te,Te){var je=te.type;return je===k?xe($,V,te.props.children,Te,te.key):V!==null&&(V.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===Q&&ah(je)===V.type)?(Te=f(V,te.props),Te.ref=Ma($,V,te),Te.return=$,Te):(Te=Yo(te.type,te.key,te.props,null,$.mode,Te),Te.ref=Ma($,V,te),Te.return=$,Te)}function re($,V,te,Te){return V===null||V.tag!==4||V.stateNode.containerInfo!==te.containerInfo||V.stateNode.implementation!==te.implementation?(V=hc(te,$.mode,Te),V.return=$,V):(V=f(V,te.children||[]),V.return=$,V)}function xe($,V,te,Te,je){return V===null||V.tag!==7?(V=qr(te,$.mode,Te,je),V.return=$,V):(V=f(V,te),V.return=$,V)}function ye($,V,te){if(typeof V=="string"&&V!==""||typeof V=="number")return V=dc(""+V,$.mode,te),V.return=$,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case H:return te=Yo(V.type,V.key,V.props,null,$.mode,te),te.ref=Ma($,null,V),te.return=$,te;case P:return V=hc(V,$.mode,te),V.return=$,V;case Q:var Te=V._init;return ye($,Te(V._payload),te)}if(z(V)||le(V))return V=qr(V,$.mode,te,null),V.return=$,V;Mo($,V)}return null}function ve($,V,te,Te){var je=V!==null?V.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return je!==null?null:D($,V,""+te,Te);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case H:return te.key===je?F($,V,te,Te):null;case P:return te.key===je?re($,V,te,Te):null;case Q:return je=te._init,ve($,V,je(te._payload),Te)}if(z(te)||le(te))return je!==null?null:xe($,V,te,Te,null);Mo($,te)}return null}function ze($,V,te,Te,je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return $=$.get(te)||null,D(V,$,""+Te,je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case H:return $=$.get(Te.key===null?te:Te.key)||null,F(V,$,Te,je);case P:return $=$.get(Te.key===null?te:Te.key)||null,re(V,$,Te,je);case Q:var Je=Te._init;return ze($,V,te,Je(Te._payload),je)}if(z(Te)||le(Te))return $=$.get(te)||null,xe(V,$,Te,je,null);Mo(V,Te)}return null}function We($,V,te,Te){for(var je=null,Je=null,et=V,nt=V=0,un=null;et!==null&&nt<te.length;nt++){et.index>nt?(un=et,et=null):un=et.sibling;var Tt=ve($,et,te[nt],Te);if(Tt===null){et===null&&(et=un);break}t&&et&&Tt.alternate===null&&i($,et),V=d(Tt,V,nt),Je===null?je=Tt:Je.sibling=Tt,Je=Tt,et=un}if(nt===te.length)return a($,et),Wt&&kr($,nt),je;if(et===null){for(;nt<te.length;nt++)et=ye($,te[nt],Te),et!==null&&(V=d(et,V,nt),Je===null?je=et:Je.sibling=et,Je=et);return Wt&&kr($,nt),je}for(et=l($,et);nt<te.length;nt++)un=ze(et,$,nt,te[nt],Te),un!==null&&(t&&un.alternate!==null&&et.delete(un.key===null?nt:un.key),V=d(un,V,nt),Je===null?je=un:Je.sibling=un,Je=un);return t&&et.forEach(function(Er){return i($,Er)}),Wt&&kr($,nt),je}function qe($,V,te,Te){var je=le(te);if(typeof je!="function")throw Error(n(150));if(te=je.call(te),te==null)throw Error(n(151));for(var Je=je=null,et=V,nt=V=0,un=null,Tt=te.next();et!==null&&!Tt.done;nt++,Tt=te.next()){et.index>nt?(un=et,et=null):un=et.sibling;var Er=ve($,et,Tt.value,Te);if(Er===null){et===null&&(et=un);break}t&&et&&Er.alternate===null&&i($,et),V=d(Er,V,nt),Je===null?je=Er:Je.sibling=Er,Je=Er,et=un}if(Tt.done)return a($,et),Wt&&kr($,nt),je;if(et===null){for(;!Tt.done;nt++,Tt=te.next())Tt=ye($,Tt.value,Te),Tt!==null&&(V=d(Tt,V,nt),Je===null?je=Tt:Je.sibling=Tt,Je=Tt);return Wt&&kr($,nt),je}for(et=l($,et);!Tt.done;nt++,Tt=te.next())Tt=ze(et,$,nt,Tt.value,Te),Tt!==null&&(t&&Tt.alternate!==null&&et.delete(Tt.key===null?nt:Tt.key),V=d(Tt,V,nt),Je===null?je=Tt:Je.sibling=Tt,Je=Tt);return t&&et.forEach(function(Q0){return i($,Q0)}),Wt&&kr($,nt),je}function Kt($,V,te,Te){if(typeof te=="object"&&te!==null&&te.type===k&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case H:e:{for(var je=te.key,Je=V;Je!==null;){if(Je.key===je){if(je=te.type,je===k){if(Je.tag===7){a($,Je.sibling),V=f(Je,te.props.children),V.return=$,$=V;break e}}else if(Je.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===Q&&ah(je)===Je.type){a($,Je.sibling),V=f(Je,te.props),V.ref=Ma($,Je,te),V.return=$,$=V;break e}a($,Je);break}else i($,Je);Je=Je.sibling}te.type===k?(V=qr(te.props.children,$.mode,Te,te.key),V.return=$,$=V):(Te=Yo(te.type,te.key,te.props,null,$.mode,Te),Te.ref=Ma($,V,te),Te.return=$,$=Te)}return E($);case P:e:{for(Je=te.key;V!==null;){if(V.key===Je)if(V.tag===4&&V.stateNode.containerInfo===te.containerInfo&&V.stateNode.implementation===te.implementation){a($,V.sibling),V=f(V,te.children||[]),V.return=$,$=V;break e}else{a($,V);break}else i($,V);V=V.sibling}V=hc(te,$.mode,Te),V.return=$,$=V}return E($);case Q:return Je=te._init,Kt($,V,Je(te._payload),Te)}if(z(te))return We($,V,te,Te);if(le(te))return qe($,V,te,Te);Mo($,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,V!==null&&V.tag===6?(a($,V.sibling),V=f(V,te),V.return=$,$=V):(a($,V),V=dc(te,$.mode,Te),V.return=$,$=V),E($)):a($,V)}return Kt}var Es=oh(!0),lh=oh(!1),Eo=dr(null),To=null,Ts=null,Mu=null;function Eu(){Mu=Ts=To=null}function Tu(t){var i=Eo.current;Ht(Eo),t._currentValue=i}function wu(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function ws(t,i){To=t,Mu=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Nn=!0),t.firstContext=null)}function jn(t){var i=t._currentValue;if(Mu!==t)if(t={context:t,memoizedValue:i,next:null},Ts===null){if(To===null)throw Error(n(308));Ts=t,To.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return i}var zr=null;function Au(t){zr===null?zr=[t]:zr.push(t)}function uh(t,i,a,l){var f=i.interleaved;return f===null?(a.next=a,Au(i)):(a.next=f.next,f.next=a),i.interleaved=a,Hi(t,l)}function Hi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var mr=!1;function Cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ch(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function gr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(St&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Hi(t,a)}return f=l.interleaved,f===null?(i.next=i,Au(l)):(i.next=f.next,f.next=i),l.interleaved=i,Hi(t,a)}function wo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Pn(t,a)}}function fh(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};d===null?f=d=E:d=d.next=E,a=a.next}while(a!==null);d===null?f=d=i:d=d.next=i}else f=d=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Ao(t,i,a,l){var f=t.updateQueue;mr=!1;var d=f.firstBaseUpdate,E=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var F=D,re=F.next;F.next=null,E===null?d=re:E.next=re,E=F;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,D=xe.lastBaseUpdate,D!==E&&(D===null?xe.firstBaseUpdate=re:D.next=re,xe.lastBaseUpdate=F))}if(d!==null){var ye=f.baseState;E=0,xe=re=F=null,D=d;do{var ve=D.lane,ze=D.eventTime;if((l&ve)===ve){xe!==null&&(xe=xe.next={eventTime:ze,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var We=t,qe=D;switch(ve=i,ze=a,qe.tag){case 1:if(We=qe.payload,typeof We=="function"){ye=We.call(ze,ye,ve);break e}ye=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=qe.payload,ve=typeof We=="function"?We.call(ze,ye,ve):We,ve==null)break e;ye=oe({},ye,ve);break e;case 2:mr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,ve=f.effects,ve===null?f.effects=[D]:ve.push(D))}else ze={eventTime:ze,lane:ve,tag:D.tag,payload:D.payload,callback:D.callback,next:null},xe===null?(re=xe=ze,F=ye):xe=xe.next=ze,E|=ve;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;ve=D,D=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);if(xe===null&&(F=ye),f.baseState=F,f.firstBaseUpdate=re,f.lastBaseUpdate=xe,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else d===null&&(f.shared.lanes=0);Gr|=E,t.lanes=E,t.memoizedState=ye}}function dh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=a,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var Ea={},yi=dr(Ea),Ta=dr(Ea),wa=dr(Ea);function Vr(t){if(t===Ea)throw Error(n(174));return t}function Ru(t,i){switch(Bt(wa,i),Bt(Ta,t),Bt(yi,Ea),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:y(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=y(i,t)}Ht(yi),Bt(yi,i)}function As(){Ht(yi),Ht(Ta),Ht(wa)}function hh(t){Vr(wa.current);var i=Vr(yi.current),a=y(i,t.type);i!==a&&(Bt(Ta,t),Bt(yi,a))}function bu(t){Ta.current===t&&(Ht(yi),Ht(Ta))}var qt=dr(0);function Co(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Pu=[];function Lu(){for(var t=0;t<Pu.length;t++)Pu[t]._workInProgressVersionPrimary=null;Pu.length=0}var Ro=L.ReactCurrentDispatcher,Du=L.ReactCurrentBatchConfig,Hr=0,$t=null,tn=null,on=null,bo=!1,Aa=!1,Ca=0,S0=0;function _n(){throw Error(n(321))}function Nu(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ri(t[a],i[a]))return!1;return!0}function Iu(t,i,a,l,f,d){if(Hr=d,$t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ro.current=t===null||t.memoizedState===null?T0:w0,t=a(l,f),Aa){d=0;do{if(Aa=!1,Ca=0,25<=d)throw Error(n(301));d+=1,on=tn=null,i.updateQueue=null,Ro.current=A0,t=a(l,f)}while(Aa)}if(Ro.current=Do,i=tn!==null&&tn.next!==null,Hr=0,on=tn=$t=null,bo=!1,i)throw Error(n(300));return t}function Uu(){var t=Ca!==0;return Ca=0,t}function Mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?$t.memoizedState=on=t:on=on.next=t,on}function Kn(){if(tn===null){var t=$t.alternate;t=t!==null?t.memoizedState:null}else t=tn.next;var i=on===null?$t.memoizedState:on.next;if(i!==null)on=i,tn=t;else{if(t===null)throw Error(n(310));tn=t,t={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},on===null?$t.memoizedState=on=t:on=on.next=t}return on}function Ra(t,i){return typeof i=="function"?i(t):i}function Fu(t){var i=Kn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=tn,f=l.baseQueue,d=a.pending;if(d!==null){if(f!==null){var E=f.next;f.next=d.next,d.next=E}l.baseQueue=f=d,a.pending=null}if(f!==null){d=f.next,l=l.baseState;var D=E=null,F=null,re=d;do{var xe=re.lane;if((Hr&xe)===xe)F!==null&&(F=F.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),l=re.hasEagerState?re.eagerState:t(l,re.action);else{var ye={lane:xe,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};F===null?(D=F=ye,E=l):F=F.next=ye,$t.lanes|=xe,Gr|=xe}re=re.next}while(re!==null&&re!==d);F===null?E=l:F.next=D,ri(l,i.memoizedState)||(Nn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=F,a.lastRenderedState=l}if(t=a.interleaved,t!==null){f=t;do d=f.lane,$t.lanes|=d,Gr|=d,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Ou(t){var i=Kn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,f=a.pending,d=i.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do d=t(d,E.action),E=E.next;while(E!==f);ri(d,i.memoizedState)||(Nn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function ph(){}function mh(t,i){var a=$t,l=Kn(),f=i(),d=!ri(l.memoizedState,f);if(d&&(l.memoizedState=f,Nn=!0),l=l.queue,Bu(vh.bind(null,a,l,t),[t]),l.getSnapshot!==i||d||on!==null&&on.memoizedState.tag&1){if(a.flags|=2048,ba(9,_h.bind(null,a,l,f,i),void 0,null),ln===null)throw Error(n(349));(Hr&30)!==0||gh(a,i,f)}return f}function gh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function _h(t,i,a,l){i.value=a,i.getSnapshot=l,xh(i)&&Sh(t)}function vh(t,i,a){return a(function(){xh(i)&&Sh(t)})}function xh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ri(t,a)}catch{return!0}}function Sh(t){var i=Hi(t,1);i!==null&&ui(i,t,1,-1)}function yh(t){var i=Mi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},i.queue=t,t=t.dispatch=E0.bind(null,$t,t),[i.memoizedState,t]}function ba(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function Mh(){return Kn().memoizedState}function Po(t,i,a,l){var f=Mi();$t.flags|=t,f.memoizedState=ba(1|i,a,void 0,l===void 0?null:l)}function Lo(t,i,a,l){var f=Kn();l=l===void 0?null:l;var d=void 0;if(tn!==null){var E=tn.memoizedState;if(d=E.destroy,l!==null&&Nu(l,E.deps)){f.memoizedState=ba(i,a,d,l);return}}$t.flags|=t,f.memoizedState=ba(1|i,a,d,l)}function Eh(t,i){return Po(8390656,8,t,i)}function Bu(t,i){return Lo(2048,8,t,i)}function Th(t,i){return Lo(4,2,t,i)}function wh(t,i){return Lo(4,4,t,i)}function Ah(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ch(t,i,a){return a=a!=null?a.concat([t]):null,Lo(4,4,Ah.bind(null,i,t),a)}function ku(){}function Rh(t,i){var a=Kn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Nu(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function bh(t,i){var a=Kn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Nu(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Ph(t,i,a){return(Hr&21)===0?(t.baseState&&(t.baseState=!1,Nn=!0),t.memoizedState=a):(ri(a,i)||(a=ke(),$t.lanes|=a,Gr|=a,t.baseState=!0),i)}function y0(t,i){var a=mt;mt=a!==0&&4>a?a:4,t(!0);var l=Du.transition;Du.transition={};try{t(!1),i()}finally{mt=a,Du.transition=l}}function Lh(){return Kn().memoizedState}function M0(t,i,a){var l=Sr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Dh(t))Nh(i,a);else if(a=uh(t,i,a,l),a!==null){var f=wn();ui(a,t,l,f),Ih(a,i,l)}}function E0(t,i,a){var l=Sr(t),f={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dh(t))Nh(i,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var E=i.lastRenderedState,D=d(E,a);if(f.hasEagerState=!0,f.eagerState=D,ri(D,E)){var F=i.interleaved;F===null?(f.next=f,Au(i)):(f.next=F.next,F.next=f),i.interleaved=f;return}}catch{}a=uh(t,i,f,l),a!==null&&(f=wn(),ui(a,t,l,f),Ih(a,i,l))}}function Dh(t){var i=t.alternate;return t===$t||i!==null&&i===$t}function Nh(t,i){Aa=bo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Ih(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Pn(t,a)}}var Do={readContext:jn,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},T0={readContext:jn,useCallback:function(t,i){return Mi().memoizedState=[t,i===void 0?null:i],t},useContext:jn,useEffect:Eh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Po(4194308,4,Ah.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Po(4194308,4,t,i)},useInsertionEffect:function(t,i){return Po(4,2,t,i)},useMemo:function(t,i){var a=Mi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=Mi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=M0.bind(null,$t,t),[l.memoizedState,t]},useRef:function(t){var i=Mi();return t={current:t},i.memoizedState=t},useState:yh,useDebugValue:ku,useDeferredValue:function(t){return Mi().memoizedState=t},useTransition:function(){var t=yh(!1),i=t[0];return t=y0.bind(null,t[1]),Mi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=$t,f=Mi();if(Wt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),ln===null)throw Error(n(349));(Hr&30)!==0||gh(l,i,a)}f.memoizedState=a;var d={value:a,getSnapshot:i};return f.queue=d,Eh(vh.bind(null,l,d,t),[t]),l.flags|=2048,ba(9,_h.bind(null,l,d,a,i),void 0,null),a},useId:function(){var t=Mi(),i=ln.identifierPrefix;if(Wt){var a=Vi,l=zi;a=(l&~(1<<32-Ce(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ca++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=S0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},w0={readContext:jn,useCallback:Rh,useContext:jn,useEffect:Bu,useImperativeHandle:Ch,useInsertionEffect:Th,useLayoutEffect:wh,useMemo:bh,useReducer:Fu,useRef:Mh,useState:function(){return Fu(Ra)},useDebugValue:ku,useDeferredValue:function(t){var i=Kn();return Ph(i,tn.memoizedState,t)},useTransition:function(){var t=Fu(Ra)[0],i=Kn().memoizedState;return[t,i]},useMutableSource:ph,useSyncExternalStore:mh,useId:Lh,unstable_isNewReconciler:!1},A0={readContext:jn,useCallback:Rh,useContext:jn,useEffect:Bu,useImperativeHandle:Ch,useInsertionEffect:Th,useLayoutEffect:wh,useMemo:bh,useReducer:Ou,useRef:Mh,useState:function(){return Ou(Ra)},useDebugValue:ku,useDeferredValue:function(t){var i=Kn();return tn===null?i.memoizedState=t:Ph(i,tn.memoizedState,t)},useTransition:function(){var t=Ou(Ra)[0],i=Kn().memoizedState;return[t,i]},useMutableSource:ph,useSyncExternalStore:mh,useId:Lh,unstable_isNewReconciler:!1};function ai(t,i){if(t&&t.defaultProps){i=oe({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function zu(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:oe({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var No={isMounted:function(t){return(t=t._reactInternals)?vi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=wn(),f=Sr(t),d=Gi(l,f);d.payload=i,a!=null&&(d.callback=a),i=gr(t,d,f),i!==null&&(ui(i,t,f,l),wo(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=wn(),f=Sr(t),d=Gi(l,f);d.tag=1,d.payload=i,a!=null&&(d.callback=a),i=gr(t,d,f),i!==null&&(ui(i,t,f,l),wo(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=wn(),l=Sr(t),f=Gi(a,l);f.tag=2,i!=null&&(f.callback=i),i=gr(t,f,l),i!==null&&(ui(i,t,l,a),wo(i,t,l))}};function Uh(t,i,a,l,f,d,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,E):i.prototype&&i.prototype.isPureReactComponent?!ma(a,l)||!ma(f,d):!0}function Fh(t,i,a){var l=!1,f=hr,d=i.contextType;return typeof d=="object"&&d!==null?d=jn(d):(f=Dn(i)?Or:gn.current,l=i.contextTypes,d=(l=l!=null)?xs(t,f):hr),i=new i(a,d),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=No,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=d),i}function Oh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&No.enqueueReplaceState(i,i.state,null)}function Vu(t,i,a,l){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},Cu(t);var d=i.contextType;typeof d=="object"&&d!==null?f.context=jn(d):(d=Dn(i)?Or:gn.current,f.context=xs(t,d)),f.state=t.memoizedState,d=i.getDerivedStateFromProps,typeof d=="function"&&(zu(t,i,d,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&No.enqueueReplaceState(f,f.state,null),Ao(t,a,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,i){try{var a="",l=i;do a+=Ne(l),l=l.return;while(l);var f=a}catch(d){f=`
Error generating stack: `+d.message+`
`+d.stack}return{value:t,source:i,stack:f,digest:null}}function Hu(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Gu(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var C0=typeof WeakMap=="function"?WeakMap:Map;function Bh(t,i,a){a=Gi(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){zo||(zo=!0,rc=l),Gu(t,i)},a}function kh(t,i,a){a=Gi(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;a.payload=function(){return l(f)},a.callback=function(){Gu(t,i)}}var d=t.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(a.callback=function(){Gu(t,i),typeof l!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function zh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new C0;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(f.add(a),t=V0.bind(null,t,i,a),i.then(t,t))}function Vh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Hh(t,i,a,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Gi(-1,1),i.tag=2,gr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var R0=L.ReactCurrentOwner,Nn=!1;function Tn(t,i,a,l){i.child=t===null?lh(i,null,a,l):Es(i,t.child,a,l)}function Gh(t,i,a,l,f){a=a.render;var d=i.ref;return ws(i,f),l=Iu(t,i,a,l,d,f),a=Uu(),t!==null&&!Nn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Wi(t,i,f)):(Wt&&a&&_u(i),i.flags|=1,Tn(t,i,l,f),i.child)}function Wh(t,i,a,l,f){if(t===null){var d=a.type;return typeof d=="function"&&!fc(d)&&d.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=d,Xh(t,i,d,l,f)):(t=Yo(a.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,(t.lanes&f)===0){var E=d.memoizedProps;if(a=a.compare,a=a!==null?a:ma,a(E,l)&&t.ref===i.ref)return Wi(t,i,f)}return i.flags|=1,t=Mr(d,l),t.ref=i.ref,t.return=i,i.child=t}function Xh(t,i,a,l,f){if(t!==null){var d=t.memoizedProps;if(ma(d,l)&&t.ref===i.ref)if(Nn=!1,i.pendingProps=l=d,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Nn=!0);else return i.lanes=t.lanes,Wi(t,i,f)}return Wu(t,i,a,l,f)}function Yh(t,i,a){var l=i.pendingProps,f=l.children,d=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(bs,Hn),Hn|=a;else{if((a&1073741824)===0)return t=d!==null?d.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Bt(bs,Hn),Hn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=d!==null?d.baseLanes:a,Bt(bs,Hn),Hn|=l}else d!==null?(l=d.baseLanes|a,i.memoizedState=null):l=a,Bt(bs,Hn),Hn|=l;return Tn(t,i,f,a),i.child}function qh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Wu(t,i,a,l,f){var d=Dn(a)?Or:gn.current;return d=xs(i,d),ws(i,f),a=Iu(t,i,a,l,d,f),l=Uu(),t!==null&&!Nn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Wi(t,i,f)):(Wt&&l&&_u(i),i.flags|=1,Tn(t,i,a,f),i.child)}function $h(t,i,a,l,f){if(Dn(a)){var d=!0;_o(i)}else d=!1;if(ws(i,f),i.stateNode===null)Uo(t,i),Fh(i,a,l),Vu(i,a,l,f),l=!0;else if(t===null){var E=i.stateNode,D=i.memoizedProps;E.props=D;var F=E.context,re=a.contextType;typeof re=="object"&&re!==null?re=jn(re):(re=Dn(a)?Or:gn.current,re=xs(i,re));var xe=a.getDerivedStateFromProps,ye=typeof xe=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==l||F!==re)&&Oh(i,E,l,re),mr=!1;var ve=i.memoizedState;E.state=ve,Ao(i,l,E,f),F=i.memoizedState,D!==l||ve!==F||Ln.current||mr?(typeof xe=="function"&&(zu(i,a,xe,l),F=i.memoizedState),(D=mr||Uh(i,a,D,l,ve,F,re))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),E.props=l,E.state=F,E.context=re,l=D):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,ch(t,i),D=i.memoizedProps,re=i.type===i.elementType?D:ai(i.type,D),E.props=re,ye=i.pendingProps,ve=E.context,F=a.contextType,typeof F=="object"&&F!==null?F=jn(F):(F=Dn(a)?Or:gn.current,F=xs(i,F));var ze=a.getDerivedStateFromProps;(xe=typeof ze=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==ye||ve!==F)&&Oh(i,E,l,F),mr=!1,ve=i.memoizedState,E.state=ve,Ao(i,l,E,f);var We=i.memoizedState;D!==ye||ve!==We||Ln.current||mr?(typeof ze=="function"&&(zu(i,a,ze,l),We=i.memoizedState),(re=mr||Uh(i,a,re,l,ve,We,F)||!1)?(xe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,We,F),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,We,F)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=We),E.props=l,E.state=We,E.context=F,l=re):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),l=!1)}return Xu(t,i,a,l,d,f)}function Xu(t,i,a,l,f,d){qh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return f&&Jd(i,a,!1),Wi(t,i,d);l=i.stateNode,R0.current=i;var D=E&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=Es(i,t.child,null,d),i.child=Es(i,null,D,d)):Tn(t,i,D,d),i.memoizedState=l.state,f&&Jd(i,a,!0),i.child}function jh(t){var i=t.stateNode;i.pendingContext?Zd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Zd(t,i.context,!1),Ru(t,i.containerInfo)}function Kh(t,i,a,l,f){return Ms(),yu(f),i.flags|=256,Tn(t,i,a,l),i.child}var Yu={dehydrated:null,treeContext:null,retryLane:0};function qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zh(t,i,a){var l=i.pendingProps,f=qt.current,d=!1,E=(i.flags&128)!==0,D;if((D=E)||(D=t!==null&&t.memoizedState===null?!1:(f&2)!==0),D?(d=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Bt(qt,f&1),t===null)return Su(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,d?(l=i.mode,d=i.child,E={mode:"hidden",children:E},(l&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=E):d=qo(E,l,0,null),t=qr(t,l,a,null),d.return=i,t.return=i,d.sibling=t,i.child=d,i.child.memoizedState=qu(a),i.memoizedState=Yu,t):$u(i,E));if(f=t.memoizedState,f!==null&&(D=f.dehydrated,D!==null))return b0(t,i,E,l,D,f,a);if(d){d=l.fallback,E=i.mode,f=t.child,D=f.sibling;var F={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=F,i.deletions=null):(l=Mr(f,F),l.subtreeFlags=f.subtreeFlags&14680064),D!==null?d=Mr(D,d):(d=qr(d,E,a,null),d.flags|=2),d.return=i,l.return=i,l.sibling=d,i.child=l,l=d,d=i.child,E=t.child.memoizedState,E=E===null?qu(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},d.memoizedState=E,d.childLanes=t.childLanes&~a,i.memoizedState=Yu,l}return d=t.child,t=d.sibling,l=Mr(d,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function $u(t,i){return i=qo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Io(t,i,a,l){return l!==null&&yu(l),Es(i,t.child,null,a),t=$u(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function b0(t,i,a,l,f,d,E){if(a)return i.flags&256?(i.flags&=-257,l=Hu(Error(n(422))),Io(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(d=l.fallback,f=i.mode,l=qo({mode:"visible",children:l.children},f,0,null),d=qr(d,f,E,null),d.flags|=2,l.return=i,d.return=i,l.sibling=d,i.child=l,(i.mode&1)!==0&&Es(i,t.child,null,E),i.child.memoizedState=qu(E),i.memoizedState=Yu,d);if((i.mode&1)===0)return Io(t,i,E,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var D=l.dgst;return l=D,d=Error(n(419)),l=Hu(d,l,void 0),Io(t,i,E,l)}if(D=(E&t.childLanes)!==0,Nn||D){if(l=ln,l!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|E))!==0?0:f,f!==0&&f!==d.retryLane&&(d.retryLane=f,Hi(t,f),ui(l,t,f,-1))}return cc(),l=Hu(Error(n(421))),Io(t,i,E,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=H0.bind(null,t),f._reactRetry=i,null):(t=d.treeContext,Vn=fr(f.nextSibling),zn=i,Wt=!0,si=null,t!==null&&(qn[$n++]=zi,qn[$n++]=Vi,qn[$n++]=Br,zi=t.id,Vi=t.overflow,Br=i),i=$u(i,l.children),i.flags|=4096,i)}function Qh(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),wu(t.return,i,a)}function ju(t,i,a,l,f){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=f)}function Jh(t,i,a){var l=i.pendingProps,f=l.revealOrder,d=l.tail;if(Tn(t,i,l.children,a),l=qt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qh(t,a,i);else if(t.tag===19)Qh(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Bt(qt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Co(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),ju(i,!1,f,a,d);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Co(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}ju(i,!0,a,null,d);break;case"together":ju(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Uo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Wi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Gr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=Mr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Mr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function P0(t,i,a){switch(i.tag){case 3:jh(i),Ms();break;case 5:hh(i);break;case 1:Dn(i.type)&&_o(i);break;case 4:Ru(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Bt(Eo,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Bt(qt,qt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Zh(t,i,a):(Bt(qt,qt.current&1),t=Wi(t,i,a),t!==null?t.sibling:null);Bt(qt,qt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Jh(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Bt(qt,qt.current),l)break;return null;case 22:case 23:return i.lanes=0,Yh(t,i,a)}return Wi(t,i,a)}var ep,Ku,tp,np;ep=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ku=function(){},tp=function(t,i,a,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,Vr(yi.current);var d=null;switch(a){case"input":f=Mt(t,f),l=Mt(t,l),d=[];break;case"select":f=oe({},f,{value:void 0}),l=oe({},l,{value:void 0}),d=[];break;case"textarea":f=ft(t,f),l=ft(t,l),d=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=po)}Be(a,l);var E;a=null;for(re in f)if(!l.hasOwnProperty(re)&&f.hasOwnProperty(re)&&f[re]!=null)if(re==="style"){var D=f[re];for(E in D)D.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(o.hasOwnProperty(re)?d||(d=[]):(d=d||[]).push(re,null));for(re in l){var F=l[re];if(D=f?.[re],l.hasOwnProperty(re)&&F!==D&&(F!=null||D!=null))if(re==="style")if(D){for(E in D)!D.hasOwnProperty(E)||F&&F.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in F)F.hasOwnProperty(E)&&D[E]!==F[E]&&(a||(a={}),a[E]=F[E])}else a||(d||(d=[]),d.push(re,a)),a=F;else re==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,D=D?D.__html:void 0,F!=null&&D!==F&&(d=d||[]).push(re,F)):re==="children"?typeof F!="string"&&typeof F!="number"||(d=d||[]).push(re,""+F):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(o.hasOwnProperty(re)?(F!=null&&re==="onScroll"&&Vt("scroll",t),d||D===F||(d=[])):(d=d||[]).push(re,F))}a&&(d=d||[]).push("style",a);var re=d;(i.updateQueue=re)&&(i.flags|=4)}},np=function(t,i,a,l){a!==l&&(i.flags|=4)};function Pa(t,i){if(!Wt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function vn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function L0(t,i,a){var l=i.pendingProps;switch(vu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return Dn(i.type)&&go(),vn(i),null;case 3:return l=i.stateNode,As(),Ht(Ln),Ht(gn),Lu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(yo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,si!==null&&(oc(si),si=null))),Ku(t,i),vn(i),null;case 5:bu(i);var f=Vr(wa.current);if(a=i.type,t!==null&&i.stateNode!=null)tp(t,i,a,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return vn(i),null}if(t=Vr(yi.current),yo(i)){l=i.stateNode,a=i.type;var d=i.memoizedProps;switch(l[Si]=i,l[Sa]=d,t=(i.mode&1)!==0,a){case"dialog":Vt("cancel",l),Vt("close",l);break;case"iframe":case"object":case"embed":Vt("load",l);break;case"video":case"audio":for(f=0;f<_a.length;f++)Vt(_a[f],l);break;case"source":Vt("error",l);break;case"img":case"image":case"link":Vt("error",l),Vt("load",l);break;case"details":Vt("toggle",l);break;case"input":Dt(l,d),Vt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!d.multiple},Vt("invalid",l);break;case"textarea":At(l,d),Vt("invalid",l)}Be(a,d),f=null;for(var E in d)if(d.hasOwnProperty(E)){var D=d[E];E==="children"?typeof D=="string"?l.textContent!==D&&(d.suppressHydrationWarning!==!0&&ho(l.textContent,D,t),f=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(d.suppressHydrationWarning!==!0&&ho(l.textContent,D,t),f=["children",""+D]):o.hasOwnProperty(E)&&D!=null&&E==="onScroll"&&Vt("scroll",l)}switch(a){case"input":Qe(l),Ut(l,d,!0);break;case"textarea":Qe(l),kt(l);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(l.onclick=po)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=C(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(a,{is:l.is}):(t=E.createElement(a),a==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,a),t[Si]=i,t[Sa]=l,ep(t,i,!1,!1),i.stateNode=t;e:{switch(E=Ae(a,l),a){case"dialog":Vt("cancel",t),Vt("close",t),f=l;break;case"iframe":case"object":case"embed":Vt("load",t),f=l;break;case"video":case"audio":for(f=0;f<_a.length;f++)Vt(_a[f],t);f=l;break;case"source":Vt("error",t),f=l;break;case"img":case"image":case"link":Vt("error",t),Vt("load",t),f=l;break;case"details":Vt("toggle",t),f=l;break;case"input":Dt(t,l),f=Mt(t,l),Vt("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=oe({},l,{value:void 0}),Vt("invalid",t);break;case"textarea":At(t,l),f=ft(t,l),Vt("invalid",t);break;default:f=l}Be(a,f),D=f;for(d in D)if(D.hasOwnProperty(d)){var F=D[d];d==="style"?pe(t,F):d==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&he(t,F)):d==="children"?typeof F=="string"?(a!=="textarea"||F!=="")&&ge(t,F):typeof F=="number"&&ge(t,""+F):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(o.hasOwnProperty(d)?F!=null&&d==="onScroll"&&Vt("scroll",t):F!=null&&N(t,d,F,E))}switch(a){case"input":Qe(t),Ut(t,l,!1);break;case"textarea":Qe(t),kt(t);break;case"option":l.value!=null&&t.setAttribute("value",""+me(l.value));break;case"select":t.multiple=!!l.multiple,d=l.value,d!=null?Ft(t,!!l.multiple,d,!1):l.defaultValue!=null&&Ft(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=po)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vn(i),null;case 6:if(t&&i.stateNode!=null)np(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Vr(wa.current),Vr(yi.current),yo(i)){if(l=i.stateNode,a=i.memoizedProps,l[Si]=i,(d=l.nodeValue!==a)&&(t=zn,t!==null))switch(t.tag){case 3:ho(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(l.nodeValue,a,(t.mode&1)!==0)}d&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[Si]=i,i.stateNode=l}return vn(i),null;case 13:if(Ht(qt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Wt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)sh(),Ms(),i.flags|=98560,d=!1;else if(d=yo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!d)throw Error(n(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(n(317));d[Si]=i}else Ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;vn(i),d=!1}else si!==null&&(oc(si),si=null),d=!0;if(!d)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(qt.current&1)!==0?nn===0&&(nn=3):cc())),i.updateQueue!==null&&(i.flags|=4),vn(i),null);case 4:return As(),Ku(t,i),t===null&&va(i.stateNode.containerInfo),vn(i),null;case 10:return Tu(i.type._context),vn(i),null;case 17:return Dn(i.type)&&go(),vn(i),null;case 19:if(Ht(qt),d=i.memoizedState,d===null)return vn(i),null;if(l=(i.flags&128)!==0,E=d.rendering,E===null)if(l)Pa(d,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Co(t),E!==null){for(i.flags|=128,Pa(d,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)d=a,t=l,d.flags&=14680066,E=d.alternate,E===null?(d.childLanes=0,d.lanes=t,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=E.childLanes,d.lanes=E.lanes,d.child=E.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=E.memoizedProps,d.memoizedState=E.memoizedState,d.updateQueue=E.updateQueue,d.type=E.type,t=E.dependencies,d.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Bt(qt,qt.current&1|2),i.child}t=t.sibling}d.tail!==null&&Yt()>Ps&&(i.flags|=128,l=!0,Pa(d,!1),i.lanes=4194304)}else{if(!l)if(t=Co(E),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Pa(d,!0),d.tail===null&&d.tailMode==="hidden"&&!E.alternate&&!Wt)return vn(i),null}else 2*Yt()-d.renderingStartTime>Ps&&a!==1073741824&&(i.flags|=128,l=!0,Pa(d,!1),i.lanes=4194304);d.isBackwards?(E.sibling=i.child,i.child=E):(a=d.last,a!==null?a.sibling=E:i.child=E,d.last=E)}return d.tail!==null?(i=d.tail,d.rendering=i,d.tail=i.sibling,d.renderingStartTime=Yt(),i.sibling=null,a=qt.current,Bt(qt,l?a&1|2:a&1),i):(vn(i),null);case 22:case 23:return uc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function D0(t,i){switch(vu(i),i.tag){case 1:return Dn(i.type)&&go(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return As(),Ht(Ln),Ht(gn),Lu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return bu(i),null;case 13:if(Ht(qt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ht(qt),null;case 4:return As(),null;case 10:return Tu(i.type._context),null;case 22:case 23:return uc(),null;case 24:return null;default:return null}}var Fo=!1,xn=!1,N0=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Rs(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){jt(t,i,l)}else a.current=null}function Zu(t,i,a){try{a()}catch(l){jt(t,i,l)}}var ip=!1;function I0(t,i){if(uu=to,t=Ud(),tu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var E=0,D=-1,F=-1,re=0,xe=0,ye=t,ve=null;t:for(;;){for(var ze;ye!==a||f!==0&&ye.nodeType!==3||(D=E+f),ye!==d||l!==0&&ye.nodeType!==3||(F=E+l),ye.nodeType===3&&(E+=ye.nodeValue.length),(ze=ye.firstChild)!==null;)ve=ye,ye=ze;for(;;){if(ye===t)break t;if(ve===a&&++re===f&&(D=E),ve===d&&++xe===l&&(F=E),(ze=ye.nextSibling)!==null)break;ye=ve,ve=ye.parentNode}ye=ze}a=D===-1||F===-1?null:{start:D,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(cu={focusedElem:t,selectionRange:a},to=!1,Ge=i;Ge!==null;)if(i=Ge,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ge=t;else for(;Ge!==null;){i=Ge;try{var We=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var qe=We.memoizedProps,Kt=We.memoizedState,$=i.stateNode,V=$.getSnapshotBeforeUpdate(i.elementType===i.type?qe:ai(i.type,qe),Kt);$.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){jt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Ge=t;break}Ge=i.return}return We=ip,ip=!1,We}function La(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var d=f.destroy;f.destroy=void 0,d!==void 0&&Zu(i,a,d)}f=f.next}while(f!==l)}}function Oo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function Qu(t){var i=t.ref;if(i!==null){var a=t.stateNode;t.tag,t=a,typeof i=="function"?i(t):i.current=t}}function rp(t){var i=t.alternate;i!==null&&(t.alternate=null,rp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Si],delete i[Sa],delete i[pu],delete i[g0],delete i[_0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sp(t){return t.tag===5||t.tag===3||t.tag===4}function ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ju(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=po));else if(l!==4&&(t=t.child,t!==null))for(Ju(t,i,a),t=t.sibling;t!==null;)Ju(t,i,a),t=t.sibling}function ec(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(ec(t,i,a),t=t.sibling;t!==null;)ec(t,i,a),t=t.sibling}var hn=null,oi=!1;function _r(t,i,a){for(a=a.child;a!==null;)op(t,i,a),a=a.sibling}function op(t,i,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(Z,a)}catch{}switch(a.tag){case 5:xn||Rs(a,i);case 6:var l=hn,f=oi;hn=null,_r(t,i,a),hn=l,oi=f,hn!==null&&(oi?(t=hn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):hn.removeChild(a.stateNode));break;case 18:hn!==null&&(oi?(t=hn,a=a.stateNode,t.nodeType===8?hu(t.parentNode,a):t.nodeType===1&&hu(t,a),ua(t)):hu(hn,a.stateNode));break;case 4:l=hn,f=oi,hn=a.stateNode.containerInfo,oi=!0,_r(t,i,a),hn=l,oi=f;break;case 0:case 11:case 14:case 15:if(!xn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var d=f,E=d.destroy;d=d.tag,E!==void 0&&((d&2)!==0||(d&4)!==0)&&Zu(a,i,E),f=f.next}while(f!==l)}_r(t,i,a);break;case 1:if(!xn&&(Rs(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(D){jt(a,i,D)}_r(t,i,a);break;case 21:_r(t,i,a);break;case 22:a.mode&1?(xn=(l=xn)||a.memoizedState!==null,_r(t,i,a),xn=l):_r(t,i,a);break;default:_r(t,i,a)}}function lp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new N0),i.forEach(function(l){var f=G0.bind(null,t,l);a.has(l)||(a.add(l),l.then(f,f))})}}function li(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l];try{var d=t,E=i,D=E;e:for(;D!==null;){switch(D.tag){case 5:hn=D.stateNode,oi=!1;break e;case 3:hn=D.stateNode.containerInfo,oi=!0;break e;case 4:hn=D.stateNode.containerInfo,oi=!0;break e}D=D.return}if(hn===null)throw Error(n(160));op(d,E,f),hn=null,oi=!1;var F=f.alternate;F!==null&&(F.return=null),f.return=null}catch(re){jt(f,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)up(i,t),i=i.sibling}function up(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(li(i,t),Ei(t),l&4){try{La(3,t,t.return),Oo(3,t)}catch(qe){jt(t,t.return,qe)}try{La(5,t,t.return)}catch(qe){jt(t,t.return,qe)}}break;case 1:li(i,t),Ei(t),l&512&&a!==null&&Rs(a,a.return);break;case 5:if(li(i,t),Ei(t),l&512&&a!==null&&Rs(a,a.return),t.flags&32){var f=t.stateNode;try{ge(f,"")}catch(qe){jt(t,t.return,qe)}}if(l&4&&(f=t.stateNode,f!=null)){var d=t.memoizedProps,E=a!==null?a.memoizedProps:d,D=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{D==="input"&&d.type==="radio"&&d.name!=null&&ct(f,d),Ae(D,E);var re=Ae(D,d);for(E=0;E<F.length;E+=2){var xe=F[E],ye=F[E+1];xe==="style"?pe(f,ye):xe==="dangerouslySetInnerHTML"?he(f,ye):xe==="children"?ge(f,ye):N(f,xe,ye,re)}switch(D){case"input":Xt(f,d);break;case"textarea":Le(f,d);break;case"select":var ve=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!d.multiple;var ze=d.value;ze!=null?Ft(f,!!d.multiple,ze,!1):ve!==!!d.multiple&&(d.defaultValue!=null?Ft(f,!!d.multiple,d.defaultValue,!0):Ft(f,!!d.multiple,d.multiple?[]:"",!1))}f[Sa]=d}catch(qe){jt(t,t.return,qe)}}break;case 6:if(li(i,t),Ei(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,d=t.memoizedProps;try{f.nodeValue=d}catch(qe){jt(t,t.return,qe)}}break;case 3:if(li(i,t),Ei(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ua(i.containerInfo)}catch(qe){jt(t,t.return,qe)}break;case 4:li(i,t),Ei(t);break;case 13:li(i,t),Ei(t),f=t.child,f.flags&8192&&(d=f.memoizedState!==null,f.stateNode.isHidden=d,!d||f.alternate!==null&&f.alternate.memoizedState!==null||(ic=Yt())),l&4&&lp(t);break;case 22:if(xe=a!==null&&a.memoizedState!==null,t.mode&1?(xn=(re=xn)||xe,li(i,t),xn=re):li(i,t),Ei(t),l&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!xe&&(t.mode&1)!==0)for(Ge=t,xe=t.child;xe!==null;){for(ye=Ge=xe;Ge!==null;){switch(ve=Ge,ze=ve.child,ve.tag){case 0:case 11:case 14:case 15:La(4,ve,ve.return);break;case 1:Rs(ve,ve.return);var We=ve.stateNode;if(typeof We.componentWillUnmount=="function"){l=ve,a=ve.return;try{i=l,We.props=i.memoizedProps,We.state=i.memoizedState,We.componentWillUnmount()}catch(qe){jt(l,a,qe)}}break;case 5:Rs(ve,ve.return);break;case 22:if(ve.memoizedState!==null){dp(ye);continue}}ze!==null?(ze.return=ve,Ge=ze):dp(ye)}xe=xe.sibling}e:for(xe=null,ye=t;;){if(ye.tag===5){if(xe===null){xe=ye;try{f=ye.stateNode,re?(d=f.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(D=ye.stateNode,F=ye.memoizedProps.style,E=F!=null&&F.hasOwnProperty("display")?F.display:null,D.style.display=fe("display",E))}catch(qe){jt(t,t.return,qe)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=re?"":ye.memoizedProps}catch(qe){jt(t,t.return,qe)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:li(i,t),Ei(t),l&4&&lp(t);break;case 21:break;default:li(i,t),Ei(t)}}function Ei(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(sp(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(ge(f,""),l.flags&=-33);var d=ap(t);ec(t,d,f);break;case 3:case 4:var E=l.stateNode.containerInfo,D=ap(t);Ju(t,D,E);break;default:throw Error(n(161))}}catch(F){jt(t,t.return,F)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function U0(t,i,a){Ge=t,cp(t)}function cp(t,i,a){for(var l=(t.mode&1)!==0;Ge!==null;){var f=Ge,d=f.child;if(f.tag===22&&l){var E=f.memoizedState!==null||Fo;if(!E){var D=f.alternate,F=D!==null&&D.memoizedState!==null||xn;D=Fo;var re=xn;if(Fo=E,(xn=F)&&!re)for(Ge=f;Ge!==null;)E=Ge,F=E.child,E.tag===22&&E.memoizedState!==null?hp(f):F!==null?(F.return=E,Ge=F):hp(f);for(;d!==null;)Ge=d,cp(d),d=d.sibling;Ge=f,Fo=D,xn=re}fp(t)}else(f.subtreeFlags&8772)!==0&&d!==null?(d.return=f,Ge=d):fp(t)}}function fp(t){for(;Ge!==null;){var i=Ge;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:xn||Oo(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!xn)if(a===null)l.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:ai(i.type,a.memoizedProps);l.componentDidUpdate(f,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var d=i.updateQueue;d!==null&&dh(i,d,l);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}dh(i,E,a)}break;case 5:var D=i.stateNode;if(a===null&&i.flags&4){a=D;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&a.focus();break;case"img":F.src&&(a.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var xe=re.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&ua(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}xn||i.flags&512&&Qu(i)}catch(ve){jt(i,i.return,ve)}}if(i===t){Ge=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function dp(t){for(;Ge!==null;){var i=Ge;if(i===t){Ge=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function hp(t){for(;Ge!==null;){var i=Ge;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Oo(4,i)}catch(F){jt(i,a,F)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(F){jt(i,f,F)}}var d=i.return;try{Qu(i)}catch(F){jt(i,d,F)}break;case 5:var E=i.return;try{Qu(i)}catch(F){jt(i,E,F)}}}catch(F){jt(i,i.return,F)}if(i===t){Ge=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Ge=D;break}Ge=i.return}}var F0=Math.ceil,Bo=L.ReactCurrentDispatcher,tc=L.ReactCurrentOwner,Zn=L.ReactCurrentBatchConfig,St=0,ln=null,Jt=null,pn=0,Hn=0,bs=dr(0),nn=0,Da=null,Gr=0,ko=0,nc=0,Na=null,In=null,ic=0,Ps=1/0,Xi=null,zo=!1,rc=null,vr=null,Vo=!1,xr=null,Ho=0,Ia=0,sc=null,Go=-1,Wo=0;function wn(){return(St&6)!==0?Yt():Go!==-1?Go:Go=Yt()}function Sr(t){return(t.mode&1)===0?1:(St&2)!==0&&pn!==0?pn&-pn:x0.transition!==null?(Wo===0&&(Wo=ke()),Wo):(t=mt,t!==0||(t=window.event,t=t===void 0?16:md(t.type)),t)}function ui(t,i,a,l){if(50<Ia)throw Ia=0,sc=null,Error(n(185));pt(t,a,l),((St&2)===0||t!==ln)&&(t===ln&&((St&2)===0&&(ko|=a),nn===4&&yr(t,pn)),Un(t,l),a===1&&St===0&&(i.mode&1)===0&&(Ps=Yt()+500,vo&&pr()))}function Un(t,i){var a=t.callbackNode;Ct(t,i);var l=Ot(t,t===ln?pn:0);if(l===0)a!==null&&Ja(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&Ja(a),i===1)t.tag===0?v0(mp.bind(null,t)):eh(mp.bind(null,t)),p0(function(){(St&6)===0&&pr()}),a=null;else{switch(Oi(l)){case 1:a=ra;break;case 4:a=T;break;case 16:a=G;break;case 536870912:a=ee;break;default:a=G}a=Ep(a,pp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function pp(t,i){if(Go=-1,Wo=0,(St&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Ls()&&t.callbackNode!==a)return null;var l=Ot(t,t===ln?pn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Xo(t,l);else{i=l;var f=St;St|=2;var d=_p();(ln!==t||pn!==i)&&(Xi=null,Ps=Yt()+500,Xr(t,i));do try{k0();break}catch(D){gp(t,D)}while(!0);Eu(),Bo.current=d,St=f,Jt!==null?i=0:(ln=null,pn=0,i=nn)}if(i!==0){if(i===2&&(f=Qt(t),f!==0&&(l=f,i=ac(t,f))),i===1)throw a=Da,Xr(t,0),yr(t,l),Un(t,Yt()),a;if(i===6)yr(t,l);else{if(f=t.current.alternate,(l&30)===0&&!O0(f)&&(i=Xo(t,l),i===2&&(d=Qt(t),d!==0&&(l=d,i=ac(t,d))),i===1))throw a=Da,Xr(t,0),yr(t,l),Un(t,Yt()),a;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Yr(t,In,Xi);break;case 3:if(yr(t,l),(l&130023424)===l&&(i=ic+500-Yt(),10<i)){if(Ot(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){wn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=du(Yr.bind(null,t,In,Xi),i);break}Yr(t,In,Xi);break;case 4:if(yr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var E=31-Ce(l);d=1<<E,E=i[E],E>f&&(f=E),l&=~d}if(l=f,l=Yt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*F0(l/1960))-l,10<l){t.timeoutHandle=du(Yr.bind(null,t,In,Xi),l);break}Yr(t,In,Xi);break;case 5:Yr(t,In,Xi);break;default:throw Error(n(329))}}}return Un(t,Yt()),t.callbackNode===a?pp.bind(null,t):null}function ac(t,i){var a=Na;return t.current.memoizedState.isDehydrated&&(Xr(t,i).flags|=256),t=Xo(t,i),t!==2&&(i=In,In=a,i!==null&&oc(i)),t}function oc(t){In===null?In=t:In.push.apply(In,t)}function O0(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var f=a[l],d=f.getSnapshot;f=f.value;try{if(!ri(d(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(t,i){for(i&=~nc,i&=~ko,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Ce(i),l=1<<a;t[a]=-1,i&=~l}}function mp(t){if((St&6)!==0)throw Error(n(327));Ls();var i=Ot(t,0);if((i&1)===0)return Un(t,Yt()),null;var a=Xo(t,i);if(t.tag!==0&&a===2){var l=Qt(t);l!==0&&(i=l,a=ac(t,l))}if(a===1)throw a=Da,Xr(t,0),yr(t,i),Un(t,Yt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Yr(t,In,Xi),Un(t,Yt()),null}function lc(t,i){var a=St;St|=1;try{return t(i)}finally{St=a,St===0&&(Ps=Yt()+500,vo&&pr())}}function Wr(t){xr!==null&&xr.tag===0&&(St&6)===0&&Ls();var i=St;St|=1;var a=Zn.transition,l=mt;try{if(Zn.transition=null,mt=1,t)return t()}finally{mt=l,Zn.transition=a,St=i,(St&6)===0&&pr()}}function uc(){Hn=bs.current,Ht(bs)}function Xr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,h0(a)),Jt!==null)for(a=Jt.return;a!==null;){var l=a;switch(vu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&go();break;case 3:As(),Ht(Ln),Ht(gn),Lu();break;case 5:bu(l);break;case 4:As();break;case 13:Ht(qt);break;case 19:Ht(qt);break;case 10:Tu(l.type._context);break;case 22:case 23:uc()}a=a.return}if(ln=t,Jt=t=Mr(t.current,null),pn=Hn=i,nn=0,Da=null,nc=ko=Gr=0,In=Na=null,zr!==null){for(i=0;i<zr.length;i++)if(a=zr[i],l=a.interleaved,l!==null){a.interleaved=null;var f=l.next,d=a.pending;if(d!==null){var E=d.next;d.next=f,l.next=E}a.pending=l}zr=null}return t}function gp(t,i){do{var a=Jt;try{if(Eu(),Ro.current=Do,bo){for(var l=$t.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}bo=!1}if(Hr=0,on=tn=$t=null,Aa=!1,Ca=0,tc.current=null,a===null||a.return===null){nn=1,Da=i,Jt=null;break}e:{var d=t,E=a.return,D=a,F=i;if(i=pn,D.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var re=F,xe=D,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var ze=Vh(E);if(ze!==null){ze.flags&=-257,Hh(ze,E,D,d,i),ze.mode&1&&zh(d,re,i),i=ze,F=re;var We=i.updateQueue;if(We===null){var qe=new Set;qe.add(F),i.updateQueue=qe}else We.add(F);break e}else{if((i&1)===0){zh(d,re,i),cc();break e}F=Error(n(426))}}else if(Wt&&D.mode&1){var Kt=Vh(E);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),Hh(Kt,E,D,d,i),yu(Cs(F,D));break e}}d=F=Cs(F,D),nn!==4&&(nn=2),Na===null?Na=[d]:Na.push(d),d=E;do{switch(d.tag){case 3:d.flags|=65536,i&=-i,d.lanes|=i;var $=Bh(d,F,i);fh(d,$);break e;case 1:D=F;var V=d.type,te=d.stateNode;if((d.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(vr===null||!vr.has(te)))){d.flags|=65536,i&=-i,d.lanes|=i;var Te=kh(d,D,i);fh(d,Te);break e}}d=d.return}while(d!==null)}xp(a)}catch(je){i=je,Jt===a&&a!==null&&(Jt=a=a.return);continue}break}while(!0)}function _p(){var t=Bo.current;return Bo.current=Do,t===null?Do:t}function cc(){(nn===0||nn===3||nn===2)&&(nn=4),ln===null||(Gr&268435455)===0&&(ko&268435455)===0||yr(ln,pn)}function Xo(t,i){var a=St;St|=2;var l=_p();(ln!==t||pn!==i)&&(Xi=null,Xr(t,i));do try{B0();break}catch(f){gp(t,f)}while(!0);if(Eu(),St=a,Bo.current=l,Jt!==null)throw Error(n(261));return ln=null,pn=0,nn}function B0(){for(;Jt!==null;)vp(Jt)}function k0(){for(;Jt!==null&&!Vl();)vp(Jt)}function vp(t){var i=Mp(t.alternate,t,Hn);t.memoizedProps=t.pendingProps,i===null?xp(t):Jt=i,tc.current=null}function xp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=L0(a,i,Hn),a!==null){Jt=a;return}}else{if(a=D0(a,i),a!==null){a.flags&=32767,Jt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nn=6,Jt=null;return}}if(i=i.sibling,i!==null){Jt=i;return}Jt=i=t}while(i!==null);nn===0&&(nn=5)}function Yr(t,i,a){var l=mt,f=Zn.transition;try{Zn.transition=null,mt=1,z0(t,i,a,l)}finally{Zn.transition=f,mt=l}return null}function z0(t,i,a,l){do Ls();while(xr!==null);if((St&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var d=a.lanes|a.childLanes;if(bn(t,d),t===ln&&(Jt=ln=null,pn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Vo||(Vo=!0,Ep(G,function(){return Ls(),null})),d=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||d){d=Zn.transition,Zn.transition=null;var E=mt;mt=1;var D=St;St|=4,tc.current=null,I0(t,a),up(a,t),a0(cu),to=!!uu,cu=uu=null,t.current=a,U0(a),Hl(),St=D,mt=E,Zn.transition=d}else t.current=a;if(Vo&&(Vo=!1,xr=t,Ho=f),d=t.pendingLanes,d===0&&(vr=null),Ve(a.stateNode),Un(t,Yt()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],l(f.value,{componentStack:f.stack,digest:f.digest});if(zo)throw zo=!1,t=rc,rc=null,t;return(Ho&1)!==0&&t.tag!==0&&Ls(),d=t.pendingLanes,(d&1)!==0?t===sc?Ia++:(Ia=0,sc=t):Ia=0,pr(),null}function Ls(){if(xr!==null){var t=Oi(Ho),i=Zn.transition,a=mt;try{if(Zn.transition=null,mt=16>t?16:t,xr===null)var l=!1;else{if(t=xr,xr=null,Ho=0,(St&6)!==0)throw Error(n(331));var f=St;for(St|=4,Ge=t.current;Ge!==null;){var d=Ge,E=d.child;if((Ge.flags&16)!==0){var D=d.deletions;if(D!==null){for(var F=0;F<D.length;F++){var re=D[F];for(Ge=re;Ge!==null;){var xe=Ge;switch(xe.tag){case 0:case 11:case 15:La(8,xe,d)}var ye=xe.child;if(ye!==null)ye.return=xe,Ge=ye;else for(;Ge!==null;){xe=Ge;var ve=xe.sibling,ze=xe.return;if(rp(xe),xe===re){Ge=null;break}if(ve!==null){ve.return=ze,Ge=ve;break}Ge=ze}}}var We=d.alternate;if(We!==null){var qe=We.child;if(qe!==null){We.child=null;do{var Kt=qe.sibling;qe.sibling=null,qe=Kt}while(qe!==null)}}Ge=d}}if((d.subtreeFlags&2064)!==0&&E!==null)E.return=d,Ge=E;else e:for(;Ge!==null;){if(d=Ge,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:La(9,d,d.return)}var $=d.sibling;if($!==null){$.return=d.return,Ge=$;break e}Ge=d.return}}var V=t.current;for(Ge=V;Ge!==null;){E=Ge;var te=E.child;if((E.subtreeFlags&2064)!==0&&te!==null)te.return=E,Ge=te;else e:for(E=V;Ge!==null;){if(D=Ge,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Oo(9,D)}}catch(je){jt(D,D.return,je)}if(D===E){Ge=null;break e}var Te=D.sibling;if(Te!==null){Te.return=D.return,Ge=Te;break e}Ge=D.return}}if(St=f,pr(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(Z,t)}catch{}l=!0}return l}finally{mt=a,Zn.transition=i}}return!1}function Sp(t,i,a){i=Cs(a,i),i=Bh(t,i,1),t=gr(t,i,1),i=wn(),t!==null&&(pt(t,1,i),Un(t,i))}function jt(t,i,a){if(t.tag===3)Sp(t,t,a);else for(;i!==null;){if(i.tag===3){Sp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(vr===null||!vr.has(l))){t=Cs(a,t),t=kh(i,t,1),i=gr(i,t,1),t=wn(),i!==null&&(pt(i,1,t),Un(i,t));break}}i=i.return}}function V0(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=wn(),t.pingedLanes|=t.suspendedLanes&a,ln===t&&(pn&a)===a&&(nn===4||nn===3&&(pn&130023424)===pn&&500>Yt()-ic?Xr(t,0):nc|=a),Un(t,i)}function yp(t,i){i===0&&((t.mode&1)===0?i=1:(i=$e,$e<<=1,($e&130023424)===0&&($e=4194304)));var a=wn();t=Hi(t,i),t!==null&&(pt(t,i,a),Un(t,a))}function H0(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),yp(t,a)}function G0(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),yp(t,a)}var Mp;Mp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Ln.current)Nn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Nn=!1,P0(t,i,a);Nn=(t.flags&131072)!==0}else Nn=!1,Wt&&(i.flags&1048576)!==0&&th(i,So,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Uo(t,i),t=i.pendingProps;var f=xs(i,gn.current);ws(i,a),f=Iu(null,i,l,t,f,a);var d=Uu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Dn(l)?(d=!0,_o(i)):d=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Cu(i),f.updater=No,i.stateNode=f,f._reactInternals=i,Vu(i,l,t,a),i=Xu(null,i,l,!0,d,a)):(i.tag=0,Wt&&d&&_u(i),Tn(null,i,f,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Uo(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=X0(l),t=ai(l,t),f){case 0:i=Wu(null,i,l,t,a);break e;case 1:i=$h(null,i,l,t,a);break e;case 11:i=Gh(null,i,l,t,a);break e;case 14:i=Wh(null,i,l,ai(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ai(l,f),Wu(t,i,l,f,a);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ai(l,f),$h(t,i,l,f,a);case 3:e:{if(jh(i),t===null)throw Error(n(387));l=i.pendingProps,d=i.memoizedState,f=d.element,ch(t,i),Ao(i,l,null,a);var E=i.memoizedState;if(l=E.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){f=Cs(Error(n(423)),i),i=Kh(t,i,l,a,f);break e}else if(l!==f){f=Cs(Error(n(424)),i),i=Kh(t,i,l,a,f);break e}else for(Vn=fr(i.stateNode.containerInfo.firstChild),zn=i,Wt=!0,si=null,a=lh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ms(),l===f){i=Wi(t,i,a);break e}Tn(t,i,l,a)}i=i.child}return i;case 5:return hh(i),t===null&&Su(i),l=i.type,f=i.pendingProps,d=t!==null?t.memoizedProps:null,E=f.children,fu(l,f)?E=null:d!==null&&fu(l,d)&&(i.flags|=32),qh(t,i),Tn(t,i,E,a),i.child;case 6:return t===null&&Su(i),null;case 13:return Zh(t,i,a);case 4:return Ru(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Es(i,null,l,a):Tn(t,i,l,a),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ai(l,f),Gh(t,i,l,f,a);case 7:return Tn(t,i,i.pendingProps,a),i.child;case 8:return Tn(t,i,i.pendingProps.children,a),i.child;case 12:return Tn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,d=i.memoizedProps,E=f.value,Bt(Eo,l._currentValue),l._currentValue=E,d!==null)if(ri(d.value,E)){if(d.children===f.children&&!Ln.current){i=Wi(t,i,a);break e}}else for(d=i.child,d!==null&&(d.return=i);d!==null;){var D=d.dependencies;if(D!==null){E=d.child;for(var F=D.firstContext;F!==null;){if(F.context===l){if(d.tag===1){F=Gi(-1,a&-a),F.tag=2;var re=d.updateQueue;if(re!==null){re=re.shared;var xe=re.pending;xe===null?F.next=F:(F.next=xe.next,xe.next=F),re.pending=F}}d.lanes|=a,F=d.alternate,F!==null&&(F.lanes|=a),wu(d.return,a,i),D.lanes|=a;break}F=F.next}}else if(d.tag===10)E=d.type===i.type?null:d.child;else if(d.tag===18){if(E=d.return,E===null)throw Error(n(341));E.lanes|=a,D=E.alternate,D!==null&&(D.lanes|=a),wu(E,a,i),E=d.sibling}else E=d.child;if(E!==null)E.return=d;else for(E=d;E!==null;){if(E===i){E=null;break}if(d=E.sibling,d!==null){d.return=E.return,E=d;break}E=E.return}d=E}Tn(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,ws(i,a),f=jn(f),l=l(f),i.flags|=1,Tn(t,i,l,a),i.child;case 14:return l=i.type,f=ai(l,i.pendingProps),f=ai(l.type,f),Wh(t,i,l,f,a);case 15:return Xh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ai(l,f),Uo(t,i),i.tag=1,Dn(l)?(t=!0,_o(i)):t=!1,ws(i,a),Fh(i,l,f),Vu(i,l,f,a),Xu(null,i,l,!0,t,a);case 19:return Jh(t,i,a);case 22:return Yh(t,i,a)}throw Error(n(156,i.tag))};function Ep(t,i){return Qa(t,i)}function W0(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,i,a,l){return new W0(t,i,a,l)}function fc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function X0(t){if(typeof t=="function")return fc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===K)return 11;if(t===W)return 14}return 2}function Mr(t,i){var a=t.alternate;return a===null?(a=Qn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Yo(t,i,a,l,f,d){var E=2;if(l=t,typeof t=="function")fc(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case k:return qr(a.children,f,d,i);case w:E=8,f|=8;break;case I:return t=Qn(12,a,i,f|2),t.elementType=I,t.lanes=d,t;case ue:return t=Qn(13,a,i,f),t.elementType=ue,t.lanes=d,t;case ce:return t=Qn(19,a,i,f),t.elementType=ce,t.lanes=d,t;case j:return qo(a,f,d,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case X:E=10;break e;case O:E=9;break e;case K:E=11;break e;case W:E=14;break e;case Q:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Qn(E,a,i,f),i.elementType=t,i.type=l,i.lanes=d,i}function qr(t,i,a,l){return t=Qn(7,t,l,i),t.lanes=a,t}function qo(t,i,a,l){return t=Qn(22,t,l,i),t.elementType=j,t.lanes=a,t.stateNode={isHidden:!1},t}function dc(t,i,a){return t=Qn(6,t,null,i),t.lanes=a,t}function hc(t,i,a){return i=Qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Y0(t,i,a,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dn(0),this.expirationTimes=dn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dn(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function pc(t,i,a,l,f,d,E,D,F){return t=new Y0(t,i,a,D,F),i===1?(i=1,d===!0&&(i|=8)):i=0,d=Qn(3,null,null,i),t.current=d,d.stateNode=t,d.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cu(d),t}function q0(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function Tp(t){if(!t)return hr;t=t._reactInternals;e:{if(vi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Dn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Dn(a))return Qd(t,a,i)}return i}function wp(t,i,a,l,f,d,E,D,F){return t=pc(a,l,!0,t,f,d,E,D,F),t.context=Tp(null),a=t.current,l=wn(),f=Sr(a),d=Gi(l,f),d.callback=i??null,gr(a,d,f),t.current.lanes=f,pt(t,f,l),Un(t,l),t}function $o(t,i,a,l){var f=i.current,d=wn(),E=Sr(f);return a=Tp(a),i.context===null?i.context=a:i.pendingContext=a,i=Gi(d,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=gr(f,i,E),t!==null&&(ui(t,f,E,d),wo(t,f,E)),E}function jo(t){return t=t.current,t.child?(t.child.tag===5,t.child.stateNode):null}function Ap(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function mc(t,i){Ap(t,i),(t=t.alternate)&&Ap(t,i)}function $0(){return null}var Cp=typeof reportError=="function"?reportError:function(t){console.error(t)};function gc(t){this._internalRoot=t}Ko.prototype.render=gc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));$o(t,i,null,null)},Ko.prototype.unmount=gc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Wr(function(){$o(null,t,null,null)}),i[Bi]=null}};function Ko(t){this._internalRoot=t}Ko.prototype.unstable_scheduleHydration=function(t){if(t){var i=Rt();t={blockedOn:null,target:t,priority:i};for(var a=0;a<lr.length&&i!==0&&i<lr[a].priority;a++);lr.splice(a,0,t),a===0&&hd(t)}};function _c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rp(){}function j0(t,i,a,l,f){if(f){if(typeof l=="function"){var d=l;l=function(){var re=jo(E);d.call(re)}}var E=wp(i,l,t,0,null,!1,!1,"",Rp);return t._reactRootContainer=E,t[Bi]=E.current,va(t.nodeType===8?t.parentNode:t),Wr(),E}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var D=l;l=function(){var re=jo(F);D.call(re)}}var F=pc(t,0,!1,null,null,!1,!1,"",Rp);return t._reactRootContainer=F,t[Bi]=F.current,va(t.nodeType===8?t.parentNode:t),Wr(function(){$o(i,F,a,l)}),F}function Qo(t,i,a,l,f){var d=a._reactRootContainer;if(d){var E=d;if(typeof f=="function"){var D=f;f=function(){var F=jo(E);D.call(F)}}$o(i,E,t,f)}else E=j0(a,i,t,f,l);return jo(E)}wt=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=xt(i.pendingLanes);a!==0&&(Pn(i,a|1),Un(i,Yt()),(St&6)===0&&(Ps=Yt()+500,pr()))}break;case 13:Wr(function(){var l=Hi(t,1);if(l!==null){var f=wn();ui(l,t,1,f)}}),mc(t,1)}},zt=function(t){if(t.tag===13){var i=Hi(t,134217728);if(i!==null){var a=wn();ui(i,t,134217728,a)}mc(t,134217728)}},ni=function(t){if(t.tag===13){var i=Sr(t),a=Hi(t,i);if(a!==null){var l=wn();ui(a,t,i,l)}mc(t,i)}},Rt=function(){return mt},ii=function(t,i){var a=mt;try{return mt=t,i()}finally{mt=a}},rt=function(t,i,a){switch(i){case"input":if(Xt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var f=mo(l);if(!f)throw Error(n(90));It(l),Xt(l,f)}}}break;case"textarea":Le(t,a);break;case"select":i=a.value,i!=null&&Ft(t,!!a.multiple,i,!1)}},Re=lc,_e=Wr;var K0={usingClientEntryPoint:!1,Events:[ya,_s,mo,de,Oe,lc]},Ua={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Z0={bundleType:Ua.bundleType,version:Ua.version,rendererPackageName:Ua.rendererPackageName,rendererConfig:Ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=na(t),t===null?null:t.stateNode},findFiberByHostInstance:Ua.findFiberByHostInstance||$0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{Z=Jo.inject(Z0),be=Jo}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K0,Fn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_c(i))throw Error(n(200));return q0(t,i,null,a)},Fn.createRoot=function(t,i){if(!_c(t))throw Error(n(299));var a=!1,l="",f=Cp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=pc(t,1,!1,null,null,a,!1,l,f),t[Bi]=i.current,va(t.nodeType===8?t.parentNode:t),new gc(i)},Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=na(i),t=t===null?null:t.stateNode,t},Fn.flushSync=function(t){return Wr(t)},Fn.hydrate=function(t,i,a){if(!Zo(i))throw Error(n(200));return Qo(null,t,i,!0,a)},Fn.hydrateRoot=function(t,i,a){if(!_c(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,f=!1,d="",E=Cp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(d=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=wp(i,null,t,1,a??null,f,!1,d,E),t[Bi]=i.current,va(t),l)for(t=0;t<l.length;t++)a=l[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new Ko(i)},Fn.render=function(t,i,a){if(!Zo(i))throw Error(n(200));return Qo(null,t,i,!1,a)},Fn.unmountComponentAtNode=function(t){if(!Zo(t))throw Error(n(40));return t._reactRootContainer?(Wr(function(){Qo(null,null,t,!1,function(){t._reactRootContainer=null,t[Bi]=null})}),!0):!1},Fn.unstable_batchedUpdates=lc,Fn.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!Zo(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Qo(t,i,a,!1,l)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var Ip;function r_(){if(Ip)return xc.exports;Ip=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),xc.exports=i_(),xc.exports}var Up;function s_(){if(Up)return el;Up=1;var s=r_();return el.createRoot=s.createRoot,el.hydrateRoot=s.hydrateRoot,el}var a_=s_();const o_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Fm=(...s)=>s.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");var l_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const u_=gi.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:u,iconNode:c,...h},m)=>gi.createElement("svg",{ref:m,...l_,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:Fm("lucide",o),...h},[...c.map(([p,x])=>gi.createElement(p,x)),...Array.isArray(u)?u:[u]]));const Ii=(s,e)=>{const n=gi.forwardRef(({className:r,...o},u)=>gi.createElement(u_,{ref:u,iconNode:e,className:Fm(`lucide-${o_(s)}`,r),...o}));return n.displayName=`${s}`,n};const c_=Ii("BriefcaseBusiness",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);const f_=Ii("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const qf=Ii("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);const d_=Ii("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);const h_=Ii("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);const p_=Ii("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);const m_=Ii("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);const g_=Ii("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const __=Ii("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const v_=Ii("UserRoundCheck",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);const $f="184",x_=0,Fp=1,S_=2,Tl=1,y_=2,Ga=3,Dr=0,Bn=1,Zi=2,Ji=0,Ys=1,Op=2,Bp=3,kp=4,M_=5,Jr=100,E_=101,T_=102,w_=103,A_=104,C_=200,R_=201,b_=202,P_=203,tf=204,nf=205,L_=206,D_=207,N_=208,I_=209,U_=210,F_=211,O_=212,B_=213,k_=214,rf=0,sf=1,af=2,$s=3,of=4,lf=5,uf=6,cf=7,Om=0,z_=1,V_=2,bi=0,Bm=1,km=2,zm=3,Vm=4,Hm=5,Gm=6,Wm=7,Xm=300,is=301,js=302,Mc=303,Ec=304,Ol=306,ff=1e3,Qi=1001,df=1002,mn=1003,H_=1004,tl=1005,Mn=1006,Tc=1007,ts=1008,ti=1009,Ym=1010,qm=1011,Xa=1012,jf=1013,Di=1014,Ci=1015,nr=1016,Kf=1017,Zf=1018,Ya=1020,$m=35902,jm=35899,Km=1021,Zm=1022,mi=1023,ir=1026,ns=1027,Qm=1028,Qf=1029,rs=1030,Jf=1031,ed=1033,wl=33776,Al=33777,Cl=33778,Rl=33779,hf=35840,pf=35841,mf=35842,gf=35843,_f=36196,vf=37492,xf=37496,Sf=37488,yf=37489,Pl=37490,Mf=37491,Ef=37808,Tf=37809,wf=37810,Af=37811,Cf=37812,Rf=37813,bf=37814,Pf=37815,Lf=37816,Df=37817,Nf=37818,If=37819,Uf=37820,Ff=37821,Of=36492,Bf=36494,kf=36495,zf=36283,Vf=36284,Ll=36285,Hf=36286,G_=3200,zp=0,W_=1,Pr="",ei="srgb",Dl="srgb-linear",Nl="linear",bt="srgb",Ds=7680,Vp=519,X_=512,Y_=513,q_=514,td=515,$_=516,j_=517,nd=518,K_=519,Hp=35044,Gp="300 es",Ri=2e3,Il=2001;function Z_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ul(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Q_(){const s=Ul("canvas");return s.style.display="block",s}const Wp={};function Xp(...s){const e="THREE."+s.shift();console.log(e,...s)}function Jm(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function it(...s){s=Jm(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function yt(...s){s=Jm(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function Gf(...s){const e=s.join(" ");e in Wp||(Wp[e]=!0,it(...s))}function J_(s,e,n){return new Promise(function(r,o){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}const ev={[rf]:sf,[af]:uf,[of]:cf,[$s]:lf,[sf]:rf,[uf]:af,[cf]:of,[lf]:$s};class as{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wc=Math.PI/180,Wf=180/Math.PI;function qa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[n&63|128]+Sn[n>>8&255]+"-"+Sn[n>>16&255]+Sn[n>>24&255]+Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]).toLowerCase()}function vt(s,e,n){return Math.max(e,Math.min(n,s))}function tv(s,e){return(s%e+e)%e}function Ac(s,e,n){return(1-n)*s+n*e}function Fa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function On(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const od=class od{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*o+e.x,this.y=u*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};od.prototype.isVector2=!0;let Lt=od;class Qs{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,u,c,h){let m=r[o+0],p=r[o+1],x=r[o+2],S=r[o+3],g=u[c+0],M=u[c+1],A=u[c+2],b=u[c+3];if(S!==b||m!==g||p!==M||x!==A){let v=m*g+p*M+x*A+S*b;v<0&&(g=-g,M=-M,A=-A,b=-b,v=-v);let _=1-h;if(v<.9995){const R=Math.acos(v),N=Math.sin(R);_=Math.sin(_*R)/N,h=Math.sin(h*R)/N,m=m*_+g*h,p=p*_+M*h,x=x*_+A*h,S=S*_+b*h}else{m=m*_+g*h,p=p*_+M*h,x=x*_+A*h,S=S*_+b*h;const R=1/Math.sqrt(m*m+p*p+x*x+S*S);m*=R,p*=R,x*=R,S*=R}}e[n]=m,e[n+1]=p,e[n+2]=x,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,o,u,c){const h=r[o],m=r[o+1],p=r[o+2],x=r[o+3],S=u[c],g=u[c+1],M=u[c+2],A=u[c+3];return e[n]=h*A+x*S+m*M-p*g,e[n+1]=m*A+x*g+p*S-h*M,e[n+2]=p*A+x*M+h*g-m*S,e[n+3]=x*A-h*S-m*g-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,u=e._z,c=e._order,h=Math.cos,m=Math.sin,p=h(r/2),x=h(o/2),S=h(u/2),g=m(r/2),M=m(o/2),A=m(u/2);switch(c){case"XYZ":this._x=g*x*S+p*M*A,this._y=p*M*S-g*x*A,this._z=p*x*A+g*M*S,this._w=p*x*S-g*M*A;break;case"YXZ":this._x=g*x*S+p*M*A,this._y=p*M*S-g*x*A,this._z=p*x*A-g*M*S,this._w=p*x*S+g*M*A;break;case"ZXY":this._x=g*x*S-p*M*A,this._y=p*M*S+g*x*A,this._z=p*x*A+g*M*S,this._w=p*x*S-g*M*A;break;case"ZYX":this._x=g*x*S-p*M*A,this._y=p*M*S+g*x*A,this._z=p*x*A-g*M*S,this._w=p*x*S+g*M*A;break;case"YZX":this._x=g*x*S+p*M*A,this._y=p*M*S+g*x*A,this._z=p*x*A-g*M*S,this._w=p*x*S-g*M*A;break;case"XZY":this._x=g*x*S-p*M*A,this._y=p*M*S-g*x*A,this._z=p*x*A+g*M*S,this._w=p*x*S+g*M*A;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],u=n[8],c=n[1],h=n[5],m=n[9],p=n[2],x=n[6],S=n[10],g=r+h+S;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(x-m)*M,this._y=(u-p)*M,this._z=(c-o)*M}else if(r>h&&r>S){const M=2*Math.sqrt(1+r-h-S);this._w=(x-m)/M,this._x=.25*M,this._y=(o+c)/M,this._z=(u+p)/M}else if(h>S){const M=2*Math.sqrt(1+h-r-S);this._w=(u-p)/M,this._x=(o+c)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+S-r-h);this._w=(c-o)/M,this._x=(u+p)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,u=e._z,c=e._w,h=n._x,m=n._y,p=n._z,x=n._w;return this._x=r*x+c*h+o*p-u*m,this._y=o*x+c*m+u*h-r*p,this._z=u*x+c*p+r*m-o*h,this._w=c*x-r*h-o*m-u*p,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,u=e._z,c=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,u=-u,c=-c,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,n=Math.sin(n*p)/x,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+u*n,this._w=this._w*m+c*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+u*n,this._w=this._w*m+c*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ld=class ld{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Yp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Yp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*o,this.y=u[1]*n+u[4]*r+u[7]*o,this.z=u[2]*n+u[5]*r+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=e.elements,c=1/(u[3]*n+u[7]*r+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*o+u[12])*c,this.y=(u[1]*n+u[5]*r+u[9]*o+u[13])*c,this.z=(u[2]*n+u[6]*r+u[10]*o+u[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,u=e.x,c=e.y,h=e.z,m=e.w,p=2*(c*o-h*r),x=2*(h*n-u*o),S=2*(u*r-c*n);return this.x=n+m*p+c*S-h*x,this.y=r+m*x+h*p-u*S,this.z=o+m*S+u*x-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o,this.y=u[1]*n+u[5]*r+u[9]*o,this.z=u[2]*n+u[6]*r+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,u=e.z,c=n.x,h=n.y,m=n.z;return this.x=o*m-u*h,this.y=u*c-r*m,this.z=r*h-o*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ld.prototype.isVector3=!0;let ne=ld;const Cc=new ne,Yp=new Qs,ud=class ud{constructor(e,n,r,o,u,c,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,c,h,m,p)}set(e,n,r,o,u,c,h,m,p){const x=this.elements;return x[0]=e,x[1]=o,x[2]=h,x[3]=n,x[4]=u,x[5]=m,x[6]=r,x[7]=c,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,c=r[0],h=r[3],m=r[6],p=r[1],x=r[4],S=r[7],g=r[2],M=r[5],A=r[8],b=o[0],v=o[3],_=o[6],R=o[1],N=o[4],L=o[7],H=o[2],P=o[5],k=o[8];return u[0]=c*b+h*R+m*H,u[3]=c*v+h*N+m*P,u[6]=c*_+h*L+m*k,u[1]=p*b+x*R+S*H,u[4]=p*v+x*N+S*P,u[7]=p*_+x*L+S*k,u[2]=g*b+M*R+A*H,u[5]=g*v+M*N+A*P,u[8]=g*_+M*L+A*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return n*c*x-n*h*p-r*u*x+r*h*m+o*u*p-o*c*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],h=e[5],m=e[6],p=e[7],x=e[8],S=x*c-h*p,g=h*m-x*u,M=p*u-c*m,A=n*S+r*g+o*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=S*b,e[1]=(o*p-x*r)*b,e[2]=(h*r-o*c)*b,e[3]=g*b,e[4]=(x*n-o*m)*b,e[5]=(o*u-h*n)*b,e[6]=M*b,e[7]=(r*m-p*n)*b,e[8]=(c*n-r*u)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,u,c,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*c+p*h)+c+e,-o*p,o*m,-o*(-p*c+m*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(Rc.makeScale(e,n)),this}rotate(e){return this.premultiply(Rc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Rc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ud.prototype.isMatrix3=!0;let lt=ud;const Rc=new lt,qp=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$p=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nv(){const s={enabled:!0,workingColorSpace:Dl,spaces:{},convert:function(o,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===bt&&(o.r=er(o.r),o.g=er(o.g),o.b=er(o.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===bt&&(o.r=qs(o.r),o.g=qs(o.g),o.b=qs(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Pr?Nl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,c){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return Gf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return Gf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Dl]:{primaries:e,whitePoint:r,transfer:Nl,toXYZ:qp,fromXYZ:$p,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:bt,toXYZ:qp,fromXYZ:$p,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),s}const _t=nv();function er(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ns;class iv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ns===void 0&&(Ns=Ul("canvas")),Ns.width=e.width,Ns.height=e.height;const o=Ns.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ns}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ul("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=er(u[c]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(er(n[r]/255)*255):n[r]=er(n[r]);return{data:n,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rv=0;class id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=qa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,h=o.length;c<h;c++)o[c].isDataTexture?u.push(bc(o[c].image)):u.push(bc(o[c]))}else u=bc(o);r.url=u}return n||(e.images[this.uuid]=r),r}}function bc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?iv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let sv=0;const Pc=new ne;class Rn extends as{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,r=Qi,o=Qi,u=Mn,c=ts,h=mi,m=ti,p=Rn.DEFAULT_ANISOTROPY,x=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=qa(),this.name="",this.source=new id(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pc).x}get height(){return this.source.getSize(Pc).y}get depth(){return this.source.getSize(Pc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){it(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){it(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ff:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case df:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ff:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case df:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Xm;Rn.DEFAULT_ANISOTROPY=1;const cd=class cd{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o+c[12]*u,this.y=c[1]*n+c[5]*r+c[9]*o+c[13]*u,this.z=c[2]*n+c[6]*r+c[10]*o+c[14]*u,this.w=c[3]*n+c[7]*r+c[11]*o+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,u;const m=e.elements,p=m[0],x=m[4],S=m[8],g=m[1],M=m[5],A=m[9],b=m[2],v=m[6],_=m[10];if(Math.abs(x-g)<.01&&Math.abs(S-b)<.01&&Math.abs(A-v)<.01){if(Math.abs(x+g)<.1&&Math.abs(S+b)<.1&&Math.abs(A+v)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(p+1)/2,L=(M+1)/2,H=(_+1)/2,P=(x+g)/4,k=(S+b)/4,w=(A+v)/4;return N>L&&N>H?N<.01?(r=0,o=.707106781,u=.707106781):(r=Math.sqrt(N),o=P/r,u=k/r):L>H?L<.01?(r=.707106781,o=0,u=.707106781):(o=Math.sqrt(L),r=P/o,u=w/o):H<.01?(r=.707106781,o=.707106781,u=0):(u=Math.sqrt(H),r=k/u,o=w/u),this.set(r,o,u,n),this}let R=Math.sqrt((v-A)*(v-A)+(S-b)*(S-b)+(g-x)*(g-x));return Math.abs(R)<.001&&(R=1),this.x=(v-A)/R,this.y=(S-b)/R,this.z=(g-x)/R,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this.w=vt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this.w=vt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cd.prototype.isVector4=!0;let Zt=cd;class av extends as{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Zt(0,0,e,n),this.scissorTest=!1,this.viewport=new Zt(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},u=new Rn(o),c=r.count;for(let h=0;h<c;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new id(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends av{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class eg extends Rn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=mn,this.minFilter=mn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ov extends Rn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=mn,this.minFilter=mn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fl=class Fl{constructor(e,n,r,o,u,c,h,m,p,x,S,g,M,A,b,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,c,h,m,p,x,S,g,M,A,b,v)}set(e,n,r,o,u,c,h,m,p,x,S,g,M,A,b,v){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=o,_[1]=u,_[5]=c,_[9]=h,_[13]=m,_[2]=p,_[6]=x,_[10]=S,_[14]=g,_[3]=M,_[7]=A,_[11]=b,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fl().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Is.setFromMatrixColumn(e,0).length(),u=1/Is.setFromMatrixColumn(e,1).length(),c=1/Is.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,u=e.z,c=Math.cos(r),h=Math.sin(r),m=Math.cos(o),p=Math.sin(o),x=Math.cos(u),S=Math.sin(u);if(e.order==="XYZ"){const g=c*x,M=c*S,A=h*x,b=h*S;n[0]=m*x,n[4]=-m*S,n[8]=p,n[1]=M+A*p,n[5]=g-b*p,n[9]=-h*m,n[2]=b-g*p,n[6]=A+M*p,n[10]=c*m}else if(e.order==="YXZ"){const g=m*x,M=m*S,A=p*x,b=p*S;n[0]=g+b*h,n[4]=A*h-M,n[8]=c*p,n[1]=c*S,n[5]=c*x,n[9]=-h,n[2]=M*h-A,n[6]=b+g*h,n[10]=c*m}else if(e.order==="ZXY"){const g=m*x,M=m*S,A=p*x,b=p*S;n[0]=g-b*h,n[4]=-c*S,n[8]=A+M*h,n[1]=M+A*h,n[5]=c*x,n[9]=b-g*h,n[2]=-c*p,n[6]=h,n[10]=c*m}else if(e.order==="ZYX"){const g=c*x,M=c*S,A=h*x,b=h*S;n[0]=m*x,n[4]=A*p-M,n[8]=g*p+b,n[1]=m*S,n[5]=b*p+g,n[9]=M*p-A,n[2]=-p,n[6]=h*m,n[10]=c*m}else if(e.order==="YZX"){const g=c*m,M=c*p,A=h*m,b=h*p;n[0]=m*x,n[4]=b-g*S,n[8]=A*S+M,n[1]=S,n[5]=c*x,n[9]=-h*x,n[2]=-p*x,n[6]=M*S+A,n[10]=g-b*S}else if(e.order==="XZY"){const g=c*m,M=c*p,A=h*m,b=h*p;n[0]=m*x,n[4]=-S,n[8]=p*x,n[1]=g*S+b,n[5]=c*x,n[9]=M*S-A,n[2]=A*S-M,n[6]=h*x,n[10]=b*S+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lv,e,uv)}lookAt(e,n,r){const o=this.elements;return Gn.subVectors(e,n),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Tr.crossVectors(r,Gn),Tr.lengthSq()===0&&(Math.abs(r.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Tr.crossVectors(r,Gn)),Tr.normalize(),nl.crossVectors(Gn,Tr),o[0]=Tr.x,o[4]=nl.x,o[8]=Gn.x,o[1]=Tr.y,o[5]=nl.y,o[9]=Gn.y,o[2]=Tr.z,o[6]=nl.z,o[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,c=r[0],h=r[4],m=r[8],p=r[12],x=r[1],S=r[5],g=r[9],M=r[13],A=r[2],b=r[6],v=r[10],_=r[14],R=r[3],N=r[7],L=r[11],H=r[15],P=o[0],k=o[4],w=o[8],I=o[12],X=o[1],O=o[5],K=o[9],ue=o[13],ce=o[2],W=o[6],Q=o[10],j=o[14],Y=o[3],le=o[7],oe=o[11],U=o[15];return u[0]=c*P+h*X+m*ce+p*Y,u[4]=c*k+h*O+m*W+p*le,u[8]=c*w+h*K+m*Q+p*oe,u[12]=c*I+h*ue+m*j+p*U,u[1]=x*P+S*X+g*ce+M*Y,u[5]=x*k+S*O+g*W+M*le,u[9]=x*w+S*K+g*Q+M*oe,u[13]=x*I+S*ue+g*j+M*U,u[2]=A*P+b*X+v*ce+_*Y,u[6]=A*k+b*O+v*W+_*le,u[10]=A*w+b*K+v*Q+_*oe,u[14]=A*I+b*ue+v*j+_*U,u[3]=R*P+N*X+L*ce+H*Y,u[7]=R*k+N*O+L*W+H*le,u[11]=R*w+N*K+L*Q+H*oe,u[15]=R*I+N*ue+L*j+H*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],u=e[12],c=e[1],h=e[5],m=e[9],p=e[13],x=e[2],S=e[6],g=e[10],M=e[14],A=e[3],b=e[7],v=e[11],_=e[15],R=m*M-p*g,N=h*M-p*S,L=h*g-m*S,H=c*M-p*x,P=c*g-m*x,k=c*S-h*x;return n*(b*R-v*N+_*L)-r*(A*R-v*H+_*P)+o*(A*N-b*H+_*k)-u*(A*L-b*P+v*k)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],h=e[5],m=e[6],p=e[7],x=e[8],S=e[9],g=e[10],M=e[11],A=e[12],b=e[13],v=e[14],_=e[15],R=n*h-r*c,N=n*m-o*c,L=n*p-u*c,H=r*m-o*h,P=r*p-u*h,k=o*p-u*m,w=x*b-S*A,I=x*v-g*A,X=x*_-M*A,O=S*v-g*b,K=S*_-M*b,ue=g*_-M*v,ce=R*ue-N*K+L*O+H*X-P*I+k*w;if(ce===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/ce;return e[0]=(h*ue-m*K+p*O)*W,e[1]=(o*K-r*ue-u*O)*W,e[2]=(b*k-v*P+_*H)*W,e[3]=(g*P-S*k-M*H)*W,e[4]=(m*X-c*ue-p*I)*W,e[5]=(n*ue-o*X+u*I)*W,e[6]=(v*L-A*k-_*N)*W,e[7]=(x*k-g*L+M*N)*W,e[8]=(c*K-h*X+p*w)*W,e[9]=(r*X-n*K-u*w)*W,e[10]=(A*P-b*L+_*R)*W,e[11]=(S*L-x*P-M*R)*W,e[12]=(h*I-c*O-m*w)*W,e[13]=(n*O-r*I+o*w)*W,e[14]=(b*N-A*H-v*R)*W,e[15]=(x*H-S*N+g*R)*W,this}scale(e){const n=this.elements,r=e.x,o=e.y,u=e.z;return n[0]*=r,n[4]*=o,n[8]*=u,n[1]*=r,n[5]*=o,n[9]*=u,n[2]*=r,n[6]*=o,n[10]*=u,n[3]*=r,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),u=1-r,c=e.x,h=e.y,m=e.z,p=u*c,x=u*h;return this.set(p*c+r,p*h-o*m,p*m+o*h,0,p*h+o*m,x*h+r,x*m-o*c,0,p*m-o*h,x*m+o*c,u*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,u,c){return this.set(1,r,u,0,e,1,c,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,u=n._x,c=n._y,h=n._z,m=n._w,p=u+u,x=c+c,S=h+h,g=u*p,M=u*x,A=u*S,b=c*x,v=c*S,_=h*S,R=m*p,N=m*x,L=m*S,H=r.x,P=r.y,k=r.z;return o[0]=(1-(b+_))*H,o[1]=(M+L)*H,o[2]=(A-N)*H,o[3]=0,o[4]=(M-L)*P,o[5]=(1-(g+_))*P,o[6]=(v+R)*P,o[7]=0,o[8]=(A+N)*k,o[9]=(v-R)*k,o[10]=(1-(g+b))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const u=this.determinant();if(u===0)return r.set(1,1,1),n.identity(),this;let c=Is.set(o[0],o[1],o[2]).length();const h=Is.set(o[4],o[5],o[6]).length(),m=Is.set(o[8],o[9],o[10]).length();u<0&&(c=-c),ci.copy(this);const p=1/c,x=1/h,S=1/m;return ci.elements[0]*=p,ci.elements[1]*=p,ci.elements[2]*=p,ci.elements[4]*=x,ci.elements[5]*=x,ci.elements[6]*=x,ci.elements[8]*=S,ci.elements[9]*=S,ci.elements[10]*=S,n.setFromRotationMatrix(ci),r.x=c,r.y=h,r.z=m,this}makePerspective(e,n,r,o,u,c,h=Ri,m=!1){const p=this.elements,x=2*u/(n-e),S=2*u/(r-o),g=(n+e)/(n-e),M=(r+o)/(r-o);let A,b;if(m)A=u/(c-u),b=c*u/(c-u);else if(h===Ri)A=-(c+u)/(c-u),b=-2*c*u/(c-u);else if(h===Il)A=-c/(c-u),b=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=S,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,u,c,h=Ri,m=!1){const p=this.elements,x=2/(n-e),S=2/(r-o),g=-(n+e)/(n-e),M=-(r+o)/(r-o);let A,b;if(m)A=1/(c-u),b=c/(c-u);else if(h===Ri)A=-2/(c-u),b=-(c+u)/(c-u);else if(h===Il)A=-1/(c-u),b=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=S,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Fl.prototype.isMatrix4=!0;let rn=Fl;const Is=new ne,ci=new rn,lv=new ne(0,0,0),uv=new ne(1,1,1),Tr=new ne,nl=new ne,Gn=new ne,jp=new rn,Kp=new Qs;class ss{constructor(e=0,n=0,r=0,o=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,u=o[0],c=o[4],h=o[8],m=o[1],p=o[5],x=o[9],S=o[2],g=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-vt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(vt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-x,M),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Kp.setFromEuler(this),this.setFromQuaternion(Kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class tg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cv=0;const Zp=new ne,Us=new Qs,Yi=new rn,il=new ne,Oa=new ne,fv=new ne,dv=new Qs,Qp=new ne(1,0,0),Jp=new ne(0,1,0),em=new ne(0,0,1),tm={type:"added"},hv={type:"removed"},Fs={type:"childadded",child:null},Lc={type:"childremoved",child:null};class Xn extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new ne,n=new ss,r=new Qs,o=new ne(1,1,1);function u(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new rn},normalMatrix:{value:new lt}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Qp,e)}rotateY(e){return this.rotateOnAxis(Jp,e)}rotateZ(e){return this.rotateOnAxis(em,e)}translateOnAxis(e,n){return Zp.copy(e).applyQuaternion(this.quaternion),this.position.add(Zp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qp,e)}translateY(e){return this.translateOnAxis(Jp,e)}translateZ(e){return this.translateOnAxis(em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?il.copy(e):il.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Oa,il,this.up):Yi.lookAt(il,Oa,this.up),this.quaternion.setFromRotationMatrix(Yi),o&&(Yi.extractRotation(o.matrixWorld),Us.setFromRotationMatrix(Yi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(yt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):yt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(hv),Lc.child=e,this.dispatchEvent(Lc),Lc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,fv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,dv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,u=this.matrix.elements;u[12]+=n-u[0]*n-u[4]*r-u[8]*o,u[13]+=r-u[1]*n-u[5]*r-u[9]*o,u[14]+=o-u[2]*n-u[6]*r-u[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const S=m[p];u(e.shapes,S)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));o.material=h}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(u(e.animations,m))}}if(n){const h=c(e.geometries),m=c(e.materials),p=c(e.textures),x=c(e.images),S=c(e.shapes),g=c(e.skeletons),M=c(e.animations),A=c(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),S.length>0&&(r.shapes=S),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=o,r;function c(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Xn.DEFAULT_UP=new ne(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rl extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pv={type:"move"};class Dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,u=null,c=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const b of e.hand.values()){const v=n.getJointPose(b,r),_=this._getHandJoint(p,b);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const x=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],g=x.position.distanceTo(S.position),M=.02,A=.005;p.inputState.pinching&&g>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&u!==null&&(o=u),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(pv)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new rl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},sl={h:0,s:0,l:0};function Nc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Pt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=_t.workingColorSpace){return this.r=e,this.g=n,this.b=r,_t.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=_t.workingColorSpace){if(e=tv(e,1),n=vt(n,0,1),r=vt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,c=2*r-u;this.r=Nc(c,u,e+1/3),this.g=Nc(c,u,e),this.b=Nc(c,u,e-1/3)}return _t.colorSpaceToWorking(this,o),this}setStyle(e,n=ei){function r(u){u!==void 0&&parseFloat(u)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=o[1],h=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:it("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ei){const r=ng[e.toLowerCase()];return r!==void 0?this.setHex(r,n):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return _t.workingToColorSpace(yn.copy(this),e),Math.round(vt(yn.r*255,0,255))*65536+Math.round(vt(yn.g*255,0,255))*256+Math.round(vt(yn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=_t.workingColorSpace){_t.workingToColorSpace(yn.copy(this),n);const r=yn.r,o=yn.g,u=yn.b,c=Math.max(r,o,u),h=Math.min(r,o,u);let m,p;const x=(h+c)/2;if(h===c)m=0,p=0;else{const S=c-h;switch(p=x<=.5?S/(c+h):S/(2-c-h),c){case r:m=(o-u)/S+(o<u?6:0);break;case o:m=(u-r)/S+2;break;case u:m=(r-o)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,n=_t.workingColorSpace){return _t.workingToColorSpace(yn.copy(this),n),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=ei){_t.workingToColorSpace(yn.copy(this),e);const n=yn.r,r=yn.g,o=yn.b;return e!==ei?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+n,wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(wr),e.getHSL(sl);const r=Ac(wr.h,sl.h,n),o=Ac(wr.s,sl.s,n),u=Ac(wr.l,sl.l,n);return this.setHSL(r,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*o,this.g=u[1]*n+u[4]*r+u[7]*o,this.b=u[2]*n+u[5]*r+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new Pt;Pt.NAMES=ng;class mv extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const fi=new ne,qi=new ne,Ic=new ne,$i=new ne,Os=new ne,Bs=new ne,nm=new ne,Uc=new ne,Fc=new ne,Oc=new ne,Bc=new Zt,kc=new Zt,zc=new Zt;class pi{constructor(e=new ne,n=new ne,r=new ne){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),fi.subVectors(e,n),o.cross(fi);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,n,r,o,u){fi.subVectors(o,n),qi.subVectors(r,n),Ic.subVectors(e,n);const c=fi.dot(fi),h=fi.dot(qi),m=fi.dot(Ic),p=qi.dot(qi),x=qi.dot(Ic),S=c*p-h*h;if(S===0)return u.set(0,0,0),null;const g=1/S,M=(p*m-h*x)*g,A=(c*x-h*m)*g;return u.set(1-M-A,A,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,n,r,o,u,c,h,m){return this.getBarycoord(e,n,r,o,$i)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,$i.x),m.addScaledVector(c,$i.y),m.addScaledVector(h,$i.z),m)}static getInterpolatedAttribute(e,n,r,o,u,c){return Bc.setScalar(0),kc.setScalar(0),zc.setScalar(0),Bc.fromBufferAttribute(e,n),kc.fromBufferAttribute(e,r),zc.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Bc,u.x),c.addScaledVector(kc,u.y),c.addScaledVector(zc,u.z),c}static isFrontFacing(e,n,r,o){return fi.subVectors(r,n),qi.subVectors(e,n),fi.cross(qi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),fi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,u){return pi.getInterpolation(e,this.a,this.b,this.c,n,r,o,u)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,u=this.c;let c,h;Os.subVectors(o,r),Bs.subVectors(u,r),Uc.subVectors(e,r);const m=Os.dot(Uc),p=Bs.dot(Uc);if(m<=0&&p<=0)return n.copy(r);Fc.subVectors(e,o);const x=Os.dot(Fc),S=Bs.dot(Fc);if(x>=0&&S<=x)return n.copy(o);const g=m*S-x*p;if(g<=0&&m>=0&&x<=0)return c=m/(m-x),n.copy(r).addScaledVector(Os,c);Oc.subVectors(e,u);const M=Os.dot(Oc),A=Bs.dot(Oc);if(A>=0&&M<=A)return n.copy(u);const b=M*p-m*A;if(b<=0&&p>=0&&A<=0)return h=p/(p-A),n.copy(r).addScaledVector(Bs,h);const v=x*A-M*S;if(v<=0&&S-x>=0&&M-A>=0)return nm.subVectors(u,o),h=(S-x)/(S-x+(M-A)),n.copy(o).addScaledVector(nm,h);const _=1/(v+b+g);return c=b*_,h=g*_,n.copy(r).addScaledVector(Os,c).addScaledVector(Bs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class $a{constructor(e=new ne(1/0,1/0,1/0),n=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(di.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(di.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=di.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,h=u.count;c<h;c++)e.isMesh===!0?e.getVertexPosition(c,di):di.fromBufferAttribute(u,c),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),al.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),al.copy(r.boundingBox)),al.applyMatrix4(e.matrixWorld),this.union(al)}const o=e.children;for(let u=0,c=o.length;u<c;u++)this.expandByObject(o[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ba),ol.subVectors(this.max,Ba),ks.subVectors(e.a,Ba),zs.subVectors(e.b,Ba),Vs.subVectors(e.c,Ba),Ar.subVectors(zs,ks),Cr.subVectors(Vs,zs),$r.subVectors(ks,Vs);let n=[0,-Ar.z,Ar.y,0,-Cr.z,Cr.y,0,-$r.z,$r.y,Ar.z,0,-Ar.x,Cr.z,0,-Cr.x,$r.z,0,-$r.x,-Ar.y,Ar.x,0,-Cr.y,Cr.x,0,-$r.y,$r.x,0];return!Vc(n,ks,zs,Vs,ol)||(n=[1,0,0,0,1,0,0,0,1],!Vc(n,ks,zs,Vs,ol))?!1:(ll.crossVectors(Ar,Cr),n=[ll.x,ll.y,ll.z],Vc(n,ks,zs,Vs,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ji=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],di=new ne,al=new $a,ks=new ne,zs=new ne,Vs=new ne,Ar=new ne,Cr=new ne,$r=new ne,Ba=new ne,ol=new ne,ll=new ne,jr=new ne;function Vc(s,e,n,r,o){for(let u=0,c=s.length-3;u<=c;u+=3){jr.fromArray(s,u);const h=o.x*Math.abs(jr.x)+o.y*Math.abs(jr.y)+o.z*Math.abs(jr.z),m=e.dot(jr),p=n.dot(jr),x=r.dot(jr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const en=new ne,ul=new Lt;let gv=0;class Li extends as{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Hp,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ul.fromBufferAttribute(this,n),ul.applyMatrix3(e),this.setXY(n,ul.x,ul.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)en.fromBufferAttribute(this,n),en.applyMatrix3(e),this.setXYZ(n,en.x,en.y,en.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)en.fromBufferAttribute(this,n),en.applyMatrix4(e),this.setXYZ(n,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)en.fromBufferAttribute(this,n),en.applyNormalMatrix(e),this.setXYZ(n,en.x,en.y,en.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)en.fromBufferAttribute(this,n),en.transformDirection(e),this.setXYZ(n,en.x,en.y,en.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Fa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=On(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fa(n,this.array)),n}setX(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fa(n,this.array)),n}setY(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fa(n,this.array)),n}setW(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),o=On(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,u){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),o=On(o,this.array),u=On(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ig extends Li{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class rg extends Li{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class tr extends Li{constructor(e,n,r){super(new Float32Array(e),n,r)}}const _v=new $a,ka=new ne,Hc=new ne;class rd{constructor(e=new ne,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):_v.setFromPoints(e).getCenter(r);let o=0;for(let u=0,c=e.length;u<c;u++)o=Math.max(o,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);const n=ka.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(ka,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(Hc)),this.expandByPoint(ka.copy(e.center).sub(Hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let vv=0;const Jn=new rn,Gc=new Xn,Hs=new ne,Wn=new $a,za=new $a,cn=new ne;class rr extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=qa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z_(e)?rg:ig)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new lt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,n,r){return Jn.makeTranslation(e,n,r),this.applyMatrix4(Jn),this}scale(e,n,r){return Jn.makeScale(e,n,r),this.applyMatrix4(Jn),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,u=e.length;o<u;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new tr(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const u=e[o];n.setXYZ(o,u.x,u.y,u.z||0)}e.length>n.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const u=n[r];Wn.setFromBufferAttribute(u),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),n)for(let u=0,c=n.length;u<c;u++){const h=n[u];za.setFromBufferAttribute(h),this.morphTargetsRelative?(cn.addVectors(Wn.min,za.min),Wn.expandByPoint(cn),cn.addVectors(Wn.max,za.max),Wn.expandByPoint(cn)):(Wn.expandByPoint(za.min),Wn.expandByPoint(za.max))}Wn.getCenter(r);let o=0;for(let u=0,c=e.count;u<c;u++)cn.fromBufferAttribute(e,u),o=Math.max(o,r.distanceToSquared(cn));if(n)for(let u=0,c=n.length;u<c;u++){const h=n[u],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)cn.fromBufferAttribute(h,p),m&&(Hs.fromBufferAttribute(e,p),cn.add(Hs)),o=Math.max(o,r.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),h=[],m=[];for(let w=0;w<r.count;w++)h[w]=new ne,m[w]=new ne;const p=new ne,x=new ne,S=new ne,g=new Lt,M=new Lt,A=new Lt,b=new ne,v=new ne;function _(w,I,X){p.fromBufferAttribute(r,w),x.fromBufferAttribute(r,I),S.fromBufferAttribute(r,X),g.fromBufferAttribute(u,w),M.fromBufferAttribute(u,I),A.fromBufferAttribute(u,X),x.sub(p),S.sub(p),M.sub(g),A.sub(g);const O=1/(M.x*A.y-A.x*M.y);isFinite(O)&&(b.copy(x).multiplyScalar(A.y).addScaledVector(S,-M.y).multiplyScalar(O),v.copy(S).multiplyScalar(M.x).addScaledVector(x,-A.x).multiplyScalar(O),h[w].add(b),h[I].add(b),h[X].add(b),m[w].add(v),m[I].add(v),m[X].add(v))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let w=0,I=R.length;w<I;++w){const X=R[w],O=X.start,K=X.count;for(let ue=O,ce=O+K;ue<ce;ue+=3)_(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const N=new ne,L=new ne,H=new ne,P=new ne;function k(w){H.fromBufferAttribute(o,w),P.copy(H);const I=h[w];N.copy(I),N.sub(H.multiplyScalar(H.dot(I))).normalize(),L.crossVectors(P,I);const O=L.dot(m[w])<0?-1:1;c.setXYZW(w,N.x,N.y,N.z,O)}for(let w=0,I=R.length;w<I;++w){const X=R[w],O=X.start,K=X.count;for(let ue=O,ce=O+K;ue<ce;ue+=3)k(e.getX(ue+0)),k(e.getX(ue+1)),k(e.getX(ue+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Li(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const o=new ne,u=new ne,c=new ne,h=new ne,m=new ne,p=new ne,x=new ne,S=new ne;if(e)for(let g=0,M=e.count;g<M;g+=3){const A=e.getX(g+0),b=e.getX(g+1),v=e.getX(g+2);o.fromBufferAttribute(n,A),u.fromBufferAttribute(n,b),c.fromBufferAttribute(n,v),x.subVectors(c,u),S.subVectors(o,u),x.cross(S),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,b),p.fromBufferAttribute(r,v),h.add(x),m.add(x),p.add(x),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(v,p.x,p.y,p.z)}else for(let g=0,M=n.count;g<M;g+=3)o.fromBufferAttribute(n,g+0),u.fromBufferAttribute(n,g+1),c.fromBufferAttribute(n,g+2),x.subVectors(c,u),S.subVectors(o,u),x.cross(S),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)cn.fromBufferAttribute(e,n),cn.normalize(),e.setXYZ(n,cn.x,cn.y,cn.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,S=h.normalized,g=new p.constructor(m.length*x);let M=0,A=0;for(let b=0,v=m.length;b<v;b++){h.isInterleavedBufferAttribute?M=m[b]*h.data.stride+h.offset:M=m[b]*x;for(let _=0;_<x;_++)g[A++]=p[M++]}return new Li(g,x,S)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rr,r=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=e(m,r);n.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let x=0,S=p.length;x<S;x++){const g=p[x],M=e(g,r);m.push(M)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,m=c.length;h<m;h++){const p=c[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let S=0,g=p.length;S<g;S++){const M=p[S];x.push(M.toJSON(e.data))}x.length>0&&(o[m]=x,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const x=o[p];this.setAttribute(p,x.clone(n))}const u=e.morphAttributes;for(const p in u){const x=[],S=u[p];for(let g=0,M=S.length;g<M;g++)x.push(S[g].clone(n));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,x=c.length;p<x;p++){const S=c[p];this.addGroup(S.start,S.count,S.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let xv=0;class Bl extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=qa(),this.name="",this.type="Material",this.blending=Ys,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tf,this.blendDst=nf,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){it(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){it(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(r.blending=this.blending),this.side!==Dr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==tf&&(r.blendSrc=this.blendSrc),this.blendDst!==nf&&(r.blendDst=this.blendDst),this.blendEquation!==Jr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(u){const c=[];for(const h in u){const m=u[h];delete m.metadata,c.push(m)}return c}if(n){const u=o(e.textures),c=o(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let u=0;u!==o;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ki=new ne,Wc=new ne,cl=new ne,Rr=new ne,Xc=new ne,fl=new ne,Yc=new ne;class Sv{constructor(e=new ne,n=new ne(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,n),Ki.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Wc.copy(e).add(n).multiplyScalar(.5),cl.copy(n).sub(e).normalize(),Rr.copy(this.origin).sub(Wc);const u=e.distanceTo(n)*.5,c=-this.direction.dot(cl),h=Rr.dot(this.direction),m=-Rr.dot(cl),p=Rr.lengthSq(),x=Math.abs(1-c*c);let S,g,M,A;if(x>0)if(S=c*m-h,g=c*h-m,A=u*x,S>=0)if(g>=-A)if(g<=A){const b=1/x;S*=b,g*=b,M=S*(S+c*g+2*h)+g*(c*S+g+2*m)+p}else g=u,S=Math.max(0,-(c*g+h)),M=-S*S+g*(g+2*m)+p;else g=-u,S=Math.max(0,-(c*g+h)),M=-S*S+g*(g+2*m)+p;else g<=-A?(S=Math.max(0,-(-c*u+h)),g=S>0?-u:Math.min(Math.max(-u,-m),u),M=-S*S+g*(g+2*m)+p):g<=A?(S=0,g=Math.min(Math.max(-u,-m),u),M=g*(g+2*m)+p):(S=Math.max(0,-(c*u+h)),g=S>0?u:Math.min(Math.max(-u,-m),u),M=-S*S+g*(g+2*m)+p);else g=c>0?-u:u,S=Math.max(0,-(c*g+h)),M=-S*S+g*(g+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(Wc).addScaledVector(cl,g),M}intersectSphere(e,n){Ki.subVectors(e.center,this.origin);const r=Ki.dot(this.direction),o=Ki.dot(Ki)-r*r,u=e.radius*e.radius;if(o>u)return null;const c=Math.sqrt(u-o),h=r-c,m=r+c;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,u,c,h,m;const p=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),x>=0?(u=(e.min.y-g.y)*x,c=(e.max.y-g.y)*x):(u=(e.max.y-g.y)*x,c=(e.min.y-g.y)*x),r>c||u>o||((u>r||isNaN(r))&&(r=u),(c<o||isNaN(o))&&(o=c),S>=0?(h=(e.min.z-g.z)*S,m=(e.max.z-g.z)*S):(h=(e.max.z-g.z)*S,m=(e.min.z-g.z)*S),r>m||h>o)||((h>r||r!==r)&&(r=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,n,r,o,u){Xc.subVectors(n,e),fl.subVectors(r,e),Yc.crossVectors(Xc,fl);let c=this.direction.dot(Yc),h;if(c>0){if(o)return null;h=1}else if(c<0)h=-1,c=-c;else return null;Rr.subVectors(this.origin,e);const m=h*this.direction.dot(fl.crossVectors(Rr,fl));if(m<0)return null;const p=h*this.direction.dot(Xc.cross(Rr));if(p<0||m+p>c)return null;const x=-h*Rr.dot(Yc);return x<0?null:this.at(x/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sg extends Bl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=Om,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const im=new rn,Kr=new Sv,dl=new rd,rm=new ne,hl=new ne,pl=new ne,ml=new ne,qc=new ne,gl=new ne,sm=new ne,_l=new ne;class Ni extends Xn{constructor(e=new rr,n=new sg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(u&&h){gl.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=h[m],S=u[m];x!==0&&(qc.fromBufferAttribute(S,e),c?gl.addScaledVector(qc,x):gl.addScaledVector(qc.sub(n),x))}n.add(gl)}return n}raycast(e,n){const r=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),dl.copy(r.boundingSphere),dl.applyMatrix4(u),Kr.copy(e.ray).recast(e.near),!(dl.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(dl,rm)===null||Kr.origin.distanceToSquared(rm)>(e.far-e.near)**2))&&(im.copy(u).invert(),Kr.copy(e.ray).applyMatrix4(im),!(r.boundingBox!==null&&Kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Kr)))}_computeIntersections(e,n,r){let o;const u=this.geometry,c=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,S=u.attributes.normal,g=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(c))for(let A=0,b=g.length;A<b;A++){const v=g[A],_=c[v.materialIndex],R=Math.max(v.start,M.start),N=Math.min(h.count,Math.min(v.start+v.count,M.start+M.count));for(let L=R,H=N;L<H;L+=3){const P=h.getX(L),k=h.getX(L+1),w=h.getX(L+2);o=vl(this,_,e,r,p,x,S,P,k,w),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const A=Math.max(0,M.start),b=Math.min(h.count,M.start+M.count);for(let v=A,_=b;v<_;v+=3){const R=h.getX(v),N=h.getX(v+1),L=h.getX(v+2);o=vl(this,c,e,r,p,x,S,R,N,L),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(c))for(let A=0,b=g.length;A<b;A++){const v=g[A],_=c[v.materialIndex],R=Math.max(v.start,M.start),N=Math.min(m.count,Math.min(v.start+v.count,M.start+M.count));for(let L=R,H=N;L<H;L+=3){const P=L,k=L+1,w=L+2;o=vl(this,_,e,r,p,x,S,P,k,w),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const A=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let v=A,_=b;v<_;v+=3){const R=v,N=v+1,L=v+2;o=vl(this,c,e,r,p,x,S,R,N,L),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}}}function yv(s,e,n,r,o,u,c,h){let m;if(e.side===Bn?m=r.intersectTriangle(c,u,o,!0,h):m=r.intersectTriangle(o,u,c,e.side===Dr,h),m===null)return null;_l.copy(h),_l.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(_l);return p<n.near||p>n.far?null:{distance:p,point:_l.clone(),object:s}}function vl(s,e,n,r,o,u,c,h,m,p){s.getVertexPosition(h,hl),s.getVertexPosition(m,pl),s.getVertexPosition(p,ml);const x=yv(s,e,n,r,hl,pl,ml,sm);if(x){const S=new ne;pi.getBarycoord(sm,hl,pl,ml,S),o&&(x.uv=pi.getInterpolatedAttribute(o,h,m,p,S,new Lt)),u&&(x.uv1=pi.getInterpolatedAttribute(u,h,m,p,S,new Lt)),c&&(x.normal=pi.getInterpolatedAttribute(c,h,m,p,S,new ne),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new ne,materialIndex:0};pi.getNormal(hl,pl,ml,g.normal),x.face=g,x.barycoord=S}return x}class Mv extends Rn{constructor(e=null,n=1,r=1,o,u,c,h,m,p=mn,x=mn,S,g){super(null,c,h,m,p,x,o,u,S,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $c=new ne,Ev=new ne,Tv=new lt;class Qr{constructor(e=new ne(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=$c.subVectors(r,n).cross(Ev.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta($c),u=this.normal.dot(o);if(u===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/u;return r===!0&&(c<0||c>1)?null:n.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Tv.getNormalMatrix(e),o=this.coplanarPoint($c).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new rd,wv=new Lt(.5,.5),xl=new ne;class ag{constructor(e=new Qr,n=new Qr,r=new Qr,o=new Qr,u=new Qr,c=new Qr){this.planes=[e,n,r,o,u,c]}set(e,n,r,o,u,c){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(r),h[3].copy(o),h[4].copy(u),h[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ri,r=!1){const o=this.planes,u=e.elements,c=u[0],h=u[1],m=u[2],p=u[3],x=u[4],S=u[5],g=u[6],M=u[7],A=u[8],b=u[9],v=u[10],_=u[11],R=u[12],N=u[13],L=u[14],H=u[15];if(o[0].setComponents(p-c,M-x,_-A,H-R).normalize(),o[1].setComponents(p+c,M+x,_+A,H+R).normalize(),o[2].setComponents(p+h,M+S,_+b,H+N).normalize(),o[3].setComponents(p-h,M-S,_-b,H-N).normalize(),r)o[4].setComponents(m,g,v,L).normalize(),o[5].setComponents(p-m,M-g,_-v,H-L).normalize();else if(o[4].setComponents(p-m,M-g,_-v,H-L).normalize(),n===Ri)o[5].setComponents(p+m,M+g,_+v,H+L).normalize();else if(n===Il)o[5].setComponents(m,g,v,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){Zr.center.set(0,0,0);const n=wv.distanceTo(e.center);return Zr.radius=.7071067811865476+n,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(xl.x=o.normal.x>0?e.max.x:e.min.x,xl.y=o.normal.y>0?e.max.y:e.min.y,xl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class og extends Rn{constructor(e=[],n=is,r,o,u,c,h,m,p,x){super(e,n,r,o,u,c,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ks extends Rn{constructor(e,n,r=Di,o,u,c,h=mn,m=mn,p,x=ir,S=1){if(x!==ir&&x!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:S};super(g,o,u,c,h,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new id(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Av extends Ks{constructor(e,n=Di,r=is,o,u,c=mn,h=mn,m,p=ir){const x={width:e,height:e,depth:1},S=[x,x,x,x,x,x];super(e,e,n,r,o,u,c,h,m,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lg extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ja extends rr{constructor(e=1,n=1,r=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:u,depthSegments:c};const h=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);const m=[],p=[],x=[],S=[];let g=0,M=0;A("z","y","x",-1,-1,r,n,e,c,u,0),A("z","y","x",1,-1,r,n,-e,c,u,1),A("x","z","y",1,1,e,r,n,o,c,2),A("x","z","y",1,-1,e,r,-n,o,c,3),A("x","y","z",1,-1,e,n,r,o,u,4),A("x","y","z",-1,-1,e,n,-r,o,u,5),this.setIndex(m),this.setAttribute("position",new tr(p,3)),this.setAttribute("normal",new tr(x,3)),this.setAttribute("uv",new tr(S,2));function A(b,v,_,R,N,L,H,P,k,w,I){const X=L/k,O=H/w,K=L/2,ue=H/2,ce=P/2,W=k+1,Q=w+1;let j=0,Y=0;const le=new ne;for(let oe=0;oe<Q;oe++){const U=oe*O-ue;for(let J=0;J<W;J++){const Fe=J*X-K;le[b]=Fe*R,le[v]=U*N,le[_]=ce,p.push(le.x,le.y,le.z),le[b]=0,le[v]=0,le[_]=P>0?1:-1,x.push(le.x,le.y,le.z),S.push(J/k),S.push(1-oe/w),j+=1}}for(let oe=0;oe<w;oe++)for(let U=0;U<k;U++){const J=g+U+W*oe,Fe=g+U+W*(oe+1),He=g+(U+1)+W*(oe+1),Ne=g+(U+1)+W*oe;m.push(J,Fe,Ne),m.push(Fe,He,Ne),Y+=6}h.addGroup(M,Y,I),M+=Y,g+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ka extends rr{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const u=e/2,c=n/2,h=Math.floor(r),m=Math.floor(o),p=h+1,x=m+1,S=e/h,g=n/m,M=[],A=[],b=[],v=[];for(let _=0;_<x;_++){const R=_*g-c;for(let N=0;N<p;N++){const L=N*S-u;A.push(L,-R,0),b.push(0,0,1),v.push(N/h),v.push(1-_/m)}}for(let _=0;_<m;_++)for(let R=0;R<h;R++){const N=R+p*_,L=R+p*(_+1),H=R+1+p*(_+1),P=R+1+p*_;M.push(N,L,P),M.push(L,H,P)}this.setIndex(M),this.setAttribute("position",new tr(A,3)),this.setAttribute("normal",new tr(b,3)),this.setAttribute("uv",new tr(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.widthSegments,e.heightSegments)}}function Zs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];if(am(o))o.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(am(o[0])){const u=[];for(let c=0,h=o.length;c<h;c++)u[c]=o[c].clone();e[n][r]=u}else e[n][r]=o.slice();else e[n][r]=o}}return e}function An(s){const e={};for(let n=0;n<s.length;n++){const r=Zs(s[n]);for(const o in r)e[o]=r[o]}return e}function am(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Cv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function ug(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const Rv={clone:Zs,merge:An};var bv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Bl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bv,this.fragmentShader=Pv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=Cv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Lv extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dv extends Bl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=G_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nv extends Bl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sl=new ne,yl=new Qs,Ti=new ne;class cg extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sl,yl,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sl,yl,Ti.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Sl,yl,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sl,yl,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const br=new ne,om=new Lt,lm=new Lt;class hi extends cg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wf*2*Math.atan(Math.tan(wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,n){return this.getViewBounds(e,om,lm),n.subVectors(lm,om)}setViewOffset(e,n,r,o,u,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wc*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,u=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const m=c.fullWidth,p=c.fullHeight;u+=c.offsetX*o/m,n-=c.offsetY*r/p,o*=c.width/m,r*=c.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class sd extends cg{constructor(e=-1,n=1,r=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=r-e,c=r+e,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,c=u+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(u,c,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Gs=-90,Ws=1;class Iv extends Xn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new hi(Gs,Ws,e,n);o.layers=this.layers,this.add(o);const u=new hi(Gs,Ws,e,n);u.layers=this.layers,this.add(u);const c=new hi(Gs,Ws,e,n);c.layers=this.layers,this.add(c);const h=new hi(Gs,Ws,e,n);h.layers=this.layers,this.add(h);const m=new hi(Gs,Ws,e,n);m.layers=this.layers,this.add(m);const p=new hi(Gs,Ws,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,u,c,h,m]=n;for(const p of n)this.remove(p);if(e===Ri)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Il)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,h,m,p,x]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,1,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,2,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,3,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(r,4,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,x),e.setRenderTarget(S,g,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Uv extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const fd=class fd{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const u=this.elements;return u[0]=e,u[2]=n,u[1]=r,u[3]=o,this}};fd.prototype.isMatrix2=!0;let um=fd;function cm(s,e,n,r){const o=Fv(r);switch(n){case Km:return s*e;case Qm:return s*e/o.components*o.byteLength;case Qf:return s*e/o.components*o.byteLength;case rs:return s*e*2/o.components*o.byteLength;case Jf:return s*e*2/o.components*o.byteLength;case Zm:return s*e*3/o.components*o.byteLength;case mi:return s*e*4/o.components*o.byteLength;case ed:return s*e*4/o.components*o.byteLength;case wl:case Al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cl:case Rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pf:case gf:return Math.max(s,16)*Math.max(e,8)/4;case hf:case mf:return Math.max(s,8)*Math.max(e,8)/2;case _f:case vf:case Sf:case yf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xf:case Pl:case Mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case wf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Af:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case bf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Lf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Df:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case If:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ff:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Of:case Bf:case kf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case zf:case Vf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ll:case Hf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Fv(s){switch(s){case ti:case Ym:return{byteLength:1,components:1};case Xa:case qm:case nr:return{byteLength:2,components:1};case Kf:case Zf:return{byteLength:2,components:4};case Di:case jf:case Ci:return{byteLength:4,components:1};case $m:case jm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$f}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$f);function fg(){let s=null,e=!1,n=null,r=null;function o(u,c){n(u,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function Ov(s){const e=new WeakMap;function n(h,m){const p=h.array,x=h.usage,S=p.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,p,x),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:S}}function r(h,m,p){const x=m.array,S=m.updateRanges;if(s.bindBuffer(p,h),S.length===0)s.bufferSubData(p,0,x);else{S.sort((M,A)=>M.start-A.start);let g=0;for(let M=1;M<S.length;M++){const A=S[g],b=S[M];b.start<=A.start+A.count+1?A.count=Math.max(A.count,b.start+b.count-A.start):(++g,S[g]=b)}S.length=g+1;for(let M=0,A=S.length;M<A;M++){const b=S[M];s.bufferSubData(p,b.start*x.BYTES_PER_ELEMENT,x,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function c(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:o,remove:u,update:c}}var Bv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,qv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ox=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ux=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,px="gl_FragColor = linearToOutputTexel( gl_FragColor );",mx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Px=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ix=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ux=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ox=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$x=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,pS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_S=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,yS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,MS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ES=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,RS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,XS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,YS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ey=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ty=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ny=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ry=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ay=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ly=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,py=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,my=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_y=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:Bv,alphahash_pars_fragment:kv,alphamap_fragment:zv,alphamap_pars_fragment:Vv,alphatest_fragment:Hv,alphatest_pars_fragment:Gv,aomap_fragment:Wv,aomap_pars_fragment:Xv,batching_pars_vertex:Yv,batching_vertex:qv,begin_vertex:$v,beginnormal_vertex:jv,bsdfs:Kv,iridescence_fragment:Zv,bumpmap_pars_fragment:Qv,clipping_planes_fragment:Jv,clipping_planes_pars_fragment:ex,clipping_planes_pars_vertex:tx,clipping_planes_vertex:nx,color_fragment:ix,color_pars_fragment:rx,color_pars_vertex:sx,color_vertex:ax,common:ox,cube_uv_reflection_fragment:lx,defaultnormal_vertex:ux,displacementmap_pars_vertex:cx,displacementmap_vertex:fx,emissivemap_fragment:dx,emissivemap_pars_fragment:hx,colorspace_fragment:px,colorspace_pars_fragment:mx,envmap_fragment:gx,envmap_common_pars_fragment:_x,envmap_pars_fragment:vx,envmap_pars_vertex:xx,envmap_physical_pars_fragment:Px,envmap_vertex:Sx,fog_vertex:yx,fog_pars_vertex:Mx,fog_fragment:Ex,fog_pars_fragment:Tx,gradientmap_pars_fragment:wx,lightmap_pars_fragment:Ax,lights_lambert_fragment:Cx,lights_lambert_pars_fragment:Rx,lights_pars_begin:bx,lights_toon_fragment:Lx,lights_toon_pars_fragment:Dx,lights_phong_fragment:Nx,lights_phong_pars_fragment:Ix,lights_physical_fragment:Ux,lights_physical_pars_fragment:Fx,lights_fragment_begin:Ox,lights_fragment_maps:Bx,lights_fragment_end:kx,lightprobes_pars_fragment:zx,logdepthbuf_fragment:Vx,logdepthbuf_pars_fragment:Hx,logdepthbuf_pars_vertex:Gx,logdepthbuf_vertex:Wx,map_fragment:Xx,map_pars_fragment:Yx,map_particle_fragment:qx,map_particle_pars_fragment:$x,metalnessmap_fragment:jx,metalnessmap_pars_fragment:Kx,morphinstance_vertex:Zx,morphcolor_vertex:Qx,morphnormal_vertex:Jx,morphtarget_pars_vertex:eS,morphtarget_vertex:tS,normal_fragment_begin:nS,normal_fragment_maps:iS,normal_pars_fragment:rS,normal_pars_vertex:sS,normal_vertex:aS,normalmap_pars_fragment:oS,clearcoat_normal_fragment_begin:lS,clearcoat_normal_fragment_maps:uS,clearcoat_pars_fragment:cS,iridescence_pars_fragment:fS,opaque_fragment:dS,packing:hS,premultiplied_alpha_fragment:pS,project_vertex:mS,dithering_fragment:gS,dithering_pars_fragment:_S,roughnessmap_fragment:vS,roughnessmap_pars_fragment:xS,shadowmap_pars_fragment:SS,shadowmap_pars_vertex:yS,shadowmap_vertex:MS,shadowmask_pars_fragment:ES,skinbase_vertex:TS,skinning_pars_vertex:wS,skinning_vertex:AS,skinnormal_vertex:CS,specularmap_fragment:RS,specularmap_pars_fragment:bS,tonemapping_fragment:PS,tonemapping_pars_fragment:LS,transmission_fragment:DS,transmission_pars_fragment:NS,uv_pars_fragment:IS,uv_pars_vertex:US,uv_vertex:FS,worldpos_vertex:OS,background_vert:BS,background_frag:kS,backgroundCube_vert:zS,backgroundCube_frag:VS,cube_vert:HS,cube_frag:GS,depth_vert:WS,depth_frag:XS,distance_vert:YS,distance_frag:qS,equirect_vert:$S,equirect_frag:jS,linedashed_vert:KS,linedashed_frag:ZS,meshbasic_vert:QS,meshbasic_frag:JS,meshlambert_vert:ey,meshlambert_frag:ty,meshmatcap_vert:ny,meshmatcap_frag:iy,meshnormal_vert:ry,meshnormal_frag:sy,meshphong_vert:ay,meshphong_frag:oy,meshphysical_vert:ly,meshphysical_frag:uy,meshtoon_vert:cy,meshtoon_frag:fy,points_vert:dy,points_frag:hy,shadow_vert:py,shadow_frag:my,sprite_vert:gy,sprite_frag:_y},De={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ne},probesMax:{value:new ne},probesResolution:{value:new ne}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ai={basic:{uniforms:An([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:An([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:An([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:An([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:An([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Pt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:An([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:An([De.points,De.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:An([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:An([De.common,De.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:An([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:An([De.sprite,De.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:An([De.common,De.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:An([De.lights,De.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ai.physical={uniforms:An([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Ml={r:0,b:0,g:0},vy=new rn,dg=new lt;dg.set(-1,0,0,0,1,0,0,0,1);function xy(s,e,n,r,o,u){const c=new Pt(0);let h=o===!0?0:1,m,p,x=null,S=0,g=null;function M(R){let N=R.isScene===!0?R.background:null;if(N&&N.isTexture){const L=R.backgroundBlurriness>0;N=e.get(N,L)}return N}function A(R){let N=!1;const L=M(R);L===null?v(c,h):L&&L.isColor&&(v(L,1),N=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?n.buffers.color.setClear(0,0,0,1,u):H==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(s.autoClear||N)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(R,N){const L=M(N);L&&(L.isCubeTexture||L.mapping===Ol)?(p===void 0&&(p=new Ni(new ja(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Zs(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(H,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=L,p.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(vy.makeRotationFromEuler(N.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(dg),p.material.toneMapped=_t.getTransfer(L.colorSpace)!==bt,(x!==L||S!==L.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,x=L,S=L.version,g=s.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new Ni(new Ka(2,2),new _i({name:"BackgroundMaterial",uniforms:Zs(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=_t.getTransfer(L.colorSpace)!==bt,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(x!==L||S!==L.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,x=L,S=L.version,g=s.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function v(R,N){R.getRGB(Ml,ug(s)),n.buffers.color.setClear(Ml.r,Ml.g,Ml.b,N,u)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,N=1){c.set(R),h=N,v(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,v(c,h)},render:A,addToRenderList:b,dispose:_}}function Sy(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let u=o,c=!1;function h(O,K,ue,ce,W){let Q=!1;const j=S(O,ce,ue,K);u!==j&&(u=j,p(u.object)),Q=M(O,ce,ue,W),Q&&A(O,ce,ue,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(Q||c)&&(c=!1,L(O,K,ue,ce),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function m(){return s.createVertexArray()}function p(O){return s.bindVertexArray(O)}function x(O){return s.deleteVertexArray(O)}function S(O,K,ue,ce){const W=ce.wireframe===!0;let Q=r[K.id];Q===void 0&&(Q={},r[K.id]=Q);const j=O.isInstancedMesh===!0?O.id:0;let Y=Q[j];Y===void 0&&(Y={},Q[j]=Y);let le=Y[ue.id];le===void 0&&(le={},Y[ue.id]=le);let oe=le[W];return oe===void 0&&(oe=g(m()),le[W]=oe),oe}function g(O){const K=[],ue=[],ce=[];for(let W=0;W<n;W++)K[W]=0,ue[W]=0,ce[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ue,attributeDivisors:ce,object:O,attributes:{},index:null}}function M(O,K,ue,ce){const W=u.attributes,Q=K.attributes;let j=0;const Y=ue.getAttributes();for(const le in Y)if(Y[le].location>=0){const U=W[le];let J=Q[le];if(J===void 0&&(le==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),le==="instanceColor"&&O.instanceColor&&(J=O.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;j++}return u.attributesNum!==j||u.index!==ce}function A(O,K,ue,ce){const W={},Q=K.attributes;let j=0;const Y=ue.getAttributes();for(const le in Y)if(Y[le].location>=0){let U=Q[le];U===void 0&&(le==="instanceMatrix"&&O.instanceMatrix&&(U=O.instanceMatrix),le==="instanceColor"&&O.instanceColor&&(U=O.instanceColor));const J={};J.attribute=U,U&&U.data&&(J.data=U.data),W[le]=J,j++}u.attributes=W,u.attributesNum=j,u.index=ce}function b(){const O=u.newAttributes;for(let K=0,ue=O.length;K<ue;K++)O[K]=0}function v(O){_(O,0)}function _(O,K){const ue=u.newAttributes,ce=u.enabledAttributes,W=u.attributeDivisors;ue[O]=1,ce[O]===0&&(s.enableVertexAttribArray(O),ce[O]=1),W[O]!==K&&(s.vertexAttribDivisor(O,K),W[O]=K)}function R(){const O=u.newAttributes,K=u.enabledAttributes;for(let ue=0,ce=K.length;ue<ce;ue++)K[ue]!==O[ue]&&(s.disableVertexAttribArray(ue),K[ue]=0)}function N(O,K,ue,ce,W,Q,j){j===!0?s.vertexAttribIPointer(O,K,ue,W,Q):s.vertexAttribPointer(O,K,ue,ce,W,Q)}function L(O,K,ue,ce){b();const W=ce.attributes,Q=ue.getAttributes(),j=K.defaultAttributeValues;for(const Y in Q){const le=Q[Y];if(le.location>=0){let oe=W[Y];if(oe===void 0&&(Y==="instanceMatrix"&&O.instanceMatrix&&(oe=O.instanceMatrix),Y==="instanceColor"&&O.instanceColor&&(oe=O.instanceColor)),oe!==void 0){const U=oe.normalized,J=oe.itemSize,Fe=e.get(oe);if(Fe===void 0)continue;const He=Fe.buffer,Ne=Fe.type,se=Fe.bytesPerElement,Se=Ne===s.INT||Ne===s.UNSIGNED_INT||oe.gpuType===jf;if(oe.isInterleavedBufferAttribute){const me=oe.data,Ie=me.stride,Ze=oe.offset;if(me.isInstancedInterleavedBuffer){for(let Qe=0;Qe<le.locationSize;Qe++)_(le.location+Qe,me.meshPerAttribute);O.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Qe=0;Qe<le.locationSize;Qe++)v(le.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,He);for(let Qe=0;Qe<le.locationSize;Qe++)N(le.location+Qe,J/le.locationSize,Ne,U,Ie*se,(Ze+J/le.locationSize*Qe)*se,Se)}else{if(oe.isInstancedBufferAttribute){for(let me=0;me<le.locationSize;me++)_(le.location+me,oe.meshPerAttribute);O.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let me=0;me<le.locationSize;me++)v(le.location+me);s.bindBuffer(s.ARRAY_BUFFER,He);for(let me=0;me<le.locationSize;me++)N(le.location+me,J/le.locationSize,Ne,U,J*se,J/le.locationSize*me*se,Se)}}else if(j!==void 0){const U=j[Y];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(le.location,U);break;case 3:s.vertexAttrib3fv(le.location,U);break;case 4:s.vertexAttrib4fv(le.location,U);break;default:s.vertexAttrib1fv(le.location,U)}}}}R()}function H(){I();for(const O in r){const K=r[O];for(const ue in K){const ce=K[ue];for(const W in ce){const Q=ce[W];for(const j in Q)x(Q[j].object),delete Q[j];delete ce[W]}}delete r[O]}}function P(O){if(r[O.id]===void 0)return;const K=r[O.id];for(const ue in K){const ce=K[ue];for(const W in ce){const Q=ce[W];for(const j in Q)x(Q[j].object),delete Q[j];delete ce[W]}}delete r[O.id]}function k(O){for(const K in r){const ue=r[K];for(const ce in ue){const W=ue[ce];if(W[O.id]===void 0)continue;const Q=W[O.id];for(const j in Q)x(Q[j].object),delete Q[j];delete W[O.id]}}}function w(O){for(const K in r){const ue=r[K],ce=O.isInstancedMesh===!0?O.id:0,W=ue[ce];if(W!==void 0){for(const Q in W){const j=W[Q];for(const Y in j)x(j[Y].object),delete j[Y];delete W[Q]}delete ue[ce],Object.keys(ue).length===0&&delete r[K]}}}function I(){X(),c=!0,u!==o&&(u=o,p(u.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:I,resetDefaultState:X,dispose:H,releaseStatesOfGeometry:P,releaseStatesOfObject:w,releaseStatesOfProgram:k,initAttributes:b,enableAttribute:v,disableUnusedAttributes:R}}function yy(s,e,n){let r;function o(m){r=m}function u(m,p){s.drawArrays(r,m,p),n.update(p,r,1)}function c(m,p,x){x!==0&&(s.drawArraysInstanced(r,m,p,x),n.update(p,r,x))}function h(m,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,x);let g=0;for(let M=0;M<x;M++)g+=p[M];n.update(g,r,1)}this.setMode=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=h}function My(s,e,n,r){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(k){return!(k!==mi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(k){const w=k===nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==ti&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Ci&&!w)}function m(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const x=m(p);x!==p&&(it("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const S=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:c,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:A,maxTextureSize:b,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:R,maxVaryings:N,maxFragmentUniforms:L,maxSamples:H,samples:P}}function Ey(s){const e=this;let n=null,r=0,o=!1,u=!1;const c=new Qr,h=new lt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const M=S.length!==0||g||r!==0||o;return o=g,r=S.length,M},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,g){n=x(S,g,0)},this.setState=function(S,g,M){const A=S.clippingPlanes,b=S.clipIntersection,v=S.clipShadows,_=s.get(S);if(!o||A===null||A.length===0||u&&!v)u?x(null):p();else{const R=u?0:r,N=R*4;let L=_.clippingState||null;m.value=L,L=x(A,g,N,M);for(let H=0;H!==N;++H)L[H]=n[H];_.clippingState=L,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=R}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(S,g,M,A){const b=S!==null?S.length:0;let v=null;if(b!==0){if(v=m.value,A!==!0||v===null){const _=M+b*4,R=g.matrixWorldInverse;h.getNormalMatrix(R),(v===null||v.length<_)&&(v=new Float32Array(_));for(let N=0,L=M;N!==b;++N,L+=4)c.copy(S[N]).applyMatrix4(R,h),c.normal.toArray(v,L),v[L+3]=c.constant}m.value=v,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,v}}const Lr=4,fm=[.125,.215,.35,.446,.526,.582],es=20,Ty=256,Va=new sd,dm=new Pt;let jc=null,Kc=0,Zc=0,Qc=!1;const wy=new ne;class hm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,u={}){const{size:c=256,position:h=wy}=u;jc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jc,Kc,Zc),this._renderer.xr.enabled=Qc,e.scissorTest=!1,Xs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===is||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:nr,format:mi,colorSpace:Dl,depthBuffer:!1},o=pm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pm(e,n,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ay(u)),this._blurMaterial=Ry(u,e,n),this._ggxMaterial=Cy(u,e,n)}return o}_compileMaterial(e){const n=new Ni(new rr,e);this._renderer.compile(n,Va)}_sceneToCubeUV(e,n,r,o,u){const m=new hi(90,1,n,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,M=S.toneMapping;S.getClearColor(dm),S.toneMapping=bi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new ja,new sg({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,v=b.material;let _=!1;const R=e.background;R?R.isColor&&(v.color.copy(R),e.background=null,_=!0):(v.color.copy(dm),_=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[N],u.y,u.z)):L===1?(m.up.set(0,0,p[N]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[N],u.z)):(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[N]));const H=this._cubeSize;Xs(o,L*H,N>2?H:0,H,H),S.setRenderTarget(o),_&&S.render(b,m),S.render(e,m)}S.toneMapping=M,S.autoClear=g,e.background=R}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===is||e.mapping===js;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=gm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mm());const u=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=u;const h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;Xs(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(c,Va)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let u=1;u<o;u++)this._applyGGXFilter(e,u-1,u);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,u=this._pingPongRenderTarget,c=this._ggxMaterial,h=this._lodMeshes[r];h.material=c;const m=c.uniforms,p=r/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),S=Math.sqrt(p*p-x*x),g=0+p*1.25,M=S*g,{_lodMax:A}=this,b=this._sizeLods[r],v=3*b*(r>A-Lr?r-A+Lr:0),_=4*(this._cubeSize-b);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=A-n,Xs(u,v,_,3*b,2*b),o.setRenderTarget(u),o.render(h,Va),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-r,Xs(e,v,_,3*b,2*b),o.setRenderTarget(e),o.render(h,Va)}_blur(e,n,r,o,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,o,"latitudinal",u),this._halfBlur(c,e,r,r,o,"longitudinal",u)}_halfBlur(e,n,r,o,u,c,h){const m=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&yt("blur direction must be either latitudinal or longitudinal!");const x=3,S=this._lodMeshes[o];S.material=p;const g=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*es-1),b=u/A,v=isFinite(u)?1+Math.floor(x*b):es;v>es&&it(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${es}`);const _=[];let R=0;for(let k=0;k<es;++k){const w=k/b,I=Math.exp(-w*w/2);_.push(I),k===0?R+=I:k<v&&(R+=2*I)}for(let k=0;k<_.length;k++)_[k]=_[k]/R;g.envMap.value=e.texture,g.samples.value=v,g.weights.value=_,g.latitudinal.value=c==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:N}=this;g.dTheta.value=A,g.mipInt.value=N-r;const L=this._sizeLods[o],H=3*L*(o>N-Lr?o-N+Lr:0),P=4*(this._cubeSize-L);Xs(n,H,P,3*L,2*L),m.setRenderTarget(n),m.render(S,Va)}}function Ay(s){const e=[],n=[],r=[];let o=s;const u=s-Lr+1+fm.length;for(let c=0;c<u;c++){const h=Math.pow(2,o);e.push(h);let m=1/h;c>s-Lr?m=fm[c-s+Lr-1]:c===0&&(m=0),n.push(m);const p=1/(h-2),x=-p,S=1+p,g=[x,x,S,x,S,S,x,x,S,S,x,S],M=6,A=6,b=3,v=2,_=1,R=new Float32Array(b*A*M),N=new Float32Array(v*A*M),L=new Float32Array(_*A*M);for(let P=0;P<M;P++){const k=P%3*2/3-1,w=P>2?0:-1,I=[k,w,0,k+2/3,w,0,k+2/3,w+1,0,k,w,0,k+2/3,w+1,0,k,w+1,0];R.set(I,b*A*P),N.set(g,v*A*P);const X=[P,P,P,P,P,P];L.set(X,_*A*P)}const H=new rr;H.setAttribute("position",new Li(R,b)),H.setAttribute("uv",new Li(N,v)),H.setAttribute("faceIndex",new Li(L,_)),r.push(new Ni(H,null)),o>Lr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function pm(s,e,n){const r=new Pi(s,e,n);return r.texture.mapping=Ol,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Xs(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function Cy(s,e,n){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ty,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Ry(s,e,n){const r=new Float32Array(es),o=new ne(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function mm(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function gm(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function kl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class hg extends Pi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new og(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ja(5,5,5),u=new _i({name:"CubemapFromEquirect",uniforms:Zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Ji});u.uniforms.tEquirect.value=n;const c=new Ni(o,u),h=n.minFilter;return n.minFilter===ts&&(n.minFilter=Mn),new Iv(1,10,this).update(e,c),n.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,o);e.setRenderTarget(u)}}function by(s){let e=new WeakMap,n=new WeakMap,r=null;function o(g,M=!1){return g==null?null:M?c(g):u(g)}function u(g){if(g&&g.isTexture){const M=g.mapping;if(M===Mc||M===Ec)if(e.has(g)){const A=e.get(g).texture;return h(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const b=new hg(A.height);return b.fromEquirectangularTexture(s,g),e.set(g,b),g.addEventListener("dispose",p),h(b.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const M=g.mapping,A=M===Mc||M===Ec,b=M===is||M===js;if(A||b){let v=n.get(g);const _=v!==void 0?v.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return r===null&&(r=new hm(s)),v=A?r.fromEquirectangular(g,v):r.fromCubemap(g,v),v.texture.pmremVersion=g.pmremVersion,n.set(g,v),v.texture;if(v!==void 0)return v.texture;{const R=g.image;return A&&R&&R.height>0||b&&R&&m(R)?(r===null&&(r=new hm(s)),v=A?r.fromEquirectangular(g):r.fromCubemap(g),v.texture.pmremVersion=g.pmremVersion,n.set(g,v),g.addEventListener("dispose",x),v.texture):null}}}return g}function h(g,M){return M===Mc?g.mapping=is:M===Ec&&(g.mapping=js),g}function m(g){let M=0;const A=6;for(let b=0;b<A;b++)g[b]!==void 0&&M++;return M===A}function p(g){const M=g.target;M.removeEventListener("dispose",p);const A=e.get(M);A!==void 0&&(e.delete(M),A.dispose())}function x(g){const M=g.target;M.removeEventListener("dispose",x);const A=n.get(M);A!==void 0&&(n.delete(M),A.dispose())}function S(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function Py(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Gf("WebGLRenderer: "+r+" extension not supported."),o}}}function Ly(s,e,n,r){const o={},u=new WeakMap;function c(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const A in g.attributes)e.remove(g.attributes[A]);g.removeEventListener("dispose",c),delete o[g.id];const M=u.get(g);M&&(e.remove(M),u.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function h(S,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,n.memory.geometries++),g}function m(S){const g=S.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function p(S){const g=[],M=S.index,A=S.attributes.position;let b=0;if(A===void 0)return;if(M!==null){const R=M.array;b=M.version;for(let N=0,L=R.length;N<L;N+=3){const H=R[N+0],P=R[N+1],k=R[N+2];g.push(H,P,P,k,k,H)}}else{const R=A.array;b=A.version;for(let N=0,L=R.length/3-1;N<L;N+=3){const H=N+0,P=N+1,k=N+2;g.push(H,P,P,k,k,H)}}const v=new(A.count>=65535?rg:ig)(g,1);v.version=b;const _=u.get(S);_&&e.remove(_),u.set(S,v)}function x(S){const g=u.get(S);if(g){const M=S.index;M!==null&&g.version<M.version&&p(S)}else p(S);return u.get(S)}return{get:h,update:m,getWireframeAttribute:x}}function Dy(s,e,n){let r;function o(S){r=S}let u,c;function h(S){u=S.type,c=S.bytesPerElement}function m(S,g){s.drawElements(r,g,u,S*c),n.update(g,r,1)}function p(S,g,M){M!==0&&(s.drawElementsInstanced(r,g,u,S*c,M),n.update(g,r,M))}function x(S,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,u,S,0,M);let b=0;for(let v=0;v<M;v++)b+=g[v];n.update(b,r,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x}function Ny(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,h){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=h*(u/3);break;case s.LINES:n.lines+=h*(u/2);break;case s.LINE_STRIP:n.lines+=h*(u-1);break;case s.LINE_LOOP:n.lines+=h*u;break;case s.POINTS:n.points+=h*u;break;default:yt("WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function Iy(s,e,n){const r=new WeakMap,o=new Zt;function u(c,h,m){const p=c.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,S=x!==void 0?x.length:0;let g=r.get(h);if(g===void 0||g.count!==S){let I=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",I)};g!==void 0&&g.texture.dispose();const M=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],_=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let N=0;M===!0&&(N=1),A===!0&&(N=2),b===!0&&(N=3);let L=h.attributes.position.count*N,H=1;L>e.maxTextureSize&&(H=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const P=new Float32Array(L*H*4*S),k=new eg(P,L,H,S);k.type=Ci,k.needsUpdate=!0;const w=N*4;for(let X=0;X<S;X++){const O=v[X],K=_[X],ue=R[X],ce=L*H*4*X;for(let W=0;W<O.count;W++){const Q=W*w;M===!0&&(o.fromBufferAttribute(O,W),P[ce+Q+0]=o.x,P[ce+Q+1]=o.y,P[ce+Q+2]=o.z,P[ce+Q+3]=0),A===!0&&(o.fromBufferAttribute(K,W),P[ce+Q+4]=o.x,P[ce+Q+5]=o.y,P[ce+Q+6]=o.z,P[ce+Q+7]=0),b===!0&&(o.fromBufferAttribute(ue,W),P[ce+Q+8]=o.x,P[ce+Q+9]=o.y,P[ce+Q+10]=o.z,P[ce+Q+11]=ue.itemSize===4?o.w:1)}}g={count:S,texture:k,size:new Lt(L,H)},r.set(h,g),h.addEventListener("dispose",I)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let M=0;for(let b=0;b<p.length;b++)M+=p[b];const A=h.morphTargetsRelative?1:1-M;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:u}}function Uy(s,e,n,r,o){let u=new WeakMap;function c(p){const x=o.render.frame,S=p.geometry,g=e.get(p,S);if(u.get(g)!==x&&(e.update(g),u.set(g,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),u.get(p)!==x&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),u.set(p,x))),p.isSkinnedMesh){const M=p.skeleton;u.get(M)!==x&&(M.update(),u.set(M,x))}return g}function h(){u=new WeakMap}function m(p){const x=p.target;x.removeEventListener("dispose",m),r.releaseStatesOfObject(x),n.remove(x.instanceMatrix),x.instanceColor!==null&&n.remove(x.instanceColor)}return{update:c,dispose:h}}const Fy={[Bm]:"LINEAR_TONE_MAPPING",[km]:"REINHARD_TONE_MAPPING",[zm]:"CINEON_TONE_MAPPING",[Vm]:"ACES_FILMIC_TONE_MAPPING",[Gm]:"AGX_TONE_MAPPING",[Wm]:"NEUTRAL_TONE_MAPPING",[Hm]:"CUSTOM_TONE_MAPPING"};function Oy(s,e,n,r,o){const u=new Pi(e,n,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new Ks(e,n):void 0}),c=new Pi(e,n,{type:nr,depthBuffer:!1,stencilBuffer:!1}),h=new rr;h.setAttribute("position",new tr([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new tr([0,2,0,0,2,0],2));const m=new Lv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Ni(h,m),x=new sd(-1,1,1,-1,0,1);let S=null,g=null,M=!1,A,b=null,v=[],_=!1;this.setSize=function(R,N){u.setSize(R,N),c.setSize(R,N);for(let L=0;L<v.length;L++){const H=v[L];H.setSize&&H.setSize(R,N)}},this.setEffects=function(R){v=R,_=v.length>0&&v[0].isRenderPass===!0;const N=u.width,L=u.height;for(let H=0;H<v.length;H++){const P=v[H];P.setSize&&P.setSize(N,L)}},this.begin=function(R,N){if(M||R.toneMapping===bi&&v.length===0)return!1;if(b=N,N!==null){const L=N.width,H=N.height;(u.width!==L||u.height!==H)&&this.setSize(L,H)}return _===!1&&R.setRenderTarget(u),A=R.toneMapping,R.toneMapping=bi,!0},this.hasRenderPass=function(){return _},this.end=function(R,N){R.toneMapping=A,M=!0;let L=u,H=c;for(let P=0;P<v.length;P++){const k=v[P];if(k.enabled!==!1&&(k.render(R,H,L,N),k.needsSwap!==!1)){const w=L;L=H,H=w}}if(S!==R.outputColorSpace||g!==R.toneMapping){S=R.outputColorSpace,g=R.toneMapping,m.defines={},_t.getTransfer(S)===bt&&(m.defines.SRGB_TRANSFER="");const P=Fy[g];P&&(m.defines[P]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,R.setRenderTarget(b),R.render(p,x),b=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),c.dispose(),h.dispose(),m.dispose()}}const pg=new Rn,Xf=new Ks(1,1),mg=new eg,gg=new ov,_g=new og,_m=[],vm=[],xm=new Float32Array(16),Sm=new Float32Array(9),ym=new Float32Array(4);function Js(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let u=_m[o];if(u===void 0&&(u=new Float32Array(o),_m[o]=u),e!==0){r.toArray(u,0);for(let c=1,h=0;c!==e;++c)h+=n,s[c].toArray(u,h)}return u}function sn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function an(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function zl(s,e){let n=vm[e];n===void 0&&(n=new Int32Array(e),vm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function By(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function ky(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;s.uniform2fv(this.addr,e),an(n,e)}}function zy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(sn(n,e))return;s.uniform3fv(this.addr,e),an(n,e)}}function Vy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;s.uniform4fv(this.addr,e),an(n,e)}}function Hy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(sn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),an(n,e)}else{if(sn(n,r))return;ym.set(r),s.uniformMatrix2fv(this.addr,!1,ym),an(n,r)}}function Gy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(sn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),an(n,e)}else{if(sn(n,r))return;Sm.set(r),s.uniformMatrix3fv(this.addr,!1,Sm),an(n,r)}}function Wy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(sn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),an(n,e)}else{if(sn(n,r))return;xm.set(r),s.uniformMatrix4fv(this.addr,!1,xm),an(n,r)}}function Xy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function Yy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;s.uniform2iv(this.addr,e),an(n,e)}}function qy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;s.uniform3iv(this.addr,e),an(n,e)}}function $y(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;s.uniform4iv(this.addr,e),an(n,e)}}function jy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function Ky(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;s.uniform2uiv(this.addr,e),an(n,e)}}function Zy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;s.uniform3uiv(this.addr,e),an(n,e)}}function Qy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;s.uniform4uiv(this.addr,e),an(n,e)}}function Jy(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let u;this.type===s.SAMPLER_2D_SHADOW?(Xf.compareFunction=n.isReversedDepthBuffer()?nd:td,u=Xf):u=pg,n.setTexture2D(e||u,o)}function eM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||gg,o)}function tM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||_g,o)}function nM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||mg,o)}function iM(s){switch(s){case 5126:return By;case 35664:return ky;case 35665:return zy;case 35666:return Vy;case 35674:return Hy;case 35675:return Gy;case 35676:return Wy;case 5124:case 35670:return Xy;case 35667:case 35671:return Yy;case 35668:case 35672:return qy;case 35669:case 35673:return $y;case 5125:return jy;case 36294:return Ky;case 36295:return Zy;case 36296:return Qy;case 35678:case 36198:case 36298:case 36306:case 35682:return Jy;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return nM}}function rM(s,e){s.uniform1fv(this.addr,e)}function sM(s,e){const n=Js(e,this.size,2);s.uniform2fv(this.addr,n)}function aM(s,e){const n=Js(e,this.size,3);s.uniform3fv(this.addr,n)}function oM(s,e){const n=Js(e,this.size,4);s.uniform4fv(this.addr,n)}function lM(s,e){const n=Js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function uM(s,e){const n=Js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function cM(s,e){const n=Js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function fM(s,e){s.uniform1iv(this.addr,e)}function dM(s,e){s.uniform2iv(this.addr,e)}function hM(s,e){s.uniform3iv(this.addr,e)}function pM(s,e){s.uniform4iv(this.addr,e)}function mM(s,e){s.uniform1uiv(this.addr,e)}function gM(s,e){s.uniform2uiv(this.addr,e)}function _M(s,e){s.uniform3uiv(this.addr,e)}function vM(s,e){s.uniform4uiv(this.addr,e)}function xM(s,e,n){const r=this.cache,o=e.length,u=zl(n,o);sn(r,u)||(s.uniform1iv(this.addr,u),an(r,u));let c;this.type===s.SAMPLER_2D_SHADOW?c=Xf:c=pg;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||c,u[h])}function SM(s,e,n){const r=this.cache,o=e.length,u=zl(n,o);sn(r,u)||(s.uniform1iv(this.addr,u),an(r,u));for(let c=0;c!==o;++c)n.setTexture3D(e[c]||gg,u[c])}function yM(s,e,n){const r=this.cache,o=e.length,u=zl(n,o);sn(r,u)||(s.uniform1iv(this.addr,u),an(r,u));for(let c=0;c!==o;++c)n.setTextureCube(e[c]||_g,u[c])}function MM(s,e,n){const r=this.cache,o=e.length,u=zl(n,o);sn(r,u)||(s.uniform1iv(this.addr,u),an(r,u));for(let c=0;c!==o;++c)n.setTexture2DArray(e[c]||mg,u[c])}function EM(s){switch(s){case 5126:return rM;case 35664:return sM;case 35665:return aM;case 35666:return oM;case 35674:return lM;case 35675:return uM;case 35676:return cM;case 5124:case 35670:return fM;case 35667:case 35671:return dM;case 35668:case 35672:return hM;case 35669:case 35673:return pM;case 5125:return mM;case 36294:return gM;case 36295:return _M;case 36296:return vM;case 35678:case 36198:case 36298:case 36306:case 35682:return xM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return yM;case 36289:case 36303:case 36311:case 36292:return MM}}class TM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=iM(n.type)}}class wM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=EM(n.type)}}class AM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let u=0,c=o.length;u!==c;++u){const h=o[u];h.setValue(e,n[h.id],r)}}}const Jc=/(\w+)(\])?(\[|\.)?/g;function Mm(s,e){s.seq.push(e),s.map[e.id]=e}function CM(s,e,n){const r=s.name,o=r.length;for(Jc.lastIndex=0;;){const u=Jc.exec(r),c=Jc.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&c+2===o){Mm(n,p===void 0?new TM(h,s,e):new wM(h,s,e));break}else{let S=n.map[h];S===void 0&&(S=new AM(h),Mm(n,S)),n=S}}}class bl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const h=e.getActiveUniform(n,c),m=e.getUniformLocation(n,h.name);CM(h,m,this)}const o=[],u=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):u.push(c);o.length>0&&(this.seq=o.concat(u))}setValue(e,n,r,o){const u=this.map[n];u!==void 0&&u.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let u=0,c=n.length;u!==c;++u){const h=n[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,u=e.length;o!==u;++o){const c=e[o];c.id in n&&r.push(c)}return r}}function Em(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const RM=37297;let bM=0;function PM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let c=o;c<u;c++){const h=c+1;r.push(`${h===e?">":" "} ${h}: ${n[c]}`)}return r.join(`
`)}const Tm=new lt;function LM(s){_t._getMatrix(Tm,_t.workingColorSpace,s);const e=`mat3( ${Tm.elements.map(n=>n.toFixed(4))} )`;switch(_t.getTransfer(s)){case Nl:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function wm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const h=parseInt(c[1]);return n.toUpperCase()+`

`+u+`

`+PM(s.getShaderSource(e),h)}else return u}function DM(s,e){const n=LM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const NM={[Bm]:"Linear",[km]:"Reinhard",[zm]:"Cineon",[Vm]:"ACESFilmic",[Gm]:"AgX",[Wm]:"Neutral",[Hm]:"Custom"};function IM(s,e){const n=NM[e];return n===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const El=new ne;function UM(){_t.getLuminanceCoefficients(El);const s=El.x.toFixed(4),e=El.y.toFixed(4),n=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function OM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function BM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const u=s.getActiveAttrib(e,o),c=u.name;let h=1;u.type===s.FLOAT_MAT2&&(h=2),u.type===s.FLOAT_MAT3&&(h=3),u.type===s.FLOAT_MAT4&&(h=4),n[c]={type:u.type,location:s.getAttribLocation(e,c),locationSize:h}}return n}function Wa(s){return s!==""}function Am(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yf(s){return s.replace(kM,VM)}const zM=new Map;function VM(s,e){let n=dt[e];if(n===void 0){const r=zM.get(e);if(r!==void 0)n=dt[r],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Yf(n)}const HM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rm(s){return s.replace(HM,GM)}function GM(s,e,n,r){let o="";for(let u=parseInt(e);u<parseInt(n);u++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function bm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const WM={[Tl]:"SHADOWMAP_TYPE_PCF",[Ga]:"SHADOWMAP_TYPE_VSM"};function XM(s){return WM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const YM={[is]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[Ol]:"ENVMAP_TYPE_CUBE_UV"};function qM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":YM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const $M={[js]:"ENVMAP_MODE_REFRACTION"};function jM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":$M[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const KM={[Om]:"ENVMAP_BLENDING_MULTIPLY",[z_]:"ENVMAP_BLENDING_MIX",[V_]:"ENVMAP_BLENDING_ADD"};function ZM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":KM[s.combine]||"ENVMAP_BLENDING_NONE"}function QM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function JM(s,e,n,r){const o=s.getContext(),u=n.defines;let c=n.vertexShader,h=n.fragmentShader;const m=XM(n),p=qM(n),x=jM(n),S=ZM(n),g=QM(n),M=FM(n),A=OM(u),b=o.createProgram();let v,_,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Wa).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Wa).join(`
`),_.length>0&&(_+=`
`)):(v=[bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),_=[bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+x:"",n.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==bi?"#define TONE_MAPPING":"",n.toneMapping!==bi?dt.tonemapping_pars_fragment:"",n.toneMapping!==bi?IM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,DM("linearToOutputTexel",n.outputColorSpace),UM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wa).join(`
`)),c=Yf(c),c=Am(c,n),c=Cm(c,n),h=Yf(h),h=Am(h,n),h=Cm(h,n),c=Rm(c),h=Rm(h),n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",n.glslVersion===Gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=R+v+c,L=R+_+h,H=Em(o,o.VERTEX_SHADER,N),P=Em(o,o.FRAGMENT_SHADER,L);o.attachShader(b,H),o.attachShader(b,P),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function k(O){if(s.debug.checkShaderErrors){const K=o.getProgramInfoLog(b)||"",ue=o.getShaderInfoLog(H)||"",ce=o.getShaderInfoLog(P)||"",W=K.trim(),Q=ue.trim(),j=ce.trim();let Y=!0,le=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,b,H,P);else{const oe=wm(o,H,"vertex"),U=wm(o,P,"fragment");yt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+W+`
`+oe+`
`+U)}else W!==""?it("WebGLProgram: Program Info Log:",W):(Q===""||j==="")&&(le=!1);le&&(O.diagnostics={runnable:Y,programLog:W,vertexShader:{log:Q,prefix:v},fragmentShader:{log:j,prefix:_}})}o.deleteShader(H),o.deleteShader(P),w=new bl(o,b),I=BM(o,b)}let w;this.getUniforms=function(){return w===void 0&&k(this),w};let I;this.getAttributes=function(){return I===void 0&&k(this),I};let X=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=o.getProgramParameter(b,RM)),X},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bM++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=H,this.fragmentShader=P,this}let eE=0;class tE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new nE(e),n.set(e,r)),r}}class nE{constructor(e){this.id=eE++,this.code=e,this.usedTimes=0}}function iE(s){return s===rs||s===Pl||s===Ll}function rE(s,e,n,r,o,u){const c=new tg,h=new tE,m=new Set,p=[],x=new Map,S=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return m.add(w),w===0?"uv":`uv${w}`}function b(w,I,X,O,K,ue){const ce=O.fog,W=K.geometry,Q=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,j=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Y=e.get(w.envMap||Q,j),le=Y&&Y.mapping===Ol?Y.image.height:null,oe=M[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&it("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const U=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,J=U!==void 0?U.length:0;let Fe=0;W.morphAttributes.position!==void 0&&(Fe=1),W.morphAttributes.normal!==void 0&&(Fe=2),W.morphAttributes.color!==void 0&&(Fe=3);let He,Ne,se,Se;if(oe){const st=Ai[oe];He=st.vertexShader,Ne=st.fragmentShader}else He=w.vertexShader,Ne=w.fragmentShader,h.update(w),se=h.getVertexShaderID(w),Se=h.getFragmentShaderID(w);const me=s.getRenderTarget(),Ie=s.state.buffers.depth.getReversed(),Ze=K.isInstancedMesh===!0,Qe=K.isBatchedMesh===!0,It=!!w.map,ut=!!w.matcap,Mt=!!Y,Dt=!!w.aoMap,ct=!!w.lightMap,Xt=!!w.bumpMap,Ut=!!w.normalMap,fn=!!w.displacementMap,z=!!w.emissiveMap,Ft=!!w.metalnessMap,ft=!!w.roughnessMap,At=w.anisotropy>0,Le=w.clearcoat>0,kt=w.dispersion>0,C=w.iridescence>0,y=w.sheen>0,q=w.transmission>0,he=At&&!!w.anisotropyMap,ge=Le&&!!w.clearcoatMap,Me=Le&&!!w.clearcoatNormalMap,Pe=Le&&!!w.clearcoatRoughnessMap,fe=C&&!!w.iridescenceMap,pe=C&&!!w.iridescenceThicknessMap,Ue=y&&!!w.sheenColorMap,Be=y&&!!w.sheenRoughnessMap,Ae=!!w.specularMap,Ee=!!w.specularColorMap,tt=!!w.specularIntensityMap,rt=q&&!!w.transmissionMap,ht=q&&!!w.thicknessMap,B=!!w.gradientMap,we=!!w.alphaMap,de=w.alphaTest>0,Oe=!!w.alphaHash,Re=!!w.extensions;let _e=bi;w.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(_e=s.toneMapping);const Xe={shaderID:oe,shaderType:w.type,shaderName:w.name,vertexShader:He,fragmentShader:Ne,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:Se,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:Qe,batchingColor:Qe&&K._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&K.instanceColor!==null,instancingMorph:Ze&&K.morphTexture!==null,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:It,matcap:ut,envMap:Mt,envMapMode:Mt&&Y.mapping,envMapCubeUVHeight:le,aoMap:Dt,lightMap:ct,bumpMap:Xt,normalMap:Ut,displacementMap:fn,emissiveMap:z,normalMapObjectSpace:Ut&&w.normalMapType===W_,normalMapTangentSpace:Ut&&w.normalMapType===zp,packedNormalMap:Ut&&w.normalMapType===zp&&iE(w.normalMap.format),metalnessMap:Ft,roughnessMap:ft,anisotropy:At,anisotropyMap:he,clearcoat:Le,clearcoatMap:ge,clearcoatNormalMap:Me,clearcoatRoughnessMap:Pe,dispersion:kt,iridescence:C,iridescenceMap:fe,iridescenceThicknessMap:pe,sheen:y,sheenColorMap:Ue,sheenRoughnessMap:Be,specularMap:Ae,specularColorMap:Ee,specularIntensityMap:tt,transmission:q,transmissionMap:rt,thicknessMap:ht,gradientMap:B,opaque:w.transparent===!1&&w.blending===Ys&&w.alphaToCoverage===!1,alphaMap:we,alphaTest:de,alphaHash:Oe,combine:w.combine,mapUv:It&&A(w.map.channel),aoMapUv:Dt&&A(w.aoMap.channel),lightMapUv:ct&&A(w.lightMap.channel),bumpMapUv:Xt&&A(w.bumpMap.channel),normalMapUv:Ut&&A(w.normalMap.channel),displacementMapUv:fn&&A(w.displacementMap.channel),emissiveMapUv:z&&A(w.emissiveMap.channel),metalnessMapUv:Ft&&A(w.metalnessMap.channel),roughnessMapUv:ft&&A(w.roughnessMap.channel),anisotropyMapUv:he&&A(w.anisotropyMap.channel),clearcoatMapUv:ge&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:Me&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:Be&&A(w.sheenRoughnessMap.channel),specularMapUv:Ae&&A(w.specularMap.channel),specularColorMapUv:Ee&&A(w.specularColorMap.channel),specularIntensityMapUv:tt&&A(w.specularIntensityMap.channel),transmissionMapUv:rt&&A(w.transmissionMap.channel),thicknessMapUv:ht&&A(w.thicknessMap.channel),alphaMapUv:we&&A(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ut||At),vertexNormals:!!W.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!W.attributes.uv&&(It||we),fog:!!ce,useFog:w.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||W.attributes.normal===void 0&&Ut===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ie,skinning:K.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Fe,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:It&&w.map.isVideoTexture===!0&&_t.getTransfer(w.map.colorSpace)===bt,decodeVideoTextureEmissive:z&&w.emissiveMap.isVideoTexture===!0&&_t.getTransfer(w.emissiveMap.colorSpace)===bt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Zi,flipSided:w.side===Bn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Re&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&w.extensions.multiDraw===!0||Qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Xe.vertexUv1s=m.has(1),Xe.vertexUv2s=m.has(2),Xe.vertexUv3s=m.has(3),m.clear(),Xe}function v(w){const I=[];if(w.shaderID?I.push(w.shaderID):(I.push(w.customVertexShaderID),I.push(w.customFragmentShaderID)),w.defines!==void 0)for(const X in w.defines)I.push(X),I.push(w.defines[X]);return w.isRawShaderMaterial===!1&&(_(I,w),R(I,w),I.push(s.outputColorSpace)),I.push(w.customProgramCacheKey),I.join()}function _(w,I){w.push(I.precision),w.push(I.outputColorSpace),w.push(I.envMapMode),w.push(I.envMapCubeUVHeight),w.push(I.mapUv),w.push(I.alphaMapUv),w.push(I.lightMapUv),w.push(I.aoMapUv),w.push(I.bumpMapUv),w.push(I.normalMapUv),w.push(I.displacementMapUv),w.push(I.emissiveMapUv),w.push(I.metalnessMapUv),w.push(I.roughnessMapUv),w.push(I.anisotropyMapUv),w.push(I.clearcoatMapUv),w.push(I.clearcoatNormalMapUv),w.push(I.clearcoatRoughnessMapUv),w.push(I.iridescenceMapUv),w.push(I.iridescenceThicknessMapUv),w.push(I.sheenColorMapUv),w.push(I.sheenRoughnessMapUv),w.push(I.specularMapUv),w.push(I.specularColorMapUv),w.push(I.specularIntensityMapUv),w.push(I.transmissionMapUv),w.push(I.thicknessMapUv),w.push(I.combine),w.push(I.fogExp2),w.push(I.sizeAttenuation),w.push(I.morphTargetsCount),w.push(I.morphAttributeCount),w.push(I.numDirLights),w.push(I.numPointLights),w.push(I.numSpotLights),w.push(I.numSpotLightMaps),w.push(I.numHemiLights),w.push(I.numRectAreaLights),w.push(I.numDirLightShadows),w.push(I.numPointLightShadows),w.push(I.numSpotLightShadows),w.push(I.numSpotLightShadowsWithMaps),w.push(I.numLightProbes),w.push(I.shadowMapType),w.push(I.toneMapping),w.push(I.numClippingPlanes),w.push(I.numClipIntersection),w.push(I.depthPacking)}function R(w,I){c.disableAll(),I.instancing&&c.enable(0),I.instancingColor&&c.enable(1),I.instancingMorph&&c.enable(2),I.matcap&&c.enable(3),I.envMap&&c.enable(4),I.normalMapObjectSpace&&c.enable(5),I.normalMapTangentSpace&&c.enable(6),I.clearcoat&&c.enable(7),I.iridescence&&c.enable(8),I.alphaTest&&c.enable(9),I.vertexColors&&c.enable(10),I.vertexAlphas&&c.enable(11),I.vertexUv1s&&c.enable(12),I.vertexUv2s&&c.enable(13),I.vertexUv3s&&c.enable(14),I.vertexTangents&&c.enable(15),I.anisotropy&&c.enable(16),I.alphaHash&&c.enable(17),I.batching&&c.enable(18),I.dispersion&&c.enable(19),I.batchingColor&&c.enable(20),I.gradientMap&&c.enable(21),I.packedNormalMap&&c.enable(22),I.vertexNormals&&c.enable(23),w.push(c.mask),c.disableAll(),I.fog&&c.enable(0),I.useFog&&c.enable(1),I.flatShading&&c.enable(2),I.logarithmicDepthBuffer&&c.enable(3),I.reversedDepthBuffer&&c.enable(4),I.skinning&&c.enable(5),I.morphTargets&&c.enable(6),I.morphNormals&&c.enable(7),I.morphColors&&c.enable(8),I.premultipliedAlpha&&c.enable(9),I.shadowMapEnabled&&c.enable(10),I.doubleSided&&c.enable(11),I.flipSided&&c.enable(12),I.useDepthPacking&&c.enable(13),I.dithering&&c.enable(14),I.transmission&&c.enable(15),I.sheen&&c.enable(16),I.opaque&&c.enable(17),I.pointsUvs&&c.enable(18),I.decodeVideoTexture&&c.enable(19),I.decodeVideoTextureEmissive&&c.enable(20),I.alphaToCoverage&&c.enable(21),I.numLightProbeGrids>0&&c.enable(22),w.push(c.mask)}function N(w){const I=M[w.type];let X;if(I){const O=Ai[I];X=Rv.clone(O.uniforms)}else X=w.uniforms;return X}function L(w,I){let X=x.get(I);return X!==void 0?++X.usedTimes:(X=new JM(s,I,w,o),p.push(X),x.set(I,X)),X}function H(w){if(--w.usedTimes===0){const I=p.indexOf(w);p[I]=p[p.length-1],p.pop(),x.delete(w.cacheKey),w.destroy()}}function P(w){h.remove(w)}function k(){h.dispose()}return{getParameters:b,getProgramCacheKey:v,getUniforms:N,acquireProgram:L,releaseProgram:H,releaseShaderCache:P,programs:p,dispose:k}}function sE(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let h=s.get(c);return h===void 0&&(h={},s.set(c,h)),h}function r(c){s.delete(c)}function o(c,h,m){s.get(c)[h]=m}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:u}}function aE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Pm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Lm(){const s=[];let e=0;const n=[],r=[],o=[];function u(){e=0,n.length=0,r.length=0,o.length=0}function c(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function h(g,M,A,b,v,_){let R=s[e];return R===void 0?(R={id:g.id,object:g,geometry:M,material:A,materialVariant:c(g),groupOrder:b,renderOrder:g.renderOrder,z:v,group:_},s[e]=R):(R.id=g.id,R.object=g,R.geometry=M,R.material=A,R.materialVariant=c(g),R.groupOrder=b,R.renderOrder=g.renderOrder,R.z=v,R.group=_),e++,R}function m(g,M,A,b,v,_){const R=h(g,M,A,b,v,_);A.transmission>0?r.push(R):A.transparent===!0?o.push(R):n.push(R)}function p(g,M,A,b,v,_){const R=h(g,M,A,b,v,_);A.transmission>0?r.unshift(R):A.transparent===!0?o.unshift(R):n.unshift(R)}function x(g,M){n.length>1&&n.sort(g||aE),r.length>1&&r.sort(M||Pm),o.length>1&&o.sort(M||Pm)}function S(){for(let g=e,M=s.length;g<M;g++){const A=s[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:n,transmissive:r,transparent:o,init:u,push:m,unshift:p,finish:S,sort:x}}function oE(){let s=new WeakMap;function e(r,o){const u=s.get(r);let c;return u===void 0?(c=new Lm,s.set(r,[c])):o>=u.length?(c=new Lm,u.push(c)):c=u[o],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function lE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ne,color:new Pt};break;case"SpotLight":n={position:new ne,direction:new ne,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":n={color:new Pt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return s[e.id]=n,n}}}function uE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let cE=0;function fE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function dE(s){const e=new lE,n=uE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ne);const o=new ne,u=new rn,c=new rn;function h(p){let x=0,S=0,g=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let M=0,A=0,b=0,v=0,_=0,R=0,N=0,L=0,H=0,P=0,k=0;p.sort(fE);for(let I=0,X=p.length;I<X;I++){const O=p[I],K=O.color,ue=O.intensity,ce=O.distance;let W=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===rs?W=O.shadow.map.texture:W=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)x+=K.r*ue,S+=K.g*ue,g+=K.b*ue;else if(O.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(O.sh.coefficients[Q],ue);k++}else if(O.isDirectionalLight){const Q=e.get(O);if(Q.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const j=O.shadow,Y=n.get(O);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=W,r.directionalShadowMatrix[M]=O.shadow.matrix,R++}r.directional[M]=Q,M++}else if(O.isSpotLight){const Q=e.get(O);Q.position.setFromMatrixPosition(O.matrixWorld),Q.color.copy(K).multiplyScalar(ue),Q.distance=ce,Q.coneCos=Math.cos(O.angle),Q.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Q.decay=O.decay,r.spot[b]=Q;const j=O.shadow;if(O.map&&(r.spotLightMap[H]=O.map,H++,j.updateMatrices(O),O.castShadow&&P++),r.spotLightMatrix[b]=j.matrix,O.castShadow){const Y=n.get(O);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.spotShadow[b]=Y,r.spotShadowMap[b]=W,L++}b++}else if(O.isRectAreaLight){const Q=e.get(O);Q.color.copy(K).multiplyScalar(ue),Q.halfWidth.set(O.width*.5,0,0),Q.halfHeight.set(0,O.height*.5,0),r.rectArea[v]=Q,v++}else if(O.isPointLight){const Q=e.get(O);if(Q.color.copy(O.color).multiplyScalar(O.intensity),Q.distance=O.distance,Q.decay=O.decay,O.castShadow){const j=O.shadow,Y=n.get(O);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,r.pointShadow[A]=Y,r.pointShadowMap[A]=W,r.pointShadowMatrix[A]=O.shadow.matrix,N++}r.point[A]=Q,A++}else if(O.isHemisphereLight){const Q=e.get(O);Q.skyColor.copy(O.color).multiplyScalar(ue),Q.groundColor.copy(O.groundColor).multiplyScalar(ue),r.hemi[_]=Q,_++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=S,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==M||w.pointLength!==A||w.spotLength!==b||w.rectAreaLength!==v||w.hemiLength!==_||w.numDirectionalShadows!==R||w.numPointShadows!==N||w.numSpotShadows!==L||w.numSpotMaps!==H||w.numLightProbes!==k)&&(r.directional.length=M,r.spot.length=b,r.rectArea.length=v,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=L+H-P,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=k,w.directionalLength=M,w.pointLength=A,w.spotLength=b,w.rectAreaLength=v,w.hemiLength=_,w.numDirectionalShadows=R,w.numPointShadows=N,w.numSpotShadows=L,w.numSpotMaps=H,w.numLightProbes=k,r.version=cE++)}function m(p,x){let S=0,g=0,M=0,A=0,b=0;const v=x.matrixWorldInverse;for(let _=0,R=p.length;_<R;_++){const N=p[_];if(N.isDirectionalLight){const L=r.directional[S];L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(v),S++}else if(N.isSpotLight){const L=r.spot[M];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(v),L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(v),M++}else if(N.isRectAreaLight){const L=r.rectArea[A];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(v),c.identity(),u.copy(N.matrixWorld),u.premultiply(v),c.extractRotation(u),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),A++}else if(N.isPointLight){const L=r.point[g];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(v),g++}else if(N.isHemisphereLight){const L=r.hemi[b];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(v),b++}}}return{setup:h,setupView:m,state:r}}function Dm(s){const e=new dE(s),n=[],r=[],o=[];function u(g){S.camera=g,n.length=0,r.length=0,o.length=0}function c(g){n.push(g)}function h(g){r.push(g)}function m(g){o.push(g)}function p(){e.setup(n)}function x(g){e.setupView(n,g)}const S={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:S,setupLights:p,setupLightsView:x,pushLight:c,pushShadow:h,pushLightProbeGrid:m}}function hE(s){let e=new WeakMap;function n(o,u=0){const c=e.get(o);let h;return c===void 0?(h=new Dm(s),e.set(o,[h])):u>=c.length?(h=new Dm(s),c.push(h)):h=c[u],h}function r(){e=new WeakMap}return{get:n,dispose:r}}const pE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gE=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],_E=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],Nm=new rn,Ha=new ne,ef=new ne;function vE(s,e,n){let r=new ag;const o=new Lt,u=new Lt,c=new Zt,h=new Dv,m=new Nv,p={},x=n.maxTextureSize,S={[Dr]:Bn,[Bn]:Dr,[Zi]:Zi},g=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:pE,fragmentShader:mE}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const A=new rr;A.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ni(A,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl;let _=this.type;this.render=function(P,k,w){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||P.length===0)return;this.type===y_&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Tl);const I=s.getRenderTarget(),X=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),K=s.state;K.setBlending(Ji),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ue=_!==this.type;ue&&k.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(W=>W.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,W=P.length;ce<W;ce++){const Q=P[ce],j=Q.shadow;if(j===void 0){it("WebGLShadowMap:",Q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const Y=j.getFrameExtents();o.multiply(Y),u.copy(j.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(u.x=Math.floor(x/Y.x),o.x=u.x*Y.x,j.mapSize.x=u.x),o.y>x&&(u.y=Math.floor(x/Y.y),o.y=u.y*Y.y,j.mapSize.y=u.y));const le=s.state.buffers.depth.getReversed();if(j.camera._reversedDepth=le,j.map===null||ue===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Ga){if(Q.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Pi(o.x,o.y,{format:rs,type:nr,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),j.map.texture.name=Q.name+".shadowMap",j.map.depthTexture=new Ks(o.x,o.y,Ci),j.map.depthTexture.name=Q.name+".shadowMapDepth",j.map.depthTexture.format=ir,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=mn,j.map.depthTexture.magFilter=mn}else Q.isPointLight?(j.map=new hg(o.x),j.map.depthTexture=new Av(o.x,Di)):(j.map=new Pi(o.x,o.y),j.map.depthTexture=new Ks(o.x,o.y,Di)),j.map.depthTexture.name=Q.name+".shadowMap",j.map.depthTexture.format=ir,this.type===Tl?(j.map.depthTexture.compareFunction=le?nd:td,j.map.depthTexture.minFilter=Mn,j.map.depthTexture.magFilter=Mn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=mn,j.map.depthTexture.magFilter=mn);j.camera.updateProjectionMatrix()}const oe=j.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<oe;U++){if(j.map.isWebGLCubeRenderTarget)s.setRenderTarget(j.map,U),s.clear();else{U===0&&(s.setRenderTarget(j.map),s.clear());const J=j.getViewport(U);c.set(u.x*J.x,u.y*J.y,u.x*J.z,u.y*J.w),K.viewport(c)}if(Q.isPointLight){const J=j.camera,Fe=j.matrix,He=Q.distance||J.far;He!==J.far&&(J.far=He,J.updateProjectionMatrix()),Ha.setFromMatrixPosition(Q.matrixWorld),J.position.copy(Ha),ef.copy(J.position),ef.add(gE[U]),J.up.copy(_E[U]),J.lookAt(ef),J.updateMatrixWorld(),Fe.makeTranslation(-Ha.x,-Ha.y,-Ha.z),Nm.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Nm,J.coordinateSystem,J.reversedDepth)}else j.updateMatrices(Q);r=j.getFrustum(),L(k,w,j.camera,Q,this.type)}j.isPointLightShadow!==!0&&this.type===Ga&&R(j,w),j.needsUpdate=!1}_=this.type,v.needsUpdate=!1,s.setRenderTarget(I,X,O)};function R(P,k){const w=e.update(b);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Pi(o.x,o.y,{format:rs,type:nr})),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(k,null,w,g,b,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(k,null,w,M,b,null)}function N(P,k,w,I){let X=null;const O=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(O!==void 0)X=O;else if(X=w.isPointLight===!0?m:h,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const K=X.uuid,ue=k.uuid;let ce=p[K];ce===void 0&&(ce={},p[K]=ce);let W=ce[ue];W===void 0&&(W=X.clone(),ce[ue]=W,k.addEventListener("dispose",H)),X=W}if(X.visible=k.visible,X.wireframe=k.wireframe,I===Ga?X.side=k.shadowSide!==null?k.shadowSide:k.side:X.side=k.shadowSide!==null?k.shadowSide:S[k.side],X.alphaMap=k.alphaMap,X.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,X.map=k.map,X.clipShadows=k.clipShadows,X.clippingPlanes=k.clippingPlanes,X.clipIntersection=k.clipIntersection,X.displacementMap=k.displacementMap,X.displacementScale=k.displacementScale,X.displacementBias=k.displacementBias,X.wireframeLinewidth=k.wireframeLinewidth,X.linewidth=k.linewidth,w.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const K=s.properties.get(X);K.light=w}return X}function L(P,k,w,I,X){if(P.visible===!1)return;if(P.layers.test(k.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&X===Ga)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const ue=e.update(P),ce=P.material;if(Array.isArray(ce)){const W=ue.groups;for(let Q=0,j=W.length;Q<j;Q++){const Y=W[Q],le=ce[Y.materialIndex];if(le&&le.visible){const oe=N(P,le,I,X);P.onBeforeShadow(s,P,k,w,ue,oe,Y),s.renderBufferDirect(w,null,ue,oe,P,Y),P.onAfterShadow(s,P,k,w,ue,oe,Y)}}}else if(ce.visible){const W=N(P,ce,I,X);P.onBeforeShadow(s,P,k,w,ue,W,null),s.renderBufferDirect(w,null,ue,W,P,null),P.onAfterShadow(s,P,k,w,ue,W,null)}}const K=P.children;for(let ue=0,ce=K.length;ue<ce;ue++)L(K[ue],k,w,I,X)}function H(P){P.target.removeEventListener("dispose",H);for(const w in p){const I=p[w],X=P.target.uuid;X in I&&(I[X].dispose(),delete I[X])}}}function xE(s,e){function n(){let B=!1;const we=new Zt;let de=null;const Oe=new Zt(0,0,0,0);return{setMask:function(Re){de!==Re&&!B&&(s.colorMask(Re,Re,Re,Re),de=Re)},setLocked:function(Re){B=Re},setClear:function(Re,_e,Xe,st,Nt){Nt===!0&&(Re*=st,_e*=st,Xe*=st),we.set(Re,_e,Xe,st),Oe.equals(we)===!1&&(s.clearColor(Re,_e,Xe,st),Oe.copy(we))},reset:function(){B=!1,de=null,Oe.set(-1,0,0,0)}}}function r(){let B=!1,we=!1,de=null,Oe=null,Re=null;return{setReversed:function(_e){if(we!==_e){const Xe=e.get("EXT_clip_control");_e?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),we=_e;const st=Re;Re=null,this.setClear(st)}},getReversed:function(){return we},setTest:function(_e){_e?me(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(_e){de!==_e&&!B&&(s.depthMask(_e),de=_e)},setFunc:function(_e){if(we&&(_e=ev[_e]),Oe!==_e){switch(_e){case rf:s.depthFunc(s.NEVER);break;case sf:s.depthFunc(s.ALWAYS);break;case af:s.depthFunc(s.LESS);break;case $s:s.depthFunc(s.LEQUAL);break;case of:s.depthFunc(s.EQUAL);break;case lf:s.depthFunc(s.GEQUAL);break;case uf:s.depthFunc(s.GREATER);break;case cf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Oe=_e}},setLocked:function(_e){B=_e},setClear:function(_e){Re!==_e&&(Re=_e,we&&(_e=1-_e),s.clearDepth(_e))},reset:function(){B=!1,de=null,Oe=null,Re=null,we=!1}}}function o(){let B=!1,we=null,de=null,Oe=null,Re=null,_e=null,Xe=null,st=null,Nt=null;return{setTest:function(Et){B||(Et?me(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(Et){we!==Et&&!B&&(s.stencilMask(Et),we=Et)},setFunc:function(Et,En,Yn){(de!==Et||Oe!==En||Re!==Yn)&&(s.stencilFunc(Et,En,Yn),de=Et,Oe=En,Re=Yn)},setOp:function(Et,En,Yn){(_e!==Et||Xe!==En||st!==Yn)&&(s.stencilOp(Et,En,Yn),_e=Et,Xe=En,st=Yn)},setLocked:function(Et){B=Et},setClear:function(Et){Nt!==Et&&(s.clearStencil(Et),Nt=Et)},reset:function(){B=!1,we=null,de=null,Oe=null,Re=null,_e=null,Xe=null,st=null,Nt=null}}}const u=new n,c=new r,h=new o,m=new WeakMap,p=new WeakMap;let x={},S={},g={},M=new WeakMap,A=[],b=null,v=!1,_=null,R=null,N=null,L=null,H=null,P=null,k=null,w=new Pt(0,0,0),I=0,X=!1,O=null,K=null,ue=null,ce=null,W=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Y=0;const le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(le)[1]),j=Y>=1):le.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),j=Y>=2);let oe=null,U={};const J=s.getParameter(s.SCISSOR_BOX),Fe=s.getParameter(s.VIEWPORT),He=new Zt().fromArray(J),Ne=new Zt().fromArray(Fe);function se(B,we,de,Oe){const Re=new Uint8Array(4),_e=s.createTexture();s.bindTexture(B,_e),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<de;Xe++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,Oe,0,s.RGBA,s.UNSIGNED_BYTE,Re):s.texImage2D(we+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Re);return _e}const Se={};Se[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),h.setClear(0),me(s.DEPTH_TEST),c.setFunc($s),Xt(!1),Ut(Fp),me(s.CULL_FACE),Dt(Ji);function me(B){x[B]!==!0&&(s.enable(B),x[B]=!0)}function Ie(B){x[B]!==!1&&(s.disable(B),x[B]=!1)}function Ze(B,we){return g[B]!==we?(s.bindFramebuffer(B,we),g[B]=we,B===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=we),B===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=we),!0):!1}function Qe(B,we){let de=A,Oe=!1;if(B){de=M.get(we),de===void 0&&(de=[],M.set(we,de));const Re=B.textures;if(de.length!==Re.length||de[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,Xe=Re.length;_e<Xe;_e++)de[_e]=s.COLOR_ATTACHMENT0+_e;de.length=Re.length,Oe=!0}}else de[0]!==s.BACK&&(de[0]=s.BACK,Oe=!0);Oe&&s.drawBuffers(de)}function It(B){return b!==B?(s.useProgram(B),b=B,!0):!1}const ut={[Jr]:s.FUNC_ADD,[E_]:s.FUNC_SUBTRACT,[T_]:s.FUNC_REVERSE_SUBTRACT};ut[w_]=s.MIN,ut[A_]=s.MAX;const Mt={[C_]:s.ZERO,[R_]:s.ONE,[b_]:s.SRC_COLOR,[tf]:s.SRC_ALPHA,[U_]:s.SRC_ALPHA_SATURATE,[N_]:s.DST_COLOR,[L_]:s.DST_ALPHA,[P_]:s.ONE_MINUS_SRC_COLOR,[nf]:s.ONE_MINUS_SRC_ALPHA,[I_]:s.ONE_MINUS_DST_COLOR,[D_]:s.ONE_MINUS_DST_ALPHA,[F_]:s.CONSTANT_COLOR,[O_]:s.ONE_MINUS_CONSTANT_COLOR,[B_]:s.CONSTANT_ALPHA,[k_]:s.ONE_MINUS_CONSTANT_ALPHA};function Dt(B,we,de,Oe,Re,_e,Xe,st,Nt,Et){if(B===Ji){v===!0&&(Ie(s.BLEND),v=!1);return}if(v===!1&&(me(s.BLEND),v=!0),B!==M_){if(B!==_||Et!==X){if((R!==Jr||H!==Jr)&&(s.blendEquation(s.FUNC_ADD),R=Jr,H=Jr),Et)switch(B){case Ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Op:s.blendFunc(s.ONE,s.ONE);break;case Bp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:yt("WebGLState: Invalid blending: ",B);break}else switch(B){case Ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Op:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Bp:yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kp:yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:yt("WebGLState: Invalid blending: ",B);break}N=null,L=null,P=null,k=null,w.set(0,0,0),I=0,_=B,X=Et}return}Re=Re||we,_e=_e||de,Xe=Xe||Oe,(we!==R||Re!==H)&&(s.blendEquationSeparate(ut[we],ut[Re]),R=we,H=Re),(de!==N||Oe!==L||_e!==P||Xe!==k)&&(s.blendFuncSeparate(Mt[de],Mt[Oe],Mt[_e],Mt[Xe]),N=de,L=Oe,P=_e,k=Xe),(st.equals(w)===!1||Nt!==I)&&(s.blendColor(st.r,st.g,st.b,Nt),w.copy(st),I=Nt),_=B,X=!1}function ct(B,we){B.side===Zi?Ie(s.CULL_FACE):me(s.CULL_FACE);let de=B.side===Bn;we&&(de=!de),Xt(de),B.blending===Ys&&B.transparent===!1?Dt(Ji):Dt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),u.setMask(B.colorWrite);const Oe=B.stencilWrite;h.setTest(Oe),Oe&&(h.setMask(B.stencilWriteMask),h.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),h.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),z(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(B){O!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),O=B)}function Ut(B){B!==x_?(me(s.CULL_FACE),B!==K&&(B===Fp?s.cullFace(s.BACK):B===S_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),K=B}function fn(B){B!==ue&&(j&&s.lineWidth(B),ue=B)}function z(B,we,de){B?(me(s.POLYGON_OFFSET_FILL),(ce!==we||W!==de)&&(ce=we,W=de,c.getReversed()&&(we=-we),s.polygonOffset(we,de))):Ie(s.POLYGON_OFFSET_FILL)}function Ft(B){B?me(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function ft(B){B===void 0&&(B=s.TEXTURE0+Q-1),oe!==B&&(s.activeTexture(B),oe=B)}function At(B,we,de){de===void 0&&(oe===null?de=s.TEXTURE0+Q-1:de=oe);let Oe=U[de];Oe===void 0&&(Oe={type:void 0,texture:void 0},U[de]=Oe),(Oe.type!==B||Oe.texture!==we)&&(oe!==de&&(s.activeTexture(de),oe=de),s.bindTexture(B,we||Se[B]),Oe.type=B,Oe.texture=we)}function Le(){const B=U[oe];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function kt(){try{s.compressedTexImage2D(...arguments)}catch(B){yt("WebGLState:",B)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(B){yt("WebGLState:",B)}}function y(){try{s.texSubImage2D(...arguments)}catch(B){yt("WebGLState:",B)}}function q(){try{s.texSubImage3D(...arguments)}catch(B){yt("WebGLState:",B)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(B){yt("WebGLState:",B)}}function ge(){try{s.compressedTexSubImage3D(...arguments)}catch(B){yt("WebGLState:",B)}}function Me(){try{s.texStorage2D(...arguments)}catch(B){yt("WebGLState:",B)}}function Pe(){try{s.texStorage3D(...arguments)}catch(B){yt("WebGLState:",B)}}function fe(){try{s.texImage2D(...arguments)}catch(B){yt("WebGLState:",B)}}function pe(){try{s.texImage3D(...arguments)}catch(B){yt("WebGLState:",B)}}function Ue(B){return S[B]!==void 0?S[B]:s.getParameter(B)}function Be(B,we){S[B]!==we&&(s.pixelStorei(B,we),S[B]=we)}function Ae(B){He.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),He.copy(B))}function Ee(B){Ne.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Ne.copy(B))}function tt(B,we){let de=p.get(we);de===void 0&&(de=new WeakMap,p.set(we,de));let Oe=de.get(B);Oe===void 0&&(Oe=s.getUniformBlockIndex(we,B.name),de.set(B,Oe))}function rt(B,we){const Oe=p.get(we).get(B);m.get(we)!==Oe&&(s.uniformBlockBinding(we,Oe,B.__bindingPointIndex),m.set(we,Oe))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},S={},oe=null,U={},g={},M=new WeakMap,A=[],b=null,v=!1,_=null,R=null,N=null,L=null,H=null,P=null,k=null,w=new Pt(0,0,0),I=0,X=!1,O=null,K=null,ue=null,ce=null,W=null,He.set(0,0,s.canvas.width,s.canvas.height),Ne.set(0,0,s.canvas.width,s.canvas.height),u.reset(),c.reset(),h.reset()}return{buffers:{color:u,depth:c,stencil:h},enable:me,disable:Ie,bindFramebuffer:Ze,drawBuffers:Qe,useProgram:It,setBlending:Dt,setMaterial:ct,setFlipSided:Xt,setCullFace:Ut,setLineWidth:fn,setPolygonOffset:z,setScissorTest:Ft,activeTexture:ft,bindTexture:At,unbindTexture:Le,compressedTexImage2D:kt,compressedTexImage3D:C,texImage2D:fe,texImage3D:pe,pixelStorei:Be,getParameter:Ue,updateUBOMapping:tt,uniformBlockBinding:rt,texStorage2D:Me,texStorage3D:Pe,texSubImage2D:y,texSubImage3D:q,compressedTexSubImage2D:he,compressedTexSubImage3D:ge,scissor:Ae,viewport:Ee,reset:ht}}function SE(s,e,n,r,o,u,c){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Lt,x=new WeakMap,S=new Set;let g;const M=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,y){return A?new OffscreenCanvas(C,y):Ul("canvas")}function v(C,y,q){let he=1;const ge=kt(C);if((ge.width>q||ge.height>q)&&(he=q/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Me=Math.floor(he*ge.width),Pe=Math.floor(he*ge.height);g===void 0&&(g=b(Me,Pe));const fe=y?b(Me,Pe):g;return fe.width=Me,fe.height=Pe,fe.getContext("2d").drawImage(C,0,0,Me,Pe),it("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Me+"x"+Pe+")."),fe}else return"data"in C&&it("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),C;return C}function _(C){return C.generateMipmaps}function R(C){s.generateMipmap(C)}function N(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(C,y,q,he,ge,Me=!1){if(C!==null){if(s[C]!==void 0)return s[C];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Pe;he&&(Pe=e.get("EXT_texture_norm16"),Pe||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=y;if(y===s.RED&&(q===s.FLOAT&&(fe=s.R32F),q===s.HALF_FLOAT&&(fe=s.R16F),q===s.UNSIGNED_BYTE&&(fe=s.R8),q===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.R16_EXT),q===s.SHORT&&Pe&&(fe=Pe.R16_SNORM_EXT)),y===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(fe=s.R8UI),q===s.UNSIGNED_SHORT&&(fe=s.R16UI),q===s.UNSIGNED_INT&&(fe=s.R32UI),q===s.BYTE&&(fe=s.R8I),q===s.SHORT&&(fe=s.R16I),q===s.INT&&(fe=s.R32I)),y===s.RG&&(q===s.FLOAT&&(fe=s.RG32F),q===s.HALF_FLOAT&&(fe=s.RG16F),q===s.UNSIGNED_BYTE&&(fe=s.RG8),q===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RG16_EXT),q===s.SHORT&&Pe&&(fe=Pe.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(fe=s.RG8UI),q===s.UNSIGNED_SHORT&&(fe=s.RG16UI),q===s.UNSIGNED_INT&&(fe=s.RG32UI),q===s.BYTE&&(fe=s.RG8I),q===s.SHORT&&(fe=s.RG16I),q===s.INT&&(fe=s.RG32I)),y===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),q===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),q===s.UNSIGNED_INT&&(fe=s.RGB32UI),q===s.BYTE&&(fe=s.RGB8I),q===s.SHORT&&(fe=s.RGB16I),q===s.INT&&(fe=s.RGB32I)),y===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),q===s.UNSIGNED_INT&&(fe=s.RGBA32UI),q===s.BYTE&&(fe=s.RGBA8I),q===s.SHORT&&(fe=s.RGBA16I),q===s.INT&&(fe=s.RGBA32I)),y===s.RGB&&(q===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGB16_EXT),q===s.SHORT&&Pe&&(fe=Pe.RGB16_SNORM_EXT),q===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),y===s.RGBA){const pe=Me?Nl:_t.getTransfer(ge);q===s.FLOAT&&(fe=s.RGBA32F),q===s.HALF_FLOAT&&(fe=s.RGBA16F),q===s.UNSIGNED_BYTE&&(fe=pe===bt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGBA16_EXT),q===s.SHORT&&Pe&&(fe=Pe.RGBA16_SNORM_EXT),q===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function H(C,y){let q;return C?y===null||y===Di||y===Ya?q=s.DEPTH24_STENCIL8:y===Ci?q=s.DEPTH32F_STENCIL8:y===Xa&&(q=s.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Di||y===Ya?q=s.DEPTH_COMPONENT24:y===Ci?q=s.DEPTH_COMPONENT32F:y===Xa&&(q=s.DEPTH_COMPONENT16),q}function P(C,y){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==mn&&C.minFilter!==Mn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function k(C){const y=C.target;y.removeEventListener("dispose",k),I(y),y.isVideoTexture&&x.delete(y),y.isHTMLTexture&&S.delete(y)}function w(C){const y=C.target;y.removeEventListener("dispose",w),O(y)}function I(C){const y=r.get(C);if(y.__webglInit===void 0)return;const q=C.source,he=M.get(q);if(he){const ge=he[y.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&X(C),Object.keys(he).length===0&&M.delete(q)}r.remove(C)}function X(C){const y=r.get(C);s.deleteTexture(y.__webglTexture);const q=C.source,he=M.get(q);delete he[y.__cacheKey],c.memory.textures--}function O(C){const y=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(y.__webglFramebuffer[he]))for(let ge=0;ge<y.__webglFramebuffer[he].length;ge++)s.deleteFramebuffer(y.__webglFramebuffer[he][ge]);else s.deleteFramebuffer(y.__webglFramebuffer[he]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[he])}else{if(Array.isArray(y.__webglFramebuffer))for(let he=0;he<y.__webglFramebuffer.length;he++)s.deleteFramebuffer(y.__webglFramebuffer[he]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let he=0;he<y.__webglColorRenderbuffer.length;he++)y.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[he]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const q=C.textures;for(let he=0,ge=q.length;he<ge;he++){const Me=r.get(q[he]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),c.memory.textures--),r.remove(q[he])}r.remove(C)}let K=0;function ue(){K=0}function ce(){return K}function W(C){K=C}function Q(){const C=K;return C>=o.maxTextures&&it("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+o.maxTextures),K+=1,C}function j(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function Y(C,y){const q=r.get(C);if(C.isVideoTexture&&At(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&q.__version!==C.version){const he=C.image;if(he===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(q,C,y);return}}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+y)}function le(C,y){const q=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){Ie(q,C,y);return}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+y)}function oe(C,y){const q=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){Ie(q,C,y);return}n.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+y)}function U(C,y){const q=r.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&q.__version!==C.version){Ze(q,C,y);return}n.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+y)}const J={[ff]:s.REPEAT,[Qi]:s.CLAMP_TO_EDGE,[df]:s.MIRRORED_REPEAT},Fe={[mn]:s.NEAREST,[H_]:s.NEAREST_MIPMAP_NEAREST,[tl]:s.NEAREST_MIPMAP_LINEAR,[Mn]:s.LINEAR,[Tc]:s.LINEAR_MIPMAP_NEAREST,[ts]:s.LINEAR_MIPMAP_LINEAR},He={[X_]:s.NEVER,[K_]:s.ALWAYS,[Y_]:s.LESS,[td]:s.LEQUAL,[q_]:s.EQUAL,[nd]:s.GEQUAL,[$_]:s.GREATER,[j_]:s.NOTEQUAL};function Ne(C,y){if(y.type===Ci&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Mn||y.magFilter===Tc||y.magFilter===tl||y.magFilter===ts||y.minFilter===Mn||y.minFilter===Tc||y.minFilter===tl||y.minFilter===ts)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,J[y.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,J[y.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,J[y.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Fe[y.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Fe[y.minFilter]),y.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,He[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===mn||y.minFilter!==tl&&y.minFilter!==ts||y.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function se(C,y){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",k));const he=y.source;let ge=M.get(he);ge===void 0&&(ge={},M.set(he,ge));const Me=j(y);if(Me!==C.__cacheKey){ge[Me]===void 0&&(ge[Me]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,q=!0),ge[Me].usedTimes++;const Pe=ge[C.__cacheKey];Pe!==void 0&&(ge[C.__cacheKey].usedTimes--,Pe.usedTimes===0&&X(y)),C.__cacheKey=Me,C.__webglTexture=ge[Me].texture}return q}function Se(C,y,q){return Math.floor(Math.floor(C/q)/y)}function me(C,y,q,he){const Me=C.updateRanges;if(Me.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,q,he,y.data);else{Me.sort((Be,Ae)=>Be.start-Ae.start);let Pe=0;for(let Be=1;Be<Me.length;Be++){const Ae=Me[Pe],Ee=Me[Be],tt=Ae.start+Ae.count,rt=Se(Ee.start,y.width,4),ht=Se(Ae.start,y.width,4);Ee.start<=tt+1&&rt===ht&&Se(Ee.start+Ee.count-1,y.width,4)===rt?Ae.count=Math.max(Ae.count,Ee.start+Ee.count-Ae.start):(++Pe,Me[Pe]=Ee)}Me.length=Pe+1;const fe=n.getParameter(s.UNPACK_ROW_LENGTH),pe=n.getParameter(s.UNPACK_SKIP_PIXELS),Ue=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Be=0,Ae=Me.length;Be<Ae;Be++){const Ee=Me[Be],tt=Math.floor(Ee.start/4),rt=Math.ceil(Ee.count/4),ht=tt%y.width,B=Math.floor(tt/y.width),we=rt,de=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),n.pixelStorei(s.UNPACK_SKIP_ROWS,B),n.texSubImage2D(s.TEXTURE_2D,0,ht,B,we,de,q,he,y.data)}C.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,fe),n.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),n.pixelStorei(s.UNPACK_SKIP_ROWS,Ue)}}function Ie(C,y,q){let he=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(he=s.TEXTURE_3D);const ge=se(C,y),Me=y.source;n.bindTexture(he,C.__webglTexture,s.TEXTURE0+q);const Pe=r.get(Me);if(Me.version!==Pe.__version||ge===!0){if(n.activeTexture(s.TEXTURE0+q),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const de=_t.getPrimaries(_t.workingColorSpace),Oe=y.colorSpace===Pr?null:_t.getPrimaries(y.colorSpace),Re=y.colorSpace===Pr||de===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}n.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let pe=v(y.image,!1,o.maxTextureSize);pe=Le(y,pe);const Ue=u.convert(y.format,y.colorSpace),Be=u.convert(y.type);let Ae=L(y.internalFormat,Ue,Be,y.normalized,y.colorSpace,y.isVideoTexture);Ne(he,y);let Ee;const tt=y.mipmaps,rt=y.isVideoTexture!==!0,ht=Pe.__version===void 0||ge===!0,B=Me.dataReady,we=P(y,pe);if(y.isDepthTexture)Ae=H(y.format===ns,y.type),ht&&(rt?n.texStorage2D(s.TEXTURE_2D,1,Ae,pe.width,pe.height):n.texImage2D(s.TEXTURE_2D,0,Ae,pe.width,pe.height,0,Ue,Be,null));else if(y.isDataTexture)if(tt.length>0){rt&&ht&&n.texStorage2D(s.TEXTURE_2D,we,Ae,tt[0].width,tt[0].height);for(let de=0,Oe=tt.length;de<Oe;de++)Ee=tt[de],rt?B&&n.texSubImage2D(s.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Ue,Be,Ee.data):n.texImage2D(s.TEXTURE_2D,de,Ae,Ee.width,Ee.height,0,Ue,Be,Ee.data);y.generateMipmaps=!1}else rt?(ht&&n.texStorage2D(s.TEXTURE_2D,we,Ae,pe.width,pe.height),B&&me(y,pe,Ue,Be)):n.texImage2D(s.TEXTURE_2D,0,Ae,pe.width,pe.height,0,Ue,Be,pe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){rt&&ht&&n.texStorage3D(s.TEXTURE_2D_ARRAY,we,Ae,tt[0].width,tt[0].height,pe.depth);for(let de=0,Oe=tt.length;de<Oe;de++)if(Ee=tt[de],y.format!==mi)if(Ue!==null)if(rt){if(B)if(y.layerUpdates.size>0){const Re=cm(Ee.width,Ee.height,y.format,y.type);for(const _e of y.layerUpdates){const Xe=Ee.data.subarray(_e*Re/Ee.data.BYTES_PER_ELEMENT,(_e+1)*Re/Ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,_e,Ee.width,Ee.height,1,Ue,Xe)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,pe.depth,Ue,Ee.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,de,Ae,Ee.width,Ee.height,pe.depth,0,Ee.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?B&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,pe.depth,Ue,Be,Ee.data):n.texImage3D(s.TEXTURE_2D_ARRAY,de,Ae,Ee.width,Ee.height,pe.depth,0,Ue,Be,Ee.data)}else{rt&&ht&&n.texStorage2D(s.TEXTURE_2D,we,Ae,tt[0].width,tt[0].height);for(let de=0,Oe=tt.length;de<Oe;de++)Ee=tt[de],y.format!==mi?Ue!==null?rt?B&&n.compressedTexSubImage2D(s.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Ue,Ee.data):n.compressedTexImage2D(s.TEXTURE_2D,de,Ae,Ee.width,Ee.height,0,Ee.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?B&&n.texSubImage2D(s.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Ue,Be,Ee.data):n.texImage2D(s.TEXTURE_2D,de,Ae,Ee.width,Ee.height,0,Ue,Be,Ee.data)}else if(y.isDataArrayTexture)if(rt){if(ht&&n.texStorage3D(s.TEXTURE_2D_ARRAY,we,Ae,pe.width,pe.height,pe.depth),B)if(y.layerUpdates.size>0){const de=cm(pe.width,pe.height,y.format,y.type);for(const Oe of y.layerUpdates){const Re=pe.data.subarray(Oe*de/pe.data.BYTES_PER_ELEMENT,(Oe+1)*de/pe.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Oe,pe.width,pe.height,1,Ue,Be,Re)}y.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ue,Be,pe.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,pe.width,pe.height,pe.depth,0,Ue,Be,pe.data);else if(y.isData3DTexture)rt?(ht&&n.texStorage3D(s.TEXTURE_3D,we,Ae,pe.width,pe.height,pe.depth),B&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ue,Be,pe.data)):n.texImage3D(s.TEXTURE_3D,0,Ae,pe.width,pe.height,pe.depth,0,Ue,Be,pe.data);else if(y.isFramebufferTexture){if(ht)if(rt)n.texStorage2D(s.TEXTURE_2D,we,Ae,pe.width,pe.height);else{let de=pe.width,Oe=pe.height;for(let Re=0;Re<we;Re++)n.texImage2D(s.TEXTURE_2D,Re,Ae,de,Oe,0,Ue,Be,null),de>>=1,Oe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const de=s.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),pe.parentNode!==de){de.appendChild(pe),S.add(y),de.onpaint=st=>{const Nt=st.changedElements;for(const Et of S)Nt.includes(Et.image)&&(Et.needsUpdate=!0)},de.requestPaint();return}const Oe=0,Re=s.RGBA,_e=s.RGBA,Xe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Oe,Re,_e,Xe,pe),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(tt.length>0){if(rt&&ht){const de=kt(tt[0]);n.texStorage2D(s.TEXTURE_2D,we,Ae,de.width,de.height)}for(let de=0,Oe=tt.length;de<Oe;de++)Ee=tt[de],rt?B&&n.texSubImage2D(s.TEXTURE_2D,de,0,0,Ue,Be,Ee):n.texImage2D(s.TEXTURE_2D,de,Ae,Ue,Be,Ee);y.generateMipmaps=!1}else if(rt){if(ht){const de=kt(pe);n.texStorage2D(s.TEXTURE_2D,we,Ae,de.width,de.height)}B&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ue,Be,pe)}else n.texImage2D(s.TEXTURE_2D,0,Ae,Ue,Be,pe);_(y)&&R(he),Pe.__version=Me.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Ze(C,y,q){if(y.image.length!==6)return;const he=se(C,y),ge=y.source;n.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+q);const Me=r.get(ge);if(ge.version!==Me.__version||he===!0){n.activeTexture(s.TEXTURE0+q);const Pe=_t.getPrimaries(_t.workingColorSpace),fe=y.colorSpace===Pr?null:_t.getPrimaries(y.colorSpace),pe=y.colorSpace===Pr||Pe===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ue=y.isCompressedTexture||y.image[0].isCompressedTexture,Be=y.image[0]&&y.image[0].isDataTexture,Ae=[];for(let _e=0;_e<6;_e++)!Ue&&!Be?Ae[_e]=v(y.image[_e],!0,o.maxCubemapSize):Ae[_e]=Be?y.image[_e].image:y.image[_e],Ae[_e]=Le(y,Ae[_e]);const Ee=Ae[0],tt=u.convert(y.format,y.colorSpace),rt=u.convert(y.type),ht=L(y.internalFormat,tt,rt,y.normalized,y.colorSpace),B=y.isVideoTexture!==!0,we=Me.__version===void 0||he===!0,de=ge.dataReady;let Oe=P(y,Ee);Ne(s.TEXTURE_CUBE_MAP,y);let Re;if(Ue){B&&we&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,ht,Ee.width,Ee.height);for(let _e=0;_e<6;_e++){Re=Ae[_e].mipmaps;for(let Xe=0;Xe<Re.length;Xe++){const st=Re[Xe];y.format!==mi?tt!==null?B?de&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,0,0,st.width,st.height,tt,st.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,ht,st.width,st.height,0,st.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?de&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,0,0,st.width,st.height,tt,rt,st.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,ht,st.width,st.height,0,tt,rt,st.data)}}}else{if(Re=y.mipmaps,B&&we){Re.length>0&&Oe++;const _e=kt(Ae[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,ht,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Be){B?de&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ae[_e].width,Ae[_e].height,tt,rt,Ae[_e].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ht,Ae[_e].width,Ae[_e].height,0,tt,rt,Ae[_e].data);for(let Xe=0;Xe<Re.length;Xe++){const Nt=Re[Xe].image[_e].image;B?de&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,0,0,Nt.width,Nt.height,tt,rt,Nt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,ht,Nt.width,Nt.height,0,tt,rt,Nt.data)}}else{B?de&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,tt,rt,Ae[_e]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ht,tt,rt,Ae[_e]);for(let Xe=0;Xe<Re.length;Xe++){const st=Re[Xe];B?de&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,0,0,tt,rt,st.image[_e]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,ht,tt,rt,st.image[_e])}}}_(y)&&R(s.TEXTURE_CUBE_MAP),Me.__version=ge.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Qe(C,y,q,he,ge,Me){const Pe=u.convert(q.format,q.colorSpace),fe=u.convert(q.type),pe=L(q.internalFormat,Pe,fe,q.normalized,q.colorSpace),Ue=r.get(y),Be=r.get(q);if(Be.__renderTarget=y,!Ue.__hasExternalTextures){const Ae=Math.max(1,y.width>>Me),Ee=Math.max(1,y.height>>Me);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?n.texImage3D(ge,Me,pe,Ae,Ee,y.depth,0,Pe,fe,null):n.texImage2D(ge,Me,pe,Ae,Ee,0,Pe,fe,null)}n.bindFramebuffer(s.FRAMEBUFFER,C),ft(y)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ge,Be.__webglTexture,0,Ft(y)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ge,Be.__webglTexture,Me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function It(C,y,q){if(s.bindRenderbuffer(s.RENDERBUFFER,C),y.depthBuffer){const he=y.depthTexture,ge=he&&he.isDepthTexture?he.type:null,Me=H(y.stencilBuffer,ge),Pe=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ft(y)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ft(y),Me,y.width,y.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft(y),Me,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Me,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,C)}else{const he=y.textures;for(let ge=0;ge<he.length;ge++){const Me=he[ge],Pe=u.convert(Me.format,Me.colorSpace),fe=u.convert(Me.type),pe=L(Me.internalFormat,Pe,fe,Me.normalized,Me.colorSpace);ft(y)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ft(y),pe,y.width,y.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft(y),pe,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,pe,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ut(C,y,q){const he=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(y.depthTexture);if(ge.__renderTarget=y,(!ge.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),he){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,y.depthTexture.addEventListener("dispose",k)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,y.depthTexture);const Ue=u.convert(y.depthTexture.format),Be=u.convert(y.depthTexture.type);let Ae;y.depthTexture.format===ir?Ae=s.DEPTH_COMPONENT24:y.depthTexture.format===ns&&(Ae=s.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Ae,y.width,y.height,0,Ue,Be,null)}}else Y(y.depthTexture,0);const Me=ge.__webglTexture,Pe=Ft(y),fe=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,pe=y.depthTexture.format===ns?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===ir)ft(y)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,fe,Me,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,pe,fe,Me,0);else if(y.depthTexture.format===ns)ft(y)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,fe,Me,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,pe,fe,Me,0);else throw new Error("Unknown depthTexture format")}function Mt(C){const y=r.get(C),q=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const he=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),he){const ge=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),y.__depthDisposeCallback=ge}y.__boundDepthTexture=he}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(q)for(let he=0;he<6;he++)ut(y.__webglFramebuffer[he],C,he);else{const he=C.texture.mipmaps;he&&he.length>0?ut(y.__webglFramebuffer[0],C,0):ut(y.__webglFramebuffer,C,0)}else if(q){y.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[he]),y.__webglDepthbuffer[he]===void 0)y.__webglDepthbuffer[he]=s.createRenderbuffer(),It(y.__webglDepthbuffer[he],C,!1);else{const ge=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=y.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Me)}}else{const he=C.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),It(y.__webglDepthbuffer,C,!1);else{const ge=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Me)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(C,y,q){const he=r.get(C);y!==void 0&&Qe(he.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Mt(C)}function ct(C){const y=C.texture,q=r.get(C),he=r.get(y);C.addEventListener("dispose",w);const ge=C.textures,Me=C.isWebGLCubeRenderTarget===!0,Pe=ge.length>1;if(Pe||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=y.version,c.memory.textures++),Me){q.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[fe]=[];for(let pe=0;pe<y.mipmaps.length;pe++)q.__webglFramebuffer[fe][pe]=s.createFramebuffer()}else q.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)q.__webglFramebuffer[fe]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let fe=0,pe=ge.length;fe<pe;fe++){const Ue=r.get(ge[fe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),c.memory.textures++)}if(C.samples>0&&ft(C)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let fe=0;fe<ge.length;fe++){const pe=ge[fe];q.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[fe]);const Ue=u.convert(pe.format,pe.colorSpace),Be=u.convert(pe.type),Ae=L(pe.internalFormat,Ue,Be,pe.normalized,pe.colorSpace,C.isXRRenderTarget===!0),Ee=Ft(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,Ae,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,q.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),It(q.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){n.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,y);for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)Qe(q.__webglFramebuffer[fe][pe],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,pe);else Qe(q.__webglFramebuffer[fe],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);_(y)&&R(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let fe=0,pe=ge.length;fe<pe;fe++){const Ue=ge[fe],Be=r.get(Ue);let Ae=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ae=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,Be.__webglTexture),Ne(Ae,Ue),Qe(q.__webglFramebuffer,C,Ue,s.COLOR_ATTACHMENT0+fe,Ae,0),_(Ue)&&R(Ae)}n.unbindTexture()}else{let fe=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(fe,he.__webglTexture),Ne(fe,y),y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)Qe(q.__webglFramebuffer[pe],C,y,s.COLOR_ATTACHMENT0,fe,pe);else Qe(q.__webglFramebuffer,C,y,s.COLOR_ATTACHMENT0,fe,0);_(y)&&R(fe),n.unbindTexture()}C.depthBuffer&&Mt(C)}function Xt(C){const y=C.textures;for(let q=0,he=y.length;q<he;q++){const ge=y[q];if(_(ge)){const Me=N(C),Pe=r.get(ge).__webglTexture;n.bindTexture(Me,Pe),R(Me),n.unbindTexture()}}}const Ut=[],fn=[];function z(C){if(C.samples>0){if(ft(C)===!1){const y=C.textures,q=C.width,he=C.height;let ge=s.COLOR_BUFFER_BIT;const Me=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=r.get(C),fe=y.length>1;if(fe)for(let Ue=0;Ue<y.length;Ue++)n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const pe=C.texture.mipmaps;pe&&pe.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ue=0;Ue<y.length;Ue++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ue]);const Be=r.get(y[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Be,0)}s.blitFramebuffer(0,0,q,he,0,0,q,he,ge,s.NEAREST),m===!0&&(Ut.length=0,fn.length=0,Ut.push(s.COLOR_ATTACHMENT0+Ue),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ut.push(Me),fn.push(Me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,fn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ut))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Ue=0;Ue<y.length;Ue++){n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ue]);const Be=r.get(y[Ue]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,Be,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&m){const y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Ft(C){return Math.min(o.maxSamples,C.samples)}function ft(C){const y=r.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function At(C){const y=c.render.frame;x.get(C)!==y&&(x.set(C,y),C.update())}function Le(C,y){const q=C.colorSpace,he=C.format,ge=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==Dl&&q!==Pr&&(_t.getTransfer(q)===bt?(he!==mi||ge!==ti)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):yt("WebGLTextures: Unsupported texture color space:",q)),y}function kt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(p.width=C.naturalWidth||C.width,p.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(p.width=C.displayWidth,p.height=C.displayHeight):(p.width=C.width,p.height=C.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=ue,this.getTextureUnits=ce,this.setTextureUnits=W,this.setTexture2D=Y,this.setTexture2DArray=le,this.setTexture3D=oe,this.setTextureCube=U,this.rebindTextures=Dt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function yE(s,e){function n(r,o=Pr){let u;const c=_t.getTransfer(o);if(r===ti)return s.UNSIGNED_BYTE;if(r===Kf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Zf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===$m)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===jm)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ym)return s.BYTE;if(r===qm)return s.SHORT;if(r===Xa)return s.UNSIGNED_SHORT;if(r===jf)return s.INT;if(r===Di)return s.UNSIGNED_INT;if(r===Ci)return s.FLOAT;if(r===nr)return s.HALF_FLOAT;if(r===Km)return s.ALPHA;if(r===Zm)return s.RGB;if(r===mi)return s.RGBA;if(r===ir)return s.DEPTH_COMPONENT;if(r===ns)return s.DEPTH_STENCIL;if(r===Qm)return s.RED;if(r===Qf)return s.RED_INTEGER;if(r===rs)return s.RG;if(r===Jf)return s.RG_INTEGER;if(r===ed)return s.RGBA_INTEGER;if(r===wl||r===Al||r===Cl||r===Rl)if(c===bt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===wl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Al)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Rl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===wl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Al)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Rl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hf||r===pf||r===mf||r===gf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===hf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===pf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===mf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_f||r===vf||r===xf||r===Sf||r===yf||r===Pl||r===Mf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===_f||r===vf)return c===bt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===xf)return c===bt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Sf)return u.COMPRESSED_R11_EAC;if(r===yf)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Pl)return u.COMPRESSED_RG11_EAC;if(r===Mf)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ef||r===Tf||r===wf||r===Af||r===Cf||r===Rf||r===bf||r===Pf||r===Lf||r===Df||r===Nf||r===If||r===Uf||r===Ff)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Ef)return c===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Tf)return c===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wf)return c===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Af)return c===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Cf)return c===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rf)return c===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bf)return c===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Pf)return c===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Lf)return c===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Df)return c===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nf)return c===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===If)return c===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Uf)return c===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ff)return c===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Of||r===Bf||r===kf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Of)return c===bt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===zf||r===Vf||r===Ll||r===Hf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===zf)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Vf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ll)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Hf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ya?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const ME=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class TE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new lg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new _i({vertexShader:ME,fragmentShader:EE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ni(new Ka(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wE extends as{constructor(e,n){super();const r=this;let o=null,u=1,c=null,h="local-floor",m=1,p=null,x=null,S=null,g=null,M=null,A=null;const b=typeof XRWebGLBinding<"u",v=new TE,_={},R=n.getContextAttributes();let N=null,L=null;const H=[],P=[],k=new Lt;let w=null;const I=new hi;I.viewport=new Zt;const X=new hi;X.viewport=new Zt;const O=[I,X],K=new Uv;let ue=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Se=H[se];return Se===void 0&&(Se=new Dc,H[se]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(se){let Se=H[se];return Se===void 0&&(Se=new Dc,H[se]=Se),Se.getGripSpace()},this.getHand=function(se){let Se=H[se];return Se===void 0&&(Se=new Dc,H[se]=Se),Se.getHandSpace()};function W(se){const Se=P.indexOf(se.inputSource);if(Se===-1)return;const me=H[Se];me!==void 0&&(me.update(se.inputSource,se.frame,p||c),me.dispatchEvent({type:se.type,data:se.inputSource}))}function Q(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",Q),o.removeEventListener("inputsourceschange",j);for(let se=0;se<H.length;se++){const Se=P[se];Se!==null&&(P[se]=null,H[se].disconnect(Se))}ue=null,ce=null,v.reset();for(const se in _)delete _[se];e.setRenderTarget(N),M=null,g=null,S=null,o=null,L=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){u=se,r.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){h=se,r.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(se){p=se},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return S===null&&b&&(S=new XRWebGLBinding(o,n)),S},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(N=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",Q),o.addEventListener("inputsourceschange",j),R.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(k),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ie=null,Ze=null;R.depth&&(Ze=R.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=R.stencil?ns:ir,Ie=R.stencil?Ya:Di);const Qe={colorFormat:n.RGBA8,depthFormat:Ze,scaleFactor:u};S=this.getBinding(),g=S.createProjectionLayer(Qe),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new Pi(g.textureWidth,g.textureHeight,{format:mi,type:ti,depthTexture:new Ks(g.textureWidth,g.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(o,n,me),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new Pi(M.framebufferWidth,M.framebufferHeight,{format:mi,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,c=await o.requestReferenceSpace(h),Ne.setContext(o),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(se){for(let Se=0;Se<se.removed.length;Se++){const me=se.removed[Se],Ie=P.indexOf(me);Ie>=0&&(P[Ie]=null,H[Ie].disconnect(me))}for(let Se=0;Se<se.added.length;Se++){const me=se.added[Se];let Ie=P.indexOf(me);if(Ie===-1){for(let Qe=0;Qe<H.length;Qe++)if(Qe>=P.length){P.push(me),Ie=Qe;break}else if(P[Qe]===null){P[Qe]=me,Ie=Qe;break}if(Ie===-1)break}const Ze=H[Ie];Ze&&Ze.connect(me)}}const Y=new ne,le=new ne;function oe(se,Se,me){Y.setFromMatrixPosition(Se.matrixWorld),le.setFromMatrixPosition(me.matrixWorld);const Ie=Y.distanceTo(le),Ze=Se.projectionMatrix.elements,Qe=me.projectionMatrix.elements,It=Ze[14]/(Ze[10]-1),ut=Ze[14]/(Ze[10]+1),Mt=(Ze[9]+1)/Ze[5],Dt=(Ze[9]-1)/Ze[5],ct=(Ze[8]-1)/Ze[0],Xt=(Qe[8]+1)/Qe[0],Ut=It*ct,fn=It*Xt,z=Ie/(-ct+Xt),Ft=z*-ct;if(Se.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Ft),se.translateZ(z),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Ze[10]===-1)se.projectionMatrix.copy(Se.projectionMatrix),se.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const ft=It+z,At=ut+z,Le=Ut-Ft,kt=fn+(Ie-Ft),C=Mt*ut/At*ft,y=Dt*ut/At*ft;se.projectionMatrix.makePerspective(Le,kt,C,y,ft,At),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function U(se,Se){Se===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Se.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let Se=se.near,me=se.far;v.texture!==null&&(v.depthNear>0&&(Se=v.depthNear),v.depthFar>0&&(me=v.depthFar)),K.near=X.near=I.near=Se,K.far=X.far=I.far=me,(ue!==K.near||ce!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),ue=K.near,ce=K.far),K.layers.mask=se.layers.mask|6,I.layers.mask=K.layers.mask&-5,X.layers.mask=K.layers.mask&-3;const Ie=se.parent,Ze=K.cameras;U(K,Ie);for(let Qe=0;Qe<Ze.length;Qe++)U(Ze[Qe],Ie);Ze.length===2?oe(K,I,X):K.projectionMatrix.copy(I.projectionMatrix),J(se,K,Ie)};function J(se,Se,me){me===null?se.matrix.copy(Se.matrixWorld):(se.matrix.copy(me.matrixWorld),se.matrix.invert(),se.matrix.multiply(Se.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Se.projectionMatrix),se.projectionMatrixInverse.copy(Se.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Wf*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(se){m=se,g!==null&&(g.fixedFoveation=se),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=se)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(K)},this.getCameraTexture=function(se){return _[se]};let Fe=null;function He(se,Se){if(x=Se.getViewerPose(p||c),A=Se,x!==null){const me=x.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let Ie=!1;me.length!==K.cameras.length&&(K.cameras.length=0,Ie=!0);for(let ut=0;ut<me.length;ut++){const Mt=me[ut];let Dt=null;if(M!==null)Dt=M.getViewport(Mt);else{const Xt=S.getViewSubImage(g,Mt);Dt=Xt.viewport,ut===0&&(e.setRenderTargetTextures(L,Xt.colorTexture,Xt.depthStencilTexture),e.setRenderTarget(L))}let ct=O[ut];ct===void 0&&(ct=new hi,ct.layers.enable(ut),ct.viewport=new Zt,O[ut]=ct),ct.matrix.fromArray(Mt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(Mt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),ut===0&&(K.matrix.copy(ct.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ie===!0&&K.cameras.push(ct)}const Ze=o.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){S=r.getBinding();const ut=S.getDepthInformation(me[0]);ut&&ut.isValid&&ut.texture&&v.init(ut,o.renderState)}if(Ze&&Ze.includes("camera-access")&&b){e.state.unbindTexture(),S=r.getBinding();for(let ut=0;ut<me.length;ut++){const Mt=me[ut].camera;if(Mt){let Dt=_[Mt];Dt||(Dt=new lg,_[Mt]=Dt);const ct=S.getCameraImage(Mt);Dt.sourceTexture=ct}}}}for(let me=0;me<H.length;me++){const Ie=P[me],Ze=H[me];Ie!==null&&Ze!==void 0&&Ze.update(Ie,Se,p||c)}Fe&&Fe(se,Se),Se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Se}),A=null}const Ne=new fg;Ne.setAnimationLoop(He),this.setAnimationLoop=function(se){Fe=se},this.dispose=function(){}}}const AE=new rn,vg=new lt;vg.set(-1,0,0,0,1,0,0,0,1);function CE(s,e){function n(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,ug(s)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function o(v,_,R,N,L){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?u(v,_):_.isMeshLambertMaterial?(u(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(u(v,_),S(v,_)):_.isMeshPhongMaterial?(u(v,_),x(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(u(v,_),g(v,_),_.isMeshPhysicalMaterial&&M(v,_,L)):_.isMeshMatcapMaterial?(u(v,_),A(v,_)):_.isMeshDepthMaterial?u(v,_):_.isMeshDistanceMaterial?(u(v,_),b(v,_)):_.isMeshNormalMaterial?u(v,_):_.isLineBasicMaterial?(c(v,_),_.isLineDashedMaterial&&h(v,_)):_.isPointsMaterial?m(v,_,R,N):_.isSpriteMaterial?p(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,n(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Bn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,n(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Bn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,n(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,n(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const R=e.get(_),N=R.envMap,L=R.envMapRotation;N&&(v.envMap.value=N,v.envMapRotation.value.setFromMatrix4(AE.makeRotationFromEuler(L)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(vg),v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,v.aoMapTransform))}function c(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform))}function h(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function m(v,_,R,N){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*R,v.scale.value=N*.5,_.map&&(v.map.value=_.map,n(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function p(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function x(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function S(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function g(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function M(v,_,R){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Bn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=R.texture,v.transmissionSamplerSize.value.set(R.width,R.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,v.specularIntensityMapTransform))}function A(v,_){_.matcap&&(v.matcap.value=_.matcap)}function b(v,_){const R=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(R.matrixWorld),v.nearDistance.value=R.shadow.camera.near,v.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function RE(s,e,n,r){let o={},u={},c=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,N){const L=N.program;r.uniformBlockBinding(R,L)}function p(R,N){let L=o[R.id];L===void 0&&(A(R),L=x(R),o[R.id]=L,R.addEventListener("dispose",v));const H=N.program;r.updateUBOMapping(R,H);const P=e.render.frame;u[R.id]!==P&&(g(R),u[R.id]=P)}function x(R){const N=S();R.__bindingPointIndex=N;const L=s.createBuffer(),H=R.__size,P=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,H,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,L),L}function S(){for(let R=0;R<h;R++)if(c.indexOf(R)===-1)return c.push(R),R;return yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const N=o[R.id],L=R.uniforms,H=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let P=0,k=L.length;P<k;P++){const w=Array.isArray(L[P])?L[P]:[L[P]];for(let I=0,X=w.length;I<X;I++){const O=w[I];if(M(O,P,I,H)===!0){const K=O.__offset,ue=Array.isArray(O.value)?O.value:[O.value];let ce=0;for(let W=0;W<ue.length;W++){const Q=ue[W],j=b(Q);typeof Q=="number"||typeof Q=="boolean"?(O.__data[0]=Q,s.bufferSubData(s.UNIFORM_BUFFER,K+ce,O.__data)):Q.isMatrix3?(O.__data[0]=Q.elements[0],O.__data[1]=Q.elements[1],O.__data[2]=Q.elements[2],O.__data[3]=0,O.__data[4]=Q.elements[3],O.__data[5]=Q.elements[4],O.__data[6]=Q.elements[5],O.__data[7]=0,O.__data[8]=Q.elements[6],O.__data[9]=Q.elements[7],O.__data[10]=Q.elements[8],O.__data[11]=0):ArrayBuffer.isView(Q)?O.__data.set(new Q.constructor(Q.buffer,Q.byteOffset,O.__data.length)):(Q.toArray(O.__data,ce),ce+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(R,N,L,H){const P=R.value,k=N+"_"+L;if(H[k]===void 0)return typeof P=="number"||typeof P=="boolean"?H[k]=P:ArrayBuffer.isView(P)?H[k]=P.slice():H[k]=P.clone(),!0;{const w=H[k];if(typeof P=="number"||typeof P=="boolean"){if(w!==P)return H[k]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(w.equals(P)===!1)return w.copy(P),!0}}return!1}function A(R){const N=R.uniforms;let L=0;const H=16;for(let k=0,w=N.length;k<w;k++){const I=Array.isArray(N[k])?N[k]:[N[k]];for(let X=0,O=I.length;X<O;X++){const K=I[X],ue=Array.isArray(K.value)?K.value:[K.value];for(let ce=0,W=ue.length;ce<W;ce++){const Q=ue[ce],j=b(Q),Y=L%H,le=Y%j.boundary,oe=Y+le;L+=le,oe!==0&&H-oe<j.storage&&(L+=H-oe),K.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=L,L+=j.storage}}}const P=L%H;return P>0&&(L+=H-P),R.__size=L,R.__cache={},this}function b(R){const N={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(N.boundary=4,N.storage=4):R.isVector2?(N.boundary=8,N.storage=8):R.isVector3||R.isColor?(N.boundary=16,N.storage=12):R.isVector4?(N.boundary=16,N.storage=16):R.isMatrix3?(N.boundary=48,N.storage=48):R.isMatrix4?(N.boundary=64,N.storage=64):R.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(N.boundary=16,N.storage=R.byteLength):it("WebGLRenderer: Unsupported uniform value type.",R),N}function v(R){const N=R.target;N.removeEventListener("dispose",v);const L=c.indexOf(N.__bindingPointIndex);c.splice(L,1),s.deleteBuffer(o[N.id]),delete o[N.id],delete u[N.id]}function _(){for(const R in o)s.deleteBuffer(o[R]);c=[],o={},u={}}return{bind:m,update:p,dispose:_}}const bE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wi=null;function PE(){return wi===null&&(wi=new Mv(bE,16,16,rs,nr),wi.name="DFG_LUT",wi.minFilter=Mn,wi.magFilter=Mn,wi.wrapS=Qi,wi.wrapT=Qi,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}class LE{constructor(e={}){const{canvas:n=Q_(),context:r=null,depth:o=!0,stencil:u=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:M=ti}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=c;const b=M,v=new Set([ed,Jf,Qf]),_=new Set([ti,Di,Xa,Ya,Kf,Zf]),R=new Uint32Array(4),N=new Int32Array(4),L=new ne;let H=null,P=null;const k=[],w=[];let I=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let O=!1,K=null;this._outputColorSpace=ei;let ue=0,ce=0,W=null,Q=-1,j=null;const Y=new Zt,le=new Zt;let oe=null;const U=new Pt(0);let J=0,Fe=n.width,He=n.height,Ne=1,se=null,Se=null;const me=new Zt(0,0,Fe,He),Ie=new Zt(0,0,Fe,He);let Ze=!1;const Qe=new ag;let It=!1,ut=!1;const Mt=new rn,Dt=new ne,ct=new Zt,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function fn(){return W===null?Ne:1}let z=r;function Ft(T,G){return n.getContext(T,G)}try{const T={alpha:!0,depth:o,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$f}`),n.addEventListener("webglcontextlost",_e,!1),n.addEventListener("webglcontextrestored",Xe,!1),n.addEventListener("webglcontextcreationerror",st,!1),z===null){const G="webgl2";if(z=Ft(G,T),z===null)throw Ft(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw yt("WebGLRenderer: "+T.message),T}let ft,At,Le,kt,C,y,q,he,ge,Me,Pe,fe,pe,Ue,Be,Ae,Ee,tt,rt,ht,B,we,de;function Oe(){ft=new Py(z),ft.init(),B=new yE(z,ft),At=new My(z,ft,e,B),Le=new xE(z,ft),At.reversedDepthBuffer&&g&&Le.buffers.depth.setReversed(!0),kt=new Ny(z),C=new sE,y=new SE(z,ft,Le,C,At,B,kt),q=new by(X),he=new Ov(z),we=new Sy(z,he),ge=new Ly(z,he,kt,we),Me=new Uy(z,ge,he,we,kt),tt=new Iy(z,At,y),Be=new Ey(C),Pe=new rE(X,q,ft,At,we,Be),fe=new CE(X,C),pe=new oE,Ue=new hE(ft),Ee=new xy(X,q,Le,Me,A,m),Ae=new vE(X,Me,At),de=new RE(z,kt,At,Le),rt=new yy(z,ft,kt),ht=new Dy(z,ft,kt),kt.programs=Pe.programs,X.capabilities=At,X.extensions=ft,X.properties=C,X.renderLists=pe,X.shadowMap=Ae,X.state=Le,X.info=kt}Oe(),b!==ti&&(I=new Oy(b,n.width,n.height,o,u));const Re=new wE(X,z);this.xr=Re,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=ft.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ft.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(T){T!==void 0&&(Ne=T,this.setSize(Fe,He,!1))},this.getSize=function(T){return T.set(Fe,He)},this.setSize=function(T,G,ie=!0){if(Re.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=T,He=G,n.width=Math.floor(T*Ne),n.height=Math.floor(G*Ne),ie===!0&&(n.style.width=T+"px",n.style.height=G+"px"),I!==null&&I.setSize(n.width,n.height),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(Fe*Ne,He*Ne).floor()},this.setDrawingBufferSize=function(T,G,ie){Fe=T,He=G,Ne=ie,n.width=Math.floor(T*ie),n.height=Math.floor(G*ie),this.setViewport(0,0,T,G)},this.setEffects=function(T){if(b===ti){yt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let G=0;G<T.length;G++)if(T[G].isOutputPass===!0){it("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Y)},this.getViewport=function(T){return T.copy(me)},this.setViewport=function(T,G,ie,ee){T.isVector4?me.set(T.x,T.y,T.z,T.w):me.set(T,G,ie,ee),Le.viewport(Y.copy(me).multiplyScalar(Ne).round())},this.getScissor=function(T){return T.copy(Ie)},this.setScissor=function(T,G,ie,ee){T.isVector4?Ie.set(T.x,T.y,T.z,T.w):Ie.set(T,G,ie,ee),Le.scissor(le.copy(Ie).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(T){Le.setScissorTest(Ze=T)},this.setOpaqueSort=function(T){se=T},this.setTransparentSort=function(T){Se=T},this.getClearColor=function(T){return T.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,ie=!0){let ee=0;if(T){let Z=!1;if(W!==null){const be=W.texture.format;Z=v.has(be)}if(Z){const be=W.texture.type,Ve=_.has(be),Ce=Ee.getClearColor(),Ye=Ee.getClearAlpha(),Ke=Ce.r,at=Ce.g,ot=Ce.b;Ve?(R[0]=Ke,R[1]=at,R[2]=ot,R[3]=Ye,z.clearBufferuiv(z.COLOR,0,R)):(N[0]=Ke,N[1]=at,N[2]=ot,N[3]=Ye,z.clearBufferiv(z.COLOR,0,N))}else ee|=z.COLOR_BUFFER_BIT}G&&(ee|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(ee|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&z.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),K=T},this.dispose=function(){n.removeEventListener("webglcontextlost",_e,!1),n.removeEventListener("webglcontextrestored",Xe,!1),n.removeEventListener("webglcontextcreationerror",st,!1),Ee.dispose(),pe.dispose(),Ue.dispose(),C.dispose(),q.dispose(),Me.dispose(),we.dispose(),de.dispose(),Pe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Nr),Re.removeEventListener("sessionend",ls),Fi.stop()};function _e(T){T.preventDefault(),Xp("WebGLRenderer: Context Lost."),O=!0}function Xe(){Xp("WebGLRenderer: Context Restored."),O=!1;const T=kt.autoReset,G=Ae.enabled,ie=Ae.autoUpdate,ee=Ae.needsUpdate,Z=Ae.type;Oe(),kt.autoReset=T,Ae.enabled=G,Ae.autoUpdate=ie,Ae.needsUpdate=ee,Ae.type=Z}function st(T){yt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Nt(T){const G=T.target;G.removeEventListener("dispose",Nt),Et(G)}function Et(T){En(T),C.remove(T)}function En(T){const G=C.get(T).programs;G!==void 0&&(G.forEach(function(ie){Pe.releaseProgram(ie)}),T.isShaderMaterial&&Pe.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,ie,ee,Z,be){G===null&&(G=Xt);const Ve=Z.isMesh&&Z.matrixWorld.determinant()<0,Ce=Ja(T,G,ie,ee,Z);Le.setMaterial(ee,Ve);let Ye=ie.index,Ke=1;if(ee.wireframe===!0){if(Ye=ge.getWireframeAttribute(ie),Ye===void 0)return;Ke=2}const at=ie.drawRange,ot=ie.attributes.position;let $e=at.start*Ke,xt=(at.start+at.count)*Ke;be!==null&&($e=Math.max($e,be.start*Ke),xt=Math.min(xt,(be.start+be.count)*Ke)),Ye!==null?($e=Math.max($e,0),xt=Math.min(xt,Ye.count)):ot!=null&&($e=Math.max($e,0),xt=Math.min(xt,ot.count));const Ot=xt-$e;if(Ot<0||Ot===1/0)return;we.setup(Z,ee,Ce,ie,Ye);let Gt,Ct=rt;if(Ye!==null&&(Gt=he.get(Ye),Ct=ht,Ct.setIndex(Gt)),Z.isMesh)ee.wireframe===!0?(Le.setLineWidth(ee.wireframeLinewidth*fn()),Ct.setMode(z.LINES)):Ct.setMode(z.TRIANGLES);else if(Z.isLine){let Qt=ee.linewidth;Qt===void 0&&(Qt=1),Le.setLineWidth(Qt*fn()),Z.isLineSegments?Ct.setMode(z.LINES):Z.isLineLoop?Ct.setMode(z.LINE_LOOP):Ct.setMode(z.LINE_STRIP)}else Z.isPoints?Ct.setMode(z.POINTS):Z.isSprite&&Ct.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))Ct.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qt=Z._multiDrawStarts,ke=Z._multiDrawCounts,dn=Z._multiDrawCount,pt=Ye?he.get(Ye).bytesPerElement:1,bn=C.get(ee).currentProgram.getUniforms();for(let Pn=0;Pn<dn;Pn++)bn.setValue(z,"_gl_DrawID",Pn),Ct.render(Qt[Pn]/pt,ke[Pn])}else if(Z.isInstancedMesh)Ct.renderInstances($e,Ot,Z.count);else if(ie.isInstancedBufferGeometry){const Qt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ke=Math.min(ie.instanceCount,Qt);Ct.renderInstances($e,Ot,ke)}else Ct.render($e,Ot)};function Yn(T,G,ie){T.transparent===!0&&T.side===Zi&&T.forceSinglePass===!1?(T.side=Bn,T.needsUpdate=!0,us(T,G,ie),T.side=Dr,T.needsUpdate=!0,us(T,G,ie),T.side=Zi):us(T,G,ie)}this.compile=function(T,G,ie=null){ie===null&&(ie=T),P=Ue.get(ie),P.init(G),w.push(P),ie.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(P.pushLight(Z),Z.castShadow&&P.pushShadow(Z))}),T!==ie&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(P.pushLight(Z),Z.castShadow&&P.pushShadow(Z))}),P.setupLights();const ee=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const be=Z.material;if(be)if(Array.isArray(be))for(let Ve=0;Ve<be.length;Ve++){const Ce=be[Ve];Yn(Ce,ie,Z),ee.add(Ce)}else Yn(be,ie,Z),ee.add(be)}),P=w.pop(),ee},this.compileAsync=function(T,G,ie=null){const ee=this.compile(T,G,ie);return new Promise(Z=>{function be(){if(ee.forEach(function(Ve){C.get(Ve).currentProgram.isReady()&&ee.delete(Ve)}),ee.size===0){Z(T);return}setTimeout(be,10)}ft.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Ui=null;function os(T){Ui&&Ui(T)}function Nr(){Fi.stop()}function ls(){Fi.start()}const Fi=new fg;Fi.setAnimationLoop(os),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(T){Ui=T,Re.setAnimationLoop(T),T===null?Fi.stop():Fi.start()},Re.addEventListener("sessionstart",Nr),Re.addEventListener("sessionend",ls),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;K!==null&&K.renderStart(T,G);const ie=Re.enabled===!0&&Re.isPresenting===!0,ee=I!==null&&(W===null||ie)&&I.begin(X,W);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(G),G=Re.getCamera()),T.isScene===!0&&T.onBeforeRender(X,T,G,W),P=Ue.get(T,w.length),P.init(G),P.state.textureUnits=y.getTextureUnits(),w.push(P),Mt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Qe.setFromProjectionMatrix(Mt,Ri,G.reversedDepth),ut=this.localClippingEnabled,It=Be.init(this.clippingPlanes,ut),H=pe.get(T,k.length),H.init(),k.push(H),Re.enabled===!0&&Re.isPresenting===!0){const Ve=X.xr.getDepthSensingMesh();Ve!==null&&ea(Ve,G,-1/0,X.sortObjects)}ea(T,G,0,X.sortObjects),H.finish(),X.sortObjects===!0&&H.sort(se,Se),Ut=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Ut&&Ee.addToRenderList(H,T),this.info.render.frame++,It===!0&&Be.beginShadows();const Z=P.state.shadowsArray;if(Ae.render(Z,T,G),It===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&I.hasRenderPass())===!1){const Ve=H.opaque,Ce=H.transmissive;if(P.setupLights(),G.isArrayCamera){const Ye=G.cameras;if(Ce.length>0)for(let Ke=0,at=Ye.length;Ke<at;Ke++){const ot=Ye[Ke];vi(Ve,Ce,T,ot)}Ut&&Ee.render(T);for(let Ke=0,at=Ye.length;Ke<at;Ke++){const ot=Ye[Ke];Za(H,T,ot,ot.viewport)}}else Ce.length>0&&vi(Ve,Ce,T,G),Ut&&Ee.render(T),Za(H,T,G)}W!==null&&ce===0&&(y.updateMultisampleRenderTarget(W),y.updateRenderTargetMipmap(W)),ee&&I.end(X),T.isScene===!0&&T.onAfterRender(X,T,G),we.resetDefaultState(),Q=-1,j=null,w.pop(),w.length>0?(P=w[w.length-1],y.setTextureUnits(P.state.textureUnits),It===!0&&Be.setGlobalState(X.clippingPlanes,P.state.camera)):P=null,k.pop(),k.length>0?H=k[k.length-1]:H=null,K!==null&&K.renderEnd()};function ea(T,G,ie,ee){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)ie=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLightProbeGrid)P.pushLightProbeGrid(T);else if(T.isLight)P.pushLight(T),T.castShadow&&P.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Qe.intersectsSprite(T)){ee&&ct.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Mt);const Ve=Me.update(T),Ce=T.material;Ce.visible&&H.push(T,Ve,Ce,ie,ct.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Qe.intersectsObject(T))){const Ve=Me.update(T),Ce=T.material;if(ee&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ct.copy(T.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ct.copy(Ve.boundingSphere.center)),ct.applyMatrix4(T.matrixWorld).applyMatrix4(Mt)),Array.isArray(Ce)){const Ye=Ve.groups;for(let Ke=0,at=Ye.length;Ke<at;Ke++){const ot=Ye[Ke],$e=Ce[ot.materialIndex];$e&&$e.visible&&H.push(T,Ve,$e,ie,ct.z,ot)}}else Ce.visible&&H.push(T,Ve,Ce,ie,ct.z,null)}}const be=T.children;for(let Ve=0,Ce=be.length;Ve<Ce;Ve++)ea(be[Ve],G,ie,ee)}function Za(T,G,ie,ee){const{opaque:Z,transmissive:be,transparent:Ve}=T;P.setupLightsView(ie),It===!0&&Be.setGlobalState(X.clippingPlanes,ie),ee&&Le.viewport(Y.copy(ee)),Z.length>0&&Ir(Z,G,ie),be.length>0&&Ir(be,G,ie),Ve.length>0&&Ir(Ve,G,ie),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function vi(T,G,ie,ee){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ee.id]===void 0){const $e=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ee.id]=new Pi(1,1,{generateMipmaps:!0,type:$e?nr:ti,minFilter:ts,samples:Math.max(4,At.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace})}const be=P.state.transmissionRenderTarget[ee.id],Ve=ee.viewport||Y;be.setSize(Ve.z*X.transmissionResolutionScale,Ve.w*X.transmissionResolutionScale);const Ce=X.getRenderTarget(),Ye=X.getActiveCubeFace(),Ke=X.getActiveMipmapLevel();X.setRenderTarget(be),X.getClearColor(U),J=X.getClearAlpha(),J<1&&X.setClearColor(16777215,.5),X.clear(),Ut&&Ee.render(ie);const at=X.toneMapping;X.toneMapping=bi;const ot=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),P.setupLightsView(ee),It===!0&&Be.setGlobalState(X.clippingPlanes,ee),Ir(T,ie,ee),y.updateMultisampleRenderTarget(be),y.updateRenderTargetMipmap(be),ft.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let xt=0,Ot=G.length;xt<Ot;xt++){const Gt=G[xt],{object:Ct,geometry:Qt,material:ke,group:dn}=Gt;if(ke.side===Zi&&Ct.layers.test(ee.layers)){const pt=ke.side;ke.side=Bn,ke.needsUpdate=!0,ta(Ct,ie,ee,Qt,ke,dn),ke.side=pt,ke.needsUpdate=!0,$e=!0}}$e===!0&&(y.updateMultisampleRenderTarget(be),y.updateRenderTargetMipmap(be))}X.setRenderTarget(Ce,Ye,Ke),X.setClearColor(U,J),ot!==void 0&&(ee.viewport=ot),X.toneMapping=at}function Ir(T,G,ie){const ee=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,be=T.length;Z<be;Z++){const Ve=T[Z],{object:Ce,geometry:Ye,group:Ke}=Ve;let at=Ve.material;at.allowOverride===!0&&ee!==null&&(at=ee),Ce.layers.test(ie.layers)&&ta(Ce,G,ie,Ye,at,Ke)}}function ta(T,G,ie,ee,Z,be){T.onBeforeRender(X,G,ie,ee,Z,be),T.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(X,G,ie,ee,T,be),Z.transparent===!0&&Z.side===Zi&&Z.forceSinglePass===!1?(Z.side=Bn,Z.needsUpdate=!0,X.renderBufferDirect(ie,G,ee,Z,T,be),Z.side=Dr,Z.needsUpdate=!0,X.renderBufferDirect(ie,G,ee,Z,T,be),Z.side=Zi):X.renderBufferDirect(ie,G,ee,Z,T,be),T.onAfterRender(X,G,ie,ee,Z,be)}function us(T,G,ie){G.isScene!==!0&&(G=Xt);const ee=C.get(T),Z=P.state.lights,be=P.state.shadowsArray,Ve=Z.state.version,Ce=Pe.getParameters(T,Z.state,be,G,ie,P.state.lightProbeGridArray),Ye=Pe.getProgramCacheKey(Ce);let Ke=ee.programs;ee.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,ee.fog=G.fog;const at=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;ee.envMap=q.get(T.envMap||ee.environment,at),ee.envMapRotation=ee.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,Ke===void 0&&(T.addEventListener("dispose",Nt),Ke=new Map,ee.programs=Ke);let ot=Ke.get(Ye);if(ot!==void 0){if(ee.currentProgram===ot&&ee.lightsStateVersion===Ve)return ia(T,Ce),ot}else Ce.uniforms=Pe.getUniforms(T),K!==null&&T.isNodeMaterial&&K.build(T,ie,Ce),T.onBeforeCompile(Ce,X),ot=Pe.acquireProgram(Ce,Ye),Ke.set(Ye,ot),ee.uniforms=Ce.uniforms;const $e=ee.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&($e.clippingPlanes=Be.uniform),ia(T,Ce),ee.needsLights=Hl(T),ee.lightsStateVersion=Ve,ee.needsLights&&($e.ambientLightColor.value=Z.state.ambient,$e.lightProbe.value=Z.state.probe,$e.directionalLights.value=Z.state.directional,$e.directionalLightShadows.value=Z.state.directionalShadow,$e.spotLights.value=Z.state.spot,$e.spotLightShadows.value=Z.state.spotShadow,$e.rectAreaLights.value=Z.state.rectArea,$e.ltc_1.value=Z.state.rectAreaLTC1,$e.ltc_2.value=Z.state.rectAreaLTC2,$e.pointLights.value=Z.state.point,$e.pointLightShadows.value=Z.state.pointShadow,$e.hemisphereLights.value=Z.state.hemi,$e.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,$e.spotLightMatrix.value=Z.state.spotLightMatrix,$e.spotLightMap.value=Z.state.spotLightMap,$e.pointShadowMatrix.value=Z.state.pointShadowMatrix),ee.lightProbeGrid=P.state.lightProbeGridArray.length>0,ee.currentProgram=ot,ee.uniformsList=null,ot}function na(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=bl.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function ia(T,G){const ie=C.get(T);ie.outputColorSpace=G.outputColorSpace,ie.batching=G.batching,ie.batchingColor=G.batchingColor,ie.instancing=G.instancing,ie.instancingColor=G.instancingColor,ie.instancingMorph=G.instancingMorph,ie.skinning=G.skinning,ie.morphTargets=G.morphTargets,ie.morphNormals=G.morphNormals,ie.morphColors=G.morphColors,ie.morphTargetsCount=G.morphTargetsCount,ie.numClippingPlanes=G.numClippingPlanes,ie.numIntersection=G.numClipIntersection,ie.vertexAlphas=G.vertexAlphas,ie.vertexTangents=G.vertexTangents,ie.toneMapping=G.toneMapping}function Qa(T,G){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;L.setFromMatrixPosition(G.matrixWorld);for(let ie=0,ee=T.length;ie<ee;ie++){const Z=T[ie];if(Z.texture!==null&&Z.boundingBox.containsPoint(L))return Z}return null}function Ja(T,G,ie,ee,Z){G.isScene!==!0&&(G=Xt),y.resetTextureUnits();const be=G.fog,Ve=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?G.environment:null,Ce=W===null?X.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:_t.workingColorSpace,Ye=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Ke=q.get(ee.envMap||Ve,Ye),at=ee.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ot=!!ie.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),$e=!!ie.morphAttributes.position,xt=!!ie.morphAttributes.normal,Ot=!!ie.morphAttributes.color;let Gt=bi;ee.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Gt=X.toneMapping);const Ct=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Qt=Ct!==void 0?Ct.length:0,ke=C.get(ee),dn=P.state.lights;if(It===!0&&(ut===!0||T!==j)){const Rt=T===j&&ee.id===Q;Be.setState(ee,T,Rt)}let pt=!1;ee.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==dn.state.version||ke.outputColorSpace!==Ce||Z.isBatchedMesh&&ke.batching===!1||!Z.isBatchedMesh&&ke.batching===!0||Z.isBatchedMesh&&ke.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&ke.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&ke.instancing===!1||!Z.isInstancedMesh&&ke.instancing===!0||Z.isSkinnedMesh&&ke.skinning===!1||!Z.isSkinnedMesh&&ke.skinning===!0||Z.isInstancedMesh&&ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ke.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ke.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ke.instancingMorph===!1&&Z.morphTexture!==null||ke.envMap!==Ke||ee.fog===!0&&ke.fog!==be||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Be.numPlanes||ke.numIntersection!==Be.numIntersection)||ke.vertexAlphas!==at||ke.vertexTangents!==ot||ke.morphTargets!==$e||ke.morphNormals!==xt||ke.morphColors!==Ot||ke.toneMapping!==Gt||ke.morphTargetsCount!==Qt||!!ke.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,ke.__version=ee.version);let bn=ke.currentProgram;pt===!0&&(bn=us(ee,G,Z),K&&ee.isNodeMaterial&&K.onUpdateProgram(ee,bn,ke));let Pn=!1,mt=!1,Oi=!1;const wt=bn.getUniforms(),zt=ke.uniforms;if(Le.useProgram(bn.program)&&(Pn=!0,mt=!0,Oi=!0),ee.id!==Q&&(Q=ee.id,mt=!0),ke.needsLights){const Rt=Qa(P.state.lightProbeGridArray,Z);ke.lightProbeGrid!==Rt&&(ke.lightProbeGrid=Rt,mt=!0)}if(Pn||j!==T){Le.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),wt.setValue(z,"projectionMatrix",T.projectionMatrix),wt.setValue(z,"viewMatrix",T.matrixWorldInverse);const ii=wt.map.cameraPosition;ii!==void 0&&ii.setValue(z,Dt.setFromMatrixPosition(T.matrixWorld)),At.logarithmicDepthBuffer&&wt.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&wt.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),j!==T&&(j=T,mt=!0,Oi=!0)}if(ke.needsLights&&(dn.state.directionalShadowMap.length>0&&wt.setValue(z,"directionalShadowMap",dn.state.directionalShadowMap,y),dn.state.spotShadowMap.length>0&&wt.setValue(z,"spotShadowMap",dn.state.spotShadowMap,y),dn.state.pointShadowMap.length>0&&wt.setValue(z,"pointShadowMap",dn.state.pointShadowMap,y)),Z.isSkinnedMesh){wt.setOptional(z,Z,"bindMatrix"),wt.setOptional(z,Z,"bindMatrixInverse");const Rt=Z.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),wt.setValue(z,"boneTexture",Rt.boneTexture,y))}Z.isBatchedMesh&&(wt.setOptional(z,Z,"batchingTexture"),wt.setValue(z,"batchingTexture",Z._matricesTexture,y),wt.setOptional(z,Z,"batchingIdTexture"),wt.setValue(z,"batchingIdTexture",Z._indirectTexture,y),wt.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&wt.setValue(z,"batchingColorTexture",Z._colorsTexture,y));const ni=ie.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&tt.update(Z,ie,bn),(mt||ke.receiveShadow!==Z.receiveShadow)&&(ke.receiveShadow=Z.receiveShadow,wt.setValue(z,"receiveShadow",Z.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&G.environment!==null&&(zt.envMapIntensity.value=G.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=PE()),mt){if(wt.setValue(z,"toneMappingExposure",X.toneMappingExposure),ke.needsLights&&Vl(zt,Oi),be&&ee.fog===!0&&fe.refreshFogUniforms(zt,be),fe.refreshMaterialUniforms(zt,ee,Ne,He,P.state.transmissionRenderTarget[T.id]),ke.needsLights&&ke.lightProbeGrid){const Rt=ke.lightProbeGrid;zt.probesSH.value=Rt.texture,zt.probesMin.value.copy(Rt.boundingBox.min),zt.probesMax.value.copy(Rt.boundingBox.max),zt.probesResolution.value.copy(Rt.resolution)}bl.upload(z,na(ke),zt,y)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(bl.upload(z,na(ke),zt,y),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&wt.setValue(z,"center",Z.center),wt.setValue(z,"modelViewMatrix",Z.modelViewMatrix),wt.setValue(z,"normalMatrix",Z.normalMatrix),wt.setValue(z,"modelMatrix",Z.matrixWorld),ee.uniformsGroups!==void 0){const Rt=ee.uniformsGroups;for(let ii=0,xi=Rt.length;ii<xi;ii++){const Ur=Rt[ii];de.update(Ur,bn),de.bind(Ur,bn)}}return bn}function Vl(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function Hl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(T,G,ie){const ee=C.get(T);ee.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),C.get(T.texture).__webglTexture=G,C.get(T.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ie,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){const ie=C.get(T);ie.__webglFramebuffer=G,ie.__useDefaultFramebuffer=G===void 0};const Yt=z.createFramebuffer();this.setRenderTarget=function(T,G=0,ie=0){W=T,ue=G,ce=ie;let ee=null,Z=!1,be=!1;if(T){const Ce=C.get(T);if(Ce.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(z.FRAMEBUFFER,Ce.__webglFramebuffer),Y.copy(T.viewport),le.copy(T.scissor),oe=T.scissorTest,Le.viewport(Y),Le.scissor(le),Le.setScissorTest(oe),Q=-1;return}else if(Ce.__webglFramebuffer===void 0)y.setupRenderTarget(T);else if(Ce.__hasExternalTextures)y.rebindTextures(T,C.get(T.texture).__webglTexture,C.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const at=T.depthTexture;if(Ce.__boundDepthTexture!==at){if(at!==null&&C.has(at)&&(T.width!==at.image.width||T.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(T)}}const Ye=T.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(be=!0);const Ke=C.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ke[G])?ee=Ke[G][ie]:ee=Ke[G],Z=!0):T.samples>0&&y.useMultisampledRTT(T)===!1?ee=C.get(T).__webglMultisampledFramebuffer:Array.isArray(Ke)?ee=Ke[ie]:ee=Ke,Y.copy(T.viewport),le.copy(T.scissor),oe=T.scissorTest}else Y.copy(me).multiplyScalar(Ne).floor(),le.copy(Ie).multiplyScalar(Ne).floor(),oe=Ze;if(ie!==0&&(ee=Yt),Le.bindFramebuffer(z.FRAMEBUFFER,ee)&&Le.drawBuffers(T,ee),Le.viewport(Y),Le.scissor(le),Le.setScissorTest(oe),Z){const Ce=C.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ce.__webglTexture,ie)}else if(be){const Ce=G;for(let Ye=0;Ye<T.textures.length;Ye++){const Ke=C.get(T.textures[Ye]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ye,Ke.__webglTexture,ie,Ce)}}else if(T!==null&&ie!==0){const Ce=C.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ce.__webglTexture,ie)}Q=-1},this.readRenderTargetPixels=function(T,G,ie,ee,Z,be,Ve,Ce=0){if(!(T&&T.isWebGLRenderTarget)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=C.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ye=Ye[Ve]),Ye){Le.bindFramebuffer(z.FRAMEBUFFER,Ye);try{const Ke=T.textures[Ce],at=Ke.format,ot=Ke.type;if(T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ce),!At.textureFormatReadable(at)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(ot)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-ee&&ie>=0&&ie<=T.height-Z&&z.readPixels(G,ie,ee,Z,B.convert(at),B.convert(ot),be)}finally{const Ke=W!==null?C.get(W).__webglFramebuffer:null;Le.bindFramebuffer(z.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(T,G,ie,ee,Z,be,Ve,Ce=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=C.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ye=Ye[Ve]),Ye)if(G>=0&&G<=T.width-ee&&ie>=0&&ie<=T.height-Z){Le.bindFramebuffer(z.FRAMEBUFFER,Ye);const Ke=T.textures[Ce],at=Ke.format,ot=Ke.type;if(T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ce),!At.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,$e),z.bufferData(z.PIXEL_PACK_BUFFER,be.byteLength,z.STREAM_READ),z.readPixels(G,ie,ee,Z,B.convert(at),B.convert(ot),0);const xt=W!==null?C.get(W).__webglFramebuffer:null;Le.bindFramebuffer(z.FRAMEBUFFER,xt);const Ot=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await J_(z,Ot,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,$e),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,be),z.deleteBuffer($e),z.deleteSync(Ot),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,ie=0){const ee=Math.pow(2,-ie),Z=Math.floor(T.image.width*ee),be=Math.floor(T.image.height*ee),Ve=G!==null?G.x:0,Ce=G!==null?G.y:0;y.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,ie,0,0,Ve,Ce,Z,be),Le.unbindTexture()};const Gl=z.createFramebuffer(),ra=z.createFramebuffer();this.copyTextureToTexture=function(T,G,ie=null,ee=null,Z=0,be=0){let Ve,Ce,Ye,Ke,at,ot,$e,xt,Ot;const Gt=T.isCompressedTexture?T.mipmaps[be]:T.image;if(ie!==null)Ve=ie.max.x-ie.min.x,Ce=ie.max.y-ie.min.y,Ye=ie.isBox3?ie.max.z-ie.min.z:1,Ke=ie.min.x,at=ie.min.y,ot=ie.isBox3?ie.min.z:0;else{const zt=Math.pow(2,-Z);Ve=Math.floor(Gt.width*zt),Ce=Math.floor(Gt.height*zt),T.isDataArrayTexture?Ye=Gt.depth:T.isData3DTexture?Ye=Math.floor(Gt.depth*zt):Ye=1,Ke=0,at=0,ot=0}ee!==null?($e=ee.x,xt=ee.y,Ot=ee.z):($e=0,xt=0,Ot=0);const Ct=B.convert(G.format),Qt=B.convert(G.type);let ke;G.isData3DTexture?(y.setTexture3D(G,0),ke=z.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(y.setTexture2DArray(G,0),ke=z.TEXTURE_2D_ARRAY):(y.setTexture2D(G,0),ke=z.TEXTURE_2D),Le.activeTexture(z.TEXTURE0),Le.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),Le.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),Le.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);const dn=Le.getParameter(z.UNPACK_ROW_LENGTH),pt=Le.getParameter(z.UNPACK_IMAGE_HEIGHT),bn=Le.getParameter(z.UNPACK_SKIP_PIXELS),Pn=Le.getParameter(z.UNPACK_SKIP_ROWS),mt=Le.getParameter(z.UNPACK_SKIP_IMAGES);Le.pixelStorei(z.UNPACK_ROW_LENGTH,Gt.width),Le.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Gt.height),Le.pixelStorei(z.UNPACK_SKIP_PIXELS,Ke),Le.pixelStorei(z.UNPACK_SKIP_ROWS,at),Le.pixelStorei(z.UNPACK_SKIP_IMAGES,ot);const Oi=T.isDataArrayTexture||T.isData3DTexture,wt=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const zt=C.get(T),ni=C.get(G),Rt=C.get(zt.__renderTarget),ii=C.get(ni.__renderTarget);Le.bindFramebuffer(z.READ_FRAMEBUFFER,Rt.__webglFramebuffer),Le.bindFramebuffer(z.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let xi=0;xi<Ye;xi++)Oi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,C.get(T).__webglTexture,Z,ot+xi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,C.get(G).__webglTexture,be,Ot+xi)),z.blitFramebuffer(Ke,at,Ve,Ce,$e,xt,Ve,Ce,z.DEPTH_BUFFER_BIT,z.NEAREST);Le.bindFramebuffer(z.READ_FRAMEBUFFER,null),Le.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||C.has(T)){const zt=C.get(T),ni=C.get(G);Le.bindFramebuffer(z.READ_FRAMEBUFFER,Gl),Le.bindFramebuffer(z.DRAW_FRAMEBUFFER,ra);for(let Rt=0;Rt<Ye;Rt++)Oi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,zt.__webglTexture,Z,ot+Rt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,zt.__webglTexture,Z),wt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ni.__webglTexture,be,Ot+Rt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ni.__webglTexture,be),Z!==0?z.blitFramebuffer(Ke,at,Ve,Ce,$e,xt,Ve,Ce,z.COLOR_BUFFER_BIT,z.NEAREST):wt?z.copyTexSubImage3D(ke,be,$e,xt,Ot+Rt,Ke,at,Ve,Ce):z.copyTexSubImage2D(ke,be,$e,xt,Ke,at,Ve,Ce);Le.bindFramebuffer(z.READ_FRAMEBUFFER,null),Le.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else wt?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(ke,be,$e,xt,Ot,Ve,Ce,Ye,Ct,Qt,Gt.data):G.isCompressedArrayTexture?z.compressedTexSubImage3D(ke,be,$e,xt,Ot,Ve,Ce,Ye,Ct,Gt.data):z.texSubImage3D(ke,be,$e,xt,Ot,Ve,Ce,Ye,Ct,Qt,Gt):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,be,$e,xt,Ve,Ce,Ct,Qt,Gt.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,be,$e,xt,Gt.width,Gt.height,Ct,Gt.data):z.texSubImage2D(z.TEXTURE_2D,be,$e,xt,Ve,Ce,Ct,Qt,Gt);Le.pixelStorei(z.UNPACK_ROW_LENGTH,dn),Le.pixelStorei(z.UNPACK_IMAGE_HEIGHT,pt),Le.pixelStorei(z.UNPACK_SKIP_PIXELS,bn),Le.pixelStorei(z.UNPACK_SKIP_ROWS,Pn),Le.pixelStorei(z.UNPACK_SKIP_IMAGES,mt),be===0&&G.generateMipmaps&&z.generateMipmap(ke),Le.unbindTexture()},this.initRenderTarget=function(T){C.get(T).__webglFramebuffer===void 0&&y.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?y.setTextureCube(T,0):T.isData3DTexture?y.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?y.setTexture2DArray(T,0):y.setTexture2D(T,0),Le.unbindTexture()},this.resetState=function(){ue=0,ce=0,W=null,Le.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),n.unpackColorSpace=_t._getUnpackColorSpace()}}const DE=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,NE=`
precision highp float;

uniform vec2  u_res;        // drawing-buffer size (device px)
uniform float u_time;
uniform float u_pixelRatio;
varying vec2  vUv;

const float CELL_CSS = 9.0; // tiny square size in CSS px

float hash21(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  mat2 m = mat2(1.6, -0.7, 0.7, 1.6);
  for (int i = 0; i < 4; i++) { v += vnoise(p) * a; p = m * p + 2.3; a *= 0.5; }
  return v;
}

void main() {
  vec2 uv = vUv;
  float aspect = u_res.x / max(u_res.y, 1.0);

  vec2 p = uv - 0.5;
  p.x *= aspect;
  float d = length(p);

  // --- Fine grid of tiny soft squares --------------------------------------
  float cellPx = CELL_CSS * u_pixelRatio;
  vec2  grid   = uv * (u_res / cellPx);
  vec2  cellId = floor(grid);
  vec2  local  = fract(grid) - 0.5;

  vec2  cellCenter = (cellId + 0.5) * cellPx / u_res;
  vec2  cc = cellCenter - 0.5; cc.x *= aspect;
  float dCell = length(cc);
  float ang   = atan(cc.y, cc.x);

  float m      = max(abs(local.x), abs(local.y));
  float square = smoothstep(0.5, 0.14, m);

  // --- Slow, liquid expansion ----------------------------------------------
  float cycle  = 9.0;   // full period (seconds) — slow & calm
  float travel = 6.5;   // expansion duration
  float maxR   = 1.45;  // exits the screen

  float t     = mod(u_time, cycle);
  float prog  = clamp(t / travel, 0.0, 1.0);
  float eased = pow(prog, 1.5);                 // slow ease-in: emerges gently
  float ringR = eased * maxR;

  // Big, smooth organic domain warp so the front reads as liquid, never a circle.
  vec2  wc      = vec2(cos(ang), sin(ang)) * dCell * 1.7;
  float w1      = fbm(wc + vec2(u_time * 0.07, -u_time * 0.05));
  float warpedR = dCell + (w1 - 0.5) * 0.45;

  // Soft band around the warped front + a wider halo for a blurry premium glow.
  float bandW = 0.09 + ringR * 0.14;
  float front = warpedR - ringR;
  float band  = exp(-front * front / (bandW * bandW));
  float halo  = exp(-front * front / (bandW * bandW * 5.0));

  // Wispy filaments carve the band into smooth liquid streaks (broken ring).
  float wisp  = 0.30 + 1.0 * fbm(wc * 1.7 - u_time * 0.09);
  band *= clamp(wisp, 0.0, 1.5);

  // Faint near the centre at the start, building stronger as it travels out.
  float growth   = smoothstep(0.0, 0.5, ringR);
  // Fade in at start, out before the quiet pause.
  float env      = smoothstep(0.0, 0.14, prog) * (1.0 - smoothstep(0.84, 1.0, prog));
  // Disperse once the front grows huge.
  float disperse = 1.0 - smoothstep(0.7, 1.45, ringR) * 0.65;

  float glowAmt = (band + halo * 0.35) * growth * env * disperse;
  float lit = square * glowAmt;
  float hot = pow(band, 3.0) * square * growth * env;       // brighter wisp cores

  // --- Colour (saturated blue glow, cyan-white hot spots) -------------------
  vec3 glowCol = vec3(0.12, 0.50, 1.0);
  vec3 hotCol  = vec3(0.55, 0.82, 1.0);

  vec3 col = glowCol * lit * 1.25 + hotCol * hot * 0.8;

  // Barely-there resting grid so the matrix is hinted, not fully black.
  col += glowCol * square * 0.010;

  // Gentle vignette to settle the edges.
  col *= 1.0 - smoothstep(0.6, 1.2, d) * 0.5;
  col += vec3(0.006, 0.027, 0.078);

  gl_FragColor = vec4(col, 1.0);
}
`;function IE({style:s,className:e,canvasRef:n}){const r=gi.useRef(null),o=n??r,u=gi.useRef(null);return gi.useEffect(()=>{const c=o.current,h=u.current;if(!c||!h)return;const m=new LE({canvas:c,antialias:!0,alpha:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});let p=Math.min(window.devicePixelRatio||1,1.75);m.setClearColor(new Pt("#020817"),1),m.setPixelRatio(p);const x=new mv,S=new sd(-1,1,1,-1,0,1),g={u_res:{value:new Lt(1,1)},u_time:{value:0},u_pixelRatio:{value:p}},M=new Ni(new Ka(2,2),new _i({vertexShader:DE,fragmentShader:NE,uniforms:g,depthTest:!1,depthWrite:!1}));x.add(M);const A=()=>{const P=h.clientWidth||window.innerWidth,k=h.clientHeight||window.innerHeight;p=Math.min(window.devicePixelRatio||1,1.75),m.setPixelRatio(p),m.setSize(P,k,!1),g.u_res.value.set(c.width,c.height),g.u_pixelRatio.value=p};A(),window.addEventListener("resize",A);let b=!0;const v=new IntersectionObserver(P=>{b=P[0]?.isIntersecting??!0},{threshold:.01});v.observe(h);const _=window.matchMedia("(prefers-reduced-motion: reduce)").matches,R=typeof window<"u"&&new URLSearchParams(window.location.search).get("screenshot")==="1",N=performance.now();let L=0;const H=()=>{L=requestAnimationFrame(H),b&&(g.u_time.value=R||_?3:(performance.now()-N)/1e3,m.render(x,S))};return L=requestAnimationFrame(H),()=>{cancelAnimationFrame(L),window.removeEventListener("resize",A),v.disconnect(),M.geometry.dispose(),M.material.dispose(),m.dispose()}},[o]),ae.createElement("div",{ref:u,className:`absolute inset-0 h-full w-full overflow-hidden ${e??""}`,style:{background:"#020817",...s??{}},"data-background-name":"Pulse Grid"},ae.createElement("canvas",{ref:o,className:"block h-full w-full"}))}function Im(s){if(!s)return"55,244,250";const e=s.replace("#","");return e.length<6?"55,244,250":[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)].join(",")}function UE({pos:s,rgb:e,visible:n}){const r=s.includes("top"),o=s.includes("left"),u=9,c=6;return ae.createElement("span",{"aria-hidden":"true",style:{position:"absolute",top:r?c:"auto",bottom:r?"auto":c,left:o?c:"auto",right:o?"auto":c,width:u,height:u,borderTop:r?`1.5px solid rgba(${e},${n?.9:0})`:"none",borderBottom:r?"none":`1.5px solid rgba(${e},${n?.9:0})`,borderLeft:o?`1.5px solid rgba(${e},${n?.9:0})`:"none",borderRight:o?"none":`1.5px solid rgba(${e},${n?.9:0})`,opacity:n?1:0,transform:n?"scale(1)":"scale(0.55)",transition:"opacity 0.28s ease, transform 0.28s ease, border-color 0.28s ease",pointerEvents:"none",zIndex:5}})}function xg({componentData:s={}}){const{label:e="Get Started",style:n={},colors:r={primary:"#37f4fa",accent:"#8b5cf6",text:"#ffffff"},href:o,target:u,rel:c}=s,[h,m]=gi.useState(!1),p=gi.useId().replace(/:/g,""),x=Im(r?.primary),S=Im(r?.accent??r?.secondary),g=r?.text??"#ffffff",M=typeof e=="string"?e.split(""):null,A=h?"3.0s":"4.0s",b=h?"3.0s":"4.0s",v=ae.createElement("button",{className:`sc-btn-${p}`,onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),onFocus:()=>m(!0),onBlur:()=>m(!1),style:{position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",border:"none",outline:"none",cursor:"pointer",fontFamily:"inherit",borderRadius:"8px",padding:"14px 32px",height:"52px",overflow:"hidden",background:"linear-gradient(160deg, #131320 0%, #07070f 100%)",boxShadow:h?[`0 0 0 1px rgba(${x},0.6)`,`0 0 24px rgba(${x},0.18)`,"0 14px 44px rgba(0,0,0,0.55)","inset 0 1px 0 rgba(255,255,255,0.10)"].join(", "):["0 0 0 1px rgba(255,255,255,0.09)","0 8px 32px rgba(0,0,0,0.45)","inset 0 1px 0 rgba(255,255,255,0.07)"].join(", "),transform:h?"translateY(-2px)":"translateY(0)",transition:"transform 0.32s cubic-bezier(0.4,0,0.2,1), box-shadow 0.32s cubic-bezier(0.4,0,0.2,1)",fontSize:"15px",fontWeight:600,letterSpacing:"0.5px",color:g,...n}},["top-left","top-right","bottom-left","bottom-right"].map(_=>ae.createElement(UE,{key:_,pos:_,rgb:x,visible:h})),ae.createElement("span",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(255,255,255,0.016) 3px, rgba(255,255,255,0.016) 4px)",pointerEvents:"none",zIndex:1}}),ae.createElement("span",{className:`sc-halo-${p}`,"aria-hidden":"true",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:`linear-gradient(90deg,
            transparent      0%,
            transparent      55%,
            rgba(${x},0.06) 62%,
            rgba(${x},0.22) 72%,
            rgba(${x},0.35) 82%,
            rgba(${S},0.15)  90%,
            transparent      100%)`,mixBlendMode:"screen",pointerEvents:"none",zIndex:2}}),ae.createElement("span",{className:`sc-line-${p}`,"aria-hidden":"true",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:`linear-gradient(90deg,
            transparent              0%,
            transparent              calc(100% - 3px),
            rgba(${x},0.7)  calc(100% - 2.5px),
            rgba(255,255,255,0.95)   calc(100% - 1.5px),
            rgba(${x},0.7)  calc(100% - 0.5px),
            transparent              100%)`,boxShadow:`4px 0 12px 2px rgba(${x},0.45)`,pointerEvents:"none",zIndex:3}}),ae.createElement("span",{className:`sc-track-${p}`,"aria-hidden":"true",style:{position:"absolute",bottom:0,left:0,height:"1.5px",width:"0%",background:`linear-gradient(90deg, transparent, rgba(${x},0.7) 40%, rgba(${x},1) 100%)`,boxShadow:`0 0 5px rgba(${x},0.55)`,pointerEvents:"none",zIndex:3}}),ae.createElement("span",{"aria-hidden":"true",style:{position:"absolute",top:0,left:"8%",right:"8%",height:"1px",background:`linear-gradient(90deg, transparent, rgba(${x},${h?.5:.2}), transparent)`,transition:"background 0.35s ease",pointerEvents:"none",zIndex:4}}),ae.createElement("span",{style:{position:"relative",zIndex:6,display:"inline-flex",alignItems:"center",gap:"0.5px",userSelect:"none",fontSize:"1em",fontWeight:600,letterSpacing:"0.5px",color:g}},M?M.map((_,R)=>_===" "?ae.createElement("span",{key:R,style:{display:"inline-block",width:"0.3em"}}):ae.createElement("span",{key:R,className:`sc-ch-${p}`,style:{display:"inline-block",animationDelay:`${R*.075}s`}},_)):e),ae.createElement("style",null,`
        @keyframes scHalo_${p} {
          0%   { transform: translateX(-100%); opacity: 0;    }
          8%   { opacity: 1;                                  }
          88%  { opacity: 0.85;                               }
          100% { transform: translateX(100%);  opacity: 0;    }
        }
        @keyframes scLine_${p} {
          0%   { transform: translateX(-100%); opacity: 0;    }
          5%   { opacity: 1;                                  }
          92%  { opacity: 1;                                  }
          100% { transform: translateX(100%);  opacity: 0;    }
        }
        @keyframes scTrack_${p} {
          0%   { width: 0%;   opacity: 0.85; }
          90%  { width: 100%; opacity: 0.85; }
          100% { width: 100%; opacity: 0;    }
        }
        @keyframes scRipple_${p} {
          0%,  100% { opacity: 0.82; transform: translateY(0px);   }
          36%        {
            opacity: 1;
            transform: translateY(-2.5px);
            text-shadow:
              0 0 8px  rgba(${x},0.95),
              0 0 18px rgba(${x},0.5);
          }
          72%        { opacity: 0.68; transform: translateY(0px);  }
        }

        .sc-halo-${p}  { animation: scHalo_${p}   ${A}   cubic-bezier(0.38,0,0.62,1) infinite; }
        .sc-line-${p}  { animation: scLine_${p}   ${A}   cubic-bezier(0.38,0,0.62,1) infinite; }
        .sc-track-${p} { animation: scTrack_${p}  ${A}   cubic-bezier(0.38,0,0.62,1) infinite; }
        .sc-ch-${p}    { animation: scRipple_${p} ${b} ease-in-out              infinite; }
      `));return o?ae.createElement("a",{href:o,target:u,rel:c,style:{textDecoration:"none"}},v):v}const FE=""+new URL("hero-DZNr2Vr0.png",import.meta.url).href,OE=""+new URL("aboutme-d4r0vga1.png",import.meta.url).href,Cn={name:"Yousef Abdelkhaleq",initials:"YA",title:"Customer Service Professional",location:"San Juan, Philippines",email:"yousefbacarro@icloud.com",address:"7G Suntrust Aurora Gardens Tower 2, Aurora Blvd, Brgy. Ermitano, San Juan"},ad="./profile/yousef-resume.pdf",BE=[{value:"10+",label:"Years in service roles"},{value:"3",label:"Languages"},{value:"2014",label:"Career start"}],kE=[{role:"Customer Service Agent",company:"Alorica Teleservices Inc. Philippines",period:"2023 - 2024",bullets:["Provided excellent customer service to clients.","Answered customer-related inquiries.","Made outbound calls for customers."]},{role:"Cabin Crew",company:"Kuwait Airways, Kuwait",period:"2019 - 2021",bullets:["Greeted and assisted passengers as they boarded the plane.","Handled passenger concerns and complaints.","Conducted safety briefings and demonstrated emergency procedures."]},{role:"Call Center Agent",company:"Alghanim Electronics, Kuwait",period:"2014 - 2018",bullets:["Upsold and promoted additional products or services.","Processed orders and payments over the phone.","Gathered and documented customer information, feedback, and complaints.","Met call volume and quality metrics set by the company."]}],zE=["Excellent communication skills","Proficient in Microsoft Office","HTML and web designing knowledge","Fast-paced decision making","Multitasking","Photo and video editing skills","Fast learner"],VE=["English","Filipino","Arabic (basic)"],HE=[{label:"Teamwork",value:85},{label:"Client connection",value:90},{label:"Flexibility",value:80}],Sg={label:"Contact me",href:`mailto:${Cn.email}`};function GE(s){const e=s.currentTarget,n=e.getBoundingClientRect(),r=(s.clientX-n.left)/n.width-.5,o=(s.clientY-n.top)/n.height-.5;e.style.setProperty("--title-rotate-x",`${o*-7}deg`),e.style.setProperty("--title-rotate-y",`${r*9}deg`),e.style.setProperty("--title-shine-x",`${(r+.5)*100}%`),e.style.setProperty("--title-shine-y",`${(o+.5)*100}%`)}function WE(s){const e=s.currentTarget;e.style.setProperty("--title-rotate-x","0deg"),e.style.setProperty("--title-rotate-y","0deg"),e.style.setProperty("--title-shine-x","50%"),e.style.setProperty("--title-shine-y","50%")}function XE(){return ae.createElement("header",{className:"dc-header","aria-label":"Primary navigation"},ae.createElement("a",{className:"dc-brand",href:"#top","aria-label":`${Cn.name} home`},ae.createElement("span",null,Cn.initials),ae.createElement("div",null,ae.createElement("strong",null,Cn.name),ae.createElement("small",null,Cn.title))),ae.createElement("nav",{className:"dc-nav","aria-label":"Page sections"},ae.createElement("a",{href:"#about"},"About"),ae.createElement("a",{href:"#experience"},"Experience"),ae.createElement("a",{href:"#skills"},"Skills"),ae.createElement("a",{href:"#contact"},"Contact")))}function YE(){return ae.createElement("div",{className:"dc-bg","aria-hidden":"true"},ae.createElement(IE,{className:"pulse-grid-bg",style:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"hidden",background:"#020817"}}),ae.createElement("div",{className:"dc-bg-etch"}),ae.createElement("div",{className:"dc-bg-vignette"}))}function qE(){return ae.createElement("section",{id:"top",className:"dc-hero"},ae.createElement("div",{className:"dc-container dc-hero-grid"},ae.createElement("div",{className:"dc-hero-copy"},ae.createElement("p",{className:"dc-kicker"},ae.createElement(__,{size:15,"aria-hidden":"true"}),"Customer service and cabin crew experience"),ae.createElement("h1",{className:"dc-hero-title",onPointerMove:GE,onPointerLeave:WE},"Calm support for service teams that move fast."),ae.createElement("p",{className:"dc-lede"},"Yousef Abdelkhaleq brings experience across customer service, call center operations, and airline cabin crew work, with a focus on communication, reliability, and steady service under pressure."),ae.createElement("div",{className:"dc-actions"},ae.createElement(xg,{componentData:Sg}),ae.createElement("a",{className:"dc-secondary-link",href:ad,download:!0},ae.createElement(qf,{size:17,"aria-hidden":"true"}),"Download resume")),ae.createElement("div",{className:"dc-stats","aria-label":"Resume highlights"},BE.map(s=>ae.createElement("div",{key:s.label},ae.createElement("strong",null,s.value),ae.createElement("span",null,s.label))))),ae.createElement("div",{className:"dc-hero-card"},ae.createElement("img",{src:FE,alt:`${Cn.name} portrait`}),ae.createElement("div",{className:"dc-photo-caption"},ae.createElement("strong",null,Cn.name),ae.createElement("span",null,Cn.title)))))}function $E(){return ae.createElement("section",{id:"about",className:"dc-section dc-section-card"},ae.createElement("div",{className:"dc-container dc-about-grid"},ae.createElement("div",{className:"dc-about-image"},ae.createElement("img",{src:OE,alt:`${Cn.name} professional portrait`})),ae.createElement("div",{className:"dc-copy"},ae.createElement("p",{className:"dc-section-label"},"About me"),ae.createElement("h2",null,"Service-minded, adaptable, and ready for the next challenge."),ae.createElement("p",null,"Yousef is seeking a competitive and challenging environment where he can use his skills and knowledge to serve a company while building an enjoyable, long-term career."),ae.createElement("p",null,"His background spans front-line customer service, outbound customer calls, passenger assistance, complaint handling, order processing, and safety-focused airline procedures. Across those roles, the common thread is clear communication and dependable follow-through."),ae.createElement("div",{className:"dc-contact-strip","aria-label":"Contact information"},ae.createElement("a",{href:`mailto:${Cn.email}`},ae.createElement(p_,{size:16,"aria-hidden":"true"}),Cn.email),ae.createElement("a",{href:ad,download:!0},ae.createElement(qf,{size:16,"aria-hidden":"true"}),"Download resume"),ae.createElement("span",null,ae.createElement(m_,{size:16,"aria-hidden":"true"}),Cn.location)))))}function jE(){return ae.createElement("section",{id:"experience",className:"dc-section"},ae.createElement("div",{className:"dc-container"},ae.createElement("div",{className:"dc-section-head"},ae.createElement("p",{className:"dc-section-label"},"Experience"),ae.createElement("h2",null,"Customer-facing work across the Philippines and Kuwait.")),ae.createElement("div",{className:"dc-timeline"},kE.map(s=>ae.createElement("article",{className:"dc-job",key:`${s.role}-${s.period}`},ae.createElement("div",{className:"dc-job-meta"},ae.createElement(c_,{size:18,"aria-hidden":"true"}),ae.createElement("span",null,s.period)),ae.createElement("div",{className:"dc-job-content"},ae.createElement("h3",null,s.role),ae.createElement("p",null,s.company),ae.createElement("ul",null,s.bullets.map(e=>ae.createElement("li",{key:e},e)))))))))}function KE(){return ae.createElement("section",{id:"skills",className:"dc-section dc-section-card"},ae.createElement("div",{className:"dc-container dc-skills-grid"},ae.createElement("div",null,ae.createElement("p",{className:"dc-section-label"},"Expertise"),ae.createElement("h2",null,"Practical strengths for service and support roles."),ae.createElement("div",{className:"dc-chip-grid"},zE.map(s=>ae.createElement("span",{key:s},ae.createElement(f_,{size:15,"aria-hidden":"true"}),s)))),ae.createElement("aside",{className:"dc-skill-panel"},ae.createElement("div",{className:"dc-panel-block"},ae.createElement("div",{className:"dc-panel-heading"},ae.createElement(h_,{size:18,"aria-hidden":"true"}),ae.createElement("h3",null,"Languages")),ae.createElement("div",{className:"dc-language-list"},VE.map(s=>ae.createElement("span",{key:s},s)))),ae.createElement("div",{className:"dc-panel-block"},ae.createElement("div",{className:"dc-panel-heading"},ae.createElement(v_,{size:18,"aria-hidden":"true"}),ae.createElement("h3",null,"Skills summary")),HE.map(s=>ae.createElement("div",{className:"dc-skill-bar",key:s.label},ae.createElement("div",null,ae.createElement("span",null,s.label),ae.createElement("strong",null,s.value,"%")),ae.createElement("i",null,ae.createElement("b",{style:{width:`${s.value}%`}}))))))))}function ZE(){return ae.createElement("section",{className:"dc-section dc-education-section"},ae.createElement("div",{className:"dc-container dc-education"},ae.createElement(d_,{size:24,"aria-hidden":"true"}),ae.createElement("div",null,ae.createElement("p",{className:"dc-section-label"},"Education"),ae.createElement("h2",null,"University of the Cordilleras"),ae.createElement("p",null,"AB Mass Communication, 2010 - 2014"))))}function QE(){return ae.createElement("section",{id:"contact",className:"dc-section dc-final"},ae.createElement("div",{className:"dc-container dc-final-inner"},ae.createElement("p",{className:"dc-section-label"},"Contact"),ae.createElement("h2",null,"Connect with Yousef."),ae.createElement("p",null,"Available by email for customer service, cabin crew, and support opportunities."),ae.createElement("div",{className:"dc-actions dc-actions-center"},ae.createElement(xg,{componentData:Sg}),ae.createElement("a",{className:"dc-contact-pill",href:ad,download:!0},ae.createElement(qf,{size:16,"aria-hidden":"true"}),"Download resume")),ae.createElement("p",{className:"dc-address"},Cn.address)))}function JE(){return ae.createElement("footer",{className:"dc-footer"},ae.createElement("div",{className:"dc-container dc-footer-inner"},ae.createElement("div",null,ae.createElement("strong",null,Cn.name),ae.createElement("span",null,Cn.title)),ae.createElement("a",{className:"dc-powered",href:"https://leadportal.ph/"},ae.createElement(g_,{size:15,"aria-hidden":"true"}),"Powered by LeadPortal")))}function e1(){return ae.createElement("div",{className:"dc-page"},ae.createElement(YE,null),ae.createElement(XE,null),ae.createElement("main",null,ae.createElement(qE,null),ae.createElement($E,null),ae.createElement(jE,null),ae.createElement(KE,null),ae.createElement(ZE,null),ae.createElement(QE,null)),ae.createElement(JE,null))}a_.createRoot(document.getElementById("root")).render(ae.createElement(e1,null));
