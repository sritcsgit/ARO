import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, throwError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class ProductMasterService {
    envurl: string = 'http://54.179.68.250:4545/';
    productMasterUrl: string = 'sub';

    constructor(private httpClient: HttpClient) { }

    getProducts(data: any) {
        const header = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.httpClient.post(this.envurl + this.productMasterUrl, JSON.stringify(data), { headers: header }).
            pipe(
                map((data: any) => {
                    return data;
                }), catchError(error => {
                    return throwError(() => new error('Something went wrong!'));
                })
            )
    }


}
