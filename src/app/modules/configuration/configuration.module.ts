import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { SchedulingConfigComponent } from './scheduling-config/scheduling-config.component';
import { StoreStoreTransferConfigComponent } from './store-store-transfer-config/store-store-transfer-config.component';
import { SystemconfigComponent } from './systemconfig/systemconfig.component';


@NgModule({
  declarations: [
    SystemconfigComponent,
    StoreStoreTransferConfigComponent,
    SchedulingConfigComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ConfigurationRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],

})
export class ConfigurationModule { }

