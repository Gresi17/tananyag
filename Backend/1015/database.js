import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    "szuperhosok",
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql"
    }
);