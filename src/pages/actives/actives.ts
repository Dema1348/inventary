import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ActivePage } from '../active/active';
import { DataProvider } from '../../providers/data/data';
import { AlertController } from 'ionic-angular';
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

  items:any;
  searchTerm: string ='';
  searching = false;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public dataService: DataProvider,public alertCtrl: AlertController) {
  
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



}
