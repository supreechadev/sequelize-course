import cls from 'cls-hooked';
import { Sequelize } from 'sequelize';
import { registerModels } from '../models';

export default class Database {
  constructor(environment, dbConfig) {
    this.environment = environment;
    this.dbConfig = dbConfig;
  }

  async connect() {
    const namespace = cls.createNamespace('transactions-namespace');
    Sequelize.useCLS(namespace);

    const { username, password, host, port, database, dialect } =
      this.dbConfig[this.environment];
    this.connection = new Sequelize({
      username,
      password,
      host,
      port,
      database,
      dialect,
      logging: console.log,
    });

    await this.connection.authenticate({ logging: false });

    console.log('Connection to the database has been established successfully');

    registerModels(this.connection);

    await this.sync();
  }

  async disconnect() {
    await this.connection.close();
  }

  async sync() {
    await this.connection.sync({
      logging: false,
      force: false,
    });

    console.log('Connection synced successfully');
  }
}
