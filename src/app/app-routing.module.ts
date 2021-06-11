import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'pokemon', loadChildren: () => import('./components/pokemon/pokemon.module').then(m => m.PokemonModule) },
  { path: 'header', loadChildren: () => import('./components/header/header.module').then(m => m.HeaderModule) },
  { path: 'items', loadChildren: () => import('./components/items/items.module').then(m => m.ItemsModule) },
  { path: 'pokeCard', loadChildren: () => import('./components/poke-card/poke-card.module').then(m => m.PokeCardModule) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
