import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'

//    Components Imports
import { HeaderComponent } from './components/Global/header/header.component'
import { FooterComponent } from './components/Global/footer/footer.component'
import { MainComponent } from './components/Global/main/main.component'
import { ShoppingCartComponent } from './components/Small/shopping-cart/shopping-cart.component'

//    PrimeNG UI Library Imports
import { GalleriaModule } from 'primeng/galleria'
import { PhotoService } from './services/photo-service.service'
import { AnimateModule } from 'primeng/animate'
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'
import { ShopComponent } from './components/Global/shop/shop.component'
import { DataViewModule } from 'primeng/dataview'
import { DropdownModule } from 'primeng/dropdown'
import { RatingModule } from 'primeng/rating'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ShoppingCartComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleriaModule,
    HttpClientModule,
    AnimateModule,
    ButtonModule,
    DialogModule,
    DataViewModule,
    DropdownModule,
    RatingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
