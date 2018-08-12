import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { AddAuthorComponent } from './add-author/add-author.component';

const routes: Routes = [
  { path: 'authors', component: AuthorsComponent },
  { path: '', redirectTo: '/authors', pathMatch: 'full'},
  { path: 'books/:id', component: BooksComponent },
  { path: 'addauthor', component: AddAuthorComponent }

];


@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
