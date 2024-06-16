import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundMEmptyStateComponent } from './components/molecules/not-found-m-empty-state/not-found-m-empty-state.component';
import { NotFoundPLayoutComponent } from './components/pages/not-found-p-layout/not-found-p-layout.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: NotFoundPLayoutComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    NotFoundMEmptyStateComponent,
    NotFoundPLayoutComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NotFoundModule { }