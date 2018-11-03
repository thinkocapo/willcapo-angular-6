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
    /* ATTEMPT 3 */
    $("#wc-card-container").hover(function() {
      console.log("HOVERING", $)



    }, function() {
      
    }).on("mousemove", function(e) {
      console.log("MOUSE MOVING", e)
      var div_moving = document.getElementById('div_moving');
      
      
      // const { offsetHeight, offsetWidth } = e.target
      // console.log("OFFSETS...", offsetHeight, offsetWidth)
      // e.originalEvent originalMousee
      // div_moving.style.left = offsetWidth + 1 +'px';
      // div_moving.style.top = offsetHeight - 1 +'px';
      
      const originalEvent: any = e.originalEvent
      console.log("ORIGINAL EVENT", e)
      console.log("ORIGINAL EVENT X", e.clientX)
      console.log("ORIGINAL EVENT Y", e.clientY)

      div_moving.style.left = originalEvent.clientX + 0 +'px';
      div_moving.style.top = originalEvent.clientY + 0 +'px';

    });
    
    /* ATTEMPT 2
    https://coursesweb.net/javascript/follow-mouse-cursor-div-inside-parent_cs
    var div_moving = document.getElementById('div_moving');
    // var parent_div = 'parent_div';
    // var parent_div = 'wc-card-container';
    var parent_div = 'wc-body-background';

    var movingDiv = {
      mouseXY: {},  // will contain the X, Y mouse coords inside its parent
    
      // Get X and Y position of the elm (from: vishalsays.wordpress.com/ )
      getXYpos: function(elm: any) {
        var x = elm.offsetLeft;        // set x to elm’s offsetLeft
        var y = elm.offsetTop;         // set y to elm’s offsetTop
    
        elm = elm.offsetParent;    // set elm to its offsetParent
    
        //use while loop to check if elm is null
        // if not then add current elm’s offsetLeft to x, offsetTop to y and set elm to its offsetParent
        while(elm != null) {
          x = parseInt(x) + parseInt(elm.offsetLeft);
          y = parseInt(y) + parseInt(elm.offsetTop);
          elm = elm.offsetParent;
        }
    
        // returns an object with "xp" (Left), "=yp" (Top) position
        return {'xp':x, 'yp':y};
      },
      // Returns object with X, Y coords inside its parent
      getCoords: function(e: any) {
        var xy_pos = this.getXYpos(e.target);

        // if IE
        if(navigator.appVersion.indexOf("MSIE") != -1) {
          var standardBody = (document.compatMode == 'CSS1Compat') ? document.documentElement : document.body;

          var x = e.clientX + standardBody.scrollLeft;
          var y = e.clientY + standardBody.scrollTop;
        }
        else {
          x = e.pageX;
          y = e.pageY;
        }

        x = x - xy_pos['xp'];
        y = y - xy_pos['yp'];

        return {'xp':x, 'yp':y};
        }
    };
    document.getElementById(parent_div).addEventListener('mousemove', function(e){
      var mouseXY = movingDiv.getCoords(e);
      div_moving.style.left = mouseXY.xp + 1 +'px';
      div_moving.style.top = mouseXY.yp - 1 +'px';
    })
    /*

    /* ATTEMPT 1
    function moveListener(event: any) {
      // console.log('clientX: ' + event.screenX); // screenX, clientX, pageX, 0.5em, 20px
      // console.log('clientY: ' + event.clientY);
      document.getElementById('red-square').style.left = event.pageX + '20px'
      // document.getElementById('red-square').style.bottom = event.pageY + '20px'
      // document.getElementById('red-square').style.right = event.pageY + '20px'
      // document.getElementById('red-square').style.color = 'yellow'
      // console.log('EVENT', event.pageX)
    }
    document.addEventListener('mousemove', moveListener);
    */



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
