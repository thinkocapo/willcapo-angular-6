import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

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

  constructor(private quoteService: QuoteService) { }

  handleClick(callToAction: Function) {
    console.log('handleClick()', callToAction)
  }

  /**
   * Definition. In marketing, a call to action (CTA) is an instruction to the audience designed to provoke an immediate response, usually using an imperative verb such as "call now", "find out more" or "visit a store today".
   */
  ngOnInit() {
    this.cards = [
    {
      name: 'Travel', description: 'photo albums and writings',
      callToAction: function travelFuncYo () {}
    }, 
    {
      name: 'Music', description: 'videos and music',
      callToAction: function musicFunkyFunction () {}
    }, 
    {
      name: 'Writings', description: 'pieces written',
      callToAction: function() {}
    }, 
    {
      name: 'Apply Color', description: 'colorize willcapo.com, reset',
      callToAction: function() {}
    }, 
    {
      name: 'Apply Picture', description: 'background photo, reset',
      callToAction: function() {}
    }, 
    {
      name: 'Sales & Consulting', description: "I'll help you sell",
      callToAction: function() {}
    }, 
    {
      name: 'Book List', description: 'the books I read',
      callToAction: function() {}
    }, 
    {
      name: 'How This Works', description: 'the code behind this site',
      callToAction: function() {}
    }]
    
    this.isLoading = true;
    // .pipe(finalize(() => { this.isLoading = false; }))
  }

}
