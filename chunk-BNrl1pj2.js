import{$r as zJ,A as H$1,B as KN,Br as ws,Bt as an,Ct as Ut,Dn as is,Dr as tl,Dt as Xe$1,Er as te$1,Et as WJ,F as JI,Fn as m,Fr as wE,G as M,Gr as xo,Gt as be,Hr as xD,I as JU,It as _,J as Mh,Jn as ns,Kt as bp,L as Jt$1,N as Ie$1,Nr as vi$1,Nt as ZS,On as ix,P as Ip,Pn as lt,Pr as w,Q as NK,Rt as aD,T as Ep,Tn as iS,Tt as Vc,Vn as mc,Wt as bd,Xr as ye$1,Y as Ml,Yt as ce$1,Zn as oN,Zr as yi$1,an as fD,b as Ds,bn as he,br as sn,c as Ap,ei as zn$1,er as ox,f as Br$1,ft as Rl,gr as rs,h as Cp,hr as rl,j as H0,kn as kk,kt as YD,m as Co,mr as rg,n as $n$1,o as Al,ot as Q9,p as CK,pr as rc,qt as bt$1,rn as ec,rt as PM,tt as Oe$1,u as Bc,ur as qt$1,wn as iN,wt as VS,x as E,xt as Tt,yr as sR,yt as Tp,z as K}from"./chunk-BOzVp6o3.js";var Tn=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty(`disabled`,t)}static ɵfac=function(i){return new(i||n)(Ut(rl),Ut($n$1))};static ɵdir=Ml({type:n})}return n})();var Gi=(()=>{class n extends Tn{static ɵfac=(()=>{let t;return function(r){return(t||(t=wE(n)))(r||n)}})();static ɵdir=Ml({type:n,features:[JI]})}return n})();var De=new E(``);var Hi={provide:De,useExisting:mc(()=>On),multi:!0};function zi(){let n=an()?an().getUserAgent():``;return/android (\d+)/.test(n.toLowerCase())}var Wi=new E(``);var On=(()=>{class n extends Tn{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode??=!zi()}writeValue(t){let i=t??``;this.setProperty(`value`,i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static ɵfac=function(i){return new(i||n)(Ut(rl),Ut($n$1),Ut(Wi,8))};static ɵdir=Ml({type:n,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(i,r){i&1&&fD(`input`,function(s){return r._handleInput(s.target.value)})(`blur`,function(){return r.onTouched()})(`compositionstart`,function(){return r._compositionStart()})(`compositionend`,function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[xD([Hi]),JI]})}return n})();function xe(n){return n==null||we(n)===0}function we(n){return n==null?null:Array.isArray(n)||typeof n==`string`?n.length:n instanceof Set?n.size:null}var gt=new E(``);var te=new E(``);var $i=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var ye=class{static min(e){return Ki(e)}static max(e){return qi(e)}static required(e){return kn(e)}static requiredTrue(e){return Zi(e)}static email(e){return Yi(e)}static minLength(e){return Xi(e)}static maxLength(e){return Qi(e)}static pattern(e){return Ji(e)}static nullValidator(e){return $t()}static compose(e){return Un(e)}static composeAsync(e){return Gn(e)}};function Ki(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function qi(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function kn(n){return xe(n.value)?{required:!0}:null}function Zi(n){return n.value===!0?null:{required:!0}}function Yi(n){return xe(n.value)||$i.test(n.value)?null:{email:!0}}function Xi(n){return e=>{let t=e.value?.length??we(e.value);return t===null||t===0?null:t<n?{minlength:{requiredLength:n,actualLength:t}}:null}}function Qi(n){return e=>{let t=e.value?.length??we(e.value);return t!==null&&t>n?{maxlength:{requiredLength:n,actualLength:t}}:null}}function Ji(n){if(!n)return $t;let e,t;return typeof n==`string`?(t=``,n.charAt(0)!==`^`&&(t+=`^`),t+=n,n.charAt(n.length-1)!==`$`&&(t+=`$`),e=new RegExp(t)):(t=n.toString(),e=n),i=>{if(xe(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function $t(n){return null}function Rn(n){return n!=null}function Pn(n){return Al(n)?Tt(n):n}function Ln(n){let e={};return n.forEach(t=>{e=t!=null?w(w({},e),t):e}),Object.keys(e).length===0?null:e}function Bn(n,e){return e.map(t=>t(n))}function tr(n){return!n.validate}function jn(n){return n.map(e=>tr(e)?e:t=>e.validate(t))}function Un(n){if(!n)return null;let e=n.filter(Rn);return e.length==0?null:function(t){return Ln(Bn(t,e))}}function Me(n){return n!=null?Un(jn(n)):null}function Gn(n){if(!n)return null;let e=n.filter(Rn);return e.length==0?null:function(t){return bd(Bn(t,e).map(Pn)).pipe(he(Ln))}}function Ie(n){return n!=null?Gn(jn(n)):null}function An(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function Hn(n){return n._rawValidators}function zn(n){return n._rawAsyncValidators}function Ne(n){return n?Array.isArray(n)?n:[n]:[]}function Kt(n,e){return Array.isArray(n)?n.includes(e):n===e}function Dn(n,e){let t=Ne(e);return Ne(n).forEach(r=>{Kt(t,r)||t.push(r)}),t}function xn(n,e){return Ne(e).filter(t=>!Kt(n,t))}var qt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Me(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ie(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control?.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}};var P=class extends qt{name;get formDirective(){return null}get path(){return null}};var ut=`VALID`;var Wt=`INVALID`;var et=`PENDING`;var mt=`DISABLED`;var U=class{};var Zt=class extends U{value;source;constructor(e,t){super(),this.value=e,this.source=t}};var pt=class extends U{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}};var ft=class extends U{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}};var nt=class extends U{status;source;constructor(e,t){super(),this.status=e,this.source=t}};var Yt=class extends U{source;constructor(e){super(),this.source=e}};var Z=class extends U{source;constructor(e){super(),this.source=e}};function Fe(n){return(ee(n)?n.validators:n)||null}function er(n){return Array.isArray(n)?Me(n):n||null}function Ve(n,e){return(ee(e)?e.asyncValidators:n)||null}function nr(n){return Array.isArray(n)?Ie(n):n||null}function ee(n){return n!=null&&!Array.isArray(n)&&typeof n==`object`}function Wn(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new _(1e3,``);if(!Kn(i,t))throw new _(1001,``)}function $n(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new _(-1002,``)})}var it=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=Xe$1(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return sn(this.statusReactive)}set status(e){sn(()=>this.statusReactive.set(e))}_status=Ap(()=>this.statusReactive());statusReactive=Xe$1(void 0);get valid(){return this.status===ut}get invalid(){return this.status===Wt}get pending(){return this.status===et}get disabled(){return this.status===mt}get enabled(){return this.status!==mt}errors;get pristine(){return sn(this.pristineReactive)}set pristine(e){sn(()=>this.pristineReactive.set(e))}_pristine=Ap(()=>this.pristineReactive());pristineReactive=Xe$1(!0);get dirty(){return!this.pristine}get touched(){return sn(this.touchedReactive)}set touched(e){sn(()=>this.touchedReactive.set(e))}_touched=Ap(()=>this.touchedReactive());touchedReactive=Xe$1(!1);get untouched(){return!this.touched}_events=new ce$1;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Dn(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Dn(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(xn(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(xn(e,this._rawAsyncValidators))}hasValidator(e){return Kt(this._rawValidators,e)}hasAsyncValidator(e){return Kt(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsTouched(H$1(w({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new ft(!0,i))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),e.onlySelf||this._parent?._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new ft(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsDirty(H$1(w({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new pt(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),e.onlySelf||this._parent?._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new pt(!0,i))}markAsPending(e={}){this.status=et;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new nt(this.status,t)),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.markAsPending(H$1(w({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=mt,this.errors=null,this._forEachChild(r=>{r.disable(H$1(w({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Zt(this.value,i)),this._events.next(new nt(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(H$1(w({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=ut,this._forEachChild(i=>{i.enable(H$1(w({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(H$1(w({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){e.onlySelf||(this._parent?.updateValueAndValidity(e),e.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ut||this.status===et)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Zt(this.value,t)),this._events.next(new nt(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.updateValueAndValidity(H$1(w({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?mt:ut}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=et,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:e!==!1};let i=Pn(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(`.`)),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i?.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new nt(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new lt,this.statusChanges=new lt}_calculateStatus(){return this._allControlsDisabled()?mt:this.errors?Wt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(et)?et:this._anyControlsHaveStatus(Wt)?Wt:ut}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,e.onlySelf||this._parent?._updatePristine(e,t),r&&this._events.next(new pt(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new ft(this.touched,t)),e.onlySelf||this._parent?._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ee(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=er(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=nr(this._rawAsyncValidators)}_updateHasRequiredValidator(){sn(()=>this._hasRequired.set(this.hasValidator(ye.required)))}};function Kn(n,e){return Object.hasOwn(n,e)}function ir(n){return n.tagName===`INPUT`||n.tagName===`SELECT`||n.tagName===`TEXTAREA`}function rr(n,e,t,i){switch(t){case`name`:n.setAttribute(e,t,i);break;case`disabled`:case`readonly`:case`required`:i?n.setAttribute(e,t,``):n.removeAttribute(e,t);break;case`max`:case`min`:case`minLength`:case`maxLength`:i!==void 0?n.setAttribute(e,t,i.toString()):n.removeAttribute(e,t);break}}var Se=class{kind;context;control;message;constructor({kind:e,context:t,control:i}){this.kind=e,this.context=t,this.control=i}};var or=(()=>{class n{_validator=$t;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):$t,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static ɵfac=function(i){return new(i||n)};static ɵdir=Ml({type:n,features:[Mh]})}return n})();var ar={provide:gt,useExisting:mc(()=>qn),multi:!0};var qn=(()=>{class n extends or{required;inputName=`required`;normalizeInput=YD;createValidator=t=>kn;enabled(t){return t}static ɵfac=(()=>{let t;return function(r){return(t||(t=wE(n)))(r||n)}})();static ɵdir=Ml({type:n,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(i,r){i&2&&ws(`required`,r._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[xD([ar]),JI]})}return n})();var sr=new E(``);var vt=new E(``,{factory:()=>ne});var ne=`always`;function Zn(n,e){return[...e.path,n]}function Ce(n,e,t=ne){Te(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t===`always`)&&e.valueAccessor.setDisabledState?.(n.disabled),lr(n,e),ur(n,e),dr(n,e),cr(n,e)}function wn(n,e,t=!0){let i=()=>{};e?.valueAccessor?.registerOnChange(i),e?.valueAccessor?.registerOnTouched(i),Qt(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Xt(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function cr(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function Te(n,e){let t=Hn(n);e.validator!==null?n.setValidators(An(t,e.validator)):typeof t==`function`&&n.setValidators([t]);let i=zn(n);e.asyncValidator!==null?n.setAsyncValidators(An(i,e.asyncValidator)):typeof i==`function`&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();Xt(e._rawValidators,r),Xt(e._rawAsyncValidators,r)}function Qt(n,e){let t=!1;if(n!==null){if(e.validator!==null){let r=Hn(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.validator);o.length!==r.length&&(t=!0,n.setValidators(o))}}if(e.asyncValidator!==null){let r=zn(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.asyncValidator);o.length!==r.length&&(t=!0,n.setAsyncValidators(o))}}}let i=()=>{};return Xt(e._rawValidators,i),Xt(e._rawAsyncValidators,i),t}function lr(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn===`change`&&Yn(n,e)})}function dr(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn===`blur`&&n._pendingChange&&Yn(n,e),n.updateOn!==`submit`&&n.markAsTouched()})}function Yn(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function ur(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function Xn(n,e){Te(n,e)}function mr(n,e){return Qt(n,e)}function Qn(n,e){if(!n.hasOwnProperty(`model`))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function hr(n){return Object.getPrototypeOf(n.constructor)===Gi}function Jn(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn===`submit`&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function pr(n,e){if(!e)return null;let t,i,r;return e.forEach(o=>{o.constructor===On?t=o:hr(o)?i=o:r=o}),r||i||t||null}function fr(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var ti={provide:sr,useFactory:()=>{let n=m(G,{self:!0});return{setParseErrors:e=>{n.setParseErrorSource(e)},set onReset(e){n.onReset=e}}}};var G=class extends qt{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(e){this.userOnReset=e,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof Z&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=pr(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(e,t,i){super(),this.injector=e,this.renderer=t,this.rawValueAccessors=i,this.injector?.get(ye$1)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let e=this.injector?.get(kk);if(!this.control||!e)return;let t=e.markForCheck.bind(e);this.subscription=new te$1,this.subscription.add(this.control.valueChanges.subscribe(t)),this.subscription.add(this.control.statusChanges.subscribe(t)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof Z&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(e){!e.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!e.customControl||(this.isCustomControlBased=!0,e.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),e.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=ir(e.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof qn))}ngControlUpdate(e,t){if(!this.isCustomControlBased)return;let i=this.control,r=this.customControlBindings;Object.is(r.value,i.value)||(r.value=i.value,e.setCustomControlModelInput(i.value)),this.bindControlProperty(e,r,`touched`,i.touched),this.bindControlProperty(e,r,`dirty`,i.dirty),this.bindControlProperty(e,r,`valid`,i.valid),this.bindControlProperty(e,r,`invalid`,i.invalid),this.bindControlProperty(e,r,`pending`,i.pending),this.bindControlProperty(e,r,`disabled`,i.disabled),this.shouldBindRequired&&this.bindControlProperty(e,r,`required`,this.isRequired);let o=i.errors;if(r.errors!==o){r.errors=o;let s=this._convertErrors(o);e.setInputOnDirectives(`errors`,s)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(e,t,i,r){if(t[i]===r)return;t[i]=r;let o=e.setInputOnDirectives(i,r);this.isNativeFormElement&&!o&&(i===`disabled`||i===`required`)&&this.renderer&&rr(this.renderer,e.nativeElement,i,r)}_convertErrors(e){if(e===null)return[];let t=this.control;return Object.entries(e).map(([i,r])=>new Se({context:r,kind:i,control:t}))}setParseErrorSource(e){if(e===void 0)return;let t=null,i=Ap(()=>{let r=e();return r.length===0?null:r.reduce((o,s)=>(o[s.kind]=s,o),{})});this.parseErrorsValidator=(()=>t).bind(this),Vc(()=>{t=i(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(e){this.parseErrorsValidator&&(e?.removeValidators(this.parseErrorsValidator),e?.updateValueAndValidity({emitEvent:!1}))}};var Jt=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var wo=(()=>{class n extends Jt{constructor(t){super(t)}static ɵfac=function(i){return new(i||n)(Ut(G,2))};static ɵdir=Ml({type:n,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(i,r){i&2&&Rl(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)},standalone:!1,features:[JI]})}return n})();var Mo=(()=>{class n extends Jt{constructor(t){super(t)}static ɵfac=function(i){return new(i||n)(Ut(P,10))};static ɵdir=Ml({type:n,selectors:[[``,`formGroupName`,``],[``,`formArrayName`,``],[``,`ngModelGroup`,``],[``,`formGroup`,``],[``,`formArray`,``],[`form`,3,`ngNoForm`,``],[``,`ngForm`,``]],hostVars:16,hostBindings:function(i,r){i&2&&Rl(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)(`ng-submitted`,r.isSubmitted)},standalone:!1,features:[JI]})}return n})();var rt=class extends it{constructor(e,t,i){super(Fe(t),Ve(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this._find(e)||(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){let i=this._find(e);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){let r=this._find(e);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this._find(e)?.enabled===!0}setValue(e,t={}){sn(()=>{$n(this,!0,e),Object.keys(e).forEach(i=>{Wn(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this._find(i);r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,H$1(w({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new Z(this))}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,o)=>{i=t(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return Kn(this.controls,e)?this.controls[e]:null}};var Ee=class extends rt{};var br={provide:P,useExisting:mc(()=>gr)};var ht=Promise.resolve();var gr=(()=>{class n extends P{callSetDisabledState;get submitted(){return sn(this.submittedReactive)}_submitted=Ap(()=>this.submittedReactive());submittedReactive=Xe$1(!1);_directives=new Set;form;ngSubmit=new lt;options;constructor(t,i,r){super(),this.callSetDisabledState=r,this.form=new rt({},Me(t),Ie(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){ht.then(()=>{t.control=this._findContainer(t.path).registerControl(t.name,t.control),t._setupWithForm(this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){ht.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){ht.then(()=>{let i=this._findContainer(t.path),r=new rt({});Xn(r,t),i.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){ht.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,i){ht.then(()=>{this.form.get(t.path).setValue(i)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),Jn(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new Yt(this.control)),t?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static ɵfac=function(i){return new(i||n)(Ut(gt,10),Ut(te,10),Ut(vt,8))};static ɵdir=Ml({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(i,r){i&1&&fD(`submit`,function(s){return r.onSubmit(s)})(`reset`,function(){return r.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[xD([br]),JI]})}return n})();function Mn(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function In(n){return typeof n==`object`&&n!==null&&Object.keys(n).length===2&&`value`in n&&`disabled`in n}var bt=class extends it{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(Fe(t),Ve(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ee(t)&&(t.nonNullable||t.initialValueIsDefault)&&(In(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){sn(()=>{this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)})}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new Z(this))}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Mn(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Mn(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){In(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var vr=n=>n instanceof bt;var _r={provide:G,useExisting:mc(()=>yr)};var Fn=Promise.resolve();var yr=(()=>{class n extends G{_changeDetectorRef;callSetDisabledState;control=new bt;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name=``;isDisabled;model;options;update=new lt;constructor(t,i,r,o,s,c,p,w){super(p,w,o),this._changeDetectorRef=s,this.callSetDisabledState=c,this._parent=t,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||`name`in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}`isDisabled`in t&&this._updateDisabled(t),Qn(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}ɵngControlCreate(t){super.ngControlCreate(t)}ɵngControlUpdate(t){super.ngControlUpdate(t,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Ce(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(t){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Ce(this.control,this,t))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Fn.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&YD(i);Fn.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Zn(t,this._parent):[t]}static ɵfac=function(i){return new(i||n)(Ut(P,9),Ut(gt,10),Ut(te,10),Ut(De,10),Ut(kk,8),Ut(vt,8),Ut(Ie$1,8),Ut(rl,8))};static ɵdir=Ml({type:n,selectors:[[``,`ngModel`,``,3,`formControlName`,``,3,`formControl`,``]],inputs:{name:`name`,isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`],options:[0,`ngModelOptions`,`options`]},outputs:{update:`ngModelChange`},exportAs:[`ngModel`],standalone:!1,features:[xD([_r,ti]),JI,Mh,H0(null)]})}return n})();var Fo=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=Ml({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`ngNativeValidate`,``]],hostAttrs:[`novalidate`,``],standalone:!1})}return n})();var Ae=class extends it{constructor(e,t,i){super(Fe(t),Ve(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){Array.isArray(e)?e.forEach(i=>{this.controls.push(i),this._registerControl(i)}):(this.controls.push(e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,i={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,t={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),t&&(this.controls.splice(r,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){sn(()=>{$n(this,!1,e),e.forEach((i,r)=>{Wn(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(e,t={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((i,r)=>{i.reset(e[r],H$1(w({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new Z(this))}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,i)=>i._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,i)=>{e(t,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};var Nr=(()=>{class n extends P{callSetDisabledState;get submitted(){return sn(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=Ap(()=>this._submittedReactive());_submittedReactive=Xe$1(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,i,r){super(),this.callSetDisabledState=r,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){this._checkFormPresent(),t.hasOwnProperty(`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Qt(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let i=this.form.get(t.path);return t._setupWithForm(i,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){wn(t.control||null,t,!1),fr(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,i){this.form.get(t.path).setValue(i)}onReset(){this.resetForm()}resetForm(t=void 0,i={}){this.form.reset(t,i),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,Jn(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new Yt(this.control)),t?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(t=>{let i=t.control,r=this.form.get(t.path);i!==r&&(wn(i||null,t),vr(r)&&t._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let i=this.form.get(t.path);Xn(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let i=this.form?.get(t.path);i&&mr(i,t)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Te(this.form,this),this._oldForm&&Qt(this._oldForm,this)}_checkFormPresent(){this.form}static ɵfac=function(i){return new(i||n)(Ut(gt,10),Ut(te,10),Ut(vt,8))};static ɵdir=Ml({type:n,features:[JI,Mh]})}return n})();var ei=new E(``);var Sr={provide:G,useExisting:mc(()=>Cr)};var Cr=(()=>{class n extends G{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new lt;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,r,o,s,c,p){super(p,c,o),this._ngModelWarningConfig=s,this._parent=t,this._setValidators(i),this._setAsyncValidators(r)}_setupWithForm(t,i){this.control=t,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Ce(t,this,i))}ngOnChanges(t){this._added||this._setUpControl(),Qn(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Zn(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}ɵngControlCreate(t){super.ngControlCreate(t)}ɵngControlUpdate(t){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(t,!0))}static ɵfac=function(i){return new(i||n)(Ut(P,13),Ut(gt,10),Ut(te,10),Ut(De,10),Ut(ei,8),Ut(rl,8),Ut(Ie$1,8))};static ɵdir=Ml({type:n,selectors:[[``,`formControlName`,``]],inputs:{name:[0,`formControlName`,`name`],isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`]},outputs:{update:`ngModelChange`},standalone:!1,features:[xD([Sr,ti]),JI,Mh,H0(null)]})}return n})();var Er={provide:P,useExisting:mc(()=>Ar)};var Ar=(()=>{class n extends Nr{form=null;ngSubmit=new lt;get control(){return this.form}static ɵfac=(()=>{let t;return function(r){return(t||(t=wE(n)))(r||n)}})();static ɵdir=Ml({type:n,selectors:[[``,`formGroup`,``]],hostBindings:function(i,r){i&1&&fD(`submit`,function(s){return r.onSubmit(s)})(`reset`,function(){return r.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[xD([Er]),JI]})}return n})();var ni=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=zn$1({type:n});static ɵinj=Jt$1({})}return n})();function Vn(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var Vo=(()=>{class n{useNonNullable=!1;get nonNullable(){let t=new n;return t.useNonNullable=!0,t}group(t,i=null){let r=this._reduceControls(t),o={};return Vn(i)?o=i:i!==null&&(o.validators=i.validator,o.asyncValidators=i.asyncValidator),new rt(r,o)}record(t,i=null){return new Ee(this._reduceControls(t),i)}control(t,i,r){let o={};return this.useNonNullable?(Vn(i)?o=i:(o.validators=i,o.asyncValidators=r),new bt(t,H$1(w({},o),{nonNullable:!0}))):new bt(t,i,r)}array(t,i,r){return new Ae(t.map(s=>this._createControl(s)),i,r)}_reduceControls(t){let i={};return Object.keys(t).forEach(r=>{i[r]=this._createControl(t[r])}),i}_createControl(t){if(t instanceof bt)return t;if(t instanceof it)return t;if(Array.isArray(t)){let i=t[0],r=t.length>1?t[1]:null,o=t.length>2?t[2]:null;return this.control(i,r,o)}else return this.control(t)}static ɵfac=function(i){return new(i||n)};static ɵprov=Oe$1({token:n,factory:n.ɵfac})}return n})();var To=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:vt,useValue:t.callSetDisabledState??ne}]}}static ɵfac=function(i){return new(i||n)};static ɵmod=zn$1({type:n});static ɵinj=Jt$1({imports:[ni]})}return n})();var Oo=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:ei,useValue:t.warnOnNgModelWithFormControl??`always`},{provide:vt,useValue:t.callSetDisabledState??ne}]}}static ɵfac=function(i){return new(i||n)};static ɵmod=zn$1({type:n});static ɵinj=Jt$1({imports:[ni]})}return n})();function _t(n){return n.buttons===0||n.detail===0}function yt(n){let e=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!e&&e.identifier===-1&&(e.radiusX==null||e.radiusX===1)&&(e.radiusY==null||e.radiusY===1)}var Oe;function ii(){if(Oe==null){let n=typeof document<`u`?document.head:null;Oe=!!(n&&(n.createShadowRoot||n.attachShadow))}return Oe}function ke(n){if(ii()){let e=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}function Dr(){let n=typeof document<`u`&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let e=n.shadowRoot.activeElement;if(e===n)break;n=e}return n}function F(n){if(n.composedPath)try{return n.composedPath()[0]}catch{}return n.target}var Re;try{Re=typeof Intl<`u`&&Intl.v8BreakIterator}catch{Re=!1}var v=(()=>{class n{_platformId=m(rs);isBrowser=this._platformId?Q9(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Re)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(i){return new(i||n)};static ɵprov=Oe$1({token:n,factory:n.ɵfac})}return n})();var Nt;function ri(){if(Nt==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>Nt=!0}))}finally{Nt=Nt||!1}return Nt}function ot(n){return ri()?n:!!n.capture}function Pe(n,e=0){return oi(n)?Number(n):arguments.length===2?e:0}function oi(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function O(n){return n instanceof $n$1?n.nativeElement:n}var ai=new E(`cdk-input-modality-detector-options`);var si={ignoreKeys:[18,17,224,91,16]};var ci=650;var Le={passive:!0,capture:!0};var li=(()=>{class n{_platform=m(v);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Co(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(i=>i===t.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=F(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<ci||(this._modality.next(_t(t)?`keyboard`:`mouse`),this._mostRecentTarget=F(t))};_onTouchstart=t=>{if(yt(t)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=F(t)};constructor(){let t=m(be),i=m(K),r=m(ai,{optional:!0});if(this._options=w(w({},si),r),this.modalityDetected=this._modality.pipe(iN(1)),this.modalityChanged=this.modalityDetected.pipe(ZS()),this._platform.isBrowser){let o=m(Br$1).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[o.listen(i,`keydown`,this._onKeydown,Le),o.listen(i,`mousedown`,this._onMousedown,Le),o.listen(i,`touchstart`,this._onTouchstart,Le)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static ɵfac=function(i){return new(i||n)};static ɵprov=Oe$1({token:n,factory:n.ɵfac})}return n})();var St=(function(n){return n[n.IMMEDIATE=0]=`IMMEDIATE`,n[n.EVENTUAL=1]=`EVENTUAL`,n})(St||{});var di=new E(`cdk-focus-monitor-default-options`);var ie=ot({passive:!0,capture:!0});var re=(()=>{class n{_ngZone=m(be);_platform=m(v);_inputModalityDetector=m(li);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=m(K);_stopInputModalityDetector=new ce$1;constructor(){let t=m(di,{optional:!0});this._detectionMode=t?.detectionMode||St.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let i=F(t);for(let r=i;r;r=r.parentElement)t.type===`focus`?this._onFocus(t,r):this._onBlur(t,r)};monitor(t,i=!1){let r=O(t);if(!this._platform.isBrowser||r.nodeType!==1)return qt$1();let o=ke(r)||this._document,s=this._elementInfo.get(r);if(s)return i&&(s.checkChildren=!0),s.subject;let c={checkChildren:i,subject:new ce$1,rootNode:o};return this._elementInfo.set(r,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let i=O(t),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(t,i,r){let o=O(t);o===this._document.activeElement?this._getClosestElementsInfo(o).forEach(([c,p])=>this._originChanged(c,i,p)):(this._setOrigin(i),typeof o.focus==`function`&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((t,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?`mouse`:`program`}_shouldBeAttributedToTouch(t){return this._detectionMode===St.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,i){t.classList.toggle(`cdk-focused`,!!i),t.classList.toggle(`cdk-touch-focused`,i===`touch`),t.classList.toggle(`cdk-keyboard-focused`,i===`keyboard`),t.classList.toggle(`cdk-mouse-focused`,i===`mouse`),t.classList.toggle(`cdk-program-focused`,i===`program`)}_setOrigin(t,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t===`touch`&&i,this._detectionMode===St.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?ci:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(t,i){let r=this._elementInfo.get(i),o=F(t);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(t,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&t.relatedTarget instanceof Node&&i.contains(t.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(t,i){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(i))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let i=t.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,ie),i.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,ie)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(vi$1(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(t){let i=t.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,ie),i.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,ie),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,i,r){this._setClasses(t,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(t){let i=[];return this._elementInfo.forEach((r,o)=>{(o===t||r.checkChildren&&o.contains(t))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!==`mouse`||!i||i===t||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`||t.disabled)return!1;let o=t.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(i))return!0}return!1}static ɵfac=function(i){return new(i||n)};static ɵprov=Oe$1({token:n,factory:n.ɵfac})}return n})();var xr=(()=>{class n{_elementRef=m($n$1);_focusMonitor=m(re);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new lt;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let t=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(t,t.nodeType===1&&t.hasAttribute(`cdkMonitorSubtreeFocus`)).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static ɵfac=function(i){return new(i||n)};static ɵdir=Ml({type:n,selectors:[[``,`cdkMonitorElementFocus`,``],[``,`cdkMonitorSubtreeFocus`,``]],outputs:{cdkFocusChange:`cdkFocusChange`},exportAs:[`cdkMonitorFocus`]})}return n})();function Be(n){return Array.isArray(n)?n:[n]}var ui=new Set;var Y;var oe=(()=>{class n{_platform=m(v);_nonce=m(is,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Mr}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&wr(t,this._nonce),this._matchMedia(t)}static ɵfac=function(i){return new(i||n)};static ɵprov=Oe$1({token:n,factory:n.ɵfac})}return n})();function wr(n,e){if(!ui.has(n))try{Y||(Y=document.createElement(`style`),e&&Y.setAttribute(`nonce`,e),Y.setAttribute(`type`,`text/css`),document.head.appendChild(Y)),Y.sheet&&(Y.sheet.insertRule(`@media ${n.replace(/[{}]/g,``)} {body{ }}`,0),ui.add(n))}catch(t){console.error(t)}}function Mr(n){return{matches:n===`all`||n===``,media:n,addListener:()=>{},removeListener:()=>{}}}var je=(()=>{class n{_mediaMatcher=m(oe);_zone=m(be);_queries=new Map;_destroySubject=new ce$1;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return mi(Be(t)).some(r=>this._registerQuery(r).mql.matches)}observe(t){let o=VS(mi(Be(t)).map(s=>this._registerQuery(s).observable));return o=ec(o.pipe(yi$1(1)),o.pipe(iN(1),rc(0))),o.pipe(he(s=>{let c={matches:!1,breakpoints:{}};return s.forEach(({matches:p,query:w})=>{c.matches=c.matches||p,c.breakpoints[w]=p}),c}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let i=this._mediaMatcher.matchMedia(t),o={observable:new M(s=>{let c=p=>this._zone.run(()=>s.next(p));return i.addListener(c),()=>{i.removeListener(c)}}).pipe(oN(i),he(({matches:s})=>({query:t,matches:s})),vi$1(this._destroySubject)),mql:i};return this._queries.set(t,o),o}static ɵfac=function(i){return new(i||n)};static ɵprov=Oe$1({token:n,factory:n.ɵfac})}return n})();function mi(n){return n.map(e=>e.split(`,`)).reduce((e,t)=>e.concat(t)).map(e=>e.trim())}function Ir(n){if(n.type===`characterData`&&n.target instanceof Comment)return!0;if(n.type===`childList`){for(let e=0;e<n.addedNodes.length;e++)if(!(n.addedNodes[e]instanceof Comment))return!1;for(let e=0;e<n.removedNodes.length;e++)if(!(n.removedNodes[e]instanceof Comment))return!1;return!0}return!1}var hi=(()=>{class n{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(i){return new(i||n)};static ɵprov=Oe$1({token:n,factory:n.ɵfac})}return n})();var pi=(()=>{class n{_mutationObserverFactory=m(hi);_observedElements=new Map;_ngZone=m(be);ngOnDestroy(){this._observedElements.forEach((t,i)=>this._cleanupObserver(i))}observe(t){let i=O(t);return new M(r=>{let s=this._observeElement(i).pipe(he(c=>c.filter(p=>!Ir(p))),bt$1(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{r.next(c)})});return()=>{s.unsubscribe(),this._unobserveElement(i)}})}_observeElement(t){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let i=new ce$1,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:r,stream:i,count:1})}return this._observedElements.get(t).stream})}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:i,stream:r}=this._observedElements.get(t);i&&i.disconnect(),r.complete(),this._observedElements.delete(t)}}static ɵfac=function(i){return new(i||n)};static ɵprov=Oe$1({token:n,factory:n.ɵfac})}return n})();var xa=(()=>{class n{_contentObserver=m(pi);_elementRef=m($n$1);event=new lt;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(t){this._debounce=Pe(t),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?t.pipe(rc(this.debounce)):t).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(i){return new(i||n)};static ɵdir=Ml({type:n,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,YD],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return n})();var fi=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=zn$1({type:n});static ɵinj=Jt$1({providers:[hi]})}return n})();var _i=(()=>{class n{_platform=m(v);isDisabled(t){return t.hasAttribute(`disabled`)}isVisible(t){return Vr(t)&&getComputedStyle(t).visibility===`visible`}isTabbable(t){if(!this._platform.isBrowser)return!1;let i=Fr(jr(t));if(i&&(bi(i)===-1||!this.isVisible(i)))return!1;let r=t.nodeName.toLowerCase(),o=bi(t);return t.hasAttribute(`contenteditable`)?o!==-1:r===`iframe`||r===`object`||this._platform.WEBKIT&&this._platform.IOS&&!Lr(t)?!1:r===`audio`?t.hasAttribute(`controls`)?o!==-1:!1:r===`video`?o===-1?!1:o!==null?!0:this._platform.FIREFOX||t.hasAttribute(`controls`):t.tabIndex>=0}isFocusable(t,i){return Br(t)&&!this.isDisabled(t)&&(i?.ignoreVisibility||this.isVisible(t))}static ɵfac=function(i){return new(i||n)};static ɵprov=Oe$1({token:n,factory:n.ɵfac})}return n})();function Fr(n){try{return n.frameElement}catch{return null}}function Vr(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects==`function`&&n.getClientRects().length)}function Tr(n){let e=n.nodeName.toLowerCase();return e===`input`||e===`select`||e===`button`||e===`textarea`}function Or(n){return Rr(n)&&n.type==`hidden`}function kr(n){return Pr(n)&&n.hasAttribute(`href`)}function Rr(n){return n.nodeName.toLowerCase()==`input`}function Pr(n){return n.nodeName.toLowerCase()==`a`}function yi(n){if(!n.hasAttribute(`tabindex`)||n.tabIndex===void 0)return!1;let e=n.getAttribute(`tabindex`);return!!(e&&!isNaN(parseInt(e,10)))}function bi(n){if(!yi(n))return null;let e=parseInt(n.getAttribute(`tabindex`)||``,10);return isNaN(e)?-1:e}function Lr(n){let e=n.nodeName.toLowerCase(),t=e===`input`&&n.type;return t===`text`||t===`password`||e===`select`||e===`textarea`}function Br(n){return Or(n)?!1:Tr(n)||kr(n)||n.hasAttribute(`contenteditable`)||yi(n)}function jr(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var ae=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_enabled=!0;constructor(e,t,i,r,o=!1,s){this._element=e,this._checker=t,this._ngZone=i,this._document=r,this._injector=s,o||this.attachAnchors()}destroy(){let e=this._startAnchor,t=this._endAnchor;e&&(e.removeEventListener(`focus`,this.startAnchorListener),e.remove()),t&&(t.removeEventListener(`focus`,this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(e)))})}focusFirstTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(e)))})}focusLastTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(e)))})}_getRegionBoundary(e){let t=this._element.querySelectorAll(`[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`);return e==`start`?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(e){let t=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(t){if(!this._checker.isFocusable(t)){let i=this._getFirstTabbableElement(t);return i?.focus(e),!!i}return t.focus(e),!0}return this.focusFirstTabbableElement(e)}focusFirstTabbableElement(e){let t=this._getRegionBoundary(`start`);return t&&t.focus(e),!!t}focusLastTabbableElement(e){let t=this._getRegionBoundary(`end`);return t&&t.focus(e),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children;for(let i=0;i<t.length;i++){let r=t[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[i]):null;if(r)return r}return null}_getLastTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children;for(let i=t.length-1;i>=0;i--){let r=t[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[i]):null;if(r)return r}return null}_createAnchor(){let e=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,e),e.classList.add(`cdk-visually-hidden`),e.classList.add(`cdk-focus-trap-anchor`),e.setAttribute(`aria-hidden`,`true`),e}_toggleAnchorTabIndex(e,t){e?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`)}toggleAnchors(e){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_executeOnStable(e){PM(e,{injector:this._injector})}};var Ur=(()=>{class n{_checker=m(_i);_ngZone=m(be);_document=m(K);_injector=m(Ie$1);constructor(){m(JU).load(WJ)}create(t,i=!1){return new ae(t,this._checker,this._ngZone,this._document,i,this._injector)}static ɵfac=function(i){return new(i||n)};static ɵprov=Oe$1({token:n,factory:n.ɵfac})}return n})();var Ni=new E(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var Si=new E(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var Gr=0;var Hr=(()=>{class n{_ngZone=m(be);_defaultOptions=m(Si,{optional:!0});_liveElement;_document=m(K);_sanitizer=m(rg);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=m(Ni,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...i){let r=this._defaultOptions,o,s;return i.length===1&&typeof i[0]==`number`?s=i[0]:[o,s]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:`polite`),s==null&&r&&(s=r.duration),this._liveElement.setAttribute(`aria-live`,o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t==`string`?this._liveElement.textContent=t:zJ(this._liveElement,t,this._sanitizer),typeof s==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t=`cdk-live-announcer-element`,i=this._document.getElementsByClassName(t),r=this._document.createElement(`div`);for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(t),r.classList.add(`cdk-visually-hidden`),r.setAttribute(`aria-atomic`,`true`),r.setAttribute(`aria-live`,`polite`),r.id=`cdk-live-announcer-${Gr++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(t){let i=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let r=0;r<i.length;r++){let o=i[r],s=o.getAttribute(`aria-owns`);s?s.indexOf(t)===-1&&o.setAttribute(`aria-owns`,s+` `+t):o.setAttribute(`aria-owns`,t)}}static ɵfac=function(i){return new(i||n)};static ɵprov=Oe$1({token:n,factory:n.ɵfac})}return n})();var H=(function(n){return n[n.NONE=0]=`NONE`,n[n.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,n[n.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,n})(H||{});var gi=`cdk-high-contrast-black-on-white`;var vi=`cdk-high-contrast-white-on-black`;var Ue=`cdk-high-contrast-active`;var Ci=(()=>{class n{_platform=m(v);_hasCheckedHighContrastMode=!1;_document=m(K);_breakpointSubscription;constructor(){this._breakpointSubscription=m(je).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return H.NONE;let t=this._document.createElement(`div`);t.style.backgroundColor=`rgb(1,2,3)`,t.style.position=`absolute`,this._document.body.appendChild(t);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(t):null,o=(r&&r.backgroundColor||``).replace(/ /g,``);switch(t.remove(),o){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return H.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return H.BLACK_ON_WHITE}return H.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(Ue,gi,vi),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===H.BLACK_ON_WHITE?t.add(Ue,gi):i===H.WHITE_ON_BLACK&&t.add(Ue,vi)}}static ɵfac=function(i){return new(i||n)};static ɵprov=Oe$1({token:n,factory:n.ɵfac})}return n})();var zr=(()=>{class n{constructor(){m(Ci)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(i){return new(i||n)};static ɵmod=zn$1({type:n});static ɵinj=Jt$1({imports:[fi]})}return n})();var Wr=200;var se=class{_letterKeyStream=new ce$1;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new ce$1;selectedItem=this._selectedItem;constructor(e,t){let i=typeof t?.debounceInterval==`number`?t.debounceInterval:Wr;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(e),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(e){this._selectedItemIndex=e}setItems(e){this._items=e}handleKey(e){let t=e.keyCode;e.key&&e.key.length===1?this._letterKeyStream.next(e.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(e){this._letterKeyStream.pipe(xo(t=>this._pressedLetters.push(t)),rc(e),bt$1(()=>this._pressedLetters.length>0),he(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(t=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Ei(n,...e){return e.length?e.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var at=class{_items;_activeItemIndex=Xe$1(-1);_activeItem=Xe$1(null);_wrap=!1;_typeaheadSubscription=te$1.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=e=>e.disabled;constructor(e,t){this._items=e,e instanceof tl?this._itemChangesSubscription=e.changes.subscribe(i=>this._itemsChanged(i.toArray())):Bc(e)&&(this._effectRef=Vc(()=>this._itemsChanged(e()),{injector:t}))}tabOut=new ce$1;change=new ce$1;skipPredicate(e){return this._skipPredicateFn=e,this}withWrap(e=!0){return this._wrap=e,this}withVerticalOrientation(e=!0){return this._vertical=e,this}withHorizontalOrientation(e){return this._horizontal=e,this}withAllowedModifierKeys(e){return this._allowedModifierKeys=e,this}withTypeAhead(e=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new se(t,{debounceInterval:typeof e==`number`?e:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(e=!0){return this._homeAndEnd=e,this}withPageUpDown(e=!0,t=10){return this._pageUpAndDown={enabled:e,delta:t},this}setActiveItem(e){let t=this._activeItem();this.updateActiveItem(e),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(e){let t=e.keyCode,r=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(o=>!e[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(r||Ei(e,`shiftKey`))&&this._typeahead?.handleKey(e);return}this._typeahead?.reset(),e.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(e){let t=this._getItemsArray(),i=typeof e==`number`?e:t.indexOf(e),r=t[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(e){this._wrap?this._setActiveInWrapMode(e):this._setActiveInDefaultMode(e)}_setActiveInWrapMode(e){let t=this._getItemsArray();for(let i=1;i<=t.length;i++){let r=(this._activeItemIndex()+e*i+t.length)%t.length,o=t[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(e){this._setActiveItemByIndex(this._activeItemIndex()+e,e)}_setActiveItemByIndex(e,t){let i=this._getItemsArray();if(i[e]){for(;this._skipPredicateFn(i[e]);)if(e+=t,!i[e])return;this.setActiveItem(e)}}_getItemsArray(){return Bc(this._items)?this._items():this._items instanceof tl?this._items.toArray():this._items}_itemsChanged(e){this._typeahead?.setItems(e);let t=this._activeItem();if(t){let i=e.indexOf(t);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var Ge=class extends at{setActiveItem(e){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(e),this.activeItem&&this.activeItem.setActiveStyles()}};var He=class extends at{_origin=`program`;setFocusOrigin(e){return this._origin=e,this}setActiveItem(e){super.setActiveItem(e),this.activeItem&&this.activeItem.focus(this._origin)}};var Ai=new Map;var ze=class n{_appId=m(ns);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(e,t=!1){this._appId!==`ng`&&(e+=this._appId);let i=Ai.get(e);return i===void 0?i=0:i++,Ai.set(e,i),`${e}${t?n._infix+`-`:``}${i}`}static ɵfac=function(t){return new(t||n)};static ɵprov=Oe$1({token:n,factory:n.ɵfac})};var xi=` `;function $r(n,e,t){let i=le(n,e);t=t.trim(),!i.some(r=>r.trim()===t)&&(i.push(t),n.setAttribute(e,i.join(xi)))}function Kr(n,e,t){let i=le(n,e);t=t.trim();let r=i.filter(o=>o!==t);r.length?n.setAttribute(e,r.join(xi)):n.removeAttribute(e)}function le(n,e){return n.getAttribute(e)?.match(/\S+/g)??[]}var wi=`cdk-describedby-message`;var ce=`cdk-describedby-host`;var $e=0;var As=(()=>{class n{_platform=m(v);_document=m(K);_messageRegistry=new Map;_messagesContainer=null;_id=`${$e++}`;constructor(){m(JU).load(WJ),this._id=m(ns)+`-`+$e++}describe(t,i,r){if(!this._canBeDescribed(t,i))return;let o=We(i,r);typeof i!=`string`?(Di(i,this._id),this._messageRegistry.set(o,{messageElement:i,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(i,r),this._isElementDescribedByMessage(t,o)||this._addMessageReference(t,o)}removeDescription(t,i,r){if(!i||!this._isElementNode(t))return;let o=We(i,r);if(this._isElementDescribedByMessage(t,o)&&this._removeMessageReference(t,o),typeof i==`string`){let s=this._messageRegistry.get(o);s&&s.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let t=this._document.querySelectorAll(`[${ce}="${this._id}"]`);for(let i=0;i<t.length;i++)this._removeCdkDescribedByReferenceIds(t[i]),t[i].removeAttribute(ce);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(t,i){let r=this._document.createElement(`div`);Di(r,this._id),r.textContent=t,i&&r.setAttribute(`role`,i),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(We(t,i),{messageElement:r,referenceCount:0})}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t)}_createMessagesContainer(){if(this._messagesContainer)return;let t=`cdk-describedby-message-container`,i=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let o=0;o<i.length;o++)i[o].remove();let r=this._document.createElement(`div`);r.style.visibility=`hidden`,r.classList.add(t),r.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||r.setAttribute(`platform`,`server`),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(t){let i=le(t,`aria-describedby`).filter(r=>r.indexOf(wi)!=0);t.setAttribute(`aria-describedby`,i.join(` `))}_addMessageReference(t,i){let r=this._messageRegistry.get(i);$r(t,`aria-describedby`,r.messageElement.id),t.setAttribute(ce,this._id),r.referenceCount++}_removeMessageReference(t,i){let r=this._messageRegistry.get(i);r.referenceCount--,Kr(t,`aria-describedby`,r.messageElement.id),t.removeAttribute(ce)}_isElementDescribedByMessage(t,i){let r=le(t,`aria-describedby`),o=this._messageRegistry.get(i),s=o&&o.messageElement.id;return!!s&&r.indexOf(s)!=-1}_canBeDescribed(t,i){if(!this._isElementNode(t))return!1;if(i&&typeof i==`object`)return!0;let r=i==null?``:`${i}`.trim(),o=t.getAttribute(`aria-label`);return r?!o||o.trim()!==r:!1}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(i){return new(i||n)};static ɵprov=Oe$1({token:n,factory:n.ɵfac})}return n})();function We(n,e){return typeof n==`string`?`${e||``}/${n}`:n}function Di(n,e){n.id||(n.id=`${wi}-${e}-${$e++}`)}var Ct=(function(n){return n[n.NORMAL=0]=`NORMAL`,n[n.NEGATED=1]=`NEGATED`,n[n.INVERTED=2]=`INVERTED`,n})(Ct||{});var de;var X;function Ts(){if(X==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return X=!1,X;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)X=!0;else{let n=Element.prototype.scrollTo;n?X=!/\{\s*\[native code\]\s*\}/.test(n.toString()):X=!1}}return X}function Os(){if(typeof document!=`object`||!document)return Ct.NORMAL;if(de==null){let n=document.createElement(`div`),e=n.style;n.dir=`rtl`,e.width=`1px`,e.overflow=`auto`,e.visibility=`hidden`,e.pointerEvents=`none`,e.position=`absolute`;let t=document.createElement(`div`),i=t.style;i.width=`2px`,i.height=`1px`,n.appendChild(t),document.body.appendChild(n),de=Ct.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,de=n.scrollLeft===0?Ct.NEGATED:Ct.INVERTED),n.remove()}return de}function Rs(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var st;var Mi=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function Ls(){if(st)return st;if(typeof document!=`object`||!document)return st=new Set(Mi),st;let n=document.createElement(`input`);return st=new Set(Mi.filter(e=>(n.setAttribute(`type`,e),n.type===e))),st}var qr=new E(`MATERIAL_ANIMATIONS`);var Ii=null;function Zr(){return m(qr,{optional:!0})?.animationsDisabled||m(KN,{optional:!0})===`NoopAnimations`?`di-disabled`:(Ii??=m(oe).matchMedia(`(prefers-reduced-motion)`).matches,Ii?`reduced-motion`:`enabled`)}function ct(){return Zr()!==`enabled`}function qs(n){return n==null?``:typeof n==`string`?n:`${n}px`}function Ys(n){return n!=null&&`${n}`!=`false`}var x=(function(n){return n[n.FADING_IN=0]=`FADING_IN`,n[n.VISIBLE=1]=`VISIBLE`,n[n.FADING_OUT=2]=`FADING_OUT`,n[n.HIDDEN=3]=`HIDDEN`,n})(x||{});var Ke=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=x.HIDDEN;constructor(e,t,i,r=!1){this._renderer=e,this.element=t,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}};var Fi=ot({passive:!0,capture:!0});var qe=class{_events=new Map;addHandler(e,t,i,r){let o=this._events.get(t);if(o){let s=o.get(i);s?s.add(r):o.set(i,new Set([r]))}else this._events.set(t,new Map([[i,new Set([r])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Fi)})}removeHandler(e,t,i){let r=this._events.get(e);if(!r)return;let o=r.get(t);o&&(o.delete(i),o.size===0&&r.delete(t),r.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,Fi)))}_delegateEventHandler=e=>{let t=F(e);t&&this._events.get(e.type)?.forEach((i,r)=>{(r===t||r.contains(t))&&i.forEach(o=>o.handleEvent(e))})}};var Et={enterDuration:225,exitDuration:150};var Yr=800;var Vi=ot({passive:!0,capture:!0});var Ti=[`mousedown`,`touchstart`];var Oi=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Xr=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Ds({type:n,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return n})();var At=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new qe;constructor(e,t,i,r,o){this._target=e,this._ngZone=t,this._platform=r,r.isBrowser&&(this._containerElement=O(i)),o&&o.get(JU).load(Xr)}fadeInRipple(e,t,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=w(w({},Et),i.animation);i.centered&&(e=r.left+r.width/2,t=r.top+r.height/2);let s=i.radius||Qr(e,t,r),c=e-r.left,p=t-r.top,w$1=o.enterDuration,y=document.createElement(`div`);y.classList.add(`mat-ripple-element`),y.style.left=`${c-s}px`,y.style.top=`${p-s}px`,y.style.height=`${s*2}px`,y.style.width=`${s*2}px`,i.color!=null&&(y.style.backgroundColor=i.color),y.style.transitionDuration=`${w$1}ms`,this._containerElement.appendChild(y);let Je=window.getComputedStyle(y),Ui=Je.transitionProperty,tn=Je.transitionDuration,me=Ui===`none`||tn===`0s`||tn===`0s, 0s`||r.width===0&&r.height===0,z=new Ke(this,y,i,me);y.style.transform=`scale3d(1, 1, 1)`,z.state=x.FADING_IN,i.persistent||(this._mostRecentTransientRipple=z);let Dt=null;return!me&&(w$1||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let en=()=>{Dt&&(Dt.fallbackTimer=null),clearTimeout(nn),this._finishRippleTransition(z)},he=()=>this._destroyRipple(z),nn=setTimeout(he,w$1+100);y.addEventListener(`transitionend`,en),y.addEventListener(`transitioncancel`,he),Dt={onTransitionEnd:en,onTransitionCancel:he,fallbackTimer:nn}}),this._activeRipples.set(z,Dt),(me||!w$1)&&this._finishRippleTransition(z),z}fadeOutRipple(e){if(e.state===x.FADING_OUT||e.state===x.HIDDEN)return;let t=e.element,i=w(w({},Et),e.config.animation);t.style.transitionDuration=`${i.exitDuration}ms`,t.style.opacity=`0`,e.state=x.FADING_OUT,(e._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let t=O(e);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Ti.forEach(i=>{n._eventManager.addHandler(this._ngZone,i,t,this)}))}handleEvent(e){e.type===`mousedown`?this._onMousedown(e):e.type===`touchstart`?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Oi.forEach(t=>{this._triggerElement.addEventListener(t,this,Vi)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){e.state===x.FADING_IN?this._startFadeOutTransition(e):e.state===x.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let t=e===this._mostRecentTransientRipple,{persistent:i}=e.config;e.state=x.VISIBLE,!i&&(!t||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){let t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=x.HIDDEN,t!==null&&(e.element.removeEventListener(`transitionend`,t.onTransitionEnd),e.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),e.element.remove()}_onMousedown(e){let t=_t(e),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Yr;!this._target.rippleDisabled&&!t&&!i&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!yt(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=e.changedTouches;if(t)for(let i=0;i<t.length;i++)this.fadeInRipple(t[i].clientX,t[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let t=e.state===x.VISIBLE||e.config.terminateOnPointerUp&&e.state===x.FADING_IN;!e.config.persistent&&t&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(Ti.forEach(t=>n._eventManager.removeHandler(t,e,this)),this._pointerUpEventsRegistered&&(Oi.forEach(t=>e.removeEventListener(t,this,Vi)),this._pointerUpEventsRegistered=!1))}};function Qr(n,e,t){let i=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),r=Math.max(Math.abs(e-t.top),Math.abs(e-t.bottom));return Math.sqrt(i*i+r*r)}var Ze=new E(`mat-ripple-global-options`);var lc=(()=>{class n{_elementRef=m($n$1);_animationsDisabled=ct();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=m(be),i=m(v),r=m(Ze,{optional:!0}),o=m(Ie$1);this._globalOptions=r||{},this._rippleRenderer=new At(this,t,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:w(w(w({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,i=0,r){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,i,w(w({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,w(w({},this.rippleConfig),t))}static ɵfac=function(i){return new(i||n)};static ɵdir=Ml({type:n,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(i,r){i&2&&Rl(`mat-ripple-unbounded`,r.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return n})();var Jr={capture:!0};var to=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var Ye=`mat-ripple-loader-uninitialized`;var Xe=`mat-ripple-loader-class-name`;var ki=`mat-ripple-loader-centered`;var ue=`mat-ripple-loader-disabled`;var Ri=(()=>{class n{_document=m(K);_animationsDisabled=ct();_globalRippleOptions=m(Ze,{optional:!0});_platform=m(v);_ngZone=m(be);_injector=m(Ie$1);_eventCleanups;_hosts=new Map;constructor(){let t=m(Br$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>to.map(i=>t.listen(this._document,i,this._onInteraction,Jr)))}ngOnDestroy(){let t=this._hosts.keys();for(let i of t)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(t,i){t.setAttribute(Ye,this._globalRippleOptions?.namespace??``),(i.className||!t.hasAttribute(Xe))&&t.setAttribute(Xe,i.className||``),i.centered&&t.setAttribute(ki,``),i.disabled&&t.setAttribute(ue,``)}setDisabled(t,i){let r=this._hosts.get(t);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(t))):i?t.setAttribute(ue,``):t.removeAttribute(ue)}_onInteraction=t=>{let i=F(t);if(i instanceof HTMLElement){let r=i.closest(`[${Ye}="${this._globalRippleOptions?.namespace??``}"]`);r&&this._createRipple(r)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let i=this._document.createElement(`span`);i.classList.add(`mat-ripple`,t.getAttribute(Xe)),t.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Et.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??Et.exitDuration,c={rippleDisabled:this._animationsDisabled||r?.disabled||t.hasAttribute(ue),rippleConfig:{centered:t.hasAttribute(ki),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},p=new At(c,this._ngZone,i,this._platform,this._injector),w=!c.rippleDisabled;w&&p.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:p,hasSetUpEvents:w}),t.removeAttribute(Ye)}destroyRipple(t){let i=this._hosts.get(t);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(i){return new(i||n)};static ɵprov=Oe$1({token:n,factory:n.ɵfac})}return n})();var Pi=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Ds({type:n,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return n})();var eo=[`*`,[[``,`progressIndicator`,``]]];var no=[`*`,`[progressIndicator]`];function io(n,e){n&1&&(Ep(0,`div`,1),Tp(1,1),Ip())}var ro=new E(`MAT_BUTTON_CONFIG`);function Li(n){return n==null?void 0:NK(n)}var Qe=(()=>{class n{_elementRef=m($n$1);_ngZone=m(be);_animationsDisabled=ct();_config=m(ro,{optional:!0});_focusMonitor=m(re);_cleanupClick;_renderer=m(rl);_rippleLoader=m(Ri);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=CK(!1,{transform:YD});constructor(){m(JU).load(Pi);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,i){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(i){return new(i||n)};static ɵdir=Ml({type:n,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(i,r){i&2&&(ws(`disabled`,r._getDisabledAttribute())(`aria-disabled`,r._getAriaDisabled())(`tabindex`,r._getTabIndex()),bp(r.color?`mat-`+r.color:``),Rl(`mat-mdc-button-progress-indicator-shown`,r.showProgress())(`mat-mdc-button-disabled`,r.disabled)(`mat-mdc-button-disabled-interactive`,r.disabledInteractive)(`mat-unthemed`,!r.color)(`_mat-animation-noopable`,r._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,YD],disabled:[2,`disabled`,`disabled`,YD],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,YD],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,YD],tabIndex:[2,`tabIndex`,`tabIndex`,Li],_tabindex:[2,`tabindex`,`_tabindex`,Li],showProgress:[1,`showProgress`]}})}return n})();var oo=(()=>{class n extends Qe{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(i){return new(i||n)};static ɵcmp=Ds({type:n,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[JI],ngContentSelectors:no,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(i,r){i&1&&(Cp(eo),aD(0,`span`,0),Tp(1),ix(2,io,2,0,`div`,1),aD(3,`span`,2)(4,`span`,3)),i&2&&(sR(2),ox(r.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2})}return n})();var Bi=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=zn$1({type:n});static ɵinj=Jt$1({imports:[iS]})}return n})();var ao=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]];var so=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`];function co(n,e){n&1&&(Ep(0,`div`,2),Tp(1,3),Ip())}var ji=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var kc=(()=>{class n extends Qe{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=lo(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?ji.get(this._appearance):null,o=ji.get(t);r&&i.remove(...r),i.add(...o),this._appearance=t}static ɵfac=function(i){return new(i||n)};static ɵcmp=Ds({type:n,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[JI],ngContentSelectors:so,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(i,r){i&1&&(Cp(ao),aD(0,`span`,0),Tp(1),Ep(2,`span`,1),Tp(3,1),Ip(),Tp(4,2),ix(5,co,2,0,`div`,2),aD(6,`span`,3)(7,`span`,4)),i&2&&(Rl(`mdc-button__ripple`,!r._isFab)(`mdc-fab__ripple`,r._isFab),sR(5),ox(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})}return n})();function lo(n){return n.hasAttribute(`mat-raised-button`)?`elevated`:n.hasAttribute(`mat-stroked-button`)?`outlined`:n.hasAttribute(`mat-flat-button`)?`filled`:n.hasAttribute(`mat-button`)?`text`:null}var Rc=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=zn$1({type:n});static ɵinj=Jt$1({imports:[Bi,iS]})}return n})();export{yr as $,Ur as A,gt as B,Pe as C,Rs as D,Ri as E,_i as F,oo as G,lc as H,_t as I,v as J,qs as K,ct as L,Ys as M,Ze as N,To as O,Zr as P,ye as Q,fi as R,Os as S,Rc as T,oe as U,kc as V,oi as W,xa as X,wo as Y,xr as Z,Ls as _,Bi as a,On as b,De as c,F as d,yt as et,Fo as f,Hr as g,He as h,Be as i,Vo as j,Ts as k,Dr as l,Ge as m,As as n,zr as nt,Cr as o,G as p,re as q,At as r,Ct as s,Ar as t,ze as tt,Ei as u,Mo as v,Pi as w,Oo as x,O as y,gr as z};