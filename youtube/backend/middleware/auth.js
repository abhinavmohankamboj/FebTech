
import jwt from "jsonwebtoken";
import { user } from "../models/userModel.js";

export async function authMiddleware(req, res, next) {
  try {
    const token = req?.cookies?.accessToken;

    if (!token) {
      return res.status(401).json({
        message: "cookies not provided",
        error: true,
        success: false,
      });
    }

    
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(verifyToken);
    

    if (!verifyToken) {
      return res.status(401).json({
        message: "invalid token",
        error: true,
        success: false,
      });
    }
     
    const User =await user.findById(verifyToken._id)
    req.user = User;
    next(); // go to next route/controller

  } catch (error) {
    console.error("Auth Middleware Error:", error);
    return res.status(403).json({
      message: "Invalid or expired token",
      error: true,
      success: false,
    });
  }
}
