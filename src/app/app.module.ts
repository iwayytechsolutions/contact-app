import { ContactService } from './services/contact.service';
import { CardComponent } from './card/card.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VerticalNavBarComponent } from './vertical-nav-bar/vertical-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    NavBarComponent,
    CardComponent,
    VerticalNavBarComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
