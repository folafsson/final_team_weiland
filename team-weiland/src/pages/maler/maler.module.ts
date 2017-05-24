import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MalerPage } from './maler';

@NgModule({
  declarations: [
    MalerPage,
  ],
  imports: [
    IonicPageModule.forChild(MalerPage),
  ],
  exports: [
    MalerPage
  ]
})
export class MalerPageModule {}
