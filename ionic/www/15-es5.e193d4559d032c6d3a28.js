(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"55Gs":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("mrSG"),r=u("YI5y"),i=function(){return function(l,n,u,e){void 0===l&&(l=""),void 0===n&&(n=""),void 0===u&&(u=0),void 0===e&&(e=0),this.reg=l,this.message=n,this.star=u,this.type=e}}(),o=u("aFrL"),s=u("ZZ/e"),a=u("U+Dm"),b=function(){function l(l,n,u,e,t){this.carService=l,this.purchaseService=n,this.activatedRoute=u,this.reviewService=e,this.alertController=t,this.regNumb="",this.other=!1,this.type=0,this.error="",this.reviews=[]}return l.prototype.ngOnInit=function(){var l=this;this.activatedRoute.params.subscribe(function(n){l.regNumb=n.regNumb,void 0!==l.regNumb&&(l.purchaseService.numberInInput=l.regNumb)}),setTimeout(function(){l.rate(4)},100),this.getReviews(),this.setStars()},l.prototype.leaveReview=function(l){var n=this;if(this.error="",""!==this.regNumb&&void 0!==this.regNumb)if(0!==this.type)if(""!==l.value.message){var u=new i(this.regNumb,l.value.message,this.star,this.type);this.reviewService.leaveReview(u).subscribe(function(l){l.error?n.error=l.error:(n.getReviews(),n.setStars(),n.presentAlert())})}else this.error="Enter your car review";else this.error="Select Type";else this.error="Number not found"},l.prototype.rate=function(l){for(var n=document.getElementsByClassName("stars"),u=0;u<l;u++)n[u].setAttribute("name","star");for(u=n.length-1;u>=l;u--)n[u].setAttribute("name","star-outline");this.star=l},l.prototype.setType=function(l){this.error="",this.type=l},l.prototype.presentAlert=function(){return t.b(this,void 0,void 0,function(){return t.e(this,function(l){switch(l.label){case 0:return[4,this.alertController.create({header:"Review left",buttons:["OK"]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}})})},l.prototype.getReviews=function(){var l=this;this.reviewService.getReviews(this.regNumb).subscribe(function(n){l.reviews=n.reviews,l.reviews&&(l.reviews=l.reviews.reverse())})},l.prototype.setStars=function(){var l=this;setTimeout(function(){l.showStar(5),l.showStar(4),l.showStar(3),l.showStar(2),l.showStar(1)},500)},l.prototype.showStar=function(l){var n=document.getElementsByClassName("star"+l);if(n)for(var u=0;u<n.length;u++)n[u].innerHTML='<ion-icon  color="warning" name="star"></ion-icon>'.repeat(l)},l}(),c=function(){return function(){}}(),h=u("pMnS"),g=u("oBZk"),v=u("gIcY"),d=u("Ip0R"),m=u("ZYCi"),p=e.sb({encapsulation:0,styles:[[".textArea[_ngcontent-%COMP%]{border:1px solid #18d6ff;margin:0 10px}.buttons[_ngcontent-%COMP%]{margin:0 10px 10px}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]{margin:5px 10px}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .list-ios[_ngcontent-%COMP%]{margin:0}.error[_ngcontent-%COMP%]{text-align:center;background:rgba(255,12,0,.44);margin:5px 10px}"]],data:{}});function f(l){return e.Nb(0,[(l()(),e.ub(0,0,null,null,3,"ion-button",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.rate(l.context.$implicit)&&e),e},g.y,g.b)),e.tb(1,49152,null,0,s.i,[e.h,e.k,e.z],null,null),(l()(),e.ub(2,0,null,0,1,"ion-icon",[["class","stars"],["color","warning"],["name","star-outline"],["size","large"]],null,null,null,g.G,g.j)),e.tb(3,49152,null,0,s.A,[e.h,e.k,e.z],{color:[0,"color"],name:[1,"name"],size:[2,"size"]},null)],function(l,n){l(n,3,0,"warning","star-outline","large")},null)}function w(l){return e.Nb(0,[(l()(),e.ub(0,0,null,null,7,"ion-card",[],null,null,null,g.B,g.d)),e.tb(1,49152,null,0,s.k,[e.h,e.k,e.z],null,null),(l()(),e.ub(2,0,null,0,5,"ion-card-header",[],null,null,null,g.A,g.e)),e.tb(3,49152,null,0,s.m,[e.h,e.k,e.z],null,null),(l()(),e.ub(4,0,null,0,0,"div",[],[[8,"className",0]],null,null,null,null)),(l()(),e.ub(5,0,null,0,2,"div",[["style","font-size: large"]],null,null,null,null,null)),(l()(),e.ub(6,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(7,null,["",""]))],null,function(l,n){l(n,4,0,"star"+n.context.$implicit.star),l(n,7,0,n.context.$implicit.message)})}function k(l){return e.Nb(0,[(l()(),e.ub(0,0,null,null,6,"ion-header",[],null,null,null,g.F,g.i)),e.tb(1,49152,null,0,s.z,[e.h,e.k,e.z],null,null),(l()(),e.ub(2,0,null,0,4,"ion-toolbar",[],null,null,null,g.T,g.w)),e.tb(3,49152,null,0,s.zb,[e.h,e.k,e.z],null,null),(l()(),e.ub(4,0,null,0,2,"ion-title",[],null,null,null,g.S,g.v)),e.tb(5,49152,null,0,s.xb,[e.h,e.k,e.z],null,null),(l()(),e.Lb(6,0,["Review ",""])),(l()(),e.ub(7,0,null,null,61,"ion-content",[],null,null,null,g.D,g.g)),e.tb(8,49152,null,0,s.s,[e.h,e.k,e.z],null,null),(l()(),e.ub(9,0,null,0,57,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Fb(l,11).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Fb(l,11).onReset()&&t),t},null,null)),e.tb(10,16384,null,0,v.m,[],null,null),e.tb(11,4210688,[["form",4]],0,v.h,[[8,null],[8,null]],null,null),e.Ib(2048,null,v.a,null,[v.h]),e.tb(13,16384,null,0,v.g,[[4,v.a]],null,null),(l()(),e.ub(14,0,null,null,32,"ion-list",[],null,null,null,g.K,g.n)),e.tb(15,49152,null,0,s.M,[e.h,e.k,e.z],null,null),(l()(),e.ub(16,0,null,0,30,"ion-radio-group",[],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,19)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.Fb(l,19)._handleChangeEvent(u.target.value)&&t),t},g.L,g.p)),e.Ib(5120,null,v.d,function(l){return[l]},[s.Kb]),e.tb(18,49152,null,0,s.Y,[e.h,e.k,e.z],null,null),e.tb(19,16384,null,0,s.Kb,[e.k],null,null),(l()(),e.ub(20,0,null,0,8,"ion-item",[],null,null,null,g.I,g.l)),e.tb(21,49152,null,0,s.F,[e.h,e.k,e.z],null,null),(l()(),e.ub(22,0,null,0,2,"ion-label",[],null,null,null,g.J,g.m)),e.tb(23,49152,null,0,s.L,[e.h,e.k,e.z],null,null),(l()(),e.Lb(-1,0,["This is my own car"])),(l()(),e.ub(25,0,null,0,3,"ion-radio",[],null,[[null,"ionSelect"],[null,"ionBlur"]],function(l,n,u){var t=!0,r=l.component;return"ionBlur"===n&&(t=!1!==e.Fb(l,28)._handleBlurEvent()&&t),"ionSelect"===n&&(t=!1!==e.Fb(l,28)._handleIonSelect(u.target.checked)&&t),"ionSelect"===n&&(t=!1!==r.setType(1)&&t),t},g.M,g.o)),e.Ib(5120,null,v.d,function(l){return[l]},[s.Ib]),e.tb(27,49152,null,0,s.X,[e.h,e.k,e.z],null,null),e.tb(28,16384,null,0,s.Ib,[e.k],null,null),(l()(),e.ub(29,0,null,0,8,"ion-item",[],null,null,null,g.I,g.l)),e.tb(30,49152,null,0,s.F,[e.h,e.k,e.z],null,null),(l()(),e.ub(31,0,null,0,2,"ion-label",[],null,null,null,g.J,g.m)),e.tb(32,49152,null,0,s.L,[e.h,e.k,e.z],null,null),(l()(),e.Lb(-1,0,["I am looking to buy this car"])),(l()(),e.ub(34,0,null,0,3,"ion-radio",[],null,[[null,"ionSelect"],[null,"ionBlur"]],function(l,n,u){var t=!0,r=l.component;return"ionBlur"===n&&(t=!1!==e.Fb(l,37)._handleBlurEvent()&&t),"ionSelect"===n&&(t=!1!==e.Fb(l,37)._handleIonSelect(u.target.checked)&&t),"ionSelect"===n&&(t=!1!==r.setType(2)&&t),t},g.M,g.o)),e.Ib(5120,null,v.d,function(l){return[l]},[s.Ib]),e.tb(36,49152,null,0,s.X,[e.h,e.k,e.z],null,null),e.tb(37,16384,null,0,s.Ib,[e.k],null,null),(l()(),e.ub(38,0,null,0,8,"ion-item",[],null,null,null,g.I,g.l)),e.tb(39,49152,null,0,s.F,[e.h,e.k,e.z],null,null),(l()(),e.ub(40,0,null,0,2,"ion-label",[],null,null,null,g.J,g.m)),e.tb(41,49152,null,0,s.L,[e.h,e.k,e.z],null,null),(l()(),e.Lb(-1,0,["Other"])),(l()(),e.ub(43,0,null,0,3,"ion-radio",[],null,[[null,"ionSelect"],[null,"ionBlur"]],function(l,n,u){var t=!0,r=l.component;return"ionBlur"===n&&(t=!1!==e.Fb(l,46)._handleBlurEvent()&&t),"ionSelect"===n&&(t=!1!==e.Fb(l,46)._handleIonSelect(u.target.checked)&&t),"ionSelect"===n&&(t=!1!==r.setType(3)&&t),t},g.M,g.o)),e.Ib(5120,null,v.d,function(l){return[l]},[s.Ib]),e.tb(45,49152,null,0,s.X,[e.h,e.k,e.z],null,null),e.tb(46,16384,null,0,s.Ib,[e.k],null,null),(l()(),e.ub(47,0,null,null,4,"ion-buttons",[["class","buttons"]],null,null,null,g.z,g.c)),e.tb(48,49152,null,0,s.j,[e.h,e.k,e.z],null,null),(l()(),e.jb(16777216,null,0,2,null,f)),e.tb(50,278528,null,0,d.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),e.Gb(51,5),(l()(),e.ub(52,0,null,null,7,"div",[["class","textArea"]],null,null,null,null,null)),(l()(),e.ub(53,0,null,null,6,"ion-textarea",[["name","message"],["ngModel",""],["placeholder","Enter your car review here. This can be anything that you wish to share with other people..."],["rows","3"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,54)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.Fb(l,54)._handleInputEvent(u.target.value)&&t),t},g.R,g.u)),e.tb(54,16384,null,0,s.Lb,[e.k],null,null),e.Ib(1024,null,v.d,function(l){return[l]},[s.Lb]),e.tb(56,671744,null,0,v.i,[[2,v.a],[8,null],[8,null],[6,v.d]],{name:[0,"name"],model:[1,"model"]},null),e.Ib(2048,null,v.e,null,[v.i]),e.tb(58,16384,null,0,v.f,[[4,v.e]],null,null),e.tb(59,49152,null,0,s.vb,[e.h,e.k,e.z],{name:[0,"name"],placeholder:[1,"placeholder"],rows:[2,"rows"]},null),(l()(),e.ub(60,0,null,null,1,"div",[["class","error"]],null,null,null,null,null)),(l()(),e.Lb(61,null,["",""])),(l()(),e.ub(62,0,null,null,4,"ion-buttons",[["slot","primary"]],null,null,null,g.z,g.c)),e.tb(63,49152,null,0,s.j,[e.h,e.k,e.z],null,null),(l()(),e.ub(64,0,null,0,2,"ion-button",[["class","submit"],["color","success"],["fill","solid"],["size","large"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.leaveReview(e.Fb(l,11))&&t),t},g.y,g.b)),e.tb(65,49152,null,0,s.i,[e.h,e.k,e.z],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),(l()(),e.Lb(-1,0,["Leave review"])),(l()(),e.jb(16777216,null,0,1,null,w)),e.tb(68,278528,null,0,d.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component,e=l(n,51,0,1,2,3,4,5);l(n,50,0,e),l(n,56,0,"message",""),l(n,59,0,"message","Enter your car review here. This can be anything that you wish to share with other people...","3"),l(n,65,0,"success","solid","large"),l(n,68,0,u.reviews)},function(l,n){var u=n.component;l(n,6,0,u.regNumb),l(n,9,0,e.Fb(n,13).ngClassUntouched,e.Fb(n,13).ngClassTouched,e.Fb(n,13).ngClassPristine,e.Fb(n,13).ngClassDirty,e.Fb(n,13).ngClassValid,e.Fb(n,13).ngClassInvalid,e.Fb(n,13).ngClassPending),l(n,53,0,e.Fb(n,58).ngClassUntouched,e.Fb(n,58).ngClassTouched,e.Fb(n,58).ngClassPristine,e.Fb(n,58).ngClassDirty,e.Fb(n,58).ngClassValid,e.Fb(n,58).ngClassInvalid,e.Fb(n,58).ngClassPending),l(n,61,0,u.error)})}function y(l){return e.Nb(0,[(l()(),e.ub(0,0,null,null,1,"app-tab2",[],null,null,null,k,p)),e.tb(1,114688,null,0,b,[r.a,a.a,m.a,o.a,s.a],null,null)],function(l,n){l(n,1,0)},null)}var F=e.qb("app-tab2",b,y,{},{},[]);u.d(n,"Tab2PageModuleNgFactory",function(){return C});var C=e.rb(c,[],function(l){return e.Cb([e.Db(512,e.j,e.bb,[[8,[h.a,F]],[3,e.j],e.x]),e.Db(4608,d.l,d.k,[e.u,[2,d.s]]),e.Db(4608,v.l,v.l,[]),e.Db(4608,s.b,s.b,[e.z,e.g]),e.Db(4608,s.Eb,s.Eb,[s.b,e.j,e.q]),e.Db(4608,s.Hb,s.Hb,[s.b,e.j,e.q]),e.Db(1073742336,d.b,d.b,[]),e.Db(1073742336,v.k,v.k,[]),e.Db(1073742336,v.c,v.c,[]),e.Db(1073742336,s.Bb,s.Bb,[]),e.Db(1073742336,m.o,m.o,[[2,m.t],[2,m.m]]),e.Db(1073742336,c,c,[]),e.Db(1024,m.k,function(){return[[{path:"",component:b},{path:":regNumb",component:b}]]},[])])})}}]);