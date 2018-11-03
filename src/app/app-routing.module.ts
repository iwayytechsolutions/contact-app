import { ServicesComponent } from './about/services/services.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';
import { CompanyComponent } from './about/company/company.component';
import { ProductsComponent } from './about/products/products.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : '', redirectTo : "/home", pathMatch : "full"},
  {path : 'home', component : HomeComponent},
  {path : 'contacts', component : ContactListComponent},
  {
    path : 'about', 
    component : AboutComponent,
    children : [
      {path : '', redirectTo : "about/comapny", pathMatch : "full"},
      {path : 'company', component : CompanyComponent},
      {path : 'products', component : ProductsComponent},
      {path : 'services', component : ServicesComponent},
    ]
  },
  {
    path : 'contacts-view', 
    component : ContactViewComponent,
    children : [
     
      {path : 'personal/:id', component : PersonalDetailsComponent},
      {path : 'professional', component : ProfessionalDetailsComponent}
    ]
  },
  {path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ContactListComponent, ContactViewComponent, HomeComponent, AboutComponent, PageNotFoundComponent,  PersonalDetailsComponent, ProfessionalDetailsComponent, CompanyComponent, ProductsComponent, ServicesComponent];
