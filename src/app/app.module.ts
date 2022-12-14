import { FilterWoodworksComponent } from './components/client/filter-woodworks/filter-woodworks.component';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { SearchClientComponent } from './components/woodwork/search-client/search-client.component';
import { SearchRequestComponent } from './components/woodwork/search-request/search-request.component';
import { LivingAreaClientComponent } from './components/client/living-area-client/living-area-client.component';
import { ProfileClientComponent } from './components/client/profile-client/profile-client.component';
import { ProfileClientFullComponent } from './components/client/profile-client-full/profile-client-full.component';
import { ProfileWoodWorkFullComponent } from './components/woodwork/profile-wood-work-full/profile-wood-work-full.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TvRoomComponent } from './components/client/tv-room/tv-room.component';
import { LivingRoomComponent } from './components/client/living-room/living-room.component';
import { DiningRoomComponent } from './components/client/dining-room/dining-room.component';
import { BedroomComponent } from './components/client/bedroom/bedroom.component';




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
    FilterWoodworksComponent,
    SearchClientComponent,
    SearchRequestComponent,
    LivingAreaClientComponent,
    ProfileClientComponent,
    ProfileClientFullComponent,
    ProfileWoodWorkFullComponent,
    ClientFurnitureComponent,
    TvRoomComponent,
    LivingRoomComponent,
    DiningRoomComponent,
    BedroomComponent
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [
      {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientModule,
      multi: true
    }
  
  ],
  bootstrap: [AppComponent]
  

})
export class AppModule { }
