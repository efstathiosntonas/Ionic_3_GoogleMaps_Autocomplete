import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AgmCoreModule} from '@agm/core';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AutocompleteModalPage} from '../pages/autocomplete-modal/autocomplete-modal';
import {Keyboard} from '@ionic-native/keyboard';
import {PrettyJsonModule} from 'angular2-prettyjson';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AutocompleteModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey   : 'YOUR_GOOGLE_API_****PLACES****_KEY',
      libraries: ['places']
    }),
    PrettyJsonModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AutocompleteModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
