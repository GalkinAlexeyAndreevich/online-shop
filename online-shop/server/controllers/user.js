import { ApiError } from "../error/apiError.js";
import bcrypt from "bcrypt"; // Хэширование паролей
import Jwt from "jsonwebtoken";
import { User, Basket } from "../models/models.js";

const generateJwt = (id, email, role) => {
    return Jwt.sign(
        { id: id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: "24h" } // Скколько дейтсвует токен
    );
};

export const registration = async (req, res, next) => {
    const { email, password, role } = req.body;
    if (!email && !password) {
        return next(ApiError.badRequest("Некоректный email или password"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
        return next(
            ApiError.badRequest("Пользователь с таким email уже существует")
        );
    }
    const hashPassword = await bcrypt.hash(password, 5); // 5 - сколько раз хэшируем
    const user = await User.create({ email, role, password: hashPassword });
    const basket = await Basket.create({ userId: user.id });
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
};

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
        return next(ApiError.internal("Пользователь не найден"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
        return next(ApiError.internal("Указан неверный пароль"));
    }
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
};

export const check = async (req, res, next) => {
    const token = generateJwt(req.user.id, req.user.email,req.user.role)
    return res.json({token})
};
