(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{edxm:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("mrSG"),r=u("U+Dm"),o=u("YI5y"),i=u("ZZ/e"),s=function(){function l(l,n,u,e,t){this.purchaseServie=l,this.carService=n,this.route=u,this.router=e,this.loadingController=t,this.message="",this.stripe=Stripe("pk_test_DXtuhrwBCTqVo7v0OBaCzArG"),this.card=null,this.elements=null,this.token=null,this.product=0}return l.prototype.Submit=function(){return t.b(this,void 0,void 0,function(){var l,n,u,e=this;return t.e(this,function(t){switch(t.label){case 0:return 0===this.product?[3,3]:(this.message="",[4,this.loadingController.create({message:"Please wait..."}).then(function(l){e.load=l,e.load.present()})]);case 1:return t.sent(),[4,this.stripe.createPaymentMethod("card",this.cardElement)];case 2:return l=t.sent(),n=l.paymentMethod,(u=l.error)?(this.loadingController.dismiss(),console.log("ERROR"+u),this.message="Incorrect data"):(console.log(n),this.purchaseServie.confirm(n.id,this.regNumb,"",this.product.toString()).subscribe(function(l){e.handleServerResponse(l)})),[3,4];case 3:this.message="Select product",t.label=4;case 4:return[2]}})})},l.prototype.ngOnInit=function(){var l=this;this.route.params.subscribe(function(n){l.regNumb=n.regNumb}),this.purchaseServie.showModal=!0,this.elements=this.stripe.elements(),this.cardElement=this.elements.create("card",{hidePostalCode:!0,style:{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"15px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}}),this.cardElement.mount("#card-element"),1===this.purchaseServie.numberPurchase&&(document.getElementById("stolen").setAttribute("checked","true"),this.product=1),2===this.purchaseServie.numberPurchase&&(document.getElementById("vdi").setAttribute("checked","true"),this.product=2)},l.prototype.handleServerResponse=function(l){return t.b(this,void 0,void 0,function(){var n,u,e=this;return t.e(this,function(t){switch(t.label){case 0:return l.NotFound?(this.message=l.NotFound,this.loadingController.dismiss(),[2]):l.error?(this.loadingController.dismiss(),this.message=l.error.jsonBody.error.message,[3,4]):[3,1];case 1:return l.requires_action?[4,this.stripe.handleCardAction(l.payment_intent_client_secret)]:[3,3];case 2:return n=t.sent(),u=n.paymentIntent,n.error?(this.message="Fail authentication",this.loadingController.dismiss()):this.purchaseServie.confirm("",this.regNumb,u.id,"").subscribe(function(l){e.handleServerResponse(l)}),[3,4];case 3:"2"==l.product&&(this.purchaseServie.product=2,this.tariffVdi()),"1"==l.product&&(this.purchaseServie.product=1,this.tariffStolen()),this.purchaseServie.purchased=!0,t.label=4;case 4:return[2]}})})},l.prototype.tariffVdi=function(){var l=this;this.carService.getVdi(this.regNumb).subscribe(function(n){l.purchaseServie.vdimap.set(l.regNumb,n.object[0]),l.purchaseServie.numberVdi=l.regNumb,l.loadingController.dismiss(),l.router.navigate([l.purchaseServie.url])})},l.prototype.tariffStolen=function(){var l=this;this.purchaseServie.numberVdi=this.regNumb,this.carService.getStolen(this.regNumb).subscribe(function(n){l.purchaseServie.stolen.set(l.regNumb,n.object[0].stolen),l.loadingController.dismiss(),l.router.navigate([l.purchaseServie.url])})},l.prototype.setCost=function(l){this.message="",this.product=l},l}(),c=function(){return function(){}}(),a=u("pMnS"),b=u("oBZk"),h=u("gIcY"),d=u("ZYCi"),p=e.sb({encapsulation:0,styles:[[".StripeElement[_ngcontent-%COMP%]{box-sizing:border-box;height:40px;padding:10px 12px;border:1px solid transparent;border-radius:4px;background-color:#fff;box-shadow:0 1px 3px 0 #e6ebf1;-webkit-transition:box-shadow 150ms;transition:box-shadow 150ms ease}.StripeElement--focus[_ngcontent-%COMP%]{box-shadow:0 1px 3px 0 #cfd7df}.StripeElement--invalid[_ngcontent-%COMP%]{border-color:#fa755a}.StripeElement--webkit-autofill[_ngcontent-%COMP%]{background-color:#fefde5!important}.message[_ngcontent-%COMP%]{text-align:center;background:rgba(255,12,0,.44)}"]],data:{}});function m(l){return e.Nb(0,[(l()(),e.ub(0,0,null,null,6,"ion-header",[],null,null,null,b.F,b.i)),e.tb(1,49152,null,0,i.z,[e.h,e.k,e.z],null,null),(l()(),e.ub(2,0,null,0,4,"ion-toolbar",[],null,null,null,b.T,b.w)),e.tb(3,49152,null,0,i.zb,[e.h,e.k,e.z],null,null),(l()(),e.ub(4,0,null,0,2,"ion-title",[],null,null,null,b.S,b.v)),e.tb(5,49152,null,0,i.xb,[e.h,e.k,e.z],null,null),(l()(),e.Lb(6,0,["",""])),(l()(),e.ub(7,0,null,null,61,"ion-radio-group",[],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,10)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.Fb(l,10)._handleChangeEvent(u.target.value)&&t),t},b.L,b.p)),e.Ib(5120,null,h.d,function(l){return[l]},[i.Kb]),e.tb(9,49152,null,0,i.Y,[e.h,e.k,e.z],null,null),e.tb(10,16384,null,0,i.Kb,[e.k],null,null),(l()(),e.ub(11,0,null,0,18,"ion-item",[],null,null,null,b.I,b.l)),e.tb(12,49152,null,0,i.F,[e.h,e.k,e.z],null,null),(l()(),e.ub(13,0,null,0,3,"h1",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Silver "])),(l()(),e.ub(15,0,null,null,1,"span",[["style","color: #2adc11"]],null,null,null,null,null)),(l()(),e.Lb(-1,null,["7.99\xa3"])),(l()(),e.ub(17,0,null,0,8,"div",[["style","margin-left: 21px"]],null,null,null,null,null)),(l()(),e.ub(18,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Clocked mileage,"])),(l()(),e.ub(20,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Stolen check,"])),(l()(),e.ub(22,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Check mot and road tax,"])),(l()(),e.ub(24,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" check gaps in MOT"])),(l()(),e.ub(26,0,null,0,3,"ion-radio",[["color","success"],["id","stolen"],["slot","end"]],null,[[null,"ionSelect"],[null,"ionBlur"]],function(l,n,u){var t=!0,r=l.component;return"ionBlur"===n&&(t=!1!==e.Fb(l,29)._handleBlurEvent()&&t),"ionSelect"===n&&(t=!1!==e.Fb(l,29)._handleIonSelect(u.target.checked)&&t),"ionSelect"===n&&(t=!1!==r.setCost(1)&&t),t},b.M,b.o)),e.Ib(5120,null,h.d,function(l){return[l]},[i.Ib]),e.tb(28,49152,null,0,i.X,[e.h,e.k,e.z],{color:[0,"color"]},null),e.tb(29,16384,null,0,i.Ib,[e.k],null,null),(l()(),e.ub(30,0,null,0,38,"ion-item",[],null,null,null,b.I,b.l)),e.tb(31,49152,null,0,i.F,[e.h,e.k,e.z],null,null),(l()(),e.ub(32,0,null,0,3,"h1",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Gold "])),(l()(),e.ub(34,0,null,null,1,"span",[["style","color:#2adc11"]],null,null,null,null,null)),(l()(),e.Lb(-1,null,["14.99\xa3"])),(l()(),e.ub(36,0,null,0,28,"div",[["style","margin-left: 10px"]],null,null,null,null,null)),(l()(),e.ub(37,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Clocked mileage,"])),(l()(),e.ub(39,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Stolen check, "])),(l()(),e.ub(41,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Check mot and road tax, "])),(l()(),e.ub(43,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["check gaps in MOT, "])),(l()(),e.ub(45,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" HP check - oustanding finance check , "])),(l()(),e.ub(47,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Scrapped check, "])),(l()(),e.ub(49,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" VIN check, "])),(l()(),e.ub(51,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Export check, "])),(l()(),e.ub(53,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Import check, "])),(l()(),e.ub(55,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Write off check, "])),(l()(),e.ub(57,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Color change check, "])),(l()(),e.ub(59,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Number of owners check, "])),(l()(),e.ub(61,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Previous period of ownership, "])),(l()(),e.ub(63,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Plate change count, "])),(l()(),e.ub(65,0,null,0,3,"ion-radio",[["color","success"],["id","vdi"],["slot","end"]],null,[[null,"ionSelect"],[null,"ionBlur"]],function(l,n,u){var t=!0,r=l.component;return"ionBlur"===n&&(t=!1!==e.Fb(l,68)._handleBlurEvent()&&t),"ionSelect"===n&&(t=!1!==e.Fb(l,68)._handleIonSelect(u.target.checked)&&t),"ionSelect"===n&&(t=!1!==r.setCost(2)&&t),t},b.M,b.o)),e.Ib(5120,null,h.d,function(l){return[l]},[i.Ib]),e.tb(67,49152,null,0,i.X,[e.h,e.k,e.z],{color:[0,"color"]},null),e.tb(68,16384,null,0,i.Ib,[e.k],null,null),(l()(),e.ub(69,0,null,null,11,"ion-content",[],null,null,null,b.D,b.g)),e.tb(70,49152,null,0,i.s,[e.h,e.k,e.z],null,null),(l()(),e.ub(71,0,null,0,3,"div",[["id","card-element"]],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" A Stripe Element will be inserted here. "])),(l()(),e.ub(73,0,null,null,1,"p",[["class","message"]],null,null,null,null,null)),(l()(),e.Lb(74,null,["",""])),(l()(),e.ub(75,0,null,0,1,"div",[["class","message"]],null,null,null,null,null)),(l()(),e.Lb(76,null,["",""])),(l()(),e.ub(77,0,null,0,0,"div",[["id","payment-request-button"]],null,null,null,null,null)),(l()(),e.ub(78,0,null,0,2,"ion-button",[["color","success"],["expand","block"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.Submit()&&e),e},b.y,b.b)),e.tb(79,49152,null,0,i.i,[e.h,e.k,e.z],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),e.Lb(-1,0,["Buy"]))],function(l,n){l(n,28,0,"success"),l(n,67,0,"success"),l(n,79,0,"success","block")},function(l,n){var u=n.component;l(n,6,0,u.regNumb),l(n,74,0,u.message),l(n,76,0,u.message)})}function g(l){return e.Nb(0,[(l()(),e.ub(0,0,null,null,1,"app-purchase",[],null,null,null,m,p)),e.tb(1,114688,null,0,s,[r.a,o.a,d.a,d.m,i.Db],null,null)],function(l,n){l(n,1,0)},null)}var f=e.qb("app-purchase",s,g,{},{},[]),v=u("Ip0R");u.d(n,"PurchasePageModuleNgFactory",function(){return k});var k=e.rb(c,[],function(l){return e.Cb([e.Db(512,e.j,e.bb,[[8,[a.a,f]],[3,e.j],e.x]),e.Db(4608,v.l,v.k,[e.u,[2,v.s]]),e.Db(4608,h.l,h.l,[]),e.Db(4608,i.b,i.b,[e.z,e.g]),e.Db(4608,i.Eb,i.Eb,[i.b,e.j,e.q]),e.Db(4608,i.Hb,i.Hb,[i.b,e.j,e.q]),e.Db(1073742336,v.b,v.b,[]),e.Db(1073742336,h.k,h.k,[]),e.Db(1073742336,h.c,h.c,[]),e.Db(1073742336,i.Bb,i.Bb,[]),e.Db(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),e.Db(1073742336,c,c,[]),e.Db(1024,d.k,function(){return[[{path:"",component:s}]]},[])])})}}]);