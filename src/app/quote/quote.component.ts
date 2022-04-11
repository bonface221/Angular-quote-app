import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(
      'HF',
      'Henry Ford',
      'Do not practice untill you get it right. Practice untill you can not get it wrong .'
    ),
    new Quote('Elite', 'Antithenes', 'The best investiment You can ever make is on your own health. '),
  ];

  addQuote(chosenQuote: any) {
    this.quotes.push(chosenQuote);
  }

  upvote(i: any) {
    this.quotes[i].upvotes++;
  }
  downvote(i: any) {
    this.quotes[i].downvotes++;
  }
  delQuote(i:any) {
    this.quotes.splice(i, 1);
  }
  preNum!: number;
  lastNum!: number;
  counter!: number;

  highestUpvote() {
    this.preNum = 0;
    this.lastNum = 0;

    for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if (this.lastNum > this.preNum) {
        this.preNum = this.lastNum;
      }
    }
    return this.preNum;
  }

  constructor() {}

  ngOnInit(): void {}
}
