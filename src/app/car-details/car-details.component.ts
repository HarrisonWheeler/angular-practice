import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../models/Car';
import { CarsService } from '../services/cars-service.service';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  car!: Car;

  constructor(private carsService: CarsService, private activatedRoute: ActivatedRoute, private router: Router, private notifications: NotificationsService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      let routeParam = paramMap.get('id')
      this.carsService.getCarById(routeParam).subscribe(car => {
        this.car = car;
      });
    })
  }

  async deleteCar(carId: any) {
    if (await this.notifications.confirm()) {
      this.carsService.deleteCar(carId).subscribe(() => {
        this.router.navigate(['cars'])
        this.notifications.toast("Car has been deleted!", "success")
      });
    }
  }
}
