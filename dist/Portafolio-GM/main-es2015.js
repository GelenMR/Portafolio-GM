(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/about/about.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-container\">\n    <app-navbar></app-navbar>\n</div>\n\n<!-- Faltan links redes sociales y CV -->\n<section class=\"container\">\n    <div>\n        <h2 class=\"title-background-white\">Sobre Mí</h2>\n        <div class=\"line-one\"></div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"text-center bg-white fluid animated zoomIn\">\n                <h5><i>\"He descubierto en el\n                  Desarrollo Web una pasión,\n                  que me permite crear,\n                  aportar y aprender, que son\n                  mis mayores intereses\"</i></h5>\n            </div>\n            <div class=\"text-center\">\n                <a routerLink=\"/projects\" routerLinkActive=\"active\">\n                    <img width=\"300\" class=\"img-fluid animated zoomInUp\" alt=\"Foto-gelen\" src=\"../../../assets/img/foto-gelenm.png\" />\n                </a>\n            </div>\n            <!-- <div class=\"row\">\n                <div class=\"text-center mt-3\">\n                    <a routerLink=\"/projects\" routerLinkActive=\"active\">\n                        <img width=\"300\" alt=\"Logo-gelen\" src=\"../../../assets/img/DEVELOPER.png\" />\n                    </a>\n                    <a routerLink=\"/projects\" routerLinkActive=\"active\">\n                        <img alt=\"flecha-siguiente\" src=\"../../../assets/img/arrow.png\" />\n                    </a>\n                </div>\n            </div> -->\n        </div>\n        <div class=\"col-md-6 mt-3\">\n            <div class=\"\">\n                <p><b> Soy una Desarrolladora Front-End,</b> responsable, comprometida, comunicativa y dispuesta. Me gusta trabajar en equipo, lo cual, es siempre una instancia de aprendizaje y una oportunidad de compartir conocimientos.\n                </p>\n\n                <p>Tengo experiencia en docencia y formación; para mí, ser un puente entre las personas y el aprendizaje es una experiencia enriquecedora y motivadora.</p>\n                <!-- <a routerLink=\"/projects\" routerLinkActive=\"active\">\n                    <img width=\"300\" alt=\"Foto-gelen\" src=\"../../../assets/img/foto-gelenm.png\" />\n                </a> -->\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-container\">\n    <app-navbar></app-navbar>\n</div>\n<section class=\"container\">\n    <div>\n        <h2 class=\"title-background-white\">Contáctame</h2>\n        <div class=\"line-one\"></div>\n    </div>\n    <div class=\"row p-sm-2\">\n        <h6><strong>Si te interesa mi trabajo y quieres ponerte en contacto conmigo, puedes llamar o escribir, como prefieras!!!</strong></h6>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <a target=\"_blank\" href=\"https://github.com/gelenmr\">\n                <div>\n                    <div class=\"icon-git\"></div>\n                </div>\n            </a>\n            <a href=\"tel: +56 959 820 181\">\n                <div>\n                    <div class=\"icon-phone\"></div>\n                </div>\n            </a>\n            <a href=\"mailto:gelen.montilla.r@gmail.com\">\n                <div>\n                    <div class=\"icon-gmail\"></div>\n                </div>\n            </a>\n\n            <a target=\"_blank\" href=\"https://www.linkedin.com/in/gelenmontilla/\">\n                <div>\n                    <div class=\"icon-linkedin\"></div>\n                </div>\n            </a>\n        </div>\n    </div>\n</section>\n<!-- <footer id=\"footer\" class=\"\">\n    <p class=\"text-center mt-3\">Desarrollado por Gelen Montilla.</p>\n</footer> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-overview\">\n    <div class=\"text-center\" data-aos=\"fade-up\" data-aos-delay=\"10\" data-aos-anchor-placement=\"top-bottom\" data-aos-duration=\"500\">\n        <img src=\"../../../assets/img/logo-gm.png\" class=\"img-fluid animated zoomIn\" alt=\"Logo-gelen-montilla\" routerLink=\"/projects\" routerLinkActive=\"active\" />\n        <div class=\"justify-content-center mt-5\">\n            <h5 class=\"animated pulse delay-1s\">\"Si no te esfuerzas hasta el máximo, <br><i>¿cómo sabrás donde está tu límite?\".</i></h5>\n            <div class=\"down\">\n                <a routerLink=\"/projects\" routerLinkActive=\"active\"> <i class=\"fas fa-angle-right animated delay-1s\"></i></a>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark shadow\">\n    <div data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n        <img src=\"../../../assets/img/logo-gm.png\" height=\"55\" class=\"d-inline-block align-top\" alt=\"logo-gelen-montilla\" routerLink=\"/home\" routerLinkActive=\"active\">\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n    <div class=\"collapse navbar-collapse flex-row-reverse\" id=\"navbarNavAltMarkup\">\n        <div class=\"navbar-nav\">\n            <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n                <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n                    <a class=\"nav-item nav-link\" routerLink=\"/projects\" routerLinkActive=\"active\">Proyectos<span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n                    <a class=\"nav-item nav-link\" routerLink=\"/skills\" routerLinkActive=\"active\">Habilidades</a>\n                </li>\n                <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n                    <a class=\"nav-item nav-link\" routerLink=\"/about\" routerLinkActive=\"active\">Sobre mi</a>\n                </li>\n                <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n                    <a class=\"nav-item nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\" tabindex=\"-1\" aria-disabled=\"true\">Contacto</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/page-not-found/page-not-found.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/page-not-found/page-not-found.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-container\">\n    <app-navbar></app-navbar>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <a routerLink=\"/home\" routerLinkActive=\"active\">\n            <img class=\"img-fluid\" alt=\"Pagina-no-encontrada\" src=\"../../../assets/img/404-pagina-no-encontrada.png\" />\n        </a>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/projects/projects.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/projects/projects.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-container\">\n    <app-navbar></app-navbar>\n</div>\n\n<section class=\"container\">\n    <div class=\"\">\n        <h2 class=\"title-background-white\">Proyectos</h2>\n        <div class=\"line-one\"></div>\n    </div>\n    <div class=\" box row\">\n        <div class=\"col-m-6\">\n            <a routerLink=\"/projects\" routerLinkActive=\"active\">\n                <img class=\"m-1 img-fluid animated zoomIn\" width=\"350\" alt=\"Proyecto_1\" src=\"../../../assets/img/project_1.png\" />\n            </a>\n        </div>\n        <div class=\"col-m-6\">\n            <a routerLink=\"/projects\" routerLinkActive=\"active\">\n                <img class=\"m-1 img-fluid animated zoomIn\" width=\"350\" alt=\"Proyecto_2\" src=\"../../../assets/img/project_2.png\" />\n            </a>\n        </div>\n    </div>\n    <div class=\" box row\">\n        <div class=\"col-m-6\">\n            <a routerLink=\"/projects\" routerLinkActive=\"active\">\n                <img class=\"m-1 img-fluid animated zoomInUp\" width=\"350\" alt=\"Proyecto_3\" src=\"../../../assets/img/project_3.png\" />\n            </a>\n        </div>\n        <div class=\"col-m-6\">\n            <a routerLink=\"/projects\" routerLinkActive=\"active\">\n                <img class=\"m-1 img-fluid animated zoomInUp\" width=\"350\" alt=\"Proyecto_4\" src=\"../../../assets/img/project_4.png\" />\n            </a>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/skills/skills.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/skills/skills.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-container\">\n    <app-navbar></app-navbar>\n</div>\n<!-- <div class=\"container\">\n    <div class=\"row\">\n        <div>\n            <h1>Mis Habilidades!</h1>\n            <div class=\"row justify-content-center\">\n                <div class=\"card col-12 col-sm-6 col-md-4 col-lg-4 border-0\" *ngFor=\"let skill of skills\">\n                    <div class=\"rounded-top\" style=\"background: #f9f9f9\">\n                        <img [src]=\"skill.icon\" class=\"card-img-top img-fluid\" [alt]=\"skill.name\">\n                    </div>\n                    <div class=\"card-body mb-4 rounded-bottom\" style=\"background: #f9f9f9\">\n                        <h5 class=\"card-title\">{{skill.name}}</h5>\n                        <p class=\"card-text\">{{skill.text}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div> -->\n\n<section class=\"container\">\n\n    <h2 class=\"title-background-white\">Mis Habilidades Técnicas</h2>\n    <div class=\"line-one\"></div>\n    <div class=\"box row\">\n        <div class=\"col-3 icons bounceOutRight\"><i class=\"devicon-javascript-plain colored\"></i>\n            <p class=\"skill\">JavaScript</p>\n        </div>\n        <div class=\"col-3 icons bounceOutLeft\"><i class=\"devicon-angularjs-plain colored\"></i>\n            <p class=\"skill\">Angular</p>\n        </div>\n        <div class=\"col-3 icons bounceOutLeft\"><i class=\"devicon-typescript-plain colored\"></i>\n            <p class=\"skill\">Typescript</p>\n        </div>\n        <div class=\"col-3 icons bounceOutLeft\"><i class=\"devicon-html5-plain-wordmark colored\"></i>\n            <p class=\"skill\">HTML5</p>\n        </div>\n        <div class=\"col-3 icons bounceOutLeft\"><i class=\"devicon-css3-plain-wordmark colored\"></i>\n            <p class=\"skill\">CSS3</p>\n        </div>\n        <div class=\"col-3 icons bounceOutLeft\"><i class=\"devicon-bootstrap-plain-wordmark colored\"></i>\n            <p class=\"skill\">Boostrap</p>\n        </div>\n        <!-- <div class=\"col-3 icons bounceOutLeft\"><i class=\"devicon-bootstrap-plain-wordmark colored\"></i>\n            <p class=\"skill\">Material Design</p>\n        </div> -->\n        <div class=\"col-3 icons bounceOutRight\"><i class=\"devicon-wordpress-plain-wordmark colored\"></i>\n            <p class=\"skill\">Wordpress</p>\n        </div>\n        <div class=\"col-3 icons bounceOutLeft\"><i class=\"devicon-nodejs-plain-wordmark colored\"></i>\n            <p class=\"skill\">NodeJS</p>\n        </div>\n        <div class=\"col-3 icons bounceOutLeft\"><i class=\"devicons devicons-npm red\"></i>\n            <p class=\"skill\">NPM</p>\n        </div>\n        <div class=\"col-3 icons bounceOutRight\"><i class=\"devicon-git-plain-wordmark colored\"></i>\n            <p class=\"skill\">Git</p>\n        </div>\n        <div class=\"col-3 icons bounceOutRight\"><i class=\"devicon-github-plain-wordmark colored\"></i>\n            <p class=\"skill\">Github</p>\n        </div>\n        <div class=\"col-3 icons bounceOutRight\"><i class=\"devicon-mocha-plain colored\"></i>\n            <p class=\"skill\">Mocha</p>\n        </div>\n        <div class=\"col-3 icons bounceOutRight\"><i class=\"devicon-mongodb-plain-wordmark colored\"></i>\n            <p class=\"skill\">MongoDB</p>\n        </div>\n        <div class=\"col-3 icons bounceOutRight\"><i class=\"devicon-visualstudio-plain colored\"></i>\n            <p class=\"skill\">Visual Studio Code</p>\n        </div>\n        <!-- <div class=\"col-3 icons bounceOutRight\"><i class=\"devicon-inkscape-plain-wordmark colored\"></i>\n            <p class=\"skill\">Figma</p>\n        </div> -->\n        <div class=\"col-3 icons bounceOutLeft\"><i class=\"devicon-gimp-plain colored\"></i>\n            <p class=\"skill\">Gimp</p>\n        </div>\n        <div class=\"col-3 icons bounceOutRight\"><i class=\"devicon-inkscape-plain-wordmark colored\"></i>\n            <p class=\"skill\">Inkscape</p>\n        </div>\n\n    </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");









