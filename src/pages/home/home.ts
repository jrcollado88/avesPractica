import { Component } from '@angular/core';
import { NavController, ToastController  } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';
import { MenuPage} from '../menu/menu';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  developer_name:string="Juanra Collado";

  account: { user: string, password: string } = {
    user: 'test@example.com',
    password: 'test'
  };

  constructor(public navCtrl: NavController,
              public user: UserProvider,
              public toastCtrl: ToastController) {
  }

 showLoginError(){
    let toast = this.toastCtrl.create({
      message: "Usuario/Contraseña incorrecto. Por favor, inténtelo de nuevo.",
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  //Login through our service and error handlers
  doLogin() {
    this.user.login(this.account).subscribe((resp:any) => {
      if(resp.status == "OK"){
        this.navCtrl.push(MenuPage);
        console.log("login ok, id: " + resp.id);
      }else{
        this.showLoginError();
      }

    }, (err) => {
        this.showLoginError();
    });
  }


}
