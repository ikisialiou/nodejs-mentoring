import { Model, Sequelize } from 'sequelize';
import { DefaultModel } from './DefaultModel';

export interface Models {
  default: Model<DefaultModel>;
}

export class Models {
  static init(db: Sequelize): Models {
    return {
      default: DefaultModel.init(db, Sequelize),
    };
  }
}
