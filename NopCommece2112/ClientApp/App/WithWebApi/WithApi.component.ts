import { Component } from "@angular/core";
import { ServiceForApi } from "../WithWebApi/ServiceForApi";
import { FormGroup, FormControl, Validator, Validators } from "@angular/forms";
import { get } from "http";
@Component({
    selector: "ApiUse",
    templateUrl: './WithApi.component.html'
})

export class WithApicomponent
{
    public _StudentList: any
    public _StudentService: ServiceForApi
    //Form Group
    StudentModelForm = new FormGroup(
        {
            Id: new FormControl("jjj", Validators.required),
            Name: new FormControl("llll", Validators.required)

        })
    // Getter Propertity
    get Id(): any{ return this.StudentModelForm.get("Id") }
    get Name(): any { return this.StudentModelForm.get("Name") }
    constructor(StudentService: ServiceForApi) {
        this._StudentService = StudentService;
    }
    public OnList(): any
    {
        var v = this._StudentService.GetData();
        v.subscribe(s =>
            this._StudentList = s.json())
        //return "ddd";
    }

    public OnPost()
    {
        var Val = this._StudentService.Postdata(this.StudentModelForm.value);
        Val.subscribe(s =>
            console.log(s.json())
            )
    }
    ngOnInit() 
    {
        this.OnList();
    }
}