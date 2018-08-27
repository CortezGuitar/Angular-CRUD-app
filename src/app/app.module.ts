import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './in-memory-data.service';
import { AuthorFormComponent } from './author-form/author-form.component';
import { DetailsComponent } from './details/details.component';
import { BookFormComponent } from './book-form/book-form.component';
import { DetailsBookComponent } from './details-book/details-book.component';
import { DataTableModule } from 'angular-6-datatable';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookComponent } from './book/book.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    BooksComponent,
    AuthorFormComponent,
    DetailsComponent,
    BookFormComponent,
    DetailsBookComponent,
    BookSearchComponent,
    BookComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    DataTableModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
