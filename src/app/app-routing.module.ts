import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import { DetailsComponent } from './details/details.component';
import { BookFormComponent } from './book-form/book-form.component';
import { DetailsBookComponent } from './details-book/details-book.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  { path: 'authors', component: AuthorsComponent },
  { path: '', redirectTo: '/authors', pathMatch: 'full'},
  { path: 'books/:id', component: BooksComponent },
  { path: 'authorform', component: AuthorFormComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'bookform', component: BookFormComponent },
  { path: 'detailsbook/:id', component: DetailsBookComponent },
  { path: 'book/:id', component: BookComponent }
];


@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
