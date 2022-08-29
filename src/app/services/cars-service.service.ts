import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Car } from '../models/Car';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {
  apiUrl: string = "https://bcw-sandbox.herokuapp.com/api/"

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl + "cars").pipe(map(response => {
      return response
    }))
  }

}
