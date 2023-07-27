import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { carResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44384/api/cars/getdetails";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<carResponseModel>{
    return this.httpClient
    .get<carResponseModel>(this.apiUrl);
  }
}
