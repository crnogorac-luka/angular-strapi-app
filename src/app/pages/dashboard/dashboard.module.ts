import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SinglePostModule } from 'src/app/components/single-post/single-post.module';

@NgModule({
  declarations: [DashboardComponent],
  entryComponents: [DashboardComponent],
  imports: [CommonModule, SinglePostModule],
  exports: [SinglePostModule],
})
export class DashboardModule {}
