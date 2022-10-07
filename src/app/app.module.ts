
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderLoginComponent } from './components/header-login/header-login.component';
import { HeaderClientComponent } from './components/header-client/header-client.component';
import { HeaderWoodworkComponent } from './components/header-woodwork/header-woodwork.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ListFurnitureClientComponent } from './components/list-furniture-client/list-furniture-client.component';
import { ClientFurnitureComponent } from './components/client-furniture/client-furniture.component';
import { AddFurnitureComponent } from './components/add-furniture/add-furniture.component';
import { AreaLivingComponent } from './components/area-living/area-living.component';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
import { FilterWoodworksComponent } from './components/filter-woodworks/filter-woodworks.component';
import { FoundWoodWorkComponent } from './components/found-wood-work/found-wood-work.component';



@NgModule({
  declarations: [
    AppComponent,
    AddFurnitureComponent,
    AreaLivingComponent,
    ClientProfileComponent,
    FilterWoodworksComponent,
    FooterComponent,
    FoundWoodWorkComponent,
    HeaderClientComponent,
    HeaderLoginComponent,
    HeaderWoodworkComponent,
    HomePageComponent,
    FooterComponent,
    ListFurnitureClientComponent,
    ClientFurnitureComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
