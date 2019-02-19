import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {CoursesComponent} from './courses/courses.component';

const routes: Routes = [{path: '', component: CoursesComponent}];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes),
        // CommonModule
    ],
    exports: [RouterModule]
})
export class CoursesRoutingModule {
}
