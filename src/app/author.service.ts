import { Injectable } from '@angular/core';
import { Author } from './author';
import { AUTHORS } from './mock-authors';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  getAuthors(): Author[] {
    return AUTHORS;
  }

  constructor() { }
}
