import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'

//    Components Imports
import { HeaderComponent } from './components/screen/view/Global/header/header.component'
import { FooterComponent } from './components/screen/view/Global/footer/footer.component'
import { MainComponent } from './components/screen/view/Global/main/main.component'
import { ShoppingCartComponent } from './components/screen/view/Small/shopping-cart/shopping-cart.component'
import { GitHubComponent } from './components/screen/view/Global/git-hub/git-hub.component'
import { ViewComponent } from './components/screen/view/view.component'

//    PrimeNG UI Library Imports
import { GalleriaModule } from 'primeng/galleria'
import { PhotoService } from './services/photo-service.service'
import { AnimateModule } from 'primeng/animate'
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'
import { ShopComponent } from './components/screen/view/Global/shop/shop.component'
import { DataViewModule } from 'primeng/dataview'
import { DropdownModule } from 'primeng/dropdown'
import { RatingModule } from 'primeng/rating'
import { SpeedDialModule } from 'primeng/speeddial'
import { ListComponent } from './components/screen/view/Global/list/list.component'
import { OrderListModule } from 'primeng/orderlist'
import { ScreenComponent } from './components/screen/screen.component'
import { SliderModule } from 'primeng/slider'
import { MessagesModule } from 'primeng/messages'
import { MessageModule } from 'primeng/message'
import { EditFormComponent } from './components/screen/view/Small/edit-form/edit-form.component'
import { SidebarModule } from 'primeng/sidebar'
import { InputTextModule } from 'primeng/inputtext'
import { CheckboxModule } from 'primeng/checkbox'
import { RadioButtonModule } from 'primeng/radiobutton'
import { RippleModule } from 'primeng/ripple'
import { FileUploadModule } from 'primeng/fileupload'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ShoppingCartComponent,
    ShopComponent,
    GitHubComponent,
    ListComponent,
    ViewComponent,
    ScreenComponent,
    EditFormComponent
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
    SpeedDialModule,
    OrderListModule,
    SliderModule,
    MessagesModule,
    MessageModule,
    SidebarModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    RippleModule,
    FileUploadModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
