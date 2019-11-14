import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  data1 = 'Rohit Sharma';
  data2 = '9876543210';
  constructor() { }

  ngOnInit() {
  }

}
