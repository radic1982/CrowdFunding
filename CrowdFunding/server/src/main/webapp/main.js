(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Crowd Funding';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_module_materials_design_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/module/materials-design.module */ "./src/app/module/materials-design.module.ts");
/* harmony import */ var _page_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/home/home.component */ "./src/app/page/home/home.component.ts");
/* harmony import */ var _page_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/page-not-found/page-not-found.component */ "./src/app/page/page-not-found/page-not-found.component.ts");
/* harmony import */ var _page_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page/login/login.component */ "./src/app/page/login/login.component.ts");
/* harmony import */ var _page_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page/register/register.component */ "./src/app/page/register/register.component.ts");
/* harmony import */ var _page_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page/projects/projects.component */ "./src/app/page/projects/projects.component.ts");
/* harmony import */ var _page_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page/login-form/login-form.component */ "./src/app/page/login-form/login-form.component.ts");
/* harmony import */ var _page_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page/register-form/register-form.component */ "./src/app/page/register-form/register-form.component.ts");
/* harmony import */ var src_app_service_security_service_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/service/security-service/authentication-service */ "./src/app/service/security-service/authentication-service.ts");
/* harmony import */ var _service_security_service_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/security-service/can-activate-auth.guard */ "./src/app/service/security-service/can-activate-auth.guard.ts");
/* harmony import */ var _service_security_service_jwt_utils_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/security-service/jwt-utils.service */ "./src/app/service/security-service/jwt-utils.service.ts");
/* harmony import */ var _service_security_service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/security-service/token-interceptor.service */ "./src/app/service/security-service/token-interceptor.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/project-service */ "./src/app/service/project-service.ts");
/* harmony import */ var _page_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./page/add-project/add-project.component */ "./src/app/page/add-project/add-project.component.ts");
/* harmony import */ var _page_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./page/project-details/project-details.component */ "./src/app/page/project-details/project-details.component.ts");
/* harmony import */ var _page_project_details_card_project_details_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./page/project-details-card/project-details-card.component */ "./src/app/page/project-details-card/project-details-card.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    { path: '', component: _page_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'home', component: _page_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'login', component: _page_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'register', component: _page_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'projects', component: _page_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"] },
    { path: 'projects/:id', component: _page_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_20__["ProjectDetailsComponent"] },
    { path: 'add-project', component: _page_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_19__["AddProjectComponent"] },
    { path: '**', component: _page_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _page_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _page_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
                _page_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _page_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _page_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"],
                _page_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_11__["LoginFormComponent"],
                _page_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_12__["RegisterFormComponent"],
                _page_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_19__["AddProjectComponent"],
                _page_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_20__["ProjectDetailsComponent"],
                _page_project_details_card_project_details_card_component__WEBPACK_IMPORTED_MODULE_21__["ProjectDetailsCardComponent"],
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, {
                    enableTracing: false
                }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                src_app_module_materials_design_module__WEBPACK_IMPORTED_MODULE_5__["MaterialsDesignModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
                    useClass: _service_security_service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptorService"],
                    multi: true
                },
                src_app_service_security_service_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
                _service_security_service_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_14__["CanActivateAuthGuard"],
                _service_security_service_jwt_utils_service__WEBPACK_IMPORTED_MODULE_15__["JwtUtilsService"],
                _service_project_service__WEBPACK_IMPORTED_MODULE_18__["ProjectService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/model/project.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/project.model.ts ***!
  \****************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project(i) {
        this.id = i.id;
        this.name = i.name;
        this.userName = i.userName;
        this.description = i.description;
        this.wantedPrice = i.wantedPrice;
        this.paidPrice = 0;
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/module/materials-design.module.ts":
/*!***************************************************!*\
  !*** ./src/app/module/materials-design.module.ts ***!
  \***************************************************/
/*! exports provided: MaterialsDesignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsDesignModule", function() { return MaterialsDesignModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialsDesignModule = /** @class */ (function () {
    function MaterialsDesignModule() {
    }
    MaterialsDesignModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBBootstrapModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            exports: [
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBBootstrapModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], MaterialsDesignModule);
    return MaterialsDesignModule;
}());



/***/ }),

