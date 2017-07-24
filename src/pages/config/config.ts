import { Component } from '@angular/core';
import { NavController, NavParams , LoadingController} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CloudProvider } from '../../providers/cloud/cloud';
import moment from 'moment';



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
  username:string='';
  users:any=[];
  lastUpdate:any;
  loading:any;


  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider,public alertCtrl: AlertController, public loadingCtrl: LoadingController,public cloudService: CloudProvider) {
 	    this.form = this.formBuilder.group({
        usuario: ['', Validators.required],
        password: ['',Validators.required]
      });

      this.dataService.getUser().then((user) => {
        if(user){
          this.username = JSON.parse(user).username; 
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


   loader() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando datos...'
    });

    this.loading.present();

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

          }
        }
      ]
    });
    confirm.present();
  }

 
  login(){
    let password=this.form.value.usuario.rut.replace(/\./g,'');
    password=password.replace(/-/g,'');

    if(this.form.value.password == password){
      this.dataService.saveUser(this.form.value.usuario);
      this.username=this.form.value.usuario.username;
      this.isLogin=true;
    }else{
      this.showError("Iniciar Sesión","Contraseña Invalida");
    }
   
  }

  showError(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: ['Cancelar']
    });

    alert.present();
  }


  logout(){
    this.dataService.removeUser().then(()=>{
      this.isLogin=false;
      this.username='';
    })
  }


  showState() {

  this.dataService.getLastUpdate().then((lastUpdate) => {
      if(lastUpdate){
        this.lastUpdate = "La última actualización fue el día "+moment(lastUpdate).format('DD/MM/YYYY')+" a las "+moment(lastUpdate).format('hh:mm:ss'); 
      }else{
        this.lastUpdate = "Nunca ha actualizado su aplicación";
      }

      let alert = this.alertCtrl.create({
        title: 'Estado',
        message: this.lastUpdate,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Actualizar',
            handler: () => {
              this.update();
            }
          }
        ]
      });


      alert.present();
 
  });  
  
}

update(){
  this.loader();
        Promise.all([this.cloudService.download(),this.cloudService.users()]).then((data)=>{
           this.dataService.saveInputs(data[0]);
           this.dataService.saveUsers(data[1]);
           this.dataService.saveLastUpdate(new Date());
           setTimeout(()=>{
              window.location.reload();
           },2000) 
          
        }).catch((error)=>{
             this.loading.dismiss();
             this.showError("Actualizando información","No es posible obtener la información necesaria para iniciar correctamente la aplicación");
          })

  }


  

 

}
