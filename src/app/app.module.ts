import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddFurnitureComponent } from "./components/add-furniture/add-furniture.component";
import { AreaLivingComponent } from "./components/area-living/area-living.component";
import { ClientProfileComponent } from "./components/client-profile/client-profile.component";
import { FilterWoodworksComponent } from "./components/filter-woodworks/filter-woodworks.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FoundWoodWorkComponent } from "./components/found-wood-work/found-wood-work.component";
import { HeaderClientComponent } from "./components/header-client/header-client.component";
import { HeaderLoginComponent } from "./components/header-login/header-login.component";
import { HeaderWoodworkComponent } from "./components/header-woodwork/header-woodwork.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { ListClientsComponent } from "./components/list-clients/list-clients.component";
import { ListRequestComponent } from "./components/list-request/list-request.component";
import { ProfileClientFullComponent } from "./components/profile-client-full/profile-client-full.component";
import { ProfileClientComponent } from "./components/profile-client/profile-client.component";
import { ProfileWoodWorkFullComponent } from "./components/profile-wood-work-full/profile-wood-work-full.component";
import { RegisterClientAdressComponent } from "./components/register-client-adress/register-client-adress.component";
import { RegisterClientComponent } from "./components/register-client/register-client.component";
import { RequestComponent } from "./components/request/request.component";
import { SearchClientComponent } from "./components/search-client/search-client.component";
import { SearchRequestComponent } from "./components/search-request/search-request.component";
import { SearchSpecificWoodWorkComponent } from "./components/search-specific-wood-work/search-specific-wood-work.component";




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
    ListClientsComponent,
    ListRequestComponent,
    ProfileClientComponent,
    ProfileClientFullComponent,
    ProfileWoodWorkFullComponent,
    RegisterClientAdressComponent,
    RegisterClientComponent,
    RequestComponent,
    SearchRequestComponent,
    ServiceWorkerContainer,
    SearchSpecificWoodWorkComponent,
    SearchClientComponent,
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
