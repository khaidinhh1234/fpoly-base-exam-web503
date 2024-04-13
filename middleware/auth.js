import jwt from "jsonwebtoken";
export const verifyToken = async (req, res, next) => {
  try {
    const bearerToken = req.headers["authorization"];
    if (bearerToken != undefined) {
      const token = bearerToken.split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRET);
      return next();
    }
    throw new Error("token is messing");
  } catch (error) {
    res.status(401).json("Bạn không có quyền truy cập ");
  }
};
