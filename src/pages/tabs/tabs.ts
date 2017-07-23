import { Component } from '@angular/core';

import { LoadingController, AlertController} from 'ionic-angular';
import { ActivesPage } from '../actives/actives';
import { ConfigPage } from '../config/config';
import { FindPage } from '../find/find';
import { DataProvider } from '../../providers/data/data';
import { CloudProvider } from '../../providers/cloud/cloud';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ActivesPage;
  tab2Root = FindPage;
  tab3Root = ConfigPage;
  isReadyData: any = false;
  loading:any;

  constructor(public dataService: DataProvider,public alertCtrl: AlertController, public cloudService: CloudProvider, public loadingCtrl: LoadingController) {
    
  	Promise.all([this.dataService.getInputs(),this.dataService.getUsers()]).then((data)=>{
  		if(!data[0] || !data[1]){
  			this.loader();
  			Promise.all([this.cloudService.download(),this.cloudService.users()]).then((data)=>{
  			   this.dataService.saveInputs(data[0]);
  			   this.dataService.saveUsers(data[1]);
	           this.dataService.saveLastUpdate(new Date());
	           window.location.reload()
  			}).catch((error)=>{
	           this.isReadyData=false;
	           this.loading.dismiss();
	  		   this.showError("No es posible obtener la información necesaria para iniciar correctamente la aplicación");
        	})
  		}else{
  			this.isReadyData=true;
  		}
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
	    buttons: ['Cancelar']
	  });

	  alert.present();
	}
}
