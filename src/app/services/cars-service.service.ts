import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Car } from '../models/Car';
import { catchError, map, Observable } from 'rxjs';
import { handleError } from '../ErrorHandling';

// Injectable in root means this service is available globally to the application
@Injectable({
  providedIn: 'root'
})
export class CarsService {
  // Using a local node server that I built
  apiUrl: string = "http://localhost:3000/api/"
  cars: Car[] = []

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<Car[]> {
    // Map over http response, and return each data obj in the array, and return it to the component
    return this.httpClient.get<Car[]>(this.apiUrl + "cars").pipe(map(response => {
      return response;
    }),
      catchError(handleError)
    )
  }

  // Using Angular's HTTP client to make API requests - function is meant to return an Observable so the subscribe in the corresponding component can pick up on it when things change
  onSubmit(newCar: Car): Observable<Car> {
    // Pipe transforms data - in this case, when an error occurs
    return this.httpClient.post<Car>(this.apiUrl + "cars", newCar).pipe(catchError(handleError));
  }

  getCarById(carId: any): Observable<Car> {
    return this.httpClient.get<Car>(this.apiUrl + "cars/" + carId).pipe(catchError(handleError));
  }

  deleteCar(carId: any): Observable<Car> {
    return this.httpClient.delete<Car>(this.apiUrl + "car/" + carId).pipe(catchError(handleError));
  }
}
