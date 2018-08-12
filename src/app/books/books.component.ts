import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { Author } from '../author';
import { AuthorService } from '../author.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as _ from 'lodash';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, AfterContentChecked  {
  @Input() author: Author;


  booklist = this.author;

  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private location: Location
  ) { }


  ngOnInit() {
    this.getAuthor();
    this.getBookList();
  }

  ngAfterContentChecked() {
    this.getBookList();
  }


getAuthor(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.authorService.getAuthor(id)
    .subscribe(author => this.author = author);
}
goBack(): void {
  this.location.back();
}
getBookList(): void {
  let fullList = [];
  if (this.author) {
  for (const item of this.author.booklist) {
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
}

