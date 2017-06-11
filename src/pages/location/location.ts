import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {AutocompletePage} from './autocomplete';
import {googlemaps} from 'googlemaps';

@Component({
  templateUrl: 'location.html'
})
export class LocationPage {
  address;

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) {
    this.address = {
      place: ''
    };
  }


  showAddressModal () {
    let modal = this.modalCtrl.create(AutocompletePage);
    let me = this;
    modal.onDidDismiss(data => {
      this.address.place = data;
    });
    modal.present();
  }
}
