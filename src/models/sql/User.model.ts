import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'users',
})
export class User extends Model {

  password!: string;
}