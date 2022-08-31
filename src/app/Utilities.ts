import { NgbModal } from "@ng-bootstrap/ng-bootstrap"

export class Utilities {

  constructor(private modalService: NgbModal) { }

  // Close / Open any modal
  openModal(modal: any) {
    this.modalService.open(modal)
  }

  closeModal(modal: any) {
    this.modalService.dismissAll(modal)
  }

}
