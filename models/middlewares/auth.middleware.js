const { verify } = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    if (req.method === "OPTIONS") next();

    try {
        const { authorization } = req.headers;
        console.log(req.headers);

        if (!authorization) //Если в req.headers нет ключа authorization
            return res.status(404).json({error: "Пользователь не авторизован"});

        const [type, token] = req.headers.authorization.split(" ");

        const isValidType = (type === "Bearer");
        const isValidToken = await verify(token, process.env.KEY);

        if (!isValidType || !isValidToken) //Если тип токена или сам токен не валидны
            return res.status(404).json({error: "Ошибка! Ваш токен не валиден!"});

        req.user = isValidToken;

        next();

    } catch (e) {
        return res.status(400).json({error: "Пользователь не авторизован" + e});
    }
}