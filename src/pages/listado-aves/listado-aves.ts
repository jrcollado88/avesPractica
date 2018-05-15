import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvesProvider } from '../../providers/aves/aves';
import { UserProvider } from '../../providers/user/user';





@IonicPage()
@Component({
  selector: 'page-listado-aves',
  templateUrl: 'listado-aves.html',
})
export class ListadoAvesPage {
  avesList:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userService: UserProvider,
              public avesService: AvesProvider) {

    this.avesService.getBirdsList(this.userService.getUserId()).subscribe(
        (resp:any) =>{
          this.avesList = resp;
        //  console.log("Success getBirds : " + this.avesList);
        },(err:any) =>{
          console.log("Error getting birds");
        }
    );

  }

  ionViewDidLoad() {
    //console.log(this.user.getUserId());
  }

}
