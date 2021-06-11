import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { HeaderModule } from '../header/header.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    HeaderModule,
    FormsModule
  ]
})
export class ItemsModule { }
