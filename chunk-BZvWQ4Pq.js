import{$t as Ux,At as Pt,Cn as bc,Er as ok,I as Hl,Ln as eo,Lr as sB,N as HS,Nr as pt,Pt as Qx,Rn as er,Rr as sk,Rt as Rp,Tn as ck,Tr as nk,Tt as PD,W as Iw,Xn as hn,_i as y_,a as $x,ai as wO,c as Ak,cn as Wx,di as xD,en as VE,gr as m,j as Fp,jn as eB,k as Fl,nr as iw,nt as LD,pn as YD,pr as ks,qt as TD,r as $R,rn as Vx,si as wl,st as Lp,ti as v_,tr as it,wt as P,xn as bD,xr as nZ,z as I,zt as Rs}from"./chunk-DjYvpiiN.js";import{$ as mt,D as Qc,G as ce,P as Ti,g as Jc,it as qi,lt as st,r as $i,s as Dc,v as Ke}from"./chunk-B78S38cu.js";import{c as Z}from"./chunk-wcfnZNpa.js";import{T as t,d as Yt,h as nt,l as $t$1,p as at,s as L,u as Jt,v as O,x as u}from"./main-B7RE42BO.js";import{a as Wt,i as Qt$1,l as zt$1,n as Ht$1,r as O$1,t as Gt$1}from"./chunk-DmtNQrEa.js";import{t as P$1}from"./chunk-CIbJgb8u.js";import{t as f}from"./chunk-gwBsiZXV.js";import{i as Ni}from"./chunk-B0EO_0ZS.js";var zt=[`button`];var Ut=[`*`];function $t(n,o){if(n&1&&(wl(0,`div`,2),bD(1,`mat-pseudo-checkbox`,6),Rp()),n&2){let t=nk();$R(),TD(`disabled`,t.disabled)}}var Gt=new I(`MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS`,{providedIn:`root`,factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})});var At=new I(`MatButtonToggleGroup`);var Qt={provide:st,useExisting:bc(()=>Ht),multi:!0};var S=class{source;value;constructor(o,t){this.source=o,this.value=t}};var Ht=(()=>{class n{_changeDetector=m(wO);_dir=m(sB,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck()}_name=m(Ke).getId(`mat-button-toggle-group-`);vertical=!1;get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(a=>a.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}valueChange=new pt;get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}change=new pt;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let t=m(Gt,{optional:!0});this.appearance=t&&t.appearance?t.appearance:`standard`,this._hideSingleSelectionIndicator=t?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=t?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new u(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex()}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_keydown(t){if(this.multiple||this.disabled||Ti(t))return;let e=t.target.id,i=this._buttonToggles.toArray().findIndex(m=>m.buttonId===e),l=null;switch(t.keyCode){case 32:case 13:l=this._buttonToggles.get(i)||null;break;case 38:l=this._getNextButton(i,-1);break;case 37:l=this._getNextButton(i,this.dir===`ltr`?-1:1);break;case 40:l=this._getNextButton(i,1);break;case 39:l=this._getNextButton(i,this.dir===`ltr`?1:-1);break;default:return}l&&(t.preventDefault(),l._onButtonClick(),l.focus())}_emitChangeEvent(t){let a=new S(t,this.value);this._rawValue=a.value,this._controlValueAccessorChangeFn(a.value),this.change.emit(a)}_syncButtonToggle(t,a,e=!1,i=!1){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=!1),this._selectionModel?a?this._selectionModel.select(t):this._selectionModel.deselect(t):i=!0,i?Promise.resolve().then(()=>this._updateModelValue(t,e)):this._updateModelValue(t,e)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>`u`?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(a=>t.value!=null&&a===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let a=this._buttonToggles.get(t);if(!a.disabled){a.tabIndex=0;break}}}_getNextButton(t,a){let e=this._buttonToggles;for(let i=1;i<=e.length;i++){let l=(t+a*i+e.length)%e.length,m=e.get(l);if(m&&!m.disabled)return m}return null}_setSelectionByValue(t){if(this._rawValue=t,!this._buttonToggles)return;let a=this._buttonToggles.toArray();if(this.multiple&&t?(this._clearSelection(),t.forEach(e=>this._selectValue(e,a))):(this._clearSelection(),this._selectValue(t,a)),!this.multiple&&a.every(e=>e.tabIndex===-1)){for(let e of a)if(!e.disabled){e.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=!1,this.multiple||(t.tabIndex=-1)})}_selectValue(t,a){for(let e of a)if(e.value===t){e.checked=!0,this._selectionModel.select(e),this.multiple||(e.tabIndex=0);break}}_updateModelValue(t,a){a&&this._emitChangeEvent(t),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck())}static ɵfac=function(a){return new(a||n)};static ɵdir=eo({type:n,selectors:[[`mat-button-toggle-group`]],contentQueries:function(a,e,i){if(a&1&&PD(i,Dt,5),a&2){let l;ok(l=sk())&&(e._buttonToggles=l)}},hostAttrs:[1,`mat-button-toggle-group`],hostVars:6,hostBindings:function(a,e){a&1&&xD(`keydown`,function(l){return e._keydown(l)}),a&2&&(ks(`role`,e.multiple?`group`:`radiogroup`)(`aria-disabled`,e.disabled),Fl(`mat-button-toggle-vertical`,e.vertical)(`mat-button-toggle-group-appearance-standard`,e.appearance===`standard`))},inputs:{appearance:`appearance`,name:`name`,vertical:[2,`vertical`,`vertical`,Iw],value:`value`,multiple:[2,`multiple`,`multiple`,Iw],disabled:[2,`disabled`,`disabled`,Iw],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Iw],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,Iw],hideMultipleSelectionIndicator:[2,`hideMultipleSelectionIndicator`,`hideMultipleSelectionIndicator`,Iw]},outputs:{valueChange:`valueChange`,change:`change`},exportAs:[`matButtonToggleGroup`],features:[iw([Qt,{provide:At,useExisting:n}])]})}return n})();var Dt=(()=>{class n{_changeDetectorRef=m(wO);_elementRef=m(er);_focusMonitor=m(ce);_idGenerator=m(Ke);_animationDisabled=mt();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(t){this._tabIndex.set(t)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new pt;constructor(){m(eB).load($i);let t=m(At,{optional:!0}),a=m(new Hl(`tabindex`),{optional:!0})||``,e=m(Gt,{optional:!0});this._tabIndex=it(parseInt(a)||0),this.buttonToggleGroup=t,this._appearance=e&&e.appearance?e.appearance:`standard`,this._disabledInteractive=e?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId(`mat-button-toggle-`),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add(`mat-button-toggle-animations-enabled`),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let a=this.buttonToggleGroup._buttonToggles.find(e=>e.tabIndex===0);a&&(a.tabIndex=-1),this.tabIndex=0}this.change.emit(new S(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static ɵfac=function(a){return new(a||n)};static ɵcmp=Rs({type:n,selectors:[[`mat-button-toggle`]],viewQuery:function(a,e){if(a&1&&LD(zt,5),a&2){let i;ok(i=sk())&&(e._buttonElement=i.first)}},hostAttrs:[`role`,`presentation`,1,`mat-button-toggle`],hostVars:14,hostBindings:function(a,e){a&1&&xD(`focus`,function(){return e.focus()}),a&2&&(ks(`aria-label`,null)(`aria-labelledby`,null)(`id`,e.id)(`name`,null),Fl(`mat-button-toggle-standalone`,!e.buttonToggleGroup)(`mat-button-toggle-checked`,e.checked)(`mat-button-toggle-disabled`,e.disabled)(`mat-button-toggle-disabled-interactive`,e.disabledInteractive)(`mat-button-toggle-appearance-standard`,e.appearance===`standard`))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],id:`id`,name:`name`,value:`value`,tabIndex:`tabIndex`,disableRipple:[2,`disableRipple`,`disableRipple`,Iw],appearance:`appearance`,checked:[2,`checked`,`checked`,Iw],disabled:[2,`disabled`,`disabled`,Iw],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Iw]},outputs:{change:`change`},exportAs:[`matButtonToggle`],ngContentSelectors:Ut,decls:7,vars:13,consts:[[`button`,``],[`type`,`button`,1,`mat-button-toggle-button`,`mat-focus-indicator`,3,`click`,`id`,`disabled`],[1,`mat-button-toggle-checkbox-wrapper`],[1,`mat-button-toggle-label-content`],[1,`mat-button-toggle-focus-overlay`],[`matRipple`,``,1,`mat-button-toggle-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,3,`disabled`]],template:function(a,e){if(a&1&&(Lp(),wl(0,`button`,1,0),xD(`click`,function(){return e._onButtonClick()}),Ux(2,$t,2,1,`div`,2),wl(3,`span`,3),Fp(4),Rp()(),bD(5,`span`,4)(6,`span`,5)),a&2){let i=ck(1);TD(`id`,e.buttonId)(`disabled`,e.disabled&&!e.disabledInteractive||null),ks(`role`,e.isSingleSelector()?`radio`:`button`)(`tabindex`,e.disabled&&!e.disabledInteractive?-1:e.tabIndex)(`aria-pressed`,e.isSingleSelector()?null:e.checked)(`aria-checked`,e.isSingleSelector()?e.checked:null)(`name`,e._getButtonName())(`aria-label`,e.ariaLabel)(`aria-labelledby`,e.ariaLabelledby)(`aria-disabled`,e.disabled&&e.disabledInteractive?`true`:null),$R(2),Vx(e.buttonToggleGroup&&(!e.buttonToggleGroup.multiple&&!e.buttonToggleGroup.hideSingleSelectionIndicator||e.buttonToggleGroup.multiple&&!e.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),$R(4),TD(`matRippleTrigger`,i)(`matRippleDisabled`,e.disableRipple||e.disabled)}},dependencies:[Dc,O],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--%NS%mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--%NS%mat-button-toggle-legacy-text-color);
  font-family: var(--%NS%mat-button-toggle-legacy-label-text-font);
  font-size: var(--%NS%mat-button-toggle-legacy-label-text-size);
  line-height: var(--%NS%mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--%NS%mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--%NS%mat-button-toggle-legacy-label-text-tracking);
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-state-background-color);
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--%NS%mat-button-toggle-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-button-toggle-background-color, transparent);
  font-family: var(--%NS%mat-button-toggle-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-toggle-label-text-size, var(--%NS%mat-sys-label-large-size));
  line-height: var(--%NS%mat-button-toggle-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-weight: var(--%NS%mat-button-toggle-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-button-toggle-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-toggle-selected-state-background-color, var(--%NS%mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--%NS%mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--%NS%mat-button-toggle-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--%NS%mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--%NS%mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--%NS%mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
`],encapsulation:2})}return n})();var he=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=hn({type:n});static ɵinj=Pt({imports:[qi,Dt,HS]})}return n})();var k=`history`;var x=class n extends Z{watchForProspect(o){return this.sync.watchCollection(`${k}:${o}`,this.tenantPath(k,o))}async log(o,t,a){let e=this.generateId(),i={id:e,prospectId:o,type:t,payload:a,createdAt:Date.now()};await this.sync.write(`${k}:${o}`,e,this.tenantPath(k,o,e),`set`,i)}static ɵfac=(()=>{let o;return function(a){return(o||(o=VE(n)))(a||n)}})();static ɵprov=P({token:n,factory:n.ɵfac,providedIn:`root`})};function ke(n){let o=String(n.get(`localNumber`)?.value??``).replace(/\D/g,``),t=Ni(n.get(`whatsappUser`)?.value);return o||t?null:{contactRequired:!0}}var qt=(n,o)=>o.id;function Kt(n,o){if(n&1){let t=Qx();wl(0,`a`,1),xD(`click`,function(){let e=y_(t).$implicit;return v_(nk().choose(e))}),wl(1,`span`,2),Ak(2),Rp(),wl(3,`span`,3),Ak(4),Rp()()}if(n&2){let t=o.$implicit;$R(2),YD(t.name),$R(2),YD(t.body)}}var Et=class n{dialogRef=m(O$1);configRepo=m(f);templates=nZ(this.configRepo.watchTemplates(),{initialValue:[]});choose(o){this.dialogRef.close(o)}static ɵfac=function(t){return new(t||n)};static ɵcmp=Rs({type:n,selectors:[[`app-whatsapp-template-picker`]],decls:14,vars:0,consts:[[`mat-dialog-title`,``],[`mat-list-item`,``,3,`click`],[`matListItemTitle`,``],[`matListItemLine`,``],[`mat-list-item`,``],[`align`,`end`],[`mat-button`,``,`mat-dialog-close`,``]],template:function(t,a){t&1&&(wl(0,`h2`,0),Ak(1,`Elige una plantilla`),Rp(),wl(2,`mat-dialog-content`)(3,`mat-nav-list`)(4,`a`,1),xD(`click`,function(){return a.choose(null)}),wl(5,`span`,2),Ak(6,`Sin plantilla`),Rp(),wl(7,`span`,3),Ak(8,`Abrir WhatsApp sin mensaje precargado`),Rp()(),$x(9,Kt,5,2,`a`,4,qt),Rp()(),wl(11,`mat-dialog-actions`,5)(12,`button`,6),Ak(13,`Cancelar`),Rp()()),t&2&&($R(9),Wx(a.templates()))},dependencies:[Jc,Qc,Qt$1,zt$1,Ht$1,Wt,Gt$1,$t$1,Jt,Yt,at,nt],encapsulation:2})};var Ot=class n{history=m(x);prospectRepo=m(L);interpolate(o,t,a=null){return P$1(o.body,t,a)}async openWithTemplate(o,t$1,a=null){let e=t(o.phone??``);if(!e&&!o.whatsappUser)return;let i=t$1?this.interpolate(t$1,o,a):``;if(e){let l=i?`https://wa.me/${e}?text=${encodeURIComponent(i)}`:`https://wa.me/${e}`;window.open(l,`_blank`,`noopener`)}else{try{await navigator.clipboard.writeText(o.whatsappUser)}catch{}window.open(`https://web.whatsapp.com/`,`_blank`,`noopener`)}await this.prospectRepo.update(o.id,{lastContactAt:Date.now()}),await this.history.log(o.id,`whatsapp_opened`,{templateId:t$1?.id??null,templateName:t$1?.name??null})}static ɵfac=function(t){return new(t||n)};static ɵprov=P({token:n,factory:n.ɵfac,providedIn:`root`})};export{he as a,Ot as i,Et as n,ke as o,Ht as r,x as s,Dt as t};