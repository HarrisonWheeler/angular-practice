import { Component, OnInit } from '@angular/core';
import { Car } from '../models/Car';
import { CarsService } from '../services/cars-service.service';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {
  cars: Car[] = []

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.getCars().subscribe(cars => {
      this.cars = cars;
    })
  }

  onCarDelete(carId: string) {
    // console.log('carId log in app ts', carId, 'carid');
    // this.cars = this.cars.filter((c: Car) => c.id !== carId)
  }

}
