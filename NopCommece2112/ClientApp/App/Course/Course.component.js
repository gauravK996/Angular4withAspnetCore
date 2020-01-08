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
var CourseComponent = /** @class */ (function () {
    function CourseComponent(courseService) {
        this.courses = [{ Id: 1, CourseName: "gaurav" }, { Id: 2, CourseName: "ss" }];
        alert("ss");
        this._CourseService = courseService;
    }
    CourseComponent.prototype.CourseSubmit = function (course) {
        alert("Insert");
        var CouseReturn = this._CourseService.CourseInsert(course);
        CouseReturn.subscribe(function (s) {
            return console.log(s.json());
        });
        this.GetCourse();
    };
    CourseComponent.prototype.GetCourse = function () {
        var _this = this;
        alert("Get List");
        var CourseList = this._CourseService.CourseList();
        CourseList.subscribe(function (s) {
            // console.log(s.json())
            _this.courses = s.json();
        });
        //console.log(this.courses);
    };
    CourseComponent.prototype.ngOnInit = function () {
        this.GetCourse();
    };
    CourseComponent = __decorate([
        core_1.Component({
            selector: "Coursedir",
            templateUrl: "./Course.Component.html"
        }),
        __metadata("design:paramtypes", [Course_Service_1.CourseService])
    ], CourseComponent);
    return CourseComponent;
}());
exports.CourseComponent = CourseComponent;
//# sourceMappingURL=Course.component.js.map