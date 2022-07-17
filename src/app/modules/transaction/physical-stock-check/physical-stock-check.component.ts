import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PhysicalStockCheckService } from './physical-stock-check.service';

@Component({
  selector: 'app-physical-stock-check',
  templateUrl: './physical-stock-check.component.html',
  styleUrls: ['./physical-stock-check.component.css']
})
export class PhysicalStockCheckComponent implements OnInit {
  physicalStockForm!: FormGroup;
  displayColumns: string[] = ['SKU_ID', 'Product', 'Store_name', 'Beginning_Stock', 'Physical_Stock_Check'];
  pageSize = 10;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  physicalStockCheckData!: MatTableDataSource<any>;
  router: any;

  constructor(private formBuilder: FormBuilder,
    private physicalStockCheckService: PhysicalStockCheckService) { }

  ngOnInit(): void {
    this.physicalStockForm = this.formBuilder.group({
      storeId: [""],
      SKUCode: [''],
      productName: [''],
    });
  }
  

  onPhysicalStockSubmit() {
    let inputObj = {
      "Product": this.physicalStockForm.value.productName,
      "Store_ID": this.physicalStockForm.value.storeId
    }
    this.physicalStockCheckService.getPhysicalStockCheck(inputObj).subscribe((response) => {
      console.log(response);
      this.physicalStockCheckData = new MatTableDataSource(response);
      this.physicalStockCheckData.paginator = this.paginator;
      this.physicalStockCheckData.sort = this.sort;
    })
  }
  backButtonClick(){
    this.router.navigate(['transaction']);
  }

}
