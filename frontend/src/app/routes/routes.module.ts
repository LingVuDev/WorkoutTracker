import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@app/shared/material.module';
import { ComponentsModule } from '@components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowseComponent } from './browse/browse.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'browse', component: BrowseComponent },
  { path: 'history', component: BrowseComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  declarations: [
    DashboardComponent,
    BrowseComponent,
    ProfileComponent,
    HistoryComponent,
  ],
  imports: [RouterModule.forRoot(routes), MaterialModule, ComponentsModule],
  exports: [RouterModule],
})
export class RoutesModule {}
