import Jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    console.log(req.method);
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
        console.log(token);
        const decoded = Jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next(); // переходим к следующему middleware
    } catch (e) {
        res.status(401).json({ message: e });
    }
};
