import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-anyadir-ave',
  templateUrl: 'anyadir-ave.html',
})
export class AnyadirAvePage {

  public toogleClicked: boolean = false;
  validations_form: FormGroup;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder) {
    this.validations_form = this.formBuilder.group({
    	name: new FormControl('', Validators.required),
      description: ['', Validators.compose([Validators.minLength(30), Validators.required])]
    });
  }

 public onToggleClick() {
    this.toogleClicked = !this.toogleClicked;
    if(this.toogleClicked == true){ //Si lo activa, recuperamos la posición
      console.log("Recuperamos posición");
    }
  }

  anyadirAve(){
    this.submitAttempt = true;

    if(this.validations_form.valid){
      console.log("Enviamos datos");
    }else{
      console.log("Hay errores en los datos");
    }
  }

}
