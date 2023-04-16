import express from "express";
import { User } from "../models/user.js";
import { getAllUsers, register, specialFunc, dynamicFunc } from "../controllers/user.js";

const router = express.Router();


router.get("/all", getAllUsers)
router.get("/userid/special", specialFunc)

router.get("/userid/:id", dynamicFunc)


router.post("/new", register)

export default router;