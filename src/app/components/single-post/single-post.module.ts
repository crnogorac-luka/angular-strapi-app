import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SinglePostComponent } from './single-post.component';

@NgModule({
  declarations: [SinglePostComponent],
  entryComponents: [SinglePostComponent],
  imports: [CommonModule, MatCardModule],
  exports: [MatCardModule, SinglePostComponent],
})
export class SinglePostModule {}
