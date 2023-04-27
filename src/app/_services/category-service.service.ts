import { Injectable } from '@angular/core';
import { HttpClientServiceService } from '../_core/http-client-service.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private controllerName = "Category";

  constructor(private _httpClient: HttpClientServiceService) { }
  getAllCategories() {
    return this._httpClient.get(this.controllerName);
  }
}
