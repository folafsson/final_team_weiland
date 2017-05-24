import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TraekningPage } from './traekning';

@NgModule({
  declarations: [
    TraekningPage,
  ],
  imports: [
    IonicPageModule.forChild(TraekningPage),
  ],
  exports: [
    TraekningPage
  ]
})
export class TraekningPageModule {}
