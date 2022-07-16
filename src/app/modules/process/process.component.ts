import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreService } from './storeservice';
import { subscribeOn } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {
  ngform!: FormGroup;
  displayColumns: string[] = ['ProductName',  'ReOrderedQty', 'OverriderReorderQty',  'SupplierNameQty', 'Actions']
  dataSource: any;
  overrideReorder!: any;
  pipe = new DatePipe('en-US');

  constructor(private http: HttpClient, private storeService: StoreService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
  
  }
  onSubmit() {
    console.log(this.ngform.value);
    let obj = {
      "Date": this.ngform.value.date,
      "Store_Name": this.ngform.value.storeName,
      "Product_Categories": this.ngform.value.ProductCateg,
      "Sub_Categories": this.ngform.value.SubCategories,
      "ABC_Class": this.ngform.value.abcClass,
      "Product_Name": this.ngform.value.ProductName,
      "SKU_CODE": this.ngform.value.SKU_CODE
    }
    this.storeService.searchStores(obj).subscribe((response) => {
      for (let prod of response[0]) {
        prod.editMode = false;
      }
      this.dataSource = response[0];
      console.log(this.dataSource)
    })
  }

  onProdEdit(product: any) {
    product.editMode = true;
    this.overrideReorder = product.Override_RQ;
  }

  onProdSave(product: any) {
    const myFormattedDate = this.pipe.transform(product.Date, 'yyyy-MM-dd');
    let prodObj = {
      "Date": myFormattedDate,
      "Override_RQ": this.overrideReorder
    };
    this.storeService.saveProduct(prodObj).subscribe((response) => {
      console.log(response);
      this.onSubmit();
      this.overrideReorder = undefined;
      product.editMode = false;
    });
  }

}
