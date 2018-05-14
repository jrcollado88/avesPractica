import { Component } from '@angular/core';
import { NavController, ToastController  } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  account: { user: string, password: string } = {
    user: 'test@example.com',
    password: 'test'
  };

  constructor(public navCtrl: NavController,
              public user: UserProvider,
              public toastCtrl: ToastController) {

  }


  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
  //    this.navCtrl.push(MainPage);
        let toast = this.toastCtrl.create({
          message: "Logueado correctamente.",
          duration: 3000,
          position: 'top'
        });
      toast.present();
    }, (err) => {
    //  this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: "Usuario/Contraseña incorrecto. Por favor, inténtelo de nuevo.",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
