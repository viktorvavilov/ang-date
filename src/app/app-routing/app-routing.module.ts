import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateComponent } from '../components/date.component/date.component'
import { ListComponent } from '../components/list.component/list.component'
import { AboutComponent } from '../components/about.component/about.component'

const routes: Routes = [
  {
    path: 'dates',
    component: ListComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
      path: '',
      component: DateComponent,
  },
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
