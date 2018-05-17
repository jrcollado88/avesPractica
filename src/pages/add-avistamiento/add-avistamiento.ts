import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';


@IonicPage()
@Component({
  selector: 'page-add-avistamiento',
  templateUrl: 'add-avistamiento.html',
})

export class AddAvistamientoPage {

  validations_form: FormGroup;
  submitAttempt: boolean = false;
  locationGranted: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              private geolocation: Geolocation,
              private toastCtrl: ToastController) {

    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.required)
    });



    this.geolocation.getCurrentPosition().then((resp) => {
      
      let toast = this.toastCtrl.create({
        message: "Latitud: "+resp.coords.latitude,
        duration: 3000,
        position: 'top'
      });
      toast.present();

     // resp.coords.longitude
      }).catch((error) => {
        console.log('Error getting location', error);
      });
  }

  anyadirAvistamiento(){
    this.submitAttempt = true;

    if(this.validations_form.valid){
      console.log("Enviamos datos");
    }else{
      console.log("Hay errores en los datos");
    }
  }
}
