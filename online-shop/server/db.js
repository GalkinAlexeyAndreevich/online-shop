import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    process.env.DB_NAME,  // Название БД
    process.env.DB_USER,  // Пользователь
    process.env.DB_PASSWORD,  // Пароль 
    {
        dialect:'postgres', // Язык бд
        host:process.env.DB_HOST, // Хост бд
        port:process.env.DB_PORT // Порт бд
    }
)