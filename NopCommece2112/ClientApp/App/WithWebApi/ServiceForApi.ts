import { Injectable,Inject } from "@angular/core";
import { Http } from "@angular/http";
@Injectable()

export class ServiceForApi
{
    public _http: Http;
    public _baseUrl: string;

    constructor(http: Http, @Inject("BaseUrl")BaseUrl:string) {
        this._http = http;
        this._baseUrl = BaseUrl;
    }
    public GetData()
    {
        return this._http.get(this._baseUrl + "/home/Getmydata")
    }

    public Postdata(Obj)
    {
        return this._http.post(this._baseUrl + "/Home/postdata", Obj)
    }
}

//export function Gebase()
//{
//    return document.getElementsByTagName("base")[0].href;
//}