const appRoutes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'projects', component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'skills', component: _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: false,
                scrollPositionRestoration: 'enabled' } // <-- debugging purposes only
            )
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
            _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
            _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
            _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
            _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
            _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-git {\r\n    position: absolute;\r\n    width: 100px;\r\n    height: 100px;\r\n    background: url('github.png') no-repeat;\r\n    background-size: 100px 100px;\r\n    margin: 2em 10em;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    z-index: 3;\r\n    box-shadow: 0 0 0 10px rgba(255, 255, 255, .2), 0 0 25px 2px rgba(0, 0, 0, .4), inset 0 0 0 15px rgba(255, 255, 155, .4);\r\n    border-radius: 999px;\r\n}\r\n\r\n.icon-phone {\r\n    position: absolute;\r\n    width: 100px;\r\n    height: 100px;\r\n    background: url('phone.png') no-repeat;\r\n    background-size: 100px 100px;\r\n    margin: 2em 21em;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    z-index: 3;\r\n    box-shadow: 0 0 0 10px rgba(255, 255, 255, .2), 0 0 25px 2px rgba(0, 0, 0, .4), inset 0 0 0 15px rgba(255, 255, 155, .4);\r\n    border-radius: 999px;\r\n}\r\n\r\n.icon-linkedin {\r\n    position: absolute;\r\n    width: 100px;\r\n    height: 100px;\r\n    background: url('linkedin.png') no-repeat;\r\n    background-size: 100px 100px;\r\n    margin: 2em 53em;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    z-index: 3;\r\n    box-shadow: 0 0 0 10px rgba(255, 255, 255, .2), 0 0 25px 2px rgba(0, 0, 0, .4), inset 0 0 0 15px rgba(255, 255, 155, .4);\r\n    border-radius: 999px;\r\n}\r\n\r\n.icon-gmail {\r\n    position: absolute;\r\n    width: 100px;\r\n    height: 100px;\r\n    background: url('mail.png') no-repeat;\r\n    background-size: 100px 100px;\r\n    margin: 2em 32em;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    z-index: 3;\r\n    box-shadow: 0 0 0 10px rgba(255, 255, 255, .2), 0 0 25px 2px rgba(0, 0, 0, .4), inset 0 0 0 15px rgba(255, 255, 155, .4);\r\n    border-radius: 999px;\r\n}\r\n\r\n.pulse3 {\r\n    position: absolute;\r\n    width: 120px;\r\n    height: 120px;\r\n    margin: auto;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n    opacity: 0;\r\n    border: 3px solid rgba(255, 255, 255, .1);\r\n    -webkit-animation: pulsejg1 4s linear infinite;\r\n    animation: pulsejg1 4s linear infinite;\r\n    border-radius: 999px;\r\n    box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, .6);\r\n    box-sizing: border-box;\r\n}\r\n\r\n.pulse4 {\r\n    position: absolute;\r\n    width: 120px;\r\n    height: 120px;\r\n    margin: auto;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    z-index: 2;\r\n    opacity: 0;\r\n    border: 1px solid rgba(255, 255, 255, 0);\r\n    -webkit-animation: pulsejg2 4s linear infinite;\r\n    animation: pulsejg2 4s linear infinite;\r\n    border-radius: 999px;\r\n    box-shadow: inset 0px 0px 12px 5px rgba(255, 255, 255, .8);\r\n    box-sizing: border-box;\r\n}\r\n\r\n#footer {\r\n    font-size: 3em;\r\n    color: white;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    position: absolute;\r\n    width: 100% !important;\r\n    margin-bottom: auto;\r\n}\r\n\r\n@-webkit-keyframes pulsejg1 {\r\n    0% {\r\n        -webkit-transform: scale(.6);\r\n        opacity: 0;\r\n    }\r\n    50% {\r\n        -webkit-transform: scale(.6);\r\n        opacity: 0;\r\n    }\r\n    60% {\r\n        -webkit-transform: scale(.9);\r\n        opacity: .2;\r\n    }\r\n    70% {\r\n        -webkit-transform: scale(1.1);\r\n        opacity: .35;\r\n    }\r\n    80% {\r\n        -webkit-transform: scale(1.25);\r\n        opacity: .2;\r\n    }\r\n    100% {\r\n        -webkit-transform: scale(1.4);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@keyframes pulsejg1 {\r\n    0% {\r\n        -webkit-transform: scale(.6);\r\n                transform: scale(.6);\r\n        opacity: 0;\r\n    }\r\n    50% {\r\n        -webkit-transform: scale(.6);\r\n                transform: scale(.6);\r\n        opacity: 0;\r\n    }\r\n    60% {\r\n        -webkit-transform: scale(.9);\r\n                transform: scale(.9);\r\n        opacity: .1;\r\n    }\r\n    70% {\r\n        -webkit-transform: scale(1.1);\r\n                transform: scale(1.1);\r\n        opacity: .25;\r\n    }\r\n    80% {\r\n        -webkit-transform: scale(1.25);\r\n                transform: scale(1.25);\r\n        opacity: .1;\r\n    }\r\n    100% {\r\n        -webkit-transform: scale(1.4);\r\n                transform: scale(1.4);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes pulsejg2 {\r\n    0% {\r\n        -webkit-transform: scale(.6);\r\n        opacity: 0;\r\n    }\r\n    40% {\r\n        -webkit-transform: scale(.8);\r\n        opacity: .05;\r\n    }\r\n    50% {\r\n        -webkit-transform: scale(1);\r\n        opacity: .1;\r\n    }\r\n    60% {\r\n        -webkit-transform: scale(1.1);\r\n        opacity: .3;\r\n    }\r\n    80% {\r\n        -webkit-transform: scale(1.2);\r\n        opacity: .1;\r\n    }\r\n    100% {\r\n        -webkit-transform: scale(1.3);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@keyframes pulsejg2 {\r\n    0% {\r\n        -webkit-transform: scale(.6);\r\n                transform: scale(.6);\r\n        opacity: 0;\r\n    }\r\n    40% {\r\n        -webkit-transform: scale(.8);\r\n                transform: scale(.8);\r\n        opacity: .05;\r\n    }\r\n    50% {\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n        opacity: .1;\r\n    }\r\n    60% {\r\n        -webkit-transform: scale(1.1);\r\n                transform: scale(1.1);\r\n        opacity: .3;\r\n    }\r\n    80% {\r\n        -webkit-transform: scale(1.2);\r\n                transform: scale(1.2);\r\n        opacity: .1;\r\n    }\r\n    100% {\r\n        -webkit-transform: scale(1.3);\r\n                transform: scale(1.3);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .icon-phone {\r\n        margin: 2em 11em;\r\n    }\r\n    .icon-gmail {\r\n        margin: 2em 27em;\r\n    }\r\n    .icon-git {\r\n        margin: 2em 42em;\r\n    }\r\n    .icon-linkedin {\r\n        margin: 2em 56em;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLHVDQUErRDtJQUMvRCw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0lBR1Ysd0hBQXdIO0lBR3hILG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNDQUE4RDtJQUM5RCw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0lBR1Ysd0hBQXdIO0lBR3hILG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLHlDQUFpRTtJQUNqRSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0lBR1Ysd0hBQXdIO0lBR3hILG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLHFDQUErRDtJQUMvRCw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0lBR1Ysd0hBQXdIO0lBR3hILG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFVBQVU7SUFDVix5Q0FBeUM7SUFDekMsOENBQThDO0lBRTlDLHNDQUFzQztJQUd0QyxvQkFBb0I7SUFHcEIscURBQXFEO0lBR3JELHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFVBQVU7SUFDVix3Q0FBd0M7SUFDeEMsOENBQThDO0lBRTlDLHNDQUFzQztJQUd0QyxvQkFBb0I7SUFHcEIsMERBQTBEO0lBRzFELHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSw0QkFBNEI7UUFDNUIsVUFBVTtJQUNkO0lBQ0E7UUFDSSw0QkFBNEI7UUFDNUIsVUFBVTtJQUNkO0lBQ0E7UUFDSSw0QkFBNEI7UUFDNUIsV0FBVztJQUNmO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksOEJBQThCO1FBQzlCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksNkJBQTZCO1FBQzdCLFVBQVU7SUFDZDtBQUNKOztBQTZCQTtJQUNJO1FBQ0ksNEJBQW9CO2dCQUFwQixvQkFBb0I7UUFDcEIsVUFBVTtJQUNkO0lBQ0E7UUFDSSw0QkFBb0I7Z0JBQXBCLG9CQUFvQjtRQUNwQixVQUFVO0lBQ2Q7SUFDQTtRQUNJLDRCQUFvQjtnQkFBcEIsb0JBQW9CO1FBQ3BCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksNkJBQXFCO2dCQUFyQixxQkFBcUI7UUFDckIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksOEJBQXNCO2dCQUF0QixzQkFBc0I7UUFDdEIsV0FBVztJQUNmO0lBQ0E7UUFDSSw2QkFBcUI7Z0JBQXJCLHFCQUFxQjtRQUNyQixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksNEJBQTRCO1FBQzVCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLDJCQUEyQjtRQUMzQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLDZCQUE2QjtRQUM3QixXQUFXO0lBQ2Y7SUFDQTtRQUNJLDZCQUE2QjtRQUM3QixXQUFXO0lBQ2Y7SUFDQTtRQUNJLDZCQUE2QjtRQUM3QixVQUFVO0lBQ2Q7QUFDSjs7QUE2QkE7SUFDSTtRQUNJLDRCQUFvQjtnQkFBcEIsb0JBQW9CO1FBQ3BCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksNEJBQW9CO2dCQUFwQixvQkFBb0I7UUFDcEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksMkJBQW1CO2dCQUFuQixtQkFBbUI7UUFDbkIsV0FBVztJQUNmO0lBQ0E7UUFDSSw2QkFBcUI7Z0JBQXJCLHFCQUFxQjtRQUNyQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLDZCQUFxQjtnQkFBckIscUJBQXFCO1FBQ3JCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksNkJBQXFCO2dCQUFyQixxQkFBcUI7UUFDckIsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWdpdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaWNvbnMvZ2l0aHViLnBuZykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDBweCAxMDBweDtcclxuICAgIG1hcmdpbjogMmVtIDEwZW07XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpLCAwIDAgMjVweCAycHggcmdiYSgwLCAwLCAwLCAuNCksIGluc2V0IDAgMCAwIDE1cHggcmdiYSgyNTUsIDI1NSwgMTU1LCAuNCk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMiksIDAgMCAyNXB4IDJweCByZ2JhKDAsIDAsIDAsIC40KSwgaW5zZXQgMCAwIDAgMTVweCByZ2JhKDI1NSwgMjU1LCAxNTUsIC40KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMiksIDAgMCAyNXB4IDJweCByZ2JhKDAsIDAsIDAsIC40KSwgaW5zZXQgMCAwIDAgMTVweCByZ2JhKDI1NSwgMjU1LCAxNTUsIC40KTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbn1cclxuXHJcbi5pY29uLXBob25lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9pY29ucy9waG9uZS5wbmcpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwcHggMTAwcHg7XHJcbiAgICBtYXJnaW46IDJlbSAyMWVtO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKSwgMCAwIDI1cHggMnB4IHJnYmEoMCwgMCwgMCwgLjQpLCBpbnNldCAwIDAgMCAxNXB4IHJnYmEoMjU1LCAyNTUsIDE1NSwgLjQpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpLCAwIDAgMjVweCAycHggcmdiYSgwLCAwLCAwLCAuNCksIGluc2V0IDAgMCAwIDE1cHggcmdiYSgyNTUsIDI1NSwgMTU1LCAuNCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpLCAwIDAgMjVweCAycHggcmdiYSgwLCAwLCAwLCAuNCksIGluc2V0IDAgMCAwIDE1cHggcmdiYSgyNTUsIDI1NSwgMTU1LCAuNCk7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG59XHJcblxyXG4uaWNvbi1saW5rZWRpbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaWNvbnMvbGlua2VkaW4ucG5nKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAyZW0gNTNlbTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMiksIDAgMCAyNXB4IDJweCByZ2JhKDAsIDAsIDAsIC40KSwgaW5zZXQgMCAwIDAgMTVweCByZ2JhKDI1NSwgMjU1LCAxNTUsIC40KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKSwgMCAwIDI1cHggMnB4IHJnYmEoMCwgMCwgMCwgLjQpLCBpbnNldCAwIDAgMCAxNXB4IHJnYmEoMjU1LCAyNTUsIDE1NSwgLjQpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKSwgMCAwIDI1cHggMnB4IHJnYmEoMCwgMCwgMCwgLjQpLCBpbnNldCAwIDAgMCAxNXB4IHJnYmEoMjU1LCAyNTUsIDE1NSwgLjQpO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxufVxyXG5cclxuLmljb24tZ21haWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvaWNvbnMvbWFpbC5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDBweCAxMDBweDtcclxuICAgIG1hcmdpbjogMmVtIDMyZW07XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpLCAwIDAgMjVweCAycHggcmdiYSgwLCAwLCAwLCAuNCksIGluc2V0IDAgMCAwIDE1cHggcmdiYSgyNTUsIDI1NSwgMTU1LCAuNCk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMiksIDAgMCAyNXB4IDJweCByZ2JhKDAsIDAsIDAsIC40KSwgaW5zZXQgMCAwIDAgMTVweCByZ2JhKDI1NSwgMjU1LCAxNTUsIC40KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMiksIDAgMCAyNXB4IDJweCByZ2JhKDAsIDAsIDAsIC40KSwgaW5zZXQgMCAwIDAgMTVweCByZ2JhKDI1NSwgMjU1LCAxNTUsIC40KTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbn1cclxuXHJcbi5wdWxzZTMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcHVsc2VqZzEgNHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgLW1vei1hbmltYXRpb246IHB1bHNlamcxIDRzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogcHVsc2VqZzEgNHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAuNik7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTVweCAxMHB4IHJnYmEoMCwgMCwgMCwgLjYpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAuNik7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ucHVsc2U0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcHVsc2VqZzIgNHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgLW1vei1hbmltYXRpb246IHB1bHNlamcyIDRzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogcHVsc2VqZzIgNHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMnB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMnB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTJweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4jZm9vdGVyIHtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzZWpnMSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC42KTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjYpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOSk7XHJcbiAgICAgICAgb3BhY2l0eTogLjI7XHJcbiAgICB9XHJcbiAgICA3MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgIG9wYWNpdHk6IC4zNTtcclxuICAgIH1cclxuICAgIDgwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xyXG4gICAgICAgIG9wYWNpdHk6IC4yO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNCk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHB1bHNlamcxIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoLjYpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSguNik7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKC45KTtcclxuICAgICAgICBvcGFjaXR5OiAuMjtcclxuICAgIH1cclxuICAgIDcwJSB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgb3BhY2l0eTogLjM1O1xyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XHJcbiAgICAgICAgb3BhY2l0eTogLjI7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS40KTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNlamcxIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC42KTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC42KTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC45KTtcclxuICAgICAgICBvcGFjaXR5OiAuMTtcclxuICAgIH1cclxuICAgIDcwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgIG9wYWNpdHk6IC4yNTtcclxuICAgIH1cclxuICAgIDgwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcclxuICAgICAgICBvcGFjaXR5OiAuMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2VqZzIge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguNik7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC44KTtcclxuICAgICAgICBvcGFjaXR5OiAuMDU7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICBvcGFjaXR5OiAuMTtcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgb3BhY2l0eTogLjM7XHJcbiAgICB9XHJcbiAgICA4MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgIG9wYWNpdHk6IC4xO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHB1bHNlamcyIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoLjYpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSguOCk7XHJcbiAgICAgICAgb3BhY2l0eTogLjA1O1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgb3BhY2l0eTogLjE7XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgIG9wYWNpdHk6IC4zO1xyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICBvcGFjaXR5OiAuMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2VqZzIge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjYpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjgpO1xyXG4gICAgICAgIG9wYWNpdHk6IC4wNTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICBvcGFjaXR5OiAuMTtcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgIG9wYWNpdHk6IC4zO1xyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgb3BhY2l0eTogLjE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuaWNvbi1waG9uZSB7XHJcbiAgICAgICAgbWFyZ2luOiAyZW0gMTFlbTtcclxuICAgIH1cclxuICAgIC5pY29uLWdtYWlsIHtcclxuICAgICAgICBtYXJnaW46IDJlbSAyN2VtO1xyXG4gICAgfVxyXG4gICAgLmljb24tZ2l0IHtcclxuICAgICAgICBtYXJnaW46IDJlbSA0MmVtO1xyXG4gICAgfVxyXG4gICAgLmljb24tbGlua2VkaW4ge1xyXG4gICAgICAgIG1hcmdpbjogMmVtIDU2ZW07XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .container {\r\n    margin: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    padding: 0;\r\n    text-align: center;\r\n    background-color: #474747;\r\n} */\r\n\r\n.img {\r\n    vertical-align: middle;\r\n}\r\n\r\n.img-fluid {\r\n    max-width: 85%;\r\n}\r\n\r\n.container-overview {\r\n    background: #474747;\r\n    min-height: 100vh;\r\n    max-height: 500vh;\r\n    padding-top: 10%;\r\n}\r\n\r\n.fa-angle-right {\r\n    font-size: 30px;\r\n    margin-top: 40px;\r\n    color: rgba(255, 255, 255, .5);\r\n    -webkit-transition: 750ms ease-in;\r\n    transition: 750ms ease-in;\r\n}\r\n\r\n.fa-angle-right:hover {\r\n    color: rgba(0, 0, 0, .9);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztHQU9HOztBQUVIO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLGlDQUF5QjtJQUF6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzQ3NDc7XHJcbn0gKi9cclxuXHJcbi5pbWcge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmltZy1mbHVpZCB7XHJcbiAgICBtYXgtd2lkdGg6IDg1JTtcclxufVxyXG5cclxuLmNvbnRhaW5lci1vdmVydmlldyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDc0NzQ3O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDB2aDtcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5mYS1hbmdsZS1yaWdodCB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xyXG4gICAgdHJhbnNpdGlvbjogNzUwbXMgZWFzZS1pbjtcclxufVxyXG5cclxuLmZhLWFuZ2xlLXJpZ2h0OmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC45KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }
