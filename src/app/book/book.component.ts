import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { AuthorService } from '../author.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as _ from 'lodash';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;

  books: Book[];


  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private location: Location
  ) { }


  ngOnInit() {
    this.getBook();
  }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.authorService.getBook(id)
      .subscribe(book => this.book = book);
  }

  goBack(): void {
    this.location.back();
  }
}
