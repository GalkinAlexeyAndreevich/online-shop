import Jwt from "jsonwebtoken";

export const checkRoleMiddleware = (role) => {
    return (req, res, next) => {
        if (req.method === "OPTIONS") {
            next();
        }
        try {
            // В запросе токена сначало помещают тип токена, потом сам токен
            // Bearer - тип токена
            const token = req.headers.authorization.split(" ")[1];
            if (!token) {
                return res.status(401).json({ message: "Не авторизован" });
            }
            const decoded = Jwt.verify(token, process.env.SECRET_KEY);
            if (decoded.role !== role) {
                return res.status(403).json({ message: "Нет доступа" });
            }
            req.user = decoded;
            next(); // переходим к следующему middleware
        } catch (e) {
            res.status(401).json({ message: "Не авторизован" });
        }
    };
};
