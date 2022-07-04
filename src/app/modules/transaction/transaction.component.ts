import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  priceMarkdown(){
    //alert('hi');
    this.router.navigate(['/pricemarkdown']);
  }
  phaseOutItems(){
    //alert('hi');
    this.router.navigate(['/phaseoutitem']);
  }
  newLaunchItem(){
    //alert('hi');
    this.router.navigate(['/newlauchitem']);
  }
  storeStoreTransfer(){
    //alert('hi');
    this.router.navigate(['/store2storetransfer']);
  }
  backButtonClick(){
    this.router.navigate(['transaction']);
  }
  vendorManagedInventory(){
    this.router.navigate(['vendormanagedinventory'])
  }
}
