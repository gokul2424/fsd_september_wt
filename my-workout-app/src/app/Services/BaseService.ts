
import { Injectable } from '@angular/core';
import { catchError, map, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, of, BehaviorSubject } from "rxjs";

@Injectable()
export class BaseService {
    protected baseUrl = "http://localhost:4200/";
    
    constructor(private http: HttpClient) {}
    
    public getViaParam(relativeUrl: any, queryParams): Observable<any> {
     
        if(queryParams){
			let params = new HttpParams()
			for(let param in queryParams){
				params=params.set(param,queryParams[param]);
            }
            return this.http.get(this.baseUrl + relativeUrl, {params})
			.pipe(
				tap(),
				catchError(this.handleError('get', []))
				);

    }

}

private handleError<T>(operation = "operation", result?: T) {
    var errData = (error: any): Observable<T> => {
        return of(result as T);
    }
    return errData;
}
}