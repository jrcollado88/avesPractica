import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController  } from 'ionic-angular';

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
              public toastCtrl: ToastController,
              public loading: LoadingController) {
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
    let loader = this.loading.create({
      content: 'Autenticando...',
    });

    loader.present().then(() => {
      this.user.login(this.account).subscribe(
        (resp:any) => {
          if(resp.status == "OK"){
            this.navCtrl.push(MenuPage);
            this.user.setUserId(resp.id);
            console.log("login ok, id: " + resp.id);
          }else{
            this.showLoginError();
          }

        }, (err) => {
            this.showLoginError();
        }
      );
      loader.dismiss();
    });
  }
}
