import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from "../pages/contact/contact";
import { TabsPage } from '../pages/tabs/tabs';
import { ProjectPage } from '../pages/projects/projects';
import { ServicePage } from "../pages/services/services";
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

@NgModule({
  declarations: [
    MyApp,
      HomePage,
      AboutPage,
      ContactPage,
      TabsPage,
      ProjectPage,
      ServicePage,
      ElektrikPage,
      FugerPage,
      InspektionPage,
      MalerPage,
      VinduePage,
      StormPage,
      RiggerPage,
      TraekningPage,
      TagPage,
      SandPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
      HomePage,
      AboutPage,
      ContactPage,
      TabsPage,
      ProjectPage,
      ServicePage,
      ElektrikPage,
      FugerPage,
      InspektionPage,
      MalerPage,
      VinduePage,
      StormPage,
      RiggerPage,
      TraekningPage,
      TagPage,
      SandPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
