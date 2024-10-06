import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://username:password@localhost:5432/mydb');

export default sequelize;
