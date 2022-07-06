import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';
import { ConfigurationComponent } from './modules/configuration/configuration.component';
import { ForecastedConfigComponent } from './modules/configuration/forecasted-config/forecasted-config.component';
import { MonotonicConstraintsComponent } from './modules/configuration/monotonic-constraints/monotonic-constraints.component';
import { SystemconfigComponent } from './modules/configuration/systemconfig/systemconfig.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DistributionCenterComponent } from './modules/master-data/distribution-center/distribution-center.component';
import { MasterDataComponent } from './modules/master-data/master-data.component';
import { ProductMasterComponent } from './modules/master-data/product-master/product-master.component';
import { StoreMasterComponent } from './modules/master-data/store-master/store-master.component';
import { StoreSupplierMasterComponent } from './modules/master-data/store-supplier-master/store-supplier-master.component';
import { SupplierMasterComponent } from './modules/master-data/supplier-master/supplier-master.component';
import { ProcessComponent } from './modules/process/process.component';
import { NewItemLaunchDateComponent } from './modules/transaction/new-item-launch-date/new-item-launch-date.component';
import { PhaseOutItemsComponent } from './modules/transaction/phase-out-items/phase-out-items.component';
import { PhysicalStockCheckComponent } from './modules/transaction/physical-stock-check/physical-stock-check.component';
import { PosSaleComponent } from './modules/transaction/pos-sale/pos-sale.component';
import { PriceMarkdownComponent } from './modules/transaction/price-markdown/price-markdown.component';
import { PromotionDetailsComponent } from './modules/transaction/promotion-details/promotion-details.component';
import { StockRegisterComponent } from './modules/transaction/stock-register/stock-register.component';
import { StoreStoreTransferComponent } from './modules/transaction/store-store-transfer/store-store-transfer.component';
import { TransactionComponent } from './modules/transaction/transaction.component';
import { VendorManagedInventoryComponent } from './modules/transaction/vendor-managed-inventory/vendor-managed-inventory.component';


const routes: Routes = [

  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'masters', component: MasterDataComponent },
  { path: 'process', component:ProcessComponent},
  { path: 'transaction', component:TransactionComponent},
  { path: 'admin', component:AdminComponent},
  { path: 'systemConfig', component:SystemconfigComponent},
 
  { path: 'productmaster', component:ProductMasterComponent},
  { path: 'storemaster', component:StoreMasterComponent},
  { path: 'distributionmaster', component:DistributionCenterComponent},
  { path: 'suppliermaster', component:SupplierMasterComponent},
  { path: 'storesupplymaster', component:StoreSupplierMasterComponent},

  { path: 'pricemarkdown', component:PriceMarkdownComponent},
  { path: 'phaseoutitem', component:PhaseOutItemsComponent},
  { path: 'newlauchitem', component:NewItemLaunchDateComponent},
  { path: 'store2storetransfer', component:StoreStoreTransferComponent},
  { path: 'vendormanagedinventory', component:VendorManagedInventoryComponent},
  { path: 'forecastconfig', component:ForecastedConfigComponent},
  { path: 'stockregister', component:StockRegisterComponent},
  { path: 'possale', component:PosSaleComponent},
  { path: 'promotiondetails', component:PromotionDetailsComponent},
  { path: 'monotonicconfig', component:MonotonicConstraintsComponent},
  { path: 'physicalstock', component:PhysicalStockCheckComponent},
  {
    path: 'configurations',
    loadChildren: () =>
      import('./modules/configuration/configuration.module').then((m) => m.ConfigurationModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
