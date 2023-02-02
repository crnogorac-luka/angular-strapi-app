import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SinglePostComponent } from './single-post.component';

@NgModule({
  declarations: [SinglePostComponent],
  entryComponents: [SinglePostComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [MatCardModule, MatButtonModule, SinglePostComponent],
})
export class SinglePostModule {}
