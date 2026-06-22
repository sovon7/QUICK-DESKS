import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunGameRoutingModule } from './fun-game-routing.module';
import { FunGameComponent } from './fun-game.component';

@NgModule({
  declarations: [FunGameComponent],
  imports: [CommonModule, FunGameRoutingModule]
})
export class FunGameModule { }
