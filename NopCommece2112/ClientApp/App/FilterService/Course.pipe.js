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
var CoursefilterPipe = /** @class */ (function () {
    function CoursefilterPipe(courseService) {
        this._courseService = courseService;
        //this._CourseList = this._courseService.CourseList();
        this.CourseLis();
    }
    CoursefilterPipe.prototype.transform = function (Id) {
        var Ob = this._CourseList.find(function (element) {
            return element.Id == Id;
        });
        return Ob.CourseName;
    };
    CoursefilterPipe.prototype.CourseLis = function () {
        var _this = this;
        var list = this._courseService.CourseList();
        list.subscribe(function (s) {
            _this._CourseList = s.json();
        });
    };
    CoursefilterPipe = __decorate([
        core_1.Pipe({
            name: "Coursefilter"
        }),
        __metadata("design:paramtypes", [Course_Service_1.CourseService])
    ], CoursefilterPipe);
    return CoursefilterPipe;
}());
exports.CoursefilterPipe = CoursefilterPipe;
//# sourceMappingURL=Course.pipe.js.map