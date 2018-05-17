import { AvesProvider } from './../../providers/aves/aves';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
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
  sightingInfo:any={};
  name:string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              private geolocation: Geolocation,
              private toastCtrl: ToastController,
              public loading: LoadingController,
              public avesService: AvesProvider) {

    this.sightingInfo.idAve=this.navParams.get("aveId");

    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.required)
    });

    this.geolocation.getCurrentPosition().then((resp) => {
      this.locationGranted=true;

      this.sightingInfo.long=resp.coords.longitude;
      this.sightingInfo.lat=resp.coords.latitude;
      
      }).catch((error) => {
        let toast = this.toastCtrl.create({
          message: "Ha ocurrido un error obteniendo su localización",
          duration: 3000,
          position: 'middle'
        });
        toast.present();

      });
  }

  anyadirAvistamiento(){
    this.submitAttempt = true;

    if(this.validations_form.valid){
      let loader = this.loading.create({
        content: 'Guardando...',
      });

      this.sightingInfo.place=this.name;

      loader.present().then(() => {
        this.avesService.saveSighting(this.sightingInfo).subscribe(
          (resp:any) => {
            if(resp.status == true){
              this.navCtrl.pop();
            }else{
              this.showSaveError();
            }
          }, (err) => {
             this.showSaveError();
          }
        );
        loader.dismiss();
      });
    }
  }

  showSaveError(){
    let toast = this.toastCtrl.create({
      message: "Error al guardar el avistamiento. Por favor, inténtelo de nuevo.",
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
