import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomePageComponent } from './home-page/home-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { InfoPageComponent } from './info-page/info-page.component';

const appRoute: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'products', component: ProductsPageComponent},
    {path: 'info', component: InfoPageComponent},
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