import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ScannerProvider } from '../../providers/scanner/scanner';
import { DataProvider } from '../../providers/data/data';
import { CameraProvider } from '../../providers/camera/camera';

/**
 * Generated class for the ActivePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-active',
  templateUrl: 'active.html',
})
export class ActivePage {

  form = {
  	cuenta:'',
  	clase:'',
  	sub_clase:'',
    denominacion:'',
  	dependencia:'',
  	codigo_de_barras:'',
  	nombre_responsable:'',
  	descripcion:'',
    estado:'',
    imagen:'',
    date_time: new Date()
  }   
  inputs={};

 
  
 

  constructor(public navCtrl: NavController,public params: NavParams, public view: ViewController,  public scannerService: ScannerProvider, public cameraService: CameraProvider,public dataService: DataProvider ) {
     if(params.get('item'))
       this.form=params.get('item');

     // this.dataService.getInputs().then((actives) => {
     //  if(actives){
     //    this.items = JSON.parse(actives); 
     //  }
     // });

       this.inputs= this.dataService.getInputs();
     
  }

  scanCode(){
    this.scannerService.scan().then((barcodeData) => {
        if(barcodeData.text)
    		  this.form.codigo_de_barras=barcodeData.text;
  	}).catch(function (error) {
  		
  	})

  }

  saveActive(){
    console.log(this.form);
    this.view.dismiss(this.form);

  }

  close(){
     this.view.dismiss();
  }
  
  addPhoto(){
    this.cameraService.take().then((imageData)=>{
         this.form.imagen = 'data:image/jpeg;base64,' + imageData;
    }).catch(function (error) {
      alert(error)
    })

  }

  changeCuenta(id){
    console.log(id);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivePage');
  }

}
