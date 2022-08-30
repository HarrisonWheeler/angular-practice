import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Car } from '../models/Car';
import { catchError, map, Observable } from 'rxjs';
import { handleError } from '../ErrorHandling';

@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {
  apiUrl: string = "http://localhost:3000/api/"

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl + "cars").pipe(map(response => {
      return response
    }),
      catchError(handleError)
    )
  }

  onSubmit(newCar: Car): Observable<Car> {
    return this.httpClient.post<Car>(this.apiUrl + "cars", newCar).pipe(catchError(handleError));
  }

}
