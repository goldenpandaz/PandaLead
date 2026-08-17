import{$ as MD,$n as lk,B as Ie$1,C as FD,Cn as dD,Et as Se$1,F as Hx,G as Jk,Gr as wx,Ht as Ux,Kr as xE,Kt as Vx,L as IR,Mr as uD,Mt as TD,N as HD,Nn as gD,Q as M,Qn as le$1,Rn as ht$1,S as Ex,Tr as sc,U as Ix,V as Ii,Vr as vl,Wr as wp,X as LV,Xn as kl,Yr as xl,Z as Lx,Zn as l_,_ as E,_t as QM,a as Ap,at as Mt,bn as c_,c as Ax,cn as _i,ct as Np,ei as yr,en as Yn,er as m,f as CD,fn as al,g as Dx,ii as zi,it as Mp,j as Gn,jt as Ss,ln as _x,lr as nw,m as DD,mr as pD,mt as Ph,nn as Zt,nr as mD,o as As,on as _N,or as ne,pr as ol,sn as _S,sr as nn,st as No,tn as Zi,tt as MV,xn as cc,y as EN,yn as cD,z as Ic,zn as i9}from"./chunk-90LlFk5x.js";import{$ as xr,B as ct$1,E as Pi,Q as xa,V as dc,X as v,c as De$1,h as He,rt as ze,u as Ei}from"./chunk-BMQCUU9d.js";import{B as so,F as li,R as ro,g as Q,u as G}from"./main-2LBR6M3B.js";import{l as je}from"./chunk-O2U_fgXP.js";var pt=[`*`];function re(a,r){a&1&&Ap(0)}var oe=[`tabListContainer`];var se=[`tabList`];var le=[`tabListInner`];var de=[`nextPaginator`];var ce=[`previousPaginator`];var me=[`content`];function be(a,r){}var he=[`tabBodyWrapper`];var pe=[`tabHeader`];function _e(a,r){}function ue(a,r){if(a&1&&uD(0,_e,0,0,`ng-template`,12),a&2){let t=Lx().$implicit;gD(`cdkPortalOutlet`,t.templateLabel)}}function fe(a,r){if(a&1&&lk(0),a&2){let t=Lx().$implicit;FD(t.textLabel)}}function ge(a,r){if(a&1){let t=Ax();vl(0,`div`,7,2),DD(`click`,function(){let n=c_(t),i=n.$implicit,s=n.$index,v=Lx(),T=Hx(1);return l_(v._handleClick(i,T,s))})(`cdkFocusChange`,function(n){let i=c_(t).$index;return l_(Lx()._tabFocusChanged(n,i))}),mD(2,`span`,8)(3,`div`,9),vl(4,`span`,10)(5,`span`,11),_x(6,ue,1,1,null,12)(7,fe,1,1),wp()()()}if(a&2){let t=r.$implicit,e=r.$index,n=Hx(1),i=Lx();Mp(t.labelClass),kl(`mdc-tab--active`,i.selectedIndex===e),gD(`id`,i._getTabLabelId(t,e))(`disabled`,t.disabled)(`fitInkBarToContent`,i.fitInkBarToContent),As(`tabIndex`,i._getTabIndex(e))(`aria-posinset`,e+1)(`aria-setsize`,i._tabs.length)(`aria-controls`,i._getTabContentId(e))(`aria-selected`,i.selectedIndex===e)(`aria-label`,t.ariaLabel||null)(`aria-labelledby`,!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),IR(3),gD(`matRippleTrigger`,n)(`matRippleDisabled`,t.disabled||i.disableRipple),IR(3),Ex(t.templateLabel?6:7)}}function ve(a,r){a&1&&Ap(0)}function ye(a,r){if(a&1){let t=Ax();vl(0,`mat-tab-body`,13),DD(`_onCentered`,function(){c_(t);return l_(Lx()._removeTabBodyWrapperHeight())})(`_onCentering`,function(n){c_(t);return l_(Lx()._setTabBodyWrapperHeight(n))})(`_beforeCentering`,function(n){c_(t);return l_(Lx()._bodyCentered(n))}),wp()}if(a&2){let t=r.$implicit,e=r.$index,n=Lx();Mp(t.bodyClass),gD(`id`,n._getTabContentId(e))(`content`,t.content)(`position`,t.position)(`animationDuration`,n._bodyAnimationDuration)(`preserveContent`,n.preserveContent),As(`tabindex`,n.contentTabIndex!=null&&n.selectedIndex===e?n.contentTabIndex:null)(`aria-labelledby`,n._getTabLabelId(t,e))(`aria-hidden`,n.selectedIndex!==e)}}var ke=new E(`MatTabContent`);var Ce=(()=>{class a{template=m(zi);static ɵfac=function(e){return new(e||a)};static ɵdir=xl({type:a,selectors:[[``,`matTabContent`,``]],features:[HD([{provide:ke,useExisting:a}])]})}return a})();var Te=new E(`MatTabLabel`);var Xt=new E(`MAT_TAB`);var xe=(()=>{class a extends so{_closestTab=m(Xt,{optional:!0});static ɵfac=(()=>{let t;return function(n){return(t||(t=xE(a)))(n||a)}})();static ɵdir=xl({type:a,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[HD([{provide:Te,useExisting:a}]),cD]})}return a})();var Jt=new E(`MAT_TAB_GROUP`);var Ie=(()=>{class a{_viewContainerRef=m(Zi);_closestTabGroup=m(Jt,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new le$1;position=null;origin=null;isActive=!1;constructor(){m(MV).load(Pi)}ngOnChanges(t){(t.hasOwnProperty(`textLabel`)||t.hasOwnProperty(`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Q(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Ss({type:a,selectors:[[`mat-tab`]],contentQueries:function(e,n,i){if(e&1&&CD(i,xe,5)(i,Ce,7,zi),e&2){let s;Ux(s=Vx())&&(n.templateLabel=s.first),Ux(s=Vx())&&(n._explicitContent=s.first)}},viewQuery:function(e,n){if(e&1&&TD(zi,7),e&2){let i;Ux(i=Vx())&&(n._implicitContent=i.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(e,n){e&2&&As(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,nw],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[HD([{provide:Xt,useExisting:a}]),Ph],ngContentSelectors:pt,decls:1,vars:0,template:function(e,n){e&1&&(Np(),dD(0,re,1,0,`ng-template`))},encapsulation:2,changeDetection:1})}return a})();var dt=`mdc-tab-indicator--active`;var Kt=`mdc-tab-indicator--no-transition`;var mt=class{_items;_currentItem;constructor(r){this._items=r}hide(){this._items.forEach(r=>r.deactivateInkBar()),this._currentItem=void 0}alignToElement(r){let t=this._items.find(n=>n.elementRef.nativeElement===r),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}};var Se=(()=>{class a{_elementRef=m(Gn);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(dt);return}let n=e.getBoundingClientRect(),i=t.width/n.width,s=t.left-n.left;e.classList.add(Kt),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${s}px) scaleX(${i})`),e.getBoundingClientRect(),e.classList.remove(Kt),e.classList.add(dt),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(dt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),n=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,n.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||a)};static ɵdir=xl({type:a,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,nw]}})}return a})();var te=(()=>{class a extends Se{elementRef=m(Gn);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let t;return function(n){return(t||(t=xE(a)))(n||a)}})();static ɵdir=xl({type:a,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(e,n){e&2&&(As(`aria-disabled`,!!n.disabled),kl(`mat-mdc-tab-disabled`,n.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,nw]},features:[cD]})}return a})();var Yt={passive:!0};var we=650;var De=100;function ct(a){let r=a+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(r)?`${a}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(r)?r:``}var Ne=(()=>{class a{_elementRef=m(Gn);_changeDetectorRef=m(Jk);_viewportRuler=m(G);_dir=m(LV,{optional:!0});_ngZone=m(Se$1);_platform=m(v);_sharedResizeObserver=m(je);_injector=m(Ie$1);_renderer=m(al);_animationsDisabled=ct$1();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new le$1;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new le$1;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new ht$1;indexFocused=new ht$1;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),Yt),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),Yt))}ngAfterContentInit(){let t=this._dir?this._dir.change:Zt(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(cc(32),Ii(this._destroyed)),n=this._viewportRuler.change(150).pipe(Ii(this._destroyed)),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new He(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),QM(i,{injector:this._injector}),sc(t,n,e,this._items.changes,this._itemsResized()).pipe(Ii(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(s=>{this.indexFocused.emit(s),this._setTabFocus(s)})}_itemsResized(){return typeof ResizeObserver!=`function`?yr:this._items.changes.pipe(EN(this._items),No(t=>new M(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(i=>e.next(i));return t.forEach(i=>n.observe(i.elementRef.nativeElement)),()=>{n.disconnect()}}))),_N(1),Mt(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Ei(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:s}=e.elementRef.nativeElement,v,T;this._getLayoutDirection()==`ltr`?(v=i,T=v+s):(T=this._tabListInner.nativeElement.offsetWidth-i,v=T-s);let K=this.scrollDistance,_t=this.scrollDistance+n;v<K?this.scrollDistance-=K-v:T>_t&&(this.scrollDistance+=Math.min(T-_t,v-K))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let n=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),_i(we,De).pipe(Ii(sc(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:i}=this._scrollHeader(t);(i===0||i>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||a)};static ɵdir=xl({type:a,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,nw],selectedIndex:[2,`selectedIndex`,`selectedIndex`,i9]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return a})();var Re=(()=>{class a extends Ne{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new mt(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static ɵfac=(()=>{let t;return function(n){return(t||(t=xE(a)))(n||a)}})();static ɵcmp=Ss({type:a,selectors:[[`mat-tab-header`]],contentQueries:function(e,n,i){if(e&1&&CD(i,te,4),e&2){let s;Ux(s=Vx())&&(n._items=s)}},viewQuery:function(e,n){if(e&1&&TD(oe,7)(se,7)(le,7)(de,5)(ce,5),e&2){let i;Ux(i=Vx())&&(n._tabListContainer=i.first),Ux(i=Vx())&&(n._tabList=i.first),Ux(i=Vx())&&(n._tabListInner=i.first),Ux(i=Vx())&&(n._nextPaginator=i.first),Ux(i=Vx())&&(n._previousPaginator=i.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(e,n){e&2&&kl(`mat-mdc-tab-header-pagination-controls-enabled`,n._showPaginationControls)(`mat-mdc-tab-header-rtl`,n._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,nw]},features:[cD],ngContentSelectors:pt,decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(e,n){e&1&&(Np(),vl(0,`div`,5,0),DD(`click`,function(){return n._handlePaginatorClick(`before`)})(`mousedown`,function(s){return n._handlePaginatorPress(`before`,s)})(`touchend`,function(){return n._stopInterval()}),mD(2,`div`,6),wp(),vl(3,`div`,7,1),DD(`keydown`,function(s){return n._handleKeydown(s)}),vl(5,`div`,8,2),DD(`cdkObserveContent`,function(){return n._onContentChanges()}),vl(7,`div`,9,3),Ap(9),wp()()(),vl(10,`div`,10,4),DD(`mousedown`,function(s){return n._handlePaginatorPress(`after`,s)})(`click`,function(){return n._handlePaginatorClick(`after`)})(`touchend`,function(){return n._stopInterval()}),mD(12,`div`,6),wp()),e&2&&(kl(`mat-mdc-tab-header-pagination-disabled`,n._disableScrollBefore),gD(`matRippleDisabled`,n._disableScrollBefore||n.disableRipple),IR(3),kl(`_mat-animation-noopable`,n._animationsDisabled),IR(2),As(`aria-label`,n.ariaLabel||null)(`aria-labelledby`,n.ariaLabelledby||null),IR(5),kl(`mat-mdc-tab-header-pagination-disabled`,n._disableScrollAfter),gD(`matRippleDisabled`,n._disableScrollAfter||n.disableRipple))},dependencies:[dc,xa],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})}return a})();var Me=new E(`MAT_TABS_CONFIG`);var Ut=(()=>{class a extends ro{_host=m(bt);_ngZone=m(Se$1);_centeringSub=ne.EMPTY;_leavingSub=ne.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(EN(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let t;return function(n){return(t||(t=xE(a)))(n||a)}})();static ɵdir=xl({type:a,selectors:[[``,`matTabBodyHost`,``]],features:[cD]})}return a})();var bt=(()=>{class a{_elementRef=m(Gn);_dir=m(LV,{optional:!0});_ngZone=m(Se$1);_injector=m(Ie$1);_renderer=m(al);_diAnimationsDisabled=ct$1();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=ne.EMPTY;_position;_previousPosition;_onCentering=new ht$1;_beforeCentering=new ht$1;_afterLeavingCenter=new ht$1;_onCentered=new ht$1(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=m(Jk);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),QM(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),n.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,`transitionstart`,n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(t,`transitionend`,e),this._renderer.listen(t,`transitioncancel`,e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position===`center`;this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,t)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t==`ltr`?`left`:`right`:this._positionIndex>0?this._position=t==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),QM(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(e){return new(e||a)};static ɵcmp=Ss({type:a,selectors:[[`mat-tab-body`]],viewQuery:function(e,n){if(e&1&&TD(Ut,5)(me,5),e&2){let i;Ux(i=Vx())&&(n._portalHost=i.first),Ux(i=Vx())&&(n._contentElement=i.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(e,n){e&2&&As(`inert`,n._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(e,n){e&1&&(vl(0,`div`,1,0),uD(2,be,0,0,`ng-template`,2),wp()),e&2&&kl(`mat-tab-body-content-left`,n._position===`left`)(`mat-tab-body-content-right`,n._position===`right`)(`mat-tab-body-content-can-animate`,n._position===`center`||n._previousPosition===`center`)},dependencies:[Ut,li],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})}return a})();var bn=(()=>{class a{_elementRef=m(Gn);_changeDetectorRef=m(Jk);_ngZone=m(Se$1);_tabsSubscription=ne.EMPTY;_tabLabelSubscription=ne.EMPTY;_tabBodySubscription=ne.EMPTY;_diAnimationsDisabled=ct$1();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new ol;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t==`object`?(this._bodyAnimationDuration=ct(t.body),this._headerAnimationDuration=ct(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=ct(t)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new ht$1;focusChange=new ht$1;animationDone=new ht$1;selectedTabChange=new ht$1(!0);_groupId;_isServer=!m(v).isBrowser;constructor(){let t=m(Me,{optional:!0});this._groupId=m(ze).getId(`mat-tab-group-`),this.animationDuration=t&&t.animationDuration?t.animationDuration:`500ms`,this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((n,i)=>n.isActive=i===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let i=0;i<e.length;i++)if(e[i].isActive){this._indexToSelect=this._selectedIndex=i,this._lastFocusedTabIndex=null,n=e[i];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(EN(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new ht;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=sc(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+`px`)}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){return t===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(t,e){t&&t!==`mouse`&&t!==`touch`&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(e){return new(e||a)};static ɵcmp=Ss({type:a,selectors:[[`mat-tab-group`]],contentQueries:function(e,n,i){if(e&1&&CD(i,Ie,5),e&2){let s;Ux(s=Vx())&&(n._allTabs=s)}},viewQuery:function(e,n){if(e&1&&TD(he,5)(pe,5)(bt,5),e&2){let i;Ux(i=Vx())&&(n._tabBodyWrapper=i.first),Ux(i=Vx())&&(n._tabHeader=i.first),Ux(i=Vx())&&(n._tabBodies=i)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(e,n){e&2&&(As(`mat-align-tabs`,n.alignTabs),Mp(`mat-`+(n.color||`primary`)),MD(`--%NS%mat-tab-body-animation-duration`,n._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,n._headerAnimationDuration),kl(`mat-mdc-tab-group-dynamic-height`,n.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,n.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,n.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,nw],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,nw],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,nw],selectedIndex:[2,`selectedIndex`,`selectedIndex`,i9],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,i9],disablePagination:[2,`disablePagination`,`disablePagination`,nw],disableRipple:[2,`disableRipple`,`disableRipple`,nw],preserveContent:[2,`preserveContent`,`preserveContent`,nw],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[HD([{provide:Jt,useExisting:a}])],ngContentSelectors:pt,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(e,n){e&1&&(Np(),vl(0,`mat-tab-header`,3,0),DD(`indexFocused`,function(s){return n._focusChanged(s)})(`selectFocusedIndex`,function(s){return n.selectedIndex=s}),Dx(2,ge,8,17,`div`,4,Ix),wp(),_x(4,ve,1,0),vl(5,`div`,5,1),Dx(7,ye,1,10,`mat-tab-body`,6,Ix),wp()),e&2&&(gD(`selectedIndex`,n.selectedIndex||0)(`disableRipple`,n.disableRipple)(`disablePagination`,n.disablePagination),pD(`aria-label`,n.ariaLabel)(`aria-labelledby`,n.ariaLabelledby),IR(2),wx(n._tabs),IR(2),Ex(n._isServer?4:-1),IR(),kl(`_mat-animation-noopable`,n._bodyAnimationsDisabled()),IR(2),wx(n._tabs))},dependencies:[Re,te,xr,dc,ro,bt],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})}return a})();var ht=class{index;tab};var hn=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=Yn({type:a});static ɵinj=nn({imports:[_S]})}return a})();var ee=class a{el=m(Gn);renderer=m(al);onChange=()=>{};onTouched=()=>{};writeValue(r){this.renderer.setProperty(this.el.nativeElement,`value`,this.format(r))}registerOnChange(r){this.onChange=r}registerOnTouched(r){this.onTouched=r}setDisabledState(r){this.renderer.setProperty(this.el.nativeElement,`disabled`,r)}onInput(r){let e=r.target.value.replace(/\D/g,``),n=e?Number(e):null;this.renderer.setProperty(this.el.nativeElement,`value`,this.format(n)),this.onChange(n)}onBlur(){this.onTouched()}format(r){return r==null?``:r.toLocaleString(`es-CO`)}static ɵfac=function(t){return new(t||a)};static ɵdir=xl({type:a,selectors:[[`input`,`moneyInput`,``]],hostBindings:function(t,e){t&1&&DD(`input`,function(i){return e.onInput(i)})(`blur`,function(){return e.onBlur()})},features:[HD([{provide:De$1,useExisting:Ic(()=>a),multi:!0}])]})};export{hn as i,bn as n,ee as r,Ie as t};