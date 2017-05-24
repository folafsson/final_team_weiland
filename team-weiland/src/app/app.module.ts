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


@NgModule({
  declarations: [
    MyApp,
      HomePage,
      AboutPage,
      ContactPage,
      TabsPage,
      ProjectPage,
      ServicePage
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
      ServicePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
