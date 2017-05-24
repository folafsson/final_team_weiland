import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VinduePage } from './vindue';

@NgModule({
  declarations: [
    VinduePage,
  ],
  imports: [
    IonicPageModule.forChild(VinduePage),
  ],
  exports: [
    VinduePage
  ]
})
export class VinduePageModule {}
