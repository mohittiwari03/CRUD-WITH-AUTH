import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const protect = async (req, res, next) => {
  try {
    //Read token from cookie
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unautherized access. Please login",
      });
    }

    //Verify token
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    //Find user
    const user = await User.findById(decode.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    //Attach user to requet
    req.user = user;

    next();
  } catch (err) {
    console.error(err);

    return res.status(401).json({
      success: false,
      message: "Token is Invalid or Expired",
    });
  }
};
