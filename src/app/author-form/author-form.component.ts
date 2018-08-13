import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Author } from '../author';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AuthorService } from '../author.service';


@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent   {

  authorForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    patronymic: [''],
    dob: ['', Validators.required],
  });


constructor(private fb: FormBuilder,
  private authorService: AuthorService,
  private route: ActivatedRoute,
  private location: Location
) { }

newAuthor: Author;

onSubmit() {
  this.newAuthor = this.authorForm.value;
  this.authorService.addAuthor(this.newAuthor)
    .subscribe(() => this.goBack());
}

goBack(): void {
  this.location.back();
}
}
