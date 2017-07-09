import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule, MdButtonModule, MdRadioModule, MdCheckboxModule, MdInputModule, MdMenuModule, MdSidenavModule, MdCardModule} from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import 'hammerjs';
import 'chart.js/src/chart.js';
import 'animejs';

import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DragAndDropListComponent } from './drag-and-drop-list/drag-and-drop-list.component';
import { ChartsComponent } from './charts/charts.component';
import { BouncingBallComponent } from './bouncing-ball/bouncing-ball.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

import { DragAndDropListService } from './drag-and-drop-list-service/drag-and-drop-list.service';
import { EditListItemComponent } from './edit-list-item/edit-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    DragAndDropListComponent,
    ChartsComponent,
    BouncingBallComponent,
    HomeComponent,
    EditListItemComponent,
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
  providers: [DragulaService, DragAndDropListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
