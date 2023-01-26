import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { CompaniesComponent } from './companies/companies.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProdTitleComponent } from './prod-title/prod-title.component';
import { ProdContentComponent } from './prod-content/prod-content.component';
import { InfoContentComponent } from './info-content/info-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FeaturedProductComponent,
    CompaniesComponent,
    FooterComponent,
    HomePageComponent,
    InfoPageComponent,
    ProductsPageComponent,
    ProdTitleComponent,
    ProdContentComponent,
    InfoContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
