import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElektrikPage } from './elektrik';

@NgModule({
  declarations: [
    ElektrikPage,
  ],
  imports: [
    IonicPageModule.forChild(ElektrikPage),
  ],
  exports: [
    ElektrikPage
  ]
})
export class ElektrikPageModule {}
