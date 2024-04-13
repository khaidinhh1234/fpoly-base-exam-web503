import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { vilidatelogin, vilidateregister } from "../schema.js/Auth.js";
export const login = async (req, res) => {
  try {
    const vali = await vilidatelogin.validate(req.body);
    const { email, password } = vali;
    const user = await User.findOne({ email });
    if (user) {
      const match = bcrypt.compare(password, user.password);
      if (match) {
        // const user = await User.create(data);
        const token = jwt.sign({ user: user }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.status(200).json({ token, message: "đăng nhập thành công" });
      }
      throw new Error("password sai nhes ");
    }

    // cons
    //     const hash =
    //     const data = {
    //       email,
    //       password: hash,
    //     };
    throw "user không tồn tại ";
  } catch (error) {
    res.status(500).json(error);
  }
};

export const register = async (req, res) => {
  try {
    const vali = await vilidateregister.validate(req.body);
    const { email, password } = vali;

    const hash = bcrypt.hashSync(password, parseInt(process.env.SAIL_ROUND));
    const data = {
      email,
      password: hash,
    };

    const user = await User.create(data);
    const token = jwt.sign({ user: user }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token, message: "đăng ký thành công" });
  } catch (error) {
    res.status(500).json(error);
  }
};
