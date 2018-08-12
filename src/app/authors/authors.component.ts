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

  getAuthors(): void {
    this.authorService.getAuthors()
      .subscribe(authors => this.authors = authors);
  }
  add(lastname: string): void {
    lastname = lastname.trim();
    if (!lastname) { return; }
    this.authorService.addAuthor({ lastname } as Author)
      .subscribe(author => {
        this.authors.push(author);
      });
  }
  delete(author: Author): void {
    this.authors = this.authors.filter(a => a !== author);
    this.authorService.deleteAuthor(author).subscribe();
  }
}
