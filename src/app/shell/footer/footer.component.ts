import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { ReduxService } from '@app/services/redux.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private reduxService: ReduxService
  ) {
    this.onReduxUpdate = this.onReduxUpdate.bind(this)
  }

  ngOnInit() {
    this.reduxService.connect('reducerStyles')(this.onReduxUpdate)
  }

  contactMe() {
    console.log('contactMe...')
  }

  onReduxUpdate(state: any) {
    console.log('onReduxUpdate: state', state)

  }

}
