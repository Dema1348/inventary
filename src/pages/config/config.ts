import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AlertController } from 'ionic-angular';
import { StatePage } from '../state/state';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

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

  form : FormGroup;
	isLogin:any=false;
  password:any;

  users:any=[];

  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public dataService: DataProvider,public alertCtrl: AlertController) {
 	    this.form = this.formBuilder.group({
        usuario: ['', Validators.required],
        password: ['',Validators.required]
      });

      this.dataService.getUser().then((user) => {
        if(user){
          this.isLogin=true;
          console.log('Is login');
        }
      })

      this.dataService.getUsers().then((users) => {
        console.log(users);
        if(users){
          this.users=JSON.parse(users); 
        }
      })

  }


  // saveUser() {
  //    this.dataService.saveUser(this.form);
  // }

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

          }
        }
      ]
    });
    confirm.present();
  }


  showEstado(){
    let modalActive = this.modalCtrl.create(StatePage);
    modalActive.onDidDismiss((response) => {
    });


    modalActive.present();
  }
 
  login(){
    let password=this.form.value.usuario.rut.replace(/\./g,'');
    password=password.replace(/-/g,'');

    if(this.form.value.password == password){
      this.dataService.saveUser(this.form.value.usuario);
      this.isLogin=true;
    }else{
      this.showError();
    }
   
  }

  showError() {
    let alert = this.alertCtrl.create({
      title: 'Iniciar Sesión',
      subTitle: 'Contraseña Invalida',
      buttons: ['Aceptar']
    });

    alert.present();
  }


  logout(){
    this.dataService.removeUser().then(()=>{
      this.isLogin=false;
    })
  }
  

 

}
