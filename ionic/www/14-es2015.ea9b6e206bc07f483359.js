(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{edxm:function(t,e,n){"use strict";n.r(e);var l=n("8Y7J"),s=n("mrSG"),i=n("IheW");let r,o=(()=>{class t{constructor(t){this.http=t,this.host="https://nix.ltd",this.apiHost=`${this.host}/api/v1`,this.urls={subscribe:`${this.apiHost}/stripe/subscribe`,charge:`${this.apiHost}/stripe/charge`,subscribeAccept:`${this.apiHost}/stripe/subscribeComplete`,isActive:`${this.apiHost}/stripe/subscription/active`,mySubscription:`${this.apiHost}/stripe/subscription/getMy`,getPlan:`${this.apiHost}/stripe/getPlans`,notifyStatus:`${this.apiHost}/notifications/status`},console.log("Api Provider"),console.log("Setting new host"+r),this.setHost(r)}setHost(t){void 0!==t&&(this.host=t,this.apiHost=`${this.host}/api/v1`)}getToken(){return t.token}charge(){return s.b(this,void 0,void 0,function*(){return this.http.get(this.urls.charge,{headers:{Token:this.getToken()}})})}subscribe(t,e,n){return s.b(this,void 0,void 0,function*(){})}getApiHost(){return this.apiHost}getTokens(t){return this.http.get(`http://localhost/stripe/${t}`)}confirm(t,e){let n=(new i.g).set("token",t).set("regNumb",e);return this.http.get("http://localhost/confirm",{headers:n})}}return t.token="token",t.selectedTab=0,t.ngInjectableDef=l.Mb({factory:function(){return new t(l.Nb(i.c))},token:t,providedIn:"root"}),t})();class u{constructor(t,e){this.purchaseServie=t,this.route=e,this.message="",this.stripe=Stripe("pk_test_DXtuhrwBCTqVo7v0OBaCzArG"),this.cards={number:"4242424242424242",expMonth:"12",expYear:"21",cvc:"123"},this.card=null,this.elements=null,this.token=null}Submit(){return s.b(this,void 0,void 0,function*(){this.message="";const{paymentMethod:t,error:e}=yield this.stripe.createPaymentMethod("card",this.cardElement);e?console.log("ERROR"+e):(console.log(t),this.purchaseServie.confirm(t.id,this.regNumb).subscribe(t=>{console.log(t),this.handleServerResponse(t)}))})}ngOnInit(){this.route.params.subscribe(t=>{this.regNumb=t.regNumb}),this.elements=this.stripe.elements(),this.cardElement=this.elements.create("card"),this.cardElement.mount("#card-element")}handleServerResponse(t){return s.b(this,void 0,void 0,function*(){if(t.error)console.log("response.error");else if(t.requires_action){console.log("require");const{error:e,paymentIntent:n}=yield this.stripe.handleCardAction(t.payment_intent_client_secret);e?(this.message="Err",console.log("ActionError")):this.purchaseServie.confirm(n.id,this.regNumb).subscribe(t=>{this.handleServerResponse(t)})}else this.message="SUCCESS",console.log("handle  success")})}}class c{}var h=n("pMnS"),a=n("oBZk"),b=n("ZZ/e"),p=n("iInd"),d=l.pb({encapsulation:0,styles:[[""]],data:{}});function m(t){return l.Jb(0,[(t()(),l.rb(0,0,null,null,6,"ion-header",[],null,null,null,a.v,a.f)),l.qb(1,49152,null,0,b.y,[l.h,l.k,l.x],null,null),(t()(),l.rb(2,0,null,0,4,"ion-toolbar",[],null,null,null,a.F,a.p)),l.qb(3,49152,null,0,b.yb,[l.h,l.k,l.x],null,null),(t()(),l.rb(4,0,null,0,2,"ion-title",[],null,null,null,a.E,a.o)),l.qb(5,49152,null,0,b.wb,[l.h,l.k,l.x],null,null),(t()(),l.Hb(-1,0,["purchase"])),(t()(),l.rb(7,0,null,null,9,"ion-content",[],null,null,null,a.t,a.d)),l.qb(8,49152,null,0,b.r,[l.h,l.k,l.x],null,null),(t()(),l.rb(9,0,null,0,1,"div",[["id","card-element"]],null,null,null,null,null)),(t()(),l.Hb(-1,null,[" A Stripe Element will be inserted here. "])),(t()(),l.rb(11,0,null,0,0,"div",[["id","payment-request-button"]],null,null,null,null,null)),(t()(),l.rb(12,0,null,0,2,"ion-button",[["color","success"]],null,[[null,"click"]],function(t,e,n){var l=!0;return"click"===e&&(l=!1!==t.component.Submit()&&l),l},a.r,a.b)),l.qb(13,49152,null,0,b.h,[l.h,l.k,l.x],{color:[0,"color"]},null),(t()(),l.Hb(-1,0,["Buy"])),(t()(),l.rb(15,0,null,0,1,"h1",[],null,null,null,null,null)),(t()(),l.Hb(16,null,["",""]))],function(t,e){t(e,13,0,"success")},function(t,e){t(e,16,0,e.component.message)})}function g(t){return l.Jb(0,[(t()(),l.rb(0,0,null,null,1,"app-purchase",[],null,null,null,m,d)),l.qb(1,114688,null,0,u,[o,p.a],null,null)],function(t,e){t(e,1,0)},null)}var v=l.nb("app-purchase",u,g,{},{},[]),f=n("SVse"),k=n("s7LF");n.d(e,"PurchasePageModuleNgFactory",function(){return A});var A=l.ob(c,[],function(t){return l.zb([l.Ab(512,l.j,l.Y,[[8,[h.a,v]],[3,l.j],l.v]),l.Ab(4608,f.l,f.k,[l.s,[2,f.s]]),l.Ab(4608,k.i,k.i,[]),l.Ab(4608,b.a,b.a,[l.x,l.g]),l.Ab(4608,b.Cb,b.Cb,[b.a,l.j,l.p]),l.Ab(4608,b.Fb,b.Fb,[b.a,l.j,l.p]),l.Ab(1073742336,f.b,f.b,[]),l.Ab(1073742336,k.h,k.h,[]),l.Ab(1073742336,k.b,k.b,[]),l.Ab(1073742336,b.Ab,b.Ab,[]),l.Ab(1073742336,p.p,p.p,[[2,p.u],[2,p.m]]),l.Ab(1073742336,c,c,[]),l.Ab(1024,p.k,function(){return[[{path:"",component:u}]]},[])])})}}]);