const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { HASH_KEY, KEY } = process.env;

const generateNewToken = (payload) =>
  jwt.sign(payload, KEY, {expiresIn: "72h"});

module.exports.usersController = {

    signUp: async (req, res) => {
        try {
            const { name, login, password, avatar_URI, telegram_URI } = req.body;

            if (!login)
                return res.status(404).json({ error: "Необходимо указать логин" });
              else if (!password)
                  return res.status(404).json({ error: "Необходимо указать пароль" });

            const candidate = await User.findOne({ login });
            if (candidate)
                return res.status(404).json({error: "Пользователь с таким логином уже существует! Придумайте другой логин"});

            const hashedPassword = bcrypt.hashSync(password, Number(HASH_KEY));
            const newUser = { name, login, password: hashedPassword, avatar_URI, telegram_URI };

            await User.create(newUser);

            return res.status(200).json({ success: "Пользователь успешно зарегистрирован!" });
        } catch (e) {
            return res.status(400).json({ error: "Упс, что-то пошло не так..." + e });
        }
      },

    signIn: async (req, res) => {
        try {
            const { login, password } = req.body;

            if (!login || !password)
                return res.status(404).json({error: "Поля ввода не могут быть пустыми!"});

            const candidate = await User.findOne({login});
            if (!candidate)
                return res.status(404).json({error: "Пользователь с такими данными не существует"});;

            const isPasswordValid = bcrypt.compareSync(password, candidate.password);
            if (!isPasswordValid)
                return res.status(404).json({error: "Пользователь с такими данными не существует"});;

            const { name, id, avatar_URI, telegram_URI, } = candidate;
            const token = generateNewToken({ name, id, avatar_URI, telegram_URI });

            const expires = new Date(Date.now() + 3600000).toUTCString();

            return res.json({ success: "Вы успешно авторизовались!", token, expires});
        } catch (e) {
            return res.status(400).json({ error: "Ошибка при авторизации" + e});
        }
    }
};
