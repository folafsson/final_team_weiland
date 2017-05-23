import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectPage } from '../projects';

@NgModule({
  declarations: [
      ProjectPage,
  ],
  imports: [
      IonicPageModule.forChild(ProjectPage),
  ],
  exports: [
      ProjectPage
  ]
})
export class ProjectsPageModule {}
