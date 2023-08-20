import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Regcl4PageRoutingModule } from './regcl4-routing.module';

import { Regcl4Page } from './regcl4.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Regcl4PageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [Regcl4Page]
})
export class Regcl4PageModule {}
