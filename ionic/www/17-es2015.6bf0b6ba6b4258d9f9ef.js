(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{JdsX:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),o=u("YI5y"),b=u("aFrL");class r{constructor(l,n,u){this.carService=l,this.activatedRoute=n,this.reviewService=u}ngOnInit(){this.carService.getLowTax().subscribe(l=>{this.cars=l.object,console.log(this.cars)})}}class e{}var i=u("pMnS"),c=u("oBZk"),s=u("ZZ/e"),a=u("SVse"),p=u("iInd"),x=t.qb({encapsulation:0,styles:[[".textArea[_ngcontent-%COMP%]{border:1px solid #18d6ff;margin:0 10px}.buttons[_ngcontent-%COMP%]{margin:0 10px 10px}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]{margin:5px 10px}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .list-ios[_ngcontent-%COMP%]{margin:0}.error[_ngcontent-%COMP%]{text-align:center;background:rgba(255,12,0,.44);margin:5px 10px}.label[_ngcontent-%COMP%]{text-align:center;border-top:1px solid #dcdcdc;border-bottom:1px solid #dcdcdc;font-size:25px;color:#0bb8cc}"]],data:{}});function g(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,27,"ion-grid",[],null,null,null,c.E,c.h)),t.rb(1,49152,null,0,s.y,[t.h,t.k,t.x],null,null),(l()(),t.sb(2,0,null,0,1,"div",[["class","label"]],null,null,null,null,null)),(l()(),t.Jb(3,null,["",""])),(l()(),t.sb(4,0,null,0,7,"ion-row",[],null,null,null,c.N,c.q)),t.rb(5,49152,null,0,s.gb,[t.h,t.k,t.x],null,null),(l()(),t.sb(6,0,null,0,2,"ion-col",[],null,null,null,c.C,c.f)),t.rb(7,49152,null,0,s.r,[t.h,t.k,t.x],null,null),(l()(),t.Jb(-1,0,["Model"])),(l()(),t.sb(9,0,null,0,2,"ion-col",[],null,null,null,c.C,c.f)),t.rb(10,49152,null,0,s.r,[t.h,t.k,t.x],null,null),(l()(),t.Jb(11,0,["",""])),(l()(),t.sb(12,0,null,0,7,"ion-row",[],null,null,null,c.N,c.q)),t.rb(13,49152,null,0,s.gb,[t.h,t.k,t.x],null,null),(l()(),t.sb(14,0,null,0,2,"ion-col",[],null,null,null,c.C,c.f)),t.rb(15,49152,null,0,s.r,[t.h,t.k,t.x],null,null),(l()(),t.Jb(-1,0,["Manufacture Year"])),(l()(),t.sb(17,0,null,0,2,"ion-col",[],null,null,null,c.C,c.f)),t.rb(18,49152,null,0,s.r,[t.h,t.k,t.x],null,null),(l()(),t.Jb(19,0,["",""])),(l()(),t.sb(20,0,null,0,7,"ion-row",[],null,null,null,c.N,c.q)),t.rb(21,49152,null,0,s.gb,[t.h,t.k,t.x],null,null),(l()(),t.sb(22,0,null,0,2,"ion-col",[],null,null,null,c.C,c.f)),t.rb(23,49152,null,0,s.r,[t.h,t.k,t.x],null,null),(l()(),t.Jb(-1,0,["12 Months Cost"])),(l()(),t.sb(25,0,null,0,2,"ion-col",[],null,null,null,c.C,c.f)),t.rb(26,49152,null,0,s.r,[t.h,t.k,t.x],null,null),(l()(),t.Jb(27,0,["\xa3",""]))],null,function(l,n){l(n,3,0,n.parent.context.$implicit.make),l(n,11,0,n.parent.context.$implicit.model),l(n,19,0,n.parent.context.$implicit.year),l(n,27,0,n.parent.context.$implicit.tax12_single)})}function f(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,2,"div",[["class","mleft"]],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,g)),t.rb(2,16384,null,0,a.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,null!=n.context.$implicit)},null)}function h(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,6,"ion-header",[],null,null,null,c.F,c.i)),t.rb(1,49152,null,0,s.z,[t.h,t.k,t.x],null,null),(l()(),t.sb(2,0,null,0,4,"ion-toolbar",[],null,null,null,c.T,c.w)),t.rb(3,49152,null,0,s.zb,[t.h,t.k,t.x],null,null),(l()(),t.sb(4,0,null,0,2,"ion-title",[],null,null,null,c.S,c.v)),t.rb(5,49152,null,0,s.xb,[t.h,t.k,t.x],null,null),(l()(),t.Jb(-1,0,["Cars With Lowest Tax"])),(l()(),t.sb(7,0,null,null,3,"ion-content",[],null,null,null,c.D,c.g)),t.rb(8,49152,null,0,s.s,[t.h,t.k,t.x],null,null),(l()(),t.hb(16777216,null,0,1,null,f)),t.rb(10,278528,null,0,a.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,10,0,n.component.cars)},null)}function d(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"app-tab3",[],null,null,null,h,x)),t.rb(1,114688,null,0,r,[o.a,p.a,b.a],null,null)],function(l,n){l(n,1,0)},null)}var k=t.ob("app-tab3",r,d,{},{},[]),m=u("s7LF");u.d(n,"Tab3PageModuleNgFactory",function(){return C});var C=t.pb(e,[],function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[i.a,k]],[3,t.j],t.v]),t.Bb(4608,a.l,a.k,[t.s,[2,a.s]]),t.Bb(4608,m.l,m.l,[]),t.Bb(4608,s.b,s.b,[t.x,t.g]),t.Bb(4608,s.Eb,s.Eb,[s.b,t.j,t.p]),t.Bb(4608,s.Hb,s.Hb,[s.b,t.j,t.p]),t.Bb(1073742336,a.b,a.b,[]),t.Bb(1073742336,m.k,m.k,[]),t.Bb(1073742336,m.c,m.c,[]),t.Bb(1073742336,s.Bb,s.Bb,[]),t.Bb(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),t.Bb(1073742336,e,e,[]),t.Bb(1024,p.k,function(){return[[{path:"",component:r},{path:":regNumb",component:r}]]},[])])})}}]);