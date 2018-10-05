import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component/app.component';
import { HeaderComponent } from './components/header.component/header.component';
import { FooterComponent } from './components/footer.component/footer.component';
import { LogoComponent } from './components/logo.component/logo.component';
import { CoursesComponent } from './components/courses.component/courses.component';
import { CourseComponent } from './components/course.component/course.component';
import { ToolboxComponent } from './components/toolbox.component/toolbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CoursesComponent,
    CourseComponent,
    ToolboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
