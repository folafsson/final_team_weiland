import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { DeviceFeedback } from '@ionic-native/device-feedback';
import { Vibration } from '@ionic-native/vibration';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Geolocation } from '@ionic-native/geolocation';
import { HomePage } from '../pages/home/home';
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
import { LoadingPage } from '../pages/loading/loading';
import { AddPlacePage } from '../pages/add-place/add-place';
import { SetLocationPage } from '../pages/set-location/set-location';
import { PlacePage } from '../pages/place/place';



@NgModule({
  declarations: [
    MyApp,
      HomePage,
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
      SandPage,
      LoadingPage,
      AddPlacePage,
      SetLocationPage,
      PlacePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAtGOloqdslK13ELBadqG_5aicSnjoNh1c'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
      HomePage,
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
      SandPage,
      LoadingPage,
      AddPlacePage,
      SetLocationPage,
      PlacePage
  ],
  providers: [
    StatusBar,
      SplashScreen,
      DeviceFeedback,
      Vibration,
      Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
