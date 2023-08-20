import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Logincl4PageRoutingModule } from './logincl4-routing.module';

import { Logincl4Page } from './logincl4.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Logincl4PageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [Logincl4Page]
})
export class Logincl4PageModule {}
