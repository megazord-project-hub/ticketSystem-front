import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-projects-new-dialog-fm',
  templateUrl: './projects-new-dialog-fm.component.html',
  styleUrls: ['./projects-new-dialog-fm.component.scss']
})
export class ProjectsNewDialogFmComponent {

  constructor(private readonly dialogRef: MatDialogRef<any>) {}

  close(): void {
    this.dialogRef.close();
  }
}
