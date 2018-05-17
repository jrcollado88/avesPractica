import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { AvesProvider } from './../../providers/aves/aves';
import { UserProvider } from './../../providers/user/user';


@IonicPage()
@Component({
  selector: 'page-anyadir-ave',
  templateUrl: 'anyadir-ave.html',
})
export class AnyadirAvePage {

  public toogleClicked: boolean = false;
  validations_form: FormGroup;
  submitAttempt: boolean = false;
  locationGranted: boolean = false;
  birdInfo:any={};
  birdName:string;
  birdDescription:string;
  

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              private geolocation: Geolocation,
              private toastCtrl: ToastController,
              public loading: LoadingController,
              public avesService: AvesProvider,
              public userService: UserProvider) {

    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      description: ['', Validators.compose([Validators.minLength(20), Validators.required])]
    });

    this.birdInfo.idUser=this.userService.getUserId();
  }

 public onToggleClick() {
    this.toogleClicked = !this.toogleClicked;
    if(this.toogleClicked){ //Si lo activa, recuperamos la posición
      this.geolocation.getCurrentPosition().then((resp) => {
        this.locationGranted=true;
  
        this.birdInfo.long=resp.coords.longitude;
        this.birdInfo.lat=resp.coords.latitude;
        
        }).catch((error) => {

          let toast = this.toastCtrl.create({
            message: "Ha ocurrido un error obteniendo su localización. Se guardará solamente la información del ave, no del avistamiento.",
            duration: 3000,
            position: 'middle'
          });
          toast.present();
        });
    }
  }

  anyadirAve(){
    this.submitAttempt = true;

    if(this.validations_form.valid){
      let loader = this.loading.create({
        content: 'Guardando...',
      });

      this.birdInfo.bird_name=this.birdName;
      this.birdInfo.bird_description=this.birdDescription;
      console.log("Enviamos: " + JSON.stringify(this.birdInfo));

      loader.present().then(() => {
        this.avesService.saveBird(this.birdInfo).subscribe(
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
    }else{
      console.log("Hay errores en los datos. Revisa la interfaz.");
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
