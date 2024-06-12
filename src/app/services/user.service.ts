import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class UserService{
    private readonly _http=inject(HttpClient);

    getAllUser():Observable<any>{
        return this._http.get('http://localhost:8083/api/usuarios');
    }
}
