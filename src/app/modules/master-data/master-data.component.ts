import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-data',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.css']
})
export class MasterDataComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  productMasterClick(){
    //alert('hi');
    this.router.navigate(['/productmaster']);
  }
  storeMasterClick(){
    this.router.navigate(['/storemaster']);
  }

  distributionMasterClick(){
    this.router.navigate(['/distributionmaster']);
  }
  supplierMasterClick(){
    this.router.navigate(['/suppliermaster']);
  }
  storeSupplierMasterClick(){
    this.router.navigate(['/storesupplymaster']);
  }
}
