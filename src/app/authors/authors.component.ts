import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { AuthorService } from '../author.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: Author[];

  public data: any;

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.getAuthors();
    this.data = this.authors;
  }

  getAuthors(): void {
    this.authorService.getAuthors()
      .subscribe(authors => this.authors = authors);
  }

  delete(author: Author): void {
    this.authors = this.authors.filter(a => a !== author);
    this.authorService.deleteAuthor(author).subscribe();
  }
}
