import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IterationGoalsComponent } from './components/iteration-goals/iteration-goals.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { TeamLunchComponent } from './components/team-lunch/team-lunch.component';

import { Ng2FlatpickrComponent } from 'ng2-flatpickr/ng2-flatpickr';


@NgModule({
  declarations: [
    Ng2FlatpickrComponent,
    AppComponent,
    SidebarComponent,
    IterationGoalsComponent,
    HeaderComponent,
    CardComponent,
    TeamLunchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
