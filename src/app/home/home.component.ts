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

  handleClick() {
    console.log('handleClick()')
  }

  ngOnInit() {
    this.cards = [{
      name: 'Travel', description: 'photo albums and writings',
    }, {
      name: 'Music', description: 'videos and music',
    }, {
      name: 'Writings', description: 'pieces written',
    }, {
      name: 'Apply Color', description: 'colorize willcapo.com, reset',
    }, {
      name: 'Apply Picture', description: 'background photo, reset',
    }, {
      name: 'Sales & Consulting', description: "I'll help you sell",
    }, {
      name: 'Book List', description: 'the books I read',
    }, {
      name: 'Github', description: 'my software',
    }]
    
    this.isLoading = true;
    // .pipe(finalize(() => { this.isLoading = false; }))
  }

}
