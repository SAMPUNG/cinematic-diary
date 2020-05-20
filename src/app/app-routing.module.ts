import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditorComponent } from './editor/editor.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';


const routes: Routes = [
  {
    component: HeaderNavComponent,
    path: ''
  }, {
    component: EditorComponent,
    path: 'edit'
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
