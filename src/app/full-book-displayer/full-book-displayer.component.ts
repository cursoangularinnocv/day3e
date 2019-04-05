import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-book-displayer',
  templateUrl: './full-book-displayer.component.html',
  styleUrls: ['./full-book-displayer.component.scss']
})
export class FullBookDisplayerComponent implements OnInit {
  bookID: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.bookID = +params['bookID'];

        //here you can now query to your API via your service
        //and get the book's full details
    });
  }

}
