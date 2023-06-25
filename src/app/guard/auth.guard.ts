import { CanActivateFn } from '@angular/router'; 
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { keyStore } from '../shared/outils/key_store';


export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);

  if (localStorage.getItem(keyStore.auth)) {
    return true;
  } else {
    authService.isLoggIn();
    return false;
  } 
};
