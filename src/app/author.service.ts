import { Injectable } from '@angular/core';
import { Author } from './author';

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

  constructor(private http: HttpClient) { }

  getAuthors(): Observable <Author[]> {
    return this.http.get<Author[]>(this.authorsUrl)
    .pipe(
      catchError(this.handleError('getAuthors', []))
    );
  }

  getAuthor(id: number): Observable<Author> {
    const url = `${this.authorsUrl}/${id}`;
    return this.http.get<Author>(url).pipe(
      catchError(this.handleError<Author>(`getAuthor id=${id}`))
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


}
