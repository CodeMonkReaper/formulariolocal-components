import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Regcl4Page } from './regcl4.page';

const routes: Routes = [
  {
    path: '',
    component: Regcl4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Regcl4PageRoutingModule {}
