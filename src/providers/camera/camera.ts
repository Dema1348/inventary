import { Injectable } from '@angular/core';
import { Camera } from '@ionic-native/camera';


/*
  Generated class for the CameraProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CameraProvider {


  constructor(private camera: Camera) {
    console.log('Hello CameraProvider Provider');
  }


  take(){
  	return this.camera.getPicture({
	  quality: 80,
	  destinationType: this.camera.DestinationType.DATA_URL,
	  encodingType: this.camera.EncodingType.JPEG,
	  mediaType: this.camera.MediaType.PICTURE
	});
  }

}
