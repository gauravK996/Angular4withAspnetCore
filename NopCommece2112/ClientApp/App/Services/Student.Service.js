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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var StudentServices = /** @class */ (function () {
    function StudentServices(http, BaseUrl) {
        this._http = http;
        this._BaseUrl = BaseUrl;
    }
    StudentServices.prototype.StudentInsert = function (Std) {
        return this._http.post(this._BaseUrl + "/Home/Insert", Std);
    };
    StudentServices.prototype.StudentList = function () {
        return this._http.get(this._BaseUrl + '/Home/StudentList');
    };
    StudentServices = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject("BaseUrl")),
        __metadata("design:paramtypes", [http_1.Http, String])
    ], StudentServices);
    return StudentServices;
}());
exports.StudentServices = StudentServices;
//# sourceMappingURL=Student.Service.js.map