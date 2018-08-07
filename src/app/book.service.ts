import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooks(): Observable <Book[]> {
    return of(BOOKS);
  }
  constructor() { }
}
