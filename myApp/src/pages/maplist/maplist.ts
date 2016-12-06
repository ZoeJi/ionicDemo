import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MapDetailsPage } from '../map-details/map-details';

@Component({
  selector: 'page-map',
  templateUrl: 'maplist.html'
})
export class MapPage {

  constructor(public navCtrl: NavController) {
  
  }

  itemTapped() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(MapDetailsPage);
  }

}
