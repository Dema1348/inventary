import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


/*
  Generated class for the CloudProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CloudProvider {
  private apiUrl = 'http://ec2-52-32-242-51.us-west-2.compute.amazonaws.com:10010/v1';

  constructor(public http: Http) {
  }

  findById(id) {
    return this.http.get(this.apiUrl+'/asset/'+id)
        .map(res => res.json())
        .toPromise();
  }



  download() {
    return this.http.get(this.apiUrl+'/download')
        .map(res => res.json())
        .toPromise();
  }

  users() {
    return this.http.get(this.apiUrl+'/users')
        .map(res => res.json())
        .toPromise();
  }


  upload(data) {
    return this.http.post(this.apiUrl+'/upload', data)
        .map(res => res.json())
        .toPromise();
  }

}
