import express from "express";
const router = express.Router();

import rateLimiter from "express-rate-limit";
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

import {
  register,
  login,
  updateUser,
  resetpassword,
  login_new,
  resetPassword
} from "../controllers/authController.js";

import authenticateUser from "../middleware/auth.js";

router.route("/login").post(apiLimiter, login);
router.route("/updateUser").patch(authenticateUser, updateUser);

router.route("/resetpassword/:resetToken").put(resetpassword);

router.route("/testLogin").post(login_new);
router.route("/reset-password").post(resetPassword);

export default router;
