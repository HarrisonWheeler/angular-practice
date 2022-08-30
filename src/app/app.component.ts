import { Component, OnInit } from '@angular/core';
import { Car } from './models/Car';
import { CarsService } from './services/cars-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'gregslist';
  cars: Car[] = []

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {

    this.carsService.getCars().subscribe(cars => {
      this.cars = cars;
    })
    console.log('get all cars', this.cars)
  }

  onCarDelete(carId: string) {
    // console.log('carId log in app ts', carId, 'carid');
    // this.cars = this.cars.filter((c: Car) => c.id !== carId)
  }
}
