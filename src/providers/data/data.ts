import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {

  
  constructor(public storage: Storage){
 
  }
 
  getData() {
    return this.storage.get('actives');  
  }

  save(data){
    let newData = JSON.stringify(data);
    this.storage.set('actives', newData);
  }

  getInputs() {
    return this.storage.get('inputs');  
  }

  saveInputs(data) {
    let newData = JSON.stringify(data);
    this.storage.set('inputs', newData);
  }

  getUser() {
    return this.storage.get('user');  
  }

  saveUser(data) {
    let newData = JSON.stringify(data);
    this.storage.set('user', newData);
  }

  getUsers(){
    return this.storage.get('users');  
  }

  saveUsers(data){
    let newData = JSON.stringify(data);
    this.storage.set('users',newData);  
  }  

  removeUser(){
    return this.storage.remove('user');
  }

  saveLastUpdate(data){
    let newData = JSON.stringify(data);
    this.storage.set('lastUdpate', newData);
  }

  getLastUpdate(){
    return this.storage.get('lastUdpate');  
  }
 
  

  
}
