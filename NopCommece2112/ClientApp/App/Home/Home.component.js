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
var Course_Service_1 = require("../Services/Course.Service");
var Student_Service_1 = require("../Services/Student.Service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(courseService, studenService) {
        this._CourseService = courseService;
        this._StudenService = studenService;
    }
    HomeComponent.prototype.OnFirstRun = function () {
        var _this = this;
        alert("Sanju");
        var CourseList = this._CourseService.CourseList();
        CourseList.subscribe(function (s) {
            _this.Courses = s.json();
        });
        var Studentlist = this._StudenService.StudentList();
        Studentlist.subscribe(function (Result) {
            _this.Students = Result.json();
        });
        //this.Students = [{ Id: "1", Name: "sanju" }, { Id: "2", Name: "Gaurav" }, { Id: "3", Name:"ssss" }]
    };
    HomeComponent.prototype.OnUserClick = function (std) {
        //this.StudentData = { Id: std.Id, Name: std.Name };
    };
    HomeComponent.prototype.Submit = function (Obj) {
        var vv = this._StudenService.StudentInsert(Obj);
        vv.subscribe(function (s) {
            console.log(s.json());
        });
        console.log(Obj);
        this.OnFirstRun();
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.OnFirstRun();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            templateUrl: "./Home.component.html",
            styleUrls: ["./Home.component.css"]
        }),
        __metadata("design:paramtypes", [Course_Service_1.CourseService, Student_Service_1.StudentServices])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=Home.component.js.map