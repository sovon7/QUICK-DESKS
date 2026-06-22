import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesFunnyComponent } from './jokes-funny.component';

const routes: Routes = [
  { path: '', component: JokesFunnyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokesFunnyRoutingModule { }
