import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-tab',
  templateUrl: './product-tab.component.html',
  styleUrls: ['./product-tab.component.css']
})
export class ProductTabComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private rowData;
  constructor(public http: HttpClient) {
  this.columnDefs = [
    {headerName: 'UserId', field: 'userId', width: 100, suppressSizeToFit: true},
    {headerName: 'ID', field: 'id', width: 90, minWidth: 50, maxWidth: 90},
    {headerName: 'Title', field: 'title', width: 50},
    {headerName: 'Body', field: 'body', width: 100}
];
}
sizeToFit() {
  this.gridApi.sizeColumnsToFit();
}
autoSizeAll() {
  // tslint:disable-next-line: prefer-const
  let allColumnIds = [];
  // tslint:disable-next-line: only-arrow-functions
  this.gridColumnApi.getAllColumns().forEach(function(column: { colId: any; }) {
    allColumnIds.push(column.colId);
  });
  this.gridColumnApi.autoSizeColumns(allColumnIds);
}
  onPageSizeChanged(newPageSize) {
    const e = (document.getElementById('page-size')) as HTMLSelectElement;
    const dropval = e.value;
    this.gridApi.paginationSetPageSize(Number(dropval));
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.http.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      .subscribe(data => {
        this.rowData = data;
        this.sizeToFit();
      });
  }
  ngOnInit() {
  }
}
