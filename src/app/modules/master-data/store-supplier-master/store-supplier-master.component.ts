import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-supplier-master',
  templateUrl: './store-supplier-master.component.html',
  styleUrls: ['./store-supplier-master.component.css']
})
export class StoreSupplierMasterComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  backButtonClick(){
    this.router.navigate(['masters']);
  }
}
