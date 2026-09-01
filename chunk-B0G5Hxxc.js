import{An as fN,B as Ie$1,Dn as e9,Dr as ss,En as dn,Et as Se$1,Fn as hX,G as Jk,In as he$1,Ir as un,It as Tp,Kr as xE,L as IR,Mn as fg,N as HD,O as Fo,Q as M,Qn as le$1,Qr as ye,Qt as Wr$1,Rn as ht$1,S as Ex,Sn as cs,Sr as rx,St as Rl,V as Ii$1,Xn as kl,Xr as yD,Yr as xl,Zt as Wc$1,_ as E,_t as QM,a as Ap,at as Mt,bt as Rd,cr as nt,ct as Np,d as C,dt as Op,en as Yn$1,er as m,fn as al,fr as oc,gt as Q,hr as pX,i as Ao,in as _7,it as Mp,j as Gn$1,jr as uA,jt as Ss,kr as tN,ln as _x,lr as nw,m as DD,mt as Ph,nn as Zt$1,o as As,on as _N,or as ne$1,p as Cp,pn as as,pr as ol,pt as Pe$1,q as Kr$1,ri as zc,rn as _,s as At$1,sn as _S,sr as nn,t as $$1,tt as MV,x as Ei$1,xn as cc,xr as rt$1,y as EN,yn as cD,z as Ic,zn as i9}from"./chunk-90LlFk5x.js";var Rn=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty(`disabled`,t)}static ɵfac=function(i){return new(i||n)(rt$1(al),rt$1(Gn$1))};static ɵdir=xl({type:n})}return n})();var xe=(()=>{class n extends Rn{static ɵfac=(()=>{let t;return function(r){return(t||(t=xE(n)))(r||n)}})();static ɵdir=xl({type:n,features:[cD]})}return n})();var _t=new E(``);var Ki={provide:_t,useExisting:Ic(()=>Pn),multi:!0};function qi(){let n=dn()?dn().getUserAgent():``;return/android (\d+)/.test(n.toLowerCase())}var Zi=new E(``);var Pn=(()=>{class n extends Rn{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode??=!qi()}writeValue(t){let i=t??``;this.setProperty(`value`,i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static ɵfac=function(i){return new(i||n)(rt$1(al),rt$1(Gn$1),rt$1(Zi,8))};static ɵdir=xl({type:n,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(i,r){i&1&&DD(`input`,function(a){return r._handleInput(a.target.value)})(`blur`,function(){return r.onTouched()})(`compositionstart`,function(){return r._compositionStart()})(`compositionend`,function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[HD([Ki]),cD]})}return n})();function we(n){return n==null||Me(n)===0}function Me(n){return n==null?null:Array.isArray(n)||typeof n==`string`?n.length:n instanceof Set?n.size:null}var yt=new E(``);var ie=new E(``);var Yi=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var Ne=class{static min(e){return Xi(e)}static max(e){return Qi(e)}static required(e){return Ln(e)}static requiredTrue(e){return Ji(e)}static email(e){return tr(e)}static minLength(e){return er(e)}static maxLength(e){return nr(e)}static pattern(e){return ir(e)}static nullValidator(e){return Zt()}static compose(e){return zn(e)}static composeAsync(e){return Wn(e)}};function Xi(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function Qi(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function Ln(n){return we(n.value)?{required:!0}:null}function Ji(n){return n.value===!0?null:{required:!0}}function tr(n){return we(n.value)||Yi.test(n.value)?null:{email:!0}}function er(n){return e=>{let t=e.value?.length??Me(e.value);return t===null||t===0?null:t<n?{minlength:{requiredLength:n,actualLength:t}}:null}}function nr(n){return e=>{let t=e.value?.length??Me(e.value);return t!==null&&t>n?{maxlength:{requiredLength:n,actualLength:t}}:null}}function ir(n){if(!n)return Zt;let e,t;return typeof n==`string`?(t=``,n.charAt(0)!==`^`&&(t+=`^`),t+=n,n.charAt(n.length-1)!==`$`&&(t+=`$`),e=new RegExp(t)):(t=n.toString(),e=n),i=>{if(we(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function Zt(n){return null}function Bn(n){return n!=null}function jn(n){return Rl(n)?At$1(n):n}function Un(n){let e={};return n.forEach(t=>{e=t!=null?C(C({},e),t):e}),Object.keys(e).length===0?null:e}function Gn(n,e){return e.map(t=>t(n))}function rr(n){return!n.validate}function Hn(n){return n.map(e=>rr(e)?e:t=>e.validate(t))}function zn(n){if(!n)return null;let e=n.filter(Bn);return e.length==0?null:function(t){return Un(Gn(t,e))}}function Ie(n){return n!=null?zn(Hn(n)):null}function Wn(n){if(!n)return null;let e=n.filter(Bn);return e.length==0?null:function(t){return Rd(Gn(t,e).map(jn)).pipe(he$1(Un))}}function Fe(n){return n!=null?Wn(Hn(n)):null}function xn(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function $n(n){return n._rawValidators}function Kn(n){return n._rawAsyncValidators}function Se(n){return n?Array.isArray(n)?n:[n]:[]}function Yt(n,e){return Array.isArray(n)?n.includes(e):n===e}function wn(n,e){let t=Se(e);return Se(n).forEach(r=>{Yt(t,r)||t.push(r)}),t}function Mn(n,e){return Se(e).filter(t=>!Yt(n,t))}var Xt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ie(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Fe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control?.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}};var j=class extends Xt{name;get formDirective(){return null}get path(){return null}};var ht=`VALID`;var qt=`INVALID`;var it=`PENDING`;var pt=`DISABLED`;var z=class{};var Qt=class extends z{value;source;constructor(e,t){super(),this.value=e,this.source=t}};var bt=class extends z{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}};var gt=class extends z{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}};var rt=class extends z{status;source;constructor(e,t){super(),this.status=e,this.source=t}};var Jt=class extends z{source;constructor(e){super(),this.source=e}};var Z=class extends z{source;constructor(e){super(),this.source=e}};function Ve(n){return(re(n)?n.validators:n)||null}function or(n){return Array.isArray(n)?Ie(n):n||null}function Te(n,e){return(re(e)?e.asyncValidators:n)||null}function ar(n){return Array.isArray(n)?Fe(n):n||null}function re(n){return n!=null&&!Array.isArray(n)&&typeof n==`object`}function qn(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new _(1e3,``);if(!Yn(i,t))throw new _(1001,``)}function Zn(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new _(-1002,``)})}var ot=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=nt(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return un(this.statusReactive)}set status(e){un(()=>this.statusReactive.set(e))}_status=Op(()=>this.statusReactive());statusReactive=nt(void 0);get valid(){return this.status===ht}get invalid(){return this.status===qt}get pending(){return this.status===it}get disabled(){return this.status===pt}get enabled(){return this.status!==pt}errors;get pristine(){return un(this.pristineReactive)}set pristine(e){un(()=>this.pristineReactive.set(e))}_pristine=Op(()=>this.pristineReactive());pristineReactive=nt(!0);get dirty(){return!this.pristine}get touched(){return un(this.touchedReactive)}set touched(e){un(()=>this.touchedReactive.set(e))}_touched=Op(()=>this.touchedReactive());touchedReactive=nt(!1);get untouched(){return!this.touched}_events=new le$1;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(wn(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(wn(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Mn(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Mn(e,this._rawAsyncValidators))}hasValidator(e){return Yt(this._rawValidators,e)}hasAsyncValidator(e){return Yt(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsTouched($$1(C({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new gt(!0,i))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),e.onlySelf||this._parent?._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new gt(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsDirty($$1(C({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new bt(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),e.onlySelf||this._parent?._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new bt(!0,i))}markAsPending(e={}){this.status=it;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new rt(this.status,t)),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.markAsPending($$1(C({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=pt,this.errors=null,this._forEachChild(r=>{r.disable($$1(C({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Qt(this.value,i)),this._events.next(new rt(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors($$1(C({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=ht,this._forEachChild(i=>{i.enable($$1(C({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors($$1(C({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){e.onlySelf||(this._parent?.updateValueAndValidity(e),e.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ht||this.status===it)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Qt(this.value,t)),this._events.next(new rt(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.updateValueAndValidity($$1(C({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?pt:ht}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=it,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:e!==!1};let i=jn(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(`.`)),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i?.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new rt(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new ht$1,this.statusChanges=new ht$1}_calculateStatus(){return this._allControlsDisabled()?pt:this.errors?qt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(it)?it:this._anyControlsHaveStatus(qt)?qt:ht}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,e.onlySelf||this._parent?._updatePristine(e,t),r&&this._events.next(new bt(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new gt(this.touched,t)),e.onlySelf||this._parent?._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){re(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=or(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ar(this._rawAsyncValidators)}_updateHasRequiredValidator(){un(()=>this._hasRequired.set(this.hasValidator(Ne.required)))}};function Yn(n,e){return Object.hasOwn(n,e)}function sr(n){return n.tagName===`INPUT`||n.tagName===`SELECT`||n.tagName===`TEXTAREA`}function cr(n,e,t,i){switch(t){case`name`:n.setAttribute(e,t,i);break;case`disabled`:case`readonly`:case`required`:i?n.setAttribute(e,t,``):n.removeAttribute(e,t);break;case`max`:case`min`:case`minLength`:case`maxLength`:i!==void 0?n.setAttribute(e,t,i.toString()):n.removeAttribute(e,t);break}}var Ce=class{kind;context;control;message;constructor({kind:e,context:t,control:i}){this.kind=e,this.context=t,this.control=i}};var lr=(()=>{class n{_validator=Zt;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):Zt,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static ɵfac=function(i){return new(i||n)};static ɵdir=xl({type:n,features:[Ph]})}return n})();var dr={provide:yt,useExisting:Ic(()=>Xn),multi:!0};var Xn=(()=>{class n extends lr{required;inputName=`required`;normalizeInput=nw;createValidator=t=>Ln;enabled(t){return t}static ɵfac=(()=>{let t;return function(r){return(t||(t=xE(n)))(r||n)}})();static ɵdir=xl({type:n,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(i,r){i&2&&As(`required`,r._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[HD([dr]),cD]})}return n})();var ur=new E(``);var Nt=new E(``,{factory:()=>oe});var oe=`always`;function Qn(n,e){return[...e.path,n]}function Ee(n,e,t=oe){Oe(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t===`always`)&&e.valueAccessor.setDisabledState?.(n.disabled),hr(n,e),fr(n,e),pr(n,e),mr(n,e)}function In(n,e,t=!0){let i=()=>{};e?.valueAccessor?.registerOnChange(i),e?.valueAccessor?.registerOnTouched(i),ee(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function te(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function mr(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function Oe(n,e){let t=$n(n);e.validator!==null?n.setValidators(xn(t,e.validator)):typeof t==`function`&&n.setValidators([t]);let i=Kn(n);e.asyncValidator!==null?n.setAsyncValidators(xn(i,e.asyncValidator)):typeof i==`function`&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();te(e._rawValidators,r),te(e._rawAsyncValidators,r)}function ee(n,e){let t=!1;if(n!==null){if(e.validator!==null){let r=$n(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==e.validator);o.length!==r.length&&(t=!0,n.setValidators(o))}}if(e.asyncValidator!==null){let r=Kn(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==e.asyncValidator);o.length!==r.length&&(t=!0,n.setAsyncValidators(o))}}}let i=()=>{};return te(e._rawValidators,i),te(e._rawAsyncValidators,i),t}function hr(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn===`change`&&Jn(n,e)})}function pr(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn===`blur`&&n._pendingChange&&Jn(n,e),n.updateOn!==`submit`&&n.markAsTouched()})}function Jn(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function fr(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function ti(n,e){Oe(n,e)}function br(n,e){return ee(n,e)}function ei(n,e){if(!n.hasOwnProperty(`model`))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function gr(n){return Object.getPrototypeOf(n.constructor)===xe}function ni(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn===`submit`&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function vr(n,e){if(!e)return null;let t,i,r;return e.forEach(o=>{o.constructor===Pn?t=o:gr(o)?i=o:r=o}),r||i||t||null}function _r(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var ii={provide:ur,useFactory:()=>{let n=m(W,{self:!0});return{setParseErrors:e=>{n.setParseErrorSource(e)},set onReset(e){n.onReset=e}}}};var W=class extends Xt{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(e){this.userOnReset=e,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof Z&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=vr(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(e,t,i){super(),this.injector=e,this.renderer=t,this.rawValueAccessors=i,this.injector?.get(ye)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let e=this.injector?.get(Jk);if(!this.control||!e)return;let t=e.markForCheck.bind(e);this.subscription=new ne$1,this.subscription.add(this.control.valueChanges.subscribe(t)),this.subscription.add(this.control.statusChanges.subscribe(t)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof Z&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(e){!e.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!e.customControl||(this.isCustomControlBased=!0,e.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),e.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=sr(e.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof Xn))}ngControlUpdate(e,t){if(!this.isCustomControlBased)return;let i=this.control,r=this.customControlBindings;Object.is(r.value,i.value)||(r.value=i.value,e.setCustomControlModelInput(i.value)),this.bindControlProperty(e,r,`touched`,i.touched),this.bindControlProperty(e,r,`dirty`,i.dirty),this.bindControlProperty(e,r,`valid`,i.valid),this.bindControlProperty(e,r,`invalid`,i.invalid),this.bindControlProperty(e,r,`pending`,i.pending),this.bindControlProperty(e,r,`disabled`,i.disabled),this.shouldBindRequired&&this.bindControlProperty(e,r,`required`,this.isRequired);let o=i.errors;if(r.errors!==o){r.errors=o;let a=this._convertErrors(o);e.setInputOnDirectives(`errors`,a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(e,t,i,r){if(t[i]===r)return;t[i]=r;let o=e.setInputOnDirectives(i,r);this.isNativeFormElement&&!o&&(i===`disabled`||i===`required`)&&this.renderer&&cr(this.renderer,e.nativeElement,i,r)}_convertErrors(e){if(e===null)return[];let t=this.control;return Object.entries(e).map(([i,r])=>new Ce({context:r,kind:i,control:t}))}setParseErrorSource(e){if(e===void 0)return;let t=null,i=Op(()=>{let r=e();return r.length===0?null:r.reduce((o,a)=>(o[a.kind]=a,o),{})});this.parseErrorsValidator=(()=>t).bind(this),Wc$1(()=>{t=i(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(e){this.parseErrorsValidator&&(e?.removeValidators(this.parseErrorsValidator),e?.updateValueAndValidity({emitEvent:!1}))}};var ne=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Ro=(()=>{class n extends ne{constructor(t){super(t)}static ɵfac=function(i){return new(i||n)(rt$1(W,2))};static ɵdir=xl({type:n,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(i,r){i&2&&kl(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)},standalone:!1,features:[cD]})}return n})();var Po=(()=>{class n extends ne{constructor(t){super(t)}static ɵfac=function(i){return new(i||n)(rt$1(j,10))};static ɵdir=xl({type:n,selectors:[[``,`formGroupName`,``],[``,`formArrayName`,``],[``,`ngModelGroup`,``],[``,`formGroup`,``],[``,`formArray`,``],[`form`,3,`ngNoForm`,``],[``,`ngForm`,``]],hostVars:16,hostBindings:function(i,r){i&2&&kl(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)(`ng-submitted`,r.isSubmitted)},standalone:!1,features:[cD]})}return n})();var at=class extends ot{constructor(e,t,i){super(Ve(t),Te(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this._find(e)||(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){let i=this._find(e);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){let r=this._find(e);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this._find(e)?.enabled===!0}setValue(e,t={}){un(()=>{Zn(this,!0,e),Object.keys(e).forEach(i=>{qn(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this._find(i);r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,$$1(C({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new Z(this))}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,o)=>{i=t(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return Yn(this.controls,e)?this.controls[e]:null}};var Ae=class extends at{};var yr={provide:j,useExisting:Ic(()=>Nr)};var ft=Promise.resolve();var Nr=(()=>{class n extends j{callSetDisabledState;get submitted(){return un(this.submittedReactive)}_submitted=Op(()=>this.submittedReactive());submittedReactive=nt(!1);_directives=new Set;form;ngSubmit=new ht$1;options;constructor(t,i,r){super(),this.callSetDisabledState=r,this.form=new at({},Ie(t),Fe(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){ft.then(()=>{t.control=this._findContainer(t.path).registerControl(t.name,t.control),t._setupWithForm(this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){ft.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){ft.then(()=>{let i=this._findContainer(t.path),r=new at({});ti(r,t),i.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){ft.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,i){ft.then(()=>{this.form.get(t.path).setValue(i)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),ni(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new Jt(this.control)),t?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static ɵfac=function(i){return new(i||n)(rt$1(yt,10),rt$1(ie,10),rt$1(Nt,8))};static ɵdir=xl({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(i,r){i&1&&DD(`submit`,function(a){return r.onSubmit(a)})(`reset`,function(){return r.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[HD([yr]),cD]})}return n})();function Fn(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Vn(n){return typeof n==`object`&&n!==null&&Object.keys(n).length===2&&`value`in n&&`disabled`in n}var vt=class extends ot{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(Ve(t),Te(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),re(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Vn(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){un(()=>{this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)})}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new Z(this))}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Fn(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Fn(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Vn(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Sr=n=>n instanceof vt;var Cr={provide:W,useExisting:Ic(()=>Er)};var Tn=Promise.resolve();var Er=(()=>{class n extends W{_changeDetectorRef;callSetDisabledState;control=new vt;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name=``;isDisabled;model;options;update=new ht$1;constructor(t,i,r,o,a,c,h,v){super(h,v,o),this._changeDetectorRef=a,this.callSetDisabledState=c,this._parent=t,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||`name`in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}`isDisabled`in t&&this._updateDisabled(t),ei(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}ɵngControlCreate(t){super.ngControlCreate(t)}ɵngControlUpdate(t){super.ngControlUpdate(t,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Ee(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(t){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Ee(this.control,this,t))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Tn.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&nw(i);Tn.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Qn(t,this._parent):[t]}static ɵfac=function(i){return new(i||n)(rt$1(j,9),rt$1(yt,10),rt$1(ie,10),rt$1(_t,10),rt$1(Jk,8),rt$1(Nt,8),rt$1(Ie$1,8),rt$1(al,8))};static ɵdir=xl({type:n,selectors:[[``,`ngModel`,``,3,`formControlName`,``,3,`formControl`,``]],inputs:{name:`name`,isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`],options:[0,`ngModelOptions`,`options`]},outputs:{update:`ngModelChange`},exportAs:[`ngModel`],standalone:!1,features:[HD([Cr,ii]),cD,Ph,rx(null)]})}return n})();var Bo=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=xl({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`ngNativeValidate`,``]],hostAttrs:[`novalidate`,``],standalone:!1})}return n})();var De=class extends ot{constructor(e,t,i){super(Ve(t),Te(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){Array.isArray(e)?e.forEach(i=>{this.controls.push(i),this._registerControl(i)}):(this.controls.push(e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,i={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,t={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),t&&(this.controls.splice(r,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){un(()=>{Zn(this,!1,e),e.forEach((i,r)=>{qn(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(e,t={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((i,r)=>{i.reset(e[r],$$1(C({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new Z(this))}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,i)=>i._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,i)=>{e(t,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};var Ar=(()=>{class n extends j{callSetDisabledState;get submitted(){return un(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=Op(()=>this._submittedReactive());_submittedReactive=nt(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,i,r){super(),this.callSetDisabledState=r,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){this._checkFormPresent(),t.hasOwnProperty(`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(ee(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let i=this.form.get(t.path);return t._setupWithForm(i,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){In(t.control||null,t,!1),_r(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,i){this.form.get(t.path).setValue(i)}onReset(){this.resetForm()}resetForm(t=void 0,i={}){this.form.reset(t,i),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,ni(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new Jt(this.control)),t?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(t=>{let i=t.control,r=this.form.get(t.path);i!==r&&(In(i||null,t),Sr(r)&&t._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let i=this.form.get(t.path);ti(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let i=this.form?.get(t.path);i&&br(i,t)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Oe(this.form,this),this._oldForm&&ee(this._oldForm,this)}_checkFormPresent(){this.form}static ɵfac=function(i){return new(i||n)(rt$1(yt,10),rt$1(ie,10),rt$1(Nt,8))};static ɵdir=xl({type:n,features:[cD,Ph]})}return n})();var ri=new E(``);var Dr={provide:W,useExisting:Ic(()=>xr)};var xr=(()=>{class n extends W{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new ht$1;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,r,o,a,c,h){super(h,c,o),this._ngModelWarningConfig=a,this._parent=t,this._setValidators(i),this._setAsyncValidators(r)}_setupWithForm(t,i){this.control=t,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Ee(t,this,i))}ngOnChanges(t){this._added||this._setUpControl(),ei(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Qn(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}ɵngControlCreate(t){super.ngControlCreate(t)}ɵngControlUpdate(t){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(t,!0))}static ɵfac=function(i){return new(i||n)(rt$1(j,13),rt$1(yt,10),rt$1(ie,10),rt$1(_t,10),rt$1(ri,8),rt$1(al,8),rt$1(Ie$1,8))};static ɵdir=xl({type:n,selectors:[[``,`formControlName`,``]],inputs:{name:[0,`formControlName`,`name`],isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`]},outputs:{update:`ngModelChange`},standalone:!1,features:[HD([Dr,ii]),cD,Ph,rx(null)]})}return n})();var wr={provide:j,useExisting:Ic(()=>Mr)};var Mr=(()=>{class n extends Ar{form=null;ngSubmit=new ht$1;get control(){return this.form}static ɵfac=(()=>{let t;return function(r){return(t||(t=xE(n)))(r||n)}})();static ɵdir=xl({type:n,selectors:[[``,`formGroup`,``]],hostBindings:function(i,r){i&1&&DD(`submit`,function(a){return r.onSubmit(a)})(`reset`,function(){return r.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[HD([wr]),cD]})}return n})();var Ir={provide:_t,useExisting:Ic(()=>ai),multi:!0};function oi(n,e){return n==null?`${e}`:(e&&typeof e==`object`&&(e=`Object`),`${n}: ${e}`.slice(0,50))}function Fr(n){return n.split(`:`)[0]}var ai=(()=>{class n extends xe{value;_optionMap=new Map;_idCounter=0;set compareWith(t){this._compareWith=t}_compareWith=Object.is;appRefInjector=m(Kr$1).injector;destroyRef=m(ye);cdr=m(Jk);_queuedWrite=!1;_writeValueAfterRender(){this._queuedWrite||this.appRefInjector.destroyed||(this._queuedWrite=!0,QM({write:()=>{this.destroyRef.destroyed||(this._queuedWrite=!1,this.writeValue(this.value))}},{injector:this.appRefInjector}))}writeValue(t){this.cdr.markForCheck(),this.value=t;let r=oi(this._getOptionId(t),t);this.setProperty(`value`,r)}registerOnChange(t){this.onChange=i=>{this.value=this._getOptionValue(i),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i),t))return i;return null}_getOptionValue(t){let i=Fr(t);return this._optionMap.has(i)?this._optionMap.get(i):t}static ɵfac=(()=>{let t;return function(r){return(t||(t=xE(n)))(r||n)}})();static ɵdir=xl({type:n,selectors:[[`select`,`formControlName`,``,3,`multiple`,``,3,`ngNoCva`,``],[`select`,`formControl`,``,3,`multiple`,``,3,`ngNoCva`,``],[`select`,`ngModel`,``,3,`multiple`,``,3,`ngNoCva`,``]],hostBindings:function(i,r){i&1&&DD(`change`,function(a){return r.onChange(a.target.value)})(`blur`,function(){return r.onTouched()})},inputs:{compareWith:`compareWith`},standalone:!1,features:[HD([Ir]),cD]})}return n})();var jo=(()=>{class n{_element;_renderer;_select;id;constructor(t,i,r){this._element=t,this._renderer=i,this._select=r,this._select&&(this.id=this._select._registerOption())}set ngValue(t){this._select!=null&&(this._select._optionMap.set(this.id,t),this._setElementValue(oi(this.id,t)),this._select._writeValueAfterRender())}set value(t){this._setElementValue(t),this._select?._writeValueAfterRender()}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,`value`,t)}ngOnDestroy(){this._select?._optionMap.delete(this.id),this._select?._writeValueAfterRender()}static ɵfac=function(i){return new(i||n)(rt$1(Gn$1),rt$1(al),rt$1(ai,9))};static ɵdir=xl({type:n,selectors:[[`option`]],inputs:{ngValue:`ngValue`,value:`value`},standalone:!1})}return n})();var Vr={provide:_t,useExisting:Ic(()=>si),multi:!0};function On(n,e){return n==null?`${e}`:(typeof e==`string`&&(e=`'${e}'`),e&&typeof e==`object`&&(e=`Object`),`${n}: ${e}`.slice(0,50))}function Tr(n){return n.split(`:`)[0]}var si=(()=>{class n extends xe{value;_optionMap=new Map;_idCounter=0;set compareWith(t){this._compareWith=t}_compareWith=Object.is;writeValue(t){this.value=t;let i;if(Array.isArray(t)){let r=t.map(o=>this._getOptionId(o));i=(o,a)=>{o._setSelected(r.indexOf(a)>-1)}}else i=r=>{r._setSelected(!1)};this._optionMap.forEach(i)}registerOnChange(t){this.onChange=i=>{let r=[],o=i.selectedOptions;if(o!==void 0){let a=o;for(let c=0;c<a.length;c++){let h=a[c],v=this._getOptionValue(h.value);r.push(v)}}else{let a=i.options;for(let c=0;c<a.length;c++){let h=a[c];if(h.selected){let v=this._getOptionValue(h.value);r.push(v)}}}this.value=r,t(r)}}_registerOption(t){let i=(this._idCounter++).toString();return this._optionMap.set(i,t),i}_getOptionId(t){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i)._value,t))return i;return null}_getOptionValue(t){let i=Tr(t);return this._optionMap.has(i)?this._optionMap.get(i)._value:t}static ɵfac=(()=>{let t;return function(r){return(t||(t=xE(n)))(r||n)}})();static ɵdir=xl({type:n,selectors:[[`select`,`multiple`,``,`formControlName`,``,3,`ngNoCva`,``],[`select`,`multiple`,``,`formControl`,``,3,`ngNoCva`,``],[`select`,`multiple`,``,`ngModel`,``,3,`ngNoCva`,``]],hostBindings:function(i,r){i&1&&DD(`change`,function(a){return r.onChange(a.target)})(`blur`,function(){return r.onTouched()})},inputs:{compareWith:`compareWith`},standalone:!1,features:[HD([Vr]),cD]})}return n})();var Uo=(()=>{class n{_element;_renderer;_select;id;_value;constructor(t,i,r){this._element=t,this._renderer=i,this._select=r,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){this._select!=null&&(this._value=t,this._setElementValue(On(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(On(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,`value`,t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,`selected`,t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static ɵfac=function(i){return new(i||n)(rt$1(Gn$1),rt$1(al),rt$1(si,9))};static ɵdir=xl({type:n,selectors:[[`option`]],inputs:{ngValue:`ngValue`,value:`value`},standalone:!1})}return n})();var ci=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Yn$1({type:n});static ɵinj=nn({})}return n})();function kn(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var Go=(()=>{class n{useNonNullable=!1;get nonNullable(){let t=new n;return t.useNonNullable=!0,t}group(t,i=null){let r=this._reduceControls(t),o={};return kn(i)?o=i:i!==null&&(o.validators=i.validator,o.asyncValidators=i.asyncValidator),new at(r,o)}record(t,i=null){return new Ae(this._reduceControls(t),i)}control(t,i,r){let o={};return this.useNonNullable?(kn(i)?o=i:(o.validators=i,o.asyncValidators=r),new vt(t,$$1(C({},o),{nonNullable:!0}))):new vt(t,i,r)}array(t,i,r){return new De(t.map(a=>this._createControl(a)),i,r)}_reduceControls(t){let i={};return Object.keys(t).forEach(r=>{i[r]=this._createControl(t[r])}),i}_createControl(t){if(t instanceof vt)return t;if(t instanceof ot)return t;if(Array.isArray(t)){let i=t[0],r=t.length>1?t[1]:null,o=t.length>2?t[2]:null;return this.control(i,r,o)}else return this.control(t)}static ɵfac=function(i){return new(i||n)};static ɵprov=Pe$1({token:n,factory:n.ɵfac})}return n})();var Ho=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:Nt,useValue:t.callSetDisabledState??oe}]}}static ɵfac=function(i){return new(i||n)};static ɵmod=Yn$1({type:n});static ɵinj=nn({imports:[ci]})}return n})();var zo=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:ri,useValue:t.warnOnNgModelWithFormControl??`always`},{provide:Nt,useValue:t.callSetDisabledState??oe}]}}static ɵfac=function(i){return new(i||n)};static ɵmod=Yn$1({type:n});static ɵinj=nn({imports:[ci]})}return n})();function St(n){return n.buttons===0||n.detail===0}function Ct(n){let e=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!e&&e.identifier===-1&&(e.radiusX==null||e.radiusX===1)&&(e.radiusY==null||e.radiusY===1)}var ke;function li(){if(ke==null){let n=typeof document<`u`?document.head:null;ke=!!(n&&(n.createShadowRoot||n.attachShadow))}return ke}function Re(n){if(li()){let e=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}function Or(){let n=typeof document<`u`&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let e=n.shadowRoot.activeElement;if(e===n)break;n=e}return n}function F(n){if(n.composedPath)try{return n.composedPath()[0]}catch{}return n.target}var Pe;try{Pe=typeof Intl<`u`&&Intl.v8BreakIterator}catch{Pe=!1}var y=(()=>{class n{_platformId=m(as);isBrowser=this._platformId?_7(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Pe)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(i){return new(i||n)};static ɵprov=Pe$1({token:n,factory:n.ɵfac})}return n})();var Et;function di(){if(Et==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>Et=!0}))}finally{Et=Et||!1}return Et}function st(n){return di()?n:!!n.capture}function Le(n,e=0){return ui(n)?Number(n):arguments.length===2?e:0}function ui(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function O(n){return n instanceof Gn$1?n.nativeElement:n}var mi=new E(`cdk-input-modality-detector-options`);var hi={ignoreKeys:[18,17,224,91,16]};var pi=650;var Be={passive:!0,capture:!0};var fi=(()=>{class n{_platform=m(y);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ao(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(i=>i===t.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=F(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<pi||(this._modality.next(St(t)?`keyboard`:`mouse`),this._mostRecentTarget=F(t))};_onTouchstart=t=>{if(Ct(t)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=F(t)};constructor(){let t=m(Se$1),i=m(Q),r=m(mi,{optional:!0});if(this._options=C(C({},hi),r),this.modalityDetected=this._modality.pipe(_N(1)),this.modalityChanged=this.modalityDetected.pipe(fN()),this._platform.isBrowser){let o=m(Wr$1).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[o.listen(i,`keydown`,this._onKeydown,Be),o.listen(i,`mousedown`,this._onMousedown,Be),o.listen(i,`touchstart`,this._onTouchstart,Be)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static ɵfac=function(i){return new(i||n)};static ɵprov=Pe$1({token:n,factory:n.ɵfac})}return n})();var At=(function(n){return n[n.IMMEDIATE=0]=`IMMEDIATE`,n[n.EVENTUAL=1]=`EVENTUAL`,n})(At||{});var bi=new E(`cdk-focus-monitor-default-options`);var ae=st({passive:!0,capture:!0});var se=(()=>{class n{_ngZone=m(Se$1);_platform=m(y);_inputModalityDetector=m(fi);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=m(Q);_stopInputModalityDetector=new le$1;constructor(){let t=m(bi,{optional:!0});this._detectionMode=t?.detectionMode||At.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let i=F(t);for(let r=i;r;r=r.parentElement)t.type===`focus`?this._onFocus(t,r):this._onBlur(t,r)};monitor(t,i=!1){let r=O(t);if(!this._platform.isBrowser||r.nodeType!==1)return Zt$1();let o=Re(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let c={checkChildren:i,subject:new le$1,rootNode:o};return this._elementInfo.set(r,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let i=O(t),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(t,i,r){let o=O(t);o===this._document.activeElement?this._getClosestElementsInfo(o).forEach(([c,h])=>this._originChanged(c,i,h)):(this._setOrigin(i),typeof o.focus==`function`&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((t,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?`mouse`:`program`}_shouldBeAttributedToTouch(t){return this._detectionMode===At.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,i){t.classList.toggle(`cdk-focused`,!!i),t.classList.toggle(`cdk-touch-focused`,i===`touch`),t.classList.toggle(`cdk-keyboard-focused`,i===`keyboard`),t.classList.toggle(`cdk-mouse-focused`,i===`mouse`),t.classList.toggle(`cdk-program-focused`,i===`program`)}_setOrigin(t,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t===`touch`&&i,this._detectionMode===At.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?pi:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(t,i){let r=this._elementInfo.get(i),o=F(t);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(t,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&t.relatedTarget instanceof Node&&i.contains(t.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(t,i){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(i))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let i=t.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,ae),i.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,ae)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ii$1(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(t){let i=t.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,ae),i.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,ae),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,i,r){this._setClasses(t,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(t){let i=[];return this._elementInfo.forEach((r,o)=>{(o===t||r.checkChildren&&o.contains(t))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!==`mouse`||!i||i===t||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`||t.disabled)return!1;let o=t.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static ɵfac=function(i){return new(i||n)};static ɵprov=Pe$1({token:n,factory:n.ɵfac})}return n})();var kr=(()=>{class n{_elementRef=m(Gn$1);_focusMonitor=m(se);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new ht$1;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let t=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(t,t.nodeType===1&&t.hasAttribute(`cdkMonitorSubtreeFocus`)).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static ɵfac=function(i){return new(i||n)};static ɵdir=xl({type:n,selectors:[[``,`cdkMonitorElementFocus`,``],[``,`cdkMonitorSubtreeFocus`,``]],outputs:{cdkFocusChange:`cdkFocusChange`},exportAs:[`cdkMonitorFocus`]})}return n})();function je(n){return Array.isArray(n)?n:[n]}var gi=new Set;var Y;var ce=(()=>{class n{_platform=m(y);_nonce=m(cs,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Pr}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Rr(t,this._nonce),this._matchMedia(t)}static ɵfac=function(i){return new(i||n)};static ɵprov=Pe$1({token:n,factory:n.ɵfac})}return n})();function Rr(n,e){if(!gi.has(n))try{Y||(Y=document.createElement(`style`),e&&Y.setAttribute(`nonce`,e),Y.setAttribute(`type`,`text/css`),document.head.appendChild(Y)),Y.sheet&&(Y.sheet.insertRule(`@media ${n.replace(/[{}]/g,``)} {body{ }}`,0),gi.add(n))}catch(t){console.error(t)}}function Pr(n){return{matches:n===`all`||n===``,media:n,addListener:()=>{},removeListener:()=>{}}}var Ue=(()=>{class n{_mediaMatcher=m(ce);_zone=m(Se$1);_queries=new Map;_destroySubject=new le$1;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return vi(je(t)).some(r=>this._registerQuery(r).mql.matches)}observe(t){let o=tN(vi(je(t)).map(a=>this._registerQuery(a).observable));return o=oc(o.pipe(Ei$1(1)),o.pipe(_N(1),cc(0))),o.pipe(he$1(a=>{let c={matches:!1,breakpoints:{}};return a.forEach(({matches:h,query:v})=>{c.matches=c.matches||h,c.breakpoints[v]=h}),c}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let i=this._mediaMatcher.matchMedia(t),o={observable:new M(a=>{let c=h=>this._zone.run(()=>a.next(h));return i.addListener(c),()=>{i.removeListener(c)}}).pipe(EN(i),he$1(({matches:a})=>({query:t,matches:a})),Ii$1(this._destroySubject)),mql:i};return this._queries.set(t,o),o}static ɵfac=function(i){return new(i||n)};static ɵprov=Pe$1({token:n,factory:n.ɵfac})}return n})();function vi(n){return n.map(e=>e.split(`,`)).reduce((e,t)=>e.concat(t)).map(e=>e.trim())}function Lr(n){if(n.type===`characterData`&&n.target instanceof Comment)return!0;if(n.type===`childList`){for(let e=0;e<n.addedNodes.length;e++)if(!(n.addedNodes[e]instanceof Comment))return!1;for(let e=0;e<n.removedNodes.length;e++)if(!(n.removedNodes[e]instanceof Comment))return!1;return!0}return!1}var _i=(()=>{class n{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(i){return new(i||n)};static ɵprov=Pe$1({token:n,factory:n.ɵfac})}return n})();var yi=(()=>{class n{_mutationObserverFactory=m(_i);_observedElements=new Map;_ngZone=m(Se$1);ngOnDestroy(){this._observedElements.forEach((t,i)=>this._cleanupObserver(i))}observe(t){let i=O(t);return new M(r=>{let a=this._observeElement(i).pipe(he$1(c=>c.filter(h=>!Lr(h))),Mt(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{r.next(c)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(t){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let i=new le$1,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:r,stream:i,count:1})}return this._observedElements.get(t).stream})}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:i,stream:r}=this._observedElements.get(t);i&&i.disconnect(),r.complete(),this._observedElements.delete(t)}}static ɵfac=function(i){return new(i||n)};static ɵprov=Pe$1({token:n,factory:n.ɵfac})}return n})();var Pa=(()=>{class n{_contentObserver=m(yi);_elementRef=m(Gn$1);event=new ht$1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(t){this._debounce=Le(t),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?t.pipe(cc(this.debounce)):t).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(i){return new(i||n)};static ɵdir=xl({type:n,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,nw],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return n})();var Ni=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Yn$1({type:n});static ɵinj=nn({providers:[_i]})}return n})();var Br=(()=>{class n{_platform=m(y);isDisabled(t){return t.hasAttribute(`disabled`)}isVisible(t){return Ur(t)&&getComputedStyle(t).visibility===`visible`}isTabbable(t){if(!this._platform.isBrowser)return!1;let i=jr(Zr(t));if(i&&(Si(i)===-1||!this.isVisible(i)))return!1;let r=t.nodeName.toLowerCase(),o=Si(t);return t.hasAttribute(`contenteditable`)?o!==-1:r===`iframe`||r===`object`||this._platform.WEBKIT&&this._platform.IOS&&!Kr(t)?!1:r===`audio`?t.hasAttribute(`controls`)?o!==-1:!1:r===`video`?o===-1?!1:o!==null?!0:this._platform.FIREFOX||t.hasAttribute(`controls`):t.tabIndex>=0}isFocusable(t,i){return qr(t)&&!this.isDisabled(t)&&(i?.ignoreVisibility||this.isVisible(t))}static ɵfac=function(i){return new(i||n)};static ɵprov=Pe$1({token:n,factory:n.ɵfac})}return n})();function jr(n){try{return n.frameElement}catch{return null}}function Ur(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects==`function`&&n.getClientRects().length)}function Gr(n){let e=n.nodeName.toLowerCase();return e===`input`||e===`select`||e===`button`||e===`textarea`}function Hr(n){return Wr(n)&&n.type==`hidden`}function zr(n){return $r(n)&&n.hasAttribute(`href`)}function Wr(n){return n.nodeName.toLowerCase()==`input`}function $r(n){return n.nodeName.toLowerCase()==`a`}function Ai(n){if(!n.hasAttribute(`tabindex`)||n.tabIndex===void 0)return!1;let e=n.getAttribute(`tabindex`);return!!(e&&!isNaN(parseInt(e,10)))}function Si(n){if(!Ai(n))return null;let e=parseInt(n.getAttribute(`tabindex`)||``,10);return isNaN(e)?-1:e}function Kr(n){let e=n.nodeName.toLowerCase(),t=e===`input`&&n.type;return t===`text`||t===`password`||e===`select`||e===`textarea`}function qr(n){return Hr(n)?!1:Gr(n)||zr(n)||n.hasAttribute(`contenteditable`)||Ai(n)}function Zr(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var He=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_enabled=!0;constructor(e,t,i,r,o=!1,a){this._element=e,this._checker=t,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let e=this._startAnchor,t=this._endAnchor;e&&(e.removeEventListener(`focus`,this.startAnchorListener),e.remove()),t&&(t.removeEventListener(`focus`,this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(e)))})}focusFirstTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(e)))})}focusLastTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(e)))})}_getRegionBoundary(e){let t=this._element.querySelectorAll(`[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`);return e==`start`?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(e){let t=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(t){if(!this._checker.isFocusable(t)){let i=this._getFirstTabbableElement(t);return i?.focus(e),!!i}return t.focus(e),!0}return this.focusFirstTabbableElement(e)}focusFirstTabbableElement(e){let t=this._getRegionBoundary(`start`);return t&&t.focus(e),!!t}focusLastTabbableElement(e){let t=this._getRegionBoundary(`end`);return t&&t.focus(e),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children;for(let i=0;i<t.length;i++){let r=t[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[i]):null;if(r)return r}return null}_getLastTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children;for(let i=t.length-1;i>=0;i--){let r=t[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[i]):null;if(r)return r}return null}_createAnchor(){let e=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,e),e.classList.add(`cdk-visually-hidden`),e.classList.add(`cdk-focus-trap-anchor`),e.setAttribute(`aria-hidden`,`true`),e}_toggleAnchorTabIndex(e,t){e?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`)}toggleAnchors(e){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_executeOnStable(e){QM(e,{injector:this._injector})}};var Yr=(()=>{class n{_checker=m(Br);_ngZone=m(Se$1);_document=m(Q);_injector=m(Ie$1);constructor(){m(MV).load(hX)}create(t,i=!1){return new He(t,this._checker,this._ngZone,this._document,i,this._injector)}static ɵfac=function(i){return new(i||n)};static ɵprov=Pe$1({token:n,factory:n.ɵfac})}return n})();var Di=new E(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var xi=new E(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var Xr=0;var Qr=(()=>{class n{_ngZone=m(Se$1);_defaultOptions=m(xi,{optional:!0});_liveElement;_document=m(Q);_sanitizer=m(fg);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=m(Di,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...i){let r=this._defaultOptions,o,a;return i.length===1&&typeof i[0]==`number`?a=i[0]:[o,a]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:`polite`),a==null&&r&&(a=r.duration),this._liveElement.setAttribute(`aria-live`,o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t==`string`?this._liveElement.textContent=t:pX(this._liveElement,t,this._sanitizer),typeof a==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t=`cdk-live-announcer-element`,i=this._document.getElementsByClassName(t),r=this._document.createElement(`div`);for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(t),r.classList.add(`cdk-visually-hidden`),r.setAttribute(`aria-atomic`,`true`),r.setAttribute(`aria-live`,`polite`),r.id=`cdk-live-announcer-${Xr++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(t){let i=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute(`aria-owns`);a?a.indexOf(t)===-1&&o.setAttribute(`aria-owns`,a+` `+t):o.setAttribute(`aria-owns`,t)}}static ɵfac=function(i){return new(i||n)};static ɵprov=Pe$1({token:n,factory:n.ɵfac})}return n})();var $=(function(n){return n[n.NONE=0]=`NONE`,n[n.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,n[n.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,n})($||{});var Ci=`cdk-high-contrast-black-on-white`;var Ei=`cdk-high-contrast-white-on-black`;var Ge=`cdk-high-contrast-active`;var wi=(()=>{class n{_platform=m(y);_hasCheckedHighContrastMode=!1;_document=m(Q);_breakpointSubscription;constructor(){this._breakpointSubscription=m(Ue).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return $.NONE;let t=this._document.createElement(`div`);t.style.backgroundColor=`rgb(1,2,3)`,t.style.position=`absolute`,this._document.body.appendChild(t);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(t):null,o=(r&&r.backgroundColor||``).replace(/ /g,``);switch(t.remove(),o){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return $.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return $.BLACK_ON_WHITE}return $.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(Ge,Ci,Ei),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===$.BLACK_ON_WHITE?t.add(Ge,Ci):i===$.WHITE_ON_BLACK&&t.add(Ge,Ei)}}static ɵfac=function(i){return new(i||n)};static ɵprov=Pe$1({token:n,factory:n.ɵfac})}return n})();var Jr=(()=>{class n{constructor(){m(wi)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(i){return new(i||n)};static ɵmod=Yn$1({type:n});static ɵinj=nn({imports:[Ni]})}return n})();var to=200;var le=class{_letterKeyStream=new le$1;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new le$1;selectedItem=this._selectedItem;constructor(e,t){let i=typeof t?.debounceInterval==`number`?t.debounceInterval:to;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(e),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(e){this._selectedItemIndex=e}setItems(e){this._items=e}handleKey(e){let t=e.keyCode;e.key&&e.key.length===1?this._letterKeyStream.next(e.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(e){this._letterKeyStream.pipe(Fo(t=>this._pressedLetters.push(t)),cc(e),Mt(()=>this._pressedLetters.length>0),he$1(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(t=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Mi(n,...e){return e.length?e.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var ct=class{_items;_activeItemIndex=nt(-1);_activeItem=nt(null);_wrap=!1;_typeaheadSubscription=ne$1.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=e=>e.disabled;constructor(e,t){this._items=e,e instanceof ol?this._itemChangesSubscription=e.changes.subscribe(i=>this._itemsChanged(i.toArray())):zc(e)&&(this._effectRef=Wc$1(()=>this._itemsChanged(e()),{injector:t}))}tabOut=new le$1;change=new le$1;skipPredicate(e){return this._skipPredicateFn=e,this}withWrap(e=!0){return this._wrap=e,this}withVerticalOrientation(e=!0){return this._vertical=e,this}withHorizontalOrientation(e){return this._horizontal=e,this}withAllowedModifierKeys(e){return this._allowedModifierKeys=e,this}withTypeAhead(e=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new le(t,{debounceInterval:typeof e==`number`?e:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(e=!0){return this._homeAndEnd=e,this}withPageUpDown(e=!0,t=10){return this._pageUpAndDown={enabled:e,delta:t},this}setActiveItem(e){let t=this._activeItem();this.updateActiveItem(e),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(e){let t=e.keyCode,r=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(o=>!e[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Mi(e,`shiftKey`))&&this._typeahead?.handleKey(e);return}this._typeahead?.reset(),e.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(e){let t=this._getItemsArray(),i=typeof e==`number`?e:t.indexOf(e),r=t[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(e){this._wrap?this._setActiveInWrapMode(e):this._setActiveInDefaultMode(e)}_setActiveInWrapMode(e){let t=this._getItemsArray();for(let i=1;i<=t.length;i++){let r=(this._activeItemIndex()+e*i+t.length)%t.length,o=t[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(e){this._setActiveItemByIndex(this._activeItemIndex()+e,e)}_setActiveItemByIndex(e,t){let i=this._getItemsArray();if(i[e]){for(;this._skipPredicateFn(i[e]);)if(e+=t,!i[e])return;this.setActiveItem(e)}}_getItemsArray(){return zc(this._items)?this._items():this._items instanceof ol?this._items.toArray():this._items}_itemsChanged(e){this._typeahead?.setItems(e);let t=this._activeItem();if(t){let i=e.indexOf(t);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var ze=class extends ct{setActiveItem(e){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(e),this.activeItem&&this.activeItem.setActiveStyles()}};var We=class extends ct{_origin=`program`;setFocusOrigin(e){return this._origin=e,this}setActiveItem(e){super.setActiveItem(e),this.activeItem&&this.activeItem.focus(this._origin)}};var Ii=new Map;var $e=class n{_appId=m(ss);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(e,t=!1){this._appId!==`ng`&&(e+=this._appId);let i=Ii.get(e);return i===void 0?i=0:i++,Ii.set(e,i),`${e}${t?n._infix+`-`:``}${i}`}static ɵfac=function(t){return new(t||n)};static ɵprov=Pe$1({token:n,factory:n.ɵfac})};var Vi=` `;function eo(n,e,t){let i=ue(n,e);t=t.trim(),!i.some(r=>r.trim()===t)&&(i.push(t),n.setAttribute(e,i.join(Vi)))}function no(n,e,t){let i=ue(n,e);t=t.trim();let r=i.filter(o=>o!==t);r.length?n.setAttribute(e,r.join(Vi)):n.removeAttribute(e)}function ue(n,e){return n.getAttribute(e)?.match(/\S+/g)??[]}var Ti=`cdk-describedby-message`;var de=`cdk-describedby-host`;var qe=0;var Os=(()=>{class n{_platform=m(y);_document=m(Q);_messageRegistry=new Map;_messagesContainer=null;_id=`${qe++}`;constructor(){m(MV).load(hX),this._id=m(ss)+`-`+qe++}describe(t,i,r){if(!this._canBeDescribed(t,i))return;let o=Ke(i,r);typeof i!=`string`?(Fi(i,this._id),this._messageRegistry.set(o,{messageElement:i,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(i,r),this._isElementDescribedByMessage(t,o)||this._addMessageReference(t,o)}removeDescription(t,i,r){if(!i||!this._isElementNode(t))return;let o=Ke(i,r);if(this._isElementDescribedByMessage(t,o)&&this._removeMessageReference(t,o),typeof i==`string`){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let t=this._document.querySelectorAll(`[${de}="${this._id}"]`);for(let i=0;i<t.length;i++)this._removeCdkDescribedByReferenceIds(t[i]),t[i].removeAttribute(de);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(t,i){let r=this._document.createElement(`div`);Fi(r,this._id),r.textContent=t,i&&r.setAttribute(`role`,i),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Ke(t,i),{messageElement:r,referenceCount:0})}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t)}_createMessagesContainer(){if(this._messagesContainer)return;let t=`cdk-describedby-message-container`,i=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let o=0;o<i.length;o++)i[o].remove();let r=this._document.createElement(`div`);r.style.visibility=`hidden`,r.classList.add(t),r.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||r.setAttribute(`platform`,`server`),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(t){let i=ue(t,`aria-describedby`).filter(r=>r.indexOf(Ti)!=0);t.setAttribute(`aria-describedby`,i.join(` `))}_addMessageReference(t,i){let r=this._messageRegistry.get(i);eo(t,`aria-describedby`,r.messageElement.id),t.setAttribute(de,this._id),r.referenceCount++}_removeMessageReference(t,i){let r=this._messageRegistry.get(i);r.referenceCount--,no(t,`aria-describedby`,r.messageElement.id),t.removeAttribute(de)}_isElementDescribedByMessage(t,i){let r=ue(t,`aria-describedby`),o=this._messageRegistry.get(i),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(t,i){if(!this._isElementNode(t))return!1;if(i&&typeof i==`object`)return!0;let r=i==null?``:`${i}`.trim(),o=t.getAttribute(`aria-label`);return r?!o||o.trim()!==r:!1}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(i){return new(i||n)};static ɵprov=Pe$1({token:n,factory:n.ɵfac})}return n})();function Ke(n,e){return typeof n==`string`?`${e||``}/${n}`:n}function Fi(n,e){n.id||(n.id=`${Ti}-${e}-${qe++}`)}var Dt=(function(n){return n[n.NORMAL=0]=`NORMAL`,n[n.NEGATED=1]=`NEGATED`,n[n.INVERTED=2]=`INVERTED`,n})(Dt||{});var me;var X;function Gs(){if(X==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return X=!1,X;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)X=!0;else{let n=Element.prototype.scrollTo;n?X=!/\{\s*\[native code\]\s*\}/.test(n.toString()):X=!1}}return X}function Hs(){if(typeof document!=`object`||!document)return Dt.NORMAL;if(me==null){let n=document.createElement(`div`),e=n.style;n.dir=`rtl`,e.width=`1px`,e.overflow=`auto`,e.visibility=`hidden`,e.pointerEvents=`none`,e.position=`absolute`;let t=document.createElement(`div`),i=t.style;i.width=`2px`,i.height=`1px`,n.appendChild(t),document.body.appendChild(n),me=Dt.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,me=n.scrollLeft===0?Dt.NEGATED:Dt.INVERTED),n.remove()}return me}function Ws(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var lt;var Oi=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function Ks(){if(lt)return lt;if(typeof document!=`object`||!document)return lt=new Set(Oi),lt;let n=document.createElement(`input`);return lt=new Set(Oi.filter(e=>(n.setAttribute(`type`,e),n.type===e))),lt}var Qs={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};var io=new E(`MATERIAL_ANIMATIONS`);var ki=null;function ro(){return m(io,{optional:!0})?.animationsDisabled||m(uA,{optional:!0})===`NoopAnimations`?`di-disabled`:(ki??=m(ce).matchMedia(`(prefers-reduced-motion)`).matches,ki?`reduced-motion`:`enabled`)}function dt(){return ro()!==`enabled`}function rc(n){return n==null?``:typeof n==`string`?n:`${n}px`}function ac(n){return n!=null&&`${n}`!=`false`}var w=(function(n){return n[n.FADING_IN=0]=`FADING_IN`,n[n.VISIBLE=1]=`VISIBLE`,n[n.FADING_OUT=2]=`FADING_OUT`,n[n.HIDDEN=3]=`HIDDEN`,n})(w||{});var Ze=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=w.HIDDEN;constructor(e,t,i,r=!1){this._renderer=e,this.element=t,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}};var Ri=st({passive:!0,capture:!0});var Ye=class{_events=new Map;addHandler(e,t,i,r){let o=this._events.get(t);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(t,new Map([[i,new Set([r])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Ri)})}removeHandler(e,t,i){let r=this._events.get(e);if(!r)return;let o=r.get(t);o&&(o.delete(i),o.size===0&&r.delete(t),r.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,Ri)))}_delegateEventHandler=e=>{let t=F(e);t&&this._events.get(e.type)?.forEach((i,r)=>{(r===t||r.contains(t))&&i.forEach(o=>o.handleEvent(e))})}};var xt={enterDuration:225,exitDuration:150};var oo=800;var Pi=st({passive:!0,capture:!0});var Li=[`mousedown`,`touchstart`];var Bi=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var ao=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Ss({type:n,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})();var wt=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Ye;constructor(e,t,i,r,o){this._target=e,this._ngZone=t,this._platform=r,r.isBrowser&&(this._containerElement=O(i)),o&&o.get(MV).load(ao)}fadeInRipple(e,t,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=C(C({},xt),i.animation);i.centered&&(e=r.left+r.width/2,t=r.top+r.height/2);let a=i.radius||so(e,t,r),c=e-r.left,h=t-r.top,v=o.enterDuration,N=document.createElement(`div`);N.classList.add(`mat-ripple-element`),N.style.left=`${c-a}px`,N.style.top=`${h-a}px`,N.style.height=`${a*2}px`,N.style.width=`${a*2}px`,i.color!=null&&(N.style.backgroundColor=i.color),N.style.transitionDuration=`${v}ms`,this._containerElement.appendChild(N);let en=window.getComputedStyle(N),$i=en.transitionProperty,nn=en.transitionDuration,pe=$i===`none`||nn===`0s`||nn===`0s, 0s`||r.width===0&&r.height===0,K=new Ze(this,N,i,pe);N.style.transform=`scale3d(1, 1, 1)`,K.state=w.FADING_IN,i.persistent||(this._mostRecentTransientRipple=K);let Mt=null;return!pe&&(v||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let rn=()=>{Mt&&(Mt.fallbackTimer=null),clearTimeout(on),this._finishRippleTransition(K)},fe=()=>this._destroyRipple(K),on=setTimeout(fe,v+100);N.addEventListener(`transitionend`,rn),N.addEventListener(`transitioncancel`,fe),Mt={onTransitionEnd:rn,onTransitionCancel:fe,fallbackTimer:on}}),this._activeRipples.set(K,Mt),(pe||!v)&&this._finishRippleTransition(K),K}fadeOutRipple(e){if(e.state===w.FADING_OUT||e.state===w.HIDDEN)return;let t=e.element,i=C(C({},xt),e.config.animation);t.style.transitionDuration=`${i.exitDuration}ms`,t.style.opacity=`0`,e.state=w.FADING_OUT,(e._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let t=O(e);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Li.forEach(i=>{n._eventManager.addHandler(this._ngZone,i,t,this)}))}handleEvent(e){e.type===`mousedown`?this._onMousedown(e):e.type===`touchstart`?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Bi.forEach(t=>{this._triggerElement.addEventListener(t,this,Pi)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){e.state===w.FADING_IN?this._startFadeOutTransition(e):e.state===w.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let t=e===this._mostRecentTransientRipple,{persistent:i}=e.config;e.state=w.VISIBLE,!i&&(!t||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){let t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=w.HIDDEN,t!==null&&(e.element.removeEventListener(`transitionend`,t.onTransitionEnd),e.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),e.element.remove()}_onMousedown(e){let t=St(e),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+oo;!this._target.rippleDisabled&&!t&&!i&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!Ct(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=e.changedTouches;if(t)for(let i=0;i<t.length;i++)this.fadeInRipple(t[i].clientX,t[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let t=e.state===w.VISIBLE||e.config.terminateOnPointerUp&&e.state===w.FADING_IN;!e.config.persistent&&t&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(Li.forEach(t=>n._eventManager.removeHandler(t,e,this)),this._pointerUpEventsRegistered&&(Bi.forEach(t=>e.removeEventListener(t,this,Pi)),this._pointerUpEventsRegistered=!1))}};function so(n,e,t){let i=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),r=Math.max(Math.abs(e-t.top),Math.abs(e-t.bottom));return Math.sqrt(i*i+r*r)}var Xe=new E(`mat-ripple-global-options`);var _c=(()=>{class n{_elementRef=m(Gn$1);_animationsDisabled=dt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=m(Se$1),i=m(y),r=m(Xe,{optional:!0}),o=m(Ie$1);this._globalOptions=r||{},this._rippleRenderer=new wt(this,t,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:C(C(C({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,i=0,r){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,i,C(C({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,C(C({},this.rippleConfig),t))}static ɵfac=function(i){return new(i||n)};static ɵdir=xl({type:n,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(i,r){i&2&&kl(`mat-ripple-unbounded`,r.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return n})();var co={capture:!0};var lo=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var Qe=`mat-ripple-loader-uninitialized`;var Je=`mat-ripple-loader-class-name`;var ji=`mat-ripple-loader-centered`;var he=`mat-ripple-loader-disabled`;var Ui=(()=>{class n{_document=m(Q);_animationsDisabled=dt();_globalRippleOptions=m(Xe,{optional:!0});_platform=m(y);_ngZone=m(Se$1);_injector=m(Ie$1);_eventCleanups;_hosts=new Map;constructor(){let t=m(Wr$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>lo.map(i=>t.listen(this._document,i,this._onInteraction,co)))}ngOnDestroy(){let t=this._hosts.keys();for(let i of t)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(t,i){t.setAttribute(Qe,this._globalRippleOptions?.namespace??``),(i.className||!t.hasAttribute(Je))&&t.setAttribute(Je,i.className||``),i.centered&&t.setAttribute(ji,``),i.disabled&&t.setAttribute(he,``)}setDisabled(t,i){let r=this._hosts.get(t);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(t))):i?t.setAttribute(he,``):t.removeAttribute(he)}_onInteraction=t=>{let i=F(t);if(i instanceof HTMLElement){let r=i.closest(`[${Qe}="${this._globalRippleOptions?.namespace??``}"]`);r&&this._createRipple(r)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let i=this._document.createElement(`span`);i.classList.add(`mat-ripple`,t.getAttribute(Je)),t.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??xt.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??xt.exitDuration,c={rippleDisabled:this._animationsDisabled||r?.disabled||t.hasAttribute(he),rippleConfig:{centered:t.hasAttribute(ji),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},h=new wt(c,this._ngZone,i,this._platform,this._injector),v=!c.rippleDisabled;v&&h.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:h,hasSetUpEvents:v}),t.removeAttribute(Qe)}destroyRipple(t){let i=this._hosts.get(t);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(i){return new(i||n)};static ɵprov=Pe$1({token:n,factory:n.ɵfac})}return n})();var Gi=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Ss({type:n,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return n})();var uo=[`*`,[[``,`progressIndicator`,``]]];var mo=[`*`,`[progressIndicator]`];function ho(n,e){n&1&&(Cp(0,`div`,1),Ap(1,1),Tp())}var po=new E(`MAT_BUTTON_CONFIG`);function Hi(n){return n==null?void 0:i9(n)}var tn=(()=>{class n{_elementRef=m(Gn$1);_ngZone=m(Se$1);_animationsDisabled=dt();_config=m(po,{optional:!0});_focusMonitor=m(se);_cleanupClick;_renderer=m(al);_rippleLoader=m(Ui);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=e9(!1,{transform:nw});constructor(){m(MV).load(Gi);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,i){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(i){return new(i||n)};static ɵdir=xl({type:n,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(i,r){i&2&&(As(`disabled`,r._getDisabledAttribute())(`aria-disabled`,r._getAriaDisabled())(`tabindex`,r._getTabIndex()),Mp(r.color?`mat-`+r.color:``),kl(`mat-mdc-button-progress-indicator-shown`,r.showProgress())(`mat-mdc-button-disabled`,r.disabled)(`mat-mdc-button-disabled-interactive`,r.disabledInteractive)(`mat-unthemed`,!r.color)(`_mat-animation-noopable`,r._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,nw],disabled:[2,`disabled`,`disabled`,nw],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,nw],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,nw],tabIndex:[2,`tabIndex`,`tabIndex`,Hi],_tabindex:[2,`tabindex`,`_tabindex`,Hi],showProgress:[1,`showProgress`]}})}return n})();var fo=(()=>{class n extends tn{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(i){return new(i||n)};static ɵcmp=Ss({type:n,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[cD],ngContentSelectors:mo,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(i,r){i&1&&(Np(uo),yD(0,`span`,0),Ap(1),_x(2,ho,2,0,`div`,1),yD(3,`span`,2)(4,`span`,3)),i&2&&(IR(2),Ex(r.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return n})();var zi=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Yn$1({type:n});static ɵinj=nn({imports:[_S]})}return n})();var bo=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]];var go=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`];function vo(n,e){n&1&&(Cp(0,`div`,2),Ap(1,3),Tp())}var Wi=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var Wc=(()=>{class n extends tn{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=_o(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?Wi.get(this._appearance):null,o=Wi.get(t);r&&i.remove(...r),i.add(...o),this._appearance=t}static ɵfac=function(i){return new(i||n)};static ɵcmp=Ss({type:n,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[cD],ngContentSelectors:go,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(i,r){i&1&&(Np(bo),yD(0,`span`,0),Ap(1),Cp(2,`span`,1),Ap(3,1),Tp(),Ap(4,2),_x(5,vo,2,0,`div`,2),yD(6,`span`,3)(7,`span`,4)),i&2&&(kl(`mdc-button__ripple`,!r._isFab)(`mdc-fab__ripple`,r._isFab),IR(5),Ex(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return n})();function _o(n){return n.hasAttribute(`mat-raised-button`)?`elevated`:n.hasAttribute(`mat-stroked-button`)?`outlined`:n.hasAttribute(`mat-flat-button`)?`filled`:n.hasAttribute(`mat-button`)?`text`:null}var $c=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Yn$1({type:n});static ɵinj=nn({imports:[zi,_S]})}return n})();export{se as $,Ro as A,Yr as B,Or as C,Po as D,Pn as E,W as F,ce as G,_t as H,Wc as I,je as J,dt as K,We as L,Ue as M,Ui as N,Qr as O,Uo as P,ro as Q,Ws as R,O as S,Pa as T,ac as U,_c as V,ai as W,kr as X,jo as Y,rc as Z,Mi as _,Ct as a,ze as at,Ni as b,F as c,Gs as d,ui as et,Ho as f,Le as g,Ks as h,Br as i,yt as it,St as j,Qs as k,Gi as l,Jr as m,$e as n,xr as nt,Dt as o,zi as ot,Hs as p,fo as q,Bo as r,y as rt,Er as s,zo as st,$c as t,wt as tt,Go as u,Mr as v,Os as w,Nr as x,Ne as y,Xe as z};