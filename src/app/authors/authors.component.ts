import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { AuthorService } from '../author.service';
import { BookService } from '../book.service';
import { Book } from '../book';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: Author[];

  selectedAuthor: Author;

  books: Book[];


  // selAuthorBooklist: any;

  // booklistParsed: any;

  // lastnameParsed: string;

  // authorLastname: any;

  // finalList: any;

  constructor(private authorService: AuthorService,
     private bookService: BookService) { }

  ngOnInit() {
    this.getAuthors();
    this.getBooks();
  }

  onSelect(author: Author): void {
    this.selectedAuthor = author;
    // this.authorLastname = JSON.stringify(this.selectedAuthor.lastname);
    // this.lastnameParsed = JSON.parse(this.authorLastname);
    // console.log( this.lastnameParsed);

    // this.selAuthorBooklist = JSON.stringify(this.selectedAuthor.booklist);
    // this.booklistParsed = JSON.parse(this.selAuthorBooklist);
    // // this.selAuthorBooklist = this.booklistParsed.filter(this.filterByAuthor);
    // console.log( this.booklistParsed);

    // tslint:disable-next-line:prefer-const
    for (let item of this.books) {
      // console.log(item);
      if (item.author === this.selectedAuthor.lastname) {
        this.selectedAuthor.booklist = [item];
        //  this.selectedAuthor.booklist.push(item);
        console.log(item);
      }
    }
  }


  getAuthors(): void {
    this.authorService.getAuthors()
      .subscribe(authors => this.authors = authors);
  }
  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
      }
  cleanBooks(): void {
    this.selectedAuthor.booklist = this.books;
  }

}
