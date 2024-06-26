import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-my-projects-m-new-project-dialog',
  templateUrl: './my-projects-m-new-project-dialog.component.html',
  styleUrls: ['./my-projects-m-new-project-dialog.component.scss']
})
export class MyProjectsMNewProjectDialog {

  constructor(private readonly dialogRef: MatDialogRef<any>) {}

  close(): void {
    this.dialogRef.close();
  }
}
