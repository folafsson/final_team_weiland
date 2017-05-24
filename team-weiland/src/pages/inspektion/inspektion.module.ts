import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InspektionPage } from './inspektion';

@NgModule({
  declarations: [
    InspektionPage,
  ],
  imports: [
    IonicPageModule.forChild(InspektionPage),
  ],
  exports: [
    InspektionPage
  ]
})
export class InspektionPageModule {}
