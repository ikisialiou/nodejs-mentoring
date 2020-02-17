import { Repository } from '../db/Repository';

export class DefaultRepository extends Repository {
  findAll() {
    return this.models.default.findAll();
  }
}
