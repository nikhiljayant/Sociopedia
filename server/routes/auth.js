import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login); //Changed Router to router

export default router;