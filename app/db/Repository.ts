import { Models } from '../models';
import { DBConnection } from './DBConnection';

export abstract class Repository {
  protected models: Models;

  constructor() {
    this.models = Models.init(DBConnection.connect());
  }
}
