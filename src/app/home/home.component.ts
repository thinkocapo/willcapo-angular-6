import { Component, OnInit } from '@angular/core';
import { ReduxService } from '@app/services/redux.service'
// import { QuoteService } from './quote.service';

import { Card } from '../models/card.model'
import * as $ from 'jquery';


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

    // https://stackoverflow.com/questions/21269206/jquery-receives-empty-values-from-div-tags-on-mouseover-event
    $("#wc-card-container").hover(function() {
    }, function() {
    }).on("mousemove", function(e) {
      var mouseCircle = document.getElementById('wc-mouse-circle');
      const originalEvent: any = e.originalEvent
      mouseCircle.style.left = (originalEvent.clientX - 26) + 'px';
      mouseCircle.style.top = (originalEvent.clientY - 26) +'px';

    });
    
    this.reduxService.connect('reducerStyles')(this.onReduxUpdate)
    this.cards = [
    {
      name: 'Travel', description: 'photo albums',
      callToAction: function travelFunc() {},
      img: "assets/travel-truro.jpg"
    }, 
    {
      name: 'Music', description: 'videos and music',
      callToAction: function playFunkyMusic() {},
      // img: "assets/music.png"
      img: "assets/t2.jpg"
    }, 
    {
      name: 'Writings', description: 'pieces written',
      callToAction: function loadWritingsFunc() {},
      // img: "assets/writing.png"
      img: "assets/t3.jpg"
    }, 
    {
      name: 'Apply Color', description: 'colorize willcapo.com, reset',
      callToAction: function colorizeFunc() {
        console.log('this will call a redux Action to update the color palette', this)
      },
      // img: "assets/palette.png"
      img: "assets/ta.jpg"
    }, 
    {
      name: 'Apply Picture', description: 'background photo, reset',
      callToAction: function picturizeFunc() {},
      // img: "assets/camera.jpeg"
      img: "assets/tb.jpg"
    }, 
    {
      name: 'Sales & Consulting', description: "Link to page",
      callToAction: function whatTheFunc() {},
      // img: "assets/sales.png"
      img: "assets/tc.jpg"
    }, 
    {
      name: 'Book List', description: 'favorites',
      callToAction: function funkyBooks() {},
      img: "assets/td.jpg"
    }, 
    {
      name: 'How This Works', description: 'the code behind this site',
      callToAction: function funkyFunc() {},
      img: "assets/te.jpg"
    }]
    
    this.isLoading = true;
    // .pipe(finalize(() => { this.isLoading = false; }))
  }

  onReduxUpdate() {

  }

}
