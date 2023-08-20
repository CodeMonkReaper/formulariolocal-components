import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Logincl4Page } from './logincl4.page';

const routes: Routes = [
  {
    path: '',
    component: Logincl4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Logincl4PageRoutingModule {}
