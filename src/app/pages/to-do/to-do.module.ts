import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AutoResizeModule } from '../../shared/directives/auto-resize/auto-resize.module';
import { ClickOutsideModule } from '../../shared/directives/click-outside/click-outside.module';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

@NgModule({
  declarations: [ToDoComponent, ToDoItemComponent],
  imports: [
    CommonModule,
    ToDoRoutingModule,
    FormsModule,
    MatRadioModule,
    MatIconModule,
    MatRippleModule,
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    AutoResizeModule,
    ClickOutsideModule,
    AmplifyUIAngularModule,
  ],
})
export class ToDoModule {}
