(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mot-details-mot-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mot-details/mot-details.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mot-details/mot-details.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>mot-details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button (click)=\"toHome()\">\n    Go to MOT tab!\n  </ion-button>\n  <div *ngIf=\"mot; else elseMot\">\n    <div *ngIf=\"mot !== -1 && mot['length'] !==0 && mot[0]['m'] !== undefined; else elseMot\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <div *ngIf=\"mot[0]['m']['registration']\" class=\"registra\">\n            <h1>\n              {{ mot[0]['m'][\"registration\"] }}\n            </h1>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"12\">\n          <h1 class=\"make\">\n            <span *ngIf=\"mot[0]['m']['make']\">{{\n              mot[0]['m'][\"make\"]\n            }}</span>\n            <span *ngIf=\"mot[0]['m']['model']\">{{\n              mot[0]['m'][\"model\"]\n            }}</span>\n          </h1>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col *ngIf=\"mot[0]['m']['firstUsedDate']\" size=\"12\"\n          >First date use: {{ mot[0]['m'][\"firstUsedDate\"] }}</ion-col\n        >\n        <ion-col *ngIf=\"mot[0]['m']['registrationDate']\" size=\"12\"\n          >Registration date:\n          {{ mot[0]['m'][\"registrationDate\"] }}</ion-col\n        >\n        <ion-col *ngIf=\"mot[0]['m']['manufactureDate']\" size=\"12\"\n          >Manufacture date:\n          {{ mot[0]['m'][\"manufactureDate\"] }}</ion-col\n        >\n        <ion-col *ngIf=\"mot[0]['m']['engineSize']\" size=\"12\"\n          >Engine size: {{ mot[0]['m'][\"engineSize\"] }}</ion-col\n        >\n      </ion-row>\n\n      <ion-row *ngIf=\"mot[0]['m']['motTests']; else motTests\">\n        <h2>Tests</h2>\n        <ion-col size=\"12\">\n          <ul *ngFor=\"let test of mot[0]['m']['motTests']\">\n            <li *ngFor=\"let t of test | keyvalue\">\n              {{t.key}} - {{t.value}}\n            </li>\n          </ul>\n        </ion-col>\n      </ion-row>\n\n      <ng-template #motTests>\n          <h1>Car don't have tests!</h1>\n        </ng-template>\n\n      <ion-row *ngIf=\"mot[0]['m']['rfrAndComments']\">\n        <h3>Comments</h3>\n        <ul>\n          <p>Monitor and repair if neccessary(advisories)</p>\n          <p *ngFor=\"let item of mot[0]['m']['rfrAndComments']\">\n            <li *ngFor=\"let i of item |keyvalue\">\n              {{ i.key }} - {{i.value}}\n            </li>\n          </p>\n        </ul>\n      </ion-row>\n\n\n      <!-- <ion-row *ngFor=\"let item of mot[0]['m'] | keyvalue \">\n        <ion-col *ngIf=\"item.key\">\n            <div *ngIf=\"Array.isArray(item.key)\">\n              <ul>\n                <li *ngFor=\"let i of item.key\"> {{i.key}} - {{i.value}} </li>\n              </ul>\n            </div>\n            <div *ngIf=\"!item.key['length']\">\n                {{item.key}} -{{item.value}}\n            </div>\n        </ion-col>\n      </ion-row> -->\n\n    </div>\n\n  </div>\n\n  <ng-template #elseMot>\n    <h1>Sorry, not found you MOT!</h1>\n  </ng-template>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/mot-details/mot-details.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/mot-details/mot-details.module.ts ***!
  \*********************************************************/
/*! exports provided: MotDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotDetailsPageModule", function() { return MotDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mot_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mot-details.page */ "./src/app/pages/mot-details/mot-details.page.ts");







const routes = [
    {
        path: ':regNumb',
        component: _mot_details_page__WEBPACK_IMPORTED_MODULE_6__["MotDetailsPage"]
    }
];
let MotDetailsPageModule = class MotDetailsPageModule {
};
MotDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_mot_details_page__WEBPACK_IMPORTED_MODULE_6__["MotDetailsPage"]]
    })
], MotDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/mot-details/mot-details.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/mot-details/mot-details.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vdC1kZXRhaWxzL21vdC1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/mot-details/mot-details.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/mot-details/mot-details.page.ts ***!
  \*******************************************************/
/*! exports provided: MotDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotDetailsPage", function() { return MotDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _car_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../car.service */ "./src/app/car.service.ts");




let MotDetailsPage = class MotDetailsPage {
    constructor(carService, router, route) {
        this.carService = carService;
        this.router = router;
        this.route = route;
        this.regNumb = this.route.snapshot.paramMap.get('regNumb');
        setTimeout(() => {
            this.carService.getMot(this.regNumb).subscribe(val => {
                this.mot = val['object'];
                console.log(this.mot);
            });
        }, 500);
    }
    ngOnInit() {
    }
    toHome() {
        this.router.navigate(['/']);
    }
};
MotDetailsPage.ctorParameters = () => [
    { type: _car_service__WEBPACK_IMPORTED_MODULE_3__["CarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
MotDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mot-details',
        template: __webpack_require__(/*! raw-loader!./mot-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mot-details/mot-details.page.html"),
        styles: [__webpack_require__(/*! ./mot-details.page.scss */ "./src/app/pages/mot-details/mot-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_car_service__WEBPACK_IMPORTED_MODULE_3__["CarService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], MotDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-mot-details-mot-details-module-es2015.js.map