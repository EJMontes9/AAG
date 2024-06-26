import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.dev";
import {tap} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class UserService {
    private readonly _http = inject(HttpClient);


    getAllUser(): Observable<any> {
        return this._http.get(`${environment.ms.user}/api/v1/employees`)
            .pipe(
                tap(data => console.log(data))
            );
    }
}
