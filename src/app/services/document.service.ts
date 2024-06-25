import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.dev";

@Injectable({providedIn: 'root'})
export class DocumentService {
    private readonly _http=inject(HttpClient);

    getAllDocumentCom():Observable<any>{
        return this._http.get('http://172.16.1.67:8080/documentcom');
    }

    saveDocumentCom(documentData: { department: string, type: string, sequential_date: string }): Observable<any> {
        return this._http.post(`${environment.ms.document}/api/v1/documentcom/createnumeration`, documentData);
    }

}