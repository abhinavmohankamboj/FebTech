// routes/route.js
import { Router } from "express";
import { Register, Login, cart } from "../controllers/user.js";
import { authMiddleware } from "../middleware/auth.js";
import multer from "multer";

// use memory storage to avoid writing files to disk; controller uploads from buffer
const storage = multer.memoryStorage();
const upload = multer({ storage });

const userRouter = Router();

// Public routes
// userRouter.post("/register", Register);
userRouter.post("/login", Login);
userRouter.post("/signup", upload.single("avatar"), Register);
userRouter.post("/token",authMiddleware,cart )


export default userRouter;

