import { Component, OnInit } from '@angular/core';
import { Car } from '../models/Car';
import { CarsService } from '../services/cars-service.service';
import { NotificationsService } from '../services/notifications.service';

@Component({
  // The selector is how you link this component to the HTML - look for a corresponding HTML element that matches in the cars-page.component.html
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {
  // Initializing Car Array on component instantiation
  cars: Car[] = []

  // When you want to bring in an exteral service, Angular module, etc. into another component, need to register it in the constructor
  constructor(private carsService: CarsService, private notifications: NotificationsService) { }

  // ngOnInit == Do something when compenent class is instantiated - client navigated to a specific car details page, so go get the specific cars details from the API
  ngOnInit(): void {
    // subscribe "fires off" this method call
    this.carsService.getCars().subscribe({
      next: (cars) => {
        this.cars = cars;
      },
      error: (e) => {
        console.error(e.message)
        // Using Sweet Alerts for toasts, and confirms
        this.notifications.toast(e.message, 'error')
      }
    })
  }

}
