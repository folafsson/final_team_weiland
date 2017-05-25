import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

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
    locationIsSet = false;


    constructor(
        private modalCtrl: ModalController,
        private geolocation: Geolocation,
        private toastCtrl: ToastController,
        private loadingCtrl: LoadingController
        ) { }


    onSubmit(form: NgForm) {
        console.log(form.value);
    }

    onOpenMap() {
        let modal = this.modalCtrl.create(SetLocationPage, { location: this.location, isSet: this.locationIsSet });
        modal.present();
        modal.onDidDismiss(
            data => {
                if (data) {
                    this.location = data.location;
                    this.locationIsSet = true;
                }
            }
        );
    }
    onLocate() {
        const loader = this.loadingCtrl.create({
            content: 'leder efter dig...'
        });
        loader.present();
        this.geolocation.getCurrentPosition()
            .then(
            location => {
                loader.dismiss();
                this.location.lat = location.coords.latitude;
                this.location.lng = location.coords.longitude;
                this.locationIsSet = true;
            }
            )
            .catch(
            error => {
                loader.dismiss();
                const toast = this.toastCtrl.create({
                    message: 'Placering blokeret!',
                    duration: 3000
                });
                toast.present();
            }
          );
    }
}
