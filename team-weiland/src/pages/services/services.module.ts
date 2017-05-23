import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicePage } from '../services';

@NgModule({
  declarations: [
      ServicePage,
  ],
  imports: [
      IonicPageModule.forChild(ServicePage),
  ],
  exports: [
    ServicePage
  ]
})
export class ServicePageModule {}
