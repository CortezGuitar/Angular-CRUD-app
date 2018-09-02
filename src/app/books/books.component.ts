import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { Author } from '../author';
import { Book } from '../book';
import { AuthorService } from '../author.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as _ from 'lodash';
import { forkJoin, Observable } from 'rxjs';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit  {
  @Input() author: Author;

  books: Book[];

  public data: any;


  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private location: Location
  ) { }


  ngOnInit() {
    forkJoin ([this.getBooks(), this.getAuthor()]).subscribe (res => {
      this.books = res[0];
      this.author = res[1];
      this.getBookList();
    });
    this.data = this.author;
  }

  getBooks(): Observable <Book[]> {
    return this.authorService.getBooks();
  }

  getAuthor(): Observable <Author> {
    const id = +this.route.snapshot.paramMap.get('id');
    return this.authorService.getAuthor(id);
  }
  goBack(): void {
    this.location.back();
  }
  getBookList(): void {
    let fullList = [];
    if (this.author) {
      this.author.booklist = this.books;
    for (const item of this.books) {
      if (_.isEqual(item.author, this.author.lastname)) {
          fullList = fullList.concat(item);
        }
    }
    this.author.booklist = fullList;
    }
  }
  save(): void {
    this.authorService.updateAuthor(this.author)
    .subscribe(() => this.goBack());
  }
  delete(book: Book): void {
    this.books = this.books.filter(b => b !== book);
    this.authorService.deleteBook(book).subscribe();
  }
}

