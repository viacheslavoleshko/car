(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"ZG/G":function(e,o,t){"use strict";t.r(o),t.d(o,"ion_popover",function(){return f});var r=t("mrSG"),i=t("24pd"),n=(t("lSdy"),t("bjU6"),t("XIrJ")),s=t("aEGo"),p=t("6WfQ"),a=t("uoaX"),l=function(e,o,t){var r="top",i="left",n=o.querySelector(".popover-content"),s=n.getBoundingClientRect(),p=s.width,a=s.height,l=o.ownerDocument.defaultView.innerWidth,d=o.ownerDocument.defaultView.innerHeight,h=t&&t.target&&t.target.getBoundingClientRect(),u=null!=h&&"top"in h?h.top:d/2-a/2,v=null!=h&&"left"in h?h.left:l/2,f=h&&h.width||0,b=h&&h.height||0,m=o.querySelector(".popover-arrow"),w=m.getBoundingClientRect(),g=w.width,y=w.height;null==h&&(m.style.display="none");var x={top:u+b,left:v+f/2-g/2},k={top:u+b+(y-1),left:v+f/2-p/2},j=!1,D=!1;k.left<c+25?(j=!0,k.left=c):p+c+k.left+25>l&&(D=!0,k.left=l-p-c,i="right"),u+b+a>d&&u-a>0?(x.top=u-(y+1),k.top=u-a-(y-1),o.className=o.className+" popover-bottom",r="bottom"):u+b+a>d&&(n.style.bottom=c+"%"),m.style.top=x.top+"px",m.style.left=x.left+"px",n.style.top=k.top+"px",n.style.left=k.left+"px",j&&(n.style.left="calc("+k.left+"px + var(--ion-safe-area-left, 0px))"),D&&(n.style.left="calc("+k.left+"px - var(--ion-safe-area-right, 0px))"),n.style.transformOrigin=r+" "+i;var O=new e,E=new e;E.addElement(o.querySelector("ion-backdrop")),E.fromTo("opacity",.01,.08);var P=new e;return P.addElement(o.querySelector(".popover-wrapper")),P.fromTo("opacity",.01,1),Promise.resolve(O.addElement(o).easing("ease").duration(100).add(E).add(P))},c=5,d=function(e,o){var t=new e,r=new e;r.addElement(o.querySelector("ion-backdrop"));var i=new e;return i.addElement(o.querySelector(".popover-wrapper")),i.fromTo("opacity",.99,0),r.fromTo("opacity",.08,0),Promise.resolve(t.addElement(o).easing("ease").duration(500).add(r).add(i))},h=function(e,o,t){var r=o.ownerDocument,i="rtl"===r.dir,n="top",s=i?"right":"left",p=o.querySelector(".popover-content"),a=p.getBoundingClientRect(),l=a.width,c=a.height,d=r.defaultView.innerWidth,h=r.defaultView.innerHeight,v=t&&t.target&&t.target.getBoundingClientRect(),f=null!=v&&"bottom"in v?v.bottom:h/2-c/2,b=v&&v.height||0,m={top:f,left:null!=v&&"left"in v?i?v.left-l+v.width:v.left:d/2-l/2};m.left<u?(m.left=u,s="left"):l+u+m.left>d&&(m.left=d-l-u,s="right"),f+b+c>h&&f-c>0?(m.top=f-c-b,o.className=o.className+" popover-bottom",n="bottom"):f+b+c>h&&(p.style.bottom=u+"px"),p.style.top=m.top+"px",p.style.left=m.left+"px",p.style.transformOrigin=n+" "+s;var w=new e,g=new e;g.addElement(o.querySelector("ion-backdrop")),g.fromTo("opacity",.01,.32);var y=new e;y.addElement(o.querySelector(".popover-wrapper")),y.fromTo("opacity",.01,1);var x=new e;x.addElement(o.querySelector(".popover-content")),x.fromTo("scale",.001,1);var k=new e;return k.addElement(o.querySelector(".popover-viewport")),k.fromTo("opacity",.01,1),Promise.resolve(w.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(g).add(y).add(x).add(k))},u=12,v=function(e,o){var t=new e,r=new e;r.addElement(o.querySelector("ion-backdrop"));var i=new e;return i.addElement(o.querySelector(".popover-wrapper")),i.fromTo("opacity",.99,0),r.fromTo("opacity",.32,0),Promise.resolve(t.addElement(o).easing("ease").duration(500).add(r).add(i))},f=function(){function e(e){Object(i.m)(this,e),this.presented=!1,this.mode=Object(i.e)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.didPresent=Object(i.d)(this,"ionPopoverDidPresent",7),this.willPresent=Object(i.d)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(i.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(i.d)(this,"ionPopoverDidDismiss",7)}return e.prototype.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,n.a)},e.prototype.lifecycle=function(e){var o=this.usersElement,t=b[e.type];if(o&&t){var r=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(r)}},e.prototype.present=function(){return r.b(this,void 0,void 0,function(){var e,o,t;return r.e(this,function(r){switch(r.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return o=Object.assign({},this.componentProps,{popover:this.el}),t=this,[4,Object(p.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],o)];case 1:return t.usersElement=r.sent(),[4,Object(a.a)(this.usersElement)];case 2:return r.sent(),[2,Object(n.e)(this,"popoverEnter",l,h,this.event)]}})})},e.prototype.dismiss=function(e,o){return r.b(this,void 0,void 0,function(){var t;return r.e(this,function(r){switch(r.label){case 0:return[4,Object(n.f)(this,e,o,"popoverLeave",d,v,this.event)];case 1:return(t=r.sent())?[4,Object(p.b)(this.delegate,this.usersElement)]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2,t]}})})},e.prototype.onDidDismiss=function(){return Object(n.g)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(n.g)(this.el,"ionPopoverWillDismiss")},e.prototype.hostData=function(){var e,o=Object(i.e)(this);return{"aria-modal":"true","no-router":!0,style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},Object(s.b)(this.cssClass),(e={},e[o]=!0,e["popover-translucent"]=this.translucent,e))}},e.prototype.__stencil_render=function(){return[Object(i.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(i.i)("div",{class:"popover-wrapper"},Object(i.i)("div",{class:"popover-arrow"}),Object(i.i)("div",{class:"popover-content"}))]},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),e.prototype.render=function(){return Object(i.i)(i.a,this.hostData(),this.__stencil_render())},Object.defineProperty(e,"style",{get:function(){return'.sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1000}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}'},enumerable:!0,configurable:!0}),e}(),b={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}}}]);