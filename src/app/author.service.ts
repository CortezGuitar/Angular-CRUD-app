import { Injectable } from '@angular/core';
import { Author } from './author';
import { Book } from './book';

import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private authorsUrl = 'api/authors';
  private booksUrl = 'api/books';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable <Author[]> {
    return this.http.get<Author[]>(this.authorsUrl)
    .pipe(
      catchError(this.handleError('getAuthors', []))
    );
  }
  getBooks(): Observable <Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
    .pipe(
      catchError(this.handleError('getBooks', []))
    );
  }

  getAuthor(id: number): Observable<Author> {
    const url = `${this.authorsUrl}/${id}`;
    return this.http.get<Author>(url).pipe(
      catchError(this.handleError<Author>(`getAuthor id=${id}`))
    );
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      catchError(this.handleError<Book>(`getBook id=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  updateAuthor(author: Author): Observable<any> {
    return this.http.put(this.authorsUrl, author, httpOptions).pipe(
      catchError(this.handleError<any>('updateAuthor'))
    );
  }

  addAuthor (author: Author): Observable<Author> {
    return this.http.post<Author>(this.authorsUrl, author, httpOptions).pipe(
      catchError(this.handleError<Author>('addAuthor'))
    );
  }
  deleteAuthor (author: Author | number): Observable<Author> {
    const id = typeof author === 'number' ? author : author.id;
    const url = `${this.authorsUrl}/${id}`;

    return this.http.delete<Author>(url, httpOptions).pipe(
      catchError(this.handleError<Author>('deleteAuthor'))
    );
  }
  addBook (book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, httpOptions).pipe(
      catchError(this.handleError<Book>('addBook'))
    );
  }
  deleteBook (book: Book | number): Observable<Book> {
    const id = typeof book === 'number' ? book : book.id;
    const url = `${this.booksUrl}/${id}`;

    return this.http.delete<Book>(url, httpOptions).pipe(
      catchError(this.handleError<Book>('deleteBook'))
    );
  }
  updateBook(book: Book): Observable<any> {
    return this.http.put(this.booksUrl, book, httpOptions).pipe(
      catchError(this.handleError<any>('updateBook'))
    );
  }
  searchBooks(term: string): Observable<Book[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Book[]>(`${this.booksUrl}/?title=${term}`).pipe(
      catchError(this.handleError<Book[]>('searchBooks', []))
    );
  }

}
