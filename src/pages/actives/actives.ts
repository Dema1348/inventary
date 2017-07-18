import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ActivePage } from '../active/active';
import { DataProvider } from '../../providers/data/data';
import { AlertController } from 'ionic-angular';

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

  public items = [];
  public searchTerm="";
  // public searching = false;

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
          console.log(index);
            this.items.splice(index, 1);
            console.log(this.items);
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

   parseData(items){

    for (var i = 0; i < items.length; ++i) {
      var data={
        id_activo: items[i].cuenta.id,
        descripcion: items[i].descripcion,
        id_cuenta: items[i].cuenta.id,
        cuenta: items[i].cuenta.cuenta,
        id_clase: items[i].clase.id,
        clase:  items[i].clase.clase,
        id_sub_clase: items[i].sub_clase.id,
        sub_clase: items[i].sub_clase.sub_clase,
        id_denominacion: items[i].denominacion.id,
        denominacion: items[i].denominacion.denominacion,
        id_dependencia: items[i].dependencia.id,
        dependencia: items[i].dependencia.dependencia,
        // id_usuario: 1,
        // usuario: Carlos Bustamante,
        // id_responsable: 1,
        // nombre_responsable: Carlos Bustamante,
        id_estado: items[i].estado.id,
        estado: items[i].estado.estado,
        codigo_de_barras: items[i].codigo_de_barras,
        // date_time: 2017-07-18T00:33:47.000Z,
        // fecha_de_adquisicion: null,
        // tipo: null,
        // nombre_del_proveedor: null,
        // costo_de_aquisicion: null,
        // ubicacion: null,
        imagen: items[i].imagen
      }
    }

    
  }

  // filterItems(searchTerm){
  //       return this.items.filter((item) => {
  //           return item.codigo.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  //       });     
 
  // }

  // onSearchInput(){
  //       this.searching = true;
  // }

  // setFilteredItems(){
  //    this.items = this.filterItems(this.searchTerm);
  //    this.searching = false;
  // }



}
