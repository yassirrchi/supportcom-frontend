import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './src/components/nav/nav.component';
import { LayoutComponent } from './src/components/layout/layout.component';
import { TicketsComponent } from './src/pages/tickets/tickets.component';
import { DevelopersComponent } from './src/pages/developers/developers.component';
import { StoresComponent } from './src/pages/stores/stores.component';
import { StoreComponent } from './src/pages/store/store.component';
import { GridComponent } from './src/components/grid/grid.component';
import { ListComponent } from './src/components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LayoutComponent,
    TicketsComponent,
    DevelopersComponent,
    StoresComponent,
    StoreComponent,
    GridComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
