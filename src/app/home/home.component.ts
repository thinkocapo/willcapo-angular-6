import { Component, OnInit } from '@angular/core';
import { ReduxService } from '@app/services/redux.service'
// import { QuoteService } from './quote.service';

import { Card } from '../models/card.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards: Card[]

  quote: string;
  isLoading: boolean;

  constructor(
    private reduxService: ReduxService
  ) {
    this.onReduxUpdate = this.onReduxUpdate.bind(this)
  }

  handleClick(callToAction: Function) {
    console.log('handleClick()', callToAction)
    callToAction = callToAction.bind(this)
    callToAction()
  }

  /**
   * Definition. In marketing, a call to action (CTA) is an instruction to the audience designed to provoke an immediate response, usually using an imperative verb such as "call now", "find out more" or "visit a store today".
   */
  ngOnInit() {
    this.reduxService.connect('reducerStyles')(this.onReduxUpdate)

    this.cards = [
    {
      name: 'Travel', description: 'photo albums and writings',
      callToAction: function travelFunc() {},
      img: "assets/travel.jpeg"
    }, 
    {
      name: 'Music', description: 'videos and music',
      callToAction: function playFunkyMusic() {},
      img: "assets/music.png"
    }, 
    {
      name: 'Writings', description: 'pieces written',
      callToAction: function loadWritingsFunc() {},
      img: "assets/writing.png"
    }, 
    {
      name: 'Apply Color', description: 'colorize willcapo.com, reset',
      callToAction: function colorizeFunc() {
        console.log('this will call a redux Action to update the color palette', this)
      },
      img: "assets/palette.png"
    }, 
    {
      name: 'Apply Picture', description: 'background photo, reset',
      callToAction: function picturizeFunc() {},
      img: "assets/camera.jpeg"
    }, 
    {
      name: 'Sales & Consulting', description: "I'll help you sell",
      callToAction: function whatTheFunc() {},
      img: "assets/sales.png"
    }, 
    {
      name: 'Book List', description: 'the books I read',
      callToAction: function funkyBooks() {},
      img: "assets/books.jpeg"
    }, 
    {
      name: 'How This Works', description: 'the code behind this site',
      callToAction: function funkyFunc() {},
      img: "assets/how-this-works.png"
    }]
    
    this.isLoading = true;
    // .pipe(finalize(() => { this.isLoading = false; }))
  }

  onReduxUpdate() {

  }

}
