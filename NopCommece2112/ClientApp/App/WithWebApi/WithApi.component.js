"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ServiceForApi_1 = require("../WithWebApi/ServiceForApi");
var forms_1 = require("@angular/forms");
var WithApicomponent = /** @class */ (function () {
    function WithApicomponent(StudentService) {
        //Form Group
        this.StudentModelForm = new forms_1.FormGroup({
            Id: new forms_1.FormControl("jjj", forms_1.Validators.required),
            Name: new forms_1.FormControl("llll", forms_1.Validators.required)
        });
        this._StudentService = StudentService;
    }
    Object.defineProperty(WithApicomponent.prototype, "Id", {
        // Getter Propertity
        get: function () { return this.StudentModelForm.get("Id"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WithApicomponent.prototype, "Name", {
        get: function () { return this.StudentModelForm.get("Name"); },
        enumerable: true,
        configurable: true
    });
    WithApicomponent.prototype.OnList = function () {
        var _this = this;
        var v = this._StudentService.GetData();
        v.subscribe(function (s) {
            return _this._StudentList = s.json();
        });
        //return "ddd";
    };
    WithApicomponent.prototype.OnPost = function () {
        var Val = this._StudentService.Postdata(this.StudentModelForm.value);
        Val.subscribe(function (s) {
            return console.log(s.json());
        });
    };
    WithApicomponent.prototype.ngOnInit = function () {
        this.OnList();
    };
    WithApicomponent = __decorate([
        core_1.Component({
            selector: "ApiUse",
            templateUrl: './WithApi.component.html'
        }),
        __metadata("design:paramtypes", [ServiceForApi_1.ServiceForApi])
    ], WithApicomponent);
    return WithApicomponent;
}());
exports.WithApicomponent = WithApicomponent;
//# sourceMappingURL=WithApi.component.js.map