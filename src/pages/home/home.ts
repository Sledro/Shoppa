import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';

@Component({
  templateUrl: 'home.html',
  selector: 'home',
})
export class HomePage {
  constructor(private nav: NavController, private auth: AuthProvider) {

  }

logout(){
this.auth.logout();
}

}
