import { Component } from '@angular/core';
import { ScannerProvider } from '../../providers/scanner/scanner';
import { NavController, NavParams , AlertController} from 'ionic-angular';
import { CloudProvider } from '../../providers/cloud/cloud';

/**
 * Generated class for the FindPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-find',
  templateUrl: 'find.html',
})
export class FindPage {

  assetId:any;
  asset:any;
  searching: any = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public cloudService: CloudProvider, private alertCtrl: AlertController,public scannerService: ScannerProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindPage');
  }

  findAsset(){
  	this.searching = true;
  	this.asset=null;
  	this.cloudService.findById(this.assetId).then((data)=>{
  		this.asset=data;
  		this.searching = false;
  	}).catch((error)=>{
  		this.showError("No se ha podido encontrar información sobre el activo buscado");
  		this.searching = false;

  	})
  }

  showError(text) {
	  let alert = this.alertCtrl.create({
	    title: 'Buscar',
	    subTitle: text,
	    buttons: ['Cancelar']
	  });

	  alert.present();
	}

    scanCode(){
    this.scannerService.scan().then((barcodeData) => {
        if(barcodeData.text)
          this.assetId=barcodeData.text;
    }).catch(function (error) {
      
    })

  }


}
