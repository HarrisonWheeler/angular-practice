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

  constructor() { }

  ngOnInit(): void { }

}
