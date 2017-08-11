import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ScannerProvider } from '../../providers/scanner/scanner';
import { DataProvider } from '../../providers/data/data';
import { CameraProvider } from '../../providers/camera/camera';
import { filter } from 'lodash-es';
import { AutoCompleteProvider } from '../../providers/auto-complete/auto-complete';
import { AutoCompleteMarcaProvider } from '../../providers/auto-complete/auto-complete-marca';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

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
  form : FormGroup;

  // form:any= {
  //   date_time: new Date()
  // }   
  inputs:any;
  cuentas=[];
  clases=[];
  subClases=[];
  denominaciones=[];
  dependencias=[];
  usuarios=[];
  representantes=[];
  departamentos=[];
  subdepartamentos=[];
  estados=[];
  marcas=[];
  img:any='';
   
  

  constructor(private formBuilder: FormBuilder, public navCtrl: NavController,public params: NavParams, public view: ViewController,  public scannerService: ScannerProvider, public cameraService: CameraProvider,public dataService: DataProvider, public autoComplete: AutoCompleteProvider,  public autoMarcaComplete: AutoCompleteMarcaProvider ) {
    this.form = this.formBuilder.group({
        id_cuenta: ['', Validators.required],
        id_clase: ['',Validators.required],
        id_sub_clase: ['',Validators.required],
        id_denominacion: ['',Validators.required],
        id_dependencia: ['',Validators.required],
        id_responsable: ['',Validators.required],
        id_marca: ['',Validators.required],
        descripcion: [''],
        n_serie:[''],
        modelo:['',Validators.required],
        observaciones:[''],
        departamento:['',Validators.required],
        sub_departamento:['',Validators.required],
        date_time:[new Date()],
        codigo_de_barras: ['',Validators.required],
        id_estado: ['',Validators.required],
        imagen: [''],
        imagenMin:[''],
        error: [false]
     });

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
        this.marcas=this.inputs.marcas;
        this.departamentos=this.inputs.departamentos;
        this.subdepartamentos=this.inputs.subDepartamentos;
         if(params.get('item')){
           let editData=params.get('item');
            this.changeCuenta(editData.id_cuenta);
            this.changeClase(editData.id_clase);
            this.changeSubClase(editData.id_sub_clase);
            this.changeDepartamento(editData.id_departamento);
            this.form.controls['id_cuenta'].setValue(editData.id_cuenta);
            this.form.controls['id_clase'].setValue(editData.id_clase);
            this.form.controls['id_sub_clase'].setValue(editData.id_sub_clase);
            this.form.controls['id_denominacion'].setValue(editData.id_denominacion);
            this.form.controls['id_dependencia'].setValue(editData.id_dependencia);
            this.form.controls['descripcion'].setValue(editData.descripcion);
            this.form.controls['date_time'].setValue(editData.date_time);
            this.form.controls['id_estado'].setValue(editData.id_estado);
            this.form.controls['codigo_de_barras'].setValue(editData.codigo_de_barras);
            this.form.controls['id_responsable'].setValue(editData.id_responsable);
            this.form.controls['id_marca'].setValue(editData.id_marca);
            this.form.controls['n_serie'].setValue(editData.n_serie);
            this.form.controls['modelo'].setValue(editData.modelo);
            this.form.controls['departamento'].setValue(editData.departamento);
            this.form.controls['sub_departamento'].setValue(editData.sub_departamento);
            this.form.controls['observaciones'].setValue(editData.observaciones);
            if(editData.imagen){
              this.form.controls['imagen'].setValue(editData.imagen);
              this.form.controls['imagenMin'].setValue(editData.imagenMin);
              this.img=editData.imagen;
            }

         }else{
           this.clases=[];
           this.subClases=[];
           this.denominaciones=[];
         }
          
          
      }
     });
      


  }

  getThumbnail (url, callback){

         var canvas: any = document.createElement('CANVAS'),
             ctx = canvas.getContext('2d'),
             img = new Image();

         img.crossOrigin = 'Anonymous';

         img.onload = function(){
             var dataURL;
             canvas.height = 64;
             canvas.width = 64;

             ctx = canvas.getContext('2d');

             ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

             dataURL = canvas.toDataURL("image/jpeg");
             callback(dataURL);
             canvas = null; 
         };
         img.src = url;
  };

  scanCode(){
    this.scannerService.scan().then((barcodeData) => {
        if(barcodeData.text)
              this.form.controls['codigo_de_barras'].setValue(barcodeData.text);
  	}).catch((error) => {

  	})

  }

  saveActive(){
    console.log(this.form.value);
    this.view.dismiss(this.form.value);
  }

  close(){
     this.view.dismiss();
  }
  
  addPhoto(){
    this.cameraService.take().then((imageData)=>{
        let photo='data:image/jpeg;base64,' + imageData;
        this.getThumbnail(photo,(thumbnail)=>{
            this.form.controls['imagenMin'].setValue(thumbnail);
            this.form.controls['imagen'].setValue(photo);
            this.img=photo;
        });
     }).catch((error) => {

    })

  }


  changeCuenta(id){
    if(!id)
      return;

    this.clases=filter(this.inputs.clases,(clase)=>{
      return clase['cuenta'] == id;
    })
  }

  changeClase(id){
    if(!id)
      return;
    this.subClases=filter(this.inputs.subClases,(subClase)=>{
      return subClase['clase'] == id;
    })
  }

  changeSubClase(id){
    if(!id)
      return;
    this.denominaciones=filter(this.inputs.denominaciones,(denomicacion)=>{
      return denomicacion['sub_clase'] == id;
    })
    
  }

  changeDepartamento(id){
    if(!id)
      return;
    this.subdepartamentos=filter(this.inputs.subDepartamentos,(subdepartamento)=>{
      return subdepartamento['departamento'] == id;
    })
    
  }

  getResponsable(responsable){
    this.form.controls['id_responsable'].setValue(responsable.id);
  }

  getMarca(marca){
    this.form.controls['id_marca'].setValue(marca.id);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivePage');
  }

}
