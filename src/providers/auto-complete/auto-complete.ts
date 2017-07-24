import {AutoCompleteService} from 'ionic2-auto-complete';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

/*
  Generated class for the AutoCompleteProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AutoCompleteProvider  implements AutoCompleteService {
 labelAttribute = "nombre";
 representantes=[];

  constructor(public http: Http, public storage: Storage) {
   	this.storage.get('inputs').then((inputs)=>{
   		if(inputs){
   			this.representantes = JSON.parse(inputs).representantes; 
   		}
   	});  
  }



  getResults(keyword:string) {
    return this.representantes.filter(item => item.nombre.toLowerCase().startsWith(keyword.toLowerCase()) )
  }


}
