import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunGameComponent } from './fun-game.component';

const routes: Routes = [
  { path: '', component: FunGameComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunGameRoutingModule { }
