import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { ReduxService } from '@app/services/redux.service'
import { SET_COLOR_THEME } from '@app/store/actions/actions-styles'

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
    
    const theme = { 
      footerColorText: "blue",
      footerColorBackground: "yellow",
      navbarColorText: "class-name",
      navbarColorBackground: "ClassName",
      cardColorBackground: "wc-class-name",
      cardColorText: "wc-something-cool",
      siteColorBackground: "another"
    }
    
    this.reduxService.action(SET_COLOR_THEME, theme)
  }


  onReduxUpdate(state: any) {
    console.log('onReduxUpdate: state', state)
  }

}
