import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CoursesComponent} from './courses/courses.component';
import {CoursesRoutingModule} from './courses-routing.module';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, CoursesRoutingModule]
})
export class CoursesModule { }
