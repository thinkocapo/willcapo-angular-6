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

    $("#wc-card-container").hover(function() {
    }, function() {
    }).on("mouseleave", function(e) {
      // console.log('MOUSE EXITING *****')
      var mouseCircle = document.getElementById('wc-mouse-circle');
      mouseCircle.style.display = "none";
    });

    $("#wc-card-container").hover(function() {
    }, function() {
    }).on("mouseenter", function(e) {
      var mouseCircle = document.getElementById('wc-mouse-circle');
      mouseCircle.style.display = "block";
    });
    
    this.reduxService.connect('reducerStyles')(this.onReduxUpdate)
    this.cards = [
    {
      name: 'Travel', description: 'photo albums',
      callToAction: function travelFunc() {},
      img: "assets/amazon-boat-great.JPG"
    }, 
    {
      name: 'Music', description: 'videos and music',
      callToAction: function playFunkyMusic() {},
      img: "assets/new-orleans-jazz.jpg"
    }, 
    {
      name: 'Writings', description: 'pieces written',
      callToAction: function loadWritingsFunc() {},
      img: "assets/amazon-sunset-3.JPG"
    }, 
    {
      name: 'Apply Color', description: 'colorize this web page',
      callToAction: function colorizeFunc() {
        console.log('this will call a redux Action to update the color palette', this)
      },
      // img: "assets/palette.png"
      img: "assets/colombia-chiva.jpg"
    }, 
    {
      name: 'Apply Picture', description: 'background photo, reset',
      callToAction: function picturizeFunc() {},
      // img: "assets/camera.jpeg"
      img: "assets/recife-horse-cart.JPG"
    }, 
    {
      name: 'Sales & Consulting', description: "Link to page",
      callToAction: function whatTheFunc() {},
      img: "assets/belo-horizonte-people.JPG"
    }, 
    {
      name: 'Book List', description: 'favorites',
      callToAction: function funkyBooks() {},
      img: "assets/harvard.jpg"
    }, 
    {
      name: 'How This Works', description: 'the code behind this site',
      callToAction: function funkyFunc() {},
      img: "assets/ukraine-office.jpg"
    }]
    
    this.isLoading = true;
    // .pipe(finalize(() => { this.isLoading = false; }))
  }

  onReduxUpdate() {

  }

}
