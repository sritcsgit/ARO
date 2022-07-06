import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { SchedulingConfigComponent } from './scheduling-config/scheduling-config.component';
import { StoreStoreTransferConfigComponent } from './store-store-transfer-config/store-store-transfer-config.component';
import { SystemconfigComponent } from './systemconfig/systemconfig.component';
import { ForecastedConfigComponent } from './forecasted-config/forecasted-config.component';


@NgModule({
  declarations: [
   SystemconfigComponent,
   StoreStoreTransferConfigComponent,
   SchedulingConfigComponent,
   ForecastedConfigComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ConfigurationRoutingModule
  ],
  providers: [],
 
})
export class ConfigurationModule { }
