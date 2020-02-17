import { Model } from 'sequelize';

export class DefaultModel extends Model {
  public id!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static init(sequelize, DataTypes): Model<DefaultModel> {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(128),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'default',
      }
    );
  }
}
