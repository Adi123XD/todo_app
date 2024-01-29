import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { deleteTask, newTask, showTask, updateTask } from "../controllers/task.js";
const taskrouter = express.Router();
taskrouter.post("/new", isAuthenticated, newTask);
taskrouter.get("/mytask", isAuthenticated, showTask);
taskrouter.route('/:id').put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask)
export default taskrouter;
