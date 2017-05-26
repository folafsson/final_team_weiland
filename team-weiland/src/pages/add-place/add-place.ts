import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { NgForm } from '@angular/forms';
import { Location } from '../../models/location';
import { SetLocationPage } from '../set-location/set-location'
import { Place } from '../../models/place';
import { PlaceService } from '../../serve/place.serve';
import { PlacePage } from '../place/place';



declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage implements OnInit {
    location: Location = {
        lat: 54.912066,
        lng: 9.778986
    };
    locationIsSet = false;
    imageUrl = '';
    places: Place[] = []; 

    constructor(
        private file:File,
        private modalCtrl: ModalController,
        private geolocation: Geolocation,
        private toastCtrl: ToastController,
        private loadingCtrl: LoadingController,
        private placeService: PlaceService,
        private camera: Camera) {
        this.onTakePhoto()
    }

    ngOnInit() {
        this.placeService.fetchPlaces();
    }

    onSubmit(form: NgForm) {
        this.placeService.addPlace(form.value.title, form.value.information, form.value.location, form.value.imageUrl);
        form.reset();
        this.location = {
            lat: 54.912066,
            lng: 9.778986
        };
        this.imageUrl = '';
        this.locationIsSet = false;
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
    onTakePhoto() {
        this.camera.getPicture({
            quality: 80,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        })
            .then(
            imageData => {
                const currentName = imageData.replace(/^.*[\\\/]/, '');
                const path = imageData.replace(/[^\/]*$/, '');
                this.file.moveFile(path, currentName, cordova.file.dataDirectory, currentName)  //somthing is amiss here!! WTF
                    .then(
                    data => {
                        this.imageUrl = data.nativeURL;
                        this.file.removeFile(path, currentName);
                    }
                    )
                    .catch(
                    err => {
                        this.imageUrl = '';
                        const toast = this.toastCtrl.create({
                            message: 'Kunne ikke gemme billede, prøv igen!',
                            duration: 3000
                        });
                        toast.present();
                        this.file.removeFile(path, currentName);
                       // Camera.cleanup();
                    }
                    );
                this.imageUrl=imageData;
            }
        )
            .catch(
            err => {
                const toast = this.toastCtrl.create({
                    message: 'Kunne ikke tage billede, prøv igen!',
                    duration: 3000
                });
                toast.present();
            }
        )
    }
    ionViewWillEnter() {
        this.places = this.placeService.loadPlaces();
    }
    onOpenPlace(place: Place, index:number) {
        let modal = this.modalCtrl.create(PlacePage, { place: place, index:index });
        modal.present();
    }
}
