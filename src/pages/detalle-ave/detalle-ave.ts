import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AvesProvider } from '../../providers/aves/aves';
import { AddAvistamientoPage} from '../add-avistamiento/add-avistamiento';


@IonicPage()
@Component({
  selector: 'page-detalle-ave',
  templateUrl: 'detalle-ave.html',
})

export class DetalleAvePage {
  aveId:any;
  aveDetails:any;
  dataLoaded:boolean=false;
  anyadirAvistamiento:any=AddAvistamientoPage;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public avesService: AvesProvider,
              public loading: LoadingController) {
   
  }

  ionViewWillEnter(){
    let loader = this.loading.create({
      content: 'Cargando detalles...',
    });

    this.aveId = this.navParams.get("aveId");
    loader.present().then(() => {
      this.avesService.getBirdDetails(this.aveId).subscribe(
          (resp:any) =>{
            console.log(resp);
            this.aveDetails = resp[0];
           console.log("Success getDetail : " + this.aveDetails.bird_image);
          },(err:any) =>{
            console.log("Error getting birdDetail");
          },
          ()=>{
            this.dataLoaded=true;
          }
      );
      loader.dismiss();
    });
  }
}
