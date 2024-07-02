import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundEmptyStateFmComponent } from './components/molecules/not-found-empty-state-fm/not-found-empty-state-fm.component';
import { NotFoundPageFpComponent } from './components/pages/not-found-page-fp/not-found-page-fp.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: NotFoundPageFpComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    NotFoundEmptyStateFmComponent,
    NotFoundPageFpComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NotFoundModule { }