import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { HeaderModule } from '../header/header.module';
import { PokeCardModule } from '../poke-card/poke-card.module';


@NgModule({
  declarations: [
    PokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    HeaderModule,
    PokeCardModule
  ]
})
export class PokemonModule { }
