import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {
  baseUrl = environment.apiUrl;

  constructor(
   private Http: HttpClient
  ) { 
   }

   getAll(): Observable<any> {
    let url = `${this.baseUrl}ingrediente/all`;
    return this.Http.get<any>(url);
   }

   read(id :number): Observable<any> {
    let url = `${this.baseUrl}ingrediente/read?id=${id}`;
    return this.Http.get<any>(url);
   }

   update(payload : any): Observable<any> {
    let url = `${this.baseUrl}ingrediente/update`;
    return this.Http.put<any>(url, payload);
   }
   insert(payload : any): Observable<any> {
    let url = `${this.baseUrl}ingrediente/insert`;
    return this.Http.post<any>(url, payload);
   }
}