let HomeComponent = class HomeComponent {
    // tiles: Tile[] = [
    //   {text: 'One', cols: 3, rows: 2, color: 'lightblue'},
    //   {text: 'Two', cols: 1, rows: 4, color: 'lightgreen'},
    //   {text: 'Three', cols: 2, rows: 2, color: 'lightpink'},
    //   {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1'},
    // ];
    constructor() {
        this.title = 'FrontEnd Developer';
    }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    background-color: rgb(71, 71, 71) !important;\r\n}\r\n\r\n.nav-link:focus {\r\n    color: rgba(47, 47, 47, 5) !important;\r\n    /* font-weight: 700; */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgNzEsIDcxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2LWxpbms6Zm9jdXMge1xyXG4gICAgY29sb3I6IHJnYmEoNDcsIDQ3LCA0NywgNSkgIWltcG9ydGFudDtcclxuICAgIC8qIGZvbnQtd2VpZ2h0OiA3MDA7ICovXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    margin: 0px auto;\r\n    text-align: center;\r\n    background-color: white !important;\r\n}\r\n\r\n.content a img {\r\n    vertical-align: middle;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRlbnQgYSBpbWcge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/components/projects/projects.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/projects/projects.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 80px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectsComponent = class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/projects/projects.component.html"),
        styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/components/projects/projects.component.css")]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/components/skills/skills.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/skills/skills.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .title-background-white {\r\n    text-align: center;\r\n    padding-bottom: 5px;\r\n    padding-top: 15px;\r\n}\r\n\r\n.liner-one {\r\n    border-bottom: 2px solid rgba(47, 47, 47, 5);\r\n    width: 30%;\r\n    height: 5px;\r\n    margin: 0 auto;\r\n    display: block;\r\n    margin-bottom: 50px;\r\n} */\r\n\r\n\r\n/* .box {\r\n    max-width: 800px;\r\n    margin: 0 auto 10px auto;\r\n    padding-top: 10px;\r\n} */\r\n\r\n\r\n.icons {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.icons i,\r\n.skill {\r\n    /* color: rgba(102, 102, 102, 5); */\r\n    font-size: 60px;\r\n    padding: 30px;\r\n    margin: 0;\r\n    border: 2px rgba(0, 0, 0, 0.5) outset;\r\n    border-radius: 50%;\r\n    -webkit-border-radius: 50%;\r\n    -moz-border-radius: 50%;\r\n    -o-border-radius: 50%;\r\n    -webkit-transition: all ease 0.5s;\r\n    transition: all ease 0.5s;\r\n}\r\n\r\n\r\n.icons i:hover {\r\n    color: rgba(0, 0, 0, 0.2);\r\n    border: 1px rgba(0, 0, 0, 0.384) outset;\r\n}\r\n\r\n\r\n.skill {\r\n    margin: 10px 0px 35px 0px !important;\r\n    font-size: 15px !important;\r\n    border: none !important;\r\n    padding-bottom: 25px !important;\r\n}\r\n\r\n\r\n.red {\r\n    color: #ed1c24;\r\n}\r\n\r\n\r\n/* Estilos generales */\r\n\r\n\r\na:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n.bg-dark {\r\n    -webkit-transition: 600ms ease-in;\r\n    transition: 600ms ease-in;\r\n    background-color: transparent !important;\r\n}\r\n\r\n\r\n.bg-dark.scrolled {\r\n    background-color: rgba(0, 0, 0, 5) !important;\r\n}\r\n\r\n\r\n.header {\r\n    height: 100vh;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.content {\r\n    max-width: 40rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.header-video {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.header-video img {\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n}\r\n\r\n\r\n.header-content {\r\n    z-index: 2;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.name {\r\n    color: #EB6536;\r\n    font-weight: 700;\r\n}\r\n\r\n\r\n.profession {\r\n    font-weight: 300;\r\n}\r\n\r\n\r\n.quote {\r\n    font-size: 22px !important;\r\n    font-style: italic;\r\n    padding-bottom: 0px !important;\r\n}\r\n\r\n\r\n.author-quote {\r\n    font-size: 18px !important;\r\n    font-style: italic;\r\n}\r\n\r\n\r\n.portfolio,\r\n.image-background {\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    width: 100%;\r\n    height: auto;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.subtitle-background-white {\r\n    font-family: 'Playfair Display';\r\n    text-align: center;\r\n}\r\n\r\n\r\n.image-proyect {\r\n    width: 100%;\r\n    margin-top: 60px;\r\n}\r\n\r\n\r\n.title-proyect {\r\n    color: #2C001E;\r\n    text-align: center;\r\n    margin-top: 15px;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.description-proyect {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.btn {\r\n    margin: 20px auto;\r\n    display: block;\r\n}\r\n\r\n\r\n.about-text {\r\n    color: #fff;\r\n    max-width: 800px;\r\n    margin: 30px auto;\r\n    display: block;\r\n    font-family: 'Raleway';\r\n    text-align: center;\r\n    font-size: 20px;\r\n    padding-bottom: 100px;\r\n}\r\n\r\n\r\n.important {\r\n    font-style: italic;\r\n}\r\n\r\n\r\n.bold {\r\n    color: #EB6536;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.links {\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    padding-bottom: 100px;\r\n}\r\n\r\n\r\n.link-about {\r\n    padding: 5px 20px;\r\n    color: #212529;\r\n    border: 1px solid transparent;\r\n    -webkit-transition: all ease 0.5s;\r\n    transition: all ease 0.5s;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n.link-about:hover {\r\n    border: 1px solid #2C001E;\r\n    background-color: #2C001E;\r\n    color: #fff;\r\n    border-radius: 30px;\r\n}\r\n\r\n\r\n.about {\r\n    margin: 50px auto;\r\n}\r\n\r\n\r\n.btn-width {\r\n    max-width: 350px;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.btn-outline-secondary {\r\n    color: #2C001E !important;\r\n    border-color: #2C001E !important;\r\n}\r\n\r\n\r\n.btn-outline-secondary:hover {\r\n    color: #fff !important;\r\n    background-color: #2C001E !important;\r\n    border-color: #2C001E !important;\r\n}\r\n\r\n\r\n/* MEDIA QUERY RESPONSIVE DESIGN*/\r\n\r\n\r\n@media (min-width: 1400px) {\r\n    .portfolio,\r\n    .image-background {\r\n        height: auto;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 960px) {\r\n    .content {\r\n        padding: 0 3rem 0 3rem;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 768px) {\r\n    .navbar {\r\n        text-align: center;\r\n        background-color: #EB6536 !important;\r\n    }\r\n    .col-4 {\r\n        width: 100%;\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 100%;\r\n        max-width: 100%;\r\n    }\r\n    .col-3 {\r\n        width: 50%;\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 50%;\r\n        max-width: 50%;\r\n    }\r\n    .about-text {\r\n        text-align: justify;\r\n        padding: 0 10px;\r\n    }\r\n    .title-background-white {\r\n        margin-top: 30px;\r\n    }\r\n    .h2,\r\n    h2 {\r\n        font-size: 1.5rem !important;\r\n    }\r\n    .h3,\r\n    h3 {\r\n        font-size: 1.20rem !important;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 400px) {\r\n    .navbar-brand span {\r\n        letter-spacing: 5px;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width:320px) {\r\n    .navbar-brand span {\r\n        letter-spacing: 2px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7R0FhRzs7O0FBR0g7Ozs7R0FJRzs7O0FBRUg7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsYUFBYTtJQUNiLFNBQVM7SUFDVCxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGlDQUF5QjtJQUF6Qix5QkFBeUI7QUFDN0I7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVDQUF1QztBQUMzQzs7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QiwrQkFBK0I7QUFDbkM7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBR0Esc0JBQXNCOzs7QUFFdEI7SUFDSSxxQkFBcUI7QUFDekI7OztBQUVBO0lBQ0ksaUNBQXlCO0lBQXpCLHlCQUF5QjtJQUN6Qix3Q0FBd0M7QUFDNUM7OztBQUVBO0lBQ0ksNkNBQTZDO0FBQ2pEOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCOzs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7OztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsaUNBQXlCO0lBQXpCLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQ0FBZ0M7QUFDcEM7OztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxnQ0FBZ0M7QUFDcEM7OztBQUdBLGlDQUFpQzs7O0FBRWpDO0lBQ0k7O1FBRUksWUFBWTtJQUNoQjtBQUNKOzs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0o7OztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsb0NBQW9DO0lBQ3hDO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsbUJBQWM7Z0JBQWQsY0FBYztRQUNkLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFVBQVU7UUFDVixtQkFBYTtnQkFBYixhQUFhO1FBQ2IsY0FBYztJQUNsQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBOztRQUVJLDRCQUE0QjtJQUNoQztJQUNBOztRQUVJLDZCQUE2QjtJQUNqQztBQUNKOzs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7OztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLnRpdGxlLWJhY2tncm91bmQtd2hpdGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ubGluZXItb25lIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDQ3LCA0NywgNDcsIDUpO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn0gKi9cclxuXHJcblxyXG4vKiAuYm94IHtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufSAqL1xyXG5cclxuLmljb25zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmljb25zIGksXHJcbi5za2lsbCB7XHJcbiAgICAvKiBjb2xvcjogcmdiYSgxMDIsIDEwMiwgMTAyLCA1KTsgKi9cclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXI6IDJweCByZ2JhKDAsIDAsIDAsIDAuNSkgb3V0c2V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC1vLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNXM7XHJcbn1cclxuXHJcbi5pY29ucyBpOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXI6IDFweCByZ2JhKDAsIDAsIDAsIDAuMzg0KSBvdXRzZXQ7XHJcbn1cclxuXHJcbi5za2lsbCB7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4IDM1cHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgICBjb2xvcjogI2VkMWMyNDtcclxufVxyXG5cclxuXHJcbi8qIEVzdGlsb3MgZ2VuZXJhbGVzICovXHJcblxyXG5hOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmJnLWRhcmsge1xyXG4gICAgdHJhbnNpdGlvbjogNjAwbXMgZWFzZS1pbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1kYXJrLnNjcm9sbGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgbWF4LXdpZHRoOiA0MHJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItdmlkZW8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oZWFkZXItdmlkZW8gaW1nIHtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGVudCB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICAgIGNvbG9yOiAjRUI2NTM2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnByb2Zlc3Npb24ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLnF1b3RlIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXV0aG9yLXF1b3RlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4ucG9ydGZvbGlvLFxyXG4uaW1hZ2UtYmFja2dyb3VuZCB7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc3VidGl0bGUtYmFja2dyb3VuZC13aGl0ZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW1hZ2UtcHJveWVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi50aXRsZS1wcm95ZWN0IHtcclxuICAgIGNvbG9yOiAjMkMwMDFFO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi1wcm95ZWN0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYWJvdXQtdGV4dCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuLmltcG9ydGFudCB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5ib2xkIHtcclxuICAgIGNvbG9yOiAjRUI2NTM2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmxpbmtzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi5saW5rLWFib3V0IHtcclxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNXM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5saW5rLWFib3V0OmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyQzAwMUU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMwMDFFO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG4uYWJvdXQge1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbn1cclxuXHJcbi5idG4td2lkdGgge1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcclxuICAgIGNvbG9yOiAjMkMwMDFFICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMyQzAwMUUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJDMDAxRSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMkMwMDFFICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKiBNRURJQSBRVUVSWSBSRVNQT05TSVZFIERFU0lHTiovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAucG9ydGZvbGlvLFxyXG4gICAgLmltYWdlLWJhY2tncm91bmQge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAzcmVtIDAgM3JlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubmF2YmFyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VCNjUzNiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNvbC00IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4OiAwIDAgMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY29sLTMge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgZmxleDogMCAwIDUwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC5hYm91dC10ZXh0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIH1cclxuICAgIC50aXRsZS1iYWNrZ3JvdW5kLXdoaXRlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmgyLFxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaDMsXHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjIwcmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgLm5hdmJhci1icmFuZCBzcGFuIHtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDozMjBweCkge1xyXG4gICAgLm5hdmJhci1icmFuZCBzcGFuIHtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/skills/skills.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/myservice.service */ "./src/app/services/myservice.service.ts");



let SkillsComponent = class SkillsComponent {
    // tslint:disable-next-line: no-shadowed-variable
    constructor(MyserviceService) {
        this.MyserviceService = MyserviceService;
    }
    ngOnInit() {
        // tslint:disable-next-line: no-shadowed-variable
        this.MyserviceService.getSkills().subscribe(skills => {
            this.skills = skills;
        });
    }
};
SkillsComponent.ctorParameters = () => [
    { type: _services_myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"] }
];
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: __webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/skills/skills.component.html"),
        styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/components/skills/skills.component.css")]
    })
], SkillsComponent);



