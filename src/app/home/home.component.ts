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
    //https://developer.mozilla.org/en-US/docs/Web/Events/mousemove

    function moveListener(event: any) {
      // console.log('clientX: ' + event.screenX); // screenX, clientX, pageX, 0.5em, 20px
      // console.log('clientY: ' + event.clientY);

      document.getElementById('red-square').style.left = event.pageX + '20px'
      // document.getElementById('red-square').style.bottom = event.pageY + '20px'

      // document.getElementById('red-square').style.right = event.pageY + '20px'
      // document.getElementById('red-square').style.color = 'yellow'

      // console.log('EVENT', event.pageX)
      // console.log('EVENT', event.pageY)

    }
    document.addEventListener('mousemove', moveListener);
  
    this.reduxService.connect('reducerStyles')(this.onReduxUpdate)

    this.cards = [
    {
      name: 'Travel', description: 'photo albums',
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
      name: 'Sales & Consulting', description: "Link to page",
      callToAction: function whatTheFunc() {},
      img: "assets/sales.png"
    }, 
    {
      name: 'Book List', description: 'favorites',
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
