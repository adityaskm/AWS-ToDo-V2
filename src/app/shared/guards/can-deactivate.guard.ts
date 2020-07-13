import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CommonObjectsService } from '../services/common-objects.service';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<unknown> {
  constructor(private commonObjects: CommonObjectsService) {}

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.commonObjects.apiCalls > 0;
  }
}
