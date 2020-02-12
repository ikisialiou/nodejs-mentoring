import { Sequelize } from 'sequelize';

export class DBConnection {
  private static connection: Sequelize;

  public static connect(): Sequelize {
    if (!DBConnection.connection) {
      DBConnection.connection = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USERNAME,
        process.env.DB_PASSWORD,
        {
          host: process.env.DB_HOST,
          dialect: 'postgres',
        }
      );
    }

    return DBConnection.connection;
  }
}
