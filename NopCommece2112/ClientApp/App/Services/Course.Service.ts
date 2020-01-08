import { Injectable,Inject } from "@angular/core";
import { Course } from "../ModelClass/Class";
import { Http } from "@angular/http";

@Injectable()

export class CourseService
{
    _baseUrl: string;
    _http: Http;
    constructor(@Inject("BaseUrl") baseUrl: string, http: Http)
    {
        this._baseUrl = baseUrl;
        this._http = http;
    }

    public CourseInsert(course: Course)
    {
        return this._http.post(this._baseUrl + '/Home/CourseAdd', course);
    }
    public CourseList()
    {
        return this._http.get(this._baseUrl + '/Home/CourseList')
    }

}

