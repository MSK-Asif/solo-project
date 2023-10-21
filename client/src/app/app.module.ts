import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { ShopSelectedComponent } from './pages/shop-selected/shop-selected.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { BookingComponent } from './pages/booking/booking.component';
import { FormsModule } from '@angular/forms';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { HeaderComponent } from './components/header/header.component';
import { AllServicesComponent } from './components/all-services/all-services.component';
import { SelectedServicesComponent } from './components/selected-services/selected-services.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RecommendedComponent,
    HomeComponent,
    LoginComponent,
    SearchResultComponent,
    ShopSelectedComponent,
    FooterComponent,
    UserRegistrationComponent,
    BookingComponent,
    ShopCartComponent,
    HeaderComponent,
    AllServicesComponent,
    SelectedServicesComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
