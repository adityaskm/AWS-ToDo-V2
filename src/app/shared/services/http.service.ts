import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonObjectsService } from './common-objects.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private commonObjects: CommonObjectsService
  ) {}

  post<T>(url: string, postparams: any, includeToken = true) {
    return this.http.post<T>(url, postparams);
  }

  get<T>(url: string, includeToken = true) {}

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
