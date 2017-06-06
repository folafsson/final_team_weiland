import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File, Entry, FileError } from '@ionic-native/file';
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
        this.placeService.fetchPlaces()
        .then(
            (places: Place[]) => this.places = places
        );
    }

    onSubmit(form: NgForm) {
        this.placeService.addPlace(form.value.title, form.value.information, form.value.location, form.value.imageUrl);
        form.reset(); //clearing the form
        this.location = { //setting the location back to the train station
            lat: 54.912066,
            lng: 9.778986
        };
        this.imageUrl = ''; //clearing the image url and setting to default
        this.locationIsSet = false;  //same, setting to default
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
                const currentName = imageData.replace(/^.*[\\\/]/, ''); // removing unwanted symbold and replacing (,) with empty string
                const path = imageData.replace(/[^\/]*$/, '');
                const newFileName = new Date().getUTCMilliseconds() + '.jpeg';
                this.file.moveFile(path, currentName, cordova.file.dataDirectory, newFileName)  //somthing is amiss here (should work now)!! (maybe just need a device for testing)
                    .then(
                      (data: Entry) => {
                          this.imageUrl = data.nativeURL;
                          this.file.removeFile(path, currentName);//works as a camera clean up
                      }
                    )
                    .catch(
                    (err: FileError) => {
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
        const modal = this.modalCtrl.create(PlacePage, { place: place, index:index });
        modal.present();
    }
}
