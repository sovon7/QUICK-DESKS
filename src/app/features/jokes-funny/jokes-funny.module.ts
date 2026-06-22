import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesFunnyRoutingModule } from './jokes-funny-routing.module';
import { JokesFunnyComponent } from './jokes-funny.component';

@NgModule({
  declarations: [JokesFunnyComponent],
  imports: [CommonModule, JokesFunnyRoutingModule]
})
export class JokesFunnyModule { }
