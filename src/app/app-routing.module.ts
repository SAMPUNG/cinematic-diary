import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditorComponent } from './editor/editor.component';


const routes: Routes = [
  {
    component: EditorComponent,
    path: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
