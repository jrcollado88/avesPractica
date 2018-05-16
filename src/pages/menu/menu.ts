import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ListadoAvesPage} from '../listado-aves/listado-aves';
import { AnyadirAvePage} from '../anyadir-ave/anyadir-ave';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})


export class MenuPage {

  listadoAves:any=ListadoAvesPage;
  anyadirAve:any=AnyadirAvePage;
  
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
