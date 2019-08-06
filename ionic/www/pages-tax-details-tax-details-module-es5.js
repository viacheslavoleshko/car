(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tax-details-tax-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tax-details/tax-details.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tax-details/tax-details.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>tax details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button (click)=\"toHome()\">\n    Go to TAX tab!\n  </ion-button>\n  <div *ngIf=\"tax; else elseTax\">\n    <div *ngIf=\"tax !== -1  && tax['length'] !==0 && tax[0]['t'] !== undefined; else elseTax\">\n      <ion-row *ngIf=\"tax[0]['t']['Status bar']\">\n        <ion-col *ngIf=\"tax[0]['t']['Status bar']['Status']\" >\n          <p>\n            {{ tax[0]['t'][\"Status bar\"][\"Status\"] }}\n          </p>\n        </ion-col>\n        <ion-col class=\"Status_Bar\" size=\"6\">\n          <p\n            *ngIf=\"tax[0]['t']['Status bar']['Tax due']\"\n            class=\"Status_Bar\"\n          >\n            {{ tax[0]['t'][\"Status bar\"][\"Tax due\"] }}\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ul class=\"taxed\">\n          <li *ngIf=\"tax[0]['t']['Vehicle make']\">\n            <span class=\"taxed__span\">Vahicle make</span>:\n            <span class=\"taxed__json\">{{ tax[0]['t'][\"Vehicle make\"] }}</span>\n          </li>\n          <li *ngIf=\"tax[0]['t']['Date of first registration']\">\n            <span class=\"taxed__span\">Date of first registration</span>:\n            <span class=\"taxed__json\">{{\n              tax[0]['t'][\"Date of first registration\"]\n            }}</span>\n          </li>\n          <li *ngIf=\"tax[0]['t']['Year of manufacture']\">\n            <span class=\"taxed__span\">Year of manufacture</span>:\n            <span class=\"taxed__json\">{{ tax[0]['t'][\"Year of manufacture\"] }}</span>\n          </li>\n          <li *ngIf=\"tax[0]['t']['Cylinder capacity (cc)']\">\n            <span class=\"taxed__span\">Cylinder capacity (cc)</span>:\n            <span class=\"taxed__json\">{{ tax[0]['t'][\"Cylinder capacity (cc)\"] }}</span>\n          </li>\n          <li *ngIf=\"tax[0]['t']['CO₂Emissions']\">\n            <span class=\"taxed__span\">CO₂Emissions</span>:\n            <span class=\"taxed__json\">{{ tax[0]['t'][\"CO₂Emissions\"] }}</span>\n          </li>\n          <li *ngIf=\"tax[0]['t']['Fuel type']\">\n            <span class=\"taxed__span\">Fuel type</span>:\n            <span class=\"taxed__json\">{{ tax[0]['t'][\"Fuel type\"] }}</span>\n          </li>\n          <li *ngIf=\"tax[0]['t']['Euro Status']\">\n            <span class=\"taxed__span\">Euro Status</span>:\n            <span class=\"taxed__json\">{{ tax[0]['t'][\"Euro Status\"] }}</span>\n          </li>\n          <li *ngIf=\"tax[0]['t']['Expor marker']\">\n            <span class=\"taxed__span\">Export marker</span>:\n            <span class=\"taxed__json\">{{ tax[0]['t'][\"Expor marker\"] }}</span>\n          </li>\n          <li *ngIf=\"tax[0]['t']['Vehicle status']\">\n            <span class=\"taxed__span\">Vehicle status</span>:\n            <span class=\"taxed__json\">{{ tax[0]['t'][\"Vehicle status\"] }}</span>\n          </li>\n          <li *ngIf=\"tax[0]['t']['Vehicle colour']\">\n            <span class=\"taxed__span\">Vehicle colour</span>:\n            <span class=\"taxed__json\">{{ tax[0]['t'][\"Vehicle colour\"] }}</span>\n          </li>\n          <li *ngIf=\"tax[0]['t']['Vehicle type approval'] \">\n            <span class=\"taxed__span\">Vehicle type approval</span>:\n            <span class=\"taxed__json\">{{ tax[0]['t'][\"Vehicle type approval\"] }}</span>\n          </li>\n          <li *ngIf=\"tax[0]['t']['Wheelplan']\">\n            <span class=\"taxed__span\">Wheelplan</span>:\n            <span class=\"taxed__json\">{{ tax[0]['t'][\"Wheelplan\"] }}</span>\n          </li>\n          <li *ngIf=\"tax[0]['t']['Revenue weight']\">\n            <span class=\"taxed__span\">Revenue weight</span>:\n            <span class=\"taxed__json\">{{ tax[0]['t'][\"Revenue weight\"] }}</span>\n          </li>\n          <li>\n            <span class=\"taxed__span\">Tax rates</span>:\n            <span class=\"taxed__json\"><a href=\"#\">View tax rates</a></span>\n          </li>\n        </ul>\n      </ion-row>\n    </div>\n  </div>\n\n  <ng-template #elseTax>\n    <h1>Sorry, not found you TAX!</h1>\n  </ng-template>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tax-details/tax-details.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/tax-details/tax-details.module.ts ***!
  \*********************************************************/
/*! exports provided: TaxDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxDetailsPageModule", function() { return TaxDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tax_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tax-details.page */ "./src/app/pages/tax-details/tax-details.page.ts");







var routes = [
    {
        path: ':regNumb',
        component: _tax_details_page__WEBPACK_IMPORTED_MODULE_6__["TaxDetailsPage"]
    }
];
var TaxDetailsPageModule = /** @class */ (function () {
    function TaxDetailsPageModule() {
    }
    TaxDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tax_details_page__WEBPACK_IMPORTED_MODULE_6__["TaxDetailsPage"]]
        })
    ], TaxDetailsPageModule);
    return TaxDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tax-details/tax-details.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/tax-details/tax-details.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RheC1kZXRhaWxzL3RheC1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/tax-details/tax-details.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/tax-details/tax-details.page.ts ***!
  \*******************************************************/
/*! exports provided: TaxDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxDetailsPage", function() { return TaxDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _car_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../car.service */ "./src/app/car.service.ts");




var TaxDetailsPage = /** @class */ (function () {
    function TaxDetailsPage(carService, router, route) {
        var _this = this;
        this.carService = carService;
        this.router = router;
        this.route = route;
        this.regNumb = this.route.snapshot.paramMap.get('regNumb');
        setTimeout(function () {
            _this.carService.getTax(_this.regNumb).subscribe(function (val) {
                _this.tax = val['object'];
            });
        }, 500);
    }
    TaxDetailsPage.prototype.ngOnInit = function () { };
    TaxDetailsPage.prototype.toHome = function () {
        this.router.navigate(["tabs/tab2"]);
    };
    TaxDetailsPage.ctorParameters = function () { return [
        { type: _car_service__WEBPACK_IMPORTED_MODULE_3__["CarService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    TaxDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-tax-details",
            template: __webpack_require__(/*! raw-loader!./tax-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tax-details/tax-details.page.html"),
            styles: [__webpack_require__(/*! ./tax-details.page.scss */ "./src/app/pages/tax-details/tax-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_car_service__WEBPACK_IMPORTED_MODULE_3__["CarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TaxDetailsPage);
    return TaxDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tax-details-tax-details-module-es5.js.map