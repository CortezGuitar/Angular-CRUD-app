import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [{id: 1, name: 'Garmon', pages: 'foo', genre: 'foo', author: 'foo'},
    {id: 2, name: 'Pesnya', pages: '888', genre: 'foo', author: 'foo2'},
    {id: 3, name: 'Truba', pages: '888', genre: 'foo', author: 'Шоу'}];

    const authors = [
  {id: 1, firstname: 'Джордж Бернард', patronymic: 'Иванович', lastname: 'foo', dob: '26.07.1856',
  booklist: books},
  {id: 2, firstname: 'Джордж Бернард', patronymic: 'Иванович', lastname: 'foo2', dob: '26.07.1856',
  booklist: books},
  {id: 3, firstname: 'Джордж Бернард', patronymic: 'Иванович', lastname: 'Шоу', dob: '26.07.1856',
  booklist: books},
    ];

    return {authors};
  }
}
