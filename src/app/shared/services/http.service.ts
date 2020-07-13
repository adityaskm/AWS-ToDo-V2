import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonObjectsService } from './common-objects.service';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private commonObjects: CommonObjectsService
  ) {}

  post<T>(url: string, postparams: any, includeToken = true) {
    return this.http.post<T>(environment.apiUrl + url, postparams);
  }

  get<T>(url: string, includeToken = true) {
    return this.http.get<T>(environment.apiUrl + url);
  }

  delete<T>(url: string, includeToken = true) {
    return this.http.delete<T>(environment.apiUrl + url);
  }

  commonHTTPHandler<T>(apiAction: Observable<T>) {
    this.commonObjects.apiCalls++;
    return apiAction.pipe(
      tap(
        () => this.commonObjects.apiCalls--,
        () => this.commonObjects.apiCalls--
      )
    );
  }
}
