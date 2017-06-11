import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';
import { AuthPage } from '../auth/home/home';
import { LocationPage } from '../location/location';

@Component({
  templateUrl: 'home.html',
  selector: 'home',
})
export class HomePage {
  constructor(private navCtrl: NavController, private auth: AuthProvider) {

  }

logout(){
  this.auth.logout();
  this.navCtrl.push(AuthPage);
}

LocationPage(){
  this.navCtrl.push(LocationPage);
}

}
