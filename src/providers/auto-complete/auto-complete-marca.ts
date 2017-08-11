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
export class AutoCompleteMarcaProvider  implements AutoCompleteService {
 labelAttribute = "marca";
 marcas=[];

  constructor(public http: Http, public storage: Storage) {
   	this.storage.get('inputs').then((inputs)=>{
   		if(inputs){
   			this.marcas = JSON.parse(inputs).marcas; 
   		}
   	});  
  }



  getResults(keyword:string) {
    return this.marcas.filter(item => item.marca.toLowerCase().startsWith(keyword.toLowerCase()) )
  }


}
