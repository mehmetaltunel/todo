import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientServiceService {

  private url = environment.url;

  constructor(private http: HttpClient) {

  }

  get<T>(path: string, parameters: any = null) {
    return this.http.get<T>(`${this.url}/${path}`, { params: parameters });
  }

  post(path: string, model: any) {
    return this.http.post<boolean>(`${this.url}/${path}`, model);
  }

  put(path: string, model: any) {
    return this.http.put(`${this.url}/${path}`, model);
  }

  delete(path: string) {
    return this.http.delete(`${this.url}/${path}` + path);
  }
}
