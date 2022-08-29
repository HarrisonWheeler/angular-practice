import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Car } from '../models/Car';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})


export class CreateModalComponent implements OnInit {
  carForm!: FormGroup;

  constructor(private modalService: NgbModal) { }

  open(createModal: any) {
    this.modalService.open(createModal)
  }

  async onSubmit(carForm: Car) {
    console.log("submit is working", carForm)
  }

  ngOnInit(): void {
    this.carForm = new FormGroup({
      year: new FormControl('', [
        Validators.required,
        this.yearValidator
      ]),
      make: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      model: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      price: new FormControl(''),
      description: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(1000)
      ]),
      imgUrl: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1000)
      ])
    });
  }

  yearValidator(control: FormControl) {
    const date = new Date();
    if (control.value && control.value.length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = date.getFullYear()
    if (year >= minYear && year <= maxYear) {
      return null
    } else {
      return { year: true }
    }
  }

  get year() { return this.carForm.get('year'); }
  get make() { return this.carForm.get('make'); }
  get model() { return this.carForm.get('model'); }
  get price() { return this.carForm.get('price'); }
  get description() { return this.carForm.get('description'); }
  get imgUrl() { return this.carForm.get('imgUrl'); }

}

