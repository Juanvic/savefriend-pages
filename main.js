"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/home/home.component */ 9470);
/* harmony import */ var _components_friendCode_friend_code_create_friend_code_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/friendCode/friend-code-create/friend-code-create.component */ 9879);
/* harmony import */ var _components_friendCode_friend_code_update_friend_code_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/friendCode/friend-code-update/friend-code-update.component */ 9718);
/* harmony import */ var _views_friend_code_crud_friend_code_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/friend-code-crud/friend-code-crud.component */ 6260);
/* harmony import */ var _components_friendCode_friend_code_delete_friend_code_delete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/friendCode/friend-code-delete/friend-code-delete.component */ 3898);
/* harmony import */ var _views_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/pagenotfound/pagenotfound.component */ 3376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    },
    {
        path: 'friendCodes',
        component: _views_friend_code_crud_friend_code_crud_component__WEBPACK_IMPORTED_MODULE_3__.FriendCodeCrudComponent
    },
    {
        path: 'friendCodes/create',
        component: _components_friendCode_friend_code_create_friend_code_create_component__WEBPACK_IMPORTED_MODULE_1__.FriendCodeCreateComponent
    },
    {
        path: 'friendCodes/update/:id',
        component: _components_friendCode_friend_code_update_friend_code_update_component__WEBPACK_IMPORTED_MODULE_2__.FriendCodeUpdateComponent
    },
    {
        path: 'friendCodes/delete/:id',
        component: _components_friendCode_friend_code_delete_friend_code_delete_component__WEBPACK_IMPORTED_MODULE_4__.FriendCodeDeleteComponent
    },
    {
        path: '**',
        component: _views_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__.PagenotfoundComponent
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_template_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/template/header/header.component */ 7665);
/* harmony import */ var _components_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/template/footer/footer.component */ 6161);




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header")(1, "router-outlet")(2, "app-footer");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_template_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _components_template_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/template/header/header.component */ 7665);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _components_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/template/footer/footer.component */ 6161);
/* harmony import */ var _components_template_fab_fab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/template/fab/fab.component */ 9202);
/* harmony import */ var _components_template_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/template/nav/nav.component */ 862);
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/home/home.component */ 9470);
/* harmony import */ var _views_friend_code_crud_friend_code_crud_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/friend-code-crud/friend-code-crud.component */ 6260);
/* harmony import */ var _components_friendCode_friend_code_create_friend_code_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/friendCode/friend-code-create/friend-code-create.component */ 9879);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_friendCode_friend_code_read_friend_code_read_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/friendCode/friend-code-read/friend-code-read.component */ 7437);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _components_friendCode_friend_code_update_friend_code_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/friendCode/friend-code-update/friend-code-update.component */ 9718);
/* harmony import */ var _components_friendCode_friend_code_delete_friend_code_delete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/friendCode/friend-code-delete/friend-code-delete.component */ 3898);
/* harmony import */ var ngx_copypaste__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-copypaste */ 386);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-clipboard */ 1691);
/* harmony import */ var _views_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/pagenotfound/pagenotfound.component */ 3376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);





























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBarModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__.MatExpansionModule,
        ngx_copypaste__WEBPACK_IMPORTED_MODULE_27__.NgxCopyPasteModule,
        ngx_clipboard__WEBPACK_IMPORTED_MODULE_28__.ClipboardModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_template_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _components_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _components_template_fab_fab_component__WEBPACK_IMPORTED_MODULE_4__.FabComponent,
        _components_template_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__.NavComponent,
        _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent,
        _views_friend_code_crud_friend_code_crud_component__WEBPACK_IMPORTED_MODULE_7__.FriendCodeCrudComponent,
        _components_friendCode_friend_code_create_friend_code_create_component__WEBPACK_IMPORTED_MODULE_8__.FriendCodeCreateComponent,
        _components_friendCode_friend_code_read_friend_code_read_component__WEBPACK_IMPORTED_MODULE_9__.FriendCodeReadComponent,
        _components_friendCode_friend_code_update_friend_code_update_component__WEBPACK_IMPORTED_MODULE_10__.FriendCodeUpdateComponent,
        _components_friendCode_friend_code_delete_friend_code_delete_component__WEBPACK_IMPORTED_MODULE_11__.FriendCodeDeleteComponent,
        _views_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_12__.PagenotfoundComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBarModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__.MatExpansionModule,
        ngx_copypaste__WEBPACK_IMPORTED_MODULE_27__.NgxCopyPasteModule,
        ngx_clipboard__WEBPACK_IMPORTED_MODULE_28__.ClipboardModule] }); })();


/***/ }),

/***/ 9879:
/*!******************************************************************************************!*\
  !*** ./src/app/components/friendCode/friend-code-create/friend-code-create.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendCodeCreateComponent": () => (/* binding */ FriendCodeCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _friend_code_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../friend-code.service */ 4562);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);








class FriendCodeCreateComponent {
    constructor(friendCodeService, router) {
        this.friendCodeService = friendCodeService;
        this.router = router;
        this.friendCode = {
            plataform: '',
            name: '',
            code: ''
        };
    }
    ngOnInit() {
    }
    createFriendCode() {
        this.friendCodeService.create(this.friendCode).subscribe(() => {
            localStorage.setItem(this.friendCode.name, 'nome');
            localStorage.setItem(this.friendCode.code, 'código');
            localStorage.setItem(this.friendCode.plataform, 'plataforma');
            console.log(this.friendCode.code + this.friendCode.name + this.friendCode.plataform);
            this.friendCodeService.showMessage('Informação salva com sucesso!');
            this.router.navigate(['']);
        });
    }
    copyExport() {
        this.friendCodeLocal = localStorage.getItem(this.friendCode.name);
        alert(localStorage.getItem(this.friendCode.plataform));
    }
    cancel() {
        this.router.navigate(['']);
    }
}
FriendCodeCreateComponent.ɵfac = function FriendCodeCreateComponent_Factory(t) { return new (t || FriendCodeCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_friend_code_service__WEBPACK_IMPORTED_MODULE_0__.FriendCodeService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
FriendCodeCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FriendCodeCreateComponent, selectors: [["app-friend-code-create"]], decls: 22, vars: 3, consts: [[1, "row"], [1, "col-md-4"], [1, "col-md-9"], [1, "example-full-width"], ["matInput", "", "placeholder", "Ex: Steam, Epic", "name", "plataform", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. LittleJoao, MariaX", "name", "name", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex: 12345, 1111-2222", "name", "code", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "secondary", 3, "click"]], template: function FriendCodeCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Preencha as Informa\u00E7\u00F5es: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form")(6, "mat-form-field", 3)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Plataforma:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FriendCodeCreateComponent_Template_input_ngModelChange_9_listener($event) { return ctx.friendCode.plataform = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 3)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Nome de Usu\u00E1rio:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FriendCodeCreateComponent_Template_input_ngModelChange_13_listener($event) { return ctx.friendCode.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 3)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "C\u00F3digo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FriendCodeCreateComponent_Template_input_ngModelChange_17_listener($event) { return ctx.friendCode.code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FriendCodeCreateComponent_Template_button_click_18_listener() { return ctx.createFriendCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FriendCodeCreateComponent_Template_button_click_20_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.friendCode.plataform);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.friendCode.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.friendCode.code);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm], styles: [".example-full-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n  form[_ngcontent-%COMP%] {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  \n  button[_ngcontent-%COMP%] {\n    margin-right: 30px;\n    margin-top: 20px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZC1jb2RlLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoiZnJpZW5kLWNvZGUtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 3898:
/*!******************************************************************************************!*\
  !*** ./src/app/components/friendCode/friend-code-delete/friend-code-delete.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendCodeDeleteComponent": () => (/* binding */ FriendCodeDeleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _friend_code_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../friend-code.service */ 4562);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);








