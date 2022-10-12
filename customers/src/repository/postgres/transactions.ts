import { Repository } from 'typeorm';
import { IPostgresTransactions } from './transactions.definition';

export class DatabaseTransactions<T> implements IPostgresTransactions<T> {
  private _repository: Repository<T>;
  constructor(protected repository: Repository<T>) {
    this._repository = repository;
  }

  async create(entity: T) {
    return this._repository.save(entity);
  }

  async getById(id: string) {}

  async getAll() {}
}