/***/ "./src/app/page/add-project/add-project.component.html":
/*!*************************************************************!*\
  !*** ./src/app/page/add-project/add-project.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"h-100\">\r\n  <mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar intro-fixed-nav\" [containerInside]=\"false\">\r\n    <logo>\r\n      <a class=\"logo navbar-brand\" href=\"/home\">\r\n        <strong>Crowd Funding</strong>\r\n      </a>\r\n    </logo>\r\n    <links>\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\">Add Project\r\n            <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\" href=\"/projects\">Projects</a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav mr-right\">\r\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\">Contact Us</a>\r\n        </li>\r\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\" href=\"/login\">Login</a>\r\n        </li>\r\n      </ul>\r\n    </links>\r\n  </mdb-navbar>\r\n\r\n  <div class=\"view intro-2\" style=\"\">\r\n    <div class=\"full-bg-img\">\r\n      <div class=\"mask rgba-purple-light flex-center\">\r\n        <section class=\"form-elegant mb-0 \">\r\n          <!--Form without header-->\r\n          <div class=\"card rgba-purple-light \" style=\"background-image: url('https://mdbootstrap.com/img/Photos/Others/photo3.jpg');\">\r\n            <div class=\"text-white rgba-purple-light py-0 px-5 z-depth-4\">\r\n              <!--Header-->\r\n              <div class=\"text-center\">\r\n                <h3 class=\"white-text mb-0 mt-4 font-weight-bold text-uppercase\">\r\n                  <strong>Send</strong>\r\n                  <a class=\"green-text font-weight-bold\">\r\n                    <strong> Us</strong>\r\n                  </a>\r\n                  <a class=\"white-text font-weight-bold\">\r\n                    <strong> Project</strong>\r\n                  </a>\r\n                </h3>\r\n              </div>\r\n\r\n              <div class=\"md-form\">\r\n                <input type=\"text\" id=\"form100\" class=\"form-control\">\r\n                <label for=\"form100\">Your name</label>\r\n              </div>\r\n              <div class=\"md-form\">\r\n                <input type=\"text\" id=\"form102\" class=\"form-control\">\r\n                <label for=\"form102\">Name of project</label>\r\n              </div>\r\n              <div class=\"md-form\">\r\n                <input type=\"number\" id=\"form102\" class=\"form-control\">\r\n                <label for=\"form102\">Wanted price</label>\r\n              </div>\r\n              <div class=\"md-form\">\r\n                <textarea type=\"text\" id=\"form103\" class=\"md-textarea form-control\" rows=\"4\"></textarea>\r\n                <label for=\"form103\">Describe project</label>\r\n              </div>\r\n              <!--Grid row-->\r\n              <div class=\"row d-flex align-items-center\">\r\n                <!--Grid column-->\r\n                <div class=\"text-center col-md-12 mt-3 mb-2\">\r\n                  <button type=\"button\" class=\"btn btn-success btn-block btn-rounded z-depth-1\">Send</button>\r\n                </div>\r\n                <!--Grid column-->\r\n              </div>\r\n              <!--Grid row-->\r\n            </div>\r\n          </div>\r\n          <!--/Form without header-->\r\n        </section>\r\n      </div>\r\n    </div>\r\n    <!-- /.Main -->"

/***/ }),

/***/ "./src/app/page/add-project/add-project.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/page/add-project/add-project.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover {\n  color: white; }\n\n.view {\n  background: url(\"https://mdbootstrap.com/img/Photos/Others/city13.jpg\") no-repeat center center;\n  background-size: cover;\n  height: 100vh; }\n\n.navbar {\n  background-color: transparent; }\n\n.top-nav-collapse {\n  background-color: #4285F4 !important; }\n\n@media only screen and (max-width: 768px) {\n  .navbar {\n    background-color: #4285F4; } }\n\n.form-light {\n  border-bottom-left-radius: .3rem;\n  border-bottom-right-radius: .3rem; }\n"

/***/ }),

/***/ "./src/app/page/add-project/add-project.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/page/add-project/add-project.component.ts ***!
  \***********************************************************/
/*! exports provided: AddProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function() { return AddProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddProjectComponent = /** @class */ (function () {
    function AddProjectComponent() {
    }
    AddProjectComponent.prototype.ngOnInit = function () {
    };
    AddProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-project',
            template: __webpack_require__(/*! ./add-project.component.html */ "./src/app/page/add-project/add-project.component.html"),
            styles: [__webpack_require__(/*! ./add-project.component.scss */ "./src/app/page/add-project/add-project.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddProjectComponent);
    return AddProjectComponent;
}());



/***/ }),

/***/ "./src/app/page/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/page/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"h-100\">\r\n  <mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar intro-fixed-nav\" [containerInside]=\"false\">\r\n    <logo>\r\n      <a class=\"logo navbar-brand\" href=\"/home\">\r\n        <strong>Crowd Funding</strong>\r\n      </a>\r\n    </logo>\r\n    <links>\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\" href=\"/add-project\">Add Project</a>\r\n        </li>\r\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\" href=\"/projects\">Projects</a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav mr-right\">\r\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\">Contact Us</a>\r\n        </li>\r\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\" href=\"/login\">Login</a>\r\n        </li>\r\n      </ul>\r\n    </links>\r\n  </mdb-navbar>\r\n  <!-- Main -->\r\n  <div class=\"view intro-2\" style=\"\">\r\n    <div class=\"full-bg-img\">\r\n      <div class=\"mask rgba-purple-light flex-center\">\r\n        <div class=\"container text-center white-text wow fadeInUp\">\r\n          <h1 class=\"h1-responsive wow fadeIn mb-4 animated\" data-wow-delay=\"0.2s\" style=\"font-weight: 500; visibility: visible; animation-name: fadeIn; animation-delay: 2s;\">\r\n            <h1 class=\"textt\">Crowd Funding Corporation</h1>\r\n          </h1>\r\n          <br>\r\n          <br>\r\n          <h3 class=\"h3-responsive wow fadeIn mb-4 animated\" data-wow-delay=\"0.2s\" style=\"font-weight: 500; visibility: visible; animation-name: fadeIn; animation-delay: 4s;\">\r\n            <h3 class=\"textt\">Do you want to earn money by your ideas?</h3>\r\n          </h3>\r\n          <h3 class=\"h3-responsive wow fadeIn mb-4 animated\" data-wow-delay=\"0.2s\" style=\"font-weight: 500; visibility: visible; animation-name: fadeIn; animation-delay: 5.5s;\">\r\n            <h3 class=\"textt\">Crowd Funding is the right place for you!</h3>\r\n          </h3>\r\n          <div class=\"col-md-12\"></div>\r\n          <a class=\"a-responsive wow fadeIn mb-4 animated\" data-wow-delay=\"0.2s\" style=\"font-weight: 500; visibility: visible; animation-name: fadeIn; animation-delay: 7s;\">\r\n            <a class=\"btn aqua-gradient btn waves-light\" mdbWavesEffect href=\"/login\">Get Started</a>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- /.Main -->\r\n</header>\r\n<!--Main Navigation-->\r\n\r\n<!--Main Layout-->\r\n<main class=\"text-center py-5\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <p align=\"justify\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\r\n          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum\r\n          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\r\n          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\r\n          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n\r\n<header class=\"h-100\">\r\n  <mdb-navbar SideClass=\"navbar fixed-bottom navbar-expand-lg navbar-dark scrolling-navbar intro-fixed-nav\" [containerInside]=\"false\">\r\n    <logo>\r\n      <strong>© 2018 Copyright</strong>\r\n    </logo>\r\n  </mdb-navbar>\r\n<!--Main Layout-->"

