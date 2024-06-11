import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)
  if (authService.isAuth()){
    return true;
  }else {
    router.navigateByUrl('/Login')
    return false;
  }
};