class FriendCodeDeleteComponent {
    constructor(friendCodeService, router, route) {
        this.friendCodeService = friendCodeService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.friendCodeService.readById(id).subscribe(friendCode => {
            this.friendCode = friendCode;
        });
    }
    deleteFriendCode() {
        this.friendCodeService.delete(this.friendCode.id).subscribe(() => {
            this.friendCodeService.showMessage('Informação excluida com sucesso!');
            this.router.navigate(['/']);
        });
    }
    cancel() {
        this.router.navigate(['/']);
    }
}
FriendCodeDeleteComponent.ɵfac = function FriendCodeDeleteComponent_Factory(t) { return new (t || FriendCodeDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_friend_code_service__WEBPACK_IMPORTED_MODULE_0__.FriendCodeService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
FriendCodeDeleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FriendCodeDeleteComponent, selectors: [["app-friend-code-delete"]], decls: 22, vars: 3, consts: [[1, "row"], [1, "col-md-4"], [1, "col-md-9"], [1, "example-full-width"], ["matInput", "", "placeholder", "Ex: Steam, Epic", "name", "plataform", "disabled", "", 3, "value"], ["matInput", "", "placeholder", "Ex. LittleJoao, MariaX", "name", "name", "disabled", "", 3, "value"], ["matInput", "", "placeholder", "Ex: 12345, 1111-2222", "name", "code", "disabled", "", 3, "value"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "secondary", 3, "click"]], template: function FriendCodeDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Excluir Informa\u00E7\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form")(6, "mat-form-field", 3)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Plataforma:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 3)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Nome de Usu\u00E1rio:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 3)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "C\u00F3digo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FriendCodeDeleteComponent_Template_button_click_18_listener() { return ctx.deleteFriendCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Excluir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FriendCodeDeleteComponent_Template_button_click_20_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.friendCode.plataform);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.friendCode.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.friendCode.code);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm], styles: [".example-full-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n  form[_ngcontent-%COMP%] {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  \n  button[_ngcontent-%COMP%] {\n    margin-right: 30px;\n    margin-top: 20px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZC1jb2RlLWRlbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoiZnJpZW5kLWNvZGUtZGVsZXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 7437:
/*!**************************************************************************************!*\
  !*** ./src/app/components/friendCode/friend-code-read/friend-code-read.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendCodeReadComponent": () => (/* binding */ FriendCodeReadComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _friend_code_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../friend-code.service */ 4562);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var ngx_copypaste__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-copypaste */ 386);






function FriendCodeReadComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FriendCodeReadComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r13.id);
} }
function FriendCodeReadComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Plataforma");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FriendCodeReadComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r14.plataform);
} }
function FriendCodeReadComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FriendCodeReadComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r15.name);
} }
function FriendCodeReadComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "C\u00F3digo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FriendCodeReadComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r16.code);
} }
function FriendCodeReadComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FriendCodeReadComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 14)(1, "a", 15)(2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FriendCodeReadComponent_td_18_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.copy()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 17)(5, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 19)(8, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/friendCodes/update/", row_r17.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/friendCodes/delete/", row_r17.id, "");
} }
function FriendCodeReadComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 20);
} }
function FriendCodeReadComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 21);
} }
class FriendCodeReadComponent {
    constructor(friendCodeService) {
        this.friendCodeService = friendCodeService;
        this.friendCodes = [];
        this.displayedColumns = ['id', 'plataform', 'name', 'code', 'action'];
    }
    ngOnInit() {
        this.friendCodeService.read().subscribe(friendCodes => {
            this.friendCodes = friendCodes;
            console.log(friendCodes);
        });
    }
}
FriendCodeReadComponent.ɵfac = function FriendCodeReadComponent_Factory(t) { return new (t || FriendCodeReadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_friend_code_service__WEBPACK_IMPORTED_MODULE_0__.FriendCodeService)); };
FriendCodeReadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FriendCodeReadComponent, selectors: [["app-friend-code-read"]], decls: 21, vars: 4, consts: [[1, "row"], [1, "mat-elevation-z5", "table-responsive", "col-md-12", "mx-auto", "mt-5"], ["mat-table", "", "ngxCopyPaste", "", 3, "dataSource"], ["cp", "copy"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "plataform"], ["matColumnDef", "name"], ["matColumnDef", "code"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["routerLink", "", 1, "copy"], [1, "material-icons", 3, "click"], [1, "edit", 3, "routerLink"], [1, "material-icons"], [1, "delete", 3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""]], template: function FriendCodeReadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "table", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FriendCodeReadComponent_th_5_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FriendCodeReadComponent_td_6_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, FriendCodeReadComponent_th_8_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, FriendCodeReadComponent_td_9_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, FriendCodeReadComponent_th_11_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, FriendCodeReadComponent_td_12_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FriendCodeReadComponent_th_14_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, FriendCodeReadComponent_td_15_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](16, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, FriendCodeReadComponent_th_17_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, FriendCodeReadComponent_td_18_Template, 10, 2, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, FriendCodeReadComponent_tr_19_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, FriendCodeReadComponent_tr_20_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.friendCodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow, ngx_copypaste__WEBPACK_IMPORTED_MODULE_4__.NgxCopyPasteDirective], styles: [".table-responsive[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n}\n\ntable[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n}\n\n.copy[_ngcontent-%COMP%] {\n    margin-right: 10px;\n}\n\n.copy[_ngcontent-%COMP%] > i[_ngcontent-%COMP%] {\n    color: #673ab7;\n}\n\n.edit[_ngcontent-%COMP%] {\n    margin-right: 10px;\n}\n\n.edit[_ngcontent-%COMP%] > i[_ngcontent-%COMP%] {\n    color: #673ab7;\n}\n\n.delete[_ngcontent-%COMP%] > i[_ngcontent-%COMP%] {\n    color: red;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n    overflow: auto;\n    max-height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZC1jb2RlLXJlYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckIiLCJmaWxlIjoiZnJpZW5kLWNvZGUtcmVhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jb3B5IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jb3B5Pmkge1xuICAgIGNvbG9yOiAjNjczYWI3O1xufVxuXG4uZWRpdCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZWRpdD5pIHtcbiAgICBjb2xvcjogIzY3M2FiNztcbn1cblxuLmRlbGV0ZT5pIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbn0iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('detailExpand', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ height: '0px', minHeight: '0', visibility: 'hidden' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ height: '*', visibility: 'visible' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });


/***/ }),