/***/ }),

/***/ "./src/app/page/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/page/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover {\n  color: white; }\n\n.view {\n  background: url(\"http://mdbootstrap.com/img/Photos/Others/images/91.jpg\") no-repeat center center;\n  background-size: cover;\n  height: 100vh; }\n\n.navbar {\n  background-color: transparent; }\n\n.top-nav-collapse {\n  background-color: #4285F4 !important; }\n\n@media only screen and (max-width: 768px) {\n  .navbar {\n    background-color: #4285F4; } }\n"

/***/ }),

/***/ "./src/app/page/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_security_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/security-service/authentication-service */ "./src/app/service/security-service/authentication-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(service) {
        this.service = service;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.loginButtonDisplay = function () {
        if (this.service.loggedIn()) {
            return this.service.getCurrentUser().username + ' // logout';
        }
        return 'Login';
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/page/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/page/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_security_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page/login-form/login-form.component.html":
/*!***********************************************************!*\
  !*** ./src/app/page/login-form/login-form.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-login100\">\r\n  <form class=\"login100-form validate-form\" (ngSubmit)=\"login()\">\r\n    <span class=\"login100-form-title p-b-26\">\r\n      <p>\r\n        Sign in\r\n      </p>\r\n    </span>\r\n    <span class=\"login100-form-title p-b-48\">\r\n      <i class=\"zmdi zmdi-font\"></i>\r\n    </span>\r\n\r\n    <div class=\"wrap-input100\">\r\n      <input [(ngModel)]=\"user.username\" class=\"input100\" type=\"text\" name=\"username\">\r\n      <span class=\"focus-input100\" data-placeholder=\"Username\"></span>\r\n    </div>\r\n\r\n    <div class=\"wrap-input100 validate-input\">\r\n      <input [(ngModel)]=\"user.password\" class=\"input100\" type=\"password\" name=\"pass\">\r\n      <span class=\"focus-input100\" data-placeholder=\"Password\"></span>\r\n    </div>\r\n    <div class=\"text-center\">\r\n      <button type=\"submit\" class=\"btn btn-outline-info\">Login</button>\r\n    </div>\r\n    <div class=\"text-center\">\r\n      <p>\r\n        Don’t have an account?\r\n      </p>\r\n    </div>\r\n    <div class=\"text-center\">\r\n      <a href=\"/register\" class=\"btn btn-outline-info\">\r\n        Sign Up\r\n      </a>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/page/login-form/login-form.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/page/login-form/login-form.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  border-bottom-color: white; }\n\na {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: white;\n  margin: 0px;\n  transition: all 0.4s;\n  -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s; }\n\np:hover {\n  color: #33b5e5; }\n\na:focus {\n  outline: none !important; }\n\na:hover {\n  text-decoration: none;\n  color: #33b5e5; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 0px; }\n\np {\n  font-family: Poppins-Regular;\n  font-size: 25px;\n  line-height: 1.7;\n  color: white;\n  margin: 0px; }\n\nul, li {\n  margin: 0px;\n  list-style-type: none; }\n\n.btn {\n  color: white; }\n\ninput {\n  outline: none;\n  border: none; }\n\ntextarea {\n  outline: none;\n  border: none; }\n\n.txt1 {\n  font-family: Poppins-Regular;\n  font-size: 13px;\n  color: white;\n  line-height: 1.5; }\n\n.txt2 {\n  font-family: Poppins-Regular;\n  font-size: 13px;\n  color: white;\n  line-height: 1.5; }\n\n.limiter {\n  width: 100%;\n  margin: 0 auto; }\n\n.container-login100 {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 15px; }\n\n.wrap-login100 {\n  width: 390px;\n  background: transparent;\n  border-bottom: 2px solid #33b5e5;\n  border-top: 2px solid #33b5e5;\n  border-right: 2px solid #33b5e5;\n  border-left: 2px solid #33b5e5;\n  border-radius: 10px;\n  overflow: hidden;\n  padding: 77px 55px 33px 55px;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);\n  -moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -ms-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1); }\n\n.login150-form {\n  width: 100%; }\n\n.login100-form {\n  width: 100%; }\n\n.login100-form-title {\n  display: block;\n  font-family: Poppins-Bold;\n  font-size: 35px;\n  color: white;\n  line-height: 1.2;\n  text-align: center;\n  padding-bottom: 17px; }\n\n.login100-form-title i {\n  font-size: 60px; }\n\n.wrap-input100 {\n  width: 100%;\n  position: relative;\n  border-bottom: 2px solid white;\n  margin-bottom: 37px; }\n\n.input100 {\n  font-family: Poppins-Regular;\n  font-size: 15px;\n  color: white;\n  line-height: 1.2;\n  display: block;\n  width: 100%;\n  height: 45px;\n  background: transparent;\n  padding: 0 5px; }\n\n.focus-input100 {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none; }\n\n.focus-input100::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  transition: all 0.4s;\n  background: #33b5e5;\n  background: linear-gradient(left, #21d4fd, #b721ff); }\n\n.focus-input100::after {\n  font-family: Poppins-Regular;\n  font-size: 15px;\n  color: white;\n  line-height: 1.2;\n  content: attr(data-placeholder);\n  display: block;\n  width: 100%;\n  position: relative;\n  top: 16px;\n  left: 0px;\n  padding-left: 5px;\n  transition: all 0.4s; }\n\n.input100:focus + .focus-input100::after {\n  top: -15px; }\n\n.input100:focus + .focus-input100::before {\n  width: 100%; }\n\n.has-val.input100 + .focus-input100::after {\n  top: -15px; }\n\n.has-val.input100 + .focus-input100::before {\n  width: 100%; }\n\n@media (max-width: 576px) {\n  .wrap-login100 {\n    padding: 77px 15px 33px 15px; } }\n\n/*------------------------------------------------------------------\r\n[ Alert validate ]*/\n\n.validate-input {\n  position: relative; }\n\n.alert-validate::before {\n  content: attr(data-validate);\n  position: absolute;\n  max-width: 70%;\n  background-color: #fff;\n  border: 1px solid #c80000;\n  border-radius: 2px;\n  padding: 4px 25px 4px 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 0px;\n  pointer-events: none;\n  font-family: Poppins-Regular;\n  color: #c80000;\n  font-size: 13px;\n  line-height: 1.4;\n  text-align: left;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.4s; }\n\n.alert-validate::after {\n  content: \"\\f06a\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #c80000;\n  display: block;\n  position: absolute;\n  background-color: #fff;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 5px; }\n\n.alert-validate:hover:before {\n  visibility: visible;\n  opacity: 1; }\n\n@media (max-width: 992px) {\n  .alert-validate::before {\n    visibility: visible;\n    opacity: 1; } }\n"

/***/ }),

/***/ "./src/app/page/login-form/login-form.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/page/login-form/login-form.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_security_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/security-service/authentication-service */ "./src/app/service/security-service/authentication-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.error = '';
        this.user = {};
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.user.username, this.user.password)
            .pipe()
            .subscribe(function (data) {
            _this.router.navigate(['/projects']);
        }, function (error) {
            _this.error = error;
        });
    };
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/page/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/page/login-form/login-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_security_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/page/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/page/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"h-100\">\r\n  <mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar intro-fixed-nav\">\r\n    <logo>\r\n      <a class=\"logo navbar-brand\" href=\"#\">\r\n        <strong>Crowd Funding</strong>\r\n      </a>\r\n    </logo>\r\n    <links>\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\" href=\"/add-project\">Add Project</a>\r\n        </li>\r\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\">Projects</a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav mr-right\">\r\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\">Contact Us</a>\r\n        </li>\r\n        <li class=\"nav-item active waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\" href=\"/login\">Login\r\n            <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </links>\r\n  </mdb-navbar>\r\n  <!-- Main -->\r\n  <div class=\"view intro-2\" style=\"\">\r\n    <div class=\"full-bg-img\">\r\n      <div class=\"mask rgba-purple-light flex-center\">\r\n        <app-login-form></app-login-form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- /.Main -->\r\n</header>\r\n<!--Main Navigation-->\r\n<header class=\"h-100\">\r\n  <mdb-navbar SideClass=\"navbar fixed-bottom navbar-expand-lg navbar-dark scrolling-navbar intro-fixed-nav\" [containerInside]=\"false\">\r\n    <logo>\r\n      <strong>© 2018 Copyright</strong>\r\n    </logo>\r\n  </mdb-navbar>"

