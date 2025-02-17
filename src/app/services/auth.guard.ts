import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { RouteService } from './route.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth:AuthService = inject(AuthService);
  const router:RouteService = inject(RouteService);
  if(auth.isLoggedIn){
    return true;  
  }else{
    router.navigateToLoginView();
    return false;
  }
};

