import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";




@Injectable()
export class AppService {

    constructor(private _http: HttpClient) { }

    getList = () => {
        return this._http.get('https://reqres.in/api/users?page=2');
    }
}