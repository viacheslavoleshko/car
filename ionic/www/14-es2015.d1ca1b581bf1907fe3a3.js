(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{qI4B:function(l,n,u){"use strict";u.r(n);var b=u("8Y7J"),o=u("YI5y");class i{constructor(l=null){this.m=l}}class r{constructor(l,n,u){this.router=l,this.carService=n,this.route=u,this.obj=new i,this.writeOffRecordList=[],this.financeList=[]}ngOnInit(){this.route.params.subscribe(l=>{this.regNumb=l.regNumb}),null!==this.regNumb&&this.search()}search(){""===this.regNumb?(this.obj=void 0,this.tax=void 0):(this.carService.getMot(this.regNumb).subscribe(l=>{this.obj=l.object[0]}),this.carService.getTax(this.regNumb).subscribe(l=>{this.tax=l.object[0]}),this.carService.getVdi(this.regNumb).subscribe(l=>{this.vdi=l.object[0],void 0!==this.vdi&&null!=this.vdi.vdi&&(this.writeOffRecordList=this.vdi.vdi.Response.DataItems.WriteOffRecordList,this.financeList=this.vdi.vdi.Response.DataItems.FinanceRecordList)}))}showList(l,n){const u=document.getElementsByName(n);for(let o=0;o<u.length;o++)u[o].classList.toggle("hidden");const b=document.getElementById(l);b.innerText="\u25bc"===b.innerText?"\u25ba":"\u25bc"}}var e=u("wa6H");class t{}var c=u("pMnS"),s=u("oBZk"),q=u("ZZ/e"),a=u("SVse"),k=u("s7LF"),h=u("iInd"),x=b.pb({encapsulation:0,styles:[[".success[_ngcontent-%COMP%]{background:green}.fail[_ngcontent-%COMP%]{background:red}.hidden[_ngcontent-%COMP%]{display:none}.mleft[_ngcontent-%COMP%]{margin-left:20px}.label[_ngcontent-%COMP%]{text-align:center;border-top:1px solid #dcdcdc;border-bottom:1px solid #dcdcdc;font-size:25px;color:#0bb8cc}.status[_ngcontent-%COMP%]{width:80%;margin:0 auto;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}"]],data:{}});function d(l){return b.Jb(0,[(l()(),b.rb(0,0,null,null,56,"div",[["class","mleft"]],null,null,null,null,null)),(l()(),b.rb(1,0,null,null,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(2,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(3,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(4,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["AgreementDate"])),(l()(),b.rb(6,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(7,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(8,0,["",""])),(l()(),b.rb(9,0,null,null,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(10,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(11,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(12,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["AgreementType"])),(l()(),b.rb(14,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(15,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(16,0,["",""])),(l()(),b.rb(17,0,null,null,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(18,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(19,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(20,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["AgreementNumber"])),(l()(),b.rb(22,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(23,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(24,0,["",""])),(l()(),b.rb(25,0,null,null,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(26,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(27,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(28,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["AgreementTerm"])),(l()(),b.rb(30,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(31,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(32,0,["",""])),(l()(),b.rb(33,0,null,null,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(34,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(35,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(36,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["ContactNumber"])),(l()(),b.rb(38,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(39,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(40,0,["",""])),(l()(),b.rb(41,0,null,null,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(42,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(43,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(44,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["FinanceCompany"])),(l()(),b.rb(46,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(47,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(48,0,["",""])),(l()(),b.rb(49,0,null,null,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(50,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(51,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(52,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["VehicleDescription"])),(l()(),b.rb(54,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(55,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(56,0,["",""]))],null,function(l,n){l(n,8,0,n.context.$implicit.AgreementDate),l(n,16,0,n.context.$implicit.AgreementType),l(n,24,0,n.context.$implicit.AgreementNumber),l(n,32,0,n.context.$implicit.AgreementTerm),l(n,40,0,n.context.$implicit.ContactNumber),l(n,48,0,n.context.$implicit.FinanceCompany),l(n,56,0,n.context.$implicit.VehicleDescription)})}function f(l){return b.Jb(0,[(l()(),b.rb(0,0,null,null,2,"span",[["class","hidden"],["name","financeList"]],null,null,null,null,null)),(l()(),b.gb(16777216,null,null,1,null,d)),b.qb(2,278528,null,0,a.i,[b.L,b.I,b.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.financeList)},null)}function m(l){return b.Jb(0,[(l()(),b.rb(0,0,null,null,32,"div",[["class","mleft"]],null,null,null,null,null)),(l()(),b.rb(1,0,null,null,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(2,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(3,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(4,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["MiaftrEntryDate"])),(l()(),b.rb(6,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(7,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(8,0,["",""])),(l()(),b.rb(9,0,null,null,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(10,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(11,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(12,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["LossData"])),(l()(),b.rb(14,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(15,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(16,0,["",""])),(l()(),b.rb(17,0,null,null,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(18,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(19,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(20,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["LossType"])),(l()(),b.rb(22,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(23,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(24,0,["",""])),(l()(),b.rb(25,0,null,null,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(26,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(27,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(28,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Category"])),(l()(),b.rb(30,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(31,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(32,0,["",""]))],null,function(l,n){l(n,8,0,n.context.$implicit.MiaftrEntryDate),l(n,16,0,n.context.$implicit.LossDate),l(n,24,0,n.context.$implicit.LossType),l(n,32,0,n.context.$implicit.Category)})}function p(l){return b.Jb(0,[(l()(),b.rb(0,0,null,null,2,"span",[["class","hidden"],["name","writeList"]],null,null,null,null,null)),(l()(),b.gb(16777216,null,null,1,null,m)),b.qb(2,278528,null,0,a.i,[b.L,b.I,b.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.writeOffRecordList)},null)}function H(l){return b.Jb(0,[(l()(),b.rb(0,0,null,null,229,"ion-grid",[],null,null,null,s.u,s.e)),b.qb(1,49152,null,0,q.x,[b.h,b.k,b.x],null,null),(l()(),b.rb(2,0,null,0,1,"div",[["class","label"]],null,null,null,null,null)),(l()(),b.Hb(-1,null,["VDI"])),(l()(),b.rb(4,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(5,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(6,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(7,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["WriteOffDate"])),(l()(),b.rb(9,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(10,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(11,0,["",""])),(l()(),b.rb(12,0,null,0,6,"ion-row",[],null,null,null,s.A,s.k)),b.qb(13,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(14,0,null,0,4,"ion-col",[],null,[[null,"click"]],function(l,n,u){var b=!0;return"click"===n&&(b=!1!==l.component.showList("finance","financeList")&&b),b},s.s,s.c)),b.qb(15,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.rb(16,0,null,0,1,"span",[["id","finance"]],null,null,null,null,null)),(l()(),b.Hb(-1,null,["\u25ba"])),(l()(),b.Hb(-1,0,["FinanceRecordList"])),(l()(),b.gb(16777216,null,0,1,null,f)),b.qb(20,16384,null,0,a.j,[b.L,b.I],{ngIf:[0,"ngIf"]},null),(l()(),b.rb(21,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(22,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(23,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(24,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["WrittenOff"])),(l()(),b.rb(26,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(27,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(28,0,["",""])),(l()(),b.rb(29,0,null,0,6,"ion-row",[],null,null,null,s.A,s.k)),b.qb(30,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(31,0,null,0,4,"ion-col",[],null,[[null,"click"]],function(l,n,u){var b=!0;return"click"===n&&(b=!1!==l.component.showList("write","writeList")&&b),b},s.s,s.c)),b.qb(32,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.rb(33,0,null,0,1,"span",[["id","write"]],null,null,null,null,null)),(l()(),b.Hb(-1,null,["\u25ba"])),(l()(),b.Hb(-1,0,["WriteOffRecordList"])),(l()(),b.gb(16777216,null,0,1,null,p)),b.qb(37,16384,null,0,a.j,[b.L,b.I],{ngIf:[0,"ngIf"]},null),(l()(),b.rb(38,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(39,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(40,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(41,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["LatestKeeperChangeDate"])),(l()(),b.rb(43,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(44,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(45,0,["",""])),(l()(),b.rb(46,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(47,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(48,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(49,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["PreviousColour"])),(l()(),b.rb(51,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(52,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(53,0,["",""])),(l()(),b.rb(54,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(55,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(56,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(57,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["PlateChangeList"])),(l()(),b.rb(59,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(60,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["PlateChangeList"])),(l()(),b.rb(62,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(63,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(64,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(65,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["ScrapDate"])),(l()(),b.rb(67,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(68,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(69,0,["",""])),(l()(),b.rb(70,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(71,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(72,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(73,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["ImportedFromOutsideEu"])),(l()(),b.rb(75,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(76,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(77,0,["",""])),(l()(),b.rb(78,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(79,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(80,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(81,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["ColourChangeCount"])),(l()(),b.rb(83,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(84,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(85,0,["",""])),(l()(),b.rb(86,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(87,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(88,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(89,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Imported"])),(l()(),b.rb(91,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(92,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(93,0,["",""])),(l()(),b.rb(94,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(95,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(96,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(97,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["StolenMiaftrRecordList"])),(l()(),b.rb(99,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(100,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(101,0,["",""])),(l()(),b.rb(102,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(103,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(104,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(105,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["LatestV5cIssuedDate"])),(l()(),b.rb(107,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(108,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(109,0,["",""])),(l()(),b.rb(110,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(111,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(112,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(113,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["WriteOffRecordCount"])),(l()(),b.rb(115,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(116,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(117,0,["",""])),(l()(),b.rb(118,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(119,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(120,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(121,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["ImportUsedBeforeUkRegistration"])),(l()(),b.rb(123,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(124,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(125,0,["",""])),(l()(),b.rb(126,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(127,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(128,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(129,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["MileageAnomalyDetected"])),(l()(),b.rb(131,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(132,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(133,0,["",""])),(l()(),b.rb(134,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(135,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(136,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(137,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["StolenStatus"])),(l()(),b.rb(139,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(140,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(141,0,["",""])),(l()(),b.rb(142,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(143,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(144,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(145,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Scrapped"])),(l()(),b.rb(147,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(148,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(149,0,["",""])),(l()(),b.rb(150,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(151,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(152,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(153,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["HighRiskRecordCount"])),(l()(),b.rb(155,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(156,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(157,0,["",""])),(l()(),b.rb(158,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(159,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(160,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(161,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Stolen"])),(l()(),b.rb(163,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(164,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(165,0,["",""])),(l()(),b.rb(166,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(167,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(168,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(169,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["ImportDate"])),(l()(),b.rb(171,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(172,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(173,0,["",""])),(l()(),b.rb(174,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(175,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(176,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(177,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Exported"])),(l()(),b.rb(179,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(180,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(181,0,["",""])),(l()(),b.rb(182,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(183,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(184,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(185,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["WriteOffCategory"])),(l()(),b.rb(187,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(188,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(189,0,["",""])),(l()(),b.rb(190,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(191,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(192,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(193,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["ExportDate"])),(l()(),b.rb(195,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(196,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(197,0,["",""])),(l()(),b.rb(198,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(199,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(200,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(201,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["VinLast5"])),(l()(),b.rb(203,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(204,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(205,0,["",""])),(l()(),b.rb(206,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(207,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(208,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(209,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["PlateChangeCount"])),(l()(),b.rb(211,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(212,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(213,0,["",""])),(l()(),b.rb(214,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(215,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(216,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(217,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["PreviousKeeperCount"])),(l()(),b.rb(219,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(220,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(221,0,["",""])),(l()(),b.rb(222,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(223,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(224,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(225,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["FinanceRecordCount"])),(l()(),b.rb(227,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(228,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(229,0,["",""]))],function(l,n){var u=n.component;l(n,20,0,u.financeList!==b.ab),l(n,37,0,u.writeOffRecordList!==b.ab)},function(l,n){var u=n.component;l(n,11,0,u.vdi.vdi.Response.DataItems.WriteOffDate),l(n,28,0,u.vdi.vdi.Response.DataItems.WrittenOff),l(n,45,0,u.vdi.vdi.Response.DataItems.LatestKeeperChangeDate),l(n,53,0,u.vdi.vdi.Response.DataItems.PreviousColour),l(n,69,0,u.vdi.vdi.Response.DataItems.ScrapDate),l(n,77,0,u.vdi.vdi.Response.DataItems.ImportedFromOutsideEu),l(n,85,0,u.vdi.vdi.Response.DataItems.ColourChangeCount),l(n,93,0,u.vdi.vdi.Response.DataItems.Imported),l(n,101,0,u.vdi.vdi.Response.DataItems.StolenMiaftrRecordList),l(n,109,0,u.vdi.vdi.Response.DataItems.LatestV5cIssuedDate),l(n,117,0,u.vdi.vdi.Response.DataItems.WriteOffRecordCount),l(n,125,0,u.vdi.vdi.Response.DataItems.ImportUsedBeforeUkRegistration),l(n,133,0,u.vdi.vdi.Response.DataItems.MileageAnomalyDetected),l(n,141,0,u.vdi.vdi.Response.DataItems.StolenStatus),l(n,149,0,u.vdi.vdi.Response.DataItems.Scrapped),l(n,157,0,u.vdi.vdi.Response.DataItems.HighRiskRecordCount),l(n,165,0,u.vdi.vdi.Response.DataItems.Stolen),l(n,173,0,u.vdi.vdi.Response.DataItems.ImportDate),l(n,181,0,u.vdi.vdi.Response.DataItems.Exported),l(n,189,0,u.vdi.vdi.Response.DataItems.WriteOffCategory),l(n,197,0,u.vdi.vdi.Response.DataItems.ExportDate),l(n,205,0,u.vdi.vdi.Response.DataItems.VinLast5),l(n,213,0,u.vdi.vdi.Response.DataItems.PlateChangeCount),l(n,221,0,u.vdi.vdi.Response.DataItems.PreviousKeeperCount),l(n,229,0,u.vdi.vdi.Response.DataItems.FinanceRecordCount)})}function g(l){return b.Jb(0,[(l()(),b.rb(0,0,null,null,28,"div",[["class","mleft"]],null,null,null,null,null)),(l()(),b.rb(1,0,null,null,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(2,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(3,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(4,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Text"])),(l()(),b.rb(6,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(7,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(8,0,["",""])),(l()(),b.rb(9,0,null,null,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(10,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(11,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(12,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Type"])),(l()(),b.rb(14,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(15,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(16,0,["",""])),(l()(),b.rb(17,0,null,null,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(18,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(19,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(20,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Dangerous"])),(l()(),b.rb(22,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(23,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(24,0,["",""])),(l()(),b.rb(25,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),b.rb(26,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),b.rb(27,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),b.rb(28,0,null,null,0,"hr",[],null,null,null,null,null))],null,function(l,n){l(n,8,0,n.context.$implicit.text),l(n,16,0,n.context.$implicit.type),l(n,24,0,n.context.$implicit.dangerous)})}function v(l){return b.Jb(0,[(l()(),b.rb(0,0,null,null,56,"div",[["class","hidden mleft"],["name","motTests"]],null,null,null,null,null)),(l()(),b.rb(1,0,null,null,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(2,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(3,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(4,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Completed date"])),(l()(),b.rb(6,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(7,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(8,0,["",""])),(l()(),b.rb(9,0,null,null,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(10,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(11,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(12,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Expiry date"])),(l()(),b.rb(14,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(15,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(16,0,["",""])),(l()(),b.rb(17,0,null,null,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(18,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(19,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(20,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Mot test number"])),(l()(),b.rb(22,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(23,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(24,0,["",""])),(l()(),b.rb(25,0,null,null,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(26,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(27,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(28,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Odometer result type"])),(l()(),b.rb(30,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(31,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(32,0,["",""])),(l()(),b.rb(33,0,null,null,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(34,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(35,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(36,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Odometer unit "])),(l()(),b.rb(38,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(39,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(40,0,["",""])),(l()(),b.rb(41,0,null,null,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(42,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(43,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(44,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Odometer value "])),(l()(),b.rb(46,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(47,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(48,0,["",""])),(l()(),b.rb(49,0,null,null,4,"ion-row",[],null,null,null,s.A,s.k)),b.qb(50,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(51,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(52,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["RFR and comments"])),(l()(),b.gb(16777216,null,null,1,null,g)),b.qb(55,278528,null,0,a.i,[b.L,b.I,b.q],{ngForOf:[0,"ngForOf"]},null),(l()(),b.rb(56,0,null,null,0,"hr",[],null,null,null,null,null))],function(l,n){l(n,55,0,n.context.$implicit.rfrAndComments)},function(l,n){l(n,8,0,n.context.$implicit.completedDate),l(n,16,0,n.context.$implicit.expiryDate),l(n,24,0,n.context.$implicit.motTestNumber),l(n,32,0,n.context.$implicit.odometerResultType),l(n,40,0,n.context.$implicit.odometerUnit),l(n,48,0,n.context.$implicit.odometerValue)})}function w(l){return b.Jb(0,[(l()(),b.rb(0,0,null,null,68,"ion-grid",[],null,null,null,s.u,s.e)),b.qb(1,49152,null,0,q.x,[b.h,b.k,b.x],null,null),(l()(),b.rb(2,0,null,0,1,"div",[["class","label"]],null,null,null,null,null)),(l()(),b.Hb(-1,null,["MOT"])),(l()(),b.rb(4,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(5,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(6,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(7,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Engine size"])),(l()(),b.rb(9,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(10,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(11,0,["","cc"])),(l()(),b.rb(12,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(13,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(14,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(15,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Fuel Type"])),(l()(),b.rb(17,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(18,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(19,0,["",""])),(l()(),b.rb(20,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(21,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(22,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(23,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Make"])),(l()(),b.rb(25,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(26,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(27,0,["",""])),(l()(),b.rb(28,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(29,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(30,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(31,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Model"])),(l()(),b.rb(33,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(34,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(35,0,["",""])),(l()(),b.rb(36,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(37,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(38,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(39,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Colour"])),(l()(),b.rb(41,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(42,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(43,0,["",""])),(l()(),b.rb(44,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(45,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(46,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(47,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Registration"])),(l()(),b.rb(49,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(50,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(51,0,["",""])),(l()(),b.rb(52,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(53,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(54,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(55,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Registration date"])),(l()(),b.rb(57,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(58,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(59,0,["",""])),(l()(),b.rb(60,0,null,0,6,"ion-row",[],null,null,null,s.A,s.k)),b.qb(61,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(62,0,null,0,4,"ion-col",[],null,[[null,"click"]],function(l,n,u){var b=!0;return"click"===n&&(b=!1!==l.component.showList("arrow","motTests")&&b),b},s.s,s.c)),b.qb(63,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.rb(64,0,null,0,1,"span",[["id","arrow"]],null,null,null,null,null)),(l()(),b.Hb(-1,null,["\u25ba"])),(l()(),b.Hb(-1,0,["Mot test"])),(l()(),b.gb(16777216,null,0,1,null,v)),b.qb(68,278528,null,0,a.i,[b.L,b.I,b.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,68,0,n.component.obj.m.motTests)},function(l,n){var u=n.component;l(n,11,0,u.obj.m.engineSize),l(n,19,0,u.obj.m.fuelType),l(n,27,0,u.obj.m.make),l(n,35,0,u.obj.m.model),l(n,43,0,u.obj.m.primaryColour),l(n,51,0,u.obj.m.registration),l(n,59,0,u.obj.m.registrationDate)})}function A(l){return b.Jb(0,[(l()(),b.rb(0,0,null,null,114,"ion-grid",[],null,null,null,s.u,s.e)),b.qb(1,49152,null,0,q.x,[b.h,b.k,b.x],null,null),(l()(),b.rb(2,0,null,0,1,"div",[["class","label"]],null,null,null,null,null)),(l()(),b.Hb(-1,null,["TAX"])),(l()(),b.rb(4,0,null,0,6,"div",[["class","status"]],null,null,null,null,null)),(l()(),b.rb(5,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),b.rb(6,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),b.Hb(7,null,["",""])),(l()(),b.rb(8,0,null,null,2,"span",[["class","date"]],null,null,null,null,null)),(l()(),b.rb(9,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),b.Hb(10,null,["",""])),(l()(),b.rb(11,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(12,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(13,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(14,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["CO\u2082Emissions"])),(l()(),b.rb(16,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(17,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(18,0,["",""])),(l()(),b.rb(19,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(20,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(21,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(22,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Cylinder capacity (cc)"])),(l()(),b.rb(24,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(25,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(26,0,["",""])),(l()(),b.rb(27,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(28,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(29,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(30,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Date of first registration"])),(l()(),b.rb(32,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(33,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(34,0,["",""])),(l()(),b.rb(35,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(36,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(37,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(38,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Euro Status"])),(l()(),b.rb(40,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(41,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(42,0,["",""])),(l()(),b.rb(43,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(44,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(45,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(46,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Export marker"])),(l()(),b.rb(48,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(49,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(50,0,["",""])),(l()(),b.rb(51,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(52,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(53,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(54,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Fuel type"])),(l()(),b.rb(56,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(57,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(58,0,["",""])),(l()(),b.rb(59,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(60,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(61,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(62,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Vehicle colour"])),(l()(),b.rb(64,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(65,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(66,0,["",""])),(l()(),b.rb(67,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(68,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(69,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(70,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Revenue weight"])),(l()(),b.rb(72,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(73,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(74,0,["",""])),(l()(),b.rb(75,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(76,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(77,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(78,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Vehicle make"])),(l()(),b.rb(80,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(81,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(82,0,["",""])),(l()(),b.rb(83,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(84,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(85,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(86,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Vehicle status"])),(l()(),b.rb(88,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(89,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(90,0,["",""])),(l()(),b.rb(91,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(92,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(93,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(94,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Vehicle type approval"])),(l()(),b.rb(96,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(97,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(98,0,["",""])),(l()(),b.rb(99,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(100,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(101,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(102,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Wheelplan"])),(l()(),b.rb(104,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(105,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(106,0,["",""])),(l()(),b.rb(107,0,null,0,7,"ion-row",[],null,null,null,s.A,s.k)),b.qb(108,49152,null,0,q.fb,[b.h,b.k,b.x],null,null),(l()(),b.rb(109,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(110,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(-1,0,["Year of manufacture"])),(l()(),b.rb(112,0,null,0,2,"ion-col",[],null,null,null,s.s,s.c)),b.qb(113,49152,null,0,q.q,[b.h,b.k,b.x],null,null),(l()(),b.Hb(114,0,["",""]))],null,function(l,n){var u=n.component;l(n,7,0,u.tax.t["Status bar"].Status),l(n,10,0,u.tax.t["Status bar"]["Tax due"]),l(n,18,0,u.tax.t["CO\u2082Emissions"]),l(n,26,0,u.tax.t["Cylinder capacity (cc)"]),l(n,34,0,u.tax.t["Date of first registration"]),l(n,42,0,u.tax.t["Euro Status"]),l(n,50,0,u.tax.t["Export marker"]),l(n,58,0,u.tax.t["Fuel type"]),l(n,66,0,u.tax.t["Vehicle colour"]),l(n,74,0,u.tax.t["Revenue weight"]),l(n,82,0,u.tax.t["Vehicle make"]),l(n,90,0,u.tax.t["Vehicle status"]),l(n,98,0,u.tax.t["Vehicle type approval"]),l(n,106,0,u.tax.t.Wheelplan),l(n,114,0,u.tax.t["Year of manufacture"])})}function C(l){return b.Jb(0,[(l()(),b.rb(0,0,null,null,18,"ion-content",[],null,null,null,s.t,s.d)),b.qb(1,49152,null,0,q.r,[b.h,b.k,b.x],null,null),(l()(),b.rb(2,0,null,0,10,"ion-item",[],null,null,null,s.y,s.i)),b.qb(3,49152,null,0,q.E,[b.h,b.k,b.x],null,null),(l()(),b.rb(4,0,null,0,8,"ion-col",[["size","12"]],null,null,null,s.s,s.c)),b.qb(5,49152,null,0,q.q,[b.h,b.k,b.x],{size:[0,"size"]},null),(l()(),b.rb(6,0,null,0,6,"ion-input",[["color","primary"],["placeholder","Enter reg number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(l,n,u){var o=!0,i=l.component;return"ionBlur"===n&&(o=!1!==b.Cb(l,7)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==b.Cb(l,7)._handleInputEvent(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(i.regNumb=u)&&o),"ionChange"===n&&(o=!1!==i.search()&&o),o},s.x,s.h)),b.qb(7,16384,null,0,q.Gb,[b.k],null,null),b.Eb(1024,null,k.c,function(l){return[l]},[q.Gb]),b.qb(9,671744,null,0,k.f,[[8,null],[8,null],[8,null],[6,k.c]],{model:[0,"model"]},{update:"ngModelChange"}),b.Eb(2048,null,k.d,null,[k.f]),b.qb(11,16384,null,0,k.e,[[4,k.d]],null,null),b.qb(12,49152,null,0,q.D,[b.h,b.k,b.x],{color:[0,"color"],placeholder:[1,"placeholder"]},null),(l()(),b.gb(16777216,null,0,1,null,H)),b.qb(14,16384,null,0,a.j,[b.L,b.I],{ngIf:[0,"ngIf"]},null),(l()(),b.gb(16777216,null,0,1,null,w)),b.qb(16,16384,null,0,a.j,[b.L,b.I],{ngIf:[0,"ngIf"]},null),(l()(),b.gb(16777216,null,0,1,null,A)),b.qb(18,16384,null,0,a.j,[b.L,b.I],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,5,0,"12"),l(n,9,0,u.regNumb),l(n,12,0,"primary","Enter reg number"),l(n,14,0,void 0!==u.vdi&&null!=u.vdi.vdi),l(n,16,0,void 0!==u.obj&&null!==u.obj.m),l(n,18,0,void 0!==u.tax&&void 0!==u.tax.t)},function(l,n){l(n,6,0,b.Cb(n,11).ngClassUntouched,b.Cb(n,11).ngClassTouched,b.Cb(n,11).ngClassPristine,b.Cb(n,11).ngClassDirty,b.Cb(n,11).ngClassValid,b.Cb(n,11).ngClassInvalid,b.Cb(n,11).ngClassPending)})}function I(l){return b.Jb(0,[(l()(),b.rb(0,0,null,null,1,"app-tab1",[],null,null,null,C,x)),b.qb(1,114688,null,0,r,[h.m,o.a,h.a],null,null)],function(l,n){l(n,1,0)},null)}var D=b.nb("app-tab1",r,I,{},{},[]);u.d(n,"Tab1PageModuleNgFactory",function(){return R});var R=b.ob(t,[],function(l){return b.zb([b.Ab(512,b.j,b.Y,[[8,[c.a,D]],[3,b.j],b.v]),b.Ab(4608,a.l,a.k,[b.s,[2,a.s]]),b.Ab(4608,k.i,k.i,[]),b.Ab(4608,q.a,q.a,[b.x,b.g]),b.Ab(4608,q.Cb,q.Cb,[q.a,b.j,b.p]),b.Ab(4608,q.Fb,q.Fb,[q.a,b.j,b.p]),b.Ab(1073742336,a.b,a.b,[]),b.Ab(1073742336,k.h,k.h,[]),b.Ab(1073742336,k.b,k.b,[]),b.Ab(1073742336,q.Ab,q.Ab,[]),b.Ab(1073742336,h.n,h.n,[[2,h.s],[2,h.m]]),b.Ab(1073742336,t,t,[]),b.Ab(1024,h.k,function(){return[[{path:"",component:r},{path:":regNumb",component:r},{path:":/component:/regNumb",component:e.a}]]},[])])})}}]);