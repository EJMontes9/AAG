import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable({providedIn: 'root'})
export class companyInfoService{
    private readonly _http=inject(HttpClient);


    getDepartamentos(): Observable<any> {
        return this._http.get('http://localhost:8080/api/departamentos').pipe(
            tap(departamentos => {
                console.log(departamentos);
            })
        );
    }
}