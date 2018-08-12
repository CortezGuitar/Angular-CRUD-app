import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Author } from '../author';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  model = new Author(1, 'Dr IQ', 'lox', '1900.08.12');

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
  }

  newAuthor() {
    this.model = new Author(2, '', '', '');
  }

}
