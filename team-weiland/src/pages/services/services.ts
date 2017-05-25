import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { ElektrikPage } from '../../pages/elektrik/elektrik';
import { FugerPage } from '../../pages/fuger/fuger';
import { InspektionPage } from '../../pages/inspektion/inspektion';
import { MalerPage } from '../../pages/maler/maler';
import { VinduePage } from '../../pages/vindue/vindue';
import { StormPage } from '../../pages/storm/storm';
import { RiggerPage } from '../../pages/rigger/rigger';
import { TraekningPage } from '../../pages/traekning/traekning';
import { TagPage } from '../../pages/tag/tag';
import { SandPage } from '../../pages/sand/sand';

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicePage {
    constructor(private vibration: Vibration) { }
    

    elektrikPage = ElektrikPage;
    fugerPage = FugerPage;
    inspektionPage = InspektionPage;
    malerPage = MalerPage;
    vinduePage = VinduePage;
    stormPage = StormPage;
    riggerPage = RiggerPage;
    traekningPage = TraekningPage;
    tagPage = TagPage;
    sandPage = SandPage;
    onLoad(any) {
        console.log("working!");
        this.vibration.vibrate(500);
    }
}
//onVibrate(button: any){
//    this.vibration.vibrate(500);
//}
