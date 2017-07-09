import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { DragAndDropListComponent } from './drag-and-drop-list/drag-and-drop-list.component';
import { ChartsComponent } from './charts/charts.component';
import { BouncingBallComponent } from './bouncing-ball/bouncing-ball.component';
import { EditListItemComponent } from './edit-list-item/edit-list-item.component';


const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'drag-and-drop-list', component: DragAndDropListComponent},
{path: 'edit-list-item/:id/:title', component: EditListItemComponent},
{path: 'charts', component: ChartsComponent},
{path: 'bouncing-ball', component: BouncingBallComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
