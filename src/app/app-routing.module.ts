import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFurnitureComponent } from './components/client/client-furniture/client-furniture.component';
import { FilterWoodworksComponent } from './components/client/filter-woodworks/filter-woodworks.component';
import { FoundWoodWorkComponent } from './components/client/found-wood-work/found-wood-work.component';
import { ListFurnitureClientComponent } from './components/client/list-furniture-client/list-furniture-client.component';
import { LivingAreaClientComponent } from './components/client/living-area-client/living-area-client.component';
import { ProfileClientFullComponent } from './components/client/profile-client-full/profile-client-full.component';
import { ProfileClientComponent } from './components/client/profile-client/profile-client.component';
import { RegisterClientAdressComponent } from './components/client/register-client-adress/register-client-adress.component';
import { RegisterClientContactComponent } from './components/client/register-client-contact/register-client-contact.component';
import { RegisterClientPasswordComponent } from './components/client/register-client-password/register-client-password.component';
import { RegisterClientComponent } from './components/client/register-client/register-client.component';
import { RequestComponent } from './components/client/request/request.component';
import { HomePageComponent } from './components/core/home-page/home-page.component';
import { ClientProfileComponent } from './components/woodwork/client-profile/client-profile.component';
import { ListClientsComponent } from './components/woodwork/list-clients/list-clients.component';
import { ListRequestComponent } from './components/woodwork/list-request/list-request.component';
import { ProfileWoodWorkComponent } from './components/woodwork/profile-wood-work/profile-wood-work.component';
import { RegisterWoodWorkerComponent } from './components/woodwork/register-wood-worker-cnpj/register-wood-worker.component';
import { SearchClientComponent } from './components/woodwork/search-client/search-client.component';
import { SearchRequestComponent } from './components/woodwork/search-request/search-request.component';


const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'clientFurniture', component: ClientFurnitureComponent},
  {path:'clientProfile', component: ClientProfileComponent},
  {path:'filterWoodworks', component: FilterWoodworksComponent},
  {path:'foundWoodwork', component: FoundWoodWorkComponent},
  {path:'listClients', component: ListClientsComponent},
  {path:'listFurnitureClient', component: ListFurnitureClientComponent},
  {path:'listRequest', component: ListRequestComponent},
  {path:'livingAreaClient', component: LivingAreaClientComponent},
  {path:'profileClient', component: ProfileClientComponent},
  {path:'profileClientFull', component: ProfileClientFullComponent},
  {path:'profileWoodwork', component: ProfileWoodWorkComponent},
  {path:'registerClient', component: RegisterClientComponent},
  {path:'registerClientAdress', component: RegisterClientAdressComponent},
  {path:'registerClientContact', component: RegisterClientContactComponent},
  {path:'registerClientPassword', component: RegisterClientPasswordComponent},
  {path:'registerWoodworker', component: RegisterWoodWorkerComponent},
  {path:'registerWoodworkContact', component: RegisterWoodWorkerComponent },
  {path:'registerWoodworkPassword', component: RegisterWoodWorkerComponent },
  {path:'registerWoodworkAddress', component: RegisterWoodWorkerComponent },
  {path:'request', component: RequestComponent},
  {path:'searchClient', component: SearchClientComponent},
  {path:'searchRequest', component: SearchRequestComponent},

  
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
