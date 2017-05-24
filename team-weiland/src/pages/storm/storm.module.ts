import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StormPage } from './storm';

@NgModule({
  declarations: [
    StormPage,
  ],
  imports: [
    IonicPageModule.forChild(StormPage),
  ],
  exports: [
    StormPage
  ]
})
export class StormPageModule {}
