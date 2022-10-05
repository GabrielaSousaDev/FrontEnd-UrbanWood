import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFurnitureComponent } from './components/add-furniture/add-furniture.component';
import { AreaLivingComponent } from './components/area-living/area-living.component';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
import { FilterWoodworksComponent } from './components/filter-woodworks/filter-woodworks.component';
import { FoundWoodWorkComponent } from './components/found-wood-work/found-wood-work.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { ListRequestComponent } from './components/list-request/list-request.component';
import { ProfileClientComponent } from './components/profile-client/profile-client.component';
import { ProfileWoodWorkComponent } from './components/profile-wood-work/profile-wood-work.component';
import { RegisterClientComponent } from './components/register-client/register-client.component';
import { RegisterWoodWorkerComponent } from './components/register-wood-worker-cnpj/register-wood-worker.component';
import { RequestComponent } from './components/request/request.component';
import { SearchClientComponent } from './components/search-client/search-client.component';
import { SearchRequestComponent } from './components/search-request/search-request.component';
import { SearchSpecificWoodWorkComponent } from './components/search-specific-wood-work/search-specific-wood-work.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'addFurniture', component: AddFurnitureComponent},
  {path:'areaLiving', component: AreaLivingComponent},
  {path:'clientProfile', component: ClientProfileComponent},
  {path:'filterWoodworks', component: FilterWoodworksComponent},
  {path:'foundWoodwork', component: FoundWoodWorkComponent},
  {path:'listClient', component: ListClientsComponent},
  {path:'listRequest', component: ListRequestComponent},
  {path:'profileClient', component: ProfileClientComponent},
  {path:'profileWoodwork', component: ProfileWoodWorkComponent},
  {path:'registerClient', component: RegisterClientComponent},
  {path:'registerWoodwork', component: RegisterWoodWorkerComponent},
  {path:'request', component: RequestComponent},
  {path:'searchClient', component: SearchClientComponent},
  {path:'searchRequest', component: SearchRequestComponent},
  {path:'searchWoodwork', component: SearchSpecificWoodWorkComponent},
  
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
