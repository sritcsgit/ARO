import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { forecastService } from './forecast-service';

@Component({
  selector: 'app-forecasted-config',
  templateUrl: './forecasted-config.component.html',
  styleUrls: ['./forecasted-config.component.css']
})
export class ForecastedConfigComponent implements OnInit {
  
  pipe = new DatePipe('en-US');
  forecastForm!: FormGroup;
  displayColumns: string[] = ['Time_Key', 'Store_Name', 'Product_Name', 'Category_Name', 'Sales_Volume', 'Forecasted_Volume', 'P90', 'Actions']
  forecastMasterData!: MatTableDataSource<any>;
  pageSize = 10;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(
    private router: Router,private formBuilder: FormBuilder, private forecastMasterService: forecastService
  ) { }

  ngOnInit(): void {
    this.forecastForm = this.formBuilder.group({
      Date: [""],
      Store_Name: [""],
      Category_Name: [""],
      Subcategory_Name: [''],
      Product_Name: [''],
      SKU_ID :[''],
    });
  }
  backButtonClick(){
    this.router.navigate(['configurations']);
  }

  onforecastMasterClick() {
    const myFormattedDate = this.pipe.transform(this.forecastForm.value.Date, 'yyyy-MM-dd');

    let obj = {

      "Date": myFormattedDate,
      "Store_Name": this.forecastForm.value.Store_Name,
      "Category_Name": this.forecastForm.value.Category_Name,
      "Subcategory_Name": this.forecastForm.value.Subcategory_Name,
      "SKU_ID" : this.forecastForm.value.SKU_ID,
      "Product_Name" :this.forecastForm.value.Product_Name ,

    }
    this.forecastMasterService.getStores(obj).subscribe((response) => {
      console.log(response);
      this.forecastMasterData = new MatTableDataSource(response[0]);
      this.forecastMasterData.paginator = this.paginator;
      this.forecastMasterData.sort = this.sort;
    })
  }


}
