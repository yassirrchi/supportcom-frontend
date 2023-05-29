import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './src/pages/tickets/tickets.component';
import { AppComponent } from './app.component';
import { DevelopersComponent } from './src/pages/developers/developers.component';
import { StoresComponent } from './src/pages/stores/stores.component';

const routes: Routes = [ 
  {path:"",component:TicketsComponent},
  {path:"tickets",component:TicketsComponent},
  {path:"developers",component:DevelopersComponent},
  {path:"stores",component:StoresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
