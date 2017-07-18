import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ActivesPage } from '../pages/actives/actives';
import { ActivePage } from '../pages/active/active';
import { TabsPage } from '../pages/tabs/tabs';
import { ConfigPage } from '../pages/config/config';
import { FindPage } from '../pages/find/find';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';


import { DataProvider } from '../providers/data/data';
import { ScannerProvider } from '../providers/scanner/scanner';
import { CameraProvider } from '../providers/camera/camera';
import { SearchPipe } from '../pipes/search/search';
import { CloudProvider } from '../providers/cloud/cloud';


@NgModule({
  declarations: [
    MyApp,
    ActivesPage,
    ActivePage,
    TabsPage,
    ConfigPage,
    FindPage,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActivesPage,
    ActivePage,
    TabsPage,
    ConfigPage,
    FindPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    ScannerProvider,
    CameraProvider,
    CloudProvider
  ]
})
export class AppModule {}
