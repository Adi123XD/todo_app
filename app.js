import express from "express";
import router from "./routes/user_routes.js";
import taskrouter from "./routes/task_routes.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { handleError } from "./middlewares/error.js";
import cors from 'cors'

//   server created
export const app = express();
config({
    path:"./config.env"
})

// using middleware to accept json data from req
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin:[process.env.FRONTEND_URL],
  methods:["GET","PUT","POST","DELETE"],
  credentials:true
}))
app.use("/api/v1/users",router)
app.use("/api/v1/task",taskrouter)

// default home page route setup
app.get("/", (req, res) => {
  res.send("Nice Working");
});
app.use(handleError)

