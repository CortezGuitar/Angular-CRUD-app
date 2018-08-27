import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [{id: 1, title: 'Man and Superman', pages: '333', genre: 'classic', author: 'Shaw'},
    {id: 2, title: 'The Chronicles of Amber', pages: '888', genre: 'scifi', author: 'Zelazny'},
    {id: 3, title: 'The Lord of the Rings', pages: '999', genre: 'scifi', author: 'Tolkien'},
    {id: 4, title: 'Война и мир', pages: '999', genre: 'classic', author: 'Толстой'},
    {id: 5, title: 'Мастер и Маргарита', pages: '777', genre: 'classic', author: 'Булгаков'},
    {id: 6, title: 'Палата № 6', pages: '555', genre: 'classic', author: 'Чехов'}];

    const authors = [
  {id: 1, firstname: 'George Bernard', patronymic: '', lastname: 'Shaw', dob: '1856-07-26',
  booklist: books},
  {id: 2, firstname: 'Roger', patronymic: '', lastname: 'Zelazny', dob: '1937-05-13',
  booklist: books},
  {id: 3, firstname: 'John', patronymic: 'Ronald Reuel', lastname: 'Tolkien', dob: '1892-01-03',
  booklist: books},
  {id: 4, firstname: 'Лев', patronymic: 'Николаевич', lastname: 'Толстой', dob: '1828-09-09',
  booklist: books},
  {id: 5, firstname: 'Михаил', patronymic: 'Афанасьевич', lastname: 'Булгаков', dob: '1891-05-15',
  booklist: books},
  {id: 6, firstname: 'Антон', patronymic: 'Павлович', lastname: 'Чехов', dob: '1860-01-29',
  booklist: books},
    ];

    return {authors, books};
  }
}
