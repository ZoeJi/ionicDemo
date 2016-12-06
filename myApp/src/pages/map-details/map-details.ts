import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Geolocation } from 'ionic-native';

@Component({
  selector: 'page-map-details',
  templateUrl: 'map-details.html'
})
export class MapDetailsPage {
  selectedItem: any;
  lat: any;
  lon: any;

  constructor(public navCtrl: NavController) {
    Geolocation.getCurrentPosition().then((resp) => {
     this.lat = resp.coords.latitude;
     this.lon = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }


}
