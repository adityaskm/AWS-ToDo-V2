import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CommonObjectsService } from '../services/common-objects.service';

@Injectable({
  providedIn: 'root',
})
export class CanActivateGuard implements CanActivate {
  constructor(
    private commonObjects: CommonObjectsService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const canActivate = !!this.commonObjects.currentUser;
    if (!canActivate) {
      this.router.navigateByUrl('/login');
    }
    return canActivate;
  }
}
