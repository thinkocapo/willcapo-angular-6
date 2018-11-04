import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ReduxService } from '@app/services/redux.service'
import { MODAL_CONTACT_ME } from '@app/store/actions/actions-navigation'

@Component({
  selector: 'app-modal-contact-me',
  templateUrl: './modal-contact-me.component.html',
  styleUrls: ['./modal-contact-me.component.scss']
})
export class ModalContactMeComponent implements OnInit {
  @ViewChild('modalContactMeRef') modalContactMeRef = ElementRef
  closeResult: string;

  constructor(
    private modalService: NgbModal,
    private reduxService: ReduxService
  ) {
    this.onReduxUpdate = this.onReduxUpdate.bind(this)    
  }

  ngOnInit() {
    this.reduxService.connect('reducerStyles')(this.onReduxUpdate)

    console.log('* MODAL CONTACT ME *')

    setTimeout(() => {
      this.modalService.open(this.modalContactMeRef, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result: any) => {
        // this.closeResult = `Closed with: ${result}`;
      }, (reason: any) => {
        // console.log('reason', reason)
        this.reduxService.action(MODAL_CONTACT_ME, false)
        // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      })
    })



  }

  // getDismissReason(reason: any) {

  // }

  onReduxUpdate() {}

}
