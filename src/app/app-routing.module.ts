import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: 'authors', component: AuthorsComponent },
  { path: '', redirectTo: '/authors', pathMatch: 'full'},
  { path: 'books/:id', component: BooksComponent }

];


@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
