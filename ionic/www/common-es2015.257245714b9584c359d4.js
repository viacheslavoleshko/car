(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1hGh":function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"b",function(){return s});const r=async(t,e,i,r,s)=>{if(t)return t.attachViewToDom(e,i,s,r);if("string"!=typeof i&&!(i instanceof HTMLElement))throw new Error("framework delegate is missing");const n="string"==typeof i?e.ownerDocument&&e.ownerDocument.createElement(i):i;return r&&r.forEach(t=>n.classList.add(t)),s&&Object.assign(n,s),e.appendChild(n),n.componentOnReady&&await n.componentOnReady(),n},s=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},"7rGv":function(t,e,i){"use strict";i.d(e,"a",function(){return y}),i.d(e,"b",function(){return f}),i.d(e,"c",function(){return w}),i.d(e,"d",function(){return n});var r=i("mLBW"),s=i("9Z7W");const n=t=>new Promise((e,i)=>{Object(r.n)(()=>{o(t),a(t).then(i=>{i.animation&&i.animation.destroy(),c(t),e(i)},e=>{c(t),i(e)})})}),o=t=>{const e=t.enteringEl,i=t.leavingEl;S(e,i,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),w(e,!1),i&&w(i,!1)},a=async t=>{const e=await l(t);return e?d(e,t):u(t)},c=t=>{const e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")},l=async t=>{if(t.leavingEl&&t.animated&&0!==t.duration)return t.animationBuilder?t.animationBuilder:"ios"===t.mode?(await(()=>i.e(99).then(i.bind(null,"0SUp")))()).iosTransitionAnimation:(await(()=>i.e(100).then(i.bind(null,"Zb87")))()).mdTransitionAnimation},d=async(t,e)=>{await h(e,!0);const r=await i.e(1).then(i.bind(null,"UGhQ")).then(i=>i.create(t,e.baseEl,e));return p(e.enteringEl,e.leavingEl),await b(r,e),e.progressCallback&&e.progressCallback(void 0),r.hasCompleted&&v(e.enteringEl,e.leavingEl),{hasCompleted:r.hasCompleted,animation:r}},u=async t=>{const e=t.enteringEl,i=t.leavingEl;return await h(t,!1),p(e,i),v(e,i),{hasCompleted:!0}},h=async(t,e)=>{const i=(void 0!==t.deepWait?t.deepWait:e)?[y(t.enteringEl),y(t.leavingEl)]:[g(t.enteringEl),g(t.leavingEl)];await Promise.all(i),await m(t.viewIsReady,t.enteringEl)},m=async(t,e)=>{t&&await t(e)},b=(t,e)=>{const i=e.progressCallback,r=new Promise(e=>t.onFinish(e));return i?(t.progressStart(),i(t)):t.play(),r},p=(t,e)=>{f(e,s.c),f(t,s.a)},v=(t,e)=>{f(t,s.b),f(e,s.d)},f=(t,e)=>{if(t){const i=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(i)}},g=t=>t&&t.componentOnReady?t.componentOnReady():Promise.resolve(),y=async t=>{const e=t;if(e){if(null!=e.componentOnReady&&null!=await e.componentOnReady())return;await Promise.all(Array.from(e.children).map(y))}},w=(t,e)=>{e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))},S=(t,e,i)=>{void 0!==t&&(t.style.zIndex="back"===i?"99":"101"),void 0!==e&&(e.style.zIndex="100")}},EQwm:function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"b",function(){return c}),i.d(e,"c",function(){return a}),i.d(e,"d",function(){return h}),i.d(e,"e",function(){return m}),i.d(e,"f",function(){return n}),i.d(e,"g",function(){return s}),i.d(e,"h",function(){return u}),i.d(e,"i",function(){return l}),i.d(e,"j",function(){return d}),i.d(e,"k",function(){return o});const r=t=>{"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},s=t=>!!t.shadowRoot&&!!t.attachShadow,n=t=>{const e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},o=(t,e,i,r,n)=>{if(t||s(e)){let t=e.querySelector("input.aux-input");t||((t=e.ownerDocument.createElement("input")).type="hidden",t.classList.add("aux-input"),e.appendChild(t)),t.disabled=n,t.name=i,t.value=r||""}},a=(t,e,i)=>Math.max(t,Math.min(e,i)),c=(t,e)=>{if(!t){const t="ASSERT: "+e;throw console.error(t),new Error(t)}},l=t=>t.timeStamp||Date.now(),d=t=>{if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];return{x:t.clientX,y:t.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},u=t=>{const e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error(`"${t}" is not a valid value for [side]. Use "start" or "end" instead.`)}},h=(t,e)=>{const i=t._original||t;return{_original:t,emit:m(i.emit.bind(i),e)}},m=(t,e=0)=>{let i;return(...r)=>{clearTimeout(i),i=setTimeout(t,e,...r)}}},IvgT:function(t,e,i){"use strict";i.d(e,"a",function(){return r});const r=t=>{try{if("string"!=typeof t||""===t)return t;const i=document.createDocumentFragment(),r=document.createElement("div");i.appendChild(r),r.innerHTML=t,a.forEach(t=>{const e=i.querySelectorAll(t);for(let r=e.length-1;r>=0;r--){const t=e[r];t.parentNode?t.parentNode.removeChild(t):i.removeChild(t);const o=n(t);for(let e=0;e<o.length;e++)s(o[e])}});const o=n(i);for(let t=0;t<o.length;t++)s(o[t]);const c=document.createElement("div");c.appendChild(i);const l=c.querySelector("div");return null!==l?l.innerHTML:c.innerHTML}catch(e){return console.error(e),""}},s=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let i=t.attributes.length-1;i>=0;i--){const e=t.attributes[i],r=e.name;if(!o.includes(r.toLowerCase())){t.removeAttribute(r);continue}const s=e.value;null!=s&&s.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}const e=n(t);for(let i=0;i<e.length;i++)s(e[i])},n=t=>null!=t.children?t.children:t.childNodes,o=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},Jbqe:function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return n}),i.d(e,"c",function(){return r}),i.d(e,"d",function(){return a});const r=(t,e)=>null!==e.closest(t),s=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0,n=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},o=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,i)=>{if(null!=t&&"#"!==t[0]&&!o.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),await r.componentOnReady(),r.push(t,i)}return!1}},LhMw:function(t,e,i){"use strict";var r=i("mrSG");i("YI5y");class s{constructor(t=null){this.m=t}}i("ZZ/e"),i("U+Dm");var n=i("oDru");i.d(e,"a",function(){return o});class o{constructor(t,e,i,r,n){this.router=t,this.carService=e,this.purchaseService=i,this.route=r,this.modalController=n,this.regNumb="",this.obj=new s,this.writeOffRecordList=[],this.financeList=[],this.show=!1,this.data=[],this.odometerValues=[]}ngOnInit(){this.route.params.subscribe(t=>{this.regNumb=t.regNumb}),""===this.regNumb&&(this.regNumb=this.purchaseService.numberVdi),this.search()}search(){this.canvas=document.querySelector("#Chart"),this.canvas&&this.canvas.remove(),this.motTest=void 0,""===this.regNumb||void 0===this.regNumb?(this.obj=void 0,this.tax=void 0,this.dvla=void 0,this.co=void 0,this.vdi=void 0):(this.regNumb=this.regNumb.toUpperCase(),this.carService.getMot(this.regNumb).subscribe(t=>{this.obj=t.object[0],void 0!==this.obj&&void 0!==this.obj.m.motTests&&this.createChart()}),this.carService.getTax(this.regNumb).subscribe(t=>{this.tax=t.object[0]}),this.showVdi(this.purchaseService.vdimap,this.regNumb.toUpperCase()),this.carService.getDvla(this.regNumb).subscribe(t=>{this.dvla=t.object[0]}),this.carService.getCo(this.regNumb).subscribe(t=>{this.co=t.object[0]}))}showList(t,e){const i=document.getElementsByName(e);for(let s=0;s<i.length;s++)i[s].classList.toggle("hidden");const r=document.getElementById(t);r.innerText="\u25bc"===r.innerText?"\u25ba":"\u25bc"}showVdi(t,e){t.get(e)?(this.vdi=t.get(e).vdi[0],void 0!==this.vdi&&null!=this.vdi.vdi&&(this.writeOffRecordList=this.vdi.vdi.Response.DataItems.WriteOffRecordList,this.financeList=this.vdi.vdi.Response.DataItems.FinanceRecordList)):this.vdi=void 0}dialog(t){document.getElementById("dialog").style.display=t,document.getElementById("filter").style.display=t}scroll(t){return r.b(this,void 0,void 0,function*(){setTimeout(()=>r.b(this,void 0,void 0,function*(){if(!this.purchaseService.showModal){this.purchaseService.showModal=!0;const t=yield this.modalController.create({componentProps:{data:this.regNumb},cssClass:"modal",component:n.a});yield t.present()}}),2e3)})}createChart(){document.querySelector("#chartContainer").innerHTML='<canvas id="Chart" width="600" height="500"></canvas>',this.data=[],this.odometerValues=[],this.motTest=this.obj.m.motTests;const t=document.getElementById("Chart");Chart.defaults.global.defaultFontFamily="Lato",Chart.defaults.global.defaultFontSize=18;for(let e=this.motTest.length-1;e>=0;e--)this.data.push(this.motTest[e].completedDate.slice(0,4)),this.odometerValues.push(this.motTest[e].odometerValue),this.motTest[e].yearTotal=e===this.motTest.length-1?0:Number(this.motTest[e].odometerValue)-Number(this.motTest[e+1].odometerValue);this.lineChart=new Chart(t,{type:"line",data:{labels:this.data,datasets:[{label:"Mileage history",data:this.odometerValues,borderColor:"#67d1ff"}]},options:{legend:{display:!0,position:"top",labels:{boxWidth:80,fontColor:"#67d1ff"}}}})}}},"U+Dm":function(t,e,i){"use strict";i.d(e,"a",function(){return n});var r=i("IheW"),s=i("8Y7J");let n=(()=>{class t{constructor(t){this.http=t,this.vdimap=new Map,this.numberVdi="",this.showModal=!1}confirm(t,e,i){let s=(new r.g).set("token",t).set("regNumb",e).set("paymentIntent",i);return this.http.get("https://car.nix.ltd/confirm",{headers:s})}}return t.ngInjectableDef=s.Nb({factory:function(){return new t(s.Ob(r.c))},token:t,providedIn:"root"}),t})()},baUA:function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i("YI5y");class r{constructor(t,e,i){this.carService=t,this.router=e,this.route=i,this.regNumb=this.route.snapshot.paramMap.get("regNumb"),this.carService.getMot(this.regNumb).subscribe(t=>{this.mot=t}),this.carService.getTax(this.regNumb).subscribe(t=>{this.tax=t})}ngOnInit(){}toHome(){this.router.navigate(["/"])}}},itPc:function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"d",function(){return r});const r=()=>{const t=window.TapticEngine;t&&t.selection()},s=()=>{const t=window.TapticEngine;t&&t.gestureSelectionStart()},n=()=>{const t=window.TapticEngine;t&&t.gestureSelectionChanged()},o=()=>{const t=window.TapticEngine;t&&t.gestureSelectionEnd()}},oDru:function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i("ZZ/e");class r{constructor(t){this.modalController=t}ngOnInit(){}close(){this.modalController.dismiss()}}},qwwZ:function(t,e,i){"use strict";i.r(e),i.d(e,"GESTURE_CONTROLLER",function(){return o}),i.d(e,"createGesture",function(){return u});var r=i("mLBW");i("TJLY");class s{constructor(t,e,i,r,s){this.id=e,this.name=i,this.disableScroll=s,this.priority=1e6*r+e,this.ctrl=t}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class n{constructor(t,e,i,r){this.id=e,this.disable=i,this.disableScroll=r,this.ctrl=t}block(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.disableGesture(t,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.enableGesture(t,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const o=new class{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(t){return new s(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)}createBlocker(t={}){return new n(this,this.newID(),t.disable,!!t.disableScroll)}start(t,e,i){return this.canStart(t)?(this.requestedStart.set(e,i),!0):(this.requestedStart.delete(e),!1)}capture(t,e,i){if(!this.start(t,e,i))return!1;const r=this.requestedStart;let s=-1e4;if(r.forEach(t=>{s=Math.max(s,t)}),s===i){this.capturedId=e,r.clear();const i=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(i),!0}return r.delete(e),!1}release(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}disableGesture(t,e){let i=this.disabledGestures.get(t);void 0===i&&(i=new Set,this.disabledGestures.set(t,i)),i.add(e)}enableGesture(t,e){const i=this.disabledGestures.get(t);void 0!==i&&i.delete(e)}disableScroll(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add("backdrop-no-scroll")}enableScroll(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove("backdrop-no-scroll")}canStart(t){return void 0===this.capturedId&&!this.isDisabled(t)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){const e=this.disabledGestures.get(t);return!!(e&&e.size>0)}newID(){return this.gestureId++,this.gestureId}},a=(t,e,i,r)=>{const s=c(t)?{capture:!!r.capture,passive:!!r.passive}:!!r.capture;let n,o;return t.__zone_symbol__addEventListener?(n="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(n="addEventListener",o="removeEventListener"),t[n](e,i,s),()=>{t[o](e,i,s)}},c=t=>{if(void 0===l)try{const i=Object.defineProperty({},"passive",{get:()=>{l=!0}});t.addEventListener("optsTest",()=>{},i)}catch(e){l=!1}return!!l};let l;const d=t=>t instanceof Document?t:t.ownerDocument,u=t=>{let e=!1,i=!1,s=!0,n=!1;const c=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),l=c.canStart,u=c.onWillStart,p=c.onStart,v=c.onEnd,f=c.notCaptured,g=c.onMove,y=c.threshold,w={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},S=((t,e,i)=>{const r=c.maxAngle*(Math.PI/180),s="x"===c.direction,n=Math.cos(r),o=e*e;let a=0,l=0,d=!1,u=0;return{start(t,e){a=t,l=e,u=0,d=!0},detect(t,e){if(!d)return!1;const i=t-a,r=e-l,c=i*i+r*r;if(c<o)return!1;const h=Math.sqrt(c),m=(s?i:r)/h;return u=m>n?1:m<-n?-1:0,d=!1,!0},isGesture:()=>0!==u,getDirection:()=>u}})(0,c.threshold),E=o.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),T=()=>{e&&(n=!1,g&&g(w))},C=()=>!(E&&!E.capture()||(e=!0,s=!1,w.startX=w.currentX,w.startY=w.currentY,w.startTimeStamp=w.timeStamp,u?u(w).then(L):L(),0)),L=()=>{p&&p(w),s=!0},I=()=>{e=!1,i=!1,n=!1,s=!0,E.release()},D=t=>{const i=e,r=s;I(),r&&(h(w,t),i?v&&v(w):f&&f(w))},N=((t,e,i,r,s)=>{let n,o,c,l,u,h,m,b=0;const p=r=>{b=Date.now()+2e3,e(r)&&(!o&&i&&(o=a(t,"touchmove",i,s)),c||(c=a(t,"touchend",f,s)),l||(l=a(t,"touchcancel",f,s)))},v=r=>{b>Date.now()||e(r)&&(!h&&i&&(h=a(d(t),"mousemove",i,s)),m||(m=a(d(t),"mouseup",g,s)))},f=t=>{y(),r&&r(t)},g=t=>{w(),r&&r(t)},y=()=>{o&&o(),c&&c(),l&&l(),o=c=l=void 0},w=()=>{h&&h(),m&&m(),h=m=void 0},S=()=>{y(),w()},E=e=>{e?(n&&n(),u&&u(),n=u=void 0,S()):(n||(n=a(t,"touchstart",p,s)),u||(u=a(t,"mousedown",v,s)))};return{setDisabled:E,stop:S,destroy:()=>{E(!0),r=i=e=void 0}}})(c.el,t=>{const e=b(t);return!(i||!s)&&(m(t,w),w.startX=w.currentX,w.startY=w.currentY,w.startTimeStamp=w.timeStamp=e,w.velocityX=w.velocityY=w.deltaX=w.deltaY=0,w.event=t,(!l||!1!==l(w))&&(E.release(),!!E.start()&&(i=!0,0===y?C():(S.start(w.startX,w.startY),!0))))},t=>{e?!n&&s&&(n=!0,h(w,t),Object(r.n)(T)):(h(w,t),S.detect(w.currentX,w.currentY)&&(S.isGesture()&&C()||Y()))},D,{capture:!1}),Y=()=>{I(),N.stop(),f&&f(w)};return{setDisabled(t){t&&e&&D(void 0),N.setDisabled(t)},destroy(){E.destroy(),N.destroy()}}},h=(t,e)=>{if(!e)return;const i=t.currentX,r=t.currentY,s=t.timeStamp;m(e,t);const n=t.currentX,o=t.currentY,a=(t.timeStamp=b(e))-s;if(a>0&&a<100){const e=(o-r)/a;t.velocityX=(n-i)/a*.7+.3*t.velocityX,t.velocityY=.7*e+.3*t.velocityY}t.deltaX=n-t.startX,t.deltaY=o-t.startY,t.event=e},m=(t,e)=>{let i=0,r=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];i=t.clientX,r=t.clientY}else void 0!==t.pageX&&(i=t.pageX,r=t.pageY)}e.currentX=i,e.currentY=r},b=t=>t.timeStamp||Date.now()},wa6H:function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i("baUA");class r{}}}]);