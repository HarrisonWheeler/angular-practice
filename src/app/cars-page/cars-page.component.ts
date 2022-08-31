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

}
