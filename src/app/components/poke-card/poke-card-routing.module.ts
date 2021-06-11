import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeCardComponent } from './poke-card.component';

const routes: Routes = [{ path: '', component: PokeCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokeCardRoutingModule { }
