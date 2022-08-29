import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import axios from 'axios';
import { Car } from '../models/Car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  // NOTE inputs is the way to set up/accept props from a parent
  // inputs: ['car']
})


export class CarComponent implements OnInit {
  @Input() car: any
  @Output() delete = new EventEmitter()

  // TODO - this is bad. Have multiple axios instances - refactor
  api = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/",
    timeout: 8000
  })

  constructor() {
  }
  // @Input() car: { id: string, year: number, make: string, model: string, description: string, color: string, imgUrl: string, price: number, createdAt: string, updatedAt: string }

  // constructor(car: Car) {
  //   this.car = car
  // }

  // TODO refactor this to a service when we learn best practice for services in Angular

  async deleteCar(carId: string) {
    try {
      const res = await this.api.delete(`api/cars/${carId}`)
      console.log('deleted');

      this.delete.emit(carId)
      // Do delete logic later
    } catch (error) {
      console.log(error)
    }
  }

  ngOnInit(): void {
  }

}
