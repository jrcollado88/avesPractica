import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { ListadoAvesPage } from '../pages/listado-aves/listado-aves';
import { DetalleAvePage } from '../pages/detalle-ave/detalle-ave';
import { AnyadirAvePage } from '../pages/anyadir-ave/anyadir-ave';
import { AddAvistamientoPage } from '../pages/add-avistamiento/add-avistamiento';


import { UserProvider } from '../providers/user/user';
import { AvesProvider } from '../providers/aves/aves';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    ListadoAvesPage,
    DetalleAvePage,
    AnyadirAvePage,
    AddAvistamientoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    ListadoAvesPage,
    DetalleAvePage,
    AnyadirAvePage,
    AddAvistamientoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    AvesProvider
  ]
})
export class AppModule {}
