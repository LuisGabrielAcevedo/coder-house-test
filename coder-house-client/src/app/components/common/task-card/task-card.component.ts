import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask, makeTask } from '@/interfaces';
import * as moment from 'moment';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {
  @Input() task: ITask = makeTask({});
  @Output() editEvent: EventEmitter<ITask> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<ITask> = new EventEmitter();

  editAcction() {
    this.editEvent.emit(this.task);
  }

  deleteAcction() {
    this.deleteEvent.emit(this.task);
  }

  formatDate() {
    return moment(this.task.updatedAt, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]').format(
      'L'
    );
  }

  formatState() {
    return this.task.state.replace('_', ' ');
  }
}
