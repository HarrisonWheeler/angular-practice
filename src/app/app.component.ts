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

  constructor() { }

  ngOnInit(): void { }

}
