import { user } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/Jwttoken.js";
import cloudinary from "../config/cloudinary.js";

export async function Register(req, res) {
  try {
    // When using multipart/form-data (file upload), form fields are in req.body
    const { FullName, Username, Email, Password } = req.body;

    if (!FullName || !Username || !Email || !Password) {
      return res.status(400).json({
        message: "Please fill all fields",
        error: true,
        success: false,
      });
    }

    const existingUser = await user.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists with this email",
        error: true,
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    // If a file was uploaded (multer memoryStorage), upload buffer to Cloudinary
    let avatarUrl = "";
    // debug: log whether multer received a file
    console.log("[Register] req.file:", !!req.file, req.file && { originalname: req.file.originalname, size: req.file.size });

    if (req.file && req.file.buffer) {
      try {
        // upload via stream to avoid writing temporary files
        const streamUpload = (buffer) =>
          new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream({ folder: "avatars" }, (error, result) => {
              if (result) resolve(result);
              else reject(error);
            });
            stream.end(buffer);
          });

        const result = await streamUpload(req.file.buffer);
        avatarUrl = result.secure_url || "";
        console.log("[Register] uploaded avatarUrl:", avatarUrl);
      } catch (uploadErr) {
        console.error("Cloudinary upload error:", uploadErr);
      }
    }

    const newUser = new user({
      FullName,
      Username,
      Email,
      Password: hashedPassword,
      Avatar: avatarUrl,
    });

    await newUser.save();

    // Return created user info (omit password)
    const { Password: _, ...userData } = newUser.toObject();

    res.status(200).json({
      message: "✅ User registered successfully",
      success: true,
      user: userData,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: true });
  }
}

export async function Login(req, res) {
  try {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
      return res.status(400).json({
        message: "Please provide Email and Password",
      });
    }

    const existingUser = await user.findOne({ Email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(Password, existingUser.Password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // ✅ Generate JWT Token
    const { accessToken, options } = await generateToken(existingUser);

    // Omit password from returned user data
    const { Password: _, ...userData } = existingUser.toObject();

    res
      .cookie("accessToken", accessToken, options)
      .status(200)
      .json({ message: "✅ Login successful", success: true, user: userData });
  } catch (error) {
    console.error("login error",error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
 export function cart(req,res) {
  console.log('this is cart');
  
 }