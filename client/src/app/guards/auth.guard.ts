import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
}
)
export class AuthGuard implements CanActivate {
  constructor(private authService: UserService, private router: Router) { }
 async canActivate(): Promise<boolean> {
   try {
    const res = await this.authService.getProfileData();
    if (res.user) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
   } catch (error) {
    this.router.navigate(['/login']);
    return false;
   }
  }
}