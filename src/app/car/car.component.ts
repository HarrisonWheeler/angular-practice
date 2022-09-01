import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../services/cars-service.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  // NOTE inputs is the way to set up/accept props from a parent
  // inputs: ['car']
})


export class CarComponent implements OnInit {
  // This Input is telling the component that there will be an incoming PROP from the parent component
  @Input() car: any
  @Output() delete = new EventEmitter()

  constructor(private carsService: CarsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void { }

}
