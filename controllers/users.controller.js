const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {get} = require("mongoose");

const { HASH_KEY, KEY } = process.env;

const generateNewToken = (payload) =>
  jwt.sign(payload, KEY, { expiresIn: "72h" });

module.exports.usersController = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {
      res.json(e);
    }
  },

  signUp: async (req, res) => {
    try {
      const { name, login, password, avatar_URI, telegram_URI } = req.body;

      const getStatus = (status, message, state = "error") => res.status(status).json({[state]: message});

      if (!login)
        return getStatus(404, "Необходимо указать логин");
      else if (!password)
        return getStatus(404, "Необходимо указать пароль");

      const candidate = await User.findOne({ login });
      if (candidate)
        return getStatus(404, "Пользователь с таким логином уже существует! Придумайте другой логин");

      if (login.length < 3)
        return getStatus(404, "Мин. допустимая длина логина - 3 символа");
      if (login.length > 13)
        return getStatus(404, "Макс. допустимая длина логина - 13 символов");

      if (password.length > 18)
        return getStatus(404, "Макс. допустимая длина пароля - 18 символов")

      const hashedPassword = bcrypt.hashSync(password, Number(HASH_KEY));
      const newUser = {
        name,
        login,
        password: hashedPassword,
        avatar_URI,
        telegram_URI,
      };

      await User.create(newUser);

      return getStatus(200, "Пользователь успешно зарегистрирован!", "success");
    } catch (e) {
      return res.status(400).json({ error: "Упс, что-то пошло не так..." + e });
    }
  },

  signIn: async (req, res) => {
    try {
      const { login, password } = req.body;

      const getStatus = (status, message, state = "error") => res.status(status).json({[state]: message});

      if (!login || !password)
        return getStatus(404, "Поля ввода не могут быть пустыми!");

      const candidate = await User.findOne({ login });
      if (!candidate)
        return getStatus(404, "Пользователь с такими данными не существует");

      const isPasswordValid = bcrypt.compareSync(password, candidate.password);
      if (!isPasswordValid)
        return getStatus(404, "Пользователь с такими данными не существует");

      const { name, id, avatar_URI, telegram_URI } = candidate;
      const token = generateNewToken({ name, login, id, avatar_URI, telegram_URI });

      const expires = new Date(Date.now() + 3600000).toUTCString();

      return res.status(200).json({success: "Вы успешно авторизовались!", token, expires });
    } catch (e) {
      return res.status(400).json({ error: "Ошибка при авторизации" + e });
    }
  },
};
