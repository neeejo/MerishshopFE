import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RicettaService {
baseUrl = environment.apiUrl;
  constructor(private Http:HttpClient) { }

  getAll():Observable<any> {
    let url = `${this.baseUrl}ricetta/all`;
    return this.Http.get<any>(url);
  }
  read(id: number):Observable<any> {
    let url = `${this.baseUrl}ricetta/read?id=${id}`;
    return this.Http.get<any>(url);
  }
  insert(payload:any):Observable<any> {
    let url = `${this.baseUrl}ricetta/insert`;
    return this.Http.post<any>(url,payload);
  }
  update(payload:any):Observable<any> {
    let url = `${this.baseUrl}ricetta/update`;
    return this.Http.put<any>(url,payload);
  }
  
}
