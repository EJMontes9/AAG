import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable({providedIn: 'root'})
export class companyInfoService{
    private readonly _http=inject(HttpClient);


    getDepartamentos(): Observable<any> {
        return this._http.get('http://172.16.1.67:8383/api/v1/departments/allactive').pipe(
            tap(departamentos => {
                console.log(departamentos);
            })
        );
    }
}
