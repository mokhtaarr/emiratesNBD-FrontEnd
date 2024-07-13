import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { CardImagesComponent } from './components/home-Page-component/card-images/card-images.component';
import { HomeComponent } from './components/home-Page-component/home/home.component';
import { SliderComponent } from './components/home-Page-component/slider/slider.component';
import { NavBarComponent } from './components/Shared/nav-bar/nav-bar.component';
import { FirstBannerComponent } from './components/home-Page-component/first-banner/first-banner.component';
import { CardImagesSecondSectionComponent } from './components/home-Page-component/card-images-second-section/card-images-second-section.component';
import { SecondBannerComponent } from './components/home-Page-component/second-banner/second-banner.component';
import { LargeCardImagesComponent } from './components/home-Page-component/large-card-images/large-card-images.component';
import { ThirdBannerComponent } from './components/home-Page-component/third-banner/third-banner.component';
import { HeaderInMiddlePageComponent } from './components/home-Page-component/header-in-middle-page/header-in-middle-page.component';
import { FooterComponent } from './components/Shared/footer/footer.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from "@angular/material/card"
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatPaginatorModule} from "@angular/material/paginator";
import { EmiratesCustomersComponent } from './components/customers/emirates-customers/emirates-customers.component';
import { CutomerDeleteConfirmComponent } from './components/customers/cutomer-delete-confirm/cutomer-delete-confirm.component'
import { LoadingInterceptor } from './components/interceptors/loading.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SliderComponent,
    CardImagesComponent,
    FirstBannerComponent,
    CardImagesSecondSectionComponent,
    SecondBannerComponent,
    LargeCardImagesComponent,
    ThirdBannerComponent,
    HeaderInMiddlePageComponent,
    FooterComponent,
    EmiratesCustomersComponent,
    CutomerDeleteConfirmComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    NgxSpinnerModule,
    MatIconModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton:true,
      disableTimeOut:true,
      progressBar:true,
      
    }),
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