/***/ }),

/***/ "./src/app/page/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/page/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  background: url(\"https://mdbootstrap.com/img/Photos/Others/img (40).jpg\") no-repeat center center;\n  background-size: cover;\n  height: 100vh; }\n\n.navbar {\n  background-color: #4285F4 !important;\n  max-width: 100%; }\n\n.top-nav-collapse {\n  background-color: #4285F4; }\n\n@media only screen and (max-width: 768px) {\n  .navbar {\n    background-color: #4285F4; } }\n"

/***/ }),

/***/ "./src/app/page/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/page/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/page/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/page/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/page/page-not-found/page-not-found.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/page/page-not-found/page-not-found.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"h-100\">\r\n  <mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar intro-fixed-nav\">\r\n    <logo>\r\n      <a class=\"logo navbar-brand\" href=\"#\">\r\n        <strong>Crowd Funding</strong>\r\n      </a>\r\n    </logo>\r\n    <links>\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\" href=\"/add-project\">Add Project</a>\r\n        </li>\r\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\">Projects</a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav mr-right\">\r\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\">Contact Us</a>\r\n        </li>\r\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\" href=\"/login\">Login</a>\r\n        </li>\r\n      </ul>\r\n    </links>\r\n  </mdb-navbar>\r\n\r\n  <div class=\"view intro-2\" style=\"\">\r\n    <div class=\"full-bg-img\">\r\n      <div class=\"mask rgba-purple-light flex-center\">\r\n        <div class=\"mt-5 pt-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-8 text-center float-md-none mx-auto\">\r\n              <img src=\"https://mdbootstrap.com/img/Others/404_mdb.png\" alt=\"Error 404\" class=\"img-fluid wow fadeIn animated\" style=\"visibility: visible; animation-name: fadeIn;\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-5\">\r\n            <div class=\"col-md-12 text-center mb-5\">\r\n              <h2 class=\"h2-responsive wow fadeIn mb-4 animated\" data-wow-delay=\"0.2s\" style=\"font-weight: 500; visibility: visible; animation-name: fadeIn; animation-delay: 0.2s;\"><h2 class=\"textt\">Oops! This obviously isn't a page you were looking for</h2>.</h2>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>"

