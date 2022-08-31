import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Car } from '../models/Car';
import { CarsService } from '../services/cars-service.service';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})


export class CreateModalComponent implements OnInit {
  carForm!: FormGroup;

  constructor(private modalService: NgbModal, private carsService: CarsService, private formBuilder: FormBuilder, private router: Router, private notifications: NotificationsService) { }

  openModal(createModal: any) {
    this.modalService.open(createModal)
  }

  closeModal(createModal: any) {
    this.modalService.dismissAll(createModal)
  }

  onSubmit(carForm: Car, createModal: any) {
    this.carsService.onSubmit(carForm).subscribe({
      next: (c: Car) => {
        this.router.navigate(['/cars/' + c.id])
      },
      error: (e) => {
        console.error(e.message)
        this.notifications.toast(e.message, 'error')
      }
    });
    this.closeModal(createModal);
  }

  ngOnInit(): void {
    this.carForm = new FormGroup({
      year: this.formBuilder.control('', [
        Validators.required,
        this.yearValidator
      ]),
      make: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      model: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      price: this.formBuilder.control(''),
      description: this.formBuilder.control('', [
        Validators.required,
        Validators.min(1),
        Validators.max(1000)
      ]),
      imgUrl: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1000)
      ])
    });
  }

  get year() { return this.carForm.get('year'); }
  get make() { return this.carForm.get('make'); }
  get model() { return this.carForm.get('model'); }
  get price() { return this.carForm.get('price'); }
  get description() { return this.carForm.get('description'); }
  get imgUrl() { return this.carForm.get('imgUrl'); }

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

}

