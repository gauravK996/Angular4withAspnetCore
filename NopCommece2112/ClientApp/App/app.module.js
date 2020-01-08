"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var Home_component_1 = require("./Home/Home.component");
var forms_1 = require("@angular/forms");
var Course_Service_1 = require("../App/Services/Course.Service");
var Student_Service_1 = require("../App/Services/Student.Service");
var Course_component_1 = require("../App/Course/Course.component");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var RoutingUser_Component_1 = require("../App/RoutingUser/RoutingUser.Component");
var Course_pipe_1 = require("../App/FilterService/Course.pipe");
var forms_2 = require("@angular/forms");
var Reactiveform_Component_1 = require("../App/ReactiveForms/Reactiveform.Component");
var Custom_Directive_1 = require("../App/CustomDirective/Custom.Directive");
var ServiceForApi_1 = require("../App/WithWebApi/ServiceForApi");
var WithApi_component_1 = require("../App/WithWebApi/WithApi.component");
var WepApiFiter_1 = require("../App/WithWebApi/WepApiFiter");
var WepApiCustomDirective_1 = require("../App/WithWebApi/WepApiCustomDirective");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, forms_2.ReactiveFormsModule,
                router_1.RouterModule.forRoot([{ path: '', redirectTo: 'Home', pathMatch: 'full' },
                    { path: "Home", component: Home_component_1.HomeComponent },
                    { path: "Course", component: Course_component_1.CourseComponent },
                    { path: "ReactiveForms", component: Reactiveform_Component_1.ReactiveConmpnent },
                    { path: "Webapi", component: WithApi_component_1.WithApicomponent }
                ], { useHash: true })
            ],
            declarations: [app_component_1.AppComponent, Home_component_1.HomeComponent, Course_component_1.CourseComponent, RoutingUser_Component_1.RoutingUser, Course_pipe_1.CoursefilterPipe,
                Reactiveform_Component_1.ReactiveConmpnent, Custom_Directive_1.CustomDiective, WithApi_component_1.WithApicomponent, WepApiFiter_1.ApiFilter, WepApiCustomDirective_1.Wepapicustomdirective],
            bootstrap: [app_component_1.AppComponent],
            providers: [{ provide: "BaseUrl", useFactory: GetbaseUrl }, Student_Service_1.StudentServices, Course_Service_1.CourseService, ServiceForApi_1.ServiceForApi]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
function GetbaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
exports.GetbaseUrl = GetbaseUrl;
//# sourceMappingURL=app.module.js.map