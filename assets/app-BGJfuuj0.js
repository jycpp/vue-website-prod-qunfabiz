(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))u(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ms(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const _e={},dn=[],At=()=>{},Po=()=>!1,hu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ti=e=>e.startsWith("onUpdate:"),Me=Object.assign,bs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Za=Object.prototype.hasOwnProperty,he=(e,t)=>Za.call(e,t),Y=Array.isArray,Jt=e=>mu(e)==="[object Map]",Lu=e=>mu(e)==="[object Set]",Js=e=>mu(e)==="[object Date]",ue=e=>typeof e=="function",we=e=>typeof e=="string",ht=e=>typeof e=="symbol",me=e=>e!==null&&typeof e=="object",Fo=e=>(me(e)||ue(e))&&ue(e.then)&&ue(e.catch),Mo=Object.prototype.toString,mu=e=>Mo.call(e),Ja=e=>mu(e).slice(8,-1),Io=e=>mu(e)==="[object Object]",gs=e=>we(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hn=ms(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ni=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ya=/-\w/g,Ve=ni(e=>e.replace(Ya,t=>t.slice(1).toUpperCase())),ec=/\B([A-Z])/g,xn=ni(e=>e.replace(ec,"-$1").toLowerCase()),ui=ni(e=>e.charAt(0).toUpperCase()+e.slice(1)),vi=ni(e=>e?`on${ui(e)}`:""),kt=(e,t)=>!Object.is(e,t),Mu=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},qo=(e,t,n,u=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:u,value:n})},xs=e=>{const t=parseFloat(e);return isNaN(t)?e:t},tc=e=>{const t=we(e)?Number(e):NaN;return isNaN(t)?e:t};let Ys;const ii=()=>Ys||(Ys=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _s(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++){const u=e[n],i=we(u)?sc(u):_s(u);if(i)for(const s in i)t[s]=i[s]}return t}else if(we(e)||me(e))return e}const nc=/;(?![^(]*\))/g,uc=/:([^]+)/,ic=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function sc(e){const t={};return e.replace(ic,n=>n.startsWith("/*")?"":n).split(nc).forEach(n=>{if(n){const u=n.split(uc);u.length>1&&(t[u[0].trim()]=u[1].trim())}}),t}function ft(e){let t="";if(we(e))t=e;else if(Y(e))for(let n=0;n<e.length;n++){const u=ft(e[n]);u&&(t+=u+" ")}else if(me(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const rc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",oc=ms(rc);function Ro(e){return!!e||e===""}function lc(e,t,n){if(e.length!==t.length)return!1;let u=!0;for(let i=0;u&&i<e.length;i++)u=si(e[i],t[i],n);return u}function er(e,t,n){if(e.size!==t.size)return!1;const u=Array.from(t),i=new Uint8Array(u.length);for(const s of e){let r=-1;for(let o=0;o<u.length;o++)if(!i[o]&&si(s,u[o],n)){r=o;break}if(r<0)return!1;i[r]=1}return!0}function ac(e,t,n){let u=Jt(e),i=Jt(t);if(u||i||(u=Lu(e),i=Lu(t),u||i))return u&&i?er(e,t,n):!1;const s=Object.keys(e).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in e){const l=e.hasOwnProperty(o),a=t.hasOwnProperty(o);if(l&&!a||!l&&a||!si(e[o],t[o],n))return!1}return String(e)===String(t)}function tr(e,t,n,u){n||(n=[new Map,new Map]);const[i,s]=n;if(i.has(e)||s.has(t))return i.get(e)===t&&s.get(t)===e;i.set(e,t),s.set(t,e);const r=u(e,t,n);return i.delete(e),s.delete(t),r}function si(e,t,n){if(e===t)return!0;let u=Js(e),i=Js(t);return u||i?u&&i?e.getTime()===t.getTime():!1:(u=ht(e),i=ht(t),u||i?e===t:(u=Y(e),i=Y(t),u||i?u&&i?tr(e,t,n,lc):!1:(u=me(e),i=me(t),u||i?!u||!i?!1:tr(e,t,n,ac):String(e)===String(t))))}const Oo=e=>!!(e&&e.__v_isRef===!0),U=e=>we(e)?e:e==null?"":Y(e)||me(e)&&(e.toString===Mo||!ue(e.toString))?Oo(e)?U(e.value):JSON.stringify(e,Lo,2):String(e),Lo=(e,t)=>Oo(t)?Lo(e,t.value):Jt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[u,i],s)=>(n[wi(u,s)+" =>"]=i,n),{})}:Lu(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>wi(n))}:ht(t)?wi(t):me(t)&&!Y(t)&&!Io(t)?String(t):t,wi=(e,t="")=>{var n;return ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Le;class cc{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Le&&(Le.active?(this.parent=Le,this.index=(Le.scopes||(Le.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const u=this.scopes.slice();for(t=0,n=u.length;t<n;t++)u[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const i=this.scopes.slice();for(t=0,n=i.length;t<n;t++)i[t].resume()}const u=this.effects.slice();for(t=0,n=u.length;t<n;t++)u[t].resume()}}run(t){if(this._active){const n=Le;try{return Le=this,t()}finally{Le=n}}}on(){++this._on===1&&(this.prevScope=Le,Le=this)}off(){if(this._on>0&&--this._on===0){if(Le===this)Le=this.prevScope;else{let t=Le;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,u;for(n=0,u=this.effects.length;n<u;n++)this.effects[n].stop();for(this.effects.length=0,n=0,u=this.cleanups.length;n<u;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const i=this.scopes.slice();for(n=0,u=i.length;n<u;n++)i[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function fc(){return Le}let ye;const Ai=new WeakSet;class $o{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Le&&(Le.active?Le.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ai.has(this)&&(Ai.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||No(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nr(this),zo(this);const t=ye,n=dt;ye=this,dt=!0;try{return this.fn()}finally{jo(this),ye=t,dt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ks(t);this.deps=this.depsTail=void 0,nr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ai.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wi(this)&&this.run()}get dirty(){return Wi(this)}}let Bo=0,Un,Qn;function No(e,t=!1){if(e.flags|=8,t){e.next=Qn,Qn=e;return}e.next=Un,Un=e}function ys(){Bo++}function Es(){if(--Bo>0)return;if(Qn){let t=Qn;for(Qn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Un;){let t=Un;for(Un=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(u){e||(e=u)}t=n}}if(e)throw e}function zo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function jo(e){let t,n=e.depsTail,u=n;for(;u;){const i=u.prevDep;u.version===-1?(u===n&&(n=i),ks(u),dc(u)):t=u,u.dep.activeLink=u.prevActiveLink,u.prevActiveLink=void 0,u=i}e.deps=t,e.depsTail=n}function Wi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ho(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ho(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Jn)||(e.globalVersion=Jn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Wi(e))))return;e.flags|=2;const t=e.dep,n=ye,u=dt;ye=e,dt=!0;try{zo(e);const i=e.fn(e._value);(t.version===0||kt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{ye=n,dt=u,jo(e),e.flags&=-3}}function ks(e,t=!1){const{dep:n,prevSub:u,nextSub:i}=e;if(u&&(u.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=u,e.nextSub=void 0),n.subs===e&&(n.subs=u,!u&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)ks(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function dc(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let dt=!0;const Uo=[];function zt(){Uo.push(dt),dt=!1}function jt(){const e=Uo.pop();dt=e===void 0?!0:e}function nr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ye;ye=void 0;try{t()}finally{ye=n}}}let Jn=0;class pc{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ye||!dt||ye===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ye)n=this.activeLink=new pc(ye,this),ye.deps?(n.prevDep=ye.depsTail,ye.depsTail.nextDep=n,ye.depsTail=n):ye.deps=ye.depsTail=n,Qo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const u=n.nextDep;u.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=u),n.prevDep=ye.depsTail,n.nextDep=void 0,ye.depsTail.nextDep=n,ye.depsTail=n,ye.deps===n&&(ye.deps=u)}return n}trigger(t){this.version++,Jn++,this.notify(t)}notify(t){ys();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Es()}}}function Qo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let u=t.deps;u;u=u.nextDep)Qo(u)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ki=new WeakMap,mn=Symbol(""),Xi=Symbol(""),Yn=Symbol("");function Be(e,t,n){if(dt&&ye){let u=Ki.get(e);u||Ki.set(e,u=new Map);let i=u.get(n);i||(u.set(n,i=new vs),i.map=u,i.key=n),i.track()}}function Rt(e,t,n,u,i,s){const r=Ki.get(e);if(!r){Jn++;return}const o=l=>{l&&l.trigger()};if(ys(),t==="clear")r.forEach(o);else{const l=Y(e),a=l&&gs(n);if(l&&n==="length"){const c=Number(u);r.forEach((f,d)=>{(d==="length"||d===Yn||!ht(d)&&d>=c)&&o(f)})}else switch((n!==void 0||r.has(void 0))&&o(r.get(n)),a&&o(r.get(Yn)),t){case"add":l?a&&o(r.get("length")):(o(r.get(mn)),Jt(e)&&o(r.get(Xi)));break;case"delete":l||(o(r.get(mn)),Jt(e)&&o(r.get(Xi)));break;case"set":Jt(e)&&o(r.get(mn));break}}Es()}function kn(e){const t=fe(e);return t===e||(Be(t,"iterate",Yn),rt(e))?t:Ct(e)?Bt(e)?t.map(n=>en(ot(n))):t.map(en):t.map(ot)}function ri(e){return Be(e=fe(e),"iterate",Yn),e}function Et(e,t){return Ct(e)?en(Bt(e)?ot(t):t):ot(t)}const hc={__proto__:null,[Symbol.iterator](){return Ci(this,Symbol.iterator,e=>Et(this,e))},concat(...e){return kn(this).concat(...e.map(t=>Y(t)?kn(t):t))},entries(){return Ci(this,"entries",e=>(e[1]=Et(this,e[1]),e))},every(e,t){return Pt(this,"every",e,t,void 0,arguments)},filter(e,t){return Pt(this,"filter",e,t,n=>n.map(u=>Et(this,u)),arguments)},find(e,t){return Pt(this,"find",e,t,n=>Et(this,n),arguments)},findIndex(e,t){return Pt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Pt(this,"findLast",e,t,n=>Et(this,n),arguments)},findLastIndex(e,t){return Pt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Pt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Si(this,"includes",e)},indexOf(...e){return Si(this,"indexOf",e)},join(e){return kn(this).join(e)},lastIndexOf(...e){return Si(this,"lastIndexOf",e)},map(e,t){return Pt(this,"map",e,t,void 0,arguments)},pop(){return $n(this,"pop")},push(...e){return $n(this,"push",e)},reduce(e,...t){return ur(this,"reduce",e,t)},reduceRight(e,...t){return ur(this,"reduceRight",e,t)},shift(){return $n(this,"shift")},some(e,t){return Pt(this,"some",e,t,void 0,arguments)},splice(...e){return $n(this,"splice",e)},toReversed(){return kn(this).toReversed()},toSorted(e){return kn(this).toSorted(e)},toSpliced(...e){return kn(this).toSpliced(...e)},unshift(...e){return $n(this,"unshift",e)},values(){return Ci(this,"values",e=>Et(this,e))}};function Ci(e,t,n){const u=ri(e),i=u[t]();return u!==e&&!rt(e)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.done||(s.value=n(s.value)),s}),i}const mc=Array.prototype;function Pt(e,t,n,u,i,s){const r=ri(e),o=r!==e&&!rt(e),l=r[t];if(l!==mc[t]){const f=l.apply(e,s);return o?ot(f):f}let a=n;r!==e&&(o?a=function(f,d){return n.call(this,Et(e,f),d,e)}:n.length>2&&(a=function(f,d){return n.call(this,f,d,e)}));const c=l.call(r,a,u);return o&&i?i(c):c}function ur(e,t,n,u){const i=ri(e),s=i!==e&&!rt(e);let r=n,o=!1;i!==e&&(s?(o=u.length===0,r=function(a,c,f){return o&&(o=!1,a=Et(e,a)),n.call(this,a,Et(e,c),f,e)}):n.length>3&&(r=function(a,c,f){return n.call(this,a,c,f,e)}));const l=i[t](r,...u);return o?Et(e,l):l}function Si(e,t,n){const u=fe(e);Be(u,"iterate",Yn);const i=u[t](...n);return(i===-1||i===!1)&&Cs(n[0])?(n[0]=fe(n[0]),u[t](...n)):i}function $n(e,t,n=[]){zt(),ys();const u=fe(e)[t].apply(e,n);return Es(),jt(),u}const bc=ms("__proto__,__v_isRef,__isVue"),Vo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ht));function gc(e){ht(e)||(e=String(e));const t=fe(this);return Be(t,"has",e),t.hasOwnProperty(e)}class Go{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,u){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return u===(i?s?Sc:Zo:s?Xo:Ko).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(u)?t:void 0;const r=Y(t);if(!i){let l;if(r&&(l=hc[n]))return l;if(n==="hasOwnProperty")return gc}const o=Reflect.get(t,n,ze(t)?t:u);if((ht(n)?Vo.has(n):bc(n))||(i||Be(t,"get",n),s))return o;if(ze(o)){const l=r&&gs(n)?o:o.value;return i&&me(l)?Ji(l):l}return me(o)?i?Ji(o):oi(o):o}}class Wo extends Go{constructor(t=!1){super(!1,t)}set(t,n,u,i){let s=t[n];const r=Y(t)&&gs(n);if(!this._isShallow){const a=Ct(s);if(!rt(u)&&!Ct(u)&&(s=fe(s),u=fe(u)),!r&&ze(s)&&!ze(u))return a||(s.value=u),!0}const o=r?Number(n)<t.length:he(t,n),l=Reflect.set(t,n,u,ze(t)?t:i);return t===fe(i)&&l&&(o?kt(u,s)&&Rt(t,"set",n,u):Rt(t,"add",n,u)),l}deleteProperty(t,n){const u=he(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&u&&Rt(t,"delete",n,void 0),i}has(t,n){const u=Reflect.has(t,n);return(!ht(n)||!Vo.has(n))&&Be(t,"has",n),u}ownKeys(t){return Be(t,"iterate",Y(t)?"length":mn),Reflect.ownKeys(t)}}class xc extends Go{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const _c=new Wo,yc=new xc,Ec=new Wo(!0);const Zi=e=>e,Eu=e=>Reflect.getPrototypeOf(e);function kc(e,t,n){return function(...u){const i=this.__v_raw,s=fe(i),r=Jt(s),o=e==="entries"||e===Symbol.iterator&&r,l=e==="keys"&&r,a=i[e](...u),c=n?Zi:t?en:ot;return!t&&Be(s,"iterate",l?Xi:mn),Me(Object.create(a),{next(){const{value:f,done:d}=a.next();return d?{value:f,done:d}:{value:o?[c(f[0]),c(f[1])]:c(f),done:d}}})}}function ku(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function vc(e,t){const n={get(i){const s=this.__v_raw,r=fe(s),o=fe(i);e||(kt(i,o)&&Be(r,"get",i),Be(r,"get",o));const{has:l}=Eu(r),a=t?Zi:e?en:ot;if(l.call(r,i))return a(s.get(i));if(l.call(r,o))return a(s.get(o));s!==r&&s.get(i)},get size(){const i=this.__v_raw;return!e&&Be(fe(i),"iterate",mn),i.size},has(i){const s=this.__v_raw,r=fe(s),o=fe(i);return e||(kt(i,o)&&Be(r,"has",i),Be(r,"has",o)),i===o?s.has(i):s.has(i)||s.has(o)},forEach(i,s){const r=this,o=r.__v_raw,l=fe(o),a=t?Zi:e?en:ot;return!e&&Be(l,"iterate",mn),o.forEach((c,f)=>i.call(s,a(c),a(f),r))}};return Me(n,e?{add:ku("add"),set:ku("set"),delete:ku("delete"),clear:ku("clear")}:{add(i){const s=fe(this),r=Eu(s),o=fe(i),l=!t&&!rt(i)&&!Ct(i)?o:i;return r.has.call(s,l)||kt(i,l)&&r.has.call(s,i)||kt(o,l)&&r.has.call(s,o)||(s.add(l),Rt(s,"add",l,l)),this},set(i,s){!t&&!rt(s)&&!Ct(s)&&(s=fe(s));const r=fe(this),{has:o,get:l}=Eu(r);let a=o.call(r,i);a||(i=fe(i),a=o.call(r,i));const c=l.call(r,i);return r.set(i,s),a?kt(s,c)&&Rt(r,"set",i,s):Rt(r,"add",i,s),this},delete(i){const s=fe(this),{has:r,get:o}=Eu(s);let l=r.call(s,i);l||(i=fe(i),l=r.call(s,i)),o&&o.call(s,i);const a=s.delete(i);return l&&Rt(s,"delete",i,void 0),a},clear(){const i=fe(this),s=i.size!==0,r=i.clear();return s&&Rt(i,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=kc(i,e,t)}),n}function ws(e,t){const n=vc(e,t);return(u,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?u:Reflect.get(he(n,i)&&i in u?n:u,i,s)}const wc={get:ws(!1,!1)},Ac={get:ws(!1,!0)},Cc={get:ws(!0,!1)};const Ko=new WeakMap,Xo=new WeakMap,Zo=new WeakMap,Sc=new WeakMap;function Dc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oi(e){return Ct(e)?e:As(e,!1,_c,wc,Ko)}function Jo(e){return As(e,!1,Ec,Ac,Xo)}function Ji(e){return As(e,!0,yc,Cc,Zo)}function As(e,t,n,u,i){if(!me(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=i.get(e);if(s)return s;const r=Dc(Ja(e));if(r===0)return e;const o=new Proxy(e,r===2?u:n);return i.set(e,o),o}function Bt(e){return Ct(e)?Bt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ct(e){return!!(e&&e.__v_isReadonly)}function rt(e){return!!(e&&e.__v_isShallow)}function Cs(e){return e?!!e.__v_raw:!1}function fe(e){const t=e&&e.__v_raw;return t?fe(t):e}function Tc(e){return!he(e,"__v_skip")&&Object.isExtensible(e)&&qo(e,"__v_skip",!0),e}const ot=e=>me(e)?oi(e):e,en=e=>me(e)?Ji(e):e;function ze(e){return e?e.__v_isRef===!0:!1}function Yt(e){return Yo(e,!1)}function Pc(e){return Yo(e,!0)}function Yo(e,t){return ze(e)?e:new Fc(e,t)}class Fc{constructor(t,n){this.dep=new vs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:fe(t),this._value=n?t:ot(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,u=this.__v_isShallow||rt(t)||Ct(t);t=u?t:fe(t),kt(t,n)&&(this._rawValue=t,this._value=u?t:ot(t),this.dep.trigger())}}function Ce(e){return ze(e)?e.value:e}const Mc={get:(e,t,n)=>t==="__v_raw"?e:Ce(Reflect.get(e,t,n)),set:(e,t,n,u)=>{const i=e[t];return ze(i)&&!ze(n)?(i.value=n,!0):Reflect.set(e,t,n,u)}};function el(e){return Bt(e)?e:new Proxy(e,Mc)}class Ic{constructor(t,n,u){this.fn=t,this.setter=n,this._value=void 0,this.dep=new vs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Jn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=u}notify(){if(this.flags|=16,!(this.flags&8)&&ye!==this)return No(this,!0),!0}get value(){const t=this.dep.track();return Ho(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function qc(e,t,n=!1){let u,i;return ue(e)?u=e:(u=e.get,i=e.set),new Ic(u,i,n)}const vu={},$u=new WeakMap;let cn;function Rc(e,t=!1,n=cn){if(n){let u=$u.get(n);u||$u.set(n,u=[]),u.push(e)}}function Oc(e,t,n=_e){const{immediate:u,deep:i,once:s,scheduler:r,augmentJob:o,call:l}=n,a=_=>i?_:rt(_)||i===!1||i===0?Ot(_,1):Ot(_);let c,f,d,p,m=!1,E=!1;if(ze(e)?(f=()=>e.value,m=rt(e)):Bt(e)?(f=()=>a(e),m=!0):Y(e)?(E=!0,m=e.some(_=>Bt(_)||rt(_)),f=()=>e.map(_=>{if(ze(_))return _.value;if(Bt(_))return a(_);if(ue(_))return l?l(_,2):_()})):ue(e)?t?f=l?()=>l(e,2):e:f=()=>{if(d){zt();try{d()}finally{jt()}}const _=cn;cn=c;try{return l?l(e,3,[p]):e(p)}finally{cn=_}}:f=At,t&&i){const _=f,v=i===!0?1/0:i;f=()=>Ot(_(),v)}const A=fc(),S=()=>{c.stop(),A&&A.active&&bs(A.effects,c)};if(s&&t){const _=t;t=(...v)=>{const M=_(...v);return S(),M}}let k=E?new Array(e.length).fill(vu):vu;const b=_=>{if(!(!(c.flags&1)||!c.dirty&&!_))if(t){const v=c.run();if(_||i||m||(E?v.some((M,I)=>kt(M,k[I])):kt(v,k))){d&&d();const M=cn;cn=c;try{const I=[v,k===vu?void 0:E&&k[0]===vu?[]:k,p];k=v,l?l(t,3,I):t(...I)}finally{cn=M}}}else c.run()};return o&&o(b),c=new $o(f),c.scheduler=r?()=>r(b,!1):b,p=_=>Rc(_,!1,c),d=c.onStop=()=>{const _=$u.get(c);if(_){if(l)l(_,4);else for(const v of _)v();$u.delete(c)}},t?u?b(!0):k=c.run():r?r(b.bind(null,!0),!0):c.run(),S.pause=c.pause.bind(c),S.resume=c.resume.bind(c),S.stop=S,S}function Ot(e,t=1/0,n){if(t<=0||!me(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ze(e))Ot(e.value,t,n);else if(Y(e))for(let u=0;u<e.length;u++)Ot(e[u],t,n);else if(Lu(e)||Jt(e))e.forEach(u=>{Ot(u,t,n)});else if(Io(e)){for(const u in e)Ot(e[u],t,n);for(const u of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,u)&&Ot(e[u],t,n)}return e}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bu(e,t,n,u){try{return u?e(...u):e()}catch(i){li(i,t,n)}}function lt(e,t,n,u){if(ue(e)){const i=bu(e,t,n,u);return i&&Fo(i)&&i.catch(s=>{li(s,t,n)}),i}if(Y(e)){const i=[];for(let s=0;s<e.length;s++)i.push(lt(e[s],t,n,u));return i}}function li(e,t,n,u=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||_e;if(t){let o=t.parent;const l=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,l,a)===!1)return}o=o.parent}if(s){zt(),bu(s,null,10,[e,l,a]),jt();return}}Lc(e,n,i,u,r)}function Lc(e,t,n,u=!0,i=!1){if(i)throw e;console.error(e)}const Qe=[];let _t=-1;const Sn=[];let Gt=null,wn=0;const tl=Promise.resolve();let Bu=null;function Ss(e){const t=Bu||tl;return e?t.then(this?e.bind(this):e):t}function $c(e){let t=_t+1,n=Qe.length;for(;t<n;){const u=t+n>>>1,i=Qe[u],s=eu(i);s<e||s===e&&i.flags&2?t=u+1:n=u}return t}function Ds(e){if(!(e.flags&1)){const t=eu(e),n=Qe[Qe.length-1];!n||!(e.flags&2)&&t>=eu(n)?Qe.push(e):Qe.splice($c(t),0,e),e.flags|=1,nl()}}function nl(){Bu||(Bu=tl.then(ul))}function Bc(e){if(!Y(e))Gt&&e.id===-1?Gt.splice(wn+1,0,e):e.flags&1||(Sn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Sn.push(e[t]);nl()}function ir(e,t,n=_t+1){for(;n<Qe.length;n++){const u=Qe[n];if(u&&u.flags&2){if(e&&u.id!==e.uid)continue;Qe.splice(n,1),n--,u.flags&4&&(u.flags&=-2),u(),u.flags&4||(u.flags&=-2)}}}function Nu(e){if(Sn.length){const t=[...new Set(Sn)].sort((n,u)=>eu(n)-eu(u));if(Sn.length=0,Gt){for(let n=0;n<t.length;n++)Gt.push(t[n]);return}for(Gt=t,wn=0;wn<Gt.length;wn++){const n=Gt[wn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Gt=null,wn=0}}const eu=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ul(e){try{for(_t=0;_t<Qe.length;_t++){const t=Qe[_t];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),bu(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;_t<Qe.length;_t++){const t=Qe[_t];t&&(t.flags&=-2)}_t=-1,Qe.length=0,Nu(),Bu=null,(Qe.length||Sn.length)&&ul()}}let $e=null,il=null;function zu(e){const t=$e;return $e=e,il=e&&e.type.__scopeId||null,t}function Q(e,t=$e,n){if(!t||e._n)return e;const u=(...i)=>{u._d&&Vu(-1);const s=zu(t),r=Nt.length;let o;try{o=e(...i)}finally{for(let l=Nt.length;l>r;l--)Rs();zu(s),u._d&&Vu(1)}return o};return u._n=!0,u._c=!0,u._d=!0,u}function sr(e,t){if($e===null)return e;const n=hi($e),u=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,r,o,l=_e]=t[i];s&&(ue(s)&&(s={mounted:s,updated:s}),s.deep&&Ot(r),u.push({dir:s,instance:n,value:r,oldValue:void 0,arg:o,modifiers:l}))}return e}function yt(e,t,n,u){const i=e.dirs,s=t&&t.dirs;for(let r=0;r<i.length;r++){const o=i[r];s&&(o.oldValue=s[r].value);let l=o.dir[u];l&&(zt(),lt(l,n,8,[e.el,o,e,t]),jt())}}function Iu(e,t){if(Ne){let n=Ne.provides;const u=Ne.parent&&Ne.parent.provides;u===n&&(n=Ne.provides=Object.create(u)),n[e]=t}}function pt(e,t,n=!1){const u=Os();if(u||Pn){let i=Pn?Pn._context.provides:u?u.parent==null||u.ce?u.vnode.appContext&&u.vnode.appContext.provides:u.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&ue(t)?t.call(u&&u.proxy):t}}const Nc=Symbol.for("v-scx"),zc=()=>pt(Nc);function jc(e,t){return Ts(e,null,t)}function Vn(e,t,n){return Ts(e,t,n)}function Ts(e,t,n=_e){const{immediate:u,deep:i,flush:s,once:r}=n,o=Me({},n),l=t&&u||!t&&s!=="post";let a;if(ru){if(s==="sync"){const p=zc();a=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=At,p.resume=At,p.pause=At,p}}const c=Ne;o.call=(p,m,E)=>lt(p,c,m,E);let f=!1;s==="post"?o.scheduler=p=>{Ke(p,c&&c.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,m)=>{m?p():Ds(p)}),o.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const d=Oc(e,t,o);return ru&&(a?a.push(d):l&&d()),d}function Hc(e,t,n){const u=this.proxy,i=we(e)?e.includes(".")?sl(u,e):()=>u[e]:e.bind(u,u);let s;ue(t)?s=t:(s=t.handler,n=t);const r=gu(this),o=Ts(i,s.bind(u),n);return r(),o}function sl(e,t){const n=t.split(".");return()=>{let u=e;for(let i=0;i<n.length&&u;i++)u=u[n[i]];return u}}const Uc=Symbol("_vte"),ai=e=>e.__isTeleport,it=Symbol("_leaveCb"),Bn=Symbol("_enterCb");function Qc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return di(()=>{e.isMounted=!0}),Ms(()=>{e.isUnmounting=!0}),e}const nt=[Function,Array],rl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nt,onEnter:nt,onAfterEnter:nt,onEnterCancelled:nt,onBeforeLeave:nt,onLeave:nt,onAfterLeave:nt,onLeaveCancelled:nt,onBeforeAppear:nt,onAppear:nt,onAfterAppear:nt,onAppearCancelled:nt},ol=e=>{const t=e.subTree;return t.component?ol(t.component):t},Vc={name:"BaseTransition",props:rl,setup(e,{slots:t}){const n=Os(),u=Qc();return()=>{const i=t.default&&cl(t.default(),!0),s=i&&i.length?ll(i):n.subTree?Ge():void 0;if(!s)return;const r=fe(e),{mode:o}=r;if(u.isLeaving)return Di(s);const l=ju(s);if(!l)return Di(s);let a=Yi(l,r,u,n,f=>a=f);l.type!==qe&&tu(l,a);let c=n.subTree&&ju(n.subTree);if(c&&c.type!==qe&&!fn(c,l)&&ol(n).type!==qe){let f=Yi(c,r,u,n);if(tu(c,f),o==="out-in"&&l.type!==qe)return u.isLeaving=!0,f.afterLeave=()=>{u.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,c=void 0},Di(s);o==="in-out"&&l.type!==qe?f.delayLeave=(d,p,m)=>{const E=al(u,c);E[String(c.key)]=c,d[it]=()=>{p(),d[it]=void 0,delete a.delayedLeave,c=void 0},a.delayedLeave=()=>{m(),delete a.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function ll(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==qe){t=n;break}}return t}const Gc=Vc;function al(e,t){const{leavingVNodes:n}=e;let u=n.get(t.type);return u||(u=Object.create(null),n.set(t.type,u)),u}function Yi(e,t,n,u,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:m,onLeaveCancelled:E,onBeforeAppear:A,onAppear:S,onAfterAppear:k,onAppearCancelled:b}=t,_=String(e.key),v=al(n,e),M=(L,G)=>{L&&lt(L,u,9,G)},I=(L,G)=>{const V=G[1];M(L,G),Y(L)?L.every(R=>R.length<=1)&&V():L.length<=1&&V()},X={mode:r,persisted:o,beforeEnter(L){let G=l;if(!n.isMounted)if(s)G=A||l;else return;L[it]&&L[it](!0);const V=v[_];V&&fn(e,V)&&V.el[it]&&V.el[it](),M(G,[L])},enter(L){if(v[_]===e)return;let G=a,V=c,R=f;if(!n.isMounted)if(s)G=S||a,V=k||c,R=b||f;else return;let ee=!1;L[Bn]=ae=>{ee||(ee=!0,ae?M(R,[L]):M(V,[L]),X.delayedLeave&&X.delayedLeave(),L[Bn]=void 0)};const le=L[Bn].bind(null,!1);G?I(G,[L,le]):le()},leave(L,G){const V=String(e.key);if(L[Bn]&&L[Bn](!0),n.isUnmounting)return G();M(d,[L]);let R=!1;L[it]=le=>{R||(R=!0,G(),le?M(E,[L]):M(m,[L]),L[it]=void 0,v[V]===e&&delete v[V])};const ee=L[it].bind(null,!1);v[V]=e,p?I(p,[L,ee]):ee()},clone(L){const G=Yi(L,t,n,u,i);return i&&i(G),G}};return X}function Di(e){if(ci(e))return e=tn(e),e.children=null,e}function ju(e){if(!ci(e))return ai(e.type)&&e.children?ll(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ue(n.default))return n.default()}}function tu(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;tu(ai(n.type)&&ju(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function cl(e,t=!1,n){let u=[],i=0;for(let s=0;s<e.length;s++){let r=e[s];const o=n==null?r.key:String(n)+String(r.key!=null?r.key:s);r.type===oe?(r.patchFlag&128&&i++,u=u.concat(cl(r.children,t,o))):(t||r.type!==qe)&&u.push(o!=null?tn(r,{key:o}):r)}if(i>1)for(let s=0;s<u.length;s++)u[s].patchFlag=-2;return u}function Ps(e,t){return ue(e)?Me({name:e.name},t,{setup:e}):e}function fl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function rr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Hu=new WeakMap;function Dn(e,t,n,u,i=!1){if(Y(e)){e.forEach((E,A)=>Dn(E,t&&(Y(t)?t[A]:t),n,u,i));return}if(bn(u)&&!i){u.shapeFlag&512&&u.type.__asyncResolved&&u.component.subTree.component&&Dn(e,t,n,u.component.subTree);return}const s=u.shapeFlag&4?hi(u.component):u.el,r=i?null:s,{i:o,r:l}=e,a=t&&t.r,c=o.refs===_e?o.refs={}:o.refs,f=o.setupState,d=fe(f),p=f===_e?Po:E=>rr(c,E)?!1:he(d,E),m=(E,A)=>!(A&&rr(c,A));if(a!=null&&a!==l){if(or(t),we(a))c[a]=null,p(a)&&(f[a]=null);else if(ze(a)){const E=t;m(a,E.k)&&(a.value=null),E.k&&(c[E.k]=null)}}if(ue(l))bu(l,o,12,[r,c]);else{const E=we(l),A=ze(l);if(E||A){const S=()=>{if(e.f){const k=E?p(l)?f[l]:c[l]:m()||!e.k?l.value:c[e.k];if(i)Y(k)&&bs(k,s);else if(Y(k))k.includes(s)||k.push(s);else if(E)c[l]=[s],p(l)&&(f[l]=c[l]);else{const b=[s];m(l,e.k)&&(l.value=b),e.k&&(c[e.k]=b)}}else E?(c[l]=r,p(l)&&(f[l]=r)):A&&(m(l,e.k)&&(l.value=r),e.k&&(c[e.k]=r))};if(r){const k=()=>{S(),Hu.delete(e)};k.id=-1,Hu.set(e,k),Ke(k,n)}else or(e),S()}}}function or(e){const t=Hu.get(e);t&&(t.flags|=8,Hu.delete(e))}let lr=!1;const vn=()=>{lr||(console.error("Hydration completed but contains mismatches."),lr=!0)},Wc=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",Kc=e=>e.namespaceURI.includes("MathML"),wu=e=>{if(e.nodeType===1){if(Wc(e))return"svg";if(Kc(e))return"mathml"}},Au=e=>e.nodeType===8;function Xc(e){const{mt:t,p:n,o:{patchProp:u,createText:i,nextSibling:s,parentNode:r,remove:o,insert:l,createComment:a}}=e,c=(b,_)=>{if(!_.hasChildNodes()){n(null,b,_),Nu(),_._vnode=b;return}f(_.firstChild,b,null,null,null),Nu(),_._vnode=b},f=(b,_,v,M,I,X=!1)=>{X=X||!!_.dynamicChildren;const L=Au(b)&&b.data==="[",G=()=>E(b,_,v,M,I,L),{type:V,ref:R,shapeFlag:ee,patchFlag:le}=_;let ae=b.nodeType;_.el=b,le===-2&&(X=!1,_.dynamicChildren=null);let W=null;switch(V){case gn:ae!==3?_.children===""?(l(_.el=i(""),r(b),b),W=b):W=G():(b.data!==_.children&&(vn(),b.data=_.children),W=s(b));break;case qe:k(b)?(W=s(b),S(_.el=b.content.firstChild,b,v)):ae!==8||L?W=G():W=s(b);break;case Wn:if(L&&(b=s(b),ae=b.nodeType),ae===1||ae===3){W=b;const se=!_.children.length;for(let ne=0;ne<_.staticCount;ne++)se&&(_.children+=W.nodeType===1?W.outerHTML:W.data),ne===_.staticCount-1&&(_.anchor=W),W=s(W);return L?s(W):W}else G();break;case oe:L?W=m(b,_,v,M,I,X):W=G();break;default:if(ee&1)(ae!==1||_.type.toLowerCase()!==b.tagName.toLowerCase())&&!k(b)?W=G():W=d(b,_,v,M,I,X);else if(ee&6){_.slotScopeIds=I;const se=r(b);if(L?W=A(b):Au(b)&&b.data==="teleport start"?W=A(b,b.data,"teleport end"):W=s(b),t(_,se,null,v,M,wu(se),X),(bn(_)||_.component.asyncDep)&&!_.component.subTree){let ne;L?(ne=F(Wn),ne.anchor=W?W.previousSibling:se.lastChild):ne=b.nodeType===3?ie(""):F(b.nodeType===8?qe:"div"),ne.el=b,_.component.subTree=ne}}else ee&64?ae!==8?W=G():W=_.type.hydrate(b,_,v,M,I,X,e,p):ee&128&&(W=_.type.hydrate(b,_,v,M,wu(r(b)),I,X,e,f))}return R!=null&&Dn(R,null,M,_),W},d=(b,_,v,M,I,X)=>{X=X||!!_.dynamicChildren;const{type:L,dynamicProps:G,props:V,patchFlag:R,shapeFlag:ee,dirs:le,transition:ae}=_,W=L==="input"||L==="option",se=!!G;if(W||se||R!==-1){le&&yt(_,null,v,"created");let ne=!1;if(k(b)){ne=Ml(null,ae)&&v&&v.vnode.props&&v.vnode.props.appear;const de=b.content.firstChild;if(ne){const Se=de.getAttribute("class");Se&&(de.$cls=Se),ae.beforeEnter(de)}S(de,b,v),_.el=b=de}if(ee&16&&!(V&&(V.innerHTML||V.textContent))){let de=p(b.firstChild,_,b,v,M,I,X);for(de&&!qu(b,1)&&vn();de;){const Se=de;de=de.nextSibling,o(Se)}}else if(ee&8){let de=_.children;de[0]===`
`&&(b.tagName==="PRE"||b.tagName==="TEXTAREA")&&(de=de.slice(1));const{textContent:Se}=b;Se!==de&&Se!==de.replace(/\r\n|\r/g,`
`)&&(qu(b,0)||vn(),b.textContent=_.children)}if(V){if(W||se||!X||R&48){const de=b.tagName.includes("-"),Se=b.namespaceURI.includes("svg")?"svg":b.namespaceURI.includes("MathML")?"mathml":void 0;for(const ge in V)if(W&&(ge.endsWith("value")||ge==="indeterminate")||hu(ge)&&!hn(ge)||ge[0]==="."||de&&!hn(ge)||G&&G.includes(ge)){if(Jc(b,ge,V[ge]))continue;u(b,ge,null,V[ge],Se,v)}}else if(V.onClick)u(b,"onClick",null,V.onClick,void 0,v);else if(R&4&&Bt(V.style))for(const de in V.style)V.style[de]}let je;(je=V&&V.onVnodeBeforeMount)&&ut(je,v,_),le&&yt(_,null,v,"beforeMount"),((je=V&&V.onVnodeMounted)||le||ne)&&Ll(()=>{je&&ut(je,v,_),ne&&ae.enter(b),le&&yt(_,null,v,"mounted")},M)}return b.nextSibling},p=(b,_,v,M,I,X,L)=>{L=L||!!_.dynamicChildren;const G=_.children,V=G.length;let R=!1;for(let ee=0;ee<V;ee++){const le=L?G[ee]:G[ee]=st(G[ee]),ae=le.type===gn;b?(ae&&!L&&ee+1<V&&st(G[ee+1]).type===gn&&(l(i(b.data.slice(le.children.length)),v,s(b)),b.data=le.children),b=f(b,le,M,I,X,L)):ae&&!le.children?l(le.el=i(""),v):(R||(R=!0,qu(v,1)||vn()),n(null,le,v,null,M,I,wu(v),X))}return b},m=(b,_,v,M,I,X)=>{const{slotScopeIds:L}=_;L&&(I=I?I.concat(L):L);const G=r(b),V=p(s(b),_,G,v,M,I,X);return V&&Au(V)&&V.data==="]"?s(_.anchor=V):(vn(),l(_.anchor=a("]"),G,V),V)},E=(b,_,v,M,I,X)=>{if(e0(b,_)||vn(),_.el=null,X){const V=A(b);for(;;){const R=s(b);if(R&&R!==V)o(R);else break}}const L=s(b),G=r(b);return o(b),n(null,_,G,L,v,M,wu(G),I),v&&(v.vnode.el=_.el,kl(v,_.el)),L},A=(b,_="[",v="]")=>{let M=0;for(;b;)if(b=s(b),b&&Au(b)&&(b.data===_&&M++,b.data===v)){if(M===0)return s(b);M--}return b},S=(b,_,v)=>{const M=_.parentNode;M&&M.replaceChild(b,_);let I=v;for(;I;)I.vnode.el===_&&(I.vnode.el=I.subTree.el=b),I=I.parent},k=b=>b.nodeType===1&&b.tagName==="TEMPLATE";return[c,f]}const Zc=new Set(["src","srcset","href","poster"]);function Jc(e,t,n){return Zc.has(t)?e.getAttribute(t)===(n==null?null:`${n}`):!1}const Uu="data-allow-mismatch",Yc={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function qu(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(Uu);)e=e.parentElement;return Fs(e&&e.getAttribute(Uu),t)}function Fs(e,t){if(e==null)return!1;if(e==="")return!0;{const n=e.split(",");return t===0&&n.includes("children")?!0:n.includes(Yc[t])}}function e0(e,t){return qu(e.parentElement,1)||t0(e)||n0(t)}function t0(e){return e.nodeType===1&&Fs(e.getAttribute(Uu),1)}function n0({props:e}){const t=e&&e[Uu];return typeof t=="string"&&Fs(t,1)}ii().requestIdleCallback;ii().cancelIdleCallback;const bn=e=>!!e.type.__asyncLoader,ci=e=>e.type.__isKeepAlive;function dl(e,t){hl(e,"a",t)}function pl(e,t){hl(e,"da",t)}function hl(e,t,n=Ne){const u=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(fi(t,u,n),n){let i=n.parent;for(;i&&i.parent;)ci(i.parent.vnode)&&u0(u,t,n,i),i=i.parent}}function u0(e,t,n,u){const i=fi(t,e,u,!0);ml(()=>{bs(u[t],i)},n)}function fi(e,t,n=Ne,u=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{zt();const o=gu(n),l=lt(t,n,e,r);return o(),jt(),l});return u?i.unshift(s):i.push(s),s}}const Ht=e=>(t,n=Ne)=>{(!ru||e==="sp")&&fi(e,(...u)=>t(...u),n)},i0=Ht("bm"),di=Ht("m"),s0=Ht("bu"),r0=Ht("u"),Ms=Ht("bum"),ml=Ht("um"),o0=Ht("sp"),l0=Ht("rtg"),a0=Ht("rtc");function c0(e,t=Ne){fi("ec",e,t)}const f0="components";function Ut(e,t){return p0(f0,e,!0,t)||e}const d0=Symbol.for("v-ndc");function p0(e,t,n=!0,u=!1){const i=$e||Ne;if(i){const s=i.type;{const o=G0(s,!1);if(o&&(o===t||o===Ve(t)||o===ui(Ve(t))))return s}const r=ar(i[e]||s[e],t)||ar(i.appContext[e],t);return!r&&u?s:r}}function ar(e,t){return e&&(e[t]||e[Ve(t)]||e[ui(Ve(t))])}function Fe(e,t,n,u){let i;const s=n,r=Y(e);if(r||we(e)){const o=r&&Bt(e);let l=!1,a=!1;o&&(l=!rt(e),a=Ct(e),e=ri(e)),i=new Array(e.length);for(let c=0,f=e.length;c<f;c++)i[c]=t(l?a?en(ot(e[c])):ot(e[c]):e[c],c,void 0,s)}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,s)}else if(me(e))if(e[Symbol.iterator])i=Array.from(e,(o,l)=>t(o,l,void 0,s));else{const o=Object.keys(e);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=t(e[c],c,l,s)}}else i=[];return i}function Tn(e,t,n,u,i,s){if(n==null&&(n={}),$e.ce||$e.parent&&bn($e.parent)&&$e.parent.ce){const a=n,c=Object.keys(a).length>0;return t!=="default"&&(a.name=t),N(),uu(oe,null,[F("slot",a,u)],c?-2:64)}let r=e[t];r&&r._c&&(r._d=!1);const o=Nt.length;N();let l;try{const a=r&&bl(r(n)),c=n.key||s||a&&a.key;l=uu(oe,{key:(c&&!ht(c)?c:`_${t}`)+(!a&&u?"_fb":"")},a||(u?u():[]),a&&e._===1?64:-2)}catch(a){for(let c=Nt.length;c>o;c--)Rs();throw a}finally{r&&r._c&&(r._d=!0)}return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),l}function bl(e){return e.some(t=>iu(t)?!(t.type===qe||t.type===oe&&!bl(t.children)):!0)?e:null}const es=e=>e?Nl(e)?hi(e):es(e.parent):null,Gn=Me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>es(e.parent),$root:e=>es(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>xl(e),$forceUpdate:e=>e.f||(e.f=()=>{Ds(e.update)}),$nextTick:e=>e.n||(e.n=Ss.bind(e.proxy)),$watch:e=>Hc.bind(e)}),Ti=(e,t)=>e!==_e&&!e.__isScriptSetup&&he(e,t),h0={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:u,data:i,props:s,accessCache:r,type:o,appContext:l}=e;if(t[0]!=="$"){const d=r[t];if(d!==void 0)switch(d){case 1:return u[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(Ti(u,t))return r[t]=1,u[t];if(i!==_e&&he(i,t))return r[t]=2,i[t];if(he(s,t))return r[t]=3,s[t];if(n!==_e&&he(n,t))return r[t]=4,n[t];ts&&(r[t]=0)}}const a=Gn[t];let c,f;if(a)return t==="$attrs"&&Be(e.attrs,"get",""),a(e);if((c=o.__cssModules)&&(c=c[t]))return c;if(n!==_e&&he(n,t))return r[t]=4,n[t];if(f=l.config.globalProperties,he(f,t))return f[t]},set({_:e},t,n){const{data:u,setupState:i,ctx:s}=e;return Ti(i,t)?(i[t]=n,!0):u!==_e&&he(u,t)?(u[t]=n,!0):he(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:u,appContext:i,props:s,type:r}},o){let l;return!!(n[o]||e!==_e&&o[0]!=="$"&&he(e,o)||Ti(t,o)||he(s,o)||he(u,o)||he(Gn,o)||he(i.config.globalProperties,o)||(l=r.__cssModules)&&l[o])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:he(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function cr(e){return Y(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ts=!0;function m0(e){const t=xl(e),n=e.proxy,u=e.ctx;ts=!1,t.beforeCreate&&fr(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:r,watch:o,provide:l,inject:a,created:c,beforeMount:f,mounted:d,beforeUpdate:p,updated:m,activated:E,deactivated:A,beforeDestroy:S,beforeUnmount:k,destroyed:b,unmounted:_,render:v,renderTracked:M,renderTriggered:I,errorCaptured:X,serverPrefetch:L,expose:G,inheritAttrs:V,components:R,directives:ee,filters:le}=t;if(a&&b0(a,u,null),r)for(const se in r){const ne=r[se];ue(ne)&&(u[se]=ne.bind(n))}if(i){const se=i.call(n,n);me(se)&&(e.data=oi(se))}if(ts=!0,s)for(const se in s){const ne=s[se],je=ue(ne)?ne.bind(n,n):ue(ne.get)?ne.get.bind(n,n):At,de=!ue(ne)&&ue(ne.set)?ne.set.bind(n):At,Se=Re({get:je,set:de});Object.defineProperty(u,se,{enumerable:!0,configurable:!0,get:()=>Se.value,set:ge=>Se.value=ge})}if(o)for(const se in o)gl(o[se],u,n,se);if(l){const se=ue(l)?l.call(n):l;Reflect.ownKeys(se).forEach(ne=>{Iu(ne,se[ne])})}c&&fr(c,e,"c");function W(se,ne){Y(ne)?ne.forEach(je=>se(je.bind(n))):ne&&se(ne.bind(n))}if(W(i0,f),W(di,d),W(s0,p),W(r0,m),W(dl,E),W(pl,A),W(c0,X),W(a0,M),W(l0,I),W(Ms,k),W(ml,_),W(o0,L),Y(G))if(G.length){const se=e.exposed||(e.exposed={});G.forEach(ne=>{Object.defineProperty(se,ne,{get:()=>n[ne],set:je=>n[ne]=je,enumerable:!0})})}else e.exposed||(e.exposed={});v&&e.render===At&&(e.render=v),V!=null&&(e.inheritAttrs=V),R&&(e.components=R),ee&&(e.directives=ee),L&&fl(e)}function b0(e,t,n=At){Y(e)&&(e=ns(e));for(const u in e){const i=e[u];let s;me(i)?"default"in i?s=pt(i.from||u,i.default,!0):s=pt(i.from||u):s=pt(i),ze(s)?Object.defineProperty(t,u,{enumerable:!0,configurable:!0,get:()=>s.value,set:r=>s.value=r}):t[u]=s}}function fr(e,t,n){lt(Y(e)?e.map(u=>u.bind(t.proxy)):e.bind(t.proxy),t,n)}function gl(e,t,n,u){let i=u.includes(".")?sl(n,u):()=>n[u];if(we(e)){const s=t[e];ue(s)&&Vn(i,s)}else if(ue(e))Vn(i,e.bind(n));else if(me(e))if(Y(e))e.forEach(s=>gl(s,t,n,u));else{const s=ue(e.handler)?e.handler.bind(n):t[e.handler];ue(s)&&Vn(i,s,e)}}function xl(e){const t=e.type,{mixins:n,extends:u}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:r}}=e.appContext,o=s.get(t);let l;return o?l=o:!i.length&&!n&&!u?l=t:(l={},i.length&&i.forEach(a=>Qu(l,a,r,!0)),Qu(l,t,r)),me(t)&&s.set(t,l),l}function Qu(e,t,n,u=!1){const{mixins:i,extends:s}=t;s&&Qu(e,s,n,!0),i&&i.forEach(r=>Qu(e,r,n,!0));for(const r in t)if(!(u&&r==="expose")){const o=g0[r]||n&&n[r];e[r]=o?o(e[r],t[r]):t[r]}return e}const g0={data:dr,props:pr,emits:pr,methods:jn,computed:jn,beforeCreate:He,created:He,beforeMount:He,mounted:He,beforeUpdate:He,updated:He,beforeDestroy:He,beforeUnmount:He,destroyed:He,unmounted:He,activated:He,deactivated:He,errorCaptured:He,serverPrefetch:He,components:jn,directives:jn,watch:_0,provide:dr,inject:x0};function dr(e,t){return t?e?function(){return Me(ue(e)?e.call(this,this):e,ue(t)?t.call(this,this):t)}:t:e}function x0(e,t){return jn(ns(e),ns(t))}function ns(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function He(e,t){return e?[...new Set([].concat(e,t))]:t}function jn(e,t){return e?Me(Object.create(null),e,t):t}function pr(e,t){return e?Y(e)&&Y(t)?[...new Set([...e,...t])]:Me(Object.create(null),cr(e),cr(t??{})):t}function _0(e,t){if(!e)return t;if(!t)return e;const n=Me(Object.create(null),e);for(const u in t)n[u]=He(e[u],t[u]);return n}function _l(){return{app:null,config:{isNativeTag:Po,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let y0=0;function E0(e,t){return function(u,i=null){ue(u)||(u=Me({},u)),i!=null&&!me(i)&&(i=null);const s=_l(),r=new WeakSet,o=[];let l=!1;const a=s.app={_uid:y0++,_component:u,_props:i,_container:null,_context:s,_instance:null,version:jl,get config(){return s.config},set config(c){},use(c,...f){return r.has(c)||(c&&ue(c.install)?(r.add(c),c.install(a,...f)):ue(c)&&(r.add(c),c(a,...f))),a},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),a},component(c,f){return f?(s.components[c]=f,a):s.components[c]},directive(c,f){return f?(s.directives[c]=f,a):s.directives[c]},mount(c,f,d){if(!l){const p=a._ceVNode||F(u,i);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),f&&t?t(p,c):e(p,c,d),l=!0,a._container=c,c.__vue_app__=a,hi(p.component)}},onUnmount(c){o.push(c)},unmount(){l&&(lt(o,a._instance,16),e(null,a._container),delete a._container.__vue_app__)},provide(c,f){return s.provides[c]=f,a},runWithContext(c){const f=Pn;Pn=a;try{return c()}finally{Pn=f}}};return a}}let Pn=null;const k0=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ve(t)}Modifiers`]||e[`${xn(t)}Modifiers`];function v0(e,t,...n){if(e.isUnmounted)return;const u=e.vnode.props||_e;let i=n;const s=t.startsWith("update:"),r=s&&k0(u,t.slice(7));r&&(r.trim&&(i=n.map(c=>we(c)?c.trim():c)),r.number&&(i=i.map(xs)));let o,l=u[o=vi(t)]||u[o=vi(Ve(t))];!l&&s&&(l=u[o=vi(xn(t))]),l&&lt(l,e,6,i);const a=u[o+"Once"];if(a){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,lt(a,e,6,i)}}const w0=new WeakMap;function yl(e,t,n=!1){const u=n?w0:t.emitsCache,i=u.get(e);if(i!==void 0)return i;const s=e.emits;let r={},o=!1;if(!ue(e)){const l=a=>{const c=yl(a,t,!0);c&&(o=!0,Me(r,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!o?(me(e)&&u.set(e,null),null):(Y(s)?s.forEach(l=>r[l]=null):Me(r,s),me(e)&&u.set(e,r),r)}function pi(e,t){return!e||!hu(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),he(e,t[0].toLowerCase()+t.slice(1))||he(e,xn(t))||he(e,t))}function Pi(e){const{type:t,vnode:n,proxy:u,withProxy:i,propsOptions:[s],slots:r,attrs:o,emit:l,render:a,renderCache:c,props:f,data:d,setupState:p,ctx:m,inheritAttrs:E}=e,A=zu(e);let S,k;try{if(n.shapeFlag&4){const _=i||u,v=_;S=st(a.call(v,_,c,f,p,d,m)),k=o}else{const _=t;S=st(_.length>1?_(f,{attrs:o,slots:r,emit:l}):_(f,null)),k=t.props?o:A0(o)}}catch(_){Nt.length=0,li(_,e,1),S=F(qe)}let b=S;if(k&&E!==!1){const _=Object.keys(k),{shapeFlag:v}=b;_.length&&v&7&&(s&&_.some(ti)&&(k=C0(k,s)),b=tn(b,k,!1,!0))}if(n.dirs&&(b=tn(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition){const _=ai(b.type)&&ju(b)||b;tu(_,n.transition)}return S=b,zu(A),S}const A0=e=>{let t;for(const n in e)(n==="class"||n==="style"||hu(n))&&((t||(t={}))[n]=e[n]);return t},C0=(e,t)=>{const n={};for(const u in e)(!ti(u)||!(u.slice(9)in t))&&(n[u]=e[u]);return n};function S0(e,t,n){const{props:u,children:i,component:s}=e,{props:r,children:o,patchFlag:l}=t,a=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return u?hr(u,r,a):!!r;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(El(r,u,d)&&!pi(a,d))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:u===r?!1:u?r?hr(u,r,a):!0:!!r;return!1}function hr(e,t,n){const u=Object.keys(t);if(u.length!==Object.keys(e).length)return!0;for(let i=0;i<u.length;i++){const s=u[i];if(El(t,e,s)&&!pi(n,s))return!0}return!1}function El(e,t,n){const u=e[n],i=t[n];return n==="style"&&me(u)&&me(i)?!si(u,i):u!==i}function kl({vnode:e,parent:t,suspense:n},u){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=u,e=i),i===e)(e=t.vnode).el=u,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=u)}const vl={},wl=()=>Object.create(vl),Al=e=>Object.getPrototypeOf(e)===vl;function D0(e,t,n,u=!1){const i={},s=wl();e.propsDefaults=Object.create(null),Cl(e,t,i,s);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);n?e.props=u?i:Jo(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function T0(e,t,n,u){const{props:i,attrs:s,vnode:{patchFlag:r}}=e,o=fe(i),[l]=e.propsOptions;let a=!1;if((u||r>0)&&!(r&16)){if(r&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(pi(e.emitsOptions,d))continue;const p=t[d];if(l)if(he(s,d))p!==s[d]&&(s[d]=p,a=!0);else{const m=Ve(d);i[m]=us(l,o,m,p,e,!1)}else p!==s[d]&&(s[d]=p,a=!0)}}}else{Cl(e,t,i,s)&&(a=!0);let c;for(const f in o)(!t||!he(t,f)&&((c=xn(f))===f||!he(t,c)))&&(l?n&&(n[f]!==void 0||n[c]!==void 0)&&(i[f]=us(l,o,f,void 0,e,!0)):delete i[f]);if(s!==o)for(const f in s)(!t||!he(t,f))&&(delete s[f],a=!0)}a&&Rt(e.attrs,"set","")}function Cl(e,t,n,u){const[i,s]=e.propsOptions;let r=!1,o;if(t)for(let l in t){if(hn(l))continue;const a=t[l];let c;i&&he(i,c=Ve(l))?!s||!s.includes(c)?n[c]=a:(o||(o={}))[c]=a:pi(e.emitsOptions,l)||(!(l in u)||a!==u[l])&&(u[l]=a,r=!0)}if(s){const l=fe(n),a=o||_e;for(let c=0;c<s.length;c++){const f=s[c];n[f]=us(i,l,f,a[f],e,!he(a,f))}}return r}function us(e,t,n,u,i,s){const r=e[n];if(r!=null){const o=he(r,"default");if(o&&u===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&ue(l)){const{propsDefaults:a}=i;if(n in a)u=a[n];else{const c=gu(i);u=a[n]=l.call(null,t),c()}}else u=l;i.ce&&i.ce._setProp(n,u)}r[0]&&(s&&!o?u=!1:r[1]&&(u===""||u===xn(n))&&(u=!0))}return u}const P0=new WeakMap;function Sl(e,t,n=!1){const u=n?P0:t.propsCache,i=u.get(e);if(i)return i;const s=e.props,r={},o=[];let l=!1;if(!ue(e)){const c=f=>{l=!0;const[d,p]=Sl(f,t,!0);Me(r,d),p&&o.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!l)return me(e)&&u.set(e,dn),dn;if(Y(s))for(let c=0;c<s.length;c++){const f=Ve(s[c]);mr(f)&&(r[f]=_e)}else if(s)for(const c in s){const f=Ve(c);if(mr(f)){const d=s[c],p=r[f]=Y(d)||ue(d)?{type:d}:Me({},d),m=p.type;let E=!1,A=!0;if(Y(m))for(let S=0;S<m.length;++S){const k=m[S],b=ue(k)&&k.name;if(b==="Boolean"){E=!0;break}else b==="String"&&(A=!1)}else E=ue(m)&&m.name==="Boolean";p[0]=E,p[1]=A,(E||he(p,"default"))&&o.push(f)}}const a=[r,o];return me(e)&&u.set(e,a),a}function mr(e){return e[0]!=="$"&&!hn(e)}const Is=e=>e==="_"||e==="_ctx"||e==="$stable",qs=e=>Y(e)?e.map(st):[st(e)],F0=(e,t,n)=>{if(t._n)return t;const u=Q((...i)=>qs(t(...i)),n);return u._c=!1,u},Dl=(e,t,n)=>{const u=e._ctx;for(const i in e){if(Is(i))continue;const s=e[i];if(ue(s))t[i]=F0(i,s,u);else if(s!=null){const r=qs(s);t[i]=()=>r}}},Tl=(e,t)=>{const n=qs(t);e.slots.default=()=>n},Pl=(e,t,n)=>{for(const u in t)(n||!Is(u))&&(e[u]=t[u])},M0=(e,t,n)=>{const u=e.slots=wl();if(e.vnode.shapeFlag&32){const i=t._;i?(Pl(u,t,n),n&&qo(u,"_",i,!0)):Dl(t,u)}else t&&Tl(e,t)},I0=(e,t,n)=>{const{vnode:u,slots:i}=e;let s=!0,r=_e;if(u.shapeFlag&32){const o=t._;o?n&&o===1?s=!1:Pl(i,t,n):(s=!t.$stable,Dl(t,i)),r=t}else t&&(Tl(e,t),r={default:1});if(s)for(const o in i)!Is(o)&&r[o]==null&&delete i[o]},Ke=Ll;function q0(e){return Fl(e)}function R0(e){return Fl(e,Xc)}function Fl(e,t){const n=ii();n.__VUE__=!0;const{insert:u,remove:i,patchProp:s,createElement:r,createText:o,createComment:l,setText:a,setElementText:c,parentNode:f,nextSibling:d,setScopeId:p=At,insertStaticContent:m}=e,E=(h,x,y,P=null,w=null,T=null,$=void 0,O=null,q=!!x.dynamicChildren)=>{if(h===x)return;h&&!fn(h,x)&&(P=C(h),ge(h,w,T,!0),h=null),x.patchFlag===-2&&(q=!1,x.dynamicChildren=null),x.dynamicChildren&&h&&h.dynamicChildren&&h.dynamicChildren.hasOnce&&(x.dynamicChildren===dn&&(x.dynamicChildren=[]),x.dynamicChildren.hasOnce=!0);const{type:D,ref:J,shapeFlag:z}=x;switch(D){case gn:A(h,x,y,P);break;case qe:S(h,x,y,P);break;case Wn:h==null&&k(x,y,P,$);break;case oe:R(h,x,y,P,w,T,$,O,q);break;default:z&1?v(h,x,y,P,w,T,$,O,q):z&6?ee(h,x,y,P,w,T,$,O,q):(z&64||z&128)&&D.process(h,x,y,P,w,T,$,O,q,Z)}J!=null&&w?Dn(J,h&&h.ref,T,x||h,!x):J==null&&h&&h.ref!=null&&Dn(h.ref,null,T,h,!0)},A=(h,x,y,P)=>{if(h==null)u(x.el=o(x.children),y,P);else{const w=x.el=h.el;x.children!==h.children&&a(w,x.children)}},S=(h,x,y,P)=>{h==null?u(x.el=l(x.children||""),y,P):x.el=h.el},k=(h,x,y,P)=>{[h.el,h.anchor]=m(h.children,x,y,P,h.el,h.anchor)},b=({el:h,anchor:x},y,P)=>{let w;for(;h&&h!==x;)w=d(h),u(h,y,P),h=w;u(x,y,P)},_=({el:h,anchor:x})=>{let y;for(;h&&h!==x;)y=d(h),i(h),h=y;i(x)},v=(h,x,y,P,w,T,$,O,q)=>{if(x.type==="svg"?$="svg":x.type==="math"&&($="mathml"),h==null)M(x,y,P,w,T,$,O,q);else{const D=h.el&&h.el._isVueCE?h.el:null;try{D&&D._beginPatch(),L(h,x,w,T,$,O,q)}finally{D&&D._endPatch()}}},M=(h,x,y,P,w,T,$,O)=>{let q,D;const{props:J,shapeFlag:z,transition:K,dirs:te}=h;if(q=h.el=r(h.type,T,J&&J.is,J),z&8?c(q,h.children):z&16&&X(h.children,q,null,P,w,Fi(h,T),$,O),te&&yt(h,null,P,"created"),I(q,h,h.scopeId,$,P),J){for(const xe in J)xe!=="value"&&!hn(xe)&&s(q,xe,null,J[xe],T,P);"value"in J&&s(q,"value",null,J.value,T),(D=J.onVnodeBeforeMount)&&ut(D,P,h)}te&&yt(h,null,P,"beforeMount");const ce=Ml(w,K);ce&&K.beforeEnter(q),u(q,x,y),((D=J&&J.onVnodeMounted)||ce||te)&&Ke(()=>{try{D&&ut(D,P,h),ce&&K.enter(q),te&&yt(h,null,P,"mounted")}finally{}},w)},I=(h,x,y,P,w)=>{if(y&&p(h,y),P)for(let T=0;T<P.length;T++)p(h,P[T]);if(w){let T=w.subTree;if(x===T||Ol(T.type)&&(T.ssContent===x||T.ssFallback===x)){const $=w.vnode;I(h,$,$.scopeId,$.slotScopeIds,w.parent)}}},X=(h,x,y,P,w,T,$,O,q=0)=>{for(let D=q;D<h.length;D++){const J=h[D]=O?qt(h[D]):st(h[D]);E(null,J,x,y,P,w,T,$,O)}},L=(h,x,y,P,w,T,$)=>{const O=x.el=h.el;let{patchFlag:q,dynamicChildren:D,dirs:J}=x;q|=h.patchFlag&16;const z=h.props||_e,K=x.props||_e;let te;if(y&&rn(y,!1),(te=K.onVnodeBeforeUpdate)&&ut(te,y,x,h),J&&yt(x,h,y,"beforeUpdate"),y&&rn(y,!0),D&&(!h.dynamicChildren||h.dynamicChildren.length!==D.length)&&(q=0,$=!1,D=null),(z.innerHTML&&K.innerHTML==null||z.textContent&&K.textContent==null)&&c(O,""),D?G(h.dynamicChildren,D,O,y,P,Fi(x,w),T):$||ne(h,x,O,null,y,P,Fi(x,w),T,!1),q>0){if(q&16)V(O,z,K,y,w);else if(q&2&&z.class!==K.class&&s(O,"class",null,K.class,w),q&4&&s(O,"style",z.style,K.style,w),q&8){const ce=x.dynamicProps;for(let xe=0;xe<ce.length;xe++){const be=ce[xe],De=z[be],Te=K[be];(Te!==De||be==="value")&&s(O,be,De,Te,w,y)}}q&1&&h.children!==x.children&&c(O,x.children)}else!$&&D==null&&V(O,z,K,y,w);((te=K.onVnodeUpdated)||J)&&Ke(()=>{te&&ut(te,y,x,h),J&&yt(x,h,y,"updated")},P)},G=(h,x,y,P,w,T,$)=>{for(let O=0;O<x.length;O++){const q=h[O],D=x[O],J=q.el&&(q.type===oe||!fn(q,D)||q.shapeFlag&198)?f(q.el):y;E(q,D,J,null,P,w,T,$,!0)}},V=(h,x,y,P,w)=>{if(x!==y){if(x!==_e)for(const T in x)!hn(T)&&!(T in y)&&s(h,T,x[T],null,w,P);for(const T in y){if(hn(T))continue;const $=y[T],O=x[T];$!==O&&T!=="value"&&s(h,T,O,$,w,P)}"value"in y&&s(h,"value",x.value,y.value,w)}},R=(h,x,y,P,w,T,$,O,q)=>{const D=x.el=h?h.el:o(""),J=x.anchor=h?h.anchor:o("");let{patchFlag:z,dynamicChildren:K,slotScopeIds:te}=x;te&&(O=O?O.concat(te):te),h==null?(u(D,y,P),u(J,y,P),X(x.children||[],y,J,w,T,$,O,q)):z>0&&z&64&&K&&h.dynamicChildren&&h.dynamicChildren.length===K.length?(G(h.dynamicChildren,K,y,w,T,$,O),(x.key!=null||w&&x===w.subTree)&&Il(h,x,!0)):ne(h,x,y,J,w,T,$,O,q)},ee=(h,x,y,P,w,T,$,O,q)=>{x.slotScopeIds=O,h==null?x.shapeFlag&512?w.ctx.activate(x,y,P,$,q):le(x,y,P,w,T,$,q):ae(h,x,q)},le=(h,x,y,P,w,T,$)=>{const O=h.component=j0(h,P,w);if(ci(h)&&(O.ctx.renderer=Z),H0(O,!1,$),O.asyncDep){if(w&&w.registerDep(O,W,$),!h.el){const q=O.subTree=F(qe);S(null,q,x,y),h.placeholder=q.el}}else W(O,h,x,y,w,T,$)},ae=(h,x,y)=>{const P=x.component=h.component;if(S0(h,x,y))if(P.asyncDep&&!P.asyncResolved){x.el=h.el,se(P,x,y);return}else P.next=x,P.update();else x.el=h.el,P.vnode=x},W=(h,x,y,P,w,T,$)=>{const O=()=>{if(h.isMounted){let{next:z,bu:K,u:te,parent:ce,vnode:xe}=h;{const Ze=ql(h);if(Ze){z&&(z.el=xe.el,se(h,z,$)),Ze.asyncDep.then(()=>{Ke(()=>{h.isUnmounted||D()},w)});return}}let be=z,De;rn(h,!1),z?(z.el=xe.el,se(h,z,$)):z=xe,K&&Mu(K),(De=z.props&&z.props.onVnodeBeforeUpdate)&&ut(De,ce,z,xe),rn(h,!0);const Te=Pi(h),at=h.subTree;h.subTree=Te,E(at,Te,f(at.el),C(at),h,w,T),z.el=Te.el,be===null&&kl(h,Te.el),te&&Ke(te,w),(De=z.props&&z.props.onVnodeUpdated)&&Ke(()=>ut(De,ce,z,xe),w)}else{let z;const{el:K,props:te}=x,{bm:ce,m:xe,parent:be,root:De,type:Te}=h,at=bn(x);if(rn(h,!1),ce&&Mu(ce),!at&&(z=te&&te.onVnodeBeforeMount)&&ut(z,be,x),rn(h,!0),K&&ke){const Ze=()=>{h.subTree=Pi(h),ke(K,h.subTree,h,w,null)};at&&Te.__asyncHydrate?Te.__asyncHydrate(K,h,Ze):Ze()}else{De.ce&&De.ce._hasShadowRoot()&&De.ce._injectChildStyle(Te,h.parent?h.parent.type:void 0);const Ze=h.subTree=Pi(h);E(null,Ze,y,P,h,w,T),x.el=Ze.el}if(xe&&Ke(xe,w),!at&&(z=te&&te.onVnodeMounted)){const Ze=x;Ke(()=>ut(z,be,Ze),w)}(x.shapeFlag&256||be&&bn(be.vnode)&&be.vnode.shapeFlag&256)&&h.a&&Ke(h.a,w),h.isMounted=!0,x=y=P=null}};h.scope.on();const q=h.effect=new $o(O);h.scope.off();const D=h.update=q.run.bind(q),J=h.job=q.runIfDirty.bind(q);J.i=h,J.id=h.uid,q.scheduler=()=>Ds(J),rn(h,!0),D()},se=(h,x,y)=>{x.component=h;const P=h.vnode.props;h.vnode=x,h.next=null,T0(h,x.props,P,y),I0(h,x.children,y),zt(),ir(h),jt()},ne=(h,x,y,P,w,T,$,O,q=!1)=>{const D=h&&h.children,J=h?h.shapeFlag:0,z=x.children,{patchFlag:K,shapeFlag:te}=x;if(K>0){if(K&128){de(D,z,y,P,w,T,$,O,q);return}else if(K&256){je(D,z,y,P,w,T,$,O,q);return}}te&8?(J&16&&tt(D,w,T),z!==D&&c(y,z)):J&16?te&16?de(D,z,y,P,w,T,$,O,q):tt(D,w,T,!0):(J&8&&c(y,""),te&16&&X(z,y,P,w,T,$,O,q))},je=(h,x,y,P,w,T,$,O,q)=>{h=h||dn,x=x||dn;const D=h.length,J=x.length,z=Math.min(D,J);let K;for(K=0;K<z;K++){const te=x[K]=q?qt(x[K]):st(x[K]);E(h[K],te,y,null,w,T,$,O,q)}D>J?tt(h,w,T,!0,!1,z):X(x,y,P,w,T,$,O,q,z)},de=(h,x,y,P,w,T,$,O,q)=>{let D=0;const J=x.length;let z=h.length-1,K=J-1;for(;D<=z&&D<=K;){const te=h[D],ce=x[D]=q?qt(x[D]):st(x[D]);if(fn(te,ce))E(te,ce,y,null,w,T,$,O,q);else break;D++}for(;D<=z&&D<=K;){const te=h[z],ce=x[K]=q?qt(x[K]):st(x[K]);if(fn(te,ce))E(te,ce,y,null,w,T,$,O,q);else break;z--,K--}if(D>z){if(D<=K){const te=K+1,ce=te<J?x[te].el:P;for(;D<=K;)E(null,x[D]=q?qt(x[D]):st(x[D]),y,ce,w,T,$,O,q),D++}}else if(D>K)for(;D<=z;)ge(h[D],w,T,!0),D++;else{const te=D,ce=D,xe=new Map;for(D=ce;D<=K;D++){const Je=x[D]=q?qt(x[D]):st(x[D]);Je.key!=null&&xe.set(Je.key,D)}let be,De=0;const Te=K-ce+1;let at=!1,Ze=0;const Ln=new Array(Te);for(D=0;D<Te;D++)Ln[D]=0;for(D=te;D<=z;D++){const Je=h[D];if(De>=Te){ge(Je,w,T,!0);continue}let xt;if(Je.key!=null)xt=xe.get(Je.key);else for(be=ce;be<=K;be++)if(Ln[be-ce]===0&&fn(Je,x[be])){xt=be;break}xt===void 0?ge(Je,w,T,!0):(Ln[xt-ce]=D+1,xt>=Ze?Ze=xt:at=!0,E(Je,x[xt],y,null,w,T,$,O,q),De++)}const Ks=at?O0(Ln):dn;for(be=Ks.length-1,D=Te-1;D>=0;D--){const Je=ce+D,xt=x[Je],Xs=x[Je+1],Zs=Je+1<J?Xs.el||Rl(Xs):P;Ln[D]===0?E(null,xt,y,Zs,w,T,$,O,q):at&&(be<0||D!==Ks[be]?Se(xt,y,Zs,2):be--)}}},Se=(h,x,y,P,w=null)=>{const{el:T,type:$,transition:O,children:q,shapeFlag:D}=h;if(D&6){Se(h.component.subTree,x,y,P);return}if(D&128){h.suspense.move(x,y,P);return}if(D&64){$.move(h,x,y,Z);return}if($===oe){u(T,x,y);for(let z=0;z<q.length;z++)Se(q[z],x,y,P);u(h.anchor,x,y);return}if($===Wn){b(h,x,y);return}if(P!==2&&D&1&&O)if(P===0)O.persisted&&!T[it]?u(T,x,y):(O.beforeEnter(T),u(T,x,y),Ke(()=>O.enter(T),w));else{const{leave:z,delayLeave:K,afterLeave:te}=O,ce=()=>{h.ctx.isUnmounted?i(T):u(T,x,y)},xe=()=>{const be=T._isLeaving||!!T[it];T._isLeaving&&T[it](!0),O.persisted&&!be?ce():z(T,()=>{ce(),te&&te()})};K?K(T,ce,xe):xe()}else u(T,x,y)},ge=(h,x,y,P=!1,w=!1)=>{const{type:T,props:$,ref:O,children:q,dynamicChildren:D,shapeFlag:J,patchFlag:z,dirs:K,cacheIndex:te,memo:ce}=h;if((z===-2||D&&D.hasOnce)&&(w=!1),O!=null&&(zt(),Dn(O,null,y,h,!0),jt()),te!=null&&(!h.ctx||h.ctx===x)&&(x.renderCache[te]=void 0),J&256){x.ctx.deactivate(h);return}const xe=J&1&&K,be=!bn(h);let De;if(be&&(De=$&&$.onVnodeBeforeUnmount)&&ut(De,x,h),J&6)sn(h.component,y,P);else{if(J&128){h.suspense.unmount(y,P);return}xe&&yt(h,null,x,"beforeUnmount"),J&64?h.type.remove(h,x,y,Z,P):D&&!D.hasOnce&&(T!==oe||z>0&&z&64)?tt(D,x,y,!1,!0):(T===oe&&z&384||!w&&J&16)&&tt(q,x,y),P&&yn(h)}const Te=ce!=null&&te==null;(be&&(De=$&&$.onVnodeUnmounted)||xe||Te)&&Ke(()=>{De&&ut(De,x,h),xe&&yt(h,null,x,"unmounted"),Te&&(h.el=null)},y)},yn=h=>{const{type:x,el:y,anchor:P,transition:w}=h;if(x===oe){En(y,P);return}if(x===Wn){_(h),w&&!w.persisted&&w.afterLeave&&w.afterLeave();return}const T=()=>{i(y),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(h.shapeFlag&1&&w&&!w.persisted){const{leave:$,delayLeave:O}=w,q=()=>$(y,T);O?O(h.el,T,q):q()}else T()},En=(h,x)=>{let y;for(;h!==x;)y=d(h),i(h),h=y;i(x)},sn=(h,x,y)=>{const{bum:P,scope:w,job:T,subTree:$,um:O,m:q,a:D}=h;br(q),br(D),P&&Mu(P),w.stop(),T?(T.flags|=8,ge($,h,x,y)):h.vnode.el&&$&&($.transition=h.vnode.transition,ge($,h,x,y)),O&&Ke(O,x),Ke(()=>{h.isUnmounted=!0},x)},tt=(h,x,y,P=!1,w=!1,T=0)=>{for(let $=T;$<h.length;$++)ge(h[$],x,y,P,w)},C=h=>{if(h.shapeFlag&6)return C(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const x=d(h.anchor||h.el),y=x&&x[Uc];return y?d(y):x};let H=!1;const B=(h,x,y)=>{let P;h==null?x._vnode&&(ge(x._vnode,null,null,!0),P=x._vnode.component):E(x._vnode||null,h,x,null,null,null,y),x._vnode=h,H||(H=!0,ir(P),Nu(),H=!1)},Z={p:E,um:ge,m:Se,r:yn,mt:le,mc:X,pc:ne,pbc:G,n:C,o:e};let re,ke;return t&&([re,ke]=t(Z)),{render:B,hydrate:re,createApp:E0(B,re)}}function Fi({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function rn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ml(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Il(e,t,n=!1){const u=e.children,i=t.children;if(Y(u)&&Y(i))for(let s=0;s<u.length;s++){const r=u[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=qt(i[s]),o.el=r.el),!n&&o.patchFlag!==-2&&Il(r,o)),o.type===gn&&(o.patchFlag===-1&&(o=i[s]=qt(o)),o.el=r.el),o.type===qe&&!o.el&&(o.el=r.el)}}function O0(e){const t=e.slice(),n=[0];let u,i,s,r,o;const l=e.length;for(u=0;u<l;u++){const a=e[u];if(a!==0){if(i=n[n.length-1],e[i]<a){t[u]=i,n.push(u);continue}for(s=0,r=n.length-1;s<r;)o=s+r>>1,e[n[o]]<a?s=o+1:r=o;a<e[n[s]]&&(s>0&&(t[u]=n[s-1]),n[s]=u)}}for(s=n.length,r=n[s-1];s-- >0;)n[s]=r,r=t[r];return n}function ql(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ql(t)}function br(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Rl(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Rl(t.subTree):null}const Ol=e=>e.__isSuspense;function Ll(e,t){t&&t.pendingBranch?Y(e)?t.effects.push(...e):t.effects.push(e):Bc(e)}const oe=Symbol.for("v-fgt"),gn=Symbol.for("v-txt"),qe=Symbol.for("v-cmt"),Wn=Symbol.for("v-stc"),Nt=[];let Ye=null;function N(e=!1){Nt.push(Ye=e?null:[])}function Rs(){Nt.pop(),Ye=Nt[Nt.length-1]||null}let nu=1;function Vu(e,t=!1){nu+=e,e<0&&Ye&&t&&(Ye.hasOnce=!0)}function $l(e){return e.dynamicChildren=nu>0?Ye||dn:null,Rs(),nu>0&&Ye&&Ye.push(e),e}function j(e,t,n,u,i,s){return $l(g(e,t,n,u,i,s,!0))}function uu(e,t,n,u,i){return $l(F(e,t,n,u,i,!0))}function iu(e){return e?e.__v_isVNode===!0:!1}function fn(e,t){return e.type===t.type&&e.key===t.key}const Bl=({key:e})=>e??null,Ru=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?we(e)||ze(e)||ue(e)?{i:$e,r:e,k:t,f:!!n}:e:null);function g(e,t=null,n=null,u=0,i=null,s=e===oe?0:1,r=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Bl(t),ref:t&&Ru(t),scopeId:il,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:u,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:$e};return o?(Gu(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=we(n)?8:16),nu>0&&!r&&Ye&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ye.push(l),l}const F=L0;function L0(e,t=null,n=null,u=0,i=null,s=!1){if((!e||e===d0)&&(e=qe),iu(e)){const o=tn(e,t,!0);return n&&Gu(o,n),nu>0&&!s&&Ye&&(o.shapeFlag&6?Ye[Ye.indexOf(e)]=o:Ye.push(o)),o.patchFlag=-2,o}if(W0(e)&&(e=e.__vccOpts),t){t=$0(t);let{class:o,style:l}=t;o&&!we(o)&&(t.class=ft(o)),me(l)&&(Cs(l)&&!Y(l)&&(l=Me({},l)),t.style=_s(l))}const r=we(e)?1:Ol(e)?128:ai(e)?64:me(e)?4:ue(e)?2:0;return g(e,t,n,u,i,r,s,!0)}function $0(e){return e?Cs(e)||Al(e)?Me({},e):e:null}function tn(e,t,n=!1,u=!1){const{props:i,ref:s,patchFlag:r,children:o,transition:l}=e,a=t?B0(i||{},t):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Bl(a),ref:t&&t.ref?n&&s?Y(s)?s.concat(Ru(t)):[s,Ru(t)]:Ru(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==oe?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&tn(e.ssContent),ssFallback:e.ssFallback&&tn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return l&&u&&tu(c,l.clone(c)),c}function ie(e=" ",t=0){return F(gn,null,e,t)}function Ge(e="",t=!1){return t?(N(),uu(qe,null,e)):F(qe,null,e)}function st(e){return e==null||typeof e=="boolean"?F(qe):Y(e)?F(oe,null,e.slice()):iu(e)?qt(e):F(gn,null,String(e))}function qt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:tn(e)}function Gu(e,t){let n=0;const{shapeFlag:u}=e;if(t==null)t=null;else if(Y(t))n=16;else if(typeof t=="object")if(u&65){const i=t.default;i&&(i._c&&(i._d=!1),Gu(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Al(t)?t._ctx=$e:i===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(ue(t)){if(u&65){Gu(e,{default:t});return}t={default:t,_ctx:$e},n=32}else t=String(t),u&64?(n=16,t=[ie(t)]):n=8;e.children=t,e.shapeFlag|=n}function B0(...e){const t={};for(let n=0;n<e.length;n++){const u=e[n];for(const i in u)if(i==="class")t.class!==u.class&&(t.class=ft([t.class,u.class]));else if(i==="style")t.style=_s([t.style,u.style]);else if(hu(i)){const s=t[i],r=u[i];r&&s!==r&&!(Y(s)&&s.includes(r))?t[i]=s?[].concat(s,r):r:r==null&&s==null&&!ti(i)&&(t[i]=r)}else i!==""&&(t[i]=u[i])}return t}function ut(e,t,n,u=null){lt(e,t,7,[n,u])}const N0=_l();let z0=0;function j0(e,t,n){const u=e.type,i=(t?t.appContext:e.appContext)||N0,s={uid:z0++,vnode:e,type:u,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sl(u,i),emitsOptions:yl(u,i),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:u.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=v0.bind(null,s),e.ce&&e.ce(s),s}let Ne=null;const Os=()=>Ne||$e;let Wu,su;{const e=ii(),t=(n,u)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(u),s=>{i.length>1?i.forEach(r=>r(s)):i[0](s)}};Wu=t("__VUE_INSTANCE_SETTERS__",n=>Ne=n),su=t("__VUE_SSR_SETTERS__",n=>ru=n)}const gu=e=>{const t=Ne;return Wu(e),e.scope.on(),()=>{e.scope.off(),Wu(t)}},gr=()=>{Ne&&Ne.scope.off(),Wu(null)};function Nl(e){return e.vnode.shapeFlag&4}let ru=!1;function H0(e,t=!1,n=!1){t&&su(t);const{props:u,children:i}=e.vnode,s=Nl(e);D0(e,u,s,t),M0(e,i,n||t);const r=s?U0(e,t):void 0;return t&&su(!1),r}function U0(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,h0);const{setup:u}=n;if(u){zt();const i=e.setupContext=u.length>1?V0(e):null,s=gu(e),r=bu(u,e,0,[e.props,i]),o=Fo(r);if(jt(),s(),(o||e.sp)&&!bn(e)&&fl(e),o){if(r.then(gr,gr),t)return r.then(l=>{su(!0);try{xr(e,l,t)}finally{su(!1)}}).catch(l=>{li(l,e,0)});e.asyncDep=r}else xr(e,r)}else zl(e)}function xr(e,t,n){ue(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:me(t)&&(e.setupState=el(t)),zl(e)}function zl(e,t,n){const u=e.type;e.render||(e.render=u.render||At);{const i=gu(e);zt();try{m0(e)}finally{jt(),i()}}}const Q0={get(e,t){return Be(e,"get",""),e[t]}};function V0(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Q0),slots:e.slots,emit:e.emit,expose:t}}function hi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(el(Tc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Gn)return Gn[n](e)},has(t,n){return n in t||n in Gn}})):e.proxy}function G0(e,t=!0){return ue(e)?e.displayName||e.name:e.name||t&&e.__name}function W0(e){return ue(e)&&"__vccOpts"in e}const Re=(e,t)=>qc(e,t,ru);function Ls(e,t,n){try{Vu(-1);const u=arguments.length;return u===2?me(t)&&!Y(t)?iu(t)?F(e,null,[t]):F(e,t):F(e,null,t):(u>3?n=Array.prototype.slice.call(arguments,2):u===3&&iu(n)&&(n=[n]),F(e,t,n))}finally{Vu(1)}}const jl="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let is;const _r=typeof window<"u"&&window.trustedTypes;if(_r)try{is=_r.createPolicy("vue",{createHTML:e=>e})}catch{}const Hl=is?e=>is.createHTML(e):e=>e,K0="http://www.w3.org/2000/svg",X0="http://www.w3.org/1998/Math/MathML",It=typeof document<"u"?document:null,yr=It&&It.createElement("template"),Z0={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,u)=>{const i=t==="svg"?It.createElementNS(K0,e):t==="mathml"?It.createElementNS(X0,e):n?It.createElement(e,{is:n}):It.createElement(e);return e==="select"&&u&&u.multiple!=null&&i.setAttribute("multiple",u.multiple),i},createText:e=>It.createTextNode(e),createComment:e=>It.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>It.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,u,i,s){const r=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{yr.innerHTML=Hl(u==="svg"?`<svg>${e}</svg>`:u==="mathml"?`<math>${e}</math>`:e);const o=yr.content;if(u==="svg"||u==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Qt="transition",Nn="animation",ou=Symbol("_vtc"),Ul={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},J0=Me({},rl,Ul),Y0=e=>(e.displayName="Transition",e.props=J0,e),ef=Y0((e,{slots:t})=>Ls(Gc,tf(e),t)),on=(e,t=[])=>{Y(e)?e.forEach(n=>n(...t)):e&&e(...t)},Er=e=>e?Y(e)?e.some(t=>t.length>1):e.length>1:!1;function tf(e){const t={};for(const R in e)R in Ul||(t[R]=e[R]);if(e.css===!1)return t;const{name:n="v",type:u,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:a=r,appearToClass:c=o,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=nf(i),E=m&&m[0],A=m&&m[1],{onBeforeEnter:S,onEnter:k,onEnterCancelled:b,onLeave:_,onLeaveCancelled:v,onBeforeAppear:M=S,onAppear:I=k,onAppearCancelled:X=b}=t,L=(R,ee,le,ae)=>{R._enterCancelled=ae,ln(R,ee?c:o),ln(R,ee?a:r),le&&le()},G=(R,ee)=>{R._isLeaving=!1,ln(R,f),ln(R,p),ln(R,d),ee&&ee()},V=R=>(ee,le)=>{const ae=R?I:k,W=()=>L(ee,R,le);on(ae,[ee,W]),kr(()=>{ln(ee,R?l:s),Ft(ee,R?c:o),Er(ae)||vr(ee,u,E,W)})};return Me(t,{onBeforeEnter(R){on(S,[R]),Ft(R,s),Ft(R,r)},onBeforeAppear(R){on(M,[R]),Ft(R,l),Ft(R,a)},onEnter:V(!1),onAppear:V(!0),onLeave(R,ee){R._isLeaving=!0;const le=()=>G(R,ee);Ft(R,f),R._enterCancelled?(Ft(R,d),Cr(R)):(Cr(R),Ft(R,d)),kr(()=>{R._isLeaving&&(ln(R,f),Ft(R,p),Er(_)||vr(R,u,A,le))}),on(_,[R,le])},onEnterCancelled(R){L(R,!1,void 0,!0),on(b,[R])},onAppearCancelled(R){L(R,!0,void 0,!0),on(X,[R])},onLeaveCancelled(R){G(R),on(v,[R])}})}function nf(e){if(e==null)return null;if(me(e))return[Mi(e.enter),Mi(e.leave)];{const t=Mi(e);return[t,t]}}function Mi(e){return tc(e)}function Ft(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[ou]||(e[ou]=new Set)).add(t)}function ln(e,t){t.split(/\s+/).forEach(u=>u&&e.classList.remove(u));const n=e[ou];n&&(n.delete(t),n.size||(e[ou]=void 0))}function kr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let uf=0;function vr(e,t,n,u){const i=e._endId=++uf,s=()=>{i===e._endId&&u()};if(n!=null)return setTimeout(s,n);const{type:r,timeout:o,propCount:l}=sf(e,t);if(!r)return u();const a=r+"end";let c=0;const f=()=>{e.removeEventListener(a,d),s()},d=p=>{p.target===e&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},o+1),e.addEventListener(a,d)}function sf(e,t){const n=window.getComputedStyle(e),u=m=>(n[m]||"").split(", "),i=u(`${Qt}Delay`),s=u(`${Qt}Duration`),r=wr(i,s),o=u(`${Nn}Delay`),l=u(`${Nn}Duration`),a=wr(o,l);let c=null,f=0,d=0;t===Qt?r>0&&(c=Qt,f=r,d=s.length):t===Nn?a>0&&(c=Nn,f=a,d=l.length):(f=Math.max(r,a),c=f>0?r>a?Qt:Nn:null,d=c?c===Qt?s.length:l.length:0);const p=c===Qt&&/\b(?:transform|all)(?:,|$)/.test(u(`${Qt}Property`).toString());return{type:c,timeout:f,propCount:d,hasTransform:p}}function wr(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,u)=>Ar(n)+Ar(e[u])))}function Ar(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Cr(e){return(e?e.ownerDocument:document).body.offsetHeight}function rf(e,t,n){const u=e[ou];u&&(t=(t?[t,...u]:[...u]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Sr=Symbol("_vod"),of=Symbol("_vsh"),lf=Symbol(""),af=/(?:^|;)\s*display\s*:/;function cf(e,t,n){const u=e.style,i=we(n);let s=!1;if(n&&!i){if(t)if(we(t))for(const r of t.split(";")){const o=r.slice(0,r.indexOf(":")).trim();n[o]==null&&Hn(u,o,"")}else for(const r in t)n[r]==null&&Hn(u,r,"");for(const r in n){r==="display"&&(s=!0);const o=n[r];o!=null?df(e,r,!we(t)&&t?t[r]:void 0,o)||Hn(u,r,o):Hn(u,r,"")}}else if(i){if(t!==n){const r=u[lf];r&&(n+=";"+r),u.cssText=n,s=af.test(n)}}else t&&e.removeAttribute("style");Sr in e&&(e[Sr]=s?u.display:"",e[of]&&(u.display="none"))}const Cu=/\s*!important$/;function Hn(e,t,n){if(Y(n))n.forEach(u=>Hn(e,t,u));else if(n==null&&(n=""),t.startsWith("--"))Cu.test(n)?e.setProperty(t,n.replace(Cu,""),"important"):e.setProperty(t,n);else{const u=ff(e,t);Cu.test(n)?e.setProperty(xn(u),n.replace(Cu,""),"important"):e[u]=n}}const Dr=["Webkit","Moz","ms"],Ii={};function ff(e,t){const n=Ii[t];if(n)return n;let u=Ve(t);if(u!=="filter"&&u in e)return Ii[t]=u;u=ui(u);for(let i=0;i<Dr.length;i++){const s=Dr[i]+u;if(s in e)return Ii[t]=s}return t}function df(e,t,n,u){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&we(u)&&n===u}const Tr="http://www.w3.org/1999/xlink";function Pr(e,t,n,u,i,s=oc(t)){u&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Tr,t.slice(6,t.length)):e.setAttributeNS(Tr,t,n):n==null||s&&!Ro(n)?e.removeAttribute(t):e.setAttribute(t,s?"":ht(n)?String(n):n)}function Fr(e,t,n,u,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Hl(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=Ro(n):n==null&&o==="string"?(n="",r=!0):o==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(i||t)}function An(e,t,n,u){e.addEventListener(t,n,u)}function pf(e,t,n,u){e.removeEventListener(t,n,u)}const Mr=Symbol("_vei");function hf(e,t,n,u,i=null){const s=e[Mr]||(e[Mr]={}),r=s[t];if(u&&r)r.value=u;else{const[o,l]=gf(t);if(u){const a=s[t]=yf(u,i);An(e,o,a,l)}else r&&(pf(e,o,r,l),s[t]=void 0)}}const mf=/(Once|Passive|Capture)$/,bf=/^on:?(?:Once|Passive|Capture)$/;function gf(e){let t,n;for(;(n=e.match(mf))&&!bf.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):xn(e.slice(2)),t]}let qi=0;const xf=Promise.resolve(),_f=()=>qi||(xf.then(()=>qi=0),qi=Date.now());function yf(e,t){const n=u=>{if(!u._vts)u._vts=Date.now();else if(u._vts<=n.attached)return;const i=n.value;if(Y(i)){const s=u.stopImmediatePropagation;u.stopImmediatePropagation=()=>{s.call(u),u._stopped=!0};const r=i.slice(),o=[u];for(let l=0;l<r.length&&!u._stopped;l++){const a=r[l];a&&lt(a,t,5,o)}}else lt(i,t,5,[u])};return n.value=e,n.attached=_f(),n}const Ir=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ef=(e,t,n,u,i,s)=>{const r=i==="svg";t==="class"?rf(e,u,r):t==="style"?cf(e,n,u):hu(t)?ti(t)||hf(e,t,n,u,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):kf(e,t,u,r))?(Fr(e,t,u),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Pr(e,t,u,r,s,t!=="value")):e._isVueCE&&(vf(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!we(u)))?Fr(e,Ve(t),u,s,t):(t==="true-value"?e._trueValue=u:t==="false-value"&&(e._falseValue=u),Pr(e,t,u,r))};function kf(e,t,n,u){if(u)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ir(t)&&ue(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ir(t)&&we(n)?!1:t in e}function vf(e,t){const n=e._def.props;if(!n)return!1;const u=Ve(t);return Array.isArray(n)?n.some(i=>Ve(i)===u):Object.keys(n).some(i=>Ve(i)===u)}const qr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Y(t)?n=>Mu(t,n):t};function wf(e){e.target.composing=!0}function Rr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Su=Symbol("_assign"),Du=Symbol("_initialValue");function Ri(e,t,n){return t&&(e=e.trim()),n&&(e=xs(e)),e}const Or={created(e,{modifiers:{lazy:t,trim:n,number:u}},i){e.parentNode&&(e.type==="text"?e[Du]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Du]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Su]=qr(i);const s=u||i.props&&i.props.type==="number";An(e,t?"change":"input",r=>{r.target.composing||e[Su](Ri(e.value,n,s))}),(n||s)&&An(e,"change",()=>{e.value=Ri(e.value,n,s)}),t||(An(e,"compositionstart",wf),An(e,"compositionend",Rr),An(e,"change",Rr))},mounted(e,{value:t,modifiers:{trim:n,number:u}}){const i=t??"",s=e[Du];delete e[Du],s!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==s?e[Su](Ri(e.value,n,u)):e.value=i},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:u,trim:i,number:s}},r){if(e[Su]=qr(r),e.composing)return;const o=(s||e.type==="number")&&!/^0\d/.test(e.value)?xs(e.value):e.value,l=t??"";if(o===l)return;const a=e.getRootNode();(a instanceof Document||a instanceof ShadowRoot)&&a.activeElement===e&&e.type!=="range"&&(u&&t===n||i&&e.value.trim()===l)||(e.value=l)}},Af=["ctrl","shift","alt","meta"],Cf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Af.some(n=>e[`${n}Key`]&&!t.includes(n))},Sf=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),u=t.join(".");return n[u]||(n[u]=(i,...s)=>{for(let r=0;r<t.length;r++){const o=Cf[t[r]];if(o&&o(i,t))return}return e(i,...s)})},Ql=Me({patchProp:Ef},Z0);let Kn,Lr=!1;function Df(){return Kn||(Kn=q0(Ql))}function Tf(){return Kn=Lr?Kn:R0(Ql),Lr=!0,Kn}const Pf=(...e)=>{const t=Df().createApp(...e),{mount:n}=t;return t.mount=u=>{const i=Gl(u);if(!i)return;const s=t._component;!ue(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const r=n(i,!1,Vl(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},t},Ff=(...e)=>{const t=Tf().createApp(...e),{mount:n}=t;return t.mount=u=>{const i=Gl(u);if(i)return n(i,!0,Vl(i))},t};function Vl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Gl(e){return we(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Cn=typeof document<"u";function Wl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Mf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Wl(e.default)}const pe=Object.assign;function Oi(e,t){const n={};for(const u in t){const i=t[u];n[u]=mt(i)?i.map(e):e(i)}return n}const Xn=()=>{},mt=Array.isArray;function $r(e,t){const n={};for(const u in e)n[u]=u in t?t[u]:e[u];return n}const Kl=/#/g,If=/&/g,qf=/\//g,Rf=/=/g,Of=/\?/g,Xl=/\+/g,Lf=/%5B/g,$f=/%5D/g,Zl=/%5E/g,Bf=/%60/g,Jl=/%7B/g,Nf=/%7C/g,Yl=/%7D/g,zf=/%20/g;function $s(e){return e==null?"":encodeURI(""+e).replace(Nf,"|").replace(Lf,"[").replace($f,"]")}function jf(e){return $s(e).replace(Jl,"{").replace(Yl,"}").replace(Zl,"^")}function ss(e){return $s(e).replace(Xl,"%2B").replace(zf,"+").replace(Kl,"%23").replace(If,"%26").replace(Bf,"`").replace(Jl,"{").replace(Yl,"}").replace(Zl,"^")}function Hf(e){return ss(e).replace(Rf,"%3D")}function Uf(e){return $s(e).replace(Kl,"%23").replace(Of,"%3F")}function Qf(e){return Uf(e).replace(qf,"%2F")}function lu(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Vf=/\/$/,Gf=e=>e.replace(Vf,"");function Li(e,t,n="/"){let u,i={},s="",r="";const o=t.indexOf("#");let l=t.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(u=t.slice(0,l),s=t.slice(l,o>0?o:t.length),i=e(s.slice(1))),o>=0&&(u=u||t.slice(0,o),r=t.slice(o,t.length)),u=Zf(u??t,n),{fullPath:u+s+r,path:u,query:i,hash:lu(r)}}function Wf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Br(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Kf(e,t,n){const u=t.matched.length-1,i=n.matched.length-1;return u>-1&&u===i&&Mn(t.matched[u],n.matched[i])&&ea(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Mn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ea(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Xf(e[n],t[n]))return!1;return!0}function Xf(e,t){return mt(e)?Nr(e,t):mt(t)?Nr(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Nr(e,t){return mt(t)?e.length===t.length&&e.every((n,u)=>n===t[u]):e.length===1&&e[0]===t}function Zf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),u=e.split("/"),i=u[u.length-1];(i===".."||i===".")&&u.push("");let s=n.length-1,r,o;for(r=0;r<u.length;r++)if(o=u[r],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+u.slice(r).join("/")}const Vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ku=function(e){return e.pop="pop",e.push="push",e}({}),Zn=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});const $i="";function ta(e){if(!e)if(Cn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Gf(e)}const Jf=/^[^#]+#/;function na(e,t){return e.replace(Jf,"#")+t}function Yf(e,t){const n=document.documentElement.getBoundingClientRect(),u=e.getBoundingClientRect();return{behavior:t.behavior,left:u.left-n.left-(t.left||0),top:u.top-n.top-(t.top||0)}}const mi=()=>({left:window.scrollX,top:window.scrollY});function ed(e){let t;if("el"in e){const n=e.el,u=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?u?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Yf(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function zr(e,t){return(history.state?history.state.position-t:-1)+e}const rs=new Map;function td(e,t){rs.set(e,t)}function nd(e){const t=rs.get(e);return rs.delete(e),t}function ud(e){return typeof e=="string"||e&&typeof e=="object"}function ua(e){return typeof e=="string"||typeof e=="symbol"}let Ae=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const ia=Symbol("");Ae.MATCHER_NOT_FOUND+"",Ae.NAVIGATION_GUARD_REDIRECT+"",Ae.NAVIGATION_ABORTED+"",Ae.NAVIGATION_CANCELLED+"",Ae.NAVIGATION_DUPLICATED+"";function In(e,t){return pe(new Error,{type:e,[ia]:!0},t)}function Mt(e,t){return e instanceof Error&&ia in e&&(t==null||!!(e.type&t))}const id=["params","query","hash"];function sd(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of id)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function rd(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let u=0;u<n.length;++u){const i=n[u].replace(Xl," "),s=i.indexOf("="),r=lu(s<0?i:i.slice(0,s)),o=s<0?null:lu(i.slice(s+1));if(r in t){let l=t[r];mt(l)||(l=t[r]=[l]),l.push(o)}else t[r]=o}return t}function jr(e){let t="";for(let n in e){const u=e[n];if(n=Hf(n),u==null){u!==void 0&&(t+=(t.length?"&":"")+n);continue}(mt(u)?u.map(i=>i&&ss(i)):[u&&ss(u)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function od(e){const t={};for(const n in e){const u=e[n];u!==void 0&&(t[n]=mt(u)?u.map(i=>i==null?null:""+i):u==null?u:""+u)}return t}const ld=Symbol(""),Hr=Symbol(""),Bs=Symbol(""),Ns=Symbol(""),os=Symbol("");function zn(){let e=[];function t(u){return e.push(u),()=>{const i=e.indexOf(u);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Wt(e,t,n,u,i,s=r=>r()){const r=u&&(u.enterCallbacks[i]=u.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const a=d=>{d===!1?l(In(Ae.NAVIGATION_ABORTED,{from:n,to:t})):d instanceof Error?l(d):ud(d)?l(In(Ae.NAVIGATION_GUARD_REDIRECT,{from:t,to:d})):(r&&u.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=s(()=>e.call(u&&u.instances[i],t,n,a));let f=Promise.resolve(c);e.length<3&&(f=f.then(a)),f.catch(d=>l(d))})}function Bi(e,t,n,u,i=s=>s()){const s=[];for(const r of e)for(const o in r.components){let l=r.components[o];if(!(t!=="beforeRouteEnter"&&!r.instances[o]))if(Wl(l)){const a=(l.__vccOpts||l)[t];a&&s.push(Wt(a,n,u,r,o,i))}else{let a=l();s.push(()=>a.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${o}" at "${r.path}"`);const f=Mf(c)?c.default:c;r.mods[o]=c,r.components[o]=f;const d=(f.__vccOpts||f)[t];return d&&Wt(d,n,u,r,o,i)()}))}}return s}function ad(e,t){const n=[],u=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let r=0;r<s;r++){const o=t.matched[r];o&&(e.matched.find(a=>Mn(a,o))?u.push(o):n.push(o));const l=e.matched[r];l&&(t.matched.find(a=>Mn(a,l))||i.push(l))}return[n,u,i]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let cd=()=>location.protocol+"//"+location.host;function sa(e,t){const{pathname:n,search:u,hash:i}=t,s=e.indexOf("#");if(s>-1){let r=i.includes(e.slice(s))?e.slice(s).length:1,o=i.slice(r);return o[0]!=="/"&&(o="/"+o),Br(o,"")}return Br(n,e)+u+i}function fd(e,t,n,u){let i=[],s=[],r=null;const o=({state:d})=>{const p=sa(e,location),m=n.value,E=t.value;let A=0;if(d){if(n.value=p,t.value=d,r&&r===m){r=null;return}A=E?d.position-E.position:0}else u(p);i.forEach(S=>{S(n.value,m,{delta:A,type:Ku.pop,direction:A?A>0?Zn.forward:Zn.back:Zn.unknown})})};function l(){r=n.value}function a(d){i.push(d);const p=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return s.push(p),p}function c(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(pe({},d.state,{scroll:mi()}),"")}}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:a,destroy:f}}function Ur(e,t,n,u=!1,i=!1){return{back:e,current:t,forward:n,replaced:u,position:window.history.length,scroll:i?mi():null}}function dd(e){const{history:t,location:n}=window,u={value:sa(e,n)},i={value:t.state};i.value||s(u.value,{back:null,current:u.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,a,c){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:cd()+e+l;try{t[c?"replaceState":"pushState"](a,"",d),i.value=a}catch(p){console.error(p),n[c?"replace":"assign"](d)}}function r(l,a){s(l,pe({},t.state,Ur(i.value.back,l,i.value.forward,!0),a,{position:i.value.position}),!0),u.value=l}function o(l,a){const c=pe({},i.value,t.state,{forward:l,scroll:mi()});s(c.current,c,!0),s(l,pe({},Ur(u.value,l,null),{position:c.position+1},a),!1),u.value=l}return{location:u,state:i,push:o,replace:r}}function ra(e){e=ta(e);const t=dd(e),n=fd(e,t.state,t.location,t.replace);function u(s,r=!0){r||n.pauseListeners(),history.go(s)}const i=pe({location:"",base:e,go:u,createHref:na.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function pd(e=""){let t=[],n=[[$i,{}]],u=0;e=ta(e);function i(o,l={}){u++,u!==n.length&&n.splice(u),n.push([o,l])}function s(o,l,{direction:a,delta:c}){const f={direction:a,delta:c,type:Ku.pop};for(const d of t)d(o,l,f)}const r={location:$i,state:{},base:e,createHref:na.bind(null,e),replace(o,l){n.splice(u--,1),i(o,l)},push(o,l){i(o,l)},listen(o){return t.push(o),()=>{const l=t.indexOf(o);l>-1&&t.splice(l,1)}},destroy(){t=[],n=[[$i,{}]],u=0},go(o,l=!0){const a=this.location,c=o<0?Zn.back:Zn.forward;u=Math.max(0,Math.min(u+o,n.length-1)),l&&s(this.location,a,{direction:c,delta:o})}};return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n[u][0]}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n[u][1]}),r}let pn=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var Pe=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(Pe||{});const hd={type:pn.Static,value:""},md=/[a-zA-Z0-9_]/;function bd(e){if(!e)return[[]];if(e==="/")return[[hd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${a}": ${p}`)}let n=Pe.Static,u=n;const i=[];let s;function r(){s&&i.push(s),s=[]}let o=0,l,a="",c="";function f(){a&&(n===Pe.Static?s.push({type:pn.Static,value:a}):n===Pe.Param||n===Pe.ParamRegExp||n===Pe.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),s.push({type:pn.Param,value:a,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),a="")}function d(){a+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&n!==Pe.ParamRegExp){u=n,n=Pe.EscapeNext;continue}switch(n){case Pe.Static:l==="/"?(a&&f(),r()):l===":"?(f(),n=Pe.Param):d();break;case Pe.EscapeNext:d(),n=u;break;case Pe.Param:l==="("?n=Pe.ParamRegExp:md.test(l)?d():(f(),n=Pe.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case Pe.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=Pe.ParamRegExpEnd:c+=l;break;case Pe.ParamRegExpEnd:f(),n=Pe.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,c="";break;default:t("Unknown state");break}}return n===Pe.ParamRegExp&&t(`Unfinished custom RegExp for param "${a}"`),f(),r(),i}const Qr="[^/]+?",gd={sensitive:!1,strict:!1,start:!0,end:!0};var Ue=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(Ue||{});const xd=/[.+*?^${}()[\]/\\]/g;function _d(e,t){const n=pe({},gd,t),u=[];let i=n.start?"^":"";const s=[];for(const a of e){const c=a.length?[]:[Ue.Root];n.strict&&!a.length&&(i+="/");for(let f=0;f<a.length;f++){const d=a[f];let p=Ue.Segment+(n.sensitive?Ue.BonusCaseSensitive:0);if(d.type===pn.Static)f||(i+="/"),i+=d.value.replace(xd,"\\$&"),p+=Ue.Static;else if(d.type===pn.Param){const{value:m,repeatable:E,optional:A,regexp:S}=d;s.push({name:m,repeatable:E,optional:A});const k=S||Qr;if(k!==Qr){p+=Ue.BonusCustomRegExp;try{`${k}`}catch(_){throw new Error(`Invalid custom RegExp for param "${m}" (${k}): `+_.message)}}let b=E?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;f||(b=A&&a.length<2?`(?:/${b})`:"/"+b),A&&(b+="?"),i+=b,p+=Ue.Dynamic,A&&(p+=Ue.BonusOptional),E&&(p+=Ue.BonusRepeatable),k===".*"&&(p+=Ue.BonusWildcard)}c.push(p)}u.push(c)}if(n.strict&&n.end){const a=u.length-1;u[a][u[a].length-1]+=Ue.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const r=new RegExp(i,n.sensitive?"":"i");function o(a){const c=a.match(r),f={};if(!c)return null;for(let d=1;d<c.length;d++){const p=c[d]||"",m=s[d-1];f[m.name]=p&&m.repeatable?p.split("/"):p}return f}function l(a){let c="",f=!1;for(const d of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const p of d)if(p.type===pn.Static)c+=p.value;else if(p.type===pn.Param){const{value:m,repeatable:E,optional:A}=p,S=m in a?a[m]:"";if(mt(S)&&!E)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const k=mt(S)?S.join("/"):S;if(!k)if(A)d.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);c+=k}}return c||"/"}return{re:r,score:u,keys:s,parse:o,stringify:l}}function yd(e,t){let n=0;for(;n<e.length&&n<t.length;){const u=t[n]-e[n];if(u)return u;n++}return e.length<t.length?e.length===1&&e[0]===Ue.Static+Ue.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ue.Static+Ue.Segment?1:-1:0}function oa(e,t){let n=0;const u=e.score,i=t.score;for(;n<u.length&&n<i.length;){const s=yd(u[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-u.length)===1){if(Vr(u))return 1;if(Vr(i))return-1}return i.length-u.length}function Vr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ed={strict:!1,end:!0,sensitive:!1};function kd(e,t,n){const u=_d(bd(e.path),n),i=pe(u,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function vd(e,t){const n=[],u=new Map;t=$r(Ed,t);function i(f){return u.get(f)}function s(f,d,p){const m=!p,E=Wr(f);E.aliasOf=p&&p.record;const A=$r(t,f),S=[E];if("alias"in f){const _=typeof f.alias=="string"?[f.alias]:f.alias;for(const v of _)S.push(Wr(pe({},E,{components:p?p.record.components:E.components,path:v,aliasOf:p?p.record:E})))}let k,b;for(const _ of S){const{path:v}=_;if(d&&v[0]!=="/"){const M=d.record.path,I=M[M.length-1]==="/"?"":"/";_.path=d.record.path+(v&&I+v)}if(k=kd(_,d,A),p?p.alias.push(k):(b=b||k,b!==k&&b.alias.push(k),m&&f.name&&!Kr(k)&&r(f.name)),la(k)&&l(k),E.children){const M=E.children;for(let I=0;I<M.length;I++)s(M[I],k,p&&p.children[I])}p=p||k}return b?()=>{r(b)}:Xn}function r(f){if(ua(f)){const d=u.get(f);d&&(u.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(r),d.alias.forEach(r))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&u.delete(f.record.name),f.children.forEach(r),f.alias.forEach(r))}}function o(){return n}function l(f){const d=Cd(f,n);n.splice(d,0,f),f.record.name&&!Kr(f)&&u.set(f.record.name,f)}function a(f,d){let p,m={},E,A;if("name"in f&&f.name){if(p=u.get(f.name),!p)throw In(Ae.MATCHER_NOT_FOUND,{location:f});A=p.record.name,m=pe(Gr(d.params,p.keys.filter(b=>!b.optional).concat(p.parent?p.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),f.params&&Gr(f.params,p.keys.map(b=>b.name))),E=p.stringify(m)}else if(f.path!=null)E=f.path,p=n.find(b=>b.re.test(E)),p&&(m=p.parse(E),A=p.record.name);else{if(p=d.name?u.get(d.name):n.find(b=>b.re.test(d.path)),!p)throw In(Ae.MATCHER_NOT_FOUND,{location:f,currentLocation:d});A=p.record.name,m=pe({},d.params,f.params),E=p.stringify(m)}const S=[];let k=p;for(;k;)S.unshift(k.record),k=k.parent;return{name:A,path:E,params:m,matched:S,meta:Ad(S)}}e.forEach(f=>s(f));function c(){n.length=0,u.clear()}return{addRoute:s,resolve:a,removeRoute:r,clearRoutes:c,getRoutes:o,getRecordMatcher:i}}function Gr(e,t){const n={};for(const u of t)u in e&&(n[u]=e[u]);return n}function Wr(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:wd(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function wd(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const u in e.components)t[u]=typeof n=="object"?n[u]:n;return t}function Kr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ad(e){return e.reduce((t,n)=>pe(t,n.meta),{})}function Cd(e,t){let n=0,u=t.length;for(;n!==u;){const s=n+u>>1;oa(e,t[s])<0?u=s:n=s+1}const i=Sd(e);return i&&(u=t.lastIndexOf(i,u-1)),u}function Sd(e){let t=e;for(;t=t.parent;)if(la(t)&&oa(e,t)===0)return t}function la({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Xr(e){const t=pt(Bs),n=pt(Ns),u=Re(()=>{const l=Ce(e.to);return t.resolve(l)}),i=Re(()=>{const{matched:l}=u.value,{length:a}=l,c=l[a-1],f=n.matched;if(!c||!f.length)return-1;const d=f.findIndex(Mn.bind(null,c));if(d>-1)return d;const p=Zr(l[a-2]);return a>1&&Zr(c)===p&&f[f.length-1].path!==p?f.findIndex(Mn.bind(null,l[a-2])):d}),s=Re(()=>i.value>-1&&Md(n.params,u.value.params)),r=Re(()=>i.value>-1&&i.value===n.matched.length-1&&ea(n.params,u.value.params));function o(l={}){if(Fd(l)){const a=t[Ce(e.replace)?"replace":"push"](Ce(e.to)).catch(Xn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>a),a}return Promise.resolve()}return{route:u,href:Re(()=>u.value.href),isActive:s,isExactActive:r,navigate:o}}function Dd(e){return e.length===1?e[0]:e}const Td=Ps({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Xr,setup(e,{slots:t}){const n=oi(Xr(e)),{options:u}=pt(Bs),i=Re(()=>({[Jr(e.activeClass,u.linkActiveClass,"router-link-active")]:n.isActive,[Jr(e.exactActiveClass,u.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&Dd(t.default(n));return e.custom?s:Ls("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),Pd=Td;function Fd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Md(e,t){for(const n in t){const u=t[n],i=e[n];if(typeof u=="string"){if(u!==i)return!1}else if(!mt(i)||i.length!==u.length||u.some((s,r)=>s.valueOf()!==i[r].valueOf()))return!1}return!0}function Zr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Jr=(e,t,n)=>e??t??n,Id=Ps({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const u=pt(os),i=Re(()=>e.route||u.value),s=pt(Hr,0),r=Re(()=>{let a=Ce(s);const{matched:c}=i.value;let f;for(;(f=c[a])&&!f.components;)a++;return a}),o=Re(()=>i.value.matched[r.value]);Iu(Hr,Re(()=>r.value+1)),Iu(ld,o),Iu(os,i);const l=Yt();return Vn(()=>[l.value,o.value,e.name],([a,c,f],[d,p,m])=>{c&&(c.instances[f]=a,p&&p!==c&&a&&a===d&&(c.leaveGuards.size||(c.leaveGuards=p.leaveGuards),c.updateGuards.size||(c.updateGuards=p.updateGuards))),a&&c&&(!p||!Mn(c,p)||!d)&&(c.enterCallbacks[f]||[]).forEach(E=>E(a))},{flush:"post"}),()=>{const a=i.value,c=e.name,f=o.value,d=f&&f.components[c];if(!d)return Yr(n.default,{Component:d,route:a});const p=f.props[c],m=p?p===!0?a.params:typeof p=="function"?p(a):p:null,A=Ls(d,pe({},m,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return Yr(n.default,{Component:A,route:a})||A}}});function Yr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const qd=Id;function aa(e){const t=vd(e.routes,e),n=e.parseQuery||rd,u=e.stringifyQuery||jr,i=e.history,s=zn(),r=zn(),o=zn(),l=Pc(Vt);let a=Vt;Cn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Oi.bind(null,C=>""+C),f=Oi.bind(null,Qf),d=Oi.bind(null,lu);function p(C,H){let B,Z;return ua(C)?(B=t.getRecordMatcher(C),Z=H):Z=C,t.addRoute(Z,B)}function m(C){const H=t.getRecordMatcher(C);H&&t.removeRoute(H)}function E(){return t.getRoutes().map(C=>C.record)}function A(C){return!!t.getRecordMatcher(C)}function S(C,H){if(H=pe({},H||l.value),typeof C=="string"){const x=Li(n,C,H.path),y=t.resolve({path:x.path},H),P=i.createHref(x.fullPath);return pe(x,y,{params:d(y.params),hash:lu(x.hash),redirectedFrom:void 0,href:P})}let B;if(C.path!=null)B=pe({},C,{path:Li(n,C.path,H.path).path});else{const x=pe({},C.params);for(const y in x)x[y]==null&&delete x[y];B=pe({},C,{params:f(x)}),H.params=f(H.params)}const Z=t.resolve(B,H),re=C.hash||"";Z.params=c(d(Z.params));const ke=Wf(u,pe({},C,{hash:jf(re),path:Z.path})),h=i.createHref(ke);return pe({fullPath:ke,hash:re,query:u===jr?od(C.query):C.query||{}},Z,{redirectedFrom:void 0,href:h})}function k(C){return typeof C=="string"?Li(n,C,l.value.path):pe({},C)}function b(C,H){if(a!==C)return In(Ae.NAVIGATION_CANCELLED,{from:H,to:C})}function _(C){return I(C)}function v(C){return _(pe(k(C),{replace:!0}))}function M(C,H){const B=C.matched[C.matched.length-1];if(B&&B.redirect){const{redirect:Z}=B;let re=typeof Z=="function"?Z(C,H):Z;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=k(re):{path:re},re.params={}),pe({query:C.query,hash:C.hash,params:re.path!=null?{}:C.params},re)}}function I(C,H){const B=a=S(C),Z=l.value,re=C.state,ke=C.force,h=C.replace===!0,x=M(B,Z);if(x)return I(pe(k(x),{state:typeof x=="object"?pe({},re,x.state):re,force:ke,replace:h}),H||B);const y=B;y.redirectedFrom=H;let P;return!ke&&Kf(u,Z,B)&&(P=In(Ae.NAVIGATION_DUPLICATED,{to:y,from:Z}),Se(Z,Z,!0,!1)),(P?Promise.resolve(P):G(y,Z)).catch(w=>Mt(w)?Mt(w,Ae.NAVIGATION_GUARD_REDIRECT)?w:de(w):ne(w,y,Z)).then(w=>{if(w){if(Mt(w,Ae.NAVIGATION_GUARD_REDIRECT))return I(pe({replace:h},k(w.to),{state:typeof w.to=="object"?pe({},re,w.to.state):re,force:ke}),H||y)}else w=R(y,Z,!0,h,re);return V(y,Z,w),w})}function X(C,H){const B=b(C,H);return B?Promise.reject(B):Promise.resolve()}function L(C){const H=En.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(C):C()}function G(C,H){let B;const[Z,re,ke]=ad(C,H);B=Bi(Z.reverse(),"beforeRouteLeave",C,H);for(const x of Z)x.leaveGuards.forEach(y=>{B.push(Wt(y,C,H))});const h=X.bind(null,C,H);return B.push(h),tt(B).then(()=>{B=[];for(const x of s.list())B.push(Wt(x,C,H));return B.push(h),tt(B)}).then(()=>{B=Bi(re,"beforeRouteUpdate",C,H);for(const x of re)x.updateGuards.forEach(y=>{B.push(Wt(y,C,H))});return B.push(h),tt(B)}).then(()=>{B=[];for(const x of ke)if(x.beforeEnter)if(mt(x.beforeEnter))for(const y of x.beforeEnter)B.push(Wt(y,C,H));else B.push(Wt(x.beforeEnter,C,H));return B.push(h),tt(B)}).then(()=>(C.matched.forEach(x=>x.enterCallbacks={}),B=Bi(ke,"beforeRouteEnter",C,H,L),B.push(h),tt(B))).then(()=>{B=[];for(const x of r.list())B.push(Wt(x,C,H));return B.push(h),tt(B)}).catch(x=>Mt(x,Ae.NAVIGATION_CANCELLED)?x:Promise.reject(x))}function V(C,H,B){o.list().forEach(Z=>L(()=>Z(C,H,B)))}function R(C,H,B,Z,re){const ke=b(C,H);if(ke)return ke;const h=H===Vt,x=Cn?history.state:{};B&&(Z||h?i.replace(C.fullPath,pe({scroll:h&&x&&x.scroll},re)):i.push(C.fullPath,re)),l.value=C,Se(C,H,B,h),de()}let ee;function le(){ee||(ee=i.listen((C,H,B)=>{if(!sn.listening)return;const Z=S(C),re=M(Z,sn.currentRoute.value);if(re){I(pe(re,{replace:!0,force:!0}),Z).catch(Xn);return}a=Z;const ke=l.value;Cn&&td(zr(ke.fullPath,B.delta),mi()),G(Z,ke).catch(h=>Mt(h,Ae.NAVIGATION_ABORTED|Ae.NAVIGATION_CANCELLED)?h:Mt(h,Ae.NAVIGATION_GUARD_REDIRECT)?(I(pe(k(h.to),{force:!0}),Z).then(x=>{Mt(x,Ae.NAVIGATION_ABORTED|Ae.NAVIGATION_DUPLICATED)&&!B.delta&&B.type===Ku.pop&&i.go(-1,!1)}).catch(Xn),Promise.reject()):(B.delta&&i.go(-B.delta,!1),ne(h,Z,ke))).then(h=>{h=h||R(Z,ke,!1),h&&(B.delta&&!Mt(h,Ae.NAVIGATION_CANCELLED)?i.go(-B.delta,!1):B.type===Ku.pop&&Mt(h,Ae.NAVIGATION_ABORTED|Ae.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),V(Z,ke,h)}).catch(Xn)}))}let ae=zn(),W=zn(),se;function ne(C,H,B){de(C);const Z=W.list();return Z.length?Z.forEach(re=>re(C,H,B)):console.error(C),Promise.reject(C)}function je(){return se&&l.value!==Vt?Promise.resolve():new Promise((C,H)=>{ae.add([C,H])})}function de(C){return se||(se=!C,le(),ae.list().forEach(([H,B])=>C?B(C):H()),ae.reset()),C}function Se(C,H,B,Z){const{scrollBehavior:re}=e;if(!Cn||!re)return Promise.resolve();const ke=!B&&nd(zr(C.fullPath,0))||(Z||!B)&&history.state&&history.state.scroll||null;return Ss().then(()=>re(C,H,ke)).then(h=>h&&ed(h)).catch(h=>ne(h,C,H))}const ge=C=>i.go(C);let yn;const En=new Set,sn={currentRoute:l,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:A,getRoutes:E,resolve:S,options:e,push:_,replace:v,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:s.add,beforeResolve:r.add,afterEach:o.add,onError:W.add,isReady:je,install(C){C.component("RouterLink",Pd),C.component("RouterView",qd),C.config.globalProperties.$router=sn,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>Ce(l)}),Cn&&!yn&&l.value===Vt&&(yn=!0,_(i.location).catch(Z=>{}));const H={};for(const Z in Vt)Object.defineProperty(H,Z,{get:()=>l.value[Z],enumerable:!0});C.provide(Bs,sn),C.provide(Ns,Jo(H)),C.provide(os,l);const B=C.unmount;En.add(C),C.unmount=function(){En.delete(C),En.size<1&&(a=Vt,ee&&ee(),ee=null,l.value=Vt,yn=!1,se=!1),B()}}};function tt(C){return C.reduce((H,B)=>H.then(()=>L(B)),Promise.resolve())}return sn}function bi(e){return pt(Ns)}const Rd=new Set(["title","titleTemplate","script","style","noscript"]),Ou=new Set(["base","meta","link","style","script","noscript"]),Od=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),Ld=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),ca=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),$d=typeof window<"u";function Xu(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function ls(e){if(e._h)return e._h;if(e._d)return Xu(e._d);let t=`${e.tag}:${e.textContent||e.innerHTML||""}:`;for(const n in e.props)t+=`${n}:${String(e.props[n])},`;return Xu(t)}function Bd(e,t){return e instanceof Promise?e.then(t):t(e)}function as(e,t,n,u){const i=u||da(typeof t=="object"&&typeof t!="function"&&!(t instanceof Promise)?{...t}:{[e==="script"||e==="noscript"||e==="style"?"innerHTML":"textContent"]:t},e==="templateParams"||e==="titleTemplate");if(i instanceof Promise)return i.then(r=>as(e,t,n,r));const s={tag:e,props:i};for(const r of ca){const o=s.props[r]!==void 0?s.props[r]:n[r];o!==void 0&&((!(r==="innerHTML"||r==="textContent"||r==="children")||Rd.has(s.tag))&&(s[r==="children"?"innerHTML":r]=o),delete s.props[r])}return s.props.body&&(s.tagPosition="bodyClose",delete s.props.body),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(r=>({...s,props:{...s.props,content:r}})):s}function Nd(e,t){var u;const n=e==="class"?" ":";";return t&&typeof t=="object"&&!Array.isArray(t)&&(t=Object.entries(t).filter(([,i])=>i).map(([i,s])=>e==="style"?`${i}:${s}`:i)),(u=String(Array.isArray(t)?t.join(n):t))==null?void 0:u.split(n).filter(i=>!!i.trim()).join(n)}function fa(e,t,n,u){for(let i=u;i<n.length;i+=1){const s=n[i];if(s==="class"||s==="style"){e[s]=Nd(s,e[s]);continue}if(e[s]instanceof Promise)return e[s].then(r=>(e[s]=r,fa(e,t,n,i)));if(!t&&!ca.has(s)){const r=String(e[s]),o=s.startsWith("data-");r==="true"||r===""?e[s]=o?"true":!0:e[s]||(o&&r==="false"?e[s]="false":delete e[s])}}}function da(e,t=!1){const n=fa(e,t,Object.keys(e),0);return n instanceof Promise?n.then(()=>e):e}const zd=10;function pa(e,t,n){for(let u=n;u<t.length;u+=1){const i=t[u];if(i instanceof Promise)return i.then(s=>(t[u]=s,pa(e,t,u)));Array.isArray(i)?e.push(...i):e.push(i)}}function jd(e){const t=[],n=e.resolvedInput;for(const i in n){if(!Object.prototype.hasOwnProperty.call(n,i))continue;const s=n[i];if(!(s===void 0||!Od.has(i))){if(Array.isArray(s)){for(const r of s)t.push(as(i,r,e));continue}t.push(as(i,s,e))}}if(t.length===0)return[];const u=[];return Bd(pa(u,t,0),()=>u.map((i,s)=>(i._e=e._i,e.mode&&(i._m=e.mode),i._p=(e._i<<zd)+s,i)))}const eo=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),to={base:-10,title:10},no={critical:-80,high:-10,low:20};function Zu(e){const t=e.tagPriority;if(typeof t=="number")return t;let n=100;return e.tag==="meta"?e.props["http-equiv"]==="content-security-policy"?n=-30:e.props.charset?n=-20:e.props.name==="viewport"&&(n=-15):e.tag==="link"&&e.props.rel==="preconnect"?n=20:e.tag in to&&(n=to[e.tag]),t&&t in no?n+no[t]:n}const Hd=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Ud=["name","property","http-equiv"];function ha(e){const{props:t,tag:n}=e;if(Ld.has(n))return n;if(n==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";if(t.id)return`${n}:id:${t.id}`;for(const u of Ud)if(t[u]!==void 0)return`${n}:${u}:${t[u]}`;return!1}const Kt="%separator";function Qd(e,t,n=!1){var i;let u;if(t==="s"||t==="pageTitle")u=e.pageTitle;else if(t.includes(".")){const s=t.indexOf(".");u=(i=e[t.substring(0,s)])==null?void 0:i[t.substring(s+1)]}else u=e[t];if(u!==void 0)return n?(u||"").replace(/"/g,'\\"'):u||""}const Vd=new RegExp(`${Kt}(?:\\s*${Kt})*`,"g");function Tu(e,t,n,u=!1){if(typeof e!="string"||!e.includes("%"))return e;let i=e;try{i=decodeURI(e)}catch{}const s=i.match(/%\w+(?:\.\w+)?/g);if(!s)return e;const r=e.includes(Kt);return e=e.replace(/%\w+(?:\.\w+)?/g,o=>{if(o===Kt||!s.includes(o))return o;const l=Qd(t,o.slice(1),u);return l!==void 0?l:o}).trim(),r&&(e.endsWith(Kt)&&(e=e.slice(0,-Kt.length)),e.startsWith(Kt)&&(e=e.slice(Kt.length)),e=e.replace(Vd,n).trim()),e}function uo(e,t){return e==null?t||null:typeof e=="function"?e(t):e}async function Gd(e,t={}){const n=t.document||e.resolvedOptions.document;if(!n||!e.dirty)return;const u={shouldRender:!0,tags:[]};if(await e.hooks.callHook("dom:beforeRender",u),!!u.shouldRender)return e._domUpdatePromise||(e._domUpdatePromise=new Promise(async i=>{var f;const s=(await e.resolveTags()).map(d=>({tag:d,id:Ou.has(d.tag)?ls(d):d.tag,shouldRender:!0}));let r=e._dom;if(!r){r={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const d=new Set;for(const p of["body","head"]){const m=(f=n[p])==null?void 0:f.children;for(const E of m){const A=E.tagName.toLowerCase();if(!Ou.has(A))continue;const S={tag:A,props:await da(E.getAttributeNames().reduce((v,M)=>({...v,[M]:E.getAttribute(M)}),{})),innerHTML:E.innerHTML},k=ha(S);let b=k,_=1;for(;b&&d.has(b);)b=`${k}:${_++}`;b&&(S._d=b,d.add(b)),r.elMap[E.getAttribute("data-hid")||ls(S)]=E}}}r.pendingSideEffects={...r.sideEffects},r.sideEffects={};function o(d,p,m){const E=`${d}:${p}`;r.sideEffects[E]=m,delete r.pendingSideEffects[E]}function l({id:d,$el:p,tag:m}){const E=m.tag.endsWith("Attrs");if(r.elMap[d]=p,E||(m.textContent&&m.textContent!==p.textContent&&(p.textContent=m.textContent),m.innerHTML&&m.innerHTML!==p.innerHTML&&(p.innerHTML=m.innerHTML),o(d,"el",()=>{var A;(A=r.elMap[d])==null||A.remove(),delete r.elMap[d]})),m._eventHandlers)for(const A in m._eventHandlers)Object.prototype.hasOwnProperty.call(m._eventHandlers,A)&&p.getAttribute(`data-${A}`)!==""&&((m.tag==="bodyAttrs"?n.defaultView:p).addEventListener(A.substring(2),m._eventHandlers[A].bind(p)),p.setAttribute(`data-${A}`,""));for(const A in m.props){if(!Object.prototype.hasOwnProperty.call(m.props,A))continue;const S=m.props[A],k=`attr:${A}`;if(A==="class"){if(!S)continue;for(const b of S.split(" "))E&&o(d,`${k}:${b}`,()=>p.classList.remove(b)),!p.classList.contains(b)&&p.classList.add(b)}else if(A==="style"){if(!S)continue;for(const b of S.split(";")){const _=b.indexOf(":"),v=b.substring(0,_).trim(),M=b.substring(_+1).trim();o(d,`${k}:${v}`,()=>{p.style.removeProperty(v)}),p.style.setProperty(v,M)}}else p.getAttribute(A)!==S&&p.setAttribute(A,S===!0?"":String(S)),E&&o(d,k,()=>p.removeAttribute(A))}}const a=[],c={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const d of s){const{tag:p,shouldRender:m,id:E}=d;if(m){if(p.tag==="title"){n.title=p.textContent;continue}d.$el=d.$el||r.elMap[E],d.$el?l(d):Ou.has(p.tag)&&a.push(d)}}for(const d of a){const p=d.tag.tagPosition||"head";d.$el=n.createElement(d.tag.tag),l(d),c[p]=c[p]||n.createDocumentFragment(),c[p].appendChild(d.$el)}for(const d of s)await e.hooks.callHook("dom:renderTag",d,n,o);c.head&&n.head.appendChild(c.head),c.bodyOpen&&n.body.insertBefore(c.bodyOpen,n.body.firstChild),c.bodyClose&&n.body.appendChild(c.bodyClose);for(const d in r.pendingSideEffects)r.pendingSideEffects[d]();e._dom=r,await e.hooks.callHook("dom:rendered",{renders:s}),i()}).finally(()=>{e._domUpdatePromise=void 0,e.dirty=!1})),e._domUpdatePromise}function Wd(e,t={}){const n=t.delayFn||(u=>setTimeout(u,10));return e._domDebouncedUpdatePromise=e._domDebouncedUpdatePromise||new Promise(u=>n(()=>Gd(e,t).then(()=>{delete e._domDebouncedUpdatePromise,u()})))}function Kd(e){return t=>{var u,i;const n=((i=(u=t.resolvedOptions.document)==null?void 0:u.head.querySelector('script[id="unhead:payload"]'))==null?void 0:i.innerHTML)||!1;return n&&t.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":s=>{Wd(s,e)}}}}}function cs(e,t={},n){for(const u in e){const i=e[u],s=n?`${n}:${u}`:u;typeof i=="object"&&i!==null?cs(i,t,s):typeof i=="function"&&(t[s]=i)}return t}const Xd={run:e=>e()},Zd=()=>Xd,ma=typeof console.createTask<"u"?console.createTask:Zd;function Jd(e,t){const n=t.shift(),u=ma(n);return e.reduce((i,s)=>i.then(()=>u.run(()=>s(...t))),Promise.resolve())}function Yd(e,t){const n=t.shift(),u=ma(n);return Promise.all(e.map(i=>u.run(()=>i(...t))))}function Ni(e,t){for(const n of[...e])n(t)}class e1{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,u={}){if(!t||typeof n!="function")return()=>{};const i=t;let s;for(;this._deprecatedHooks[t];)s=this._deprecatedHooks[t],t=s.to;if(s&&!u.allowDeprecated){let r=s.message;r||(r=`${i} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(r)||(console.warn(r),this._deprecatedMessages.add(r))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let u,i=(...s)=>(typeof u=="function"&&u(),u=void 0,i=void 0,n(...s));return u=this.hook(t,i),u}removeHook(t,n){if(this._hooks[t]){const u=this._hooks[t].indexOf(n);u!==-1&&this._hooks[t].splice(u,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const u=this._hooks[t]||[];delete this._hooks[t];for(const i of u)this.hook(t,i)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=cs(t),u=Object.keys(n).map(i=>this.hook(i,n[i]));return()=>{for(const i of u.splice(0,u.length))i()}}removeHooks(t){const n=cs(t);for(const u in n)this.removeHook(u,n[u])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(Jd,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(Yd,t,...n)}callHookWith(t,n,...u){const i=this._before||this._after?{name:n,args:u,context:{}}:void 0;this._before&&Ni(this._before,i);const s=t(n in this._hooks?[...this._hooks[n]]:[],u);return s instanceof Promise?s.finally(()=>{this._after&&i&&Ni(this._after,i)}):(this._after&&i&&Ni(this._after,i),s)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function t1(){return new e1}const n1=new Set(["templateParams","htmlAttrs","bodyAttrs"]),u1={hooks:{"tag:normalise":({tag:e})=>{e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.key&&(e.key=e.props.key,delete e.props.key);const t=ha(e);t&&!t.startsWith("meta:og:")&&!t.startsWith("meta:twitter:")&&delete e.key;const n=t||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":e=>{const t=Object.create(null);for(const u of e.tags){const i=(u.key?`${u.tag}:${u.key}`:u._d)||ls(u),s=t[i];if(s){let o=u==null?void 0:u.tagDuplicateStrategy;if(!o&&n1.has(u.tag)&&(o="merge"),o==="merge"){const l=s.props;l.style&&u.props.style&&(l.style[l.style.length-1]!==";"&&(l.style+=";"),u.props.style=`${l.style} ${u.props.style}`),l.class&&u.props.class?u.props.class=`${l.class} ${u.props.class}`:l.class&&(u.props.class=l.class),t[i].props={...l,...u.props};continue}else if(u._e===s._e){s._duped=s._duped||[],u._d=`${s._d}:${s._duped.length+1}`,s._duped.push(u);continue}else if(Zu(u)>Zu(s))continue}if(!(u.innerHTML||u.textContent||Object.keys(u.props).length!==0)&&Ou.has(u.tag)){delete t[i];continue}t[i]=u}const n=[];for(const u in t){const i=t[u],s=i._duped;n.push(i),s&&(delete i._duped,n.push(...s))}e.tags=n,e.tags=e.tags.filter(u=>!(u.tag==="meta"&&(u.props.name||u.props.property)&&!u.props.content))}}},i1=new Set(["script","link","bodyAttrs"]),s1=e=>({hooks:{"tags:resolve":t=>{for(const n of t.tags){if(!i1.has(n.tag))continue;const u=n.props;for(const i in u){if(i[0]!=="o"||i[1]!=="n"||!Object.prototype.hasOwnProperty.call(u,i))continue;const s=u[i];typeof s=="function"&&(e.ssr&&eo.has(i)?u[i]=`this.dataset.${i}fired = true`:delete u[i],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[i]=s)}e.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||Xu(n.props.src||n.props.href))}},"dom:renderTag":({$el:t,tag:n})=>{var i,s;const u=t==null?void 0:t.dataset;if(u)for(const r in u){if(!r.endsWith("fired"))continue;const o=r.slice(0,-5);eo.has(o)&&((s=(i=n._eventHandlers)==null?void 0:i[o])==null||s.call(t,new Event(o.substring(2))))}}}}),r1=new Set(["link","style","script","noscript"]),o1={hooks:{"tag:normalise":({tag:e})=>{e.key&&r1.has(e.tag)&&(e.props["data-hid"]=e._h=Xu(e.key))}}},l1={mode:"server",hooks:{"tags:beforeResolve":e=>{const t={};let n=!1;for(const u of e.tags)u._m!=="server"||u.tag!=="titleTemplate"&&u.tag!=="templateParams"&&u.tag!=="title"||(t[u.tag]=u.tag==="title"||u.tag==="titleTemplate"?u.textContent:u.props,n=!0);n&&e.tags.push({tag:"script",innerHTML:JSON.stringify(t),props:{id:"unhead:payload",type:"application/json"}})}}},a1={hooks:{"tags:resolve":e=>{var t;for(const n of e.tags)if(typeof n.tagPriority=="string")for(const{prefix:u,offset:i}of Hd){if(!n.tagPriority.startsWith(u))continue;const s=n.tagPriority.substring(u.length),r=(t=e.tags.find(o=>o._d===s))==null?void 0:t._p;if(r!==void 0){n._p=r+i;break}}e.tags.sort((n,u)=>{const i=Zu(n),s=Zu(u);return i<s?-1:i>s?1:n._p-u._p})}}},c1={meta:"content",link:"href",htmlAttrs:"lang"},f1=["innerHTML","textContent"],d1=e=>({hooks:{"tags:resolve":t=>{var r;const{tags:n}=t;let u;for(let o=0;o<n.length;o+=1)n[o].tag==="templateParams"&&(u=t.tags.splice(o,1)[0].props,o-=1);const i=u||{},s=i.separator||"|";delete i.separator,i.pageTitle=Tu(i.pageTitle||((r=n.find(o=>o.tag==="title"))==null?void 0:r.textContent)||"",i,s);for(const o of n){if(o.processTemplateParams===!1)continue;const l=c1[o.tag];if(l&&typeof o.props[l]=="string")o.props[l]=Tu(o.props[l],i,s);else if(o.processTemplateParams||o.tag==="titleTemplate"||o.tag==="title")for(const a of f1)typeof o[a]=="string"&&(o[a]=Tu(o[a],i,s,o.tag==="script"&&o.props.type.endsWith("json")))}e._templateParams=i,e._separator=s},"tags:afterResolve":({tags:t})=>{let n;for(let u=0;u<t.length;u+=1){const i=t[u];i.tag==="title"&&i.processTemplateParams!==!1&&(n=i)}n!=null&&n.textContent&&(n.textContent=Tu(n.textContent,e._templateParams,e._separator))}}}),p1={hooks:{"tags:resolve":e=>{const{tags:t}=e;let n,u;for(let i=0;i<t.length;i+=1){const s=t[i];s.tag==="title"?n=s:s.tag==="titleTemplate"&&(u=s)}if(u&&n){const i=uo(u.textContent,n.textContent);i!==null?n.textContent=i||n.textContent:e.tags.splice(e.tags.indexOf(n),1)}else if(u){const i=uo(u.textContent);i!==null&&(u.textContent=i,u.tag="title",u=void 0)}u&&e.tags.splice(e.tags.indexOf(u),1)}}},h1={hooks:{"tags:afterResolve":e=>{for(const t of e.tags)typeof t.innerHTML=="string"&&(t.innerHTML&&(t.props.type==="application/ld+json"||t.props.type==="application/json")?t.innerHTML=t.innerHTML.replace(/</g,"\\u003C"):t.innerHTML=t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"),`<\\/${t.tag}`))}}};let ba;function m1(e={}){const t=b1(e);return t.use(Kd()),ba=t}function io(e,t){return!e||e==="server"&&t||e==="client"&&!t}function b1(e={}){const t=t1();t.addHooks(e.hooks||{}),e.document=e.document||($d?document:void 0);const n=!e.document,u=()=>{o.dirty=!0,t.callHook("entries:updated",o)};let i=0,s=[];const r=[],o={plugins:r,dirty:!1,resolvedOptions:e,hooks:t,headEntries(){return s},use(l){const a=typeof l=="function"?l(o):l;(!a.key||!r.some(c=>c.key===a.key))&&(r.push(a),io(a.mode,n)&&t.addHooks(a.hooks||{}))},push(l,a){a==null||delete a.head;const c={_i:i++,input:l,...a};return io(c.mode,n)&&(s.push(c),u()),{dispose(){s=s.filter(f=>f._i!==c._i),u()},patch(f){for(const d of s)d._i===c._i&&(d.input=c.input=f);u()}}},async resolveTags(){const l={tags:[],entries:[...s]};await t.callHook("entries:resolve",l);for(const a of l.entries){const c=a.resolvedInput||a.input;if(a.resolvedInput=await(a.transform?a.transform(c):c),a.resolvedInput)for(const f of await jd(a)){const d={tag:f,entry:a,resolvedOptions:o.resolvedOptions};await t.callHook("tag:normalise",d),l.tags.push(d.tag)}}return await t.callHook("tags:beforeResolve",l),await t.callHook("tags:resolve",l),await t.callHook("tags:afterResolve",l),l.tags},ssr:n};return[u1,l1,s1,o1,a1,d1,p1,h1,...(e==null?void 0:e.plugins)||[]].forEach(l=>o.use(l)),o.hooks.callHook("init",o),o}function g1(){return ba}const x1=jl[0]==="3";function _1(e){return typeof e=="function"?e():Ce(e)}function Ju(e){if(e instanceof Promise||e instanceof Date||e instanceof RegExp)return e;const t=_1(e);if(!e||!t)return t;if(Array.isArray(t))return t.map(n=>Ju(n));if(typeof t=="object"){const n={};for(const u in t)if(Object.prototype.hasOwnProperty.call(t,u)){if(u==="titleTemplate"||u[0]==="o"&&u[1]==="n"){n[u]=Ce(t[u]);continue}n[u]=Ju(t[u])}return n}return t}const y1={hooks:{"entries:resolve":e=>{for(const t of e.entries)t.resolvedInput=Ju(t.input)}}},ga="usehead";function E1(e){return{install(n){x1&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(ga,e))}}.install}function xa(e={}){e.domDelayFn=e.domDelayFn||(n=>Ss(()=>setTimeout(()=>n(),0)));const t=m1(e);return t.use(y1),t.install=E1(t),t}const so=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ro="__unhead_injection_handler__";function k1(){return ro in so?so[ro]():pt(ga)||g1()}function bt(e,t={}){const n=t.head||k1();if(n)return n.ssr?n.push(e,t):v1(n,e,t)}function v1(e,t,n={}){const u=Yt(!1),i=Yt({});jc(()=>{i.value=u.value?{}:Ju(t)});const s=e.push(i.value,n);return Vn(i,o=>{s.patch(o)}),Os()&&(Ms(()=>{s.dispose()}),pl(()=>{u.value=!0}),dl(()=>{u.value=!1})),s}function w1(e){try{return JSON.parse(e||"{}")}catch(t){return console.error("[SSG] On state deserialization -",t,e),{}}}function A1(e){return document.readyState==="loading"?new Promise(t=>{document.addEventListener("DOMContentLoaded",()=>t(e))}):Promise.resolve(e)}const C1=Ps({setup(e,{slots:t}){const n=Yt(!1);return di(()=>n.value=!0),()=>n.value?t.default&&t.default({}):t.placeholder&&t.placeholder({})}});function S1(e,t,n,u={}){const{transformState:i,registerComponents:s=!0,useHead:r=!0,rootContainer:o="#app"}=u,l=typeof window<"u";async function a(c=!1,f){const d=c?Pf(e):Ff(e);let p;r&&(p=xa(),d.use(p));const m=aa({history:c?ra(t.base):pd(t.base),...t}),{routes:E}=t;s&&d.component("ClientOnly",C1);const A=[],b={app:d,head:p,isClient:l,router:m,routes:E,onSSRAppRendered:c?()=>{}:I=>A.push(I),triggerOnSSRAppRendered:()=>Promise.all(A.map(I=>I())),initialState:{},transformState:i,routePath:f};c&&(await A1(),b.initialState=(i==null?void 0:i(window.__INITIAL_STATE__||{}))||w1(window.__INITIAL_STATE__)),await(n==null?void 0:n(b)),d.use(m);let _,v=!0;if(m.beforeEach((I,X,L)=>{(v||_&&_===I.path)&&(v=!1,_=I.path,I.meta.state=b.initialState),L()}),!c){const I=b.routePath??"/";m.push(I),await m.isReady(),b.initialState=m.currentRoute.value.meta.state||{}}const M=b.initialState;return{...b,initialState:M}}return l&&(async()=>{const{app:c,router:f}=await a(!0);await f.isReady(),c.mount(o,!0)})(),a}function D1(e){const t=e;return t.headTags=e.resolveTags,t.addEntry=e.push,t.addHeadObjs=e.push,t.addReactiveEntry=(n,u)=>{const i=bt(n,u);return i!==void 0?i.dispose:()=>{}},t.removeHeadObjs=()=>{},t.updateDOM=()=>{e.hooks.callHook("entries:updated",e)},t.unhead=e,t}function T1(e,t){const n=xa({});return D1(n)}const un=(e,t)=>{const n=e.__vccOpts||e;for(const[u,i]of t)n[u]=i;return n},P1={};function F1(e,t){const n=Ut("RouterView");return N(),uu(n)}const M1=un(P1,[["render",F1]]),I1=`---
title: 快速上手
date: 2026-10-04
hide: true
author: 张三
description: 如何使用这个静态博客框架
---

# 快速上手

这篇文章告诉你如何使用这个 Vue 静态博客框架。

## 新增文章

在 \`src/content/posts/\` 目录下新建一个 \`.md\` 文件即可。

## 修改模板

直接修改 \`src/components/\` 和 \`src/pages/\` 下的 Vue 文件。
`,q1=`---
title: Hello World
date: 2026-10-05
hide: true
author: 张三
description: 第一篇文章
---

# Hello World

这是我的第一篇文章，用 Markdown 写。

## 特点

- 简单
- 快速
- 静态生成

> 这是一段引用。

\`\`\`python
print("Hello, World!")
\`\`\`
`,R1=`---
title: 亟待变更的电子邮件邮件及营销
date: 2013-11-30
author: 商友智能营销云软件
description: 国外的Facebook，Twitter没有能取代电子邮件，国内的QQ，微信微博同样也不能，相反，电子邮件反而越来越不可或缺，邮件群发营销也没有因此消减。但是社交媒体的发展，也在促使
---
国外的Facebook，Twitter没有能取代电子邮件，国内的QQ，微信微博同样也不能，相反，电子邮件反而越来越不可或缺，邮件群发营销也没有因此消减。但是社交媒体的发展，也在促使电子邮件有新的功能必须出现，适应新的使用需求。因此，电子邮件也要变革！

几年前，砖家们纷纷预测电子邮件将死，但现状并非如此，电子邮件的用量和数量仍在不断增长。Facebook、Twitter 等信息流并没有取代电子邮件，实际上后者现在本身也变成了流。

为了适应电子邮件规模扩大的变化，邮件系统也在演变，用户将看到更多经算法审查的邮件。通过审查的那些会被列到单独的列表中，而其他的则汇入临时性的邮件洪流中逐渐被遗忘，一如几小时之前发布的无趣微博。

对于营销人员来说这种趋势意义重大。AOL、Yahoo 时代收件箱中的每一封邮件都要阅过的做法正在迅速消失。电子邮件在电子商务销售及客户重新接触中的作用变得愈发重要。尤其是对于电子商务来说，电子邮件促 销的表现甚至已经超过了社会化广告。大量电子邮件发送者需要多下功夫来提高电子邮件的个性化和趣味。

电子邮件这股海啸无所不在。有些硅谷人士已经开始实施“邮件自杀”行为，宁愿错过后让对方重发也要放弃那堆来不及阅读的邮件。有的则增加电子邮件自动回复，但实际上邮件他们可能连看都不看。

Google 给 Gmail 增加了若干特性，试图给处于混沌状态的电子邮件带来一些秩序。这一变化会同时影响到电子邮件用户和营销者。有了优先收件箱（Priority Inbox）、Gmail Tabs（类别标签）、Circles（圈子）这些功能之后，用户将越来越倾向于处理那些经过算法审查的、自己熟悉的发件人的新建。优先收件箱功能还需要 进一步优化，要能做到自动将接收者重复打开的发件人发出的信件标记为“重要”，尤其是那些得到收件人回复的信件。

对于使用“电子邮件逐个发”的营销者来说，大量推销信件发出后却如石沉大海显然非己所愿。对于每一类批量发件人来说，现在都需要在发送的海量邮件和“打开率”及“点击率”之 间寻找新的平衡—那两个指标是 Google 等邮件提供商检测用户对信件是否感兴趣的标志。跟 Facebook 的“edge rank”在帖子获喜欢、分享及评论时会提高一样，“mail rank”也会成分为电子邮件营销者用来衡量其效能的一个越来越重要的指标。

电子邮件向信息流转变对人来说也一样会产生影响。相对于冰冷的电子邮件，以后也许更倾向于通过共同的第三方来向别人引荐，尤其在发件人发出的海量邮件得不到响应的情况下更应如此。甚至熟人发过来的电子邮件很快都有可能被当成是 Facebook 或 Twitter 帖子，要么很快回复，要么让它消失在洪流之中。跟社会化帖子一样，发送人可能也会让电子邮件内容尽量的简明扼要。

像 Facebook、Twitter 那样面向流的公司基本上通过允许品牌购买促销帖子的方式让品牌企业自己去定位客户。电子邮件提供商也许很快也会出售“促销电子邮件”，一种特殊邮件群发的营销方式，让营销人员定位其优先收件箱中的用户。用户也许会反感，但考虑到电子邮件服务是免费的，所以其抱怨估计也只能作罢。电子邮件已经成为一种流，正如那句话说的那样，如果你不付费（使用服务），你就是（服务提供商的）产品（而非他们的客户）。

`,O1=`---
title: 如何避免群发的邮件被退信
date: 2013-11-01
author: 商友智能营销云软件
description: 商友邮件群发软件做为网络营销的利器，其不正确的操作使用往往会适得其反，单纯就退信而言，目前过滤垃圾邮件的技术、措施也越来越成熟，如何用好这把“电子邮件逐个发”这个邮件群发的双刃剑用
---
**商友邮件群发软件**做为网络营销的利器，其不正确的操作使用往往会适得其反，单纯就退信而言，目前过滤垃圾邮件的技术、措施也越来越成熟，如何用好这把“电子邮件逐个发”这个[邮件群发](/)的双刃剑用好，避免发出的营销电子邮件被拒收或退信呢？

1、在邮件标题及正文中都尽量少使用敏感的、典型垃圾邮件常使用的词汇，如：获奖、赢取、免费、促销、发票、礼物、避税、研修班、折扣、财务等。尽量少用，以免触发垃圾过滤算法。少使用惊叹号，减少使用夸张的颜色，尤其是加粗的红色字体。这都是典型的垃圾邮件常用的吸引眼球的方法。

2、邮件内容、标题、发件人姓名都不要使用明显是虚构的字符串。比如有的垃圾邮件发送者当然不会告诉别人真名实姓，就在发信人名称中随便写上几个字母。这种莫名其妙的随机字符串通常都是欲盖弥彰的垃圾邮件特征。

3、HTML 邮件代码应该简洁，尽量少使用图片。虽然HTML 邮件允许使用图片美化邮件，但是图片与文字相比应该保持在最低比例。图片越多，被打的垃圾分数可能越高。

4、在邮件中提醒用户把你的域名以及邮件地址加入到用户自己的白名单和通讯录中。绝大部分免费邮件提供商，如网易邮箱、新浪邮箱、QQ邮箱、搜狐邮箱等都有相应的设置，把电子邮件地址存入到通讯录中也起到相同的效果。

5、在电子邮件中含有“退订”的超级链接。订阅者可能会要求您将他的地址从您的数据库中删除。马上去做，并将处理的结果通知他。响应他们的要求有助于避免潜在的垃圾邮件抱怨，避免他们将您列入ISP的黑名单中。而且您的公司万一被垃圾邮件抱怨调查时，它可以证明您是一个许可营销邮件公司，而不是垃圾邮件的制造者。

总之，做好邮件群发，避免被退信，以上几个可以多注意。

原帖地址： 转载请注明出处。

`,L1=`---
title: 给不同收件人群发不同邮件内容
date: 2013-05-05
author: 商友智能营销云软件
description: 电子邮件逐个发作为一款被广泛应用的邮件类工具软件，与Foxmail、Outlook等传统工具相比，具有投递量大，发送速度快，操作方便等优点。而在使用过程中，有好多人希望能一次性将不
---
**电子邮件逐个发**作为一款被广泛应用的邮件类工具软件，与Foxmail、Outlook等传统工具相比，具有投递量大，发送速度快，操作方便等优点。而在使用过程中，有好多人希望能一次性将不同的邮件内容投递给不同的人，比如发一个录取通知书、或者成绩单、或者工资条等，肯定希望只有对应的收件人才能看到他自己的内容。如果一封一封发送邮件，比如你们公司有20人，你要发送20次，费时费力不说，还很容易出错；如果你们公司有50人、100人甚至200人，这样的操作模式就会更加糟糕了。

而使用电子邮件逐个发，这样的问题就迎刃而解了。我们将要发送的内容放到一张Excel表格中，当然，CSV格式也是可以的，推荐使用Excel格式，而且大多数情况下这样的Excel表格都是现成的。按照如下图所示操作：  
![](/static/images/qunfabiz-qunfa-butong-shoujianren-neirong-0.gif "从Excel导入收件人Email")  
然后就是对照导入的邮件列表的标题，组织邮件内容，要做的操作就是在你需要显示的地方，将列表标题用两个百分号（%）括起来，如下图所示：  
![](/static/images/qunfabiz-qunfa-butong-shoujianren-neirong-1.gif "个性化邮件内容")至此，一封个性化的邮件内容就组织完成了。现在群发出去的，每个收件人看到的都是属于自己的内容，你现在要做的事情，就是点一下“发送”按钮，然后坐享其成！

`,$1=`---
title: 邮件发送成功对方却没有收到的原因分析
date: 2014-12-01
author: 商友智能营销云软件
description: 自己这边邮件发送成功了，而对方却没有收到的情况，在邮件群发过程中会经常遇到的。邮件群发与单封邮件发送既有相同的地方，也有一定的区别，因此不能认为 群发出去的电子邮箱都是百分百成功的
---
自己这边邮件发送成功了，而对方却没有收到的情况，在邮件群发过程中会经常遇到的。邮件群发与单封邮件发送既有相同的地方，也有一定的区别，因此不能认为 群发出去的电子邮箱都是百分百成功的。发件人得到邮件发送服务器的反馈“成功”，不代表收件人服务器一定接收这封Email，或者接收了但一定转给收件 人。**数以千封的邮件群发，在保证收件人地址全部存在的情况下，成功率在80%左右是比较正常的。**而具体分析这些没有收到的情况，有以下几种可能：

**一、邮件正在传递途中。**  
Email的发送过程不是同步的，各个传递中继处理需要时间；如果发送方服务器或者收信方服务器短时间内囤积了大批量邮件传递任务，也会有一定的时间去排队。这个周期最长是三天，如果三天内投递不成功，发件箱会有退信通知的。

**二、邮件在多个服务器或网段之间传递，延迟或拒绝投递。**  
不同邮件域名或邮件服务器直接Email传递有一个过程，这个一般要几个小时甚至更长时间。如果这些服务器不在同一个网段，那么这封Email的传递过程肯定不是即时的。例如从Gmail邮箱给QQ邮箱发送邮件，经常会遇到这个情况，特别是用软件做**邮件群发**的过程中，短时间内的大量邮件会造成网络堵塞，从而降低了传递速度；而这个时候用网页直接发送，选择的路由与客户端发送的路由是不同的，速度则会提高，没有可比性。  
另 一方面，服务器也会决绝投递跨网域的Email。比如用QQ邮箱去发送QQ邮箱，很快就能收到了，而用sina邮箱通过SMTP去发送Email给QQ邮 箱，数量稍微多一些或者内容稍有重复，新浪邮箱服务器往往拒绝投递而不做任何通知；但也不全部是这样的，比如Gmail邮箱去发送QQ邮件，如果拒绝投 递，会Email通知你。

**三、收信服务器或者收件人直接拒收或丢弃。**  
这种情况有很多种，这里 着重说一下黑名单机制。服务器端要维护一个域名黑名单，对于每封过来的邮件，判断其所在域是否在这个黑名单中，形象的说，你的邮件地址是 xxx@abot.cn，那么所有来自@后面的这个段的Email，都会被Block掉，但这不是等价的，比如你的Email地址是 xxx@qunfa.abot.cn，根据算法，同样符合abot.cn这个黑名单规则。  
另一种就是内容过滤，比如网易系列邮箱经常会提高安全级别，将来自网易系列邮箱（163、126、yeah等）之外的，内容中包含附件、http字样的内容全部拒收或直接丢弃。21cn、sohu之类的收件服务器对此过滤较为严格。  
基于这一点，大家要注意了，不要动辄用自己的公司域名的邮箱去群发大批量的邮件。这也是邮件群发的成功达不到100%的原因所在，一般大规模的邮件群发（一台电脑一天发送量大于2000），成功率在60%~80%之间已经不错了。

**四、进入垃圾邮件了。**  
这种情况是很常见的，如果某个客户端发送频率过高，或者包含大量可疑为垃圾邮件内容的关键字，甚至收件人将你的email地址列入黑名单，你发过去的邮件，都会被判断垃圾邮件。详细的过程大家可参考《[如何避免邮件群发过程中出现垃圾邮件](/posts/qunfabiz-qunfa-lajiyoujian.html "避免垃圾邮件")》，提供了比较多的避免的办法。需要说明的是，垃圾邮件只能最大限度的去避免，不可能杜绝的，所谓的完全不进垃圾邮件的[邮件群发](/pages/legacy.html "邮件群发")软件，都是欺骗性的广告用语。

**五、发件服务器（SMTP服务器）不通知的情况下丢邮件。**  
这种情况在新浪和网易邮箱中最为常见，包括sina.com和sina.cn，以及163、126、yeah等，这几个邮箱发出去的邮件。这类SMTP服务器认为某个账号可能群发邮件时候，会悄悄放弃传递，而告之用户投递成功，做法与Gmail相反。  
具体限制（包括发送频度和邮件内容）见SMTP帮助页面上的详细说明 [[老用户专区](/pages/legacy.html) "配置SMTP服务器")。

以上只是简单列出最常见的几种情况，虽不完全，但百分之八九十的邮件都跳不出这几点，至于解决方式嘛，第一和第二种情况，只能耐心等；第三种情况，要检查自己的域名，包括是否支持反向域名解析等；第四种情况的解决方式，请看上文。  
需要指出，如果您使用的是爱博邮件群发系统的试用版，那么以上分析仅供参考。因为注册版没有尾巴广告，单次连成发送多封，都可以提供邮件发送的成功率；而且注册用户有稳定的技术支持，在遇到这些问题的时候，会获得有针对性的指导，做出响应的改进来有效避免这类问题。

`,B1=`---
title: 短小精悍的邮件群发软件
date: 2014-06-22
author: 商友智能营销云软件
description: 网络营销过程中我们接触到邮件群发软件很多，但好用的很少，像电子邮件逐个发这样既短小精悍又简单易用的邮件营销软件就更少了。 电子邮件逐个发专注做好邮件群发功能，而同类的软件相当一部分
---
网络营销过程中我们接触到**邮件群发软件**很多，但好用的很少，像[电子邮件逐个发](/)这样既短小精悍又简单易用的邮件营销软件就更少了。

电子邮件逐个发专注做好邮件群发功能，而同类的软件相当一部分看上去有群发、采集、QQ号码搜索以及抓取指定网站等功能，但其实你花十分钟静下心来用一下，就会发现几乎没有哪个功能可以正常使用的，包括最基本的邮件群发功能都没有做好，只是拿一些不存在的或者不能用的功能来吸引客户眼球而已。

另一方面，电子邮件逐个发大小仅3M左右，下载秒速，而不像这类其他软件因为是基于近乎垃圾的framework上开发的，动辄几十兆的大小，安装了半天最后发现还不能用。而且在framework的基础上做开发都是匆匆忙忙，什么技术团队花了一年时间开发出来等广告都是扯谈，没有经过优化的软件运行起来臃肿不堪，完全无法和电子邮件逐个发比拟。

![商友邮件群发软件](/static/images/qunfabiz-qunfa-duanxiaojinghan-0.png)  
电子邮件逐个发主界面截图

做为一款经典的邮件群发软件，电子邮件逐个发基于Delphi开发，后台采用效率最高的C++编程语言开发，无论功能和性能都远远领先同类产品。做为一款好用的邮件营销工具，单凭以上这几点，就足以让我们华军软件园的小编推荐了。

`,N1=`---
title: 电子邮件常见提示逐个分析
date: 2013-05-05
author: 商友智能营销云软件
description: 用电子邮件群发做网络推广，经常会遇到退信的情况。退信是不同的SMTP服务器根据Email投递情况而决定，因此返回来的信息也是千差万别的，结合我们做邮件群发技术支持过程中的总结，列举
---
用电子邮件群发做网络推广，经常会遇到退信的情况。退信是不同的SMTP服务器根据Email投递情况而决定，因此返回来的信息也是千差万别的，结合我们做邮件群发技术支持过程中的总结，列举下面几类最常见的退信情况。

（1）收件人地址不存在  
常 见提示：Invalid User、User not found、User unknown、No such user、user unknown、unknown or illegal alias、account inactive、user not found、Invalid address、invalid recipient、not a valid mailbox、mailbox cannot be delivered  
退信原因：接收方SMTP服务器认为收件人用户不存在，从而发送服务器无法找到要投递的邮件地址。这种情况常见于将收件人Email地址写错误的情况。  
解决方法：认真检查填写的Email地址是不是有错误，正确无误后再导入群发软件发送。

（2）找不到对方主机  
常见提示：not found、Host、bad host domain  
退信原因：无法查找对方服务器名称，主要是由于在写电子邮件地址的时候，把@后面的域名或者主机地址写错了。如将aaa@hotmail.com写成aaa@homail.com。  
解决方法：检查一下点击邮件地址，看看有没有写错。

（3）连接对方主机超时  
常见提示：Connection timed out  
退信原因：连接超时，主要是在与对方服务器连接时由于网络问题而造成的问题，导致邮件的发送错误。  
解决方法：可以再次尝试发送，如果还是不成功，则可能是（a）对方SMTP服务器的确不存在；（b）你所在的网络的确无法连接到对方的SMTP服务器。

（4）单封收件人超过限制  
常见提示：Too many recipients、Less than 20  
退信原因：邮件群发包含用户过多，有些邮件服务器对一封邮件的群发用户数量是有限制的，如果超过了这个限制就会出现这个错误。  
解决方法：我们可以将每次发送的用户控制在20人左右，如果超过了那可以多分几次发送。大多数邮件群发软件是一次投递给多个收件人的，容易遇到这个退信提示。爱博邮件群发系统是一对一发送的，对方看到的收件人是唯一的，就是他自己，这样给对方的用户体验会好多了。

（5）对方邮箱已满  
常见提示：Quota、Hard limit、Storage allocation  
退信原因：对方邮箱已经满了，我们投递的邮件，邮箱已经没有足够的剩余空间来接收了，所有就会产生错误并退回到你的发件地址。  
解决方法：用其他联系方法让对方知道邮箱已经满了，让他收到一些信或者删除一些垃圾邮件，以腾出空间接收邮件。

（6）Email过大，超过接方法尺寸限制  
常见提示：Exceeds、Maximum message size、Data size  
退信原因：发送的邮件太大，对方的邮件服务器拒收，现在很多邮件服务器对发送的邮件都要大小的限制，具体可以去提供邮箱的网站查询。  
解决方法：通常此类错误都是由于收件人邮件系统不支持他们系统中的用户接收太大的邮件。因此用户可以把过大的邮件附件使用outlook express的邮件分拆功能进行分拆发送。通常后面跟的数字就是对方系统所允许接收的单个邮件的大小。

（7）反垃圾邮件列表  
常见提示：Mail from xxx.xxx.xxx.xxx refused, see http://xxxxxxxxxxxxxx  
退信原因：发信服务器地址被加入到某些反垃圾邮件组织的黑名单中，导致拒收。  
解 决方法：这种情况我们一般很少遇到，如果遇到了，也算是不幸。垃圾列表主要是限制IP地址段或者域名，所以配置多个不同类别的SMTP服务器，可以有效的 避免这种情况，具体配置可参考 时这也提醒我们，做邮件群发的时候，尽可能不要拿自己的域名去牺牲。

（8）DNS反向解析  
常见提示：can’t verify FROM domain in DNS、domain does not exist  
错误原因： 某些邮件服务器为了防垃圾邮件的需要，接收邮件时进行对发信人的email地址进行DNS反向查询，对于公网存在正确DNS解析的发件人的邮件放行，而对于DNS反向解析不正确的地址予以拦截。  
解 决方法：所谓反向查询，就是根据IP地址去查域名。我们知道，一个IP地址上可以放多个网站，而一个网站则不好分配到多个IP地址上。并不是所有的域名都 做了反向解析的。我们用ping可以域名查IP地址，用nslookup可以根据IP地址查域名。目前国外的hotmail，国内的163等Email服 务器，都做了这方面的反向查询。这也是为什么我们自己搭建一个邮件服务器发送Email，进入垃圾邮件甚至丢失的情况会大大增加的原因。

总 之，邮件退信原因是多种多样的，这里只是列举了最常见的几类退信原因，其他这里没有办法一一进行说明。博邮件群发系统专业版模拟人工群发邮件，可以控制发 送的速度和不同类型SMTP的使用频率，从而最大限度的有效避免一些不必要的退信情况的出现。大家只要细心的设置发送的邮件，可以尽量避免邮件退信，从而 提高工作效率。

`,z1=`---
title: 给Email瘦身，提高邮件群发营销效率
date: 2014-12-02
author: 商友智能营销云软件
description: 对于图片较多的邮件内容，可以将图片设置为网址引用的方式，显示效果和本地发送出去一样，具体操作为以下举例的方案1： 解决方案1： <b>下面的图片是我要讲内容</b> <img sr
---
对于图片较多的邮件内容，可以将图片设置为网址引用的方式，显示效果和本地发送出去一样，具体操作为以下举例的**方案1**：

解决方案1：  
<b>下面的图片是我要讲内容</b>  
<img src=”http://www.mysitexxxx.com/case/www-qunfa-biz.jpg” [商友软件官网](/)>  
<br>好的，以上是图片以上是图片。

解决方案2：  
<b>下面的图片是我要讲内容</b>  
<img src=”d:\\\\emails\\\\2012\\\\case\\\\www-qunfa-biz.jpg” [商友软件官网](/)>  
<br>好的，以上是图片以上是图片。

对于附件太大的邮件，压缩附件的同时，更建议将附件设置为超级链接，供收件人有选择的打开。

以100K附件为例，群发1000份，上传的大小已经超过100M。

或许您会认为，平时下载100M的文件或者视频，不是很快就完成了嘛！而且现在是宽带接入，有的地区还是光纤入户。

但您忽略了一个关键因素，即“上传”和“下载”，不管下载的速度如何，国内目前主流的接入，上传速度都不会超过512K，而且这是理论上的上传带宽。

具体到SMTP发送邮件，涉及到你的电脑终端到远程SMTP服务器的上传速度以及对方对连接速度的限制。SMTP本身就不是高速传输的网络协议，传输性能远不如HTTP协议。

因此，上传100M的内容，对于SMTP不会很快的，这不能和下载相比较。

`,j1=`---
title: 邮件群模板——淑女屋（淘宝客推广）
date: 2013-05-05
author: 商友智能营销云软件
description: 以下是 淘宝客推广网站《淑女屋》邮件营销模板，供做邮件营销的网友参考。 精品淑女屋，时尚女装、女鞋、女包，冬日促销进行中 精选淘宝商品，支付宝担保交易，安全放心。 如果图片无法显示
---
以下是 淘宝客推广网站《淑女屋》邮件营销模板，供做邮件营销的网友参考。

精品淑女屋，时尚女装、女鞋、女包，冬日促销进行中

[![](/static/images/qunfabiz-qunfa-email-template-shunvwu-0.gif "http://girl.tk8.co")](http://girl.tk8.co/)

精选淘宝商品，支付宝担保交易，安全放心。

[![](/static/images/qunfabiz-qunfa-email-template-shunvwu-1.jpg "http://girl.tk8.co")](http://girl.tk8.co/)

[如果图片无法显示，直接点击这里进入](http://girl.tk8.co/)

欢迎光临精品淑女屋[http://girl.tk8.co](http://girl.tk8.co/)挑选更多商品。

邮件源代码如下：

<P>精品淑女屋，时尚女装、女鞋、女包，冬日促销进行中</P>  
<P><A href=”http://girl.tk8.co”><IMG title=http://girl.tk8.co border=0 src=”http://www-old.qunfa158.com/wp-content/themes/qunfa158v2/abotpictures/logo\\_girl-tk8-co.gif” target=”\\_blank”></A></P>  
<P>精选淘宝商品，支付宝担保交易，安全放心。</P>  
<P><A href=”http://girl.tk8.co”><IMG title=http://girl.tk8.co border=0 src=”http://www-old.qunfa158.com/wp-content/themes/qunfa158v2/abotpictures/tk8/T2jtRcXi0NXXXXXXXX\\_!!303772222.jpg” target=”\\_blank”></A></P>  
<P><A href=”http://girl.tk8.co”>如果图片无法显示，直接点击这里进入</A></P>  
<P>欢迎光临精品淑女屋<A href=”http://girl.tk8.co” target=\\_blank>http://girl.tk8.co</A>挑选更多商品。</P>  
在“电子邮件逐个发”中直接填入以上邮件内容即可，操作为：运行软件，点击邮件内容下方的“撰写”，在打开的邮件内容图文编辑器中，选择中间的“HTML代码”，粘贴以上源代码，详细帮助见[[老用户专区](/pages/legacy.html) "电子邮件逐个发使用说明")。

出处：http://www.yx8.co

`,H1=`---
title: 错误邮件群发导致1300名员工被开除
date: 2012-04-24
author: 商友智能营销云软件
description: 这是一个戏剧性的事情，再次证明在大规模邮件群发操作前，需要认真检查邮件的内容，以及收件人。 在英国保险公司Aviva的办公楼中，人事老总在开人的时候不幸将一份发给被解雇员工的电子邮
---
这是一个戏剧性的事情，再次证明在大规模邮件群发操作前，需要认真检查邮件的内容，以及收件人。

在英国保险公司Aviva的办公楼中，人事老总在开人的时候不幸将一份发给被解雇员工的电子邮件群发给单位里所有的1300名员工，导致整个公司出现大地震，许多人在看到邮件后都目瞪口呆。

Aviva之后迅速对这一严重事件表示抱歉，但这份邮件的影响还不仅仅在公司本部，全球各地的工作人员都收到了这份错误邮件，公司还需要向这些人员们一个一个解释原因。科技带来了便利，它淘汰了办事员时代，但科技犯起错误来的效率实在是高出人们想象。

![](http://asset2.cbsistatic.com/cnwk.1d/i/tim/2012/04/21/aviva2_610x343.png "邮件群发注意事项")

`,U1=`---
title: 使用Excel格式的收件人地址列表群发电子邮件
date: 2022-03-11
author: 商友智能营销云软件
description: 这里的技巧其实很简单，就是将Excel表单的上第一行（即：列名）与软件要求的宏定义对应，每个词两边加%%即可，如下图所示： 导入的Excel文件需要符合Office的Excel标准
---
这里的技巧其实很简单，就是将Excel表单的上第一行（即：列名）与软件要求的宏定义对应，每个词两边加%%即可，如下图所示：

![](/static/images/qunfabiz-qunfa-excel-email-address-list-0.gif "邮件群发")

导入的Excel文件需要符合Office的Excel标准，可以为xls或者xlsx格式，只要电脑上正常安装了Microsoft Office系列工具的组件即可。

[点击这里下载Excel格式的邮件群发地址示例。（旧版资源，见老用户专区）](/pages/legacy.html)

`,Q1=`---
title: Gmail实现自动显示邮件图片功能
date: 2013-12-26
author: 商友智能营销云软件
description: 据谷歌Gmail官方博客报道，Google宣布变更Gmail处理图片的规则，从今天起，只要你从台式机上查看Gmail邮件，所有内嵌图片将会自动显示。也就是说，你再也不用被那句“是否
---
![](/static/images/qunfabiz-qunfa-gmail-auto-show-images-0.jpg)

据谷歌Gmail官方博客报道，Google宣布变更Gmail处理图片的规则，从今天起，只要你从台式机上查看Gmail邮件，所有内嵌图片将会自动显示。也就是说，你再也不用被那句“是否显示下方图片”的字样烦到了。

此前，Google也跟其他提供电邮服务的公司一样，对陌生人投递的邮件所包含的图片默认不显示，需要用户手动操作才能显示邮件内的图片。这样做主要是为帮助用户免受邮件发送者可能通过图片危及你个人设备的安全。

而从今以后，Gmail将通过Google自己的安全代理服务器处理所有的图像，图片代理服务器对所有图片进行转码，转码后的图片保存在Google服务器上，将是安全可靠的，Gmail会采取措施来确保图片安全加载，保证发件人无法利用图片获取用户的IP地址或位置等信息，发件人无法设置或读取哟过户浏览器中的Cookie。

与以往一样，Gmail会扫描每封邮件是否包含可疑内容，检查用户图片是否含有已知病毒和恶意软件，如果Gmail认为某个发件人或邮件可能很可疑，则不会显示图片，并会询问您是否想要查看图片。

Gmail实现自动显示邮件图片功能

目前Gmail默认将显示所有邮件图片，当然，如果用户信不过Google的这些安全措施，也可以在设置里选择关闭图片显示功能，具体在“设置”-“常规”-“图片”里，将“始终显示外来图片”修改为“在显示外来图片前询问”即可。

`,V1=`---
title: 如何避免邮件群发过程中出现垃圾邮件
date: 2011-12-23
author: 商友智能营销云软件
description: 有网友抱怨“邮件群发”过程中发出去的邮件进入了垃圾邮件，想知道为什么，是不是我们邮件群发软件的问题？ 进入垃圾邮件的原因很多，比如接收方服务器对垃圾邮件的判断标准不同（比如内容、发
---
有网友抱怨“邮件群发”过程中发出去的邮件进入了垃圾邮件，想知道为什么，是不是我们邮件群发软件的问题？

进入垃圾邮件的原因很多，比如接收方服务器对垃圾邮件的判断标准不同（比如内容、发送频率、关键字等），问题不一定出在你那边。另外，现在很多邮箱服务提供商，经常神经过敏，即使通过网页登录进去发，也有可能进垃圾箱。还有一些杀毒软件，比如瑞星，有一段时间，只要是经过它扫描的邮件，几乎全是垃圾邮件。

这种情况下，可以试着对照下面几点检查：  
（1）修改邮件的标题内容。如果您的邮件中含有诸如“广告”、“代理”、“发票”等字眼，很容易被接收方当作垃圾邮件处理的；  
（2）更换发送邮件发服务器（SMTP帐号）。同一个发送服务器被多次使用，发送服务器会通知接受方，“我送过去的可能是垃圾邮件”；  
（3）发送的html邮件的HTML代码存在语法错误；  
（4）不要一直发送到一种类型的邮箱里。比如你的10000多个收件人都是QQ邮箱的（@qq.com），那么QQ邮箱服务器不断收到来自同一个IP地址的内容相同的邮件，当然会被误认为是垃圾邮件啦。  
（5）有些服务器整体对垃圾邮箱的界定标准非常严格，比如网易邮箱，只有邮件内容中包含网址（链接），或者不是来自网易邮箱发出去的Email，基本都被判断为垃圾邮件；这个标准肯定是不对的。避免被这类服务器判定为垃圾邮件，只能尽可能使用它们SMTP服务器投递对应的邮件（例：用163.com的SMTP账号给其他163.com邮箱发信），同时尽可能减少邮件内容中的敏感信息（例：http://、发票、发piao、中奖等字样）。

[电子邮件逐个发](/tag/email-marketing-software)模拟人工发送，连接的是真实的网络服务器而不是特快专递之类的，因此进入垃圾邮件的几率大大降低了。由于不同的收件人服务器以及收件邮箱对垃圾邮件的判断和过滤标准错综复杂，有时候不是发送方的问题，所以**没有办法百分百避免进入垃圾邮件的归类**。但是邮件营销过程中，**可以通过以上几点，最大限度的避免这类情况**。

在邮件营销群发过程中，最好多注册一些支持SMTP的邮箱，免费的如Gmail.com、新浪、QQ等，如果您有一些稳定的收费邮箱，那么发送自由度就提高很多。每天轮发发送速度快效果好。

在注册版中，单次连接服务器可以发送多封邮件，没有固定的尾巴广告，有专业的技术做具体的支持和指导，这些都将极大程度上的减少进入垃圾邮件的机会。

`,G1=`---
title: 大附件和大图片的邮件群发解决方案
date: 2012-05-11
author: 商友智能营销云软件
description: 邮件群发过程中有时候需要将Word文档、PDF文件、ZIP文件更发给别人，甚至比较大的图片嵌入在邮件内容中。而这些文件又比较大，大大降低了邮件群发的速度和成功率。 总所周知，群发出
---
邮件群发过程中有时候需要将Word文档、PDF文件、ZIP文件更发给别人，甚至比较大的图片嵌入在邮件内容中。而这些文件又比较大，大大降低了**邮件群发**的速度和成功率。

总所周知，群发出去的邮件不会全部被收件人打开，带着大附件群发肯定是得不偿失的。有没有好的解决方案呢？

先说说大附件。附件不是在邮件内容中的，这个嵌入在邮件内容中的图片不同。可以将附件放在一个公共的下载地址上，而在邮件内容中指明下载这个附件的网址（以http开头的URL的形式），这样，对你群发内容感兴趣的阅读者自然会去下载；而不感兴趣的，删掉邮件内容就可以了，既不占用他们的空间，也不浪费你群发邮件的时间。

那么如何放在公共的下载地址上呢？如果你有网站，直接上传上去，URL地址你自然明白的；如果没有自己的网站空间，可以考虑使用一些**网络硬盘**服务。网络硬盘本身试一个私密空间，但是有一些服务商会提供基于密码，或者是提取码的共享服务，比如QQ网盘等，在群发的邮件内容中指明提取码或者下载密码就可以了。

至于嵌入的邮件内容的大图片，如果也实现共享群发进而减小邮件尺寸呢？其实稍微懂一点网页设计（Web开发）这个道理应该很明白的。

带图片的邮件内容其实就是一个HTML网页，在**电子邮件逐个发**软件中，设置邮件内容中的图片的方式是：打开图文编辑器，选择插入图片，这时候，会选择本地图片或者网络图片，选择网络图片就可以了。至于网络图片你打算放在哪里，这里就不赘述了，大家可以八仙过海，各显神通。

总之，大附件和大图片在邮件群发过程中是可以通过一些设置来实现邮件内容的瘦身，一些常用的邮件群发技巧可以参考电子邮件逐个发的产品主页[商友软件官网](/)，进而提高基于电子邮件的网络营销的效率。

原文地址  转载请注明出处。

`,W1=`---
title: 大批量邮件群发解决方案：电子邮件逐个发
date: 2012-11-17
author: 商友智能营销云软件
description: 在开始邮件群发营销前，您必须明确： 1、任何Email都是有发送数量限制的，这个限制可能是每天、每个小时甚至几分钟，没有发送数量或者频率限制的邮箱服务器是没有的。 2、任何邮箱邮件
---
在开始邮件群发营销前，您必须明确：

1、任何Email都是有发送数量限制的，这个限制可能是每天、每个小时甚至几分钟，没有发送数量或者频率限制的邮箱服务器是没有的。  
2、任何邮箱邮件发多了，都可能被封掉，这和你是否使用软件群发，或者使用什么软件群发没有关系。

如果你认为这条定律不对，或者你有孙悟空翻筋斗云的本事突破这两条限制，那么可以到此为止，不需要再继续看下去了。

目前主流的支持SMTP发送的邮箱，不论是免费的还是收费的，每天的发送量大概在100到400左右，当然，有一些VIP邮箱会多一些，但也不会差得太多；“电子邮件逐个发”通过自动交替使用用户配置在软件中的多个SMTP邮箱账号，减少单个邮箱的邮件发送频率，延迟单个邮箱的邮件投递时间，实现大批量的邮件一对一群发。

任何邮箱发送太快都可能会被服务器封掉的，这和用软件软件，或者不用软件没有关系。申请了一批Email（比如20～50个），注意配置进入我们的邮件群发软件专业版，每天适当控制每个Email帐号（即发送服务器）发送200封左右； 适可而止，不要过分发送，一般会被发送服务器封掉帐号或者IP的；这样的话，配置30个发送服务器，则每天大概发送6000封即可停止，这样第二天你这些 帐号大部分还是可以继续使用的，以此类推。

另外通过一些高级选项可以适当避免被封，但是只有注册版本才能进行这方面的设置，试用和体验版本基本不涉及到这些问题。

要指出的是，每个帐号每天平均发送200封是基于配置的可用发送服务器大于50个，不是说您配置了几个发送服务器进去，让他们每个连续平均发送200封 的。总的原则是，发送间隔越大，单个帐号发信速度越慢，帐号被封的可能性越小；短时间内大批量发送邮件，比如五分钟内单个帐号发出50封，那么这个时候帐 号可能会服务器暂时禁用，而造成后续发送出现“无法连接SMTP”的情况。因此，需要根据自己的邮件内容、网络速度等因素，在发送速度和稳定性之间寻找一 个平衡点。

更多邮件群发软件使用问题，请参考《电子邮件逐个发》帮助文档。

`,K1=`---
title: 发送邮箱批量转换器
date: 2013-11-29
author: 商友智能营销云软件
description: 选择你要转换的发送邮箱的列表文件。 1、必须是Text的纯文本文件； 2、每个发送邮箱单独一行； 3、每一行的顺序为：邮箱地址|密码，邮箱地址与密码直接用“|”分割开来。 例如： 
---
选择你要转换的发送邮箱的列表文件。  
1、必须是Text的纯文本文件；  
2、每个发送邮箱单独一行；  
3、每一行的顺序为：邮箱地址|密码，邮箱地址与密码直接用“|”分割开来。  
例如：  
test1@gmail.com|11111111  
66666@qq.com|123456abc  
test1@163.com|88888888  
test1@sina.com|11111111  
test1@126.com|aaaaaaaaa  
test1@sina.cn|23ref43534  
[点击这里下载样本](http://d.qunfa.biz/TransferSmtp/TransferSmtpWebPortTestSample.txt)  
4、为了提高转换的效率，建议单次上传的文本文件不要超过2000行。

文件名:

备注：  
目前支持自动转换的常用邮箱列表如下  
@gmail.com @sina.com @sina.cn @vip.sina.com @qq.com @139.com @eyou.com @tom.com @21cn.com @163.com @126.com @yeah.net @vip.163.com @yahoo.com @yahoo.ca @yahoo.co.jp @yahoo.co.uk @yahoo.com.cn @yahoo.com.hk @yahoo.cn @sohu.com @sogou.com  
如果您要转换的邮箱不在这里列表中，欢迎联系我们添加。

`,X1=`---
title: 新版群发软件自动更换IP地址的说明
date: 2012-05-30
author: 商友智能营销云软件
description: 新版本的邮件群发软件电子邮件逐个发去掉了拨号上网的模块，即自动更换IP地址的功能，因此界面上已经找不到了，主要是基于以下几个原因： 1、根据长期用户反馈的经验，经常更换IP对于SM
---
新版本的**邮件群发软件**电子邮件逐个发去掉了拨号上网的模块，即自动更换IP地址的功能，因此界面上已经找不到了，主要是基于以下几个原因：

1、根据长期用户反馈的经验，经常更换IP对于SMTP中转发送没有太大帮助，反而会造成SMTP邮箱被ISP永久封杀；  
2、随着宽带网络可用IP资源的日益丰富，好多动态IP的拨号上网用户的IP在短时间的间断之后重新获取是不变的，这使得自动更换IP失去了意义；  
3、电子邮件逐个发支持在多种类型的邮件发送服务器（SMTP，比如163、GMail、QQ邮箱等）之间自动切换，即使一个服务器封了IP，其他服务器还是可以正常投递的；IP经过一段时间后解封，则Email账号还可以正常使用。  
4、目前直连互联网的电脑越来越少，越来越多的电脑都是通过路由器拨号上网了，这使得电脑上的拨号上网功能成了摆设。

基于这些原因，群发软件自动的更换IP功能（及自动重新拨号上网）会造成一些用户使用上的迷惑，新版本去掉了这个功能。如果你是路由器拨号上网的，一定要更换IP的话，直接将路由器断电再通电即可。

`,Z1=`---
title: 优化邮件标题提高Email群发营销的效果
date: 2013-05-05
author: 商友智能营销云软件
description: 邮件群发是最常用的网络营销方式，但是起草Email标题时候还是有一些讲究的。 1、是告知而不是销售 最好的标题告诉订阅者邮件的内容是什么，而最差的标题则试图通过邮件销售产品。不要让
---
邮件群发是最常用的网络营销方式，但是起草Email标题时候还是有一些讲究的。

1、是告知而不是销售  
最好的标题告诉订阅者邮件的内容是什么，而最差的标题则试图通过邮件销售产品。不要让你的标题读起来像是广告。标题中的商业味越重，邮件被打开的可能性就越小。

2、在标题中用公司的名称  
很多研究显示，将公司名称放进发件人行和标题行中能增加打开率。JupiterResearch研究公司发现，在标题中加入公司名称能使打开率从32%增加到60%，远远超过了不加入名称的标题。  
为了实现这个功能，可以在**电子邮件逐个发**中使用一些宏定义，具体操作见[[老用户专区](/pages/legacy.html) "使用Excel格式的收件人地址列表群发电子邮件")。

3、识别  
人们之所以打开你的邮件，一个很重要原因是他们认出了你。有两种情况：他们认识发件人，并且认为过去收到的信息有价值；当然也有相反的，他们以前打开过你的邮件，但发现根本是在浪费时间，所以就把邮件删除了。  
发出去的邮件是否能够被打开，取决于你公司的声誉和你之前邮件的质量。你的标题应该在某种程度上囊括这两方面的识别。这种识别是很重要的，不管你用什么样 的标题，它通常都能产生同样的打开率。若收件人之前处理你所发邮件时获得了最佳体验，那他们会毫不犹豫地打开你的邮件。

4、在首次发送之前多测试几次  
哪一个标题能达到最好的效果？你的读者们会告诉你的——会用他们的回应告诉你的。这就是为什么你要有一个测试规划。要在几个标题中鉴定出哪个标题是最好 的，这是最困难的。事实上，几乎没有哪个邮件专家能准确地猜出哪个标题能获得最高的打开率。MarketingSherpa报道说，70%的邮件发送者会 定期测试标题。

5、将电子邮件发给你自己  
一旦你确定了标题，在正式发送之前先发给自己。它能吸引你的注意吗？和你收件箱里的其他邮件相比，它能脱颖而出吗？它看起来有趣并且值得打开吗？它看起来像垃圾邮件吗？很多时候，收件箱里的邮件和制图板里的邮件看起来是不一样的。

6、避免重复使用相同的标题  
如果一个标题之前的效果好，那也并不代表现在的效果也好，情况总是一直在变的。若你对相同的群体重复使用相同的标题，那就不要期望总能得到好的效果。因为邮件通常在订阅者的收件箱里停留好几天，给两封不同的邮件使用相同的标题会使他们被删除的更快。  
如果你每周或每月都发邮件，并且不停的使用相同的标题，那你就可能会使读者产生疲劳感。如果你的竞争者注意到你重复地使用相同的标题，他们就会猜想这个标题很成功并模仿它。那样的话，你就是和自己竞争了。

7、避免使用特定的单词  
绝对不要在标题里使用大写字母，也不要用感叹号。只要你的内容是真实的并且看起来不像垃圾邮件，大多数的顾客都会给予回应的。垃圾单词比如“免税”和 “性”一定要排除在外。但是有些不在垃圾单词清单上的单词也会大大降低标题的反应率，比如“帮助”、“折扣”和“催缴单”。

8、不要用时事通讯问题或版本号  
争端问题或版本号对读者们是没有任何作用的，它不能说明邮件内容的任何信息。还不如利用那个空间来告诉读者们邮件里写了些什么新内容。

9、偶尔用截止日期来做试验  
你也可以在一些邮件中使用紧急或截止日期。比如，在星期一的邮件上写入“还剩5天”，然后在星期四的邮件上接着写“只剩24小时”。这些标题是没有任何问题的，但是不要养成总使用截止日期的习惯。订阅者很快就会对总是让他们上气不接下气的发件人产生厌烦。

以上九条规则是在撰写邮件群发内容过程中必须要注意的。更多关于邮件群发的知识和邮件群发软件的使用问题，可参考[老用户专区](/pages/legacy.html)

出处：[商友软件官网](/)

`,J1=`---
title: 如何配置邮件群发软件的SMTP服务器
date: 2014-12-02
author: 商友智能营销云软件
description: 如何配置邮件群发软件的发送服务器呢？这是摆在使用者面前要解决的第一个问题。 我们这里只举例部分大家熟知的免费SMTP服务器列表，收费邮箱和企业邮箱因为类型众多，这里不一一例举，注册
---
如何配置**邮件群发软件**的发送服务器呢？这是摆在使用者面前要解决的第一个问题。

我们这里只举例部分大家熟知的**免费SMTP服务器**列表，收费邮箱和企业邮箱因为类型众多，这里不一一例举，注册用户如需这方面配置请直接联系我们。

【以下常见问题的答案直接链接入官方网址的帮助文档，请直接点击进入查看即可】  
【注：以下推荐的常用邮件发送服务器，如果没有特殊说明，都是不需要SSL支持的】  
【我们会不定期更新这些列表，随时调整排列顺序，越是排在前面的，综合性能越好！】

**QQ邮箱** mail.qq.com  
![](/static/images/qunfabiz-qunfa-peizhi-smtp-0.gif)  
国内用QQ邮箱速度稳定，限制是新的QQ邮箱要激活后14天可用SMTP服务。  
QQ邮箱的SMTP服务器也已经支持SSL连接了，因此配置**QQ邮箱**时候SSL也是可以选择的。[  
QQ邮箱（8888888@qq.com）要支持SMTP，需要简单的设置，点击这里查看如何设置！（注：新激活邮箱的QQ用户要14天之后才能使用SMTP）](http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=28&&no=166)

**Gmail** 申请和使用 http://www.gmail.com \\[Gmail\\] 【SSL】  
![](/static/images/qunfabiz-qunfa-peizhi-smtp-1.gif)  
[Gmail（xxxx@gmail.com）需要先Web登录开通POP3才可使用，如何操作？](http://mail.google.com/support/bin/answer.py?answer=13273&topic=13293)  
Gmail帐号被禁止了怎么办？  
遇到客户端不接受用户名密码的情况请参考这里的帮助[http://mail.google.com/support/bin/answer.py?answer=14257](http://mail.google.com/support/bin/answer.py?answer=14257)  
出现这种情况一般都是由于Google账户被锁定造成的（备注：是Google账户，而非只是Gmail账户），需要到这里解锁[https://www.google.com/accounts/DisplayUnlockCaptcha](https://www.google.com/accounts/DisplayUnlockCaptcha)。之后客户端基本可以正常收发Email了。

**雅虎邮箱** Yahoo.com  
雅虎邮箱（包括Yahoo.cn，Yahoo.com.cn）要开通SMTP功能（是收费服务），需要先定制来电提醒服务（待定）。  
Yahoo.com的免费邮箱是现在已经是开通SMTP服务的，可以发送邮件，但是收邮件还是要登录到他们网页上，对应的SMTP信息如下：  
服务器：smtp.mail.yahoo.com  
用户名：@前面部分，或者整个Email地址。  
建议使用SSL支持。  
雅虎邮箱其他可用邮箱还包括：**yahoo.co.jp、yahoo.ca、yahoo.co.uk、yahoo.com.hk**等，他们都是相互独立的邮件服务器，具体SMTP服务器设置见他们网站上提供的帮助文档，本站收集的部分仅供参考。

**AOL电子邮箱** [http://mail.aol.com](http://mail.aol.com/)  
【备注：AOL邮箱服务器在国外，软件配置界面上的“测试”按钮有时候会显示超时，不影响正常使用。】  
英文版的，不过还是比较稳定的。  
![](/static/images/qunfabiz-qunfa-peizhi-smtp-2.gif)

**新浪邮箱 @sina.com  
**  
【最新：最近sina邮箱调整过的，单次连接发送数建议设置为1；新浪邮箱发QQ邮箱最近经常出现丢失或者拒绝投递现象，因此成功率较低，使用sina邮箱发QQ邮箱需要注意。】  
[Sina邮箱（sina.com）请先在web页面登录邮箱，确认邮箱设置的“POP/SMTP设置”开启；新浪VIP邮箱不需要此操作。](http://mail.sina.com.cn/help2/client01.html)  
最新申请的新浪邮箱，除了网页激活POP3 [商友软件官网](/) SMTP选项外，至少还要在网页邮箱中发送一封Email，然后才可以再客户端使用SMTP服务，省略这个步骤发出去的邮件一般都是被新浪服务器自动丢弃的（在没有退信的情况下）。  
密码设置不要过于简单，不要是123456以及111111之类的密码，相对复杂一些。  
![](/static/images/qunfabiz-qunfa-peizhi-smtp-3.gif)  
——————————-  
**新浪CN邮箱 @sina.cn**  
服务器 smtp.sina.cn  
用户名 @前面部分  
Sina.cn邮箱需要网页登陆，在右上角Email地址下面，选择“设置”，进入“账户”这个选项页，找到“POP3/SMTP服务”，将状态设置为“开启”，保存并退出。

Mail邮箱（英文）  
申请地址为：[http://www.mail.com](http://www.mail.com/)  
配置的SMTP信息如下：  
服务器：smtp.mail.com  
用户名：@前面部分，或者整个Email地址。  
建议使用SSL支持。

**GMX邮箱** [http://www.gmx.com](http://www.gmx.com/) （最新推荐）  
【备注：GMX新版本服务器目前是同时支持SSL，因此不一定要选择SSL连接】  
为英文邮箱，很稳定，可以到主页注册。注册后，在我们软件中输入的信息为：  
SMTP服务器地址是：mail.gmx.com，用户名为 xxxx@gmx.com。  
![](/static/images/qunfabiz-qunfa-peizhi-smtp-4.gif)

**中国移动139邮箱** [http://www.139.com](http://www.139.com/)  
[139邮箱（中国移动）不需要激活SMTP，手机注册登录之后即可使用。](http://www.139.com/)  
![](/static/images/qunfabiz-qunfa-peizhi-smtp-5.gif)

**网易邮箱，包括163.com 126.com yeah.net**  
（1）网易邮箱已经重新开发SMTP服务，有的账号申请后 还是需要先Web网页登录激活SMTP/POP服务，但并不是所有账号都需要，因此建议每个都检查。  
（2）重新开放的网易邮箱SMTP服务，对大批量邮件群发的 限制更加严格，性能一般。  
（3）网易系列邮箱，包括126、163、yeah以及域名邮箱，对邮件内容的限制过于苛刻，比如邮件内容中出现商业敏感词汇以及http://等内容，或者携带附件，都是投递不出去的；同时，包含这些内容的邮件也很难投递进去。  
（4）126、163、yeah虽然域名不同，但属于同一个邮箱服务器，对于群发垃圾邮件的拦截是相通的。  
（5）激活SMTP之后，至少在网页上发送一封Email给其他邮箱，内容不限，不然客户端直接发送出去的邮件很容易丢失。  
（6）密码设置不要过于简单，不要是123456以及111111之类的密码，相对复杂一些。  
![网易邮箱163](/static/images/qunfabiz-qunfa-peizhi-smtp-6.gif)

![网易126邮箱](/static/images/qunfabiz-qunfa-peizhi-smtp-7.gif)

![网易Yeah邮箱](/static/images/qunfabiz-qunfa-peizhi-smtp-8.gif)

**台湾PCHome邮箱** [http://mail.pchome.com.tw](http://mail.pchome.com.tw/)  
【最新：台湾邮箱投递大陆的邮箱邮件丢失比较大，其他地区暂时没发现有异常】  
SMTP服务器：smtp.pchome.com.tw 用户名是@前面的部分。  
![](/static/images/qunfabiz-qunfa-peizhi-smtp-9.gif)

**天涯邮箱 tianya.cn**  
申请地址：[http://mail.tianya.cn/](http://mail.tianya.cn/)  
SMTP服务器：smtp.tianya.cn  
用户名：yourid@tianya.cn

**GaWab** 申请地址 [http://www.gawab.com](http://www.gawab.com/)  
SMTP地址是：smtp.gawab.com 用户名是@前面的部分。

**Foxmail.com** [http://www.foxmail.com](http://www.foxmail.com/) 【最新的服务器不支持申请新账号】  
Foxmail.com邮箱和QQ.COM邮箱是同一个服务器的不同域名邮箱。  
Foxmail账户被锁定的解除步骤  
![](/static/images/qunfabiz-qunfa-peizhi-smtp-10.gif)

**中国经济网** [http://freemail.ce.cn](http://freemail.ce.cn/)  
SMTP：freemail.ce.cn  
用户名：xxxx@ce.cn （带@后面的部分）

**Hainan.net**  
可以直接申请并使用SMTP服务，[申请页面点击这里](http://mail.hainan.net/webmailhainan/register1.jsp)；[SMTP配置帮助点击这里](http://mail.hainan.net/webmailsea/help_foxmail.htm)。  
SMTP服务器：smtp.hainan.net  
用户名：yourid@hainan.net

**3126免费邮箱** [http://www.3126.com](http://www.3126.com/)  
POP及SMTP地址分别为pop3.3126.com、smtp.3126.com

\\===========参考内容：客户端投递性能一般的服务器=========================  
部 分邮箱服务器的帮助文档虽然说明提供SMTP/POP3服务，但是由于过于严格的病毒扫描、垃圾邮件监控等机制，导致从客户端投递Email的功能形态虚 设，因此总体性能表现较差，比如tom、sohu、21cn等。这类服务器可以适当使用，建议适当配置一些进去比例不要太大，单次连接发送数设置为1~2 。

**搜狐邮箱**  
Sohu邮箱是支持SMTP的，但是很不稳定，包括sogou邮箱，和21cn以及tom一样，不推荐使用。  
通过这些邮件服务器发送邮件基本都被他们kbsj杀毒软件阻止下来了。  
如果您发送失败，可[到这里查询IP地址是否被封掉](http://mail.sohu.com/info/queryip/)；[到这里查询你的帐户是否在黑名单中](http://mail.sohu.com/info/querysender/)。  
搜狐的VIP邮箱基本都是可以免费试用的（是试用卡），可以到[SOHU闪电邮主页](http://mail.sohu.com/)申请。

**K65免费邮箱** [http://www.k65.net  
](http://www.k65.net/)SMTP服务器为www.k65.net

**和讯免费邮箱** [http://mail.hexun.com](http://mail.hexun.com/)  
SMTP服务器为smtp.hexun.com

【常见问题集锦，更多FAQ请参考 

![邮件群发](/static/images/qunfabiz-qunfa-peizhi-smtp-11.gif) – ![免费下载邮件群发](/static/images/qunfabiz-qunfa-peizhi-smtp-12.gif)  
![邮件群发软件](/static/images/qunfabiz-qunfa-peizhi-smtp-13.gif) – ![邮件群发工具](/static/images/qunfabiz-qunfa-peizhi-smtp-14.gif)

\\=======邮箱注册的说明，不要急于求成============  
不建议用一些自动工具短时间内申请大批量邮箱帐号，目前的邮件服务器，不单单发送过程中防垃圾，Email申请过程中同样有垃圾邮件预防机制，并且直接影响到申请的Email帐号将来的发送。  
常规情况下，维持50个左右可用的SMTP账号，每天可以正常发送一万封左右；参考常见问题（FAQ）和使用手册（Manual）的要求配置，这些账号第二天大部分还是可以继续使用的，因此可以适量增加新的SMTP账号，而不需要每天大批量增加。

\\=======部分SMTP提供记录客户端发送邮件的问题==============  
不要使用邮件服务器网站自动的记录SMTP邮件发送记录的功能，这类功能为发送服务器判断该帐号是否大量发送邮件提供了直接证据。  
另，这些记录的过程与现实的过程也不是同步，特别是短时间内大批发送的时候，投递队列堵塞，延迟很大，甚至直接丢弃。

爱博邮件群发系统个人版的配置：  
《[第一步：配置爱博邮件群发系统个人版的邮件发送服务器](http://hi.baidu.com/group_email/blog/item/a3d0dc2b4ed0822bd42af1de.html)》  
[http://hi.baidu.com/group\\_email/blog/item/a3d0dc2b4ed0822bd42af1de.html](http://hi.baidu.com/group_email/blog/item/a3d0dc2b4ed0822bd42af1de.html)  
爱博邮件群发系统专业版的配置：  

参考资料：[http://www.aboter.com/text.aspx?catalog=faq&type=GroupMail&id=4](http://www.aboter.com/text.aspx?catalog=faq&type=GroupMail&id=4)  
\\====支持外链的网络相册===  
发送多媒体邮件的时候如果邮件中包含图片，如果没有自己的网站或空间，那么需要支持外链的网络相册。  
[http://www.photobucket.com](http://www.photobucket.com/)  
比较稳定的相册 （英文）

`,Y1=`---
title: QQ企业邮箱在群发软件中的设置
date: 2012-10-15
author: 商友智能营销云软件
description: QQ企业邮箱支持在客户端收发电子邮件，使用前，也是要按照普通QQ邮箱的方法，网页登陆进去检查是否已经开通了SMTP服务。具体方法请参考本站其他文档。 开通了SMTP服务的QQ企业邮
---
QQ企业邮箱支持在客户端收发电子邮件，使用前，也是要按照普通QQ邮箱的方法，网页登陆进去检查是否已经开通了SMTP服务。具体方法请参考本站其他文档。  
开通了SMTP服务的QQ企业邮箱在邮件群发软件-电子邮件逐个发中的设置如下图所示。

![](/static/images/qunfabiz-qunfa-qq-exmail-smtp-0.png "qq企业邮箱邮件群发")

需要注意的是画圈的地方要填写整个Email地址，而不是@符号前面的部分。

如果你需要使用它们的SSL服务（加密网络连接），需要在“使用SSL”前打勾，端口会自动变更为465，如下图画圈部分所示。

![](/static/images/qunfabiz-qunfa-qq-exmail-smtp-1.png "支持SSL的QQ企业邮箱群发邮件")

下载最新版本的“电子邮件逐个发”请到产品主页 [商友软件官网](/) 上查询。

`,ep=`---
title: 邮件群发之QQ群内推广2014版本
date: 2014-04-09
author: 商友智能营销云软件
description: 2014年QQ群中进行邮件群发营销的方法和注意事项，希望对广大商友邮件群发营销软件的用户有所帮助。 一、寻找QQ号码集中的地方 这是最困扰大家的一个问题，其实不是很难，只是平时很少
---
2014年QQ群中进行邮件群发营销的方法和注意事项，希望对广大商友邮件群发营销软件的用户有所帮助。

一、寻找QQ号码集中的地方

这是最困扰大家的一个问题，其实不是很难，只是平时很少有人注意而已。在最新版本的QQ软件（如QQ 2013）中，打开QQ群，如下图，  
![QQ群内邮件群发](/static/images/qunfabiz-qunfa-qq-qun-2014-0.png)

进入论坛之后选择右上角的“旧版本群论坛”，如下图：  
![QQ邮件群发](/static/images/qunfabiz-qunfa-qq-qun-2014-1.png)

进入旧版本群论坛之后，可以看到论坛总人数汇总的地方，如图：  
![QQ邮件群发](/static/images/qunfabiz-qunfa-qq-qun-2014-2.png)  
点击进去之后，就看到了所有会员列表了，剩下的操作就是Ctrl + C（复制），然后找个地方Ctrl + V（粘贴），你懂的，不细说了。

二、提取QQ号码

这时候你会发现其中的昵称夹杂在QQ号码中，很不工整，看起来也不舒服，而我们只想要QQ号码。怎么办？可以使用一个转换工具，将你刚才Ctrl + C（复制）获取的内容，在这里Ctrl + V（粘贴）。然后点击提取就可以了。

  
（批量提取数字的网页小工具）

通过以上操作过程，你会发现其中一些明星不是QQ号码的，删除掉他们，然后进入第三步操作。

三、追加@qq.com的尾巴

这一步骤的操作大家都很熟悉了，不赘述，毕竟用了那么多年了。

  
（将QQ号码变成QQ邮箱）

经过以上三个步骤，一份有价值的QQ邮箱列表就产生了，剩下发送邮件的过程，依然是老方法，在商友邮件营销软件（电子邮件逐个发）中导入对应收件人Email，及以上步骤提取到的内容，然后群发就可以了。

`,tp=`---
title: 哪些因素决定邮件群发的速度
date: 2013-05-05
author: 商友智能营销云软件
description: 一般情况下，电子邮件逐个发 每个小时可以发送2000 ~ 5000封左右，这个依赖于： （1）邮件的大小，主要是附件的大小，附件越大，发送速度越慢，建议邮件不要超过10K； （2）
---
一般情况下，**电子邮件逐个发** 每个小时可以发送2000 ~ 5000封左右，这个依赖于：  
（1）邮件的大小，主要是附件的大小，附件越大，发送速度越慢，建议邮件不要超过10K；  
（2）你连接到SMTP服务器的网络速度，网络连接速度越快，发送越快；  
（3）正确的邮件地址的比率，错误的或者坏Email地址越多，速度越慢。  
（4）邮件发送服务器（SMTP）的性能，常规应维持大于50个可用的SMTP账号。

另： 不是说发送速度太快了，就会被服务器封掉；在我们的[邮件群发软件](/pages/legacy.html "邮件群发软件")中，你可以配置多个SMTP服务器账号，我们的群发软件会自动交替使用，这样的 话，在每个SMTP服务器看来，你的发送就不快了，你也就不容易被封掉。

请不要询问所谓的每天成功发送3-5万封邮件太少的问题，这是一个比较切合实际的 发送数量。

那些宣称每天可以发送几十万几百万邮件的软件，其真实性有待商榷，大量发出的邮件基本上会被收信邮局全部拦截，或者发件局拒绝投递。

如果提高每 个邮箱的单次发信数量和发信数上限，软件每天可以成功投递邮件10万封左右。但这样的操作有可能会导致发信邮箱被邮局封锁，不建议用户采用。

对于尺寸较大的邮件，特别是包含附件、以及大图片的情况，可以参考《[给Email瘦身，提供邮件群发营销效率](/posts/qunfabiz-qunfa-email-shoushen.html)》，适当减小邮件的大小。

`,np=`---
title: 为什么网页格式邮件中的图片有时要确认后才能显示
date: 2011-12-23
author: 商友智能营销云软件
description: 这是一些邮件阅读客户端正常的安全提示，不是因为这封email是群发邮件而引起，用同一个发送邮箱，即使直接去发送，也可能会出现这类提示的。 邮件阅读客户端有很多，比较常用的如Hotm
---
这是一些邮件阅读客户端正常的安全提示，不是因为这封email是**群发邮件**而引起，用同一个发送邮箱，即使直接去发送，也可能会出现这类提示的。

邮件阅读客户端有很多，比较常用的如Hotmail、Gmail邮箱、网页版的QQ邮箱、网页版的网易邮箱（163、126等），而安装在客户端的，如Outlook Express、Foxmail Client、Windows Live Mail等。

下面分析几个案例：  
![](/static/images/qunfabiz-qunfa-qunfa-tupian-0.gif)

上图是一封从淘宝发过来的HTML格式邮件，邮件内容中包含图片和链接。由于阅读这封Email的Windows Live Mail使用默认的安全性设置，图片不能正常显示。

下面的截图是一个团购网站发过来的Email，同样是多媒体邮件，出现安全性提示。  
![](/static/images/qunfabiz-qunfa-qunfa-tupian-1.gif)

再举一个Apple发过来的广告邮件，如下图，同样存在内容显示被安全提示的现象。

![](/static/images/qunfabiz-qunfa-qunfa-tupian-2.gif)

随 着各种邮件阅读工具的功能改善，以及对安全性要求的不断提高，出现这类“显示图片”提示是很正常的，因为这些多媒体内容总可能包含木马、病毒以及其他可执 行代码，而一旦包含这些东西，会感染用户电脑。因此，你给默认的人发送Email，邮件阅读工具友善提醒收件人，是合乎情理的。

另一方面，如果发件人在收件人的通讯录或者白名单中，一般不会有这个提示，因为邮件阅读工具认为来自熟人的邮件内容是安全的。

我们最常见的网页登陆QQ遇到的也是一个问题，如下图：  
![](/static/images/qunfabiz-qunfa-qunfa-tupian-3.gif)  
只有发件人在收件人的可信列表，比如QQ邮箱通讯录[商友软件官网](/)联系人或者QQ好友中情况下，图片才会自动显示出来。  
这是可以理解的最基础的安全常识，和是不是**群发的电子邮件**，以及用哪个软件发送的没有关系。  
换而言之，任何软件发出去都会有这个提示，和**群发软件**没有关系，这是发件人不在白名单中这个可观因素所决定的。

从上述分析也可以看出，  
（1）出现这类安全性提示不是邮件发送方可以控制和调配的，与邮件群发与否没有直接关系；  
（2）是否发送Html格式邮件要根据自己内容需要来设计的，没有必要过滤这个提示而不发送Html邮件。

`,up=`---
title: 发件人Email与发信邮箱的关系
date: 2015-05-16
author: 商友智能营销云软件
description: 初次使用电子邮件逐个发的用户，容易混淆发件人Email与发信邮箱的关系。 1、发件人Email是在软件主界面的上部偏左一点的地方设置，如上图所示，这个地方填写的Email地址是用来
---
![](/static/images/qunfabiz-qunfa-set-email-sender-0.gif "设置邮件群发软件发信邮箱")

初次使用电子邮件逐个发的用户，容易混淆发件人Email与发信邮箱的关系。

1、发件人Email是在软件主界面的上部偏左一点的地方设置，如上图所示，这个地方填写的Email地址是用来接收回复邮件的。为了能够在收信人点击回复之后能将这个Email地址自动放到对方收件人的Email地址栏，所以邮件发出去的时候这个Email地址经常出现在发件人这一栏，因此这里称之为“发件人Email”并不矛盾。

2、发信邮箱是点击软件左上角那个账户设置图标弹出的新窗口中设置的，他们真实的邮件外送邮箱。为了大量群发电子邮件，这里往往需要设置很多账号，而邮件群发的用户又不可能逐个去检查这些邮箱来确定是否有回复邮件，因此又回到第一个问题，即收件人放收到邮件之后回复到哪里，即“发件人Email”。

这是标准的SMTP协议的规范定义，但是有少量邮件客户端，包括网页版本的邮件阅读工具，并不按照这个规范来，偶尔也会出现将真实的发送邮箱做为回复时候的收件人的情况，这不是主流。

`,ip=`---
title: 按照地区搜索手机号码与归属地有什么关系
date: 2012-09-29
author: 商友智能营销云软件
description: 在商友手机号码搜索机中，也可以直接根据地区和行业搜索手机号码。但是在搜索的过程中，大家会发现搜索出来的号码归属地与所设置的地区不一致的情况。如下图： 这不是使用上设置的问题，也不是
---
在商友手机号码搜索机中，也可以直接根据地区和行业搜索手机号码。但是在搜索的过程中，大家会发现搜索出来的号码归属地与所设置的地区不一致的情况。如下图：

![](/static/images/qunfabiz-qunfa-shoujihaomaheguishudi-0.png "手机号码归属地")

这不是使用上设置的问题，也不是软件的BUG。大家看过商友手机号码搜索机的帮助手册之后不难发现，地区和行业搜索，最终都是转换为关键词，然后使用百度搜索去逐级扫描网页。因此，只要是网页上出现的，符合手机号码规则的字符串，都会被提取出来。这个按照地区搜索的工作原理。

而右侧显示的手机号码的归属地和运营商，是根据软件自动的当前最新的手机号码段分配的数据库来判断的。只需要手机号码的前7位数字，就可以做出这个判断。对于移动公司新增的一些号段，手机号码搜索软件中还没有添加进去，因此这时候会出现未知的情况。

因此，这个两者同样是地区，但是没有联系的。未来版本的手机号码搜索软件中，我们会在导出过程中增加可以按照“归属地”过滤并导出手机号码的功能，方便大家更精确的提取号码。

`,sp=`---
title: 群发软件：批量转换、导入和导出发送邮箱账号列表
date: 2012-06-07
author: 商友智能营销云软件
description: 一、批量转换TXT格式的发送邮箱列表为Excel格式 收集好你的发送邮箱列表，做到一个文本文件（.txt）中，格式如下： 邮箱地址|密码 例如： test1@gmail.com|1
---
**一、批量转换TXT格式的发送邮箱列表为Excel格式**

收集好你的发送邮箱列表，做到一个文本文件（.txt）中，格式如下：  
邮箱地址|密码  
例如：  
test1@gmail.com|11111111  
66666@qq.com|123456abc  
test1@163.com|88888888  
如果不明白，[可以在这里下载样本](http://d.qunfa.biz/TransferSmtp/TransferSmtpWebPortTestSample.txt)

然后打开邮箱账号批量转换器，如下：  
[[老用户专区](/pages/legacy.html))

![](/static/images/qunfabiz-qunfa-smtp-transfer-import-export-0.gif "邮件群发")

上传刚才的文本文件，然后下载转换好的Excel文件。

**二、导入发送邮箱账号列表**

在软件的菜单 ==>> 工具 ==>> 批量导入SMTP账号 中，启动SMTP批量导入管理器。

![](/static/images/qunfabiz-qunfa-smtp-transfer-import-export-1.gif "邮件群发软件")

选择刚才转换好的Excel文件，软件会自动读取表单，邮箱地址、服务器、用户名等复杂的字段，都会自动匹配，如下图：

![](/static/images/qunfabiz-qunfa-smtp-transfer-import-export-2.gif "邮件群发")  
点击导入即可。

**三、导出发送邮箱账号列表**

点击电子邮件逐个发主界面上第一个大图标，进入SMTP账号管理程序，在第一行的中间位置，选择导出为Excel文件即可。如下图所示：

![](/static/images/qunfabiz-qunfa-smtp-transfer-import-export-3.gif "邮件群发软件")

通过以上方法，还可以实现发送邮箱列表的备份与恢复，提供邮件群发营销的效率。

`,rp=`---
title: 为什么要给群发的电子邮件瘦身
date: 2012-11-12
author: 商友智能营销云软件
description: 我们都知道，邮件群发的Email数量是数以千计，或者数以万计的，每封邮件的内容如果太大，必然会放缓Email投递速度，降低邮件群发的效率，因此，为什么要给群发的电子邮件瘦身，是使用
---
我们都知道，邮件群发的Email数量是数以千计，或者数以万计的，每封邮件的内容如果太大，必然会放缓Email投递速度，降低邮件群发的效率，因此，为什么要给群发的电子邮件瘦身，是使用“电子邮件逐个发”进行邮件营销过程中一个必须理解的问题。

或许有人会说，现在都是光纤入户，网速好处都是20M，或者40M，甚至更大，为什么还要给Email瘦身减肥呢？其实这些人忽略了一个重要的问题，就是这些光纤入户的速度，是下行网速，即从外部服务器向你的电脑传输数据的速度；而群发电子邮件的过程，是从你的电脑向外部服务器传输数据的过程，是上行的速度；而这个速度，都是512K/秒。

512K，那也可以的啊，没有必要瘦身？完全不是，电信公司标示的网速，都是按照比特为单位计算的，即bit；而我们电脑上表示的网速，是用字节来计算的，即byte。他们之间的换算关系是8:1，及8bits = 1byte。那么，512K的网速，就是我们平时电脑上看到的64KB/秒。而且还有注意，这是最最理想的一个上行网速，即理论最大值，永远也达不到的值。

基于这个计算，我们以1MB大小的邮件为例，可以计算一下，投递一封邮件大概需要花费的时间大概是20秒左右，实际投递肯定在一分钟以上。所以一个小时可以投递出去的邮件数量约100封左右，这个速度是很慢的。

那么，如何给这些大的电子邮件瘦身呢？邮件群发软件**电子邮件逐个发**在已有的说明文档中已经做了阐述，《[大附件和大图片的邮件群发解决方案](/posts/qunfabiz-qunfa-mass-attach-and-big-image.html)》，不是本文讨论的为什么要给Email瘦身的问题，这里就不再赘述的，需要了解的话请参考该文档。

`,op=`---
title: 隐藏发件人选项使用的注意事项
date: 2012-03-07
author: 商友智能营销云软件
description: 并不是所有邮箱都支持隐藏发件人投递Email的。到目前为止我们收集的情况如下： bn163：提示拒绝投递（备注：是bn163，不是163）； sina：无提示，直接丢弃； gmai
---
并不是所有邮箱都支持隐藏发件人投递Email的。到目前为止我们收集的情况如下：

bn163：提示拒绝投递（备注：是bn163，不是163）；

sina：无提示，直接丢弃；

gmail：不受设置影响，依旧显示真实发件人；但是可以在服务器端设置，具体操作方法见本文附录；

QQ邮箱：如果发件人和回复邮箱同为QQ邮箱，两者邮箱必须一致，否则拒绝投递；因此，如果是用QQ邮箱**群发**Email并且隐藏真实发送地址，回复地址只要不是QQ邮箱就可以了

\\==============================================  
Gmail邮箱隐藏真实发件人的设置步骤如下图所示：

![Gmail邮箱设置](/static/images/qunfabiz-qunfa-yincang-zhenshi-fajianren-0.png)  
（1）  
![Gmail邮箱隐藏真实发件人](/static/images/qunfabiz-qunfa-yincang-zhenshi-fajianren-1.png)  
（2）  
![](/static/images/qunfabiz-qunfa-yincang-zhenshi-fajianren-2.png)  
（3）  
![](/static/images/qunfabiz-qunfa-yincang-zhenshi-fajianren-3.png)  
（4）

`,lp=`---
title: 邮件营销的九大误区
date: 2012-08-23
author: 商友智能营销云软件
description: 1、 漫无目标的投递 花大量时间从网上找准客户的电子邮件地址，也不管是不是自己的目标受众，就不加区分地采用群发的形式向大量陌生邮件地址投递广告，不但收效甚微，而且变为垃圾邮件，损害
---
1、 漫无目标的投递

花大量时间从网上找准客户的电子邮件地址，也不管是不是自己的目标受众，就不加区分地采用群发的形式向大量陌生邮件地址投递广告，不但收效甚微，而且变为垃圾邮件，损害自身形象。这种撒网式的营销方式不可取，原因是投入产出比严重失衡。而且，把产品信息发送给“错误”的人将不会为企业带来任何销售，其结果还会严重误导对自己营销邮件功效的正确判断。

2、发送频率过于频繁

不要向同一个邮件地址发送多封同样内容的信件，当对方直接或者间接的拒绝接受mail的时候，绝对不可以再向对方发送广告信件，要尊重客户。同样内容的邮件，每个月发送2-3次为宜，不要错误地认为，发送频率越高，收件人的印象就越深。过于频繁的邮件“轰炸”，只会让人厌烦，如果一周重复发送几封同样的邮件，肯定会被列入“黑名单”，这样，你便永远失去了那些潜在客户，你的E-mail营销计划只能是赔钱赚吆喝。

3、 邮件没有主题或主题不明确

电子邮件的主题是收件人最早可以看到的信息，邮件内容是否能引人注意，主题起到相当重要的作用。邮件主题应言简意赅，以便收件人决定是否继续阅读邮件内容。

有的人自作聪明地认为，别出心裁的主题更能引人注意，采用和内容毫不相干的主题，甚至故弄玄虚，结果适得其反。想象一下，假如收到一封没有主题的邮件，收件人肯定会在第一时间直接删除掉，根本就不会打开。

4、隐藏发件人姓名

这种邮件给人的感觉是发件人在做什么见不得人的事情，否则，正常的商务活动为什么害怕漏出自己的真面目呢？这样的邮件，其内容的可信度有多高呢？还有一些邮件，把发件人写成“美国总统”、“你的朋友”、“漂亮女孩”等灰欢恪Ｆ涫担蘼墼跹弊埃愕姆⒓刂坊故腔岜欢苑椒奖愕夭槌隼础?

5、邮件内容繁杂

邮件宣传不同于报纸杂志等印刷品广告，篇幅越大越能彰显企业的实力和气魄。电子邮件应力求内容简洁，客户时间宝贵，在看邮件的时候多是走马观花，所以需用最简单的内容表达出诉求点，充分吸引客户的兴趣，如有必要，可以给出一个关于详细内容的链接（URL），收件人如果有兴趣，会主动点击你链接的内容，否则，内容再多也没有价值。而且，对于那些免费邮箱的使用者来说，因为有空间容量限制，太大的邮件肯定是被删除的首选对象。

6、邮件内容采用附件形式

有些发件人为图省事，将一个甚至多个不同格式的文件作为附件插入邮件内容，自己省事了，却给收件人带来很大麻烦。

由于每人所用的操作系统、应用软件会有所不同，附件内容未必可以被收件人打开，例如你的附件是POWERPOINT格式的文档，而客户根本没有安装这种软件，那么你的附件有什么价值呢？而且，即使有同样的应用软件，有经验的人都了解，打开附件毕竟是件麻烦的事，尤其对于自己不甚感兴趣的邮件，才懒得打开它呢！所以，最好采用纯文本格式的文档，把内容尽量安排在邮件的正文部分，除非插入图片、声音等资料，请不要使用附件！

7、邮件格式混乱

虽然说电子邮件没有统一的格式，但作为一封商业函件，至少应该参考普通商务信件的格式，包括对收件人的称呼、邮件正文、发件人签名等因素。我们时常可以见到这样的电子邮件，“我公司是生产xxx的企业，质量上乘，价格优惠，欢迎选购。”这样的邮件虽然内容精减，但是对收件人不够尊重，如果你收到这样的邮件，会购买对方的产品吗？

8、不及时回复邮件

评价邮件营销成效的标志之一是顾客反应率，有客户回应，当然是件好事，理应及时回复发件人。然而并非每个公司都能做到这一点。可以想象，一个潜在客户给你发出了一封关于产品询问的邮件，一定在急切地等待回音，如果等了两天还没有结果，他一定没有耐心再等下去，说不定早就成了你的竞争对手的客户。

9、对主动来信的顾客抬高价格

打开收件箱，发现有一封顾客主动发来的订购函，如果你认为顾客是选定了你的产品，可以对其索要高价，那你就大错特错了！因为在互联网这个开放的大市场里，同类产品的供应者总是很多，一般来说，顾客会同时向多个厂家发出同样的询问信件，他会对比各家产品的性能和价格，如果你的报价偏高，你绝对争取不到这个客户！

原文地址： 转载请注明出处。

`,ap=`---
title: 邮件群发和群发垃圾邮件
date: 2013-03-24
author: 商友智能营销云软件
description: 作为网络营销重要途径之一，邮件群发依然保持在旺盛的生命力，尽管微信、微博等新的推广方式层出不穷。但是，邮件群发过程中，无目标的邮件群发和未经许可的邮件群发，都属于发送邮件垃圾的范畴
---
作为网络营销重要途径之一，邮件群发依然保持在旺盛的生命力，尽管微信、微博等新的推广方式层出不穷。但是，邮件群发过程中，无目标的邮件群发和未经许可的邮件群发，都属于发送邮件垃圾的范畴的，是不可取的。

为了界定邮件群发和群发垃圾邮件，需要从以下几个方面分析。

1、邮件的发送是经过用户许可或用户主动要求订阅的，这是普通的邮件群发行为，而垃圾邮件则是广告主对主观收集或买来的邮箱地址，未经对方同意就进行大量群发。

2、群发垃圾邮件只知道一味群发内容，而正常的邮件群发会借助站长邮件宝（www.qunfa.co）等统计分析工具不断提高营销效果。

3、正常的邮件群发行为，是允许收件人自由退订的。

4、邮件群发行为要保证接收者的信息安全，不会以任何方式出售或是分享给第三方，否则就属于群发垃圾邮件的范畴了。

5、邮件群发行为是有规律可循的，比如具体的发送周期或者发送时间，邮件内容对用户来说有一定价值，而垃圾邮件则不讲究这些。

因此，只有正确区分邮件群发和群发垃圾邮件两者的区别，才能成为邮件群发营销活动中的大赢家。

`,cp=`---
title: 电子邮件逐个发-邮件群发软件-常见问题（FAQ）
date: 2014-08-19
author: 商友智能营销云软件
description: 现在好多邮箱发一阵就给封了，你们的怎么解决？ 不是说发送速度太快了，就会被服务器封掉；“电子邮件逐个发”作为一款功能强大的邮件群发软件，支持配置多个SMTP服务器账号，群发邮件过程
---
现在好多邮箱发一阵就给封了，你们的怎么解决？  
不是说发送速度太快了，就会被服务器封掉；“电子邮件逐个发”作为一款功能强大的邮件群发软件，支持配置多个SMTP服务器账号，群发邮件过程中会自动交替使用，这样的话，在每个SMTP服务器看来，你的发送就不快了，你也就不容易被封掉。  
目前主流的支持SMTP发送的邮箱，不论是免费的还是收费的，每天的发送量大概在100到400左右，当然，有一些VIP邮箱会多一些，但也不会差得太 多；申请了一批Email（比如20～50个），注意配置进入我们的邮件群发软件专业版，每天适当控制每个Email帐号（即发送服务器）发送200封左 右；适可而止，不要过分发送，一般会被发送服务器封掉帐号或者IP的；这样的话，配置30个发送服务器，则每天大概发送6000封即可停止，这样第二天你 这些帐号大部分还是可以继续使用的，以此类推。  
另外通过一些高级选项可以适当避免被封，但是只有注册版本才能进行这方面的设置，试用和体验版本基本不涉及到这些问题。  
需要指出的是，每个帐号每天平均发送200封是基于配置的可用发送服务器大于50个，不是说您配置了几个发送服务器进去，让他们每个连续平均发送200封 的。总的原则是，发送间隔越大，单个帐号发信速度越慢，帐号被封的可能性越小；短时间内大批量发送邮件，比如五分钟内单个帐号发出50封，那么这个时候帐 号可能会服务器暂时禁用，而造成后续发送出现“无法连接SMTP”的情况。因此，需要根据自己的邮件内容、网络速度等因素，在发送速度和稳定性之间寻找一 个平衡点。

不断变换IP可以减少邮件群发中的垃圾邮件吗？会不会提高发送成功率？  
1、根据我们做邮件群发的经验，变换IP发送非但没有效果，而且容易造成发送帐号被永久性禁用。  
2、我们都知道，一般上网用的IP是动态分配的。试想，邮件服务器将你的IP地址封杀了，你换了IP，这个IP就会被分配到其他上网用户那里。为什么呢？ 因为这个IP如果没有被其他上网用户占用，那么你下次拨号上网的时候，交换机还是会优先将这个IP给你的。所以，你得到了其他IP，原来的IP肯定已经给 别人用了。这是基于前面所述的原因，群发性能好的邮件发送服务器（SMTP）都不会以封IP左右限制邮件群发的手段，因为这样做的代价是殃及无辜的上网用 户。  
3、目前市面上好多邮件群发软件都号称可以变化IP，主要方式有两种：（1）不断拨号上网，要求软件运行的电脑是直接连接在电信或网通的ADSL Modem上，如果用户是通过路由器或其他局域网上网，则这个功能无效；（2）使用代理服务器连接出去，这种方式基本上行不通，因为现在互联网上没有那么 多可供选择使用的代理服务器。  
4、另一方面，一个邮件发送帐号不断来自变换的IP，会让SMTP（邮件发送服务器）认为这个帐号在发送垃圾邮件，而且是恶意的，进而暂时屏蔽网段，并且永久封杀你的Email帐号。  
5、由于“[**电子邮件逐个发**](/pages/engine.html "邮件群发软件")”支持在多种类型的邮件发送服务器（SMTP，比如163、GMail、QQ邮箱等）之间自动切换，即使一个服务器封了IP，其他服务器还是可以正常投递的；IP经过一段时间后解封，则Email账号还可以正常使用。

邮件发送过程中遇到太多“MX服务器没有响应或者帐号不存在”，而这些Email地址又的确是真实存在的，如何解决？  
出现这类问题一般都是您电脑的DNS设置基本太低了，比如 192.168.1.1等。  
避免这类问题，有两种方式，选其一即可：  
1、更改电脑的DNS为常规IP地址，具体可咨询您的ISP；  
2、在我们软件的 菜单 –>> 工具 –>> 高级选项中，不要选择 “发送前检查Email是否存在”。

可以追踪Email群发的效果，统计有多少人打开邮件，有多少人点击邮件中的链接吗？  
可以追踪的，这不是邮件群发软件必须继承的功能，而且需要我们的统计服务器7×24小时一直处于在线状态，因此这个服务是按月收费的，可以统计到具体哪个Email地址，在哪个时间点，从哪个IP地址打开了哪一封Email内容。需要的客户请联系我们。

软件提示邮件发送成功，为什么对方还没收到？  
有以下几种可能：  
1、邮件正在传递途中。Email的发送过程不是同步的，各个传递中继处理需要时间；如果发送方服务器或者收信方服务器短时间内囤积了大批量邮件传递任务，也会有一定的时间去排队。这个周期最长是三天，如果三天内投递不成功，发件箱会有退信通知的；  
2、收信服务器或者收件人直接拒收或丢弃；  
3、进入垃圾邮件了。  
可以尝试的解决方式：  
1、尽可能使用种类多的发送服务器，例如，不要只是用gmail和sina这两种或者三种换来换去，适当夹杂其他的。  
2、适当延长发送时间间隔，在菜单–>>工具–>>高级选项中，将微调参数设置为 500~5000之间。

我在专业版中用不同Email发信，用户看到的发件人是一样的吗？  
举个例子，这样配置：  
![邮件群发](/static/images/qunfabiz-qunfa-youjianqunfa-faq-0.gif)  
用户看到的是 Candy Lee<你发送的email> 的形式。点击回复，就回复到help@aboter.com。  
好多邮件客户端将 Candy Lee<你发送的email> 的形式都显示为 Candy Lee，具体的email（<>里面的部分）要查看属性才能看到。  
例如你有两个Email，a和b，分别在邮件群发专业版中轮流发信，那么收件人看到的就是 Candy Lee<email a> 和 Candy Lee<email b>，有一定的差别，但是没影响。  
需要指出的是，有很多用户想实现统一的发件人，这对于大规模的邮件群发，在技术上是不可行的。

**邮件群发软件**可以限制每个SMTP帐号每天的发送数量吗？  
这个限制要在具体的操作中去控制，邮件群发软件本身是做不到，主要原因是：  
（1）每个SMTP每天的发送数量是邮件服务器端控制的，服务器管理员会根据实际情况做微调，对于服务器认为可能在发送垃圾邮件的帐号，反垃圾系统会自动减少这个数字，以实现自我保护；  
（2）不同邮件服务器所处的时区不同，因此这个数字的清零时间也有差别。国内的服务器，一般都是遵守北京时间的，午夜十二点之后清零；也有相当一部分是按照格林威治时间去计算的，而Gmail等美国服务器，一般是北京时间下午三点清零；  
（3）邮件群发软件本身无法控制软件之外某个邮箱帐号的发送，比如某个帐号每天最多发送250封，在邮件群发软件中试图发送200封，而在软件之外，已经通过其他方式发送了100封，从而使这个设置失去了意义。

每个软件的机器码都是不一样的。我若重装系统，必须用我以前的同一个软件，是吗？  
不是的，机器码是硬件绑定的，只要不换电脑，机器码就不会变。如果换电脑，请按照这里操作[[老用户专区](/pages/legacy.html))。

邮件发送的成功率是多少？  
只要正确配置了邮件发送服务器帐号，并且网络状况良好，在此前提下，成功率就是你使用的SMTP服务器的邮件发送成功率，要确切想知道的话，需要综合分析使用的SMTP服务器性能以及投递目标Email地址库的正确性。  
一般情况，没有经过验证的Email地址库，能够有80%的Email地址是正确的，已经是相当不错了。在此基础上，加上邮件发送服务器（SMTP）的队列偶尔阻塞以及少量丢失，综合下来，成功率应该在60%~80%之间。

你们的群发软件一次最多可以发多少？  
[电子邮件逐个发](/pages/engine.html)一次可以导入的收件人Email地址数量没有限制（要求是注册版，共享版一般是20封左右），但是建议不要超过65535个Email地址，因为65535是Excel文本能够容纳的最大行数，超过65535，需要到处信息时候可能会遗漏记录。  
邮件群发软件专业版是可以配置多个SMTP服务器的，在发送过程中，专业版的邮件群发软件会自动的轮流使用配置好的SMTP，从而避免了单一服务器因瞬间负载过大而出现的屏蔽或拒发等情况。

可以使用HOTMAIL MSN发送邮件吗？  
使用**电子邮件逐个发**群发Email，可以送到 HOTMAIL MSN，不可以用 HOTMAIL MSN 发送。

我的一个新产品要做推广，想发几十万封，你估计得用多少个SMTP账户啊？  
当然是越多越好啦，一般情况，每个帐号一天发送不超过200封，不容易被封掉，发送时候适当控制一下。邮件群发软件正常情况下一个小时可以发送5000封以上。

我配置了20个GMAIL，56个hainan.net，平时发送都是正常的，但是刚才发1300邮件，只成功700多个，是为什么？  
对照日志检查一下“配置邮件发送服务器”，将连接失败的那些帐号，暂时先禁用了，不然反复连接失败会影响正常帐号的使用的。

邮件发送失败的原因有哪些？  
（1）连接SMTP服务器（即发送服务器）失败，没有进入发送过程；  
（2）SMTP服务器发送过程中处理失败，比如发送信息填写不全、对方服务器拒收等原因；  
（3）该邮件地址不存在，无法送达。

为什么我们发送的邮箱都是显示的发送成功，。然后邮箱里又都是没有发送成功的邮件呢  
SMTP服务器帮你投递Email，不是每次都成功的，一次投递失败，SMTP服务器会间隔一个小时左右再试一次，如果还是失败，就间隔2个小时，下次四个小时，以此类推，如果超过三天还是失败，SMTP服务器会发送邮件告诉你某封Email投递失败了。

问一下，设置好的发送服务器，大概多久要换一次啊 ？  
对于专业版的，你可以配置多一些发送服务器帐号，程序自动轮流使用，一般不需要换的。

才昨天发的，就有这么多的系统退信呀。  
这是正常的啊，告诉你投递超时，不是投递失败。  
超时是指：SMTP服务器告诉你，某封Email我刚才没有及时给你送出去，现在正在全力给你送，稍安勿躁；失败就是告诉你，这份Email送不出去，至 于原因，SMTP服务器也会在给你的信息里告诉你的，请仔细阅读。至于多少时间算是投递超时，要看不同的SMTP服务器的设置了。

发送过程中无法连接SMTP服务器？  
应该是配置不对，具体的解决方法请查阅 [[老用户专区](/pages/legacy.html))

关于SMTP连接过程返回的529错误.  
一般情况是由于提供的用户名和密码不对造成的。  
那我的用户名和密码是对的，为什么还提示这个错误呢？  
主要的原因有  
（1）你的用来发信的邮箱是否开通了SMTP功能。目前的QQ邮箱和Gmail邮箱刚注册的时候默认是不开通SMTP发送功能，你需要在WEB上登录，进入他们的“配置”或“选项”中，开通POP3、SMTP.。  
（2）你是刚刚注册的126.com或者163.com的邮箱，这些邮箱对于新注册的用户，都是要24小时或48小时后开通SMTP服务器的，因此要等一等。

如果遇到断电或者电脑故障突然关机，下次再打开软件时，发送的邮址怎么会全部都丢失了？如果再重新导入，这样会造成一些邮址重复发送，怎么知道关机前发到什么地方了？  
突然关机或断电属于意外情况，挽救方法是：在日志中查询到最后送出的一封Email地址，在地址本中找到这个Email地址，这个地址之后的，都是还有发送的。

配置好了邮件发送服务器和主界面上的一些信息，是否就可以大规模发送了？  
发送前最好给自己或同事多发一些测试，然后再大规模群发，免得邮件内容出错或者不可用服务器太多，发送任务一旦开始，邮件内容和发送服务器的修改就无效 了！因此大批量群发前要多验证。但是需要指出，不要总是拿几个Email地址反复发送和测试，任何服务器总是收到相同或相似内容的电子邮件之后都会屏蔽 的，这是最基本的常识。

我购买的软件是光盘形式的，还是网上下载？  
建议网上下载，版本升级以及最新版本的发布，都是通过我们产品主页的。刻盘也是可以的，需要另外支付15元刻录费和15元快递费（上海市内10元快递费），不过以后的升级版您还要在我们产品主页上下载，详情请查询注册购买页面。

原帖地址：[[老用户专区](/pages/legacy.html)) 转载请注明出处。

相关软件下载：  
[**群发软件**](/)下载主页：[商友软件官网](/)

`,fp=`---
title: 电子邮件逐个发-邮件群发软件-使用手册
date: 2014-08-19
author: 商友智能营销云软件
description: 电子邮件逐个发是基于SMTP服务，一对一传递Email的邮件群发软件。使用Outlook或者Web网页方式同时给多人发送邮件，收件人地址栏会将所有收件人的Email地址都显示出来，
---
电子邮件逐个发是基于SMTP服务，一对一传递Email的**邮件群发软件**。使用Outlook或者Web网页方式同时给多人发送邮件，收件人地址栏会将所有收件人的Email地址都显示出来，发出的邮件既容易进垃圾邮件，还会将其他人的Email地址都显示给别人。  
[![邮件群发软件](/static/images/qunfabiz-qunfa-youjianqunfa-help-0.png)](http://www-old.qunfa158.com/wp-content/themes/qunfa158v2/pictures/upload/201408/QunfaBizEmail_gui01.png)  
[（邮件群发软件主界面）](http://www-old.qunfa158.com/wp-content/themes/qunfa158v2/pictures/upload/201408/QunfaBizEmail_gui01.png "电子邮件逐个发")

以下说明按照截图上的序号分别说明如下。

### 1、配置邮件发送服务器

配置邮件发送服务器是使用邮件群发软件的第一步。

如果是第一次使用，打开后里面默认配置了3个，这只是例子，用于演示如果配置邮箱账号，他们的用户名和密码是错误，全部删除，然后配置自己的。如下图所示：  
[![配置SMTP服务器](/static/images/qunfabiz-qunfa-youjianqunfa-help-1.jpg)](http://www-old.qunfa158.com/wp-content/themes/qunfa158v2/abotpictures/email/Email_Marketing_Software_4.jpg)  
[（配置邮件群发用的SMTP邮箱服务器）](http://www-old.qunfa158.com/wp-content/themes/qunfa158v2/abotpictures/email/Email_Marketing_Software_5.jpg)

对于常用的Email邮箱，比如Gmail、Sina、QQ、139等，只需要输入Email地址，将输入光标移走，或者按“帮助”按钮，软件会自动填写“服务器”以及“用户名”等信息，那么剩下的事情只要输入密码保存就可以了。

常用的对于邮件群发支持比较好的邮箱服务器我们这个页面有推荐：[[老用户专区](/pages/legacy.html))。在遇到SMTP错误问题时候，请仔细阅读这个页面！

在配置的过程中，您还可以测试配置的邮箱是否可用。不过需要指出的是，测试账号和实际群发过程还是有很大差别的，而且测试后软件设置了最大处理超时，因此这个结果仅供群发前参考。

“一次连接服务器连续发送 XX 封电子邮件”，根据不同邮箱服务器提供的服务标准，以及SMTP的服务器性能而定，一般设置在1~10之间比较合理。这个参数的原理和具体操作流程请参考这里[[老用户专区](/pages/legacy.html))。

建议多个服务器邮箱交叉配置，不要连续设置在一起，见这里的详细说明：[[老用户专区](/pages/legacy.html))。

### 2、撰写邮件内容

打开后是一个图文编辑器，可以在邮件内容中插入图片、链接等信息，如下图：  
[![编辑邮件内容中的图片和链接](/static/images/qunfabiz-qunfa-youjianqunfa-help-2.jpg)](http://www-old.qunfa158.com/wp-content/themes/qunfa158v2/abotpictures/email/Email_Marketing_Software_5.jpg)  
[（编辑邮件内容中的图片和链接）](http://www-old.qunfa158.com/wp-content/themes/qunfa158v2/abotpictures/email/Email_Marketing_Software_5.jpg)

### 3、填写发件人信息

这里的发件人Email地址，就是“回复地址”。 “回复地址”是对方收到邮件后，点击回复按钮，他的新撰写邮件的收件人地址栏的Email地址。 对于大批量的邮件群发，有时候一个回复地址或者一个发送者姓名是不够的，需要设置多个，具体的方法见上面的主界面截图，它们之间用“||”分割开就可以了。

对于多个邮箱轮流发送邮件的情况，这个功能很有用处，它将回复的邮件都集中到了一个或者几个邮箱中，便于及时收集用户反馈。  
需要指出的是，自动回复以及因为对方服务器用户不存在、邮箱满等情况而产生的退信，则还是到最原始的发送邮箱中。

### 4、导入收件人地址

点击打开导入收件人地址界面，选择文本格式、CSV或者Excel格式的地址本，导入。

### 5、增加附件

软件支持添加多个附件同时发送。由于是群发，建议附件不要太大，越小越好，较大的附件建议通过链接等形式供收件人下载。

### 6、邮件群发过程控制

点击“发送”按钮后，“发送”字样会变为“停止”，同时，“暂停”按钮显示出来并且可用。  
可以通过日志查看发送的详细过程，而“成功”和“失败”的邮件地址会被分别归类到对应的列表中。如果遇到不存在的Email地址（只要是@部分后面的MX服务器不存在），会被归类的“无效”的列表中。  
在邮件群发过程中，如果你发现“成功”列表长时间没有新Email地址加入，请查看“日志”中的详细记录，大多数情况下是由于您设置的发送邮箱列表中有大量不可用的发送邮箱，邮件群发软件遇到这样的发送邮箱会自动跳到下一个，但是这样的判断过程是耽误时间的，会影响群发邮件的速度。

### 7、发送完成后的处理

邮件发送过程中，会有一些Email不存在，或者因为发送服务器异常而不能投递出去，这是很正常的。您可以随时通过软件主界面右上方的“日志”查看最新的发送动态。

在一轮发送任务完成后，可以将投递失败的邮件列表导出来，重新导入群发软件中，再次发送。

如果是中途停止了邮件发送过程，可以在菜单–>>工具–>>导出未发送Email中，将剩余的Email地址导出来，以便于下次发送。

[到产品主页下载最新版本](/pages/engine.html)

`,dp=`---
title: “一次连接服务器连续发送”是什么意思？
date: 2013-05-05
author: 商友智能营销云软件
description: 邮件群发过程中，还有一个大家不容易理解的地方，就是“一次连接服务器连续发送 XX 封电子邮件”。 电子邮件的发送过程是： 第一步：连接SMTP服务器 第二步：发送Email； 第三
---
邮件群发过程中，还有一个大家不容易理解的地方，就是“一次连接服务器连续发送 XX 封电子邮件”。

电子邮件的发送过程是：  
第一步：连接SMTP服务器  
第二步：发送Email；  
第三步：断开与SMTP的连接。

如果您设置“每次连接SMTP发送 2 封电子邮件”，那么过程就变为  
第一步：连接SMTP服务器  
第二步：发送一封Email；  
第三步：发送另外一封Email；  
第四步：断开与SMTP的连接。  
以此类推。

这样做的好处是能减少反复连接[商友软件官网](/)断开SMTP服务器的时间，极大提高发送效率。

另外一方面，这个值也不是越大越好。一般邮件服务器都限制每次连接SMTP最多发送15封Email。

因此，为了兼顾效率和稳定性，这个值设置为 1~10 比较合理。Gmail性能比较好，可以设置为3~10，sina的设置为1~5比较合适，sohu的设置为1，其他的请适当参考设置。

`,pp=`---
title: 邮件群发软件的图文编辑器
date: 2012-09-27
author: 商友智能营销云软件
description: 电子邮件逐个发作为一款大规模邮件群发的软件，在提供稳定的、个性化的群发功能的同时，也自带了一个功能丰富的图文编辑器。这个图文编辑器虽然不及Dreamweaver那么专业，却是非常简
---
电子邮件逐个发作为一款大规模邮件群发的软件，在提供稳定的、个性化的群发功能的同时，也自带了一个功能丰富的图文编辑器。这个图文编辑器虽然不及Dreamweaver那么专业，却是非常简单易用的所见即所得的邮件内容编辑器。

![](/static/images/qunfabiz-qunfa-youjianqunfaruanjiandetuwenbianjiqi-0.jpg "邮件群发软件的图文编辑器")

最新版本的图文编辑器作为“电子邮件逐个发”软件的功能组件一起发布，已经修正了以前版本中出现中文内容，且在英文版的Windows系统上有乱码的情况。

在软件的主界面中，编辑邮件内容，就可以打开这个简单易用的图文编辑器。

在使用过程中，可以直接将网页上的内容复制到这个编辑器中。如果你复制的网页内容中没有嵌入引用的CSS，那么网页不会变形。不建议将Word文档直接复制到邮件群发软件的图文编辑器中，因为Word文档虽然也是图文形式的，但里面的编码却和网页（HTML）完全不同。

`,hp=`---
title: 邮件群发如何摆脱垃圾邮件的困境
date: 2012-08-25
author: 商友智能营销云软件
description: 邮件群发过程中，要摆脱被判为垃圾邮件的困境，首先要了解什么是垃圾邮件。 必须纠正错误的观点，即邮件发送频率太快导致被判为垃圾邮件。至少垃圾邮件和你群发邮件的速度没有直接的关系的。反
---
**邮件群发**过程中，要摆脱被判为垃圾邮件的困境，首先要了解什么是垃圾邮件。  
必须纠正错误的观点，即邮件发送频率太快导致被判为垃圾邮件。至少垃圾邮件和你群发邮件的速度没有直接的关系的。反复发送相同的内容，不更换发送邮箱，经常给某个服务器上不存在邮箱账号发送邮件，这些都是导致你群发的邮件在收件人服务器端就被判断为垃圾邮件的原因。  
而在具体的收件人的步骤，还有特殊符号、关键词、图片、链接等判断方式，这些增加了邮件被丢入垃圾箱的可能性；而在发送方，这些因素是很难把握尺度的。

分析了垃圾邮件产生的原因后，我们应该可以理解：垃圾邮件是无法完全避免的。但是我们可以通过对邮件内容设置，以及邮件群发软件发送方式的设置，来最大限度避免邮件的出现。

（1）修改邮件的标题内容。如果您的邮件中含有诸如“广告”、“代理”、“发票”等字眼，很容易被接收方当作垃圾邮件处理的；  
（2）更换发送邮件发服务器（SMTP帐号）。同一个发送服务器被多次使用，发送服务器会通知接受方，“我送过去的可能是垃圾邮件”；  
（3）最大限度避免发送的html邮件的HTML代码存在语法错误；  
（4）不要嵌入大量的，或者太大的图片在邮件内容中，可以通过HTML的引用图片功能，显示效果和你直接嵌入图片是一样的，但却提高了群发的速度。  
（5）有些服务器整体对垃圾邮箱的界定标准非常严格，比如网易邮箱，只有邮件内容中包含网址（链接），或者不是来自网易邮箱发出去的Email，基本都被判断为垃圾邮件，对于这样的邮箱，尽可能只发一些纯文本邮件，同时可以嵌入电话、QQ号码之类的，最好不要放网址在邮件内容中。

[电子邮件逐个发](/pages/engine.html)模拟人工发送，连接的是真实的网络服务器而不是特快专递之类的，因此进入垃圾邮件的几率大大降低了。群发邮件过程中，可以通过以上几点，最大限度的避免过多出现垃圾邮件的困境。

原文地址： 转载请注明出处。

`,mp=`---
title: 如何不封号且提高转换率的群发邮件
date: 2013-12-22
author: 商友智能营销云软件
description: 我们都知道，邮件的发送会受到很多因素的影响，包括发送者所在网络的IP地址、DNS级别、邮件的内容，以及发送者和接收者双方所在的邮件服务器环境等，这个过程中，出现“退信”“进垃圾箱”
---
我们都知道，邮件的发送会受到很多因素的影响，包括发送者所在网络的IP地址、DNS级别、邮件的内容，以及发送者和接收者双方所在的邮件服务器环境等，这个过程中，出现“退信”“进垃圾箱”等情况也是无法完全避免的。

现在的邮件服务提供商对“垃圾邮件”防的越来越严格了，也给正常的邮件批量投递带来了很多不变，邮件群发软件——电子邮件逐个发，经过很长时间的实践总结出了以下几条要点，希望能对大家有帮助！

1，选择功能强大稳定的群发器。可以设置N个发送端邮箱，轮流发邮件，这样不太容易封号。

2，群发的时候可以更换IP，以免被上端服务器封锁，但是不建议反复更换或者定时更换，这个周期可以从几个小时到一至两天，因为反复更换IP会到导致你辛辛苦苦申请的发送邮箱账号被封掉，得不偿失。

3，群发内容最好多做几个版本，并且更换内容版本群发，不要总是发一样的内容，很容易被列为垃圾邮件。邮件内容中可以设置一些宏定义变量以达到每封邮件的内容都不同的效果。

4，群发的内容尽量简短，如果有图片的话，最好是把图片先放到其他空间中，做一个图片链接插入，不要附带附件。因为如果邮件大小太大，邮件容易被挡掉。

5，群发账号，如果使用免费邮箱的话要多注册一些邮箱进行发送（比如注册20个邮箱轮流发送）。但是注册的时候不要连续注册，这样很容易认定你为恶意注册的。

6，有条件的，最好购买新浪、网易和QQ等的收费邮箱，一天发送几千个都没问题，到达率很高的。至于所谓的企业邮箱则性能参差不齐，建议谨慎选用。

解决了发送端的问题，我们就可以保证我们搜集到的客户资料中，有更多的客户能看到我们企业的相关信息。然后就是要解决邮件内容的问题，这是提高转换率的关键。

有时候我们很苦恼，不知道什么样的邮件标题，能吸引更多的客户去打开，什么样子的内容会有更多的客户愿意与我们联系。

因此邮件的标题和内容应该做到尽可能的吸引人。这个看起来很简单，但是做起来并不容易。比如你的目标客户以女性为主，而你用一些美女图片相关的内容为切入点，效果肯定不会很好。

另外一点就是把握邮件发送的时机。邮件投递的过程虽然时间上有时候不可控，但一般情况下都是在十分钟以内的，所以要避免反复将相同的内容的邮件不断投递出去给一个人，因为这样的效果往往适得其反。

再补充一点就是可以添加统计功能，在ema.qunfa.co上就有申请，这个比较重要，可以监控邮件的打开情况，包括对方的IP、打开时间等因素，可以即时监控到你群发出去邮件的效果。

`,bp=`---
title: 如何间隔设置发送邮箱？
date: 2012-03-05
author: 商友智能营销云软件
description: 可以按照如下图例设置： 1、交叉设置SMTP邮箱不仅可以避免长时间使用同一个账号，也能避免长时间使用一个SMTP服务器，避免了被发送服务器禁止，或者被收件人服务器判断为垃圾邮件。 
---
可以按照如下图例设置：  
![](/static/images/qunfabiz-qunfa-zhuanye-smtp-0.png "间隔设置发送邮箱的smtp")  
![](/static/images/qunfabiz-qunfa-zhuanye-smtp-1.png "SMTP设置方法")

1、交叉设置SMTP邮箱不仅可以避免长时间使用同一个账号，也能避免长时间使用一个SMTP服务器，避免了被发送服务器禁止，或者被收件人服务器判断为垃圾邮件。  
2、统一服务器的邮箱交叉设置没有失去了分流SMTP压力的目的。例如QQ邮箱和QQ域名邮箱交叉设置，以及163、126和yeah邮箱交叉设置，因为这几个邮箱虽然域名不同，却同指一个服务器；而雅虎邮箱，例如yahoo.ca，yahoo.com.hk，yahoo.co.uk等，虽然同属yahoo邮箱，但却是不同的服务器，使用时候需要甄别。

`,gp=`---
title: 商友手机号码搜索机常见问题（FAQ）
date: 2014-05-08
author: 商友智能营销云软件
description: 手机号码采集软件的线程池和搜索深度是什么意思，要如何设置？ 线程池是同时扫描扫描网页的HTTP请求工作线程的数量；搜索深度是从第一个搜索网址开始计算，逐级扫描链接的级别，他不是要搜
---
**手机号码采集软件的线程池和搜索深度是什么意思，要如何设置？**  
线程池是同时扫描扫描网页的HTTP请求工作线程的数量；搜索深度是从第一个搜索网址开始计算，逐级扫描链接的级别，他不是要搜索网页的数量。  
设置的线程池越大，搜索速度越快；设置的搜索深度越大，搜索的网页越多。可以根据自己的实际需要设置，2～8都可以。

**商友手机号码搜索机的线程池一般设置为多大？**  
要根据你电脑的性能来设定的，一般设置1～4比较合适。高性能的电脑，可以设置为5，除非对多线程支持特别好的电脑，设置6以上是可以的。线程池设置太大，会造成任务队列积累的待处理任务越来越多，如果这时候电脑的配置不高，待处理的任务不能及时完成，会造成系统暂时堵塞。

**网页搜索深度一般是多少？**  
搜索深度为1，代表只搜索当前的一个页面；搜索深度为2，则搜索当前页面和在这个页面里能够找到的链接对应的页面；依次类推。一般情况下，设置搜索深度3比较合适，设置为5，则搜索过程会漫长很多，就好比一棵树，越向上，枝叶越多。

**我搜索的手机号码为什么导不出？**  
试用版只提供手机号码搜索功能，要导出邮件地址搜索结果，请购买注册版本。

**搜索出来的手机号码为什么有好多重复的号码？**  
商友手机号码搜索机在扫描抓取手机号码的过程如实记录搜索结果，如果一个或多个手机号码在不同的网页上反复出现（比如某个网站留的客服热线），那么抓取过程中就会出现重复的手机号码，导出时候选择过滤即可。

**如何升级商友手机号码搜索机？**  
您可以到产品主页[老用户专区](/pages/legacy.html)

**手机号码搜索软件一天可以搜索多少号码？**  
这是依赖于你的搜索目标的，比如搜索新浪新闻网站，一天也搜不到几个手机号码；到百度贴吧，或者一些交友论坛，一会可以搜出好多。

**为什么我搜索了两天，还是没有搜索完？**  
商友手机号码搜索机是根据设置的“搜索深度”去读取网页的，“搜索深度”的概念可以参考其他问答，根据这个概念，每个网页中有10个链接，那么深度为5的时候，连接数理论上是10\\*10\\*10\\*10，而实际搜索过程中，页面出现的链接数远远不止10个。因此，可以形象的将搜索比喻成一棵数，搜索是从树根开始的，越向上，枝叶越多，所以，如果深度设置比较大，而链接又很多，就会出现“搜不完”的假象。这时候，可以主动停止搜索过程，导出搜索结果。

**为什么我按照行业和地区搜索出来的手机号码在判断号码归属地的时候与设置的不一致？**  
按照行业和地区搜索的时候，手机号码的提取过程是：将提供的行业和的确条件作为关键词，使用百度搜索，根据返回的网页，扫描并提取其中的手机号码。因此，这里也是扫描网页的过程，而不是检索手机号码库，所以这里设置的“地区”和“手机号码对属地”没有任何关系。

**有好多论坛是需要登录之后才能看到内容的，你们的Email搜索软件也可以搜索吗？**  
不一定的，有一些论坛将登陆后的参数设置在session中，就不能够被调用搜索了。而对于直接在网址中表现的用户登录过程，则是可以的，具体的方式是：先用IE浏览器（注意：一定是微软的IE浏览器）登录论坛，登录候选择保存用户名和密码一天或一个月，总之就是要记住你的登录。然后在商友手机号码搜索机中，选择“搜索互联网”–>>“根据网址搜索”，将您要搜索的IE地址栏出现的目标网页输入进去，点击“开始搜索”即可。

**是否可以搜索本地文件中的手机号码，并按照地区或者网络类型归类？**  
商友手机号码搜索机支持对本地单个文件和整个目录以及目录下面的逐级子目录的扫描并提取其中的手机号码。目前手机号码采集软件支持的文件类型包括Text、HTML、Word、Excel等。  
对于搜索到的手机号码，软件会自动判断他们所属的地区和网络类型，你可以将他们导出为Excel之后再分类整理。

`,xp=`---
title: 商友手机号码搜索机价格调整为188元
date: 2013-05-05
author: 商友智能营销云软件
description: 为了配合新版本的发布，商友手机号码搜索机于2013年5月4日将年注册费用从168元调整为188元。此次小幅度的价格调整与商友手机号码搜索机的功能增加基本适应，已经注册的用户不受此次
---
为了配合新版本的发布，商友手机号码搜索机于2013年5月4日将年注册费用从168元调整为188元。此次小幅度的价格调整与商友手机号码搜索机的功能增加基本适应，已经注册的用户不受此次调整影响，可以自动升级至最新版本，享受新版本的所有新功能服务，升级方式不变，依然是下载最新版本直接安装，已经注册的信息不会丢失。

最新的手机号码搜索软件版本为Version 1.8.0 Build 201，主要的功能点体现在：  
（1）除了网页搜索之外，还可以搜索本地的文本文件、网页文件和Word文档；  
（2）内置强大的常用手机号段归属地和运营商（移动、联通、电信）信息，可以快速**批量查询手机号码归属地**；  
（3）可以将搜索结果按照运营商和归属地进行过滤导出，也可以剔除重复号码。

![按照归属地导出手机号码](/static/images/qunfabiz-shouji-shouji-price-188-0.gif "按照归属地导出手机号码")

按照归属地导出手机号码

`,_p=`---
title: 虫虫Email搜索常见问题（FAQ）
date: 2014-08-19
author: 商友智能营销云软件
description: 如何升级虫虫Email搜索？ 您可以到产品主页 /pages/engine.html 获取最新版本。注册用户升级方法：下载最新版覆盖安装，原有注册信息
---
如何升级虫虫Email搜索？  
您可以到产品主页 [[老用户专区](/pages/legacy.html) "邮件地址采集软件") 获取最新版本。注册用户升级方法：下载最新版覆盖安装，原有注册信息不会丢失。

虫虫Email搜索与邮件群发软件兼容吗？  
虫虫Email搜索是简单易用功能强大的邮件地址采集软件，可以将搜索结果导出为Text格式或者Excel格式；对于Text格式的搜索结果，每行一个Email地址，支持几乎所有的邮件群发软件；而对于Excel格式的收件人Email地址列表，目前市面上能够做得如此强大功能的**邮件群发软件**不多，所以推荐大家使用我们的[电子邮件逐个发](/pages/engine.html "邮件群发软件")。

Email搜索软件一天可以搜索邮件地址？  
这是依赖于你的搜索目标的，比如搜索新浪新闻网站，一天也搜不到几个Email地址；到百度贴吧，或者一些交友论坛，一会可以搜出好多。

是否有常用的Email地址比较集中的网站推荐呢？  
这类网站很多的，您可以针对自己的行业自己收集一些，  
（1）没有行业针对性但是Email地址集中的网址：  
http://tieba.baidu.com/f?kw=email  
http://tieba.baidu.com/f?kw=msn  
（2）再举一个论坛的例子  
http://www.douban.com/group/topic/16987876/  
（3）以51job为例，这个网站上集中了很多招聘企业的信息，采集页面上的Email地址基本都是企业邮箱地址，可以搜索域名  
http://www.51job.com  
为了提高搜索精度，软件主界面上选择“只搜索当前域名下的网页”，在菜单–>>设置–>>参数设置中，选择“当前域名为顶级域名”，这样51job.com的子域名比如http://ac.51job.com也可以被搜索到。

邮件地址采集软件的线程池和搜索深度要如何设置？  
设置的线程池越大，搜索速度越快；设置的搜索深度越大，搜索的网页越多。可以根据自己的实际需要设置，2～8都可以。

虫虫Email搜索的线程池一般设置为多大？  
要根据你电脑的性能来设定的，一般设置1～10比较合适。高性能的电脑，可以设置为高于10，除非对多线程支持特别好的电脑，设置15及以上的。  
如果你电脑是双核的CPU，建议设置为2的整数倍，如4、6、8、10等；同理，如果是三核的CPU，比如AMD的一些品牌，可以设置为3、6、9、12；四核CPU可以设置4、8、12等。  
线程池设置太大，在提供处理速度的同时，也会造成任务队列积累的待处理任务越来越多，所以如果这时候电脑的配置不高，待处理的任务不能及时完成，会造成系统暂时堵塞。

Email搜索软件的网页搜索深度一般是多少？  
搜索深度为1，代表只搜索当前的一个页面；搜索深度为2，则搜索当前页面和在这个页面里能够找到的链接对应的页面；依次类推。一般情况下，设置搜索深度3比较合适，设置为5，则搜索过程会漫长很多，就好比一棵树，越向上，枝叶越多。

有好多论坛是需要登录之后才能看到内容的，你们的Email搜索软件也可以搜索吗？  
不 一定的，有一些论坛将登陆后的参数设置在session中，就不能够被调用搜索了。而对于直接在网址中表现的用户登录过程，则是可以的，具体的方式是：先 用IE浏览器（注意：一定是微软的IE浏览器）登录论坛，登录候选择保存用户名和密码一天或一个月，总之就是要记住你的登录。然后在爱博Email搜索圣 手中，选择“搜索互联网”–>>“根据网址搜索”，将您要搜索的IE地址栏出现的目标网页输入进去，点击“开始搜索”即可。

你们的Email搜索软件和市面上的百度邮箱搜索、Google邮箱搜索有什么区别？  
**虫虫Email搜索**涵盖了百度邮箱搜索和Google邮箱搜索的所有功能，是一款功能丰富的Email搜索软件。

为什么我搜索出来的Email有很多是重复的？  
在Email的搜索过程中，[虫虫Email搜索](/pages/engine.html "邮件地址采集软件")如实的记录搜索任务和搜索结果。例如，一个网站的几乎搜索页面都会出现他的客服Email，那么这个Email就会在不同的页面被搜索到，这也是为什么你看看搜索一些重复的Email出来的原因。  
为了提高搜索的效率，虫虫Email搜索没有在搜索过程中没有选择立即过滤掉这些重复的Email地址；在导出搜索结果的过程中，你可以选择过滤重复的Email地址。

我是做外贸的，应该怎么使用你们软件搜索？  
针对具体的行业，应该去搜索行业相关的网站，比如做外贸的，可以去搜索一些外贸论坛之类的网站，里面应该有大量的email地址可供抓取。  
英文网站如：  
http://www.rcci.bg/download/Ambient\\_catalog\\_2008/engleza/alfa\\_list.htm  
http://www.hotstats.eu/dir.html  
http://alltrades.com.au/index.php

我们是搞招生的? 你们的[Email搜索软件](/pages/engine.html "邮件地址搜索软件")能否安装年龄段搜索？  
虫虫Email搜索只是email地址扫描软件不可能那么精准的。你说的那么精准的数据库，需要自己长期积累的客户关系，或者通过电信、银行等这些部门取得可信的数据。

为什么我用这个采集软件搜索了两天，还是没有搜索完？  
虫虫Email搜索软件是根据设置的“搜索深度”去读取网页的，“搜索深度”的概念可以参考其他问答，根据这个概念，每个网页中有10个链接，那么深度为 5 的时候，连接数理论上是 10\\*10\\*10\\*10，而实际搜索过程中，页面出现的链接数远远不止10个。因此，可以形象的将搜索比喻成一棵数，搜索是从树根开始的，越向上，枝叶越 多，所以，如果深度设置比较大，而链接又很多，就会出现“搜不完”的假象。这时候，可以主动停止搜索过程，导出搜索结果。

我搜索的Email地址为什么导不出？  
试用版的虫虫Email搜索软件只提供Email搜索功能，要导出搜索结果，请注册购买。

下载最新版本的虫虫Email搜索软件（Email Spider）并查询软件更新日志请访问产品主页 [老用户专区](/pages/legacy.html)

`,yp=`---
title: 虫虫Email搜索-使用手册
date: 2014-08-19
author: 商友智能营销云软件
description: 虫虫Email搜索是基于网址和关键词搜索网页Email的邮箱地址搜索软件，是使用邮件群发软件开展网络营销必备的工具。 Email采集软件可以指定具体的网站，从第一个网页开始，逐级寻
---
虫虫Email搜索是基于网址和关键词搜索网页Email的邮箱地址搜索软件，是使用**邮件群发软件**开展网络营销必备的工具。

Email采集软件可以指定具体的网站，从第一个网页开始，逐级寻找页内链接的页面，并同时提取网页内的Email地址，也可以设定要搜索的关键词，基于百度、Google、搜狗等搜索引擎，找出相关联的页面，并逐级向下搜索并提取Email地址。

虫虫Email搜索的邮箱地址采集没有地域限制，指定国内或国外网址均可。而搜索得到的Email地址列表，推荐导入到我们的[电子邮件逐个发](/pages/engine.html "邮件群发软件")中进行邮件群发，同时，虫虫Email搜索的采集结果的Text格式支持目前市面上主流的邮件群发软件，例如爱博邮件群发系统、158邮件营销专家等。

在搜索过程中，可以通过搜索深度来控制要采集的范围；可以根据电脑配置，设定线程池的大小，调节搜索速度。

虫虫Email搜索支持断电保护功能，对于电脑的异常关机等情况，可以自动保存已经搜索的Email地址结果。

同时，该软件也可以与[老用户专区](/pages/legacy.html)

[![邮件群发软件-Email采集](/static/images/qunfabiz-sousuo-email-spider-help-0.png)](http://www-old.qunfa158.com/wp-content/themes/qunfa158v2/pictures/upload/201408/ESQunfaBiz_gui01.png)

左侧搜索参数设置说明：

（1）根据网站搜索：直接输入网址，逐级搜索，需要设置搜索深度，搜索深度越大，读取的网页越多，搜索到Email地址的机会也就越大。  
以百度贴吧为例，我们知道MSN吧是百度交友比较集中的地方，他的地址是：

http://tieba.baidu.com/f?kw=email

我们将这个地址作为入口地址，搜索深度可以设置为3，线程池设置为3，点击软件界面上方的“开始搜索”，效果如下图。

（2）根据关键词搜索：选择要使用的搜索引擎，原理和网页直接搜索是一样的，也可以设置搜索深度和线程池。在百度和谷歌的基础上，已经支持Google（谷歌英文版）、雅虎、Yahoo!、Live、搜狗、搜搜等搜索引擎的支持。  
比 如我们想搜索印刷行业的Email地址，那么这些Email地址一般都是出现在包含印刷字样的网页上，以Google为例，我们输入印刷，先搜搜看，发现 的确集中了很多的印刷行业。好了，按照下图的配置，开始搜索，为了增大搜索到Email的几率，可以将搜索深度设置到4，线程池可以设置在3左右。线程池 设置越大，搜索的速度越快，占用系统CPU资源也就越多。

右侧信息栏的四个板块功能说明如下：  
（1）[Email](http://www-old.qunfa158.com/wp-content/themes/qunfa158v2/abotpictures/email/Email-Spider-Sousuo-1.gif "搜索到的Email地址")：搜索到的Email地址，以及每个Email地址所在的网页地址（URL），在搜索完成后，可以选择只导出Email地址，或者导出Email地址和他所在的网页地址。这里只展示最新的几百个Email地址，所有被采集到的Email地址都是即时存盘的，不会因为电脑断电等情况而丢失。  
（2）[网页](http://www-old.qunfa158.com/wp-content/themes/qunfa158v2/abotpictures/email/Email-Spider-Sousuo-4.gif "已经扫描过Email的网页")：这里列出已经扫描过的网页地址，以及扫描该网页的具体时间，和这个网页在本次搜索中所处的网页深度。网页深度的具体定价见[常见问题](/posts/qunfabiz-sousuo-email-sipder-faq.html)。  
（3）[队列](http://www-old.qunfa158.com/wp-content/themes/qunfa158v2/abotpictures/email/Email-Spider-Sousuo-5.gif "准备提取Email的网址")：这里列出的网页地址是等待扫描的，他们一遍都是经过扫描上一级网页提取出来的。  
（4）[日志](http://www-old.qunfa158.com/wp-content/themes/qunfa158v2/abotpictures/email/Email-Spider-Sousuo-2.gif "邮件地址采集日志")：记录软件扫描网页和提取Email地址的具体详细过程。

搜索到的Email地址导出的时候支持纯文本和Excel文件两种格式，并且在导出的时候可以设置是否在导出过程中过滤重复。

注册版本中，搜索完成之后就可以选择导出搜索结果。经过长时间的搜索，比如一个晚上之后，如果你的电脑开启的服务太多，或者内存太小，会出现按导出结果的按钮无反应，或者无法分配更多句柄的情况。

这里由于系统可以分配的资源耗尽造成的，多线程多任务的Email地址采集的过程中会不断的创建和销毁文件句柄，包括HTTP连接的文件句柄，但Windows对于要销毁的文件句柄，采用队列和排队的形式，这样会造成系统资源得不到及时释放，所以保存文件时会打不开Windows自带的资源管理器。Windows资源管理器打不开，你就没办法指定保存文件的位置。

解决办法为：**关掉软件，重启，不要开始新的搜索，直接导出搜索结果。**不开始新的搜索任务之前，上一次的搜索结果依然保存在本地数据库中，不会丢失。

相关链接：  
虫虫Email搜索常见问题（FAQ） [[老用户专区](/pages/legacy.html) "Email地址采集搜索软件")  
虫虫Email搜索产品主页和下载地址 [[老用户专区](/pages/legacy.html) "虫虫Email搜索")

**邮件群发软件**\\-Email地址采集

`,Ep=`---
title: 免费的大文件拆分软件
date: 2013-09-25
author: 商友智能营销云软件
description: 使用Email搜索软件和手机号码搜索软件等搜索出来的Email地址或者手机号码，导出后动辄几十万甚至近百万的数据，这给群发带来了诸多不便，因此有必要对这样的大文件做一个拆分。 这里
---
使用[Email搜索软件](/pages/engine.html)和[手机号码搜索软件](/pages/engine.html)等搜索出来的Email地址或者手机号码，导出后动辄几十万甚至近百万的数据，这给群发带来了诸多不便，因此有必要对这样的大文件做一个拆分。

这里推荐的是商友文件拆分助手，免费，免安装，无插件，无广告，属于绿色软件，可以按行拆分文本文件，并存储到指定的目录中。特别适合于对于数据量特别大的Email地址文件和手机号码文件，同时也可以拆分其他文本文件。

虽然现在大家用的都是64位机，性能很高，但好多软件还是运行在32位环境下的，因此对于文件的拆分标准，建议还是不超过65000行，这样在目前主流的群发软件中处理的速度都是可以接受的。

这个软件具体的操作步骤如下：

一、选择要拆分的文本文件。文件要求是文本格式的，每行一个手机号码或者一个Email地址。

二、选择拆分后的文件的保存目录。可以选择桌面，或者其他目录。

三、设定拆分后每个文件的行数。你可以根据自己的需要制定拆分的单个文件的行数 ，目前软件限制是不超过99999，建议单个文件不要超过65535为宜。

四、完成以上步骤的设置之后，点击拆分文件，这个软件会自动将文件分割为若干个小文件，每个小文件 会在原来文件名的后面追加001、002之类的字样，以便于区分。

下载地址是 [http://share.weiyun.com/792af9094995fd4854772d4f1d1813cc](http://share.weiyun.com/792af9094995fd4854772d4f1d1813cc)  
无解压密码

![](/static/images/qunfabiz-sousuo-free-file-split-0.jpg "商友文件拆分助手")

![](/static/images/qunfabiz-sousuo-free-file-split-1.jpg "大文件拆分")

产品主页：[[老用户专区](/pages/legacy.html))

`,kp=`---
title: 商友手机号码搜索机使用手册
date: 2012-10-09
author: 商友智能营销云软件
description: 商友手机号码搜索机，是一款操作简单而功能强大的手机号码采集软件，可用于手机号码采集、手机号码搜索以及手机号码归属地批量快速查询，是搜索和查询手机号码的便捷工具，它支持本地文件搜索、
---
商友手机号码搜索机，是一款操作简单而功能强大的手机号码采集软件，可用于手机号码采集、手机号码搜索以及手机号码归属地批量快速查询，是搜索和查询手机号码的便捷工具，它支持本地文件搜索、目录搜索，以及互联网络搜索，可以轻松实现手机号码采集。  
这款软件的安装比较简单，就不赘述了。可以在这里下载：  
[[老用户专区](/pages/legacy.html) "手机号码搜索")

我们重点从网页搜索和本地搜索两方面说明使用这款手机号码搜索软件的使用方法。  
![](/static/images/qunfabiz-sousuo-mobile-search-help-0.gif "手机号码搜索")

一、从网站上提取手机号码

从网站中提取手机号码，有三种方式：

（1）直接根据网址，逐级搜索，需要设置搜索深度，搜索深度越大，读取的网页越多，搜索到手机号码的机会也就越大。  
以阿里巴巴中国站为例，网页上有一些商户留下的手机号码，我们可以设置以下这个地址作为入口页面，抓取相关网页上的Email地址：  
http://china.alibaba.com/  
我们还可以百度贴吧为例，我们知道MSN吧是百度交友比较集中的地方，这类网页上会集中一些Email地址和手机号码，他的地址是：  
http://tieba.baidu.com/f?kw=msn  
我们将这个地址作为入口地址，搜索深度可以设置为3，线程池设置为3，点击软件界面上方的“开始搜索”即可。

（2）根据搜索引擎搜索。原理和网页直接搜索是一样的，也可以设置搜索深度和线程池。在百度、谷歌等搜索引擎的基础上，商友手机号码搜索机支持常用的搜索引擎，如百度、谷歌、Google（谷歌英文版）、雅虎、Yahoo!、Live、搜狗、搜搜等。  
比 如我们想搜索印刷行业的手机号码，那么这些手机号码一般都是出现在包含印刷字样的网页上，以Google为例，我们输入印刷，先搜搜看，发现 的确集中了很多的印刷行业。好了，按照下图的配置，开始搜索，为了增大搜索到手机号码的几率，可以将搜索深度设置到4，线程池可以设置在3左右。线程池 设置越大，搜索的速度越快，占用系统CPU资源也就越多。

如果要同时搜索多个关键词，具体设置方法是：将要搜索的多个关键词之间用“||”分割开来。例如要同时搜索“上海礼品”和“北京火车票”，那么可将关键词设定为：  
“上海礼品||北京火车票”  
三个或者更多关键词的情况以此类推。在点击界面右上方“开始搜索”之后，软件会自动拆分这些关键词，并分别发出搜索请求。

（3）按照行业和地区搜索。这种搜索方式基于百度搜索引擎，按照设定好的关键进行搜索。使用的时候，可以从列表中选择关键字，如果对这些关键字都不满意，也可以自己输入，这个下拉列表是可编辑的，很方便。

由上面分析可以看出，从网站上提取手机号码归根结底都是根据网址搜索的，他们的关系如下。  
根据行业和地区搜索 ==>> （转换为百度搜索的关键词） ==>> 根据搜索引擎搜索 ==>> （转换为搜索引擎的第一个搜索结果页面的网址）  ==>> 根据网址搜索

搜索完毕，可以导出搜索结果，在导出搜索结果的时候，可以过滤重复的手机号码。（备注：只有注册用户才可以导出搜索结果，试用版不支持该功能）

二、从本地硬盘提取手机号码

商友手机号码搜索机目前支持从文件和包含文件的目录中提取手机号码。可以选择搜索一个具体的文件，或者搜索目录。这里需要指出的是，搜索目录的话，是包括这些目录下的子目录的，因此不需要设置软件界面中的搜索深度。本地硬盘的手机号码搜索是线性的，也不需要设置线程池大小。至于这些文件中的手机号码，可以是杂乱无章的，只要具有手机号码的特征，都是可以被识别出来的。  
最新版本的手机号码采集软件已经支持Word、Excel、HTM等格式文件的搜索，因此这里不仅仅可以选择文本文件。

三、搜索结果的导出

正常的注册版本，在搜索完成后，可以导出搜索结果。本手机号码搜索软件支持将搜索到的手机号码导出为文本文件和Excel文件两种格式。在导出之前，你还可以设置是否在导出过程中过滤重复的手机号码。

经过长时间的搜索，比如一个晚上之后，如果你的电脑开启的服务太多，或者内存太小，会出现按导出结果的按钮无反应，或者无法分配更多句柄的情况。

这里由于系统可以分配的资源耗尽造成的，采集手机号码需要过程中不断的创建和销毁文件句柄，但Windows对于要销毁的文件句柄，采用队列和排队的形式，这样会造成系统资源得不到及时释放，所以保存文件时会打不开Windows自带的资源管理器。Windows资源管理器打不开，你就没办法指定保存文件的位置。

解决办法为：关掉软件，重启，**不要开始新的搜索**，直接导出搜索结果。不开始新的搜索任务之前，上一次的搜索结果依然保存在本地数据库中，不会丢失。

下载[**商友手机号码搜索机**](/pages/engine.html)的最新版本

`,vp=`---
title: 为什么虫虫Email搜索的扫描结果中有重复记录
date: 2013-09-27
author: 商友智能营销云软件
description: 做为扫描网页提取Email地址的工具软件，虫虫Email搜索在抓取Email的过程中如实记录搜索情况的，并反映在主界面的列表中，如果一个email地址多次出现，这里的列表中肯定是重
---
做为扫描网页提取Email地址的工具软件，虫虫Email搜索在抓取Email的过程中如实记录搜索情况的，并反映在主界面的列表中，如果一个email地址多次出现，这里的列表中肯定是重复的。在导出搜索结果的时候过滤重复就可以了。

`,wp=`---
title: 网络营销败笔小结
date: 2012-05-25
author: 商友智能营销云软件
description: 同样一件事情，有人可以做的好，有人却可以做成败笔，不是人品问题，也不是能力问题，而是分析和解决问题的方法不对。网络营销过程中，这个问题很常见，笔者主要是做邮件群发软件（电子邮件逐个
---
同样一件事情，有人可以做的好，有人却可以做成败笔，不是人品问题，也不是能力问题，而是分析和解决问题的方法不对。网络营销过程中，这个问题很常见，笔者主要是做邮件群发软件（电子邮件逐个发）技术支持的，**邮件群发**作为网络营销的一部分，笔者接触多了，其他的网络营销方式自然也会涉及到一些，这里做一个简单的列举。

先说网站建设，好多企业或个人过于注重网站设计，而对内容应用则视而不见。一个网站做出来了，其实只是万里长征的第一步，没人看，做的再好也是白搭，这个道理大家都明白，但是真正当局了，就晕了。

再说邮件群发，既然网站要重应用，要有人看，那么自然会先到邮件群发这个速成的方法。但由此出现的盲目群发和钓鱼群发，却使这个立竿见影的网络营销手段大打折扣。以给和尚卖梳子为例，这种营销精神固然是值得我们学习的，但是你如果只是将梳子推销给和尚，这就是盲目营销了。而钓鱼群发就不多说了，使用一个很有诱惑性的标题让收件人打开，引爆出极大的反感是在所难免的。

还有搜索引擎推广，本来应该是一件守株待兔的事情，但是选择搜索引擎营销的企业越来越多，这其中也包括你的竞争对手。于是，你会发现地上的树桩越来越多，而兔子呢，也会多吗？试问，能撞到你的树桩上的几率还会变大吗？这也就是为什么好多人做了一段时间的搜索引擎推广，发现效果越来越差的原因所在。

最后再说一下信息采集，就是通过将别人的内容ICP（I Copy And Paste）过来。这也是中国特色的东西，你到一些国外网站上看看，某个网站引用其他网站的新闻，基本都是直接链接过去的，即使是复制过来，也会对出处等做详细的标注。而中国人一不怕麻烦，二不怕浪费，内容复制粘贴到自己网站上，或者通过自动机来实现。于是出现了大量的垃圾内容，自然看的人就少了。

就总结这么多了，原文粘贴到我们的产品主页[老用户专区](/pages/legacy.html)

原文地址：

`,Ap=`---
title: 被忽略的邮件群发细节
date: 2014-02-27
author: 商友智能营销云软件
description: 邮件群发效果如何，相信大部分接触过电子商务的人都了解邮件群发，邮件群发是现在网站推广用的比较多的一种方式，特别是商友软件的《电子邮件逐个发》，功能虽然强大，性能虽然很好，但是一开始
---
邮件群发效果如何，相信大部分接触过电子商务的人都了解邮件群发，邮件群发是现在网站推广用的比较多的一种方式，特别是商友软件的《电子邮件逐个发》，功能虽然强大，性能虽然很好，但是一开始使用的时候没有注意其中的一些细节，常常弄巧成拙，因此这里特别总结一下。

首先指出几个邮件营销过程中的误区。

1、邮件营销是有目的的**邮件群发**过程，不是漫无目的的邮件发送，选定目标收件人群是关键。

2、邮件的可读性很重要，不能光发广告。

3、有人说邮件群发器的发送成功率一般会在99%以上，这个结果是不切实际的。

4、邮件群发能有0.5%的转化率已经很好了，根据你推销的产品不同相差也会很大。

接下来对以上几点展开说一下，他们都是觉得邮件群发效果的重要因素。

1、邮件地址的准确性：如果邮件地址列表超过50%是无效地址，那注定这次邮件营销会以失败告终。一般市场上采集来的信息有效性都比较低，使用[虫虫Email搜索](/pages/legacy.html)，匹配Email地址非常精准，但有效邮箱地址不超过90%，这已经是相当不错的水平了。所以在邮件群发的时候，务必在**电子邮件逐个发**中打开邮件地址真实性检测。

2、邮件模板的设计：一个好的模板能够让人一目了然的知道邮件的主题。但是很多模板设计者总是想着通过一次邮件营销就带来产出，导致所做的模板触犯了ESP的垃圾邮件规则，无论怎么发都是垃圾邮件。因此，必须在界面美观和内容合适中找出最优点。

3、邮件标题的创意：一个有创意的标题会吸引接收者打开邮件，只有打开邮件才会看到邮件里面的内容，在我们的经验中邮件标题会直接影响到邮件的打开率，所以我们在邮件营销的过程中需要反复的测试邮件接收者的喜好，进行对比选择一个可以令邮件接收者打开邮件的创意。

4、邮件发送报告的分析：通过发送报告我们可以将发送效果进行量化，比如：到达率、打开率、内容点击率等重要参数的分析，将没有到达的邮件进行过滤，将不同的邮件内容和标题进行多次测试。选择最优的方案进行持续营销。这里推荐的是邮件营销分析系统，即http://ema.qunfa.co，非常的简单实用，很容易看懂。

最后需要给大家纠正的几点是：

1、仅靠一次邮件发送就能带来大量的业绩产出，是非常不现实的。

2、邮件内容在不会对邮件接收者反感的基础上进行策划。

3、邮件发送的数量多少一定要在尊重邮件接收方意愿的前提下进行。

`,Cp=`---
title: 邮件群发和营销软件如何更换电脑
date: 2021-10-18
author: 商友智能营销云软件
description: 使用电子邮件逐个发、虫虫Email搜索、商友手机号码搜索机等软件的过程中，如果换了电脑怎么办？注册码是不是就不能用了？ 我们会给你发另外一个注册码，您需要到工单系统中提交一个工单即
---
**使用电子邮件逐个发、虫虫Email搜索、商友手机号码搜索机等软件的过程中，如果换了电脑怎么办？注册码是不是就不能用了？**

我们会给你发另外一个注册码，请通过[老用户专区](/pages/legacy.html)的授权查询提交申请，或在[联系我们](/pages/contact.html)中说明情况。

![](/static/images/qunfabiz-yingxiao-change-pc-0.jpg)

工单中详细说明的格式为：

订单号：20XXXXXXXXXX（必填）  
软件名称：电子邮件逐个发、虫虫Email搜索、商友手机号码搜索机（选择一个）  
原机器码：XXXXXXXXXXX（选填）  
新机器码：XXXXXXXXXXXXXXXX（必填）

我们会尽快处理新的注册码申请。我们这样主要是为了控制软件被无限制的传播和滥用。 你的电脑坏了，自然旧的注册码就不能用了。如果你谎报说电脑坏了，那我们也是没办法的；但是你一年内换十台电脑，这就不现实了。

换电脑操作属于售后技术支持范畴，只限解决按年授权和终身授权用户技术支持期限内的机器码变更。短期的按月授权不提供更换电脑的服务。

如果您因为工作关系要经常更换电脑的，可以购买我们爱博软件狗，这一个和U盘类似的USB口设备，拥有它，您可以在任何插入软件狗的电脑上使用商友群发软件。  
详情请查看：[[老用户专区](/pages/legacy.html))

除 了换电脑会出现机器码变化的情况外，更换电脑设备，包括CPU、硬盘、网卡，增减无线网卡、虚拟机、蓝牙，都可能出现机器码字符串序列的变化，但是如果在 同一台电脑上已经完成注册的软件，在没有重新安装操作系统的情况下，不会影响正常的注册版本使用。如果重新安装操作系统，并且机器码改变，请按照本文所述 流程申请更换注册码。

`,Sp=`---
title: 通过触发式群发开展邮件营销
date: 2014-12-01
author: 商友智能营销云软件
description: 当前大多数网站在会员进行注册时，都会要求填写邮箱地址，用来进行身份验证或是发送欢迎邮件。可以说，触发式欢迎邮件传递着邮件发送者的欢迎和关怀之意，是一个建立沟通的好方式。用户刚刚完成
---
当前大多数网站在会员进行注册时，都会要求填写邮箱地址，用来进行身份验证或是发送欢迎邮件。可以说，触发式欢迎邮件传递着邮件发送者的欢迎和关怀之意，是一个建立沟通的好方式。用户刚刚完成了注册，对你还是“记忆犹新”之际，邮件的内容更能引起其注意，增添兴趣，如若再附上一些特殊的优惠折扣，转换为客户也是很有可能的。

但是，如何利用好触发式欢迎邮件，来抓住与新用户沟通的这一契机呢？或许我们可以从下面几个问题开始思考：

（1）你的邮件吸引度多大？有品牌标识吗？是否全面呢？

（2）用户能否通过邮件感知品牌个性？

（3）能勾起订阅用户更多的期待吗？

触发式邮件群发营销可以避免短时间内投递大量邮件邮件出去，又可以针对具体的用户提供个性化的邮件内容，因此用户对此的粘合度会极大提高，从而获得更好的营销效果。

虽然触发式营销分散了Email的发送时间，但是数量并没有减少，因此还是需要多个发送邮箱和服务器账号配合使用的。站长邮件宝（www.qunfa.co）就是一个很好的解决方案的，用户所需要做的，只是将发送邮件的接口集成到自己的网站中即可。

`,Dp=`---
title: 获取软件机器码
date: 2014-07-25
author: 商友智能营销云软件
description: 商友系列软件，包括电子邮件逐个发、虫虫Email搜索、商友手机号码搜索机等的机器码一般都在软件的 菜单=>>帮助=>>机器码 中可以找到。 具体的位置如图所示： 在软件主界面顶部找
---
商友系列软件，包括电子邮件逐个发、虫虫Email搜索、商友手机号码搜索机等的**机器码**一般都在软件的 **菜单=>>帮助=>>机器码** 中可以找到。

具体的位置如图所示：  
![](/static/images/qunfabiz-yingxiao-get-product-key-0.gif "邮件营销软件注册码")

在软件主界面顶部找到菜单所在行，点击帮助，自动出现下拉菜单，选择机器码这一项。

打开后会有如下图所示的窗口内容：  
![](/static/images/qunfabiz-yingxiao-get-product-key-1.gif "邮件群发软件机器码")

如果您是未注册版本，则安装后打开我们软件的第一个窗口，也是相同的内容。  
使用复制按钮，将机器码复制粘贴到系统剪切板上，在需要的地方粘贴即可。

原文地址：[[老用户专区](/pages/legacy.html))  
出处：[[商友软件官网](/)](/)

`,Tp=`---
title: 网络营销的真真假假
date: 2014-09-04
author: 商友智能营销云软件
description: 所谓“假作真时真亦假 真作假时假亦真”，网络营销手段纷繁芜杂，其中的真真假假更是让人难辨！又谓“众口铄金，积毁销骨”，唾沫星也能淹死人，所以假的东西说多了也就被某些人信以为真了。商
---
所谓“假作真时真亦假 真作假时假亦真”，网络营销手段纷繁芜杂，其中的真真假假更是让人难辨！又谓“众口铄金，积毁销骨”，唾沫星也能淹死人，所以假的东西说多了也就被某些人信以为真了。商友软件（www.qunfa.biz）这里就给大家逐一罗列2014年我们遇到的网络营销的真真假假。

一、获取网站访客的QQ号码。这是假的！分析一下其原理，不难发现，这是利用腾讯服务器早期的一个漏洞，即app.data.qq.com上的一个API接口，如果访客的电脑刚好在最近一天内登陆过QQ相关的服务，那么打开你的网站的时候，你的网站设置一个Javascript脚本去自动请求这个API，就可以获取到一个QQ号码，就是所谓的“获取网站访客的QQ号码”。这个漏洞早已经修复，所以如果还有人说可以实现这个的功能，肯定是在忽悠和蒙骗消费者。再退一步说，即使这样的漏洞没有修复，100个使用电脑的人就算有80个使用QQ，需要去请求这个API接口服务的客户也不会很多，最多20个就不错了！

二、获取网站访客的手机号码。这不是假的，但宣传其营销效果就不是真的了。获取网站访客的手机号码需要同时具备以下几个条件：  
（1）访客是使用手机打开你的网站的，手机里必须有SIM卡，而且不能是双卡手机；  
（2）访客必须使用CDMA、GPRS等数据流量连接，并且选择WAP（不可以是NET）上网方式。  
同时具备这两个条件的话，三大运营商一般都会在HTTP包头中发送一个HTTP\\_X\\_UP\\_CALLING\\_LINE\\_ID的字段，而这个字段的值，就是手机号码。想要获取这方面的数据，你首先必须有一个访问量非常大的移动网站，其次就是的确有相当一部分客户使用具备以上两个条件的上网环境。

三、邮件群发的网络营销过时了。这个问题准确的说不是真或者假的问题，首先我们要看看Email是否真的过时了，是否大家都用微信和QQ，就没有人看邮件了呢？其实如果你对互联网稍微有了解，会发现Email即使在今天SNS非常发达的情况下依然被广泛使用；举个最简单的例子，你注册的好多SNS的账号都是你的Email地址，因此，这个东西是无法被抛弃的。而且从商友邮件群发软件“电子邮件逐个发”的市场反馈来看，网络营销对于[邮件群发软件](/pages/legacy.html)的需求依然强劲！

四、微信营销也是一种群发营销。这是不对的！微信是基于可信关系建立起来的强关系社区，对于群发小广告一直是严格限制，所以指望在微信社区中群发微信消息开展营销收效甚微，甚至颗粒无收，投入几百块钱购买的所谓微信群发软件其实就是一个加了几个自动化脚本的Android虚拟机，大而臃肿，在安卓社区中可以免费下载到的。

网络营销错综复杂，做好网络营销一定要先擦亮自己的眼睛，不然只是在浪费时间，并且会错过黄金推广期。

`,Pp=`---
title: 批量查询手机号码归属地
date: 2012-09-20
author: 商友智能营销云软件
description: 可以查询手机号码归属地的网站很多，但是能一次性查询多个手机号码的就很少，当你有几百个甚至上万个手机号码需要查询他们的归属地，并且要获得这些数据对手机号码分类整理的时候，望着这些网站
---
可以查询手机号码归属地的网站很多，但是能一次性查询多个手机号码的就很少，当你有几百个甚至上万个手机号码需要查询他们的归属地，并且要获得这些数据对手机号码分类整理的时候，望着这些网站，就傻眼了。

解决的方法就是安装一个“商友手机号码搜索机”的软件，然后将你准备查询的这些手机号码放到一个Word文档，或者记事本等文件中，格式和顺序可以任意设置，反正这个软件会自动识别出里面的手机号码，然后选择本地搜索，再选择存储手机号码的文件名或所在目录，开始搜索即可。

这是非常实用的批量查询手机号码归属地的方法，比直接在网站上查询效率提高了很多。

`,Fp=`---
title: 快速检查避免你的邮件被垃圾
date: 2014-03-07
author: 商友智能营销云软件
description: 你发出去的Email被收件人垃圾了，俗称“被垃圾”，主要是三种情况：首先是对方的邮件服务器认为你的Email是垃圾邮件，直接丢弃或者归类到垃圾邮件夹中；其次就是收件人使用的阅读工具
---
你发出去的Email被收件人垃圾了，俗称“被垃圾”，主要是三种情况：首先是对方的邮件服务器认为你的Email是垃圾邮件，直接丢弃或者归类到垃圾邮件夹中；其次就是收件人使用的阅读工具判断认为是垃圾邮件的，也会给出提醒会直接归类，这些工具包括Outlook、Foxmail以及网页版的QQ邮箱等等；最后就是收件人自己认为你发送的是垃圾邮件，直接放入到垃圾箱中并且将你的Email归类到黑名单中。

邮件营销过程中让逃过这三个劫难，不是说使用如[电子邮件逐个发](/pages/engine.html)、爱博邮件群发系统、EDM邮件直投专家等好的**邮件群发软件**就可以解决的，需要你在发出邮件之前快速检查，看是否满足以下这情况。

1、标题中少用姓和名，内容中出现

个性化对电子邮件内容来说是很重要的，但它并不适用于标题。虽然爱博邮件群发系统可以将对方的姓和名同时设置到邮件标题和内容中，但是收件人也是聪明的，如果你在标题中加入姓名，那你就有可能被当做是垃圾邮件发送者了。和没有使用个性化标题的邮件相比，含有个性化标题的邮件的效果要差一点。含有个性化标题的邮件打开率是12.4％，点击率是1.7％；没有用个性化标题的邮件打开率是13.5％，点击率是2.7％。然而，即使在标题中不应该使用名字，但是地点（比如城市名字）确实可以提升打开率。邮件内容中附带姓和名等个性化信息却比较合适，给阅读者以亲切感。

2、标题中使用产品名称的名称

将产品名称放进发件人行和标题行中能增加打开率。在标题中加入产品名称能使打开率从30%增加到60%，远远超过了不加入名称的标题。

3、换位思考：把自己当成顾客，而不是营销者

你的邮件读者只对一件事感兴趣：邮件能为他们提供什么？写邮件的时候就要想一下，写一些和读者利益相关的内容，不要大写特写和你有关的内容。如果你希望  
他们花时间来读你的邮件，那就要想想他们为什么要读。然后给他们写邮件，就好像你是在向他们解释阅读原因一样。那样你的标题就会更好了。

4、多内容而少产品

上兵伐谋，重在攻心。最好的标题告诉订阅者邮件的内容是什么，而最差的标题则试图通过邮件销售产品。不要让你的标题读起来像是广告。标题中的商业味越重，邮件被打开的可能性  
就越小。

5、避免使用特定敏感的单词

绝对不要在标题里使用大写字母，也不要用感叹号。只要你的内容是真实的并且看起来不像垃圾邮件，大多数的顾客都会给予回应的。垃圾单词比如“免  
税”和“性”一定要排除在外。但是有些不在垃圾单词清单上的单词也会大大降低标题的反应率，比如“帮助”、“折扣”和“催缴单”。以及像免费，发票，办  
证等词语。

`,Mp=`---
title: 邮件群发营销四个基本要素分析
date: 2013-05-05
author: 商友智能营销云软件
description: 当网络已然普及大众，当网络营销已然成为许多公司市场推广的先行者，当公司还在为寻找目标受众而苦恼时，电子直邮的时代已经悄然来临。根据2010年的研 究显示，全球46%的公司在使用电子
---
当网络已然普及大众，当网络营销已然成为许多公司市场推广的先行者，当公司还在为寻找目标受众而苦恼时，电子直邮的时代已经悄然来临。根据2010年的研 究显示，全球46%的公司在使用电子邮件营销。在这些企业中，主要属于欢迎项目，大约一半左右用在客户购买后的客户沟通维护(45%)，以及通过交叉产品 销售和增销来提高销售后续的收入(44%)。

电子直邮无疑给了企业直接面对目标客户的机会，个性化定制、精准营销使得企业在维护客户关系上的成本大大降低。同样，只要是推广，就想要知道效果如何，EDM推广也不例外。在这呢，上海网络营销就来讲讲一些经验，来与各位探讨下其效果的四要素。

一、要素之一到达率  
到 达率是成功完成最终转化的第一步，是基础性指标。到达率公式为：实际到达用户收件箱[商友软件官网](/)发送数量×100%，到达率力当然是越高越好。很显然，只有当广告 邮件发送到目标客户的邮箱里面，接下来的内容才会发生作用。那么到达率如何来计算呢?举个例子，发送方A拥有10000个邮箱地址，导入主机后，发送程序 先判断200个不是有效的格式，并标记。有效邮件地址为9800个，发送后150个用户邮箱满了，180个用户的邮箱已经注销，那实际发送了 9800-150-180=9470。换句话说9470个用户收到了此封邮件，那么真实的到达率9470/9800×100%=96.63%。显然，只有 发送的量大，且有限的邮箱地址越多，到达率才会更高。

二、要素之三点击率  
点击率的统计可以通过跟踪用户点击行为来实现，比如谷歌分析等。点击率统计有以下几个点：整封邮件的点击率，各个内容的点击率，重点推荐内容的点击率等。点击率的高低，取决于内容的指定，而内容又由设计风格，字体大小等元素组成。

三、要素之二打开率  
打开率是转化的关键。收件人会在看到一封邮件后，在5秒钟内甚至用更少的时间来判断是否打开。决定其是否打开，品牌价值和认知度这时候会起决定性作用，高度认知的品牌有助于收件人打开邮件。同样，具有清晰，煽动性，可靠，号召力的标题也有助于促使用户打开邮件。

四、要素之四转化率  
转化是EDM营销邮件发送最后的目标。较高的转化率是发送人希望达到的目标，因为这就意味着是商品的订单，是软件的下载，是品牌的宣传，或者是相关信息的收集。我想转化率应该是EDM营销效果的最重要因素。

EDM 营销算的上是最原始的网络营销推广方法之一。那发展到今天，随着推广渠道的增多，选择电子直邮的更多是一些大企业，像国外的微软、GROUPON等 公司的邮件营销做的都很成功。在中国邮件营销是个短板，因为日常使用邮件的人毕竟还不多，但是中国的EDM营销未来会成为趋势。

![](/static/images/qunfabiz-yingxiao-qunfa-yingxiao-4-yaosu-0.gif "邮件群发营销")  
转载自 [网络营销](http://www.imtaoke.com) http://www.imtaoke.com 原帖地址：http://www.imtaoke.com/yingxiao/16.html

`,Ip=`---
title: 使用软件狗实现自由更换电脑
date: 2024-01-29
author: 商友智能营销云软件
description: 软件加密狗是基于上海延誉信息技术有限公司全系列软件的USB口加密锁，它不需要任何额外驱动，免安装，可以直接插在电脑的USB上使用。结合软件加密狗注册购买的商友群发系列软件产品，不受
---
软件加密狗是基于上海延誉信息技术有限公司全系列软件的USB口加密锁，它不需要任何额外驱动，免安装，可以直接插在电脑的USB上使用。结合软件加密狗注册购买的商友群发系列软件产品，不受电脑机器码绑定限制，可以任意更换电脑。  
![爱博软件狗](/static/images/qunfabiz-yingxiao-softdog-0.gif)  
商友群发系列软件包括电子邮件逐个发、虫虫Email搜索、商友手机号码搜索机等。最新版本可到[商友软件官网](/) 下载。

**商友软件狗管理器**

最新版本 Version 1.2.1 最近更新 2013年6月17日

[旧版软件下载](/pages/legacy.html)

使用步骤和软驱动下载：  
1、下载安装最新版本的商友群发软件（如电子邮件逐个发、虫虫Email搜索、商友手机号码搜索机等）；  
2、在电脑的USB接口上插入软件狗；  
3、下载软件狗管理器到任意目录，并解压，安装；  
4、选择对应的产品，点击注册。  
5、在其他电脑上的操作同样按照步骤1~4操作。

商友软件狗管理器使用说明

1、运行软件前，请确认软件狗已经正常插入电脑的USB接口（软件狗会有灯亮）。

2、运行后，软件主界面会显示软件狗的序列号。选择对应的软件产品，点击“注册”即可。

3、如果是正常购买的产品，软件狗管理器会自动根据软件狗序列号，给与注册。

4、软件升级：直接到对应产品主页[商友软件官网](/)下载最新版本的对应程序，覆盖安装，即完成升级过程。

`,qp=`---
title: 旅游网站邮件推广分析
date: 2014-12-01
author: 商友智能营销云软件
description: 随着反垃圾邮件技术的日益成熟，内容完全相同的营销型邮件群发早已经不适应现在的网络推广方式；而基于订阅的邮件列表式的群发营销却被越来越广泛的接受。以旅游网站开展邮件营销为例，可以包括
---
随着反垃圾邮件技术的日益成熟，内容完全相同的营销型邮件群发早已经不适应现在的网络推广方式；而基于订阅的邮件列表式的群发营销却被越来越广泛的接受。以旅游网站开展邮件营销为例，可以包括如下几个方面：

一、酒店预订成功信息

提交订单后，邮箱立马就会收到订单详细信息，内容包括订单号、酒店名称、地址、联系电话、入驻时间、房型等，让客户对订单内容有更详细的了解，随时可进行预订酒店信息查看。同时在邮件中，客户可以直接点击链接登录账户取消订单，相当便利，且附带了酒店地区的天气、旅游指南、机票信息等链接，这类群发邮件是下单顾客非常欢迎的。

二、折扣券到期通知注册、

下订单后网站就会免费赠送一些折扣消费券什么的，然后隔一段时期就会有个提示邮件，“XX券快到期了，赶紧去看看吧”，每次客户都会忍不住点进去看看到底是什么券，可以干嘛。这可以说是该网站邮件营销的一个成功点，通过折扣消费券的提醒，吸引用户进入网站查看，最终达到诱惑消费。

三、积分账户账单

在该网站注册并进行服务预订消费后，即会产生相应的积分，积分可累计可兑换商品，此后每个月邮箱内都能收到一份积分账户结算账单，从未间断。内容为上月积分兑换状况及当前积分数，同时会附带一些积分兑换商品以及其他旅游方面的推荐。表面上这邮件很平常，无非是积分账单什么的，但是在后期你想要去旅游，需要预定车票、酒店等，你脑海里绝对会第一个想到该网站。不得不说，这是一个保持用户粘度的好方法，不间断的互动，让用户对产品信息一直存有印象，最终深入脑海。

四、网站促销资讯

这可以说是很直白的广告邮件了，但效果却相当不错。因为该网站不是盲目的向客户发送他们的促销广告，而是根据客户之前入住过的酒店以及关注过的一些信息，有针对性的进行邮件发送，称得上是精准的EDM邮件营销。其中最值得客户学习的是邮件标题和内容的策划，相当有水准。比如，在黄金周前期，客户就收到标题为“您关注的XX酒店直降XX元”，这对客户这类在黄金周想再次出游的人来说，是相当有诱惑力的。

五、酒店点评邮件

这就类似于淘宝电商销售一样，淘客在确认收货后，大部分人都会对产品、服务、物流方面进行评价，该网站也是一样的，在预订酒店时间到后，会发送一封酒店点评邮件，用户可发表对于该酒店的评论，显示在网站的产品评价一栏。

此类点评邮件有2个好处：一是用户对入住酒店进行评价，为其他顾客提供参考建议；二是该酒店可根据住客意见进行服务、环境、设施等方面的改进，有助于酒店经营管理。这类邮件内容在组织上是很难实现一键发送的，需要与一些群发类网站的接口整合，以实现大批量的邮件群发。

`,Rp=`---
title: 关于商友
description: 上海延誉信息技术有限公司——商友软件的产品沿革：从邮件群发单机工具到 AI 获客引擎，以及公司信息与联系方式。
---

## 我们是谁

**商友软件**由上海延誉信息技术有限公司运营，长期专注联系人数据处理与获客工具开发。品牌自 2008 年延续至今，见证并参与了中小企业从"单机工具时代"走向"AI 获客时代"的全过程。

一句话定位：**商友 = AI 获客引擎——先找到对的人，再说对的话。**

## 公司信息

- 主体：上海延誉信息技术有限公司
- 地址：上海市浦东新区商城路 518 号内外联大厦
- 邮编：200120
- 关联站点：[延誉宝](https://www.abot.cn)

## 发展历程

<div class="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">

  <div class="rounded-xl border border-[#E3E6EB] bg-white p-4 shadow-card">
    <p class="text-lg font-bold text-brand tabular-nums">2008</p>
    <p class="mt-1 text-sm text-ink-soft">商友邮件群发软件起步，服务中小企业邮件触达。</p>
  </div>

  <div class="rounded-xl border border-[#E3E6EB] bg-white p-4 shadow-card">
    <p class="text-lg font-bold text-brand tabular-nums">2013</p>
    <p class="mt-1 text-sm text-ink-soft">文件拆分助手发布，绿色免费，长期为入门用户提供便利。</p>
  </div>

  <div class="rounded-xl border border-[#E3E6EB] bg-white p-4 shadow-card">
    <p class="text-lg font-bold text-brand tabular-nums">2014</p>
    <p class="mt-1 text-sm text-ink-soft">虫虫Email搜索发布，解决"名单从哪来"的第一步。</p>
  </div>

  <div class="rounded-xl border border-[#E3E6EB] bg-white p-4 shadow-card">
    <p class="text-lg font-bold text-brand tabular-nums">2013–2024</p>
    <p class="mt-1 text-sm text-ink-soft">商友手机号码搜索机持续迭代，补充移动端线索维度。</p>
  </div>

  <div class="rounded-xl border border-brand/30 bg-brand-soft p-4 shadow-card">
    <p class="text-lg font-bold text-brand tabular-nums">2026</p>
    <p class="mt-1 text-sm text-ink-soft">升级为 AI 获客引擎，把四款工具重组成一条获客流水线。</p>
  </div>

</div>

## 我们的边界

- **发送留在客户端**：商友不提供、不暗示云端代发，发送动作与通道由你自己的本地客户端完成。
- **采集必须合规**：只采集公开可访问信息，遵守 robots.txt 与目标站条款，不做登录态抓取与邮箱爆破。
- **数据留在本地**：线索库默认本地留存，云端 AI 仅处理脱敏特征与聚合统计。

详见[合规说明](/pages/compliance.html)。

## 联系与到访

联系方式、微信 / 抖音 / B站二维码与在线提交入口，请见[联系我们](/pages/contact.html)。
`,Op=`---
title: 效果案例
description: 商友 AI 获客引擎的脱敏效果案例，仅展示线索质量相关的聚合指标。
---
`,Lp=`---
title: 合规说明
description: 商友软件的合规立场——合规采集原则专章、数据来源与处理、退订机制、内容真实性与法律提示。
---

> ## 合规采集原则（专章）
>
> 我们从一开始就把边界写在前面。**商友只做公开信息的合规采集**，并且：
>
> - **仅采集公开可访问的信息**，不采集登录态、会员区或非公开数据；
> - **遵守目标站点的 robots.txt 与服务条款**，采集频次自适应，不做对抗性抓取；
> - **不进行邮箱存活爆破或探测**，不进行批量骚扰；
> - **不提供绕过验证码、绕过反爬限制的任何手段**；
> - 提供**权利人申诉与线索移除通道**，收到有效申诉后及时移除相关线索。
>
> 采集在本地客户端由用户自行发起，原始线索默认留在你的本地。

## 数据来源与处理

- 线索来源须为**公开、合法**渠道，并对联系人数据做**去标识化**处理。
- 原始名单 / 邮箱 / 手机号不离开你的本地客户端；云端 AI 仅交换脱敏特征与聚合统计。
- 禁止未经授权批量获取、提供公民个人信息。

## 退订机制（opt-out）

所有触达内容必须提供清晰、免费的**退订 / 取消订阅**入口，并在收到退订请求后及时处理；这是我们使用与推荐任何触达方式的**前提条件**。

## 内容真实性

- 不得承诺"保证进收件箱""绕过垃圾邮件过滤"等违规表述。
- 到达率优化只走"域名认证（SPF / DKIM / DMARC）+ 内容相关"的正道。
- AI 生成的文案、主题行与策略建议需经**人工审核**，并在必要时标注"AI 生成"。

## 发送边界

商友**不提供、不暗示云端代发或代发通道**。发送动作与发送通道始终由你自己的本地客户端完成，域名、IP、SMTP/ESMTP 与发送声誉由你自持。

## 法律提示（陈述性，非规避指引）

- 境内处理个人信息须遵守《中华人民共和国个人信息保护法》。
- 未经授权批量获取 / 提供公民个人信息，可能触及《刑法》第二百五十三条之一。
- 营销邮件须遵守 CAN-SPAM、GDPR 等关于退订与明示身份的要求。
- **采集须遵守目标网站条款与 robots 协议，侵权须承担相应责任。**

> 本页为合规立场陈述，不构成法律意见；具体合规方案请结合自身业务咨询专业法律人士。
`,$p=`---
title: 联系我们
description: 商友软件联系方式——微信、QQ、抖音、B站私信入口，在线提交问题与业务洽谈（预约线索诊断）入口。
---

## 联系我们

用手机微信扫描下方二维码，或通过抖音、B站私信与我们取得联系；也可以直接在线提交问题。

<div class="grid grid-cols-1 gap-6 my-6 sm:grid-cols-3">
  <div class="flex flex-col items-center rounded-xl border border-[#E3E6EB] bg-white p-4 shadow-card">
    <img src="/static/images/wechat-qr.jpg" alt="微信二维码" loading="lazy" class="h-40 w-40 object-contain" />
    <p class="mt-3 text-sm font-medium text-ink">微信二维码</p>
    <p class="mt-1 text-center text-xs text-ink-soft">选择"联系我们"→"在线客服"，直接通过微信联系我们</p>
  </div>
  <div class="flex flex-col items-center rounded-xl border border-[#E3E6EB] bg-white p-4 shadow-card">
    <img src="/static/images/douyin-qr.jpg" alt="抖音二维码" loading="lazy" class="h-40 w-40 object-contain" />
    <p class="mt-3 text-sm font-medium text-ink">抖音二维码</p>
    <p class="mt-1 text-center text-xs text-ink-soft">用抖音 APP 扫码，通过私信联系我们</p>
  </div>
  <div class="flex flex-col items-center rounded-xl border border-[#E3E6EB] bg-white p-4 shadow-card">
    <img src="/static/images/bilibili-qr.jpg" alt="B站二维码" loading="lazy" class="h-40 w-40 object-contain" />
    <p class="mt-3 text-sm font-medium text-ink">B站二维码</p>
    <p class="mt-1 text-center text-xs text-ink-soft">用 B站 APP 扫码，通过私信联系我们</p>
  </div>
</div>

## 在线通道

- **在线提交问题**：[点击这里提交您的问题](http://cms.weiduke.com/index.php/Wap/Selfform/index/token/gwcuuk1411034699/id/7.shtml)
- **商户控制台**（提交后有消息通知，推荐）：[登录后提交问题](http://shang.abot.cn)
- **QQ 客服**：请在在线咨询时段通过 QQ 联系我们（工作时间内响应）。
- **关联站点**：[延誉宝](https://www.abot.cn)

## 业务洽谈 / 预约线索诊断

为提升沟通效率，提交业务洽谈时请一并提供以下四项信息：

<div class="my-6 overflow-hidden rounded-2xl border border-[#E3E6EB] bg-white">
  <table class="w-full border-collapse text-sm">
    <thead class="bg-brand-soft text-ink">
      <tr>
        <th class="border-b border-[#E3E6EB] px-4 py-3 text-left font-semibold">字段</th>
        <th class="border-b border-[#E3E6EB] px-4 py-3 text-left font-semibold">说明</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class="border-b border-[#E3E6EB] px-4 py-3 text-ink">公司名</td><td class="border-b border-[#E3E6EB] px-4 py-3 text-ink-soft">便于核对现有客户与授权信息</td></tr>
      <tr><td class="border-b border-[#E3E6EB] px-4 py-3 text-ink">所属行业</td><td class="border-b border-[#E3E6EB] px-4 py-3 text-ink-soft">对应到你所在的获客场景</td></tr>
      <tr><td class="border-b border-[#E3E6EB] px-4 py-3 text-ink">获客目标</td><td class="border-b border-[#E3E6EB] px-4 py-3 text-ink-soft">想获得什么类型的线索、目标地区或市场</td></tr>
      <tr><td class="px-4 py-3 text-ink">联系方式</td><td class="px-4 py-3 text-ink-soft">邮箱 / 手机 / 微信，任选其一即可</td></tr>
    </tbody>
  </table>
</div>

<p>
  <a href="http://cms.weiduke.com/index.php/Wap/Selfform/index/token/gwcuuk1411034699/id/7.shtml" class="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand px-6 text-base font-semibold text-white shadow-card transition-all duration-200 hover:bg-brand-light hover:shadow-card-hover">提交业务洽谈信息</a>
</p>

<p class="text-sm text-ink-soft">提交后我们会结合你的行业与获客目标，给出初步的获客建议，作为「预约线索诊断」的起点。</p>

## 公司信息

- 主体：上海延誉信息技术有限公司
- 地址：上海市浦东新区商城路 518 号内外联大厦
- 邮编：200120
- 关联站点：[延誉宝](https://www.abot.cn)
`,Bp=`---
title: 获客引擎
description: 商友 AI 获客引擎的五步链路——采集 AI、清洗 AI、画像 AI、分级 AI、触达衔接，以及旧产品到新能力的映射。
---
`,Np=`---
title: 老用户专区
description: 商友软件老用户专区——授权查询、旧版软件下载、版本迁移指引、历史版本说明与软件狗换机处理。
---
`,zp=`---
title: 行业方案
description: 按获客场景拆分的商友 AI 获客引擎方案——外贸 B2B、电商引流、本地服务、渠道拓展。
---
`,St="商友智能营销云软件",jp="商友 AI 获客引擎 - 先找到对的人，再说对的话",oo={};function Hp(e){let t=oo[e];if(t)return t;t=oo[e]=[];for(let n=0;n<128;n++){const u=String.fromCharCode(n);t.push(u)}for(let n=0;n<e.length;n++){const u=e.charCodeAt(n);t[u]="%"+("0"+u.toString(16).toUpperCase()).slice(-2)}return t}function qn(e,t){typeof t!="string"&&(t=qn.defaultChars);const n=Hp(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(u){let i="";for(let s=0,r=u.length;s<r;s+=3){const o=parseInt(u.slice(s+1,s+3),16);if(o<128){i+=n[o];continue}if((o&224)===192&&s+3<r){const l=parseInt(u.slice(s+4,s+6),16);if((l&192)===128){const a=o<<6&1984|l&63;a<128?i+="��":i+=String.fromCharCode(a),s+=3;continue}}if((o&240)===224&&s+6<r){const l=parseInt(u.slice(s+4,s+6),16),a=parseInt(u.slice(s+7,s+9),16);if((l&192)===128&&(a&192)===128){const c=o<<12&61440|l<<6&4032|a&63;c<2048||c>=55296&&c<=57343?i+="���":i+=String.fromCharCode(c),s+=6;continue}}if((o&248)===240&&s+9<r){const l=parseInt(u.slice(s+4,s+6),16),a=parseInt(u.slice(s+7,s+9),16),c=parseInt(u.slice(s+10,s+12),16);if((l&192)===128&&(a&192)===128&&(c&192)===128){let f=o<<18&1835008|l<<12&258048|a<<6&4032|c&63;f<65536||f>1114111?i+="����":(f-=65536,i+=String.fromCharCode(55296+(f>>10),56320+(f&1023))),s+=9;continue}}i+="�"}return i})}qn.defaultChars=";/?:@&=+$,#";qn.componentChars="";const lo={};function Up(e){let t=lo[e];if(t)return t;t=lo[e]=[];for(let n=0;n<128;n++){const u=String.fromCharCode(n);/^[0-9a-z]$/i.test(u)?t.push(u):t.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function xu(e,t,n){typeof t!="string"&&(n=t,t=xu.defaultChars),typeof n>"u"&&(n=!0);const u=Up(t);let i="";for(let s=0,r=e.length;s<r;s++){const o=e.charCodeAt(s);if(n&&o===37&&s+2<r&&/^[0-9a-f]{2}$/i.test(e.slice(s+1,s+3))){i+=e.slice(s,s+3),s+=2;continue}if(o<128){i+=u[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&s+1<r){const l=e.charCodeAt(s+1);if(l>=56320&&l<=57343){i+=encodeURIComponent(e[s]+e[s+1]),s++;continue}}i+="%EF%BF%BD";continue}i+=encodeURIComponent(e[s])}return i}xu.defaultChars=";/?:@&=+$,-_.!~*'()#";xu.componentChars="-_.!~*'()";function zs(e){let t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t}function Yu(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const Qp=/^([a-z0-9.+-]+:)/i,Vp=/:[0-9]*$/,Gp=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Wp=["<",">",'"',"`"," ","\r",`
`,"	"],Kp=["{","}","|","\\","^","`"].concat(Wp),Xp=["'"].concat(Kp),ao=["%","/","?",";","#"].concat(Xp),co=["/","?","#"],Zp=255,fo=/^[+a-z0-9A-Z_-]{0,63}$/,Jp=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,po={javascript:!0,"javascript:":!0},ho={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function js(e,t){if(e&&e instanceof Yu)return e;const n=new Yu;return n.parse(e,t),n}Yu.prototype.parse=function(e,t){let n,u,i,s=e;if(s=s.trim(),!t&&e.split("#").length===1){const a=Gp.exec(s);if(a)return this.pathname=a[1],a[2]&&(this.search=a[2]),this}let r=Qp.exec(s);if(r&&(r=r[0],n=r.toLowerCase(),this.protocol=r,s=s.substr(r.length)),(t||r||s.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=s.substr(0,2)==="//",i&&!(r&&po[r])&&(s=s.substr(2),this.slashes=!0)),!po[r]&&(i||r&&!ho[r])){let a=-1;for(let m=0;m<co.length;m++)u=s.indexOf(co[m]),u!==-1&&(a===-1||u<a)&&(a=u);let c,f;a===-1?f=s.lastIndexOf("@"):f=s.lastIndexOf("@",a),f!==-1&&(c=s.slice(0,f),s=s.slice(f+1),this.auth=c),a=-1;for(let m=0;m<ao.length;m++)u=s.indexOf(ao[m]),u!==-1&&(a===-1||u<a)&&(a=u);a===-1&&(a=s.length),s[a-1]===":"&&a--;const d=s.slice(0,a);s=s.slice(a),this.parseHost(d),this.hostname=this.hostname||"";const p=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!p){const m=this.hostname.split(/\./);for(let E=0,A=m.length;E<A;E++){const S=m[E];if(S&&!S.match(fo)){let k="";for(let b=0,_=S.length;b<_;b++)S.charCodeAt(b)>127?k+="x":k+=S[b];if(!k.match(fo)){const b=m.slice(0,E),_=m.slice(E+1),v=S.match(Jp);v&&(b.push(v[1]),_.unshift(v[2])),_.length&&(s=_.join(".")+s),this.hostname=b.join(".");break}}}}this.hostname.length>Zp&&(this.hostname=""),p&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const o=s.indexOf("#");o!==-1&&(this.hash=s.substr(o),s=s.slice(0,o));const l=s.indexOf("?");return l!==-1&&(this.search=s.substr(l),s=s.slice(0,l)),s&&(this.pathname=s),ho[n]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Yu.prototype.parseHost=function(e){let t=Vp.exec(e);t&&(t=t[0],t!==":"&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};const Yp=Object.freeze(Object.defineProperty({__proto__:null,decode:qn,encode:xu,format:zs,parse:js},Symbol.toStringTag,{value:"Module"})),_a=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,ya=/[\0-\x1F\x7F-\x9F]/,eh=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Hs=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,Ea=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,ka=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,th=Object.freeze(Object.defineProperty({__proto__:null,Any:_a,Cc:ya,Cf:eh,P:Hs,S:Ea,Z:ka},Symbol.toStringTag,{value:"Module"})),nh=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),uh=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var zi;const ih=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),sh=(zi=String.fromCodePoint)!==null&&zi!==void 0?zi:function(e){let t="";return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function rh(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=ih.get(e))!==null&&t!==void 0?t:e}var Oe;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(Oe||(Oe={}));const oh=32;var Zt;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(Zt||(Zt={}));function fs(e){return e>=Oe.ZERO&&e<=Oe.NINE}function lh(e){return e>=Oe.UPPER_A&&e<=Oe.UPPER_F||e>=Oe.LOWER_A&&e<=Oe.LOWER_F}function ah(e){return e>=Oe.UPPER_A&&e<=Oe.UPPER_Z||e>=Oe.LOWER_A&&e<=Oe.LOWER_Z||fs(e)}function ch(e){return e===Oe.EQUALS||ah(e)}var Ie;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(Ie||(Ie={}));var Lt;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(Lt||(Lt={}));class fh{constructor(t,n,u){this.decodeTree=t,this.emitCodePoint=n,this.errors=u,this.state=Ie.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Lt.Strict}startEntity(t){this.decodeMode=t,this.state=Ie.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,n){switch(this.state){case Ie.EntityStart:return t.charCodeAt(n)===Oe.NUM?(this.state=Ie.NumericStart,this.consumed+=1,this.stateNumericStart(t,n+1)):(this.state=Ie.NamedEntity,this.stateNamedEntity(t,n));case Ie.NumericStart:return this.stateNumericStart(t,n);case Ie.NumericDecimal:return this.stateNumericDecimal(t,n);case Ie.NumericHex:return this.stateNumericHex(t,n);case Ie.NamedEntity:return this.stateNamedEntity(t,n)}}stateNumericStart(t,n){return n>=t.length?-1:(t.charCodeAt(n)|oh)===Oe.LOWER_X?(this.state=Ie.NumericHex,this.consumed+=1,this.stateNumericHex(t,n+1)):(this.state=Ie.NumericDecimal,this.stateNumericDecimal(t,n))}addToNumericResult(t,n,u,i){if(n!==u){const s=u-n;this.result=this.result*Math.pow(i,s)+parseInt(t.substr(n,s),i),this.consumed+=s}}stateNumericHex(t,n){const u=n;for(;n<t.length;){const i=t.charCodeAt(n);if(fs(i)||lh(i))n+=1;else return this.addToNumericResult(t,u,n,16),this.emitNumericEntity(i,3)}return this.addToNumericResult(t,u,n,16),-1}stateNumericDecimal(t,n){const u=n;for(;n<t.length;){const i=t.charCodeAt(n);if(fs(i))n+=1;else return this.addToNumericResult(t,u,n,10),this.emitNumericEntity(i,2)}return this.addToNumericResult(t,u,n,10),-1}emitNumericEntity(t,n){var u;if(this.consumed<=n)return(u=this.errors)===null||u===void 0||u.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===Oe.SEMI)this.consumed+=1;else if(this.decodeMode===Lt.Strict)return 0;return this.emitCodePoint(rh(this.result),this.consumed),this.errors&&(t!==Oe.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,n){const{decodeTree:u}=this;let i=u[this.treeIndex],s=(i&Zt.VALUE_LENGTH)>>14;for(;n<t.length;n++,this.excess++){const r=t.charCodeAt(n);if(this.treeIndex=dh(u,i,this.treeIndex+Math.max(1,s),r),this.treeIndex<0)return this.result===0||this.decodeMode===Lt.Attribute&&(s===0||ch(r))?0:this.emitNotTerminatedNamedEntity();if(i=u[this.treeIndex],s=(i&Zt.VALUE_LENGTH)>>14,s!==0){if(r===Oe.SEMI)return this.emitNamedEntityData(this.treeIndex,s,this.consumed+this.excess);this.decodeMode!==Lt.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:n,decodeTree:u}=this,i=(u[n]&Zt.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,i,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,n,u){const{decodeTree:i}=this;return this.emitCodePoint(n===1?i[t]&~Zt.VALUE_LENGTH:i[t+1],u),n===3&&this.emitCodePoint(i[t+2],u),u}end(){var t;switch(this.state){case Ie.NamedEntity:return this.result!==0&&(this.decodeMode!==Lt.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case Ie.NumericDecimal:return this.emitNumericEntity(0,2);case Ie.NumericHex:return this.emitNumericEntity(0,3);case Ie.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case Ie.EntityStart:return 0}}}function va(e){let t="";const n=new fh(e,u=>t+=sh(u));return function(i,s){let r=0,o=0;for(;(o=i.indexOf("&",o))>=0;){t+=i.slice(r,o),n.startEntity(s);const a=n.write(i,o+1);if(a<0){r=o+n.end();break}r=o+a,o=a===0?r+1:r}const l=t+i.slice(r);return t="",l}}function dh(e,t,n,u){const i=(t&Zt.BRANCH_LENGTH)>>7,s=t&Zt.JUMP_TABLE;if(i===0)return s!==0&&u===s?n:-1;if(s){const l=u-s;return l<0||l>=i?-1:e[n+l]-1}let r=n,o=r+i-1;for(;r<=o;){const l=r+o>>>1,a=e[l];if(a<u)r=l+1;else if(a>u)o=l-1;else return e[l+i]}return-1}const wa=va(nh);va(uh);function ph(e,t=Lt.Legacy){return wa(e,t)}function hh(e){return wa(e,Lt.Strict)}function mh(e){return Object.prototype.toString.call(e)}function Us(e){return mh(e)==="[object String]"}const bh=Object.prototype.hasOwnProperty;function gh(e,t){return bh.call(e,t)}function gi(e){return Array.prototype.slice.call(arguments,1).forEach(function(n){if(n){if(typeof n!="object")throw new TypeError(n+"must be object");Object.keys(n).forEach(function(u){e[u]=n[u]})}}),e}function xh(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function Qs(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function au(e){if(e>65535){e-=65536;const t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}const Aa=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,_h=/&([a-z#][a-z0-9]{1,31});/gi,yh=new RegExp(Aa.source+"|"+_h.source,"gi"),Eh=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function kh(e,t){if(t.charCodeAt(0)===35&&Eh.test(t)){const u=t[1].toLowerCase()==="x"?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return Qs(u)?au(u):e}const n=ph(e);return n!==e?n:e}function vh(e){return e.indexOf("\\")<0?e:e.replace(Aa,"$1")}function Rn(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(yh,function(t,n,u){return n||kh(t,u)})}const wh=/[&<>"]/,Ah=/[&<>"]/g,Ch={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function Sh(e){return Ch[e]}function nn(e){return wh.test(e)?e.replace(Ah,Sh):e}const Dh=/[.?*+^$[\]\\(){}|-]/g;function Th(e){return e.replace(Dh,"\\$&")}function Ee(e){switch(e){case 9:case 32:return!0}return!1}function cu(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Ca(e){return Hs.test(e)||Ea.test(e)}function fu(e){return Ca(au(e))}function du(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function xi(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}function mo(e){return e===32||e===9||e===10||e===13}function _i(e){let t=0;for(;t<e.length&&mo(e.charCodeAt(t));t++);let n=e.length-1;for(;n>=t&&mo(e.charCodeAt(n));n--);return e.slice(t,n+1)}const Ph={mdurl:Yp,ucmicro:th},Fh=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:xh,asciiTrim:_i,assign:gi,escapeHtml:nn,escapeRE:Th,fromCodePoint:au,has:gh,isMdAsciiPunct:du,isPunctChar:Ca,isPunctCharCode:fu,isSpace:Ee,isString:Us,isValidEntityCode:Qs,isWhiteSpace:cu,lib:Ph,normalizeReference:xi,unescapeAll:Rn,unescapeMd:vh},Symbol.toStringTag,{value:"Module"}));function Mh(e,t,n){let u,i,s,r;const o=e.posMax,l=e.pos;for(e.pos=t+1,u=1;e.pos<o;){if(s=e.src.charCodeAt(e.pos),s===93&&(u--,u===0)){i=!0;break}if(r=e.pos,e.md.inline.skipToken(e),s===91){if(r===e.pos-1)u++;else if(n)return e.pos=l,-1}}let a=-1;return i&&(a=e.pos),e.pos=l,a}function Ih(e,t,n){let u,i=t;const s={ok:!1,pos:0,str:""};if(e.charCodeAt(i)===60){for(i++;i<n;){if(u=e.charCodeAt(i),u===10||u===60)return s;if(u===62)return s.pos=i+1,s.str=Rn(e.slice(t+1,i)),s.ok=!0,s;if(u===92&&i+1<n){i+=2;continue}i++}return s}let r=0;for(;i<n&&(u=e.charCodeAt(i),!(u===32||u<32||u===127));){if(u===92&&i+1<n){if(e.charCodeAt(i+1)===32){i++;continue}i+=2;continue}if(u===40&&(r++,r>32))return s;if(u===41){if(r===0)break;r--}i++}return t===i||r!==0||(s.str=Rn(e.slice(t,i)),s.pos=i,s.ok=!0),s}function qh(e,t,n,u){let i,s=t;const r={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(u)r.str=u.str,r.marker=u.marker;else{if(s>=n)return r;let o=e.charCodeAt(s);if(o!==34&&o!==39&&o!==40)return r;t++,s++,o===40&&(o=41),r.marker=o}for(;s<n;){if(i=e.charCodeAt(s),i===r.marker)return r.pos=s+1,r.str+=Rn(e.slice(t,s)),r.ok=!0,r;if(i===40&&r.marker===41)return r;i===92&&s+1<n&&s++,s++}return r.can_continue=!0,r.str+=Rn(e.slice(t,s)),r}const Rh=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:Ih,parseLinkLabel:Mh,parseLinkTitle:qh},Symbol.toStringTag,{value:"Module"})),Dt={};Dt.code_inline=function(e,t,n,u,i){const s=e[t];return"<code"+i.renderAttrs(s)+">"+nn(s.content)+"</code>"};Dt.code_block=function(e,t,n,u,i){const s=e[t];return"<pre"+i.renderAttrs(s)+"><code>"+nn(e[t].content)+`</code></pre>
`};Dt.fence=function(e,t,n,u,i){const s=e[t],r=s.info?Rn(s.info).trim():"";let o="",l="";if(r){const c=r.split(/(\s+)/g);o=c[0],l=c.slice(2).join("")}let a;if(n.highlight?a=n.highlight(s.content,o,l)||nn(s.content):a=nn(s.content),a.indexOf("<pre")===0)return a+`
`;if(r){const c=s.attrIndex("class"),f=s.attrs?s.attrs.slice():[];c<0?f.push(["class",n.langPrefix+o]):(f[c]=f[c].slice(),f[c][1]+=" "+n.langPrefix+o);const d={attrs:f};return`<pre><code${i.renderAttrs(d)}>${a}</code></pre>
`}return`<pre><code${i.renderAttrs(s)}>${a}</code></pre>
`};Dt.image=function(e,t,n,u,i){const s=e[t];return s.attrs[s.attrIndex("alt")][1]=i.renderInlineAsText(s.children,n,u),i.renderToken(e,t,n)};Dt.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`};Dt.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`};Dt.text=function(e,t){return nn(e[t].content)};Dt.html_block=function(e,t){return e[t].content};Dt.html_inline=function(e,t){return e[t].content};function On(){this.rules=gi({},Dt)}On.prototype.renderAttrs=function(t){let n,u,i;if(!t.attrs)return"";for(i="",n=0,u=t.attrs.length;n<u;n++)i+=" "+nn(t.attrs[n][0])+'="'+nn(t.attrs[n][1])+'"';return i};On.prototype.renderToken=function(t,n,u){const i=t[n];let s="";if(i.hidden)return"";i.block&&i.nesting!==-1&&n&&t[n-1].hidden&&(s+=`
`),s+=(i.nesting===-1?"</":"<")+i.tag,s+=this.renderAttrs(i),i.nesting===0&&u.xhtmlOut&&(s+=" /");let r=!1;if(i.block&&(r=!0,i.nesting===1&&n+1<t.length)){const o=t[n+1];(o.type==="inline"||o.hidden||o.nesting===-1&&o.tag===i.tag)&&(r=!1)}return s+=r?`>
`:">",s};On.prototype.renderInline=function(e,t,n){let u="";const i=this.rules;for(let s=0,r=e.length;s<r;s++){const o=e[s].type;typeof i[o]<"u"?u+=i[o](e,s,t,n,this):u+=this.renderToken(e,s,t)}return u};On.prototype.renderInlineAsText=function(e,t,n){let u="";for(let i=0,s=e.length;i<s;i++)switch(e[i].type){case"text":u+=e[i].content;break;case"image":u+=this.renderInlineAsText(e[i].children,t,n);break;case"html_inline":case"html_block":u+=e[i].content;break;case"softbreak":case"hardbreak":u+=`
`;break}return u};On.prototype.render=function(e,t,n){let u="";const i=this.rules;for(let s=0,r=e.length;s<r;s++){const o=e[s].type;o==="inline"?u+=this.renderInline(e[s].children,t,n):typeof i[o]<"u"?u+=i[o](e,s,t,n,this):u+=this.renderToken(e,s,t,n)}return u};function Xe(){this.__rules__=[],this.__cache__=null}Xe.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1};Xe.prototype.__compile__=function(){const e=this,t=[""];e.__rules__.forEach(function(n){n.enabled&&n.alt.forEach(function(u){t.indexOf(u)<0&&t.push(u)})}),e.__cache__={},t.forEach(function(n){e.__cache__[n]=[],e.__rules__.forEach(function(u){u.enabled&&(n&&u.alt.indexOf(n)<0||e.__cache__[n].push(u.fn))})})};Xe.prototype.at=function(e,t,n){const u=this.__find__(e),i=n||{};if(u===-1)throw new Error("Parser rule not found: "+e);this.__rules__[u].fn=t,this.__rules__[u].alt=i.alt||[],this.__cache__=null};Xe.prototype.before=function(e,t,n,u){const i=this.__find__(e),s=u||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:n,alt:s.alt||[]}),this.__cache__=null};Xe.prototype.after=function(e,t,n,u){const i=this.__find__(e),s=u||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:n,alt:s.alt||[]}),this.__cache__=null};Xe.prototype.push=function(e,t,n){const u=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:u.alt||[]}),this.__cache__=null};Xe.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);const n=[];return e.forEach(function(u){const i=this.__find__(u);if(i<0){if(t)return;throw new Error("Rules manager: invalid rule name "+u)}this.__rules__[i].enabled=!0,n.push(u)},this),this.__cache__=null,n};Xe.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(e,t)};Xe.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);const n=[];return e.forEach(function(u){const i=this.__find__(u);if(i<0){if(t)return;throw new Error("Rules manager: invalid rule name "+u)}this.__rules__[i].enabled=!1,n.push(u)},this),this.__cache__=null,n};Xe.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function gt(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}gt.prototype.attrIndex=function(t){if(!this.attrs)return-1;const n=this.attrs;for(let u=0,i=n.length;u<i;u++)if(n[u][0]===t)return u;return-1};gt.prototype.attrPush=function(t){this.attrs?this.attrs.push(t):this.attrs=[t]};gt.prototype.attrSet=function(t,n){const u=this.attrIndex(t),i=[t,n];u<0?this.attrPush(i):this.attrs[u]=i};gt.prototype.attrGet=function(t){const n=this.attrIndex(t);let u=null;return n>=0&&(u=this.attrs[n][1]),u};gt.prototype.attrJoin=function(t,n){const u=this.attrIndex(t);u<0?this.attrPush([t,n]):this.attrs[u][1]=this.attrs[u][1]+" "+n};function Sa(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}Sa.prototype.Token=gt;const Oh=/\r\n?|\n/g,Lh=/\0/g;function $h(e){let t;t=e.src.replace(Oh,`
`),t=t.replace(Lh,"�"),e.src=t}function Bh(e){let t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function Nh(e){const t=e.tokens;for(let n=0,u=t.length;n<u;n++){const i=t[n];i.type==="inline"&&e.md.inline.parse(i.content,e.md,e.env,i.children)}}function zh(e){return/^<a[>\s]/i.test(e)}function jh(e){return/^<\/a\s*>/i.test(e)}function Hh(e){const t=e.tokens;if(e.md.options.linkify)for(let n=0,u=t.length;n<u;n++){if(t[n].type!=="inline"||!e.md.linkify.pretest(t[n].content))continue;const i=t[n].children,s=[];let r=0;for(let o=i.length-1;o>=0;o--){const l=i[o];if(l.type==="link_close"){for(o--;i[o].level!==l.level&&i[o].type!=="link_open";)o--;continue}if(l.type==="html_inline"&&(zh(l.content)&&r>0&&r--,jh(l.content)&&r++),!(r>0)&&l.type==="text"&&e.md.linkify.test(l.content)){const a=l.content;let c=e.md.linkify.match(a);const f=[];let d=l.level,p=0;c.length>0&&c[0].index===0&&o>0&&i[o-1].type==="text_special"&&(c=c.slice(1));for(let m=0;m<c.length;m++){const E=c[m].url,A=e.md.normalizeLink(E);if(!e.md.validateLink(A))continue;let S=c[m].text;c[m].schema?c[m].schema==="mailto:"&&!/^mailto:/i.test(S)?S=e.md.normalizeLinkText("mailto:"+S).replace(/^mailto:/,""):S=e.md.normalizeLinkText(S):S=e.md.normalizeLinkText("http://"+S).replace(/^http:\/\//,"");const k=c[m].index;if(k>p){const M=new e.Token("text","",0);M.content=a.slice(p,k),M.level=d,f.push(M)}const b=new e.Token("link_open","a",1);b.attrs=[["href",A]],b.level=d++,b.markup="linkify",b.info="auto",f.push(b);const _=new e.Token("text","",0);_.content=S,_.level=d,f.push(_);const v=new e.Token("link_close","a",-1);v.level=--d,v.markup="linkify",v.info="auto",f.push(v),p=c[m].lastIndex}if(p<a.length){const m=new e.Token("text","",0);m.content=a.slice(p),m.level=d,f.push(m)}s.push({index:o,nodes:f})}}if(s.length>0){let o=i.length;for(const f of s)o+=f.nodes.length-1;const l=new Array(o);let a=0,c=0;s.reverse();for(let f=0;f<i.length;f++){const d=s[a];if((d==null?void 0:d.index)===f){for(const p of d.nodes)l[c++]=p;a++}else l[c++]=i[f]}t[n].children=l}}}const Da=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,Uh=/\((c|tm|r)\)/i,Qh=/\((c|tm|r)\)/ig,Vh={c:"©",r:"®",tm:"™"};function Gh(e,t){return Vh[t.toLowerCase()]}function Wh(e){let t=0;for(let n=e.length-1;n>=0;n--){const u=e[n];u.type==="text"&&!t&&(u.content=u.content.replace(Qh,Gh)),u.type==="link_open"&&u.info==="auto"&&t--,u.type==="link_close"&&u.info==="auto"&&t++}}function Kh(e){let t=0;for(let n=e.length-1;n>=0;n--){const u=e[n];u.type==="text"&&!t&&Da.test(u.content)&&(u.content=u.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),u.type==="link_open"&&u.info==="auto"&&t--,u.type==="link_close"&&u.info==="auto"&&t++}}function Xh(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&(Uh.test(e.tokens[t].content)&&Wh(e.tokens[t].children),Da.test(e.tokens[t].content)&&Kh(e.tokens[t].children))}const Zh=/['"]/,bo=/['"]/g,go="’",Jh=1e3;function xo(e,t,n){for(;e.length>n;){const u=e.pop();u.isSingleQuote?t.single=u.prevSameQuoteIdx:t.double=u.prevSameQuoteIdx}}function Pu(e,t,n,u){e[t]||(e[t]=[]),e[t].push({pos:n,ch:u})}function Yh(e,t){let n="",u=0;t.sort((i,s)=>i.pos-s.pos);for(let i=0;i<t.length;i++){const s=t[i];n+=e.slice(u,s.pos)+s.ch,u=s.pos+1}return n+e.slice(u)}function e2(e,t){let n;const u=[],i={single:-1,double:-1},s={};for(let r=0;r<e.length;r++){const o=e[r],l=e[r].level;for(n=u.length-1;n>=0&&!(u[n].level<=l);n--);if(xo(u,i,n+1),o.type!=="text")continue;const a=o.content;let c=0;const f=a.length;e:for(;c<f;){bo.lastIndex=c;const d=bo.exec(a);if(!d)break;let p=!0,m=!0;c=d.index+1;const E=d[0]==="'";let A=32;if(d.index-1>=0)A=a.charCodeAt(d.index-1);else for(n=r-1;n>=0&&!(e[n].type==="softbreak"||e[n].type==="hardbreak");n--)if(e[n].content){A=e[n].content.charCodeAt(e[n].content.length-1);break}let S=32;if(c<f)S=a.charCodeAt(c);else for(n=r+1;n<e.length&&!(e[n].type==="softbreak"||e[n].type==="hardbreak");n++)if(e[n].content){S=e[n].content.charCodeAt(0);break}const k=du(A)||fu(A),b=du(S)||fu(S),_=cu(A),v=cu(S);if(v?p=!1:b&&(_||k||(p=!1)),_?m=!1:k&&(v||b||(m=!1)),S===34&&d[0]==='"'&&A>=48&&A<=57&&(m=p=!1),p&&m&&(p=k,m=b),!p&&!m){E&&Pu(s,r,d.index,go);continue}if(m&&(n=E?i.single:i.double,n>=0&&u[n].level===l)){const M=u[n];let I,X;E?(I=t.md.options.quotes[2],X=t.md.options.quotes[3]):(I=t.md.options.quotes[0],X=t.md.options.quotes[1]),Pu(s,r,d.index,X),Pu(s,M.tokenIdx,M.contentPos,I),xo(u,i,n);continue e}if(p){if(u.length>=Jh)return;u.push({tokenIdx:r,contentPos:d.index,isSingleQuote:E,level:l,prevSameQuoteIdx:E?i.single:i.double}),E?i.single=u.length-1:i.double=u.length-1}else m&&E&&Pu(s,r,d.index,go)}}Object.keys(s).forEach(function(r){e[r].content=Yh(e[r].content,s[r])})}function t2(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!=="inline"||!Zh.test(e.tokens[t].content)||e2(e.tokens[t].children,e)}function n2(e){let t,n;const u=e.tokens,i=u.length;for(let s=0;s<i;s++){if(u[s].type!=="inline")continue;const r=u[s].children,o=r.length;for(t=0;t<o;t++)r[t].type==="text_special"&&(r[t].type="text");for(t=n=0;t<o;t++)r[t].type==="text"&&t+1<o&&r[t+1].type==="text"?r[t+1].content=r[t].content+r[t+1].content:(t!==n&&(r[n]=r[t]),n++);t!==n&&(r.length=n)}}const ji=[["normalize",$h],["block",Bh],["inline",Nh],["linkify",Hh],["replacements",Xh],["smartquotes",t2],["text_join",n2]];function Vs(){this.ruler=new Xe;for(let e=0;e<ji.length;e++)this.ruler.push(ji[e][0],ji[e][1])}Vs.prototype.process=function(e){const t=this.ruler.getRules("");for(let n=0,u=t.length;n<u;n++)t[n](e)};Vs.prototype.State=Sa;function Tt(e,t,n,u){this.src=e,this.md=t,this.env=n,this.tokens=u,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const i=this.src;for(let s=0,r=0,o=0,l=0,a=i.length,c=!1;r<a;r++){const f=i.charCodeAt(r);if(!c)if(Ee(f)){o++,f===9?l+=4-l%4:l++;continue}else c=!0;(f===10||r===a-1)&&(f!==10&&r++,this.bMarks.push(s),this.eMarks.push(r),this.tShift.push(o),this.sCount.push(l),this.bsCount.push(0),c=!1,o=0,l=0,s=r+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Tt.prototype.push=function(e,t,n){const u=new gt(e,t,n);return u.block=!0,n<0&&this.level--,u.level=this.level,n>0&&this.level++,this.tokens.push(u),u};Tt.prototype.isEmpty=function(t){return this.bMarks[t]+this.tShift[t]>=this.eMarks[t]};Tt.prototype.skipEmptyLines=function(t){for(let n=this.lineMax;t<n&&!(this.bMarks[t]+this.tShift[t]<this.eMarks[t]);t++);return t};Tt.prototype.skipSpaces=function(t){for(let n=this.src.length;t<n;t++){const u=this.src.charCodeAt(t);if(!Ee(u))break}return t};Tt.prototype.skipSpacesBack=function(t,n){if(t<=n)return t;for(;t>n;)if(!Ee(this.src.charCodeAt(--t)))return t+1;return t};Tt.prototype.skipChars=function(t,n){for(let u=this.src.length;t<u&&this.src.charCodeAt(t)===n;t++);return t};Tt.prototype.skipCharsBack=function(t,n,u){if(t<=u)return t;for(;t>u;)if(n!==this.src.charCodeAt(--t))return t+1;return t};Tt.prototype.getLines=function(t,n,u,i){if(t>=n)return"";const s=new Array(n-t);for(let r=0,o=t;o<n;o++,r++){let l=0;const a=this.bMarks[o];let c=a,f;for(o+1<n||i?f=this.eMarks[o]+1:f=this.eMarks[o];c<f&&l<u;){const d=this.src.charCodeAt(c);if(Ee(d))d===9?l+=4-(l+this.bsCount[o])%4:l++;else if(c-a<this.tShift[o])l++;else break;c++}l>u?s[r]=new Array(l-u+1).join(" ")+this.src.slice(c,f):s[r]=this.src.slice(c,f)}return s.join("")};Tt.prototype.Token=gt;const u2=65536;function Hi(e,t){const n=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];return e.src.slice(n,u)}function _o(e){const t=[],n=e.length;let u=0,i=e.charCodeAt(u),s=!1,r=0,o="";for(;u<n;)i===124&&(s?(o+=e.substring(r,u-1),r=u):(t.push(o+e.substring(r,u)),o="",r=u+1)),s=i===92,u++,i=e.charCodeAt(u);return t.push(o+e.substring(r)),t}function i2(e,t,n,u){if(t+2>n)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let s=e.bMarks[i]+e.tShift[i];if(s>=e.eMarks[i])return!1;const r=e.src.charCodeAt(s++);if(r!==124&&r!==45&&r!==58||s>=e.eMarks[i])return!1;const o=e.src.charCodeAt(s++);if(o!==124&&o!==45&&o!==58&&!Ee(o)||r===45&&Ee(o))return!1;for(;s<e.eMarks[i];){const _=e.src.charCodeAt(s);if(_!==124&&_!==45&&_!==58&&!Ee(_))return!1;s++}let l=Hi(e,t+1),a=l.split("|");const c=[];for(let _=0;_<a.length;_++){const v=a[_].trim();if(!v){if(_===0||_===a.length-1)continue;return!1}if(!/^:?-+:?$/.test(v))return!1;v.charCodeAt(v.length-1)===58?c.push(v.charCodeAt(0)===58?"center":"right"):v.charCodeAt(0)===58?c.push("left"):c.push("")}if(l=Hi(e,t).trim(),l.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4)return!1;a=_o(l),a.length&&a[0]===""&&a.shift(),a.length&&a[a.length-1]===""&&a.pop();const f=a.length;if(f===0||f!==c.length)return!1;if(u)return!0;const d=e.parentType;e.parentType="table";const p=e.md.block.ruler.getRules("blockquote"),m=e.push("table_open","table",1),E=[t,0];m.map=E;const A=e.push("thead_open","thead",1);A.map=[t,t+1];const S=e.push("tr_open","tr",1);S.map=[t,t+1];for(let _=0;_<a.length;_++){const v=e.push("th_open","th",1);c[_]&&(v.attrs=[["style","text-align:"+c[_]]]);const M=e.push("inline","",0);M.content=a[_].trim(),M.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let k,b=0;for(i=t+2;i<n&&!(e.sCount[i]<e.blkIndent);i++){let _=!1;for(let M=0,I=p.length;M<I;M++)if(p[M](e,i,n,!0)){_=!0;break}if(_||(l=Hi(e,i).trim(),!l)||e.sCount[i]-e.blkIndent>=4||(a=_o(l),a.length&&a[0]===""&&a.shift(),a.length&&a[a.length-1]===""&&a.pop(),b+=f-a.length,b>u2))break;if(i===t+2){const M=e.push("tbody_open","tbody",1);M.map=k=[t+2,0]}const v=e.push("tr_open","tr",1);v.map=[i,i+1];for(let M=0;M<f;M++){const I=e.push("td_open","td",1);c[M]&&(I.attrs=[["style","text-align:"+c[M]]]);const X=e.push("inline","",0);X.content=a[M]?a[M].trim():"",X.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return k&&(e.push("tbody_close","tbody",-1),k[1]=i),e.push("table_close","table",-1),E[1]=i,e.parentType=d,e.line=i,!0}function s2(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let u=t+1,i=u;for(;u<n;){if(e.isEmpty(u)){u++;continue}if(e.sCount[u]-e.blkIndent>=4){u++,i=u;continue}break}e.line=i;const s=e.push("code_block","code",0);return s.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,s.map=[t,e.line],!0}function r2(e,t,n,u){let i=e.bMarks[t]+e.tShift[t],s=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>s)return!1;const r=e.src.charCodeAt(i);if(r!==126&&r!==96)return!1;let o=i;i=e.skipChars(i,r);let l=i-o;if(l<3)return!1;const a=e.src.slice(o,i),c=e.src.slice(i,s);if(r===96&&c.indexOf(String.fromCharCode(r))>=0)return!1;if(u)return!0;let f=t,d=!1;for(;f++,!(f>=n||(i=o=e.bMarks[f]+e.tShift[f],s=e.eMarks[f],i<s&&e.sCount[f]<e.blkIndent));)if(e.src.charCodeAt(i)===r&&!(e.sCount[f]-e.blkIndent>=4)&&(i=e.skipChars(i,r),!(i-o<l)&&(i=e.skipSpaces(i),!(i<s)))){d=!0;break}l=e.sCount[t],e.line=f+(d?1:0);const p=e.push("fence","code",0);return p.info=c,p.content=e.getLines(t+1,f,l,!0),p.markup=a,p.map=[t,e.line],!0}function o2(e,t,n,u){let i=e.bMarks[t]+e.tShift[t],s=e.eMarks[t];const r=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(u)return!0;const o=[],l=[],a=[],c=[],f=e.md.block.ruler.getRules("blockquote"),d=e.parentType;e.parentType="blockquote";let p=!1,m;for(m=t;m<n;m++){const b=e.sCount[m]<e.blkIndent;if(i=e.bMarks[m]+e.tShift[m],s=e.eMarks[m],i>=s)break;if(e.src.charCodeAt(i++)===62&&!b){let v=e.sCount[m]+1,M,I;e.src.charCodeAt(i)===32?(i++,v++,I=!1,M=!0):e.src.charCodeAt(i)===9?(M=!0,(e.bsCount[m]+v)%4===3?(i++,v++,I=!1):I=!0):M=!1;let X=v;for(o.push(e.bMarks[m]),e.bMarks[m]=i;i<s;){const L=e.src.charCodeAt(i);if(Ee(L))L===9?X+=4-(X+e.bsCount[m]+(I?1:0))%4:X++;else break;i++}p=i>=s,l.push(e.bsCount[m]),e.bsCount[m]=e.sCount[m]+1+(M?1:0),a.push(e.sCount[m]),e.sCount[m]=X-v,c.push(e.tShift[m]),e.tShift[m]=i-e.bMarks[m];continue}if(p)break;let _=!1;for(let v=0,M=f.length;v<M;v++)if(f[v](e,m,n,!0)){_=!0;break}if(_){e.lineMax=m,e.blkIndent!==0&&(o.push(e.bMarks[m]),l.push(e.bsCount[m]),c.push(e.tShift[m]),a.push(e.sCount[m]),e.sCount[m]-=e.blkIndent);break}o.push(e.bMarks[m]),l.push(e.bsCount[m]),c.push(e.tShift[m]),a.push(e.sCount[m]),e.sCount[m]=-1}const E=e.blkIndent;e.blkIndent=0;const A=e.push("blockquote_open","blockquote",1);A.markup=">";const S=[t,0];A.map=S,e.md.block.tokenize(e,t,m);const k=e.push("blockquote_close","blockquote",-1);k.markup=">",e.lineMax=r,e.parentType=d,S[1]=e.line;for(let b=0;b<c.length;b++)e.bMarks[b+t]=o[b],e.tShift[b+t]=c[b],e.sCount[b+t]=a[b],e.bsCount[b+t]=l[b];return e.blkIndent=E,!0}function l2(e,t,n,u){const i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let s=e.bMarks[t]+e.tShift[t];const r=e.src.charCodeAt(s++);if(r!==42&&r!==45&&r!==95)return!1;let o=1;for(;s<i;){const a=e.src.charCodeAt(s++);if(a!==r&&!Ee(a))return!1;a===r&&o++}if(o<3)return!1;if(u)return!0;e.line=t+1;const l=e.push("hr","hr",0);return l.map=[t,e.line],l.markup=Array(o+1).join(String.fromCharCode(r)),!0}function yo(e,t){const n=e.eMarks[t];let u=e.bMarks[t]+e.tShift[t];const i=e.src.charCodeAt(u++);if(i!==42&&i!==45&&i!==43)return-1;if(u<n){const s=e.src.charCodeAt(u);if(!Ee(s))return-1}return u}function Eo(e,t){const n=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];let i=n;if(i+1>=u)return-1;let s=e.src.charCodeAt(i++);if(s<48||s>57)return-1;for(;;){if(i>=u)return-1;if(s=e.src.charCodeAt(i++),s>=48&&s<=57){if(i-n>=10)return-1;continue}if(s===41||s===46)break;return-1}return i<u&&(s=e.src.charCodeAt(i),!Ee(s))?-1:i}function a2(e,t){const n=e.level+2;for(let u=t+2,i=e.tokens.length-2;u<i;u++)e.tokens[u].level===n&&e.tokens[u].type==="paragraph_open"&&(e.tokens[u+2].hidden=!0,e.tokens[u].hidden=!0,u+=2)}function c2(e,t,n,u){let i,s,r,o,l=t,a=!0;if(e.sCount[l]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[l]-e.listIndent>=4&&e.sCount[l]<e.blkIndent)return!1;let c=!1;u&&e.parentType==="paragraph"&&e.sCount[l]>=e.blkIndent&&(c=!0);let f,d,p;if((p=Eo(e,l))>=0){if(f=!0,r=e.bMarks[l]+e.tShift[l],d=Number(e.src.slice(r,p-1)),c&&d!==1)return!1}else if((p=yo(e,l))>=0)f=!1;else return!1;if(c&&e.skipSpaces(p)>=e.eMarks[l])return!1;if(u)return!0;const m=e.src.charCodeAt(p-1),E=e.tokens.length;f?(o=e.push("ordered_list_open","ol",1),d!==1&&(o.attrs=[["start",d]])):o=e.push("bullet_list_open","ul",1);const A=[l,0];o.map=A,o.markup=String.fromCharCode(m);let S=!1;const k=e.md.block.ruler.getRules("list"),b=e.parentType;for(e.parentType="list";l<n;){s=p,i=e.eMarks[l];const _=e.sCount[l]+p-(e.bMarks[l]+e.tShift[l]);let v=_;for(;s<i;){const ae=e.src.charCodeAt(s);if(ae===9)v+=4-(v+e.bsCount[l])%4;else if(ae===32)v++;else break;s++}const M=s;let I;M>=i?I=1:I=v-_,I>4&&(I=1);const X=_+I;o=e.push("list_item_open","li",1),o.markup=String.fromCharCode(m);const L=[l,0];o.map=L,f&&(o.info=e.src.slice(r,p-1));const G=e.tight,V=e.tShift[l],R=e.sCount[l],ee=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=X,e.tight=!0,e.tShift[l]=M-e.bMarks[l],e.sCount[l]=v,M>=i&&e.isEmpty(l+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,l,n,!0),(!e.tight||S)&&(a=!1),S=e.line-l>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=ee,e.tShift[l]=V,e.sCount[l]=R,e.tight=G,o=e.push("list_item_close","li",-1),o.markup=String.fromCharCode(m),l=e.line,L[1]=l,l>=n||e.sCount[l]<e.blkIndent||e.sCount[l]-e.blkIndent>=4)break;let le=!1;for(let ae=0,W=k.length;ae<W;ae++)if(k[ae](e,l,n,!0)){le=!0;break}if(le)break;if(f){if(p=Eo(e,l),p<0)break;r=e.bMarks[l]+e.tShift[l]}else if(p=yo(e,l),p<0)break;if(m!==e.src.charCodeAt(p-1))break}return f?o=e.push("ordered_list_close","ol",-1):o=e.push("bullet_list_close","ul",-1),o.markup=String.fromCharCode(m),A[1]=l,e.line=l,e.parentType=b,a&&a2(e,E),!0}function f2(e,t,n,u){let i=e.bMarks[t]+e.tShift[t],s=e.eMarks[t],r=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function o(k){const b=e.lineMax;if(k>=b||e.isEmpty(k))return null;let _=!1;if(e.sCount[k]-e.blkIndent>3&&(_=!0),e.sCount[k]<0&&(_=!0),!_){const I=e.md.block.ruler.getRules("reference"),X=e.parentType;e.parentType="reference";let L=!1;for(let G=0,V=I.length;G<V;G++)if(I[G](e,k,b,!0)){L=!0;break}if(e.parentType=X,L)return null}const v=e.bMarks[k]+e.tShift[k],M=e.eMarks[k];return e.src.slice(v,M+1)}let l=e.src.slice(i,s+1);s=l.length;let a=-1;for(i=1;i<s;i++){const k=l.charCodeAt(i);if(k===91)return!1;if(k===93){a=i;break}else if(k===10){const b=o(r);b!==null&&(l+=b,s=l.length,r++)}else if(k===92&&(i++,i<s&&l.charCodeAt(i)===10)){const b=o(r);b!==null&&(l+=b,s=l.length,r++)}}if(a<0||l.charCodeAt(a+1)!==58)return!1;for(i=a+2;i<s;i++){const k=l.charCodeAt(i);if(k===10){const b=o(r);b!==null&&(l+=b,s=l.length,r++)}else if(!Ee(k))break}const c=e.md.helpers.parseLinkDestination(l,i,s);if(!c.ok)return!1;const f=e.md.normalizeLink(c.str);if(!e.md.validateLink(f))return!1;i=c.pos;const d=i,p=r,m=i;for(;i<s;i++){const k=l.charCodeAt(i);if(k===10){const b=o(r);b!==null&&(l+=b,s=l.length,r++)}else if(!Ee(k))break}let E=e.md.helpers.parseLinkTitle(l,i,s);for(;E.can_continue;){const k=o(r);if(k===null)break;l+=k,i=s,s=l.length,r++,E=e.md.helpers.parseLinkTitle(l,i,s,E)}let A;for(i<s&&m!==i&&E.ok?(A=E.str,i=E.pos):(A="",i=d,r=p);i<s;){const k=l.charCodeAt(i);if(!Ee(k))break;i++}if(i<s&&l.charCodeAt(i)!==10&&A)for(A="",i=d,r=p;i<s;){const k=l.charCodeAt(i);if(!Ee(k))break;i++}if(i<s&&l.charCodeAt(i)!==10)return!1;const S=xi(l.slice(1,a));return S?(u||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[S]>"u"&&(e.env.references[S]={title:A,href:f}),e.line=r),!0):!1}const d2=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],p2="[a-zA-Z_:][a-zA-Z0-9:._-]*",h2="[^\"'=<>`\\x00-\\x20]+",m2="'[^']*'",b2='"[^"]*"',g2="(?:"+h2+"|"+m2+"|"+b2+")",x2="(?:\\s+"+p2+"(?:\\s*=\\s*"+g2+")?)",Ta="<[A-Za-z][A-Za-z0-9\\-]*"+x2+"*\\s*\\/?>",Pa="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",_2="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",y2="<[?][\\s\\S]*?[?]>",E2="<![A-Za-z][^>]*>",k2="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",v2=new RegExp("^(?:"+Ta+"|"+Pa+"|"+_2+"|"+y2+"|"+E2+"|"+k2+")"),w2=new RegExp("^(?:"+Ta+"|"+Pa+")"),an=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Za-z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+d2.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(w2.source+"\\s*$"),/^$/,!1]];function A2(e,t,n,u){let i=e.bMarks[t]+e.tShift[t],s=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let r=e.src.slice(i,s),o=0;for(;o<an.length&&!an[o][0].test(r);o++);if(o===an.length)return!1;if(u)return an[o][2];let l=t+1;const a=an[o][1].test("");if(!an[o][1].test(r)){for(;l<n&&!(e.sCount[l]<e.blkIndent&&(a||!e.isEmpty(l)));l++)if(i=e.bMarks[l]+e.tShift[l],s=e.eMarks[l],r=e.src.slice(i,s),an[o][1].test(r)){r.length!==0&&l++;break}}e.line=l;const c=e.push("html_block","",0);return c.map=[t,l],c.content=e.getLines(t,l,e.blkIndent,!0),!0}function C2(e,t,n,u){let i=e.bMarks[t]+e.tShift[t],s=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let r=e.src.charCodeAt(i);if(r!==35||i>=s)return!1;let o=1;for(r=e.src.charCodeAt(++i);r===35&&i<s&&o<=6;)o++,r=e.src.charCodeAt(++i);if(o>6||i<s&&!Ee(r))return!1;if(u)return!0;s=e.skipSpacesBack(s,i);const l=e.skipCharsBack(s,35,i);l>i&&Ee(e.src.charCodeAt(l-1))&&(s=l),e.line=t+1;const a=e.push("heading_open","h"+String(o),1);a.markup="########".slice(0,o),a.map=[t,e.line];const c=e.push("inline","",0);c.content=_i(e.src.slice(i,s)),c.map=[t,e.line],c.children=[];const f=e.push("heading_close","h"+String(o),-1);return f.markup="########".slice(0,o),!0}function S2(e,t,n){const u=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;const i=e.parentType;e.parentType="paragraph";let s=0,r,o=t+1;for(;o<n&&!e.isEmpty(o);o++){if(e.sCount[o]-e.blkIndent>3)continue;if(e.sCount[o]>=e.blkIndent){let p=e.bMarks[o]+e.tShift[o];const m=e.eMarks[o];if(p<m&&(r=e.src.charCodeAt(p),(r===45||r===61)&&(p=e.skipChars(p,r),p=e.skipSpaces(p),p>=m))){s=r===61?1:2;break}}if(e.sCount[o]<0)continue;let d=!1;for(let p=0,m=u.length;p<m;p++)if(u[p](e,o,n,!0)){d=!0;break}if(d)break}if(!s)return e.parentType=i,!1;const l=_i(e.getLines(t,o,e.blkIndent,!1));e.line=o+1;const a=e.push("heading_open","h"+String(s),1);a.markup=String.fromCharCode(r),a.map=[t,e.line];const c=e.push("inline","",0);c.content=l,c.map=[t,e.line-1],c.children=[];const f=e.push("heading_close","h"+String(s),-1);return f.markup=String.fromCharCode(r),e.parentType=i,!0}function D2(e,t,n){const u=e.md.block.ruler.getRules("paragraph"),i=e.parentType;let s=t+1;for(e.parentType="paragraph";s<n&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3||e.sCount[s]<0)continue;let a=!1;for(let c=0,f=u.length;c<f;c++)if(u[c](e,s,n,!0)){a=!0;break}if(a)break}const r=_i(e.getLines(t,s,e.blkIndent,!1));e.line=s;const o=e.push("paragraph_open","p",1);o.map=[t,e.line];const l=e.push("inline","",0);return l.content=r,l.map=[t,e.line],l.children=[],e.push("paragraph_close","p",-1),e.parentType=i,!0}const Fu=[["table",i2,["paragraph","reference"]],["code",s2],["fence",r2,["paragraph","reference","blockquote","list"]],["blockquote",o2,["paragraph","reference","blockquote","list"]],["hr",l2,["paragraph","reference","blockquote","list"]],["list",c2,["paragraph","reference","blockquote"]],["reference",f2],["html_block",A2,["paragraph","reference","blockquote"]],["heading",C2,["paragraph","reference","blockquote"]],["lheading",S2],["paragraph",D2]];function yi(){this.ruler=new Xe;for(let e=0;e<Fu.length;e++)this.ruler.push(Fu[e][0],Fu[e][1],{alt:(Fu[e][2]||[]).slice()})}yi.prototype.tokenize=function(e,t,n){const u=this.ruler.getRules(""),i=u.length,s=e.md.options.maxNesting;let r=t,o=!1;for(;r<n&&(e.line=r=e.skipEmptyLines(r),!(r>=n||e.sCount[r]<e.blkIndent));){if(e.level>=s){e.line=n;break}const l=e.line;let a=!1;for(let c=0;c<i;c++)if(a=u[c](e,r,n,!1),a){if(l>=e.line)throw new Error("block rule didn't increment state.line");break}if(!a)throw new Error("none of the block rules matched");e.tight=!o,e.isEmpty(e.line-1)&&(o=!0),r=e.line,r<n&&e.isEmpty(r)&&(o=!0,r++,e.line=r)}};yi.prototype.parse=function(e,t,n,u){if(!e)return;const i=new this.State(e,t,n,u);this.tokenize(i,i.line,i.lineMax)};yi.prototype.State=Tt;function _u(e,t,n,u){this.src=e,this.env=n,this.md=t,this.tokens=u,this.tokens_meta=Array(u.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}_u.prototype.pushPending=function(){const e=new gt("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};_u.prototype.push=function(e,t,n){this.pending&&this.pushPending();const u=new gt(e,t,n);let i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),u.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(u),this.tokens_meta.push(i),u};_u.prototype.scanDelims=function(e,t){const n=this.posMax,u=this.src.charCodeAt(e);let i;if(e===0)i=32;else if(e===1)i=this.src.charCodeAt(0),(i&63488)===55296&&(i=65533);else if(i=this.src.charCodeAt(e-1),(i&64512)===56320){const A=this.src.charCodeAt(e-2);i=(A&64512)===55296?65536+(A-55296<<10)+(i-56320):65533}else(i&64512)===55296&&(i=65533);let s=e;for(;s<n&&this.src.charCodeAt(s)===u;)s++;const r=s-e;let o=s<n?this.src.charCodeAt(s):32;if((o&64512)===55296){const A=this.src.charCodeAt(s+1);o=(A&64512)===56320?65536+(o-55296<<10)+(A-56320):65533}else(o&64512)===56320&&(o=65533);const l=du(i)||fu(i),a=du(o)||fu(o),c=cu(i),f=cu(o),d=!f&&(!a||c||l),p=!c&&(!l||f||a);return{can_open:d&&(t||!p||l),can_close:p&&(t||!d||a),length:r}};_u.prototype.Token=gt;function T2(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function P2(e,t){let n=e.pos;for(;n<e.posMax&&!T2(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}function F2(e){return e>=65&&e<=90||e>=97&&e<=122}function M2(e){return e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===45||e===46}function I2(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;const n=e.pos,u=e.posMax;if(n+3>u||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;const i=n-Math.min(10,e.pending.length,n);let s=n;for(;s>i&&M2(e.src.charCodeAt(s-1));)s--;if(s===n||!F2(e.src.charCodeAt(s)))return!1;const r=n-s,o=e.md.linkify.matchAtStart(e.src.slice(s));if(!o)return!1;let l=o.url;if(l.length<=r)return!1;let a=l.length;for(;a>0&&l.charCodeAt(a-1)===42;)a--;a!==l.length&&(l=l.slice(0,a));const c=e.md.normalizeLink(l);if(!e.md.validateLink(c))return!1;if(!t){e.pending=e.pending.slice(0,-r);const f=e.push("link_open","a",1);f.attrs=[["href",c]],f.markup="linkify",f.info="auto";const d=e.push("text","",0);d.content=e.md.normalizeLinkText(l);const p=e.push("link_close","a",-1);p.markup="linkify",p.info="auto"}return e.pos+=l.length-r,!0}function q2(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;const u=e.pending.length-1,i=e.posMax;if(!t)if(u>=0&&e.pending.charCodeAt(u)===32)if(u>=1&&e.pending.charCodeAt(u-1)===32){let s=u-1;for(;s>=1&&e.pending.charCodeAt(s-1)===32;)s--;e.pending=e.pending.slice(0,s),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(n++;n<i&&Ee(e.src.charCodeAt(n));)n++;return e.pos=n,!0}const Gs=[];for(let e=0;e<256;e++)Gs.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){Gs[e.charCodeAt(0)]=1});function R2(e,t){let n=e.pos;const u=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=u))return!1;let i=e.src.charCodeAt(n);if(i===10){for(t||e.push("hardbreak","br",0),n++;n<u&&(i=e.src.charCodeAt(n),!!Ee(i));)n++;return e.pos=n,!0}if(i===32){if(!t){const o=e.push("text_special","",0);o.content="\\",o.markup="\\",o.info="escape"}return e.pos=n,!0}let s=e.src[n];if(i>=55296&&i<=56319&&n+1<u){const o=e.src.charCodeAt(n+1);o>=56320&&o<=57343&&(s+=e.src[n+1],n++)}const r="\\"+s;if(!t){const o=e.push("text_special","",0);i<256&&Gs[i]!==0?o.content=s:o.content=r,o.markup=r,o.info="escape"}return e.pos=n+1,!0}function O2(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;const i=n;n++;const s=e.posMax;for(;n<s&&e.src.charCodeAt(n)===96;)n++;const r=e.src.slice(i,n),o=r.length;if(e.backticksScanned&&(e.backticks[o]||0)<=i)return t||(e.pending+=r),e.pos+=o,!0;let l=n,a;for(;(a=e.src.indexOf("`",l))!==-1;){for(l=a+1;l<s&&e.src.charCodeAt(l)===96;)l++;const c=l-a;if(c===o){if(!t){const f=e.push("code_inline","code",0);f.markup=r,f.content=e.src.slice(n,a).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=l,!0}e.backticks[c]=a}return e.backticksScanned=!0,t||(e.pending+=r),e.pos+=o,!0}function L2(e,t){const n=e.pos,u=e.src.charCodeAt(n);if(t||u!==126)return!1;const i=e.scanDelims(e.pos,!0);let s=i.length;const r=String.fromCharCode(u);if(s<2)return!1;let o;s%2&&(o=e.push("text","",0),o.content=r,s--);for(let l=0;l<s;l+=2)o=e.push("text","",0),o.content=r+r,e.delimiters.push({marker:u,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function ko(e,t){let n;const u=[],i=t.length;for(let s=0;s<i;s++){const r=t[s];if(r.marker!==126||r.end===-1)continue;const o=t[r.end];n=e.tokens[r.token],n.type="s_open",n.tag="s",n.nesting=1,n.markup="~~",n.content="",n=e.tokens[o.token],n.type="s_close",n.tag="s",n.nesting=-1,n.markup="~~",n.content="",e.tokens[o.token-1].type==="text"&&e.tokens[o.token-1].content==="~"&&u.push(o.token-1)}for(;u.length;){const s=u.pop();let r=s+1;for(;r<e.tokens.length&&e.tokens[r].type==="s_close";)r++;r--,s!==r&&(n=e.tokens[r],e.tokens[r]=e.tokens[s],e.tokens[s]=n)}}function $2(e){const t=e.tokens_meta,n=e.tokens_meta.length;ko(e,e.delimiters);for(let u=0;u<n;u++)t[u]&&t[u].delimiters&&ko(e,t[u].delimiters)}const Fa={tokenize:L2,postProcess:$2};function B2(e,t){const n=e.pos,u=e.src.charCodeAt(n);if(t||u!==95&&u!==42)return!1;const i=e.scanDelims(e.pos,u===42);for(let s=0;s<i.length;s++){const r=e.push("text","",0);r.content=String.fromCharCode(u),e.delimiters.push({marker:u,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function vo(e,t){const n=t.length;for(let u=n-1;u>=0;u--){const i=t[u];if(i.marker!==95&&i.marker!==42||i.end===-1)continue;const s=t[i.end],r=u>0&&t[u-1].end===i.end+1&&t[u-1].marker===i.marker&&t[u-1].token===i.token-1&&t[i.end+1].token===s.token+1,o=String.fromCharCode(i.marker),l=e.tokens[i.token];l.type=r?"strong_open":"em_open",l.tag=r?"strong":"em",l.nesting=1,l.markup=r?o+o:o,l.content="";const a=e.tokens[s.token];a.type=r?"strong_close":"em_close",a.tag=r?"strong":"em",a.nesting=-1,a.markup=r?o+o:o,a.content="",r&&(e.tokens[t[u-1].token].content="",e.tokens[t[i.end+1].token].content="",u--)}}function N2(e){const t=e.tokens_meta,n=e.tokens_meta.length;vo(e,e.delimiters);for(let u=0;u<n;u++)t[u]&&t[u].delimiters&&vo(e,t[u].delimiters)}const Ma={tokenize:B2,postProcess:N2};function z2(e,t){let n,u,i,s,r="",o="",l=e.pos,a=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const c=e.pos,f=e.posMax,d=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let m=p+1;if(m<f&&e.src.charCodeAt(m)===40){for(a=!1,m++;m<f&&(n=e.src.charCodeAt(m),!(!Ee(n)&&n!==10));m++);if(m>=f)return!1;if(l=m,i=e.md.helpers.parseLinkDestination(e.src,m,e.posMax),i.ok){for(r=e.md.normalizeLink(i.str),e.md.validateLink(r)?m=i.pos:r="",l=m;m<f&&(n=e.src.charCodeAt(m),!(!Ee(n)&&n!==10));m++);if(i=e.md.helpers.parseLinkTitle(e.src,m,e.posMax),m<f&&l!==m&&i.ok)for(o=i.str,m=i.pos;m<f&&(n=e.src.charCodeAt(m),!(!Ee(n)&&n!==10));m++);}(m>=f||e.src.charCodeAt(m)!==41)&&(a=!0),m++}if(a){if(typeof e.env.references>"u")return!1;if(m<f&&e.src.charCodeAt(m)===91?(l=m+1,m=e.md.helpers.parseLinkLabel(e,m),m>=0?u=e.src.slice(l,m++):m=p+1):m=p+1,u||(u=e.src.slice(d,p)),s=e.env.references[xi(u)],!s)return e.pos=c,!1;r=s.href,o=s.title}if(!t){e.pos=d,e.posMax=p;const E=e.push("link_open","a",1),A=[["href",r]];E.attrs=A,o&&A.push(["title",o]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=m,e.posMax=f,!0}function j2(e,t){let n,u,i,s,r,o,l,a,c="";const f=e.pos,d=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const p=e.pos+2,m=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(m<0)return!1;if(s=m+1,s<d&&e.src.charCodeAt(s)===40){for(s++;s<d&&(n=e.src.charCodeAt(s),!(!Ee(n)&&n!==10));s++);if(s>=d)return!1;for(a=s,o=e.md.helpers.parseLinkDestination(e.src,s,e.posMax),o.ok&&(c=e.md.normalizeLink(o.str),e.md.validateLink(c)?s=o.pos:c=""),a=s;s<d&&(n=e.src.charCodeAt(s),!(!Ee(n)&&n!==10));s++);if(o=e.md.helpers.parseLinkTitle(e.src,s,e.posMax),s<d&&a!==s&&o.ok)for(l=o.str,s=o.pos;s<d&&(n=e.src.charCodeAt(s),!(!Ee(n)&&n!==10));s++);else l="";if(s>=d||e.src.charCodeAt(s)!==41)return e.pos=f,!1;s++}else{if(typeof e.env.references>"u")return!1;if(s<d&&e.src.charCodeAt(s)===91?(a=s+1,s=e.md.helpers.parseLinkLabel(e,s),s>=0?i=e.src.slice(a,s++):s=m+1):s=m+1,i||(i=e.src.slice(p,m)),r=e.env.references[xi(i)],!r)return e.pos=f,!1;c=r.href,l=r.title}if(!t){u=e.src.slice(p,m);const E=[];e.md.inline.parse(u,e.md,e.env,E);const A=e.push("image","img",0),S=[["src",c],["alt",""]];A.attrs=S,A.children=E,A.content=u,l&&S.push(["title",l])}return e.pos=s,e.posMax=d,!0}const H2=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,U2=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function Q2(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;const u=e.pos,i=e.posMax;for(;;){if(++n>=i)return!1;const r=e.src.charCodeAt(n);if(r===60)return!1;if(r===62)break}const s=e.src.slice(u+1,n);if(U2.test(s)){const r=e.md.normalizeLink(s);if(!e.md.validateLink(r))return!1;if(!t){const o=e.push("link_open","a",1);o.attrs=[["href",r]],o.markup="autolink",o.info="auto";const l=e.push("text","",0);l.content=e.md.normalizeLinkText(s);const a=e.push("link_close","a",-1);a.markup="autolink",a.info="auto"}return e.pos+=s.length+2,!0}if(H2.test(s)){const r=e.md.normalizeLink("mailto:"+s);if(!e.md.validateLink(r))return!1;if(!t){const o=e.push("link_open","a",1);o.attrs=[["href",r]],o.markup="autolink",o.info="auto";const l=e.push("text","",0);l.content=e.md.normalizeLinkText(s);const a=e.push("link_close","a",-1);a.markup="autolink",a.info="auto"}return e.pos+=s.length+2,!0}return!1}function V2(e){return/^<a[>\s]/i.test(e)}function G2(e){return/^<\/a\s*>/i.test(e)}function W2(e){const t=e|32;return t>=97&&t<=122}function K2(e,t){if(!e.md.options.html)return!1;const n=e.posMax,u=e.pos;if(e.src.charCodeAt(u)!==60||u+2>=n)return!1;const i=e.src.charCodeAt(u+1);if(i!==33&&i!==63&&i!==47&&!W2(i))return!1;const s=e.src.slice(u).match(v2);if(!s)return!1;if(!t){const r=e.push("html_inline","",0);r.content=s[0],V2(r.content)&&e.linkLevel++,G2(r.content)&&e.linkLevel--}return e.pos+=s[0].length,!0}const X2=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Z2=/^&([a-z][a-z0-9]{1,31});/i;function J2(e,t){const n=e.pos,u=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=u)return!1;if(e.src.charCodeAt(n+1)===35){const s=e.src.slice(n).match(X2);if(s){if(!t){const r=s[1][0].toLowerCase()==="x"?parseInt(s[1].slice(1),16):parseInt(s[1],10),o=e.push("text_special","",0);o.content=Qs(r)?au(r):au(65533),o.markup=s[0],o.info="entity"}return e.pos+=s[0].length,!0}}else{const s=e.src.slice(n).match(Z2);if(s){const r=hh(s[0]);if(r!==s[0]){if(!t){const o=e.push("text_special","",0);o.content=r,o.markup=s[0],o.info="entity"}return e.pos+=s[0].length,!0}}}return!1}function wo(e){const t={},n=e.length;if(!n)return;let u=0,i=-2;const s=[];for(let r=0;r<n;r++){const o=e[r];if(s.push(0),(e[u].marker!==o.marker||i!==o.token-1)&&(u=r),i=o.token,o.length=o.length||0,!o.close)continue;t.hasOwnProperty(o.marker)||(t[o.marker]=[-1,-1,-1,-1,-1,-1]);const l=t[o.marker][(o.open?3:0)+o.length%3];let a=u-s[u]-1,c=a;for(;a>l;a-=s[a]+1){const f=e[a];if(f.marker===o.marker&&f.open&&f.end<0){let d=!1;if((f.close||o.open)&&(f.length+o.length)%3===0&&(f.length%3!==0||o.length%3!==0)&&(d=!0),!d){const p=a>0&&!e[a-1].open?s[a-1]+1:0;s[r]=r-a+p,s[a]=p,o.open=!1,f.end=r,f.close=!1,c=-1,i=-2;break}}}c!==-1&&(t[o.marker][(o.open?3:0)+(o.length||0)%3]=c)}}function Y2(e){const t=e.tokens_meta,n=e.tokens_meta.length;wo(e.delimiters);for(let u=0;u<n;u++)t[u]&&t[u].delimiters&&wo(t[u].delimiters)}function em(e){let t,n,u=0;const i=e.tokens,s=e.tokens.length;for(t=n=0;t<s;t++)i[t].nesting<0&&u--,i[t].level=u,i[t].nesting>0&&u++,i[t].type==="text"&&t+1<s&&i[t+1].type==="text"?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}const Ui=[["text",P2],["linkify",I2],["newline",q2],["escape",R2],["backticks",O2],["strikethrough",Fa.tokenize],["emphasis",Ma.tokenize],["link",z2],["image",j2],["autolink",Q2],["html_inline",K2],["entity",J2]],Qi=[["balance_pairs",Y2],["strikethrough",Fa.postProcess],["emphasis",Ma.postProcess],["fragments_join",em]];function yu(){this.ruler=new Xe;for(let e=0;e<Ui.length;e++)this.ruler.push(Ui[e][0],Ui[e][1]);this.ruler2=new Xe;for(let e=0;e<Qi.length;e++)this.ruler2.push(Qi[e][0],Qi[e][1])}yu.prototype.skipToken=function(e){const t=e.pos,n=this.ruler.getRules(""),u=n.length,i=e.md.options.maxNesting,s=e.cache;if(typeof s[t]<"u"){e.pos=s[t];return}let r=!1;if(e.level<i){for(let o=0;o<u;o++)if(e.level++,r=n[o](e,!0),e.level--,r){if(t>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;r||e.pos++,s[t]=e.pos};yu.prototype.tokenize=function(e){const t=this.ruler.getRules(""),n=t.length,u=e.posMax,i=e.md.options.maxNesting;for(;e.pos<u;){const s=e.pos;let r=!1;if(e.level<i){for(let o=0;o<n;o++)if(r=t[o](e,!1),r){if(s>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(r){if(e.pos>=u)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};yu.prototype.parse=function(e,t,n,u){const i=new this.State(e,t,n,u);this.tokenize(i);const s=this.ruler2.getRules(""),r=s.length;for(let o=0;o<r;o++)s[o](i)};yu.prototype.State=_u;function tm(e){const t={};e=e||{},t.src_Any=_a.source,t.src_Cc=ya.source,t.src_Z=ka.source,t.src_P=Hs.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|");const n="[><｜]";return t.src_pseudo_letter=`(?:(?!${n}|${t.src_ZPCc})${t.src_Any})`,t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth=`(?:(?:(?!${t.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`,t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator=`(?=$|${n}|${t.src_ZPCc})(?!${e["---"]?"-(?!--)|":"-|"}_|:\\d|\\.-|\\.(?!$|${t.src_ZPCc}))`,t.src_path=`(?:[/?#](?:(?!${t.src_ZCc}|${n}|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!${t.src_ZCc}|\\]).)*\\]|\\((?:(?!${t.src_ZCc}|[)]).)*\\)|\\{(?:(?!${t.src_ZCc}|[}]).)*\\}|\\"(?:(?!${t.src_ZCc}|["]).)+\\"|\\'(?:(?!${t.src_ZCc}|[']).)+\\'|\\'(?=${t.src_pseudo_letter}|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!${t.src_ZCc}|[.]|$)|`+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+`,(?!${t.src_ZCc}|$)|;(?!${t.src_ZCc}|$)|\\!+(?!${t.src_ZCc}|[!]|$)|\\?(?!${t.src_ZCc}|[?]|$))+|\\/)?`,t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]{0,63}',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+`|${t.src_pseudo_letter}{1,63})`,t.src_domain="(?:"+t.src_xn+`|(?:${t.src_pseudo_letter})|(?:${t.src_pseudo_letter}(?:-|${t.src_pseudo_letter}){0,61}${t.src_pseudo_letter}))`,t.src_host=`(?:(?:(?:(?:${t.src_domain})\\.)*${t.src_domain}))`,t.tpl_host_fuzzy="(?:"+t.src_ip4+`|(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%)))`,t.tpl_host_no_ip_fuzzy=`(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%))`,t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test=`localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:${t.src_ZPCc}|>|$))`,t.tpl_email_fuzzy=`(^|${n}|"|\\(|${t.src_ZCc})(${t.src_email_name}@${t.tpl_host_fuzzy_strict})`,t.tpl_link_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|｜]|${t.src_ZPCc}))((?![$+<=>^\`|｜])${t.tpl_host_port_fuzzy_strict}${t.src_path})`,t.tpl_link_no_ip_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|｜]|${t.src_ZPCc}))((?![$+<=>^\`|｜])${t.tpl_host_port_no_ip_fuzzy_strict}${t.src_path})`,t}function ds(e){return Array.prototype.slice.call(arguments,1).forEach(function(n){n&&Object.keys(n).forEach(function(u){e[u]=n[u]})}),e}function Ei(e){return Object.prototype.toString.call(e)}function nm(e){return Ei(e)==="[object String]"}function um(e){return Ei(e)==="[object Object]"}function im(e){return Ei(e)==="[object RegExp]"}function Ao(e){return Ei(e)==="[object Function]"}function sm(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const Ia={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function rm(e){return Object.keys(e||{}).reduce(function(t,n){return t||Ia.hasOwnProperty(n)},!1)}const om={"http:":{validate:function(e,t,n){const u=e.slice(t);return n.re.http||(n.re.http=new RegExp(`^\\/\\/${n.re.src_auth}${n.re.src_host_port_strict}${n.re.src_path}`,"i")),n.re.http.test(u)?u.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,t,n){const u=e.slice(t);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+`(?:localhost|(?:(?:${n.re.src_domain})\\.)+${n.re.src_domain_root})`+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(u)?t>=3&&e[t-3]===":"||t>=3&&e[t-3]==="/"?0:u.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){const u=e.slice(t);return n.re.mailto||(n.re.mailto=new RegExp(`^${n.re.src_email_name}@${n.re.src_host_strict}`,"i")),n.re.mailto.test(u)?u.match(n.re.mailto)[0].length:0}}},lm="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",am="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function cm(e){return function(t,n){const u=t.slice(n);return e.test(u)?u.match(e)[0].length:0}}function Co(){return function(e,t){t.normalize(e)}}function ei(e){const t=e.re=tm(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(lm),n.push(t.src_xn),t.src_tlds=n.join("|");function u(o){return o.replace("%TLDS%",t.src_tlds)}t.email_fuzzy=RegExp(u(t.tpl_email_fuzzy),"i"),t.email_fuzzy_global=RegExp(u(t.tpl_email_fuzzy),"ig"),t.link_fuzzy=RegExp(u(t.tpl_link_fuzzy),"i"),t.link_fuzzy_global=RegExp(u(t.tpl_link_fuzzy),"ig"),t.link_no_ip_fuzzy=RegExp(u(t.tpl_link_no_ip_fuzzy),"i"),t.link_no_ip_fuzzy_global=RegExp(u(t.tpl_link_no_ip_fuzzy),"ig"),t.host_fuzzy_test=RegExp(u(t.tpl_host_fuzzy_test),"i");const i=[];e.__compiled__={};function s(o,l){throw new Error(`(LinkifyIt) Invalid schema "${o}": ${l}`)}Object.keys(e.__schemas__).forEach(function(o){const l=e.__schemas__[o];if(l===null)return;const a={validate:null,link:null};if(e.__compiled__[o]=a,um(l)){im(l.validate)?a.validate=cm(l.validate):Ao(l.validate)?a.validate=l.validate:s(o,l),Ao(l.normalize)?a.normalize=l.normalize:l.normalize?s(o,l):a.normalize=Co();return}if(nm(l)){i.push(o);return}s(o,l)}),i.forEach(function(o){e.__compiled__[e.__schemas__[o]]&&(e.__compiled__[o].validate=e.__compiled__[e.__schemas__[o]].validate,e.__compiled__[o].normalize=e.__compiled__[e.__schemas__[o]].normalize)}),e.__compiled__[""]={validate:null,normalize:Co()};const r=Object.keys(e.__compiled__).filter(function(o){return o.length>0&&e.__compiled__[o]}).map(sm).join("|");e.re.schema_test=RegExp(`(^|(?!_)(?:[><｜]|${t.src_ZPCc}))(${r})`,"i"),e.re.schema_search=RegExp(`(^|(?!_)(?:[><｜]|${t.src_ZPCc}))(${r})`,"ig"),e.re.schema_at_start=RegExp(`^${e.re.schema_search.source}`,"i"),e.re.pretest=RegExp(`(${e.re.schema_test.source})|(${e.re.host_fuzzy_test.source})|@`,"i")}function qa(e,t,n,u){const i=e.slice(n,u);this.schema=t.toLowerCase(),this.index=n,this.lastIndex=u,this.raw=i,this.text=i,this.url=i}function et(e,t){if(!(this instanceof et))return new et(e,t);t||rm(e)&&(t=e,e={}),this.__opts__=ds({},Ia,t),this.__schemas__=ds({},om,e),this.__compiled__={},this.__tlds__=am,this.__tlds_replaced__=!1,this.re={},ei(this)}et.prototype.add=function(t,n){return this.__schemas__[t]=n,ei(this),this};et.prototype.set=function(t){return this.__opts__=ds(this.__opts__,t),this};et.prototype.test=function(t){if(!t.length)return!1;let n,u;if(this.re.schema_test.test(t)){for(u=this.re.schema_search,u.lastIndex=0;(n=u.exec(t))!==null;)if(this.testSchemaAt(t,n[2],u.lastIndex))return!0}return!!(this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&t.search(this.re.host_fuzzy_test)>=0&&t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy)!==null||this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&t.indexOf("@")>=0&&t.match(this.re.email_fuzzy)!==null)};et.prototype.pretest=function(t){return this.re.pretest.test(t)};et.prototype.testSchemaAt=function(t,n,u){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(t,u,this):0};et.prototype.match=function(t){const n=[],u=[],i=[],s=[];let r,o,l;function a(d,p){return d?p?d.index!==p.index?d.index<p.index?d:p:d.lastIndex>=p.lastIndex?d:p:d:p}if(!t.length)return null;if(this.re.schema_test.test(t))for(l=this.re.schema_search,l.lastIndex=0;(r=l.exec(t))!==null;)o=this.testSchemaAt(t,r[2],l.lastIndex),o&&u.push({schema:r[2],index:r.index+r[1].length,lastIndex:r.index+r[0].length+o});if(this.__opts__.fuzzyLink&&this.__compiled__["http:"])for(l=this.__opts__.fuzzyIP?this.re.link_fuzzy_global:this.re.link_no_ip_fuzzy_global,l.lastIndex=0;(r=l.exec(t))!==null;)i.push({schema:"",index:r.index+r[1].length,lastIndex:r.index+r[0].length});if(this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"])for(l=this.re.email_fuzzy_global,l.lastIndex=0;(r=l.exec(t))!==null;)s.push({schema:"mailto:",index:r.index+r[1].length,lastIndex:r.index+r[0].length});const c=[0,0,0];let f=0;for(;;){const d=[u[c[0]],s[c[1]],i[c[2]]],p=a(a(d[0],d[1]),d[2]);if(!p)break;if(p===d[0]?c[0]++:p===d[1]?c[1]++:c[2]++,p.index<f)continue;const m=new qa(t,p.schema,p.index,p.lastIndex);this.__compiled__[m.schema].normalize(m,this),n.push(m),f=p.lastIndex}return n.length?n:null};et.prototype.matchAtStart=function(t){if(!t.length)return null;const n=this.re.schema_at_start.exec(t);if(!n)return null;const u=this.testSchemaAt(t,n[2],n[0].length);if(!u)return null;const i=new qa(t,n[2],n.index+n[1].length,n.index+n[0].length+u);return this.__compiled__[i.schema].normalize(i,this),i};et.prototype.tlds=function(t,n){return t=Array.isArray(t)?t:[t],n?(this.__tlds__=this.__tlds__.concat(t).sort().filter(function(u,i,s){return u!==s[i-1]}).reverse(),ei(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,ei(this),this)};et.prototype.normalize=function(t){t.schema||(t.url=`http://${t.url}`),t.schema==="mailto:"&&!/^mailto:/i.test(t.url)&&(t.url=`mailto:${t.url}`)};et.prototype.onCompile=function(){};const Fn=2147483647,vt=36,Ws=1,pu=26,fm=38,dm=700,Ra=72,Oa=128,La="-",pm=/^xn--/,hm=/[^\0-\x7F]/,mm=/[\x2E\u3002\uFF0E\uFF61]/g,bm={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Vi=vt-Ws,wt=Math.floor,Gi=String.fromCharCode;function Xt(e){throw new RangeError(bm[e])}function gm(e,t){const n=[];let u=e.length;for(;u--;)n[u]=t(e[u]);return n}function $a(e,t){const n=e.split("@");let u="";n.length>1&&(u=n[0]+"@",e=n[1]),e=e.replace(mm,".");const i=e.split("."),s=gm(i,t).join(".");return u+s}function Ba(e){const t=[];let n=0;const u=e.length;for(;n<u;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<u){const s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}const xm=e=>String.fromCodePoint(...e),_m=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:vt},So=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},Na=function(e,t,n){let u=0;for(e=n?wt(e/dm):e>>1,e+=wt(e/t);e>Vi*pu>>1;u+=vt)e=wt(e/Vi);return wt(u+(Vi+1)*e/(e+fm))},za=function(e){const t=[],n=e.length;let u=0,i=Oa,s=Ra,r=e.lastIndexOf(La);r<0&&(r=0);for(let o=0;o<r;++o)e.charCodeAt(o)>=128&&Xt("not-basic"),t.push(e.charCodeAt(o));for(let o=r>0?r+1:0;o<n;){const l=u;for(let c=1,f=vt;;f+=vt){o>=n&&Xt("invalid-input");const d=_m(e.charCodeAt(o++));d>=vt&&Xt("invalid-input"),d>wt((Fn-u)/c)&&Xt("overflow"),u+=d*c;const p=f<=s?Ws:f>=s+pu?pu:f-s;if(d<p)break;const m=vt-p;c>wt(Fn/m)&&Xt("overflow"),c*=m}const a=t.length+1;s=Na(u-l,a,l==0),wt(u/a)>Fn-i&&Xt("overflow"),i+=wt(u/a),u%=a,t.splice(u++,0,i)}return String.fromCodePoint(...t)},ja=function(e){const t=[];e=Ba(e);const n=e.length;let u=Oa,i=0,s=Ra;for(const l of e)l<128&&t.push(Gi(l));const r=t.length;let o=r;for(r&&t.push(La);o<n;){let l=Fn;for(const c of e)c>=u&&c<l&&(l=c);const a=o+1;l-u>wt((Fn-i)/a)&&Xt("overflow"),i+=(l-u)*a,u=l;for(const c of e)if(c<u&&++i>Fn&&Xt("overflow"),c===u){let f=i;for(let d=vt;;d+=vt){const p=d<=s?Ws:d>=s+pu?pu:d-s;if(f<p)break;const m=f-p,E=vt-p;t.push(Gi(So(p+m%E,0))),f=wt(m/E)}t.push(Gi(So(f,0))),s=Na(i,a,o===r),i=0,++o}++i,++u}return t.join("")},ym=function(e){return $a(e,function(t){return pm.test(t)?za(t.slice(4).toLowerCase()):t})},Em=function(e){return $a(e,function(t){return hm.test(t)?"xn--"+ja(t):t})},Ha={version:"2.3.1",ucs2:{decode:Ba,encode:xm},decode:za,encode:ja,toASCII:Em,toUnicode:ym},km={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},vm={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},wm={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},Am={default:km,zero:vm,commonmark:wm},Cm=/^(vbscript|javascript|file|data):/,Sm=/^data:image\/(gif|png|jpeg|webp);/;function Dm(e){const t=e.trim().toLowerCase();return Cm.test(t)?Sm.test(t):!0}const Ua=["http:","https:","mailto:"];function Tm(e){const t=js(e,!0);if(t.hostname&&(!t.protocol||Ua.indexOf(t.protocol)>=0))try{t.hostname=Ha.toASCII(t.hostname)}catch{}return xu(zs(t))}function Pm(e){const t=js(e,!0);if(t.hostname&&(!t.protocol||Ua.indexOf(t.protocol)>=0))try{t.hostname=Ha.toUnicode(t.hostname)}catch{}return qn(zs(t),qn.defaultChars+"%")}function We(e,t){if(!(this instanceof We))return new We(e,t);t||Us(e)||(t=e||{},e="default"),this.inline=new yu,this.block=new yi,this.core=new Vs,this.renderer=new On,this.linkify=new et,this.validateLink=Dm,this.normalizeLink=Tm,this.normalizeLinkText=Pm,this.utils=Fh,this.helpers=gi({},Rh),this.options={},this.configure(e),t&&this.set(t)}We.prototype.set=function(e){return gi(this.options,e),this};We.prototype.configure=function(e){const t=this;if(Us(e)){const n=e;if(e=Am[n],!e)throw new Error('Wrong `markdown-it` preset "'+n+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this};We.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){n=n.concat(this[i].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));const u=e.filter(function(i){return n.indexOf(i)<0});if(u.length&&!t)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+u);return this};We.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){n=n.concat(this[i].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));const u=e.filter(function(i){return n.indexOf(i)<0});if(u.length&&!t)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+u);return this};We.prototype.use=function(e){const t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this};We.prototype.parse=function(e,t){if(typeof e!="string")throw new Error("Input data should be a String");const n=new this.core.State(e,this,t);return this.core.process(n),n.tokens};We.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)};We.prototype.parseInline=function(e,t){const n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens};We.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)};const Fm={},Mm={class:"mx-auto w-full max-w-[1200px] px-4 sm:px-6"};function Im(e,t){return N(),j("div",Mm,[Tn(e.$slots,"default")])}const ve=un(Fm,[["render",Im]]),qm={class:"post"},Rm={class:"mx-auto max-w-3xl py-12 sm:py-16"},Om={class:"text-3xl font-bold text-ink sm:text-4xl"},Lm={key:0,class:"mt-2 text-sm text-ink-soft"},$m=["innerHTML"],Bm={__name:"default",props:{slug:String},setup(e){const t=e,n=bi(),u=t.slug||n.path.split("/").pop().replace(/\.html$/,""),i=Ka(u),s=Re(()=>!!i&&(i.meta.hide===!0||i.meta.hide==="true")),r=new We({html:!0}),o=Re(()=>i?r.render(i.content):"");return bt({title:`${s.value?"内容已移除":i?i.meta.title:"Post"} - ${St}`}),(l,a)=>(N(),j("article",qm,[F(ve,null,{default:Q(()=>[g("div",Rm,[s.value?(N(),j(oe,{key:0},[a[0]||(a[0]=g("h1",{class:"text-3xl font-bold text-ink sm:text-4xl"},"内容已移除",-1)),a[1]||(a[1]=g("p",{class:"mt-4 leading-relaxed text-ink-soft"},"该文章的内容已被作者移除，暂时无法访问。",-1))],64)):(N(),j(oe,{key:1},[g("h1",Om,U(Ce(i)?Ce(i).meta.title:"Post"),1),Ce(i)?(N(),j("p",Lm,U(Ce(i).meta.date)+" · "+U(Ce(i).meta.author),1)):Ge("",!0),g("div",{class:"post-content mt-6",innerHTML:o.value},null,8,$m)],64))])]),_:1})]))}},Nm=un(Bm,[["__scopeId","data-v-d9a30e9a"]]),zm={class:"post"},jm={class:"mx-auto max-w-3xl py-12 sm:py-16"},Hm=["innerHTML"],Um={__name:"hello-world",props:{slug:String},setup(e){const t=e,n=bi(),u=t.slug||n.path.split("/").pop().replace(/\.html$/,""),i=Ka(u),s=Re(()=>!!i&&(i.meta.hide===!0||i.meta.hide==="true")),r=new We({html:!0}),o=Re(()=>i?r.render(i.content):"");return bt({title:`${s.value?"内容已移除":i?i.meta.title:"Post"} - ${St}`}),(l,a)=>(N(),j("article",zm,[F(ve,null,{default:Q(()=>[g("div",jm,[s.value?(N(),j(oe,{key:0},[a[0]||(a[0]=g("h1",{class:"text-3xl font-bold text-ink sm:text-4xl"},"内容已移除",-1)),a[1]||(a[1]=g("p",{class:"mt-4 leading-relaxed text-ink-soft"},"该文章的内容已被作者移除，暂时无法访问。",-1))],64)):(N(),j("div",{key:1,class:"post-content mt-6",innerHTML:o.value},null,8,Hm))])]),_:1})]))}},Qm=un(Um,[["__scopeId","data-v-ae4cab28"]]),Vm={class:"relative overflow-hidden bg-gradient-to-br from-canvas-blue via-white to-canvas-green"},Gm={key:0,class:"mb-3 text-1xl font-semibold uppercase tracking-widest text-primary"},Wm={key:1,class:"mx-auto mt-4 max-w-3xl text-base text-ink-soft sm:text-lg"},Km={key:2,class:"mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"},_n={__name:"PageHero",props:{eyebrow:{type:String,default:""},title:{type:String,required:!0},subtitle:{type:String,default:""},variant:{type:String,default:"inner"}},setup(e){return(t,n)=>(N(),j("section",Vm,[n[0]||(n[0]=g("div",{class:"grid-bg pointer-events-none absolute inset-0 opacity-70"},null,-1)),n[1]||(n[1]=g("div",{class:"pointer-events-none absolute inset-0 opacity-80",style:{background:"radial-gradient(55% 55% at 75% 0%, rgba(76,58,158,0.14), transparent)"}},null,-1)),F(ve,{class:"relative"},{default:Q(()=>[g("div",{class:ft([e.variant==="home"?"py-20 lg:py-28":"py-14 lg:py-20","text-center"])},[e.eyebrow?(N(),j("p",Gm,U(e.eyebrow),1)):Ge("",!0),g("h1",{class:ft([e.variant==="home"?"text-4xl sm:text-5xl lg:text-6xl":"text-3xl sm:text-4xl lg:text-5xl","font-bold leading-tight text-ink"])},U(e.title),3),e.subtitle?(N(),j("p",Wm,U(e.subtitle),1)):Ge("",!0),t.$slots.actions?(N(),j("div",Km,[Tn(t.$slots,"actions")])):Ge("",!0)],2)]),_:3})]))}},Xm={class:"page"},Zm={class:"mx-auto max-w-3xl py-12 sm:py-16"},Jm=["innerHTML"],Ym={__name:"about",props:{slug:String},setup(e){const t=e,n=bi(),u=t.slug||n.path.split("/").pop().replace(/\.html$/,""),i=Xa(u),s=new We({html:!0}),r=Re(()=>i?s.render(i.content):"");return bt({title:`${i?i.meta.title:"Page"} - ${St}`}),(o,l)=>(N(),j("article",Xm,[F(_n,{variant:"inner",eyebrow:"关于商友",title:"从单机工具，到 AI 获客引擎",subtitle:"品牌自 2008 年延续至今。我们见证了中小企业获客方式的演进，也把自己的产品同步升级。"}),F(ve,null,{default:Q(()=>[g("div",Zm,[g("div",{class:"page-content mt-6",innerHTML:r.value},null,8,Jm)])]),_:1})]))}},eb=un(Ym,[["__scopeId","data-v-7b966028"]]),tb={},nb={class:"group h-full rounded-2xl border border-transparent bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover sm:p-7"};function ub(e,t){return N(),j("div",nb,[Tn(e.$slots,"default")])}const Qa=un(tb,[["render",ub]]),ib=["href"],ct={__name:"Button",props:{to:{type:String,default:""},href:{type:String,default:""},variant:{type:String,default:"primary"},size:{type:String,default:"md"}},emits:["click"],setup(e){const t=e,n=Re(()=>{const u="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 min-h-[44px]",i=t.size==="sm"?"px-4 text-sm min-h-[40px]":"px-6 text-base";return t.variant==="secondary"?`${u} ${i} border border-primary/30 bg-white text-primary hover:border-primary hover:bg-canvas-blue`:t.variant==="ghost"?`${u} ${i} text-ink-soft hover:text-primary`:`${u} ${i} bg-primary text-white shadow-card hover:bg-primary-light hover:shadow-card-hover`});return(u,i)=>{const s=Ut("RouterLink");return e.to?(N(),uu(s,{key:0,to:e.to,class:ft(n.value)},{default:Q(()=>[Tn(u.$slots,"default")]),_:3},8,["to","class"])):e.href?(N(),j("a",{key:1,href:e.href,class:ft(n.value),target:"_blank",rel:"noopener"},[Tn(u.$slots,"default")],10,ib)):(N(),j("button",{key:2,class:ft(n.value),onClick:i[0]||(i[0]=r=>u.$emit("click"))},[Tn(u.$slots,"default")],2))}}},sb={class:"py-14 sm:py-20"},rb={class:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"},ob={class:"text-sm font-medium text-brand"},lb={class:"mb-4 mt-1 text-lg font-semibold text-ink"},ab={class:"mb-4 space-y-1.5 text-sm text-ink-soft"},cb={class:"grid grid-cols-2 gap-3"},fb={class:"text-xl font-bold text-data tabular-nums"},db={class:"mt-0.5 text-xs text-ink-soft"},pb={class:"mt-12 rounded-2xl bg-brand px-6 py-10 text-center text-white"},hb={class:"mt-6 flex justify-center"},mb={__name:"cases",setup(e){const t=[{industry:"外贸 B2B",title:"某机械制造出口企业",points:["此前依赖展会名录，自主新客来源单一","用采集 AI 按目标市场站点优先级清单补量","清洗 + 画像后按地区与域名归属归档"],metrics:[{label:"有效线索率",value:"+18%"},{label:"查站整理时间",value:"-6h/周"},{label:"A 档线索占比",value:"23%"},{label:"无效联系占比",value:"-31%"}]},{industry:"电商引流",title:"某家居品类电商",points:["沉睡客分散在多个表格，缺统一标签","清洗 AI 去重归一后打活跃度标签","Lookalike 扩展相似人群并分级"],metrics:[{label:"首选跟进覆盖",value:"92%"},{label:"人工整理时间",value:"-4h/周"},{label:"重复线索",value:"-47%"},{label:"唤醒响应率",value:"+9%"}]},{industry:"本地服务",title:"某区域企业服务机构",points:["按城市 / 园区找目标商户靠人工翻录","关键词扩展 + 地区标签批量定位","就近优先 + 价值评分排跟进顺序"],metrics:[{label:"区域覆盖率",value:"+35%"},{label:"线索去重率",value:"38%"},{label:"陌拜无效率",value:"-26%"},{label:"跟进清单产出",value:"每日"}]}];return bt({title:`效果案例 - ${St}`}),(n,u)=>(N(),j("div",null,[F(_n,{variant:"inner",eyebrow:"效果案例",title:"用脱敏数据，证明「找得准」",subtitle:"以下均为聚合 / 去标识化指标，不暴露任何客户原始名单、邮箱或手机号。"}),g("section",sb,[F(ve,null,{default:Q(()=>[g("div",rb,[(N(),j(oe,null,Fe(t,i=>F(Qa,{key:i.title},{default:Q(()=>[g("p",ob,U(i.industry),1),g("h3",lb,U(i.title),1),g("ul",ab,[(N(!0),j(oe,null,Fe(i.points,s=>(N(),j("li",{key:s,class:"flex gap-2"},[u[0]||(u[0]=g("span",{class:"mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"},null,-1)),g("span",null,U(s),1)]))),128))]),g("div",cb,[(N(!0),j(oe,null,Fe(i.metrics,s=>(N(),j("div",{key:s.label,class:"rounded-xl bg-brand-soft px-3 py-3 text-center"},[g("p",fb,U(s.value),1),g("p",db,U(s.label),1)]))),128))])]),_:2},1024)),64))]),g("div",pb,[u[2]||(u[2]=g("h3",{class:"text-2xl font-bold"},"想知道你的线索质量能改善多少？",-1)),u[3]||(u[3]=g("p",{class:"mx-auto mt-2 max-w-2xl text-white/80"},"预约一次线索诊断，我们用你的场景说明可衡量的指标口径。",-1)),g("div",hb,[F(ct,{to:"/pages/contact.html",variant:"secondary"},{default:Q(()=>[...u[1]||(u[1]=[ie("预约线索诊断",-1)])]),_:1})])]),u[4]||(u[4]=g("p",{class:"mt-6 text-center text-xs text-ink-soft"}," 说明：案例数据为聚合统计与去标识化处理后的结果，不涉及任何客户原始名单或隐私信息。 ",-1))]),_:1})])]))}},bb={class:"page"},gb={class:"mx-auto max-w-3xl py-12 sm:py-16"},xb={class:"text-3xl font-bold text-ink sm:text-4xl"},_b=["innerHTML"],yb={__name:"default",props:{slug:String},setup(e){const t=e,n=bi(),u=t.slug||n.path.split("/").pop().replace(/\.html$/,""),i=Xa(u),s=new We({html:!0}),r=Re(()=>i?s.render(i.content):"");return bt({title:`${i?i.meta.title:"Page"} - ${St}`}),(o,l)=>(N(),j("article",bb,[F(ve,null,{default:Q(()=>[g("div",gb,[g("h1",xb,U(Ce(i)?Ce(i).meta.title:"Page"),1),g("div",{class:"page-content mt-6",innerHTML:r.value},null,8,_b)])]),_:1})]))}},Eb=un(yb,[["__scopeId","data-v-53337c99"]]),kb={key:0,class:"mb-2 text-sm font-semibold uppercase tracking-widest text-primary"},vb={class:"text-2xl font-bold text-ink sm:text-3xl lg:text-4xl"},$t={__name:"SectionTitle",props:{eyebrow:{type:String,default:""},title:{type:String,required:!0},subtitle:{type:String,default:""},align:{type:String,default:"center"}},setup(e){return(t,n)=>(N(),j("div",{class:ft([e.align==="center"?"text-center":"text-left","mb-10"])},[e.eyebrow?(N(),j("p",kb,U(e.eyebrow),1)):Ge("",!0),g("h2",vb,U(e.title),1),e.subtitle?(N(),j("p",{key:1,class:ft(["mt-3 max-w-3xl text-base text-ink-soft sm:text-lg",e.align==="center"?"mx-auto":"mx-0"])},U(e.subtitle),3)):Ge("",!0)],2))}},wb={class:"hidden gap-2 lg:flex lg:items-stretch"},Ab={class:"flex-1 rounded-xl border border-[#E3E6EB] bg-white p-4 shadow-card"},Cb={class:"flex items-center gap-2"},Sb={class:"inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand text-xs font-bold text-white tabular-nums"},Db={class:"text-base font-semibold text-ink"},Tb={class:"mt-2 text-xs text-ink-soft"},Pb={class:"mt-3 flex items-center gap-1.5 text-[11px]"},Fb={class:"rounded border border-[#E3E6EB] bg-canvas-blue px-1.5 py-0.5 text-ink-soft"},Mb={class:"rounded border border-brand/25 bg-brand-soft px-1.5 py-0.5 font-medium text-brand"},Ib={class:"mt-3 border-t border-dashed border-[#E3E6EB] pt-2 text-[11px] leading-relaxed text-data"},qb={key:0,class:"mt-1 text-[11px] leading-relaxed text-accent-dark"},Rb={key:0,class:"flex shrink-0 items-center justify-center text-brand/40"},Ob={class:"relative space-y-3 lg:hidden"},Lb={class:"absolute left-3 top-4 inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand text-xs font-bold text-white tabular-nums"},$b={class:"text-base font-semibold text-ink"},Bb={class:"mt-1.5 text-xs text-ink-soft"},Nb={class:"mt-2.5 flex flex-wrap items-center gap-1.5 text-[11px]"},zb={class:"rounded border border-[#E3E6EB] bg-canvas-blue px-1.5 py-0.5 text-ink-soft"},jb={class:"rounded border border-brand/25 bg-brand-soft px-1.5 py-0.5 font-medium text-brand"},Hb={class:"mt-2.5 border-t border-dashed border-[#E3E6EB] pt-2 text-[11px] leading-relaxed text-data"},Ub={key:0,class:"mt-1 text-[11px] leading-relaxed text-accent-dark"},Va={__name:"AcquisitionFunnel",setup(e){const t=[{title:"采集 AI",desc:"不知道该采哪些站、采集慢、结果杂乱",input:"公开网页",output:"原始线索",ai:"关键词/行业/地区智能扩展、站点优先级评分、多源采集",note:"边界：仅公开可访问信息，遵守 robots.txt，不做登录态抓取与邮箱爆破"},{title:"清洗 AI",desc:"重复数据多、失效地址多、格式不统一",input:"原始线索",output:"干净线索库",ai:"多源去重、失效剔除、格式归一化、大文件智能拆分分组",note:"数据不出本地，全程本地处理"},{title:"画像 AI",desc:"只有号码/邮箱，不知道对方是谁",input:"干净线索",output:"多维标签",ai:"行业/地区/域名归属/活跃度标签、聚类与 Lookalike 扩展",note:"仅上传脱敏特征参与云端计算"},{title:"分级 AI",desc:"名单一锅端，不知道先跟谁",input:"多维标签",output:"A/B/C 分档",ai:"线索价值评分 0–100、优先级分档、今日优先跟进清单",note:"评分本地完成，原始数据不出境"},{title:"触达衔接",desc:"分好级也没法用、白白浪费",input:"分级清单",output:"本地客户端",ai:"交付自有本地发送客户端；AI 仅给开场话术、主题行与跟进节奏建议",note:"发送全程在你自己的本地客户端完成，商友不代发"}];return(n,u)=>(N(),j("div",null,[g("div",wb,[(N(),j(oe,null,Fe(t,(i,s)=>(N(),j(oe,{key:i.title},[g("article",Ab,[g("div",Cb,[g("span",Sb,U(s+1),1),g("h3",Db,U(i.title),1)]),g("p",Tb,U(i.desc),1),g("div",Pb,[g("span",Fb,U(i.input),1),u[0]||(u[0]=g("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3 shrink-0 text-accent",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2.2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 5l7 7-7 7"})],-1)),g("span",Mb,U(i.output),1)]),g("p",Ib," AI 作用点："+U(i.ai),1),i.note?(N(),j("p",qb,U(i.note),1)):Ge("",!0)]),s<t.length-1?(N(),j("div",Rb,[...u[1]||(u[1]=[g("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 5l7 7-7 7M4 12h16"})],-1)])])):Ge("",!0)],64))),64))]),g("ol",Ob,[(N(),j(oe,null,Fe(t,(i,s)=>g("li",{key:i.title,class:"relative rounded-xl border border-[#E3E6EB] bg-white p-4 pl-12 shadow-card"},[g("span",Lb,U(s+1),1),g("h3",$b,U(i.title),1),g("p",Bb,U(i.desc),1),g("div",Nb,[g("span",zb,U(i.input),1),u[2]||(u[2]=g("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3 text-accent",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2.2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 5l7 7-7 7"})],-1)),g("span",jb,U(i.output),1)]),g("p",Hb,"AI 作用点："+U(i.ai),1),i.note?(N(),j("p",Ub,U(i.note),1)):Ge("",!0)])),64))])]))}},Qb={class:"py-14 sm:py-16"},Vb={class:"pb-16 sm:pb-20"},Gb={class:"space-y-6"},Wb={class:"flex flex-wrap items-center gap-3"},Kb={class:"inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand text-sm font-bold text-white tabular-nums"},Xb={class:"text-xl font-semibold text-ink"},Zb={class:"rounded-full border border-data/30 bg-data/10 px-3 py-1 text-xs font-medium text-data"},Jb={class:"mt-4 text-sm leading-relaxed text-ink-soft"},Yb={class:"mt-3 grid grid-cols-1 gap-2 text-sm text-ink-soft sm:grid-cols-2"},e3={key:0,class:"mt-4 rounded-xl border-l-4 border-accent bg-accent-soft px-4 py-2.5 text-sm leading-relaxed text-accent-dark"},t3={key:1,class:"mt-3 text-xs text-ink-soft"},n3={class:"w-full border-t border-[#E3E6EB] bg-canvas-blue py-14 sm:py-16"},u3={class:"overflow-x-auto rounded-2xl border border-[#E3E6EB] bg-white"},i3={class:"w-full min-w-[640px] text-left text-sm"},s3={class:"divide-y divide-[#E3E6EB]"},r3={class:"px-4 py-3 text-ink-soft"},o3={class:"px-4 py-3 text-ink-soft"},l3={class:"px-4 py-3 text-ink"},a3={class:"py-14 text-center sm:py-16"},c3={class:"mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"},f3={__name:"engine",setup(e){const t=[{title:"采集 AI",problem:"不知道该采哪些站、采集慢、结果杂乱。",dataOut:"否（采集在本地客户端完成）",caps:["智能扩展：输入行业/地区/关键词，AI 自动扩展搜索词与目标站点清单","站点优先级评分：按线索密度、更新频率、可采集性排序，先采高价值站点","多源采集：公开网页的 Email / 手机号 / 企业信息，支持关键词 + 网址双模式","采集限额与礼貌抓取：遵守 robots.txt、频次自适应，不做对抗"],boundary:"仅采集公开可访问信息；不做登录态抓取、不做邮箱存活爆破或探测、不绕过验证码与反爬机制。",from:"虫虫Email搜索 + 商友手机号码搜索机"},{title:"清洗 AI",problem:"重复数据多、失效地址多、格式不统一，大文件没法直接处理。",dataOut:"否（本地处理）",caps:["多源去重：按邮箱 / 手机号 / 企业域合并重复线索","失效格式剔除与脏字符清理，统一产出干净字段","大文件按行智能拆分与分组，适配下游工具单次处理上限","结果导出 Txt / CSV / Excel，字段可选"],boundary:"清洗全程在本地完成，原始名单不上传。",from:"商友文件拆分助手 + 旧版去重过滤"},{title:"画像 AI",problem:"只有号码或邮箱，不知道对方是谁、属于什么行业。",dataOut:"仅上传脱敏特征",caps:["多维标签：行业、地区、运营商、企业域名归属、活跃度","联系人聚类与 Lookalike 扩展：以已成交客户为种子扩展相似线索","去标识化处理：敏感字段加密 / 哈希后才参与云端计算"],boundary:"云端只接触脱敏特征与聚合统计，不接触原始名单。",from:"旧版归属地批量查询"},{title:"分级 AI",problem:"名单一锅端，不知道先跟谁、跟进顺序靠感觉。",dataOut:"否",caps:["线索价值评分（0–100）与 A/B/C 优先级分档","评分维度可配置：匹配度、活跃度、数据完整度、历史互动","输出「今日优先跟进清单」，直接可用于销售排期"],boundary:"评分在本地完成，原始数据不出境。",from:"新增能力"},{title:"触达衔接",problem:"分好级也没法用，结果白白浪费。",dataOut:"否（发送全程在用户本地客户端，商友不代发）",caps:["把分好级的线索交付给你自己的本地发送客户端","AI 仅提供开场话术、主题行与跟进节奏建议","域名、IP、SMTP/ESMTP 与发送声誉由你自持"],boundary:"商友不提供、不暗示云端代发或代发通道，也不按发送量计费。",from:"电子邮件逐个发（商友邮件群发软件）"}],n=[{old:"电子邮件逐个发（商友邮件群发软件）",price:"¥508 / ¥762 终身",now:"触达衔接：本地客户端 + AI 话术与节奏建议"},{old:"虫虫Email搜索",price:"¥288 / ¥432 终身",now:"采集 AI：公开网页线索采集与站点优先级评分"},{old:"商友手机号码搜索机",price:"¥398 / ¥598 终身",now:"采集 AI + 画像 AI：号码采集与多维标签、归属地升级"},{old:"商友文件拆分助手",price:"免费",now:"清洗 AI：大文件智能拆分与分组（继续免费保留）"},{old:"商友软件狗",price:"¥100",now:"保留：跨机使用授权能力（本地硬件钥匙）"}];return bt({title:`获客引擎 - ${St}`}),(u,i)=>(N(),j("div",null,[F(_n,{variant:"inner",eyebrow:"获客引擎",title:"五步，把公开网络变成你的线索资产",subtitle:"采集 AI → 清洗 AI → 画像 AI → 分级 AI → 触达衔接。每一步都写明解决什么问题、具体做什么、数据是否出台。"}),g("section",Qb,[F(ve,null,{default:Q(()=>[F(Va)]),_:1})]),g("section",Vb,[F(ve,null,{default:Q(()=>[F($t,{align:"left",eyebrow:"能力详情",title:"每一步到底做了什么"}),g("div",Gb,[(N(),j(oe,null,Fe(t,(s,r)=>g("article",{key:s.title,class:"rounded-2xl border border-[#E3E6EB] bg-white p-6 shadow-card sm:p-7"},[g("div",Wb,[g("span",Kb,U(r+1),1),g("h3",Xb,U(s.title),1),g("span",Zb,"数据出台："+U(s.dataOut),1)]),g("p",Jb,[i[0]||(i[0]=g("span",{class:"font-medium text-ink"},"解决的问题：",-1)),ie(U(s.problem),1)]),g("ul",Yb,[(N(!0),j(oe,null,Fe(s.caps,o=>(N(),j("li",{key:o,class:"flex gap-2"},[i[1]||(i[1]=g("span",{class:"mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"},null,-1)),g("span",null,U(o),1)]))),128))]),s.boundary?(N(),j("p",e3," 边界声明："+U(s.boundary),1)):Ge("",!0),s.from?(N(),j("p",t3,"承接旧产品："+U(s.from),1)):Ge("",!0)])),64))]),i[2]||(i[2]=g("p",{class:"mt-8 rounded-2xl bg-brand-soft px-6 py-5 text-center text-sm leading-relaxed text-ink"}," 线索库与名单全程留在你的本地；云端 AI 只处理脱敏特征与聚合统计。发送动作与通道仍由你自己的本地客户端完成，商友不代发。 ",-1))]),_:1})]),g("section",n3,[F(ve,null,{default:Q(()=>[F($t,{align:"left",eyebrow:"迁移对照",title:"旧产品 → 新能力模块",subtitle:"方便老用户确认「我那款现在对应哪个能力」。"}),g("div",u3,[g("table",i3,[i[3]||(i[3]=g("thead",{class:"bg-brand-soft text-ink"},[g("tr",null,[g("th",{class:"px-4 py-3 font-semibold"},"原产品（旧）"),g("th",{class:"px-4 py-3 font-semibold"},"旧价"),g("th",{class:"px-4 py-3 font-semibold"},"升级后对应能力模块（新）")])],-1)),g("tbody",s3,[(N(),j(oe,null,Fe(n,s=>g("tr",{key:s.old},[g("td",r3,U(s.old),1),g("td",o3,U(s.price),1),g("td",l3,U(s.now),1)])),64))])])])]),_:1})]),g("section",a3,[F(ve,null,{default:Q(()=>[i[6]||(i[6]=g("h2",{class:"text-2xl font-bold text-ink sm:text-3xl"},"想让这五步跑在你的业务上？",-1)),i[7]||(i[7]=g("p",{class:"mx-auto mt-3 max-w-2xl text-ink-soft"},"告诉我们你的行业与获客目标，我们用你的场景讲清楚该启用哪几步。",-1)),g("div",c3,[F(ct,{to:"/pages/contact.html",variant:"primary"},{default:Q(()=>[...i[4]||(i[4]=[ie("预约线索诊断",-1)])]),_:1}),F(ct,{to:"/pages/legacy.html",variant:"secondary"},{default:Q(()=>[...i[5]||(i[5]=[ie("我是老用户，看迁移",-1)])]),_:1})])]),_:1})])]))}},d3={class:"py-14 sm:py-20"},p3={id:"license",class:"scroll-mt-24"},h3={class:"rounded-2xl border border-[#E3E6EB] bg-white p-6 shadow-card"},m3={class:"sm:col-span-2"},b3={key:0,class:"mt-4 rounded-xl bg-brand-soft px-4 py-3 text-sm text-ink"},g3={id:"download",class:"scroll-mt-24 mt-12"},x3={class:"grid grid-cols-1 gap-4 sm:grid-cols-2"},_3={class:"text-sm font-medium text-ink"},y3={class:"mt-1 text-xs text-ink-soft"},E3={class:"mt-1 text-xs text-data"},k3={class:"mt-3 text-xs text-ink-soft"},v3={id:"migrate",class:"scroll-mt-24 mt-12"},w3={class:"overflow-x-auto rounded-2xl border border-[#E3E6EB] bg-white"},A3={class:"w-full min-w-[640px] text-left text-sm"},C3={class:"divide-y divide-[#E3E6EB]"},S3={class:"px-4 py-3 text-ink-soft"},D3={class:"px-4 py-3 text-ink"},T3={class:"mt-12"},P3={class:"space-y-3"},F3={class:"text-sm font-medium text-ink"},M3={class:"ml-2 text-xs text-ink-soft"},I3={class:"mt-1 text-sm text-ink-soft"},q3={class:"mt-12"},R3={class:"rounded-2xl border border-[#E3E6EB] bg-white p-6"},O3={class:"space-y-2 text-sm text-ink-soft"},L3={class:"mt-5"},$3={__name:"legacy",setup(e){const t=Yt(""),n=Yt(""),u=Yt(!1),i=[{name:"电子邮件逐个发（商友邮件群发软件）",version:"V8.8.1 Build 798 ｜ 2022-03-05",now:"对应：触达衔接（本地客户端 + AI 话术与节奏建议）"},{name:"虫虫Email搜索",version:"V3.6.0 Build 299 ｜ 2019-08-05",now:"对应：采集 AI（公开网页线索采集与站点优先级评分）"},{name:"商友手机号码搜索机",version:"V2.6.0 Build 1025 ｜ 2024-01-02",now:"对应：采集 AI + 画像 AI（号码采集与多维标签、归属地升级）"},{name:"商友文件拆分助手",version:"V1.3.0 ｜ 2013-08-20 ｜ 免费绿色版",now:"对应：清洗 AI（大文件智能拆分与分组，继续免费保留）"}],s=[{old:"电子邮件逐个发（商友邮件群发软件）",now:"触达衔接：本地客户端 + AI 话术与节奏建议"},{old:"虫虫Email搜索",now:"采集 AI：公开网页线索采集与站点优先级评分"},{old:"商友手机号码搜索机",now:"采集 AI + 画像 AI：号码采集与多维标签、归属地升级"},{old:"商友文件拆分助手（免费）",now:"清洗 AI：大文件智能拆分与分组（继续免费保留）"},{old:"商友软件狗",now:"保留：跨机使用授权能力（本地硬件钥匙）"}],r=[{v:"电子邮件逐个发 V8.8.1 Build 798",date:"2022-03-05",note:"主力单机投递版本，SMTP 逐封投递与发送节奏控制最后一版。"},{v:"商友手机号码搜索机 V2.6.0 Build 1025",date:"2024-01-02",note:"网页 + 本地文件抓取号码，归属地批量查询。"},{v:"虫虫Email搜索 V3.6.0 Build 299",date:"2019-08-05",note:"网页 / 搜索引擎抓取邮箱的经典版本。"},{v:"商友文件拆分助手 V1.3.0",date:"2013-08-20",note:"大文本按行拆分，绿色免安装。"}],o=["商友软件狗为本地硬件钥匙，用于跨机使用授权，需妥善保管。","更换电脑时请先在新机器安装对应版本，再联系我们迁移授权信息。","软件狗遗失或损坏时，凭购买邮箱与注册码核对后可协助处理。"];return bt({title:`老用户专区 - ${St}`}),(l,a)=>{const c=Ut("RouterLink");return N(),j("div",null,[F(_n,{variant:"inner",eyebrow:"老用户专区",title:"老用户，欢迎回来",subtitle:"授权查询、旧版软件下载、版本迁移指引与历史版本，都在这里。产品升级了，你的资产没有被丢下。"}),g("section",d3,[F(ve,null,{default:Q(()=>[g("div",p3,[F($t,{align:"left",eyebrow:"找回",title:"授权查询",subtitle:"不确定自己买过什么？用订单编号 / 序列号找回所购产品与下载权。"}),g("div",h3,[g("form",{class:"grid grid-cols-1 gap-4 sm:grid-cols-2",onSubmit:a[2]||(a[2]=Sf(f=>u.value=!0,["prevent"]))},[sr(g("input",{"onUpdate:modelValue":a[0]||(a[0]=f=>t.value=f),type:"email",placeholder:"订单编号",class:"min-h-[44px] rounded-xl border border-[#E3E6EB] bg-white px-4 text-sm outline-none focus:border-brand"},null,512),[[Or,t.value]]),sr(g("input",{"onUpdate:modelValue":a[1]||(a[1]=f=>n.value=f),placeholder:"序列号",class:"min-h-[44px] rounded-xl border border-[#E3E6EB] bg-white px-4 text-sm outline-none focus:border-brand"},null,512),[[Or,n.value]]),g("div",m3,[F(ct,{type:"submit",variant:"primary"},{default:Q(()=>[...a[3]||(a[3]=[ie("查询我的授权",-1)])]),_:1}),a[4]||(a[4]=g("p",{class:"mt-3 text-xs text-ink-soft"},"查询请求仅用于核对购买记录；若忘记订单编号，请通过下方任一联系方式人工协助。",-1))])],32),u.value?(N(),j("div",b3," 授权核对需要与购买记录匹配，请通过本页「联系我们」方式提供订单编号与序列号，我们会协助你确认。 ")):Ge("",!0)])]),g("div",g3,[F($t,{align:"left",eyebrow:"下载",title:"旧版软件下载",subtitle:"历史安装包仅供已授权的老用户继续使用。"}),g("div",x3,[(N(),j(oe,null,Fe(i,f=>g("div",{key:f.name,class:"rounded-xl border border-[#E3E6EB] bg-white px-4 py-3"},[g("p",_3,U(f.name),1),g("p",y3,U(f.version),1),g("p",E3,U(f.now),1)])),64))]),g("p",k3,[a[6]||(a[6]=ie(" 历史版本的可执行软件下载服务器已关闭，请通过页脚联系方式或 ",-1)),F(c,{to:"/pages/contact.html",class:"text-brand underline-offset-2 hover:underline"},{default:Q(()=>[...a[5]||(a[5]=[ie("联系我们",-1)])]),_:1}),a[7]||(a[7]=ie(" 获取；新用户建议直接使用 AI 获客引擎。 ",-1))])]),g("div",v3,[F($t,{align:"left",eyebrow:"升级",title:"旧产品 → 新能力迁移指引",subtitle:"对照下表即可确认AI时代新旧能力的不同。"}),g("div",w3,[g("table",A3,[a[8]||(a[8]=g("thead",{class:"bg-brand-soft text-ink"},[g("tr",null,[g("th",{class:"px-4 py-3 font-semibold"},"原产品（旧）"),g("th",{class:"px-4 py-3 font-semibold"},"升级后对应能力模块（新）")])],-1)),g("tbody",C3,[(N(),j(oe,null,Fe(s,f=>g("tr",{key:f.old},[g("td",S3,U(f.old),1),g("td",D3,U(f.now),1)])),64))])])])]),g("div",T3,[F($t,{align:"left",eyebrow:"归档",title:"历史版本说明",subtitle:"保留各软件的历史版本记录，便于核对兼容性与更新轨迹。"}),g("ul",P3,[(N(),j(oe,null,Fe(r,f=>g("li",{key:f.v,class:"rounded-xl border border-[#E3E6EB] bg-white px-4 py-3"},[g("p",F3,[ie(U(f.v)+" ",1),g("span",M3,U(f.date),1)]),g("p",I3,U(f.note),1)])),64))])]),g("div",q3,[F($t,{align:"left",eyebrow:"授权",title:"软件狗与更换电脑"}),g("div",R3,[g("ul",O3,[(N(),j(oe,null,Fe(o,f=>g("li",{key:f,class:"flex gap-2"},[a[9]||(a[9]=g("span",{class:"mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"},null,-1)),g("span",null,U(f),1)])),64))]),g("div",L3,[F(ct,{to:"/pages/contact.html",variant:"primary"},{default:Q(()=>[...a[10]||(a[10]=[ie("联系客服处理换机",-1)])]),_:1})])])])]),_:1})])])}}},B3={class:"py-14 sm:py-20"},N3={class:"grid grid-cols-1 gap-6 md:grid-cols-2"},z3={class:"mb-3 text-xl font-semibold text-ink"},j3={class:"space-y-3 text-sm"},H3={class:"text-ink-soft"},U3={class:"text-ink-soft"},Q3={class:"text-ink-soft"},V3={class:"mt-12 rounded-2xl bg-brand-soft px-6 py-8 text-center"},G3={class:"mt-6 flex justify-center"},W3={__name:"solutions",setup(e){const t=[{title:"外贸 B2B",pain:"展会名单之外没有自主获客渠道，采购联系人难找，目标市场企业信息分散。",power:"采集 AI（目标市场 / 行业站点优先级评分、多源采集）→ 清洗 AI（去重、企业域归并）→ 画像 AI（地区、域名归属）→ 分级 AI（A/B/C）。",result:"某外贸企业有效线索率由基线提升若干个百分点，人工查站与整理时间每周减少数小时（脱敏口径）。"},{title:"电商引流",pain:"品类相关触点零散，旧客资料沉在各处，唤醒时缺画像、缺分层。",power:"清洗 AI（多源去重、格式归一）→ 画像 AI（活跃度、聚类与 Lookalike 扩展）→ 分级 AI（优先跟进清单）→ 触达衔接。",result:"唤醒触达前的人工整理时间明显下降，优先跟进名单覆盖度提升（脱敏口径）。"},{title:"本地服务",pain:"按城市 / 区域找商户与需求方只能人工翻，地推与陌拜成本高。",power:"采集 AI（地区 + 品类关键词扩展）→ 清洗 AI（失效剔除）→ 画像 AI（地区标签）→ 分级 AI（就近 + 价值排序）。",result:"目标区域线索覆盖率提升，无效联系占比下降（脱敏口径）。"},{title:"渠道拓展",pain:"经销商 / 代理商名单靠人脉推荐，批量发现难，分级没有依据。",power:"采集 AI（关键词 + 网址双模式）→ 图像 AI（企业域名归属）→ 分级 AI（价值评分 0–100、A/B/C 分档）→ 触达衔接。",result:"候选渠道数量与有效对话线索数同步增长，筛选耗时下降（脱敏口径）。"}];return bt({title:`行业方案 - ${St}`}),(n,u)=>(N(),j("div",null,[F(_n,{variant:"inner",eyebrow:"行业方案",title:"同一个获客引擎，不同的战场",subtitle:"按获客场景拆分：先说清楚名单从哪来，再看应该用哪几步 AI。"}),g("section",B3,[F(ve,null,{default:Q(()=>[g("div",N3,[(N(),j(oe,null,Fe(t,i=>F(Qa,{key:i.title},{default:Q(()=>[g("h3",z3,U(i.title),1),g("div",j3,[g("div",null,[u[0]||(u[0]=g("p",{class:"mb-1 font-medium text-danger/85"},"获客痛点",-1)),g("p",H3,U(i.pain),1)]),g("div",null,[u[1]||(u[1]=g("p",{class:"mb-1 font-medium text-brand"},"商友能力组合（对应漏斗步骤）",-1)),g("p",U3,U(i.power),1)]),g("div",null,[u[2]||(u[2]=g("p",{class:"mb-1 font-medium text-data"},"预期效果（脱敏）",-1)),g("p",Q3,U(i.result),1)])])]),_:2},1024)),64))]),g("div",V3,[u[4]||(u[4]=g("h3",{class:"text-xl font-bold text-ink"},"没有找到你的场景？",-1)),u[5]||(u[5]=g("p",{class:"mx-auto mt-2 max-w-2xl text-sm text-ink-soft"},"告诉我们你的行业与获客目标，我们用你的场景对应到具体的 AI 步骤。",-1)),g("div",G3,[F(ct,{to:"/pages/contact.html",variant:"primary"},{default:Q(()=>[...u[3]||(u[3]=[ie("预约线索诊断",-1)])]),_:1})])])]),_:1})])]))}},K3={class:"hidden w-full bg-brand-dark text-white sm:block"},X3={__name:"TopBar",setup(e){return(t,n)=>{const u=Ut("RouterLink");return N(),j("div",K3,[F(ve,{class:"flex items-center justify-end gap-4 py-1.5 text-xs"},{default:Q(()=>[n[3]||(n[3]=g("span",{class:"opacity-80"},"老用户？",-1)),F(u,{to:"/pages/legacy.html#download",class:"min-h-[28px] leading-[28px] transition-colors hover:text-accent"},{default:Q(()=>[...n[0]||(n[0]=[ie("旧版软件下载",-1)])]),_:1}),n[4]||(n[4]=g("span",{class:"opacity-40"},"·",-1)),F(u,{to:"/pages/legacy.html#license",class:"min-h-[28px] leading-[28px] transition-colors hover:text-accent"},{default:Q(()=>[...n[1]||(n[1]=[ie("授权查询",-1)])]),_:1}),n[5]||(n[5]=g("span",{class:"opacity-40"},"·",-1)),F(u,{to:"/pages/legacy.html#migrate",class:"min-h-[28px] leading-[28px] transition-colors hover:text-accent"},{default:Q(()=>[...n[2]||(n[2]=[ie("新旧能力指引",-1)])]),_:1})]),_:1})])}}},Z3="/favicon.svg",J3={class:"sticky top-0 z-50 border-b border-[#E3E6EB] bg-white/92 backdrop-blur"},Y3={class:"inline-flex h-9 w-9 items-center justify-center rounded-lg text-sm text-white"},eg=["alt"],tg={class:"flex flex-col leading-tight"},ng={class:"text-lg"},ug={class:"hidden items-center gap-7 text-sm font-medium text-ink-soft md:flex"},ig={class:"hidden md:block"},sg={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},rg={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},og={key:0,class:"border-t border-[#E3E6EB] bg-white md:hidden"},lg={__name:"SiteHeader",setup(e){const t=Yt(!1),n=[{label:"首页",to:"/"},{label:"获客引擎",to:"/pages/engine.html"},{label:"行业方案",to:"/pages/solutions.html"},{label:"效果案例",to:"/pages/cases.html"},{label:"关于商友",to:"/pages/about.html"}],u=St;return(i,s)=>{const r=Ut("RouterLink");return N(),j("header",J3,[F(ve,{class:"flex h-16 items-center justify-between"},{default:Q(()=>[F(r,{to:"/",class:"flex items-center gap-2.5 font-bold text-ink"},{default:Q(()=>[g("span",Y3,[g("img",{src:Z3,alt:Ce(u),class:"h-9 w-9"},null,8,eg)]),g("span",tg,[g("span",ng,U(Ce(u)),1),s[4]||(s[4]=g("span",{class:"text-[11px] font-medium uppercase tracking-widest text-brand"},"AI 获客引擎",-1))])]),_:1}),g("nav",ug,[(N(),j(oe,null,Fe(n,o=>F(r,{key:o.to,to:o.to,class:ft(["transition-colors hover:text-brand",o.muted?"opacity-70 hover:opacity-100":""])},{default:Q(()=>[ie(U(o.label),1)]),_:2},1032,["to","class"])),64))]),g("div",ig,[F(ct,{to:"/pages/contact.html",variant:"primary",size:"sm"},{default:Q(()=>[...s[5]||(s[5]=[ie("免费试用获客引擎",-1)])]),_:1})]),g("button",{class:"inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink md:hidden","aria-label":"打开菜单",onClick:s[0]||(s[0]=o=>t.value=!t.value)},[t.value?(N(),j("svg",rg,[...s[7]||(s[7]=[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 6l12 12M18 6L6 18"},null,-1)])])):(N(),j("svg",sg,[...s[6]||(s[6]=[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"},null,-1)])]))])]),_:1}),F(ef,{name:"drawer"},{default:Q(()=>[t.value?(N(),j("nav",og,[F(ve,{class:"flex flex-col py-2"},{default:Q(()=>[(N(),j(oe,null,Fe(n,o=>F(r,{key:o.to,to:o.to,class:"min-h-[44px] border-b border-[#E3E6EB] py-3 text-ink-soft last:border-0",onClick:s[1]||(s[1]=l=>t.value=!1)},{default:Q(()=>[ie(U(o.label),1)]),_:2},1032,["to"])),64)),F(r,{to:"/pages/legacy.html",class:"min-h-[44px] py-3 text-ink-soft",onClick:s[2]||(s[2]=o=>t.value=!1)},{default:Q(()=>[...s[8]||(s[8]=[ie("老用户专区",-1)])]),_:1}),F(r,{to:"/pages/contact.html",class:"my-2 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand font-semibold text-white",onClick:s[3]||(s[3]=o=>t.value=!1)},{default:Q(()=>[...s[9]||(s[9]=[ie("免费试用获客引擎",-1)])]),_:1})]),_:1})])):Ge("",!0)]),_:1})])}}},ag=un(lg,[["__scopeId","data-v-809ab898"]]),cg={class:"console-grid border-t border-white/10 bg-ink text-gray-300"},fg={class:"space-y-2 text-sm"},dg={class:"space-y-2 text-sm"},pg={class:"border-t border-white/10"},hg={class:"border-t border-white/10"},mg={class:"flex flex-wrap gap-4"},bg={__name:"SiteFooter",setup(e){return di(()=>{window._hmt=window._hmt||[];const t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?ec825788c11ff68e02d8d06b4ef4f506",t.async=!0;const n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}),(t,n)=>{const u=Ut("RouterLink");return N(),j("footer",cg,[F(ve,{class:"grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4"},{default:Q(()=>[n[10]||(n[10]=g("div",null,[g("div",{class:"mb-3 flex items-center gap-2.5 text-lg font-bold text-white"},[g("span",{class:"inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.8"},[g("circle",{cx:"12",cy:"12",r:"9"}),g("circle",{cx:"12",cy:"12",r:"4.5"}),g("circle",{cx:"12",cy:"12",r:"1",fill:"currentColor",stroke:"none"})])]),g("span",{class:"flex flex-col leading-tight"},[g("span",null,"商友软件"),g("span",{class:"text-[11px] font-medium uppercase tracking-widest text-accent"},"AI 获客引擎")])]),g("p",{class:"text-sm leading-relaxed"},"先找到对的人，再说对的话。公开信息合规采集 → AI 清洗画像分级 → 交付你自己的本地客户端精准触达。")],-1)),g("div",null,[n[4]||(n[4]=g("h4",{class:"mb-3 text-sm font-semibold text-white"},"产品",-1)),g("ul",fg,[g("li",null,[F(u,{to:"/pages/engine.html",class:"transition-colors hover:text-accent"},{default:Q(()=>[...n[0]||(n[0]=[ie("获客引擎",-1)])]),_:1})]),g("li",null,[F(u,{to:"/pages/solutions.html",class:"transition-colors hover:text-accent"},{default:Q(()=>[...n[1]||(n[1]=[ie("行业方案",-1)])]),_:1})]),g("li",null,[F(u,{to:"/pages/cases.html",class:"transition-colors hover:text-accent"},{default:Q(()=>[...n[2]||(n[2]=[ie("效果案例",-1)])]),_:1})]),g("li",null,[F(u,{to:"/pages/contact.html",class:"transition-colors hover:text-accent"},{default:Q(()=>[...n[3]||(n[3]=[ie("联系我们",-1)])]),_:1})])])]),g("div",null,[n[9]||(n[9]=g("h4",{class:"mb-3 text-sm font-semibold text-white"},"资源",-1)),g("ul",dg,[g("li",null,[F(u,{to:"/pages/about.html",class:"transition-colors hover:text-accent"},{default:Q(()=>[...n[5]||(n[5]=[ie("关于商友",-1)])]),_:1})]),g("li",null,[F(u,{to:"/pages/compliance.html",class:"transition-colors hover:text-accent"},{default:Q(()=>[...n[6]||(n[6]=[ie("合规说明",-1)])]),_:1})]),g("li",null,[F(u,{to:"/pages/legacy.html",class:"transition-colors hover:text-accent"},{default:Q(()=>[...n[7]||(n[7]=[ie("老用户专区",-1)])]),_:1})]),g("li",null,[F(u,{to:"/sitemap.html",class:"transition-colors hover:text-accent"},{default:Q(()=>[...n[8]||(n[8]=[ie("站点地图",-1)])]),_:1})])])]),n[11]||(n[11]=g("div",null,[g("h4",{class:"mb-3 text-sm font-semibold text-white"},"联系我们"),g("address",{class:"space-y-1 text-sm not-italic leading-relaxed"},[g("p",null,"上海延誉信息技术有限公司"),g("p",null,"上海市浦东新区商城路 518 号内外联大厦"),g("p",null,"邮编 200120"),g("p",null,[g("a",{href:"https://www.abot.cn",target:"_blank",rel:"noopener",class:"transition-colors hover:text-accent"},"延誉宝")])])],-1))]),_:1}),g("div",pg,[F(ve,{class:"flex flex-col gap-2 py-4 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between"},{default:Q(()=>[...n[12]||(n[12]=[g("div",{class:"flex flex-wrap items-center gap-3"},[g("span",{class:"text-gray-500"},"友情链接："),g("a",{href:"https://www.abot.cn",target:"_blank",rel:"noopener",class:"transition-colors hover:text-accent"},"延誉宝"),g("span",{class:"text-gray-500"},"SEO"),g("span",{class:"text-gray-500"},"软件定制开发"),g("span",{class:"text-gray-500"},"邮件服务器软件"),g("span",{class:"text-gray-500"},"邮件群发软件")],-1)])]),_:1})]),g("div",hg,[F(ve,{class:"flex flex-col gap-2 py-4 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between"},{default:Q(()=>[n[17]||(n[17]=g("span",null,"© 2008–2026 商友软件　沪ICP备xxxxxxxx号",-1)),g("div",mg,[F(u,{to:"/pages/compliance.html",class:"transition-colors hover:text-gray-200"},{default:Q(()=>[...n[13]||(n[13]=[ie("合规说明",-1)])]),_:1}),F(u,{to:"/pages/legacy.html",class:"transition-colors hover:text-gray-200"},{default:Q(()=>[...n[14]||(n[14]=[ie("老用户专区",-1)])]),_:1}),F(u,{to:"/pages/contact.html",class:"transition-colors hover:text-gray-200"},{default:Q(()=>[...n[15]||(n[15]=[ie("联系我们",-1)])]),_:1}),n[16]||(n[16]=g("a",{href:"https://www.abot.cn",target:"_blank",rel:"noopener",class:"transition-colors hover:text-gray-200"},"延誉宝",-1))])]),_:1})])])}}},gg={class:"flex min-h-screen flex-col bg-white"},xg={class:"flex-1"},_g={__name:"DefaultLayout",setup(e){return(t,n)=>{const u=Ut("RouterView");return N(),j("div",gg,[F(X3),F(ag),g("main",xg,[F(u)]),F(bg)])}}},yg={class:"py-16 sm:py-20"},Eg={class:"console-grid w-full bg-brand-dark py-12 text-white"},kg={class:"mt-8 grid grid-cols-1 gap-6 text-center sm:grid-cols-3"},vg={class:"text-xl font-semibold text-accent"},wg={class:"mx-auto mt-2 max-w-xs text-sm leading-relaxed text-white/75"},Ag={class:"py-16 sm:py-20"},Cg={class:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"},Sg=["innerHTML"],Dg={class:"mb-2 text-lg font-semibold text-ink"},Tg={class:"text-sm leading-relaxed text-ink-soft"},Pg={class:"w-full bg-brand-soft py-16 sm:py-20"},Fg={class:"mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"},Mg={__name:"index",setup(e){const t=[{title:"线索库在你本地",desc:"名单与联系人默认存于你自己的电脑，云端不留存原始名单。"},{title:"越用越值钱",desc:"清洗、画像、分级结果持续沉淀，可复用并随经营积累增值。"},{title:"谁也别想拿走",desc:"原始名单不出本地，云端 AI 只处理脱敏特征与聚合统计。"}],n=[{title:"外贸 B2B",desc:"展会名单之外也能自主获客：按目标市场与企业类型采集、比对、分级，再交给你的本地客户端跟进。",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path stroke-linecap="round" stroke-linejoin="round" d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18"/></svg>'},{title:"电商引流",desc:"品类相关公开触点线索整理、去重归档与标签补全，配合你已有的触达节奏做唤醒与复购。",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M3 4h2l2.5 11h11L20 7H6"/><circle cx="9" cy="19" r="1.6"/><circle cx="17" cy="19" r="1.6"/></svg>'},{title:"本地服务",desc:"按城市 / 区域采集本地商户与需求方线索，就近筛选优先跟进对象，降低地推与电话陌拜成本。",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>'}];return bt({title:jp}),(u,i)=>{const s=Ut("RouterLink");return N(),j("div",null,[F(_n,{variant:"home",eyebrow:"AI 获客引擎",title:"让 AI 替你把客户找出来",subtitle:"公开信息里藏着你的客户，商友把它们变成可经营的线索资产"},{actions:Q(()=>[F(ct,{to:"/pages/contact.html",variant:"primary"},{default:Q(()=>[...i[0]||(i[0]=[ie("免费试用获客引擎",-1)])]),_:1}),F(ct,{to:"/pages/engine.html",variant:"secondary"},{default:Q(()=>[...i[1]||(i[1]=[ie("看看 3 分钟怎么跑通一条线索",-1)])]),_:1})]),_:1}),g("section",yg,[F(ve,null,{default:Q(()=>[F($t,{eyebrow:"五步获客流水线",title:"采集 AI → 清洗 AI → 画像 AI → 分级 AI → 触达衔接",subtitle:"每一步都标注输入 / 输出与 AI 作用点。线索数据默认留在你的本地，云端 AI 只处理脱敏特征与聚合统计。"}),F(Va),i[2]||(i[2]=g("p",{class:"mt-6 text-center text-sm text-ink-soft"},"公开信息进，线索资产出；AI 负责把「找得到」变成「找得准」。",-1))]),_:1})]),g("section",Eg,[F(ve,null,{default:Q(()=>[i[3]||(i[3]=g("h2",{class:"text-center text-2xl font-bold sm:text-3xl"},"线索资产：越用越值钱",-1)),g("div",kg,[(N(),j(oe,null,Fe(t,r=>g("div",{key:r.title},[g("p",vg,U(r.title),1),g("p",wg,U(r.desc),1)])),64))])]),_:1})]),g("section",Ag,[F(ve,null,{default:Q(()=>[F($t,{eyebrow:"场景快照",title:"不同行业，同一条获客流水线",subtitle:"先看三个高频获客场景，完整方案在「行业方案」页展开。",align:"center"}),g("div",Cg,[(N(),j(oe,null,Fe(n,r=>F(s,{key:r.title,to:"/pages/solutions.html",class:"group rounded-2xl border border-[#E3E6EB] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-card-hover"},{default:Q(()=>[g("div",{class:"mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand",innerHTML:r.icon},null,8,Sg),g("h3",Dg,U(r.title),1),g("p",Tg,U(r.desc),1),i[4]||(i[4]=g("p",{class:"mt-4 text-sm font-medium text-brand group-hover:text-accent-dark"},"查看方案 →",-1))]),_:2},1024)),64))])]),_:1})]),g("section",Pg,[F(ve,{class:"text-center"},{default:Q(()=>[i[7]||(i[7]=g("h2",{class:"text-2xl font-bold text-ink sm:text-3xl"},"你的人你来定，AI 帮你找得准",-1)),i[8]||(i[8]=g("p",{class:"mx-auto mt-3 max-w-2xl text-ink-soft"}," 先从一次线索诊断开始：告诉我们你的行业与获客目标，我们用你的场景讲清楚可以用到哪几步 AI。 ",-1)),g("div",Fg,[F(ct,{to:"/pages/contact.html",variant:"primary"},{default:Q(()=>[...i[5]||(i[5]=[ie("预约线索诊断",-1)])]),_:1}),F(ct,{to:"/pages/cases.html",variant:"secondary"},{default:Q(()=>[...i[6]||(i[6]=[ie("看看脱敏效果数据",-1)])]),_:1})])]),_:1})])])}}},Ig={class:"py-12 sm:py-16"},qg={class:"mx-auto max-w-3xl space-y-10"},Rg={class:"divide-y divide-gray-100 rounded-2xl border border-gray-100"},Og={class:"px-4 py-3"},Lg={key:0},$g={class:"mb-3 text-xl font-semibold text-ink"},Bg={class:"divide-y divide-gray-100 rounded-2xl border border-gray-100"},Ng={class:"text-xs text-ink-soft"},zg={__name:"sitemap",setup(e){const t=Ga(),n=Wa(),u=t.filter(s=>!(s.meta.hide===!0||s.meta.hide==="true")),i=n.filter(s=>!(s.meta.hide===!0||s.meta.hide==="true"));return bt({title:`站点地图 - ${St}`}),(s,r)=>{const o=Ut("RouterLink");return N(),j("div",null,[F(_n,{variant:"inner",eyebrow:"导航",title:"站点地图",subtitle:"全站页面与文章一览。"}),g("section",Ig,[F(ve,null,{default:Q(()=>[g("div",qg,[g("div",null,[r[1]||(r[1]=g("h2",{class:"mb-3 text-xl font-semibold text-ink"},"主要页面",-1)),g("ul",Rg,[(N(!0),j(oe,null,Fe(Ce(i),l=>(N(),j("li",{key:l.slug,class:"px-4 py-3"},[F(o,{to:`/pages/${l.slug}.html`,class:"text-primary hover:underline"},{default:Q(()=>[ie(U(l.meta.title||l.slug),1)]),_:2},1032,["to"])]))),128)),g("li",Og,[F(o,{to:"/sitemap.html",class:"text-primary hover:underline"},{default:Q(()=>[...r[0]||(r[0]=[ie("站点地图",-1)])]),_:1})])])]),Ce(u).length?(N(),j("div",Lg,[g("h2",$g,"文章（共 "+U(Ce(u).length)+" 篇）",1),g("ul",Bg,[(N(!0),j(oe,null,Fe(Ce(u),l=>(N(),j("li",{key:l.slug,class:"flex items-center justify-between px-4 py-3"},[F(o,{to:`/posts/${l.slug}.html`,class:"text-primary hover:underline"},{default:Q(()=>[ie(U(l.meta.title||l.slug),1)]),_:2},1032,["to"]),g("span",Ng,U(l.meta.date),1)]))),128))])])):Ge("",!0)])]),_:1})])])}}},ps=Object.assign({"../content/posts/getting-started.md":I1,"../content/posts/hello-world.md":q1,"../content/posts/qunfabiz-qunfa-bian-ge-email.md":R1,"../content/posts/qunfabiz-qunfa-bimiantuixin.md":O1,"../content/posts/qunfabiz-qunfa-butong-shoujianren-neirong.md":L1,"../content/posts/qunfabiz-qunfa-diu-youjian.md":$1,"../content/posts/qunfabiz-qunfa-duanxiaojinghan.md":B1,"../content/posts/qunfabiz-qunfa-email-questions-one-by-one.md":N1,"../content/posts/qunfabiz-qunfa-email-shoushen.md":z1,"../content/posts/qunfabiz-qunfa-email-template-shunvwu.md":j1,"../content/posts/qunfabiz-qunfa-error-qunfa-1300-fired.md":H1,"../content/posts/qunfabiz-qunfa-excel-email-address-list.md":U1,"../content/posts/qunfabiz-qunfa-gmail-auto-show-images.md":Q1,"../content/posts/qunfabiz-qunfa-lajiyoujian.md":V1,"../content/posts/qunfabiz-qunfa-mass-attach-and-big-image.md":G1,"../content/posts/qunfabiz-qunfa-mass-sending.md":W1,"../content/posts/qunfabiz-qunfa-mass-text-smtp-transfer.md":K1,"../content/posts/qunfabiz-qunfa-new-version-change-ip.md":X1,"../content/posts/qunfabiz-qunfa-optimize-title-email-marketing.md":Z1,"../content/posts/qunfabiz-qunfa-peizhi-smtp.md":J1,"../content/posts/qunfabiz-qunfa-qq-exmail-smtp.md":Y1,"../content/posts/qunfabiz-qunfa-qq-qun-2014.md":ep,"../content/posts/qunfabiz-qunfa-qunfa-sudu.md":tp,"../content/posts/qunfabiz-qunfa-qunfa-tupian.md":np,"../content/posts/qunfabiz-qunfa-set-email-sender.md":up,"../content/posts/qunfabiz-qunfa-shoujihaomaheguishudi.md":ip,"../content/posts/qunfabiz-qunfa-smtp-transfer-import-export.md":sp,"../content/posts/qunfabiz-qunfa-why-email-shoushen.md":rp,"../content/posts/qunfabiz-qunfa-yincang-zhenshi-fajianren.md":op,"../content/posts/qunfabiz-qunfa-yingjianyingxiaoajiudawuqu.md":lp,"../content/posts/qunfabiz-qunfa-youjianqunf-lajiyoujian.md":ap,"../content/posts/qunfabiz-qunfa-youjianqunfa-faq.md":cp,"../content/posts/qunfabiz-qunfa-youjianqunfa-help.md":fp,"../content/posts/qunfabiz-qunfa-youjianqunfa-lianxu.md":dp,"../content/posts/qunfabiz-qunfa-youjianqunfaruanjiandetuwenbianjiqi.md":pp,"../content/posts/qunfabiz-qunfa-youjianqunfaruhebaituo.md":hp,"../content/posts/qunfabiz-qunfa-zhuanhuanlv.md":mp,"../content/posts/qunfabiz-qunfa-zhuanye-smtp.md":bp,"../content/posts/qunfabiz-shouji-mobile-search-faq.md":gp,"../content/posts/qunfabiz-shouji-shouji-price-188.md":xp,"../content/posts/qunfabiz-sousuo-email-sipder-faq.md":_p,"../content/posts/qunfabiz-sousuo-email-spider-help.md":yp,"../content/posts/qunfabiz-sousuo-free-file-split.md":Ep,"../content/posts/qunfabiz-sousuo-mobile-search-help.md":kp,"../content/posts/qunfabiz-sousuo-why-duplicated-email-spider.md":vp,"../content/posts/qunfabiz-yingxiao-baibi-xiaojie.md":wp,"../content/posts/qunfabiz-yingxiao-beihushideyoujianqunfaxijie.md":Ap,"../content/posts/qunfabiz-yingxiao-change-pc.md":Cp,"../content/posts/qunfabiz-yingxiao-chufashi-youjianyingxiao.md":Sp,"../content/posts/qunfabiz-yingxiao-get-product-key.md":Dp,"../content/posts/qunfabiz-yingxiao-marketing2014.md":Tp,"../content/posts/qunfabiz-yingxiao-piliangchaxunshoujihaomaguishudi.md":Pp,"../content/posts/qunfabiz-yingxiao-quickly-avoid-spam-email.md":Fp,"../content/posts/qunfabiz-yingxiao-qunfa-yingxiao-4-yaosu.md":Mp,"../content/posts/qunfabiz-yingxiao-softdog.md":Ip,"../content/posts/qunfabiz-yingxiao-travel-website-email-marketing.md":qp}),hs=Object.assign({"../content/pages/about.md":Rp,"../content/pages/cases.md":Op,"../content/pages/compliance.md":Lp,"../content/pages/contact.md":$p,"../content/pages/engine.md":Bp,"../content/pages/legacy.md":Np,"../content/pages/solutions.md":zp}),Do=Object.assign({"../pages/post/default.vue":Nm,"../pages/post/hello-world.vue":Qm}),To=Object.assign({"../pages/page/about.vue":eb,"../pages/page/cases.vue":mb,"../pages/page/default.vue":Eb,"../pages/page/engine.vue":f3,"../pages/page/legacy.vue":$3,"../pages/page/solutions.vue":W3}),jg=Object.assign({"../layouts/DefaultLayout.vue":_g}),Hg=Object.assign({"../pages/index.vue":Mg}),Ug=Object.assign({"../pages/sitemap.vue":zg});function ki(e){const t=e.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);if(!t)return{meta:{},content:e};const n={};return t[1].split(`
`).forEach(u=>{const[i,...s]=u.split(":");i&&s.length&&(n[i.trim()]=s.join(":").trim())}),{meta:n,content:t[2]}}function Ga(){return Object.entries(ps).map(([e,t])=>{const n=e.split("/").pop().replace(".md",""),{meta:u,content:i}=ki(t);return{slug:n,meta:u,content:i}}).sort((e,t)=>new Date(t.meta.date)-new Date(e.meta.date))}function Qg(e){const t=Do[`../pages/post/${e}.vue`],n=Do["../pages/post/default.vue"];return t||n}function Wa(){return Object.entries(hs).map(([e,t])=>{const n=e.split("/").pop().replace(".md",""),{meta:u,content:i}=ki(t);return{slug:n,meta:u,content:i}})}function Vg(e){const t=To[`../pages/page/${e}.vue`],n=To["../pages/page/default.vue"];return t||n}function Gg(){return jg["../layouts/DefaultLayout.vue"]}function Wg(){return Hg["../pages/index.vue"]}function Kg(){return Ug["../pages/sitemap.vue"]}function Ka(e){const t=`../content/posts/${e}.md`;if(!ps[t])return null;const{meta:n,content:u}=ki(ps[t]);return{slug:e,meta:n,content:u}}function Xa(e){const t=`../content/pages/${e}.md`;if(!hs[t])return null;const{meta:n,content:u}=ki(hs[t]);return{slug:e,meta:n,content:u}}const Xg=[{path:"/",component:Gg(),children:[{path:"",component:Wg(),alias:"/index.html"},{path:"sitemap",component:Kg(),alias:"/sitemap.html"},...Ga().map(e=>({path:`posts/${e.slug}`,component:Qg(e.slug),props:{slug:e.slug},alias:`/posts/${e.slug}.html`})),...Wa().map(e=>({path:`pages/${e.slug}`,component:Vg(e.slug),props:{slug:e.slug},alias:`/pages/${e.slug}.html`}))]}],Zg=aa({history:ra("/"),routes:Xg});S1(M1,{routes:Zg.options.routes},({app:e})=>{const t=T1();e.use(t)},{});
