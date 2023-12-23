import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/localStorage.service';

export const authGuard = () => {
  const router = inject(Router);
  const localStorage = inject(LocalStorageService);

  if(localStorage.getItem('token')) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
}
