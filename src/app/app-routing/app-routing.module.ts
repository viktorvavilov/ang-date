import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateComponent } from '../components/date.component/date.component'
import { ListComponent } from '../components/list.component/list.component'
// import { AboutComponent } from '../components/about.component/about.component'
import { ErrorPageComponent } from '../components/error.component/error.component'

const routes: Routes = [
  {
    path: '',
    component: DateComponent,
    pathMatch: 'full'
  },
  {
    path: 'dates',
    component: ListComponent,
  },
  // {
  //   path: 'about',
  //   component: AboutComponent,
  // },
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
