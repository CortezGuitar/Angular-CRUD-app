import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../author';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @Input() author: Author;


  constructor() { }

  ngOnInit() {
  }

}
