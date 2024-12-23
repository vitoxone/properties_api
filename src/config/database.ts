import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/sql/User.model';
import * as dotenv from "dotenv";


dotenv.config();

const sequelize = new Sequelize({
  database: process.env.SQL_DB_NAME,
  username: process.env.SQL_DB_USER,
  password: process.env.SQL_DB_PASS,
  host: process.env.SQL_DB_HOST,
  dialect: 'mysql',
  models: [User], // Modelos registrados
});

export default sequelize;