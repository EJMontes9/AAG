import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.dev";
import {tap} from 'rxjs/operators';
import {SequentialCreationDto} from "../models/SequentialCreationDto";

@Injectable({providedIn: 'root'})
export class ComunicationsService {
    private readonly _http = inject(HttpClient);
    saveComunications(secuencialCreationDto: SequentialCreationDto): Observable<any> {
        return this._http.post(`${environment.ms.comunications}/api/v1/communications/save`, secuencialCreationDto);
    }
}