/***/ }),

/***/ "./src/app/page/page-not-found/page-not-found.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/page/page-not-found/page-not-found.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  background: url(\"https://mdbootstrap.com/img/Photos/Others/img (40).jpg\") no-repeat center center;\n  background-size: cover;\n  height: 100vh; }\n\n.navbar {\n  background-color: #4285F4 !important; }\n\n.top-nav-collapse {\n  background-color: #4285F4; }\n\n@media only screen and (max-width: 768px) {\n  .navbar {\n    background-color: #4285F4; } }\n\n.textt {\n  color: white; }\n"

/***/ }),

/***/ "./src/app/page/page-not-found/page-not-found.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/page/page-not-found/page-not-found.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/page/project-details-card/project-details-card.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/page/project-details-card/project-details-card.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Card-->\r\n<div *ngIf=\"project\" class = \"row\" style=\"color: white\">\r\n    <div class=\"col-md-8\">\r\n        <h3>Informacije o projektu</h3>\r\n        <div>Project: {{project.name}}</div>\r\n        <div>Description: {{project.description}}</div>\r\n        <div>Wanted : {{project.wantedPrice}}</div>\r\n        <div>Paid : {{project.paidPrice}} </div>\r\n        <div class=\"progress\" style=\"height: 20px\">\r\n                <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ width: ((project.paidPrice / project.wantedPrice) * 100) + '%'}\">\r\n                </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <form (ngSubmit)=\"donate()\" class=\"form form-inline\">\r\n                Naslov:\r\n                <input name=\"donate\" [(ngModel)]=\"activeProject.paidPrice\" type=\"number\" class=\"form-control\"/>\r\n                <input type=\"submit\" value=\"donate\" class=\"form-control\"/>\r\n\r\n        </form>\r\n       \r\n    </div>\r\n    \r\n\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/page/project-details-card/project-details-card.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/page/project-details-card/project-details-card.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  background-color: white;\n  color: black; }\n"

/***/ }),

/***/ "./src/app/page/project-details-card/project-details-card.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/page/project-details-card/project-details-card.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProjectDetailsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsCardComponent", function() { return ProjectDetailsCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/project-service */ "./src/app/service/project-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_project_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/project.model */ "./src/app/model/project.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectDetailsCardComponent = /** @class */ (function () {
    function ProjectDetailsCardComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    ProjectDetailsCardComponent.prototype.ngOnInit = function () {
        this.getParam();
        this.loadData();
        // this.setActiveProject(this.project);
    };
    ProjectDetailsCardComponent.prototype.getParam = function () {
        this.param = this.route.snapshot.params.id;
    };
    ProjectDetailsCardComponent.prototype.loadData = function () {
        var _this = this;
        this.service.getProject(this.param)
            .subscribe(function (res) {
            _this.project = res;
            _this.setActiveProject(_this.project);
        });
    };
    ProjectDetailsCardComponent.prototype.setActiveProject = function (project) {
        this.activeProject = new _model_project_model__WEBPACK_IMPORTED_MODULE_3__["Project"](project);
    };
    // resetActiveProject(){
    //   this.activeProject= new Project({
    //     name:'',
    //     userName:'',
    //     description:'',
    //   })
    // }
    ProjectDetailsCardComponent.prototype.donate = function () {
        var _this = this;
        this.service.putProject(this.activeProject)
            .subscribe(function () {
            _this.loadData();
        });
    };
    ProjectDetailsCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-details-card',
            template: __webpack_require__(/*! ./project-details-card.component.html */ "./src/app/page/project-details-card/project-details-card.component.html"),
            styles: [__webpack_require__(/*! ./project-details-card.component.scss */ "./src/app/page/project-details-card/project-details-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]])
    ], ProjectDetailsCardComponent);
    return ProjectDetailsCardComponent;
}());



/***/ }),

