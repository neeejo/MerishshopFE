import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProvaService {
  baseUrl =  environment.apiUrl;

  constructor(private http: HttpClient) { }

  resolveTest(): Observable<any>{
    return this.getAllProdotti();
  }
  readProdotto(id : number): Observable<any> {
    let url = `${this.baseUrl}prodotto/read?id=${id}`;
    return this.http.get<any>(url);
  }

  getAllOrdini(): Observable<any> {
    let url = `${this.baseUrl}ordine/getall`;
    return this.http.get<any>(url);
  }

  getAllProdotti(): Observable<any> {
    let url = `${this.baseUrl}prodotto/getall`
    return this.http.get<any>(url);
  }
  update(payload:any): Observable<any> {
    let url = `${this.baseUrl}ordine/update`;
    return this.http.put<any>(url,payload);
  }
  updateProdotto(payload:any):Observable<any> {
    let url = `${this.baseUrl}prodotto/update`;
    return this.http.put<any>(url,payload);
  }
  insertOrd(payload:any): Observable<any> {
    let url = `${this.baseUrl}ordine/insert`;
    return this.http.post<any>(url,payload);
  }
}