/***/ 9718:
/*!******************************************************************************************!*\
  !*** ./src/app/components/friendCode/friend-code-update/friend-code-update.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendCodeUpdateComponent": () => (/* binding */ FriendCodeUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _friend_code_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../friend-code.service */ 4562);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);








class FriendCodeUpdateComponent {
    constructor(friendCodeService, router, route) {
        this.friendCodeService = friendCodeService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.friendCodeService.readById(id).subscribe(friendCode => {
            this.friendCode = friendCode;
        });
    }
    updateFriendCode() {
        this.friendCodeService.update(this.friendCode).subscribe(() => {
            this.friendCodeService.showMessage('Informação atualizada com sucesso!');
            this.router.navigate(['/']);
        });
    }
    cancel() {
        this.router.navigate(['/']);
    }
}
FriendCodeUpdateComponent.ɵfac = function FriendCodeUpdateComponent_Factory(t) { return new (t || FriendCodeUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_friend_code_service__WEBPACK_IMPORTED_MODULE_0__.FriendCodeService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
FriendCodeUpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FriendCodeUpdateComponent, selectors: [["app-friend-code-update"]], decls: 22, vars: 3, consts: [[1, "row"], [1, "col-md-4"], [1, "col-md-9"], [1, "example-full-width"], ["matInput", "", "placeholder", "Ex: Steam, Epic", "name", "plataform", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. LittleJoao, MariaX", "name", "name", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex: 12345, 1111-2222", "name", "code", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "secondary", 3, "click"]], template: function FriendCodeUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Altere as Informa\u00E7\u00F5es: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form")(6, "mat-form-field", 3)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Plataforma:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FriendCodeUpdateComponent_Template_input_ngModelChange_9_listener($event) { return ctx.friendCode.plataform = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 3)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Nome de Usu\u00E1rio:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FriendCodeUpdateComponent_Template_input_ngModelChange_13_listener($event) { return ctx.friendCode.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 3)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "C\u00F3digo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FriendCodeUpdateComponent_Template_input_ngModelChange_17_listener($event) { return ctx.friendCode.code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FriendCodeUpdateComponent_Template_button_click_18_listener() { return ctx.updateFriendCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Atualizar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FriendCodeUpdateComponent_Template_button_click_20_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.friendCode.plataform);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.friendCode.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.friendCode.code);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm], styles: [".example-full-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n  form[_ngcontent-%COMP%] {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  \n  button[_ngcontent-%COMP%] {\n    margin-right: 30px;\n    margin-top: 20px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZC1jb2RlLXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoiZnJpZW5kLWNvZGUtdXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 4562:
/*!**************************************************************!*\
  !*** ./src/app/components/friendCode/friend-code.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendCodeService": () => (/* binding */ FriendCodeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);





class FriendCodeService {
    constructor(snackBar, http) {
        this.snackBar = snackBar;
        this.http = http;
        this.baseUrl = "http://localhost:3001/friendCodes";
    }
    showMessage(msg, isError = false) {
        this.snackBar.open(msg, 'X', {
            duration: 2000,
            horizontalPosition: "right",
            verticalPosition: "bottom",
            panelClass: isError ? ['msg-error'] : ['msg-success']
        });
    }
    create(friendCode) {
        return this.http.post(this.baseUrl, friendCode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((obj) => obj), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(e => this.errorHandler(e)));
    }
    read() {
        return this.http.get(this.baseUrl);
    }
    readById(id) {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((obj) => obj), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(e => this.errorHandler(e)));
    }
    update(friendCode) {
        const url = `${this.baseUrl}/${friendCode.id}`;
        return this.http.put(url, friendCode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((obj) => obj), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(e => this.errorHandler(e)));
    }
    delete(id) {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((obj) => obj), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(e => this.errorHandler(e)));
    }
    errorHandler(e) {
        console.log(e);
        this.showMessage('Erro selvagem apareceu!', true);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
    }
}
FriendCodeService.ɵfac = function FriendCodeService_Factory(t) { return new (t || FriendCodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
FriendCodeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: FriendCodeService, factory: FriendCodeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9202:
/*!**********************************************************!*\
  !*** ./src/app/components/template/fab/fab.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FabComponent": () => (/* binding */ FabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);




class FabComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigateToFriendCodeCreate() {
        this.router.navigate(['/friendCodes/create']);
    }
}
FabComponent.ɵfac = function FabComponent_Factory(t) { return new (t || FabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
FabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FabComponent, selectors: [["app-fab"]], decls: 4, vars: 0, consts: [[1, "example-button-container"], ["mat-fab", "", "color", "primary", "aria-label", "Icone de add", "routerLink", "/add", 1, "fab", 3, "click"]], template: function FabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FabComponent_Template_button_click_1_listener() { return ctx.navigateToFriendCodeCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton], styles: [".example-button-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: 120px;\n}\n\n.fab[_ngcontent-%COMP%] {\n    position: fixed;\n    padding-top: 15;\n    margin-bottom: 0;\n    z-index: 997;\n    right: 24px;\n    bottom: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6ImZhYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTIwcHg7XG59XG5cbi5mYWIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBwYWRkaW5nLXRvcDogMTU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB6LWluZGV4OiA5OTc7XG4gICAgcmlnaHQ6IDI0cHg7XG4gICAgYm90dG9tOiA0NXB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 6161:
/*!****************************************************************!*\
  !*** ./src/app/components/template/footer/footer.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Desenvolvido por Juan Victor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar], styles: [".footer[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    display: flex;\n    justify-content: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxhQUFhO0lBQ2IsMkJBQTJCO0FBQy9CIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn0iXX0= */"] });


/***/ }),

/***/ 7665:
/*!****************************************************************!*\
  !*** ./src/app/components/template/header/header.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);





class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 14, vars: 0, consts: [[1, "row"], ["color", "primary", 1, "header", "mat-elevation-z4"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], ["routerLink", "/", 1, "title-group"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with copy icon", 1, "material-icons"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "material-icons", "icon"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-toolbar", 1)(2, "button", 2)(3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " SaveFriend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5)(9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "content_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6)(12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton], styles: [".header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n}\n\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n}\n\n.header[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%] {\n    padding-left: 5px;\n}\n\n.icon[_ngcontent-%COMP%] {\n    padding-right: 10px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztFQUNoQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlciBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaGVhZGVyIC50aXRsZS1ncm91cCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5pY29uIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG5cbiAgIl19 */"] });


/***/ }),

