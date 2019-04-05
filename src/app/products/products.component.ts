import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  contactId: number
  optionalParameter: string
  optionalParameter2: string

  test = [
    { name: 'a', id: 69 },
    { name: 'b', id: 691 },
    { name: 'c', id: 6922 }
  ]

  chosen = undefined

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.contactId = +params['productID'];
      });

    this.route.queryParams
      .subscribe((queryParams) => {
        this.optionalParameter = queryParams['foo'];
      });

    this.route.queryParams
      .subscribe((queryParams) => {
        this.optionalParameter2 = queryParams['foo2'];

        this.chosen = this.test.filter(x => x.id === +this.optionalParameter2)[0]
      });
  }

}
