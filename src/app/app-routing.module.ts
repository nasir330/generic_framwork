import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/authentication/register/register.component';
import { UserListComponent } from './components/authentication/user-list/user-list.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './Seller/registration/registration.component';
import { Steper1Component } from './Seller/steper1/steper1.component';


  const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    //{ path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'users', component: UserListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    {path: 'seller/register', component: RegistrationComponent},
    {path: 'seller/business-information', component: Steper1Component},  
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to the login page if the URL is empty
    { path: '**', redirectTo: 'login', pathMatch: 'full' }, // Redirect to the login page for any other unknown URLs
    // Add more routes as needed...
  ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
