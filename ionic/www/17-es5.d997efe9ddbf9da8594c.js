(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{j4Kk:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),a=u("YI5y"),e=function(){function l(l,n,u){var t=this;this.carService=l,this.router=n,this.route=u,this.regNumb=this.route.snapshot.paramMap.get("regNumb"),this.carService.getTax(this.regNumb).subscribe(function(l){t.tax=l.object})}return l.prototype.ngOnInit=function(){},l.prototype.toHome=function(){this.router.navigate(["tabs/tab2"])},l}(),b=function(){return function(){}}(),o=u("pMnS"),s=u("oBZk"),c=u("ZZ/e"),i=u("Ip0R"),r=u("ZYCi"),f=t.sb({encapsulation:0,styles:[['@charset "UTF-8";.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;list-style:none;padding-left:20px;display:none}.menu[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::before{content:"\u25b6 ";font-size:80%;color:green}.menu.open[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::before{content:"\u25bc "}.menu.open[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:block}']],data:{}});function p(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,3,"ion-col",[],null,null,null,s.s,s.c)),t.tb(1,49152,null,0,c.q,[t.h,t.k,t.z],null,null),(l()(),t.ub(2,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(3,null,[" "," "]))],null,function(l,n){l(n,3,0,n.component.tax[0].t["Status bar"].Status)})}function x(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,1,"p",[["class","Status_Bar"]],null,null,null,null,null)),(l()(),t.Kb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.component.tax[0].t["Status bar"]["Tax due"])})}function g(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,7,"ion-row",[],null,null,null,s.A,s.k)),t.tb(1,49152,null,0,c.fb,[t.h,t.k,t.z],null,null),(l()(),t.jb(16777216,null,0,1,null,p)),t.tb(3,16384,null,0,i.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ub(4,0,null,0,3,"ion-col",[["class","Status_Bar"],["size","6"]],null,null,null,s.s,s.c)),t.tb(5,49152,null,0,c.q,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.jb(16777216,null,0,1,null,x)),t.tb(7,16384,null,0,i.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,u.tax[0].t["Status bar"].Status),l(n,5,0,"6"),l(n,7,0,u.tax[0].t["Status bar"]["Tax due"])},null)}function _(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.ub(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Vahicle make"])),(l()(),t.Kb(-1,null,[": "])),(l()(),t.ub(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Kb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Vehicle make"])})}function j(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.ub(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Date of first registration"])),(l()(),t.Kb(-1,null,[": "])),(l()(),t.ub(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Kb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Date of first registration"])})}function d(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.ub(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Year of manufacture"])),(l()(),t.Kb(-1,null,[": "])),(l()(),t.ub(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Kb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Year of manufacture"])})}function m(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.ub(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Cylinder capacity (cc)"])),(l()(),t.Kb(-1,null,[": "])),(l()(),t.ub(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Kb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Cylinder capacity (cc)"])})}function K(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.ub(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["CO\u2082Emissions"])),(l()(),t.Kb(-1,null,[": "])),(l()(),t.ub(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Kb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["CO\u2082Emissions"])})}function h(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.ub(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Fuel type"])),(l()(),t.Kb(-1,null,[": "])),(l()(),t.ub(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Kb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Fuel type"])})}function I(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.ub(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Euro Status"])),(l()(),t.Kb(-1,null,[": "])),(l()(),t.ub(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Kb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Euro Status"])})}function M(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.ub(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Export marker"])),(l()(),t.Kb(-1,null,[": "])),(l()(),t.ub(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Kb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Expor marker"])})}function O(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.ub(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Vehicle status"])),(l()(),t.Kb(-1,null,[": "])),(l()(),t.ub(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Kb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Vehicle status"])})}function k(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.ub(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Vehicle colour"])),(l()(),t.Kb(-1,null,[": "])),(l()(),t.ub(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Kb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Vehicle colour"])})}function y(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.ub(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Vehicle type approval"])),(l()(),t.Kb(-1,null,[": "])),(l()(),t.ub(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Kb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Vehicle type approval"])})}function v(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.ub(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Wheelplan"])),(l()(),t.Kb(-1,null,[": "])),(l()(),t.ub(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Kb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t.Wheelplan)})}function C(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.ub(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Revenue weight"])),(l()(),t.Kb(-1,null,[": "])),(l()(),t.ub(4,0,null,null,1,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.Kb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.tax[0].t["Revenue weight"])})}function L(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,6,"li",[],null,null,null,null,null)),(l()(),t.ub(1,0,null,null,1,"span",[["class","taxed__span"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Tax rates"])),(l()(),t.Kb(-1,null,[": "])),(l()(),t.ub(4,0,null,null,2,"span",[["class","taxed__json"]],null,null,null,null,null)),(l()(),t.ub(5,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(l()(),t.Kb(6,null,["",""]))],null,function(l,n){l(n,6,0,n.component.tax[0].t["View tax rates"])})}function D(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,33,"div",[],null,null,null,null,null)),(l()(),t.jb(16777216,null,null,1,null,g)),t.tb(2,16384,null,0,i.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ub(3,0,null,null,30,"ion-row",[],null,null,null,s.A,s.k)),t.tb(4,49152,null,0,c.fb,[t.h,t.k,t.z],null,null),(l()(),t.ub(5,0,null,0,28,"ul",[["class","taxed"]],null,null,null,null,null)),(l()(),t.jb(16777216,null,null,1,null,_)),t.tb(7,16384,null,0,i.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,j)),t.tb(9,16384,null,0,i.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,d)),t.tb(11,16384,null,0,i.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,m)),t.tb(13,16384,null,0,i.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,K)),t.tb(15,16384,null,0,i.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,h)),t.tb(17,16384,null,0,i.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,I)),t.tb(19,16384,null,0,i.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,M)),t.tb(21,16384,null,0,i.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,O)),t.tb(23,16384,null,0,i.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,k)),t.tb(25,16384,null,0,i.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,y)),t.tb(27,16384,null,0,i.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,v)),t.tb(29,16384,null,0,i.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,C)),t.tb(31,16384,null,0,i.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,L)),t.tb(33,16384,null,0,i.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.tax[0].t["Status bar"]),l(n,7,0,u.tax[0].t["Vehicle make"]),l(n,9,0,u.tax[0].t["Date of first registration"]),l(n,11,0,u.tax[0].t["Year of manufacture"]),l(n,13,0,u.tax[0].t["Cylinder capacity (cc)"]),l(n,15,0,u.tax[0].t["CO\u2082Emissions"]),l(n,17,0,u.tax[0].t["Fuel type"]),l(n,19,0,u.tax[0].t["Euro Status"]),l(n,21,0,u.tax[0].t["Expor marker"]),l(n,23,0,u.tax[0].t["Vehicle status"]),l(n,25,0,u.tax[0].t["Vehicle colour"]),l(n,27,0,u.tax[0].t["Vehicle type approval"]),l(n,29,0,u.tax[0].t.Wheelplan),l(n,31,0,u.tax[0].t["Revenue weight"]),l(n,33,0,u.tax[0].t["View tax rates"])},null)}function S(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.jb(16777216,null,null,1,null,D)),t.tb(2,16384,null,0,i.j,[t.O,t.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null)],function(l,n){var u=n.component;l(n,2,0,-1!==u.tax&&0!==u.tax.length&&void 0!==u.tax[0].t,t.Fb(n.parent,14))},null)}function w(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Sorry, not found you TAX!"]))],null,null)}function z(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,6,"ion-header",[],null,null,null,s.v,s.f)),t.tb(1,49152,null,0,c.y,[t.h,t.k,t.z],null,null),(l()(),t.ub(2,0,null,0,4,"ion-toolbar",[],null,null,null,s.F,s.p)),t.tb(3,49152,null,0,c.yb,[t.h,t.k,t.z],null,null),(l()(),t.ub(4,0,null,0,2,"ion-title",[],null,null,null,s.E,s.o)),t.tb(5,49152,null,0,c.wb,[t.h,t.k,t.z],null,null),(l()(),t.Kb(-1,0,["tax details"])),(l()(),t.ub(7,0,null,null,7,"ion-content",[],null,null,null,s.t,s.d)),t.tb(8,49152,null,0,c.r,[t.h,t.k,t.z],null,null),(l()(),t.ub(9,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toHome()&&t),t},s.r,s.b)),t.tb(10,49152,null,0,c.h,[t.h,t.k,t.z],null,null),(l()(),t.Kb(-1,0,[" Go to TAX tab! "])),(l()(),t.jb(16777216,null,0,1,null,S)),t.tb(13,16384,null,0,i.j,[t.O,t.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),t.jb(0,[["elseTax",2]],0,0,null,w))],function(l,n){l(n,13,0,n.component.tax,t.Fb(n,14))},null)}function E(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,1,"app-tax-details",[],null,null,null,z,f)),t.tb(1,114688,null,0,e,[a.a,r.m,r.a],null,null)],function(l,n){l(n,1,0)},null)}var V=t.qb("app-tax-details",e,E,{},{},[]),F=u("gIcY");u.d(n,"TaxDetailsPageModuleNgFactory",function(){return P});var P=t.rb(b,[],function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[o.a,V]],[3,t.j],t.x]),t.Db(4608,i.l,i.k,[t.u,[2,i.s]]),t.Db(4608,F.i,F.i,[]),t.Db(4608,c.a,c.a,[t.z,t.g]),t.Db(4608,c.Cb,c.Cb,[c.a,t.j,t.q]),t.Db(4608,c.Fb,c.Fb,[c.a,t.j,t.q]),t.Db(1073742336,i.b,i.b,[]),t.Db(1073742336,F.h,F.h,[]),t.Db(1073742336,F.b,F.b,[]),t.Db(1073742336,c.Ab,c.Ab,[]),t.Db(1073742336,r.o,r.o,[[2,r.t],[2,r.m]]),t.Db(1073742336,b,b,[]),t.Db(1024,r.k,function(){return[[{path:":regNumb",component:e}]]},[])])})}}]);