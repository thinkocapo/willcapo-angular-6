import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { HomeComponent } from './home.component';
import { ResumeComponent } from '../resume/resume.component';
import { Shell } from '@app/shell/shell.service';
import { TravelComponent } from '@app/travel/travel.component';
import { CodeComponent } from '@app/code/code.component';
import { BlockchainComponent } from '@app/blockchain/blockchain.component';
import { BooksComponent } from '@app/books/books.component';
import { HealthcareComponent } from '@app/healthcare/healthcare.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'resume', component: ResumeComponent }, // data: { title: extract('Resume') } } // updates browser tab title
    { path: 'travel', component: TravelComponent },
    { path: 'code', component: CodeComponent }

  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
