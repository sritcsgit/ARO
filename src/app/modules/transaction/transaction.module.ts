import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorManagedInventoryComponent } from './vendor-managed-inventory/vendor-managed-inventory.component';
import { StoreStoreTransferComponent } from './store-store-transfer/store-store-transfer.component';
import { StockRegisterComponent } from './stock-register/stock-register.component';
import { PromotionDetailsComponent } from './promotion-details/promotion-details.component';
import { PhaseOutItemsComponent } from './phase-out-items/phase-out-items.component';
import { PriceMarkdownComponent } from './price-markdown/price-markdown.component';
import { PosSaleComponent } from './pos-sale/pos-sale.component';
import { PhysicalStockCheckComponent } from './physical-stock-check/physical-stock-check.component';
import { NewItemLaunchDateComponent } from './new-item-launch-date/new-item-launch-date.component';


@NgModule({
  declarations: [
    TransactionComponent,
    VendorManagedInventoryComponent,
    StoreStoreTransferComponent,
    StockRegisterComponent,
    PromotionDetailsComponent,
    PriceMarkdownComponent,
    PosSaleComponent,
    PhysicalStockCheckComponent,
    PhaseOutItemsComponent,
    NewItemLaunchDateComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TransactionModule { }
