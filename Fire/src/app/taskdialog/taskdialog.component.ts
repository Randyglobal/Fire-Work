import { Component, Inject } from '@angular/core';
import { Task } from '../task/task';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-taskdialog',
  templateUrl: './taskdialog.component.html',
  styleUrls: ['./taskdialog.component.scss']
})
export class TaskdialogComponent {

  title = 'Title'
  Description = 'Description'

  private backupTask: Partial<Task> = { ...this.data.task };

  constructor(
    public dialogRef: MatDialogRef<TaskdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData
  ) {}

  cancel(): void {
    this.data.task.title = this.backupTask.title;
    this.data.task.description = this.backupTask.description;
    this.dialogRef.close(this.data);
  }
}
export interface TaskDialogData {
  task: Partial<Task>;
  enableDelete: boolean;
}
