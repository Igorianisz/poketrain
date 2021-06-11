import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeCardRoutingModule } from './poke-card-routing.module';
import { PokeCardComponent } from './poke-card.component';


@NgModule({
  declarations: [
    PokeCardComponent
  ],
  imports: [
    CommonModule,
    PokeCardRoutingModule
  ],
  exports: [PokeCardComponent]
})
export class PokeCardModule { }
