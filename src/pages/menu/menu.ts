import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})


export class MenuPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController) {
  }


  not_ready(){
    this.toastCtrl.create({
      message: "Esta funcionalidad no está disponible en esta PEC.",
      duration: 3000,
      position: 'top'
    }).present();
  }

  logout(){
    this.navCtrl.pop();
  }
}
