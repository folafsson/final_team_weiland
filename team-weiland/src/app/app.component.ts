import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { ProjectPage } from '../pages/projects/projects';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    tabsPage: any = TabsPage;
    homePage = HomePage;
    aboutPage = AboutPage;
    contactPage = ContactPage;
    projectPage = ProjectPage;
    @ViewChild('nav') nav: NavController; 

    constructor(
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onLoad(page: any) {
      this.nav.setRoot(page);
      this.menuCtrl.close();
  }
}

