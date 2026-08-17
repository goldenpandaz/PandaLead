import{$ as MD,$n as lk,B as Ie,C as FD,Ct as Rp,D as Fl,Et as Se,F as Hx,Fn as hX,G as Jk,Gr as wx,Ht as Ux,In as he,It as Tp,Kn as jQ,Kr as xE,Kt as Vx,L as IR,Mr as uD,Mt as TD,N as HD,Nn as gD,Qn as le,R as I_,Rn as ht,S as Ex,Tr as sc,V as Ii$1,Vr as vl,Wr as wp,X as LV,Xn as kl,Xr as yD,Yr as xl,Z as Lx,Zn as l_,_ as E,a as Ap,at as Mt,bn as c_,br as rN,c as Ax,cr as nt,ct as Np,ei as yr,en as Yn,er as m,f as CD,fn as al,ft as P,g as Dx,gt as Q,ii as zi,it as Mp,j as Gn,jt as Ss,ln as _x,lr as nw,m as DD,mt as Ph,nr as mD,o as As,or as ne,p as Cp,ri as zc,sn as _S,sr as nn$1,st as No,tn as Zi,tt as MV,v as ED,x as Ei$1,y as EN,yn as cD,zn as i9}from"./chunk-90LlFk5x.js";import{B as ct,D as Rc,E as Pi,U as gr,V as dc,Y as re,a as Bi,d as F,et as ye$1,g as Hr,m as Ge,p as G,rt as ze,t as Ar,u as Ei$2,w as Pc}from"./chunk-BMQCUU9d.js";import{A as fn$1,C as Xe,D as _i,E as Zt$1,H as ui,K as ye$2,M as gn$1,R as ro,T as Yt$1,U as un$1,V as ti,_ as Se$1,f as Ht,g as Q$1,h as Pi$1,k as ei,n as Ft,q as zt,u as G$1,v as Tt}from"./main-2LBR6M3B.js";import{a as ce,d as lt,f as me,i as X,p as ot,s as fe}from"./chunk-O2U_fgXP.js";import{a as Mn$1,i as Ln,n as Bn,p as zn,s as Pn$1,t as B,u as qn}from"./chunk-ZLvj0aze.js";import{n as ie,t as L}from"./chunk-J6ZasKJM.js";import{r as I}from"./chunk-LrSUK25C.js";var nn=[`text`];var an=[[[`mat-icon`]],`*`];var on=[`mat-icon`,`*`];function rn(i,o){if(i&1&&mD(0,`mat-pseudo-checkbox`,1),i&2){let e=Lx();gD(`disabled`,e.disabled)(`state`,e.selected?`checked`:`unchecked`)}}function sn(i,o){if(i&1&&mD(0,`mat-pseudo-checkbox`,3),i&2)gD(`disabled`,Lx().disabled)}function ln(i,o){if(i&1&&(vl(0,`span`,4),lk(1),wp()),i&2){let e=Lx();IR(),Rp(`(`,e.group.label,`)`)}}var ke=new E(`MAT_OPTION_PARENT_COMPONENT`);var Oe=new E(`MatOptgroup`);var Me=class{source;isUserInput;constructor(o,e=!1){this.source=o,this.isUserInput=e}};var _e=(()=>{class i{_element=m(Gn);_changeDetectorRef=m(Jk);_parent=m(ke,{optional:!0});group=m(Oe,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=m(ze).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=nt(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new ht;_text;_stateChanges=new le;constructor(){let e=m(MV);e.load(Pi),e.load(hX),this._signalDisableRipple=!!this._parent&&zc(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let n=this._getHostElement();typeof n.focus==`function`&&n.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ei$2(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Me(this,e))}static ɵfac=function(t){return new(t||i)};static ɵcmp=Ss({type:i,selectors:[[`mat-option`]],viewQuery:function(t,n){if(t&1&&TD(nn,7),t&2){let a;Ux(a=Vx())&&(n._text=a.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(t,n){t&1&&DD(`click`,function(){return n._selectViaInteraction()})(`keydown`,function(s){return n._handleKeydown(s)}),t&2&&(ED(`id`,n.id),As(`aria-selected`,n.selected)(`aria-disabled`,n.disabled.toString()),kl(`mdc-list-item--selected`,n.selected)(`mat-mdc-option-multiple`,n.multiple)(`mat-mdc-option-active`,n.active)(`mdc-list-item--disabled`,n.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,nw]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:on,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(t,n){t&1&&(Np(an),_x(0,rn,1,2,`mat-pseudo-checkbox`,1),Ap(1),vl(2,`span`,2,0),Ap(4,1),wp(),_x(5,sn,1,1,`mat-pseudo-checkbox`,3),_x(6,ln,2,1,`span`,4),mD(7,`div`,5)),t&2&&(Ex(n.multiple?0:-1),IR(5),Ex(!n.multiple&&n.selected&&!n.hideSingleSelectionIndicator?5:-1),IR(),Ex(n.group&&n.group._inert?6:-1),IR(),gD(`matRippleTrigger`,n._getHostElement())(`matRippleDisabled`,n.disabled||n.disableRipple))},dependencies:[Pi$1,dc],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return i})();function Bt(i,o,e){if(e.length){let t=o.toArray(),n=e.toArray(),a=0;for(let s=0;s<i+1;s++)t[s].group&&t[s].group===n[a]&&a++;return a}return 0}function Wt(i,o,e,t){return i<e?i:i+o>e+t?Math.max(0,i-t+o):e}var De=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Yn({type:i});static ɵinj=nn$1({imports:[Bi,ye$2,_e,_S]})}return i})();var hn=[`trigger`];var un=[`panel`];var gn=[[[`mat-select-trigger`]],`*`];var fn=[`mat-select-trigger`,`*`];function _n(i,o){if(i&1&&(vl(0,`span`,4),lk(1),wp()),i&2){let e=Lx();IR(),FD(e.placeholder)}}function bn(i,o){i&1&&Ap(0)}function yn(i,o){if(i&1&&(vl(0,`span`,11),lk(1),wp()),i&2){let e=Lx(2);IR(),FD(e.triggerValue)}}function vn(i,o){if(i&1&&(vl(0,`span`,5),_x(1,bn,1,0)(2,yn,2,1,`span`,11),wp()),i&2){let e=Lx();IR(),Ex(e.customTrigger?1:2)}}function xn(i,o){if(i&1){let e=Ax();vl(0,`div`,12,1),DD(`keydown`,function(n){c_(e);return l_(Lx()._handleKeydown(n))}),Ap(2,1),wp()}if(i&2){let e=Lx();Mp(e.panelClass),kl(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),As(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var Cn=new E(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=m(Ie);return()=>Yt$1(i)}});var Sn=new E(`MAT_SELECT_CONFIG`);var Qt=new E(`MatSelectTrigger`);var Ne=class{source;value;constructor(o,e){this.source=o,this.value=e}};var Ei=(()=>{class i{_viewportRuler=m(G$1);_changeDetectorRef=m(Jk);_elementRef=m(Gn);_dir=m(LV,{optional:!0});_idGenerator=m(ze);_renderer=m(al);_parentFormField=m(fe,{optional:!0});ngControl=m(G,{self:!0,optional:!0});_liveAnnouncer=m(Hr);_defaultOptions=m(Sn,{optional:!0});_animationsDisabled=ct();_popoverLocation;_initialized=new le;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let n=this.panel.nativeElement,a=Bt(e,this.options,this.optionGroups),s=t._getHostElement();e===0&&a===1?n.scrollTop=0:n.scrollTop=Wt(s.offsetTop,s.offsetHeight,n.scrollTop,n.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Ne(this,e)}_scrollStrategyFactory=m(Cn);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new le;_errorStateTracker;stateChanges=new le;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=nt(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ye$1.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=rN(()=>{let e=this.options;return e?e.changes.pipe(EN(e),No(()=>sc(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(No(()=>this.optionSelectionChanges))});openedChange=new ht;_openedStream=this.openedChange.pipe(Mt(e=>e),he(()=>{}));_closedStream=this.openedChange.pipe(Mt(e=>!e),he(()=>{}));selectionChange=new ht;valueChange=new ht;constructor(){let e=m(lt),t=m(gr,{optional:!0}),n=m(Ar,{optional:!0}),a=m(new Fl(`tabindex`),{optional:!0}),s=m(Zt$1,{optional:!0}),L=m(ot,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new X(e,L||this.ngControl,n,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=s?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new Tt(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Ii$1(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Ii$1(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(EN(null),Ii$1(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let n=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?n.setAttribute(`aria-labelledby`,e):n.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Ei$1(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(n),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,a=>{a.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),n=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,n=t===40||t===38||t===37||t===39,a=t===13||t===32,s=this._keyManager;if(!s.isTyping()&&a&&!Ei$2(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){let L=this.selected;s.onKeydown(e);let v=this.selected;v&&L!==v&&this._liveAnnouncer.announce(v.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,n=e.keyCode,a=n===40||n===38,s=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!s&&(n===13||n===32)&&t.activeItem&&!Ei$2(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!s&&this._multiple&&n===65&&e.ctrlKey){e.preventDefault();let L=this.options.some(v=>!v.disabled&&!v.selected);this.options.forEach(v=>{v.disabled||(L?v.select():v.deselect())})}else{let L=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==L&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ei$2(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(n=>{if(this._selectionModel.isSelected(n))return!1;try{return(n.value!=null||this.canSelectNullableOptions)&&this._compareWith(n.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof Ht?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Ge(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=sc(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Ii$1(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),sc(...this.options.map(t=>t._stateChanges)).pipe(Ii$1(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let n=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,n)=>this.sortComparator?this.sortComparator(t,n,e):e.indexOf(t)-e.indexOf(n)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(n=>n.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=F(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||i)};static ɵcmp=Ss({type:i,selectors:[[`mat-select`]],contentQueries:function(t,n,a){if(t&1&&CD(a,Qt,5)(a,_e,5)(a,Oe,5),t&2){let s;Ux(s=Vx())&&(n.customTrigger=s.first),Ux(s=Vx())&&(n.options=s),Ux(s=Vx())&&(n.optionGroups=s)}},viewQuery:function(t,n){if(t&1&&TD(hn,5)(un,5)(_i,5),t&2){let a;Ux(a=Vx())&&(n.trigger=a.first),Ux(a=Vx())&&(n.panel=a.first),Ux(a=Vx())&&(n._overlayDir=a.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(t,n){t&1&&DD(`keydown`,function(s){return n._handleKeydown(s)})(`focus`,function(){return n._onFocus()})(`blur`,function(){return n._onBlur()}),t&2&&(As(`id`,n.id)(`tabindex`,n.disabled?-1:n.tabIndex)(`aria-controls`,n.panelOpen?n.id+`-panel`:null)(`aria-expanded`,n.panelOpen)(`aria-label`,n.ariaLabel||null)(`aria-required`,n.required.toString())(`aria-disabled`,n.disabled.toString())(`aria-invalid`,n.errorState)(`aria-activedescendant`,n._getAriaActiveDescendant()),kl(`mat-mdc-select-disabled`,n.disabled)(`mat-mdc-select-invalid`,n.errorState)(`mat-mdc-select-required`,n.required)(`mat-mdc-select-empty`,n.empty)(`mat-mdc-select-multiple`,n.multiple)(`mat-select-open`,n.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,nw],disableRipple:[2,`disableRipple`,`disableRipple`,nw],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:i9(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,nw],placeholder:`placeholder`,required:[2,`required`,`required`,nw],multiple:[2,`multiple`,`multiple`,nw],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,nw],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,i9],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,nw]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[HD([{provide:ce,useExisting:i},{provide:ke,useExisting:i}]),Ph],ngContentSelectors:fn,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(t,n){if(t&1&&(Np(gn),vl(0,`div`,2,0),DD(`click`,function(){return n.open()}),vl(3,`div`,3),_x(4,_n,2,1,`span`,4)(5,vn,3,1,`span`,5),wp(),vl(6,`div`,6)(7,`div`,7),I_(),vl(8,`svg`,8),mD(9,`path`,9),wp()()()(),uD(10,xn,3,16,`ng-template`,10),DD(`detach`,function(){return n.close()})(`backdropClick`,function(){return n.close()})(`overlayKeydown`,function(s){return n._handleOverlayKeydown(s)})),t&2){let a=Hx(1);IR(3),As(`id`,n._valueId),IR(),Ex(n.empty?4:5),IR(6),gD(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,n._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,n._scrollStrategy)(`cdkConnectedOverlayOrigin`,n._preferredOverlayOrigin||a)(`cdkConnectedOverlayPositions`,n._positions)(`cdkConnectedOverlayWidth`,n._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,n._popoverLocation)}},dependencies:[Ht,_i],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return i})();var Ai=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵdir=xl({type:i,selectors:[[`mat-select-trigger`]],features:[HD([{provide:Qt,useExisting:i}])]})}return i})();var Ii=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Yn({type:i});static ɵinj=nn$1({imports:[ui,De,_S,zt,me,De]})}return i})();var qt=new E(`CdkAccordion`);var Gt=(()=>{class i{accordion=m(qt,{optional:!0,skipSelf:!0});_changeDetectorRef=m(Jk);_expansionDispatcher=m(Xe);_openCloseAllSubscription=ne.EMPTY;closed=new ht;opened=new ht;destroyed=new ht;expandedChange=new ht;id=m(ze).getId(`cdk-accordion-child-`);get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=nt(!1);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static ɵfac=function(t){return new(t||i)};static ɵdir=xl({type:i,selectors:[[`cdk-accordion-item`],[``,`cdkAccordionItem`,``]],inputs:{expanded:[2,`expanded`,`expanded`,nw],disabled:[2,`disabled`,`disabled`,nw]},outputs:{closed:`closed`,opened:`opened`,destroyed:`destroyed`,expandedChange:`expandedChange`},exportAs:[`cdkAccordionItem`],features:[HD([{provide:qt,useValue:void 0}])]})}return i})();var Ut=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Yn({type:i});static ɵinj=nn$1({})}return i})();var wn=[`body`];var Mn=[`bodyWrapper`];var kn=[[[`mat-expansion-panel-header`]],`*`,[[`mat-action-row`]]];var On=[`mat-expansion-panel-header`,`*`,`mat-action-row`];function Dn(i,o){}var Nn=[[[`mat-panel-title`]],[[`mat-panel-description`]],`*`];var En=[`mat-panel-title`,`mat-panel-description`,`*`];function An(i,o){i&1&&(Cp(0,`span`,1),I_(),Cp(1,`svg`,2),yD(2,`path`,3),Tp()())}var $t=new E(`MAT_ACCORDION`);var Yt=new E(`MAT_EXPANSION_PANEL`);var In=(()=>{class i{_template=m(zi);_expansionPanel=m(Yt,{optional:!0});static ɵfac=function(t){return new(t||i)};static ɵdir=xl({type:i,selectors:[[`ng-template`,`matExpansionPanelContent`,``]]})}return i})();var Xt=new E(`MAT_EXPANSION_PANEL_DEFAULT_OPTIONS`);var Tn=(()=>{class i extends Gt{_viewContainerRef=m(Zi);_animationsDisabled=ct();_document=m(Q);_ngZone=m(Se);_elementRef=m(Gn);_renderer=m(al);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new ht;afterCollapse=new ht;_inputChanges=new le;accordion=m($t,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=m(ze).getId(`mat-expansion-panel-header-`);constructor(){super();let e=m(Xt,{optional:!0});this._expansionDispatcher=m(Xe),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?`expanded`:`collapsed`}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(EN(null),Mt(()=>this.expanded&&!this._portal),Ei$1(1)).subscribe(()=>{this._portal=new Q$1(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t===`grid-template-rows`&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,`transitionend`,this._transitionEndListener),e.classList.add(`mat-expansion-panel-animations-enabled`)},200)})}static ɵfac=function(t){return new(t||i)};static ɵcmp=Ss({type:i,selectors:[[`mat-expansion-panel`]],contentQueries:function(t,n,a){if(t&1&&CD(a,In,5),t&2){let s;Ux(s=Vx())&&(n._lazyContent=s.first)}},viewQuery:function(t,n){if(t&1&&TD(wn,5)(Mn,5),t&2){let a;Ux(a=Vx())&&(n._body=a.first),Ux(a=Vx())&&(n._bodyWrapper=a.first)}},hostAttrs:[1,`mat-expansion-panel`],hostVars:4,hostBindings:function(t,n){t&2&&kl(`mat-expanded`,n.expanded)(`mat-expansion-panel-spacing`,n._hasSpacing())},inputs:{hideToggle:[2,`hideToggle`,`hideToggle`,nw],togglePosition:`togglePosition`},outputs:{afterExpand:`afterExpand`,afterCollapse:`afterCollapse`},exportAs:[`matExpansionPanel`],features:[HD([{provide:$t,useValue:void 0},{provide:Yt,useExisting:i}]),cD,Ph],ngContentSelectors:On,decls:9,vars:4,consts:[[`bodyWrapper`,``],[`body`,``],[1,`mat-expansion-panel-content-wrapper`],[`role`,`region`,1,`mat-expansion-panel-content`,3,`id`],[1,`mat-expansion-panel-body`],[3,`cdkPortalOutlet`]],template:function(t,n){t&1&&(Np(kn),Ap(0),vl(1,`div`,2,0)(3,`div`,3,1)(5,`div`,4),Ap(6,1),uD(7,Dn,0,0,`ng-template`,5),wp(),Ap(8,2),wp()()),t&2&&(IR(),As(`inert`,n.expanded?null:``),IR(2),gD(`id`,n.id),As(`aria-labelledby`,n._headerId),IR(4),gD(`cdkPortalOutlet`,n._portal))},dependencies:[ro],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-expansion-container-text-color, var(--%NS%mat-sys-on-surface));
  border-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--%NS%mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--%NS%mat-expansion-container-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-expansion-container-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-expansion-container-text-weight, var(--%NS%mat-sys-body-large-weight));
  line-height: var(--%NS%mat-expansion-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  letter-spacing: var(--%NS%mat-expansion-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--%NS%mat-expansion-actions-divider-color, var(--%NS%mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2})}return i})();var ha=(()=>{class i{panel=m(Tn,{host:!0});_element=m(Gn);_focusMonitor=m(re);_changeDetectorRef=m(Jk);_parentChangeSubscription=ne.EMPTY;constructor(){m(MV).load(Pi);let e=this.panel,t=m(Xt,{optional:!0}),n=m(new Fl(`tabindex`),{optional:!0}),a=e.accordion?e.accordion._stateChanges.pipe(Mt(s=>!!(s.hideToggle||s.togglePosition))):yr;this.tabIndex=parseInt(n||``)||0,this._parentChangeSubscription=sc(e.opened,e.closed,a,e._inputChanges.pipe(Mt(s=>!!(s.hideToggle||s.disabled||s.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(Mt(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,`program`)),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Ei$2(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static ɵfac=function(t){return new(t||i)};static ɵcmp=Ss({type:i,selectors:[[`mat-expansion-panel-header`]],hostAttrs:[`role`,`button`,1,`mat-expansion-panel-header`,`mat-focus-indicator`],hostVars:13,hostBindings:function(t,n){t&1&&DD(`click`,function(){return n._toggle()})(`keydown`,function(s){return n._keydown(s)}),t&2&&(As(`id`,n.panel._headerId)(`tabindex`,n.disabled?-1:n.tabIndex)(`aria-controls`,n._getPanelId())(`aria-expanded`,n._isExpanded())(`aria-disabled`,n.panel.disabled),MD(`height`,n._getHeaderHeight()),kl(`mat-expanded`,n._isExpanded())(`mat-expansion-toggle-indicator-after`,n._getTogglePosition()===`after`)(`mat-expansion-toggle-indicator-before`,n._getTogglePosition()===`before`))},inputs:{expandedHeight:`expandedHeight`,collapsedHeight:`collapsedHeight`,tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:i9(e)]},ngContentSelectors:En,decls:5,vars:3,consts:[[1,`mat-content`],[1,`mat-expansion-indicator`],[`xmlns`,`http://www.w3.org/2000/svg`,`viewBox`,`0 -960 960 960`,`aria-hidden`,`true`,`focusable`,`false`],[`d`,`M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z`]],template:function(t,n){t&1&&(Np(Nn),Cp(0,`span`,0),Ap(1),Ap(2,1),Ap(3,2),Tp(),_x(4,An,3,0,`span`,1)),t&2&&(kl(`mat-content-hide-toggle`,!n._showToggle()),IR(4),Ex(n._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
  outline: 0;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--%NS%mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--%NS%mat-expansion-header-text-font, var(--%NS%mat-sys-title-medium-font));
  font-size: var(--%NS%mat-expansion-header-text-size, var(--%NS%mat-sys-title-medium-size));
  font-weight: var(--%NS%mat-expansion-header-text-weight, var(--%NS%mat-sys-title-medium-weight));
  line-height: var(--%NS%mat-expansion-header-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  letter-spacing: var(--%NS%mat-expansion-header-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--%NS%mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--%NS%mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--%NS%mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--%NS%mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--%NS%mat-expansion-header-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--%NS%mat-expansion-header-description-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2})}return i})();var ua=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵdir=xl({type:i,selectors:[[`mat-panel-description`]],hostAttrs:[1,`mat-expansion-panel-header-description`]})}return i})();var ga=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵdir=xl({type:i,selectors:[[`mat-panel-title`]],hostAttrs:[1,`mat-expansion-panel-header-title`]})}return i})();var fa=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Yn({type:i});static ɵinj=nn$1({imports:[Ut,Se$1,_S]})}return i})();var be=`captures`;var Zt=class i extends L{watchForProspect(o){return this.sync.watchCollection(`${be}:${o}`,this.tenantPath(be,o))}async save(o,e,t){let n=this.generateId(),a={id:n,prospectId:o,source:e,ocrText:t,createdAt:Date.now()};return await this.sync.write(`${be}:${o}`,n,this.tenantPath(be,o,n),`set`,a),n}static ɵfac=(()=>{let o;return function(t){return(o||(o=xE(i)))(t||i)}})();static ɵprov=P({token:i,factory:i.ɵfac,providedIn:`root`})};var ye=`history`;var ve=class i extends L{watchForProspect(o){return this.sync.watchCollection(`${ye}:${o}`,this.tenantPath(ye,o))}async log(o,e,t){let n=this.generateId(),a={id:n,prospectId:o,type:e,payload:t,createdAt:Date.now()};await this.sync.write(`${ye}:${o}`,n,this.tenantPath(ye,o,n),`set`,a)}static ɵfac=(()=>{let o;return function(t){return(o||(o=xE(i)))(t||i)}})();static ɵprov=P({token:i,factory:i.ɵfac,providedIn:`root`})};var Jt=[{code:`+57`,label:`🇨🇴 +57 Colombia`},{code:`+54`,label:`🇦🇷 +54 Argentina`},{code:`+52`,label:`🇲🇽 +52 México`},{code:`+51`,label:`🇵🇪 +51 Perú`},{code:`+56`,label:`🇨🇱 +56 Chile`},{code:`+593`,label:`🇪🇨 +593 Ecuador`},{code:`+58`,label:`🇻🇪 +58 Venezuela`},{code:`+591`,label:`🇧🇴 +591 Bolivia`},{code:`+595`,label:`🇵🇾 +595 Paraguay`},{code:`+598`,label:`🇺🇾 +598 Uruguay`},{code:`+506`,label:`🇨🇷 +506 Costa Rica`},{code:`+507`,label:`🇵🇦 +507 Panamá`},{code:`+34`,label:`🇪🇸 +34 España`},{code:`+1`,label:`🇺🇸 +1 EE.UU. / Canadá`}];var Ee=`+57`;function Ma(i,o){let e=o.replace(/\D/g,``);return e?`${i}${e}`:``}function ka(i){if(!i)return{dialCode:Ee,localNumber:``};let o=i.trim().startsWith(`+`)?i.trim():`+${i.replace(/\D/g,``)}`,e=[...Jt].sort((t,n)=>n.code.length-t.code.length).find(t=>o.startsWith(t.code));return e?{dialCode:e.code,localNumber:o.slice(e.code.length).replace(/\D/g,``)}:{dialCode:Ee,localNumber:i.replace(/\D/g,``)}}var Pn=(i,o)=>o.id;function Rn(i,o){if(i&1){let e=Ax();vl(0,`a`,1),DD(`click`,function(){let n=c_(e).$implicit;return l_(Lx().choose(n))}),vl(1,`span`,2),lk(2),wp(),vl(3,`span`,3),lk(4),wp()()}if(i&2){let e=o.$implicit;IR(2),FD(e.name),IR(2),FD(e.body)}}var en=class i{dialogRef=m(B);configRepo=m(ie);templates=jQ(this.configRepo.watchTemplates(),{initialValue:[]});choose(o){this.dialogRef.close(o)}static ɵfac=function(e){return new(e||i)};static ɵcmp=Ss({type:i,selectors:[[`app-whatsapp-template-picker`]],decls:14,vars:0,consts:[[`mat-dialog-title`,``],[`mat-list-item`,``,3,`click`],[`matListItemTitle`,``],[`matListItemLine`,``],[`mat-list-item`,``],[`align`,`end`],[`mat-button`,``,`mat-dialog-close`,``]],template:function(e,t){e&1&&(vl(0,`h2`,0),lk(1,`Elegí una plantilla`),wp(),vl(2,`mat-dialog-content`)(3,`mat-nav-list`)(4,`a`,1),DD(`click`,function(){return t.choose(null)}),vl(5,`span`,2),lk(6,`Sin plantilla`),wp(),vl(7,`span`,3),lk(8,`Abrir WhatsApp sin mensaje precargado`),wp()(),Dx(9,Rn,5,2,`a`,4,Pn),wp()(),vl(11,`mat-dialog-actions`,5)(12,`button`,6),lk(13,`Cancelar`),wp()()),e&2&&(IR(9),wx(t.templates()))},dependencies:[Pc,Rc,zn,Ln,Pn$1,Bn,Mn$1,gn$1,fn$1,un$1,ei,ti],encapsulation:2})};var tn=class i{history=m(ve);prospectRepo=m(I);interpolate(o,e,t=null){return qn(o.body,e,t)}async openWithTemplate(o,e,t=null){let n=Ft(o.phone??``);if(!n)return;let a=e?this.interpolate(e,o,t):``,s=a?`https://wa.me/${n}?text=${encodeURIComponent(a)}`:`https://wa.me/${n}`;window.open(s,`_blank`,`noopener`),await this.prospectRepo.update(o.id,{lastContactAt:Date.now()}),await this.history.log(o.id,`whatsapp_opened`,{templateId:e?.id??null,templateName:e?.name??null})}static ɵfac=function(e){return new(e||i)};static ɵprov=P({token:i,factory:i.ɵfac,providedIn:`root`})};export{Ma as a,_e as c,ga as d,ha as f,ve as g,ua as h,Jt as i,en as l,tn as m,Ei as n,Tn as o,ka as p,Ii as r,Zt as s,Ai as t,fa as u};