import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CakeRequestsComponent } from './cake-requests/cake-requests.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CakeCartComponent } from './cake-cart/cake-cart.component';
import { canDeactivateGuard } from './can-deactivate.guard';
import { authGuard } from './services/auth.guard';


export const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"cake-cart/:id", component:CakeCartComponent, canDeactivate:[canDeactivateGuard]},
  {path:"cake-requests", component:CakeRequestsComponent, canActivate:[authGuard]},
  {path:"", component:HomeComponent},
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
