import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductMasterService } from './product-master.service';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.css']
})
export class ProductMasterComponent implements OnInit {
  productdata!: MatTableDataSource<any>;
  displayColumns: string[] = ['ID', 'productName', 'SKUCode', 'Category', 'subCategory', 'packSize', 'Actions'];
  pageSize = 10;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(
    private router: Router,
    private productMasterService: ProductMasterService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  backButtonClick() {
    this.router.navigate(['masters']);
  }

  getProducts() {
    let data = {
      "Product": "SAMSUNG 40-inch Class LED Smart FHD TV 1080P",
      "Category": "Home Entertainment",
      "Sub_Cat": "TV",
      "Store_ID": "1"
    }
    this.productMasterService.getProducts(data).subscribe((response) => {
      console.log(response);
      this.productdata = new MatTableDataSource(response);
      this.productdata.paginator = this.paginator;
      this.productdata.sort = this.sort;
    })
  }
  onProdEdit(element: any) { }

  onProdSave(element: any) { }
}

