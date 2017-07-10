import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule, MdButtonModule, MdRadioModule, MdCheckboxModule, MdInputModule, MdMenuModule, MdSidenavModule, MdCardModule} from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import 'chart.js/src/chart.js';
import 'velocity-animate/velocity.js';

import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { BouncingBallComponent } from './bouncing-ball/bouncing-ball.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

import { DragulaListComponent } from './dragula-list/dragula-list.component';
import { DragulaListEditComponent } from './dragula-list-edit/dragula-list-edit.component';
import { DragulaListService } from './dragula-list-service/dragula-list.service';


@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    BouncingBallComponent,
    HomeComponent,
    DragulaListComponent,
    DragulaListEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule,
    MdRadioModule,
    MdCheckboxModule,
    MdInputModule,
    MdMenuModule,
    MdSidenavModule,
    MdCardModule,
    DragulaModule,
    ChartsModule
  ],
  providers: [DragulaService, DragulaListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
