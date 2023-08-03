// Для переключение require на импорт в package.json, добавляем type:module
import express from "express";
import "dotenv/config"; // Нужен для .env файла
import { sequelize } from "./db.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import fileUpload from "express-fileupload";
import { appRouter } from "./routes/index.js";
import { errorHandler } from "./middleware/errorHandling.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5500; // Как вытащить поле из .env файла

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", appRouter);

// Обработка событий, последний Middleware
app.use(errorHandler);

const start = async () => {
    try {
        // Производится подключение к бд и синхронизация в соответствии с написанным кодом в models
        await sequelize.authenticate();
        // await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`server started on port ${PORT} `);
        });
    } catch (e) {
        console.log("Невозможно подключиться к бд", e);
    }
};

start();