/***/ "./src/app/page/project-details/project-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/page/project-details/project-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"h-100\">\r\n  <mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark intro-fixed-nav\" [containerInside]=\"false\">\r\n    <logo>\r\n      <a class=\"logo navbar-brand\" href=\"/home\">\r\n        <strong>Crowd Funding</strong>\r\n      </a>\r\n    </logo>\r\n    <links>\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\" href=\"/add-project\">Add Project</a>\r\n        </li>\r\n        <li class=\"nav-item active waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\" href=\"/projects\">Projects\r\n            <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav mr-right\">\r\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\">Contact Us</a>\r\n        </li>\r\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\" href=\"/login\">Login</a>\r\n        </li>\r\n      </ul>\r\n    </links>\r\n  </mdb-navbar>\r\n  <div class=\"view intro-2\" style=\"\">\r\n    <div class=\"full-bg-img\">\r\n      <div class=\"mask rgba-purple-light flex-center\">\r\n        <div class=\"text-center\">\r\n          <app-project-details-card></app-project-details-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/page/project-details/project-details.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/page/project-details/project-details.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-dark {\n  background-color: #4285f4 !important; }\n\na:hover {\n  color: white; }\n\n.view {\n  background: url(\"http://mdbootstrap.com/img/Photos/Others/images/91.jpg\") no-repeat center center;\n  background-size: cover;\n  height: 100vh; }\n\n@media only screen and (max-width: 768px) {\n  .navbar {\n    background-color: #4285F4; } }\n"

/***/ }),

/***/ "./src/app/page/project-details/project-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/page/project-details/project-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent() {
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () { };
    ProjectDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-details',
            template: __webpack_require__(/*! ./project-details.component.html */ "./src/app/page/project-details/project-details.component.html"),
            styles: [__webpack_require__(/*! ./project-details.component.scss */ "./src/app/page/project-details/project-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/page/projects/projects.component.html":
/*!*******************************************************!*\
  !*** ./src/app/page/projects/projects.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"h-100\">\r\n  <mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar intro-fixed-nav\" [containerInside]=\"false\">\r\n    <logo>\r\n      <a class=\"logo navbar-brand\" href=\"/home\">\r\n        <strong>Crowd Funding</strong>\r\n      </a>\r\n    </logo>\r\n    <links>\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\" href=\"/add-project\">Add Project</a>\r\n        </li>\r\n        <li class=\"nav-item active waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\" href=\"/projects\">Projects\r\n            <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav mr-right\">\r\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\">Contact Us</a>\r\n        </li>\r\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n          <a class=\"nav-link\" href=\"/login\">Login</a>\r\n        </li>\r\n      </ul>\r\n    </links>\r\n  </mdb-navbar>\r\n\r\n  <div class=\"view intro-2\" >\r\n    <div class=\"full-bg-img\">\r\n      <br/>\r\n      <br/>\r\n      <br/>\r\n      <br/>\r\n      <div class=\"container col-sm-10\">\r\n        <table class=\"table\" style=\"color: white\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Title:</th>\r\n              <th>Description:</th>\r\n              <th>Poster:</th>\r\n              <th></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngFor=\"let project of projects; let i = id;\">\r\n            <tr>\r\n              <td>{{ project.id }}</td>\r\n              <td>{{ project.name }}</td>\r\n              <td>{{ project.description }}</td>\r\n              <td>{{ project.username }}</td>\r\n              <td>\r\n                <button class=\"btn-sub\" (click)=\"details(project)\">Details</button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- /.Main -->\r\n</header>"

/***/ }),

/***/ "./src/app/page/projects/projects.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/page/projects/projects.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-sub {\n  color: white;\n  background-color: transparent; }\n\n.table {\n  border-top: 2px solid white;\n  border-right: 2px solid white;\n  border-bottom: 2px solid white;\n  border-left: 2px solid white; }\n\n.navbar-dark {\n  background-color: #4285f4 !important; }\n\na:hover {\n  color: white; }\n\n.view {\n  background: url(\"http://mdbootstrap.com/img/Photos/Others/images/91.jpg\") no-repeat center center;\n  background-size: cover;\n  height: 100vh; }\n\n@media only screen and (max-width: 768px) {\n  .navbar {\n    background-color: #4285F4; } }\n"

/***/ }),

