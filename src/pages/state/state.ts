import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController , LoadingController} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { CloudProvider } from '../../providers/cloud/cloud';


/**
 * Generated class for the StatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-state',
  templateUrl: 'state.html',
})
export class StatePage {

  loading:any;
  lastUpdate:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public cloudService: CloudProvider,public alertCtrl: AlertController, public loadingCtrl: LoadingController, public dataService: DataProvider) {
  	this.dataService.getLastUpdate().then((lastUpdate) => {
      if(lastUpdate){
        this.lastUpdate = JSON.parse(lastUpdate); 
      }
 
    });

  }

 
  close(){
     this.view.dismiss();
  }

  update(){
  	this.loader();
  	this.cloudService.download().then((data)=>{	  
  		  this.loading.dismiss();
  		   this.dataService.saveInputs(data);
  		   this.lastUpdate=new Date();
           this.dataService.saveLastUpdate(this.lastUpdate);
           window.location.reload();
         }).catch((error)=>{
           this.loading.dismiss();
  		   this.showError("No es posible obtener la información necesaria para iniciar correctamente la aplicación");
        })
  }

  loader() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando datos...'
    });

    this.loading.present();

  }

  showError(text) {
	  let alert = this.alertCtrl.create({
	    title: 'Cargando datos...',
	    subTitle: text,
	    buttons: ['Aceptar']
	  });

	  alert.present();
	}

}
