import{Fn as g,Ft as Va,Lr as qd,M as Gd,Mt as Ua,Qr as ui,T as Et,fn as b,i as $d,lt as O$1,nt as M,oi as vm,ri as vD,ti as v,tr as j$1,yn as cn,z as Hd}from"./chunk-dGgvg9Ga.js";import{t as L}from"./chunk-C7WdV7E2.js";var j=[`*`];var F=[[[``,`mat-card-avatar`,``],[``,`matCardAvatar`,``]],[[`mat-card-title`],[`mat-card-subtitle`],[``,`mat-card-title`,``],[``,`mat-card-subtitle`,``],[``,`matCardTitle`,``],[``,`matCardSubtitle`,``]],`*`];var O=[`[mat-card-avatar], [matCardAvatar]`,`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,`*`];var T=new v(`MAT_CARD_CONFIG`);var G=(()=>{class t{appearance;constructor(){let a=g(T,{optional:!0});this.appearance=a?.appearance||`raised`}static ɵfac=function(r){return new(r||t)};static ɵcmp=ui({type:t,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(r,n){r&2&&Ua(`mat-mdc-card-outlined`,n.appearance===`outlined`)(`mdc-card--outlined`,n.appearance===`outlined`)(`mat-mdc-card-filled`,n.appearance===`filled`)(`mdc-card--filled`,n.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:j,decls:1,vars:0,template:function(r,n){r&1&&(Gd(),qd(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return t})();var H=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵdir=Va({type:t,selectors:[[`mat-card-title`],[``,`mat-card-title`,``],[``,`matCardTitle`,``]],hostAttrs:[1,`mat-mdc-card-title`]})}return t})();var V=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵdir=Va({type:t,selectors:[[`mat-card-content`]],hostAttrs:[1,`mat-mdc-card-content`]})}return t})();var X=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵdir=Va({type:t,selectors:[[`mat-card-subtitle`],[``,`mat-card-subtitle`,``],[``,`matCardSubtitle`,``]],hostAttrs:[1,`mat-mdc-card-subtitle`]})}return t})();var q=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵcmp=ui({type:t,selectors:[[`mat-card-header`]],hostAttrs:[1,`mat-mdc-card-header`],ngContentSelectors:O,decls:4,vars:0,consts:[[1,`mat-mdc-card-header-text`]],template:function(r,n){r&1&&(Gd(F),qd(0),Hd(1,`div`,0),qd(2,1),$d(),qd(3,2))},encapsulation:2})}return t})();var J=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=cn({type:t});static ɵinj=Et({imports:[vD]})}return t})();var d=`projects`;var I=class t extends L{watchAll(){return this.sync.watchCollection(d,this.tenantPath(d))}watchByProspect(e){return new M(a=>{let r=this.watchAll().subscribe({next:n=>a.next(n.filter(A=>A.prospectId===e)),error:n=>a.error(n)});return()=>r.unsubscribe()})}async create(e){let a=this.generateId();return await this.sync.write(d,a,this.tenantPath(d,a),`set`,j$1(b({},e),{id:a})),a}async update(e,a){await this.sync.write(d,e,this.tenantPath(d,e),`update`,a)}static ɵfac=(()=>{let e;return function(r){return(e||(e=vm(t)))(r||t)}})();static ɵprov=O$1({token:t,factory:t.ɵfac,providedIn:`root`})};var i=`prospects`;var o=`prospectDetails`;var P=class t extends L{watchAll(){return this.sync.watchCollection(i,this.tenantPath(i))}watchOne(e){return this.sync.watchDoc(i,e,this.tenantPath(i,e))}watchDetails(e){return this.sync.watchDoc(o,e,this.tenantPath(o,e))}async create(e){let a=this.generateId(),r=Date.now(),n=j$1(b({},e),{id:a,createdAt:r,updatedAt:r});return await this.sync.write(i,a,this.tenantPath(i,a),`set`,n),a}async update(e,a){await this.sync.write(i,e,this.tenantPath(i,e),`update`,j$1(b({},a),{updatedAt:Date.now()}))}async setFavorite(e,a){await this.update(e,{favorite:a})}async saveDetails(e,a){await this.sync.write(o,e,this.tenantPath(o,e),`set`,b({prospectId:e},a))}async delete(e){await this.sync.write(i,e,this.tenantPath(i,e),`remove`),await this.sync.write(o,e,this.tenantPath(o,e),`remove`)}static ɵfac=(()=>{let e;return function(r){return(e||(e=vm(t)))(r||t)}})();static ɵprov=O$1({token:t,factory:t.ɵfac,providedIn:`root`})};export{P as a,q as c,J as i,H as n,V as o,I as r,X as s,G as t};