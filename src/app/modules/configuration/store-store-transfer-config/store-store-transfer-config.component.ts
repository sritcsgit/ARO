import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StoreToStoreTransferConfigService } from './store-store-transfer-config.service';

@Component({
  selector: 'app-store-store-transfer-config',
  templateUrl: './store-store-transfer-config.component.html',
  styleUrls: ['./store-store-transfer-config.component.css']
})
export class StoreStoreTransferConfigComponent implements OnInit {

  displayColumns: string[] = ['Store_ID', 'Store_Name', 'Store_Store_Transferd_Config', 'Actions']
  storeTransferData!: MatTableDataSource<any>;
  pageSize = 10;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private storeToStoreTransferService: StoreToStoreTransferConfigService) { }

  ngOnInit(): void {
    this.getStoreTransferData();
  }

  getStoreTransferData() {
    this.storeToStoreTransferService.getStoreTransferData().subscribe((response => {
      for (let store of response) {
        store.Edit = false;
      }
      this.storeTransferData = new MatTableDataSource(response);
      this.storeTransferData.paginator = this.paginator;
      this.storeTransferData.sort = this.sort;
    }))
  }

  OnStoreEdit(store: any) {
    console.log(store);
    store.Edit = true;
  }

  OnStoreSave(store: any) {
    console.log(store);
    store.Edit = false;
  }

}

