import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [SkeletonComponent, TaskCardComponent, ModalComponent],
  imports: [CommonModule],
  exports: [SkeletonComponent, TaskCardComponent, ModalComponent],
})
export class CommonComponentsModule {}
