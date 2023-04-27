import { Injectable } from '@angular/core';
import { HttpClientServiceService } from '../_core/http-client-service.service';
import { pathToFileURL } from 'url';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private controllerName = "TodoItem";
  constructor(private _httpClient: HttpClientServiceService) { }

  getAllToDos() {
    return this._httpClient.get(this.controllerName);
  }

  getByFilter(parameters: any) {
    return this._httpClient.get(`${this.controllerName}/filter`, parameters)
  }
}
