import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ScannerProvider } from '../../providers/scanner/scanner';
import { DataProvider } from '../../providers/data/data';
import { CameraProvider } from '../../providers/camera/camera';
import { filter } from 'lodash-es';

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

  form:any= {
    date_time: new Date()
  }   
  inputs:any;
  cuentas=[];
  clases=[];
  subClases=[];
  denominaciones=[];
  dependencias=[];
  usuarios=[];
  representantes=[];
  estados=[];
 
  

  constructor(public navCtrl: NavController,public params: NavParams, public view: ViewController,  public scannerService: ScannerProvider, public cameraService: CameraProvider,public dataService: DataProvider ) {
    

     this.dataService.getInputs().then((inputs) => {
      if(inputs){
        this.inputs = JSON.parse(inputs); 
        this.cuentas=this.inputs.cuentas;
        this.clases=this.inputs.clases;
        this.subClases=this.inputs.subClases;
        this.denominaciones=this.inputs.denominaciones;
        this.estados=this.inputs.estados;
        this.dependencias=this.inputs.dependencias;
        this.usuarios=this.inputs.usuarios;
        this.representantes=this.inputs.representantes;
        console.log(this.inputs);
         if(params.get('item')){
           let editData=params.get('item');
            this.changeCuenta(editData.id_cuenta);
            this.changeClase(editData.id_clase);
            this.changeSubClase(editData.id_sub_clase);
            this.form=editData;     
         }else{
           this.clases=[];
           this.subClases=[];
           this.denominaciones=[];
         }
          
          
      }
     });
      


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
    this.clases=filter(this.inputs.clases,(clase)=>{
      return clase['cuenta'] == id;
    })
  }

  changeClase(id){

    this.subClases=filter(this.inputs.subClases,(subClase)=>{
      return subClase['clase'] == id;
    })
  }

  changeSubClase(id){

    this.denominaciones=filter(this.inputs.denominaciones,(denomicacion)=>{
      return denomicacion['sub_clase'] == id;
    })
     console.log(this.denominaciones);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivePage');
  }

}
