import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { AuthorService } from '../author.service';
import { BookService } from '../book.service';
import { Book } from '../book';
import * as _ from 'lodash';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: Author[];

  selectedAuthor: Author;

  books: Book[];

  constructor(private authorService: AuthorService,
     private bookService: BookService) { }

  ngOnInit() {
    this.getAuthors();
    this.getBooks();
  }

  onSelect(author: Author): void {
    this.selectedAuthor = author;
    let fullList = [];
    // tslint:disable-next-line:prefer-const
    for (let item of this.books) {
      if (_.isEqual(item.author, this.selectedAuthor.lastname)) {
          fullList = fullList.concat(item);
        }
    }
    this.selectedAuthor.booklist = fullList;
  }


  getAuthors(): void {
    this.authorService.getAuthors()
      .subscribe(authors => this.authors = authors);
  }
  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
      }

}
