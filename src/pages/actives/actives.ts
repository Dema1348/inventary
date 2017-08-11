import { Component } from '@angular/core';
import { LoadingController, NavController, ModalController } from 'ionic-angular';
import { ActivePage } from '../active/active';
import { DataProvider } from '../../providers/data/data';
import { AlertController } from 'ionic-angular';
import moment from 'moment';
import { cloneDeep } from 'lodash-es';
import { CloudProvider } from '../../providers/cloud/cloud';
import { filter } from 'lodash-es';

/**
 * Generated class for the ActivesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-actives',
  templateUrl: 'actives.html',
})
export class ActivesPage {

  items:any=[];
  searchTerm: string ='';
  searching = false;
  user:any;
  loading:any;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public dataService: DataProvider,public alertCtrl: AlertController,public cloudService: CloudProvider,public loadingCtrl: LoadingController) {
  
  this.dataService.getData().then((actives) => {
      if(actives){
        this.items = JSON.parse(actives); 
      }
 
    });

  }



  addActive(){
    let modalActive = this.modalCtrl.create(ActivePage);
    modalActive.onDidDismiss((response) => {
       console.log("add active");
          if(response){
            this.saveItem(response);
          }
 
    });
 
    modalActive.present();
  }
  
  deleteActive(item){
    var index = this.items.indexOf(item, 0);
        if (index > -1) {
            this.items.splice(index, 1);
            this.dataService.save(this.items);
        }
  }

  editActive(item){
    let itemCopy = Object.assign({}, item)
    let editModalActive = this.modalCtrl.create(ActivePage,{item:itemCopy});
    editModalActive.onDidDismiss((response) => {
          console.log("edit active");

          if(response){
             Object.assign(item, response);
             this.dataService.save(this.items);

          }
 
    });
 
    editModalActive.present();
  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);

  }

  sync(){
    let actives=cloneDeep(this.items);
    this.dataService.getUser().then((user) => {
        if(user){
          this.loader();
          this.user = JSON.parse(user); 
          actives= actives.map((active)=>{
            active.id_usuario=this.user.id_web;
            active.date_time= moment(active.date_time).format('DD/MM/YYYY hh:mm:ss');
            return active;
          })
          console.log(actives);
          this.cloudService.upload(actives).then((data)=>{
            this.loading.dismiss();
            this.updateList(data);
          }).catch((error)=>{
            this.loading.dismiss();
            this.showInfo("No es posible sincronizar los activos, intentelo mas tarde");
          })
        }else{
          this.showInfo("No es posible sincronizar los activos si aún no ha iniciado sesión");
        }
      })

  }

  updateList(data){
    let statusOk=[];
    let statusError=[];
    let assets=data.assets;
    statusOk= filter(assets,(asset)=>{
      return asset['status'] == true;
    });

    statusError= filter(assets,(asset)=>{
      return asset['status'] == false;
    });
    console.log("Error",statusError);
    console.log("Ok",statusOk);
    let text="";
    if(!statusOk.length){
      text="No se ha logrado sincronizar ningun activo.";
    }
   
    else{
        text=statusOk.length>1?"Se han sincronizado "+statusOk.length+" activos.":"Se ha sincronizado "+statusOk.length+" activo.";
    }

     if(statusError.length){
      text+="<br>Activos no sincronizados: <br>";
      for (var i = 0; i < statusError.length; ++i) {
        text+="&bull; Código de Barras Nº"+statusError[i].codigo_de_barras+"<br>";
      }
    }

    console.log(assets);
    //clean items
    this.items=this.items.map((item)=>{
      for (var s = 0; s < assets.length; ++s) {
          if(assets[s].codigo_de_barras == item.codigo_de_barras){
             if(!assets[s]['status'])
              item.error=true; 
            else
               item.error=false; 

          }
      }
      return item;
    }).filter((item)=> {
        return item.error; 
    })
    this.dataService.save(this.items);

   
    this.showInfo(text);


  }

 


  showInfo(text) {
    let alert = this.alertCtrl.create({
      title: 'Sincronizar',
      subTitle: text,
      buttons: ['Cancelar']
    });

    alert.present();
  }

   showConfirm(item) {
    let confirm = this.alertCtrl.create({
      title: 'Eliminar Activo',
      message: '¿Estás seguro que deseas eliminar el Activo?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {

          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.deleteActive(item);
          }
        }
      ]
    });
    confirm.present();
  }

   loader() {
    this.loading = this.loadingCtrl.create({
      content: 'Sincronizando datos...'
    });

    this.loading.present();

  }



}
