import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-Page-component/home/home.component';
import { EmiratesCustomersComponent } from './components/customers/emirates-customers/emirates-customers.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Emirates-Customers',component:EmiratesCustomersComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
