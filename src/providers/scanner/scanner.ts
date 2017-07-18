import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


/*
  Generated class for the ScannerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ScannerProvider {

  constructor(private barcodeScanner: BarcodeScanner) {
  }

  scan(){
    return this.barcodeScanner.scan()
  }

}
