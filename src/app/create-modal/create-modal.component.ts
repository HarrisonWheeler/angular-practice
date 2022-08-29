import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Car } from '../models/Car';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})


export class CreateModalComponent implements OnInit {
  // carForm!: FormGroup;

  constructor(private modalService: NgbModal) {
  }

  open(createModal: any) {
    this.modalService.open(createModal)
  }

  async onSubmit(carForm: Car) {
    console.log("submit is working", carForm)
  }

  ngOnInit(): void {
    // this.carForm = new FormGroup({
    //   year: new FormControl(),
    //   make: new FormControl(),
    //   model: new FormControl(),
    //   price: new FormControl(),
    //   description: new FormControl(),
    //   color: new FormControl(),
    //   imgUrl: new FormControl()
    // });
  }

}
