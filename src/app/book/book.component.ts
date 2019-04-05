import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() bookInfo;
  @Output() onBookSelected: EventEmitter = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  showBookDetails() {
    this.onBookSelected.emit(this.bookInfo.id)
  }

}
