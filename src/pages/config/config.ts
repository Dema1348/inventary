import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ConfigPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

	public form={
		nombre:'',
		usuario:'',
		rut:''
	}

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService: DataProvider,public alertCtrl: AlertController) {
 	  this.dataService.getUser().then((user) => {
      if(user){
        this.form = JSON.parse(user); 
      }
 
    });
  }

  saveUser() {
     this.dataService.saveUser(this.form);
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Configuración de usuario',
      message: '¿Está seguro que desea actulizar los datos del usuario?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {

          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.saveUser();
          }
        }
      ]
    });
    confirm.present();
  }

}
