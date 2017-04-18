import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';
import { AuthPage } from '../auth/home/home';

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

}
