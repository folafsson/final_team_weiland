import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DeviceFeedback } from '@ionic-native/device-feedback';
import { Vibration } from '@ionic-native/vibration';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { ProjectPage } from '../pages/projects/projects';
import { ServicePage } from '../pages/services/services';
import { ElektrikPage } from '../pages/elektrik/elektrik';
import { FugerPage } from '../pages/fuger/fuger';
import { InspektionPage } from '../pages/inspektion/inspektion';
import { MalerPage } from '../pages/maler/maler';
import { VinduePage } from '../pages/vindue/vindue';
import { StormPage } from '../pages/storm/storm';
import { RiggerPage } from '../pages/rigger/rigger';
import { TraekningPage } from '../pages/traekning/traekning';
import { TagPage } from '../pages/tag/tag';
import { SandPage } from '../pages/sand/sand';
import { LoadingPage } from '../pages/loading/loading';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    tabsPage: any = TabsPage;
    homePage = HomePage;
    contactPage = ContactPage;
    projectPage = ProjectPage;
    servicePage = ServicePage;
    elektrikPage = ElektrikPage;
    fugerPage = FugerPage;
    malerPage = MalerPage;
    inspektionPage = InspektionPage;
    vinduePage = VinduePage;
    stormPage = StormPage;
    riggerPage = RiggerPage;
    traekningPage = TraekningPage;
    tagPage = TagPage;
    sandPage = SandPage;
    loadingPage = LoadingPage;
    @ViewChild('nav') nav: NavController; 

    constructor(
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        private menuCtrl: MenuController,
        private deviceFeedback: DeviceFeedback,
        private vibration: Vibration) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
}


  onLoad(page: any) {
      this.nav.push(page);
      this.menuCtrl.close();
      this.vibration.vibrate(500);
      //this.deviceFeedback.isFeedbackEnabled();
      //.then((feedback) => {
      //    console.log(feedback);
      //    this.deviceFeedback.acoustic();
      //    this.deviceFeedback.haptic(500);
      //});
  }
}

