import { ContactViewComponent } from './contact-view/contact-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : '', redirectTo : "/home", pathMatch : "full"},
  {path : 'home', component : HomeComponent},
  {path : 'contacts', component : ContactListComponent},
  {path : 'about', component : AboutComponent},
  {
    path : 'contacts/:id', 
    component : ContactViewComponent,
    children : [
     
      {path : 'personal/:id', component : PersonalDetailsComponent},
      {path : 'professonal', component : ProfessionalDetailsComponent}
    ]
  },
  {path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ContactListComponent, ContactViewComponent, HomeComponent, AboutComponent, PageNotFoundComponent,  PersonalDetailsComponent, ProfessionalDetailsComponent];
