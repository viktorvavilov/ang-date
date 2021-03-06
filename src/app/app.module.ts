import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './components/app.component/app.component';
import { DateComponent } from './components/date.component/date.component';
import { HeaderComponent } from './components/header.component/header.component';
import { AboutComponent } from './components/about.component/about.component';
import { ListComponent } from './components/list.component/list.component';
import { ListElementComponent } from './components/list-element.component/list-element.component';
import { ErrorPageComponent } from './components/error.component/error.component'

import { StoreService } from './services/store.service';
import { CalculateService } from './services/calculate.service';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    HeaderComponent,
    AboutComponent,
    ListComponent,
    ListElementComponent,
    ErrorPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CalendarModule,
    FormsModule,
    AccordionModule,
    BrowserAnimationsModule,

  ],
  providers: [
    StoreService,
    CalculateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
