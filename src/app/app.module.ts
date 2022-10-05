import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderLoginComponent } from './components/header-login/header-login.component';
import { HeaderClientComponent } from './components/header-client/header-client.component';
import { HeaderWoodworkComponent } from './components/header-woodwork/header-woodwork.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderLoginComponent,
    HeaderClientComponent,
    HeaderWoodworkComponent,
    HomePageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
