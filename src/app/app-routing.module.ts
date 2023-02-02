import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'#', component:HeaderComponent},
  {path:'Login', component:LoginComponent},
  {path:'Customer', component:CustomerComponent}
  // {path:'AddCustomer',component:CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
