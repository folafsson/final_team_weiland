import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Location } from '../../models/location';
import { SetLocationPage } from '../set-location/set-location'

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {
    location: Location = {
        lat: 54.912066,
        lng: 9.778986
    };
    //locationIsSet = false;


    constructor(
        private modalCtrl: ModalController
        ) { }


    onSubmit(form: NgForm) {
        console.log(form.value);
    }

    onOpenMap() {
        let modal = this.modalCtrl.create(SetLocationPage, { location: this.location });
        modal.present();
    }
}
