import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from "../about/about";
//import { ServicePage } from "../services/services";
//import { ProjectPage } from "../projects/projects";
import { ContactPage } from "../contact/contact";
//import { EstimatePage } from '../estimate/estimate';
//import { InspektionPage } from '../inspektion/inspektion';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    aboutPage = AboutPage;
    //servicePage = ServicePage;
    //projectPage = ProjectPage;
    contactPage = ContactPage;
    //estimatePage = EstimatePage;
    //inspektionPage = InspektionPage;
}
