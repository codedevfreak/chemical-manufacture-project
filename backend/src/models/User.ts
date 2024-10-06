import { Model, DataTypes } from 'sequelize';
import sequelize from '../config';

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'users',
});

export default User;
