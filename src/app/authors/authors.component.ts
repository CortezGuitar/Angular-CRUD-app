import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { AuthorService } from '../author.service';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: Author[];

  selectedAuthor: Author;


  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.getAuthors();
  }

  onSelect(author: Author): void {
    this.selectedAuthor = author;
  }
  getAuthors(): void {
    this.authors = this.authorService.getAuthors();
  }

}
