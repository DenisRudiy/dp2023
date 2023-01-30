import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { CompaniesComponent } from './companies/companies.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';

const appRoute: Routes = [
    {path: '', component: HomePageComponent},
  ]

@NgModule({
    imports: [
      RouterModule.forRoot(appRoute)
    ],
    exports: [
      RouterModule
    ]
  })
  
  export class AppRoutingModule {
     
  }