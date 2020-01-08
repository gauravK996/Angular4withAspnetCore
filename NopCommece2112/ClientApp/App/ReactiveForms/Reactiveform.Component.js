"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Rx_1 = require("rxjs/Rx");
require("rxjs/Rx");
var ReactiveConmpnent = /** @class */ (function () {
    function ReactiveConmpnent() {
        //public data: Observable<Array<number>>;
        this.Numbers = [1, 12, 21, 12, 11];
        this.name = new forms_1.FormControl('');
        this.MyForm = new forms_1.FormGroup({
            FirstName: new forms_1.FormControl('gaurav', forms_1.Validators.required),
            LastName: new forms_1.FormControl('Kumaya', forms_1.Validators.required),
            Address: new forms_1.FormGroup({
                State: new forms_1.FormControl('Delhi', forms_1.Validators.required),
                City: new forms_1.FormControl('Delhi', forms_1.Validators.required)
            })
        });
    }
    ReactiveConmpnent.prototype.init = function () {
        //this.data = new Observable(observer =>
        //{
        //    setTimeout(() => {
        //        observer.next(42)
        //    }, 1000);
        //}
        //var vv = Observable.of(this.Numbers)  
        //let Sub = vv.subscribe(
        //    value => this.Numbers.push(10),
        //    error => console.log("sss"),
        //    () => console.log("21")
        //   );
    };
    Object.defineProperty(ReactiveConmpnent.prototype, "FirstName", {
        get: function () { return this.MyForm.get("FirstName"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactiveConmpnent.prototype, "LastName", {
        get: function () { return this.MyForm.get("LastName"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactiveConmpnent.prototype, "State", {
        get: function () { return this.MyForm.get("Address").get("State"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactiveConmpnent.prototype, "City", {
        get: function () { return this.MyForm.get("Address").get("City"); },
        enumerable: true,
        configurable: true
    });
    ReactiveConmpnent.prototype.OnClick = function () {
        this.name.setValue("sanju");
        this.MyForm.patchValue({ FirstName: "Sanjay" });
        //this.MyForm.setValue({ FirstName:"Sanjay"})
        //this.name.value
    };
    ReactiveConmpnent.prototype.OnSubmitClick = function () {
        console.log(this.MyForm.value);
        this.MyForm.reset();
    };
    ReactiveConmpnent.prototype.onKeyEnter = function () {
        alert("Game");
    };
    ReactiveConmpnent.prototype.ngOnInit = function () {
        var _this = this;
        var vv = Rx_1.Observable.from(this.Numbers);
        var Sub = vv.subscribe(function (value) { return _this.Numbers.push(10); }, function (error) { return console.log("sss"); }, function () { return console.log(_this.Numbers); });
    };
    ReactiveConmpnent = __decorate([
        core_1.Component({
            selector: "ReactiveForm",
            templateUrl: "./Reactiveform.Component.html"
        })
    ], ReactiveConmpnent);
    return ReactiveConmpnent;
}());
exports.ReactiveConmpnent = ReactiveConmpnent;
//# sourceMappingURL=Reactiveform.Component.js.map