import { Injectable } from '@angular/core';
import { Author } from './author';
import { AUTHORS } from './mock-authors';
import { Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  getAuthors(): Observable <Author[]> {
    return of(AUTHORS);
  }

  constructor() { }
}
