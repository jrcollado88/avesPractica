import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AvesProvider } from '../../providers/aves/aves';
import { UserProvider } from '../../providers/user/user';
import { DetalleAvePage} from '../detalle-ave/detalle-ave';


@IonicPage()
@Component({
  selector: 'page-listado-aves',
  templateUrl: 'listado-aves.html',
})
export class ListadoAvesPage {
  avesList:any;
  detalleAve:any=DetalleAvePage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userService: UserProvider,
              public avesService: AvesProvider,
              public loading: LoadingController) {

    let loader = this.loading.create({
      content: 'Cargando aves...',
    });

    loader.present().then(() => {
      this.avesService.getBirdsList(this.userService.getUserId()).subscribe(
          (resp:any) =>{
            this.avesList = resp;     
          },(err:any) =>{
            console.log("Error getting birds");
          }
      );
      loader.dismiss();
    });
  }

}
