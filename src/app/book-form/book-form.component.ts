import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AuthorService } from '../author.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent   {
  genres: string[] = [
    'classic',
    'detective',
    'scifi',
    'education',
    'forkids',
    'poetry'
  ];

  bookForm = this.fb.group({
    title: ['', Validators.required],
    pages: ['', Validators.required],
    genre: ['', Validators.required],
    author: ['', Validators.required],
  });


constructor(private fb: FormBuilder,
  private authorService: AuthorService,
  private route: ActivatedRoute,
  private location: Location
) { }

newBook: Book;

onSubmit() {
  this.newBook = this.bookForm.value;
  this.authorService.addBook(this.newBook)
    .subscribe(() => this.goBack());
}

goBack(): void {
  this.location.back();
}
}

