import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testing-routing';
  books = [
    {
      id: 1,
      name: 'book 1',
      price: 120
    },
    {
      id: 2,
      name: 'book 2',
      price: 24
    },
    {
      id: 3,
      name: 'book 3',
      price: 12
    }
  ]

  constructor(private router: Router) { }

  selectBook(id) {
    this.router.navigate(['books', id]);
  }
}
