import { Component, OnInit, SkipSelf } from '@angular/core';
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
  showMouseCircle = false;

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
    $("#wc-body-card").hover(function() {
    }, function() {
    }).on("mousemove", function(e) {
      var mouseCircle = document.getElementById('wc-mouse-circle');
      if (!mouseCircle) return
      const originalEvent: any = e.originalEvent
      mouseCircle.style.left = (originalEvent.clientX - 26) + 'px';
      mouseCircle.style.top = (originalEvent.clientY - 26) +'px';
    });

    $("#wc-body-card").hover(function() {
    }, function() {
    }).on("mouseleave", function(e) {
      var mouseCircle = document.getElementById('wc-mouse-circle');
      if (!mouseCircle) return
      mouseCircle.style.display = "none";
    });

    $("#wc-body-card").hover(function() {
    }, function() {
    }).on("mouseenter", function(e) {
      var mouseCircle = document.getElementById('wc-mouse-circle');
      if (!mouseCircle) return
      mouseCircle.style.display = "block";
    });

    const self = this
    if (window.innerWidth > 400) {
      self.showMouseCircle = true
    } else {
      self.showMouseCircle = false
    }
    window.addEventListener("resize", function(event){
      if (window.innerWidth > 400) {
        self.showMouseCircle = true
      } else {
        self.showMouseCircle = false
      }
    });
    
    this.reduxService.connect('reducerStyles')(this.onReduxUpdate)
    this.cards = [
    {
      name: 'Travel', description: 'photo albums',
      callToAction: function travelFunc() {}, // function calls go to routerLink '/travel'
      img: "assets/amazon-boat-great.JPG"
    }, 
    {
      name: 'Music Videos', description: 'videos',
      callToAction: function playFunkyMusic() {},
      img: "assets/new-orleans-jazz.jpg"
    },
    // Link to here from Book List 
    // {
    //   name: 'Writings', description: 'pieces written',
    //   callToAction: function loadWritingsFunc() {},
    //   // img: "assets/amazon-sunset-3.JPG" // too dark
    //   img: "assets/colombia-cow-santa-elena.jpg"
    // }, 
    {
      name: 'Apply Color', description: 'colorize this web page',
      callToAction: function colorizeFunc() {
        console.log('this will call a redux Action to update the color palette', this)
      },
      img: "assets/colombia-chiva.jpg"
    }, 
    // Moved to Videos and Music, for now
    // {
    //   name: 'Backgroud Video', description: 'see the world',
    //   callToAction: function picturizeFunc() {},
    //   img: "assets/recife-horse-cart.JPG"
    // }, 
    // already in Resume
    // {
    //   name: 'Sales & Consulting', description: "Link to page",
    //   callToAction: function whatTheFunc() {},
    //   img: "assets/belo-horizonte-people.JPG"
    // }, 
    {
      // TODO - have the page include a link to My Writings
      name: 'Books', description: 'favorites and writings',
      callToAction: function funkyBooks() {},// function calls go to routerLink '/books'
      img: "assets/harvard.jpg"
    }
    // Moved into CODE component, navbar
    // {
      // name: 'How This Works', description: 'the c0de beh!nd this site',
      // callToAction: function funkyFunc() {}, 
      // img: "assets/workspace-guitar.jpg"
    ]
    
    this.isLoading = true;
    // .pipe(finalize(() => { this.isLoading = false; }))
  }

  onReduxUpdate() {

  }

}
