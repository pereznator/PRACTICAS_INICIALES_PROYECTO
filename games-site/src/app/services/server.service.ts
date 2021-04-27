import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  request(metodo: string, url: string, cuerpo?: any, params?: any): Observable<any> {
    const requestUrl = `http://localhost:3000/${url}`;
    if (metodo === 'POST') {
      return this.http.post(requestUrl, cuerpo);
    }else if (metodo === 'GET') {
      return this.http.get(requestUrl, {});
    }
  }

}
