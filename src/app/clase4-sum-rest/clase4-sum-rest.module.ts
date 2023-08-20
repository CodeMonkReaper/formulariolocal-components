import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Clase4SumRestPageRoutingModule } from './clase4-sum-rest-routing.module';

import { Clase4SumRestPage } from './clase4-sum-rest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Clase4SumRestPageRoutingModule
  ],
  declarations: [Clase4SumRestPage]
})
export class Clase4SumRestPageModule {}
