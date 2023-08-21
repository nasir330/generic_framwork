import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/authentication/user-list/user-list.component';

import { MatTableModule } from '@angular/material/table'; // Import MatTableModule
import { MatSortModule } from '@angular/material/sort'; // Import MatSortModule
import { MatIconModule  } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './components/authentication/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './Seller/registration/registration.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatStepperModule} from '@angular/material/stepper';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDividerModule} from '@angular/material/divider';
import { BusinessInformationComponent } from './Seller/business-information/business-information.component';
import {MatSelectModule} from '@angular/material/select';
import { Steper1Component } from './Seller/steper1/steper1.component';
import { Steper2Component } from './Seller/steper2/steper2.component';
import { Steper3Component } from './Seller/steper3/steper3.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserListComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    RegistrationComponent,
    BusinessInformationComponent,
    Steper1Component,
    Steper2Component,
    Steper3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatGridListModule,
    MatMenuModule,
    MatStepperModule,
    MatBadgeModule,
    MatDividerModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatListModule
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
