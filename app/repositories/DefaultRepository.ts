import { Repository } from '../db/Repository';
import { DefaultModel } from '../models/DefaultModel';

export class DefaultRepository extends Repository {
  findAll(): Promise<DefaultModel> {
    return this.models.default.findAll();
  }
}
