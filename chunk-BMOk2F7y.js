import{$r as vD,$t as Ux,Ar as pe,At as Pt,Er as ok,Et as PN,G as J,H as Ie,I as Hl,Jr as ue,K as JD,Kt as T9,Ln as eo,Lr as sB,N as HS,Nn as eN,Nr as pt,On as dc,P as Hh,Pt as Qx,Qt as Up,R as Hx,Rn as er,Rr as sk,Rt as Rp,Tn as ck,Tr as nk,Tt as PD,Ut as SD,W as Iw,Wn as gN,Wr as tr,Wt as Si$1,Xn as hn,_i as y_,a as $x,ai as wO,c as Ak,ci as wr,cn as Wx,di as xD,dn as Xn,dr as ko,ei as vR,en as VE,et as Kp,fn as Xt,fr as kp,ft as M_,g as CN,gr as m,h as CD,ht as N0,it as Le$1,j as Fp,jn as eB,k as Fl,kr as pN,ln as XD,lt as M0,mi as xp,nr as iw,o as AD,oi as we$1,pn as YD,pr as ks,qt as TD,r as $R,rn as Vx,s as A_,si as wl,st as Lp,ti as v_,tr as it,vr as mN,wt as P,xn as bD,xt as Ok,z as I,zt as Rs}from"./chunk-DjYvpiiN.js";import{$ as mt,D as Qc,G as ce,S as Mr,U as Zo,Y as js,b as Ln,c as Dr,ft as v,g as Jc,h as Ho,nt as pi$1,p as Go,r as $i$1,ut as ti,v as Ke$1,w as No,z as Wo}from"./chunk-B78S38cu.js";import{S as pe$1,T as ti$1,_ as hn$1,a as G$1,d as W,g as fe,j as zi$1,r as Bt,v as ii}from"./chunk-CkUxowh3.js";import{b as S,c as u,s as L,w as n}from"./main-R3YSW6TI.js";import{t as f}from"./chunk-67ViqxFI.js";import{t as Mt}from"./chunk-CkPnNFMl.js";import{a as Wt,c as ee,i as Qt,n as Ht,o as Xe$1,r as O$1,t as Gt}from"./chunk-DmtNQrEa.js";import{i as Tn,m as nt,p as me,r as Rn}from"./chunk-FItP0Xb-.js";import{a as Si$2,i as Oi$1,n as G$2,o as at,r as Ni$1,t as Di}from"./chunk-CidroDxM.js";var Si=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var Ri=[`caption`,`colgroup, col`,`*`];function ki(n,a){n&1&&Fp(0,2)}function xi(n,a){n&1&&(wl(0,`thead`,0),AD(1,1),Rp(),wl(2,`tbody`,0),AD(3,2)(4,3),Rp(),wl(5,`tfoot`,0),AD(6,4),Rp())}function Mi(n,a){n&1&&AD(0,1)(1,2)(2,3)(3,4)}var O=new I(`CDK_TABLE`);var ze=(()=>{class n{template=m(Xn);static ɵfac=function(t){return new(t||n)};static ɵdir=eo({type:n,selectors:[[``,`cdkCellDef`,``]]})}return n})();var Ae=(()=>{class n{template=m(Xn);static ɵfac=function(t){return new(t||n)};static ɵdir=eo({type:n,selectors:[[``,`cdkHeaderCellDef`,``]]})}return n})();var ui=(()=>{class n{template=m(Xn);static ɵfac=function(t){return new(t||n)};static ɵdir=eo({type:n,selectors:[[``,`cdkFooterCellDef`,``]]})}return n})();var U=(()=>{class n{_table=m(O,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,`-`),this._updateColumnCssClassName())}static ɵfac=function(t){return new(t||n)};static ɵdir=eo({type:n,selectors:[[``,`cdkColumnDef`,``]],contentQueries:function(t,i,o){if(t&1&&PD(o,ze,5)(o,Ae,5)(o,ui,5),t&2){let r;ok(r=sk())&&(i.cell=r.first),ok(r=sk())&&(i.headerCell=r.first),ok(r=sk())&&(i.footerCell=r.first)}},inputs:{name:[0,`cdkColumnDef`,`name`],sticky:[2,`sticky`,`sticky`,Iw],stickyEnd:[2,`stickyEnd`,`stickyEnd`,Iw]}})}return n})();var Oe=class{constructor(a,e){e.nativeElement.classList.add(...a._columnCssClassName)}};var fi=(()=>{class n extends Oe{constructor(){super(m(U),m(er))}static ɵfac=function(t){return new(t||n)};static ɵdir=eo({type:n,selectors:[[`cdk-header-cell`],[`th`,`cdk-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`cdk-header-cell`],features:[vD]})}return n})();var hi=(()=>{class n extends Oe{constructor(){let e=m(U),t=m(er);super(e,t);let i=e._table?._getCellRole();i&&t.nativeElement.setAttribute(`role`,i)}static ɵfac=function(t){return new(t||n)};static ɵdir=eo({type:n,selectors:[[`cdk-cell`],[`td`,`cdk-cell`,``]],hostAttrs:[1,`cdk-cell`],features:[vD]})}return n})();var Qe=(()=>{class n{template=m(Xn);_differs=m(Kp);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof ve?e.headerCell.template:this instanceof $e?e.footerCell.template:e.cell.template}static ɵfac=function(t){return new(t||n)};static ɵdir=eo({type:n,features:[Hh]})}return n})();var ve=(()=>{class n extends Qe{_table=m(O,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(i){return(e||(e=VE(n)))(i||n)}})();static ɵdir=eo({type:n,selectors:[[``,`cdkHeaderRowDef`,``]],inputs:{columns:[0,`cdkHeaderRowDef`,`columns`],sticky:[2,`cdkHeaderRowDefSticky`,`sticky`,Iw]},features:[vD,Hh]})}return n})();var $e=(()=>{class n extends Qe{_table=m(O,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(i){return(e||(e=VE(n)))(i||n)}})();static ɵdir=eo({type:n,selectors:[[``,`cdkFooterRowDef`,``]],inputs:{columns:[0,`cdkFooterRowDef`,`columns`],sticky:[2,`cdkFooterRowDefSticky`,`sticky`,Iw]},features:[vD,Hh]})}return n})();var Be=(()=>{class n extends Qe{_table=m(O,{optional:!0});when;static ɵfac=(()=>{let e;return function(i){return(e||(e=VE(n)))(i||n)}})();static ɵdir=eo({type:n,selectors:[[``,`cdkRowDef`,``]],inputs:{columns:[0,`cdkRowDefColumns`,`columns`],when:[0,`cdkRowDefWhen`,`when`]},features:[vD]})}return n})();var G=(()=>{class n{_viewContainer=m(tr);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static ɵfac=function(t){return new(t||n)};static ɵdir=eo({type:n,selectors:[[``,`cdkCellOutlet`,``]]})}return n})();var qe=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=Rs({type:n,selectors:[[`cdk-header-row`],[`tr`,`cdk-header-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-header-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&AD(0,0)},dependencies:[G],encapsulation:2,changeDetection:1})}return n})();var Ge=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=Rs({type:n,selectors:[[`cdk-row`],[`tr`,`cdk-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&AD(0,0)},dependencies:[G],encapsulation:2,changeDetection:1})}return n})();var Le=(()=>{class n{templateRef=m(Xn);_contentClassNames=[`cdk-no-data-row`,`cdk-row`];_cellClassNames=[`cdk-cell`,`cdk-no-data-cell`];_cellSelector=`td, cdk-cell, [cdk-cell], .cdk-cell`;static ɵfac=function(t){return new(t||n)};static ɵdir=eo({type:n,selectors:[[`ng-template`,`cdkNoDataRow`,``]]})}return n})();var ci=[`top`,`bottom`,`left`,`right`];var We=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(a=>this._updateCachedSizes(a)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(a,e,t=!0,i=!0,o,r,l){this._isNativeHtmlTable=a,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=i,this.direction=o,this._positionListener=r,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(a,e){(e.includes(`left`)||e.includes(`right`))&&this._removeFromStickyColumnReplayQueue(a);let t=[];for(let i of a)i.nodeType===i.ELEMENT_NODE&&t.push(i,...Array.from(i.children));vR({write:()=>{for(let i of t)this._removeStickyStyle(i,e)}},{injector:this._tableInjector})}updateStickyColumns(a,e,t,i=!0,o=!0){if(!a.length||!this._isBrowser||!(e.some(I=>I)||t.some(I=>I))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let r=a[0],l=r.children.length,m=this.direction===`rtl`,f=m?`right`:`left`,p=m?`left`:`right`,_=e.lastIndexOf(!0),C=t.indexOf(!0),v,et,tt;o&&this._updateStickyColumnReplayQueue({rows:[...a],stickyStartStates:[...e],stickyEndStates:[...t]}),vR({earlyRead:()=>{v=this._getCellWidths(r,i),et=this._getStickyStartColumnPositions(v,e),tt=this._getStickyEndColumnPositions(v,t)},write:()=>{for(let I of a)for(let M=0;M<l;M++){let it=I.children[M];e[M]&&this._addStickyStyle(it,f,et[M],M===_),t[M]&&this._addStickyStyle(it,p,tt[M],M===C)}this._positionListener&&v.some(I=>!!I)&&(this._positionListener.stickyColumnsUpdated({sizes:_===-1?[]:v.slice(0,_+1).map((I,M)=>e[M]?I:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:C===-1?[]:v.slice(C).map((I,M)=>t[M+C]?I:null).reverse()}))}},{injector:this._tableInjector})}stickRows(a,e,t){if(!this._isBrowser)return;let i=t===`bottom`?a.slice().reverse():a,o=t===`bottom`?e.slice().reverse():e,r=[],l=[],m=[];vR({earlyRead:()=>{for(let f=0,p=0;f<i.length;f++){if(!o[f])continue;r[f]=p;let _=i[f];m[f]=this._isNativeHtmlTable?Array.from(_.children):[_];let C=this._retrieveElementSize(_).height;p+=C,l[f]=C}},write:()=>{let f=o.lastIndexOf(!0);for(let p=0;p<i.length;p++){if(!o[p])continue;let _=r[p],C=p===f;for(let v of m[p])this._addStickyStyle(v,t,_,C)}t===`top`?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:r,elements:m}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:r,elements:m})}},{injector:this._tableInjector})}updateStickyFooterContainer(a,e){this._isNativeHtmlTable&&vR({write:()=>{let t=a.querySelector(`tfoot`);t&&(e.some(i=>!i)?this._removeStickyStyle(t,[`bottom`]):this._addStickyStyle(t,`bottom`,0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(a,e){if(!a.classList.contains(this._stickCellCss))return;for(let i of e)a.style[i]=``,a.classList.remove(this._borderCellCss[i]);ci.some(i=>e.indexOf(i)===-1&&a.style[i])?a.style.zIndex=this._getCalculatedZIndex(a):(a.style.zIndex=``,this._needsPositionStickyOnElement&&(a.style.position=``),a.classList.remove(this._stickCellCss))}_addStickyStyle(a,e,t,i){a.classList.add(this._stickCellCss),i&&a.classList.add(this._borderCellCss[e]),a.style[e]=`${t}px`,a.style.zIndex=this._getCalculatedZIndex(a),this._needsPositionStickyOnElement&&(a.style.cssText+=`position: -webkit-sticky; position: sticky; `)}_getCalculatedZIndex(a){let e={top:100,bottom:10,left:1,right:1},t=0;for(let i of ci)a.style[i]&&(t+=e[i]);return t?`${t}`:``}_getCellWidths(a,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],i=a.children;for(let o=0;o<i.length;o++){let r=i[o];t.push(this._retrieveElementSize(r).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(a,e){let t=[],i=0;for(let o=0;o<a.length;o++)e[o]&&(t[o]=i,i+=a[o]);return t}_getStickyEndColumnPositions(a,e){let t=[],i=0;for(let o=a.length;o>0;o--)e[o]&&(t[o]=i,i+=a[o]);return t}_retrieveElementSize(a){let e=this._elemSizeCache.get(a);if(e)return e;let t=a.getBoundingClientRect(),i={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(a,i),this._resizeObserver.observe(a,{box:`border-box`})),i}_updateStickyColumnReplayQueue(a){this._removeFromStickyColumnReplayQueue(a.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(a)}_removeFromStickyColumnReplayQueue(a){let e=new Set(a);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(i=>!e.has(i));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(a){let e=!1;for(let t of a){let i=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};i.width!==this._elemSizeCache.get(t.target)?.width&&Ti(t.target)&&(e=!0),this._elemSizeCache.set(t.target,i)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Ti(n){return[`cdk-cell`,`cdk-header-cell`,`cdk-footer-cell`].some(a=>n.classList.contains(a))}var we=new I(`STICKY_POSITIONING_LISTENER`);var Ke=(()=>{class n{viewContainer=m(tr);elementRef=m(er);constructor(){let e=m(O);e._rowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=eo({type:n,selectors:[[``,`rowOutlet`,``]]})}return n})();var Ye=(()=>{class n{viewContainer=m(tr);elementRef=m(er);constructor(){let e=m(O);e._headerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=eo({type:n,selectors:[[``,`headerRowOutlet`,``]]})}return n})();var Ze=(()=>{class n{viewContainer=m(tr);elementRef=m(er);constructor(){let e=m(O);e._footerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=eo({type:n,selectors:[[``,`footerRowOutlet`,``]]})}return n})();var Xe=(()=>{class n{viewContainer=m(tr);elementRef=m(er);constructor(){let e=m(O);e._noDataRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=eo({type:n,selectors:[[``,`noDataRowOutlet`,``]]})}return n})();var Je=(()=>{class n{_differs=m(Kp);_changeDetectorRef=m(wO);_elementRef=m(er);_dir=m(sB,{optional:!0});_platform=m(v);_viewRepeater;_viewportRuler=m(W);_injector=m(Ie);_virtualScrollViewport=m(zi$1,{optional:!0,host:!0});_positionListener=m(we,{optional:!0})||m(we,{optional:!0,skipSelf:!0});_document=m(J);_data;_renderedRange;_onDestroy=new ue;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass=`cdk-table-sticky`;needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new ue;_footerRowStickyUpdates=new ue;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute(`role`);return e===`grid`||e===`treegrid`?`gridcell`:`cell`}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new ue;_dataStream=new ue;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new pt;viewChange=new ko({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){m(new Hl(`role`),{optional:!0})||this._elementRef.nativeElement.setAttribute(`role`,`table`),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName===`TABLE`,this._dataDiffer=this._differs.find([]).create((t,i)=>this.trackBy?this.trackBy(i.dataIndex,i.data):i)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Si$1(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new pe$1:new S,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),ii(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(i,o,r)=>this._getEmbeddedViewArgs(i.item,r),i=>i.item.data,i=>{i.operation===G$1.INSERTED&&i.context&&this._renderCellTemplateForItem(i.record.item.rowDef,i.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(i=>{let o=t.get(i.currentIndex);o.context.$implicit=i.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let i=mi(this._headerRowOutlet,`thead`);i&&(i.style.display=e.length?``:`none`)}let t=this._headerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,[`top`]),this._stickyStyler.stickRows(e,t,`top`),this._headerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let i=mi(this._footerRowOutlet,`tfoot`);i&&(i.style.display=e.length?``:`none`)}let t=this._footerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,[`bottom`]),this._stickyStyler.stickRows(e,t,`bottom`),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...i],[`left`,`right`]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,r)=>{this._addStickyColumnStyles([o],this._headerRowDefs[r])}),this._rowDefs.forEach(o=>{let r=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===o&&r.push(t[l]);this._addStickyColumnStyles(r,o)}),i.forEach((o,r)=>{this._addStickyColumnStyles([o],this._footerRowDefs[r])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),i=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<t;o++){let r=this._data[o],l=this._getRenderRowsForData(r,o,i.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let m=0;m<l.length;m++){let f=l[m],p=this._cachedRenderRowsMap.get(f.data);p.has(f.rowDef)?p.get(f.rowDef).push(f):p.set(f.rowDef,[f]),e.push(f)}}return e}_getRenderRowsForData(e,t,i){return this._getRowDefs(e,t).map(r=>{let l=i&&i.has(r)?i.get(r):[];if(l.length){let m=l.shift();return m.dataIndex=t,m}else return{data:e,rowDef:r,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Pe(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Pe(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Pe(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Pe(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(r,l)=>{let m=!!l.getColumnsDiff();return r||m},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let i=this._headerRowDefs.reduce(e,!1);i&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),t||i||o}_switchDataSource(e){this._data=[],ii(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;ii(this.dataSource)?e=this.dataSource.connect(this):mN(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Xt(this.dataSource)),this._renderChangeSubscription=CN([e,this.viewChange]).pipe(Si$1(this._onDestroy)).subscribe(([t,i])=>{this._data=t||[],this._renderedRange=i,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let i=Array.from(t?.columns||[]).map(l=>{return this._columnDefsByName.get(l)}),o=i.map(l=>l.sticky),r=i.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,r,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let i=0;i<e.viewContainer.length;i++){let o=e.viewContainer.get(i);t.push(o.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(o=>!o.when||o.when(t,e));else{let o=this._rowDefs.find(r=>r.when&&r.when(t,e))||this._defaultRowDef;o&&i.push(o)}return i.length,i}_getEmbeddedViewArgs(e,t){let i=e.rowDef,o={$implicit:e.data};return{templateRef:i.template,context:o,index:t}}_renderRow(e,t,i,o={}){let r=e.viewContainer.createEmbeddedView(t.template,o,i);return this._renderCellTemplateForItem(t,o),r}_renderCellTemplateForItem(e,t){for(let i of this._getCellTemplates(e))G.mostRecentCellOutlet&&G.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,i=e.length;t<i;t++){let r=e.get(t).context;r.count=i,r.first=t===0,r.last=t===i-1,r.even=t%2===0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[t].dataIndex,r.renderIndex=t):r.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let i=this._columnDefsByName.get(t);return e.extractCellTemplate(i)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,i)=>t||i.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:`ltr`,t=this._injector;this._stickyStyler=new We(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:Xt()).pipe(Si$1(this._onDestroy)).subscribe(i=>{this._stickyStyler.direction=i,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<`u`?gN:pN;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(PN(0,t),Si$1(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(i,o)=>this._measureRangeSize(i,o)}),CN([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Si$1(this._onDestroy)).subscribe(([i,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let r=0;r<o.elements.length;r++){let l=o.elements[r];if(l){let m=o.offsets[r],f=i!==0?Math.max(i-m,m):-m;for(let p of l)p.style.top=`${-f}px`}}}),CN([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Si$1(this._onDestroy)).subscribe(([i,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let r=0;r<o.elements.length;r++){let l=o.elements[r];if(l)for(let m of l)m.style.bottom=`${i+o.offsets[r]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let i=this._noDataRowOutlet.viewContainer;if(t){let o=i.createEmbeddedView(e.templateRef),r=o.rootNodes[0];if(o.rootNodes.length===1&&r?.nodeType===this._document.ELEMENT_NODE){r.setAttribute(`role`,`row`),r.classList.add(...e._contentClassNames);let l=r.querySelectorAll(e._cellSelector);for(let m=0;m<l.length;m++)l[m].classList.add(...e._cellClassNames)}}else i.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!==`vertical`)return 0;let i=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<i.start||(e.end,i.end);let r=e.start-i.start,l=e.end-e.start,m,f;for(let C=0;C<l;C++){let v=o.get(C+r);if(v&&v.rootNodes.length){m=f=v.rootNodes[0];break}}for(let C=l-1;C>-1;C--){let v=o.get(C+r);if(v&&v.rootNodes.length){f=v.rootNodes[v.rootNodes.length-1];break}}let p=m?.getBoundingClientRect?.(),_=f?.getBoundingClientRect?.();return p&&_?_.bottom-p.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static ɵfac=function(t){return new(t||n)};static ɵcmp=Rs({type:n,selectors:[[`cdk-table`],[`table`,`cdk-table`,``]],contentQueries:function(t,i,o){if(t&1&&PD(o,Le,5)(o,U,5)(o,Be,5)(o,ve,5)(o,$e,5),t&2){let r;ok(r=sk())&&(i._noDataRow=r.first),ok(r=sk())&&(i._contentColumnDefs=r),ok(r=sk())&&(i._contentRowDefs=r),ok(r=sk())&&(i._contentHeaderRowDefs=r),ok(r=sk())&&(i._contentFooterRowDefs=r)}},hostAttrs:[1,`cdk-table`],hostVars:2,hostBindings:function(t,i){t&2&&Fl(`cdk-table-fixed-layout`,i.fixedLayout)},inputs:{trackBy:`trackBy`,dataSource:`dataSource`,multiTemplateDataRows:[2,`multiTemplateDataRows`,`multiTemplateDataRows`,Iw],fixedLayout:[2,`fixedLayout`,`fixedLayout`,Iw],recycleRows:[2,`recycleRows`,`recycleRows`,Iw]},outputs:{contentChanged:`contentChanged`},exportAs:[`cdkTable`],features:[iw([{provide:O,useExisting:n},{provide:we,useValue:null}])],ngContentSelectors:Ri,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,i){t&1&&(Lp(Si),Fp(0),Fp(1,1),Ux(2,ki,1,0),Ux(3,xi,7,0)(4,Mi,4,0)),t&2&&($R(2),Vx(i._isServer?2:-1),$R(),Vx(i._isNativeHtmlTable?3:4))},dependencies:[Ye,Ke,Xe,Ze],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return n})();function Pe(n,a){return n.concat(Array.from(a))}function mi(n,a){let e=a.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let i=t.nodeType===1?t.nodeName:null;if(i===e)return t;if(i===`TABLE`)break;t=t.parentNode}return null}var pi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=hn({type:n});static ɵinj=Pt({imports:[Bt]})}return n})();var Ei=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var Ni=[`caption`,`colgroup, col`,`*`];function Ii(n,a){n&1&&Fp(0,2)}function Fi(n,a){n&1&&(wl(0,`thead`,0),AD(1,1),Rp(),wl(2,`tbody`,2),AD(3,3)(4,4),Rp(),wl(5,`tfoot`,0),AD(6,5),Rp())}function Pi(n,a){n&1&&AD(0,1)(1,3)(2,4)(3,5)}var Hn=(()=>{class n extends Je{stickyCssClass=`mat-mdc-table-sticky`;needsPositionStickyOnElement=!1;static ɵfac=(()=>{let e;return function(i){return(e||(e=VE(n)))(i||n)}})();static ɵcmp=Rs({type:n,selectors:[[`mat-table`],[`table`,`mat-table`,``]],hostAttrs:[1,`mat-mdc-table`,`mdc-data-table__table`],hostVars:2,hostBindings:function(t,i){t&2&&Fl(`mat-table-fixed-layout`,i.fixedLayout)},exportAs:[`matTable`],features:[iw([{provide:Je,useExisting:n},{provide:O,useExisting:n},{provide:we,useValue:null}]),vD],ngContentSelectors:Ni,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`role`,`rowgroup`,1,`mdc-data-table__content`],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,i){t&1&&(Lp(Ei),Fp(0),Fp(1,1),Ux(2,Ii,1,0),Ux(3,Fi,7,0)(4,Pi,4,0)),t&2&&($R(2),Vx(i._isServer?2:-1),$R(),Vx(i._isNativeHtmlTable?3:4))},dependencies:[Ye,Ke,Xe,Ze],styles:[`.mat-mdc-table-sticky {
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
`],encapsulation:2,changeDetection:1})}return n})();var jn=(()=>{class n extends ze{static ɵfac=(()=>{let e;return function(i){return(e||(e=VE(n)))(i||n)}})();static ɵdir=eo({type:n,selectors:[[``,`matCellDef`,``]],features:[iw([{provide:ze,useExisting:n}]),vD]})}return n})();var Vn=(()=>{class n extends Ae{static ɵfac=(()=>{let e;return function(i){return(e||(e=VE(n)))(i||n)}})();static ɵdir=eo({type:n,selectors:[[``,`matHeaderCellDef`,``]],features:[iw([{provide:Ae,useExisting:n}]),vD]})}return n})();var Un=(()=>{class n extends U{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=VE(n)))(i||n)}})();static ɵdir=eo({type:n,selectors:[[``,`matColumnDef`,``]],inputs:{name:[0,`matColumnDef`,`name`]},features:[iw([{provide:U,useExisting:n}]),vD]})}return n})();var Wn=(()=>{class n extends fi{static ɵfac=(()=>{let e;return function(i){return(e||(e=VE(n)))(i||n)}})();static ɵdir=eo({type:n,selectors:[[`mat-header-cell`],[`th`,`mat-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`mat-mdc-header-cell`,`mdc-data-table__header-cell`],features:[vD]})}return n})();var Qn=(()=>{class n extends hi{static ɵfac=(()=>{let e;return function(i){return(e||(e=VE(n)))(i||n)}})();static ɵdir=eo({type:n,selectors:[[`mat-cell`],[`td`,`mat-cell`,``]],hostAttrs:[1,`mat-mdc-cell`,`mdc-data-table__cell`],features:[vD]})}return n})();var $n=(()=>{class n extends ve{static ɵfac=(()=>{let e;return function(i){return(e||(e=VE(n)))(i||n)}})();static ɵdir=eo({type:n,selectors:[[``,`matHeaderRowDef`,``]],inputs:{columns:[0,`matHeaderRowDef`,`columns`],sticky:[2,`matHeaderRowDefSticky`,`sticky`,Iw]},features:[iw([{provide:ve,useExisting:n}]),vD]})}return n})();var qn=(()=>{class n extends Be{static ɵfac=(()=>{let e;return function(i){return(e||(e=VE(n)))(i||n)}})();static ɵdir=eo({type:n,selectors:[[``,`matRowDef`,``]],inputs:{columns:[0,`matRowDefColumns`,`columns`],when:[0,`matRowDefWhen`,`when`]},features:[iw([{provide:Be,useExisting:n}]),vD]})}return n})();var Gn=(()=>{class n extends qe{static ɵfac=(()=>{let e;return function(i){return(e||(e=VE(n)))(i||n)}})();static ɵcmp=Rs({type:n,selectors:[[`mat-header-row`],[`tr`,`mat-header-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-header-row`,`mdc-data-table__header-row`],exportAs:[`matHeaderRow`],features:[iw([{provide:qe,useExisting:n}]),vD],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&AD(0,0)},dependencies:[G],encapsulation:2,changeDetection:1})}return n})();var Kn=(()=>{class n extends Ge{static ɵfac=(()=>{let e;return function(i){return(e||(e=VE(n)))(i||n)}})();static ɵcmp=Rs({type:n,selectors:[[`mat-row`],[`tr`,`mat-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-row`,`mdc-data-table__row`],exportAs:[`matRow`],features:[iw([{provide:Ge,useExisting:n}]),vD],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&AD(0,0)},dependencies:[G],encapsulation:2,changeDetection:1})}return n})();var Yn=(()=>{class n extends Le{_cellSelector=`td, mat-cell, [mat-cell], .mat-cell`;constructor(){super(),this._contentClassNames.push(`mat-mdc-no-data-row`,`mat-mdc-row`,`mdc-data-table__row`),this._cellClassNames.push(`mat-mdc-cell`,`mdc-data-table__cell`,`mat-no-data-cell`)}static ɵfac=function(t){return new(t||n)};static ɵdir=eo({type:n,selectors:[[`ng-template`,`matNoDataRow`,``]],features:[iw([{provide:Le,useExisting:n}]),vD]})}return n})();var Zn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=hn({type:n});static ɵinj=Pt({imports:[pi,HS]})}return n})();var Oi=9007199254740991;var gi=class extends fe{_data;_renderData=new ko([]);_filter=new ko(``);_internalPageChanges=new ue;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(a){a=Array.isArray(a)?a:[],this._data.next(a),this._renderChangesSubscription||this._filterData(a)}get filter(){return this._filter.value}set filter(a){this._filter.next(a),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(a){this._sort=a,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(a){this._paginator=a,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(a,e)=>{let t=a[e];if(pi$1(t)){let i=Number(t);return i<Oi?i:t}return t};sortData=(a,e)=>{let t=e.active,i=e.direction;return!t||i==``?a:a.sort((o,r)=>{let l=this.sortingDataAccessor(o,t),m=this.sortingDataAccessor(r,t),f=typeof l,p=typeof m;f!==p&&(f===`number`&&(l+=``),p===`number`&&(m+=``));let _=0;return l!=null&&m!=null?l>m?_=1:l<m&&(_=-1):l!=null?_=1:m!=null&&(_=-1),_*(i==`asc`?1:-1)})};filterPredicate=(a,e)=>{let t=e.trim().toLowerCase();return Object.values(a).some(i=>`${i}`.toLowerCase().includes(t))};constructor(a=[]){super(),this._data=new ko(a),this._updateChangeSubscription()}_updateChangeSubscription(){let a=this._sort?dc(this._sort.sortChange,this._sort.initialized):Xt(null),e=this._paginator?dc(this._paginator.page,this._internalPageChanges,this._paginator.initialized):Xt(null),t=this._data,r=CN([CN([CN([t,this._filter]).pipe(pe(([l])=>this._filterData(l))),a]).pipe(pe(([l])=>this._orderData(l))),e]).pipe(pe(([l])=>this._pageData(l)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=r.subscribe(l=>this._renderData.next(l))}_filterData(a){return this.filteredData=this.filter==null||this.filter===``?a:a.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(a){return this.sort?this.sortData(a.slice(),this.sort):a}_pageData(a){if(!this.paginator)return a;let e=this.paginator.pageIndex*this.paginator.pageSize;return a.slice(e,e+this.paginator.pageSize)}_updatePaginator(a){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=a,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,i=Math.min(e.pageIndex,t);i!==e.pageIndex&&(e.pageIndex=i,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var zi=[`*`,[[``,`matSortHeaderIcon`,``]]];var Ai=[`*`,`[matSortHeaderIcon]`];function Bi(n,a){n&1&&(A_(),xp(0,`svg`,3),SD(1,`path`,4),kp())}function Li(n,a){n&1&&(xp(0,`div`,2),Fp(1,1,null,Bi,2,0),kp())}var _i=new I(`MAT_SORT_DEFAULT_OPTIONS`);var Hi=(()=>{class n{_defaultOptions;_initializedStream=new wr(1);sortables=new Map;_stateChanges=new ue;active;start=`asc`;get direction(){return this._direction}set direction(e){this._direction=e}_direction=``;disableClear;disabled=!1;sortChange=new pt;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return``;let t=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,i=ji(e.start||this.start,t),o=i.indexOf(this.direction)+1;return o>=i.length&&(o=0),i[o]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static ɵfac=function(t){return new(t||n)(we$1(_i,8))};static ɵdir=eo({type:n,selectors:[[``,`matSort`,``]],hostAttrs:[1,`mat-sort`],inputs:{active:[0,`matSortActive`,`active`],start:[0,`matSortStart`,`start`],direction:[0,`matSortDirection`,`direction`],disableClear:[2,`matSortDisableClear`,`disableClear`,Iw],disabled:[2,`matSortDisabled`,`disabled`,Iw]},outputs:{sortChange:`matSortChange`},exportAs:[`matSort`],features:[Hh]})}return n})();function ji(n,a){let e=[`asc`,`desc`];return n==`desc`&&e.reverse(),a||e.push(``),e}var wo=(()=>{class n{_sort=m(Hi,{optional:!0});_columnDef=m(U,{optional:!0});_changeDetectorRef=m(wO);_focusMonitor=m(ce);_elementRef=m(er);_ariaDescriber=m(js,{optional:!0});_renderChanges;_animationsDisabled=mt();_recentlyCleared=it(null);_sortButton;id;arrowPosition=`after`;start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription=`Sort`;disableClear;constructor(){m(eB).load($i$1);let e=m(_i,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=dc(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(`.mat-sort-header-container`),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),t=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?t:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction===`asc`||this._sort.direction===`desc`)}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction==`asc`?`ascending`:`descending`:`none`}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static ɵfac=function(t){return new(t||n)};static ɵcmp=Rs({type:n,selectors:[[``,`mat-sort-header`,``]],hostAttrs:[1,`mat-sort-header`],hostVars:3,hostBindings:function(t,i){t&1&&xD(`click`,function(){return i._toggleOnInteraction()})(`keydown`,function(r){return i._handleKeydown(r)})(`mouseleave`,function(){return i._recentlyCleared.set(null)}),t&2&&(ks(`aria-sort`,i._getAriaSortAttribute()),Fl(`mat-sort-header-disabled`,i._isDisabled()))},inputs:{id:[0,`mat-sort-header`,`id`],arrowPosition:`arrowPosition`,start:`start`,disabled:[2,`disabled`,`disabled`,Iw],sortActionDescription:`sortActionDescription`,disableClear:[2,`disableClear`,`disableClear`,Iw]},exportAs:[`matSortHeader`],ngContentSelectors:Ai,decls:4,vars:17,consts:[[1,`mat-sort-header-container`,`mat-focus-indicator`],[1,`mat-sort-header-content`],[1,`mat-sort-header-arrow`],[`viewBox`,`0 -960 960 960`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z`]],template:function(t,i){t&1&&(Lp(zi),xp(0,`div`,0)(1,`div`,1),Fp(2),kp(),Ux(3,Li,3,0,`div`,2),kp()),t&2&&(Fl(`mat-sort-header-sorted`,i._isSorted())(`mat-sort-header-position-before`,i.arrowPosition===`before`)(`mat-sort-header-descending`,i._sort.direction===`desc`)(`mat-sort-header-ascending`,i._sort.direction===`asc`)(`mat-sort-header-recently-cleared-ascending`,i._recentlyCleared()===`asc`)(`mat-sort-header-recently-cleared-descending`,i._recentlyCleared()===`desc`)(`mat-sort-header-animations-disabled`,i._animationsDisabled),ks(`tabindex`,i._isDisabled()?null:0)(`role`,i._isDisabled()?null:`button`),$R(3),Vx(i._renderArrow()?3:-1))},styles:[`.mat-sort-header {
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
`],encapsulation:2})}return n})();var Co=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=hn({type:n});static ɵinj=Pt({imports:[HS]})}return n})();function Vi(n,a){if(n&1&&(wl(0,`mat-option`,17),Ak(1),Rp()),n&2){let e=a.$implicit;TD(`value`,e),$R(),Up(` `,e,` `)}}function Ui(n,a){if(n&1){let e=Qx();wl(0,`mat-form-field`,14)(1,`mat-select`,16,0),xD(`selectionChange`,function(i){y_(e);return v_(nk(2)._changePageSize(i.value))}),$x(3,Vi,2,2,`mat-option`,17,Hx),Rp(),wl(5,`div`,18),xD(`click`,function(){y_(e);return v_(ck(2).open())}),Rp()()}if(n&2){let e=nk(2);TD(`appearance`,e._formFieldAppearance)(`color`,e.color),$R(),TD(`value`,e.pageSize)(`disabled`,e.disabled),CD(`aria-labelledby`,e._pageSizeLabelId),TD(`panelClass`,e.selectConfig.panelClass||``)(`disableOptionCentering`,e.selectConfig.disableOptionCentering),$R(2),Wx(e._displayedPageSizeOptions)}}function Wi(n,a){if(n&1&&(wl(0,`div`,15),Ak(1),Rp()),n&2){let e=nk(2);$R(),YD(e.pageSize)}}function Qi(n,a){if(n&1&&(wl(0,`div`,3)(1,`div`,13),Ak(2),Rp(),Ux(3,Ui,6,7,`mat-form-field`,14),Ux(4,Wi,2,1,`div`,15),Rp()),n&2){let e=nk();$R(),ks(`id`,e._pageSizeLabelId),$R(),Up(` `,e._intl.itemsPerPageLabel,` `),$R(),Vx(e._displayedPageSizeOptions.length>1?3:-1),$R(),Vx(e._displayedPageSizeOptions.length<=1?4:-1)}}function $i(n,a){if(n&1){let e=Qx();wl(0,`button`,19),xD(`click`,function(){y_(e);let i=nk();return v_(i._buttonClicked(0,i._previousButtonsDisabled()))}),A_(),wl(1,`svg`,8),bD(2,`path`,20),Rp()()}if(n&2){let e=nk();TD(`matTooltip`,e._intl.firstPageLabel)(`matTooltipDisabled`,e._previousButtonsDisabled())(`disabled`,e._previousButtonsDisabled())(`tabindex`,e._previousButtonsDisabled()?-1:null),ks(`aria-label`,e._intl.firstPageLabel)}}function qi(n,a){if(n&1){let e=Qx();wl(0,`button`,21),xD(`click`,function(){y_(e);let i=nk();return v_(i._buttonClicked(i.getNumberOfPages()-1,i._nextButtonsDisabled()))}),A_(),wl(1,`svg`,8),bD(2,`path`,22),Rp()()}if(n&2){let e=nk();TD(`matTooltip`,e._intl.lastPageLabel)(`matTooltipDisabled`,e._nextButtonsDisabled())(`disabled`,e._nextButtonsDisabled())(`tabindex`,e._nextButtonsDisabled()?-1:null),ks(`aria-label`,e._intl.lastPageLabel)}}var Gi=(()=>{class n{changes=new ue;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(e,t,i)=>{if(i==0||t==0)return`0 of ${i}`;i=Math.max(i,0);let o=e*t,r=o<i?Math.min(o+t,i):o+t;return`${o+1} \u2013 ${r} of ${i}`};static ɵfac=function(t){return new(t||n)};static ɵprov=Le$1({token:n,factory:n.ɵfac})}return n})();var Ki=50;var Yi=new I(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var Zi=(()=>{class n{_intl=m(Gi);_changeDetectorRef=m(wO);_formFieldAppearance;_pageSizeLabelId=m(Ke$1).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new wr(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>T9(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new pt;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=m(Yi,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:i,pageSizeOptions:o,hidePageSize:r,showFirstLastButtons:l}=t;i!=null&&(this._pageSize=i),o!=null&&(this._pageSizeOptions=o),r!=null&&(this.hidePageSize=r),l!=null&&(this.showFirstLastButtons=l)}this._formFieldAppearance=t?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Ki),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static ɵfac=function(t){return new(t||n)};static ɵcmp=Rs({type:n,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,T9],length:[2,`length`,`length`,T9],pageSize:[2,`pageSize`,`pageSize`,T9],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,Iw],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,Iw],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,Iw]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(t,i){t&1&&(wl(0,`div`,1)(1,`div`,2),Ux(2,Qi,5,4,`div`,3),wl(3,`div`,4)(4,`div`,5),Ak(5),Rp(),Ux(6,$i,3,5,`button`,6),wl(7,`button`,7),xD(`click`,function(){return i._buttonClicked(i.pageIndex-1,i._previousButtonsDisabled())}),A_(),wl(8,`svg`,8),bD(9,`path`,9),Rp()(),M_(),wl(10,`button`,10),xD(`click`,function(){return i._buttonClicked(i.pageIndex+1,i._nextButtonsDisabled())}),A_(),wl(11,`svg`,8),bD(12,`path`,11),Rp()(),Ux(13,qi,3,5,`button`,12),Rp()()()),t&2&&($R(2),Vx(i.hidePageSize?-1:2),$R(3),Up(` `,i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length),` `),$R(),Vx(i.showFirstLastButtons?6:-1),$R(),TD(`matTooltip`,i._intl.previousPageLabel)(`matTooltipDisabled`,i._previousButtonsDisabled())(`disabled`,i._previousButtonsDisabled())(`tabindex`,i._previousButtonsDisabled()?-1:null),ks(`aria-label`,i._intl.previousPageLabel),$R(3),TD(`matTooltip`,i._intl.nextPageLabel)(`matTooltipDisabled`,i._nextButtonsDisabled())(`disabled`,i._nextButtonsDisabled())(`tabindex`,i._nextButtonsDisabled()?-1:null),ks(`aria-label`,i._intl.nextPageLabel),$R(3),Vx(i.showFirstLastButtons?13:-1))},dependencies:[nt,Si$2,G$2,No,ti$1],styles:[`.mat-mdc-paginator {
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
`],encapsulation:2})}return n})();var Bo=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=hn({type:n});static ɵinj=Pt({imports:[Jc,Oi$1,hn$1,Zi]})}return n})();var yi=(n,a)=>a.id;var Xi=(n,a)=>a.code;function Ji(n,a){if(n&1&&(wl(0,`mat-option`,6),Ak(1),Rp()),n&2){let e=a.$implicit;TD(`value`,e.id),$R(),YD(e.label)}}function en(n,a){if(n&1&&(wl(0,`mat-option`,6),Ak(1),Rp()),n&2){let e=a.$implicit;TD(`value`,e.code),$R(),YD(e.code)}}function tn(n,a){if(n&1&&(wl(0,`mat-option`,6),Ak(1),Rp()),n&2){let e=a.$implicit;TD(`value`,e.name),$R(),YD(e.name)}}var He=class n$1{dialogRef=m(O$1);data=m(Xe$1);initialPhone=Ni$1(this.data.prospect.phone);form={name:this.data.prospect.name,dialCode:this.initialPhone.dialCode,phone:this.initialPhone.localNumber,categories:[...this.data.prospect.categories],statusId:this.data.prospect.statusId||``};save(){this.dialogRef.close({name:this.form.name,normalizedName:n(this.form.name),phone:Di(this.form.dialCode,this.form.phone),categories:this.form.categories,statusId:this.form.statusId})}cancel(){this.dialogRef.close()}static ɵfac=function(e){return new(e||n$1)};static ɵcmp=Rs({type:n$1,selectors:[[`app-prospect-edit-dialog`]],decls:38,vars:6,consts:[[`mat-dialog-title`,``],[1,`edit-form`],[1,`form-field-group`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`],[`matInput`,``,`name`,`name`,3,`ngModelChange`,`ngModel`],[`name`,`statusId`,3,`ngModelChange`,`ngModel`],[3,`value`],[1,`phone-row`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`phone-prefix`],[`name`,`dialCode`,3,`ngModelChange`,`ngModel`],[`matInput`,``,`name`,`phone`,3,`ngModelChange`,`ngModel`],[`name`,`categories`,`multiple`,``,`required`,``,3,`ngModelChange`,`ngModel`],[`align`,`end`],[`mat-button`,``,3,`click`],[`mat-flat-button`,``,`color`,`primary`,3,`click`,`disabled`]],template:function(e,t){e&1&&(wl(0,`h2`,0),Ak(1,`Editar cliente`),Rp(),wl(2,`mat-dialog-content`)(3,`form`,1)(4,`div`,2)(5,`label`),Ak(6,`Nombre`),Rp(),wl(7,`mat-form-field`,3)(8,`input`,4),XD(`ngModelChange`,function(o){return Ok(t.form.name,o)||(t.form.name=o),o}),Rp(),N0(),Rp()(),wl(9,`div`,2)(10,`label`),Ak(11,`Estado`),Rp(),wl(12,`mat-form-field`,3)(13,`mat-select`,5),XD(`ngModelChange`,function(o){return Ok(t.form.statusId,o)||(t.form.statusId=o),o}),$x(14,Ji,2,2,`mat-option`,6,yi),Rp(),N0(),Rp()(),wl(16,`div`,2)(17,`label`),Ak(18,`Teléfono`),Rp(),wl(19,`div`,7)(20,`mat-form-field`,8)(21,`mat-select`,9),XD(`ngModelChange`,function(o){return Ok(t.form.dialCode,o)||(t.form.dialCode=o),o}),$x(22,en,2,2,`mat-option`,6,Xi),Rp(),N0(),Rp(),wl(24,`mat-form-field`,3)(25,`input`,10),XD(`ngModelChange`,function(o){return Ok(t.form.phone,o)||(t.form.phone=o),o}),Rp(),N0(),Rp()()(),wl(26,`div`,2)(27,`label`),Ak(28,`Categorías`),Rp(),wl(29,`mat-form-field`,3)(30,`mat-select`,11),XD(`ngModelChange`,function(o){return Ok(t.form.categories,o)||(t.form.categories=o),o}),$x(31,tn,2,2,`mat-option`,6,yi),Rp(),N0(),Rp()()()(),wl(33,`mat-dialog-actions`,12)(34,`button`,13),xD(`click`,function(){return t.cancel()}),Ak(35,`Cancelar`),Rp(),wl(36,`button`,14),xD(`click`,function(){return t.save()}),Ak(37,`Guardar`),Rp()()),e&2&&($R(8),JD(`ngModel`,t.form.name),M0(),$R(5),JD(`ngModel`,t.form.statusId),M0(),$R(),Wx(t.data.statuses),$R(7),JD(`ngModel`,t.form.dialCode),M0(),$R(),Wx(t.data.dialCodes),$R(3),JD(`ngModel`,t.form.phone),M0(),$R(5),JD(`ngModel`,t.form.categories),M0(),$R(),Wx(t.data.categories),$R(5),TD(`disabled`,t.form.categories.length===0))},dependencies:[Qt,Ht,Wt,Gt,me,nt,Rn,Tn,Oi$1,Si$2,G$2,Jc,Qc,Zo,Wo,Ln,Go,Ho,ti,Mr,Dr],styles:[`mat-dialog-content[_ngcontent-%COMP%]{min-width:0}.edit-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}mat-dialog-actions[_ngcontent-%COMP%]{padding:1rem 1.5rem 1.25rem}`]})};var wi=class n{dialog=m(ee);snackBar=m(Mt);prospectRepo=m(L);configRepo=m(f);projectRepo=m(u);edit(a){this.openEdit(a)}async openEdit(a){let[e,t]=await Promise.all([eN(this.configRepo.watchCategories()),eN(this.configRepo.watchStatuses())]);this.dialog.open(He,{width:`90vw`,maxWidth:`440px`,data:{prospect:a,categories:e,statuses:t,dialCodes:at}}).afterClosed().subscribe(async i=>{if(i)try{i.statusId!==a.statusId&&t.find(r=>r.id===i.statusId)?.requiresService&&(await eN(this.projectRepo.watchByProspect(a.id))).length===0&&(this.snackBar.open(`Agregá un trabajo primero (Ver → Trabajos).`,`Cerrar`,{duration:4e3}),i.statusId=a.statusId),await this.prospectRepo.update(a.id,i)}catch(o){this.snackBar.open(`Error al guardar cambios`,`Cerrar`,{duration:3e3}),console.error(o)}})}static ɵfac=function(e){return new(e||n)};static ɵprov=P({token:n,factory:n.ɵfac,providedIn:`root`})};export{qn as _,Hi as a,Qn as c,Wn as d,Yn as f,jn as g,gi as h,Gn as i,Un as l,Zn as m,Bo as n,Hn as o,Zi as p,Co as r,Kn as s,$n as t,Vn as u,wi as v,wo as y};