import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { IUser, ITask, makeTask, IStateItem } from '@/interfaces';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tasks } from '@/models/tasks';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.scss'],
})
export class EditTaskDialogComponent implements OnChanges {
  @Input() public dialog = false;
  @Input() public users: IUser[] = [];
  @Input() public task: ITask = makeTask({});
  @Output() public closeEditDialog: EventEmitter<any> = new EventEmitter();
  @Output() public reloadList: EventEmitter<any> = new EventEmitter();
  public states: IStateItem[] = [
    {
      value: 'CREATED',
      text: 'Created',
    },
    {
      value: 'ASSIGNED',
      text: 'Assigned',
    },
    {
      value: 'IN_PROGRESS',
      text: 'In Progress',
    },
    {
      value: 'COMPLETED',
      text: 'Completed',
    },
  ];
  public form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: '',
      description: '',
      assignedTo: '',
      state: '',
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.task && changes.task.currentValue) {
      this.form.patchValue(changes.task.currentValue);
    }
  }

  async edit() {
    await Tasks.update(this.task._id, this.form.value);
    this.reloadList.emit();
    this.closeEditDialog.emit();
  }

  cancel() {
    this.closeEditDialog.emit();
  }
}
