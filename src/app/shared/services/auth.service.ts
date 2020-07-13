import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CommonObjectsService } from './common-objects.service';
import { ROUTES } from '../const/routes.const';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private commonObjects: CommonObjectsService
  ) {}

  logout() {
    window.sessionStorage.clear();
    this.commonObjects.apiCalls = 0;
    this.commonObjects.currentUser = null;
    this.router.navigateByUrl(ROUTES.login);
  }
}
