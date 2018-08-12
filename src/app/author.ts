import { Book } from './book';
export class Author {
  constructor(
  public id: number,
  public firstname: string,
  public lastname: string,
  public dob: string,
  public booklist?: Book[],
  public secondname?: string,
  ) { }
}
