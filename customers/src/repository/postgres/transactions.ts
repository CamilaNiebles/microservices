import { Repository } from 'typeorm';

export class DatabaseTransactions<T> {
  private _repository: Repository<T>;
  constructor(protected repository: Repository<T>) {
    this._repository = repository;
  }

  async create(entity) {
    return this._repository.save(entity);
  }
}
