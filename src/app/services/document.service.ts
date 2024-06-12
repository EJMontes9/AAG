import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class DocumentService {
    private readonly _http=inject(HttpClient);

    getAllDocumentCom():Observable<any>{
        return this._http.get('http://localhost:8080/documentcom');
    }

    saveDocumentCom(documentData: { department: string, type: string, sequential_date: string }): Observable<any> {
        return this._http.post('http://localhost:8081/documentcom', documentData);
    }

}