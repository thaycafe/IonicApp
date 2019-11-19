(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Economize\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"economize-content\" color=\"white\">\n    <div class=\"ion-text-center\">\n  <ion-card class=\"welcome-card\" color=\"light\">\n    <ion-card-header>\n      <ion-card-title>\n        <h4>\n          Balance\n        </h4 > \n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label class=\"balance\" id=\"amount\" color=\"primary\">\n       \n        ${{amount}}\n       </ion-label>\n    </ion-card-content>\n  </ion-card>\n    \n  <ion-card class=\"welcome-card\" color=\"light\">\n    <ion-card-header>\n      <ion-card-title>New Transaction</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid >\n        <ion-row  size=\"3\" offset=\"3\" >\n          <ion-col >\n            <ion-item color=\"light\">\n              <ion-label color=\"medium\" position=\"floating\">Enter value</ion-label>\n              <ion-input color=\"tertiary\"  [(ngModel)]=\"valueID\" type=\"number\"  id=\"valueID\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"3\" >\n                <ion-button id=\"addId\" (click)=\"actionButton()\" color=\"tertiary\" size=\"small\" shape=\"round\" fill=\"outline\">\n                    <ion-icon name=\"add-circle-outline\"></ion-icon>\n                    Add\n                  </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row >\n            <ion-col>\n                <ion-label color=\"medium\">Past Transactions</ion-label>\n            </ion-col>\n           \n        </ion-row>\n            <ion-row >\n              <ion-col offset-md=\"3\">\n                  <ion-item-sliding *ngFor=\"let item of list\">\n                      \n                    <ion-item color=\"light\">\n                        <ion-label color=\"primary\">{{item}}</ion-label>\n                          \n                      </ion-item>\n                      <ion-item-options  side=\"end\">\n                          <ion-item-option color=\"danger\" (click)=\"removeItem(item)\">Delete</ion-item-option>\n                      </ion-item-options>\n                    \n                   \n                  </ion-item-sliding>\n              </ion-col>\n            </ion-row>       \n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</div>\n</ion-content>\n<script src=\"home.page.ts\"></script>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.economize-content {\n  background: #6A26D3;\n}\n\n.economize-carde {\n  background: white;\n}\n\n.balance {\n  font-size: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RoYXlnbmVlbC9Eb2N1bWVudG9zL0NvbXB1dGHDp8Ojby9UQ0MvZWNvbm9taXplSW9uaWMvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7QUNFRjs7QURBQTtFQUNFLGlCQUFBO0FDR0Y7O0FEQ0E7RUFDRSxlQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmVjb25vbWl6ZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDojNkEyNkQzO1xufVxuLmVjb25vbWl6ZS1jYXJkZXtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIFxufVxuXG4uYmFsYW5jZXtcbiAgZm9udC1zaXplOiA2NXB4O1xufSIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmVjb25vbWl6ZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzZBMjZEMztcbn1cblxuLmVjb25vbWl6ZS1jYXJkZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uYmFsYW5jZSB7XG4gIGZvbnQtc2l6ZTogNjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let HomePage = class HomePage {
    constructor(splashScreen, alertController) {
        this.splashScreen = splashScreen;
        this.alertController = alertController;
        this.amount = "0";
        this.list = [];
        this.nevative = false;
        this.splashScreen.show();
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Warning",
                message: "Please enter a valid value ;)",
                buttons: ["OK"]
            });
            yield alert.present();
        });
    }
    actionButton() {
        const newItem = this.valueID;
        if (this.valueID == null || this.valueID == "" || isNaN(Number(this.valueID))) {
            this.valueID = "";
            this.presentAlert();
        }
        else {
            if (Number(this.valueID) < 0) {
                this.nevative = true;
            }
            this.list.unshift(newItem);
            let amountInt = Number(this.amount) + Number(this.valueID);
            this.amount = String(amountInt);
            this.valueID = "";
        }
    }
    removeItem(item) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] == item) {
                this.list.splice(i, 1);
                this.amount = String(Number(this.amount) - Number(item));
            }
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map