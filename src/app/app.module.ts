import { FilterWoodworksComponent } from './components/client/filter-woodworks/filter-woodworks.component';


import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientFurnitureComponent } from './components/client/client-furniture/client-furniture.component';
import { ListFurnitureClientComponent } from './components/client/list-furniture-client/list-furniture-client.component';
import { RegisterClientComponent } from './components/client/register-client/register-client.component';
import { RequestComponent } from './components/client/request/request.component';
import { HeaderClientComponent } from './components/core/header-client/header-client.component';
import { HeaderLoginComponent } from './components/core/header-login/header-login.component';
import { HeaderWoodworkComponent } from './components/core/header-woodwork/header-woodwork.component';
import { HomePageComponent } from './components/core/home-page/home-page.component';
import { ClientProfileComponent } from './components/woodwork/client-profile/client-profile.component';
import { RegisterWoodWorkerComponent } from './components/woodwork/register-wood-worker-cnpj/register-wood-worker.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderLoginComponent,
    HeaderClientComponent,
    HeaderWoodworkComponent,
    HomePageComponent,
    ListFurnitureClientComponent,
    ClientFurnitureComponent,
    ClientFurnitureComponent,
    RegisterClientComponent,
    RegisterWoodWorkerComponent,
    RequestComponent,
    ClientProfileComponent,
    FilterWoodworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
