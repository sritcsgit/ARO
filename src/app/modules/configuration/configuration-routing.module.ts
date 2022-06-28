import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './configuration.component';
import { SchedulingConfigComponent } from './scheduling-config/scheduling-config.component';
import { StoreStoreTransferConfigComponent } from './store-store-transfer-config/store-store-transfer-config.component';
import { SystemconfigComponent } from './systemconfig/systemconfig.component';



const routes: Routes = [

  {
    path: '', component: ConfigurationComponent,
    
    children: [
      { path: 'systemConfig', component: SystemconfigComponent }
    ],
  },
  // {path: 'systemConfig', component:SystemconfigComponent,},
  {path: 'storeTransfer', component:StoreStoreTransferConfigComponent,},
  {path: 'scheduling', component:SchedulingConfigComponent,},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
