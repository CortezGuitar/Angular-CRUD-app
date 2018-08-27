import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from '../book';

import { AuthorService } from '../author.service';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {
  @Input() book: Book;

  genres: string[] = [
    'classic',
    'detective',
    'scifi',
    'education',
    'forkids',
    'poetry'
  ];

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

  save(): void {
    this.authorService.updateBook(this.book)
      .subscribe(() => this.goBack());
  }
}
