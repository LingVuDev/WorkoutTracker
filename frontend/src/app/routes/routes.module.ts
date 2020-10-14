import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@app/shared/material.module';
import { ComponentsModule } from '@components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [RouterModule.forRoot(routes), MaterialModule, ComponentsModule],
  exports: [RouterModule],
})
export class RoutesModule {}
