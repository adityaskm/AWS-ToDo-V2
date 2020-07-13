import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Configure Amplify resources */
Amplify.configure(awsconfig);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AmplifyUIAngularModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