/***/ "./src/app/page/projects/projects.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/page/projects/projects.component.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/project-service */ "./src/app/service/project-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    ProjectsComponent.prototype.loadData = function () {
        var _this = this;
        this.service.getProjects().subscribe(function (data) {
            _this.projects = data;
        });
    };
    ProjectsComponent.prototype.details = function (project) {
        this.router.navigate(['/projects' + '/' + project.id]);
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/page/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/page/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/page/register-form/register-form.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/page/register-form/register-form.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-login100\">\r\n  <form class=\"login100-form validate-form\" (ngSubmit)=\"register()\">\r\n    <span class=\"login100-form-title p-b-26\">\r\n      <p>\r\n        Sign up\r\n      </p>\r\n    </span>\r\n    <span class=\"login100-form-title p-b-48\">\r\n      <i class=\"zmdi zmdi-font\"></i>\r\n    </span>\r\n\r\n    <div class=\"wrap-input100\">\r\n      <input [(ngModel)]=\"user.email\" class=\"input100\" type=\"text\" name=\"email\">\r\n      <span class=\"focus-input100\" data-placeholder=\"Email\"></span>\r\n    </div>\r\n\r\n    <div class=\"wrap-input100\">\r\n      <input [(ngModel)]=\"user.username\" class=\"input100\" type=\"text\" name=\"username\">\r\n      <span class=\"focus-input100\" data-placeholder=\"Username\"></span>\r\n    </div>\r\n\r\n    <div class=\"wrap-input100 validate-input\">\r\n      <input [(ngModel)]=\"user.password\" class=\"input100\" type=\"password\" name=\"pass\">\r\n      <span class=\"focus-input100\" data-placeholder=\"Password\"></span>\r\n    </div>\r\n    <div class=\"text-center\">\r\n      <button type=\"submit\" class=\"btn btn-outline-info\">Signup</button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/page/register-form/register-form.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/page/register-form/register-form.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  border-bottom-color: white; }\n\na {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: white;\n  margin: 0px;\n  transition: all 0.4s;\n  -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s; }\n\np:hover {\n  color: #33b5e5; }\n\na:focus {\n  outline: none !important; }\n\na:hover {\n  text-decoration: none;\n  color: #33b5e5; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 0px; }\n\np {\n  font-family: Poppins-Regular;\n  font-size: 25px;\n  line-height: 1.7;\n  color: white;\n  margin: 0px; }\n\nul, li {\n  margin: 0px;\n  list-style-type: none; }\n\n.btn {\n  color: white; }\n\ninput {\n  outline: none;\n  border: none; }\n\ntextarea {\n  outline: none;\n  border: none; }\n\n.txt1 {\n  font-family: Poppins-Regular;\n  font-size: 13px;\n  color: white;\n  line-height: 1.5; }\n\n.txt2 {\n  font-family: Poppins-Regular;\n  font-size: 13px;\n  color: white;\n  line-height: 1.5; }\n\n.limiter {\n  width: 100%;\n  margin: 0 auto; }\n\n.container-login100 {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 15px; }\n\n.wrap-login100 {\n  width: 390px;\n  background: transparent;\n  border-bottom: 2px solid #33b5e5;\n  border-top: 2px solid #33b5e5;\n  border-right: 2px solid #33b5e5;\n  border-left: 2px solid #33b5e5;\n  border-radius: 10px;\n  overflow: hidden;\n  padding: 77px 55px 33px 55px;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);\n  -moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -ms-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1); }\n\n.login150-form {\n  width: 100%; }\n\n.login100-form {\n  width: 100%; }\n\n.login100-form-title {\n  display: block;\n  font-family: Poppins-Bold;\n  font-size: 35px;\n  color: white;\n  line-height: 1.2;\n  text-align: center;\n  padding-bottom: 17px; }\n\n.login100-form-title i {\n  font-size: 60px; }\n\n.wrap-input100 {\n  width: 100%;\n  position: relative;\n  border-bottom: 2px solid white;\n  margin-bottom: 37px; }\n\n.input100 {\n  font-family: Poppins-Regular;\n  font-size: 15px;\n  color: white;\n  line-height: 1.2;\n  display: block;\n  width: 100%;\n  height: 45px;\n  background: transparent;\n  padding: 0 5px; }\n\n.focus-input100 {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none; }\n\n.focus-input100::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  transition: all 0.4s;\n  background: #33b5e5;\n  background: linear-gradient(right, #21d4fd, #b721ff); }\n\n.focus-input100::after {\n  font-family: Poppins-Regular;\n  font-size: 15px;\n  color: white;\n  line-height: 1.2;\n  content: attr(data-placeholder);\n  display: block;\n  width: 100%;\n  position: relative;\n  top: 16px;\n  left: 0px;\n  padding-left: 5px;\n  transition: all 0.4s; }\n\n.input100:focus + .focus-input100::after {\n  top: -15px; }\n\n.input100:focus + .focus-input100::before {\n  width: 100%; }\n\n.has-val.input100 + .focus-input100::after {\n  top: -15px; }\n\n.has-val.input100 + .focus-input100::before {\n  width: 100%; }\n\n@media (max-width: 576px) {\n  .wrap-login100 {\n    padding: 77px 15px 33px 15px; } }\n\n/*------------------------------------------------------------------\r\n  [ Alert validate ]*/\n\n.validate-input {\n  position: relative; }\n\n.alert-validate::before {\n  content: attr(data-validate);\n  position: absolute;\n  max-width: 70%;\n  background-color: #fff;\n  border: 1px solid #c80000;\n  border-radius: 2px;\n  padding: 4px 25px 4px 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 0px;\n  pointer-events: none;\n  font-family: Poppins-Regular;\n  color: #c80000;\n  font-size: 13px;\n  line-height: 1.4;\n  text-align: left;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.4s; }\n\n.alert-validate::after {\n  content: \"\\f06a\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #c80000;\n  display: block;\n  position: absolute;\n  background-color: #fff;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 5px; }\n\n.alert-validate:hover:before {\n  visibility: visible;\n  opacity: 1; }\n\n@media (max-width: 992px) {\n  .alert-validate::before {\n    visibility: visible;\n    opacity: 1; } }\n"

/***/ }),

