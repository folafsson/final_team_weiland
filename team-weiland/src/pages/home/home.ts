import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ServicePage } from "../services/services";
import { ProjectPage } from "../projects/projects";
import { ContactPage } from "../contact/contact";
import { AddPlacePage } from '../add-place/add-place';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   
    servicePage = ServicePage;
    projectPage = ProjectPage;
    contactPage = ContactPage;
    addPlacePage = AddPlacePage;
}
