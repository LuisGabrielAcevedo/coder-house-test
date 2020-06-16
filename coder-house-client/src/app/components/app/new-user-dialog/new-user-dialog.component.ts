import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Users } from '@/models/users';

@Component({
  selector: 'app-new-user-dialog',
  templateUrl: './new-user-dialog.component.html',
  styleUrls: ['./new-user-dialog.component.scss'],
})
export class NewUserDialogComponent {
  @Input() public dialog = false;
  @Output() public closeEditDialog: EventEmitter<any> = new EventEmitter();
  @Output() public reloadList: EventEmitter<any> = new EventEmitter();
  public form: FormGroup;
  public error = '';
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
    });
  }

  async save() {
    if (this.form.invalid) {
      this.error = 'Complete all fields';
      return;
    }
    try {
      this.error = '';
      await Users.save(this.form.value);
      this.reloadList.emit();
      this.form.reset();
      this.closeEditDialog.emit();
    } catch (err) {
      this.error = 'User already exists';
    }
  }

  cancel() {
    this.error = '';
    this.form.reset();
    this.closeEditDialog.emit();
  }
}
