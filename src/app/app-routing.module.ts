import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';
import { ConfigurationComponent } from './modules/configuration/configuration.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MasterDataComponent } from './modules/master-data/master-data.component';
import { ProcessComponent } from './modules/process/process.component';
import { TransactionComponent } from './modules/transaction/transaction.component';


const routes: Routes = [

  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'masters', component: MasterDataComponent },
  { path: 'process', component:ProcessComponent},
  { path: 'transaction', component:TransactionComponent},
  { path: 'admin', component:AdminComponent},
 
  
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
