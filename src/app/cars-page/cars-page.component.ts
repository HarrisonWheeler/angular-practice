import { Component, OnInit } from '@angular/core';
import { Car } from '../models/Car';
import { CarsService } from '../services/cars-service.service';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {
  cars: Car[] = []

  constructor(private carsService: CarsService, private notifications: NotificationsService) { }

  ngOnInit(): void {
    this.carsService.getCars().subscribe({
      next: (cars) => {
        this.cars = cars;
      },
      error: (e) => {
        console.error(e.message)
        this.notifications.toast(e.message, 'error')
      }
    })
  }

}
