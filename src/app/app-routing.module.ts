import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book/book-list/book-list.component';
import {BookDetailComponent} from './book/book-detail/book-detail.component';
import {BookCreateComponent} from './book/book-create/book-create.component';
import {BookEditComponent} from './book/book-edit/book-edit.component';
import {BookDeleteComponent} from './book/book-delete/book-delete.component';


const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
  },
  {
    path: 'detail/:id',
    component: BookDetailComponent,
  },
  {
    path: 'create',
    component: BookCreateComponent,
  },
  {
    path: 'edit/:id',
    component: BookEditComponent,
  },
  {
    path: 'delete/:id',
    component: BookDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
