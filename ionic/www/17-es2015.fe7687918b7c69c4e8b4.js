(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{j4Kk:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),a=u("YI5y");class b{constructor(l,n,u){this.carService=l,this.router=n,this.route=u,this.regNumb=this.route.snapshot.paramMap.get("regNumb"),this.carService.getTax(this.regNumb).subscribe(l=>{this.tax=l.object})}ngOnInit(){}toHome(){this.router.navigate(["tabs/tab2"])}}class e{}var s=u("pMnS"),o=u("oBZk"),c=u("ZZ/e"),i=u("SVse"),r=u("iInd"),p=t.ob({encapsulation:0,styles:[[""]],data:{}});function f(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,3,"ion-col",[],null,null,null,o.r,o.c)),t.pb(1,49152,null,0,c.q,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Gb(3,null,[" "," "]))],null,function(l,n){l(n,3,0,n.component.tax[0].t["Status bar"].Status)})}function x(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,1,"p",[["class","Status_Bar"]],null,null,null,null,null)),(l()(),t.Gb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.component.tax[0].t["Status bar"]["Tax due"])})}function I(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,7,"ion-row",[],null,null,null,o.y,o.j)),t.pb(1,49152,null,0,c.fb,[t.h,t.k,t.x],null,null),(l()(),t.fb(16777216,null,0,1,null,f)),t.pb(3,16384,null,0,i.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(4,0,null,0,3,"ion-col",[["class","Status_Bar"],["size","6"]],null,null,null,o.r,o.c)),t.pb(5,49152,null,0,c.q,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.fb(16777216,null,0,1,null,x)),t.pb(7,16384,null,0,i.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,u.tax[0].t["Status bar"].Status),l(n,5,0,"6"),l(n,7,0,u.tax[0].t["Status bar"]["Tax due"])},null)}function q(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Vahicle make"])),(l()(),t.Gb(-1,null,[": "])),(l()(),t.qb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Gb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Vehicle make"])})}function g(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Date of first registration"])),(l()(),t.Gb(-1,null,[": "])),(l()(),t.qb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Gb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Date of first registration"])})}function _(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Year of manufacture"])),(l()(),t.Gb(-1,null,[": "])),(l()(),t.qb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Gb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Year of manufacture"])})}function d(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Cylinder capacity (cc)"])),(l()(),t.Gb(-1,null,[": "])),(l()(),t.qb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Gb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Cylinder capacity (cc)"])})}function G(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["CO\u2082Emissions"])),(l()(),t.Gb(-1,null,[": "])),(l()(),t.qb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Gb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["CO\u2082Emissions"])})}function h(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Fuel type"])),(l()(),t.Gb(-1,null,[": "])),(l()(),t.qb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Gb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Fuel type"])})}function m(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Euro Status"])),(l()(),t.Gb(-1,null,[": "])),(l()(),t.qb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Gb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Euro Status"])})}function j(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Export marker"])),(l()(),t.Gb(-1,null,[": "])),(l()(),t.qb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Gb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Expor marker"])})}function k(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Vehicle status"])),(l()(),t.Gb(-1,null,[": "])),(l()(),t.qb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Gb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Vehicle status"])})}function y(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Vehicle colour"])),(l()(),t.Gb(-1,null,[": "])),(l()(),t.qb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Gb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Vehicle colour"])})}function v(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Vehicle type approval"])),(l()(),t.Gb(-1,null,[": "])),(l()(),t.qb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Gb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Vehicle type approval"])})}function L(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Wheelplan"])),(l()(),t.Gb(-1,null,[": "])),(l()(),t.qb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Gb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t.Wheelplan)})}function S(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Revenue weight"])),(l()(),t.Gb(-1,null,[": "])),(l()(),t.qb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Gb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Revenue weight"])})}function z(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,6,"li",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Tax rates"])),(l()(),t.Gb(-1,null,[": "])),(l()(),t.qb(4,0,null,null,2,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(l()(),t.Gb(6,null,["",""]))],null,function(l,n){l(n,6,0,n.component.tax[0].t["View tax rates"])})}function V(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,33,"div",[],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,I)),t.pb(2,16384,null,0,i.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(3,0,null,null,30,"ion-row",[],null,null,null,o.y,o.j)),t.pb(4,49152,null,0,c.fb,[t.h,t.k,t.x],null,null),(l()(),t.qb(5,0,null,0,28,"ul",[["class","taxed"]],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,q)),t.pb(7,16384,null,0,i.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,g)),t.pb(9,16384,null,0,i.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,_)),t.pb(11,16384,null,0,i.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,d)),t.pb(13,16384,null,0,i.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,G)),t.pb(15,16384,null,0,i.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,h)),t.pb(17,16384,null,0,i.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,m)),t.pb(19,16384,null,0,i.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,j)),t.pb(21,16384,null,0,i.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,k)),t.pb(23,16384,null,0,i.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,y)),t.pb(25,16384,null,0,i.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,v)),t.pb(27,16384,null,0,i.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,L)),t.pb(29,16384,null,0,i.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,S)),t.pb(31,16384,null,0,i.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,z)),t.pb(33,16384,null,0,i.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.tax[0].t["Status bar"]),l(n,7,0,u.tax[0].t["Vehicle make"]),l(n,9,0,u.tax[0].t["Date of first registration"]),l(n,11,0,u.tax[0].t["Year of manufacture"]),l(n,13,0,u.tax[0].t["Cylinder capacity (cc)"]),l(n,15,0,u.tax[0].t["CO\u2082Emissions"]),l(n,17,0,u.tax[0].t["Fuel type"]),l(n,19,0,u.tax[0].t["Euro Status"]),l(n,21,0,u.tax[0].t["Expor marker"]),l(n,23,0,u.tax[0].t["Vehicle status"]),l(n,25,0,u.tax[0].t["Vehicle colour"]),l(n,27,0,u.tax[0].t["Vehicle type approval"]),l(n,29,0,u.tax[0].t.Wheelplan),l(n,31,0,u.tax[0].t["Revenue weight"]),l(n,33,0,u.tax[0].t["View tax rates"])},null)}function w(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,V)),t.pb(2,16384,null,0,i.j,[t.L,t.I],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null)],function(l,n){var u=n.component;l(n,2,0,-1!==u.tax&&0!==u.tax.length&&void 0!==u.tax[0].t,t.Bb(n.parent,14))},null)}function E(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Sorry, not found you TAX!"]))],null,null)}function C(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,6,"ion-header",[],null,null,null,o.t,o.e)),t.pb(1,49152,null,0,c.y,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,4,"ion-toolbar",[],null,null,null,o.D,o.o)),t.pb(3,49152,null,0,c.yb,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,2,"ion-title",[],null,null,null,o.C,o.n)),t.pb(5,49152,null,0,c.wb,[t.h,t.k,t.x],null,null),(l()(),t.Gb(-1,0,["tax details"])),(l()(),t.qb(7,0,null,null,7,"ion-content",[],null,null,null,o.s,o.d)),t.pb(8,49152,null,0,c.r,[t.h,t.k,t.x],null,null),(l()(),t.qb(9,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toHome()&&t),t},o.q,o.b)),t.pb(10,49152,null,0,c.h,[t.h,t.k,t.x],null,null),(l()(),t.Gb(-1,0,[" Go to TAX tab! "])),(l()(),t.fb(16777216,null,0,1,null,w)),t.pb(13,16384,null,0,i.j,[t.L,t.I],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),t.fb(0,[["elseTax",2]],0,0,null,E))],function(l,n){l(n,13,0,n.component.tax,t.Bb(n,14))},null)}function T(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,1,"app-tax-details",[],null,null,null,C,p)),t.pb(1,114688,null,0,b,[a.a,r.m,r.a],null,null)],function(l,n){l(n,1,0)},null)}var F=t.mb("app-tax-details",b,T,{},{},[]),Y=u("s7LF");u.d(n,"TaxDetailsPageModuleNgFactory",function(){return B});var B=t.nb(e,[],function(l){return t.yb([t.zb(512,t.j,t.Y,[[8,[s.a,F]],[3,t.j],t.v]),t.zb(4608,i.l,i.k,[t.s,[2,i.s]]),t.zb(4608,Y.i,Y.i,[]),t.zb(4608,c.a,c.a,[t.x,t.g]),t.zb(4608,c.Cb,c.Cb,[c.a,t.j,t.p]),t.zb(4608,c.Fb,c.Fb,[c.a,t.j,t.p]),t.zb(1073742336,i.b,i.b,[]),t.zb(1073742336,Y.h,Y.h,[]),t.zb(1073742336,Y.b,Y.b,[]),t.zb(1073742336,c.Ab,c.Ab,[]),t.zb(1073742336,r.n,r.n,[[2,r.s],[2,r.m]]),t.zb(1073742336,e,e,[]),t.zb(1024,r.k,function(){return[[{path:":regNumb",component:b}]]},[])])})}}]);