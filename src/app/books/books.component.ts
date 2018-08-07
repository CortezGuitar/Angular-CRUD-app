import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Author } from '../author';
import { Book } from '../book';
import { BookService } from '../book.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnChanges {
  @Input() author: Author;


  books: Book[];


  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line:forin
    // for (const propName in changes) {
    //   const change = changes[propName];
    //   const curVal  = JSON.stringify(change.currentValue);
    //   const prevVal = JSON.stringify(change.previousValue);

    //    console.log(curVal);
    //    console.log(prevVal);
    // }
 }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
      }


}
