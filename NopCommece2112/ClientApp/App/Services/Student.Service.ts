import { Injectable,Inject } from "@angular/core";
import { Http } from "@angular/http";
import { Student } from "../ModelClass/Student";
@Injectable()

export class StudentServices
{
    _http: Http;
    _BaseUrl: string
    constructor(http: Http, @Inject("BaseUrl")BaseUrl: string)
    {
        this._http = http;
        this._BaseUrl = BaseUrl;
    }

    public StudentInsert(Std: Student)
    {
        return this._http.post(this._BaseUrl + "/Home/Insert", Std);
    }

    public StudentList()
    {
        return this._http.get(this._BaseUrl +'/Home/StudentList')
    }
   
} 