/***/ "./src/app/page/register-form/register-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/page/register-form/register-form.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function() { return RegisterFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_security_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/security-service/authentication-service */ "./src/app/service/security-service/authentication-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterFormComponent = /** @class */ (function () {
    function RegisterFormComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.error = '';
        this.user = {};
    }
    RegisterFormComponent.prototype.ngOnInit = function () {
    };
    RegisterFormComponent.prototype.register = function () {
        var _this = this;
        this.authenticationService.register(this.user.email, this.user.username, this.user.password)
            .pipe()
            .subscribe(function (data) {
            _this.router.navigate(['/home']);
        }, function (error) {
            _this.error = error;
        });
    };
    RegisterFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-form',
            template: __webpack_require__(/*! ./register-form.component.html */ "./src/app/page/register-form/register-form.component.html"),
            styles: [__webpack_require__(/*! ./register-form.component.scss */ "./src/app/page/register-form/register-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_security_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());



/***/ }),

/***/ "./src/app/page/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/page/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"h-100\">\r\n    <mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar intro-fixed-nav\">\r\n        <logo>\r\n            <a class=\"logo navbar-brand\" href=\"#\">\r\n                <strong>Crowd Funding</strong>\r\n            </a>\r\n        </logo>\r\n        <links>\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n                    <a class=\"nav-link\" href=\"/add-project\">Add Project</a>\r\n                </li>\r\n                <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n                    <a class=\"nav-link\">Projects</a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"navbar-nav mr-right\">\r\n                <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n                    <a class=\"nav-link\">Contact Us</a>\r\n                </li>\r\n                <li class=\"nav-item active waves-light\" mdbWavesEffect>\r\n                    <a class=\"nav-link\" href=\"/login\">Login\r\n                        <span class=\"sr-only\">(current)</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </links>\r\n    </mdb-navbar>\r\n    <!-- Main -->\r\n    <div class=\"view intro-2\">\r\n        <div class=\"full-bg-img\">\r\n            <div class=\"mask rgba-purple-light flex-center\">\r\n                <app-register-form></app-register-form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.Main -->\r\n</header>\r\n<!--Main Navigation-->"

/***/ }),

/***/ "./src/app/page/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/page/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  background: url(\"https://mdbootstrap.com/img/Photos/Others/img (40).jpg\") no-repeat center center;\n  background-size: cover;\n  height: 100vh; }\n\n.navbar {\n  background-color: #4285F4 !important;\n  max-width: 100%; }\n\n.top-nav-collapse {\n  background-color: #4285F4; }\n\n@media only screen and (max-width: 768px) {\n  .navbar {\n    background-color: #4285F4; } }\n"

/***/ }),

/***/ "./src/app/page/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/page/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/page/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/page/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/service/project-service.ts":
/*!********************************************!*\
  !*** ./src/app/service/project-service.ts ***!
  \********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.path = '/api/projects';
    }
    ProjectService.prototype.getProjects = function () {
        // Ovo vraca observablu u ng6
        return this.http.get(this.path);
    };
    ProjectService.prototype.getProject = function (id) {
        return this.http.get(this.path + '/' + id);
    };
    ProjectService.prototype.putProject = function (project) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put("/api/projects/" + project.id, JSON.stringify(project), { headers: headers });
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/service/security-service/authentication-service.ts":
/*!********************************************************************!*\
  !*** ./src/app/service/security-service/authentication-service.ts ***!
  \********************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _jwt_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt-utils.service */ "./src/app/service/security-service/jwt-utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, jwtUtilsService) {
        this.http = http;
        this.jwtUtilsService = jwtUtilsService;
        this.loginPath = '/api/login';
        this.registerPath = '/api/register';
        this.isLoggedIn = false;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.loginPath, { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            if (res && res.token) {
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: res.token }));
                _this.isLoggedIn = true;
            }
        }));
    };
    AuthenticationService.prototype.register = function (email, username, password) {
        return this.http.post(this.registerPath, { email: email, username: username, password: password });
    };
    AuthenticationService.prototype.loggedIn = function () {
        if (this.getToken() != '')
            return true;
        else
            return false;
    };
    AuthenticationService.prototype.getToken = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser && currentUser.token;
        return token ? token : "";
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.isLoggedIn = false;
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        if (localStorage.currentUser) {
            return JSON.parse(localStorage.currentUser);
        }
        else {
            return undefined;
        }
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _jwt_utils_service__WEBPACK_IMPORTED_MODULE_3__["JwtUtilsService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/security-service/can-activate-auth.guard.ts":
/*!*********************************************************************!*\
  !*** ./src/app/service/security-service/can-activate-auth.guard.ts ***!
  \*********************************************************************/
/*! exports provided: CanActivateAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateAuthGuard", function() { return CanActivateAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_security_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/security-service/authentication-service */ "./src/app/service/security-service/authentication-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateAuthGuard = /** @class */ (function () {
    function CanActivateAuthGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    CanActivateAuthGuard.prototype.canActivate = function (next, state) {
        if (this.authenticationService.isLoggedIn) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    CanActivateAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [src_app_service_security_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CanActivateAuthGuard);
    return CanActivateAuthGuard;
}());



/***/ }),

/***/ "./src/app/service/security-service/jwt-utils.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/service/security-service/jwt-utils.service.ts ***!
  \***************************************************************/
/*! exports provided: JwtUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtUtilsService", function() { return JwtUtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JwtUtilsService = /** @class */ (function () {
    function JwtUtilsService() {
    }
    JwtUtilsService.prototype.getRoles = function (token) {
        var jwtData = token.split('.')[1];
        var decodedJwtJsonData = window.atob(jwtData);
        var decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData.roles.map(function (x) { return x.authority; }) || [];
    };
    JwtUtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], JwtUtilsService);
    return JwtUtilsService;
}());



/***/ }),

/***/ "./src/app/service/security-service/token-interceptor.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/service/security-service/token-interceptor.service.ts ***!
  \***********************************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_security_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/security-service/authentication-service */ "./src/app/service/security-service/authentication-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(inj) {
        this.inj = inj;
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        var authenticationService = this.inj.get(src_app_service_security_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]);
        request = request.clone({
            setHeaders: {
                'X-Auth-Token': "" + authenticationService.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Eclipse Workspace\CrowdFunding\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map