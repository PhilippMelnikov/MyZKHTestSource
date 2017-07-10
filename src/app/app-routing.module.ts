import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { DragulaListComponent } from './dragula-list/dragula-list.component';
import { ChartsComponent } from './charts/charts.component';
import { BouncingBallComponent } from './bouncing-ball/bouncing-ball.component';
import { DragulaListEditComponent } from './dragula-list-edit/dragula-list-edit.component';


const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'dragula-list', component: DragulaListComponent},
{path: 'dragula-list/edit/:id', component: DragulaListEditComponent},
{path: 'charts', component: ChartsComponent},
{path: 'bouncing-ball', component: BouncingBallComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
