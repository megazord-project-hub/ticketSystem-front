import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MyProjectsMNewProjectDialog } from '../../molecules/my-projects-m-new-project-dialog/my-projects-m-new-project-dialog.component';

@Component({
  selector: 'app-my-projects-a-new-project-button',
  templateUrl: './my-projects-a-new-project-button.component.html',
  styleUrls: ['./my-projects-a-new-project-button.component.scss']
})
export class MyProjectsANewProjectButtonComponent {

  dialogRef!: MatDialogRef<MyProjectsMNewProjectDialog>;

  constructor(private readonly dialog: MatDialog) { }

  openDialog(): void {
    this.dialogRef = this.dialog.open(MyProjectsMNewProjectDialog);
    this.dialogRef.afterClosed().subscribe(() => 
      console.log('The dialog was closed')
    );
  }
}
