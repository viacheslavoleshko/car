(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{j4Kk:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),a=u("YI5y"),s=function(){function l(l,n,u){var t=this;this.carService=l,this.router=n,this.route=u,this.regNumb=this.route.snapshot.paramMap.get("regNumb"),this.carService.getTax(this.regNumb).subscribe(function(l){t.tax=l.object})}return l.prototype.ngOnInit=function(){},l.prototype.toHome=function(){this.router.navigate(["tabs/tab2"])},l}(),b=function(){return function(){}}(),e=u("pMnS"),o=u("oBZk"),r=u("ZZ/e"),c=u("Ip0R"),i=u("ZYCi"),f=t.qb({encapsulation:0,styles:[[""]],data:{}});function p(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,3,"ion-col",[],null,null,null,o.r,o.c)),t.rb(1,49152,null,0,r.q,[t.h,t.k,t.z],null,null),(l()(),t.sb(2,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(3,null,[" "," "]))],null,function(l,n){l(n,3,0,n.component.tax[0].t["Status bar"].Status)})}function I(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,1,"p",[["class","Status_Bar"]],null,null,null,null,null)),(l()(),t.Ib(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.component.tax[0].t["Status bar"]["Tax due"])})}function x(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,7,"ion-row",[],null,null,null,o.y,o.j)),t.rb(1,49152,null,0,r.fb,[t.h,t.k,t.z],null,null),(l()(),t.hb(16777216,null,0,1,null,p)),t.rb(3,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(4,0,null,0,3,"ion-col",[["class","Status_Bar"],["size","6"]],null,null,null,o.r,o.c)),t.rb(5,49152,null,0,r.q,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.hb(16777216,null,0,1,null,I)),t.rb(7,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,u.tax[0].t["Status bar"].Status),l(n,5,0,"6"),l(n,7,0,u.tax[0].t["Status bar"]["Tax due"])},null)}function h(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Vahicle make"])),(l()(),t.Ib(-1,null,[": "])),(l()(),t.sb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Ib(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Vehicle make"])})}function g(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Date of first registration"])),(l()(),t.Ib(-1,null,[": "])),(l()(),t.sb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Ib(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Date of first registration"])})}function _(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Year of manufacture"])),(l()(),t.Ib(-1,null,[": "])),(l()(),t.sb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Ib(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Year of manufacture"])})}function d(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Cylinder capacity (cc)"])),(l()(),t.Ib(-1,null,[": "])),(l()(),t.sb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Ib(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Cylinder capacity (cc)"])})}function m(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["CO\u2082Emissions"])),(l()(),t.Ib(-1,null,[": "])),(l()(),t.sb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Ib(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["CO\u2082Emissions"])})}function K(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Fuel type"])),(l()(),t.Ib(-1,null,[": "])),(l()(),t.sb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Ib(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Fuel type"])})}function j(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Euro Status"])),(l()(),t.Ib(-1,null,[": "])),(l()(),t.sb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Ib(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Euro Status"])})}function N(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Export marker"])),(l()(),t.Ib(-1,null,[": "])),(l()(),t.sb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Ib(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Expor marker"])})}function k(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Vehicle status"])),(l()(),t.Ib(-1,null,[": "])),(l()(),t.sb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Ib(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Vehicle status"])})}function y(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Vehicle colour"])),(l()(),t.Ib(-1,null,[": "])),(l()(),t.sb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Ib(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Vehicle colour"])})}function v(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Vehicle type approval"])),(l()(),t.Ib(-1,null,[": "])),(l()(),t.sb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Ib(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Vehicle type approval"])})}function B(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Wheelplan"])),(l()(),t.Ib(-1,null,[": "])),(l()(),t.sb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Ib(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t.Wheelplan)})}function S(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Revenue weight"])),(l()(),t.Ib(-1,null,[": "])),(l()(),t.sb(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Ib(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Revenue weight"])})}function w(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,6,"li",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Tax rates"])),(l()(),t.Ib(-1,null,[": "])),(l()(),t.sb(4,0,null,null,2,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.sb(5,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(l()(),t.Ib(6,null,["",""]))],null,function(l,n){l(n,6,0,n.component.tax[0].t["View tax rates"])})}function V(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,33,"div",[],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,x)),t.rb(2,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(3,0,null,null,30,"ion-row",[],null,null,null,o.y,o.j)),t.rb(4,49152,null,0,r.fb,[t.h,t.k,t.z],null,null),(l()(),t.sb(5,0,null,0,28,"ul",[["class","taxed"]],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,h)),t.rb(7,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,g)),t.rb(9,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,_)),t.rb(11,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,d)),t.rb(13,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,m)),t.rb(15,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,K)),t.rb(17,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,j)),t.rb(19,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,N)),t.rb(21,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,k)),t.rb(23,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,y)),t.rb(25,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,v)),t.rb(27,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,B)),t.rb(29,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,S)),t.rb(31,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,w)),t.rb(33,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.tax[0].t["Status bar"]),l(n,7,0,u.tax[0].t["Vehicle make"]),l(n,9,0,u.tax[0].t["Date of first registration"]),l(n,11,0,u.tax[0].t["Year of manufacture"]),l(n,13,0,u.tax[0].t["Cylinder capacity (cc)"]),l(n,15,0,u.tax[0].t["CO\u2082Emissions"]),l(n,17,0,u.tax[0].t["Fuel type"]),l(n,19,0,u.tax[0].t["Euro Status"]),l(n,21,0,u.tax[0].t["Expor marker"]),l(n,23,0,u.tax[0].t["Vehicle status"]),l(n,25,0,u.tax[0].t["Vehicle colour"]),l(n,27,0,u.tax[0].t["Vehicle type approval"]),l(n,29,0,u.tax[0].t.Wheelplan),l(n,31,0,u.tax[0].t["Revenue weight"]),l(n,33,0,u.tax[0].t["View tax rates"])},null)}function z(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,V)),t.rb(2,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null)],function(l,n){var u=n.component;l(n,2,0,-1!==u.tax&&0!==u.tax.length&&void 0!==u.tax[0].t,t.Db(n.parent,14))},null)}function E(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Sorry, not found you TAX!"]))],null,null)}function C(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,6,"ion-header",[],null,null,null,o.t,o.e)),t.rb(1,49152,null,0,r.y,[t.h,t.k,t.z],null,null),(l()(),t.sb(2,0,null,0,4,"ion-toolbar",[],null,null,null,o.D,o.o)),t.rb(3,49152,null,0,r.yb,[t.h,t.k,t.z],null,null),(l()(),t.sb(4,0,null,0,2,"ion-title",[],null,null,null,o.C,o.n)),t.rb(5,49152,null,0,r.wb,[t.h,t.k,t.z],null,null),(l()(),t.Ib(-1,0,["tax details"])),(l()(),t.sb(7,0,null,null,7,"ion-content",[],null,null,null,o.s,o.d)),t.rb(8,49152,null,0,r.r,[t.h,t.k,t.z],null,null),(l()(),t.sb(9,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toHome()&&t),t},o.q,o.b)),t.rb(10,49152,null,0,r.h,[t.h,t.k,t.z],null,null),(l()(),t.Ib(-1,0,[" Go to TAX tab! "])),(l()(),t.hb(16777216,null,0,1,null,z)),t.rb(13,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),t.hb(0,[["elseTax",2]],0,0,null,E))],function(l,n){l(n,13,0,n.component.tax,t.Db(n,14))},null)}function T(l){return t.Kb(0,[(l()(),t.sb(0,0,null,null,1,"app-tax-details",[],null,null,null,C,f)),t.rb(1,114688,null,0,s,[a.a,i.m,i.a],null,null)],function(l,n){l(n,1,0)},null)}var D=t.ob("app-tax-details",s,T,{},{},[]),q=u("gIcY");u.d(n,"TaxDetailsPageModuleNgFactory",function(){return F});var F=t.pb(b,[],function(l){return t.Ab([t.Bb(512,t.j,t.ab,[[8,[e.a,D]],[3,t.j],t.x]),t.Bb(4608,c.l,c.k,[t.u,[2,c.s]]),t.Bb(4608,q.i,q.i,[]),t.Bb(4608,r.a,r.a,[t.z,t.g]),t.Bb(4608,r.Cb,r.Cb,[r.a,t.j,t.q]),t.Bb(4608,r.Fb,r.Fb,[r.a,t.j,t.q]),t.Bb(1073742336,c.b,c.b,[]),t.Bb(1073742336,q.h,q.h,[]),t.Bb(1073742336,q.b,q.b,[]),t.Bb(1073742336,r.Ab,r.Ab,[]),t.Bb(1073742336,i.n,i.n,[[2,i.s],[2,i.m]]),t.Bb(1073742336,b,b,[]),t.Bb(1024,i.k,function(){return[[{path:":regNumb",component:s}]]},[])])})}}]);