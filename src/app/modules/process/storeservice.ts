import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stores } from './stores';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  //envurl: string = 'http://localhost:5001/';
  envurl: string = 'http://54.179.68.250:5001/';
  searchStoreUrl: string = 'search-store';
  updateQtyUrl: string = 'update-quantity';

  constructor(private httpClient: HttpClient) { }

  searchStores(data: any) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post(this.envurl + this.searchStoreUrl, JSON.stringify(data), { headers: header }).
      pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          console.log(error)
          return throwError('Something went wrong!');
        })
      )
  }

  saveProduct(prod: any) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.put(this.envurl + this.updateQtyUrl, JSON.stringify(prod), { headers: header }).
      pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          console.log(error)
          return throwError('Something went wrong!');
        })
      )
  }
}