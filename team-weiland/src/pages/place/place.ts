import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Place } from '../../models/place';
import { PlaceService } from '../../serve/place.serve'; 
@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
    place: Place;
    index: number;
    constructor(
        public navParams: NavParams,
        private vievCtrl: ViewController,
        private placeService: PlaceService) {
        this.place = this.navParams.get('place');
        this.index = this.navParams.get('index');
    }
    onLeave() {
        this.vievCtrl.dismiss();
    }
    onDelete() {
        this.placeService.deletePlace(this.index);

        this.onLeave();
    }
}
