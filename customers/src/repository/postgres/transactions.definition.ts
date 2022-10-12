export interface IPostgresTransactions<T> {
  create(entity: T);
  getById(id: string);
  getAll();
}

export const IPostgresTransactions = Symbol('IPostgresTransactions');
