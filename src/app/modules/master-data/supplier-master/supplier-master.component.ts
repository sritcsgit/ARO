import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-master',
  templateUrl: './supplier-master.component.html',
  styleUrls: ['./supplier-master.component.css']
})
export class SupplierMasterComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  backButtonClick(){
    this.router.navigate(['masters']);
  }
}
