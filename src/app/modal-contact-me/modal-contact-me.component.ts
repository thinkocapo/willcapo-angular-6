import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-contact-me',
  templateUrl: './modal-contact-me.component.html',
  styleUrls: ['./modal-contact-me.component.scss']
})
export class ModalContactMeComponent implements OnInit {
  @ViewChild('modalContactMeRef') modalContactMeRef = ElementRef
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {

    console.log('* MODAL CONTACT ME *')
    setTimeout(() => {
      this.modalService.open(this.modalContactMeRef, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result: any) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason: any) => {
        console.log('reason', reason)
        // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      })
    })

  }

}
