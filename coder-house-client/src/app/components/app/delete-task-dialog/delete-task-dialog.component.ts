import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tasks } from '@/models/tasks';
import { makeTask, ITask } from '@/interfaces';

@Component({
  selector: 'app-delete-task-dialog',
  templateUrl: './delete-task-dialog.component.html',
  styleUrls: ['./delete-task-dialog.component.scss'],
})
export class DeleteTaskDialogComponent {
  @Input() public dialog = false;
  @Input() public task: ITask = makeTask({});
  @Output() public closeEditDialog: EventEmitter<any> = new EventEmitter();
  @Output() public reloadList: EventEmitter<any> = new EventEmitter();

  async delete() {
    await Tasks.destroy(this.task._id);
    this.reloadList.emit();
    this.closeEditDialog.emit();
  }

  cancel() {
    this.closeEditDialog.emit();
  }
}
