import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StoreService } from '../process/storeservice';
import { PhysicalStockCheckService } from '../transaction/physical-stock-check/physical-stock-check.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayColumnsReorder: string[] = ['Product_Name', 'SKU_ID', 'Re_Order_Quantity', 'OverriderReorderQty', 'Expected_delivary_Date', 'Supplier_Name', 'Actions']
  displayColumnsPhysicalStock: string[] = ['SKU_ID', 'Product', 'Store_name', 'Beginning_Stock', 'Physical_Stock_Check', 'Actions'];
  processData!: MatTableDataSource<any>;
  physicalStockCheckData!: MatTableDataSource<any>;
  overrideReorder!: any;
  pipe = new DatePipe('en-US');
  pageSizeReorder = 5;
  pageSizePhysicalStock = 5;
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();

  constructor(public storeService: StoreService,
    public physicalStockCheckService: PhysicalStockCheckService) { }

  ngOnInit(): void {
    this.getReorderData();
    this.getPhysicalStock();
  }

  getReorderData() {
    const myFormattedDate = this.pipe.transform(new Date(), 'yyyy-MM-dd');
    let obj = {
      "Date": "2022-01-01",
      "Category_Name": "",
      "Subcategory_Name": "",
      "Product_Name": "",
      "SKU_ID": ""
    }
    this.storeService.searchStores(obj).subscribe((response) => {
      for (let prod of response[0]) {
        prod.editMode = false;
      }
      this.processData = new MatTableDataSource(response[0]);
      console.log(this.processData);
      this.processData.paginator =this.paginator.toArray()[0];
      this.processData.sort = this.sort.toArray()[0];
    })
  }

  onProdEdit(product: any) {
    product.editMode = true;
    this.overrideReorder = product.Re_Order_Quantity;
  }

  onProdSave(product: any) {
    const myFormattedDate = this.pipe.transform(product.Time_key, 'yyyy-MM-dd');
    let prodObj = {
      "Time_Key": myFormattedDate,
      "Store_Key": product.Store_Key,
      "Product_Key": product.Product_Key,
      "Override_RQ": this.overrideReorder
    }
    console.log(prodObj)
    this.storeService.saveProduct(prodObj).subscribe((response) => {
      console.log(response);
      this.getReorderData();
      this.overrideReorder = undefined;
      product.editMode = false;
    });
  }

  getPhysicalStock() {
    let inputObj = {
      "Product": "SAMSUNG 40-inch Class LED Smart FHD TV 1080P",
      "Store_ID": "4"
    }
    this.physicalStockCheckService.getPhysicalStockCheck(inputObj).subscribe((response) => {
      console.log(response);
      this.physicalStockCheckData = new MatTableDataSource(response);
      this.physicalStockCheckData.paginator =this.paginator.toArray()[1];
      this.physicalStockCheckData.sort = this.sort.toArray()[1];
    })
  }
}
