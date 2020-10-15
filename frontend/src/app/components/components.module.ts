import { NgModule } from '@angular/core';
import { WorkoutCardComponent } from './workout-card/workout-card.component';
import { MaterialModule } from '@app/shared/material.module';
import { CommonModule } from '@angular/common';
import { RecentTableComponent } from './recent-table/recent-table.component';
import { NewsFeedCardComponent } from './news-feed-card/news-feed-card.component';

@NgModule({
  declarations: [
    WorkoutCardComponent,
    RecentTableComponent,
    NewsFeedCardComponent,
  ],
  imports: [MaterialModule, CommonModule],
  exports: [WorkoutCardComponent, RecentTableComponent, NewsFeedCardComponent],
})
export class ComponentsModule {}
