import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() emitQuote = new EventEmitter();
  name!: string;
  quote!: string;
  author!: string;
  date!: number;
  theWords: any;

  submitQuote() {
    this.theWords = new Quote(
      this.name,
      this.author,
      this.quote
    );
    this.quote = '';
    this.author = '';
    this.name = '';
    this.emitQuote.emit(this.theWords);
  }

  constructor() {}

  ngOnInit() {}
}
