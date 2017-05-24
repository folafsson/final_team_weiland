import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiggerPage } from './rigger';

@NgModule({
  declarations: [
    RiggerPage,
  ],
  imports: [
    IonicPageModule.forChild(RiggerPage),
  ],
  exports: [
    RiggerPage
  ]
})
export class RiggerPageModule {}