/***/ 862:
/*!**********************************************************!*\
  !*** ./src/app/components/template/nav/nav.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class NavComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 2, vars: 0, template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "nav works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6260:
/*!**********************************************************************!*\
  !*** ./src/app/views/friend-code-crud/friend-code-crud.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendCodeCrudComponent": () => (/* binding */ FriendCodeCrudComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_friendCode_friend_code_read_friend_code_read_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/friendCode/friend-code-read/friend-code-read.component */ 7437);



class FriendCodeCrudComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
FriendCodeCrudComponent.ɵfac = function FriendCodeCrudComponent_Factory(t) { return new (t || FriendCodeCrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
FriendCodeCrudComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FriendCodeCrudComponent, selectors: [["app-friend-code-crud"]], decls: 1, vars: 0, template: function FriendCodeCrudComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-friend-code-read");
    } }, dependencies: [_components_friendCode_friend_code_read_friend_code_read_component__WEBPACK_IMPORTED_MODULE_0__.FriendCodeReadComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcmllbmQtY29kZS1jcnVkLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 9470:
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_template_fab_fab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/template/fab/fab.component */ 9202);
/* harmony import */ var _friend_code_crud_friend_code_crud_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../friend-code-crud/friend-code-crud.component */ 6260);



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-friend-code-crud")(1, "app-fab");
    } }, dependencies: [_components_template_fab_fab_component__WEBPACK_IMPORTED_MODULE_0__.FabComponent, _friend_code_crud_friend_code_crud_component__WEBPACK_IMPORTED_MODULE_1__.FriendCodeCrudComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 3376:
/*!**************************************************************!*\
  !*** ./src/app/views/pagenotfound/pagenotfound.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagenotfoundComponent": () => (/* binding */ PagenotfoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PagenotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagenotfoundComponent.ɵfac = function PagenotfoundComponent_Factory(t) { return new (t || PagenotfoundComponent)(); };
PagenotfoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagenotfoundComponent, selectors: [["app-pagenotfound"]], decls: 18, vars: 0, consts: [["http-equiv", "Content-type", "content", "text/html; charset=utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"], [1, "error", "_s"], [1, "banner"], [1, "close", "_s"], [1, "content"], [1, "redX"], [1, "text"], [1, "btn", "_s"], [1, "dash"]], template: function PagenotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html")(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0)(3, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "404 Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body")(7, "div", 2)(8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 404 - Page Not Found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " A wild 404-PAGE appeared! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8)(16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */", "@font-face {\n        font-family: FSEX300;\n        src: url(data:application/x-font-ttf;charset=utf-8;base64,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A3oDpgO2A8oD4gP+BCYEPgReBHoEkgSuBMYE4gT6BRYFKgVCBVoFegWMBaIFtAXOBeYF/gYUBjAGSAZaBnIGjgayBtAG8AAAAAEAAABEACQAAwAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAUAPYAAQAAAAAAAQAXAAAAAQAAAAAAAgAHABcAAQAAAAAAAwAuAB4AAQAAAAAABAAXAEwAAQAAAAAABQASAGMAAQAAAAAABgAVAHUAAQAAAAAACAAQAIoAAQAAAAAACQAQAJoAAQAAAAAACwAhAKoAAQAAAAAADAAhAMsAAwABBAkAAQAuAOwAAwABBAkAAgAOARoAAwABBAkAAwBcASgAAwABBAkABAAuAYQAAwABBAkABQAkAbIAAwABBAkABgAqAdYAAwABBAkACAAgAgAAAwABBAkACQAgAiAAAwABBAkACwBCAkAAAwABBAkADABCAoJGaXhlZHN5cyBFeGNlbHNpb3IgMy4wMVJlZ3VsYXJEYXJpZW5WYWxlbnRpbmU6IEZpeGVkc3lzIEV4Y2Vsc2lvciAzLjAxOiAyMDA3Rml4ZWRzeXMgRXhjZWxzaW9yIDMuMDFWZXJzaW9uIDMuMDEwIDIwMDdGaXhlZHN5c0V4Y2Vsc2lvcklJSWJEYXJpZW4gVmFsZW50aW5lRGFyaWVuIFZhbGVudGluZWh0dHA6Ly93d3cuZml4ZWRzeXNleGNlbHNpb3IuY29tL2h0dHA6Ly93d3cuZml4ZWRzeXNleGNlbHNpb3IuY29tLwBGAGkAeABlAGQAcwB5AHMAIABFAHgAYwBlAGwAcwBpAG8AcgAgADMALgAwADEAUgBlAGcAdQBsAGEAcgBEAGEAcgBpAGUAbgBWAGEAbABlAG4AdABpAG4AZQA6ACAARgBpAHgAZQBkAHMAeQBzACAARQB4AGMAZQBsAHMAaQBvAHIAIAAzAC4AMAAxADoAIAAyADAAMAA3AEYAaQB4AGUAZABzAHkAcwAgAEUAeABjAGUAbABzAGkAbwByACAAMwAuADAAMQBWAGUAcgBzAGkAbwBuACAAMwAuADAAMQAwACAAMgAwADAANwBGAGkAeABlAGQAcwB5AHMARQB4AGMAZQBsAHMAaQBvAHIASQBJAEkAYgBEAGEAcgBpAGUAbgAgAFYAYQBsAGUAbgB0AGkAbgBlAEQAYQByAGkAZQBuACAAVgBhAGwAZQBuAHQAaQBuAGUAaAB0AHQAcAA6AC8ALwB3AHcAdwAuAGYAaQB4AGUAZABzAHkAcwBlAHgAYwBlAGwAcwBpAG8AcgAuAGMAbwBtAC8AaAB0AHQAcAA6AC8ALwB3AHcAdwAuAGYAaQB4AGUAZABzAHkAcwBlAHgAYwBlAGwAcwBpAG8AcgAuAGMAbwBtAC8AAAACAAAAAAAA//EACgAAAAAAAAAAAAAAAAAAAAAAAABEAEQAAAAEAAsADAAPABEAEwAUABUAFgAXABgAGQAaABsAHAAkACUAJgAnACgAKQAqACsALAAtAC4ALwAwADEAMgAzADQANQA2ADcAOAA5ADoAOwA8AD0ARABFAEYARwBIAEkASgBLAEwATQBOAE8AUABRAFIAUwBUAFUAVgBXAFgAWQBaAFsAXABdAAA=)\n            format(\"truetype\"),\n          url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxmb250IGlkPSJmb250ZWRpdG9yIiBob3Jpei1hZHYteD0iODAiPjxmb250LWZhY2UgZm9udC1mYW1pbHk9IkZpeGVkc3lzIEV4Y2Vsc2lvciAzLjAxIiBmb250LXdlaWdodD0iNDAwIiB1bml0cy1wZXItZW09IjE2MCIgcGFub3NlLTE9IjIgMTEgNiAwIDcgNyAyIDQgMiA0IiBhc2NlbnQ9IjEzMCIgZGVzY2VudD0iLTMwIiB4LWhlaWdodD0iNCIgYmJveD0iMCAtMzAgODAgMTAwIiB1bmRlcmxpbmUtdGhpY2tuZXNzPSIxMCIgdW5kZXJsaW5lLXBvc2l0aW9uPSItMTUiIHVuaWNvZGUtcmFuZ2U9IlUrMDAyMS0wMDdhIi8+PGdseXBoIGdseXBoLW5hbWU9ImV4Y2xhbSIgdW5pY29kZT0iISIgZD0iTTYwIDUwSDUwVjMwSDMwdjIwSDIwdjMwaDEwdjEwaDIwVjgwaDEwVjUwek01MCAwSDMwdjIwaDIwVjB6Ii8+PGdseXBoIGdseXBoLW5hbWU9InBhcmVubGVmdCIgdW5pY29kZT0iKCIgZD0iTTYwLTIwSDQwdjEwSDMwdjIwSDIwdjUwaDEwdjIwaDEwdjEwaDIwVjgwSDUwVjYwSDQwVjEwaDEwdi0yMGgxMHYtMTB6Ii8+PGdseXBoIGdseXBoLW5hbWU9InBhcmVucmlnaHQiIHVuaWNvZGU9IikiIGQ9Ik02MCAxMEg1MHYtMjBINDB2LTEwSDIwdjEwaDEwdjIwaDEwdjUwSDMwdjIwSDIwdjEwaDIwVjgwaDEwVjYwaDEwVjEweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJjb21tYSIgdW5pY29kZT0iLCIgZD0iTTYwLTEwSDUwdi0xMEgzMHYxMGgxMFYwSDMwdjIwaDMwdi0zMHoiLz48Z2x5cGggZ2x5cGgtbmFtZT0icGVyaW9kIiB1bmljb2RlPSIuIiBkPSJNNjAgMEgzMHYyMGgzMFYweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJ6ZXJvIiB1bmljb2RlPSIwIiBkPSJNODAgMTBINzBWMEgzMHYxMEgyMHY3MGgxMHYxMGg0MFY4MGgxMFYxMHptLTIwIDB2NDBINTB2MjBoMTB2MTBINDBWNDBoMTBWMjBINDBWMTBoMjB6Ii8+PGdseXBoIGdseXBoLW5hbWU9Im9uZSIgdW5pY29kZT0iMSIgZD0iTTYwIDBINDB2NjBIMTB2MTBoMjB2MTBoMTB2MTBoMjBWMHoiLz48Z2x5cGggZ2x5cGgtbmFtZT0idHdvIiB1bmljb2RlPSIyIiBkPSJNNzAgMEgxMHYyMGgxMHYxMGgxMHYxMGgxMHYxMGgxMHYzMEgzMFY2MEgxMHYyMGgxMHYxMGg0MFY4MGgxMFY1MEg2MFY0MEg1MFYzMEg0MFYyMEgzMFYxMGg0MFYweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJ0aHJlZSIgdW5pY29kZT0iMyIgZD0iTTcwIDEwSDYwVjBIMjB2MTBIMTB2MjBoMjBWMTBoMjB2MzBIMzB2MTBoMjB2MzBIMzBWNjBIMTB2MjBoMTB2MTBoNDBWODBoMTBWNTBINjBWNDBoMTBWMTB6Ii8+PGdseXBoIGdseXBoLW5hbWU9ImZvdXIiIHVuaWNvZGU9IjQiIGQ9Ik04MCAyMEg3MFYwSDUwdjIwSDEwdjIwaDEwdjUwaDIwVjQwSDMwVjMwaDIwdjQwaDIwVjMwaDEwVjIweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJmaXZlIiB1bmljb2RlPSI1IiBkPSJNNzAgMjBINjBWMTBINTBWMEgxMHYxMGgzMHYxMGgxMHYyMEgxMHY1MGg2MFY4MEgzMFY1MGgzMFY0MGgxMFYyMHoiLz48Z2x5cGggZ2x5cGgtbmFtZT0ic2l4IiB1bmljb2RlPSI2IiBkPSJNNzAgMTBINjBWMEgyMHYxMEgxMHY1MGgxMHYxMGgxMHYyMGgzMFY4MEg1MFY3MEg0MFY2MGgyMFY1MGgxMFYxMHptLTIwIDB2NDBIMzBWMTBoMjB6Ii8+PGdseXBoIGdseXBoLW5hbWU9InNldmVuIiB1bmljb2RlPSI3IiBkPSJNNzAgNzBINjBWNTBINTBWMzBINDBWMEgyMHYzMGgxMHYyMGgxMHYyMGgxMHYxMEgxMHYxMGg2MFY3MHoiLz48Z2x5cGggZ2x5cGgtbmFtZT0iZWlnaHQiIHVuaWNvZGU9IjgiIGQ9Ik03MCAxMEg2MFYwSDIwdjEwSDEwdjMwaDEwdjEwSDEwdjMwaDEwdjEwaDQwVjgwaDEwVjUwSDYwVjQwaDEwVjEwek01MCA1MHYzMEgzMFY2MGgxMFY1MGgxMHptMC00MHYyMEg0MHYxMEgzMFYxMGgyMHoiLz48Z2x5cGggZ2x5cGgtbmFtZT0ibmluZSIgdW5pY29kZT0iOSIgZD0iTTcwIDMwSDYwVjIwSDUwVjBIMjB2MTBoMTB2MTBoMTB2MTBIMjB2MTBIMTB2NDBoMTB2MTBoNDBWODBoMTBWMzB6TTUwIDQwdjQwSDMwVjQwaDIweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJBIiB1bmljb2RlPSJhIiBkPSJNNzAgMEg1MHYzMEgzMFYwSDEwdjcwaDEwdjEwaDEwdjEwaDIwVjgwaDEwVjcwaDEwVjB6TTUwIDQwdjMwSDMwVjQwaDIweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJCIiB1bmljb2RlPSJiIiBkPSJNNzAgMTBINjBWMEgxMHY5MGg1MFY4MGgxMFY1MEg2MFY0MGgxMFYxMHpNNTAgNTB2MzBIMzBWNTBoMjB6bTAtNDB2MzBIMzBWMTBoMjB6Ii8+PGdseXBoIGdseXBoLW5hbWU9IkMiIHVuaWNvZGU9ImMiIGQ9Ik03MCAxMEg2MFYwSDIwdjEwSDEwdjcwaDEwdjEwaDQwVjgwaDEwVjYwSDUwdjIwSDMwVjEwaDIwdjIwaDIwVjEweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJEIiB1bmljb2RlPSJkIiBkPSJNNzAgMjBINjBWMTBINTBWMEgxMHY5MGg0MFY4MGgxMFY3MGgxMFYyMHptLTIwIDB2NTBINDB2MTBIMzBWMTBoMTB2MTBoMTB6Ii8+PGdseXBoIGdseXBoLW5hbWU9IkUiIHVuaWNvZGU9ImUiIGQ9Ik03MCAwSDEwdjkwaDYwVjgwSDMwVjUwaDMwVjQwSDMwVjEwaDQwVjB6Ii8+PGdseXBoIGdseXBoLW5hbWU9IkYiIHVuaWNvZGU9ImYiIGQ9Ik03MCA4MEgzMFY1MGgzMFY0MEgzMFYwSDEwdjkwaDYwVjgweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJHIiB1bmljb2RlPSJnIiBkPSJNNzAgMEgyMHYxMEgxMHY3MGgxMHYxMGg0MFY4MGgxMFY2MEg1MHYyMEgzMFYxMGgyMHYyMEg0MHYxMGgzMFYweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJIIiB1bmljb2RlPSJoIiBkPSJNNzAgMEg1MHY0MEgzMFYwSDEwdjkwaDIwVjUwaDIwdjQwaDIwVjB6Ii8+PGdseXBoIGdseXBoLW5hbWU9IkkiIHVuaWNvZGU9ImkiIGQ9Ik02MCAwSDIwdjEwaDEwdjcwSDIwdjEwaDQwVjgwSDUwVjEwaDEwVjB6Ii8+PGdseXBoIGdseXBoLW5hbWU9IkoiIHVuaWNvZGU9ImoiIGQ9Ik03MCAxMEg2MFYwSDIwdjEwSDEwdjIwaDIwVjEwaDIwdjgwaDIwVjEweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJLIiB1bmljb2RlPSJrIiBkPSJNNzAgMEg1MHYyMEg0MHYyMEgzMFYwSDEwdjkwaDIwVjUwaDEwdjIwaDEwdjIwaDIwVjcwSDYwVjUwSDUwVjQwaDEwVjIwaDEwVjB6Ii8+PGdseXBoIGdseXBoLW5hbWU9IkwiIHVuaWNvZGU9ImwiIGQ9Ik03MCAwSDEwdjkwaDIwVjEwaDQwVjB6Ii8+PGdseXBoIGdseXBoLW5hbWU9Ik0iIHVuaWNvZGU9Im0iIGQ9Ik04MCAwSDYwdjYwSDUwVjMwSDQwdjMwSDMwVjBIMTB2OTBoMjBWNzBoMTBWNjBoMTB2MTBoMTB2MjBoMjBWMHoiLz48Z2x5cGggZ2x5cGgtbmFtZT0iTiIgdW5pY29kZT0ibiIgZD0iTTgwIDBINjB2MzBINTB2MTBINDB2MTBIMzBWMEgxMHY5MGgyMFY3MGgxMFY2MGgxMFY1MGgxMHY0MGgyMFYweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJPIiB1bmljb2RlPSJvIiBkPSJNNzAgMTBINjBWMEgyMHYxMEgxMHY3MGgxMHYxMGg0MFY4MGgxMFYxMHptLTIwIDB2NzBIMzBWMTBoMjB6Ii8+PGdseXBoIGdseXBoLW5hbWU9IlAiIHVuaWNvZGU9InAiIGQ9Ik03MCA1MEg2MFY0MEgzMFYwSDEwdjkwaDUwVjgwaDEwVjUwem0tMjAgMHYzMEgzMFY1MGgyMHoiLz48Z2x5cGggZ2x5cGgtbmFtZT0iUSIgdW5pY29kZT0icSIgZD0iTTcwLTIwSDUwdjEwSDQwVjBIMjB2MTBIMTB2NzBoMTB2MTBoNDBWODBoMTBWMTBINjB2LTIwaDEwdi0xMHpNNTAgMTB2NzBIMzBWMTBoMjB6Ii8+PGdseXBoIGdseXBoLW5hbWU9IlIiIHVuaWNvZGU9InIiIGQ9Ik03MCAwSDUwdjMwSDQwdjEwSDMwVjBIMTB2OTBoNTBWODBoMTBWNTBINjBWMzBoMTBWMHpNNTAgNTB2MzBIMzBWNTBoMjB6Ii8+PGdseXBoIGdseXBoLW5hbWU9IlMiIHVuaWNvZGU9InMiIGQ9Ik03MCAxMEg2MFYwSDIwdjEwSDEwdjEwaDIwVjEwaDIwdjIwSDQwdjEwSDMwdjEwSDIwdjEwSDEwdjIwaDEwdjEwaDQwVjgwaDEwVjcwSDUwdjEwSDMwVjYwaDEwVjUwaDEwVjQwaDEwVjMwaDEwVjEweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJUIiB1bmljb2RlPSJ0IiBkPSJNNzAgODBINTBWMEgzMHY4MEgxMHYxMGg2MFY4MHoiLz48Z2x5cGggZ2x5cGgtbmFtZT0iVSIgdW5pY29kZT0idSIgZD0iTTcwIDEwSDYwVjBIMjB2MTBIMTB2ODBoMjBWMTBoMjB2ODBoMjBWMTB6Ii8+PGdseXBoIGdseXBoLW5hbWU9IlYiIHVuaWNvZGU9InYiIGQ9Ik03MCAyMEg2MFYxMEg1MFYwSDMwdjEwSDIwdjEwSDEwdjcwaDIwVjIwaDIwdjcwaDIwVjIweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJXIiB1bmljb2RlPSJ3IiBkPSJNODAgMzBINzBWMEg1MHYzMEg0MFYwSDIwdjMwSDEwdjYwaDIwVjMwaDEwdjMwaDEwVjMwaDEwdjYwaDIwVjMweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJYIiB1bmljb2RlPSJ4IiBkPSJNNzAgMEg1MHYzMEg0MHYxMEgzMFYwSDEwdjMwaDEwdjEwaDEwdjIwSDIwdjEwSDEwdjIwaDIwVjcwaDEwVjYwaDEwdjMwaDIwVjcwSDYwVjYwSDUwVjQwaDEwVjMwaDEwVjB6Ii8+PGdseXBoIGdseXBoLW5hbWU9IlkiIHVuaWNvZGU9InkiIGQ9Ik03MCA1MEg2MFY0MEg1MFYwSDMwdjQwSDIwdjEwSDEwdjQwaDIwVjUwaDIwdjQwaDIwVjUweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJaIiB1bmljb2RlPSJ6IiBkPSJNNzAgMEgxMHYzMGgxMHYxMGgxMHYxMGgxMHYxMGgxMHYyMEgxMHYxMGg2MFY2MEg2MFY1MEg1MFY0MEg0MFYzMEgzMFYxMGg0MFYweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJhIiB1bmljb2RlPSJhIiBkPSJNNzAgMEgyMHYxMEgxMHYyMGgxMHYxMGgzMHYyMEgyMHYxMGg0MFY2MGgxMFYwek01MCAxMHYyMEgzMFYxMGgyMHoiLz48Z2x5cGggZ2x5cGgtbmFtZT0iYiIgdW5pY29kZT0iYiIgZD0iTTcwIDEwSDYwVjBIMTB2OTBoMjBWNzBoMzBWNjBoMTBWMTB6bS0yMCAwdjUwSDMwVjEwaDIweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJjIiB1bmljb2RlPSJjIiBkPSJNNzAgMTBINjBWMEgyMHYxMEgxMHY1MGgxMHYxMGg0MFY2MGgxMFY1MEg1MHYxMEgzMFYxMGgyMHYxMGgyMFYxMHoiLz48Z2x5cGggZ2x5cGgtbmFtZT0iZCIgdW5pY29kZT0iZCIgZD0iTTcwIDBIMjB2MTBIMTB2NTBoMTB2MTBoMzB2MjBoMjBWMHpNNTAgMTB2NTBIMzBWMTBoMjB6Ii8+PGdseXBoIGdseXBoLW5hbWU9ImUiIHVuaWNvZGU9ImUiIGQ9Ik03MCAzMEgzMFYxMGgzMFYwSDIwdjEwSDEwdjUwaDEwdjEwaDQwVjYwaDEwVjMwek01MCA0MHYyMEgzMFY0MGgyMHoiLz48Z2x5cGggZ2x5cGgtbmFtZT0iZiIgdW5pY29kZT0iZiIgZD0iTTcwIDQwSDQwVjBIMjB2NDBIMTB2MTBoMTB2MzBoMTB2MTBoNDBWODBINDBWNTBoMzBWNDB6Ii8+PGdseXBoIGdseXBoLW5hbWU9ImciIHVuaWNvZGU9ImciIGQ9Ik03MC0yMEg2MHYtMTBIMTB2MTBoNDBWMEgyMHYxMEgxMHY1MGgxMHYxMGg1MHYtOTB6TTUwIDEwdjUwSDMwVjEwaDIweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJoIiB1bmljb2RlPSJoIiBkPSJNNzAgMEg1MHY2MEgzMFYwSDEwdjkwaDIwVjcwaDMwVjYwaDEwVjB6Ii8+PGdseXBoIGdseXBoLW5hbWU9ImkiIHVuaWNvZGU9ImkiIGQ9Ik01MCA4MEgzMHYyMGgyMFY4MHpNNzAgMEgxMHYxMGgyMHY1MEgxMHYxMGg0MFYxMGgyMFYweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJqIiB1bmljb2RlPSJqIiBkPSJNNjAgODBINDB2MjBoMjBWODB6bTAtMTAwSDUwdi0xMEgxMHYxMGgzMHY4MEgyMHYxMGg0MHYtOTB6Ii8+PGdseXBoIGdseXBoLW5hbWU9ImsiIHVuaWNvZGU9ImsiIGQ9Ik03MCAwSDUwdjIwSDQwdjEwSDMwVjBIMTB2OTBoMjBWNDBoMTB2MTBoMTB2MjBoMjBWNTBINjBWNDBINTBWMzBoMTBWMjBoMTBWMHoiLz48Z2x5cGggZ2x5cGgtbmFtZT0ibCIgdW5pY29kZT0ibCIgZD0iTTcwIDBIMTB2MTBoMjB2NzBIMTB2MTBoNDBWMTBoMjBWMHoiLz48Z2x5cGggZ2x5cGgtbmFtZT0ibSIgdW5pY29kZT0ibSIgZD0iTTgwIDBINjB2NjBINTBWMTBINDB2NTBIMzBWMEgxMHY3MGg2MFY2MGgxMFYweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJuIiB1bmljb2RlPSJuIiBkPSJNNzAgMEg1MHY2MEgzMFYwSDEwdjcwaDUwVjYwaDEwVjB6Ii8+PGdseXBoIGdseXBoLW5hbWU9Im8iIHVuaWNvZGU9Im8iIGQ9Ik03MCAxMEg2MFYwSDIwdjEwSDEwdjUwaDEwdjEwaDQwVjYwaDEwVjEwem0tMjAgMHY1MEgzMFYxMGgyMHoiLz48Z2x5cGggZ2x5cGgtbmFtZT0icCIgdW5pY29kZT0icCIgZD0iTTcwIDEwSDYwVjBIMzB2LTMwSDEwVjcwaDUwVjYwaDEwVjEwem0tMjAgMHY1MEgzMFYxMGgyMHoiLz48Z2x5cGggZ2x5cGgtbmFtZT0icSIgdW5pY29kZT0icSIgZD0iTTcwLTMwSDUwVjBIMjB2MTBIMTB2NTBoMTB2MTBoNTBWLTMwek01MCAxMHY1MEgzMFYxMGgyMHoiLz48Z2x5cGggZ2x5cGgtbmFtZT0iciIgdW5pY29kZT0iciIgZD0iTTcwIDUwSDQwVjQwSDMwVjBIMTB2NzBoMjBWNTBoMTB2MTBoMTB2MTBoMjBWNTB6Ii8+PGdseXBoIGdseXBoLW5hbWU9InMiIHVuaWNvZGU9InMiIGQ9Ik03MCAxMEg2MFYwSDEwdjEwaDQwdjIwSDIwdjEwSDEwdjIwaDEwdjEwaDUwVjYwSDMwVjQwaDMwVjMwaDEwVjEweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJ0IiB1bmljb2RlPSJ0IiBkPSJNNzAgMEgzMHYxMEgyMHY1MEgxMHYxMGgxMHYyMGgyMFY3MGgzMFY2MEg0MFYxMGgzMFYweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJ1IiB1bmljb2RlPSJ1IiBkPSJNNzAgMEgyMHYxMEgxMHY2MGgyMFYxMGgyMHY2MGgyMFYweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJ2IiB1bmljb2RlPSJ2IiBkPSJNNzAgMjBINjBWMTBINTBWMEgzMHYxMEgyMHYxMEgxMHY1MGgyMFYyMGgyMHY1MGgyMFYyMHoiLz48Z2x5cGggZ2x5cGgtbmFtZT0idyIgdW5pY29kZT0idyIgZD0iTTgwIDIwSDcwVjBINTB2MjBINDBWMEgyMHYyMEgxMHY1MGgyMFYyMGgxMHY0MGgxMFYyMGgxMHY1MGgyMFYyMHoiLz48Z2x5cGggZ2x5cGgtbmFtZT0ieCIgdW5pY29kZT0ieCIgZD0iTTcwIDBINTB2MjBIMzBWMEgxMHYyMGgxMHYxMGgxMHYxMEgyMHYxMEgxMHYyMGgyMFY1MGgyMHYyMGgyMFY1MEg2MFY0MEg1MFYzMGgxMFYyMGgxMFYweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJ5IiB1bmljb2RlPSJ5IiBkPSJNNzAgMTBINjB2LTIwSDUwdi0xMEg0MHYtMTBIMHYxMGgzMHYxMGgxMFYwSDIwdjEwSDEwdjYwaDIwVjEwaDIwdjYwaDIwVjEweiIvPjxnbHlwaCBnbHlwaC1uYW1lPSJ6IiB1bmljb2RlPSJ6IiBkPSJNNzAgMEgxMHYyMGgxMHYxMGgxMHYxMGgxMHYxMGgxMHYxMEgxMHYxMGg2MFY1MEg2MFY0MEg1MFYzMEg0MFYyMEgzMFYxMGg0MFYweiIvPjwvZm9udD48L2RlZnM+PC9zdmc+)\n            format(\"svg\");\n        font-style: normal;\n        font-weight: 400;\n      }\n      html[_ngcontent-%COMP%] {\n        overflow: hidden;\n        font-family: FSEX300;\n        font-style: normal;\n        font-stretch: normal;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        vertical-align: baseline;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-text-size-adjust: 100%;\n        -ms-text-size-adjust: 100%;\n        text-size-adjust: 100%;\n        background: #0e7c7c;\n        font-size: 14px;\n      }\n      body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n      }\n      .banner[_ngcontent-%COMP%], .content[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-align-items: center;\n        align-items: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      }\n      *[_ngcontent-%COMP%] {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n      }\n      ._s[_ngcontent-%COMP%] {\n        border-color: #fff #757575 #757575 #fff;\n        border-style: solid;\n        border-width: 1px;\n        box-shadow: -1px -1px 0 0 #dadada, -1px 0 0 0 #dadada,\n          0 -1px 0 0 #dadada, 1px 1px 0 0 #000, -1px 1px 0 0 #000,\n          1px -1px 0 0 #000;\n      }\n      .error[_ngcontent-%COMP%] {\n        width: 300px;\n        background: #c1c1c1;\n        padding: 1px;\n      }\n      .banner[_ngcontent-%COMP%] {\n        line-height: 20px;\n        height: 20px;\n        padding-left: 8px;\n        color: #fff;\n        background: linear-gradient(left, #04056e, #157cda);\n        background: -webkit-linear-gradient(left, #04056e, #157cda);\n        -webkit-justify-content: space-between;\n        justify-content: space-between;\n      }\n      .close[_ngcontent-%COMP%] {\n        position: relative;\n        margin: 3px;\n        background: #c1c1c1;\n        height: 14px;\n        width: 16px;\n        cursor: pointer;\n      }\n      .close[_ngcontent-%COMP%]::before, .close[_ngcontent-%COMP%]::after {\n        position: absolute;\n        top: 5px;\n        left: 1px;\n        content: \"\";\n        width: 12px;\n        height: 1px;\n        background: grey;\n      }\n      .close[_ngcontent-%COMP%]::before {\n        box-shadow: 0 1px 0 #fff;\n        transform: rotate(-45deg);\n      }\n      .close[_ngcontent-%COMP%]::after {\n        box-shadow: 1px 0 0 #fff;\n        transform: rotate(45deg);\n      }\n      .content[_ngcontent-%COMP%] {\n        font-size: 14px;\n        padding: 12px;\n        -webkit-flex-wrap: wrap;\n        flex-wrap: wrap;\n      }\n      .redX[_ngcontent-%COMP%] {\n        position: relative;\n        height: 30px;\n        width: 30px;\n        line-height: 30px;\n        border: 1px solid #000;\n        box-shadow: 2px 2px 0 0 #757575;\n        border-radius: 9rem;\n        background: #ff0004;\n      }\n      .redX[_ngcontent-%COMP%]::before, .redX[_ngcontent-%COMP%]::after {\n        position: absolute;\n        top: 13px;\n        left: 5px;\n        content: \"\";\n        width: 18px;\n        height: 2px;\n        background: #fff;\n      }\n      .redX[_ngcontent-%COMP%]::before {\n        transform: rotate(-45deg);\n      }\n      .redX[_ngcontent-%COMP%]::after {\n        transform: rotate(45deg);\n      }\n      .text[_ngcontent-%COMP%] {\n        text-align: center;\n      }\n      .text[_ngcontent-%COMP%] {\n        -webkit-flex-grow: 1;\n        flex-grow: 1;\n        padding: 0 14px;\n        width: 242px;\n      }\n      .btn[_ngcontent-%COMP%] {\n        font-size: 14px;\n        width: 75px;\n        height: 20px;\n        margin-top: 12px;\n        text-align: center;\n        padding: 1px;\n        cursor: pointer;\n      }\n      .dash[_ngcontent-%COMP%] {\n        border: 1px dotted #000;\n      }"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map