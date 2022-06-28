import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';
import { ConfigurationComponent } from './modules/configuration/configuration.component';
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
import { PriceMarkdownComponent } from './modules/transaction/price-markdown/price-markdown.component';
import { StoreStoreTransferComponent } from './modules/transaction/store-store-transfer/store-store-transfer.component';
import { TransactionComponent } from './modules/transaction/transaction.component';


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
