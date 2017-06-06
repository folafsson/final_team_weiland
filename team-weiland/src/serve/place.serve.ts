import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Place } from '../models/place';

declare var cordova: any;
@Injectable()
export class PlaceService {
    private places: Place[] = [];
    constructor(private storage: Storage,
        private toastCtrl: ToastController,
        private file: File) { }


    addPlace(title: string,
        information: string,
        location: Location,
        imageUrl: string) {
        const place = new Place(title, information, location, imageUrl);
        this.places.push(place);
        this.storage.set('places', this.places)
            .then()
            .catch(
            err => {
                this.places.splice(this.places.indexOf(place), 1)
            }
        );

    }
    loadPlaces() {
        return this.places.slice();
    }
    fetchPlaces() {
        return this.storage.get('places')
            .then(
            (places: Place[]) => {
                this.places = places != null ? places : [];
                return this.places;
              }
            )
            .catch(
                err=>console.log(err)
            );
    }

    deletePlace(index: number) {
        const place = this.places[index];
        this.places.splice(index, 1);
        this.storage.set('places', this.places)
            .then(
            () => {
                this.removeFile(place);
              }
            )
            .catch(
              err => console.log(err)
            );
    }
    private removeFile(place: Place) {
        const currentName = place.imageUrl.replace(/^.*[\\\/]/, ''); // removing unwanted symbold and replacing (,) with empty string
        this.file.removeFile(cordova.file.dataDirectory, currentName)
            .then(
            () => {
                const toast = this.toastCtrl.create({
                    message: 'slettet...',
                    duration: 3000
                });
                toast.present();
              }
            )
            .catch( 
            () => {
                const toast = this.toastCtrl.create({
                    message: 'ikke slettet, prov igen...',
                    duration: 3000
                });
                toast.present();
                this.addPlace(place.title, place.information, place.location, place.imageUrl);
            }
        );
    }
}