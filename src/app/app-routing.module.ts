import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {CourseComponent} from './pages/course/course.component';
import {CoursesComponent} from './pages/courses/courses/courses.component';


const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'course', component: CourseComponent},
    {path: 'courses', loadChildren: './pages/courses/courses.module#CoursesModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
