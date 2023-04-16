import express from "express";
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import { User } from "./models/user.js";
import userRouter from "./routers/user.js"
import {connectDB} from './data/database.js'

const app = express();

config({
    path: "./data/config.env"
})
connectDB();


// using middel ware 

app.use(express.json());
app.use("/users", userRouter);





app.get("/", (req, res) => {
    res.send("hi");
})



const Port = process.env.PORT;
app.listen(Port, () => {
    console.log(`server is running on ${Port}`);
})