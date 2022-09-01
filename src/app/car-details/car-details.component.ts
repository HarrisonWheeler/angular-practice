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
    // Activated route gains us access to current route information - params, queries, etc.
    this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        // Go into the param map, and snag the value from the 'id' property on the route - this corresponds with the route 'cars/:id' in the app-routing.module.ts file
        let routeParam = paramMap.get('id')
        // After we get the car by id, set that obj to the car obj above
        this.carsService.getCarById(routeParam).subscribe(car => {
          this.car = car;
        });
      },
      error: (e) => {
        console.error(e.message)
        this.notifications.toast(e.message, 'error')
      }
    })
  }

  async deleteCar(carId: any) {
    if (await this.notifications.confirm()) {
      this.carsService.deleteCar(carId).subscribe({
        next: () => {
          // Inform user the car was succesfully deleted, and navigate user back to cars page
          this.notifications.toast("Car has been deleted!", "success")
          // router gains us access to navigate user, among other things
          this.router.navigate(['cars'])
        },
        error: (e) => {
          console.error(e.message)
          this.notifications.toast(e.message, 'error')
        }
      });
    }
  }
}