/***/ }),

/***/ "./src/app/models/myskills.ts":
/*!************************************!*\
  !*** ./src/app/models/myskills.ts ***!
  \************************************/
/*! exports provided: myskills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myskills", function() { return myskills; });
let myskills = [
    {
        name: 'HTML 5',
        text: 'Lenguaje de marcado para la elaboración de páginas web.',
        icon: '../../../assets/img/icons/skills/html5.png'
    },
    {
        name: 'CSS 3',
        text: 'Lenguaje diseñado para marcar la separación del contenido del documento y su presentación.',
        icon: '../../../assets/img/icons/skills/css3.png'
    },
    {
        name: 'JAVASCRIPT',
        text: 'Lenguaje de programación ligero e interpretado por páginas web.',
        icon: '../../../assets/img/icons/skills/javascript.png'
    },
    {
        name: 'TYPESCRIPT',
        text: 'TypeScript es un lenguaje de programación de código abierto con herramientas de programación orientada a objetos.',
        icon: '../../../assets/img/icons/skills/typescript.png'
    },
    {
        name: 'ANGULAR',
        text: 'Framework para aplicaciones web desarrollado en TypeScript, de código abierto, que se utiliza para crear y mantener aplicaciones web de una sola página. ',
        icon: '../../../assets/img/icons/skills/angular.png'
    },
    {
        name: 'BOOTSTRAP',
        text: 'Biblioteca multiplataforma, de código abierto para diseño de sitios y aplicaciones web.',
        icon: '../../../assets/img/icons/skills/bootstrap.png'
    },
    {
        name: 'GIT',
        text: 'Software de control de versiones, pensando en la eficiencia y la confiabilidad del mantenimiento de aplicaciones.',
        icon: '../../../assets/img/icons/skills/git.png'
    },
    {
        name: 'GITHUB',
        text: 'Servicio en la nube que ayuda a los desarrolladores a almacenar y administrar su código, llevando un registro y control de versiones.',
        icon: '../../../assets/img/icons/skills/github.png'
    },
    {
        name: 'NPM',
        text: 'Sistema de gestión de paquetes por defecto para Node.js, con entorno de ejecución para JavaScript.',
        icon: '../../../assets/img/icons/skills/npm.png'
    },
];


/***/ }),

/***/ "./src/app/services/myservice.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/myservice.service.ts ***!
  \***********************************************/
/*! exports provided: MyserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyserviceService", function() { return MyserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_myskills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/myskills */ "./src/app/models/myskills.ts");




// import { project } from '../models/project';
// import { projects } from '../projects-list';
let MyserviceService = class MyserviceService {
    constructor() { }
    getSkills() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_models_myskills__WEBPACK_IMPORTED_MODULE_3__["myskills"]);
    }
};
MyserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MyserviceService);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\NUCLEOS\Documents\GitHub\Portafolio-GM\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map