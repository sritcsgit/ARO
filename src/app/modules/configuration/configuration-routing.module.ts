import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './configuration.component';
import { SystemconfigComponent } from './systemconfig/systemconfig.component';



const routes: Routes = [

  {
    path: '', component: ConfigurationComponent,
    children: [
      { path: 'systemConfig', component: SystemconfigComponent }
    ],
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
