import{$n as lk,A as GS,B as Ie$1,C as FD,Ct as Rp,D as Fl,F as Hx,G as Jk,Gr as wx,Gt as VX,Ht as Ux,In as he$1,It as Tp,Kr as xE,Kt as Vx,L as IR,N as HD,Nn as gD,On as ew,Qn as le,R as I_,Rn as ht,S as Ex,Tr as sc,U as Ix,V as Ii,Vr as vl,Wr as wp,X as LV,Xn as kl,Xr as yD,Yr as xl,Z as Lx,Zn as l_,_ as E,_r as qS,_t as QM,a as Ap,an as _D,bn as c_,c as Ax,cr as nt,ct as Np,en as Yn,er as m,f as CD,g as Dx,gt as Q$1,h as D_,i as Ao,ii as zi,ir as mr,j as Gn,jt as Ss,kr as tN,ln as _x,lr as nw,m as DD,mr as pD,mt as Ph,ni as zS,nn as Zt$1,nr as mD,o as As,p as Cp,pt as Pe$1,sn as _S,sr as nn,tn as Zi,tt as MV,wn as dN,xr as rt,yn as cD,zn as i9,zt as UX}from"./chunk-90LlFk5x.js";import{B as _o,F as Yc,I as Ye,L as Zc,b as Ls,f as Gi,it as ui$1,ot as y,q as ht$1,rt as ue}from"./chunk-BDqtvJZH.js";import{W as ve,b as V,i as Yt,j as ge,l as Ft,o as mt,p as It,s as $n,u as G,w as Ye$1}from"./main-BRQVMRX3.js";import{p as nt$1}from"./chunk-BnqtYRWF.js";import{a as Mn,n as Bn,o as Nt,p as zn,s as Pn,t as B}from"./chunk-DbFegysA.js";import{a as X$1,i as Ui,o as Xi}from"./chunk-BRaoNSd9.js";var Zt=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var Xt=[`caption`,`colgroup, col`,`*`];function Jt(n,o){n&1&&Ap(0,2)}function ei(n,o){n&1&&(vl(0,`thead`,0),_D(1,1),wp(),vl(2,`tbody`,0),_D(3,2)(4,3),wp(),vl(5,`tfoot`,0),_D(6,4),wp())}function ti(n,o){n&1&&_D(0,1)(1,2)(2,3)(3,4)}var P=new E(`CDK_TABLE`);var Se=(()=>{class n{template=m(zi);static ɵfac=function(t){return new(t||n)};static ɵdir=xl({type:n,selectors:[[``,`cdkCellDef`,``]]})}return n})();var Re=(()=>{class n{template=m(zi);static ɵfac=function(t){return new(t||n)};static ɵdir=xl({type:n,selectors:[[``,`cdkHeaderCellDef`,``]]})}return n})();var Ht=(()=>{class n{template=m(zi);static ɵfac=function(t){return new(t||n)};static ɵdir=xl({type:n,selectors:[[``,`cdkFooterCellDef`,``]]})}return n})();var Q=(()=>{class n{_table=m(P,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,`-`),this._updateColumnCssClassName())}static ɵfac=function(t){return new(t||n)};static ɵdir=xl({type:n,selectors:[[``,`cdkColumnDef`,``]],contentQueries:function(t,i,a){if(t&1&&CD(a,Se,5)(a,Re,5)(a,Ht,5),t&2){let r;Ux(r=Vx())&&(i.cell=r.first),Ux(r=Vx())&&(i.headerCell=r.first),Ux(r=Vx())&&(i.footerCell=r.first)}},inputs:{name:[0,`cdkColumnDef`,`name`],sticky:[2,`sticky`,`sticky`,nw],stickyEnd:[2,`stickyEnd`,`stickyEnd`,nw]}})}return n})();var De=class{constructor(o,e){e.nativeElement.classList.add(...o._columnCssClassName)}};var jt=(()=>{class n extends De{constructor(){super(m(Q),m(Gn))}static ɵfac=function(t){return new(t||n)};static ɵdir=xl({type:n,selectors:[[`cdk-header-cell`],[`th`,`cdk-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`cdk-header-cell`],features:[cD]})}return n})();var Vt=(()=>{class n extends De{constructor(){let e=m(Q),t=m(Gn);super(e,t);let i=e._table?._getCellRole();i&&t.nativeElement.setAttribute(`role`,i)}static ɵfac=function(t){return new(t||n)};static ɵdir=xl({type:n,selectors:[[`cdk-cell`],[`td`,`cdk-cell`,``]],hostAttrs:[1,`cdk-cell`],features:[cD]})}return n})();var Oe=(()=>{class n{template=m(zi);_differs=m(ew);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof fe?e.headerCell.template:this instanceof Fe?e.footerCell.template:e.cell.template}static ɵfac=function(t){return new(t||n)};static ɵdir=xl({type:n,features:[Ph]})}return n})();var fe=(()=>{class n extends Oe{_table=m(P,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(i){return(e||(e=xE(n)))(i||n)}})();static ɵdir=xl({type:n,selectors:[[``,`cdkHeaderRowDef`,``]],inputs:{columns:[0,`cdkHeaderRowDef`,`columns`],sticky:[2,`cdkHeaderRowDefSticky`,`sticky`,nw]},features:[cD,Ph]})}return n})();var Fe=(()=>{class n extends Oe{_table=m(P,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(i){return(e||(e=xE(n)))(i||n)}})();static ɵdir=xl({type:n,selectors:[[``,`cdkFooterRowDef`,``]],inputs:{columns:[0,`cdkFooterRowDef`,`columns`],sticky:[2,`cdkFooterRowDefSticky`,`sticky`,nw]},features:[cD,Ph]})}return n})();var ke=(()=>{class n extends Oe{_table=m(P,{optional:!0});when;static ɵfac=(()=>{let e;return function(i){return(e||(e=xE(n)))(i||n)}})();static ɵdir=xl({type:n,selectors:[[``,`cdkRowDef`,``]],inputs:{columns:[0,`cdkRowDefColumns`,`columns`],when:[0,`cdkRowDefWhen`,`when`]},features:[cD]})}return n})();var X=(()=>{class n{_viewContainer=m(Zi);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static ɵfac=function(t){return new(t||n)};static ɵdir=xl({type:n,selectors:[[``,`cdkCellOutlet`,``]]})}return n})();var Ee=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=Ss({type:n,selectors:[[`cdk-header-row`],[`tr`,`cdk-header-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-header-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&_D(0,0)},dependencies:[X],encapsulation:2,changeDetection:1})}return n})();var Pe=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=Ss({type:n,selectors:[[`cdk-row`],[`tr`,`cdk-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&_D(0,0)},dependencies:[X],encapsulation:2,changeDetection:1})}return n})();var xe=(()=>{class n{templateRef=m(zi);_contentClassNames=[`cdk-no-data-row`,`cdk-row`];_cellClassNames=[`cdk-cell`,`cdk-no-data-cell`];_cellSelector=`td, cdk-cell, [cdk-cell], .cdk-cell`;static ɵfac=function(t){return new(t||n)};static ɵdir=xl({type:n,selectors:[[`ng-template`,`cdkNoDataRow`,``]]})}return n})();var Bt=[`top`,`bottom`,`left`,`right`];var Ie=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(o=>this._updateCachedSizes(o)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(o,e,t=!0,i=!0,a,r,l){this._isNativeHtmlTable=o,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=i,this.direction=a,this._positionListener=r,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(o,e){(e.includes(`left`)||e.includes(`right`))&&this._removeFromStickyColumnReplayQueue(o);let t=[];for(let i of o)i.nodeType===i.ELEMENT_NODE&&t.push(i,...Array.from(i.children));QM({write:()=>{for(let i of t)this._removeStickyStyle(i,e)}},{injector:this._tableInjector})}updateStickyColumns(o,e,t,i=!0,a=!0){if(!o.length||!this._isBrowser||!(e.some(O=>O)||t.some(O=>O))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let r=o[0],l=r.children.length,d=this.direction===`rtl`,m=d?`right`:`left`,p=d?`left`:`right`,_=e.lastIndexOf(!0),w=t.indexOf(!0),C,je,Ve;a&&this._updateStickyColumnReplayQueue({rows:[...o],stickyStartStates:[...e],stickyEndStates:[...t]}),QM({earlyRead:()=>{C=this._getCellWidths(r,i),je=this._getStickyStartColumnPositions(C,e),Ve=this._getStickyEndColumnPositions(C,t)},write:()=>{for(let O of o)for(let x=0;x<l;x++){let Ue=O.children[x];e[x]&&this._addStickyStyle(Ue,m,je[x],x===_),t[x]&&this._addStickyStyle(Ue,p,Ve[x],x===w)}this._positionListener&&C.some(O=>!!O)&&(this._positionListener.stickyColumnsUpdated({sizes:_===-1?[]:C.slice(0,_+1).map((O,x)=>e[x]?O:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:w===-1?[]:C.slice(w).map((O,x)=>t[x+w]?O:null).reverse()}))}},{injector:this._tableInjector})}stickRows(o,e,t){if(!this._isBrowser)return;let i=t===`bottom`?o.slice().reverse():o,a=t===`bottom`?e.slice().reverse():e,r=[],l=[],d=[];QM({earlyRead:()=>{for(let m=0,p=0;m<i.length;m++){if(!a[m])continue;r[m]=p;let _=i[m];d[m]=this._isNativeHtmlTable?Array.from(_.children):[_];let w=this._retrieveElementSize(_).height;p+=w,l[m]=w}},write:()=>{let m=a.lastIndexOf(!0);for(let p=0;p<i.length;p++){if(!a[p])continue;let _=r[p],w=p===m;for(let C of d[p])this._addStickyStyle(C,t,_,w)}t===`top`?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:r,elements:d}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:r,elements:d})}},{injector:this._tableInjector})}updateStickyFooterContainer(o,e){this._isNativeHtmlTable&&QM({write:()=>{let t=o.querySelector(`tfoot`);t&&(e.some(i=>!i)?this._removeStickyStyle(t,[`bottom`]):this._addStickyStyle(t,`bottom`,0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(o,e){if(!o.classList.contains(this._stickCellCss))return;for(let i of e)o.style[i]=``,o.classList.remove(this._borderCellCss[i]);Bt.some(i=>e.indexOf(i)===-1&&o.style[i])?o.style.zIndex=this._getCalculatedZIndex(o):(o.style.zIndex=``,this._needsPositionStickyOnElement&&(o.style.position=``),o.classList.remove(this._stickCellCss))}_addStickyStyle(o,e,t,i){o.classList.add(this._stickCellCss),i&&o.classList.add(this._borderCellCss[e]),o.style[e]=`${t}px`,o.style.zIndex=this._getCalculatedZIndex(o),this._needsPositionStickyOnElement&&(o.style.cssText+=`position: -webkit-sticky; position: sticky; `)}_getCalculatedZIndex(o){let e={top:100,bottom:10,left:1,right:1},t=0;for(let i of Bt)o.style[i]&&(t+=e[i]);return t?`${t}`:``}_getCellWidths(o,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],i=o.children;for(let a=0;a<i.length;a++){let r=i[a];t.push(this._retrieveElementSize(r).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(o,e){let t=[],i=0;for(let a=0;a<o.length;a++)e[a]&&(t[a]=i,i+=o[a]);return t}_getStickyEndColumnPositions(o,e){let t=[],i=0;for(let a=o.length;a>0;a--)e[a]&&(t[a]=i,i+=o[a]);return t}_retrieveElementSize(o){let e=this._elemSizeCache.get(o);if(e)return e;let t=o.getBoundingClientRect(),i={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(o,i),this._resizeObserver.observe(o,{box:`border-box`})),i}_updateStickyColumnReplayQueue(o){this._removeFromStickyColumnReplayQueue(o.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(o)}_removeFromStickyColumnReplayQueue(o){let e=new Set(o);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(i=>!e.has(i));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(o){let e=!1;for(let t of o){let i=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};i.width!==this._elemSizeCache.get(t.target)?.width&&ii(t.target)&&(e=!0),this._elemSizeCache.set(t.target,i)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function ii(n){return[`cdk-cell`,`cdk-header-cell`,`cdk-footer-cell`].some(o=>n.classList.contains(o))}var he=new E(`STICKY_POSITIONING_LISTENER`);var ze=(()=>{class n{viewContainer=m(Zi);elementRef=m(Gn);constructor(){let e=m(P);e._rowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=xl({type:n,selectors:[[``,`rowOutlet`,``]]})}return n})();var Ae=(()=>{class n{viewContainer=m(Zi);elementRef=m(Gn);constructor(){let e=m(P);e._headerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=xl({type:n,selectors:[[``,`headerRowOutlet`,``]]})}return n})();var Be=(()=>{class n{viewContainer=m(Zi);elementRef=m(Gn);constructor(){let e=m(P);e._footerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=xl({type:n,selectors:[[``,`footerRowOutlet`,``]]})}return n})();var Le=(()=>{class n{viewContainer=m(Zi);elementRef=m(Gn);constructor(){let e=m(P);e._noDataRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=xl({type:n,selectors:[[``,`noDataRowOutlet`,``]]})}return n})();var He=(()=>{class n{_differs=m(ew);_changeDetectorRef=m(Jk);_elementRef=m(Gn);_dir=m(LV,{optional:!0});_platform=m(y);_viewRepeater;_viewportRuler=m(G);_injector=m(Ie$1);_virtualScrollViewport=m($n,{optional:!0,host:!0});_positionListener=m(he,{optional:!0})||m(he,{optional:!0,skipSelf:!0});_document=m(Q$1);_data;_renderedRange;_onDestroy=new le;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass=`cdk-table-sticky`;needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new le;_footerRowStickyUpdates=new le;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute(`role`);return e===`grid`||e===`treegrid`?`gridcell`:`cell`}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new le;_dataStream=new le;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new ht;viewChange=new Ao({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){m(new Fl(`role`),{optional:!0})||this._elementRef.nativeElement.setAttribute(`role`,`table`),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName===`TABLE`,this._dataDiffer=this._differs.find([]).create((t,i)=>this.trackBy?this.trackBy(i.dataIndex,i.data):i)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Ii(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new ge:new ve,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Ye$1(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(i,a,r)=>this._getEmbeddedViewArgs(i.item,r),i=>i.item.data,i=>{i.operation===V.INSERTED&&i.context&&this._renderCellTemplateForItem(i.record.item.rowDef,i.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(i=>{let a=t.get(i.currentIndex);a.context.$implicit=i.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let i=Lt(this._headerRowOutlet,`thead`);i&&(i.style.display=e.length?``:`none`)}let t=this._headerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,[`top`]),this._stickyStyler.stickRows(e,t,`top`),this._headerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let i=Lt(this._footerRowOutlet,`tfoot`);i&&(i.style.display=e.length?``:`none`)}let t=this._footerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,[`bottom`]),this._stickyStyler.stickRows(e,t,`bottom`),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...i],[`left`,`right`]),this._stickyColumnStylesNeedReset=!1),e.forEach((a,r)=>{this._addStickyColumnStyles([a],this._headerRowDefs[r])}),this._rowDefs.forEach(a=>{let r=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===a&&r.push(t[l]);this._addStickyColumnStyles(r,a)}),i.forEach((a,r)=>{this._addStickyColumnStyles([a],this._footerRowDefs[r])}),Array.from(this._columnDefsByName.values()).forEach(a=>a.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),i=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let a=this._renderedRange.start;a<t;a++){let r=this._data[a],l=this._getRenderRowsForData(r,a,i.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let d=0;d<l.length;d++){let m=l[d],p=this._cachedRenderRowsMap.get(m.data);p.has(m.rowDef)?p.get(m.rowDef).push(m):p.set(m.rowDef,[m]),e.push(m)}}return e}_getRenderRowsForData(e,t,i){return this._getRowDefs(e,t).map(r=>{let l=i&&i.has(r)?i.get(r):[];if(l.length){let d=l.shift();return d.dataIndex=t,d}else return{data:e,rowDef:r,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),be(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=be(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=be(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=be(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(r,l)=>{let d=!!l.getColumnsDiff();return r||d},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let i=this._headerRowDefs.reduce(e,!1);i&&this._forceRenderHeaderRows();let a=this._footerRowDefs.reduce(e,!1);return a&&this._forceRenderFooterRows(),t||i||a}_switchDataSource(e){this._data=[],Ye$1(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Ye$1(this.dataSource)?e=this.dataSource.connect(this):qS(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Zt$1(this.dataSource)),this._renderChangeSubscription=tN([e,this.viewChange]).pipe(Ii(this._onDestroy)).subscribe(([t,i])=>{this._data=t||[],this._renderedRange=i,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let i=Array.from(t?.columns||[]).map(l=>{return this._columnDefsByName.get(l)}),a=i.map(l=>l.sticky),r=i.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,a,r,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let i=0;i<e.viewContainer.length;i++){let a=e.viewContainer.get(i);t.push(a.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(a=>!a.when||a.when(t,e));else{let a=this._rowDefs.find(r=>r.when&&r.when(t,e))||this._defaultRowDef;a&&i.push(a)}return i.length,i}_getEmbeddedViewArgs(e,t){let i=e.rowDef,a={$implicit:e.data};return{templateRef:i.template,context:a,index:t}}_renderRow(e,t,i,a={}){let r=e.viewContainer.createEmbeddedView(t.template,a,i);return this._renderCellTemplateForItem(t,a),r}_renderCellTemplateForItem(e,t){for(let i of this._getCellTemplates(e))X.mostRecentCellOutlet&&X.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,i=e.length;t<i;t++){let r=e.get(t).context;r.count=i,r.first=t===0,r.last=t===i-1,r.even=t%2===0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[t].dataIndex,r.renderIndex=t):r.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let i=this._columnDefsByName.get(t);return e.extractCellTemplate(i)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,i)=>t||i.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:`ltr`,t=this._injector;this._stickyStyler=new Ie(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:Zt$1()).pipe(Ii(this._onDestroy)).subscribe(i=>{this._stickyStyler.direction=i,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<`u`?GS:zS;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(dN(0,t),Ii(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(i,a)=>this._measureRangeSize(i,a)}),tN([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Ii(this._onDestroy)).subscribe(([i,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let r=0;r<a.elements.length;r++){let l=a.elements[r];if(l){let d=a.offsets[r],m=i!==0?Math.max(i-d,d):-d;for(let p of l)p.style.top=`${-m}px`}}}),tN([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Ii(this._onDestroy)).subscribe(([i,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let r=0;r<a.elements.length;r++){let l=a.elements[r];if(l)for(let d of l)d.style.bottom=`${i+a.offsets[r]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let i=this._noDataRowOutlet.viewContainer;if(t){let a=i.createEmbeddedView(e.templateRef),r=a.rootNodes[0];if(a.rootNodes.length===1&&r?.nodeType===this._document.ELEMENT_NODE){r.setAttribute(`role`,`row`),r.classList.add(...e._contentClassNames);let l=r.querySelectorAll(e._cellSelector);for(let d=0;d<l.length;d++)l[d].classList.add(...e._cellClassNames)}}else i.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!==`vertical`)return 0;let i=this.viewChange.value,a=this._rowOutlet.viewContainer;e.start<i.start||(e.end,i.end);let r=e.start-i.start,l=e.end-e.start,d,m;for(let w=0;w<l;w++){let C=a.get(w+r);if(C&&C.rootNodes.length){d=m=C.rootNodes[0];break}}for(let w=l-1;w>-1;w--){let C=a.get(w+r);if(C&&C.rootNodes.length){m=C.rootNodes[C.rootNodes.length-1];break}}let p=d?.getBoundingClientRect?.(),_=m?.getBoundingClientRect?.();return p&&_?_.bottom-p.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static ɵfac=function(t){return new(t||n)};static ɵcmp=Ss({type:n,selectors:[[`cdk-table`],[`table`,`cdk-table`,``]],contentQueries:function(t,i,a){if(t&1&&CD(a,xe,5)(a,Q,5)(a,ke,5)(a,fe,5)(a,Fe,5),t&2){let r;Ux(r=Vx())&&(i._noDataRow=r.first),Ux(r=Vx())&&(i._contentColumnDefs=r),Ux(r=Vx())&&(i._contentRowDefs=r),Ux(r=Vx())&&(i._contentHeaderRowDefs=r),Ux(r=Vx())&&(i._contentFooterRowDefs=r)}},hostAttrs:[1,`cdk-table`],hostVars:2,hostBindings:function(t,i){t&2&&kl(`cdk-table-fixed-layout`,i.fixedLayout)},inputs:{trackBy:`trackBy`,dataSource:`dataSource`,multiTemplateDataRows:[2,`multiTemplateDataRows`,`multiTemplateDataRows`,nw],fixedLayout:[2,`fixedLayout`,`fixedLayout`,nw],recycleRows:[2,`recycleRows`,`recycleRows`,nw]},outputs:{contentChanged:`contentChanged`},exportAs:[`cdkTable`],features:[HD([{provide:P,useExisting:n},{provide:he,useValue:null}])],ngContentSelectors:Xt,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,i){t&1&&(Np(Zt),Ap(0),Ap(1,1),_x(2,Jt,1,0),_x(3,ei,7,0)(4,ti,4,0)),t&2&&(IR(2),Ex(i._isServer?2:-1),IR(),Ex(i._isNativeHtmlTable?3:4))},dependencies:[Ae,ze,Le,Be],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return n})();function be(n,o){return n.concat(Array.from(o))}function Lt(n,o){let e=o.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let i=t.nodeType===1?t.nodeName:null;if(i===e)return t;if(i===`TABLE`)break;t=t.parentNode}return null}var Ut=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Yn({type:n});static ɵinj=nn({imports:[Ft]})}return n})();var ni=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var oi=[`caption`,`colgroup, col`,`*`];function ai(n,o){n&1&&Ap(0,2)}function ri(n,o){n&1&&(vl(0,`thead`,0),_D(1,1),wp(),vl(2,`tbody`,2),_D(3,3)(4,4),wp(),vl(5,`tfoot`,0),_D(6,5),wp())}function si(n,o){n&1&&_D(0,1)(1,3)(2,4)(3,5)}var cn=(()=>{class n extends He{stickyCssClass=`mat-mdc-table-sticky`;needsPositionStickyOnElement=!1;static ɵfac=(()=>{let e;return function(i){return(e||(e=xE(n)))(i||n)}})();static ɵcmp=Ss({type:n,selectors:[[`mat-table`],[`table`,`mat-table`,``]],hostAttrs:[1,`mat-mdc-table`,`mdc-data-table__table`],hostVars:2,hostBindings:function(t,i){t&2&&kl(`mat-table-fixed-layout`,i.fixedLayout)},exportAs:[`matTable`],features:[HD([{provide:He,useExisting:n},{provide:P,useExisting:n},{provide:he,useValue:null}]),cD],ngContentSelectors:oi,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`role`,`rowgroup`,1,`mdc-data-table__content`],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,i){t&1&&(Np(ni),Ap(0),Ap(1,1),_x(2,ai,1,0),_x(3,ri,7,0)(4,si,4,0)),t&2&&(IR(2),Ex(i._isServer?2:-1),IR(),Ex(i._isNativeHtmlTable?3:4))},dependencies:[Ae,ze,Le,Be],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})}return n})();var un=(()=>{class n extends Se{static ɵfac=(()=>{let e;return function(i){return(e||(e=xE(n)))(i||n)}})();static ɵdir=xl({type:n,selectors:[[``,`matCellDef`,``]],features:[HD([{provide:Se,useExisting:n}]),cD]})}return n})();var mn=(()=>{class n extends Re{static ɵfac=(()=>{let e;return function(i){return(e||(e=xE(n)))(i||n)}})();static ɵdir=xl({type:n,selectors:[[``,`matHeaderCellDef`,``]],features:[HD([{provide:Re,useExisting:n}]),cD]})}return n})();var hn=(()=>{class n extends Q{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=xE(n)))(i||n)}})();static ɵdir=xl({type:n,selectors:[[``,`matColumnDef`,``]],inputs:{name:[0,`matColumnDef`,`name`]},features:[HD([{provide:Q,useExisting:n}]),cD]})}return n})();var fn=(()=>{class n extends jt{static ɵfac=(()=>{let e;return function(i){return(e||(e=xE(n)))(i||n)}})();static ɵdir=xl({type:n,selectors:[[`mat-header-cell`],[`th`,`mat-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`mat-mdc-header-cell`,`mdc-data-table__header-cell`],features:[cD]})}return n})();var pn=(()=>{class n extends Vt{static ɵfac=(()=>{let e;return function(i){return(e||(e=xE(n)))(i||n)}})();static ɵdir=xl({type:n,selectors:[[`mat-cell`],[`td`,`mat-cell`,``]],hostAttrs:[1,`mat-mdc-cell`,`mdc-data-table__cell`],features:[cD]})}return n})();var gn=(()=>{class n extends fe{static ɵfac=(()=>{let e;return function(i){return(e||(e=xE(n)))(i||n)}})();static ɵdir=xl({type:n,selectors:[[``,`matHeaderRowDef`,``]],inputs:{columns:[0,`matHeaderRowDef`,`columns`],sticky:[2,`matHeaderRowDefSticky`,`sticky`,nw]},features:[HD([{provide:fe,useExisting:n}]),cD]})}return n})();var _n=(()=>{class n extends ke{static ɵfac=(()=>{let e;return function(i){return(e||(e=xE(n)))(i||n)}})();static ɵdir=xl({type:n,selectors:[[``,`matRowDef`,``]],inputs:{columns:[0,`matRowDefColumns`,`columns`],when:[0,`matRowDefWhen`,`when`]},features:[HD([{provide:ke,useExisting:n}]),cD]})}return n})();var yn=(()=>{class n extends Ee{static ɵfac=(()=>{let e;return function(i){return(e||(e=xE(n)))(i||n)}})();static ɵcmp=Ss({type:n,selectors:[[`mat-header-row`],[`tr`,`mat-header-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-header-row`,`mdc-data-table__header-row`],exportAs:[`matHeaderRow`],features:[HD([{provide:Ee,useExisting:n}]),cD],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&_D(0,0)},dependencies:[X],encapsulation:2,changeDetection:1})}return n})();var wn=(()=>{class n extends Pe{static ɵfac=(()=>{let e;return function(i){return(e||(e=xE(n)))(i||n)}})();static ɵcmp=Ss({type:n,selectors:[[`mat-row`],[`tr`,`mat-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-row`,`mdc-data-table__row`],exportAs:[`matRow`],features:[HD([{provide:Pe,useExisting:n}]),cD],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&_D(0,0)},dependencies:[X],encapsulation:2,changeDetection:1})}return n})();var Cn=(()=>{class n extends xe{_cellSelector=`td, mat-cell, [mat-cell], .mat-cell`;constructor(){super(),this._contentClassNames.push(`mat-mdc-no-data-row`,`mat-mdc-row`,`mdc-data-table__row`),this._cellClassNames.push(`mat-mdc-cell`,`mdc-data-table__cell`,`mat-no-data-cell`)}static ɵfac=function(t){return new(t||n)};static ɵdir=xl({type:n,selectors:[[`ng-template`,`matNoDataRow`,``]],features:[HD([{provide:xe,useExisting:n}]),cD]})}return n})();var bn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Yn({type:n});static ɵinj=nn({imports:[Ut,_S]})}return n})();var li=9007199254740991;var $t=class extends It{_data;_renderData=new Ao([]);_filter=new Ao(``);_internalPageChanges=new le;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(o){o=Array.isArray(o)?o:[],this._data.next(o),this._renderChangesSubscription||this._filterData(o)}get filter(){return this._filter.value}set filter(o){this._filter.next(o),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(o){this._sort=o,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(o){this._paginator=o,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(o,e)=>{let t=o[e];if(ui$1(t)){let i=Number(t);return i<li?i:t}return t};sortData=(o,e)=>{let t=e.active,i=e.direction;return!t||i==``?o:o.sort((a,r)=>{let l=this.sortingDataAccessor(a,t),d=this.sortingDataAccessor(r,t),m=typeof l,p=typeof d;m!==p&&(m===`number`&&(l+=``),p===`number`&&(d+=``));let _=0;return l!=null&&d!=null?l>d?_=1:l<d&&(_=-1):l!=null?_=1:d!=null&&(_=-1),_*(i==`asc`?1:-1)})};filterPredicate=(o,e)=>{let t=e.trim().toLowerCase();return Object.values(o).some(i=>`${i}`.toLowerCase().includes(t))};constructor(o=[]){super(),this._data=new Ao(o),this._updateChangeSubscription()}_updateChangeSubscription(){let o=this._sort?sc(this._sort.sortChange,this._sort.initialized):Zt$1(null),e=this._paginator?sc(this._paginator.page,this._internalPageChanges,this._paginator.initialized):Zt$1(null),t=this._data,r=tN([tN([tN([t,this._filter]).pipe(he$1(([l])=>this._filterData(l))),o]).pipe(he$1(([l])=>this._orderData(l))),e]).pipe(he$1(([l])=>this._pageData(l)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=r.subscribe(l=>this._renderData.next(l))}_filterData(o){return this.filteredData=this.filter==null||this.filter===``?o:o.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(o){return this.sort?this.sortData(o.slice(),this.sort):o}_pageData(o){if(!this.paginator)return o;let e=this.paginator.pageIndex*this.paginator.pageSize;return o.slice(e,e+this.paginator.pageSize)}_updatePaginator(o){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=o,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,i=Math.min(e.pageIndex,t);i!==e.pageIndex&&(e.pageIndex=i,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var di=[`*`,[[``,`matSortHeaderIcon`,``]]];var ci=[`*`,`[matSortHeaderIcon]`];function ui(n,o){n&1&&(I_(),Cp(0,`svg`,3),yD(1,`path`,4),Tp())}function mi(n,o){n&1&&(Cp(0,`div`,2),Ap(1,1,null,ui,2,0),Tp())}var Qt=new E(`MAT_SORT_DEFAULT_OPTIONS`);var hi=(()=>{class n{_defaultOptions;_initializedStream=new mr(1);sortables=new Map;_stateChanges=new le;active;start=`asc`;get direction(){return this._direction}set direction(e){this._direction=e}_direction=``;disableClear;disabled=!1;sortChange=new ht;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return``;let t=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,i=fi(e.start||this.start,t),a=i.indexOf(this.direction)+1;return a>=i.length&&(a=0),i[a]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static ɵfac=function(t){return new(t||n)(rt(Qt,8))};static ɵdir=xl({type:n,selectors:[[``,`matSort`,``]],hostAttrs:[1,`mat-sort`],inputs:{active:[0,`matSortActive`,`active`],start:[0,`matSortStart`,`start`],direction:[0,`matSortDirection`,`direction`],disableClear:[2,`matSortDisableClear`,`disableClear`,nw],disabled:[2,`matSortDisabled`,`disabled`,nw]},outputs:{sortChange:`matSortChange`},exportAs:[`matSort`],features:[Ph]})}return n})();function fi(n,o){let e=[`asc`,`desc`];return n==`desc`&&e.reverse(),o||e.push(``),e}var Vn=(()=>{class n{_sort=m(hi,{optional:!0});_columnDef=m(Q,{optional:!0});_changeDetectorRef=m(Jk);_focusMonitor=m(ue);_elementRef=m(Gn);_ariaDescriber=m(Ls,{optional:!0});_renderChanges;_animationsDisabled=ht$1();_recentlyCleared=nt(null);_sortButton;id;arrowPosition=`after`;start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription=`Sort`;disableClear;constructor(){m(MV).load(Gi);let e=m(Qt,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=sc(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(`.mat-sort-header-container`),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),t=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?t:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction===`asc`||this._sort.direction===`desc`)}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction==`asc`?`ascending`:`descending`:`none`}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static ɵfac=function(t){return new(t||n)};static ɵcmp=Ss({type:n,selectors:[[``,`mat-sort-header`,``]],hostAttrs:[1,`mat-sort-header`],hostVars:3,hostBindings:function(t,i){t&1&&DD(`click`,function(){return i._toggleOnInteraction()})(`keydown`,function(r){return i._handleKeydown(r)})(`mouseleave`,function(){return i._recentlyCleared.set(null)}),t&2&&(As(`aria-sort`,i._getAriaSortAttribute()),kl(`mat-sort-header-disabled`,i._isDisabled()))},inputs:{id:[0,`mat-sort-header`,`id`],arrowPosition:`arrowPosition`,start:`start`,disabled:[2,`disabled`,`disabled`,nw],sortActionDescription:`sortActionDescription`,disableClear:[2,`disableClear`,`disableClear`,nw]},exportAs:[`matSortHeader`],ngContentSelectors:ci,decls:4,vars:17,consts:[[1,`mat-sort-header-container`,`mat-focus-indicator`],[1,`mat-sort-header-content`],[1,`mat-sort-header-arrow`],[`viewBox`,`0 -960 960 960`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z`]],template:function(t,i){t&1&&(Np(di),Cp(0,`div`,0)(1,`div`,1),Ap(2),Tp(),_x(3,mi,3,0,`div`,2),Tp()),t&2&&(kl(`mat-sort-header-sorted`,i._isSorted())(`mat-sort-header-position-before`,i.arrowPosition===`before`)(`mat-sort-header-descending`,i._sort.direction===`desc`)(`mat-sort-header-ascending`,i._sort.direction===`asc`)(`mat-sort-header-recently-cleared-ascending`,i._recentlyCleared()===`asc`)(`mat-sort-header-recently-cleared-descending`,i._recentlyCleared()===`desc`)(`mat-sort-header-animations-disabled`,i._animationsDisabled),As(`tabindex`,i._isDisabled()?null:0)(`role`,i._isDisabled()?null:`button`),IR(3),Ex(i._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: var(--%NS%mat-focus-indicator-fallback-border-style, solid) 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 4px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--%NS%mat-sort-arrow-color, var(--%NS%mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2})}return n})();var Un=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Yn({type:n});static ɵinj=nn({imports:[_S]})}return n})();function pi(n,o){if(n&1&&(vl(0,`mat-option`,17),lk(1),wp()),n&2){let e=o.$implicit;gD(`value`,e),IR(),Rp(` `,e,` `)}}function gi(n,o){if(n&1){let e=Ax();vl(0,`mat-form-field`,14)(1,`mat-select`,16,0),DD(`selectionChange`,function(i){c_(e);return l_(Lx(2)._changePageSize(i.value))}),Dx(3,pi,2,2,`mat-option`,17,Ix),wp(),vl(5,`div`,18),DD(`click`,function(){c_(e);return l_(Hx(2).open())}),wp()()}if(n&2){let e=Lx(2);gD(`appearance`,e._formFieldAppearance)(`color`,e.color),IR(),gD(`value`,e.pageSize)(`disabled`,e.disabled),pD(`aria-labelledby`,e._pageSizeLabelId),gD(`panelClass`,e.selectConfig.panelClass||``)(`disableOptionCentering`,e.selectConfig.disableOptionCentering),IR(2),wx(e._displayedPageSizeOptions)}}function _i(n,o){if(n&1&&(vl(0,`div`,15),lk(1),wp()),n&2){let e=Lx(2);IR(),FD(e.pageSize)}}function yi(n,o){if(n&1&&(vl(0,`div`,3)(1,`div`,13),lk(2),wp(),_x(3,gi,6,7,`mat-form-field`,14),_x(4,_i,2,1,`div`,15),wp()),n&2){let e=Lx();IR(),As(`id`,e._pageSizeLabelId),IR(),Rp(` `,e._intl.itemsPerPageLabel,` `),IR(),Ex(e._displayedPageSizeOptions.length>1?3:-1),IR(),Ex(e._displayedPageSizeOptions.length<=1?4:-1)}}function wi(n,o){if(n&1){let e=Ax();vl(0,`button`,19),DD(`click`,function(){c_(e);let i=Lx();return l_(i._buttonClicked(0,i._previousButtonsDisabled()))}),I_(),vl(1,`svg`,8),mD(2,`path`,20),wp()()}if(n&2){let e=Lx();gD(`matTooltip`,e._intl.firstPageLabel)(`matTooltipDisabled`,e._previousButtonsDisabled())(`disabled`,e._previousButtonsDisabled())(`tabindex`,e._previousButtonsDisabled()?-1:null),As(`aria-label`,e._intl.firstPageLabel)}}function Ci(n,o){if(n&1){let e=Ax();vl(0,`button`,21),DD(`click`,function(){c_(e);let i=Lx();return l_(i._buttonClicked(i.getNumberOfPages()-1,i._nextButtonsDisabled()))}),I_(),vl(1,`svg`,8),mD(2,`path`,22),wp()()}if(n&2){let e=Lx();gD(`matTooltip`,e._intl.lastPageLabel)(`matTooltipDisabled`,e._nextButtonsDisabled())(`disabled`,e._nextButtonsDisabled())(`tabindex`,e._nextButtonsDisabled()?-1:null),As(`aria-label`,e._intl.lastPageLabel)}}var bi=(()=>{class n{changes=new le;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(e,t,i)=>{if(i==0||t==0)return`0 of ${i}`;i=Math.max(i,0);let a=e*t,r=a<i?Math.min(a+t,i):a+t;return`${a+1} \u2013 ${r} of ${i}`};static ɵfac=function(t){return new(t||n)};static ɵprov=Pe$1({token:n,factory:n.ɵfac})}return n})();var Di=50;var vi=new E(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var Si=(()=>{class n{_intl=m(bi);_changeDetectorRef=m(Jk);_formFieldAppearance;_pageSizeLabelId=m(Ye).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new mr(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>i9(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new ht;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=m(vi,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:i,pageSizeOptions:a,hidePageSize:r,showFirstLastButtons:l}=t;i!=null&&(this._pageSize=i),a!=null&&(this._pageSizeOptions=a),r!=null&&(this.hidePageSize=r),l!=null&&(this.showFirstLastButtons=l)}this._formFieldAppearance=t?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Di),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static ɵfac=function(t){return new(t||n)};static ɵcmp=Ss({type:n,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,i9],length:[2,`length`,`length`,i9],pageSize:[2,`pageSize`,`pageSize`,i9],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,nw],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,nw],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,nw]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(t,i){t&1&&(vl(0,`div`,1)(1,`div`,2),_x(2,yi,5,4,`div`,3),vl(3,`div`,4)(4,`div`,5),lk(5),wp(),_x(6,wi,3,5,`button`,6),vl(7,`button`,7),DD(`click`,function(){return i._buttonClicked(i.pageIndex-1,i._previousButtonsDisabled())}),I_(),vl(8,`svg`,8),mD(9,`path`,9),wp()(),D_(),vl(10,`button`,10),DD(`click`,function(){return i._buttonClicked(i.pageIndex+1,i._nextButtonsDisabled())}),I_(),vl(11,`svg`,8),mD(12,`path`,11),wp()(),_x(13,Ci,3,5,`button`,12),wp()()()),t&2&&(IR(2),Ex(i.hidePageSize?-1:2),IR(3),Rp(` `,i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length),` `),IR(),Ex(i.showFirstLastButtons?6:-1),IR(),gD(`matTooltip`,i._intl.previousPageLabel)(`matTooltipDisabled`,i._previousButtonsDisabled())(`disabled`,i._previousButtonsDisabled())(`tabindex`,i._previousButtonsDisabled()?-1:null),As(`aria-label`,i._intl.previousPageLabel),IR(3),gD(`matTooltip`,i._intl.nextPageLabel)(`matTooltipDisabled`,i._nextButtonsDisabled())(`disabled`,i._nextButtonsDisabled())(`tabindex`,i._nextButtonsDisabled()?-1:null),As(`aria-label`,i._intl.nextPageLabel),IR(3),Ex(i.showFirstLastButtons?13:-1))},dependencies:[nt$1,Ui,X$1,_o,mt],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-paginator-container-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-paginator-container-background-color, var(--%NS%mat-sys-surface));
  font-family: var(--%NS%mat-paginator-container-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-paginator-container-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-paginator-container-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-paginator-container-text-weight, var(--%NS%mat-sys-body-small-weight));
  letter-spacing: var(--%NS%mat-paginator-container-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  --%NS%mat-form-field-container-height: var(--%NS%mat-paginator-form-field-container-height, 40px);
  --%NS%mat-form-field-container-vertical-padding: var(--%NS%mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--%NS%mat-paginator-select-trigger-text-size, var(--%NS%mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--%NS%mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--%NS%mat-paginator-enabled-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--%NS%mat-paginator-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--%NS%mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
  height: var(--%NS%mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})}return n})();var so=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Yn({type:n});static ɵinj=nn({imports:[Yc,Xi,Yt,Si]})}return n})();function Ri(n,o){if(n&1){let e=Ax();vl(0,`button`,5),DD(`click`,function(){c_(e);return l_(Lx().cancel())}),lk(1),wp()}if(n&2){let e=Lx();IR(),FD(e.data.cancelLabel||`Cancelar`)}}var Wt=class n{dialogRef=m(B);data=m(Nt);confirm(){this.dialogRef.close(!0)}cancel(){this.dialogRef.close(!1)}static ɵfac=function(e){return new(e||n)};static ɵcmp=Ss({type:n,selectors:[[`app-confirm-dialog`]],decls:12,vars:8,consts:[[1,`confirm-icon`],[`mat-dialog-title`,``],[`align`,`end`],[`mat-button`,``,`type`,`button`],[`mat-flat-button`,``,`type`,`button`,3,`click`,`color`],[`mat-button`,``,`type`,`button`,3,`click`]],template:function(e,t){e&1&&(vl(0,`div`,0)(1,`mat-icon`),lk(2),wp()(),vl(3,`h2`,1),lk(4),wp(),vl(5,`mat-dialog-content`)(6,`p`),lk(7),wp()(),vl(8,`mat-dialog-actions`,2),_x(9,Ri,2,1,`button`,3),vl(10,`button`,4),DD(`click`,function(){return t.confirm()}),lk(11),wp()()),e&2&&(kl(`danger`,t.data.danger),IR(2),FD(t.data.icon||`help`),IR(2),FD(t.data.title),IR(3),FD(t.data.message),IR(2),Ex(t.data.hideCancel?-1:9),IR(),gD(`color`,t.data.danger?`warn`:`primary`),IR(),Rp(` `,t.data.confirmLabel||`Aceptar`,` `))},dependencies:[zn,Pn,Bn,Mn,Yc,Zc,VX,UX],styles:[`[_nghost-%COMP%]{display:block;text-align:center;padding:.5rem .5rem 0}.confirm-icon[_ngcontent-%COMP%]{width:56px;height:56px;margin:0 auto .75rem;border-radius:50%;display:flex;align-items:center;justify-content:center;background:color-mix(in srgb,var(--%NS%gold-base) 16%,transparent);color:var(--%NS%gold-light)}.confirm-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:28px;width:28px;height:28px}.confirm-icon.danger[_ngcontent-%COMP%]{background:color-mix(in srgb,#ff5252 16%,transparent);color:#ff8a80}h2[mat-dialog-title][_ngcontent-%COMP%]{color:var(--%NS%gold-light);font-size:1.15rem}mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:.9rem;opacity:.85;line-height:1.5}mat-dialog-actions[_ngcontent-%COMP%]{padding-top:.5rem}`]})};export{un as _,Vn as a,bn as c,gn as d,hi as f,so as g,pn as h,Un as i,cn as l,mn as m,Cn as n,Wt as o,hn as p,Si as r,_n as s,$t as t,fn as u,wn as v,yn as y};