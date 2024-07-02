import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProjectsNewDialogFmComponent } from '../../molecules/projects-new-dialog-fm/projects-new-dialog-fm.component';

@Component({
  selector: 'app-projects-new-button-fa',
  templateUrl: './projects-new-button-fa.component.html',
  styleUrls: ['./projects-new-button-fa.component.scss']
})
export class ProjectsNewButtonFaComponent {

  dialogRef!: MatDialogRef<ProjectsNewDialogFmComponent>;

  constructor(private readonly dialog: MatDialog) { }

  openDialog(): void {
    this.dialogRef = this.dialog.open(ProjectsNewDialogFmComponent);
    this.dialogRef.afterClosed().subscribe(() => 
      console.log('The dialog was closed')
    );
  }
}
