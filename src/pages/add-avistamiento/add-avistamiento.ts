import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-add-avistamiento',
  templateUrl: 'add-avistamiento.html',
})
export class AddAvistamientoPage {

  validations_form: FormGroup;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder) {
    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.required)
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
