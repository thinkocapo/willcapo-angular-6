import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { HomeComponent } from './home.component';
import { ResumeComponent } from '../resume/resume.component';
import { Shell } from '@app/shell/shell.service';
import { TravelComponent } from '@app/travel/travel.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'resume', component: ResumeComponent }, // data: { title: extract('Resume') } } // updates browser tab title
    { path: 'travel', component: TravelComponent }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
