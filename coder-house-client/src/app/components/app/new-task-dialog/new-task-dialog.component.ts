import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tasks } from '@/models/tasks';

@Component({
  selector: 'app-new-task-dialog',
  templateUrl: './new-task-dialog.component.html',
  styleUrls: ['./new-task-dialog.component.scss'],
})
export class NewTaskDialogComponent {
  @Input() public dialog = false;
  @Output() public closeEditDialog: EventEmitter<any> = new EventEmitter();
  @Output() public reloadList: EventEmitter<any> = new EventEmitter();
  public form: FormGroup;
  public error = '';
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: [null, Validators.required],
      description: null,
    });
  }

  async save() {
    if (this.form.invalid) {
      this.error = 'The title is required';
      return;
    }
    this.error = '';
    await Tasks.save(this.form.value);
    this.reloadList.emit();
    this.form.reset();
    this.closeEditDialog.emit();
  }

  cancel() {
    this.error = '';
    this.form.reset();
    this.closeEditDialog.emit();
  }
}
