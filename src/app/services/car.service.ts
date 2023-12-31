import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44384/api/";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getdetails"
    return this.httpClient
    .get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number){
    let newPath = this.apiUrl + "cars/getcarsbybrandId?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarByColor(colorId:number){
    let newPath = this.apiUrl + "cars/getcarsbycolorId?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
