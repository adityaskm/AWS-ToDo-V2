import { Injectable } from '@angular/core';
import { SESSION_STORAGE_KEYS } from '../const/storage.const';

@Injectable({
  providedIn: 'root',
})
export class CommonObjectsService {
  constructor() {}

  private _apiCalls = 0;

  public get apiCalls() {
    return this._apiCalls;
  }

  public set apiCalls(value) {
    this._apiCalls = value;
    if (this._apiCalls < 0) {
      console.error('API Calls less than 0');
      this._apiCalls = 0;
    }
  }

  private _currentUser: any;

  public get currentUser(): any {
    return this._currentUser;
  }

  public set currentUser(value: any) {
    this._currentUser = value;
    sessionStorage.setItem(
      SESSION_STORAGE_KEYS.CURRENT_USER,
      this._currentUser
    );
  }
}
