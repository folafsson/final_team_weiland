import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SandPage } from './sand';

@NgModule({
  declarations: [
    SandPage,
  ],
  imports: [
    IonicPageModule.forChild(SandPage),
  ],
  exports: [
    SandPage
  ]
})
export class SandPageModule {}
