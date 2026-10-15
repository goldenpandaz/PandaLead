import{$t as Ux,At as Pt,Bn as fP,Br as tR,Cn as bc,Dn as dI,Er as ok,I as Hl,Ir as ree,Kt as T9,Mn as eC,Mt as Qk,N as HS,Nr as pt$1,P as Hh,Pr as qk,Pt as Qx,Qt as Up,Rn as er,Rr as sk,Rt as Rp,S as ED,Tn as ck,Tr as nk,W as Iw,Xn as hn,_i as y_,_n as Zw,ai as wO,c as Ak,d as BD,di as xD,er as iee,gr as m,j as Fp,jn as eB,k as Fl,mr as lP,nr as iw,nt as LD,or as jp,p as Bp,pn as YD,pr as ks,qt as TD,r as $R,rn as Vx,s as A_,si as wl,st as Lp,ti as v_,tr as it$1,ut as MD,xn as bD,z as I,zt as Rs}from"./chunk-DjYvpiiN.js";import{$ as mt$1,D as Qc,G as ce,K as ct$1,g as Jc,lt as st$1,r as $i,s as Dc,v as Ke,w as No}from"./chunk-B78S38cu.js";import{T as ti,_ as hn$1}from"./chunk-CkUxowh3.js";import"./chunk-wcfnZNpa.js";import{a as g,i as U,n as l,r as u,t as h}from"./main-B7UDQ5DM.js";import{n as Xt,t as Mt}from"./chunk-CkPnNFMl.js";import{a as Wt,c as ee,i as Qt,l as zt,n as Ht,r as O,s as Yt,t as Gt}from"./chunk-DmtNQrEa.js";var Ue=[`switch`];var Xe=[`*`];function We(t,r){t&1&&(wl(0,`span`,11),A_(),wl(1,`svg`,13),bD(2,`path`,14),Rp(),wl(3,`svg`,15),bD(4,`path`,16),Rp()())}var $e=new I(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var V=class{source;checked;constructor(r,e){this.source=r,this.checked=e}};var B=(()=>{class t{_elementRef=m(er);_focusMonitor=m(ce);_changeDetectorRef=m(wO);defaults=m($e);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new V(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=mt$1();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new pt$1;toggleChange=new pt$1;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){m(eB).load($i);let e=m(new Hl(`tabindex`),{optional:!0}),n=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=n.color||`accent`,this.id=this._uniqueId=m(Ke).getId(`mat-mdc-slide-toggle-`),this.hideIcon=n.hideIcon??!1,this.disabledInteractive=n.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new V(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(n){return new(n||t)};static ɵcmp=Rs({type:t,selectors:[[`mat-slide-toggle`]],viewQuery:function(n,a){if(n&1&&LD(Ue,5),n&2){let l;ok(l=sk())&&(a._switchElement=l.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(n,a){n&2&&(MD(`id`,a.id),ks(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),jp(a.color?`mat-`+a.color:``),Fl(`mat-mdc-slide-toggle-focused`,a._focused)(`mat-mdc-slide-toggle-checked`,a.checked)(`mat-slide-toggle-full-width`,a.fullWidth)(`_mat-animation-noopable`,a._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,Iw],color:`color`,disabled:[2,`disabled`,`disabled`,Iw],fullWidth:[2,`fullWidth`,`fullWidth`,Iw],disableRipple:[2,`disableRipple`,`disableRipple`,Iw],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:T9(e)],checked:[2,`checked`,`checked`,Iw],hideIcon:[2,`hideIcon`,`hideIcon`,Iw],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Iw]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[iw([{provide:st$1,useExisting:bc(()=>t),multi:!0},{provide:ct$1,useExisting:t,multi:!0}]),Hh],ngContentSelectors:Xe,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(n,a){if(n&1&&(Lp(),wl(0,`div`,1)(1,`button`,2,0),xD(`click`,function(){return a._handleClick()}),bD(3,`div`,3)(4,`span`,4),wl(5,`span`,5)(6,`span`,6)(7,`span`,7),bD(8,`span`,8),Rp(),wl(9,`span`,9),bD(10,`span`,10),Rp(),Ux(11,We,5,0,`span`,11),Rp()()(),wl(12,`label`,12),xD(`click`,function(_){return _.stopPropagation()}),Fp(13),Rp()()),n&2){let l=ck(2);TD(`labelPosition`,a.labelPosition),$R(),Fl(`mdc-switch--selected`,a.checked)(`mdc-switch--unselected`,!a.checked)(`mdc-switch--checked`,a.checked)(`mdc-switch--disabled`,a.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,a.disabledInteractive),TD(`tabIndex`,a.disabled&&!a.disabledInteractive?-1:a.tabIndex)(`disabled`,a.disabled&&!a.disabledInteractive),ks(`id`,a.buttonId)(`name`,a.name)(`aria-label`,a.ariaLabel)(`aria-labelledby`,a._getAriaLabelledBy())(`aria-describedby`,a.ariaDescribedby)(`aria-required`,a.required||null)(`aria-checked`,a.checked)(`aria-disabled`,a.disabled&&a.disabledInteractive?`true`:null),$R(9),TD(`matRippleTrigger`,l)(`matRippleDisabled`,a.disableRipple||a.disabled)(`matRippleCentered`,!0),$R(),Vx(a.hideIcon?-1:11),$R(),TD(`for`,a.buttonId),ks(`id`,a._labelId)}},dependencies:[Dc,Yt],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--%NS%mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--%NS%mat-slide-toggle-track-height, 32px);
  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--%NS%mat-slide-toggle-handle-width);
  height: var(--%NS%mat-slide-toggle-handle-height);
  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));
}
.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--%NS%mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-slide-toggle-full-width {
  width: 100%;
}
.mat-slide-toggle-full-width .mat-internal-form-field {
  width: 100%;
  justify-content: space-between;
}
.mat-slide-toggle-full-width .mat-internal-form-field label {
  margin: 0;
  flex-grow: 1;
  text-align: end;
}
.mat-slide-toggle-full-width .mdc-form-field--align-end label {
  text-align: start;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return t})();var Be=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=hn({type:t});static ɵinj=Pt({imports:[B,HS]})}return t})();var je=[{version:`2.1.5`,fecha:`12/10/2026`,cambios:[`Conexión con Kontrol Cash: tus ingresos de cada mes se envían solos, con un token seguro y un interruptor para encender o apagar la conexión.`,`Perfil: pon tu nombre y tu foto desde Configuración; se ven en el menú lateral.`,`Resumen con "Ingresos del mes" e indicadores de clientes y trabajos.`,`Calendario para elegir la fecha de cada pago.`]},{version:`2.1.4`,fecha:`12/10/2026`,cambios:[`Catálogo adaptado al celular: listas, formularios y barras de importar y exportar sin desbordes.`]},{version:`2.1.3`,fecha:`12/10/2026`,cambios:[`Varios trabajos por cliente, cada uno con sus pagos, notas, fecha de entrega y vista de detalle.`,`Resumen con próximos seguimientos, trabajos por entregar y cobros pendientes.`,`Notas generales y seguimientos editables, con selector de fecha y hora y confirmación al eliminar.`,`Historial en español y ordenado del más reciente al más antiguo.`,`Catálogo (antes Configuración): listas más compactas, formulario al costado y estados que se reordenan arrastrando.`,`Estados simplificados: solo "Requiere servicio". "Preferencias" pasa a llamarse Configuración.`]},{version:`2.1.2`,fecha:`11/10/2026`,cambios:[`Temas de color: elige entre dorado, azul y rosa desde Configuración.`,`Categorías múltiples: cada cliente puede tener una o más categorías.`,`Formularios más simples: un campo sobre otro, con teléfono y prefijo en una sola línea.`,`Estados con punto de color, íconos de acciones con color y botones más grandes.`,`Tipografía y títulos unificados en toda la app.`,`Al editar un cliente ahora se cargan su teléfono, categorías y servicio.`]},{version:`2.1.0`,fecha:`21/09/2026`,cambios:[`Sistema de descuentos: aplica descuentos a los servicios por proyecto.`,`Archivo de clientes: guarda clientes como archivados sin perderlos.`,`Diseño minimalista: interfaz más limpia y enfocada.`,`Versión visible: mira la versión actual en el sidebar.`]},{version:`2.0.0`,fecha:`01/09/2026`,cambios:[`Nuevo diseño de formularios más intuitivo.`,`Ver y ocultar contraseña al ingresar.`,`Bloqueo automático de clientes duplicados.`,`Mejor espaciado y organización visual en toda la app.`]},{version:`1.3.0`,fecha:`17/08/2026`,cambios:[`Importar clientes desde Excel o CSV.`,`Exportar clientes a Excel o CSV.`,`Eliminar múltiples clientes de una vez.`,`Diálogos de importación con resumen de cambios.`]},{version:`1.2.0`,fecha:`16/08/2026`,cambios:[`Cierre automático de sesión por inactividad.`,`Validación de contraseña más segura.`,`Protección de APIs con Firebase.`,`Mejora de rendimiento en carga de datos.`]},{version:`1.1.0`,fecha:`08/08/2026`,cambios:[`Botón para instalar la app desde el menú.`,`Instalación mejorada en iPhone y iPad.`,`Acceso rápido como app nativa desde el home del celular.`]},{version:`1.0.0`,fecha:`07/08/2026`,cambios:[`Primera versión de PandaLead.`,`Ingreso seguro con contraseña temporal.`,`Gestión completa de clientes y contactos.`,`Sistema de ingresos y servicios.`,`Funciona en celular, tablet y computadora.`,`Instalable como app nativa.`]}];async function qe(t,r=256,e=.85){if(!t.type.startsWith(`image/`))throw new Error(`El archivo no es una imagen.`);let n=await createImageBitmap(t);try{let a=Math.min(n.width,n.height),l=document.createElement(`canvas`);l.width=r,l.height=r;let _=l.getContext(`2d`);if(!_)throw new Error(`No se pudo procesar la imagen.`);return _.drawImage(n,(n.width-a)/2,(n.height-a)/2,a,a,0,0,r,r),l.toDataURL(`image/jpeg`,e)}finally{n.close()}}var Ge=`ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789`;function j(t=12){let r=new Uint8Array(t);return crypto.getRandomValues(r),Array.from(r,e=>Ge[e%Ge.length]).join(``)}function et(t,r){t&1&&(wl(0,`p`,8),Ak(1,`Este token todavía no está activo: al guardar, el anterior deja de funcionar.`),Rp())}function tt(t,r){t&1&&(wl(0,`p`,9),Ak(1),Rp()),t&2&&($R(),YD(r))}function nt(t,r){if(t&1){let e=Qx();wl(0,`button`,14),xD(`click`,function(){y_(e);return v_(nk().disconnect())}),Ak(1,`Desconectar`),Rp()}if(t&2)TD(`disabled`,nk().saving())}var L=class t{sync=m(U);dialogRef=m(O);snackBar=m(Mt);saved=this.sync.token;draft=it$1(this.sync.token()??``);saving=it$1(!1);initializing=it$1(!1);errorMessage=it$1(null);canSave=Bp(()=>!this.initializing()&&!!this.draft()&&this.draft()!==this.saved()&&!this.saving());constructor(){this.sync.token()||this.createFirstToken()}regenerate(){this.initializing()||this.draft.set(j())}async createFirstToken(){let r=j();this.draft.set(r),this.initializing.set(!0);try{await this.sync.connect(r)}catch{this.errorMessage.set(`No se pudo activar la conexión. Cierra y vuelve a abrir para reintentar.`)}finally{this.initializing.set(!1)}}async copy(){try{await navigator.clipboard.writeText(this.draft()),this.snackBar.open(`Token copiado`,void 0,{duration:2e3})}catch{this.snackBar.open(`No se pudo copiar. Selecciona el token y cópialo a mano.`,void 0,{duration:3e3})}}async save(){this.canSave()&&await this.run(()=>this.sync.connect(this.draft()))}async disconnect(){await this.run(()=>this.sync.disconnect())}async run(r){this.saving.set(!0),this.errorMessage.set(null);try{await r(),this.dialogRef.close(!0)}catch{this.errorMessage.set(`No se pudo guardar. Revisa la conexión e intenta de nuevo.`)}finally{this.saving.set(!1)}}static ɵfac=function(e){return new(e||t)};static ɵcmp=Rs({type:t,selectors:[[`app-kontrol-cash-dialog`]],decls:28,vars:5,consts:[[1,`dialog-header`],[`mat-dialog-title`,``],[`mat-icon-button`,``,`mat-dialog-close`,``,`aria-label`,`Cerrar`],[1,`intro`],[1,`token-box`],[`aria-label`,`Token de conexión`,1,`token`],[`mat-icon-button`,``,`type`,`button`,`matTooltip`,`Generar otro token`,3,`click`],[`mat-icon-button`,``,`type`,`button`,`matTooltip`,`Copiar token`,3,`click`],[1,`hint`],[1,`error-text`],[`align`,`end`],[`mat-button`,``,`type`,`button`,1,`disconnect`,3,`disabled`],[1,`spacer`],[`mat-flat-button`,``,`color`,`primary`,`type`,`button`,3,`click`,`disabled`],[`mat-button`,``,`type`,`button`,1,`disconnect`,3,`click`,`disabled`]],template:function(e,n){if(e&1&&(wl(0,`div`,0)(1,`h2`,1),Ak(2,`Conexión con Kontrol Cash`),Rp(),wl(3,`button`,2)(4,`mat-icon`),Ak(5,`close`),Rp()()(),wl(6,`mat-dialog-content`)(7,`p`,3),Ak(8,` Pega este token en Kontrol Cash. Con él, Kontrol Cash trae solo tus `),wl(9,`strong`),Ak(10,`ingresos del mes`),Rp(),Ak(11,` y los mantiene al día. No comparte tus clientes ni ningún otro dato. `),Rp(),wl(12,`div`,4)(13,`code`,5),Ak(14),Rp(),wl(15,`button`,6),xD(`click`,function(){return n.regenerate()}),wl(16,`mat-icon`),Ak(17,`refresh`),Rp()(),wl(18,`button`,7),xD(`click`,function(){return n.copy()}),wl(19,`mat-icon`),Ak(20,`content_copy`),Rp()()(),Ux(21,et,2,0,`p`,8),Ux(22,tt,2,1,`p`,9),Rp(),wl(23,`mat-dialog-actions`,10),Ux(24,nt,2,1,`button`,11),bD(25,`span`,12),wl(26,`button`,13),xD(`click`,function(){return n.save()}),Ak(27,`Guardar`),Rp()()),e&2){let a;$R(14),YD(n.draft()),$R(7),Vx(n.canSave()?21:-1),$R(),Vx((a=n.errorMessage())?22:-1,a),$R(2),Vx(n.saved()?24:-1),$R(2),TD(`disabled`,!n.canSave())}},dependencies:[Jc,Qc,No,Qt,zt,Ht,Wt,Gt,iee,ree,Xt,hn$1,ti],styles:[`.intro[_ngcontent-%COMP%]{margin:0 0 1rem;font-size:.875rem;line-height:1.5;opacity:.8}.token-box[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem;padding:.5rem .5rem .5rem 1rem;border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:12px}.token[_ngcontent-%COMP%]{flex:1;min-width:0;font-family:monospace;font-size:1.25rem;letter-spacing:.15em;color:var(--%NS%accent);-webkit-user-select:all;user-select:all;overflow-wrap:anywhere}.hint[_ngcontent-%COMP%]{margin:.75rem 0 0;font-size:.8rem;opacity:.7}.error-text[_ngcontent-%COMP%]{margin:.75rem 0 0;font-size:.8rem;color:var(--%NS%mat-sys-error)}.spacer[_ngcontent-%COMP%]{flex:1}.disconnect[_ngcontent-%COMP%]{color:#ff5252}mat-dialog-actions[_ngcontent-%COMP%]{display:flex;align-items:center}`]})};function it(t,r){t&1&&bD(0,`img`,8),t&2&&TD(`src`,r,dI)}function at(t,r){if(t&1&&(wl(0,`span`),Ak(1),Rp()),t&2){let e=nk();$R(),YD(e.profile.initials())}}function ot(t,r){t&1&&(wl(0,`div`,12),Ak(1),Rp()),t&2&&($R(),YD(r))}function rt(t,r){if(t&1){let e=Qx();wl(0,`button`,31),xD(`click`,function(){y_(e);return v_(nk().removePhoto())}),Ak(1,`Quitar`),Rp()}}function st(t,r){if(t&1){let e=Qx();wl(0,`button`,32),xD(`click`,function(){let a=y_(e).$implicit;return v_(nk().uiState.accentTheme.set(a.id))}),Rp()}if(t&2){let e=r.$implicit,n=nk();BD(`background-color`,e.color),Fl(`selected`,n.uiState.accentTheme()===e.id),TD(`title`,e.nombre)}}function ct(t,r){t&1&&Ak(0,` Conexión apagada `)}function lt(t,r){t&1&&Ak(0,` Apagada desde Kontrol Cash `)}function dt(t,r){if(t&1&&Ak(0),t&2)Up(` `,nk().kontrolCash.connected()?`Conexión establecida`:`Desconectado`,` `)}function mt(t,r){t&1&&Ak(0,` Kontrol Cash no recibe actualizaciones. Enciéndela para retomar con el mismo token. `)}function gt(t,r){t&1&&Ak(0,` Kontrol Cash tiene la sincronización apagada. Enciéndela allá para retomar. `)}function ht(t,r){t&1&&(Ak(0),qk(1,`date`)),t&2&&Up(` Última sincronización: `,Qk(1,1,r,`dd/MM/yy HH:mm`),`. `)}function ut(t,r){if(t&1&&(Ak(0,` Kontrol Cash trae tus ingresos del mes. `),Ux(1,ht,2,4)),t&2){let e,n=nk();$R(),Vx((e=n.kontrolCash.lastSyncAt())?1:-1,e)}}function pt(t,r){t&1&&Ak(0,` Pega el token en Kontrol Cash para conectar. `)}function ft(t,r){t&1&&Ak(0,` Todavía no configuraste la conexión. `)}function _t(t,r){if(t&1&&(wl(0,`div`,25),Ak(1,` ¿No tienes Kontrol Cash? `),wl(2,`a`,33),Ak(3,`Crea tu cuenta`),Rp(),Ak(4,` para conectarte. `),Rp()),t&2){let e=nk();$R(2),TD(`href`,e.kontrolCashUrl,dI)}}function bt(t,r){if(t&1){let e=Qx();wl(0,`mat-slide-toggle`,34),xD(`change`,function(a){y_(e);return v_(nk().kontrolCash.setEnabled(a.checked))}),Rp()}if(t&2)TD(`checked`,nk().kontrolCash.enabled())}function vt(t,r){t&1&&(wl(0,`div`,39),Ak(1,`Actual`),Rp())}function yt(t,r){if(t&1){let e=Qx();wl(0,`button`,35),xD(`click`,function(){let a=y_(e).$implicit;return v_(nk().notaAbierta.set(a))}),wl(1,`div`,36),Ak(2),Rp(),wl(3,`div`,37),Ak(4),Rp(),ED(5,vt,2,0,`div`,38),Rp()}if(t&2){let e=r.$implicit,n=nk();Fl(`current-version`,e.version===n.version),$R(2),Up(`v`,e.version),$R(2),YD(e.fecha),$R(),TD(`ngIf`,e.version===n.version)}}function wt(t,r){t&1&&(wl(0,`span`,50),Ak(1,`Actual`),Rp())}function St(t,r){if(t&1&&(wl(0,`li`,51)(1,`span`,52),Ak(2,`•`),Rp(),wl(3,`span`,53),Ak(4),Rp()()),t&2){let e=r.$implicit;$R(4),YD(e)}}function kt(t,r){if(t&1){let e=Qx();wl(0,`div`,40),xD(`click`,function(){y_(e);return v_(nk().notaAbierta.set(null))}),wl(1,`div`,41),xD(`click`,function(a){return a.stopPropagation()}),wl(2,`button`,42),xD(`click`,function(){y_(e);return v_(nk().notaAbierta.set(null))}),wl(3,`span`,43),Ak(4,`close`),Rp()(),wl(5,`div`,44)(6,`h2`,45),Ak(7),Rp(),wl(8,`p`,46),Ak(9),ED(10,wt,2,0,`span`,47),Rp()(),wl(11,`ul`,48),ED(12,St,5,1,`li`,49),Rp()()()}if(t&2){let e=r.ngIf,n=nk();$R(7),Up(`v`,e.version),$R(2),Up(` `,e.fecha,` `),$R(),TD(`ngIf`,e.version===n.version),$R(2),TD(`ngForOf`,e.cambios)}}var Nt=60;var Ct=`https://juanzarta.github.io/Kontrol-Cash/login`;var He=class t{uiState=m(l);profile=m(g);kontrolCash=m(U);dialog=m(ee);themes=h;changelog=je;version=u;nameMaxLength=Nt;kontrolCashUrl=Ct;notaAbierta=it$1(null);nameDraft=it$1(null);nameValue=Bp(()=>this.nameDraft()??this.profile.displayName());nameChanged=Bp(()=>{let r=this.nameDraft()?.trim();return r!==void 0&&r.length>0&&r!==this.profile.displayName()});savingProfile=it$1(!1);photoError=it$1(null);cerrarNota(){this.notaAbierta.set(null)}openKontrolCash(){this.dialog.open(L,{width:`90vw`,maxWidth:`440px`,autoFocus:!1})}onNameInput(r){this.nameDraft.set(r.target.value)}async saveName(){if(!(!this.nameChanged()||this.savingProfile())){this.savingProfile.set(!0);try{await this.profile.saveName(this.nameDraft()),this.nameDraft.set(null)}finally{this.savingProfile.set(!1)}}}async onPhotoSelected(r){let e=r.target,n=e.files?.[0];if(e.value=``,!!n){this.photoError.set(null),this.savingProfile.set(!0);try{await this.profile.savePhoto(await qe(n))}catch{this.photoError.set(`No se pudo usar esa imagen. Prueba con una foto JPG o PNG.`)}finally{this.savingProfile.set(!1)}}}async removePhoto(){this.photoError.set(null),await this.profile.removePhoto()}static ɵfac=function(e){return new(e||t)};static ɵcmp=Rs({type:t,selectors:[[`app-preferences`]],hostBindings:function(e,n){e&1&&xD(`keydown.escape`,function(){return n.cerrarNota()},tR)},decls:82,vars:21,consts:[[`photoInput`,``],[1,`preferences-page`],[1,`preferences-header`,`page-header`],[1,`preferences-section`],[1,`section-title`],[1,`preferences-card`],[1,`preference-item`,`profile-item`],[1,`avatar`],[`alt`,`Tu foto`,3,`src`],[1,`preference-content`],[1,`preference-label`],[1,`preference-description`],[1,`field-error`],[1,`profile-actions`],[`type`,`file`,`accept`,`image/*`,`hidden`,``,3,`change`],[`mat-stroked-button`,``,`type`,`button`,3,`click`,`disabled`],[`mat-button`,``,`type`,`button`],[1,`preference-item`],[1,`name-edit`],[`type`,`text`,`placeholder`,`Tu nombre`,1,`name-input`,3,`input`,`keydown.enter`,`value`],[`mat-flat-button`,``,`color`,`primary`,`type`,`button`,3,`click`,`disabled`],[1,`color-selector`],[`class`,`color-button`,`type`,`button`,3,`background-color`,`selected`,`title`,`click`,4,`ngFor`,`ngForOf`],[1,`connection-status`],[1,`status-dot`],[1,`signup-hint`],[1,`integration-controls`],[`aria-label`,`Encender o apagar la conexión con Kontrol Cash`,3,`checked`],[1,`changelog-grid`],[`class`,`changelog-card`,`type`,`button`,3,`current-version`,`click`,4,`ngFor`,`ngForOf`],[`class`,`modal-overlay`,3,`click`,4,`ngIf`],[`mat-button`,``,`type`,`button`,3,`click`],[`type`,`button`,1,`color-button`,3,`click`,`title`],[`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[`aria-label`,`Encender o apagar la conexión con Kontrol Cash`,3,`change`,`checked`],[`type`,`button`,1,`changelog-card`,3,`click`],[1,`changelog-version`],[1,`changelog-date`],[`class`,`changelog-badge`,4,`ngIf`],[1,`changelog-badge`],[1,`modal-overlay`,3,`click`],[1,`modal-content`,3,`click`],[`title`,`Cerrar`,`type`,`button`,1,`modal-close`,3,`click`],[1,`material-icons`],[1,`modal-header`],[1,`mat-headline-small`],[1,`modal-date`],[`class`,`current-badge`,4,`ngIf`],[1,`modal-changes`],[`class`,`change-item`,4,`ngFor`,`ngForOf`],[1,`current-badge`],[1,`change-item`],[1,`change-bullet`],[1,`change-text`]],template:function(e,n){if(e&1){let a=Qx();wl(0,`div`,1)(1,`div`,2)(2,`h1`),Ak(3,`Configuración`),Rp(),wl(4,`p`),Ak(5,`Ajusta la app a tu gusto.`),Rp()(),wl(6,`section`,3)(7,`h2`,4),Ak(8,`Perfil`),Rp(),wl(9,`div`,5)(10,`div`,6)(11,`div`,7),Ux(12,it,1,1,`img`,8)(13,at,2,1,`span`),Rp(),wl(14,`div`,9)(15,`div`,10),Ak(16,`Foto`),Rp(),wl(17,`div`,11),Ak(18,`Se muestra en el menú lateral.`),Rp(),Ux(19,ot,2,1,`div`,12),Rp(),wl(20,`div`,13)(21,`input`,14,0),xD(`change`,function(_){return n.onPhotoSelected(_)}),Rp(),wl(23,`button`,15),xD(`click`,function(){y_(a);return v_(ck(22).click())}),wl(24,`mat-icon`),Ak(25,`upload`),Rp(),Ak(26,` Subir imagen `),Rp(),Ux(27,rt,2,0,`button`,16),Rp()(),wl(28,`div`,17)(29,`div`,9)(30,`div`,10),Ak(31,`Nombre`),Rp(),wl(32,`div`,11),Ak(33,`Cómo quieres que te muestre la app.`),Rp()(),wl(34,`div`,18)(35,`input`,19),xD(`input`,function(_){return n.onNameInput(_)})(`keydown.enter`,function(){return n.saveName()}),Rp(),wl(36,`button`,20),xD(`click`,function(){return n.saveName()}),Ak(37,` Guardar `),Rp()()()()(),wl(38,`section`,3)(39,`h2`,4),Ak(40,`Apariencia`),Rp(),wl(41,`div`,5)(42,`div`,17)(43,`div`,9)(44,`div`,10),Ak(45,`Color de acento`),Rp(),wl(46,`div`,11),Ak(47,`Elige tu color favorito`),Rp()(),wl(48,`div`,21),ED(49,st,1,5,`button`,22),Rp()()()(),wl(50,`section`,3)(51,`h2`,4),Ak(52,`Integraciones`),Rp(),wl(53,`div`,5)(54,`div`,17)(55,`div`,9)(56,`div`,10),Ak(57,`Kontrol Cash`),Rp(),wl(58,`div`,23),bD(59,`span`,24),Ux(60,ct,1,0)(61,lt,1,0)(62,dt,1,1),Rp(),wl(63,`div`,11),Ux(64,mt,1,0)(65,gt,1,0)(66,ut,2,1)(67,pt,1,0)(68,ft,1,0),Rp(),Ux(69,_t,5,1,`div`,25),Rp(),wl(70,`div`,26),Ux(71,bt,1,1,`mat-slide-toggle`,27),wl(72,`button`,15),xD(`click`,function(){return n.openKontrolCash()}),wl(73,`mat-icon`),Ak(74,`link`),Rp(),Ak(75,` Configurar conexión `),Rp()()()()(),wl(76,`section`,3)(77,`h2`,4),Ak(78,`Notas de versión`),Rp(),wl(79,`div`,28),ED(80,yt,6,5,`button`,29),Rp()()(),ED(81,kt,13,4,`div`,30)}if(e&2){let a,l;$R(11),Fl(`has-photo`,n.profile.photo()),$R(),Vx((a=n.profile.photo())?12:13,a),$R(7),Vx((l=n.photoError())?19:-1,l),$R(4),TD(`disabled`,n.savingProfile()),$R(4),Vx(n.profile.photo()?27:-1),$R(8),TD(`value`,n.nameValue()),ks(`maxlength`,n.nameMaxLength),$R(),TD(`disabled`,!n.nameChanged()||n.savingProfile()),$R(13),TD(`ngForOf`,n.themes),$R(9),Fl(`connected`,n.kontrolCash.enabled()&&n.kontrolCash.connected())(`warning`,n.kontrolCash.enabled()&&n.kontrolCash.remoteOff()),$R(2),Vx(n.kontrolCash.enabled()?n.kontrolCash.remoteOff()?61:62:60),$R(4),Vx(n.kontrolCash.enabled()?n.kontrolCash.remoteOff()?65:n.kontrolCash.connected()?66:n.kontrolCash.token()?67:68:64),$R(5),Vx(n.kontrolCash.connected()?-1:69),$R(2),Vx(n.kontrolCash.token()?71:-1),$R(),TD(`disabled`,!n.kontrolCash.enabled()),$R(8),TD(`ngForOf`,n.changelog),$R(),TD(`ngIf`,n.notaAbierta())}},dependencies:[eC,Zw,lP,Jc,Qc,Qt,iee,ree,Be,B,fP],styles:[`[_nghost-%COMP%]{display:block;flex:1;min-height:0}.preferences-page[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-height:0;padding:.5rem;gap:.5rem;overflow-y:auto}.preferences-header[_ngcontent-%COMP%]{padding:.5rem .75rem 1rem}.preferences-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:1.25rem;font-weight:600;color:var(--%NS%mat-sys-on-surface)}.preferences-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:.875rem;color:var(--%NS%mat-sys-on-surface-variant)}.preferences-section[_ngcontent-%COMP%]{padding:0 .75rem .75rem}.section-title[_ngcontent-%COMP%]{margin:0 0 .5rem;padding:0 .5rem;font-size:.75rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--%NS%mat-sys-on-surface-variant);opacity:.6}.preferences-card[_ngcontent-%COMP%]{border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:12px;overflow:hidden}.preference-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1rem;border-bottom:1px solid var(--%NS%mat-sys-outline-variant)}.preference-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.preference-content[_ngcontent-%COMP%]{flex:1;min-width:0}.preference-label[_ngcontent-%COMP%]{font-size:.875rem;font-weight:500;color:var(--%NS%mat-sys-on-surface);margin-bottom:.25rem}.preference-description[_ngcontent-%COMP%]{font-size:.75rem;color:var(--%NS%mat-sys-on-surface-variant)}.avatar[_ngcontent-%COMP%]{flex-shrink:0;width:64px;height:64px;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;background:var(--%NS%accent-soft);color:var(--%NS%accent);font-size:1.35rem;font-weight:600}.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.profile-actions[_ngcontent-%COMP%], .name-edit[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;flex-shrink:0}.name-input[_ngcontent-%COMP%]{width:220px;max-width:100%;padding:.65rem .85rem;border-radius:12px;border:1px solid var(--%NS%mat-sys-outline-variant);background:transparent;color:var(--%NS%mat-sys-on-surface);font:inherit}.name-input[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--%NS%accent)}.signup-hint[_ngcontent-%COMP%]{margin-top:.35rem;font-size:.75rem;color:var(--%NS%mat-sys-on-surface-variant)}.signup-hint[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--%NS%accent);text-decoration:underline}.integration-controls[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;flex-shrink:0}.connection-status[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem;margin-bottom:.25rem;font-size:.8rem;font-weight:500;color:var(--%NS%mat-sys-on-surface-variant)}.connection-status[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:#9e9e9e}.connection-status.connected[_ngcontent-%COMP%]{color:var(--%NS%success-light)}.connection-status.connected[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%]{background:var(--%NS%success-light)}.connection-status.warning[_ngcontent-%COMP%]{color:var(--%NS%warning-light)}.connection-status.warning[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%]{background:var(--%NS%warning-light)}.field-error[_ngcontent-%COMP%]{margin-top:.25rem;font-size:.75rem;color:var(--%NS%mat-sys-error)}@media(max-width:600px){.preference-item[_ngcontent-%COMP%]{flex-wrap:wrap}.profile-actions[_ngcontent-%COMP%], .name-edit[_ngcontent-%COMP%]{width:100%}.name-input[_ngcontent-%COMP%]{flex:1;width:auto}}.color-selector[_ngcontent-%COMP%]{display:flex;gap:.75rem;flex-shrink:0}.color-button[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;border:3px solid transparent;cursor:pointer;transition:all .2s ease;flex-shrink:0}.color-button[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.color-button.selected[_ngcontent-%COMP%]{border-color:var(--%NS%mat-sys-on-surface);box-shadow:0 0 0 1px var(--%NS%mat-sys-surface),0 2px 8px #0000004d}.changelog-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:.75rem}@media(min-width:600px){.changelog-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media(min-width:900px){.changelog-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}.changelog-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:.5rem;padding:.875rem;border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:12px;background-color:var(--%NS%mat-sys-surface);cursor:pointer;transition:all .2s ease;text-align:left}.changelog-card[_ngcontent-%COMP%]:hover{border-color:var(--%NS%mat-sys-outline);box-shadow:0 1px 3px #0000001f,0 1px 2px #0000003d}.changelog-card.current-version[_ngcontent-%COMP%]{border-color:var(--%NS%mat-sys-primary);background-color:var(--%NS%mat-sys-surface-bright);box-shadow:0 0 0 1px var(--%NS%mat-sys-primary)}.changelog-version[_ngcontent-%COMP%]{font-size:.875rem;font-weight:600;color:var(--%NS%mat-sys-on-surface)}.changelog-date[_ngcontent-%COMP%]{font-size:.75rem;color:var(--%NS%mat-sys-on-surface-variant)}.changelog-badge[_ngcontent-%COMP%]{font-size:.625rem;font-weight:600;color:var(--%NS%mat-sys-primary);text-transform:uppercase;letter-spacing:.04em}.modal-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#00000080;z-index:100;display:flex;align-items:center;justify-content:center;padding:1rem}.modal-content[_ngcontent-%COMP%]{position:relative;background-color:var(--%NS%mat-sys-surface);border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:12px;width:100%;max-width:28rem;max-height:80vh;overflow-y:auto;padding:1.5rem;box-shadow:0 10px 40px #0000004d}.modal-close[_ngcontent-%COMP%]{position:absolute;top:.75rem;right:.75rem;padding:.5rem;border:none;background-color:transparent;border-radius:8px;cursor:pointer;transition:background-color .2s ease}.modal-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{display:block;font-size:1.5rem;color:var(--%NS%mat-sys-on-surface-variant)}.modal-close[_ngcontent-%COMP%]:hover{background-color:var(--%NS%mat-sys-surface-variant)}.modal-header[_ngcontent-%COMP%]{margin-bottom:1.5rem;padding-right:2rem}.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 .5rem;color:var(--%NS%mat-sys-on-surface)}.modal-date[_ngcontent-%COMP%]{margin:0;font-size:.75rem;color:var(--%NS%mat-sys-on-surface-variant);display:flex;align-items:center;gap:.5rem}.current-badge[_ngcontent-%COMP%]{font-weight:600;color:var(--%NS%mat-sys-primary);text-transform:uppercase;font-size:.65rem;letter-spacing:.04em}.modal-changes[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:.875rem}.change-item[_ngcontent-%COMP%]{display:flex;gap:.75rem;font-size:.875rem;color:var(--%NS%mat-sys-on-surface-variant);line-height:1.5}.change-bullet[_ngcontent-%COMP%]{flex-shrink:0;color:var(--%NS%mat-sys-primary);font-weight:600}`]})};export{He as Preferences};