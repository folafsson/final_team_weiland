import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FugerPage } from './fuger';

@NgModule({
  declarations: [
    FugerPage,
  ],
  imports: [
    IonicPageModule.forChild(FugerPage),
  ],
  exports: [
    FugerPage
  ]
})
export class FugerPageModule {}
